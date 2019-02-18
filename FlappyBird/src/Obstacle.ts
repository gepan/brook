class Obstacle extends egret.DisplayObjectContainer {
    private upImage: eui.Image;
    private downImage: eui.Image;
    private index: number
    constructor(index: number) {
        super();
        this.index = index;
        this.upImage = new eui.Image("pipe2_png");
        this.upImage.height = Math.random() * (Data.SceneHeight - Data.ObstacleUDGap);
        this.upImage.y = 0;
        this.downImage = new eui.Image("pipe1_png");
        this.downImage.height = Data.SceneHeight - Data.ObstacleUDGap - this.upImage.height;
        this.downImage.y = Data.SceneHeight - this.downImage.height;
        this.addChild(this.upImage);
        this.addChild(this.downImage);
        this.x = Data.SceneWidth + Data.ObstacleLRGap * (index - 1);
        this.width = this.upImage.width;
    }
    getUpRect(): egret.Rectangle {
        return new egret.Rectangle(this.x, this.y, this.upImage.width, this.upImage.height);
    }
    getDownRect(): egret.Rectangle {
        return new egret.Rectangle(this.x, this.y + this.downImage.y, this.downImage.width, this.downImage.height);
    }
    isCollision(bird: Bird):boolean {
        let birdRect = bird.getRect();
        return birdRect.intersects(this.getUpRect()) || birdRect.intersects(this.getDownRect());
    }
    /**
     * 是否有效
     */
    isEffective(): boolean {
        if (this.x > Data.SceneWidth || this.x + this.width < 0)
            return false;
        return true;
    }
}