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
        _this.bird.frameRate = 7;
        _this.bird.play(-1);
        _this.bird.scaleX = Data.Scale;
        _this.bird.scaleY = Data.Scale;
        _this.addChild(_this.bird);
        return _this;
    }
    Bird.prototype.getRect = function () {
        var width = 40 * Data.Scale;
        var height = 28 * Data.Scale;
        return new egret.Rectangle(this.x - width / 2, this.y - height / 2, width, height);
    };
    /**
     * statu 1 向上 2 向下 3 正常
     */
    Bird.prototype.setDirection = function (statu) {
        if (statu === void 0) { statu = 1; }
        egret.Tween.removeTweens(this.bird);
        if (statu == 1) {
            egret.Tween.get(this.bird).to({ rotation: -30 }, 200);
        }
        else if (statu == 2) {
            egret.Tween.get(this.bird).wait(200).to({ rotation: 90 }, 200);
        }
    };
    Bird.prototype.setRototion = function (v) {
        egret.Tween.removeTweens(this.bird);
        this.bird.rotation = v;
    };
    Object.defineProperty(Bird.prototype, "setY", {
        set: function (v) {
            this.y = v;
        },
        enumerable: true,
        configurable: true
    });
    return Bird;
}(egret.DisplayObjectContainer));
__reflect(Bird.prototype, "Bird");
