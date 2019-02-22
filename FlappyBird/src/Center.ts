/**
 * 鸟的状态
 */
enum BridState {
    Up = 3,
    Normal = 2,
    Down = 1,
}

/**
 * 游戏的状态
 */
enum GameState {
    /**
     * 准备
     */
    Ready = 0,
    /**
     * 进行
     */
    Doing = 1,
    /**
     * 结束
     */
    End = 2,
}

class Data {
    public static SceneWidth: number;
    public static SceneHeight: number;
    /**
     * 背景飞行速度
     */
    public static SkyMoveSpeed: number = 3;
    /**
     * 烟台移动速度
     */
    public static ObstacleMoveSpeed: number = 2;
    /**
     * 烟台上下间隔
     */
    public static ObstacleUDGap: number = 200;
    /**
     * 烟台左右间隔
     */
    public static ObstacleLRGap: number = 300;
    /**
     * 鸟的起点
     */
    public static getBirdStartX(): number {
        return Data.SceneWidth < 200 ? 200 : Data.SceneWidth / 3;
    }
    /**
     * 鸟的起点
     */
    public static getBirdStartY(): number {
        return Data.SceneHeight / 2;
    }

    public static getSkyHeight(): number {
        return Data.SceneHeight > 800 ? 800 : Data.SceneHeight;
    }

    public static getGroundHeight(): number {
        return Data.SceneHeight - Data.getSkyHeight();
    }
    /**
     * 鸟掉落速度
     */
    public static BirdDownSpeed = 10;
}
class Center {
    public static gameState: GameState = GameState.Ready;
}
