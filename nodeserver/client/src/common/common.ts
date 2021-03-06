﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
/// Generated from: common.proto

module Cmd {
	/**
	 * 玩家在线状态
	 */
	export enum OnlineState {
		/**
		 * 离线
		 */
		OnlineState_Offline = 0,
		/**
		 * 在线
		 */
		OnlineState_Online = 1,
		/**
		 * 网络差
		 */
		OnlineState_Slow = 2,
		/**
		 * 离开,切后台
		 */
		OnlineState_Leave = 3,
		/**
		 * 电话中
		 */
		OnlineState_Calling = 4,
		/**
		 * 托管状态
		 */
		OnlineState_Hosting = 5,
		/**
		 * 排队中,匹配号用
		 */
		OnlineState_Waiting = 6,
		/**
		 * 游戏中,匹配号用
		 */
		OnlineState_Gameing = 7
	}
	/**
	 * 房间类型
	 */
	export enum RoomType {
		/**
		 * 普通房间
		 */
		RoomType_Normal = 0,
		/**
		 * 快速匹配房
		 */
		RoomType_Quick = 1,
		/**
		 * 练习场
		 */
		RoomType_Learn = 2,
		/**
		 * 匹配号生成房,roomid==globalroomid
		 */
		RoomType_Match = 3
	}
	/**
	 * 容器更新操作符
	 */
	export enum UpdateOperator {
		/**
		 * 全部覆盖
		 */
		Replace = 1,
		/**
		 * 追加或更新
		 */
		Update = 2,
		/**
		 * 删除
		 */
		Delete = 3
	}
	/**
	 * 房间属性
	 */
	export class roomPropObj {
		/**
		 * 1:房间局数 3:人数模式 4:支付模式 5:游金倍数 101:鬼牌模式(0无鬼 1 2) 102:打捆(金华)
		 */
		id: number;
		value: number;
		GetType(): string { return 'Cmd.roomPropObj'; }
	}
	export class RoomState {
		/**
		 * 配置出牌倒计时
		 */
		outCount: number;
		/**
		 * 配置操作牌倒计时
		 */
		opCount: number;
		/**
		 * 进入房间id
		 */
		roomId: number;
		/**
		 * 玩家基础信息
		 */
		userInfoSet: UserBaseInfo[];
		/**
		 * 房间类型RoomType,0表示正常放假,1表示快速匹配场,2表示练习场
		 */
		roomType: number;
		/**
		 * 所有已准备玩家uid
		 */
		prepareSet: number[];
		/**
		 * 音效音乐等设置信息
		 */
		setInfo: SetInfo;
		/**
		 * 房间属性,带kv属性的
		 */
		roomProps: roomPropObj[];
		/**
		 * 玩法属性,只是开关类型的
		 */
		props: number[];
		/**
		 * 剩余解散房间的时间秒
		 */
		dissoveTime: number;
		/**
		 * 对赌类型 1:金币 2:钻石
		 */
		gambletype: number;
		/**
		 * 金币场底注
		 */
		betchips: number;
		/**
		 * 是否是暗杠, 1非暗杠 2暗杠
		 */
		darkBar: number;
		/**
		 * 金币场输赢上限
		 */
		winLimit: number;
		/**
		 * 进入房间matchId
		 */
		matchId: number;
		GetType(): string { return 'Cmd.RoomState'; }
	}
	/**
	 * 分享信息
	 */
	export class ShareInfo {
		/**
		 * 标题
		 */
		title: string;
		/**
		 * 内容
		 */
		content: string;
		/**
		 * 分享地址
		 */
		webPageUrl: string;
		/**
		 * 二维码
		 */
		codeUrl: string;
		GetType(): string { return 'Cmd.ShareInfo'; }
	}
	/**
	 * 邮寄地址
	 */
	export class DeliverAddr {
		/**
		 * 邮政编码,可不要
		 */
		code: number;
		/**
		 * 收件人姓名
		 */
		name: string;
		/**
		 * 收件人电话
		 */
		phone: string;
		/**
		 * 收件详细地址
		 */
		addr: string;
		/**
		 * 微信
		 */
		wechat: string;
		/**
		 * qq 2017.11.15好彩真人添加
		 */
		qq: string;
		/**
		 * 邮箱 2017.11.15好彩真人添加
		 */
		mail: string;
		GetType(): string { return 'Cmd.DeliverAddr'; }
	}
	export class flowerObj {
		id: number;
		num: number;
		GetType(): string { return 'Cmd.flowerObj'; }
	}
	export class njU {
		/**
		 * 当前分数
		 */
		curP: number;
		/**
		 * 南京麻将总点数
		 */
		tolP: number;
		GetType(): string { return 'Cmd.njU'; }
	}
	/**
	 * 比赛场入场券相关
	 */
	export class ticketObj {
		/**
		 * 入场券id
		 */
		ticketId: number;
		/**
		 * 场次id
		 */
		playId: number;
		/**
		 * 数量
		 */
		count: number;
		GetType(): string { return 'Cmd.ticketObj'; }
	}
	/**
	 * 比赛场勋章相关
	 */
	export class medalObj {
		/**
		 * 勋章id
		 */
		medalId: number;
		/**
		 * 数量
		 */
		count: number;
		GetType(): string { return 'Cmd.medalObj'; }
	}
	/**
	 * 魅力值相关
	 */
	export class usercpObj {
		id: number;
		count: number;
		GetType(): string { return 'Cmd.usercpObj'; }
	}
	/**
	 * 聊天消息
	 */
	export class ChatInfo {
		/**
		 * 聊天类型
		 */
		chatType: number;
		/**
		 * 文字/语音对应的文字
		 */
		words: string;
		/**
		 * 语音时长
		 */
		time: string;
		/**
		 * 语音对应地址
		 */
		url: string;
		/**
		 * 表情id
		 */
		emojiId: number;
		/**
		 * 发送者
		 */
		fromUid: number;
		/**
		 * 接收者
		 */
		toUid: number;
		/**
		 * 时间戳
		 */
		sendTime: number;
		GetType(): string { return 'Cmd.ChatInfo'; }
	}
	/**
	 * 商品
	 */
	export class Goods {
		goodsId: number;
		goodsNum: number;
		GetType(): string { return 'Cmd.Goods'; }
	}
	/**
	 * 成长属性,让每个账号变的有成长性,可部分规避无门槛逃单问题
	 */
	export class GrowthAttr {
		/**
		 * 本周上桌次数
		 */
		playNumWeek: number;
		/**
		 * 本月上桌次数
		 */
		playNumMon: number;
		/**
		 * 总上桌次数0-100新手,100-1000资深,...
		 */
		playNumAll: number;
		/**
		 * 本周获胜次数
		 */
		winNumWeek: number;
		/**
		 * 本月获胜次数
		 */
		winNumMon: number;
		/**
		 * 总获胜次数0-100新手,100-1000资深,...
		 */
		winNumAll: number;
		/**
		 * 本周获胜次数
		 */
		bigWinNumWeek: number;
		/**
		 * 本月获胜次数
		 */
		bigWinNumMon: number;
		/**
		 * 总获胜次数0-100新手,100-1000资深,...
		 */
		bigWinNumAll: number;
		/**
		 * 胜率winNumAll/playNumAll
		 */
		winRate: number;
		/**
		 * 本周上桌次数排名
		 */
		playOrderWeek: number;
		/**
		 * 本月上桌次数排名
		 */
		playOrderMon: number;
		/**
		 * 总上桌次数0-100新手,100-1000资深,...
		 */
		playOrderAll: number;
		/**
		 * 本周获胜次数排名
		 */
		winOrderWeek: number;
		/**
		 * 本月获胜次数排名
		 */
		winOrderMon: number;
		/**
		 * 总获胜次数0-100新手,100-1000资深,...
		 */
		winOrderAll: number;
		/**
		 * 本周获胜次数排名
		 */
		bigWinOrderWeek: number;
		/**
		 * 本月获胜次数排名
		 */
		bigWinOrderMon: number;
		/**
		 * 总获胜次数0-100新手,100-1000资深,...
		 */
		bigWinOrderAll: number;
		/**
		 * 商城积分
		 */
		shopPoint: number;
		GetType(): string { return 'Cmd.GrowthAttr'; }
	}
	/**
	 * 玩家充值信息
	 */
	export class RechargeInfo {
		/**
		 * 累计充值
		 */
		totalRecharge: number;
		/**
		 * 月充值
		 */
		monthRecharge: number;
		/**
		 * 日充值
		 */
		dayRecharge: number;
		GetType(): string { return 'Cmd.RechargeInfo'; }
	}
	/**
	 * 拥有的时效性道具
	 */
	export class TimeGoods {
		/**
		 * 对应id
		 */
		id: number;
		/**
		 * 剩余的有效天数
		 */
		timeDay: number;
		GetType(): string { return 'Cmd.TimeGoods'; }
	}
	/**
	 * 正在使用个人形象
	 */
	export class PersonalImage {
		/**
		 * 1头像框(暂时只有头像框)
		 */
		typ: number;
		/**
		 * 0不使用 1购买道具 2vip特有
		 */
		optyp: number;
		/**
		 * 购买道具对应的id
		 */
		id: number;
		/**
		 * vip特有对应的vip等级
		 */
		vip: number;
		GetType(): string { return 'Cmd.PersonalImage'; }
	}
	/**
	 * 基础数据
	 */
	export class UserBaseInfo {
		uid: number;
		headurl: string;
		nickname: string;
		gender: string;
		/**
		 * 房卡模式 zoneType=2
		 */
		card: number;
		/**
		 * 钻石模式 zoneType=4
		 */
		diamond: number;
		platId: number;
		subPlatId: string;
		ip: string;
		/**
		 * 上级代理 如果没有返回0
		 */
		parent: number;
		vip: number;
		/**
		 * 积分
		 */
		points: number;
		seatId: number;
		/**
		 * 为了方便放这里,在线状态OnlineState
		 */
		onlineState: number;
		/**
		 * 为了方便放这里,准备状态
		 */
		bReady: number;
		/**
		 * 为了方便放这里,当前立着的手牌数量
		 */
		handCardNum: number;
		flower: flowerObj[];
		nickName: string;
		headUrl: string;
		/**
		 * uid的索引
		 */
		sid: number;
		/**
		 * 纬度
		 */
		lat: number;
		/**
		 * 经度
		 */
		lng: number;
		/**
		 * 南京麻将使用下注
		 */
		nju: njU;
		/**
		 * 金币
		 */
		chips: number;
		/**
		 * 入场券
		 */
		ticket: ticketObj[];
		/**
		 * 勋章
		 */
		medal: medalObj[];
		/**
		 * 单局飘分
		 */
		multiPiao: number;
		/**
		 * 个性签名
		 */
		signature: string;
		/**
		 * 是否是新玩家 0:不是 1:是
		 */
		isNew: number;
		/**
		 * 游戏局数
		 */
		playNum: number;
		/**
		 * 保险箱的钱数
		 */
		bankMoney: number;
		/**
		 * 是否修改过昵称 1:修改过(好彩真人的需求)
		 */
		isChangeName: number;
		/**
		 * 魅力值(好彩真人)
		 */
		usercp: number;
		/**
		 * 魅力值的具体信息(好彩真人)
		 */
		usercpObj: usercpObj[];
		/**
		 * 是否为好友 1:是好友(请求其他用户信息的标志，好彩真人的需求)
		 */
		isFriend: number;
		/**
		 * 奖券
		 */
		giftCoupon: number;
		/**
		 * 最后一条聊天记录(好彩真人好友系统使用)
		 */
		lastMsg: ChatInfo;
		/**
		 * 礼品券(好彩真人麻将,金币场赢家有几率获得)
		 */
		giftVoucher: number;
		/**
		 * 手机号(好彩真人麻将,为nil表示未绑定)
		 */
		phonenumber: string;
		/**
		 * 特殊分
		 */
		specialpoints: number;
		/**
		 * 赢三张头衔
		 */
		title: string;
		/**
		 * 赢三张喇叭
		 */
		horn: number;
		/**
		 * 地理位置信息
		 */
		loc: string;
		/**
		 * 成长属性,西安先用
		 */
		growth: GrowthAttr;
		/**
		 * 玩家充值
		 */
		recharge: RechargeInfo;
		/**
		 * 正在使用的个人形象 2017.11.15好彩真人需求
		 */
		personalImage: PersonalImage[];
		GetType(): string { return 'Cmd.UserBaseInfo'; }
	}
	/**
	 * 请求解散房间
	 */
	export class RequestDissolveRoom_C {
		GetType(): string { return 'Cmd.RequestDissolveRoom_C'; }
	}
	export class RequestDissolveRoom_S {
		resultCode: number;
		desc: string;
		/**
		 * 在线玩家人数
		 */
		userNum: number;
		GetType(): string { return 'Cmd.RequestDissolveRoom_S'; }
	}
	export class RequestDissolveRoom_Brd {
		/**
		 * 请求解散房间的玩家uid
		 */
		uid: number;
		/**
		 * 等待倒计时
		 */
		waitTime: number;
		GetType(): string { return 'Cmd.RequestDissolveRoom_Brd'; }
	}
	/**
	 * 回应解散房间
	 */
	export class ReplyDissolveRoom_C {
		/**
		 * 1表示同意
		 */
		isAgree: number;
		GetType(): string { return 'Cmd.ReplyDissolveRoom_C'; }
	}
	export class ReplyDissolveRoom_S {
		resultCode: number;
		desc: string;
		GetType(): string { return 'Cmd.ReplyDissolveRoom_S'; }
	}
	export class ReplyDissolveRoom_Brd {
		uid: number;
		/**
		 * 1表示同意
		 */
		isAgree: number;
		GetType(): string { return 'Cmd.ReplyDissolveRoom_Brd'; }
	}
	/**
	 * 成功解散房间
	 */
	export class SuccessDissolveRoom_Brd {
		/**
		 * 所有同意解散的玩家昵称
		 */
		agreeUsers: string[];
		/**
		 * 所有不同意解散的玩家称
		 */
		disagreeUsers: string[];
		/**
		 * 是否解散成功
		 */
		bOk: boolean;
		GetType(): string { return 'Cmd.SuccessDissolveRoom_Brd'; }
	}
	/**
	 * 主动上报客户端IP
	 */
	export class ClientIpCmd_C {
		ip: number;
		port: number;
		/**
		 * 127.0.0.1
		 */
		ipstr: string;
		/**
		 * 127.0.0.1:1000
		 */
		ipport: string;
		GetType(): string { return 'Cmd.ClientIpCmd_C'; }
	}
	/**
	 * gps获取经度纬度
	 */
	export class GetGPSLocationCmd_C {
		/**
		 * 纬度
		 */
		lat: number;
		/**
		 * 经度
		 */
		lng: number;
		GetType(): string { return 'Cmd.GetGPSLocationCmd_C'; }
	}
	/**
	 * gps获取经度纬度广播
	 */
	export class GetGPSLocationCmd_Brd {
		/**
		 * 玩家id
		 */
		uid: number;
		/**
		 * 纬度
		 */
		lat: number;
		/**
		 * 经度
		 */
		lng: number;
		GetType(): string { return 'Cmd.GetGPSLocationCmd_Brd'; }
	}
	export class IpGPS {
		/**
		 * 玩家id
		 */
		uid: number;
		/**
		 * 纬度
		 */
		lat: number;
		/**
		 * 经度
		 */
		lng: number;
		ip: number;
		/**
		 * 127.0.0.1
		 */
		ipstr: string;
		GetType(): string { return 'Cmd.IpGPS'; }
	}
	/**
	 * 请求ip和gps获取经度纬度
	 */
	export class RequestIpGPSCmd_C {
		/**
		 * 房间id,默认不填就是请求自己的
		 */
		roomId: number;
		GetType(): string { return 'Cmd.RequestIpGPSCmd_C'; }
	}
	/**
	 * 返回ip和gps获取经度纬度
	 */
	export class ReturnIpAndGPSCmd_S {
		/**
		 * 位置信息
		 */
		list: IpGPS[];
		GetType(): string { return 'Cmd.ReturnIpAndGPSCmd_S'; }
	}
	export class JsonCompressKey {
		key: string;
		/**
		 * 嵌套描述
		 */
		json: JsonCompressKey[];
		GetType(): string { return 'Cmd.JsonCompressKey'; }
	}
	/**
	 * json压缩约定消息
	 */
	export class JsonCompressNullUserPmd_CS {
		key: string;
		json: JsonCompressKey[];
		/**
		 * 0表示不省略,1表示省略,默认不省略,default省略,{} ,&quot;&quot;,0
		 */
		omit: number;
		/**
		 * 0表示重置,1表示添加
		 */
		add: number;
		/**
		 * 消息列表
		 */
		msglist: string[];
		GetType(): string { return 'Cmd.JsonCompressNullUserPmd_CS'; }
	}
	/**
	 * 语音聊天
	 */
	export class VoiceChat_C {
		/**
		 * 语音时长
		 */
		time: string;
		/**
		 * 对应文字
		 */
		words: string;
		/**
		 * 对应地址
		 */
		url: string;
		GetType(): string { return 'Cmd.VoiceChat_C'; }
	}
	export class VoiceChat_S {
		/**
		 * 返回码
		 */
		resultCode: number;
		/**
		 * 信息
		 */
		desc: string;
		GetType(): string { return 'Cmd.VoiceChat_S'; }
	}
	export class VoiceChat_Brd {
		/**
		 * 语音时长
		 */
		time: string;
		/**
		 * 对应文字
		 */
		words: string;
		/**
		 * 对应地址
		 */
		url: string;
		/**
		 * 房间id
		 */
		roomId: number;
		/**
		 * 发送语音的玩家id
		 */
		uid: number;
		GetType(): string { return 'Cmd.VoiceChat_Brd'; }
	}
	export class VoiceObj {
		/**
		 * 语音时长
		 */
		time: string;
		/**
		 * 对应文字
		 */
		words: string;
		/**
		 * 对应地址
		 */
		url: string;
		/**
		 * 发送聊天的玩家id
		 */
		uid: number;
		/**
		 * 发送聊天时的时间
		 */
		timestamp: string;
		GetType(): string { return 'Cmd.VoiceObj'; }
	}
	/**
	 * 语音记录
	 */
	export class VoiceChatRecord_C {
		GetType(): string { return 'Cmd.VoiceChatRecord_C'; }
	}
	export class VoiceChatRecord_S {
		/**
		 * 返回码
		 */
		resultCode: number;
		/**
		 * 信息
		 */
		desc: string;
		/**
		 * 语音记录
		 */
		records: VoiceObj[];
		GetType(): string { return 'Cmd.VoiceChatRecord_S'; }
	}
	export class CommonChat_C {
		/**
		 * 语音id
		 */
		voiceId: number;
		/**
		 * 文字聊天内容
		 */
		words: string;
		GetType(): string { return 'Cmd.CommonChat_C'; }
	}
	export class CommonChat_S {
		/**
		 * 返回码
		 */
		resultCode: number;
		/**
		 * 信息
		 */
		desc: string;
		GetType(): string { return 'Cmd.CommonChat_S'; }
	}
	export class CommonChat_Brd {
		/**
		 * 语音id
		 */
		voiceId: number;
		/**
		 * 发送语音的玩家id
		 */
		uid: number;
		/**
		 * 文字聊天内容
		 */
		words: string;
		GetType(): string { return 'Cmd.CommonChat_Brd'; }
	}
	export class SetInfo {
		/**
		 * 音效 false:关 true:开
		 */
		sound: boolean;
		/**
		 * 音乐 false:关 true:开
		 */
		music: boolean;
		/**
		 * 音控 false:关 true:开
		 */
		control: boolean;
		/**
		 * 方言 1:普能话 2:龙岩话
		 */
		dialect: number;
		GetType(): string { return 'Cmd.SetInfo'; }
	}
	/**
	 * 音效音乐设置
	 */
	export class SoundSet_C {
		/**
		 * 音效音乐等设置信息
		 */
		setInfo: SetInfo;
		GetType(): string { return 'Cmd.SoundSet_C'; }
	}
	/**
	 * 获取玩家头像
	 */
	export class GetUserHeadList_C {
		/**
		 * 玩家id
		 */
		uid: number;
		/**
		 * 玩家id
		 */
		uidList: number[];
		GetType(): string { return 'Cmd.GetUserHeadList_C'; }
	}
	export class UserHead {
		/**
		 * 玩家id
		 */
		uid: number;
		headUrl: string;
		GetType(): string { return 'Cmd.UserHead'; }
	}
	export class GetUserHeadList_S {
		/**
		 * 玩家列表
		 */
		headList: UserHead[];
		GetType(): string { return 'Cmd.GetUserHeadList_S'; }
	}
	/**
	 * 获取玩家列表信息
	 */
	export class GetUserList_C {
		GetType(): string { return 'Cmd.GetUserList_C'; }
	}
	export class GetUserList_S {
		/**
		 * 玩家列表
		 */
		userSet: UserBaseInfo[];
		GetType(): string { return 'Cmd.GetUserList_S'; }
	}
	/**
	 * 请求玩家面板信息
	 */
	export class GetPersonalPanel_C {
		/**
		 * 玩家id
		 */
		uid: number;
		GetType(): string { return 'Cmd.GetPersonalPanel_C'; }
	}
	export class GetPersonalPanel_S {
		/**
		 * 玩家基本信息
		 */
		userInfo: UserBaseInfo;
		GetType(): string { return 'Cmd.GetPersonalPanel_S'; }
	}
	/**
	 * 通知客户端可以显示准备按钮
	 */
	export class ShowPrepareBtnRoom_S {
		GetType(): string { return 'Cmd.ShowPrepareBtnRoom_S'; }
	}
	/**
	 * 通知客户端可以显示提前开始按钮了
	 */
	export class ShowChangeUserNbrRoom_S {
		GetType(): string { return 'Cmd.ShowChangeUserNbrRoom_S'; }
	}
	/**
	 * 请求切换房间人数
	 */
	export class RequestChangeUserNbrRoom_C {
		resultCode: number;
		desc: string;
		GetType(): string { return 'Cmd.RequestChangeUserNbrRoom_C'; }
	}
	/**
	 * 请求切换房间人数
	 */
	export class RequestChangeUserNbrRoom_Brd {
		uid: number;
		/**
		 * 目标人数
		 */
		userNbr: number;
		resultCode: number;
		desc: string;
		GetType(): string { return 'Cmd.RequestChangeUserNbrRoom_Brd'; }
	}
	export class ReturnChangeUserNbrRoom_C {
		/**
		 * 1表示同意
		 */
		isAgree: number;
		/**
		 * 目标人数
		 */
		userNbr: number;
		resultCode: number;
		desc: string;
		GetType(): string { return 'Cmd.ReturnChangeUserNbrRoom_C'; }
	}
	export class ReturnChangeUserNbrRoom_Brd {
		uid: number;
		/**
		 * 1表示同意 没有及不同意
		 */
		isAgree: number;
		GetType(): string { return 'Cmd.ReturnChangeUserNbrRoom_Brd'; }
	}
	/**
	 * 请求换坐
	 */
	export class RequestChangeSeatRoom_C {
		seatid: number;
		GetType(): string { return 'Cmd.RequestChangeSeatRoom_C'; }
	}
	/**
	 * 请求换坐给对方客户端
	 */
	export class RequestChangeSeatRoom_S {
		/**
		 * 玩家id
		 */
		fromuid: number;
		GetType(): string { return 'Cmd.RequestChangeSeatRoom_S'; }
	}
	/**
	 * 对方回应,成功后直接操作
	 */
	export class ReturnChangeSeatRoom_C {
		/**
		 * 玩家id
		 */
		fromuid: number;
		/**
		 * 1表示同意
		 */
		isAgree: number;
		GetType(): string { return 'Cmd.ReturnChangeSeatRoom_C'; }
	}
	/**
	 * 请求排行榜
	 */
	export class GetRankingListRoomCmd_C {
		GetType(): string { return 'Cmd.GetRankingListRoomCmd_C'; }
	}
	/**
	 * +
	 */
	export class RankInfo {
		/**
		 * 玩家id
		 */
		uid: number;
		/**
		 * 玩家昵称
		 */
		nickname: string;
		/**
		 * 玩家上一局输
		 */
		profit: number;
		/**
		 * 玩家总成绩
		 */
		totalProfit: number;
		GetType(): string { return 'Cmd.RankInfo'; }
	}
	export class GetRankingListRoomCmd_S {
		/**
		 * 返回码
		 */
		resultCode: number;
		/**
		 * 信息
		 */
		desc: string;
		/**
		 * 房间id
		 */
		roomId: number;
		/**
		 * 排行榜数据
		 */
		rankInfo: RankInfo[];
		GetType(): string { return 'Cmd.GetRankingListRoomCmd_S'; }
	}
	/**
	 * 排行榜广播
	 */
	export class GetRankingListRoomCmd_Brd {
		/**
		 * 房间id
		 */
		roomId: number;
		/**
		 * 排行榜数据
		 */
		rankInfo: RankInfo[];
		GetType(): string { return 'Cmd.GetRankingListRoomCmd_Brd'; }
	}
	/**
	 *  C-&gt;S 托管请求
	 *  S-&gt;C 托管状态更新
	 */
	export class HostUpdateRoomCmd_CS {
		yesOrNo: boolean;
		uid: number;
		GetType(): string { return 'Cmd.HostUpdateRoomCmd_CS'; }
	}
	/**
	 *  Echo应答,服务器探测玩家是否活着
	 *  TODO,还未使用,待升级
	 */
	export class ServerEchoRoomCmd_SC {
		/**
		 * echo标志
		 */
		id: number;
		/**
		 * echo描述,原封不动返回
		 */
		desc: string;
		GetType(): string { return 'Cmd.ServerEchoRoomCmd_SC'; }
	}
	/**
	 *  Echo应答,客户端探测服务器
	 *  TODO,还未使用,待升级
	 */
	export class ClientEchoRoomCmd_SC {
		/**
		 * echo标志
		 */
		id: number;
		/**
		 * echo描述,原封不动返回
		 */
		desc: string;
		GetType(): string { return 'Cmd.ClientEchoRoomCmd_SC'; }
	}
	/**
	 * 在线状态更新
	 */
	export class OnlineStateRoomCmd_S {
		uid: number;
		state: OnlineState;
		GetType(): string { return 'Cmd.OnlineStateRoomCmd_S'; }
	}
	/**
	 *  C-&gt;S 离开房间请求
	 *  S-&gt;C 离开房间通知
	 */
	export class LeaveRoomCmd_CS {
		uid: number;
		GetType(): string { return 'Cmd.LeaveRoomCmd_CS'; }
	}
	/**
	 *  C-&gt;S 准备/取消准备请求
	 *  S-&gt;C 更新准备状态
	 */
	export class ReadyUpdateRoomCmd_CS {
		yesOrNo: boolean;
		uid: number;
		GetType(): string { return 'Cmd.ReadyUpdateRoomCmd_CS'; }
	}
	/**
	 * 系统通知
	 */
	export class SysMessageCmd_S {
		msgType: SysMessageCmd_S.MsgType;
		/**
		 * 文本
		 */
		msg: string;
		GetType(): string { return 'Cmd.SysMessageCmd_S'; }
	}
	export module SysMessageCmd_S {
		export enum MsgType {
			/**
			 * 文本消息
			 */
			Text = 1,
			/**
			 * 解散房间
			 */
			DissolveRoom = 2,
			/**
			 * 返回到大厅
			 */
			BackToLobby = 3,
			/**
			 * 提前开局
			 */
			StartInAdvance = 4,
			/**
			 * 弹框
			 */
			Bounce = 5,
			/**
			 * 余额不足
			 */
			NotEnoughMoney = 6
		}
	}
	/**
	 *  C-&gt;S 查询服务器当前逻辑时间
	 *  S-&gt;C 服务器当前逻辑时间
	 */
	export class GameTimeSyncCmd_CS {
		/**
		 * unix时间戳
		 */
		stamp: number;
		GetType(): string { return 'Cmd.GameTimeSyncCmd_CS'; }
	}
	/**
	 * 请求更换房间消息
	 */
	export class ChangeRoomCmd_C {
		GetType(): string { return 'Cmd.ChangeRoomCmd_C'; }
	}
	/**
	 * 换座
	 */
	export class ChangeSeatRoomCmd_C {
		/**
		 * 目标座位
		 */
		pos: number;
		GetType(): string { return 'Cmd.ChangeSeatRoomCmd_C'; }
	}
	/**
	 * +
	 */
	export class GiftsInfo {
		/**
		 * 发送玩家Id
		 */
		fromUid: number;
		/**
		 * 接收玩家Id
		 */
		toUid: number;
		/**
		 * 礼物Id
		 */
		giftsId: number;
		/**
		 * 礼物数量
		 */
		giftsNum: number;
		GetType(): string { return 'Cmd.GiftsInfo'; }
	}
	/**
	 * 送礼
	 */
	export class SendGiftRoomCmd_C {
		/**
		 * 礼物内容
		 */
		gift: GiftsInfo;
		GetType(): string { return 'Cmd.SendGiftRoomCmd_C'; }
	}
	export class SendGiftRoomCmd_S {
		resultCode: number;
		gift: GiftsInfo;
		GetType(): string { return 'Cmd.SendGiftRoomCmd_S'; }
	}
	export class SendGiftRoomCmd_Brd {
		/**
		 * 送礼玩家
		 */
		gift: GiftsInfo;
		/**
		 * 玩家剩余钻石
		 */
		diamond: number[];
		GetType(): string { return 'Cmd.SendGiftRoomCmd_Brd'; }
	}
	/**
	 * 大厅送礼 客户端大厅相同的协议会有问题
	 */
	export class SendGiftLobbyCmd_C {
		/**
		 * 礼物内容
		 */
		gift: GiftsInfo;
		GetType(): string { return 'Cmd.SendGiftLobbyCmd_C'; }
	}
	export class SendGiftLobbyCmd_S {
		resultCode: number;
		gift: GiftsInfo;
		userInfo: UserBaseInfo;
		GetType(): string { return 'Cmd.SendGiftLobbyCmd_S'; }
	}
	/**
	 * 离开房间
	 */
	export class LeaveRoomCmd_C {
		/**
		 * 离开状态 0 返回大厅 1 暂时离开 2 断线
		 */
		state: number;
		GetType(): string { return 'Cmd.LeaveRoomCmd_C'; }
	}
	export class LeaveRoomCmd_S {
		resultCode: number;
		desc: string;
		GetType(): string { return 'Cmd.LeaveRoomCmd_S'; }
	}
	/**
	 * 广播玩家离开房间
	 */
	export class LeaveRoomCmd_Brd {
		resultCode: number;
		desc: string;
		uid: number;
		state: number;
		GetType(): string { return 'Cmd.LeaveRoomCmd_Brd'; }
	}
	/**
	 * 认输
	 */
	export class GiveupRoomCmd_C {
		/**
		 * 认输数量,认输时需要输入认输数量
		 */
		num: number;
		GetType(): string { return 'Cmd.GiveupRoomCmd_C'; }
	}
	/**
	 *  发起视频聊天
	 *  C-&gt;S 请求视频聊天
	 *  S-&gt;C 请求视频聊天通知
	 */
	export class VideoChatRequestCmd_CS {
		uid: number;
		GetType(): string { return 'Cmd.VideoChatRequestCmd_CS'; }
	}
	/**
	 *  C-&gt;S 请求视频聊天回复请求
	 *  S-&gt;C 请求视频聊天回复通知
	 */
	export class VideoChatReturnCmd_CS {
		uid: number;
		/**
		 * 是否接受
		 */
		result: boolean;
		GetType(): string { return 'Cmd.VideoChatReturnCmd_CS'; }
	}
	/**
	 *  C-&gt;S 视频聊天关闭请求
	 *  S-&gt;C 视频聊天关闭通知
	 */
	export class VideoChatShutdownCmd_CS {
		uid: number;
		GetType(): string { return 'Cmd.VideoChatShutdownCmd_CS'; }
	}
}
