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
        _this.tipGroup.touchChildren = false;
        _this.tipGroup.touchEnabled = false;
        _this.width = Data.SceneWidth;
        _this.height = Data.SceneHeight;
        _this.gameoverGroup.visible = false;
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClickTap, _this);
        return _this;
    }
    UI.prototype.setScoreLabel = function (v) {
        if (v > Number(this.scoreBitmapLabel.text)) {
            egret.Tween.removeTweens(this.scoreBitmapLabel);
            egret.Tween.get(this.scoreBitmapLabel).to({ scaleX: 2, scaleY: 2 }, 200).to({ scaleX: 1.5, scaleY: 1.5 }, 100);
        }
        this.scoreBitmapLabel.text = v + "";
    };
    UI.prototype.setTipVisible = function (b) {
        this.tipGroup.visible = b;
    };
    UI.prototype.gameOver = function (score, betscore) {
        this.gameoverGroup.visible = true;
        Util.scrollNumber(this.thisScoreBitmapLabel, 0, score, 0.5, true, 1.2, function () { });
        this.bestScoreBitmapLabel.text = betscore + "";
    };
    UI.prototype.onClickTap = function (e) {
        if (e.target == this.restartButton) {
            this.gameoverGroup.visible = false;
            Center.gameState = GameState.Ready;
            this.setTipVisible(true);
            this.setScoreLabel(0);
            Map.instance.readyUI();
        }
    };
    return UI;
}(eui.Component));
__reflect(UI.prototype, "UI");
