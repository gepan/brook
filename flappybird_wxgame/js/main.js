var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var storage;
(function (storage) {
    var bestScore;
    (function (bestScore) {
        function setValue(score) {
            egret.localStorage.setItem("score", score + "");
        }
        bestScore.setValue = setValue;
        function getValue() {
            var score = egret.localStorage.getItem("score");
            if (score == null)
                return 0;
            return Number(score);
        }
        bestScore.getValue = getValue;
    })(bestScore = storage.bestScore || (storage.bestScore = {}));
})(storage || (storage = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
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
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        platform.getUserInfo().then(function (value) {
        });
        var playfirst = localStorage.getItem("playfirst");
        if (!playfirst) {
        }
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        console.log("platform.name:" + platform["name"]);
        if (!Util.isWxgame()) {
            egret.MainContext.instance.stage.scaleMode = egret.StageScaleMode.SHOW_ALL;
        }
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.initGame = function () {
        Data.SceneWidth = egret.MainContext.instance.stage.stageWidth;
        Data.SceneHeight = egret.MainContext.instance.stage.stageHeight;
        this.addEventListener(egret.Event.RESIZE, function () {
            Data.SceneWidth = egret.MainContext.instance.stage.stageWidth;
            Data.SceneHeight = egret.MainContext.instance.stage.stageHeight;
        }, null);
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.initGame();
                        return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, platform.login()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.creatGame()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 4:
                        userInfo = _a.sent();
                        console.error("userInfo:" + userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.creatGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var map;
            return __generator(this, function (_a) {
                map = new Map;
                this.addChild(map);
                platform.sendShareData({ command: "load" });
                return [2 /*return*/];
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
var Map = (function (_super) {
    __extends(Map, _super);
    function Map() {
        var _this = _super.call(this) || this;
        _this.obstacleList = [];
        _this.obstacleIndex = 0;
        _this.skinName = new MapSkin();
        Map.instance = _this;
        _this.init();
        return _this;
    }
    Map.prototype.init = function () {
        this.skyImage.source = ["background_day", "background_night"].random();
        this.skyImage.height = Data.getSkyHeight();
        this.ground1Image.width = Data.SceneWidth;
        this.ground2Image.width = Data.SceneWidth;
        this.ground2Image.x = Data.SceneWidth - 2;
        this.ground2Image.height = this.ground1Image.height = Data.getGroundHeight();
        this.obstacleLayer = new egret.DisplayObjectContainer();
        this.addChild(this.obstacleLayer);
        this.bird = new Bird();
        this.addChild(this.bird);
        this.initBirdPosition();
        this.ui = new UI();
        this.addChild(this.ui);
        egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.addEventListener(egret.Event.RESIZE, this.onResize, this);
    };
    Map.prototype.onResize = function () {
        this.width = Data.SceneWidth;
        this.height = Data.SceneHeight;
        this.ui.onResize();
        this.skyImage.height = Data.getSkyHeight();
        this.ground2Image.height = this.ground1Image.height = Data.getGroundHeight();
    };
    Map.prototype.initBirdPosition = function () {
        this.bird.x = Data.getBirdStartX();
        this.bird.y = Data.getBirdStartY();
        this.bird.setRototion(0);
    };
    Map.prototype.readyUI = function () {
        this.initBirdPosition();
        for (var _i = 0, _a = this.obstacleList; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item && item.parent) {
                egret.Tween.removeTweens(item);
                item.parent.removeChild(item);
            }
        }
        this.obstacleList.clear();
    };
    Map.prototype.onTouchBegin = function () {
        if (Center.gameState == GameState.Ready) {
            this.startup();
            this.ui.setTipVisible(false);
            this.birdPlappy();
            this.bird.setDirection(1);
        }
        else if (Center.gameState == GameState.Doing) {
            this.birdPlappy();
            this.bird.setDirection(1);
            // let bird = this.bird;
            // bird.y -= Data.BirdDownSpeed*10;
        }
    };
    Map.prototype.birdPlappy = function () {
        egret.Tween.removeTweens(this.bird);
        var startY = this.bird.y;
        // let time = 50 / (Data.SceneHeight / 3000);
        var rotateTween = function (t) {
            var all = 3;
            t = t * all;
            var param = 1;
            var sul = 0;
            if (t < param) {
                sul = t * 0.5;
            }
            else {
                sul = 0.5 + egret.Ease.getPowOut(3)((t - param) / (all - param)) * 0.5;
            }
            // console.error(sul)
            return sul;
        };
        egret.Tween.get(this.bird).to({ y: startY - 120 }, 500, rotateTween).call(this.birdDrop, this);
        this.bird.setDirection(1);
    };
    Map.prototype.birdDrop = function () {
        var _this = this;
        var startY = this.bird.y;
        var skyHeight = Data.getSkyHeight() - 20;
        var diff = skyHeight - startY;
        var time = diff / (skyHeight / 1500);
        egret.Tween.removeTweens(this.bird);
        egret.Tween.get(this.bird).to({ y: skyHeight }, time, egret.Ease.sineIn).call(function () {
            _this.bird.setRototion(90);
        });
        this.bird.setDirection(2);
    };
    Map.prototype.onEnterFrame = function () {
        if (Center.gameState == GameState.Ready || Center.gameState == GameState.Doing) {
            if (this.ground1Image.x <= -this.ground1Image.width) {
                this.ground1Image.x = this.ground2Image.x + this.ground2Image.width - 2;
            }
            if (this.ground2Image.x <= -this.ground2Image.width) {
                this.ground2Image.x = this.ground1Image.x + this.ground1Image.width - 2;
            }
            this.ground1Image.x -= Data.SkyMoveSpeed;
            this.ground2Image.x -= Data.SkyMoveSpeed;
        }
        if (Center.gameState == GameState.Doing) {
            var bird = this.bird;
            var isGameOver = false;
            for (var _i = 0, _a = this.obstacleList; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.isCollision(bird)) {
                    isGameOver = true;
                }
            }
            if (bird.y + bird.height > Data.SceneHeight - Data.getGroundHeight() || bird.y < 0) {
                isGameOver = true;
            }
            for (var _b = 0, _c = this.obstacleList; _b < _c.length; _b++) {
                var item = _c[_b];
                if (item.x > bird.x) {
                    this.score = item.index - 1;
                    break;
                }
            }
            this.ui.setScoreLabel(this.score);
            if (isGameOver) {
                Center.gameState = GameState.End;
                this.end();
                console.log("gameover");
            }
        }
    };
    Map.prototype.startup = function () {
        Center.gameState = GameState.Doing;
        this.ground1Image.x = 0;
        this.ground2Image.x = this.ground1Image.width;
        this.clearObstacle();
        egret.clearTimeout(this.obstacleTimer);
        this.obstacleIndex = 0;
        this.createObstacle();
        this.birdDrop();
    };
    Map.prototype.createObstacle = function () {
        var _this = this;
        this.obstacleIndex++;
        var lastObs = this.obstacleList.last();
        var obstacle = new Obstacle(this.obstacleIndex, lastObs ? lastObs.centerY : Data.getBirdStartY());
        obstacle.x = Data.SceneWidth;
        this.obstacleLayer.addChild(obstacle);
        this.obstacleList.push(obstacle);
        egret.Tween.get(obstacle).to({ x: -obstacle.width }, 3000).call(function () {
            if (obstacle && obstacle.parent) {
                obstacle.parent.removeChild(obstacle);
            }
            _this.obstacleList.remove(obstacle);
        });
        egret.clearTimeout(this.obstacleTimer);
        this.obstacleTimer = egret.setTimeout(this.createObstacle, this, Math.randomInteger(1600, 1600));
    };
    Map.prototype.end = function () {
        egret.Tween.removeTweens(this.bird);
        this.birdDrop();
        egret.clearTimeout(this.obstacleTimer);
        for (var _i = 0, _a = this.obstacleList; _i < _a.length; _i++) {
            var item = _a[_i];
            egret.Tween.removeTweens(item);
        }
        var betscore = storage.bestScore.getValue();
        if (this.score > betscore) {
            betscore = this.score;
            storage.bestScore.setValue(betscore);
            platform.setUserCloudStorage([{ key: "score", value: betscore + "" }]);
        }
        this.ui.gameOver(this.score, betscore);
    };
    Map.prototype.clearObstacle = function () {
        for (var _i = 0, _a = this.obstacleList; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item && item.parent) {
                item.parent.removeChild(item);
            }
        }
        this.obstacleList = [];
    };
    return Map;
}(eui.Component));
__reflect(Map.prototype, "Map");
var Obstacle = (function (_super) {
    __extends(Obstacle, _super);
    function Obstacle(index, lastCenterY) {
        var _this = _super.call(this) || this;
        _this.index = index;
        _this.upImage = new eui.Image("tube03");
        _this.upImage.width = 80;
        _this.upImage.scale9Grid = new egret.Rectangle(6, 40, 40, 240);
        _this.downImage = new eui.Image("tube02");
        _this.downImage.width = 80;
        _this.downImage.scale9Grid = new egret.Rectangle(6, 40, 40, 240);
        _this.addChild(_this.upImage);
        _this.addChild(_this.downImage);
        var skyHeight = Data.getSkyHeight();
        var minCenter = lastCenterY - Data.DifficultyRange;
        minCenter = minCenter < 0 + Data.ObstacleUDGap / 2 ? 0 + Data.ObstacleUDGap / 2 : minCenter;
        var maxCenter = lastCenterY + Data.DifficultyRange;
        maxCenter = maxCenter > skyHeight - Data.ObstacleUDGap / 2 ? skyHeight - Data.ObstacleUDGap / 2 : maxCenter;
        var centerY = Math.randomInteger(minCenter, maxCenter);
        _this.centerY = centerY;
        _this.upImage.height = centerY - Data.ObstacleUDGap / 2;
        _this.upImage.y = 0;
        _this.downImage.y = centerY + Data.ObstacleUDGap / 2;
        _this.downImage.height = skyHeight - _this.downImage.y;
        _this.x = Data.SceneWidth + Data.ObstacleLRGap * (index - 1);
        _this.width = _this.upImage.width;
        return _this;
    }
    Obstacle.prototype.getUpRect = function () {
        return new egret.Rectangle(this.x, this.y, this.upImage.width, this.upImage.height);
    };
    Obstacle.prototype.getDownRect = function () {
        return new egret.Rectangle(this.x, this.y + this.downImage.y, this.downImage.width, this.downImage.height);
    };
    // private rect1:eui.Rect = new eui.Rect();
    // private rect2:eui.Rect = new eui.Rect();
    // private rect3:eui.Rect = new eui.Rect();
    Obstacle.prototype.isCollision = function (bird) {
        var birdRect = bird.getRect();
        var upRect = this.getUpRect();
        var downRect = this.getDownRect();
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
    };
    /**
     * 是否有效
     */
    Obstacle.prototype.isEffective = function () {
        if (this.x + this.width < 0)
            return false;
        return true;
    };
    return Obstacle;
}(egret.DisplayObjectContainer));
__reflect(Obstacle.prototype, "Obstacle");
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.showAD = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.setUserCloudStorage = function (kvobj) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.shareAppMessage = function (title, imgurl, query) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    DebugPlatform.prototype.sendShareData = function (kvobj) { };
    DebugPlatform.prototype.getLaunchOptionsSync = function () { };
    DebugPlatform.prototype.shareApp = function (title, imgurl, query) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    DebugPlatform.prototype.updateShareMenu = function (withticket) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
var Bird = (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        var _this = _super.call(this) || this;
        var mcFactory = new egret.MovieClipDataFactory(RES.getRes("bird_json"), RES.getRes("bird_png"));
        _this.bird = new egret.MovieClip(mcFactory.generateMovieClipData("action"));
        _this.bird.frameRate = 7;
        _this.bird.play(-1);
        _this.bird.scaleX = Data.Scale;
        _this.bird.scaleY = Data.Scale;
        _this.addChild(_this.bird);
        return _this;
    }
    Bird.prototype.getRect = function () {
        var width = 40 * Data.Scale;
        var height = 28 * Data.Scale;
        return new egret.Rectangle(this.x - width / 2, this.y - height / 2, width, height);
    };
    /**
     * statu 1 向上 2 向下 3 正常
     */
    Bird.prototype.setDirection = function (statu) {
        if (statu === void 0) { statu = 1; }
        egret.Tween.removeTweens(this.bird);
        if (statu == 1) {
            egret.Tween.get(this.bird).to({ rotation: -30 }, 200);
        }
        else if (statu == 2) {
            egret.Tween.get(this.bird).wait(200).to({ rotation: 90 }, 200);
        }
    };
    Bird.prototype.setRototion = function (v) {
        egret.Tween.removeTweens(this.bird);
        this.bird.rotation = v;
    };
    Object.defineProperty(Bird.prototype, "setY", {
        set: function (v) {
            this.y = v;
        },
        enumerable: true,
        configurable: true
    });
    return Bird;
}(egret.DisplayObjectContainer));
__reflect(Bird.prototype, "Bird");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        var _this = this;
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else if (typeof generateEUI2 !== 'undefined') {
            RES.getResByUrl("resource/gameEui.json", function (data, url) {
                window["JSONParseClass"]["setData"](data);
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI2);
                }, _this);
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        else if (typeof generateJSON !== 'undefined') {
            if (url.indexOf(".exml") > -1) {
                var dataPath = url.split("/");
                dataPath.pop();
                var dirPath = dataPath.join("/") + "_EUI.json";
                if (!generateJSON.paths[url]) {
                    RES.getResByUrl(dirPath, function (data) {
                        window["JSONParseClass"]["setData"](data);
                        egret.callLater(function () {
                            onSuccess.call(thisObject, generateJSON.paths[url]);
                        }, _this);
                    }, this, RES.ResourceItem.TYPE_JSON);
                }
                else {
                    egret.callLater(function () {
                        onSuccess.call(thisObject, generateJSON.paths[url]);
                    }, this);
                }
            }
            else {
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateJSON);
                }, this);
            }
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
var UI = (function (_super) {
    __extends(UI, _super);
    function UI() {
        var _this = _super.call(this) || this;
        _this.skinName = new UISkin();
        _this.tipGroup.touchChildren = false;
        _this.tipGroup.touchEnabled = false;
        _this.width = Data.SceneWidth;
        _this.height = Data.SceneHeight;
        _this.gameoverGroup.visible = false;
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClickTap, _this);
        return _this;
    }
    UI.prototype.onResize = function () {
        this.width = Data.SceneWidth;
        this.height = Data.SceneHeight;
    };
    UI.prototype.setScoreLabel = function (v) {
        if (v > Number(this.scoreBitmapLabel.text)) {
            egret.Tween.removeTweens(this.scoreBitmapLabel);
            egret.Tween.get(this.scoreBitmapLabel).to({ scaleX: 2, scaleY: 2 }, 200).to({ scaleX: 1.5, scaleY: 1.5 }, 100);
        }
        this.scoreBitmapLabel.text = v + "";
    };
    UI.prototype.setTipVisible = function (b) {
        this.tipGroup.visible = b;
    };
    UI.prototype.gameOver = function (score, betscore) {
        this.gameoverGroup.visible = true;
        Util.scrollNumber(this.thisScoreBitmapLabel, 0, score, 0.5, true, 1.2, function () { });
        this.bestScoreBitmapLabel.text = betscore + "";
    };
    UI.prototype.onClickTap = function (e) {
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
            console.log("this.groupButton");
            this.clickGroup();
        }
        else if (e.target == this.shareButton) {
            console.log("this.shareButton");
            this.share();
        }
    };
    Object.defineProperty(UI.prototype, "rankMask", {
        get: function () {
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
        },
        enumerable: true,
        configurable: true
    });
    UI.prototype.friendRank = function () {
        this.rankMask.visible = true;
        platform.sendShareData({ command: "open", type: "friend" });
        this._rankBit = platform.openDataContext.createDisplayObject(null, this.stage.stageWidth, this.stage.stageHeight);
        this._rankBit.touchEnabled = true;
        this._rankBit.pixelHitTest = true;
        this.addChild(this._rankBit);
        this.rankMask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMask, this);
    };
    UI.prototype.onMask = function (e) {
        platform.sendShareData({ command: "close" });
        this.rankMask.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onMask, this);
        this.removeChild(this._rankBit);
        this.rankMask.visible = false;
    };
    UI.prototype.clickGroup = function () {
        var _this = this;
        var desc = "我的分数" + this.scoreBitmapLabel.text;
        var imgurl = "resource/assets/icon" + (1 + Math.floor(Math.random() * 4)) + ".jpg";
        return new Promise(function (resolve, reject) {
            platform.updateShareMenu(true).then(function (data) {
                console.log("updateShareMenu: ", data);
                if (data) {
                    return platform.shareApp(desc, imgurl, desc).then(function (data) {
                        if (data && data.shareTickets && data.shareTickets.length > 0) {
                            _this.groupRank(data.shareTickets[0]);
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    });
                }
                else {
                    resolve(false);
                }
            });
        });
    };
    UI.prototype.groupRank = function (shareTicket) {
        this.rankMask.visible = true;
        platform.sendShareData({ command: "open", type: "group", groupid: shareTicket });
        this._rankBit = platform.openDataContext.createDisplayObject(null, this.stage.stageWidth, this.stage.stageHeight);
        this._rankBit.touchEnabled = true;
        this._rankBit.pixelHitTest = true;
        this.addChild(this._rankBit);
        this.rankMask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMask, this);
    };
    UI.prototype.share = function () {
        var desc = "我的分数" + this.scoreBitmapLabel.text;
        var imgurl = "resource/assets/icon" + (1 + Math.floor(Math.random() * 4)) + ".jpg";
        platform.shareAppMessage(desc, imgurl, desc);
    };
    return UI;
}(eui.Component));
__reflect(UI.prototype, "UI");
var Util;
(function (Util) {
    function isWxgame() {
        return platform["name"] == "wxgame";
    }
    Util.isWxgame = isWxgame;
    function lerp(fromNum, toNum, prop) {
        return fromNum + (toNum - fromNum) * prop;
    }
    Util.lerp = lerp;
    //数组滚动，从fromNum到toNum，持续时间 totalTm;
    function scrollNumber(label, fromNum, toNum, totalTm, isThousandFormat, scaleProp, cb, intervalTime, delayCBTime) {
        if (isThousandFormat === void 0) { isThousandFormat = false; }
        if (scaleProp === void 0) { scaleProp = 1.0; }
        if (cb === void 0) { cb = null; }
        if (intervalTime === void 0) { intervalTime = 50; }
        if (delayCBTime === void 0) { delayCBTime = 0; }
        var oldScaleX = label.scaleX;
        var oldScaleY = label.scaleY;
        var isBitmapFont = egret.is(label, "egret.BitmapFont");
        if (fromNum == toNum) {
            egret.setTimeout(function () { if (cb)
                cb(); }, null, 0);
            label.text = fromNum + "";
            return { stopCB: function () { } };
        }
        var dstLabel = label;
        var lElapseTm = 0;
        var lTotalTm = totalTm;
        if (lTotalTm < 0.001) {
            lTotalTm = 0.1;
        }
        var intervalID = 0;
        var lastNum = fromNum;
        var scaleTm = 100;
        if (totalTm * 1000 < scaleTm * 2) {
            scaleTm = totalTm * 1000 * 0.4;
        }
        if (scaleProp != 1) {
            egret.Tween.get(dstLabel).to({ scaleX: oldScaleX * scaleProp, scaleY: oldScaleY * scaleProp }, scaleTm).call(function () { egret.Tween.removeTweens(dstLabel); });
        }
        dstLabel.text = (isThousandFormat ? lastNum : lastNum) + "";
        var lastTime = egret.getTimer();
        var onTick = function () {
            var curTime = egret.getTimer();
            var elapseTm = curTime - lastTime;
            lastTime = curTime;
            lElapseTm = lElapseTm + elapseTm / 1000.0;
            if (lElapseTm > lTotalTm) {
                lElapseTm = lTotalTm;
                egret.clearInterval(intervalID);
                intervalID = 0;
                egret.Tween.get(dstLabel).to({ scaleX: oldScaleX, scaleY: oldScaleY }, scaleTm).wait(delayCBTime).call(function () {
                    egret.Tween.removeTweens(dstLabel);
                    if (intervalID == 0 && cb != null) {
                        cb.call(null);
                    }
                });
            }
            var curNum = Math.floor(Util.lerp(fromNum, toNum, lElapseTm / lTotalTm));
            if (curNum != lastNum) {
                lastNum = curNum;
                if (isNaN(lastNum) == true) {
                    console.log("label txt is NAN fromNum:" + fromNum + " toNum:" + toNum + " totalTm:" + totalTm);
                }
                dstLabel.text = (isThousandFormat ? lastNum : lastNum) + "";
            }
        };
        intervalID = egret.setInterval(onTick, null, intervalTime);
        var stopCB = function () {
            //egret.log("call Utils.scroll, stopCB, intervalID:"+intervalID);
            if (intervalID != 0) {
                egret.clearInterval(intervalID);
                dstLabel.text = (isThousandFormat ? toNum : toNum) + "";
                //egret.log("call Utils.scroll, dstLabel.text:"+toNum+" fromNum:"+fromNum);
                if (scaleProp != 1) {
                    egret.Tween.removeTweens(dstLabel);
                    egret.Tween.get(dstLabel).to({ scaleX: oldScaleX, scaleY: oldScaleY }, scaleTm).call(function () { egret.Tween.removeTweens(dstLabel); });
                }
                intervalID = 0;
                if (cb != null) {
                    cb.call(null);
                }
                label.text = toNum + "";
            }
        };
        return { stopCB: stopCB };
    }
    Util.scrollNumber = scrollNumber;
})(Util || (Util = {}));
if (!Array.prototype.first) {
    Array.prototype.first = function (callbackfn) {
        if (typeof callbackfn == "function") {
            for (var i = 0; i < this.length; i++) {
                var v = this[i];
                if (callbackfn(v, i, this)) {
                    return v;
                }
            }
        }
        else if (this.length > 0) {
            return this[0];
        }
        return null;
    };
}
if (!Array.prototype.last) {
    Array.prototype.last = function (callbackfn) {
        if (typeof callbackfn == "function") {
            for (var i = this.length - 1; i >= 0; i--) {
                var v = this[i];
                if (callbackfn(v, i, this)) {
                    return v;
                }
            }
        }
        else if (this.length > 0) {
            return this[this.length - 1];
        }
        return null;
    };
}
if (!Array.prototype.random) {
    Array.prototype.random = function () {
        if (this.length == 0) {
            return null;
        }
        var index = Math.randomInteger(0, this.length - 1);
        return this[index];
    };
}
if (!Array.prototype.remove) {
    Array.prototype.remove = function (value, fromIndex) {
        var index = this.indexOf(value, fromIndex);
        if (index < 0)
            return false;
        this.splice(index, 1);
        return true;
    };
}
if (!Array.prototype.removeAt) {
    Array.prototype.removeAt = function (index) {
        if (index < 0 || index >= this.length)
            return false;
        this.splice(index, 1);
        return true;
    };
}
if (!Array.prototype.removeFirst) {
    Array.prototype.removeFirst = function (predicate, fromIndex) {
        if (predicate == null)
            return false;
        if (fromIndex == null)
            fromIndex = 0;
        else if (fromIndex < 0 || fromIndex >= this.length)
            return false;
        for (var i = fromIndex; i < this.length; i++) {
            if (predicate(this[i], i)) {
                this.splice(i, 1);
                return true;
            }
        }
        return false;
    };
}
if (!Array.prototype.removeAll) {
    Array.prototype.removeAll = function (predicate, fromIndex) {
        if (fromIndex == null)
            fromIndex = 0;
        if (fromIndex < 0 || fromIndex >= this.length)
            return 0;
        if (predicate == null) {
            var length = this.length;
            this.splice(fromIndex, this.length);
            return length - this.length;
        }
        // 逆序遍历，防止下标错乱
        var count = 0;
        for (var i = this.length - 1; i >= fromIndex; i--) {
            if (predicate(this[i], i)) {
                this.splice(i, 1);
                count++;
            }
        }
        return count;
    };
}
if (!Array.prototype.clear) {
    Array.prototype.clear = function () {
        this.splice(0, this.length);
    };
}
if (!Array.prototype.clone) {
    Array.prototype.clone = function () {
        return this.slice(0);
    };
}
if (!Array.create) {
    function createMultiDimensionArray(dimensionLength) {
        if (dimensionLength.length == 0)
            return null;
        var array = new Array(dimensionLength[0]);
        if (dimensionLength.length > 1) {
            var subDimension = dimensionLength.slice(1);
            for (var i = 0; i < array.length; i++) {
                array[i] = createMultiDimensionArray(subDimension);
            }
        }
        return array;
    }
    Array.create = function () {
        var dimensionLength = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            dimensionLength[_i] = arguments[_i];
        }
        return createMultiDimensionArray(dimensionLength);
    };
}
Array.prototype.seek = function (func) {
    if (func == null) {
        return false;
    }
    for (var _i = 0, _a = this; _i < _a.length; _i++) {
        var item = _a[_i];
        if (func(item)) {
            return true;
        }
    }
    return false;
};
Array.prototype.first = function (func) {
    if (func == null) {
        return this[0];
    }
    for (var _i = 0, _a = this; _i < _a.length; _i++) {
        var item = _a[_i];
        if (func(item)) {
            return item;
        }
    }
    return null;
};
Array.prototype.find = function (func) {
    if (func == null) {
        return -1;
    }
    for (var i = 0; i < this.length; i++) {
        if (func(this[i])) {
            return i;
        }
    }
    return -1;
};
Array.prototype.deletefirst = function (func) {
    if (func == null) {
        return -1;
    }
    for (var i = 0; i < this.length; i++) {
        if (func(this[i])) {
            this.splice(i, 1);
            return i;
        }
    }
    return -1;
};
Array.prototype.last = function (func) {
    if (!(this instanceof Array)) {
        return null;
    }
    return this[this.length - 1];
};
Array.prototype.random = function () {
    var length = this.length - 1;
    return this[Math.randomInteger(0, length)];
};
Array.prototype.randomItems = function (selectnum) {
    var length = this.length - 1;
    var indexs = Math.randomIntegers(0, length, selectnum);
    var newArray = new Array();
    for (var _i = 0, indexs_1 = indexs; _i < indexs_1.length; _i++) {
        var i = indexs_1[_i];
        newArray.push(this[i]);
    }
    return newArray;
};
Array.prototype.distinct = function () {
    var h = {};
    var arr = [];
    for (var i = 0; i < this.length; i++) {
        if (!h[this[i]]) {
            h[this[i]] = true;
            arr.push(this[i]);
        }
    }
    return arr;
};
Array.prototype.deepcopy = function () {
    return this.slice(0);
};
if (!Array.prototype.reverse) {
    Array.prototype.reverse = function () {
        var arr = [];
        var len = this.length;
        for (var i = 0; i < len; i++) {
            arr.unshift(this[i]);
        }
        return arr;
    };
}
if (!Math.randomFloat) {
    Math.randomFloat = function (min, max) {
        if (max > min) {
            min, max = max, min;
        }
        return min + Math.random() * (max - min);
    };
}
if (!Math.randomInteger) {
    Math.randomInteger = function (min, max) {
        if (max > min) {
            min, max = max, min;
        }
        min, max = Math.round(min), Math.round(max);
        // The Math.random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).
        return min + Math.floor(Math.random() * (max - min + 1));
    };
}
if (!Math.clamp) {
    Math.clamp = function (value, min, max) {
        if (value == null)
            return min;
        if (value < min)
            return min;
        else if (value > max)
            return max;
        else
            return value;
    };
}
Math.randomInteger = function (min, max) {
    var choices = max - min + 1;
    return Math.floor(Math.random() * choices + min);
};
Math.randomIntegers = function (min, max, selectnum) {
    if ((max - min + 1) < selectnum)
        return;
    var choices = max - min + 1;
    var nums = new Array();
    for (var i = 0; i < selectnum; i++) {
        var equal = false;
        var random = Math.floor(Math.random() * choices + min);
        for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
            var item = nums_1[_i];
            if (item == random) {
                equal = true;
                i--;
                break;
            }
        }
        if (!equal)
            nums.push(random);
    }
    return nums;
};
Math.boolFromPercentage = function (num) {
    if (Math.random() < num) {
        return true;
    }
    else {
        return false;
    }
};
var FriendRank = (function (_super) {
    __extends(FriendRank, _super);
    function FriendRank() {
        return _super.call(this) || this;
    }
    FriendRank.prototype.Init = function () {
        var bitmapdata = new egret.BitmapData(window["sharedCanvas"]);
        bitmapdata.$deleteSource = false;
        var texture = new egret.Texture();
        texture._setBitmapData(bitmapdata);
        this.bitmap = new egret.Bitmap(texture);
        this.bitmap.width = Data.SceneWidth;
        this.bitmap.height = Data.SceneHeight;
        this.addChild(this.bitmap);
        egret.startTick(function (timeStarmp) {
            egret.WebGLUtils.deleteWebGLTexture(bitmapdata.webGLTexture);
            bitmapdata.webGLTexture = null;
            return false;
        }, this);
    };
    return FriendRank;
}(egret.Sprite));
__reflect(FriendRank.prototype, "FriendRank");
var HelpPanel = (function (_super) {
    __extends(HelpPanel, _super);
    function HelpPanel() {
        return _super.call(this) || this;
    }
    HelpPanel.prototype.Init = function () {
        this.alpha = 0.5;
        this.touchEnabled = false;
        this.touchChildren = false;
        var rbit = new egret.Bitmap(RES.getRes("finger_png"));
        var lbit = new egret.Bitmap(RES.getRes("finger_png"));
        lbit.anchorOffsetX = rbit.anchorOffsetX = 80;
        lbit.anchorOffsetY = rbit.anchorOffsetY = 90;
        lbit.scaleX = -3;
        lbit.scaleY = 3;
        rbit.scaleX = rbit.scaleY = 3;
        this.addChild(lbit);
        this.addChild(rbit);
        lbit.x = -40;
        rbit.x = Data.SceneWidth;
        lbit.y = rbit.y = Data.SceneHeight;
        this._lbit = lbit;
        this._rbit = rbit;
        this.visible = false;
    };
    HelpPanel.prototype.Start = function () {
        this.visible = true;
        egret.Tween.get(this._lbit, { loop: true }).to({ rotation: 45, alpha: 0 }, 500).to({ rotation: 0, alpha: 1 }).wait(500);
        // this._rbit.rotation=-45;
        // this._rbit.alpha=0;
        egret.Tween.get(this._rbit, { loop: true }).wait(500).to({ rotation: 0, alpha: 1 }).to({ rotation: -45, alpha: 0 }, 500);
    };
    HelpPanel.prototype.Stop = function () {
        egret.Tween.removeTweens(this._lbit);
        egret.Tween.removeTweens(this._rbit);
        this.visible = false;
    };
    return HelpPanel;
}(egret.Sprite));
__reflect(HelpPanel.prototype, "HelpPanel");

;window.Main = Main;