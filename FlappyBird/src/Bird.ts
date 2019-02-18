class Bird extends egret.DisplayObjectContainer {
    private image: eui.Image;
    private bridBitmapList: Array<egret.RenderTexture> = []
    private curBitmap: egret.Bitmap;
    constructor() {
        super();
        this.createBitmap();
    }

    private createBitmap(): void {
        var block: egret.Bitmap = new egret.Bitmap(RES.getRes("birds_png"));
        var bridWidth: number = block.width / 3;
        for (var i: number = 0; i < 3; i++) {
            var texture: egret.RenderTexture = new egret.RenderTexture();
            texture.drawToTexture(block, new egret.Rectangle(i * bridWidth, 0, bridWidth, block.height));
            this.bridBitmapList.push(texture);
        }
        this.curBitmap = new egret.Bitmap()
        this.curBitmap.texture = this.bridBitmapList[BridState.Normal];
        this.addChild(this.curBitmap);
        this.width = bridWidth;
        this.height = block.height;
    }

    public changeState(state: BridState = BridState.Normal): void {
        this.curBitmap.texture = this.bridBitmapList[state];
    }

    public getRect(): egret.Rectangle {
        return new egret.Rectangle(this.x, this.y, this.x + this.width, this.x + this.height);
    }
}
