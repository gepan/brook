module GX {
	/**
	 * 字符串不是`undefined`、`null`或`""`
	 */
	export function stringIsNullOrEmpty(value: string): boolean {
		return typeof (value) !== "string" || value.length == 0;
	}

	/**
	 * @ref http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript/8809472#8809472
	 */
	export function generateUUID(): string {
		var d = new Date().getTime();
		var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = (d + Math.random() * 16) % 16 | 0;
			d = Math.floor(d / 16);
			return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
		});
		return uuid;
	}

	export function MD5(message: string): string {
		// 如果编译报错找不到名称"md5"，请确认应用层egretProperties.json文件中添加了以下模块：
		// {
		//     "name": "md5",
		//     "path": "../../egret-game-library/md5/libsrc"
		// }
		var hash = new md5();
		return hash.hex_md5(message);
	}
	
	/**
	 * @ref http://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript
	 */
	export function unixTimestamp(): number {
		if (!Date.now) {
			Date.now = function () { return new Date().getTime(); }
		}
		return Date.now() / 1000 | 0;
	}

	/**
	 * 得到扩展名，带“.”
	 * @param path
	 */
	export function getExtension(path: string): string {
		let index = path.lastIndexOf(".");
		if (index == -1)
			return "";
		return path.substring(index);
	}
	/**
	 * 得到路径，不带末尾“/”
	 * @param path
	 */
	export function getDirectoryName(path: string): string {
		let index = path.lastIndexOf("/");
		if (index == -1)
			return "";
		return path.substring(0, index);
	}

	/**
	 * 得到文件名，带扩展名
	 * @param path
	 */
	export function getFileName(path: string): string {
		let index = path.lastIndexOf("/");
		if (index == -1)
			return path;
		return path.substring(index + 1);
	}

	/**
	 * 得到不带扩展名的文件名
	 * @param path
	 */
	export function getFileNameWithoutExtension(path: string): string {
		let name = getFileName(path);
		let index = name.lastIndexOf(".");
		if (index == -1)
			return name;
		return name.substring(0, index);
	}
	/**
	 * 是否是全路径
	 * @param path
	 */
	// export function isPathRooted(path: string): boolean {
	// 	return path.startsWith("http://") || path.startsWith("https://");
	// }
}
