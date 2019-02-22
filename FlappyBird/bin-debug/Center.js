var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 鸟的状态
 */
var BridState;
(function (BridState) {
    BridState[BridState["Up"] = 3] = "Up";
    BridState[BridState["Normal"] = 2] = "Normal";
    BridState[BridState["Down"] = 1] = "Down";
})(BridState || (BridState = {}));
/**
 * 游戏的状态
 */
var GameState;
(function (GameState) {
    /**
     * 准备
     */
    GameState[GameState["Ready"] = 0] = "Ready";
    /**
     * 进行
     */
    GameState[GameState["Doing"] = 1] = "Doing";
    /**
     * 结束
     */
    GameState[GameState["End"] = 2] = "End";
})(GameState || (GameState = {}));
var Data = (function () {
    function Data() {
    }
    /**
     * 鸟的起点
     */
    Data.getBirdStartX = function () {
        return Data.SceneWidth < 200 ? Data.SceneWidth : 200;
    };
    /**
     * 鸟的起点
     */
    Data.getBirdStartY = function () {
        return Data.SceneHeight / 2;
    };
    Data.getSkyHeight = function () {
        return Data.SceneHeight > 800 ? 800 : Data.SceneHeight;
    };
    Data.getGroundHeight = function () {
        return Data.SceneHeight - Data.getSkyHeight();
    };
    /**
     * 难度幅度 [0,getSkyHeight]
     */
    Data.DifficultyRange = 400;
    Data.Scale = 1.4;
    /**
     * 背景飞行速度
     */
    Data.SkyMoveSpeed = 5;
    /**
     * 烟台移动速度
     */
    Data.ObstacleMoveSpeed = 2;
    /**
     * 烟台上下间隔
     */
    Data.ObstacleUDGap = 220;
    /**
     * 烟台左右间隔
     */
    Data.ObstacleLRGap = 300;
    /**
     * 鸟掉落速度
     */
    Data.BirdDownSpeed = 10;
    return Data;
}());
__reflect(Data.prototype, "Data");
var Center = (function () {
    function Center() {
    }
    Center.gameState = GameState.Ready;
    return Center;
}());
__reflect(Center.prototype, "Center");
