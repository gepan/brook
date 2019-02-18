class Map extends egret.DisplayObjectContainer {
    private bg1Image: eui.Image;
    private bg2Image: eui.Image;
    private obstacleList: Array<Obstacle> = [];
    private obstacleTimer: number;
    private obstacleIndex: number = 0;

    private brid: Bird;

    private ui: UI;
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
            Center.gameState = GameState.Doing;
        }
        else if (Center.gameState == GameState.Doing) {
            let brid = this.brid;
            brid.y -= Data.BirdDownSpeed*10;
            let isGameOver:boolean =false;
            for(let item of this.obstacleList){
                if(item.isCollision(brid)){
                    isGameOver =true;
                }
            }
            if(isGameOver){
                Center.gameState = GameState.End;
                this.end();
                console.log("gameover");
            }
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
        for (let item of this.obstacleList) {
            item.x -= Data.ObstacleMoveSpeed;
        }
        this.brid.y += Data.BirdDownSpeed;
    }
    private startup() {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.bg1Image.x = 0;
        this.bg2Image.x = this.bg1Image.width;
        this.clearObstacle();
        egret.clearInterval(this.obstacleTimer);
        this.obstacleIndex = 0;
        this.obstacleTimer = egret.setInterval(() => {
            this.obstacleIndex++;
            let obstacle = new Obstacle(this.obstacleIndex)
            this.obstacleList.push(obstacle);
            this.addChild(obstacle);
        }, this, 500);
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