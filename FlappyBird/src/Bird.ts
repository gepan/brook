class Bird extends egret.DisplayObjectContainer {
    private bird: egret.MovieClip;
    constructor() {
        super();
        var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(RES.getRes("bird_json"), RES.getRes("bird_png"));
        this.bird = new egret.MovieClip(mcFactory.generateMovieClipData("action"))
        this.bird.frameRate = 5;
        this.bird.play(-1);
        this.addChild(this.bird);
    }
    public getRect(): egret.Rectangle {
        let width = 40;
        let height = 28;
        return new egret.Rectangle(this.x - width / 2, this.y - height / 2, width, height);
    }
}
