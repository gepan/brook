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
        _this.upImage = new eui.Image("tube03");
        _this.upImage.scale9Grid = new egret.Rectangle(6, 40, 40, 240);
        _this.upImage.width = 80;
        var skyHeight = Data.getSkyHeight();
        _this.upImage.height = Math.random() * (skyHeight - Data.ObstacleUDGap);
        _this.upImage.y = 0;
        _this.downImage = new eui.Image("tube02");
        _this.downImage.width = 80;
        _this.downImage.scale9Grid = new egret.Rectangle(6, 40, 40, 240);
        _this.downImage.height = skyHeight - Data.ObstacleUDGap - _this.upImage.height;
        _this.downImage.y = _this.upImage.y + _this.upImage.height + Data.ObstacleUDGap;
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
    // private rect1:eui.Rect = new eui.Rect();
    // private rect2:eui.Rect = new eui.Rect();
    // private rect3:eui.Rect = new eui.Rect();
    Obstacle.prototype.isCollision = function (bird) {
        var birdRect = bird.getRect();
        var upRect = this.getUpRect();
        var downRect = this.getDownRect();
        // this.rect1.x = upRect.x;
        // this.rect1.y = upRect.y;
        // this.rect1.width = upRect.width;
        // this.rect1.height = upRect.height;
        // this.rect2.x = downRect.x;
        // this.rect2.y = downRect.y;
        // this.rect2.width = downRect.width;
        // this.rect2.height = downRect.height;
        // this.rect3.x = birdRect.x;
        // this.rect3.y = birdRect.y;
        // this.rect3.width = birdRect.width;
        // this.rect3.height = birdRect.height;
        // egret.MainContext.instance.stage.addChild(this.rect1);
        // egret.MainContext.instance.stage.addChild(this.rect2);
        // egret.MainContext.instance.stage.addChild(this.rect3);
        return birdRect.intersects(upRect) || birdRect.intersects(downRect);
    };
    /**
     * 是否有效
     */
    Obstacle.prototype.isEffective = function () {
        if (this.x + this.width < 0)
            return false;
        return true;
    };
    return Obstacle;
}(egret.DisplayObjectContainer));
__reflect(Obstacle.prototype, "Obstacle");
