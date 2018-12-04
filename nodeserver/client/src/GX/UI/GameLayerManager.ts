  /**
    * 游戏容器类
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    * EgerPro显示对象层级
    * Main-GameScene（sceneLayer、mainLayer、popLayer、effectLayer、maskLayer、loadLayer）
    * 
    */
class GameLayerManager{
    /**
     *  场景层 如 战场、主城、副本战场之类的
     */
    public sceneLayer:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
    // 主UI层 如 底部功能栏
    public mainLayer:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
    // 弹窗层 如 设置、背包、装备之类的
    public popLayer:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
    // 特效层 如 闪烁、飘字之类的
    public effectLayer:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();   
    // 通讯遮罩层 和服务器通讯UI
    public maskLayer:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
    // 加载遮罩层 场景切换的时候加载资源UI
    public loadLayer:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();

    private static _instance:GameLayerManager; 
    //游戏容器管理器单例
    public static get Instance():GameLayerManager  
    {  
        if(!this._instance)  
            this._instance = new GameLayerManager();  
        return this._instance;  
    }  
}