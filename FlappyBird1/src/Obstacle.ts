class Obstacle extends egret.DisplayObjectContainer {
    private upImage: eui.Image;
    private downImage: eui.Image;
    public index: number;
    public centerY:number;
    constructor(index: number,lastCenterY:number) {
        super();
        this.index = index;
        this.upImage = new eui.Image("tube03");
        this.upImage.width = 80;
        this.upImage.scale9Grid = new egret.Rectangle(6,40,40,240);
        this.downImage = new eui.Image("tube02");
        this.downImage.width = 80;
        this.downImage.scale9Grid = new egret.Rectangle(6,40,40,240);
        this.addChild(this.upImage);
        this.addChild(this.downImage);
        let skyHeight = Data.getSkyHeight();
        let minCenter = lastCenterY - Data.DifficultyRange;
        minCenter = minCenter < 0 + Data.ObstacleUDGap / 2 ? 0 + Data.ObstacleUDGap / 2 : minCenter;
        let maxCenter = lastCenterY + Data.DifficultyRange;
        maxCenter = maxCenter > skyHeight - Data.ObstacleUDGap / 2 ? skyHeight - Data.ObstacleUDGap / 2 : maxCenter
        let centerY = Math.randomInteger(minCenter, maxCenter);
        this.centerY = centerY;
        this.upImage.height = centerY - Data.ObstacleUDGap / 2;
        this.upImage.y = 0;
        this.downImage.y = centerY + Data.ObstacleUDGap / 2;
        this.downImage.height = skyHeight - this.downImage.y;
        this.x = Data.SceneWidth + Data.ObstacleLRGap * (index - 1);
        this.width = this.upImage.width;
    }
    getUpRect(): egret.Rectangle {
        return new egret.Rectangle(this.x, this.y, this.upImage.width, this.upImage.height);
    }
    getDownRect(): egret.Rectangle {
        return new egret.Rectangle(this.x, this.y + this.downImage.y, this.downImage.width, this.downImage.height);
    }
    // private rect1:eui.Rect = new eui.Rect();
    // private rect2:eui.Rect = new eui.Rect();
    // private rect3:eui.Rect = new eui.Rect();
    isCollision(bird: Bird): boolean {
        let birdRect = bird.getRect();
        let upRect = this.getUpRect();
        let downRect = this.getDownRect();
        // this.rect1.x = upRect.x;
        // this.rect1.y = upRect.y;
        // this.rect1.width = upRect.width;
        // this.rect1.height = upRect.height;
        // this.rect2.x = downRect.x;
        // this.rect2.y = downRect.y;
        // this.rect2.width = downRect.width;
        // this.rect2.height = downRect.height;
        // this.rect3.x = birdRect.x;
        // this.rect3.y = birdRect.y;
        // this.rect3.width = birdRect.width;
        // this.rect3.height = birdRect.height;
        // egret.MainContext.instance.stage.addChild(this.rect1);
        // egret.MainContext.instance.stage.addChild(this.rect2);
        // egret.MainContext.instance.stage.addChild(this.rect3);
        return birdRect.intersects(upRect) || birdRect.intersects(downRect);
    }
    /**
     * 是否有效
     */
    isEffective(): boolean {
        if (this.x + this.width < 0)
            return false;
        return true;
    }
}