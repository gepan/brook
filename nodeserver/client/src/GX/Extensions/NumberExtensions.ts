interface Number {
	percentage(): number;
}
(<any>Number.prototype).percentage = function (): number {
	return (this != null ? this : 0) / 100;
}