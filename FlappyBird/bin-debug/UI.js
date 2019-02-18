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
var UI = (function (_super) {
    __extends(UI, _super);
    function UI() {
        var _this = _super.call(this) || this;
        _this.skinName = new UISkin();
        _this.touchChildren = false;
        _this.touchEnabled = false;
        _this.width = Data.SceneWidth;
        _this.height = Data.SceneHeight;
        return _this;
    }
    UI.prototype.setScoreLabel = function (v) {
        this.scoreLabel.text = v + "米";
    };
    UI.prototype.setTipVisible = function (b) {
        this.tipLabel.visible = b;
    };
    return UI;
}(eui.Component));
__reflect(UI.prototype, "UI");
