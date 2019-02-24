class HelpPanel extends egret.Sprite{
	private _lbit:egret.Bitmap;
	private _rbit:egret.Bitmap;
	public constructor() {
		super();
	}
	public Init():void
	{
		this.alpha=0.5;
		this.touchEnabled=false;
		this.touchChildren=false;
		var rbit:egret.Bitmap=new egret.Bitmap(RES.getRes("finger_png"));
		var lbit:egret.Bitmap=new egret.Bitmap(RES.getRes("finger_png"));
		lbit.anchorOffsetX=rbit.anchorOffsetX=80;
		lbit.anchorOffsetY=rbit.anchorOffsetY=90;
		lbit.scaleX=-3;
		lbit.scaleY=3;
		rbit.scaleX=rbit.scaleY=3;
		this.addChild(lbit);
		this.addChild(rbit);
		lbit.x=-40;
		rbit.x=Data.SceneWidth;
		lbit.y=rbit.y=Data.SceneHeight;
		this._lbit=lbit;
		this._rbit=rbit;

		this.visible=false;
	}

	public Start():void
	{
		this.visible=true;
		egret.Tween.get(this._lbit,{loop:true}).to({rotation:45,alpha:0},500).to({rotation:0,alpha:1}).wait(500);
		// this._rbit.rotation=-45;
		// this._rbit.alpha=0;
		egret.Tween.get(this._rbit,{loop:true}).wait(500).to({rotation:0,alpha:1}).to({rotation:-45,alpha:0},500);
	}

	public Stop():void
	{
		egret.Tween.removeTweens(this._lbit);
		egret.Tween.removeTweens(this._rbit);
		this.visible=false;
	}
}