module storage {
    export module bestScore {
        export function setValue(score: number) {
            egret.localStorage.setItem("score", score + "");
        }
        export function getValue(): number {
            let score = egret.localStorage.getItem("score");
            if (score == null)
                return 0;
            return Number(score);
        }
    }
}