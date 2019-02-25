var egret = window.egret;
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/skins/MapSkin.exml'] = window.MapSkin = (function (_super) {
	__extends(MapSkin, _super);
	function MapSkin() {
		_super.call(this);
		this.skinParts = ["skyImage","ground1Image","ground2Image"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.skyImage_i(),this.ground1Image_i(),this.ground2Image_i()];
	}
	var _proto = MapSkin.prototype;

	_proto.skyImage_i = function () {
		var t = new eui.Image();
		this.skyImage = t;
		t.anchorOffsetY = 0;
		t.height = 881;
		t.scale9Grid = new egret.Rectangle(50,80,300,311);
		t.source = "background_day";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ground1Image_i = function () {
		var t = new eui.Image();
		this.ground1Image = t;
		t.bottom = 0;
		t.scale9Grid = new egret.Rectangle(1,52,399,65);
		t.source = "ground";
		t.width = 640;
		return t;
	};
	_proto.ground2Image_i = function () {
		var t = new eui.Image();
		this.ground2Image = t;
		t.bottom = 0;
		t.scale9Grid = new egret.Rectangle(1,52,399,65);
		t.source = "ground";
		t.width = 640;
		return t;
	};
	return MapSkin;
})(eui.Skin);generateEUI.paths['resource/skins/UISkin.exml'] = window.UISkin = (function (_super) {
	__extends(UISkin, _super);
	var UISkin$Skin1 = 	(function (_super) {
		__extends(UISkin$Skin1, _super);
		function UISkin$Skin1() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",95),
						new eui.SetProperty("_Image1","percentHeight",95)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = UISkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "ui_001";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return UISkin$Skin1;
	})(eui.Skin);

	var UISkin$Skin2 = 	(function (_super) {
		__extends(UISkin$Skin2, _super);
		function UISkin$Skin2() {
			_super.call(this);
			this.skinParts = ["aa"];
			
			this.elementsContent = [this._Rect1_i(),this.aa_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Rect1","percentWidth",95),
						new eui.SetProperty("_Rect1","percentHeight",95)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = UISkin$Skin2.prototype;

		_proto._Rect1_i = function () {
			var t = new eui.Rect();
			this._Rect1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.aa_i = function () {
			var t = new eui.Label();
			this.aa = t;
			t.horizontalCenter = 0;
			t.text = "排行榜";
			t.verticalCenter = 0;
			return t;
		};
		return UISkin$Skin2;
	})(eui.Skin);

	var UISkin$Skin3 = 	(function (_super) {
		__extends(UISkin$Skin3, _super);
		function UISkin$Skin3() {
			_super.call(this);
			this.skinParts = ["aa"];
			
			this.elementsContent = [this._Rect1_i(),this.aa_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Rect1","percentWidth",95),
						new eui.SetProperty("_Rect1","percentHeight",95)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = UISkin$Skin3.prototype;

		_proto._Rect1_i = function () {
			var t = new eui.Rect();
			this._Rect1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.aa_i = function () {
			var t = new eui.Label();
			this.aa = t;
			t.horizontalCenter = 0;
			t.text = "群排行榜";
			t.verticalCenter = 0;
			return t;
		};
		return UISkin$Skin3;
	})(eui.Skin);

	var UISkin$Skin4 = 	(function (_super) {
		__extends(UISkin$Skin4, _super);
		function UISkin$Skin4() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",95),
						new eui.SetProperty("_Image1","percentHeight",95)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = UISkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "ui_002";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return UISkin$Skin4;
	})(eui.Skin);

	var UISkin$Skin5 = 	(function (_super) {
		__extends(UISkin$Skin5, _super);
		function UISkin$Skin5() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",95),
						new eui.SetProperty("_Image1","percentHeight",95)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = UISkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "ui_003";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return UISkin$Skin5;
	})(eui.Skin);

	function UISkin() {
		_super.call(this);
		this.skinParts = ["tipGroup","scoreBitmapLabel","thisScoreBitmapLabel","bestScoreBitmapLabel","restartButton","rankButton","groupButton","shareButton","gameoverGroup"];
		
		this.height = 1136;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.tipGroup_i(),this._Group1_i(),this.gameoverGroup_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = UISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(6,40,40,240);
		t.source = "bird_res_json.tube02";
		t.visible = false;
		t.width = 80;
		t.x = 262;
		t.y = 286;
		return t;
	};
	_proto.tipGroup_i = function () {
		var t = new eui.Group();
		this.tipGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 1.5;
		t.scaleX = 2.5;
		t.scaleY = 2.5;
		t.source = "bird_res_json.ready_00";
		t.y = 306;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 98;
		t.horizontalCenter = 56;
		t.scaleX = 1.7;
		t.scaleY = 1.7;
		t.source = "bird_res_json.tap";
		t.verticalCenter = 0;
		t.width = 121;
		t.x = 285;
		t.y = 495;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54;
		t.horizontalCenter = 0;
		t.width = 140;
		t.y = 20;
		t.elementsContent = [this.scoreBitmapLabel_i()];
		return t;
	};
	_proto.scoreBitmapLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.scoreBitmapLabel = t;
		t.font = "birdFont_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "0";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gameoverGroup_i = function () {
		var t = new eui.Group();
		this.gameoverGroup = t;
		t.height = 1136;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Group2_i(),this._Group3_i(),this.restartButton_i(),this.rankButton_i(),this.groupButton_i(),this._Button1_i(),this.shareButton_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bird_res_json.game_over";
		t.y = 254;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 2;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "ui_004";
		t.y = 427;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54;
		t.width = 120;
		t.x = 402;
		t.y = 490;
		t.elementsContent = [this.thisScoreBitmapLabel_i()];
		return t;
	};
	_proto.thisScoreBitmapLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.thisScoreBitmapLabel = t;
		t.font = "birdFont_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "0";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54;
		t.width = 120;
		t.x = 402;
		t.y = 574;
		t.elementsContent = [this.bestScoreBitmapLabel_i()];
		return t;
	};
	_proto.bestScoreBitmapLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.bestScoreBitmapLabel = t;
		t.font = "birdFont_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.text = "0";
		t.verticalCenter = 0;
		return t;
	};
	_proto.restartButton_i = function () {
		var t = new eui.Button();
		this.restartButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118;
		t.horizontalCenter = -106;
		t.label = "Button";
		t.width = 240;
		t.y = 876;
		t.skinName = UISkin$Skin1;
		return t;
	};
	_proto.rankButton_i = function () {
		var t = new eui.Button();
		this.rankButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 156;
		t.label = "Button";
		t.width = 148;
		t.y = 900;
		t.skinName = UISkin$Skin2;
		return t;
	};
	_proto.groupButton_i = function () {
		var t = new eui.Button();
		this.groupButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 156;
		t.label = "Button";
		t.width = 148;
		t.y = 994;
		t.skinName = UISkin$Skin3;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.label = "Button";
		t.width = 250;
		t.x = 84;
		t.y = 721.45;
		t.skinName = UISkin$Skin4;
		return t;
	};
	_proto.shareButton_i = function () {
		var t = new eui.Button();
		this.shareButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.label = "Button";
		t.width = 220;
		t.x = 357.33;
		t.y = 721.45;
		t.skinName = UISkin$Skin5;
		return t;
	};
	return UISkin;
})(eui.Skin);