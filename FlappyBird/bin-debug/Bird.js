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
var Bird = (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        var _this = _super.call(this) || this;
        var mcFactory = new egret.MovieClipDataFactory(RES.getRes("bird_json"), RES.getRes("bird_png"));
        _this.bird = new egret.MovieClip(mcFactory.generateMovieClipData("action"));
        _this.bird.frameRate = 5;
        _this.bird.play(-1);
        _this.addChild(_this.bird);
        return _this;
    }
    Bird.prototype.getRect = function () {
        var width = 40;
        var height = 28;
        return new egret.Rectangle(this.x - width / 2, this.y - height / 2, width, height);
    };
    return Bird;
}(egret.DisplayObjectContainer));
__reflect(Bird.prototype, "Bird");
