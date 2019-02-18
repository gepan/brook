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
        _this.bridBitmapList = [];
        _this.createBitmap();
        return _this;
    }
    Bird.prototype.createBitmap = function () {
        var block = new egret.Bitmap(RES.getRes("birds_png"));
        var bridWidth = block.width / 3;
        for (var i = 0; i < 3; i++) {
            var texture = new egret.RenderTexture();
            texture.drawToTexture(block, new egret.Rectangle(i * bridWidth, 0, bridWidth, block.height));
            this.bridBitmapList.push(texture);
        }
        this.curBitmap = new egret.Bitmap();
        this.curBitmap.texture = this.bridBitmapList[BridState.Normal];
        this.addChild(this.curBitmap);
        this.width = bridWidth;
        this.height = block.height;
    };
    Bird.prototype.changeState = function (state) {
        if (state === void 0) { state = BridState.Normal; }
        this.curBitmap.texture = this.bridBitmapList[state];
    };
    Bird.prototype.getRect = function () {
        return new egret.Rectangle(this.x, this.y, this.x + this.width, this.x + this.height);
    };
    return Bird;
}(egret.DisplayObjectContainer));
__reflect(Bird.prototype, "Bird");
