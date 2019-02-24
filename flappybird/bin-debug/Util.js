var Util;
(function (Util) {
    function isWxgame() {
        return platform.name == "wxgame";
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
