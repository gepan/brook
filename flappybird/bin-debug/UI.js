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
        else if (e.target == this.rankButton) {
        }
    };
    Object.defineProperty(UI.prototype, "rankMask", {
        get: function () {
            if (this._rankMask == null) {
                this._rankMask = new egret.Shape();
                this._rankMask.graphics.beginFill(0x000000, 0.7);
                this._rankMask.graphics.drawRect(0, 0, Data.SceneWidth, Data.SceneHeight);
                this._rankMask.graphics.endFill();
                this.addChild(this._rankMask);
                this._rankMask.touchEnabled = true;
                this._rankMask.visible = false;
            }
            return this._rankMask;
        },
        enumerable: true,
        configurable: true
    });
    UI.prototype.friendRank = function () {
        this.rankMask.visible = true;
        platform.sendShareData({ command: "open", type: "friend" });
        this._rankBit = platform.openDataContext.createDisplayObject(null, this.stage.stageWidth, this.stage.stageHeight);
        this._rankBit.touchEnabled = true;
        this._rankBit.pixelHitTest = true;
        this.addChild(this._rankBit);
        this.rankMask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMask, this);
    };
    UI.prototype.onMask = function (e) {
        platform.sendShareData({ command: "close" });
        this._rankMask.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onMask, this);
        this.removeChild(this._rankBit);
        this._rankMask.visible = false;
    };
    return UI;
}(eui.Component));
__reflect(UI.prototype, "UI");
