module Util {
    export function lerp(fromNum: number, toNum: number, prop: number): number {
        return fromNum + (toNum - fromNum) * prop;
    }
    //数组滚动，从fromNum到toNum，持续时间 totalTm;
    export function scrollNumber(label: { text, scaleX, scaleY, alpha }, fromNum: number, toNum: number, totalTm: number, isThousandFormat: boolean = false, scaleProp: number = 1.0, cb: Function = null, intervalTime: number = 50, delayCBTime: number = 0) {
        let oldScaleX = label.scaleX;
        let oldScaleY = label.scaleY;
        let isBitmapFont = egret.is(label, "egret.BitmapFont");
        if (fromNum == toNum) {
            egret.setTimeout(() => { if (cb) cb() }, null, 0);
            label.text = fromNum + ""
            return { stopCB: function () { } };
        }
        let dstLabel = label;
        let lElapseTm = 0;
        let lTotalTm = totalTm;
        if (lTotalTm < 0.001) {
            lTotalTm = 0.1;
        }
        var intervalID = 0;
        let lastNum = fromNum;

        let scaleTm = 100;
        if (totalTm * 1000 < scaleTm * 2) {
            scaleTm = totalTm * 1000 * 0.4;
        }
        if (scaleProp != 1) {
            egret.Tween.get(dstLabel).to({ scaleX: oldScaleX * scaleProp, scaleY: oldScaleY * scaleProp }, scaleTm).call(() => { egret.Tween.removeTweens(dstLabel) });
        }
        dstLabel.text = (isThousandFormat ? lastNum : lastNum) + "";
        let lastTime = egret.getTimer();
        let onTick = () => {
            let curTime = egret.getTimer();
            let elapseTm = curTime - lastTime;
            lastTime = curTime;
            lElapseTm = lElapseTm + elapseTm / 1000.0;
            if (lElapseTm > lTotalTm) {
                lElapseTm = lTotalTm;
                egret.clearInterval(intervalID);
                intervalID = 0;
                egret.Tween.get(dstLabel).to({ scaleX: oldScaleX, scaleY: oldScaleY }, scaleTm).wait(delayCBTime).call(() => {
                    egret.Tween.removeTweens(dstLabel);
                    if (intervalID == 0 && cb != null) {
                        cb.call(null);
                    }
                });
            }
            let curNum = Math.floor(Util.lerp(fromNum, toNum, lElapseTm / lTotalTm));
            if (curNum != lastNum) {
                lastNum = curNum;
                if (isNaN(lastNum) == true) {
                    console.log("label txt is NAN fromNum:" + fromNum + " toNum:" + toNum + " totalTm:" + totalTm);
                }
                dstLabel.text = (isThousandFormat ? lastNum : lastNum) + "";
            }
        }
        intervalID = egret.setInterval(onTick, null, intervalTime);
        let stopCB = function () {
            //egret.log("call Utils.scroll, stopCB, intervalID:"+intervalID);
            if (intervalID != 0) {
                egret.clearInterval(intervalID)
                dstLabel.text = (isThousandFormat ? toNum : toNum) + "";
                //egret.log("call Utils.scroll, dstLabel.text:"+toNum+" fromNum:"+fromNum);
                if (scaleProp != 1) {
                    egret.Tween.removeTweens(dstLabel);
                    egret.Tween.get(dstLabel).to({ scaleX: oldScaleX, scaleY: oldScaleY }, scaleTm).call(() => { egret.Tween.removeTweens(dstLabel) });
                }
                intervalID = 0
                if (cb != null) {
                    cb.call(null);
                }
                label.text = toNum + "";
            }
        }
        return { stopCB: stopCB };
    }

}