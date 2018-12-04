// TypeScript file
module GX {
    export class MessageCodec {
        public static Encode(value: uniLib.IType): string {
            if (value == null)
                return null;
            var json = JSON.stringify(value);
            var type = value.GetType();
            if (json === "" || json === "{}")
                return type;
            else
                return type + ":" + json;
        }

        public static Decode(value: any): uniLib.IType {
            if (typeof (value) != "string" || value === "")
                return null;
            var index = value.indexOf(':');
            var type = index != -1 ? value.substr(0, index) : value;
            var json = index != -1 ? value.substr(index + 1) : null;
            var obj = json != null ? JSON.parse(json) : {};
            obj["GetType"] = function () { return type; }
            return obj;
        }
    }
    export class WebSocket {
        private socket: egret.WebSocket;
        constructor() {
            this.init();
        }
        private init() {
            this.socket = new egret.WebSocket();
            //设置数据格式为二进制，默认为字符串
            this.socket.type = egret.WebSocket.TYPE_BINARY;
            //添加收到数据侦听，收到数据会调用此方法
            this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
            //添加链接打开侦听，连接成功会调用此方法
            this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
            //添加链接关闭侦听，手动关闭或者服务器关闭连接会调用此方法
            this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
            //添加异常侦听，出现异常会调用此方法
            this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
        }
        public connect(host: string, port: number) {
            //连接服务器
            this.socket.connect(host, port);
        }
        public send(value: string) {
            this.socket.writeUTF(value);
            this.socket.flush();
            console.log("[WS SEND] " + value);
        }
        private onReceiveMessage() {
            var msg = this.socket.readUTF();
            var cmd = MessageCodec.Decode(msg);
            if (cmd == null) {
                console.error("[WS ERROR DECODE] " + msg);
                return false;
            }

            console.log("[WS RECV] " + msg);
            // 得到消息响应函数
            var type = cmd.GetType();
            // Cmd.UserGetAccountRoleList -> Cmd. On UserGetAccountRoleList
            var f = uniLib.getDefinitionByName(type.replace(/\.(\w+)$/, "\.On$1"))
            if (f == null) {
                console.warn("[WS ERROR DISPATCH] " + msg);
                return false;
            }
            // 消息响应
            try {
                f(cmd);
                return true;
            }
            catch (e) {
                console.error("[WS RUN ERROR]" + e.toString() + "\n" + msg);
                return false;
            }
        }
        private onSocketOpen() {
            console.error("socket open")
        }
        private onSocketClose() {
            console.error("socket close")
        }
        private onSocketError() {
            console.error("socket Error")
        }
    }
    export class NetManager {
        public static socket = new WebSocket();
        public static connect(host: string, port: number) {
            this.socket.connect(host, port);
        }
        public static tcpSend(data: any) {
            var msg = MessageCodec.Encode(data);
            this.socket.send(msg)
        }
    }
}