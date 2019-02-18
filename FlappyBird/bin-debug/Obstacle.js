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
var Obstacle = (function (_super) {
    __extends(Obstacle, _super);
    function Obstacle(index) {
        var _this = _super.call(this) || this;
        _this.index = index;
        _this.upImage = new eui.Image("pipe2_png");
        _this.upImage.height = Math.random() * (Data.SceneHeight - Data.ObstacleUDGap);
        _this.upImage.y = 0;
        _this.downImage = new eui.Image("pipe1_png");
        _this.downImage.height = Data.SceneHeight - Data.ObstacleUDGap - _this.upImage.height;
        _this.downImage.y = Data.SceneHeight - _this.downImage.height;
        _this.addChild(_this.upImage);
        _this.addChild(_this.downImage);
        _this.x = Data.SceneWidth + Data.ObstacleLRGap * (index - 1);
        _this.width = _this.upImage.width;
        return _this;
    }
    Obstacle.prototype.getUpRect = function () {
        return new egret.Rectangle(this.x, this.y, this.upImage.width, this.upImage.height);
    };
    Obstacle.prototype.getDownRect = function () {
        return new egret.Rectangle(this.x, this.y + this.downImage.y, this.downImage.width, this.downImage.height);
    };
    Obstacle.prototype.isCollision = function (bird) {
        var birdRect = bird.getRect();
        return birdRect.intersects(this.getUpRect()) || birdRect.intersects(this.getDownRect());
    };
    /**
     * 是否有效
     */
    Obstacle.prototype.isEffective = function () {
        if (this.x > Data.SceneWidth || this.x + this.width < 0)
            return false;
        return true;
    };
    return Obstacle;
}(egret.DisplayObjectContainer));
__reflect(Obstacle.prototype, "Obstacle");
