var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Map = (function (_super) {
    __extends(Map, _super);
    function Map() {
        var _this = _super.call(this) || this;
        _this.obstacleList = [];
        _this.obstacleIndex = 0;
        _this.skinName = new MapSkin();
        Map.instance = _this;
        _this.init();
        return _this;
    }
    Map.prototype.init = function () {
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
        this.addEventListener(egret.Event.RESIZE, this.onResize, this);
    };
    Map.prototype.onResize = function () {
        this.width = Data.SceneWidth;
        this.height = Data.SceneHeight;
        this.ui.onResize();
        this.skyImage.height = Data.getSkyHeight();
        this.ground2Image.height = this.ground1Image.height = Data.getGroundHeight();
    };
    Map.prototype.initBirdPosition = function () {
        this.bird.x = Data.getBirdStartX();
        this.bird.y = Data.getBirdStartY();
        this.bird.setRototion(0);
    };
    Map.prototype.readyUI = function () {
        this.initBirdPosition();
        for (var _i = 0, _a = this.obstacleList; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item && item.parent) {
                egret.Tween.removeTweens(item);
                item.parent.removeChild(item);
            }
        }
        this.obstacleList.clear();
    };
    Map.prototype.onTouchBegin = function () {
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
    };
    Map.prototype.birdPlappy = function () {
        egret.Tween.removeTweens(this.bird);
        var startY = this.bird.y;
        // let time = 50 / (Data.SceneHeight / 3000);
        var rotateTween = function (t) {
            var all = 3;
            t = t * all;
            var param = 1;
            var sul = 0;
            if (t < param) {
                sul = t * 0.5;
            }
            else {
                sul = 0.5 + egret.Ease.getPowOut(3)((t - param) / (all - param)) * 0.5;
            }
            // console.error(sul)
            return sul;
        };
        egret.Tween.get(this.bird).to({ y: startY - 120 }, 500, rotateTween).call(this.birdDrop, this);
        this.bird.setDirection(1);
    };
    Map.prototype.birdDrop = function () {
        var _this = this;
        var startY = this.bird.y;
        var skyHeight = Data.getSkyHeight() - 20;
        var diff = skyHeight - startY;
        var time = diff / (skyHeight / 1500);
        egret.Tween.removeTweens(this.bird);
        egret.Tween.get(this.bird).to({ y: skyHeight }, time, egret.Ease.sineIn).call(function () {
            _this.bird.setRototion(90);
        });
        this.bird.setDirection(2);
    };
    Map.prototype.onEnterFrame = function () {
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
            var bird = this.bird;
            var isGameOver = false;
            for (var _i = 0, _a = this.obstacleList; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.isCollision(bird)) {
                    isGameOver = true;
                }
            }
            if (bird.y + bird.height > Data.SceneHeight - Data.getGroundHeight() || bird.y < 0) {
                isGameOver = true;
            }
            for (var _b = 0, _c = this.obstacleList; _b < _c.length; _b++) {
                var item = _c[_b];
                if (item.x > bird.x) {
                    this.score = item.index - 1;
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
    };
    Map.prototype.startup = function () {
        Center.gameState = GameState.Doing;
        this.ground1Image.x = 0;
        this.ground2Image.x = this.ground1Image.width;
        this.clearObstacle();
        egret.clearTimeout(this.obstacleTimer);
        this.obstacleIndex = 0;
        this.createObstacle();
        this.birdDrop();
    };
    Map.prototype.createObstacle = function () {
        var _this = this;
        this.obstacleIndex++;
        var lastObs = this.obstacleList.last();
        var obstacle = new Obstacle(this.obstacleIndex, lastObs ? lastObs.centerY : Data.getBirdStartY());
        obstacle.x = Data.SceneWidth;
        this.obstacleLayer.addChild(obstacle);
        this.obstacleList.push(obstacle);
        egret.Tween.get(obstacle).to({ x: -obstacle.width }, 3000).call(function () {
            if (obstacle && obstacle.parent) {
                obstacle.parent.removeChild(obstacle);
            }
            _this.obstacleList.remove(obstacle);
        });
        egret.clearTimeout(this.obstacleTimer);
        this.obstacleTimer = egret.setTimeout(this.createObstacle, this, Math.randomInteger(1600, 1600));
    };
    Map.prototype.end = function () {
        egret.Tween.removeTweens(this.bird);
        this.birdDrop();
        egret.clearTimeout(this.obstacleTimer);
        for (var _i = 0, _a = this.obstacleList; _i < _a.length; _i++) {
            var item = _a[_i];
            egret.Tween.removeTweens(item);
        }
        var betscore = storage.bestScore.getValue();
        if (this.score > betscore) {
            betscore = this.score;
            storage.bestScore.setValue(betscore);
            platform.setUserCloudStorage([{ key: "score", value: betscore + "" }]);
        }
        this.ui.gameOver(this.score, betscore);
    };
    Map.prototype.clearObstacle = function () {
        for (var _i = 0, _a = this.obstacleList; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item && item.parent) {
                item.parent.removeChild(item);
            }
        }
        this.obstacleList = [];
    };
    return Map;
}(eui.Component));
__reflect(Map.prototype, "Map");
