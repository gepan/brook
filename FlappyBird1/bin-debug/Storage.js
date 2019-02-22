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
