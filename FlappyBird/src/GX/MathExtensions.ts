interface Math {
	/**
	 * 得到[min, max)之间的浮点随机数
	 */
	randomFloat(min: number, max: number): number;
	/**
	 * 得到[min, max]之间的整数随机数，注意max值可以取到
	 */
	randomInteger(min: number, max: number): number;
	/**
	 * 限制value的值在[min,max]之间
	 */
	clamp(value: number, min: number, max: number): number;
}

if (!Math.randomFloat) {
	Math.randomFloat = function (min: number, max: number): number {
		if (max > min) {
			min, max = max, min;
		}
		return min + Math.random() * (max - min);
	}
}

if (!Math.randomInteger) {
	Math.randomInteger = function (min: number, max: number): number {
		if (max > min) {
			min, max = max, min;
		}
		min, max = Math.round(min), Math.round(max);
		// The Math.random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).
		return min + Math.floor(Math.random() * (max - min + 1));
	}
}

if (!Math.clamp) {
	Math.clamp = function (value: number, min: number, max: number): number {
		if (value == null)
			return min;
		if (value < min)
			return min;
		else if (value > max)
			return max;
		else
			return value;
	}
}


interface Math {
	randomInteger(min, max): number;
}
Math.randomInteger = function (min, max): number {
	let choices = max - min + 1;
	return Math.floor(Math.random() * choices + min);
}

interface Math {
	randomIntegers(min, max, selectnum): Array<number>;
}
Math.randomIntegers = function (min, max, selectnum): Array<number> {
	if ((max - min + 1) < selectnum)
		return;
	let choices = max - min + 1;
	let nums: Array<number> = new Array();
	for (let i: number = 0; i < selectnum; i++) {
		let equal: boolean = false;
		let random = Math.floor(Math.random() * choices + min);
		for (var item of nums) {
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
}

interface Math {
	boolFromPercentage(num: number): boolean;
}
Math.boolFromPercentage = function (num: number): boolean {
	if (Math.random() < num) {
		return true
	} else {
		return false;
	}
}