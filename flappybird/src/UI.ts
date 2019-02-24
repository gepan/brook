class UI extends eui.Component {
    private scoreBitmapLabel: eui.Label;

    private tipGroup: eui.Group;

    private gameoverGroup: eui.Group;
    private restartButton: eui.Button;
    private rankButton: eui.Button;

    private thisScoreBitmapLabel: eui.BitmapLabel;
    private bestScoreBitmapLabel: eui.BitmapLabel;
    constructor() {
        super();
        this.skinName = new UISkin();
        this.tipGroup.touchChildren = false;
        this.tipGroup.touchEnabled = false;
        this.width = Data.SceneWidth;
        this.height = Data.SceneHeight;
        this.gameoverGroup.visible = false;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickTap, this);
    }
    onResize(){
        this.width = Data.SceneWidth;
        this.height = Data.SceneHeight;
    }
    public setScoreLabel(v: number) {
        if (v > Number(this.scoreBitmapLabel.text)) {
            egret.Tween.removeTweens(this.scoreBitmapLabel);
            egret.Tween.get(this.scoreBitmapLabel).to({ scaleX: 2, scaleY: 2 }, 200).to({ scaleX: 1.5, scaleY: 1.5 }, 100)
        }
        this.scoreBitmapLabel.text = v + "";
    }

    public setTipVisible(b: boolean) {
        this.tipGroup.visible = b;
    }

    public gameOver(score: number, betscore: number) {
        this.gameoverGroup.visible = true;
        Util.scrollNumber(this.thisScoreBitmapLabel, 0, score, 0.5, true, 1.2, () => { });
        this.bestScoreBitmapLabel.text = betscore + "";
    }
    private onClickTap(e: egret.TouchEvent) {
        if (e.target == this.restartButton) {
            this.gameoverGroup.visible = false;
            Center.gameState = GameState.Ready;
            this.setTipVisible(true);
            this.setScoreLabel(0);
            Map.instance.readyUI();
        }
        else if (e.target == this.rankButton) {
            this.friendRank();
        }
    }


    private _rankMask: egret.Shape;
    public get rankMask(): egret.Shape {
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
    }
    private _rankBit: egret.Bitmap;
    private friendRank(): void {
        this.rankMask.visible = true;
        platform.sendShareData({ command: "open", type: "friend" });
        this._rankBit = platform.openDataContext.createDisplayObject(null, this.stage.stageWidth, this.stage.stageHeight);
        this._rankBit.touchEnabled = true;
        this._rankBit.pixelHitTest = true;
        this.addChild(this._rankBit);
        this.rankMask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMask, this);
    }
    private onMask(e: egret.TouchEvent): void {
        platform.sendShareData({ command: "close" });
        this._rankMask.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onMask, this);
        this.removeChild(this._rankBit);
        this._rankMask.visible = false;
    }
}
