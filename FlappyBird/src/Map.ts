class Map extends eui.Component {
    private skyImage: eui.Image;
    private ground1Image: eui.Image;
    private ground2Image: eui.Image;
    private obstacleList: Array<Obstacle> = [];
    private obstacleTimer: number;
    private obstacleIndex: number = 0;
    private bird: Bird;
    private ui: UI;

    private score: number;
    constructor() {
        super();
        this.skinName = new MapSkin();
        this.init();
    }
    public init() {
        this.skyImage.source = ["background_day", "background_night"].random();
        this.skyImage.height = Data.getSkyHeight();
        this.ground1Image.width = Data.SceneWidth;
        this.ground2Image.width = Data.SceneWidth;
        this.ground2Image.x = this.ground1Image.width;
        this.ground2Image.height = this.ground1Image.height = Data.getGroundHeight();
        this.bird = new Bird();
        this.addChild(this.bird);
        this.bird.x = Data.getBirdStartX();
        this.bird.y = Data.getBirdStartY();
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
            egret.Tween.removeTweens(this.bird);
            let startY = this.bird.y;
            let time = 50 / (Data.SceneHeight / 2000);
            egret.Tween.get(this.bird).to({ y: startY - 50 }, time, egret.Ease.sineInOut).call(this.birdDrop, this);
            // let bird = this.bird;
            // bird.y -= Data.BirdDownSpeed*10;
        }
    }

    public birdDrop() {
        let startY = this.bird.y;
        let diff = Data.SceneHeight - startY;
        let time = diff / (Data.SceneHeight / 2000);
        egret.Tween.removeTweens(this.bird);
        egret.Tween.get(this.bird).to({ y: Data.SceneHeight }, time, egret.Ease.sineIn)
    }
    private onEnterFrame() {
        if (this.ground1Image.x <= -this.ground1Image.width) {
            this.ground1Image.x = this.ground2Image.x + this.ground2Image.width;
        }
        if (this.ground2Image.x <= -this.ground2Image.width) {
            this.ground2Image.x = this.ground1Image.x + this.ground1Image.width;
        }
        this.ground1Image.x -= Data.SkyMoveSpeed;
        this.ground2Image.x -= Data.SkyMoveSpeed;
        // this.updateObstacle();
        for (let item of this.obstacleList) {
            item.x -= Data.ObstacleMoveSpeed;
        }
        let bird = this.bird;
        // bird.y += Data.BirdDownSpeed;
        let isGameOver: boolean = false;
        for (let item of this.obstacleList) {
            if (item.isCollision(bird)) {
                isGameOver = true;
            }
        }
        if (bird.y + bird.height > Data.SceneHeight - 100 || bird.y < 0) {
            isGameOver = true;
        }
        for (let item of this.obstacleList) {
            if (item.x > bird.x) {
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
        this.ground1Image.x = 0;
        this.ground2Image.x = this.ground1Image.width;
        this.clearObstacle();
        egret.clearTimeout(this.obstacleTimer);
        this.obstacleIndex = 0;
        this.updateObstacle();
        this.birdDrop();
    }

    private updateObstacle() {
        this.obstacleIndex++;
        let obstacle = new Obstacle(this.obstacleIndex);
        obstacle.x = Data.SceneWidth;
        this.addChild(obstacle);
        this.obstacleList.push(obstacle);
        egret.Tween.get(obstacle).to({ x: -obstacle.width }, 2500).call(() => {
            if (obstacle && obstacle.parent) {
                obstacle.parent.removeChild(obstacle);
            }
            this.obstacleList.remove(obstacle);
        });
        egret.clearTimeout(this.obstacleTimer);
        this.obstacleTimer = egret.setTimeout(this.updateObstacle, this, 1000);
        // let deleteObs = this.obstacleList.filter((v: Obstacle) => !v.isEffective());
        // for (let item of deleteObs) {
        //     if (item && item.parent) {
        //         item.parent.removeChild(item);
        //     }
        //     this.obstacleList.removeFirst(v => v == item);
        // }
        // console.error("deleteObs.length:" + deleteObs.length);
        // console.error("aaaaaaaaaaa:" + this.obstacleList.length);
        // let canLength = Math.ceil(Data.SceneWidth / Data.ObstacleLRGap);
        // let disparity = canLength - this.obstacleList.length;
        // for (let i: number = 0; i < disparity; i++) {
        //     this.obstacleIndex++;
        //     let obstacle = new Obstacle(this.obstacleIndex)
        //     this.addChild(obstacle);
        //     if (this.obstacleIndex == 1) {
        //         obstacle.x = Data.SceneWidth;
        //     }
        //     else {
        //         let lastObs = this.obstacleList.last();
        //         obstacle.x = (lastObs ? lastObs.x : 0) + Data.ObstacleLRGap;
        //     }
        //     this.obstacleList.push(obstacle);
        // }
        // console.error("this.obstacleList.length:" + this.obstacleList.length);
    }
    private end() {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        egret.Tween.removeTweens(this.bird);
        egret.clearTimeout(this.obstacleTimer);
        for (let item of this.obstacleList) {
            egret.Tween.removeTweens(item);
        }
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