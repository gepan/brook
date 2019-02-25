class UI extends eui.Component {
    private scoreBitmapLabel: eui.Label;

    private tipGroup: eui.Group;

    private gameoverGroup: eui.Group;
    private restartButton: eui.Button;
    private rankButton: eui.Button;
    private groupButton: eui.Button;
    private shareButton: eui.Button;

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
    onResize() {
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
        else if (e.target == this.groupButton) {
            console.log("this.groupButton")
            this.clickGroup();
        }
        else if(e.target == this.shareButton){
            console.log("this.shareButton")
            this.share();
        }
    }


    private m_rankMask: egret.Shape;
    public get rankMask(): egret.Shape {
        if (this.m_rankMask == null) {
            this.m_rankMask = new egret.Shape();
            this.m_rankMask.graphics.beginFill(0x000000, 0.7);
            this.m_rankMask.graphics.drawRect(0, 0, Data.SceneWidth, Data.SceneHeight);
            this.m_rankMask.graphics.endFill();
            this.addChild(this.m_rankMask);
            this.m_rankMask.touchEnabled = true;
            this.m_rankMask.visible = false;
        }
        return this.m_rankMask;
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
        this.rankMask.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onMask, this);
        this.removeChild(this._rankBit);
        this.rankMask.visible = false;
    }



    private clickGroup() {
        var desc: string = "我的分数"+this.scoreBitmapLabel.text;
        var imgurl: string = "resource/assets/icon" + (1 + Math.floor(Math.random() * 4)) + ".jpg";
        return new Promise((resolve, reject) => {
            platform.updateShareMenu(true).then(data => {
                console.log("updateShareMenu: ", data);
                if (data) {
                    return platform.shareApp(desc, imgurl, desc).then(data => {
                        if (data && data.shareTickets && data.shareTickets.length > 0) {
                            this.groupRank(data.shareTickets[0]);
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                } else {
                    resolve(false);
                }
            })
        });
    }

    private groupRank(shareTicket): void {
        this.rankMask.visible = true;
        platform.sendShareData({ command: "open", type: "group", groupid: shareTicket });
        this._rankBit = platform.openDataContext.createDisplayObject(null, this.stage.stageWidth, this.stage.stageHeight);
        this._rankBit.touchEnabled = true;
        this._rankBit.pixelHitTest = true;
        this.addChild(this._rankBit);
        this.rankMask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMask, this);
    }

    private share():void
	{
		var desc:string= "我的分数"+this.scoreBitmapLabel.text;
		var imgurl:string="resource/assets/icon"+(1+Math.floor(Math.random()*4))+".jpg";
		platform.shareAppMessage(desc,imgurl,desc);
	}
}
