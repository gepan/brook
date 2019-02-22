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
        _this.init();
        return _this;
    }
    Map.prototype.init = function () {
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
    };
    Map.prototype.onTouchBegin = function () {
        if (Center.gameState == GameState.Ready) {
            this.startup();
            this.ui.setTipVisible(false);
        }
        else if (Center.gameState == GameState.Doing) {
            egret.Tween.removeTweens(this.bird);
            var startY = this.bird.y;
            var time = 50 / (Data.SceneHeight / 2000);
            egret.Tween.get(this.bird).to({ y: startY - 50 }, time, egret.Ease.sineInOut).call(this.birdDrop, this);
            // let bird = this.bird;
            // bird.y -= Data.BirdDownSpeed*10;
        }
    };
    Map.prototype.birdDrop = function () {
        var startY = this.bird.y;
        var diff = Data.SceneHeight - startY;
        var time = diff / (Data.SceneHeight / 2000);
        egret.Tween.removeTweens(this.bird);
        egret.Tween.get(this.bird).to({ y: Data.SceneHeight }, time, egret.Ease.sineIn);
    };
    Map.prototype.onEnterFrame = function () {
        if (this.ground1Image.x <= -this.ground1Image.width) {
            this.ground1Image.x = this.ground2Image.x + this.ground2Image.width;
        }
        if (this.ground2Image.x <= -this.ground2Image.width) {
            this.ground2Image.x = this.ground1Image.x + this.ground1Image.width;
        }
        this.ground1Image.x -= Data.SkyMoveSpeed;
        this.ground2Image.x -= Data.SkyMoveSpeed;
        // this.updateObstacle();
        for (var _i = 0, _a = this.obstacleList; _i < _a.length; _i++) {
            var item = _a[_i];
            item.x -= Data.ObstacleMoveSpeed;
        }
        var bird = this.bird;
        // bird.y += Data.BirdDownSpeed;
        var isGameOver = false;
        for (var _b = 0, _c = this.obstacleList; _b < _c.length; _b++) {
            var item = _c[_b];
            if (item.isCollision(bird)) {
                isGameOver = true;
            }
        }
        if (bird.y + bird.height > Data.SceneHeight - 100 || bird.y < 0) {
            isGameOver = true;
        }
        for (var _d = 0, _e = this.obstacleList; _d < _e.length; _d++) {
            var item = _e[_d];
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
    };
    Map.prototype.startup = function () {
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
    };
    Map.prototype.updateObstacle = function () {
        var _this = this;
        this.obstacleIndex++;
        var obstacle = new Obstacle(this.obstacleIndex);
        obstacle.x = Data.SceneWidth;
        this.addChild(obstacle);
        this.obstacleList.push(obstacle);
        egret.Tween.get(obstacle).to({ x: -obstacle.width }, 2500).call(function () {
            if (obstacle && obstacle.parent) {
                obstacle.parent.removeChild(obstacle);
            }
            _this.obstacleList.remove(obstacle);
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
    };
    Map.prototype.end = function () {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        egret.Tween.removeTweens(this.bird);
        egret.clearTimeout(this.obstacleTimer);
        for (var _i = 0, _a = this.obstacleList; _i < _a.length; _i++) {
            var item = _a[_i];
            egret.Tween.removeTweens(item);
        }
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
