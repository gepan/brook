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
var HelpPanel = (function (_super) {
    __extends(HelpPanel, _super);
    function HelpPanel() {
        return _super.call(this) || this;
    }
    HelpPanel.prototype.Init = function () {
        this.alpha = 0.5;
        this.touchEnabled = false;
        this.touchChildren = false;
        var rbit = new egret.Bitmap(RES.getRes("finger_png"));
        var lbit = new egret.Bitmap(RES.getRes("finger_png"));
        lbit.anchorOffsetX = rbit.anchorOffsetX = 80;
        lbit.anchorOffsetY = rbit.anchorOffsetY = 90;
        lbit.scaleX = -3;
        lbit.scaleY = 3;
        rbit.scaleX = rbit.scaleY = 3;
        this.addChild(lbit);
        this.addChild(rbit);
        lbit.x = -40;
        rbit.x = Data.SceneWidth;
        lbit.y = rbit.y = Data.SceneHeight;
        this._lbit = lbit;
        this._rbit = rbit;
        this.visible = false;
    };
    HelpPanel.prototype.Start = function () {
        this.visible = true;
        egret.Tween.get(this._lbit, { loop: true }).to({ rotation: 45, alpha: 0 }, 500).to({ rotation: 0, alpha: 1 }).wait(500);
        // this._rbit.rotation=-45;
        // this._rbit.alpha=0;
        egret.Tween.get(this._rbit, { loop: true }).wait(500).to({ rotation: 0, alpha: 1 }).to({ rotation: -45, alpha: 0 }, 500);
    };
    HelpPanel.prototype.Stop = function () {
        egret.Tween.removeTweens(this._lbit);
        egret.Tween.removeTweens(this._rbit);
        this.visible = false;
    };
    return HelpPanel;
}(egret.Sprite));
__reflect(HelpPanel.prototype, "HelpPanel");
