module GX {
	/**
	 * 可记录调用"this"的函数代理
	 */
	export class SinglecastEvent {
		public action: Function;
		public self: any;

		constructor(action?: Function, self?: any) {
			this.action = action;
			this.self = self;
		}

		call(...argArray: any[]): any {
			return this.apply(argArray);
		}

		apply(argArray?: any): any {
			if (this.action == null)
				return;
			return this.action.apply(this.self, argArray);
		}
	}
	/**
	 * 记录所有的挂载事件
	 */
	export class Event {
		private eventList:MulticastEvent[];
		public add(multicase:MulticastEvent){
			if(this.eventList == null)
				this.eventList = [];
			this.eventList.push(multicase);
		}
		public removeAll(){
			for(let item of this.eventList){
				item.removeAll();
			}
			this.eventList.clear();
		}
	}
	/**
	 * 多播事件
	 */
	export class MulticastEvent {
		public static EventList: Event = new Event();
		private list: SinglecastEvent[]; // 回调函数列表
		constructor() {
			MulticastEvent.EventList.add(this);
		}
		call(...argArray: any[]): any {
			return this.apply(argArray);
		}

		apply(argArray?: any): void {
			let len = this.length;
			if (len == 0)
				return;
			// 单播情况的优化
			if (len == 1) {
				let f = this.list[0];
				f.apply(argArray);
				return;
			}
			// 多播调用时必须拷贝一份，避免调用过程中容器修改
			for (let f of this.list.clone()) {
				f.apply(argArray);
			}
		}

		/**
		 * 挂载事件回调
		 * @param action
		 * @return 返回挂载的事件回调函数本身，方便lambda挂载结果记录以供移除
		 */
		add(action: Function, thisArg?: any): Function {
			if (action == null)
				return action;
			if (this.list == null)
				this.list = [];
			this.list.push(new SinglecastEvent(action, thisArg));
			return action;
		}

		/**
		 * 卸载事件回调
		 * @param action
		 * @return 卸载成功，false表示该事件中并不包含给定的回调
		 */
		remove(action: Function): boolean {
			if (typeof action !== "function" || this.list == null)
				return false;
			return this.list.removeFirst(i => i.action == action);
		}

		/**
		 * 卸载所有以指定对象作为调用this的回调函数
		 */
		removeOn(thisArg: any): number{
			if (this.list == null)
				return 0;
			return this.list.removeAll(i => i.self == thisArg);
		}

		/**
		 * 卸载所有挂载的事件
		 */
		removeAll(): void {
			this.list = null;
		}

		/**
		 * 得到事件中包含的回调数目
		 */
		get length(): number {
			if (this.list == null)
				return 0;
			return this.list.length;
		}
	}
}