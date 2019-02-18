class UI extends eui.Component {
    private scoreLabel: eui.Label;

    private tipLabel: eui.Label;

    constructor() {
        super();
        this.skinName = new UISkin();
        this.touchChildren = false;
        this.touchEnabled = false;
        this.width = Data.SceneWidth;
        this.height = Data.SceneHeight;
    }
    public setScoreLabel(v: number) {
        this.scoreLabel.text = v + "米";
    }

    public setTipVisible(b: boolean) {
        this.tipLabel.visible = b;
    }
}
