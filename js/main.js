/******/ (() => {
	// webpackBootstrap
	/******/ "use strict";
	var __webpack_exports__ = {}; // CONCATENATED MODULE: ./src/js/_vars.js

	/* harmony default export */ const _vars = {
		windowEl: window,
		documentEl: document,
		htmlEl: document.documentElement,
		bodyEl: document.body,
	}; // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/bind.js
	function bind(fn, thisArg) {
		return function wrap() {
			return fn.apply(thisArg, arguments);
		};
	} // CONCATENATED MODULE: ./node_modules/axios/lib/utils.js

	// utils is a library of generic helper functions non-specific to axios

	const { toString: utils_toString } = Object.prototype;
	const { getPrototypeOf } = Object;

	const kindOf = ((cache) => (thing) => {
		const str = utils_toString.call(thing);
		return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
	})(Object.create(null));

	const kindOfTest = (type) => {
		type = type.toLowerCase();
		return (thing) => kindOf(thing) === type;
	};

	const typeOfTest = (type) => (thing) => typeof thing === type;

	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 *
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	const { isArray } = Array;

	/**
	 * Determine if a value is undefined
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	const isUndefined = typeOfTest("undefined");

	/**
	 * Determine if a value is a Buffer
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a Buffer, otherwise false
	 */
	function isBuffer(val) {
		return (
			val !== null &&
			!isUndefined(val) &&
			val.constructor !== null &&
			!isUndefined(val.constructor) &&
			isFunction(val.constructor.isBuffer) &&
			val.constructor.isBuffer(val)
		);
	}

	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	const isArrayBuffer = kindOfTest("ArrayBuffer");

	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
		let result;
		if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
			result = ArrayBuffer.isView(val);
		} else {
			result = val && val.buffer && isArrayBuffer(val.buffer);
		}
		return result;
	}

	/**
	 * Determine if a value is a String
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	const isString = typeOfTest("string");

	/**
	 * Determine if a value is a Function
	 *
	 * @param {*} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	const isFunction = typeOfTest("function");

	/**
	 * Determine if a value is a Number
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	const isNumber = typeOfTest("number");

	/**
	 * Determine if a value is an Object
	 *
	 * @param {*} thing The value to test
	 *
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	const isObject = (thing) => thing !== null && typeof thing === "object";

	/**
	 * Determine if a value is a Boolean
	 *
	 * @param {*} thing The value to test
	 * @returns {boolean} True if value is a Boolean, otherwise false
	 */
	const isBoolean = (thing) => thing === true || thing === false;

	/**
	 * Determine if a value is a plain Object
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a plain Object, otherwise false
	 */
	const isPlainObject = (val) => {
		if (kindOf(val) !== "object") {
			return false;
		}

		const prototype = getPrototypeOf(val);
		return (
			(prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) &&
			!(Symbol.toStringTag in val) &&
			!(Symbol.iterator in val)
		);
	};

	/**
	 * Determine if a value is a Date
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	const isDate = kindOfTest("Date");

	/**
	 * Determine if a value is a File
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	const isFile = kindOfTest("File");

	/**
	 * Determine if a value is a Blob
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	const isBlob = kindOfTest("Blob");

	/**
	 * Determine if a value is a FileList
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	const isFileList = kindOfTest("FileList");

	/**
	 * Determine if a value is a Stream
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	const isStream = (val) => isObject(val) && isFunction(val.pipe);

	/**
	 * Determine if a value is a FormData
	 *
	 * @param {*} thing The value to test
	 *
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	const isFormData = (thing) => {
		let kind;
		return (
			thing &&
			((typeof FormData === "function" && thing instanceof FormData) ||
				(isFunction(thing.append) &&
					((kind = kindOf(thing)) === "formdata" ||
						// detect form-data instance
						(kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"))))
		);
	};

	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	const isURLSearchParams = kindOfTest("URLSearchParams");

	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 *
	 * @returns {String} The String freed of excess whitespace
	 */
	const trim = (str) => (str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""));

	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 *
	 * @param {Boolean} [allOwnKeys = false]
	 * @returns {any}
	 */
	function forEach(obj, fn, { allOwnKeys = false } = {}) {
		// Don't bother if no value provided
		if (obj === null || typeof obj === "undefined") {
			return;
		}

		let i;
		let l;

		// Force an array if not already something iterable
		if (typeof obj !== "object") {
			/*eslint no-param-reassign:0*/
			obj = [obj];
		}

		if (isArray(obj)) {
			// Iterate over array values
			for (i = 0, l = obj.length; i < l; i++) {
				fn.call(null, obj[i], i, obj);
			}
		} else {
			// Iterate over object keys
			const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
			const len = keys.length;
			let key;

			for (i = 0; i < len; i++) {
				key = keys[i];
				fn.call(null, obj[key], key, obj);
			}
		}
	}

	function findKey(obj, key) {
		key = key.toLowerCase();
		const keys = Object.keys(obj);
		let i = keys.length;
		let _key;
		while (i-- > 0) {
			_key = keys[i];
			if (key === _key.toLowerCase()) {
				return _key;
			}
		}
		return null;
	}

	const _global = (() => {
		/*eslint no-undef:0*/
		if (typeof globalThis !== "undefined") return globalThis;
		return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
	})();

	const isContextDefined = (context) => !isUndefined(context) && context !== _global;

	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 *
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
		const { caseless } = (isContextDefined(this) && this) || {};
		const result = {};
		const assignValue = (val, key) => {
			const targetKey = (caseless && findKey(result, key)) || key;
			if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
				result[targetKey] = merge(result[targetKey], val);
			} else if (isPlainObject(val)) {
				result[targetKey] = merge({}, val);
			} else if (isArray(val)) {
				result[targetKey] = val.slice();
			} else {
				result[targetKey] = val;
			}
		};

		for (let i = 0, l = arguments.length; i < l; i++) {
			arguments[i] && forEach(arguments[i], assignValue);
		}
		return result;
	}

	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 *
	 * @param {Boolean} [allOwnKeys]
	 * @returns {Object} The resulting value of object a
	 */
	const extend = (a, b, thisArg, { allOwnKeys } = {}) => {
		forEach(
			b,
			(val, key) => {
				if (thisArg && isFunction(val)) {
					a[key] = bind(val, thisArg);
				} else {
					a[key] = val;
				}
			},
			{ allOwnKeys }
		);
		return a;
	};

	/**
	 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
	 *
	 * @param {string} content with BOM
	 *
	 * @returns {string} content value without BOM
	 */
	const stripBOM = (content) => {
		if (content.charCodeAt(0) === 0xfeff) {
			content = content.slice(1);
		}
		return content;
	};

	/**
	 * Inherit the prototype methods from one constructor into another
	 * @param {function} constructor
	 * @param {function} superConstructor
	 * @param {object} [props]
	 * @param {object} [descriptors]
	 *
	 * @returns {void}
	 */
	const inherits = (constructor, superConstructor, props, descriptors) => {
		constructor.prototype = Object.create(superConstructor.prototype, descriptors);
		constructor.prototype.constructor = constructor;
		Object.defineProperty(constructor, "super", {
			value: superConstructor.prototype,
		});
		props && Object.assign(constructor.prototype, props);
	};

	/**
	 * Resolve object with deep prototype chain to a flat object
	 * @param {Object} sourceObj source object
	 * @param {Object} [destObj]
	 * @param {Function|Boolean} [filter]
	 * @param {Function} [propFilter]
	 *
	 * @returns {Object}
	 */
	const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
		let props;
		let i;
		let prop;
		const merged = {};

		destObj = destObj || {};
		// eslint-disable-next-line no-eq-null,eqeqeq
		if (sourceObj == null) return destObj;

		do {
			props = Object.getOwnPropertyNames(sourceObj);
			i = props.length;
			while (i-- > 0) {
				prop = props[i];
				if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
					destObj[prop] = sourceObj[prop];
					merged[prop] = true;
				}
			}
			sourceObj = filter !== false && getPrototypeOf(sourceObj);
		} while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

		return destObj;
	};

	/**
	 * Determines whether a string ends with the characters of a specified string
	 *
	 * @param {String} str
	 * @param {String} searchString
	 * @param {Number} [position= 0]
	 *
	 * @returns {boolean}
	 */
	const endsWith = (str, searchString, position) => {
		str = String(str);
		if (position === undefined || position > str.length) {
			position = str.length;
		}
		position -= searchString.length;
		const lastIndex = str.indexOf(searchString, position);
		return lastIndex !== -1 && lastIndex === position;
	};

	/**
	 * Returns new array from array like object or null if failed
	 *
	 * @param {*} [thing]
	 *
	 * @returns {?Array}
	 */
	const toArray = (thing) => {
		if (!thing) return null;
		if (isArray(thing)) return thing;
		let i = thing.length;
		if (!isNumber(i)) return null;
		const arr = new Array(i);
		while (i-- > 0) {
			arr[i] = thing[i];
		}
		return arr;
	};

	/**
	 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
	 * thing passed in is an instance of Uint8Array
	 *
	 * @param {TypedArray}
	 *
	 * @returns {Array}
	 */
	// eslint-disable-next-line func-names
	const isTypedArray = ((TypedArray) => {
		// eslint-disable-next-line func-names
		return (thing) => {
			return TypedArray && thing instanceof TypedArray;
		};
	})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));

	/**
	 * For each entry in the object, call the function with the key and value.
	 *
	 * @param {Object<any, any>} obj - The object to iterate over.
	 * @param {Function} fn - The function to call for each entry.
	 *
	 * @returns {void}
	 */
	const forEachEntry = (obj, fn) => {
		const generator = obj && obj[Symbol.iterator];

		const iterator = generator.call(obj);

		let result;

		while ((result = iterator.next()) && !result.done) {
			const pair = result.value;
			fn.call(obj, pair[0], pair[1]);
		}
	};

	/**
	 * It takes a regular expression and a string, and returns an array of all the matches
	 *
	 * @param {string} regExp - The regular expression to match against.
	 * @param {string} str - The string to search.
	 *
	 * @returns {Array<boolean>}
	 */
	const matchAll = (regExp, str) => {
		let matches;
		const arr = [];

		while ((matches = regExp.exec(str)) !== null) {
			arr.push(matches);
		}

		return arr;
	};

	/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
	const isHTMLForm = kindOfTest("HTMLFormElement");

	const toCamelCase = (str) => {
		return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
			return p1.toUpperCase() + p2;
		});
	};

	/* Creating a function that will check if an object has a property. */
	const utils_hasOwnProperty = (
		({ hasOwnProperty }) =>
		(obj, prop) =>
			hasOwnProperty.call(obj, prop)
	)(Object.prototype);

	/**
	 * Determine if a value is a RegExp object
	 *
	 * @param {*} val The value to test
	 *
	 * @returns {boolean} True if value is a RegExp object, otherwise false
	 */
	const isRegExp = kindOfTest("RegExp");

	const reduceDescriptors = (obj, reducer) => {
		const descriptors = Object.getOwnPropertyDescriptors(obj);
		const reducedDescriptors = {};

		forEach(descriptors, (descriptor, name) => {
			let ret;
			if ((ret = reducer(descriptor, name, obj)) !== false) {
				reducedDescriptors[name] = ret || descriptor;
			}
		});

		Object.defineProperties(obj, reducedDescriptors);
	};

	/**
	 * Makes all methods read-only
	 * @param {Object} obj
	 */

	const freezeMethods = (obj) => {
		reduceDescriptors(obj, (descriptor, name) => {
			// skip restricted props in strict mode
			if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
				return false;
			}

			const value = obj[name];

			if (!isFunction(value)) return;

			descriptor.enumerable = false;

			if ("writable" in descriptor) {
				descriptor.writable = false;
				return;
			}

			if (!descriptor.set) {
				descriptor.set = () => {
					throw Error("Can not rewrite read-only method '" + name + "'");
				};
			}
		});
	};

	const toObjectSet = (arrayOrString, delimiter) => {
		const obj = {};

		const define = (arr) => {
			arr.forEach((value) => {
				obj[value] = true;
			});
		};

		isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

		return obj;
	};

	const noop = () => {};

	const toFiniteNumber = (value, defaultValue) => {
		value = +value;
		return Number.isFinite(value) ? value : defaultValue;
	};

	const ALPHA = "abcdefghijklmnopqrstuvwxyz";

	const DIGIT = "0123456789";

	const ALPHABET = {
		DIGIT,
		ALPHA,
		ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT,
	};

	const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
		let str = "";
		const { length } = alphabet;
		while (size--) {
			str += alphabet[(Math.random() * length) | 0];
		}

		return str;
	};

	/**
	 * If the thing is a FormData object, return true, otherwise return false.
	 *
	 * @param {unknown} thing - The thing to check.
	 *
	 * @returns {boolean}
	 */
	function isSpecCompliantForm(thing) {
		return !!(
			thing &&
			isFunction(thing.append) &&
			thing[Symbol.toStringTag] === "FormData" &&
			thing[Symbol.iterator]
		);
	}

	const toJSONObject = (obj) => {
		const stack = new Array(10);

		const visit = (source, i) => {
			if (isObject(source)) {
				if (stack.indexOf(source) >= 0) {
					return;
				}

				if (!("toJSON" in source)) {
					stack[i] = source;
					const target = isArray(source) ? [] : {};

					forEach(source, (value, key) => {
						const reducedValue = visit(value, i + 1);
						!isUndefined(reducedValue) && (target[key] = reducedValue);
					});

					stack[i] = undefined;

					return target;
				}
			}

			return source;
		};

		return visit(obj, 0);
	};

	const isAsyncFn = kindOfTest("AsyncFunction");

	const isThenable = (thing) =>
		thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

	/* harmony default export */ const utils = {
		isArray,
		isArrayBuffer,
		isBuffer,
		isFormData,
		isArrayBufferView,
		isString,
		isNumber,
		isBoolean,
		isObject,
		isPlainObject,
		isUndefined,
		isDate,
		isFile,
		isBlob,
		isRegExp,
		isFunction,
		isStream,
		isURLSearchParams,
		isTypedArray,
		isFileList,
		forEach,
		merge,
		extend,
		trim,
		stripBOM,
		inherits,
		toFlatObject,
		kindOf,
		kindOfTest,
		endsWith,
		toArray,
		forEachEntry,
		matchAll,
		isHTMLForm,
		hasOwnProperty: utils_hasOwnProperty,
		hasOwnProp: utils_hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
		reduceDescriptors,
		freezeMethods,
		toObjectSet,
		toCamelCase,
		noop,
		toFiniteNumber,
		findKey,
		global: _global,
		isContextDefined,
		ALPHABET,
		generateString,
		isSpecCompliantForm,
		toJSONObject,
		isAsyncFn,
		isThenable,
	}; // CONCATENATED MODULE: ./node_modules/axios/lib/core/AxiosError.js

	/**
	 * Create an Error with the specified message, config, error code, request and response.
	 *
	 * @param {string} message The error message.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [config] The config.
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 *
	 * @returns {Error} The created error.
	 */
	function AxiosError(message, code, config, request, response) {
		Error.call(this);

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor);
		} else {
			this.stack = new Error().stack;
		}

		this.message = message;
		this.name = "AxiosError";
		code && (this.code = code);
		config && (this.config = config);
		request && (this.request = request);
		response && (this.response = response);
	}

	utils.inherits(AxiosError, Error, {
		toJSON: function toJSON() {
			return {
				// Standard
				message: this.message,
				name: this.name,
				// Microsoft
				description: this.description,
				number: this.number,
				// Mozilla
				fileName: this.fileName,
				lineNumber: this.lineNumber,
				columnNumber: this.columnNumber,
				stack: this.stack,
				// Axios
				config: utils.toJSONObject(this.config),
				code: this.code,
				status: this.response && this.response.status ? this.response.status : null,
			};
		},
	});

	const AxiosError_prototype = AxiosError.prototype;
	const descriptors = {};

	[
		"ERR_BAD_OPTION_VALUE",
		"ERR_BAD_OPTION",
		"ECONNABORTED",
		"ETIMEDOUT",
		"ERR_NETWORK",
		"ERR_FR_TOO_MANY_REDIRECTS",
		"ERR_DEPRECATED",
		"ERR_BAD_RESPONSE",
		"ERR_BAD_REQUEST",
		"ERR_CANCELED",
		"ERR_NOT_SUPPORT",
		"ERR_INVALID_URL",
		// eslint-disable-next-line func-names
	].forEach((code) => {
		descriptors[code] = { value: code };
	});

	Object.defineProperties(AxiosError, descriptors);
	Object.defineProperty(AxiosError_prototype, "isAxiosError", { value: true });

	// eslint-disable-next-line func-names
	AxiosError.from = (error, code, config, request, response, customProps) => {
		const axiosError = Object.create(AxiosError_prototype);

		utils.toFlatObject(
			error,
			axiosError,
			function filter(obj) {
				return obj !== Error.prototype;
			},
			(prop) => {
				return prop !== "isAxiosError";
			}
		);

		AxiosError.call(axiosError, error.message, code, config, request, response);

		axiosError.cause = error;

		axiosError.name = error.name;

		customProps && Object.assign(axiosError, customProps);

		return axiosError;
	};

	/* harmony default export */ const core_AxiosError = AxiosError; // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/null.js

	// eslint-disable-next-line strict
	/* harmony default export */ const helpers_null = null; // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/toFormData.js

	// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored

	/**
	 * Determines if the given thing is a array or js object.
	 *
	 * @param {string} thing - The object or array to be visited.
	 *
	 * @returns {boolean}
	 */
	function isVisitable(thing) {
		return utils.isPlainObject(thing) || utils.isArray(thing);
	}

	/**
	 * It removes the brackets from the end of a string
	 *
	 * @param {string} key - The key of the parameter.
	 *
	 * @returns {string} the key without the brackets.
	 */
	function removeBrackets(key) {
		return utils.endsWith(key, "[]") ? key.slice(0, -2) : key;
	}

	/**
	 * It takes a path, a key, and a boolean, and returns a string
	 *
	 * @param {string} path - The path to the current key.
	 * @param {string} key - The key of the current object being iterated over.
	 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
	 *
	 * @returns {string} The path to the current key.
	 */
	function renderKey(path, key, dots) {
		if (!path) return key;
		return path
			.concat(key)
			.map(function each(token, i) {
				// eslint-disable-next-line no-param-reassign
				token = removeBrackets(token);
				return !dots && i ? "[" + token + "]" : token;
			})
			.join(dots ? "." : "");
	}

	/**
	 * If the array is an array and none of its elements are visitable, then it's a flat array.
	 *
	 * @param {Array<any>} arr - The array to check
	 *
	 * @returns {boolean}
	 */
	function isFlatArray(arr) {
		return utils.isArray(arr) && !arr.some(isVisitable);
	}

	const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
		return /^is[A-Z]/.test(prop);
	});

	/**
	 * Convert a data object to FormData
	 *
	 * @param {Object} obj
	 * @param {?Object} [formData]
	 * @param {?Object} [options]
	 * @param {Function} [options.visitor]
	 * @param {Boolean} [options.metaTokens = true]
	 * @param {Boolean} [options.dots = false]
	 * @param {?Boolean} [options.indexes = false]
	 *
	 * @returns {Object}
	 **/

	/**
	 * It converts an object into a FormData object
	 *
	 * @param {Object<any, any>} obj - The object to convert to form data.
	 * @param {string} formData - The FormData object to append to.
	 * @param {Object<string, any>} options
	 *
	 * @returns
	 */
	function toFormData(obj, formData, options) {
		if (!utils.isObject(obj)) {
			throw new TypeError("target must be an object");
		}

		// eslint-disable-next-line no-param-reassign
		formData = formData || new (helpers_null || FormData)();

		// eslint-disable-next-line no-param-reassign
		options = utils.toFlatObject(
			options,
			{
				metaTokens: true,
				dots: false,
				indexes: false,
			},
			false,
			function defined(option, source) {
				// eslint-disable-next-line no-eq-null,eqeqeq
				return !utils.isUndefined(source[option]);
			}
		);

		const metaTokens = options.metaTokens;
		// eslint-disable-next-line no-use-before-define
		const visitor = options.visitor || defaultVisitor;
		const dots = options.dots;
		const indexes = options.indexes;
		const _Blob = options.Blob || (typeof Blob !== "undefined" && Blob);
		const useBlob = _Blob && utils.isSpecCompliantForm(formData);

		if (!utils.isFunction(visitor)) {
			throw new TypeError("visitor must be a function");
		}

		function convertValue(value) {
			if (value === null) return "";

			if (utils.isDate(value)) {
				return value.toISOString();
			}

			if (!useBlob && utils.isBlob(value)) {
				throw new core_AxiosError("Blob is not supported. Use a Buffer instead.");
			}

			if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
				return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
			}

			return value;
		}

		/**
		 * Default visitor.
		 *
		 * @param {*} value
		 * @param {String|Number} key
		 * @param {Array<String|Number>} path
		 * @this {FormData}
		 *
		 * @returns {boolean} return true to visit the each prop of the value recursively
		 */
		function defaultVisitor(value, key, path) {
			let arr = value;

			if (value && !path && typeof value === "object") {
				if (utils.endsWith(key, "{}")) {
					// eslint-disable-next-line no-param-reassign
					key = metaTokens ? key : key.slice(0, -2);
					// eslint-disable-next-line no-param-reassign
					value = JSON.stringify(value);
				} else if (
					(utils.isArray(value) && isFlatArray(value)) ||
					((utils.isFileList(value) || utils.endsWith(key, "[]")) && (arr = utils.toArray(value)))
				) {
					// eslint-disable-next-line no-param-reassign
					key = removeBrackets(key);

					arr.forEach(function each(el, index) {
						!(utils.isUndefined(el) || el === null) &&
							formData.append(
								// eslint-disable-next-line no-nested-ternary
								indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
								convertValue(el)
							);
					});
					return false;
				}
			}

			if (isVisitable(value)) {
				return true;
			}

			formData.append(renderKey(path, key, dots), convertValue(value));

			return false;
		}

		const stack = [];

		const exposedHelpers = Object.assign(predicates, {
			defaultVisitor,
			convertValue,
			isVisitable,
		});

		function build(value, path) {
			if (utils.isUndefined(value)) return;

			if (stack.indexOf(value) !== -1) {
				throw Error("Circular reference detected in " + path.join("."));
			}

			stack.push(value);

			utils.forEach(value, function each(el, key) {
				const result =
					!(utils.isUndefined(el) || el === null) &&
					visitor.call(formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers);

				if (result === true) {
					build(el, path ? path.concat(key) : [key]);
				}
			});

			stack.pop();
		}

		if (!utils.isObject(obj)) {
			throw new TypeError("data must be an object");
		}

		build(obj);

		return formData;
	}

	/* harmony default export */ const helpers_toFormData = toFormData; // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js

	/**
	 * It encodes a string by replacing all characters that are not in the unreserved set with
	 * their percent-encoded equivalents
	 *
	 * @param {string} str - The string to encode.
	 *
	 * @returns {string} The encoded string.
	 */
	function encode(str) {
		const charMap = {
			"!": "%21",
			"'": "%27",
			"(": "%28",
			")": "%29",
			"~": "%7E",
			"%20": "+",
			"%00": "\x00",
		};
		return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
			return charMap[match];
		});
	}

	/**
	 * It takes a params object and converts it to a FormData object
	 *
	 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
	 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
	 *
	 * @returns {void}
	 */
	function AxiosURLSearchParams(params, options) {
		this._pairs = [];

		params && helpers_toFormData(params, this, options);
	}

	const AxiosURLSearchParams_prototype = AxiosURLSearchParams.prototype;

	AxiosURLSearchParams_prototype.append = function append(name, value) {
		this._pairs.push([name, value]);
	};

	AxiosURLSearchParams_prototype.toString = function toString(encoder) {
		const _encode = encoder
			? function (value) {
					return encoder.call(this, value, encode);
			  }
			: encode;

		return this._pairs
			.map(function each(pair) {
				return _encode(pair[0]) + "=" + _encode(pair[1]);
			}, "")
			.join("&");
	};

	/* harmony default export */ const helpers_AxiosURLSearchParams = AxiosURLSearchParams; // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/buildURL.js

	/**
	 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
	 * URI encoded counterparts
	 *
	 * @param {string} val The value to be encoded.
	 *
	 * @returns {string} The encoded value.
	 */
	function buildURL_encode(val) {
		return encodeURIComponent(val)
			.replace(/%3A/gi, ":")
			.replace(/%24/g, "$")
			.replace(/%2C/gi, ",")
			.replace(/%20/g, "+")
			.replace(/%5B/gi, "[")
			.replace(/%5D/gi, "]");
	}

	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @param {?object} options
	 *
	 * @returns {string} The formatted url
	 */
	function buildURL(url, params, options) {
		/*eslint no-param-reassign:0*/
		if (!params) {
			return url;
		}

		const _encode = (options && options.encode) || buildURL_encode;

		const serializeFn = options && options.serialize;

		let serializedParams;

		if (serializeFn) {
			serializedParams = serializeFn(params, options);
		} else {
			serializedParams = utils.isURLSearchParams(params)
				? params.toString()
				: new helpers_AxiosURLSearchParams(params, options).toString(_encode);
		}

		if (serializedParams) {
			const hashmarkIndex = url.indexOf("#");

			if (hashmarkIndex !== -1) {
				url = url.slice(0, hashmarkIndex);
			}
			url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
		}

		return url;
	} // CONCATENATED MODULE: ./node_modules/axios/lib/core/InterceptorManager.js

	class InterceptorManager {
		constructor() {
			this.handlers = [];
		}

		/**
		 * Add a new interceptor to the stack
		 *
		 * @param {Function} fulfilled The function to handle `then` for a `Promise`
		 * @param {Function} rejected The function to handle `reject` for a `Promise`
		 *
		 * @return {Number} An ID used to remove interceptor later
		 */
		use(fulfilled, rejected, options) {
			this.handlers.push({
				fulfilled,
				rejected,
				synchronous: options ? options.synchronous : false,
				runWhen: options ? options.runWhen : null,
			});
			return this.handlers.length - 1;
		}

		/**
		 * Remove an interceptor from the stack
		 *
		 * @param {Number} id The ID that was returned by `use`
		 *
		 * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
		 */
		eject(id) {
			if (this.handlers[id]) {
				this.handlers[id] = null;
			}
		}

		/**
		 * Clear all interceptors from the stack
		 *
		 * @returns {void}
		 */
		clear() {
			if (this.handlers) {
				this.handlers = [];
			}
		}

		/**
		 * Iterate over all the registered interceptors
		 *
		 * This method is particularly useful for skipping over any
		 * interceptors that may have become `null` calling `eject`.
		 *
		 * @param {Function} fn The function to call for each interceptor
		 *
		 * @returns {void}
		 */
		forEach(fn) {
			utils.forEach(this.handlers, function forEachHandler(h) {
				if (h !== null) {
					fn(h);
				}
			});
		}
	}

	/* harmony default export */ const core_InterceptorManager = InterceptorManager; // CONCATENATED MODULE: ./node_modules/axios/lib/defaults/transitional.js

	/* harmony default export */ const defaults_transitional = {
		silentJSONParsing: true,
		forcedJSONParsing: true,
		clarifyTimeoutError: false,
	}; // CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js

	/* harmony default export */ const classes_URLSearchParams =
		typeof URLSearchParams !== "undefined" ? URLSearchParams : helpers_AxiosURLSearchParams; // CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/FormData.js

	/* harmony default export */ const classes_FormData = typeof FormData !== "undefined" ? FormData : null; // CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/Blob.js

	/* harmony default export */ const classes_Blob = typeof Blob !== "undefined" ? Blob : null; // CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/index.js

	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  navigator.product -> 'ReactNative'
	 * nativescript
	 *  navigator.product -> 'NativeScript' or 'NS'
	 *
	 * @returns {boolean}
	 */
	const isStandardBrowserEnv = (() => {
		let product;
		if (
			typeof navigator !== "undefined" &&
			((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")
		) {
			return false;
		}

		return typeof window !== "undefined" && typeof document !== "undefined";
	})();

	/**
	 * Determine if we're running in a standard browser webWorker environment
	 *
	 * Although the `isStandardBrowserEnv` method indicates that
	 * `allows axios to run in a web worker`, the WebWorker will still be
	 * filtered out due to its judgment standard
	 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
	 * This leads to a problem when axios post `FormData` in webWorker
	 */
	const isStandardBrowserWebWorkerEnv = (() => {
		return (
			typeof WorkerGlobalScope !== "undefined" &&
			// eslint-disable-next-line no-undef
			self instanceof WorkerGlobalScope &&
			typeof self.importScripts === "function"
		);
	})();

	/* harmony default export */ const browser = {
		isBrowser: true,
		classes: {
			URLSearchParams: classes_URLSearchParams,
			FormData: classes_FormData,
			Blob: classes_Blob,
		},
		isStandardBrowserEnv,
		isStandardBrowserWebWorkerEnv,
		protocols: ["http", "https", "file", "blob", "url", "data"],
	}; // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/toURLEncodedForm.js

	function toURLEncodedForm(data, options) {
		return helpers_toFormData(
			data,
			new browser.classes.URLSearchParams(),
			Object.assign(
				{
					visitor: function (value, key, path, helpers) {
						if (browser.isNode && utils.isBuffer(value)) {
							this.append(key, value.toString("base64"));
							return false;
						}

						return helpers.defaultVisitor.apply(this, arguments);
					},
				},
				options
			)
		);
	} // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/formDataToJSON.js

	/**
	 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
	 *
	 * @param {string} name - The name of the property to get.
	 *
	 * @returns An array of strings.
	 */
	function parsePropPath(name) {
		// foo[x][y][z]
		// foo.x.y.z
		// foo-x-y-z
		// foo x y z
		return utils.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
			return match[0] === "[]" ? "" : match[1] || match[0];
		});
	}

	/**
	 * Convert an array to an object.
	 *
	 * @param {Array<any>} arr - The array to convert to an object.
	 *
	 * @returns An object with the same keys and values as the array.
	 */
	function arrayToObject(arr) {
		const obj = {};
		const keys = Object.keys(arr);
		let i;
		const len = keys.length;
		let key;
		for (i = 0; i < len; i++) {
			key = keys[i];
			obj[key] = arr[key];
		}
		return obj;
	}

	/**
	 * It takes a FormData object and returns a JavaScript object
	 *
	 * @param {string} formData The FormData object to convert to JSON.
	 *
	 * @returns {Object<string, any> | null} The converted object.
	 */
	function formDataToJSON(formData) {
		function buildPath(path, value, target, index) {
			let name = path[index++];
			const isNumericKey = Number.isFinite(+name);
			const isLast = index >= path.length;
			name = !name && utils.isArray(target) ? target.length : name;

			if (isLast) {
				if (utils.hasOwnProp(target, name)) {
					target[name] = [target[name], value];
				} else {
					target[name] = value;
				}

				return !isNumericKey;
			}

			if (!target[name] || !utils.isObject(target[name])) {
				target[name] = [];
			}

			const result = buildPath(path, value, target[name], index);

			if (result && utils.isArray(target[name])) {
				target[name] = arrayToObject(target[name]);
			}

			return !isNumericKey;
		}

		if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
			const obj = {};

			utils.forEachEntry(formData, (name, value) => {
				buildPath(parsePropPath(name), value, obj, 0);
			});

			return obj;
		}

		return null;
	}

	/* harmony default export */ const helpers_formDataToJSON = formDataToJSON; // CONCATENATED MODULE: ./node_modules/axios/lib/defaults/index.js

	/**
	 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
	 * of the input
	 *
	 * @param {any} rawValue - The value to be stringified.
	 * @param {Function} parser - A function that parses a string into a JavaScript object.
	 * @param {Function} encoder - A function that takes a value and returns a string.
	 *
	 * @returns {string} A stringified version of the rawValue.
	 */
	function stringifySafely(rawValue, parser, encoder) {
		if (utils.isString(rawValue)) {
			try {
				(parser || JSON.parse)(rawValue);
				return utils.trim(rawValue);
			} catch (e) {
				if (e.name !== "SyntaxError") {
					throw e;
				}
			}
		}

		return (encoder || JSON.stringify)(rawValue);
	}

	const defaults = {
		transitional: defaults_transitional,

		adapter: browser.isNode ? "http" : "xhr",

		transformRequest: [
			function transformRequest(data, headers) {
				const contentType = headers.getContentType() || "";
				const hasJSONContentType = contentType.indexOf("application/json") > -1;
				const isObjectPayload = utils.isObject(data);

				if (isObjectPayload && utils.isHTMLForm(data)) {
					data = new FormData(data);
				}

				const isFormData = utils.isFormData(data);

				if (isFormData) {
					if (!hasJSONContentType) {
						return data;
					}
					return hasJSONContentType ? JSON.stringify(helpers_formDataToJSON(data)) : data;
				}

				if (
					utils.isArrayBuffer(data) ||
					utils.isBuffer(data) ||
					utils.isStream(data) ||
					utils.isFile(data) ||
					utils.isBlob(data)
				) {
					return data;
				}
				if (utils.isArrayBufferView(data)) {
					return data.buffer;
				}
				if (utils.isURLSearchParams(data)) {
					headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
					return data.toString();
				}

				let isFileList;

				if (isObjectPayload) {
					if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
						return toURLEncodedForm(data, this.formSerializer).toString();
					}

					if ((isFileList = utils.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
						const _FormData = this.env && this.env.FormData;

						return helpers_toFormData(
							isFileList ? { "files[]": data } : data,
							_FormData && new _FormData(),
							this.formSerializer
						);
					}
				}

				if (isObjectPayload || hasJSONContentType) {
					headers.setContentType("application/json", false);
					return stringifySafely(data);
				}

				return data;
			},
		],

		transformResponse: [
			function transformResponse(data) {
				const transitional = this.transitional || defaults.transitional;
				const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
				const JSONRequested = this.responseType === "json";

				if (data && utils.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
					const silentJSONParsing = transitional && transitional.silentJSONParsing;
					const strictJSONParsing = !silentJSONParsing && JSONRequested;

					try {
						return JSON.parse(data);
					} catch (e) {
						if (strictJSONParsing) {
							if (e.name === "SyntaxError") {
								throw core_AxiosError.from(
									e,
									core_AxiosError.ERR_BAD_RESPONSE,
									this,
									null,
									this.response
								);
							}
							throw e;
						}
					}
				}

				return data;
			},
		],

		/**
		 * A timeout in milliseconds to abort a request. If set to 0 (default) a
		 * timeout is not created.
		 */
		timeout: 0,

		xsrfCookieName: "XSRF-TOKEN",
		xsrfHeaderName: "X-XSRF-TOKEN",

		maxContentLength: -1,
		maxBodyLength: -1,

		env: {
			FormData: browser.classes.FormData,
			Blob: browser.classes.Blob,
		},

		validateStatus: function validateStatus(status) {
			return status >= 200 && status < 300;
		},

		headers: {
			common: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": undefined,
			},
		},
	};

	utils.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
		defaults.headers[method] = {};
	});

	/* harmony default export */ const lib_defaults = defaults; // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/parseHeaders.js

	// RawAxiosHeaders whose duplicates are ignored by node
	// c.f. https://nodejs.org/api/http.html#http_message_headers
	const ignoreDuplicateOf = utils.toObjectSet([
		"age",
		"authorization",
		"content-length",
		"content-type",
		"etag",
		"expires",
		"from",
		"host",
		"if-modified-since",
		"if-unmodified-since",
		"last-modified",
		"location",
		"max-forwards",
		"proxy-authorization",
		"referer",
		"retry-after",
		"user-agent",
	]);

	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} rawHeaders Headers needing to be parsed
	 *
	 * @returns {Object} Headers parsed into an object
	 */
	/* harmony default export */ const parseHeaders = (rawHeaders) => {
		const parsed = {};
		let key;
		let val;
		let i;

		rawHeaders &&
			rawHeaders.split("\n").forEach(function parser(line) {
				i = line.indexOf(":");
				key = line.substring(0, i).trim().toLowerCase();
				val = line.substring(i + 1).trim();

				if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
					return;
				}

				if (key === "set-cookie") {
					if (parsed[key]) {
						parsed[key].push(val);
					} else {
						parsed[key] = [val];
					}
				} else {
					parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
				}
			});

		return parsed;
	}; // CONCATENATED MODULE: ./node_modules/axios/lib/core/AxiosHeaders.js

	const $internals = Symbol("internals");

	function normalizeHeader(header) {
		return header && String(header).trim().toLowerCase();
	}

	function normalizeValue(value) {
		if (value === false || value == null) {
			return value;
		}

		return utils.isArray(value) ? value.map(normalizeValue) : String(value);
	}

	function parseTokens(str) {
		const tokens = Object.create(null);
		const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
		let match;

		while ((match = tokensRE.exec(str))) {
			tokens[match[1]] = match[2];
		}

		return tokens;
	}

	const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

	function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
		if (utils.isFunction(filter)) {
			return filter.call(this, value, header);
		}

		if (isHeaderNameFilter) {
			value = header;
		}

		if (!utils.isString(value)) return;

		if (utils.isString(filter)) {
			return value.indexOf(filter) !== -1;
		}

		if (utils.isRegExp(filter)) {
			return filter.test(value);
		}
	}

	function formatHeader(header) {
		return header
			.trim()
			.toLowerCase()
			.replace(/([a-z\d])(\w*)/g, (w, char, str) => {
				return char.toUpperCase() + str;
			});
	}

	function buildAccessors(obj, header) {
		const accessorName = utils.toCamelCase(" " + header);

		["get", "set", "has"].forEach((methodName) => {
			Object.defineProperty(obj, methodName + accessorName, {
				value: function (arg1, arg2, arg3) {
					return this[methodName].call(this, header, arg1, arg2, arg3);
				},
				configurable: true,
			});
		});
	}

	class AxiosHeaders {
		constructor(headers) {
			headers && this.set(headers);
		}

		set(header, valueOrRewrite, rewrite) {
			const self = this;

			function setHeader(_value, _header, _rewrite) {
				const lHeader = normalizeHeader(_header);

				if (!lHeader) {
					throw new Error("header name must be a non-empty string");
				}

				const key = utils.findKey(self, lHeader);

				if (
					!key ||
					self[key] === undefined ||
					_rewrite === true ||
					(_rewrite === undefined && self[key] !== false)
				) {
					self[key || _header] = normalizeValue(_value);
				}
			}

			const setHeaders = (headers, _rewrite) =>
				utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

			if (utils.isPlainObject(header) || header instanceof this.constructor) {
				setHeaders(header, valueOrRewrite);
			} else if (utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
				setHeaders(parseHeaders(header), valueOrRewrite);
			} else {
				header != null && setHeader(valueOrRewrite, header, rewrite);
			}

			return this;
		}

		get(header, parser) {
			header = normalizeHeader(header);

			if (header) {
				const key = utils.findKey(this, header);

				if (key) {
					const value = this[key];

					if (!parser) {
						return value;
					}

					if (parser === true) {
						return parseTokens(value);
					}

					if (utils.isFunction(parser)) {
						return parser.call(this, value, key);
					}

					if (utils.isRegExp(parser)) {
						return parser.exec(value);
					}

					throw new TypeError("parser must be boolean|regexp|function");
				}
			}
		}

		has(header, matcher) {
			header = normalizeHeader(header);

			if (header) {
				const key = utils.findKey(this, header);

				return !!(
					key &&
					this[key] !== undefined &&
					(!matcher || matchHeaderValue(this, this[key], key, matcher))
				);
			}

			return false;
		}

		delete(header, matcher) {
			const self = this;
			let deleted = false;

			function deleteHeader(_header) {
				_header = normalizeHeader(_header);

				if (_header) {
					const key = utils.findKey(self, _header);

					if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
						delete self[key];

						deleted = true;
					}
				}
			}

			if (utils.isArray(header)) {
				header.forEach(deleteHeader);
			} else {
				deleteHeader(header);
			}

			return deleted;
		}

		clear(matcher) {
			const keys = Object.keys(this);
			let i = keys.length;
			let deleted = false;

			while (i--) {
				const key = keys[i];
				if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
					delete this[key];
					deleted = true;
				}
			}

			return deleted;
		}

		normalize(format) {
			const self = this;
			const headers = {};

			utils.forEach(this, (value, header) => {
				const key = utils.findKey(headers, header);

				if (key) {
					self[key] = normalizeValue(value);
					delete self[header];
					return;
				}

				const normalized = format ? formatHeader(header) : String(header).trim();

				if (normalized !== header) {
					delete self[header];
				}

				self[normalized] = normalizeValue(value);

				headers[normalized] = true;
			});

			return this;
		}

		concat(...targets) {
			return this.constructor.concat(this, ...targets);
		}

		toJSON(asStrings) {
			const obj = Object.create(null);

			utils.forEach(this, (value, header) => {
				value != null &&
					value !== false &&
					(obj[header] = asStrings && utils.isArray(value) ? value.join(", ") : value);
			});

			return obj;
		}

		[Symbol.iterator]() {
			return Object.entries(this.toJSON())[Symbol.iterator]();
		}

		toString() {
			return Object.entries(this.toJSON())
				.map(([header, value]) => header + ": " + value)
				.join("\n");
		}

		get [Symbol.toStringTag]() {
			return "AxiosHeaders";
		}

		static from(thing) {
			return thing instanceof this ? thing : new this(thing);
		}

		static concat(first, ...targets) {
			const computed = new this(first);

			targets.forEach((target) => computed.set(target));

			return computed;
		}

		static accessor(header) {
			const internals =
				(this[$internals] =
				this[$internals] =
					{
						accessors: {},
					});

			const accessors = internals.accessors;
			const prototype = this.prototype;

			function defineAccessor(_header) {
				const lHeader = normalizeHeader(_header);

				if (!accessors[lHeader]) {
					buildAccessors(prototype, _header);
					accessors[lHeader] = true;
				}
			}

			utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

			return this;
		}
	}

	AxiosHeaders.accessor([
		"Content-Type",
		"Content-Length",
		"Accept",
		"Accept-Encoding",
		"User-Agent",
		"Authorization",
	]);

	// reserved names hotfix
	utils.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
		let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
		return {
			get: () => value,
			set(headerValue) {
				this[mapped] = headerValue;
			},
		};
	});

	utils.freezeMethods(AxiosHeaders);

	/* harmony default export */ const core_AxiosHeaders = AxiosHeaders; // CONCATENATED MODULE: ./node_modules/axios/lib/core/transformData.js

	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Array|Function} fns A single function or Array of functions
	 * @param {?Object} response The response object
	 *
	 * @returns {*} The resulting transformed data
	 */
	function transformData(fns, response) {
		const config = this || lib_defaults;
		const context = response || config;
		const headers = core_AxiosHeaders.from(context.headers);
		let data = context.data;

		utils.forEach(fns, function transform(fn) {
			data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
		});

		headers.normalize();

		return data;
	} // CONCATENATED MODULE: ./node_modules/axios/lib/cancel/isCancel.js

	function isCancel(value) {
		return !!(value && value.__CANCEL__);
	} // CONCATENATED MODULE: ./node_modules/axios/lib/cancel/CanceledError.js

	/**
	 * A `CanceledError` is an object that is thrown when an operation is canceled.
	 *
	 * @param {string=} message The message.
	 * @param {Object=} config The config.
	 * @param {Object=} request The request.
	 *
	 * @returns {CanceledError} The created error.
	 */
	function CanceledError(message, config, request) {
		// eslint-disable-next-line no-eq-null,eqeqeq
		core_AxiosError.call(
			this,
			message == null ? "canceled" : message,
			core_AxiosError.ERR_CANCELED,
			config,
			request
		);
		this.name = "CanceledError";
	}

	utils.inherits(CanceledError, core_AxiosError, {
		__CANCEL__: true,
	});

	/* harmony default export */ const cancel_CanceledError = CanceledError; // CONCATENATED MODULE: ./node_modules/axios/lib/core/settle.js

	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 *
	 * @returns {object} The response.
	 */
	function settle(resolve, reject, response) {
		const validateStatus = response.config.validateStatus;
		if (!response.status || !validateStatus || validateStatus(response.status)) {
			resolve(response);
		} else {
			reject(
				new core_AxiosError(
					"Request failed with status code " + response.status,
					[core_AxiosError.ERR_BAD_REQUEST, core_AxiosError.ERR_BAD_RESPONSE][
						Math.floor(response.status / 100) - 4
					],
					response.config,
					response.request,
					response
				)
			);
		}
	} // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/cookies.js

	/* harmony default export */ const cookies = browser.isStandardBrowserEnv
		? // Standard browser envs support document.cookie
		  (function standardBrowserEnv() {
				return {
					write: function write(name, value, expires, path, domain, secure) {
						const cookie = [];
						cookie.push(name + "=" + encodeURIComponent(value));

						if (utils.isNumber(expires)) {
							cookie.push("expires=" + new Date(expires).toGMTString());
						}

						if (utils.isString(path)) {
							cookie.push("path=" + path);
						}

						if (utils.isString(domain)) {
							cookie.push("domain=" + domain);
						}

						if (secure === true) {
							cookie.push("secure");
						}

						document.cookie = cookie.join("; ");
					},

					read: function read(name) {
						const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
						return match ? decodeURIComponent(match[3]) : null;
					},

					remove: function remove(name) {
						this.write(name, "", Date.now() - 86400000);
					},
				};
		  })()
		: // Non standard browser env (web workers, react-native) lack needed support.
		  (function nonStandardBrowserEnv() {
				return {
					write: function write() {},
					read: function read() {
						return null;
					},
					remove: function remove() {},
				};
		  })(); // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isAbsoluteURL.js

	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 *
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	function isAbsoluteURL(url) {
		// A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
		// RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
		// by any combination of letters, digits, plus, period, or hyphen.
		return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
	} // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/combineURLs.js

	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 *
	 * @returns {string} The combined URL
	 */
	function combineURLs(baseURL, relativeURL) {
		return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
	} // CONCATENATED MODULE: ./node_modules/axios/lib/core/buildFullPath.js

	/**
	 * Creates a new URL by combining the baseURL with the requestedURL,
	 * only when the requestedURL is not already an absolute URL.
	 * If the requestURL is absolute, this function returns the requestedURL untouched.
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} requestedURL Absolute or relative URL to combine
	 *
	 * @returns {string} The combined full path
	 */
	function buildFullPath(baseURL, requestedURL) {
		if (baseURL && !isAbsoluteURL(requestedURL)) {
			return combineURLs(baseURL, requestedURL);
		}
		return requestedURL;
	} // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isURLSameOrigin.js

	/* harmony default export */ const isURLSameOrigin = browser.isStandardBrowserEnv
		? // Standard browser envs have full support of the APIs needed to test
		  // whether the request URL is of the same origin as current location.
		  (function standardBrowserEnv() {
				const msie = /(msie|trident)/i.test(navigator.userAgent);
				const urlParsingNode = document.createElement("a");
				let originURL;

				/**
				 * Parse a URL to discover it's components
				 *
				 * @param {String} url The URL to be parsed
				 * @returns {Object}
				 */
				function resolveURL(url) {
					let href = url;

					if (msie) {
						// IE needs attribute set twice to normalize properties
						urlParsingNode.setAttribute("href", href);
						href = urlParsingNode.href;
					}

					urlParsingNode.setAttribute("href", href);

					// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
					return {
						href: urlParsingNode.href,
						protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
						host: urlParsingNode.host,
						search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
						hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
						hostname: urlParsingNode.hostname,
						port: urlParsingNode.port,
						pathname:
							urlParsingNode.pathname.charAt(0) === "/"
								? urlParsingNode.pathname
								: "/" + urlParsingNode.pathname,
					};
				}

				originURL = resolveURL(window.location.href);

				/**
				 * Determine if a URL shares the same origin as the current location
				 *
				 * @param {String} requestURL The URL to test
				 * @returns {boolean} True if URL shares the same origin, otherwise false
				 */
				return function isURLSameOrigin(requestURL) {
					const parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
					return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
				};
		  })()
		: // Non standard browser envs (web workers, react-native) lack needed support.
		  (function nonStandardBrowserEnv() {
				return function isURLSameOrigin() {
					return true;
				};
		  })(); // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/parseProtocol.js

	function parseProtocol(url) {
		const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
		return (match && match[1]) || "";
	} // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/speedometer.js

	/**
	 * Calculate data maxRate
	 * @param {Number} [samplesCount= 10]
	 * @param {Number} [min= 1000]
	 * @returns {Function}
	 */
	function speedometer(samplesCount, min) {
		samplesCount = samplesCount || 10;
		const bytes = new Array(samplesCount);
		const timestamps = new Array(samplesCount);
		let head = 0;
		let tail = 0;
		let firstSampleTS;

		min = min !== undefined ? min : 1000;

		return function push(chunkLength) {
			const now = Date.now();

			const startedAt = timestamps[tail];

			if (!firstSampleTS) {
				firstSampleTS = now;
			}

			bytes[head] = chunkLength;
			timestamps[head] = now;

			let i = tail;
			let bytesCount = 0;

			while (i !== head) {
				bytesCount += bytes[i++];
				i = i % samplesCount;
			}

			head = (head + 1) % samplesCount;

			if (head === tail) {
				tail = (tail + 1) % samplesCount;
			}

			if (now - firstSampleTS < min) {
				return;
			}

			const passed = startedAt && now - startedAt;

			return passed ? Math.round((bytesCount * 1000) / passed) : undefined;
		};
	}

	/* harmony default export */ const helpers_speedometer = speedometer; // CONCATENATED MODULE: ./node_modules/axios/lib/adapters/xhr.js

	function progressEventReducer(listener, isDownloadStream) {
		let bytesNotified = 0;
		const _speedometer = helpers_speedometer(50, 250);

		return (e) => {
			const loaded = e.loaded;
			const total = e.lengthComputable ? e.total : undefined;
			const progressBytes = loaded - bytesNotified;
			const rate = _speedometer(progressBytes);
			const inRange = loaded <= total;

			bytesNotified = loaded;

			const data = {
				loaded,
				total,
				progress: total ? loaded / total : undefined,
				bytes: progressBytes,
				rate: rate ? rate : undefined,
				estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
				event: e,
			};

			data[isDownloadStream ? "download" : "upload"] = true;

			listener(data);
		};
	}

	const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";

	/* harmony default export */ const xhr =
		isXHRAdapterSupported &&
		function (config) {
			return new Promise(function dispatchXhrRequest(resolve, reject) {
				let requestData = config.data;
				const requestHeaders = core_AxiosHeaders.from(config.headers).normalize();
				const responseType = config.responseType;
				let onCanceled;
				function done() {
					if (config.cancelToken) {
						config.cancelToken.unsubscribe(onCanceled);
					}

					if (config.signal) {
						config.signal.removeEventListener("abort", onCanceled);
					}
				}

				if (utils.isFormData(requestData)) {
					if (browser.isStandardBrowserEnv || browser.isStandardBrowserWebWorkerEnv) {
						requestHeaders.setContentType(false); // Let the browser set it
					} else {
						requestHeaders.setContentType("multipart/form-data;", false); // mobile/desktop app frameworks
					}
				}

				let request = new XMLHttpRequest();

				// HTTP basic authentication
				if (config.auth) {
					const username = config.auth.username || "";
					const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
					requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
				}

				const fullPath = buildFullPath(config.baseURL, config.url);

				request.open(
					config.method.toUpperCase(),
					buildURL(fullPath, config.params, config.paramsSerializer),
					true
				);

				// Set the request timeout in MS
				request.timeout = config.timeout;

				function onloadend() {
					if (!request) {
						return;
					}
					// Prepare the response
					const responseHeaders = core_AxiosHeaders.from(
						"getAllResponseHeaders" in request && request.getAllResponseHeaders()
					);
					const responseData =
						!responseType || responseType === "text" || responseType === "json"
							? request.responseText
							: request.response;
					const response = {
						data: responseData,
						status: request.status,
						statusText: request.statusText,
						headers: responseHeaders,
						config,
						request,
					};

					settle(
						function _resolve(value) {
							resolve(value);
							done();
						},
						function _reject(err) {
							reject(err);
							done();
						},
						response
					);

					// Clean up request
					request = null;
				}

				if ("onloadend" in request) {
					// Use onloadend if available
					request.onloadend = onloadend;
				} else {
					// Listen for ready state to emulate onloadend
					request.onreadystatechange = function handleLoad() {
						if (!request || request.readyState !== 4) {
							return;
						}

						// The request errored out and we didn't get a response, this will be
						// handled by onerror instead
						// With one exception: request that using file: protocol, most browsers
						// will return status as 0 even though it's a successful request
						if (
							request.status === 0 &&
							!(request.responseURL && request.responseURL.indexOf("file:") === 0)
						) {
							return;
						}
						// readystate handler is calling before onerror or ontimeout handlers,
						// so we should call onloadend on the next 'tick'
						setTimeout(onloadend);
					};
				}

				// Handle browser request cancellation (as opposed to a manual cancellation)
				request.onabort = function handleAbort() {
					if (!request) {
						return;
					}

					reject(new core_AxiosError("Request aborted", core_AxiosError.ECONNABORTED, config, request));

					// Clean up request
					request = null;
				};

				// Handle low level network errors
				request.onerror = function handleError() {
					// Real errors are hidden from us by the browser
					// onerror should only fire if it's a network error
					reject(new core_AxiosError("Network Error", core_AxiosError.ERR_NETWORK, config, request));

					// Clean up request
					request = null;
				};

				// Handle timeout
				request.ontimeout = function handleTimeout() {
					let timeoutErrorMessage = config.timeout
						? "timeout of " + config.timeout + "ms exceeded"
						: "timeout exceeded";
					const transitional = config.transitional || defaults_transitional;
					if (config.timeoutErrorMessage) {
						timeoutErrorMessage = config.timeoutErrorMessage;
					}
					reject(
						new core_AxiosError(
							timeoutErrorMessage,
							transitional.clarifyTimeoutError ? core_AxiosError.ETIMEDOUT : core_AxiosError.ECONNABORTED,
							config,
							request
						)
					);

					// Clean up request
					request = null;
				};

				// Add xsrf header
				// This is only done if running in a standard browser environment.
				// Specifically not if we're in a web worker, or react-native.
				if (browser.isStandardBrowserEnv) {
					// Add xsrf header
					const xsrfValue =
						(config.withCredentials || isURLSameOrigin(fullPath)) &&
						config.xsrfCookieName &&
						cookies.read(config.xsrfCookieName);

					if (xsrfValue) {
						requestHeaders.set(config.xsrfHeaderName, xsrfValue);
					}
				}

				// Remove Content-Type if data is undefined
				requestData === undefined && requestHeaders.setContentType(null);

				// Add headers to the request
				if ("setRequestHeader" in request) {
					utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
						request.setRequestHeader(key, val);
					});
				}

				// Add withCredentials to request if needed
				if (!utils.isUndefined(config.withCredentials)) {
					request.withCredentials = !!config.withCredentials;
				}

				// Add responseType to request if needed
				if (responseType && responseType !== "json") {
					request.responseType = config.responseType;
				}

				// Handle progress if needed
				if (typeof config.onDownloadProgress === "function") {
					request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
				}

				// Not all browsers support upload events
				if (typeof config.onUploadProgress === "function" && request.upload) {
					request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
				}

				if (config.cancelToken || config.signal) {
					// Handle cancellation
					// eslint-disable-next-line func-names
					onCanceled = (cancel) => {
						if (!request) {
							return;
						}
						reject(!cancel || cancel.type ? new cancel_CanceledError(null, config, request) : cancel);
						request.abort();
						request = null;
					};

					config.cancelToken && config.cancelToken.subscribe(onCanceled);
					if (config.signal) {
						config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
					}
				}

				const protocol = parseProtocol(fullPath);

				if (protocol && browser.protocols.indexOf(protocol) === -1) {
					reject(
						new core_AxiosError(
							"Unsupported protocol " + protocol + ":",
							core_AxiosError.ERR_BAD_REQUEST,
							config
						)
					);
					return;
				}

				// Send the request
				request.send(requestData || null);
			});
		}; // CONCATENATED MODULE: ./node_modules/axios/lib/adapters/adapters.js

	const knownAdapters = {
		http: helpers_null,
		xhr: xhr,
	};

	utils.forEach(knownAdapters, (fn, value) => {
		if (fn) {
			try {
				Object.defineProperty(fn, "name", { value });
			} catch (e) {
				// eslint-disable-next-line no-empty
			}
			Object.defineProperty(fn, "adapterName", { value });
		}
	});

	/* harmony default export */ const adapters = {
		getAdapter: (adapters) => {
			adapters = utils.isArray(adapters) ? adapters : [adapters];

			const { length } = adapters;
			let nameOrAdapter;
			let adapter;

			for (let i = 0; i < length; i++) {
				nameOrAdapter = adapters[i];
				if (
					(adapter = utils.isString(nameOrAdapter)
						? knownAdapters[nameOrAdapter.toLowerCase()]
						: nameOrAdapter)
				) {
					break;
				}
			}

			if (!adapter) {
				if (adapter === false) {
					throw new core_AxiosError(
						`Adapter ${nameOrAdapter} is not supported by the environment`,
						"ERR_NOT_SUPPORT"
					);
				}

				throw new Error(
					utils.hasOwnProp(knownAdapters, nameOrAdapter)
						? `Adapter '${nameOrAdapter}' is not available in the build`
						: `Unknown adapter '${nameOrAdapter}'`
				);
			}

			if (!utils.isFunction(adapter)) {
				throw new TypeError("adapter is not a function");
			}

			return adapter;
		},
		adapters: knownAdapters,
	}; // CONCATENATED MODULE: ./node_modules/axios/lib/core/dispatchRequest.js

	/**
	 * Throws a `CanceledError` if cancellation has been requested.
	 *
	 * @param {Object} config The config that is to be used for the request
	 *
	 * @returns {void}
	 */
	function throwIfCancellationRequested(config) {
		if (config.cancelToken) {
			config.cancelToken.throwIfRequested();
		}

		if (config.signal && config.signal.aborted) {
			throw new cancel_CanceledError(null, config);
		}
	}

	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 *
	 * @returns {Promise} The Promise to be fulfilled
	 */
	function dispatchRequest(config) {
		throwIfCancellationRequested(config);

		config.headers = core_AxiosHeaders.from(config.headers);

		// Transform request data
		config.data = transformData.call(config, config.transformRequest);

		if (["post", "put", "patch"].indexOf(config.method) !== -1) {
			config.headers.setContentType("application/x-www-form-urlencoded", false);
		}

		const adapter = adapters.getAdapter(config.adapter || lib_defaults.adapter);

		return adapter(config).then(
			function onAdapterResolution(response) {
				throwIfCancellationRequested(config);

				// Transform response data
				response.data = transformData.call(config, config.transformResponse, response);

				response.headers = core_AxiosHeaders.from(response.headers);

				return response;
			},
			function onAdapterRejection(reason) {
				if (!isCancel(reason)) {
					throwIfCancellationRequested(config);

					// Transform response data
					if (reason && reason.response) {
						reason.response.data = transformData.call(config, config.transformResponse, reason.response);
						reason.response.headers = core_AxiosHeaders.from(reason.response.headers);
					}
				}

				return Promise.reject(reason);
			}
		);
	} // CONCATENATED MODULE: ./node_modules/axios/lib/core/mergeConfig.js

	const headersToObject = (thing) => (thing instanceof core_AxiosHeaders ? thing.toJSON() : thing);

	/**
	 * Config-specific merge-function which creates a new config-object
	 * by merging two configuration objects together.
	 *
	 * @param {Object} config1
	 * @param {Object} config2
	 *
	 * @returns {Object} New object resulting from merging config2 to config1
	 */
	function mergeConfig(config1, config2) {
		// eslint-disable-next-line no-param-reassign
		config2 = config2 || {};
		const config = {};

		function getMergedValue(target, source, caseless) {
			if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
				return utils.merge.call({ caseless }, target, source);
			} else if (utils.isPlainObject(source)) {
				return utils.merge({}, source);
			} else if (utils.isArray(source)) {
				return source.slice();
			}
			return source;
		}

		// eslint-disable-next-line consistent-return
		function mergeDeepProperties(a, b, caseless) {
			if (!utils.isUndefined(b)) {
				return getMergedValue(a, b, caseless);
			} else if (!utils.isUndefined(a)) {
				return getMergedValue(undefined, a, caseless);
			}
		}

		// eslint-disable-next-line consistent-return
		function valueFromConfig2(a, b) {
			if (!utils.isUndefined(b)) {
				return getMergedValue(undefined, b);
			}
		}

		// eslint-disable-next-line consistent-return
		function defaultToConfig2(a, b) {
			if (!utils.isUndefined(b)) {
				return getMergedValue(undefined, b);
			} else if (!utils.isUndefined(a)) {
				return getMergedValue(undefined, a);
			}
		}

		// eslint-disable-next-line consistent-return
		function mergeDirectKeys(a, b, prop) {
			if (prop in config2) {
				return getMergedValue(a, b);
			} else if (prop in config1) {
				return getMergedValue(undefined, a);
			}
		}

		const mergeMap = {
			url: valueFromConfig2,
			method: valueFromConfig2,
			data: valueFromConfig2,
			baseURL: defaultToConfig2,
			transformRequest: defaultToConfig2,
			transformResponse: defaultToConfig2,
			paramsSerializer: defaultToConfig2,
			timeout: defaultToConfig2,
			timeoutMessage: defaultToConfig2,
			withCredentials: defaultToConfig2,
			adapter: defaultToConfig2,
			responseType: defaultToConfig2,
			xsrfCookieName: defaultToConfig2,
			xsrfHeaderName: defaultToConfig2,
			onUploadProgress: defaultToConfig2,
			onDownloadProgress: defaultToConfig2,
			decompress: defaultToConfig2,
			maxContentLength: defaultToConfig2,
			maxBodyLength: defaultToConfig2,
			beforeRedirect: defaultToConfig2,
			transport: defaultToConfig2,
			httpAgent: defaultToConfig2,
			httpsAgent: defaultToConfig2,
			cancelToken: defaultToConfig2,
			socketPath: defaultToConfig2,
			responseEncoding: defaultToConfig2,
			validateStatus: mergeDirectKeys,
			headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true),
		};

		utils.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
			const merge = mergeMap[prop] || mergeDeepProperties;
			const configValue = merge(config1[prop], config2[prop], prop);
			(utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
		});

		return config;
	} // CONCATENATED MODULE: ./node_modules/axios/lib/env/data.js

	const VERSION = "1.5.0"; // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/validator.js
	const validators = {};

	// eslint-disable-next-line func-names
	["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
		validators[type] = function validator(thing) {
			return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
		};
	});

	const deprecatedWarnings = {};

	/**
	 * Transitional option validator
	 *
	 * @param {function|boolean?} validator - set to false if the transitional option has been removed
	 * @param {string?} version - deprecated version / removed since version
	 * @param {string?} message - some message with additional info
	 *
	 * @returns {function}
	 */
	validators.transitional = function transitional(validator, version, message) {
		function formatMessage(opt, desc) {
			return (
				"[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "")
			);
		}

		// eslint-disable-next-line func-names
		return (value, opt, opts) => {
			if (validator === false) {
				throw new core_AxiosError(
					formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
					core_AxiosError.ERR_DEPRECATED
				);
			}

			if (version && !deprecatedWarnings[opt]) {
				deprecatedWarnings[opt] = true;
				// eslint-disable-next-line no-console
				console.warn(
					formatMessage(
						opt,
						" has been deprecated since v" + version + " and will be removed in the near future"
					)
				);
			}

			return validator ? validator(value, opt, opts) : true;
		};
	};

	/**
	 * Assert object's properties type
	 *
	 * @param {object} options
	 * @param {object} schema
	 * @param {boolean?} allowUnknown
	 *
	 * @returns {object}
	 */

	function assertOptions(options, schema, allowUnknown) {
		if (typeof options !== "object") {
			throw new core_AxiosError("options must be an object", core_AxiosError.ERR_BAD_OPTION_VALUE);
		}
		const keys = Object.keys(options);
		let i = keys.length;
		while (i-- > 0) {
			const opt = keys[i];
			const validator = schema[opt];
			if (validator) {
				const value = options[opt];
				const result = value === undefined || validator(value, opt, options);
				if (result !== true) {
					throw new core_AxiosError(
						"option " + opt + " must be " + result,
						core_AxiosError.ERR_BAD_OPTION_VALUE
					);
				}
				continue;
			}
			if (allowUnknown !== true) {
				throw new core_AxiosError("Unknown option " + opt, core_AxiosError.ERR_BAD_OPTION);
			}
		}
	}

	/* harmony default export */ const validator = {
		assertOptions,
		validators,
	}; // CONCATENATED MODULE: ./node_modules/axios/lib/core/Axios.js

	const Axios_validators = validator.validators;

	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 *
	 * @return {Axios} A new instance of Axios
	 */
	class Axios {
		constructor(instanceConfig) {
			this.defaults = instanceConfig;
			this.interceptors = {
				request: new core_InterceptorManager(),
				response: new core_InterceptorManager(),
			};
		}

		/**
		 * Dispatch a request
		 *
		 * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
		 * @param {?Object} config
		 *
		 * @returns {Promise} The Promise to be fulfilled
		 */
		request(configOrUrl, config) {
			/*eslint no-param-reassign:0*/
			// Allow for axios('example/url'[, config]) a la fetch API
			if (typeof configOrUrl === "string") {
				config = config || {};
				config.url = configOrUrl;
			} else {
				config = configOrUrl || {};
			}

			config = mergeConfig(this.defaults, config);

			const { transitional, paramsSerializer, headers } = config;

			if (transitional !== undefined) {
				validator.assertOptions(
					transitional,
					{
						silentJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
						forcedJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
						clarifyTimeoutError: Axios_validators.transitional(Axios_validators.boolean),
					},
					false
				);
			}

			if (paramsSerializer != null) {
				if (utils.isFunction(paramsSerializer)) {
					config.paramsSerializer = {
						serialize: paramsSerializer,
					};
				} else {
					validator.assertOptions(
						paramsSerializer,
						{
							encode: Axios_validators.function,
							serialize: Axios_validators.function,
						},
						true
					);
				}
			}

			// Set config.method
			config.method = (config.method || this.defaults.method || "get").toLowerCase();

			// Flatten headers
			let contextHeaders = headers && utils.merge(headers.common, headers[config.method]);

			headers &&
				utils.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (method) => {
					delete headers[method];
				});

			config.headers = core_AxiosHeaders.concat(contextHeaders, headers);

			// filter out skipped interceptors
			const requestInterceptorChain = [];
			let synchronousRequestInterceptors = true;
			this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
				if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
					return;
				}

				synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

				requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
			});

			const responseInterceptorChain = [];
			this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
				responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
			});

			let promise;
			let i = 0;
			let len;

			if (!synchronousRequestInterceptors) {
				const chain = [dispatchRequest.bind(this), undefined];
				chain.unshift.apply(chain, requestInterceptorChain);
				chain.push.apply(chain, responseInterceptorChain);
				len = chain.length;

				promise = Promise.resolve(config);

				while (i < len) {
					promise = promise.then(chain[i++], chain[i++]);
				}

				return promise;
			}

			len = requestInterceptorChain.length;

			let newConfig = config;

			i = 0;

			while (i < len) {
				const onFulfilled = requestInterceptorChain[i++];
				const onRejected = requestInterceptorChain[i++];
				try {
					newConfig = onFulfilled(newConfig);
				} catch (error) {
					onRejected.call(this, error);
					break;
				}
			}

			try {
				promise = dispatchRequest.call(this, newConfig);
			} catch (error) {
				return Promise.reject(error);
			}

			i = 0;
			len = responseInterceptorChain.length;

			while (i < len) {
				promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
			}

			return promise;
		}

		getUri(config) {
			config = mergeConfig(this.defaults, config);
			const fullPath = buildFullPath(config.baseURL, config.url);
			return buildURL(fullPath, config.params, config.paramsSerializer);
		}
	}

	// Provide aliases for supported request methods
	utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
		/*eslint func-names:0*/
		Axios.prototype[method] = function (url, config) {
			return this.request(
				mergeConfig(config || {}, {
					method,
					url,
					data: (config || {}).data,
				})
			);
		};
	});

	utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
		/*eslint func-names:0*/

		function generateHTTPMethod(isForm) {
			return function httpMethod(url, data, config) {
				return this.request(
					mergeConfig(config || {}, {
						method,
						headers: isForm
							? {
									"Content-Type": "multipart/form-data",
							  }
							: {},
						url,
						data,
					})
				);
			};
		}

		Axios.prototype[method] = generateHTTPMethod();

		Axios.prototype[method + "Form"] = generateHTTPMethod(true);
	});

	/* harmony default export */ const core_Axios = Axios; // CONCATENATED MODULE: ./node_modules/axios/lib/cancel/CancelToken.js

	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @param {Function} executor The executor function.
	 *
	 * @returns {CancelToken}
	 */
	class CancelToken {
		constructor(executor) {
			if (typeof executor !== "function") {
				throw new TypeError("executor must be a function.");
			}

			let resolvePromise;

			this.promise = new Promise(function promiseExecutor(resolve) {
				resolvePromise = resolve;
			});

			const token = this;

			// eslint-disable-next-line func-names
			this.promise.then((cancel) => {
				if (!token._listeners) return;

				let i = token._listeners.length;

				while (i-- > 0) {
					token._listeners[i](cancel);
				}
				token._listeners = null;
			});

			// eslint-disable-next-line func-names
			this.promise.then = (onfulfilled) => {
				let _resolve;
				// eslint-disable-next-line func-names
				const promise = new Promise((resolve) => {
					token.subscribe(resolve);
					_resolve = resolve;
				}).then(onfulfilled);

				promise.cancel = function reject() {
					token.unsubscribe(_resolve);
				};

				return promise;
			};

			executor(function cancel(message, config, request) {
				if (token.reason) {
					// Cancellation has already been requested
					return;
				}

				token.reason = new cancel_CanceledError(message, config, request);
				resolvePromise(token.reason);
			});
		}

		/**
		 * Throws a `CanceledError` if cancellation has been requested.
		 */
		throwIfRequested() {
			if (this.reason) {
				throw this.reason;
			}
		}

		/**
		 * Subscribe to the cancel signal
		 */

		subscribe(listener) {
			if (this.reason) {
				listener(this.reason);
				return;
			}

			if (this._listeners) {
				this._listeners.push(listener);
			} else {
				this._listeners = [listener];
			}
		}

		/**
		 * Unsubscribe from the cancel signal
		 */

		unsubscribe(listener) {
			if (!this._listeners) {
				return;
			}
			const index = this._listeners.indexOf(listener);
			if (index !== -1) {
				this._listeners.splice(index, 1);
			}
		}

		/**
		 * Returns an object that contains a new `CancelToken` and a function that, when called,
		 * cancels the `CancelToken`.
		 */
		static source() {
			let cancel;
			const token = new CancelToken(function executor(c) {
				cancel = c;
			});
			return {
				token,
				cancel,
			};
		}
	}

	/* harmony default export */ const cancel_CancelToken = CancelToken; // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/spread.js

	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 *
	 * @returns {Function}
	 */
	function spread(callback) {
		return function wrap(arr) {
			return callback.apply(null, arr);
		};
	} // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isAxiosError.js

	/**
	 * Determines whether the payload is an error thrown by Axios
	 *
	 * @param {*} payload The value to test
	 *
	 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
	 */
	function isAxiosError(payload) {
		return utils.isObject(payload) && payload.isAxiosError === true;
	} // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/HttpStatusCode.js

	const HttpStatusCode = {
		Continue: 100,
		SwitchingProtocols: 101,
		Processing: 102,
		EarlyHints: 103,
		Ok: 200,
		Created: 201,
		Accepted: 202,
		NonAuthoritativeInformation: 203,
		NoContent: 204,
		ResetContent: 205,
		PartialContent: 206,
		MultiStatus: 207,
		AlreadyReported: 208,
		ImUsed: 226,
		MultipleChoices: 300,
		MovedPermanently: 301,
		Found: 302,
		SeeOther: 303,
		NotModified: 304,
		UseProxy: 305,
		Unused: 306,
		TemporaryRedirect: 307,
		PermanentRedirect: 308,
		BadRequest: 400,
		Unauthorized: 401,
		PaymentRequired: 402,
		Forbidden: 403,
		NotFound: 404,
		MethodNotAllowed: 405,
		NotAcceptable: 406,
		ProxyAuthenticationRequired: 407,
		RequestTimeout: 408,
		Conflict: 409,
		Gone: 410,
		LengthRequired: 411,
		PreconditionFailed: 412,
		PayloadTooLarge: 413,
		UriTooLong: 414,
		UnsupportedMediaType: 415,
		RangeNotSatisfiable: 416,
		ExpectationFailed: 417,
		ImATeapot: 418,
		MisdirectedRequest: 421,
		UnprocessableEntity: 422,
		Locked: 423,
		FailedDependency: 424,
		TooEarly: 425,
		UpgradeRequired: 426,
		PreconditionRequired: 428,
		TooManyRequests: 429,
		RequestHeaderFieldsTooLarge: 431,
		UnavailableForLegalReasons: 451,
		InternalServerError: 500,
		NotImplemented: 501,
		BadGateway: 502,
		ServiceUnavailable: 503,
		GatewayTimeout: 504,
		HttpVersionNotSupported: 505,
		VariantAlsoNegotiates: 506,
		InsufficientStorage: 507,
		LoopDetected: 508,
		NotExtended: 510,
		NetworkAuthenticationRequired: 511,
	};

	Object.entries(HttpStatusCode).forEach(([key, value]) => {
		HttpStatusCode[value] = key;
	});

	/* harmony default export */ const helpers_HttpStatusCode = HttpStatusCode; // CONCATENATED MODULE: ./node_modules/axios/lib/axios.js

	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 *
	 * @returns {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
		const context = new core_Axios(defaultConfig);
		const instance = bind(core_Axios.prototype.request, context);

		// Copy axios.prototype to instance
		utils.extend(instance, core_Axios.prototype, context, { allOwnKeys: true });

		// Copy context to instance
		utils.extend(instance, context, null, { allOwnKeys: true });

		// Factory for creating new instances
		instance.create = function create(instanceConfig) {
			return createInstance(mergeConfig(defaultConfig, instanceConfig));
		};

		return instance;
	}

	// Create the default instance to be exported
	const axios = createInstance(lib_defaults);

	// Expose Axios class to allow class inheritance
	axios.Axios = core_Axios;

	// Expose Cancel & CancelToken
	axios.CanceledError = cancel_CanceledError;
	axios.CancelToken = cancel_CancelToken;
	axios.isCancel = isCancel;
	axios.VERSION = VERSION;
	axios.toFormData = helpers_toFormData;

	// Expose AxiosError class
	axios.AxiosError = core_AxiosError;

	// alias for CanceledError for backward compatibility
	axios.Cancel = axios.CanceledError;

	// Expose all/spread
	axios.all = function all(promises) {
		return Promise.all(promises);
	};

	axios.spread = spread;

	// Expose isAxiosError
	axios.isAxiosError = isAxiosError;

	// Expose mergeConfig
	axios.mergeConfig = mergeConfig;

	axios.AxiosHeaders = core_AxiosHeaders;

	axios.formToJSON = (thing) => helpers_formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);

	axios.getAdapter = adapters.getAdapter;

	axios.HttpStatusCode = helpers_HttpStatusCode;

	axios.default = axios;

	// this module should only have a default export
	/* harmony default export */ const lib_axios = axios; // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/lib/utils.js

	function lastItemOf(arr) {
		return arr[arr.length - 1];
	}

	// push only the items not included in the array
	function pushUnique(arr, ...items) {
		items.forEach((item) => {
			if (arr.includes(item)) {
				return;
			}
			arr.push(item);
		});
		return arr;
	}

	function stringToArray(str, separator) {
		// convert empty string to an empty array
		return str ? str.split(separator) : [];
	}

	function isInRange(testVal, min, max) {
		const minOK = min === undefined || testVal >= min;
		const maxOK = max === undefined || testVal <= max;
		return minOK && maxOK;
	}

	function limitToRange(val, min, max) {
		if (val < min) {
			return min;
		}
		if (val > max) {
			return max;
		}
		return val;
	}

	function createTagRepeat(tagName, repeat, attributes = {}, index = 0, html = "") {
		const openTagSrc = Object.keys(attributes).reduce((src, attr) => {
			let val = attributes[attr];
			if (typeof val === "function") {
				val = val(index);
			}
			return `${src} ${attr}="${val}"`;
		}, tagName);
		html += `<${openTagSrc}></${tagName}>`;

		const next = index + 1;
		return next < repeat ? createTagRepeat(tagName, repeat, attributes, next, html) : html;
	}

	// Remove the spacing surrounding tags for HTML parser not to create text nodes
	// before/after elements
	function optimizeTemplateHTML(html) {
		return html.replace(/>\s+/g, ">").replace(/\s+</, "<");
	} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/lib/date.js

	function stripTime(timeValue) {
		return new Date(timeValue).setHours(0, 0, 0, 0);
	}

	function today() {
		return new Date().setHours(0, 0, 0, 0);
	}

	// Get the time value of the start of given date or year, month and day
	function dateValue(...args) {
		switch (args.length) {
			case 0:
				return today();
			case 1:
				return stripTime(args[0]);
		}

		// use setFullYear() to keep 2-digit year from being mapped to 1900-1999
		const newDate = new Date(0);
		newDate.setFullYear(...args);
		return newDate.setHours(0, 0, 0, 0);
	}

	function addDays(date, amount) {
		const newDate = new Date(date);
		return newDate.setDate(newDate.getDate() + amount);
	}

	function addWeeks(date, amount) {
		return addDays(date, amount * 7);
	}

	function addMonths(date, amount) {
		// If the day of the date is not in the new month, the last day of the new
		// month will be returned. e.g. Jan 31 + 1 month → Feb 28 (not Mar 03)
		const newDate = new Date(date);
		const monthsToSet = newDate.getMonth() + amount;
		let expectedMonth = monthsToSet % 12;
		if (expectedMonth < 0) {
			expectedMonth += 12;
		}

		const time = newDate.setMonth(monthsToSet);
		return newDate.getMonth() !== expectedMonth ? newDate.setDate(0) : time;
	}

	function addYears(date, amount) {
		// If the date is Feb 29 and the new year is not a leap year, Feb 28 of the
		// new year will be returned.
		const newDate = new Date(date);
		const expectedMonth = newDate.getMonth();
		const time = newDate.setFullYear(newDate.getFullYear() + amount);
		return expectedMonth === 1 && newDate.getMonth() === 2 ? newDate.setDate(0) : time;
	}

	// Calculate the distance bettwen 2 days of the week
	function dayDiff(day, from) {
		return (day - from + 7) % 7;
	}

	// Get the date of the specified day of the week of given base date
	function dayOfTheWeekOf(baseDate, dayOfWeek, weekStart = 0) {
		const baseDay = new Date(baseDate).getDay();
		return addDays(baseDate, dayDiff(dayOfWeek, weekStart) - dayDiff(baseDay, weekStart));
	}

	function calcWeekNum(dayOfTheWeek, sameDayOfFirstWeek) {
		return Math.round((dayOfTheWeek - sameDayOfFirstWeek) / 604800000) + 1;
	}

	// Get the ISO week number of a date
	function getIsoWeek(date) {
		// - Start of ISO week is Monday
		// - Use Thursday for culculation because the first Thursday of ISO week is
		//   always in January
		const thuOfTheWeek = dayOfTheWeekOf(date, 4, 1);
		// - Week 1 in ISO week is the week including Jan 04
		// - Use the Thu of given date's week (instead of given date itself) to
		//   calculate week 1 of the year so that Jan 01 - 03 won't be miscalculated
		//   as week 0 when Jan 04 is Mon - Wed
		const firstThu = dayOfTheWeekOf(new Date(thuOfTheWeek).setMonth(0, 4), 4, 1);
		// return Math.round((thuOfTheWeek - firstThu) / 604800000) + 1;
		return calcWeekNum(thuOfTheWeek, firstThu);
	}

	// Calculate week number in traditional week number system
	// @see https://en.wikipedia.org/wiki/Week#Other_week_numbering_systems
	function calcTraditionalWeekNumber(date, weekStart) {
		// - Week 1 of traditional week is the week including the Jan 01
		// - Use Jan 01 of given date's year to calculate the start of week 1
		const startOfFirstWeek = dayOfTheWeekOf(new Date(date).setMonth(0, 1), weekStart, weekStart);
		const startOfTheWeek = dayOfTheWeekOf(date, weekStart, weekStart);
		const weekNum = calcWeekNum(startOfTheWeek, startOfFirstWeek);
		if (weekNum < 53) {
			return weekNum;
		}
		// If the 53rd week includes Jan 01, it's actually next year's week 1
		const weekOneOfNextYear = dayOfTheWeekOf(new Date(date).setDate(32), weekStart, weekStart);
		return startOfTheWeek === weekOneOfNextYear ? 1 : weekNum;
	}

	// Get the Western traditional week number of a date
	function getWesternTradWeek(date) {
		// Start of Western traditionl week is Sunday
		return calcTraditionalWeekNumber(date, 0);
	}

	// Get the Middle Eastern week number of a date
	function getMidEasternWeek(date) {
		// Start of Middle Eastern week is Saturday
		return calcTraditionalWeekNumber(date, 6);
	}

	// Get the start year of the period of years that includes given date
	// years: length of the year period
	function startOfYearPeriod(date, years) {
		/* @see https://en.wikipedia.org/wiki/Year_zero#ISO_8601 */
		const year = new Date(date).getFullYear();
		return Math.floor(year / years) * years;
	}

	// Convert date to the first/last date of the month/year of the date
	function regularizeDate(date, timeSpan, useLastDate) {
		if (timeSpan !== 1 && timeSpan !== 2) {
			return date;
		}
		const newDate = new Date(date);
		if (timeSpan === 1) {
			useLastDate ? newDate.setMonth(newDate.getMonth() + 1, 0) : newDate.setDate(1);
		} else {
			useLastDate ? newDate.setFullYear(newDate.getFullYear() + 1, 0, 0) : newDate.setMonth(0, 1);
		}
		return newDate.setHours(0, 0, 0, 0);
	} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/lib/date-format.js

	// pattern for format parts
	const reFormatTokens = /dd?|DD?|mm?|MM?|yy?(?:yy)?/;
	// pattern for non date parts
	const reNonDateParts = /[\s!-/:-@[-`{-~年月日]+/;
	// cache for persed formats
	let knownFormats = {};
	// parse funtions for date parts
	const parseFns = {
		y(date, year) {
			return new Date(date).setFullYear(parseInt(year, 10));
		},
		m(date, month, locale) {
			const newDate = new Date(date);
			let monthIndex = parseInt(month, 10) - 1;

			if (isNaN(monthIndex)) {
				if (!month) {
					return NaN;
				}

				const monthName = month.toLowerCase();
				const compareNames = (name) => name.toLowerCase().startsWith(monthName);
				// compare with both short and full names because some locales have periods
				// in the short names (not equal to the first X letters of the full names)
				monthIndex = locale.monthsShort.findIndex(compareNames);
				if (monthIndex < 0) {
					monthIndex = locale.months.findIndex(compareNames);
				}
				if (monthIndex < 0) {
					return NaN;
				}
			}

			newDate.setMonth(monthIndex);
			return newDate.getMonth() !== normalizeMonth(monthIndex) ? newDate.setDate(0) : newDate.getTime();
		},
		d(date, day) {
			return new Date(date).setDate(parseInt(day, 10));
		},
	};
	// format functions for date parts
	const formatFns = {
		d(date) {
			return date.getDate();
		},
		dd(date) {
			return padZero(date.getDate(), 2);
		},
		D(date, locale) {
			return locale.daysShort[date.getDay()];
		},
		DD(date, locale) {
			return locale.days[date.getDay()];
		},
		m(date) {
			return date.getMonth() + 1;
		},
		mm(date) {
			return padZero(date.getMonth() + 1, 2);
		},
		M(date, locale) {
			return locale.monthsShort[date.getMonth()];
		},
		MM(date, locale) {
			return locale.months[date.getMonth()];
		},
		y(date) {
			return date.getFullYear();
		},
		yy(date) {
			return padZero(date.getFullYear(), 2).slice(-2);
		},
		yyyy(date) {
			return padZero(date.getFullYear(), 4);
		},
	};

	// get month index in normal range (0 - 11) from any number
	function normalizeMonth(monthIndex) {
		return monthIndex > -1 ? monthIndex % 12 : normalizeMonth(monthIndex + 12);
	}

	function padZero(num, length) {
		return num.toString().padStart(length, "0");
	}

	function parseFormatString(format) {
		if (typeof format !== "string") {
			throw new Error("Invalid date format.");
		}
		if (format in knownFormats) {
			return knownFormats[format];
		}

		// sprit the format string into parts and seprators
		const separators = format.split(reFormatTokens);
		const parts = format.match(new RegExp(reFormatTokens, "g"));
		if (separators.length === 0 || !parts) {
			throw new Error("Invalid date format.");
		}

		// collect format functions used in the format
		const partFormatters = parts.map((token) => formatFns[token]);

		// collect parse function keys used in the format
		// iterate over parseFns' keys in order to keep the order of the keys.
		const partParserKeys = Object.keys(parseFns).reduce((keys, key) => {
			const token = parts.find((part) => part[0] !== "D" && part[0].toLowerCase() === key);
			if (token) {
				keys.push(key);
			}
			return keys;
		}, []);

		return (knownFormats[format] = {
			parser(dateStr, locale) {
				const dateParts = dateStr.split(reNonDateParts).reduce((dtParts, part, index) => {
					if (part.length > 0 && parts[index]) {
						const token = parts[index][0];
						if (token === "M") {
							dtParts.m = part;
						} else if (token !== "D") {
							dtParts[token] = part;
						}
					}
					return dtParts;
				}, {});

				// iterate over partParserkeys so that the parsing is made in the oder
				// of year, month and day to prevent the day parser from correcting last
				// day of month wrongly
				return partParserKeys.reduce((origDate, key) => {
					const newDate = parseFns[key](origDate, dateParts[key], locale);
					// ingnore the part failed to parse
					return isNaN(newDate) ? origDate : newDate;
				}, today());
			},
			formatter(date, locale) {
				let dateStr = partFormatters.reduce((str, fn, index) => {
					return (str += `${separators[index]}${fn(date, locale)}`);
				}, "");
				// separators' length is always parts' length + 1,
				return (dateStr += lastItemOf(separators));
			},
		});
	}

	function parseDate(dateStr, format, locale) {
		if (dateStr instanceof Date || typeof dateStr === "number") {
			const date = stripTime(dateStr);
			return isNaN(date) ? undefined : date;
		}
		if (!dateStr) {
			return undefined;
		}
		if (dateStr === "today") {
			return today();
		}

		if (format && format.toValue) {
			const date = format.toValue(dateStr, format, locale);
			return isNaN(date) ? undefined : stripTime(date);
		}

		return parseFormatString(format).parser(dateStr, locale);
	}

	function formatDate(date, format, locale) {
		if (isNaN(date) || (!date && date !== 0)) {
			return "";
		}

		const dateObj = typeof date === "number" ? new Date(date) : date;

		if (format.toDisplay) {
			return format.toDisplay(dateObj, format, locale);
		}

		return parseFormatString(format).formatter(dateObj, locale);
	} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/lib/dom.js

	const range = document.createRange();

	function parseHTML(html) {
		return range.createContextualFragment(html);
	}

	function getParent(el) {
		return el.parentElement || (el.parentNode instanceof ShadowRoot ? el.parentNode.host : undefined);
	}

	function isActiveElement(el) {
		return el.getRootNode().activeElement === el;
	}

	// equivalent to jQuery's :visble
	function isVisible(el) {
		return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	}

	function hideElement(el) {
		if (el.style.display === "none") {
			return;
		}
		// back up the existing display setting in data-style-display
		if (el.style.display) {
			el.dataset.styleDisplay = el.style.display;
		}
		el.style.display = "none";
	}

	function showElement(el) {
		if (el.style.display !== "none") {
			return;
		}
		if (el.dataset.styleDisplay) {
			// restore backed-up dispay property
			el.style.display = el.dataset.styleDisplay;
			delete el.dataset.styleDisplay;
		} else {
			el.style.display = "";
		}
	}

	function emptyChildNodes(el) {
		if (el.firstChild) {
			el.removeChild(el.firstChild);
			emptyChildNodes(el);
		}
	}

	function replaceChildNodes(el, newChildNodes) {
		emptyChildNodes(el);
		if (newChildNodes instanceof DocumentFragment) {
			el.appendChild(newChildNodes);
		} else if (typeof newChildNodes === "string") {
			el.appendChild(parseHTML(newChildNodes));
		} else if (typeof newChildNodes.forEach === "function") {
			newChildNodes.forEach((node) => {
				el.appendChild(node);
			});
		}
	} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/lib/event.js

	const listenerRegistry = new WeakMap();
	const { addEventListener, removeEventListener } = EventTarget.prototype;

	// Register event listeners to a key object
	// listeners: array of listener definitions;
	//   - each definition must be a flat array of event target and the arguments
	//     used to call addEventListener() on the target
	function registerListeners(keyObj, listeners) {
		let registered = listenerRegistry.get(keyObj);
		if (!registered) {
			registered = [];
			listenerRegistry.set(keyObj, registered);
		}
		listeners.forEach((listener) => {
			addEventListener.call(...listener);
			registered.push(listener);
		});
	}

	function unregisterListeners(keyObj) {
		let listeners = listenerRegistry.get(keyObj);
		if (!listeners) {
			return;
		}
		listeners.forEach((listener) => {
			removeEventListener.call(...listener);
		});
		listenerRegistry.delete(keyObj);
	}

	// Event.composedPath() polyfill for Edge
	// based on https://gist.github.com/kleinfreund/e9787d73776c0e3750dcfcdc89f100ec
	if (!Event.prototype.composedPath) {
		const getComposedPath = (node, path = []) => {
			path.push(node);

			let parent;
			if (node.parentNode) {
				parent = node.parentNode;
			} else if (node.host) {
				// ShadowRoot
				parent = node.host;
			} else if (node.defaultView) {
				// Document
				parent = node.defaultView;
			}
			return parent ? getComposedPath(parent, path) : path;
		};

		Event.prototype.composedPath = function () {
			return getComposedPath(this.target);
		};
	}

	function findFromPath(path, criteria, currentTarget) {
		const [node, ...rest] = path;
		if (criteria(node)) {
			return node;
		}
		if (node === currentTarget || node.tagName === "HTML" || rest.length === 0) {
			// stop when reaching currentTarget or <html>
			return;
		}
		return findFromPath(rest, criteria, currentTarget);
	}

	// Search for the actual target of a delegated event
	function findElementInEventPath(ev, selector) {
		const criteria =
			typeof selector === "function" ? selector : (el) => el instanceof Element && el.matches(selector);
		return findFromPath(ev.composedPath(), criteria, ev.currentTarget);
	} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/i18n/base-locales.js

	// default locales
	/* harmony default export */ const base_locales = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			months: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December",
			],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear",
			titleFormat: "MM y",
		},
	}; // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/options/defaultOptions.js

	// config options updatable by setOptions() and their default values
	/* harmony default export */ const defaultOptions = {
		autohide: false,
		beforeShowDay: null,
		beforeShowDecade: null,
		beforeShowMonth: null,
		beforeShowYear: null,
		clearButton: false,
		dateDelimiter: ",",
		datesDisabled: [],
		daysOfWeekDisabled: [],
		daysOfWeekHighlighted: [],
		defaultViewDate: undefined, // placeholder, defaults to today() by the program
		disableTouchKeyboard: false,
		enableOnReadonly: true,
		format: "mm/dd/yyyy",
		language: "en",
		maxDate: null,
		maxNumberOfDates: 1,
		maxView: 3,
		minDate: null,
		nextArrow: "»",
		orientation: "auto",
		pickLevel: 0,
		prevArrow: "«",
		showDaysOfWeek: true,
		showOnClick: true,
		showOnFocus: true,
		startView: 0,
		title: "",
		todayButton: false,
		todayButtonMode: 0,
		todayHighlight: false,
		updateOnBlur: true,
		weekNumbers: 0,
		weekStart: 0,
	}; // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/options/processOptions.js

	const { language: defaultLang, format: defaultFormat, weekStart: defaultWeekStart } = defaultOptions;

	// Reducer function to filter out invalid day-of-week from the input
	function sanitizeDOW(dow, day) {
		return dow.length < 6 && day >= 0 && day < 7 ? pushUnique(dow, day) : dow;
	}

	function determineGetWeekMethod(numberingMode, weekStart) {
		const methodId = numberingMode === 4 ? (weekStart === 6 ? 3 : !weekStart + 1) : numberingMode;
		switch (methodId) {
			case 1:
				return getIsoWeek;
			case 2:
				return getWesternTradWeek;
			case 3:
				return getMidEasternWeek;
		}
	}

	function updateWeekStart(newValue, config, weekNumbers) {
		config.weekStart = newValue;
		config.weekEnd = (newValue + 6) % 7;
		if (weekNumbers === 4) {
			config.getWeekNumber = determineGetWeekMethod(4, newValue);
		}
		return newValue;
	}

	// validate input date. if invalid, fallback to the original value
	function validateDate(value, format, locale, origValue) {
		const date = parseDate(value, format, locale);
		return date !== undefined ? date : origValue;
	}

	// Validate viewId. if invalid, fallback to the original value
	function validateViewId(value, origValue, max = 3) {
		const viewId = parseInt(value, 10);
		return viewId >= 0 && viewId <= max ? viewId : origValue;
	}

	function replaceOptions(options, from, to, convert = undefined) {
		if (from in options) {
			if (!(to in options)) {
				options[to] = convert ? convert(options[from]) : options[from];
			}
			delete options[from];
		}
	}

	// Create Datepicker configuration to set
	function processOptions(options, datepicker) {
		const inOpts = Object.assign({}, options);
		const config = {};
		const locales = datepicker.constructor.locales;
		const rangeEnd = !!datepicker.rangeSideIndex;
		let {
			datesDisabled,
			format,
			language,
			locale,
			maxDate,
			maxView,
			minDate,
			pickLevel,
			startView,
			weekNumbers,
			weekStart,
		} = datepicker.config || {};

		// for backword compatibility
		replaceOptions(inOpts, "calendarWeeks", "weekNumbers", (val) => (val ? 1 : 0));
		replaceOptions(inOpts, "clearBtn", "clearButton");
		replaceOptions(inOpts, "todayBtn", "todayButton");
		replaceOptions(inOpts, "todayBtnMode", "todayButtonMode");

		if (inOpts.language) {
			let lang;
			if (inOpts.language !== language) {
				if (locales[inOpts.language]) {
					lang = inOpts.language;
				} else {
					// Check if langauge + region tag can fallback to the one without
					// region (e.g. fr-CA → fr)
					lang = inOpts.language.split("-")[0];
					if (!locales[lang]) {
						lang = false;
					}
				}
			}
			delete inOpts.language;
			if (lang) {
				language = config.language = lang;

				// update locale as well when updating language
				const origLocale = locale || locales[defaultLang];
				// use default language's properties for the fallback
				locale = Object.assign(
					{
						format: defaultFormat,
						weekStart: defaultWeekStart,
					},
					locales[defaultLang]
				);
				if (language !== defaultLang) {
					Object.assign(locale, locales[language]);
				}
				config.locale = locale;
				// if format and/or weekStart are the same as old locale's defaults,
				// update them to new locale's defaults
				if (format === origLocale.format) {
					format = config.format = locale.format;
				}
				if (weekStart === origLocale.weekStart) {
					weekStart = updateWeekStart(locale.weekStart, config, weekNumbers);
				}
			}
		}

		if (inOpts.format) {
			const hasToDisplay = typeof inOpts.format.toDisplay === "function";
			const hasToValue = typeof inOpts.format.toValue === "function";
			const validFormatString = reFormatTokens.test(inOpts.format);
			if ((hasToDisplay && hasToValue) || validFormatString) {
				format = config.format = inOpts.format;
			}
			delete inOpts.format;
		}

		//*** pick level ***//
		let newPickLevel = pickLevel;
		if ("pickLevel" in inOpts) {
			newPickLevel = validateViewId(inOpts.pickLevel, pickLevel, 2);
			delete inOpts.pickLevel;
		}
		if (newPickLevel !== pickLevel) {
			if (newPickLevel > pickLevel) {
				// complement current minDate/madDate so that the existing range will be
				// expanded to fit the new level later
				if (!("minDate" in inOpts)) {
					inOpts.minDate = minDate;
				}
				if (!("maxDate" in inOpts)) {
					inOpts.maxDate = maxDate;
				}
			}
			// complement datesDisabled so that it will be reset later
			if (datesDisabled && !inOpts.datesDisabled) {
				inOpts.datesDisabled = [];
			}
			pickLevel = config.pickLevel = newPickLevel;
		}

		//*** dates ***//
		// while min and maxDate for "no limit" in the options are better to be null
		// (especially when updating), the ones in the config have to be undefined
		// because null is treated as 0 (= unix epoch) when comparing with time value
		let minDt = minDate;
		let maxDt = maxDate;
		if ("minDate" in inOpts) {
			const defaultMinDt = dateValue(0, 0, 1);
			minDt =
				inOpts.minDate === null
					? defaultMinDt // set 0000-01-01 to prevent negative values for year
					: validateDate(inOpts.minDate, format, locale, minDt);
			if (minDt !== defaultMinDt) {
				minDt = regularizeDate(minDt, pickLevel, false);
			}
			delete inOpts.minDate;
		}
		if ("maxDate" in inOpts) {
			maxDt = inOpts.maxDate === null ? undefined : validateDate(inOpts.maxDate, format, locale, maxDt);
			if (maxDt !== undefined) {
				maxDt = regularizeDate(maxDt, pickLevel, true);
			}
			delete inOpts.maxDate;
		}
		if (maxDt < minDt) {
			minDate = config.minDate = maxDt;
			maxDate = config.maxDate = minDt;
		} else {
			if (minDate !== minDt) {
				minDate = config.minDate = minDt;
			}
			if (maxDate !== maxDt) {
				maxDate = config.maxDate = maxDt;
			}
		}

		if (inOpts.datesDisabled) {
			const dtsDisabled = inOpts.datesDisabled;
			if (typeof dtsDisabled === "function") {
				config.datesDisabled = null;
				config.checkDisabled = (timeValue, viewId) => dtsDisabled(new Date(timeValue), viewId, rangeEnd);
			} else {
				const disabled = (config.datesDisabled = dtsDisabled.reduce((dates, dt) => {
					const date = parseDate(dt, format, locale);
					return date !== undefined ? pushUnique(dates, regularizeDate(date, pickLevel, rangeEnd)) : dates;
				}, []));
				config.checkDisabled = (timeValue) => disabled.includes(timeValue);
			}
			delete inOpts.datesDisabled;
		}
		if ("defaultViewDate" in inOpts) {
			const viewDate = parseDate(inOpts.defaultViewDate, format, locale);
			if (viewDate !== undefined) {
				config.defaultViewDate = viewDate;
			}
			delete inOpts.defaultViewDate;
		}

		//*** days of week ***//
		if ("weekStart" in inOpts) {
			const wkStart = Number(inOpts.weekStart) % 7;
			if (!isNaN(wkStart)) {
				weekStart = updateWeekStart(wkStart, config, weekNumbers);
			}
			delete inOpts.weekStart;
		}
		if (inOpts.daysOfWeekDisabled) {
			config.daysOfWeekDisabled = inOpts.daysOfWeekDisabled.reduce(sanitizeDOW, []);
			delete inOpts.daysOfWeekDisabled;
		}
		if (inOpts.daysOfWeekHighlighted) {
			config.daysOfWeekHighlighted = inOpts.daysOfWeekHighlighted.reduce(sanitizeDOW, []);
			delete inOpts.daysOfWeekHighlighted;
		}

		//*** week numbers ***//
		if ("weekNumbers" in inOpts) {
			let method = inOpts.weekNumbers;
			if (method) {
				const getWeekNumber =
					typeof method === "function"
						? (timeValue, startOfWeek) => method(new Date(timeValue), startOfWeek)
						: determineGetWeekMethod((method = parseInt(method, 10)), weekStart);
				if (getWeekNumber) {
					weekNumbers = config.weekNumbers = method;
					config.getWeekNumber = getWeekNumber;
				}
			} else {
				weekNumbers = config.weekNumbers = 0;
				config.getWeekNumber = null;
			}
			delete inOpts.weekNumbers;
		}

		//*** multi date ***//
		if ("maxNumberOfDates" in inOpts) {
			const maxNumberOfDates = parseInt(inOpts.maxNumberOfDates, 10);
			if (maxNumberOfDates >= 0) {
				config.maxNumberOfDates = maxNumberOfDates;
				config.multidate = maxNumberOfDates !== 1;
			}
			delete inOpts.maxNumberOfDates;
		}
		if (inOpts.dateDelimiter) {
			config.dateDelimiter = String(inOpts.dateDelimiter);
			delete inOpts.dateDelimiter;
		}

		//*** view ***//
		let newMaxView = maxView;
		if ("maxView" in inOpts) {
			newMaxView = validateViewId(inOpts.maxView, maxView);
			delete inOpts.maxView;
		}
		// ensure max view >= pick level
		newMaxView = pickLevel > newMaxView ? pickLevel : newMaxView;
		if (newMaxView !== maxView) {
			maxView = config.maxView = newMaxView;
		}

		let newStartView = startView;
		if ("startView" in inOpts) {
			newStartView = validateViewId(inOpts.startView, newStartView);
			delete inOpts.startView;
		}
		// ensure pick level <= start view <= max view
		if (newStartView < pickLevel) {
			newStartView = pickLevel;
		} else if (newStartView > maxView) {
			newStartView = maxView;
		}
		if (newStartView !== startView) {
			config.startView = newStartView;
		}

		//*** template ***//
		if (inOpts.prevArrow) {
			const prevArrow = parseHTML(inOpts.prevArrow);
			if (prevArrow.childNodes.length > 0) {
				config.prevArrow = prevArrow.childNodes;
			}
			delete inOpts.prevArrow;
		}
		if (inOpts.nextArrow) {
			const nextArrow = parseHTML(inOpts.nextArrow);
			if (nextArrow.childNodes.length > 0) {
				config.nextArrow = nextArrow.childNodes;
			}
			delete inOpts.nextArrow;
		}

		//*** misc ***//
		if ("disableTouchKeyboard" in inOpts) {
			config.disableTouchKeyboard = "ontouchstart" in document && !!inOpts.disableTouchKeyboard;
			delete inOpts.disableTouchKeyboard;
		}
		if (inOpts.orientation) {
			const orientation = inOpts.orientation.toLowerCase().split(/\s+/g);
			config.orientation = {
				x: orientation.find((x) => x === "left" || x === "right") || "auto",
				y: orientation.find((y) => y === "top" || y === "bottom") || "auto",
			};
			delete inOpts.orientation;
		}
		if ("todayButtonMode" in inOpts) {
			switch (inOpts.todayButtonMode) {
				case 0:
				case 1:
					config.todayButtonMode = inOpts.todayButtonMode;
			}
			delete inOpts.todayButtonMode;
		}

		//*** copy the rest ***//
		Object.entries(inOpts).forEach(([key, value]) => {
			if (value !== undefined && key in defaultOptions) {
				config[key] = value;
			}
		});

		return config;
	} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/options/shortcutKeys.js

	const defaultShortcutKeys = {
		show: { key: "ArrowDown" },
		hide: null,
		toggle: { key: "Escape" },
		prevButton: { key: "ArrowLeft", ctrlOrMetaKey: true },
		nextButton: { key: "ArrowRight", ctrlOrMetaKey: true },
		viewSwitch: { key: "ArrowUp", ctrlOrMetaKey: true },
		clearButton: { key: "Backspace", ctrlOrMetaKey: true },
		todayButton: { key: ".", ctrlOrMetaKey: true },
		exitEditMode: { key: "ArrowDown", ctrlOrMetaKey: true },
	};

	function createShortcutKeyConfig(options) {
		return Object.keys(defaultShortcutKeys).reduce((keyDefs, shortcut) => {
			const keyDef = options[shortcut] === undefined ? defaultShortcutKeys[shortcut] : options[shortcut];
			const key = keyDef && keyDef.key;
			if (!key || typeof key !== "string") {
				return keyDefs;
			}

			const normalizedDef = {
				key,
				ctrlOrMetaKey: !!(keyDef.ctrlOrMetaKey || keyDef.ctrlKey || keyDef.metaKey),
			};
			if (key.length > 1) {
				normalizedDef.altKey = !!keyDef.altKey;
				normalizedDef.shiftKey = !!keyDef.shiftKey;
			}
			keyDefs[shortcut] = normalizedDef;
			return keyDefs;
		}, {});
	} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/picker/templates/pickerTemplate.js

	const getButtons = (buttonList) =>
		buttonList
			.map((classes) => `<button type="button" class="%buttonClass% ${classes}" tabindex="-1"></button>`)
			.join("");

	/* harmony default export */ const pickerTemplate = optimizeTemplateHTML(`<div class="datepicker">
  <div class="datepicker-picker">
    <div class="datepicker-header">
      <div class="datepicker-title"></div>
      <div class="datepicker-controls">
        ${getButtons(["prev-button prev-btn", "view-switch", "next-button next-btn"])}
      </div>
    </div>
    <div class="datepicker-main"></div>
    <div class="datepicker-footer">
      <div class="datepicker-controls">
        ${getButtons(["today-button today-btn", "clear-button clear-btn"])}
      </div>
    </div>
  </div>
</div>`); // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/picker/templates/daysTemplate.js

	/* harmony default export */ const daysTemplate = optimizeTemplateHTML(`<div class="days">
  <div class="days-of-week">${createTagRepeat("span", 7, { class: "dow" })}</div>
  <div class="datepicker-grid">${createTagRepeat("span", 42)}</div>
</div>`); // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/picker/templates/weekNumbersTemplate.js

	/* harmony default export */ const weekNumbersTemplate =
		optimizeTemplateHTML(`<div class="week-numbers calendar-weeks">
  <div class="days-of-week"><span class="dow"></span></div>
  <div class="weeks">${createTagRepeat("span", 6, { class: "week" })}</div>
</div>`); // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/picker/views/View.js

	// Base class of the view classes
	class View {
		constructor(picker, config) {
			Object.assign(this, config, {
				picker,
				element: parseHTML(`<div class="datepicker-view"></div>`).firstChild,
				selected: [],
				isRangeEnd: !!picker.datepicker.rangeSideIndex,
			});
			this.init(this.picker.datepicker.config);
		}

		init(options) {
			if ("pickLevel" in options) {
				this.isMinView = this.id === options.pickLevel;
			}
			this.setOptions(options);
			this.updateFocus();
			this.updateSelection();
		}

		prepareForRender(switchLabel, prevButtonDisabled, nextButtonDisabled) {
			// refresh disabled years on every render in order to clear the ones added
			// by beforeShow hook at previous render
			this.disabled = [];

			const picker = this.picker;
			picker.setViewSwitchLabel(switchLabel);
			picker.setPrevButtonDisabled(prevButtonDisabled);
			picker.setNextButtonDisabled(nextButtonDisabled);
		}

		setDisabled(date, classList) {
			classList.add("disabled");
			pushUnique(this.disabled, date);
		}

		// Execute beforeShow() callback and apply the result to the element
		// args:
		performBeforeHook(el, timeValue) {
			let result = this.beforeShow(new Date(timeValue));
			switch (typeof result) {
				case "boolean":
					result = { enabled: result };
					break;
				case "string":
					result = { classes: result };
			}

			if (result) {
				const classList = el.classList;
				if (result.enabled === false) {
					this.setDisabled(timeValue, classList);
				}
				if (result.classes) {
					const extraClasses = result.classes.split(/\s+/);
					classList.add(...extraClasses);
					if (extraClasses.includes("disabled")) {
						this.setDisabled(timeValue, classList);
					}
				}
				if (result.content) {
					replaceChildNodes(el, result.content);
				}
			}
		}

		renderCell(el, content, cellVal, date, { selected, range }, outOfScope, extraClasses = []) {
			el.textContent = content;
			if (this.isMinView) {
				el.dataset.date = date;
			}

			const classList = el.classList;
			el.className = `datepicker-cell ${this.cellClass}`;
			if (cellVal < this.first) {
				classList.add("prev");
			} else if (cellVal > this.last) {
				classList.add("next");
			}
			classList.add(...extraClasses);
			if (outOfScope || this.checkDisabled(date, this.id)) {
				this.setDisabled(date, classList);
			}
			if (range) {
				const [rangeStart, rangeEnd] = range;
				if (cellVal > rangeStart && cellVal < rangeEnd) {
					classList.add("range");
				}
				if (cellVal === rangeStart) {
					classList.add("range-start");
				}
				if (cellVal === rangeEnd) {
					classList.add("range-end");
				}
			}
			if (selected.includes(cellVal)) {
				classList.add("selected");
			}
			if (cellVal === this.focused) {
				classList.add("focused");
			}

			if (this.beforeShow) {
				this.performBeforeHook(el, date);
			}
		}

		refreshCell(el, cellVal, selected, [rangeStart, rangeEnd]) {
			const classList = el.classList;
			classList.remove("range", "range-start", "range-end", "selected", "focused");
			if (cellVal > rangeStart && cellVal < rangeEnd) {
				classList.add("range");
			}
			if (cellVal === rangeStart) {
				classList.add("range-start");
			}
			if (cellVal === rangeEnd) {
				classList.add("range-end");
			}
			if (selected.includes(cellVal)) {
				classList.add("selected");
			}
			if (cellVal === this.focused) {
				classList.add("focused");
			}
		}

		changeFocusedCell(cellIndex) {
			this.grid.querySelectorAll(".focused").forEach((el) => {
				el.classList.remove("focused");
			});
			this.grid.children[cellIndex].classList.add("focused");
		}
	} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/picker/views/DaysView.js

	class DaysView extends View {
		constructor(picker) {
			super(picker, {
				id: 0,
				name: "days",
				cellClass: "day",
			});
		}

		init(options, onConstruction = true) {
			if (onConstruction) {
				const inner = parseHTML(daysTemplate).firstChild;
				this.dow = inner.firstChild;
				this.grid = inner.lastChild;
				this.element.appendChild(inner);
			}
			super.init(options);
		}

		setOptions(options) {
			let updateDOW;

			if ("minDate" in options) {
				this.minDate = options.minDate;
			}
			if ("maxDate" in options) {
				this.maxDate = options.maxDate;
			}
			if (options.checkDisabled) {
				this.checkDisabled = options.checkDisabled;
			}
			if (options.daysOfWeekDisabled) {
				this.daysOfWeekDisabled = options.daysOfWeekDisabled;
				updateDOW = true;
			}
			if (options.daysOfWeekHighlighted) {
				this.daysOfWeekHighlighted = options.daysOfWeekHighlighted;
			}
			if ("todayHighlight" in options) {
				this.todayHighlight = options.todayHighlight;
			}
			if ("weekStart" in options) {
				this.weekStart = options.weekStart;
				this.weekEnd = options.weekEnd;
				updateDOW = true;
			}
			if (options.locale) {
				const locale = (this.locale = options.locale);
				this.dayNames = locale.daysMin;
				this.switchLabelFormat = locale.titleFormat;
				updateDOW = true;
			}
			if ("beforeShowDay" in options) {
				this.beforeShow = typeof options.beforeShowDay === "function" ? options.beforeShowDay : undefined;
			}

			if ("weekNumbers" in options) {
				if (options.weekNumbers && !this.weekNumbers) {
					const weeksElem = parseHTML(weekNumbersTemplate).firstChild;
					this.weekNumbers = {
						element: weeksElem,
						dow: weeksElem.firstChild,
						weeks: weeksElem.lastChild,
					};
					this.element.insertBefore(weeksElem, this.element.firstChild);
				} else if (this.weekNumbers && !options.weekNumbers) {
					this.element.removeChild(this.weekNumbers.element);
					this.weekNumbers = null;
				}
			}

			if ("getWeekNumber" in options) {
				this.getWeekNumber = options.getWeekNumber;
			}

			if ("showDaysOfWeek" in options) {
				if (options.showDaysOfWeek) {
					showElement(this.dow);
					if (this.weekNumbers) {
						showElement(this.weekNumbers.dow);
					}
				} else {
					hideElement(this.dow);
					if (this.weekNumbers) {
						hideElement(this.weekNumbers.dow);
					}
				}
			}

			// update days-of-week when locale, daysOfweekDisabled or weekStart is changed
			if (updateDOW) {
				Array.from(this.dow.children).forEach((el, index) => {
					const dow = (this.weekStart + index) % 7;
					el.textContent = this.dayNames[dow];
					el.className = this.daysOfWeekDisabled.includes(dow) ? "dow disabled" : "dow";
				});
			}
		}

		// Apply update on the focused date to view's settings
		updateFocus() {
			const viewDate = new Date(this.picker.viewDate);
			const viewYear = viewDate.getFullYear();
			const viewMonth = viewDate.getMonth();
			const firstOfMonth = dateValue(viewYear, viewMonth, 1);
			const start = dayOfTheWeekOf(firstOfMonth, this.weekStart, this.weekStart);

			this.first = firstOfMonth;
			this.last = dateValue(viewYear, viewMonth + 1, 0);
			this.start = start;
			this.focused = this.picker.viewDate;
		}

		// Apply update on the selected dates to view's settings
		updateSelection() {
			const { dates, rangepicker } = this.picker.datepicker;
			this.selected = dates;
			if (rangepicker) {
				this.range = rangepicker.dates;
			}
		}

		// Update the entire view UI
		render() {
			// update today marker on ever render
			this.today = this.todayHighlight ? today() : undefined;

			this.prepareForRender(
				formatDate(this.focused, this.switchLabelFormat, this.locale),
				this.first <= this.minDate,
				this.last >= this.maxDate
			);

			if (this.weekNumbers) {
				const weekStart = this.weekStart;
				const startOfWeek = dayOfTheWeekOf(this.first, weekStart, weekStart);
				Array.from(this.weekNumbers.weeks.children).forEach((el, index) => {
					const dateOfWeekStart = addWeeks(startOfWeek, index);
					el.textContent = this.getWeekNumber(dateOfWeekStart, weekStart);
					if (index > 3) {
						el.classList[dateOfWeekStart > this.last ? "add" : "remove"]("next");
					}
				});
			}
			Array.from(this.grid.children).forEach((el, index) => {
				const current = addDays(this.start, index);
				const dateObj = new Date(current);
				const day = dateObj.getDay();
				const extraClasses = [];

				if (this.today === current) {
					extraClasses.push("today");
				}
				if (this.daysOfWeekHighlighted.includes(day)) {
					extraClasses.push("highlighted");
				}

				this.renderCell(
					el,
					dateObj.getDate(),
					current,
					current,
					this,
					current < this.minDate || current > this.maxDate || this.daysOfWeekDisabled.includes(day),
					extraClasses
				);
			});
		}

		// Update the view UI by applying the changes of selected and focused items
		refresh() {
			const range = this.range || [];
			Array.from(this.grid.children).forEach((el) => {
				this.refreshCell(el, Number(el.dataset.date), this.selected, range);
			});
		}

		// Update the view UI by applying the change of focused item
		refreshFocus() {
			this.changeFocusedCell(Math.round((this.focused - this.start) / 86400000));
		}
	} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/picker/views/MonthsView.js

	function computeMonthRange(range, thisYear) {
		if (!range || !range[0] || !range[1]) {
			return;
		}

		const [[startY, startM], [endY, endM]] = range;
		if (startY > thisYear || endY < thisYear) {
			return;
		}
		return [startY === thisYear ? startM : -1, endY === thisYear ? endM : 12];
	}

	class MonthsView extends View {
		constructor(picker) {
			super(picker, {
				id: 1,
				name: "months",
				cellClass: "month",
			});
		}

		init(options, onConstruction = true) {
			if (onConstruction) {
				this.grid = this.element;
				this.element.classList.add("months", "datepicker-grid");
				this.grid.appendChild(parseHTML(createTagRepeat("span", 12, { "data-month": (ix) => ix })));
				this.first = 0;
				this.last = 11;
			}
			super.init(options);
		}

		setOptions(options) {
			if (options.locale) {
				this.monthNames = options.locale.monthsShort;
			}
			if ("minDate" in options) {
				if (options.minDate === undefined) {
					this.minYear = this.minMonth = this.minDate = undefined;
				} else {
					const minDateObj = new Date(options.minDate);
					this.minYear = minDateObj.getFullYear();
					this.minMonth = minDateObj.getMonth();
					this.minDate = minDateObj.setDate(1);
				}
			}
			if ("maxDate" in options) {
				if (options.maxDate === undefined) {
					this.maxYear = this.maxMonth = this.maxDate = undefined;
				} else {
					const maxDateObj = new Date(options.maxDate);
					this.maxYear = maxDateObj.getFullYear();
					this.maxMonth = maxDateObj.getMonth();
					this.maxDate = dateValue(this.maxYear, this.maxMonth + 1, 0);
				}
			}
			if (options.checkDisabled) {
				this.checkDisabled =
					this.isMinView || options.datesDisabled === null ? options.checkDisabled : () => false;
			}
			if ("beforeShowMonth" in options) {
				this.beforeShow = typeof options.beforeShowMonth === "function" ? options.beforeShowMonth : undefined;
			}
		}

		// Update view's settings to reflect the viewDate set on the picker
		updateFocus() {
			const viewDate = new Date(this.picker.viewDate);
			this.year = viewDate.getFullYear();
			this.focused = viewDate.getMonth();
		}

		// Update view's settings to reflect the selected dates
		updateSelection() {
			const { dates, rangepicker } = this.picker.datepicker;
			this.selected = dates.reduce((selected, timeValue) => {
				const date = new Date(timeValue);
				const year = date.getFullYear();
				const month = date.getMonth();
				if (selected[year] === undefined) {
					selected[year] = [month];
				} else {
					pushUnique(selected[year], month);
				}
				return selected;
			}, {});
			if (rangepicker && rangepicker.dates) {
				this.range = rangepicker.dates.map((timeValue) => {
					const date = new Date(timeValue);
					return isNaN(date) ? undefined : [date.getFullYear(), date.getMonth()];
				});
			}
		}

		// Update the entire view UI
		render() {
			this.prepareForRender(this.year, this.year <= this.minYear, this.year >= this.maxYear);

			const selected = this.selected[this.year] || [];
			const yrOutOfRange = this.year < this.minYear || this.year > this.maxYear;
			const isMinYear = this.year === this.minYear;
			const isMaxYear = this.year === this.maxYear;
			const range = computeMonthRange(this.range, this.year);

			Array.from(this.grid.children).forEach((el, index) => {
				const date = regularizeDate(new Date(this.year, index, 1), 1, this.isRangeEnd);

				this.renderCell(
					el,
					this.monthNames[index],
					index,
					date,
					{ selected, range },
					yrOutOfRange || (isMinYear && index < this.minMonth) || (isMaxYear && index > this.maxMonth)
				);
			});
		}

		// Update the view UI by applying the changes of selected and focused items
		refresh() {
			const selected = this.selected[this.year] || [];
			const range = computeMonthRange(this.range, this.year) || [];
			Array.from(this.grid.children).forEach((el, index) => {
				this.refreshCell(el, index, selected, range);
			});
		}

		// Update the view UI by applying the change of focused item
		refreshFocus() {
			this.changeFocusedCell(this.focused);
		}
	} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/picker/views/YearsView.js
	function toTitleCase(word) {
		return [...word].reduce((str, ch, ix) => (str += ix ? ch : ch.toUpperCase()), "");
	}

	// Class representing the years and decades view elements
	class YearsView extends View {
		constructor(picker, config) {
			super(picker, config);
		}

		init(options, onConstruction = true) {
			if (onConstruction) {
				this.navStep = this.step * 10;
				this.beforeShowOption = `beforeShow${toTitleCase(this.cellClass)}`;
				this.grid = this.element;
				this.element.classList.add(this.name, "datepicker-grid");
				this.grid.appendChild(parseHTML(createTagRepeat("span", 12)));
			}
			super.init(options);
		}

		setOptions(options) {
			if ("minDate" in options) {
				if (options.minDate === undefined) {
					this.minYear = this.minDate = undefined;
				} else {
					this.minYear = startOfYearPeriod(options.minDate, this.step);
					this.minDate = dateValue(this.minYear, 0, 1);
				}
			}
			if ("maxDate" in options) {
				if (options.maxDate === undefined) {
					this.maxYear = this.maxDate = undefined;
				} else {
					this.maxYear = startOfYearPeriod(options.maxDate, this.step);
					this.maxDate = dateValue(this.maxYear, 11, 31);
				}
			}
			if (options.checkDisabled) {
				this.checkDisabled =
					this.isMinView || options.datesDisabled === null ? options.checkDisabled : () => false;
			}
			if (this.beforeShowOption in options) {
				const beforeShow = options[this.beforeShowOption];
				this.beforeShow = typeof beforeShow === "function" ? beforeShow : undefined;
			}
		}

		// Update view's settings to reflect the viewDate set on the picker
		updateFocus() {
			const viewDate = new Date(this.picker.viewDate);
			const first = startOfYearPeriod(viewDate, this.navStep);
			const last = first + 9 * this.step;

			this.first = first;
			this.last = last;
			this.start = first - this.step;
			this.focused = startOfYearPeriod(viewDate, this.step);
		}

		// Update view's settings to reflect the selected dates
		updateSelection() {
			const { dates, rangepicker } = this.picker.datepicker;
			this.selected = dates.reduce((years, timeValue) => {
				return pushUnique(years, startOfYearPeriod(timeValue, this.step));
			}, []);
			if (rangepicker && rangepicker.dates) {
				this.range = rangepicker.dates.map((timeValue) => {
					if (timeValue !== undefined) {
						return startOfYearPeriod(timeValue, this.step);
					}
				});
			}
		}

		// Update the entire view UI
		render() {
			this.prepareForRender(`${this.first}-${this.last}`, this.first <= this.minYear, this.last >= this.maxYear);

			Array.from(this.grid.children).forEach((el, index) => {
				const current = this.start + index * this.step;
				const date = regularizeDate(new Date(current, 0, 1), 2, this.isRangeEnd);

				el.dataset.year = current;
				this.renderCell(el, current, current, date, this, current < this.minYear || current > this.maxYear);
			});
		}

		// Update the view UI by applying the changes of selected and focused items
		refresh() {
			const range = this.range || [];
			Array.from(this.grid.children).forEach((el) => {
				this.refreshCell(el, Number(el.textContent), this.selected, range);
			});
		}

		// Update the view UI by applying the change of focused item
		refreshFocus() {
			this.changeFocusedCell(Math.round((this.focused - this.start) / this.step));
		}
	} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/events/functions.js

	function triggerDatepickerEvent(datepicker, type) {
		const options = {
			bubbles: true,
			cancelable: true,
			detail: {
				date: datepicker.getDate(),
				viewDate: new Date(datepicker.picker.viewDate),
				viewId: datepicker.picker.currentView.id,
				datepicker,
			},
		};
		datepicker.element.dispatchEvent(new CustomEvent(type, options));
	}

	// direction: -1 (to previous), 1 (to next)
	function goToPrevOrNext(datepicker, direction) {
		const { config, picker } = datepicker;
		const { currentView, viewDate } = picker;
		let newViewDate;
		switch (currentView.id) {
			case 0:
				newViewDate = addMonths(viewDate, direction);
				break;
			case 1:
				newViewDate = addYears(viewDate, direction);
				break;
			default:
				newViewDate = addYears(viewDate, direction * currentView.navStep);
		}
		newViewDate = limitToRange(newViewDate, config.minDate, config.maxDate);
		picker.changeFocus(newViewDate).render();
	}

	function switchView(datepicker) {
		const viewId = datepicker.picker.currentView.id;
		if (viewId === datepicker.config.maxView) {
			return;
		}
		datepicker.picker.changeView(viewId + 1).render();
	}

	function clearSelection(datepicker) {
		datepicker.setDate({ clear: true });
	}

	function goToOrSelectToday(datepicker) {
		const currentDate = today();
		if (datepicker.config.todayButtonMode === 1) {
			datepicker.setDate(currentDate, { forceRefresh: true, viewDate: currentDate });
		} else {
			datepicker.setFocusedDate(currentDate, true);
		}
	}

	function unfocus(datepicker) {
		const onBlur = () => {
			if (datepicker.config.updateOnBlur) {
				datepicker.update({ revert: true });
			} else {
				datepicker.refresh("input");
			}
			datepicker.hide();
		};
		const element = datepicker.element;

		if (isActiveElement(element)) {
			element.addEventListener("blur", onBlur, { once: true });
		} else {
			onBlur();
		}
	} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/events/pickerListeners.js

	function goToSelectedMonthOrYear(datepicker, selection) {
		const picker = datepicker.picker;
		const viewDate = new Date(picker.viewDate);
		const viewId = picker.currentView.id;
		const newDate =
			viewId === 1
				? addMonths(viewDate, selection - viewDate.getMonth())
				: addYears(viewDate, selection - viewDate.getFullYear());

		picker
			.changeFocus(newDate)
			.changeView(viewId - 1)
			.render();
	}

	function onClickViewSwitch(datepicker) {
		switchView(datepicker);
	}

	function onClickPrevButton(datepicker) {
		goToPrevOrNext(datepicker, -1);
	}

	function onClickNextButton(datepicker) {
		goToPrevOrNext(datepicker, 1);
	}

	// For the picker's main block to delegete the events from `datepicker-cell`s
	function onClickView(datepicker, ev) {
		const target = findElementInEventPath(ev, ".datepicker-cell");
		if (!target || target.classList.contains("disabled")) {
			return;
		}

		const { id, isMinView } = datepicker.picker.currentView;
		const data = target.dataset;
		if (isMinView) {
			datepicker.setDate(Number(data.date));
		} else if (id === 1) {
			goToSelectedMonthOrYear(datepicker, Number(data.month));
		} else {
			goToSelectedMonthOrYear(datepicker, Number(data.year));
		}
	}

	function onMousedownPicker(ev) {
		ev.preventDefault();
	} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/picker/Picker.js

	const orientClasses = ["left", "top", "right", "bottom"].reduce((obj, key) => {
		obj[key] = `datepicker-orient-${key}`;
		return obj;
	}, {});
	const toPx = (num) => (num ? `${num}px` : num);

	function processPickerOptions(picker, options) {
		if ("title" in options) {
			if (options.title) {
				picker.controls.title.textContent = options.title;
				showElement(picker.controls.title);
			} else {
				picker.controls.title.textContent = "";
				hideElement(picker.controls.title);
			}
		}
		if (options.prevArrow) {
			const prevButton = picker.controls.prevButton;
			emptyChildNodes(prevButton);
			options.prevArrow.forEach((node) => {
				prevButton.appendChild(node.cloneNode(true));
			});
		}
		if (options.nextArrow) {
			const nextButton = picker.controls.nextButton;
			emptyChildNodes(nextButton);
			options.nextArrow.forEach((node) => {
				nextButton.appendChild(node.cloneNode(true));
			});
		}
		if (options.locale) {
			picker.controls.todayButton.textContent = options.locale.today;
			picker.controls.clearButton.textContent = options.locale.clear;
		}
		if ("todayButton" in options) {
			if (options.todayButton) {
				showElement(picker.controls.todayButton);
			} else {
				hideElement(picker.controls.todayButton);
			}
		}
		if ("minDate" in options || "maxDate" in options) {
			const { minDate, maxDate } = picker.datepicker.config;
			picker.controls.todayButton.disabled = !isInRange(today(), minDate, maxDate);
		}
		if ("clearButton" in options) {
			if (options.clearButton) {
				showElement(picker.controls.clearButton);
			} else {
				hideElement(picker.controls.clearButton);
			}
		}
	}

	// Compute view date to reset, which will be...
	// - the last item of the selected dates or defaultViewDate if no selection
	// - limitted to minDate or maxDate if it exceeds the range
	function computeResetViewDate(datepicker) {
		const { dates, config, rangeSideIndex } = datepicker;
		const viewDate =
			dates.length > 0
				? lastItemOf(dates)
				: regularizeDate(config.defaultViewDate, config.pickLevel, rangeSideIndex);
		return limitToRange(viewDate, config.minDate, config.maxDate);
	}

	// Change current view's view date
	function setViewDate(picker, newDate) {
		if (!("_oldViewDate" in picker) && newDate !== picker.viewDate) {
			picker._oldViewDate = picker.viewDate;
		}
		picker.viewDate = newDate;

		// return whether the new date is in different period on time from the one
		// displayed in the current view
		// when true, the view needs to be re-rendered on the next UI refresh.
		const { id, year, first, last } = picker.currentView;
		const viewYear = new Date(newDate).getFullYear();
		switch (id) {
			case 0:
				return newDate < first || newDate > last;
			case 1:
				return viewYear !== year;
			default:
				return viewYear < first || viewYear > last;
		}
	}

	function getTextDirection(el) {
		return window.getComputedStyle(el).direction;
	}

	// find the closet scrollable ancestor elemnt under the body
	function findScrollParents(el) {
		const parent = getParent(el);
		if (parent === document.body || !parent) {
			return;
		}

		// checking overflow only is enough because computed overflow cannot be
		// visible or a combination of visible and other when either axis is set
		// to other than visible.
		// (Setting one axis to other than 'visible' while the other is 'visible'
		// results in the other axis turning to 'auto')
		return window.getComputedStyle(parent).overflow !== "visible" ? parent : findScrollParents(parent);
	}

	// Class representing the picker UI
	class Picker {
		constructor(datepicker) {
			const { config, inputField } = (this.datepicker = datepicker);

			const template = pickerTemplate.replace(/%buttonClass%/g, config.buttonClass);
			const element = (this.element = parseHTML(template).firstChild);
			const [header, main, footer] = element.firstChild.children;
			const title = header.firstElementChild;
			const [prevButton, viewSwitch, nextButton] = header.lastElementChild.children;
			const [todayButton, clearButton] = footer.firstChild.children;
			const controls = {
				title,
				prevButton,
				viewSwitch,
				nextButton,
				todayButton,
				clearButton,
			};
			this.main = main;
			this.controls = controls;

			const elementClass = inputField ? "dropdown" : "inline";
			element.classList.add(`datepicker-${elementClass}`);

			processPickerOptions(this, config);
			this.viewDate = computeResetViewDate(datepicker);

			// set up event listeners
			registerListeners(datepicker, [
				[element, "mousedown", onMousedownPicker],
				[main, "click", onClickView.bind(null, datepicker)],
				[controls.viewSwitch, "click", onClickViewSwitch.bind(null, datepicker)],
				[controls.prevButton, "click", onClickPrevButton.bind(null, datepicker)],
				[controls.nextButton, "click", onClickNextButton.bind(null, datepicker)],
				[controls.todayButton, "click", goToOrSelectToday.bind(null, datepicker)],
				[controls.clearButton, "click", clearSelection.bind(null, datepicker)],
			]);

			// set up views
			this.views = [
				new DaysView(this),
				new MonthsView(this),
				new YearsView(this, { id: 2, name: "years", cellClass: "year", step: 1 }),
				new YearsView(this, { id: 3, name: "decades", cellClass: "decade", step: 10 }),
			];
			this.currentView = this.views[config.startView];

			this.currentView.render();
			this.main.appendChild(this.currentView.element);
			if (config.container) {
				config.container.appendChild(this.element);
			} else {
				inputField.after(this.element);
			}
		}

		setOptions(options) {
			processPickerOptions(this, options);
			this.views.forEach((view) => {
				view.init(options, false);
			});
			this.currentView.render();
		}

		detach() {
			this.element.remove();
		}

		show() {
			if (this.active) {
				return;
			}

			const { datepicker, element } = this;
			const inputField = datepicker.inputField;
			if (inputField) {
				// ensure picker's direction matches input's
				const inputDirection = getTextDirection(inputField);
				if (inputDirection !== getTextDirection(getParent(element))) {
					element.dir = inputDirection;
				} else if (element.dir) {
					element.removeAttribute("dir");
				}

				// Determine the picker's position first to prevent `orientation: 'auto'`
				// from being miscalculated to 'bottom' after the picker temporarily
				// shown below the input field expands the document height if the field
				// is at the bottom edge of the document
				this.place();
				element.classList.add("active");

				if (datepicker.config.disableTouchKeyboard) {
					inputField.blur();
				}
			} else {
				element.classList.add("active");
			}
			this.active = true;
			triggerDatepickerEvent(datepicker, "show");
		}

		hide() {
			if (!this.active) {
				return;
			}
			this.datepicker.exitEditMode();
			this.element.classList.remove("active");
			this.active = false;
			triggerDatepickerEvent(this.datepicker, "hide");
		}

		place() {
			const { classList, style } = this.element;
			// temporarily display the picker to get its size and offset parent
			style.display = "block";

			const { width: calendarWidth, height: calendarHeight } = this.element.getBoundingClientRect();
			const offsetParent = this.element.offsetParent;
			// turn the picker back to hidden so that the position is determined with
			// the state before it is shown.
			style.display = "";

			const { config, inputField } = this.datepicker;
			const {
				left: inputLeft,
				top: inputTop,
				right: inputRight,
				bottom: inputBottom,
				width: inputWidth,
				height: inputHeight,
			} = inputField.getBoundingClientRect();
			let { x: orientX, y: orientY } = config.orientation;
			let left = inputLeft;
			let top = inputTop;

			// caliculate offsetLeft/Top of inputField
			if (offsetParent === document.body || !offsetParent) {
				left += window.scrollX;
				top += window.scrollY;
			} else {
				const offsetParentRect = offsetParent.getBoundingClientRect();
				left -= offsetParentRect.left - offsetParent.scrollLeft;
				top -= offsetParentRect.top - offsetParent.scrollTop;
			}

			// caliculate the boundaries of the visible area that contains inputField
			const scrollParent = findScrollParents(inputField);
			let scrollAreaLeft = 0;
			let scrollAreaTop = 0;
			let { clientWidth: scrollAreaRight, clientHeight: scrollAreaBottom } = document.documentElement;

			if (scrollParent) {
				const scrollParentRect = scrollParent.getBoundingClientRect();
				if (scrollParentRect.top > 0) {
					scrollAreaTop = scrollParentRect.top;
				}
				if (scrollParentRect.left > 0) {
					scrollAreaLeft = scrollParentRect.left;
				}
				if (scrollParentRect.right < scrollAreaRight) {
					scrollAreaRight = scrollParentRect.right;
				}
				if (scrollParentRect.bottom < scrollAreaBottom) {
					scrollAreaBottom = scrollParentRect.bottom;
				}
			}

			// determine the horizontal orientation and left position
			let adjustment = 0;
			if (orientX === "auto") {
				if (inputLeft < scrollAreaLeft) {
					orientX = "left";
					adjustment = scrollAreaLeft - inputLeft;
				} else if (inputLeft + calendarWidth > scrollAreaRight) {
					orientX = "right";
					if (scrollAreaRight < inputRight) {
						adjustment = scrollAreaRight - inputRight;
					}
				} else if (getTextDirection(inputField) === "rtl") {
					orientX = inputRight - calendarWidth < scrollAreaLeft ? "left" : "right";
				} else {
					orientX = "left";
				}
			}
			if (orientX === "right") {
				left += inputWidth - calendarWidth;
			}
			left += adjustment;

			// determine the vertical orientation and top position
			if (orientY === "auto") {
				if (inputTop - calendarHeight > scrollAreaTop) {
					orientY = inputBottom + calendarHeight > scrollAreaBottom ? "top" : "bottom";
				} else {
					orientY = "bottom";
				}
			}
			if (orientY === "top") {
				top -= calendarHeight;
			} else {
				top += inputHeight;
			}

			classList.remove(...Object.values(orientClasses));
			classList.add(orientClasses[orientX], orientClasses[orientY]);

			style.left = toPx(left);
			style.top = toPx(top);
		}

		setViewSwitchLabel(labelText) {
			this.controls.viewSwitch.textContent = labelText;
		}

		setPrevButtonDisabled(disabled) {
			this.controls.prevButton.disabled = disabled;
		}

		setNextButtonDisabled(disabled) {
			this.controls.nextButton.disabled = disabled;
		}

		changeView(viewId) {
			const currentView = this.currentView;
			if (viewId !== currentView.id) {
				if (!this._oldView) {
					this._oldView = currentView;
				}
				this.currentView = this.views[viewId];
				this._renderMethod = "render";
			}
			return this;
		}

		// Change the focused date (view date)
		changeFocus(newViewDate) {
			this._renderMethod = setViewDate(this, newViewDate) ? "render" : "refreshFocus";
			this.views.forEach((view) => {
				view.updateFocus();
			});
			return this;
		}

		// Apply the change of the selected dates
		update(viewDate = undefined) {
			const newViewDate = viewDate === undefined ? computeResetViewDate(this.datepicker) : viewDate;
			this._renderMethod = setViewDate(this, newViewDate) ? "render" : "refresh";
			this.views.forEach((view) => {
				view.updateFocus();
				view.updateSelection();
			});
			return this;
		}

		// Refresh the picker UI
		render(quickRender = true) {
			const { currentView, datepicker, _oldView: oldView } = this;
			const oldViewDate = new Date(this._oldViewDate);
			const renderMethod = (quickRender && this._renderMethod) || "render";
			delete this._oldView;
			delete this._oldViewDate;
			delete this._renderMethod;

			currentView[renderMethod]();
			if (oldView) {
				this.main.replaceChild(currentView.element, oldView.element);
				triggerDatepickerEvent(datepicker, "changeView");
			}
			if (!isNaN(oldViewDate)) {
				const newViewDate = new Date(this.viewDate);
				if (newViewDate.getFullYear() !== oldViewDate.getFullYear()) {
					triggerDatepickerEvent(datepicker, "changeYear");
				}
				if (newViewDate.getMonth() !== oldViewDate.getMonth()) {
					triggerDatepickerEvent(datepicker, "changeMonth");
				}
			}
		}
	} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/events/elementListeners.js

	// Find the closest date that doesn't meet the condition for unavailable date
	// Returns undefined if no available date is found
	// addFn: function to calculate the next date
	//   - args: time value, amount
	// increase: amount to pass to addFn
	// testFn: function to test the unavailability of the date
	//   - args: time value; return: true if unavailable
	function findNextAvailableOne(date, addFn, increase, testFn, min, max) {
		if (!isInRange(date, min, max)) {
			return;
		}
		if (testFn(date)) {
			const newDate = addFn(date, increase);
			return findNextAvailableOne(newDate, addFn, increase, testFn, min, max);
		}
		return date;
	}

	// direction: -1 (left/up), 1 (right/down)
	// vertical: true for up/down, false for left/right
	function moveByArrowKey(datepicker, direction, vertical) {
		const picker = datepicker.picker;
		const currentView = picker.currentView;
		const step = currentView.step || 1;
		let viewDate = picker.viewDate;
		let addFn;
		switch (currentView.id) {
			case 0:
				viewDate = addDays(viewDate, vertical ? direction * 7 : direction);
				addFn = addDays;
				break;
			case 1:
				viewDate = addMonths(viewDate, vertical ? direction * 4 : direction);
				addFn = addMonths;
				break;
			default:
				viewDate = addYears(viewDate, direction * (vertical ? 4 : 1) * step);
				addFn = addYears;
		}
		viewDate = findNextAvailableOne(
			viewDate,
			addFn,
			direction < 0 ? -step : step,
			(date) => currentView.disabled.includes(date),
			currentView.minDate,
			currentView.maxDate
		);
		if (viewDate !== undefined) {
			picker.changeFocus(viewDate).render();
		}
	}

	function onKeydown(datepicker, ev) {
		const { config, picker, editMode } = datepicker;
		const active = picker.active;
		const { key, altKey, shiftKey } = ev;
		const ctrlOrMetaKey = ev.ctrlKey || ev.metaKey;
		const cancelEvent = () => {
			ev.preventDefault();
			ev.stopPropagation();
		};

		// tab/enter keys should not be taken by shortcut keys
		if (key === "Tab") {
			unfocus(datepicker);
			return;
		}
		if (key === "Enter") {
			if (!active) {
				datepicker.update();
			} else if (editMode) {
				datepicker.exitEditMode({ update: true, autohide: config.autohide });
			} else {
				const currentView = picker.currentView;
				if (currentView.isMinView) {
					datepicker.setDate(picker.viewDate);
				} else {
					picker.changeView(currentView.id - 1).render();
					cancelEvent();
				}
			}
			return;
		}

		const shortcutKeys = config.shortcutKeys;
		const keyInfo = { key, ctrlOrMetaKey, altKey, shiftKey };
		const shortcut = Object.keys(shortcutKeys).find((item) => {
			const keyDef = shortcutKeys[item];
			return !Object.keys(keyDef).find((prop) => keyDef[prop] !== keyInfo[prop]);
		});
		if (shortcut) {
			let action;
			if (shortcut === "toggle") {
				action = shortcut;
			} else if (editMode) {
				if (shortcut === "exitEditMode") {
					action = shortcut;
				}
			} else if (active) {
				if (shortcut === "hide") {
					action = shortcut;
				} else if (shortcut === "prevButton") {
					action = [goToPrevOrNext, [datepicker, -1]];
				} else if (shortcut === "nextButton") {
					action = [goToPrevOrNext, [datepicker, 1]];
				} else if (shortcut === "viewSwitch") {
					action = [switchView, [datepicker]];
				} else if (config.clearButton && shortcut === "clearButton") {
					action = [clearSelection, [datepicker]];
				} else if (config.todayButton && shortcut === "todayButton") {
					action = [goToOrSelectToday, [datepicker]];
				}
			} else if (shortcut === "show") {
				action = shortcut;
			}
			if (action) {
				if (Array.isArray(action)) {
					action[0].apply(null, action[1]);
				} else {
					datepicker[action]();
				}
				cancelEvent();
				return;
			}
		}

		// perform as a regular <input> when picker in hidden or in edit mode
		if (!active || editMode) {
			return;
		}

		const handleArrowKeyPress = (direction, vertical) => {
			if (shiftKey || ctrlOrMetaKey || altKey) {
				datepicker.enterEditMode();
			} else {
				moveByArrowKey(datepicker, direction, vertical);
				ev.preventDefault();
			}
		};

		if (key === "ArrowLeft") {
			handleArrowKeyPress(-1, false);
		} else if (key === "ArrowRight") {
			handleArrowKeyPress(1, false);
		} else if (key === "ArrowUp") {
			handleArrowKeyPress(-1, true);
		} else if (key === "ArrowDown") {
			handleArrowKeyPress(1, true);
		} else if (
			key === "Backspace" ||
			key === "Delete" ||
			// When autofill is performed, Chromium-based browsers trigger fake
			// keydown/keyup events that don't have the `key` property (on Edge,
			// keyup only) in addition to the input event. Therefore, we need to
			// check the existence of `key`'s value before checking the length.
			// (issue #144)
			(key && key.length === 1 && !ctrlOrMetaKey)
		) {
			datepicker.enterEditMode();
		}
	}

	function onFocus(datepicker) {
		if (datepicker.config.showOnFocus && !datepicker._showing) {
			datepicker.show();
		}
	}

	// for the prevention for entering edit mode while getting focus on click
	function onMousedown(datepicker, ev) {
		const el = ev.target;
		if (datepicker.picker.active || datepicker.config.showOnClick) {
			el._active = isActiveElement(el);
			el._clicking = setTimeout(() => {
				delete el._active;
				delete el._clicking;
			}, 2000);
		}
	}

	function onClickInput(datepicker, ev) {
		const el = ev.target;
		if (!el._clicking) {
			return;
		}
		clearTimeout(el._clicking);
		delete el._clicking;

		if (el._active) {
			datepicker.enterEditMode();
		}
		delete el._active;

		if (datepicker.config.showOnClick) {
			datepicker.show();
		}
	}

	function onPaste(datepicker, ev) {
		if (ev.clipboardData.types.includes("text/plain")) {
			datepicker.enterEditMode();
		}
	} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/events/otherListeners.js

	// for the `document` to delegate the events from outside the picker/input field
	function onClickOutside(datepicker, ev) {
		const { element, picker } = datepicker;
		// check both picker's and input's activeness to make updateOnBlur work in
		// the cases where...
		// - picker is hidden by ESC key press → input stays focused
		// - input is unfocused by closing mobile keyboard → piker is kept shown
		if (!picker.active && !isActiveElement(element)) {
			return;
		}
		const pickerElem = picker.element;
		if (findElementInEventPath(ev, (el) => el === element || el === pickerElem)) {
			return;
		}
		unfocus(datepicker);
	} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/Datepicker.js

	function stringifyDates(dates, config) {
		return dates.map((dt) => formatDate(dt, config.format, config.locale)).join(config.dateDelimiter);
	}

	// parse input dates and create an array of time values for selection
	// returns undefined if there are no valid dates in inputDates
	// when origDates (current selection) is passed, the function works to mix
	// the input dates into the current selection
	function processInputDates(datepicker, inputDates, clear = false) {
		if (inputDates.length === 0) {
			// empty input is considered valid unless origiDates is passed
			return clear ? [] : undefined;
		}

		const { config, dates: origDates, rangeSideIndex } = datepicker;
		const { pickLevel, maxNumberOfDates } = config;
		let newDates = inputDates.reduce((dates, dt) => {
			let date = parseDate(dt, config.format, config.locale);
			if (date === undefined) {
				return dates;
			}
			// adjust to 1st of the month/Jan 1st of the year
			// or to the last day of the monh/Dec 31st of the year if the datepicker
			// is the range-end picker of a rangepicker
			date = regularizeDate(date, pickLevel, rangeSideIndex);
			if (
				isInRange(date, config.minDate, config.maxDate) &&
				!dates.includes(date) &&
				!config.checkDisabled(date, pickLevel) &&
				(pickLevel > 0 || !config.daysOfWeekDisabled.includes(new Date(date).getDay()))
			) {
				dates.push(date);
			}
			return dates;
		}, []);
		if (newDates.length === 0) {
			return;
		}
		if (config.multidate && !clear) {
			// get the synmetric difference between origDates and newDates
			newDates = newDates.reduce(
				(dates, date) => {
					if (!origDates.includes(date)) {
						dates.push(date);
					}
					return dates;
				},
				origDates.filter((date) => !newDates.includes(date))
			);
		}
		// do length check always because user can input multiple dates regardless of the mode
		return maxNumberOfDates && newDates.length > maxNumberOfDates
			? newDates.slice(maxNumberOfDates * -1)
			: newDates;
	}

	// refresh the UI elements
	// modes: 1: input only, 2, picker only, 3 both
	function refreshUI(datepicker, mode = 3, quickRender = true, viewDate = undefined) {
		const { config, picker, inputField } = datepicker;
		if (mode & 2) {
			const newView = picker.active ? config.pickLevel : config.startView;
			picker.update(viewDate).changeView(newView).render(quickRender);
		}
		if (mode & 1 && inputField) {
			inputField.value = stringifyDates(datepicker.dates, config);
		}
	}

	function setDate(datepicker, inputDates, options) {
		const config = datepicker.config;
		let { clear, render, autohide, revert, forceRefresh, viewDate } = options;
		if (render === undefined) {
			render = true;
		}
		if (!render) {
			autohide = forceRefresh = false;
		} else if (autohide === undefined) {
			autohide = config.autohide;
		}
		viewDate = parseDate(viewDate, config.format, config.locale);

		const newDates = processInputDates(datepicker, inputDates, clear);
		if (!newDates && !revert) {
			return;
		}
		if (newDates && newDates.toString() !== datepicker.dates.toString()) {
			datepicker.dates = newDates;
			refreshUI(datepicker, render ? 3 : 1, true, viewDate);
			triggerDatepickerEvent(datepicker, "changeDate");
		} else {
			refreshUI(datepicker, forceRefresh ? 3 : 1, true, viewDate);
		}

		if (autohide) {
			datepicker.hide();
		}
	}

	function getOutputConverter(datepicker, format) {
		return format ? (date) => formatDate(date, format, datepicker.config.locale) : (date) => new Date(date);
	}

	/**
	 * Class representing a date picker
	 */
	class Datepicker {
		/**
		 * Create a date picker
		 * @param  {Element} element - element to bind a date picker
		 * @param  {Object} [options] - config options
		 * @param  {DateRangePicker} [rangepicker] - DateRangePicker instance the
		 * date picker belongs to. Use this only when creating date picker as a part
		 * of date range picker
		 */
		constructor(element, options = {}, rangepicker = undefined) {
			element.datepicker = this;
			this.element = element;
			this.dates = [];

			// initialize config
			const config = (this.config = Object.assign(
				{
					buttonClass: (options.buttonClass && String(options.buttonClass)) || "button",
					container: null,
					defaultViewDate: today(),
					maxDate: undefined,
					minDate: undefined,
				},
				processOptions(defaultOptions, this)
			));

			// configure by type
			let inputField;
			if (element.tagName === "INPUT") {
				inputField = this.inputField = element;
				inputField.classList.add("datepicker-input");
				if (options.container) {
					// omit string type check because it doesn't guarantee to avoid errors
					// (invalid selector string causes abend with sytax error)
					config.container =
						options.container instanceof HTMLElement
							? options.container
							: document.querySelector(options.container);
				}
			} else {
				config.container = element;
			}
			if (rangepicker) {
				// check validiry
				const index = rangepicker.inputs.indexOf(inputField);
				const datepickers = rangepicker.datepickers;
				if (index < 0 || index > 1 || !Array.isArray(datepickers)) {
					throw Error("Invalid rangepicker object.");
				}
				// attach itaelf to the rangepicker here so that processInputDates() can
				// determine if this is the range-end picker of the rangepicker while
				// setting inital values when pickLevel > 0
				datepickers[index] = this;
				this.rangepicker = rangepicker;
				this.rangeSideIndex = index;
			}

			// set up config
			this._options = options;
			Object.assign(config, processOptions(options, this));
			config.shortcutKeys = createShortcutKeyConfig(options.shortcutKeys || {});

			// process initial value
			const initialDates = stringToArray(element.value || element.dataset.date, config.dateDelimiter);
			delete element.dataset.date;
			const inputDateValues = processInputDates(this, initialDates);
			if (inputDateValues && inputDateValues.length > 0) {
				this.dates = inputDateValues;
			}
			if (inputField) {
				inputField.value = stringifyDates(this.dates, config);
			}

			// set up picekr element
			const picker = (this.picker = new Picker(this));

			const keydownListener = [element, "keydown", onKeydown.bind(null, this)];
			if (inputField) {
				registerListeners(this, [
					keydownListener,
					[inputField, "focus", onFocus.bind(null, this)],
					[inputField, "mousedown", onMousedown.bind(null, this)],
					[inputField, "click", onClickInput.bind(null, this)],
					[inputField, "paste", onPaste.bind(null, this)],
					// To detect a click on outside, just listening to mousedown is enough,
					// no need to listen to touchstart.
					// Actually, listening to touchstart can be a problem because, while
					// mousedown is fired only on tapping but not on swiping/pinching,
					// touchstart is fired on swiping/pinching as well.
					// (issue #95)
					[document, "mousedown", onClickOutside.bind(null, this)],
					[window, "resize", picker.place.bind(picker)],
				]);
			} else {
				registerListeners(this, [keydownListener]);
				this.show();
			}
		}

		/**
		 * Format Date object or time value in given format and language
		 * @param  {Date|Number} date - date or time value to format
		 * @param  {String|Object} format - format string or object that contains
		 * toDisplay() custom formatter, whose signature is
		 * - args:
		 *   - date: {Date} - Date instance of the date passed to the method
		 *   - format: {Object} - the format object passed to the method
		 *   - locale: {Object} - locale for the language specified by `lang`
		 * - return:
		 *     {String} formatted date
		 * @param  {String} [lang=en] - language code for the locale to use
		 * @return {String} formatted date
		 */
		static formatDate(date, format, lang) {
			return formatDate(date, format, (lang && base_locales[lang]) || base_locales.en);
		}

		/**
		 * Parse date string
		 * @param  {String|Date|Number} dateStr - date string, Date object or time
		 * value to parse
		 * @param  {String|Object} format - format string or object that contains
		 * toValue() custom parser, whose signature is
		 * - args:
		 *   - dateStr: {String|Date|Number} - the dateStr passed to the method
		 *   - format: {Object} - the format object passed to the method
		 *   - locale: {Object} - locale for the language specified by `lang`
		 * - return:
		 *     {Date|Number} parsed date or its time value
		 * @param  {String} [lang=en] - language code for the locale to use
		 * @return {Number} time value of parsed date
		 */
		static parseDate(dateStr, format, lang) {
			return parseDate(dateStr, format, (lang && base_locales[lang]) || base_locales.en);
		}

		/**
		 * @type {Object} - Installed locales in `[languageCode]: localeObject` format
		 * en`:_English (US)_ is pre-installed.
		 */
		static get locales() {
			return base_locales;
		}

		/**
		 * @type {Boolean} - Whether the picker element is shown. `true` whne shown
		 */
		get active() {
			return !!(this.picker && this.picker.active);
		}

		/**
		 * @type {HTMLDivElement} - DOM object of picker element
		 */
		get pickerElement() {
			return this.picker ? this.picker.element : undefined;
		}

		/**
		 * Set new values to the config options
		 * @param {Object} options - config options to update
		 */
		setOptions(options) {
			const newOptions = processOptions(options, this);
			Object.assign(this._options, options);
			Object.assign(this.config, newOptions);
			this.picker.setOptions(newOptions);

			refreshUI(this, 3);
		}

		/**
		 * Show the picker element
		 */
		show() {
			if (this.inputField) {
				const { config, inputField } = this;
				if (inputField.disabled || (inputField.readOnly && !config.enableOnReadonly)) {
					return;
				}
				if (!isActiveElement(inputField) && !config.disableTouchKeyboard) {
					this._showing = true;
					inputField.focus();
					delete this._showing;
				}
			}
			this.picker.show();
		}

		/**
		 * Hide the picker element
		 * Not available on inline picker
		 */
		hide() {
			if (!this.inputField) {
				return;
			}
			this.picker.hide();
			this.picker.update().changeView(this.config.startView).render();
		}

		/**
		 * Toggle the display of the picker element
		 * Not available on inline picker
		 *
		 * Unlike hide(), the picker does not return to the start view when hiding.
		 */
		toggle() {
			if (!this.picker.active) {
				this.show();
			} else if (this.inputField) {
				this.picker.hide();
			}
		}

		/**
		 * Destroy the Datepicker instance
		 * @return {Detepicker} - the instance destroyed
		 */
		destroy() {
			this.hide();
			unregisterListeners(this);
			this.picker.detach();
			const element = this.element;
			element.classList.remove("datepicker-input");
			delete element.datepicker;
			return this;
		}

		/**
		 * Get the selected date(s)
		 *
		 * The method returns a Date object of selected date by default, and returns
		 * an array of selected dates in multidate mode. If format string is passed,
		 * it returns date string(s) formatted in given format.
		 *
		 * @param  {String} [format] - format string to stringify the date(s)
		 * @return {Date|String|Date[]|String[]} - selected date(s), or if none is
		 * selected, empty array in multidate mode and undefined in sigledate mode
		 */
		getDate(format = undefined) {
			const callback = getOutputConverter(this, format);

			if (this.config.multidate) {
				return this.dates.map(callback);
			}
			if (this.dates.length > 0) {
				return callback(this.dates[0]);
			}
		}

		/**
		 * Set selected date(s)
		 *
		 * In multidate mode, you can pass multiple dates as a series of arguments
		 * or an array. (Since each date is parsed individually, the type of the
		 * dates doesn't have to be the same.)
		 * The given dates are used to toggle the select status of each date. The
		 * number of selected dates is kept from exceeding the length set to
		 * maxNumberOfDates.
		 *
		 * With clear: true option, the method can be used to clear the selection
		 * and to replace the selection instead of toggling in multidate mode.
		 * If the option is passed with no date arguments or an empty dates array,
		 * it works as "clear" (clear the selection then set nothing), and if the
		 * option is passed with new dates to select, it works as "replace" (clear
		 * the selection then set the given dates)
		 *
		 * When render: false option is used, the method omits re-rendering the
		 * picker element. In this case, you need to call refresh() method later in
		 * order for the picker element to reflect the changes. The input field is
		 * refreshed always regardless of this option.
		 *
		 * When invalid (unparsable, repeated, disabled or out-of-range) dates are
		 * passed, the method ignores them and applies only valid ones. In the case
		 * that all the given dates are invalid, which is distinguished from passing
		 * no dates, the method considers it as an error and leaves the selection
		 * untouched. (The input field also remains untouched unless revert: true
		 * option is used.)
		 * Replacing the selection with the same date(s) also causes a similar
		 * situation. In both cases, the method does not refresh the picker element
		 * unless forceRefresh: true option is used.
		 *
		 * If viewDate option is used, the method changes the focused date to the
		 * specified date instead of the last item of the selection.
		 *
		 * @param {...(Date|Number|String)|Array} [dates] - Date strings, Date
		 * objects, time values or mix of those for new selection
		 * @param {Object} [options] - function options
		 * - clear: {boolean} - Whether to clear the existing selection
		 *     defualt: false
		 * - render: {boolean} - Whether to re-render the picker element
		 *     default: true
		 * - autohide: {boolean} - Whether to hide the picker element after re-render
		 *     Ignored when used with render: false
		 *     default: config.autohide
		 * - revert: {boolean} - Whether to refresh the input field when all the
		 *     passed dates are invalid
		 *     default: false
		 * - forceRefresh: {boolean} - Whether to refresh the picker element when
		 *     passed dates don't change the existing selection
		 *     default: false
		 * - viewDate: {Date|Number|String} - Date to be focused after setiing date(s)
		 *     default: The last item of the resulting selection, or defaultViewDate
		 *     config option if none is selected
		 */
		setDate(...args) {
			const dates = [...args];
			const opts = {};
			const lastArg = lastItemOf(args);
			if (lastArg && typeof lastArg === "object" && !Array.isArray(lastArg) && !(lastArg instanceof Date)) {
				Object.assign(opts, dates.pop());
			}

			const inputDates = Array.isArray(dates[0]) ? dates[0] : dates;
			setDate(this, inputDates, opts);
		}

		/**
		 * Update the selected date(s) with input field's value
		 * Not available on inline picker
		 *
		 * The input field will be refreshed with properly formatted date string.
		 *
		 * In the case that all the entered dates are invalid (unparsable, repeated,
		 * disabled or out-of-range), which is distinguished from empty input field,
		 * the method leaves the input field untouched as well as the selection by
		 * default. If revert: true option is used in this case, the input field is
		 * refreshed with the existing selection.
		 * The method also doesn't refresh the picker element in this case and when
		 * the entered dates are the same as the existing selection. If
		 * forceRefresh: true option is used, the picker element is refreshed in
		 * these cases too.
		 *
		 * @param  {Object} [options] - function options
		 * - autohide: {boolean} - whether to hide the picker element after refresh
		 *     default: false
		 * - revert: {boolean} - Whether to refresh the input field when all the
		 *     passed dates are invalid
		 *     default: false
		 * - forceRefresh: {boolean} - Whether to refresh the picer element when
		 *     input field's value doesn't change the existing selection
		 *     default: false
		 */
		update(options = undefined) {
			if (!this.inputField) {
				return;
			}

			const opts = Object.assign(options || {}, { clear: true, render: true, viewDate: undefined });
			const inputDates = stringToArray(this.inputField.value, this.config.dateDelimiter);
			setDate(this, inputDates, opts);
		}

		/**
		 * Get the focused date
		 *
		 * The method returns a Date object of focused date by default. If format
		 * string is passed, it returns date string formatted in given format.
		 *
		 * @param  {String} [format] - format string to stringify the date
		 * @return {Date|String} - focused date (viewDate)
		 */
		getFocusedDate(format = undefined) {
			return getOutputConverter(this, format)(this.picker.viewDate);
		}

		/**
		 * Set focused date
		 *
		 * By default, the method updates the focus on the view shown at the time,
		 * or the one set to the startView config option if the picker is hidden.
		 * When resetView: true is passed, the view displayed is changed to the
		 * pickLevel config option's if the picker is shown.
		 *
		 * @param {Date|Number|String} viewDate - date string, Date object, time
		 * values of the date to focus
		 * @param {Boolean} [resetView] - whether to change the view to pickLevel
		 * config option's when the picker is shown. Ignored when the picker is
		 * hidden
		 */
		setFocusedDate(viewDate, resetView = false) {
			const { config, picker, active, rangeSideIndex } = this;
			const pickLevel = config.pickLevel;
			const newViewDate = parseDate(viewDate, config.format, config.locale);
			if (newViewDate === undefined) {
				return;
			}

			picker.changeFocus(regularizeDate(newViewDate, pickLevel, rangeSideIndex));
			if (active && resetView) {
				picker.changeView(pickLevel);
			}
			picker.render();
		}

		/**
		 * Refresh the picker element and the associated input field
		 * @param {String} [target] - target item when refreshing one item only
		 * 'picker' or 'input'
		 * @param {Boolean} [forceRender] - whether to re-render the picker element
		 * regardless of its state instead of optimized refresh
		 */
		refresh(target = undefined, forceRender = false) {
			if (target && typeof target !== "string") {
				forceRender = target;
				target = undefined;
			}

			let mode;
			if (target === "picker") {
				mode = 2;
			} else if (target === "input") {
				mode = 1;
			} else {
				mode = 3;
			}
			refreshUI(this, mode, !forceRender);
		}

		/**
		 * Enter edit mode
		 * Not available on inline picker or when the picker element is hidden
		 */
		enterEditMode() {
			const inputField = this.inputField;
			if (!inputField || inputField.readOnly || !this.picker.active || this.editMode) {
				return;
			}
			this.editMode = true;
			inputField.classList.add("in-edit");
		}

		/**
		 * Exit from edit mode
		 * Not available on inline picker
		 * @param  {Object} [options] - function options
		 * - update: {boolean} - whether to call update() after exiting
		 *     If false, input field is revert to the existing selection
		 *     default: false
		 */
		exitEditMode(options = undefined) {
			if (!this.inputField || !this.editMode) {
				return;
			}
			const opts = Object.assign({ update: false }, options);
			delete this.editMode;
			this.inputField.classList.remove("in-edit");
			if (opts.update) {
				this.update(opts);
			}
		}
	} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/DateRangePicker.js

	// filter out the config options inapproprite to pass to Datepicker
	function filterOptions(options) {
		const newOpts = Object.assign({}, options);

		delete newOpts.inputs;
		delete newOpts.allowOneSidedRange;
		delete newOpts.maxNumberOfDates; // to ensure each datepicker handles a single date

		return newOpts;
	}

	function setupDatepicker(rangepicker, changeDateListener, el, options) {
		registerListeners(rangepicker, [[el, "changeDate", changeDateListener]]);
		new Datepicker(el, options, rangepicker);
	}

	function onChangeDate(rangepicker, ev) {
		// to prevent both datepickers trigger the other side's update each other
		if (rangepicker._updating) {
			return;
		}
		rangepicker._updating = true;

		const target = ev.target;
		if (target.datepicker === undefined) {
			return;
		}

		const datepickers = rangepicker.datepickers;
		const [datepicker0, datepicker1] = datepickers;
		const setDateOptions = { render: false };
		const changedSide = rangepicker.inputs.indexOf(target);
		const otherSide = changedSide === 0 ? 1 : 0;
		const changedDate = datepickers[changedSide].dates[0];
		const otherDate = datepickers[otherSide].dates[0];

		if (changedDate !== undefined && otherDate !== undefined) {
			// if the start of the range > the end, swap them
			if (changedSide === 0 && changedDate > otherDate) {
				datepicker0.setDate(otherDate, setDateOptions);
				datepicker1.setDate(changedDate, setDateOptions);
			} else if (changedSide === 1 && changedDate < otherDate) {
				datepicker0.setDate(changedDate, setDateOptions);
				datepicker1.setDate(otherDate, setDateOptions);
			}
		} else if (!rangepicker.allowOneSidedRange) {
			// to prevent the range from becoming one-sided, copy changed side's
			// selection (no matter if it's empty) to the other side
			if (changedDate !== undefined || otherDate !== undefined) {
				setDateOptions.clear = true;
				datepickers[otherSide].setDate(datepickers[changedSide].dates, setDateOptions);
			}
		}
		datepickers.forEach((datepicker) => {
			datepicker.picker.update().render();
		});
		delete rangepicker._updating;
	}

	/**
	 * Class representing a date range picker
	 */
	class DateRangePicker {
		/**
		 * Create a date range picker
		 * @param  {Element} element - element to bind a date range picker
		 * @param  {Object} [options] - config options
		 */
		constructor(element, options = {}) {
			let inputs = Array.isArray(options.inputs) ? options.inputs : Array.from(element.querySelectorAll("input"));
			if (inputs.length < 2) {
				return;
			}

			element.rangepicker = this;
			this.element = element;
			this.inputs = inputs = inputs.slice(0, 2);
			Object.freeze(inputs);
			this.allowOneSidedRange = !!options.allowOneSidedRange;

			const changeDateListener = onChangeDate.bind(null, this);
			const cleanOptions = filterOptions(options);
			// in order for initial date setup to work right when pcicLvel > 0,
			// let Datepicker constructor add the instance to the rangepicker
			const datepickers = (this.datepickers = []);
			inputs.forEach((input) => {
				setupDatepicker(this, changeDateListener, input, cleanOptions);
			});
			Object.freeze(datepickers);
			Object.defineProperty(this, "dates", {
				get() {
					return datepickers.map((datepicker) => datepicker.dates[0]);
				},
			});
			// normalize the range if inital dates are given
			if (datepickers[0].dates.length > 0) {
				onChangeDate(this, { target: inputs[0] });
			} else if (datepickers[1].dates.length > 0) {
				onChangeDate(this, { target: inputs[1] });
			}
		}

		/**
		 * Set new values to the config options
		 * @param {Object} options - config options to update
		 */
		setOptions(options) {
			this.allowOneSidedRange = !!options.allowOneSidedRange;

			const cleanOptions = filterOptions(options);
			this.datepickers.forEach((datepicker) => {
				datepicker.setOptions(cleanOptions);
			});
		}

		/**
		 * Destroy the DateRangePicker instance
		 * @return {DateRangePicker} - the instance destroyed
		 */
		destroy() {
			this.datepickers.forEach((datepicker) => {
				datepicker.destroy();
			});
			unregisterListeners(this);
			delete this.element.rangepicker;
		}

		/**
		 * Get the start and end dates of the date range
		 *
		 * The method returns Date objects by default. If format string is passed,
		 * it returns date strings formatted in given format.
		 * The result array always contains 2 items (start date/end date) and
		 * undefined is used for unselected side. (e.g. If none is selected,
		 * the result will be [undefined, undefined]. If only the end date is set
		 * when allowOneSidedRange config option is true, [undefined, endDate] will
		 * be returned.)
		 *
		 * @param  {String} [format] - Format string to stringify the dates
		 * @return {Array} - Start and end dates
		 */
		getDates(format = undefined) {
			const callback = format
				? (date) => formatDate(date, format, this.datepickers[0].config.locale)
				: (date) => new Date(date);

			return this.dates.map((date) => (date === undefined ? date : callback(date)));
		}

		/**
		 * Set the start and end dates of the date range
		 *
		 * The method calls datepicker.setDate() internally using each of the
		 * arguments in start→end order.
		 *
		 * When a clear: true option object is passed instead of a date, the method
		 * clears the date.
		 *
		 * If an invalid date, the same date as the current one or an option object
		 * without clear: true is passed, the method considers that argument as an
		 * "ineffective" argument because calling datepicker.setDate() with those
		 * values makes no changes to the date selection.
		 *
		 * When the allowOneSidedRange config option is false, passing {clear: true}
		 * to clear the range works only when it is done to the last effective
		 * argument (in other words, passed to rangeEnd or to rangeStart along with
		 * ineffective rangeEnd). This is because when the date range is changed,
		 * it gets normalized based on the last change at the end of the changing
		 * process.
		 *
		 * @param {Date|Number|String|Object} rangeStart - Start date of the range
		 * or {clear: true} to clear the date
		 * @param {Date|Number|String|Object} rangeEnd - End date of the range
		 * or {clear: true} to clear the date
		 */
		setDates(rangeStart, rangeEnd) {
			const {
				datepickers: [datepicker0, datepicker1],
				inputs: [input0, input1],
				dates: [origDate0, origDate1],
			} = this;

			// If range normalization runs on every change, we can't set a new range
			// that starts after the end of the current range correctly because the
			// normalization process swaps start↔︎end right after setting the new start
			// date. To prevent this, the normalization process needs to run once after
			// both of the new dates are set.
			this._updating = true;
			datepicker0.setDate(rangeStart);
			datepicker1.setDate(rangeEnd);
			delete this._updating;

			if (datepicker1.dates[0] !== origDate1) {
				onChangeDate(this, { target: input1 });
			} else if (datepicker0.dates[0] !== origDate0) {
				onChangeDate(this, { target: input0 });
			}
		}
	} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/main.js // CONCATENATED MODULE: ./src/js/components/hero-dynamic-content.js

	// datepicker global settings
	(function () {
		Datepicker.locales.en = {
			days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
			daysShort: ["Вск", "Пон", "Втр", "Ср", "Чт", "Птн", "Сбт"],
			daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
			months: [
				"Январь",
				"Февраль",
				"Март",
				"Апрель",
				"Май",
				"Июнь",
				"Июль",
				"Август",
				"Сентябрь",
				"Октябрь",
				"Ноябрь",
				"Декабрь",
			],
			monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"],
			today: "Сегодня",
			clear: "Очистить",
			titleFormat: "MM yy",
			format: "dd.mm.yyyy",
			weekStart: 0,
		};
	})();
	const heroList = document.querySelector(".hero__list");
	const dashboardTemplate = `
	<div class="hero__container-vacancies">
		<div class="hero__vacancies">
			<h4 class="hero__title-vacancies">Должности</h4>
			<svg
				class="hero__icon-vacancy"
				xmlns="http://www.w3.org/2000/svg"
				width="21"
				height="18"
				viewBox="0 0 21 18"
				fill="none"
			>
				<path
					d="M11.366 17.5C10.9811 18.1667 10.0189 18.1667 9.63398 17.5L0.54071 1.75C0.155809 1.08333 0.636934 0.249998 1.40673 0.249998L19.5933 0.25C20.3631 0.25 20.8442 1.08333 20.4593 1.75L11.366 17.5Z"
					fill="#142647"
				/>
			</svg>
			<ul class="list-reset hero__list-vacancies">
				<li class="hero__item-vacancy hero__item-vacancy-active" data-vacancy="Менеджер по продажам">
					<span class="hero__text-vacancy">Менеджер по продажам</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="19"
						height="19"
						viewBox="0 0 19 19"
						class="hero__icon-mark"
						fill="none"
					>
						<path
							d="M13.623 0C16.8435 0 19 2.261 19 5.624V13.3864C19 16.739 16.8435 19 13.623 19H5.3865C2.166 19 0 16.739 0 13.3864V5.624C0 2.261 2.166 0 5.3865 0H13.623ZM13.471 6.65C13.148 6.327 12.616 6.327 12.293 6.65L8.3695 10.5735L6.707 8.911C6.384 8.588 5.852 8.588 5.529 8.911C5.206 9.234 5.206 9.7565 5.529 10.089L7.79 12.3405C7.9515 12.502 8.1605 12.578 8.3695 12.578C8.588 12.578 8.797 12.502 8.9585 12.3405L13.471 7.828C13.794 7.505 13.794 6.9825 13.471 6.65Z"
							fill="#126797"
						/>
					</svg>
				</li>
				<li class="hero__item-vacancy" data-vacancy="Проектный менеджер">
					<span class="hero__text-vacancy">Проектный менеджер</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="19"
						height="19"
						viewBox="0 0 19 19"
						class="hero__icon-mark"
						fill="none"
					>
						<path
							d="M13.623 0C16.8435 0 19 2.261 19 5.624V13.3864C19 16.739 16.8435 19 13.623 19H5.3865C2.166 19 0 16.739 0 13.3864V5.624C0 2.261 2.166 0 5.3865 0H13.623ZM13.471 6.65C13.148 6.327 12.616 6.327 12.293 6.65L8.3695 10.5735L6.707 8.911C6.384 8.588 5.852 8.588 5.529 8.911C5.206 9.234 5.206 9.7565 5.529 10.089L7.79 12.3405C7.9515 12.502 8.1605 12.578 8.3695 12.578C8.588 12.578 8.797 12.502 8.9585 12.3405L13.471 7.828C13.794 7.505 13.794 6.9825 13.471 6.65Z"
							fill="#126797"
						/>
					</svg>
				</li>
				<li class="hero__item-vacancy" data-vacancy="Маркетолог">
					<span class="hero__text-vacancy">Маркетолог</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="19"
						height="19"
						viewBox="0 0 19 19"
						class="hero__icon-mark"
						fill="none"
					>
						<path
							d="M13.623 0C16.8435 0 19 2.261 19 5.624V13.3864C19 16.739 16.8435 19 13.623 19H5.3865C2.166 19 0 16.739 0 13.3864V5.624C0 2.261 2.166 0 5.3865 0H13.623ZM13.471 6.65C13.148 6.327 12.616 6.327 12.293 6.65L8.3695 10.5735L6.707 8.911C6.384 8.588 5.852 8.588 5.529 8.911C5.206 9.234 5.206 9.7565 5.529 10.089L7.79 12.3405C7.9515 12.502 8.1605 12.578 8.3695 12.578C8.588 12.578 8.797 12.502 8.9585 12.3405L13.471 7.828C13.794 7.505 13.794 6.9825 13.471 6.65Z"
							fill="#126797"
						/>
					</svg>
				</li>
				<li class="hero__item-vacancy" data-vacancy="HR специалист">
					<span class="hero__text-vacancy">HR специалист</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="19"
						height="19"
						viewBox="0 0 19 19"
						class="hero__icon-mark"
						fill="none"
					>
						<path
							d="M13.623 0C16.8435 0 19 2.261 19 5.624V13.3864C19 16.739 16.8435 19 13.623 19H5.3865C2.166 19 0 16.739 0 13.3864V5.624C0 2.261 2.166 0 5.3865 0H13.623ZM13.471 6.65C13.148 6.327 12.616 6.327 12.293 6.65L8.3695 10.5735L6.707 8.911C6.384 8.588 5.852 8.588 5.529 8.911C5.206 9.234 5.206 9.7565 5.529 10.089L7.79 12.3405C7.9515 12.502 8.1605 12.578 8.3695 12.578C8.588 12.578 8.797 12.502 8.9585 12.3405L13.471 7.828C13.794 7.505 13.794 6.9825 13.471 6.65Z"
							fill="#126797"
						/>
					</svg>
				</li>
			</ul>
		</div>
	</div>
	<div class="hero__container-item">
		<div class="hero__item-inner">
			<div class="hero__candidates">
				<div class="hero__row">
					<h2 class="hero__title-candidates hero__title-candidates-new"></h2>
					<h4 class="hero__subtitle">новых кандидатов</h4>
				</div>
				<div class="hero__row">
					<h2 class="hero__title-candidates hero__title-candidates-center">
						<span class="hero__title-candidates-active"></span
						><span class="hero__title-candidates-all"></span>
					</h2>
					<h4 class="hero__subtitle">активных кандидатов</h4>
				</div>
			</div>
			<div class="hero__age">
				<h2 class="hero__title-graph">
					<span class="hero__title-graph-value hero__title-graph-value-age"></span
					><span class="hero__title-graph-countable"></span>
				</h2>
				<h4 class="hero__subtitle hero__subtitle-graph">средний возраст</h4>
				<div class="hero__graph"></div>
			</div>
			<div class="hero__salary">
				<h2 class="hero__title-graph">
					<span class="hero__title-graph-value hero__title-graph-value-salary"></span>тыс.
				</h2>
				<h4 class="hero__subtitle hero__subtitle-graph">ожидания по ЗП</h4>
				<div class="hero__graph"></div>
			</div>
		</div>
		<div class="hero__interview">
			<div class="hero__period" id="date_period">
				<input
					class="hero__input-text hero__input-text-start"
					type="text"
					id="start"
					name="start"
					readonly
				/>
				<span class="hero__text-dash"></span>
				<input
					class="hero__input-text hero__input-text-end"
					type="text"
					id="end"
					name="end"
					readonly
				/>
			</div>
			<h3 class="hero__title-interview"></h3>
			<h4 class="hero__subtitle hero__subtitle-interview">собеседования назначено</h4>
			<button class="btn-reset hero__button-remove">Удалить</button>
		</div>
	</div>
`;
	function updateContent(
		dashboardId,
		ageData,
		salaryData,
		avgAge,
		avgSalary,
		activeCandidates,
		activeCandidatesAl,
		commitedMeetings
	) {
		const dashboard = document.getElementById(dashboardId);
		const ageGraph = dashboard.querySelector(".hero__age .hero__graph");
		const salaryGraph = dashboard.querySelector(".hero__salary .hero__graph");
		const newCandidatesEl = dashboard.querySelector(".hero__title-candidates-new");
		const activeCandidatesEl = dashboard.querySelector(".hero__title-candidates-active");
		const activeCandidatesAllEl = dashboard.querySelector(".hero__title-candidates-all");
		const ageValueEL = dashboard.querySelector(".hero__title-graph-value-age");
		const ageValueCountableEL = dashboard.querySelector(".hero__title-graph-countable");
		const salaryValueEl = dashboard.querySelector(".hero__title-graph-value-salary");
		const interviewsEl = dashboard.querySelector(".hero__title-interview");
		ageValueEL.innerHTML = avgAge;
		ageValueCountableEL.innerHTML = declOfNum(avgAge, ["лет", "года", "лет"]);
		salaryValueEl.innerHTML = Math.round(avgSalary / 1000);
		newCandidatesEl.innerHTML = "+ " + calcSum(Object.values(ageData));
		activeCandidatesEl.innerHTML = activeCandidates;
		activeCandidatesAllEl.innerHTML = "/" + activeCandidatesAl;
		interviewsEl.innerHTML = commitedMeetings;
		drawGraph(ageGraph, ageData, "в возрасте", "лет");
		drawGraph(salaryGraph, salaryData, "зарплата", "тыс");
	}
	function calcSum(array) {
		let sum = 0;
		array.forEach((value) => {
			sum += value;
		});
		return sum;
	}
	function drawGraph(graphContainer, data, subtitle, lightSubtitle) {
		let twoBiggest = findTwoBiggest(Object.values(data));
		let objValuesSum = calcSum(Object.values(data));
		graphContainer.innerHTML = [];
		for (const key in data) {
			if (Object.hasOwnProperty.call(data, key)) {
				const repeated = data[key];
				let persentage = calcPersentage(repeated, objValuesSum);
				let column = document.createElement("div");
				column.innerHTML = `
				<div class="hero__bar"></div>
				<span class="hero__text-persentage">${persentage}%</span>
				<div class="hero__container-tooltip">
					<div class="hero__tooltip">
						<div class="hero__container-tooltip-inner">
							<h4 class="hero__title-tooltip">${repeated}</h4>
							<h4 class="hero__subtitle hero__subtitle-tooltip">${declOfNum(repeated, ["кандидат", "кандидата", "кандидатов"])}</h4>
						</div>
						<div class="hero__container-tooltip-transparent">
							<h4 class="hero__title-tooltip  hero__title-tooltip-light">${key}
							${lightSubtitle == "лет" ? declOfNum(key, ["лет", "года", "лет"]) : lightSubtitle}
							</h4>
							<h4 class="hero__subtitle hero__subtitle-tooltip">${subtitle}</h4>
						</div>
					</div>
					<img
						src="./img/tooltip-triangle.svg"
						class="image hero__icon-triangle"
						width="45"
						height="28"
						alt="Треугольник"
					/>
				</div>
			`;
				column.classList = "hero__column";
				column.style.height = persentage + "%";
				if (!twoBiggest.includes(repeated)) {
					column.querySelector(".hero__bar").style.opacity = "0.8";
				}
				column.setAttribute("data-tooltip", key); /* временно */
				graphContainer.appendChild(column);
			}
		}
	}
	function calcPersentage(value, sum) {
		return Math.round((value * 100) / sum);
	}
	function declOfNum(n, text_forms) {
		n = Math.abs(n) % 100;
		var n1 = n % 10;
		if (n > 10 && n < 20) {
			return text_forms[2];
		}
		if (n1 > 1 && n1 < 5) {
			return text_forms[1];
		}
		if (n1 == 1) {
			return text_forms[0];
		}
		return text_forms[2];
	}
	function generateUniqueId() {
		return (
			Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36)
		);
	}
	function drawNewDashboard() {
		let newDashboard = document.createElement("li");
		newDashboard.classList = "hero__item hero__dashboard";
		newDashboard.innerHTML = dashboardTemplate;
		let dashboardId = generateUniqueId();
		newDashboard.setAttribute("id", dashboardId);
		newDashboard.querySelector(".hero__button-remove").addEventListener("click", () => {
			document.getElementById(dashboardId).remove();
		});
		const periodContainer = newDashboard.querySelector(".hero__period");
		let dates = configureDatePicker(periodContainer);
		configureVacanciesList(newDashboard);
		heroList.appendChild(newDashboard);
		if (document.querySelectorAll(".hero__dashboard").length <= 1) {
			getAnalyticsData(dashboardId, {
				dates: [dates.startDate, dates.endDate],
			});
		}
	}
	function configureDatePicker(periodContainer) {
		const rangepicker = new DateRangePicker(periodContainer, {
			autohide: true,
			format: "dd.mm.yyyy",
		});
		let d = new Date();
		let dates = {
			startDate: d.setMonth(d.getMonth() - 1),
			endDate: Date.now(),
		};
		rangepicker.setDates(dates.startDate, dates.endDate);
		dates.startDate = rangepicker.getDates("dd.mm.yyyy")[0];
		dates.endDate = rangepicker.getDates("dd.mm.yyyy")[1];
		const startInput = periodContainer.querySelector(".hero__input-text-start");
		const endInput = periodContainer.querySelector(".hero__input-text-end");
		startInput.addEventListener("changeDate", () => {
			if (rangepicker.getDates("dd.mm.yyyy")[0] !== dates.startDate) {
				dates.startDate = rangepicker.getDates("dd.mm.yyyy")[0];
				getAnalyticsData(periodContainer.closest(".hero__dashboard").getAttribute("id"), {
					dates: rangepicker.getDates("dd.mm.yyyy"),
				});
			}
		});
		endInput.addEventListener("changeDate", () => {
			if (rangepicker.getDates("dd.mm.yyyy")[1] !== dates.endDate) {
				dates.endDate = rangepicker.getDates("dd.mm.yyyy")[1];
				getAnalyticsData(periodContainer.closest(".hero__dashboard").getAttribute("id"), {
					dates: rangepicker.getDates("dd.mm.yyyy"),
				});
			}
		});
		return dates;
	}
	function configureVacanciesList(dashboard) {
		const vacanciesBtns = dashboard.querySelectorAll(".hero__vacancies");
		vacanciesBtns.forEach((btn) => {
			btn.addEventListener("click", () => {
				btn.classList.toggle("hero__vacancies-opened");
			});
		});
		const vacanciesList = dashboard.querySelector(".hero__list-vacancies");
		vacanciesList.addEventListener("click", (event) => {
			event.stopPropagation();
		});
		const vacanciesItems = dashboard.querySelectorAll(".hero__item-vacancy");
		vacanciesItems.forEach((btn) => {
			btn.addEventListener("click", (event) => {
				event.stopPropagation();
				btn.classList.toggle("hero__item-vacancy-active");
			});
		});
	}
	const minusButton = document.querySelector(".hero__button-minus");
	minusButton.addEventListener("click", () => {
		let dashboards = document.querySelectorAll(".hero__dashboard");
		dashboards[dashboards.length - 1].remove();
	});
	const plusButton = document.querySelector(".hero__button-plus");
	plusButton.addEventListener("click", () => {
		drawNewDashboard();
	});
	function getAnalyticsData(dashboardId, requestPayload) {
		let vacanciesElems = document.getElementById(dashboardId).querySelectorAll(".hero__item-vacancy-active");
		let vacanciesArr = [];
		vacanciesElems.forEach((vacancy) => {
			vacanciesArr.push(vacancy.getAttribute("data-vacancy"));
		});
		lib_axios
			.post("http://localhost:3000/analyticsData", {
				startDate: requestPayload.dates[0],
				endDate: requestPayload.dates[1],
				vacancies: vacanciesArr,
			})
			.then((r) => {
				updateContent(
					dashboardId,
					r.data.ageData,
					r.data.salaryData,
					r.data.avgAge,
					r.data.avgSalary,
					r.data.activeCandidates,
					r.data.activeCandidatesAll,
					r.data.commitedMeetings
				);
			})
			.catch((e) => {
				console.log(e);
			});
	}
	function findTwoBiggest(myArray) {
		return myArray.sort((a, b) => b - a).slice(0, 2);
	}
	function hideBefore(dashboard) {
		dashboard.querySelector(".hero__container-item").classList.add("hero__container-item-hidden");
	}
	drawNewDashboard(); // CONCATENATED MODULE: ./src/js/_components.js // CONCATENATED MODULE: ./src/js/main.js

	/******/
})();
