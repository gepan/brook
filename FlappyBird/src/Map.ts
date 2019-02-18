class Map extends egret.DisplayObjectContainer {
    private bg1Image: eui.Image;
    private bg2Image: eui.Image;
    private obstacleList: Array<Obstacle> = [];
    private obstacleTimer: number;
    private obstacleIndex: number = 0;
    private brid: Bird;
    private ui: UI;

    private score:number;
    constructor() {
        super();
        this.init();
    }
    public init() {
        this.bg1Image = new eui.Image("sky_png");
        this.bg1Image.width = Data.SceneWidth;
        this.bg1Image.height = Data.SceneHeight;
        this.addChild(this.bg1Image);
        this.bg2Image = new eui.Image("sky_png");
        this.bg2Image.width = Data.SceneWidth;
        this.bg2Image.height = Data.SceneHeight;
        this.bg2Image.x = this.bg1Image.width;
        this.addChild(this.bg2Image);
        this.brid = new Bird();
        this.addChild(this.brid);
        this.brid.changeState();
        this.brid.x = Data.getBirdStartX();
        this.brid.y = Data.getBirdStartY();
        this.ui = new UI();
        this.addChild(this.ui);
        egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
    }

    private onTouchBegin() {
        if (Center.gameState == GameState.Ready) {
            this.startup();
            this.ui.setTipVisible(false);
        }
        else if (Center.gameState == GameState.Doing) {
            let brid = this.brid;
            brid.y -= Data.BirdDownSpeed*10;
        }
    }

    private onEnterFrame() {
        if (this.bg1Image.x <= -this.bg1Image.width) {
            this.bg1Image.x = this.bg2Image.x + this.bg2Image.width;
        }
        if (this.bg2Image.x <= -this.bg2Image.width) {
            this.bg2Image.x = this.bg1Image.x + this.bg1Image.width;
        }
        this.bg1Image.x -= Data.SkyMoveSpeed;
        this.bg2Image.x -= Data.SkyMoveSpeed;
        this.updateObstacle();
        for (let item of this.obstacleList) {
            item.x -= Data.ObstacleMoveSpeed;
        }
        let brid = this.brid;
        brid.y += Data.BirdDownSpeed;
        let isGameOver: boolean = false;
        for (let item of this.obstacleList) {
            if (item.isCollision(brid)) {
                isGameOver = true;
            }
        }
        if (brid.y + brid.height > Data.SceneHeight || brid.y < 0){
            isGameOver = true;
        }
        for (let item of this.obstacleList) {
            if (item.x > brid.x) {
                this.score = item.index - 1
                break;
            }
        }
        this.ui.setScoreLabel(this.score);
        if (isGameOver) {
            Center.gameState = GameState.End;
            this.end();
            console.log("gameover");
        }
    }
    private startup() {
        Center.gameState = GameState.Doing;
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.bg1Image.x = 0;
        this.bg2Image.x = this.bg1Image.width;
        this.clearObstacle();
        egret.clearInterval(this.obstacleTimer);
        this.obstacleIndex = 0;
        this.updateObstacle();
    }
    private updateObstacle() {
        let deleteObs = this.obstacleList.filter((v: Obstacle) => !v.isEffective());
        for (let item of deleteObs) {
            if (item && item.parent) {
                item.parent.removeChild(item);
            }
            this.obstacleList.removeFirst(v => v == item);
        }
        console.error("deleteObs.length:" + deleteObs.length);
        console.error("aaaaaaaaaaa:" + this.obstacleList.length);
        let canLength = Math.ceil(Data.SceneWidth / Data.ObstacleLRGap);
        let disparity = canLength - this.obstacleList.length;
        for (let i: number = 0; i < disparity; i++) {
            this.obstacleIndex++;
            let obstacle = new Obstacle(this.obstacleIndex)
            this.addChild(obstacle);
            if (this.obstacleIndex == 1) {
                obstacle.x = Data.SceneWidth;
            }
            else {
                let lastObs = this.obstacleList.last();
                obstacle.x = (lastObs ? lastObs.x : 0) + Data.ObstacleLRGap;
            }
            this.obstacleList.push(obstacle);
        }
        console.error("this.obstacleList.length:" + this.obstacleList.length);
    }
    private end(){
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        egret.clearInterval(this.obstacleTimer);
    }
    public clearObstacle() {
        for (let item of this.obstacleList) {
            if (item && item.parent) {
                item.parent.removeChild(item);
            }
        }
        this.obstacleList = [];
    }
}