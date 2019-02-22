class UI extends eui.Component {
    private scoreBitmapLabel: eui.Label;

    private tipGroup: eui.Group;

    private gameoverGroup: eui.Group;
    private restartButton: eui.Button;

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
    }
}
