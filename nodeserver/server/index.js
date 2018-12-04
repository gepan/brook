
var WebSocketServer = require('ws').Server,
wss = new WebSocketServer({ port: 8181 });

let user={};

var MessageCodec = (function () {
    function MessageCodec() {
    }
    MessageCodec.Encode = function (value) {
        if (value == null)
            return null;
        var json = JSON.stringify(value);
        var type = value.GetType();
        if (json === "" || json === "{}")
            return type;
        else
            return type + ":" + json;
    };
    MessageCodec.Decode = function (value) {
		if (typeof (value) != "string" || value === "")
            return null;
        var index = value.indexOf(':');
        var type = index != -1 ? value.substr(0, index) : value;
        var json = index != -1 ? value.substr(index + 1) : null;
        var obj = json != null ? JSON.parse(json) : {};
        obj["GetType"] = function () { return type; };
        return obj;
    };
    return MessageCodec;
}());

function OnGetPracticeGameInfoRoomCmd_C(cmd){
	console.log("11111")
}

var getDefinitionByNameCache = {"Cmd.OnGetPracticeGameInfoRoomCmd_C":OnGetPracticeGameInfoRoomCmd_C};
function getDefinitionByName(name) {
		if (!name)
            return null;
        var definition = getDefinitionByNameCache[name];
        if (definition) {
            return definition;
        }
        var paths = name.split(".");
        var length = paths.length;
        definition = __uglobal;
        for (var i = 0; i < length; i++) {
            var path = paths[i];
            definition = definition[path];
            if (!definition) {
                return null;
            }
        }
        getDefinitionByNameCache[name] = definition;
        return definition;
}

wss.on('connection', function (ws) {
	var sendStockUpdates = function (ws) {
        if (ws.readyState == 1) { 
            var stocksObj = {b:1111,c:222222};
            // for (var i = 0; i < clientStocks.length; i++) {
              // var symbol = clientStocks[i];
              // stocksObj[symbol] = stocks[symbol];
            // }
            // if (stocksObj.length !== 0) {
                ws.send(JSON.stringify(stocksObj));//需要将对象转成字符串。WebSocket只支持文本和二进制数据
                console.log("更新", JSON.stringify(stocksObj));
            // }
           
        }
    }
    // var clientStockUpdater = setInterval(function () {
        // sendStockUpdates(ws);
    // }, 1000);
    console.log('client connected');
    ws.on('message', function (message) {
		message = (message+"").substring(2)
		var cmd = MessageCodec.Decode(message);
        if (cmd == null) {
            console.error("[WS ERROR DECODE] " + message);
            return false;
        }
        console.log("[WS RECV] " + message);
        // 得到消息响应函数
        var type = cmd.GetType();
        var f = getDefinitionByName(type.replace(/\.(\w+)$/, "\.On$1"));
        if (f == null) {
            console.warn("[WS ERROR DISPATCH] " + message);
            return false;
        }
        // 消息响应
        try {
            f(cmd);
            return true;
        }
        catch (e) {
            console.error("[WS RUN ERROR]" + e.toString() + "\n" + message);
            return false;
        }
    });
});
var __uglobal = __uglobal || this;

