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
        _this.init();
        return _this;
    }
    Map.prototype.init = function () {
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
    };
    Map.prototype.onTouchBegin = function () {
        if (Center.gameState == GameState.Ready) {
            this.startup();
            this.ui.setTipVisible(false);
            Center.gameState = GameState.Doing;
        }
        else if (Center.gameState == GameState.Doing) {
            var brid = this.brid;
            brid.y -= Data.BirdDownSpeed * 10;
            var isGameOver = false;
            for (var _i = 0, _a = this.obstacleList; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.isCollision(brid)) {
                    isGameOver = true;
                }
            }
            if (isGameOver) {
                Center.gameState = GameState.End;
                this.end();
                console.log("gameover");
            }
        }
    };
    Map.prototype.onEnterFrame = function () {
        if (this.bg1Image.x <= -this.bg1Image.width) {
            this.bg1Image.x = this.bg2Image.x + this.bg2Image.width;
        }
        if (this.bg2Image.x <= -this.bg2Image.width) {
            this.bg2Image.x = this.bg1Image.x + this.bg1Image.width;
        }
        this.bg1Image.x -= Data.SkyMoveSpeed;
        this.bg2Image.x -= Data.SkyMoveSpeed;
        for (var _i = 0, _a = this.obstacleList; _i < _a.length; _i++) {
            var item = _a[_i];
            item.x -= Data.ObstacleMoveSpeed;
        }
        this.brid.y += Data.BirdDownSpeed;
    };
    Map.prototype.startup = function () {
        var _this = this;
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.bg1Image.x = 0;
        this.bg2Image.x = this.bg1Image.width;
        this.clearObstacle();
        egret.clearInterval(this.obstacleTimer);
        this.obstacleIndex = 0;
        this.obstacleTimer = egret.setInterval(function () {
            _this.obstacleIndex++;
            var obstacle = new Obstacle(_this.obstacleIndex);
            _this.obstacleList.push(obstacle);
            _this.addChild(obstacle);
        }, this, 500);
    };
    Map.prototype.end = function () {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        egret.clearInterval(this.obstacleTimer);
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
}(egret.DisplayObjectContainer));
__reflect(Map.prototype, "Map");
