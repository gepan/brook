class Map extends eui.Component {
    public static instance:Map;
    private skyImage: eui.Image;
    private ground1Image: eui.Image;
    private ground2Image: eui.Image;
    private obstacleList: Array<Obstacle> = [];
    private obstacleTimer: number;
    private obstacleIndex: number = 0;
    private bird: Bird;
    private ui: UI;

    private score: number;

    private obstacleLayer: egret.DisplayObjectContainer;
    constructor() {
        super();
        this.skinName = new MapSkin();
        Map.instance = this;
        this.init();
    }
    public init() {
        this.skyImage.source = ["background_day", "background_night"].random();
        this.skyImage.height = Data.getSkyHeight();
        this.ground1Image.width = Data.SceneWidth;
        this.ground2Image.width = Data.SceneWidth;
        this.ground2Image.x = Data.SceneWidth - 2;
        this.ground2Image.height = this.ground1Image.height = Data.getGroundHeight();
        this.obstacleLayer = new egret.DisplayObjectContainer();
        this.addChild(this.obstacleLayer);
        this.bird = new Bird();
        this.addChild(this.bird);
        this.initBirdPosition();
        this.ui = new UI();
        this.addChild(this.ui);
        egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.addEventListener(egret.Event.RESIZE,this.onResize,this);
    }
    onResize(){
        this.width = Data.SceneWidth;
        this.height = Data.SceneHeight;
        this.ui.onResize();
        this.skyImage.height = Data.getSkyHeight();
        this.ground2Image.height = this.ground1Image.height = Data.getGroundHeight();
    }
    public initBirdPosition() {
        this.bird.x = Data.getBirdStartX();
        this.bird.y = Data.getBirdStartY();
        this.bird.setRototion(0);
    }
    public readyUI() {
        this.initBirdPosition();
        for (let item of this.obstacleList) {
            if (item && item.parent) {
                egret.Tween.removeTweens(item);
                item.parent.removeChild(item);
            }
        }
        this.obstacleList.clear();
    }
    private onTouchBegin() {
        if (Center.gameState == GameState.Ready) {
            this.startup();
            this.ui.setTipVisible(false);
            this.birdPlappy();
            this.bird.setDirection(1);
        }
        else if (Center.gameState == GameState.Doing) {
            this.birdPlappy();
            this.bird.setDirection(1);
            // let bird = this.bird;
            // bird.y -= Data.BirdDownSpeed*10;
        }
    }
    public birdPlappy() {
        egret.Tween.removeTweens(this.bird);
        let startY = this.bird.y;
        // let time = 50 / (Data.SceneHeight / 3000);
        let rotateTween = function (t) {
            let all = 3;
            t = t * all;
            let param: number = 1;
            let sul = 0;
            if (t < param) {
                sul = t * 0.5;
            } else {
                sul = 0.5 + egret.Ease.getPowOut(3)((t - param) / (all - param)) * 0.5;
            }
            // console.error(sul)
            return sul;
        }
        egret.Tween.get(this.bird).to({ y: startY - 120 }, 500, rotateTween).call(this.birdDrop, this);
        this.bird.setDirection(1);

    }
    public birdDrop() {
        let startY = this.bird.y;
        let skyHeight = Data.getSkyHeight() - 20;
        let diff = skyHeight - startY;
        let time = diff / (skyHeight / 1500);
        egret.Tween.removeTweens(this.bird);
        egret.Tween.get(this.bird).to({ y: skyHeight }, time, egret.Ease.sineIn).call(()=>{
            this.bird.setRototion(90);
        });
        this.bird.setDirection(2);
    }
    private onEnterFrame() {
        if (Center.gameState == GameState.Ready || Center.gameState == GameState.Doing) {
            if (this.ground1Image.x <= -this.ground1Image.width) {
                this.ground1Image.x = this.ground2Image.x + this.ground2Image.width - 2;
            }
            if (this.ground2Image.x <= -this.ground2Image.width) {
                this.ground2Image.x = this.ground1Image.x + this.ground1Image.width - 2;
            }
            this.ground1Image.x -= Data.SkyMoveSpeed;
            this.ground2Image.x -= Data.SkyMoveSpeed;
        }
        if (Center.gameState == GameState.Doing) {
            let bird = this.bird;
            let isGameOver: boolean = false;
            for (let item of this.obstacleList) {
                if (item.isCollision(bird)) {
                    isGameOver = true;
                }
            }
            if (bird.y + bird.height > Data.SceneHeight - Data.getGroundHeight() || bird.y < 0) {
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
    }
    private startup() {
        Center.gameState = GameState.Doing;
        this.ground1Image.x = 0;
        this.ground2Image.x = this.ground1Image.width;
        this.clearObstacle();
        egret.clearTimeout(this.obstacleTimer);
        this.obstacleIndex = 0;
        this.createObstacle();
        this.birdDrop();
    }

    private createObstacle() {
        this.obstacleIndex++;
        let lastObs = this.obstacleList.last();
        let obstacle = new Obstacle(this.obstacleIndex,lastObs?lastObs.centerY:Data.getBirdStartY());
        obstacle.x = Data.SceneWidth;
        this.obstacleLayer.addChild(obstacle);
        this.obstacleList.push(obstacle);
        egret.Tween.get(obstacle).to({ x: -obstacle.width }, 3000).call(() => {
            if (obstacle && obstacle.parent) {
                obstacle.parent.removeChild(obstacle);
            }
            this.obstacleList.remove(obstacle);
        });
        egret.clearTimeout(this.obstacleTimer);
        this.obstacleTimer = egret.setTimeout(this.createObstacle, this, Math.randomInteger(1600, 1600));
    }
    private end() {
        egret.Tween.removeTweens(this.bird);
        this.birdDrop();
        egret.clearTimeout(this.obstacleTimer);
        for (let item of this.obstacleList) {
            egret.Tween.removeTweens(item);
        }
        let betscore = storage.bestScore.getValue();
        if (this.score > betscore) {
            betscore = this.score;
            storage.bestScore.setValue(betscore)
            platform.setUserCloudStorage([{ key: "score", value: betscore + "" }]);
        }
        this.ui.gameOver(this.score, betscore);
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