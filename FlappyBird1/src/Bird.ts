class Bird extends egret.DisplayObjectContainer {

    private bird: egret.MovieClip;
    constructor() {
        super();
        var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(RES.getRes("bird_json"), RES.getRes("bird_png"));
        this.bird = new egret.MovieClip(mcFactory.generateMovieClipData("action"))
        this.bird.frameRate = 7;
        this.bird.play(-1);
        this.bird.scaleX = Data.Scale;
        this.bird.scaleY = Data.Scale;
        this.addChild(this.bird);
    }
    public getRect(): egret.Rectangle {
        let width = 40 * Data.Scale;
        let height = 28 * Data.Scale;
        return new egret.Rectangle(this.x - width / 2, this.y - height / 2, width, height);
    }
    /**
     * statu 1 向上 2 向下 3 正常
     */
    public setDirection(statu: number = 1) {
        egret.Tween.removeTweens(this.bird);
        if (statu == 1) {
            egret.Tween.get(this.bird).to({ rotation: -30 }, 200);
        }
        else if (statu == 2){
            egret.Tween.get(this.bird).wait(200).to({ rotation: 90 }, 200);
        }
    }
    public setRototion(v:number){
        egret.Tween.removeTweens(this.bird);
        this.bird.rotation = v;
    }
    public set setY(v: number) {
        this.y = v;
    }
}
