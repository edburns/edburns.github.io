/*!
 * 1DS JS SDK Analytics Web, 4.4.2
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * (Microsoft Internal Only)
 */
(function (global, factory) {
    var undef = "undefined";
    typeof exports === "object" && typeof module !== undef ? factory(exports) :
    typeof define === "function" && define.amd ? define(["exports"], factory) :
    (function(global){
        var nsKey, key, nm, theExports = {}, modName = "es5_ms_analytics_web_4_4_2", msMod="__ms$mod__";
        var mods={}, modDetail=mods[modName]={}, ver="4.4.2";
        // Versioned namespace "oneDS4"
        var exportNs=global, nsKey="oneDS4", exportNs=exportNs[nsKey]=(exportNs[nsKey]||{});
        // Global namespace "oneDS"
        var destNs=global, nsKey="oneDS", destNs=destNs[nsKey]=(destNs[nsKey]||{});
        var expNsDetail=(exportNs[msMod]=(exportNs[msMod] || {})), expNameVer=(expNsDetail["v"]=(expNsDetail["v"] || []));
        var destNsDetail=(destNs[msMod]=(destNs[msMod] || {})), destNameVer=(destNsDetail["v"]=(destNsDetail["v"] || []));
        (destNsDetail["o"]=(destNsDetail["o"] || [])).push(mods);
        factory(theExports);
        for(var key in theExports) {
            // Always set the imported value into the "export" versioned namespace (last-write wins)
            nm="x", exportNs[key]=theExports[key], expNameVer[key]=ver;
            // Copy over any named element that is not already present (first-write wins)
            typeof destNs[key]===undef ? (nm="n", destNs[key]=theExports[key]) && (destNameVer[key]=ver) : !destNameVer[key] && (destNameVer[key]="---");
            (modDetail[nm] = (modDetail[nm] || [])).push(key);
        }
    })(typeof globalThis !== undef ? globalThis : global || self);
})(this, (function (exports) {
'use strict';


var RT_PROFILE = "REAL_TIME";
var NRT_PROFILE = "NEAR_REAL_TIME";
var BE_PROFILE = "BEST_EFFORT";

var strShimFunction = "function";
var strShimObject = "object";
var strShimUndefined = "undefined";
var strShimPrototype = "prototype";
var ObjClass$1 = Object;
var ObjProto$1 = ObjClass$1[strShimPrototype];

/*! https://github.com/nevware21/ts-utils v0.15.0 */
/*#__NO_SIDE_EFFECTS__*/
function _pureAssign(func1, func2) {
    return func1 || func2;
}
/*#__NO_SIDE_EFFECTS__*/
function _pureRef(value, name) {
    return value !== null && value !== undefined ? value[name] : undefined;
}
var UNDEF_VALUE = undefined;
var NULL_VALUE = null;
var EMPTY = "";
var FUNCTION = "function";
var OBJECT = "object";
var PROTOTYPE = "prototype";
var __PROTO__ = "__proto__";
var UNDEFINED = "undefined";
var CONSTRUCTOR = "constructor";
var SYMBOL = "Symbol";
var LENGTH = "length";
var NAME = "name";
var CALL = "call";
var TO_STRING = "toString";
var GET_OWN_PROPERTY_DESCRIPTOR = "getOwnPropertyDescriptor";
var GET_OWN_PROPERTY_SYMBOLS = "getOwnPropertySymbols";
var ObjClass = (/*#__PURE__*/_pureAssign(Object));
var ObjProto = (/*#__PURE__*/_pureRef(ObjClass, PROTOTYPE));
var StrCls = (/*#__PURE__*/_pureAssign(String));
var StrProto = (/*#__PURE__*/_pureRef(StrCls, PROTOTYPE));
var MathCls = (/*#__PURE__*/_pureAssign(Math));
var ArrCls = (/*#__PURE__*/_pureAssign(Array));
var ArrProto = (/*#__PURE__*/_pureRef(ArrCls, PROTOTYPE));
var ArrSlice = (/*#__PURE__*/_pureRef(ArrProto, "slice"));
var NumberCls = (/*#__PURE__*/_pureAssign(Number));
var NumberProto = (/*#__PURE__*/_pureRef(NumberCls, PROTOTYPE));
var FuncCls = (/*#__PURE__*/_pureAssign(Function));
var FuncProto = (/*#__PURE__*/_pureRef(FuncCls, PROTOTYPE));
var DateCls = (/*#__PURE__*/_pureAssign(Date));
var DateProto = (/*#__PURE__*/_pureRef(DateCls, PROTOTYPE));
var RegExpCls = (/*#__PURE__*/_pureAssign(RegExp));
var RegExpProto = (/*#__PURE__*/_pureRef(RegExpCls, PROTOTYPE));
var BooleanCls = (/*#__PURE__*/_pureAssign(Boolean));
var BooleanProto = (/*#__PURE__*/_pureRef(BooleanCls, PROTOTYPE));
var ErrorCls = (/*#__PURE__*/_pureAssign(Error));
var ErrorProto = (/*#__PURE__*/_pureRef(ErrorCls, PROTOTYPE));
var POLYFILL_TAG = "_polyfill";
var POLYFILL_TYPE_NAME = "__nw21$polytype__";
function safe(func, argArray) {
    try {
        return {
            v: func.apply(this, argArray)
        };
    }
    catch (e) {
        return { e: e };
    }
}
/*#__NO_SIDE_EFFECTS__*/
function safeGet(cb, defValue, argArray) {
    var result = safe(cb, argArray);
    return result.e ? defValue : result.v;
}
var _primitiveTypes;
/*#__NO_SIDE_EFFECTS__*/
function _createIs(theType) {
    return function (value) {
        return typeof value === theType;
    };
}
/*#__NO_SIDE_EFFECTS__*/
function _createObjIs(theName) {
    var theType = "[object " + theName + "]";
    return function (value) {
        return !!(value && objToString(value) === theType);
    };
}
/*#__NO_SIDE_EFFECTS__*/
function objToString(value) {
    return ObjProto[TO_STRING].call(value);
}
/*#__NO_SIDE_EFFECTS__*/
function isUndefined(value) {
    return typeof value === UNDEFINED || value === UNDEFINED;
}
/*#__NO_SIDE_EFFECTS__*/
function isStrictUndefined(arg) {
    return arg === UNDEF_VALUE;
}
/*#__NO_SIDE_EFFECTS__*/
function isNullOrUndefined(value) {
    return value === NULL_VALUE || isUndefined(value);
}
/*#__NO_SIDE_EFFECTS__*/
function isStrictNullOrUndefined(value) {
    return value === NULL_VALUE || value === UNDEF_VALUE;
}
/*#__NO_SIDE_EFFECTS__*/
function isDefined(arg) {
    return !!arg || arg !== UNDEF_VALUE;
}
/*#__NO_SIDE_EFFECTS__*/
function isPrimitiveType(theType) {
    !_primitiveTypes && (_primitiveTypes = ["string", "number", "boolean", UNDEFINED, "symbol", "bigint"]);
    return !!(theType !== OBJECT && _primitiveTypes.indexOf(theType) !== -1);
}
var isString = (/*#__PURE__*/_createIs("string"));
var isFunction = (/*#__PURE__*/_createIs(FUNCTION));
/*#__NO_SIDE_EFFECTS__*/
function isObject(value) {
    if (!value && isNullOrUndefined(value)) {
        return false;
    }
    return !!value && typeof value === OBJECT;
}
var isArray = (/*#__PURE__*/_pureRef(ArrCls, "isArray"));
var isDate = (/*#__PURE__*/_createObjIs("Date"));
var isNumber = (/*#__PURE__*/_createIs("number"));
var isBoolean = (/*#__PURE__*/_createIs("boolean"));
var isError = (/*#__PURE__*/_createObjIs("Error"));
/*#__NO_SIDE_EFFECTS__*/
function isPromiseLike(value) {
    return !!(value && value.then && isFunction(value.then));
}
/*#__NO_SIDE_EFFECTS__*/
function isTruthy(value) {
    return !(!value || safeGet(function () { return !(value && (0 + value)); }, !value));
}
function _returnNothing() {
    return;
}
function _returnEmptyArray() {
    return [];
}
function _returnFalse() {
    return false;
}
var asString = (/*#__PURE__*/_pureAssign(StrCls));
var ERROR_TYPE = "[object Error]";
/*#__NO_SIDE_EFFECTS__*/
function dumpObj(object, format) {
    var propertyValueDump = EMPTY;
    var objType = ObjProto[TO_STRING][CALL](object);
    if (objType === ERROR_TYPE) {
        object = { stack: asString(object.stack), message: asString(object.message), name: asString(object.name) };
    }
    try {
        propertyValueDump = JSON.stringify(object, NULL_VALUE, format ? ((typeof format === "number") ? format : 4) : UNDEF_VALUE);
        propertyValueDump = (propertyValueDump ? propertyValueDump.replace(/"(\w+)"\s*:\s{0,1}/g, "$1: ") : NULL_VALUE) || asString(object);
    }
    catch (e) {
        propertyValueDump = " - " + dumpObj(e, format);
    }
    return objType + ": " + propertyValueDump;
}
function throwError(message) {
    throw new Error(message);
}
function throwTypeError(message) {
    throw new TypeError(message);
}
function throwRangeError(message) {
    throw new RangeError(message);
}
function _throwIfNullOrUndefined(obj) {
    if (isStrictNullOrUndefined(obj)) {
        throwTypeError("Cannot convert undefined or null to object");
    }
}
function _throwIfNotString(value) {
    if (!isString(value)) {
        throwTypeError("'" + dumpObj(value) + "' is not a string");
    }
}
/*#__NO_SIDE_EFFECTS__*/
function objHasOwnProperty(obj, prop) {
    return !!obj && ObjProto.hasOwnProperty[CALL](obj, prop);
}
var _objGetOwnPropertyDescriptor$2 = (/*#__PURE__*/_pureAssign((/*#__PURE__*/_pureRef(ObjClass, GET_OWN_PROPERTY_DESCRIPTOR)), _returnNothing));
var objHasOwn = (/*#__PURE__*/_pureAssign((/*#__PURE__*/_pureRef(ObjClass, "hasOwn")), polyObjHasOwn));
/*#__NO_SIDE_EFFECTS__*/
function polyObjHasOwn(obj, prop) {
    _throwIfNullOrUndefined(obj);
    return objHasOwnProperty(obj, prop) || !!_objGetOwnPropertyDescriptor$2(obj, prop);
}
/*#__NO_SIDE_EFFECTS__*/
function isUnsafePropKey(key) {
    return key === __PROTO__ || key === CONSTRUCTOR || key === PROTOTYPE;
}
function objForEachKey(theObject, callbackfn, thisArg) {
    if (theObject && (isObject(theObject) || isFunction(theObject))) {
        for (var prop in theObject) {
            if (objHasOwn(theObject, prop)) {
                if (callbackfn[CALL](isStrictNullOrUndefined(thisArg) ? theObject : thisArg, prop, theObject[prop]) === -1) {
                    break;
                }
            }
        }
    }
}
function objForEachKeySafe(theObject, callbackfn, thisArg) {
    objForEachKey(theObject, function (key, value) {
        if (!isUnsafePropKey(key)) {
            return callbackfn[CALL](isStrictNullOrUndefined(thisArg) ? theObject : thisArg, key, value);
        }
    }, thisArg);
}
function arrForEach(theArray, callbackfn, thisArg) {
    if (theArray) {
        var len = theArray[LENGTH] >>> 0;
        for (var idx = 0; idx < len; idx++) {
            if (idx in theArray) {
                if (callbackfn[CALL](isStrictNullOrUndefined(thisArg) ? theArray : thisArg, theArray[idx], idx, theArray) === -1) {
                    break;
                }
            }
        }
    }
}
var _unwrapFunction = _unwrapFunctionWithPoly;
/*#__NO_SIDE_EFFECTS__*/
function _unwrapFunctionWithPoly(funcName, clsProto, polyFunc) {
    var clsFn = clsProto ? clsProto[funcName] : NULL_VALUE;
    return function (thisArg) {
        var theFunc = (thisArg ? thisArg[funcName] : NULL_VALUE) || clsFn;
        if (theFunc || polyFunc) {
            var theArgs = arguments;
            return (theFunc || polyFunc).apply(thisArg, theFunc ? ArrSlice[CALL](theArgs, 1) : theArgs);
        }
        throwTypeError("\"" + asString(funcName) + "\" not defined for " + dumpObj(thisArg));
    };
}
/*#__NO_SIDE_EFFECTS__*/
function _unwrapFunctionNoInstWithPoly(funcName, clsProto, polyFunc) {
    var clsFn = clsProto ? clsProto[funcName] : NULL_VALUE;
    return function (thisArg) {
        var theFunc = clsFn;
        if (theFunc || polyFunc) {
            var theArgs = arguments;
            return (theFunc || polyFunc).apply(thisArg, theFunc ? ArrSlice[CALL](theArgs, 1) : theArgs);
        }
        throwTypeError("\"" + asString(funcName) + "\" not defined for " + dumpObj(thisArg));
    };
}
/*#__NO_SIDE_EFFECTS__*/
function _unwrapProp(propName) {
    return function (thisArg) {
        return thisArg[propName];
    };
}
function _objPropertyIsEnum(obj, propKey) {
    var desc;
    var fn = ObjClass.getOwnPropertyDescriptor;
    if (!isStrictNullOrUndefined(obj) && fn) {
        desc = safe(fn, [obj, propKey]).v || NULL_VALUE;
    }
    if (!desc && !isStrictNullOrUndefined(obj)) {
        desc = safe(function () {
            for (var key in obj) {
                if (key == propKey) {
                    return { enumerable: objHasOwnProperty(obj, key) };
                }
            }
        }).v;
    }
    return (desc && desc.enumerable) || false;
}
var _objPropertyIsEnumerable = (/*#__PURE__*/_unwrapFunctionNoInstWithPoly("propertyIsEnumerable", ObjProto, _objPropertyIsEnum));
var _objGetOwnPropertyDescriptor$1 = (/*#__PURE__*/_pureAssign((/*#__PURE__*/_pureRef(ObjClass, GET_OWN_PROPERTY_DESCRIPTOR)), _returnNothing));
var _objGetOwnPropertySymbols = (/*#__PURE__*/_pureAssign((/*#__PURE__*/_pureRef(ObjClass, GET_OWN_PROPERTY_SYMBOLS)), _returnEmptyArray));
var propMap = {
    e: "enumerable",
    c: "configurable",
    v: "value",
    w: "writable",
    g: "get",
    s: "set"
};
/*#__NO_SIDE_EFFECTS__*/
function _createProp(value) {
    var prop = {};
    prop[propMap["c"]] = true;
    prop[propMap["e"]] = true;
    if (value.l) {
        prop.get = function () { return value.l.v; };
        var desc = _objGetOwnPropertyDescriptor$1(value.l, "v");
        if (desc && desc.set) {
            prop.set = function (newValue) {
                value.l.v = newValue;
            };
        }
    }
    objForEachKey(value, function (key, value) {
        prop[propMap[key]] = isStrictUndefined(value) ? prop[propMap[key]] : value;
    });
    return prop;
}
var objDefineProp = (/*#__PURE__*/_pureRef(ObjClass, "defineProperty"));
var objDefineProperties = (/*#__PURE__*/_pureRef(ObjClass, "defineProperties"));
function objDefine(target, key, propDesc) {
    return objDefineProp(target, key, _createProp(propDesc));
}
function objDefineProps(target, propDescMap) {
    var props = {};
    objForEachKey(propDescMap, function (key, value) {
        props[key] = _createProp(value);
    });
    arrForEach(_objGetOwnPropertySymbols(propDescMap), function (sym) {
        if (_objPropertyIsEnumerable(propDescMap, sym)) {
            props[sym] = _createProp(propDescMap[sym]);
        }
    });
    return objDefineProperties(target, props);
}
/*#__NO_SIDE_EFFECTS__*/
function _createKeyValueMap(values, keyType, valueType, completeFn, writable) {
    var theMap = {};
    objForEachKey(values, function (key, value) {
        _assignMapValue(theMap, key, keyType ? value : key);
        _assignMapValue(theMap, value, valueType ? value : key);
    });
    return completeFn ? completeFn(theMap) : theMap;
}
function _assignMapValue(theMap, key, value, writable) {
    objDefineProp(theMap, key, {
        value: value,
        enumerable: true,
        writable: false
    });
}
function polyObjIs(value1, value2) {
    if (value1 !== value1) {
        return value2 !== value2;
    }
    if (value1 === 0 && value2 === 0) {
        return 1 / value1 === 1 / value2;
    }
    return value1 === value2;
}
var objIsFrozen = (/*#__PURE__*/_pureAssign((/*#__PURE__*/_pureRef(ObjClass, "isFrozen")), _returnFalse));
var _objFreeze = (/*#__PURE__*/_pureRef(ObjClass, "freeze"));
function _doNothing(value) {
    return value;
}
/*#__NO_SIDE_EFFECTS__*/
function _getProto(value) {
    _throwIfNullOrUndefined(value);
    return value[__PROTO__] || NULL_VALUE;
}
var objAssign = (/*#__PURE__*/_pureRef(ObjClass, "assign"));
var objKeys = (/*#__PURE__*/_pureRef(ObjClass, "keys"));
function _deepFreeze(val, visited) {
    if ((isArray(val) || isObject(val) || isFunction(val)) && !objIsFrozen(val)) {
        for (var lp = 0; lp < visited.length; lp++) {
            if (visited[lp] === val) {
                return val;
            }
        }
        visited.push(val);
        objForEachKey(val, function (_key, propValue) {
            _deepFreeze(propValue, visited);
        });
        objFreeze(val);
    }
    return val;
}
function objDeepFreeze(value) {
    return _objFreeze ? _deepFreeze(value, []) : value;
}
var objFreeze = (/*#__PURE__*/_pureAssign(_objFreeze, _doNothing));
var objGetPrototypeOf = (/*#__PURE__*/_pureAssign((/*#__PURE__*/_pureRef(ObjClass, "getPrototypeOf")), _getProto));
var objIs = (/*#__PURE__*/_pureAssign((/*#__PURE__*/_pureRef(ObjClass, "is")), polyObjIs));
/*#__NO_SIDE_EFFECTS__*/
function createEnum(values) {
    return _createKeyValueMap(values, 1 , 0 , objFreeze);
}
/*#__NO_SIDE_EFFECTS__*/
function createEnumKeyMap(values) {
    return _createKeyValueMap(values, 0 , 0 , objFreeze);
}
/*#__NO_SIDE_EFFECTS__*/
function createSimpleMap(values) {
    var mapClass = {};
    objForEachKey(values, function (key, value) {
        _assignMapValue(mapClass, key, value[1]);
        _assignMapValue(mapClass, value[0], value[1]);
    });
    return objFreeze(mapClass);
}
/*#__NO_SIDE_EFFECTS__*/
function createTypeMap(values) {
    return createSimpleMap(values);
}
var _wellKnownSymbolMap = (/*#__PURE__*/createEnumKeyMap({
    asyncIterator: 0 ,
    hasInstance: 1 ,
    isConcatSpreadable: 2 ,
    iterator: 3 ,
    match: 4 ,
    matchAll: 5 ,
    replace: 6 ,
    search: 7 ,
    species: 8 ,
    split: 9 ,
    toPrimitive: 10 ,
    toStringTag: 11 ,
    unscopables: 12
}));
var GLOBAL_CONFIG_KEY = "__tsUtils$gblCfg";
var _globalCfg;
/*#__NO_SIDE_EFFECTS__*/
function _getGlobalValue() {
    var result;
    if (typeof globalThis !== UNDEFINED) {
        result = globalThis;
    }
    if (!result && typeof self !== UNDEFINED) {
        result = self;
    }
    if (!result && typeof window !== UNDEFINED) {
        result = window;
    }
    if (!result && typeof global !== UNDEFINED) {
        result = global;
    }
    return result;
}
/*#__NO_SIDE_EFFECTS__*/
function _getGlobalConfig() {
    if (!_globalCfg) {
        var gbl = safe(_getGlobalValue).v || {};
        _globalCfg = gbl[GLOBAL_CONFIG_KEY] = gbl[GLOBAL_CONFIG_KEY] || {};
    }
    return _globalCfg;
}
var mathMin = (/*#__PURE__*/_pureRef(MathCls, "min"));
var mathMax = (/*#__PURE__*/_pureRef(MathCls, "max"));
var strSlice = (/*#__PURE__*/_unwrapFunction("slice", StrProto));
var strSubstring = (/*#__PURE__*/_unwrapFunction("substring", StrProto));
var strSubstr = (/*#__PURE__*/_unwrapFunctionWithPoly("substr", StrProto, polyStrSubstr));
/*#__NO_SIDE_EFFECTS__*/
function polyStrSubstr(value, start, length) {
    _throwIfNullOrUndefined(value);
    if (length < 0) {
        return EMPTY;
    }
    start = start || 0;
    if (start < 0) {
        start = mathMax(start + value[LENGTH], 0);
    }
    if (isUndefined(length)) {
        return strSlice(value, start);
    }
    return strSlice(value, start, start + length);
}
/*#__NO_SIDE_EFFECTS__*/
function strLeft(value, count) {
    return strSubstring(value, 0, count);
}
function _tagAsPolyfill(target, polyfillTypeName) {
    if (target) {
        safe(function () {
            target[POLYFILL_TAG] = true;
            target[POLYFILL_TYPE_NAME] = polyfillTypeName;
        });
        safe(objDefine, [target, POLYFILL_TAG, {
                v: true,
                w: false,
                e: false
            }]);
        safe(objDefine, [target, POLYFILL_TYPE_NAME, {
                v: polyfillTypeName,
                w: false,
                e: false
            }]);
    }
    return target;
}
var objCreate = (/*#__PURE__*/_pureAssign((/*#__PURE__*/_pureRef(ObjClass, "create")), polyObjCreate));
/*#__NO_SIDE_EFFECTS__*/
function polyObjCreate(obj, properties) {
    var newObj = null;
    function tempFunc() { }
    if (!isStrictNullOrUndefined(obj)) {
        var type = typeof obj;
        if (type !== OBJECT && type !== FUNCTION) {
            throwTypeError("Prototype must be an Object or function: " + dumpObj(obj));
        }
        tempFunc[PROTOTYPE] = obj;
        safe(function () {
            tempFunc[__PROTO__] = obj;
        });
        newObj = new tempFunc();
    }
    else {
        newObj = {};
    }
    if (properties) {
        safe(objDefineProperties, [newObj, properties]);
    }
    return newObj;
}
/*#__NO_SIDE_EFFECTS__*/
function utcNow() {
    return (Date.now || polyUtcNow)();
}
/*#__NO_SIDE_EFFECTS__*/
function polyUtcNow() {
    return new Date().getTime();
}
function fnApply(fn, thisArg, argArray) {
    return fn.apply(thisArg, argArray);
}
/*#__NO_SIDE_EFFECTS__*/
function fnBind(fn, thisArg) {
    return fn.bind.apply(fn, ArrSlice[CALL](arguments, 1));
}
var _globalLazyTestHooks;
function _initTestHooks() {
    _globalLazyTestHooks = _getGlobalConfig();
}
/*#__NO_SIDE_EFFECTS__*/
function getLazy(cb, argArray) {
    var lazyValue = {};
    !_globalLazyTestHooks && _initTestHooks();
    lazyValue.b = _globalLazyTestHooks.lzy;
    objDefineProp(lazyValue, "v", {
        configurable: true,
        get: function () {
            var result = fnApply(cb, null, argArray);
            if (!_globalLazyTestHooks.lzy) {
                objDefineProp(lazyValue, "v", {
                    value: result
                });
            }
            lazyValue.b = _globalLazyTestHooks.lzy;
            return result;
        }
    });
    return lazyValue;
}
var mathRandom = (/*#__PURE__*/_pureRef(MathCls, "random"));
var _uniqueInstanceId = (/*#__PURE__*/getLazy(function () {
    var value = (utcNow().toString(36).slice(2));
    while (value.length < 16) {
        value += mathRandom().toString(36).slice(2);
    }
    value = value.substring(0, 16);
    return value;
}));
var UNIQUE_REGISTRY_ID = "_urid";
var POLY_SYM = "$nw21sym";
var _polySymbols;
var _polyId = 0;
/*#__NO_SIDE_EFFECTS__*/
function _globalSymbolRegistry() {
    if (!_polySymbols) {
        var gblCfg = _getGlobalConfig();
        _polySymbols = gblCfg.gblSym = gblCfg.gblSym || { k: {}, s: {} };
    }
    return _polySymbols;
}
var _wellKnownSymbolCache;
/*#__NO_SIDE_EFFECTS__*/
function polyNewSymbol(description) {
    var uniqueId = "_" + _polyId++ + "_" + _uniqueInstanceId.v;
    var symString = SYMBOL + "(" + description + ")";
    function _setProp(name, value) {
        objDefine(theSymbol, name, {
            v: value,
            e: false,
            w: false
        });
    }
    var theSymbol = objCreate(null);
    _setProp("description", asString(description));
    _setProp(TO_STRING, function () { return symString + POLY_SYM + uniqueId; });
    _setProp("valueOf", function () { return theSymbol; });
    _setProp("v", symString);
    _setProp("_uid", uniqueId);
    return _tagAsPolyfill(theSymbol, "symbol");
}
/*#__NO_SIDE_EFFECTS__*/
function polySymbolFor(key) {
    var registry = _globalSymbolRegistry();
    if (!objHasOwn(registry.k, key)) {
        var newSymbol_1 = polyNewSymbol(key);
        var regId_1 = objKeys(registry.s).length;
        newSymbol_1[UNIQUE_REGISTRY_ID] = function () { return regId_1 + "_" + newSymbol_1[TO_STRING](); };
        registry.k[key] = newSymbol_1;
        registry.s[newSymbol_1[UNIQUE_REGISTRY_ID]()] = asString(key);
    }
    return registry.k[key];
}
/*#__NO_SIDE_EFFECTS__*/
function polyGetKnownSymbol(name) {
    !_wellKnownSymbolCache && (_wellKnownSymbolCache = {});
    var result;
    var knownName = _wellKnownSymbolMap[name];
    if (knownName) {
        result = _wellKnownSymbolCache[knownName] = _wellKnownSymbolCache[knownName] || polyNewSymbol(SYMBOL + "." + knownName);
    }
    return result;
}
/*#__NO_SIDE_EFFECTS__*/
function createCachedValue(value) {
    return objDefineProp({
        toJSON: function () { return value; }
    }, "v", { value: value });
}
/*#__NO_SIDE_EFFECTS__*/
function getDeferred(cb, argArray) {
    var theValue = {
        toJSON: function () { return theValue.v; }
    };
    return objDefineProp(theValue, "v", {
        get: function () {
            var result = fnApply(cb, null, argArray);
            cb = NULL_VALUE;
            objDefineProp(theValue, "v", { value: result });
            return result;
        },
        configurable: true
    });
}
var WINDOW = "window";
var _cachedGlobal;
function _getGlobalInstFn(getFn, theArgs) {
    var cachedValue;
    return function () {
        !_globalLazyTestHooks && _initTestHooks();
        if (!cachedValue || _globalLazyTestHooks.lzy) {
            cachedValue = createCachedValue(safe(getFn, theArgs).v);
        }
        return cachedValue.v;
    };
}
function getGlobal(useCached) {
    !_globalLazyTestHooks && _initTestHooks();
    if (!_cachedGlobal || useCached === false || _globalLazyTestHooks.lzy) {
        _cachedGlobal = createCachedValue(safe(_getGlobalValue).v || NULL_VALUE);
    }
    return _cachedGlobal.v;
}
/*#__NO_SIDE_EFFECTS__*/
function getInst(name, useCached) {
    var gbl;
    if (!_cachedGlobal || useCached === false) {
        gbl = getGlobal(useCached);
    }
    else {
        gbl = _cachedGlobal.v;
    }
    if (gbl && gbl[name]) {
        return gbl[name];
    }
    if (name === WINDOW) {
        try {
            return window;
        }
        catch (e) {
        }
    }
    return NULL_VALUE;
}
/*#__NO_SIDE_EFFECTS__*/
function hasDocument() {
    return !!getDocument();
}
var getDocument = (/*#__PURE__*/_getGlobalInstFn(getInst, ["document"]));
/*#__NO_SIDE_EFFECTS__*/
function hasWindow() {
    return !!getWindow();
}
var getWindow = (/*#__PURE__*/_getGlobalInstFn(getInst, [WINDOW]));
/*#__NO_SIDE_EFFECTS__*/
function hasNavigator() {
    return !!getNavigator();
}
var getNavigator = (/*#__PURE__*/_getGlobalInstFn(getInst, ["navigator"]));
/*#__NO_SIDE_EFFECTS__*/
function hasHistory() {
    return !!getHistory();
}
var getHistory = (/*#__PURE__*/_getGlobalInstFn(getInst, ["history"]));
var isNode = (/*#__PURE__*/_getGlobalInstFn(function () {
    return !!safe(function () {
        var processInst = getInst("process");
        return processInst && (processInst.versions || {}).node;
    }).v;
}));
var isWebWorker = (/*#__PURE__*/_getGlobalInstFn(function () {
    return !!safe(function () { return self && self instanceof WorkerGlobalScope; }).v;
}));
var getQueueMicrotask = (/*#__PURE__*/_getGlobalInstFn(getInst, ["queueMicrotask"]));
var _symbol;
var _symbolFor;
/*#__NO_SIDE_EFFECTS__*/
function _initSymbol() {
    _symbol = (/*#__PURE__*/createCachedValue(safe((getInst), [SYMBOL]).v));
    return _symbol;
}
function _getSymbolKey(key) {
    var gblSym = ((!_globalLazyTestHooks.lzy ? _symbol : 0) || _initSymbol());
    return (gblSym.v ? gblSym.v[key] : UNDEF_VALUE);
}
/*#__NO_SIDE_EFFECTS__*/
function hasSymbol() {
    return !!getSymbol();
}
/*#__NO_SIDE_EFFECTS__*/
function getSymbol() {
    !_globalLazyTestHooks && _initTestHooks();
    return ((!_globalLazyTestHooks.lzy ? _symbol : 0) || _initSymbol()).v;
}
/*#__NO_SIDE_EFFECTS__*/
function getKnownSymbol(name, noPoly) {
    var knownName = _wellKnownSymbolMap[name];
    !_globalLazyTestHooks && _initTestHooks();
    var sym = ((!_globalLazyTestHooks.lzy ? _symbol : 0) || _initSymbol());
    return sym.v ? sym.v[knownName || name] : (!noPoly ? polyGetKnownSymbol(name) : UNDEF_VALUE);
}
/*#__NO_SIDE_EFFECTS__*/
function newSymbol(description, noPoly) {
    !_globalLazyTestHooks && _initTestHooks();
    var sym = ((!_globalLazyTestHooks.lzy ? _symbol : 0) || _initSymbol());
    return sym.v ? sym.v(description) : (!noPoly ? polyNewSymbol(description) : NULL_VALUE);
}
/*#__NO_SIDE_EFFECTS__*/
function symbolFor(key) {
    !_globalLazyTestHooks && _initTestHooks();
    _symbolFor = ((!_globalLazyTestHooks.lzy ? _symbolFor : 0) || (/*#__PURE__*/createCachedValue(safe((_getSymbolKey), ["for"]).v)));
    return (_symbolFor.v || polySymbolFor)(key);
}
/*#__NO_SIDE_EFFECTS__*/
function isIterator(value) {
    return !!value && isFunction(value.next);
}
/*#__NO_SIDE_EFFECTS__*/
function isIterable(value) {
    return !isStrictNullOrUndefined(value) && isFunction(value[getKnownSymbol(3 )]);
}
var _iterSymbol$1;
function iterForOf(iter, callbackfn, thisArg) {
    if (iter) {
        if (!isIterator(iter)) {
            !_iterSymbol$1 && (_iterSymbol$1 = createCachedValue(getKnownSymbol(3 )));
            iter = iter[_iterSymbol$1.v] ? iter[_iterSymbol$1.v]() : NULL_VALUE;
        }
        if (isIterator(iter)) {
            var err = UNDEF_VALUE;
            var iterResult = UNDEF_VALUE;
            try {
                var count = 0;
                while (!(iterResult = iter.next()).done) {
                    if (callbackfn[CALL](isStrictNullOrUndefined(thisArg) ? iter : thisArg, iterResult.value, count, iter) === -1) {
                        break;
                    }
                    count++;
                }
            }
            catch (failed) {
                err = { e: failed };
                if (iter.throw) {
                    iterResult = NULL_VALUE;
                    iter.throw(err);
                }
            }
            finally {
                try {
                    if (iterResult && !iterResult.done) {
                        iter.return && iter.return(iterResult);
                    }
                }
                finally {
                    if (err) {
                        throw err.e;
                    }
                }
            }
        }
    }
}
function arrAppend(target, elms) {
    if (!isUndefined(elms) && target) {
        if (isArray(elms)) {
            fnApply(target.push, target, elms);
        }
        else if (isIterator(elms) || isIterable(elms)) {
            iterForOf(elms, function (elm) {
                target.push(elm);
            });
        }
        else {
            target.push(elms);
        }
    }
    return target;
}
var arrIndexOf = (/*#__PURE__*/_unwrapFunction("indexOf", ArrProto));
var arrMap = (/*#__PURE__*/_unwrapFunction("map", ArrProto));
function arrSlice(theArray, start, end) {
    return ((theArray ? theArray["slice"] : NULL_VALUE) || ArrSlice).apply(theArray, ArrSlice[CALL](arguments, 1));
}
/*#__NO_SIDE_EFFECTS__*/
function polyArrIncludes(theArray, searchElement, fromIndex) {
    return arrIndexOf(theArray, searchElement, fromIndex) !== -1;
}
var arrIncludes = (/*#__PURE__*/_unwrapFunctionWithPoly("includes", ArrProto, polyArrIncludes));
var getLength = (/*#__PURE__*/_unwrapProp(LENGTH));
var mathFloor = (/*#__PURE__*/_pureRef(MathCls, "floor"));
var mathCeil = (/*#__PURE__*/_pureRef(MathCls, "ceil"));
/*#__NO_SIDE_EFFECTS__*/
function createIterator(ctx) {
    var isDone = false;
    function _value() {
        return ctx.v;
    }
    function _next() {
        if (!isDone) {
            isDone = (ctx.n ? ctx.n(arguments) : true);
        }
        var result = {
            done: isDone
        };
        if (!isDone) {
            objDefine(result, "value", { g: _value });
        }
        return result;
    }
    function _return(value) {
        isDone = true;
        return {
            done: true,
            value: ctx.r && ctx.r(value)
        };
    }
    function _throw(e) {
        isDone = true;
        return {
            done: true,
            value: ctx.t && ctx.t(e)
        };
    }
    var theIterator = {
        next: _next
    };
    if (ctx.r) {
        theIterator.return = _return;
    }
    if (ctx.t) {
        theIterator.throw = _throw;
    }
    return theIterator;
}
/*#__NO_SIDE_EFFECTS__*/
function fnBindArgs(fn, thisArg, argArray) {
    return fn.bind.apply(fn, (argArray ? [thisArg].concat(argArray) : [thisArg]));
}
var _isProtoArray;
var objSetPrototypeOf = (/*#__PURE__*/_pureAssign((/*#__PURE__*/_pureRef(ObjClass, "setPrototypeOf")), _polyObjSetPrototypeOf));
function _polyObjSetPrototypeOf(obj, proto) {
    var _a;
    !_isProtoArray && (_isProtoArray = createCachedValue((_a = {}, _a[__PROTO__] = [], _a) instanceof Array));
    _isProtoArray.v ? obj[__PROTO__] = proto : objForEachKey(proto, function (key, value) { return obj[key] = value; });
    return obj;
}
/*#__NO_SIDE_EFFECTS__*/
function _createCustomError(name, d, b) {
    safe(objDefine, [d, NAME, { v: name, c: true, e: false }]);
    d = objSetPrototypeOf(d, b);
    function __() {
        this[CONSTRUCTOR] = d;
        safe(objDefine, [this, NAME, { v: name, c: true, e: false }]);
    }
    d[PROTOTYPE] = b === NULL_VALUE ? objCreate(b) : (__[PROTOTYPE] = b[PROTOTYPE], new __());
    return d;
}
function _setName(baseClass, name) {
    name && (baseClass[NAME] = name);
}
/*#__NO_SIDE_EFFECTS__*/
function createCustomError(name, constructCb, errorBase, superArgsFn) {
    var theBaseClass = errorBase || Error;
    var orgName = theBaseClass[PROTOTYPE][NAME];
    var captureFn = Error.captureStackTrace;
    return _createCustomError(name, function () {
        var _this = this;
        var theArgs = arguments;
        try {
            safe(_setName, [theBaseClass, name]);
            var _self = fnApply(theBaseClass, _this, superArgsFn ? superArgsFn(theArgs) : ArrSlice[CALL](theArgs)) || _this;
            if (_self !== _this) {
                var orgProto = objGetPrototypeOf(_this);
                if (orgProto !== objGetPrototypeOf(_self)) {
                    objSetPrototypeOf(_self, orgProto);
                }
            }
            captureFn && captureFn(_self, _this[CONSTRUCTOR]);
            constructCb && constructCb(_self, theArgs);
            return _self;
        }
        finally {
            safe(_setName, [theBaseClass, orgName]);
        }
    }, theBaseClass);
}
var strReplace = (/*#__PURE__*/_unwrapFunction("replace", StrProto));
/*#__NO_SIDE_EFFECTS__*/
function _createTrimFn(exp) {
    return function _doTrim(value) {
        _throwIfNullOrUndefined(value);
        value = asString(value);
        if (value) {
            value = strReplace(value, exp, EMPTY);
        }
        return value;
    };
}
var polyStrTrim = (/*#__PURE__*/_createTrimFn(/^\s+|(?=\s)\s+$/g));
var strTrim = (/*#__PURE__*/_unwrapFunctionWithPoly("trim", StrProto, polyStrTrim));
var strLower = (/*#__PURE__*/_unwrapFunction("toLowerCase", StrProto));
/*#__NO_SIDE_EFFECTS__*/
function safeGetDeferred(cb, defValue, argArray) {
    return getDeferred(function () {
        var result = safe(cb, argArray);
        return result.e ? defValue : result.v;
    });
}
var objGetOwnPropertyDescriptor = (/*#__PURE__*/_pureAssign((/*#__PURE__*/_pureRef(ObjClass, GET_OWN_PROPERTY_DESCRIPTOR)), _returnNothing));
var objGetOwnPropertySymbols = (/*#__PURE__*/_pureAssign((/*#__PURE__*/_pureRef(ObjClass, GET_OWN_PROPERTY_SYMBOLS)), _returnEmptyArray));
function forEachOwnKey(theObject, callbackfn, thisArg) {
    if (theObject !== NULL_VALUE && theObject !== UNDEF_VALUE) {
        for (var prop in theObject) {
            if (objHasOwn(theObject, prop)) {
                if (callbackfn[CALL](isStrictNullOrUndefined(thisArg) ? theObject : thisArg, prop, theObject[prop]) === -1) {
                    return;
                }
            }
        }
        arrForEach(objGetOwnPropertySymbols(theObject), function (key) {
            if (_objPropertyIsEnumerable(theObject, key)) {
                if (callbackfn[CALL](isStrictNullOrUndefined(thisArg) ? theObject : thisArg, key, theObject[key]) === -1) {
                    return -1;
                }
            }
        });
    }
}
function forEachOwnKeySafe(theObject, callbackfn, thisArg) {
    forEachOwnKey(theObject, function (key, value) {
        if (!isUnsafePropKey(key)) {
            return callbackfn[CALL](isStrictNullOrUndefined(thisArg) ? theObject : thisArg, key, value);
        }
    }, thisArg);
}
var _fnToString;
var _objCtrFnString;
var _gblWindow;
/*#__NO_SIDE_EFFECTS__*/
function isPlainObject(value) {
    if (!value || typeof value !== OBJECT) {
        return false;
    }
    if (!_gblWindow) {
        _gblWindow = hasWindow() ? getWindow() : true;
    }
    var result = false;
    if (value !== _gblWindow) {
        if (!_objCtrFnString) {
            _fnToString = Function[PROTOTYPE][TO_STRING];
            _objCtrFnString = _fnToString[CALL](ObjClass);
        }
        try {
            var proto = objGetPrototypeOf(value);
            result = !proto;
            if (!result) {
                if (objHasOwnProperty(proto, CONSTRUCTOR)) {
                    proto = proto[CONSTRUCTOR];
                }
                result = !!(proto && typeof proto === FUNCTION && _fnToString[CALL](proto) === _objCtrFnString);
            }
        }
        catch (ex) {
        }
    }
    return result;
}
var _unsafeTargets;
/*#__NO_SIDE_EFFECTS__*/
function _addTargetProto(targets, ctor) {
}
/*#__NO_SIDE_EFFECTS__*/
function _getUnsafeTargets() {
    var targets = [
        ObjProto,
        StrProto,
        ArrProto,
        NumberProto,
        FuncProto,
        DateProto,
        RegExpProto,
        BooleanProto,
        ErrorProto
    ];
    _addTargetProto(targets, safe(getInst, ["Map"]).v);
    _addTargetProto(targets, safe(getInst, ["Set"]).v);
    _addTargetProto(targets, safe(getInst, ["WeakMap"]).v);
    _addTargetProto(targets, safe(getInst, ["WeakSet"]).v);
    _addTargetProto(targets, safe(getInst, ["Promise"]).v);
    _addTargetProto(targets, safe(getInst, ["Symbol"]).v);
    _addTargetProto(targets, safe(getInst, ["ArrayBuffer"]).v);
    _addTargetProto(targets, safe(getInst, ["SharedArrayBuffer"]).v);
    _addTargetProto(targets, safe(getInst, ["DataView"]).v);
    _addTargetProto(targets, safe(getInst, ["Int8Array"]).v);
    _addTargetProto(targets, safe(getInst, ["Uint8Array"]).v);
    _addTargetProto(targets, safe(getInst, ["Uint8ClampedArray"]).v);
    _addTargetProto(targets, safe(getInst, ["Int16Array"]).v);
    _addTargetProto(targets, safe(getInst, ["Uint16Array"]).v);
    _addTargetProto(targets, safe(getInst, ["Int32Array"]).v);
    _addTargetProto(targets, safe(getInst, ["Uint32Array"]).v);
    _addTargetProto(targets, safe(getInst, ["Float32Array"]).v);
    _addTargetProto(targets, safe(getInst, ["Float64Array"]).v);
    _addTargetProto(targets, safe(getInst, ["BigInt64Array"]).v);
    _addTargetProto(targets, safe(getInst, ["BigUint64Array"]).v);
    _addTargetProto(targets, safe(getInst, ["WeakRef"]).v);
    _addTargetProto(targets, safe(getInst, ["FinalizationRegistry"]).v);
    return targets;
}
/*#__NO_SIDE_EFFECTS__*/
function isUnsafeTarget(target) {
    if (!_unsafeTargets) {
        _unsafeTargets = createCachedValue(_getUnsafeTargets());
    }
    return arrIndexOf(_unsafeTargets.v, target) >= 0;
}
/*#__NO_SIDE_EFFECTS__*/
function _defaultDeepCopyHandler(details) {
    details.value && plainObjDeepCopyHandler(details);
    return true;
}
var defaultDeepCopyHandlers = [
    arrayDeepCopyHandler,
    plainObjDeepCopyHandler,
    functionDeepCopyHandler,
    dateDeepCopyHandler
];
/*#__NO_SIDE_EFFECTS__*/
function _getSetVisited(visitMap, source, newPath, cb) {
    var theEntry;
    arrForEach(visitMap, function (entry) {
        if (entry.k === source) {
            theEntry = entry;
            return -1;
        }
    });
    if (!theEntry) {
        theEntry = { k: source, v: source };
        visitMap.push(theEntry);
        cb(theEntry);
    }
    return theEntry.v;
}
function _deepCopy(visitMap, value, ctx, key) {
    var userHandler = ctx.handler;
    var newPath = ctx.path ? (key ? ctx.path.concat(key) : ctx.path) : [];
    var newCtx = {
        handler: ctx.handler,
        src: ctx.src,
        path: newPath
    };
    var theType = typeof value;
    var isPlain = false;
    var isPrim = value === NULL_VALUE;
    if (!isPrim) {
        if (value && theType === OBJECT) {
            isPlain = isPlainObject(value);
        }
        else {
            isPrim = isPrimitiveType(theType);
        }
    }
    var details = {
        type: theType,
        isPrim: isPrim,
        isPlain: isPlain,
        value: value,
        result: value,
        path: newPath,
        origin: ctx.src,
        copy: function (source, newKey) {
            return _deepCopy(visitMap, source, newKey ? newCtx : ctx, newKey);
        },
        copyTo: function (target, source) {
            return _copyProps(visitMap, target, source, newCtx);
        }
    };
    if (!details.isPrim) {
        return _getSetVisited(visitMap, value, newPath, function (newEntry) {
            objDefine(details, "result", {
                g: function () {
                    return newEntry.v;
                },
                s: function (newValue) {
                    newEntry.v = newValue;
                }
            });
            var idx = 0;
            var handler = userHandler;
            while (!(handler || (idx < defaultDeepCopyHandlers.length ? defaultDeepCopyHandlers[idx++] : _defaultDeepCopyHandler))[CALL](ctx, details)) {
                handler = NULL_VALUE;
            }
        });
    }
    if (userHandler && userHandler[CALL](ctx, details)) {
        return details.result;
    }
    return value;
}
function _copyProps(visitMap, target, source, ctx) {
    if (!isUnsafeTarget(source)) {
        forEachOwnKeySafe(source, function (key, value) {
            target[key] = _deepCopy(visitMap, value, ctx, key);
        });
    }
    return target;
}
function objCopyProps(target, source, handler) {
    var ctx = {
        handler: handler,
        src: source,
        path: []
    };
    return _copyProps([], target, source, ctx);
}
/*#__NO_SIDE_EFFECTS__*/
function objDeepCopy(source, handler) {
    var ctx = {
        handler: handler,
        src: source
    };
    return _deepCopy([], source, ctx);
}
function arrayDeepCopyHandler(details) {
    var value = details.value;
    if (isArray(value)) {
        var target = details.result = [];
        target.length = value.length;
        details.copyTo(target, value);
        return true;
    }
    return false;
}
function dateDeepCopyHandler(details) {
    var value = details.value;
    if (isDate(value)) {
        details.result = new Date(value.getTime());
        return true;
    }
    return false;
}
function functionDeepCopyHandler(details) {
    if (details.type === FUNCTION) {
        return true;
    }
    return false;
}
function plainObjDeepCopyHandler(details) {
    var value = details.value;
    if (value && details.isPlain) {
        var target = details.result = {};
        details.copyTo(target, value);
        return true;
    }
    return false;
}
function _doExtend(target, theArgs) {
    arrForEach(theArgs, function (theArg) {
        objCopyProps(target, theArg);
    });
    return target;
}
function deepExtend(target, obj1, obj2, obj3, obj4, obj5, obj6) {
    return _doExtend(objDeepCopy(target) || {}, ArrSlice[CALL](arguments));
}
var strSplit = (/*#__PURE__*/_unwrapFunction("split", StrProto));
var _perf;
/*#__NO_SIDE_EFFECTS__*/
function getPerformance() {
    !_globalLazyTestHooks && _initTestHooks();
    if (!_perf || _globalLazyTestHooks.lzy) {
        _perf = createCachedValue(safe((getInst), ["performance"]).v);
    }
    return _perf.v;
}
/*#__NO_SIDE_EFFECTS__*/
function perfNow() {
    var perf = getPerformance();
    if (perf && perf.now) {
        return perf.now();
    }
    return utcNow();
}
var mathRound = (/*#__PURE__*/_pureRef(MathCls, "round"));
var strIndexOf = (/*#__PURE__*/_unwrapFunction("indexOf", StrProto));
var strEndsWith = (/*#__PURE__*/_unwrapFunctionWithPoly("endsWith", StrProto, polyStrEndsWith));
/*#__NO_SIDE_EFFECTS__*/
function polyStrEndsWith(value, searchString, length) {
    _throwIfNotString(value);
    var searchValue = isString(searchString) ? searchString : asString(searchString);
    var end = (!isUndefined(length) && length < value[LENGTH]) ? length : value[LENGTH];
    return strSubstring(value, end - searchValue[LENGTH], end) === searchValue;
}
var strStartsWith = (/*#__PURE__*/_unwrapFunctionWithPoly("startsWith", StrProto, polyStrStartsWith));
/*#__NO_SIDE_EFFECTS__*/
function polyStrStartsWith(value, searchString, position) {
    _throwIfNotString(value);
    var searchValue = isString(searchString) ? searchString : asString(searchString);
    var pos = position > 0 ? position : 0;
    return strSubstring(value, pos, pos + searchValue[LENGTH]) === searchValue;
}
var REF = "ref";
var UNREF = "unref";
var HAS_REF = "hasRef";
var ENABLED = "enabled";
/*#__NO_SIDE_EFFECTS__*/
function _createTimerHandler(startTimer, refreshFn, cancelFn) {
    var ref = true;
    var timerId = startTimer ? refreshFn(NULL_VALUE) : NULL_VALUE;
    var theTimerHandler;
    function _unref() {
        ref = false;
        timerId && timerId[UNREF] && timerId[UNREF]();
        return theTimerHandler;
    }
    function _cancel() {
        timerId && cancelFn(timerId);
        timerId = NULL_VALUE;
    }
    function _refresh() {
        timerId = refreshFn(timerId);
        if (!ref) {
            _unref();
        }
        return theTimerHandler;
    }
    function _setEnabled(value) {
        !value && timerId && _cancel();
        value && !timerId && _refresh();
    }
    theTimerHandler = {
        cancel: _cancel,
        refresh: _refresh
    };
    theTimerHandler[HAS_REF] = function () {
        if (timerId && timerId[HAS_REF]) {
            return timerId[HAS_REF]();
        }
        return ref;
    };
    theTimerHandler[REF] = function () {
        ref = true;
        timerId && timerId[REF] && timerId[REF]();
        return theTimerHandler;
    };
    theTimerHandler[UNREF] = _unref;
    theTimerHandler = objDefineProp(theTimerHandler, ENABLED, {
        get: function () { return !!timerId; },
        set: _setEnabled
    });
    return {
        h: theTimerHandler,
        dn: function () {
            timerId = NULL_VALUE;
        }
    };
}
var _setTimeoutFn;
var _clearTimeoutFn;
var _microtaskCallback;
function _resolveTimeoutFn(timeoutFn) {
    var result = isFunction(timeoutFn) ? timeoutFn : _setTimeoutFn;
    if (!result) {
        var globalOverrides = _getGlobalConfig().tmOut || [];
        if (isArray(globalOverrides) && globalOverrides.length > 0 && isFunction(globalOverrides[0])) {
            result = globalOverrides[0];
        }
    }
    return result || setTimeout;
}
function _resolveClearTimeoutFn(timeoutFn) {
    var result = isFunction(timeoutFn) ? timeoutFn : _clearTimeoutFn;
    if (!result) {
        var globalOverrides = _getGlobalConfig().tmOut || [];
        if (isArray(globalOverrides) && globalOverrides.length > 1 && isFunction(globalOverrides[1])) {
            result = globalOverrides[1];
        }
    }
    return result || clearTimeout;
}
function _createTimeoutWith(startTimer, overrideFn, theArgs) {
    var isArr = isArray(overrideFn);
    var len = isArr ? overrideFn.length : 0;
    var setFn = _resolveTimeoutFn(len > 0 ? overrideFn[0] : (!isArr ? overrideFn : UNDEF_VALUE));
    var clearFn = _resolveClearTimeoutFn(len > 1 ? overrideFn[1] : UNDEF_VALUE);
    var timerFn = theArgs[0];
    theArgs[0] = function () {
        var microTasksFn = _microtaskCallback;
        if (microTasksFn) {
            _microtaskCallback = UNDEF_VALUE;
            microTasksFn();
        }
        handler.dn();
        fnApply(timerFn, UNDEF_VALUE, ArrSlice[CALL](arguments));
    };
    var handler = _createTimerHandler(startTimer, function (timerId) {
        if (timerId) {
            if (timerId.refresh) {
                timerId.refresh();
                return timerId;
            }
            fnApply(clearFn, UNDEF_VALUE, [timerId]);
        }
        return fnApply(setFn, UNDEF_VALUE, theArgs);
    }, function (timerId) {
        fnApply(clearFn, UNDEF_VALUE, [timerId]);
    });
    return handler.h;
}
function _setMicrotaskCallback(queueFn) {
    if (!_microtaskCallback && isFunction(queueFn)) {
        _microtaskCallback = queueFn;
    }
}
function scheduleTimeout(callback, timeout) {
    return _createTimeoutWith(true, UNDEF_VALUE, ArrSlice[CALL](arguments));
}
function scheduleTimeoutWith(overrideFn, callback, timeout) {
    return _createTimeoutWith(true, overrideFn, ArrSlice[CALL](arguments, 1));
}
function createTimeout(callback, timeout) {
    return _createTimeoutWith(false, UNDEF_VALUE, ArrSlice[CALL](arguments));
}
function _createCancellableTask(callback, queueFn, maxQueuedTasks) {
    var handler;
    var currentTask = 0;
    function _scheduleTask() {
        var taskId = ++currentTask;
        var queued = queueFn(function () {
            if (taskId === currentTask) {
                handler.dn();
                callback();
            }
        }, maxQueuedTasks);
        if (queued === false) {
            handler.dn();
        }
        return taskId;
    }
    function _cancelTask(taskId) {
        if (taskId === currentTask) {
            currentTask++;
        }
    }
    handler = _createTimerHandler(false, _scheduleTask, _cancelTask);
    handler.h.refresh();
    return handler.h;
}
function _runMicroTask(callback) {
    try {
        if (callback) {
            callback();
        }
    }
    catch (e) {
        scheduleTimeout(function () {
            throw e;
        }, 0);
    }
}
var _taskQueues;
function _flushQueues() {
    if (_taskQueues) {
        _taskQueues[1 ] && _flushTaskQueue(1 );
        _taskQueues[0 ] && _flushTaskQueue(0 );
    }
}
function _flushTaskQueue(queueType) {
    if (_taskQueues) {
        var queue = _taskQueues[queueType];
        var queueIdx = 0;
        while (queue && queue.length > queueIdx) {
            _runMicroTask(queue[queueIdx++]);
            if (queueType === 0  && _taskQueues[1 ]) {
                _flushTaskQueue(1 );
            }
        }
        _taskQueues[queueType] = UNDEF_VALUE;
    }
}
function _addToQueue(queueType, callback, maxQueuedTasks) {
    var result = false;
    if (!_taskQueues) {
        _taskQueues = {};
    }
    var queue = _taskQueues[queueType];
    if (!queue) {
        queue = [];
        _taskQueues[queueType] = queue;
    }
    if (isStrictUndefined(maxQueuedTasks) || maxQueuedTasks === 0 || (queue.length < maxQueuedTasks)) {
        queue.push(callback);
        result = true;
    }
    else {
        throwRangeError("schedule" + (queueType === 0  ? "Microtask" : "NextTick") + "() queue depth exceeded [" + maxQueuedTasks + "]");
    }
    return result;
}
var _promiseCls$2;
var _promisePending = false;
var _pendingPromiseCls;
var _promiseQueueFns;
function _ensurePromiseTask(promiseCls) {
    if (_promisePending && _pendingPromiseCls !== promiseCls) {
        _promisePending = false;
    }
    if (!_promisePending) {
        _promisePending = true;
        _pendingPromiseCls = promiseCls;
        try {
            promiseCls.resolve().then(function () {
                _promisePending = false;
                _pendingPromiseCls = undefined;
                _flushQueues();
            });
        }
        catch (e) {
            _promisePending = false;
            _pendingPromiseCls = undefined;
            _flushQueues();
        }
    }
}
function _promiseScheduleFn(promiseCls, queueType) {
    return function (callback, maxQueuedTasks) {
        var added = _addToQueue(queueType, callback, maxQueuedTasks);
        if (added) {
            _ensurePromiseTask(promiseCls);
        }
        return added;
    };
}
function _getPromiseQueueFn(queueType) {
    !_globalLazyTestHooks && _initTestHooks();
    if (!_promiseCls$2 || _globalLazyTestHooks.lzy) {
        var promClass = getInst("Promise");
        if (promClass && isFunction(promClass.resolve)) {
            _promiseCls$2 = createCachedValue(promClass);
            _promiseQueueFns = undefined;
        }
        else {
            _promiseCls$2 = undefined;
            _promiseQueueFns = undefined;
            _promisePending = false;
            _pendingPromiseCls = undefined;
        }
    }
    var result;
    if (_promiseCls$2 && _promiseCls$2.v) {
        !_promiseQueueFns && (_promiseQueueFns = {});
        result = _promiseQueueFns[queueType];
        if (!result) {
            result = _promiseScheduleFn(_promiseCls$2.v, queueType);
            _promiseQueueFns[queueType] = result;
        }
    }
    return result;
}
function _resolveScheduleFn(options, defaultOptions, taskQueueType) {
    var resolvedFn = (options && options.scheduleFn) || (defaultOptions && defaultOptions.scheduleFn);
    if (!resolvedFn) {
        var usePromise = !((options && !isStrictUndefined(options.useTimeout))
            ? options.useTimeout
            : (defaultOptions && defaultOptions.useTimeout));
        if (usePromise) {
            resolvedFn = _getPromiseQueueFn(taskQueueType);
        }
    }
    return resolvedFn;
}
var _sharedTimer;
var _isFlushing = false;
function _doFlush() {
    try {
        _isFlushing = true;
        _flushQueues();
    }
    finally {
        _isFlushing = false;
    }
}
function _ensureSharedTimer() {
    if (_isFlushing) {
        return;
    }
    _setMicrotaskCallback(_doFlush);
    var handler = _sharedTimer;
    if (!handler) {
        _sharedTimer = scheduleTimeout(_returnNothing, 0);
    }
    else if (!handler.enabled) {
        handler.refresh();
    }
}
function _addMicrotaskQueue(callback, maxQueuedTasks) {
    return _addToQueueWithTimer(0 , callback, maxQueuedTasks);
}
function _addToQueueWithTimer(queueType, callback, maxQueuedTasks) {
    var result = _addToQueue(queueType, callback, maxQueuedTasks);
    if (result) {
        _ensureSharedTimer();
    }
    return result;
}
var _defaultOptions$1;
function scheduleMicrotask(callback, argsOrOptions, options) {
    var callbackArgs;
    var theOptions;
    if (arguments.length > 1 && argsOrOptions && isArray(argsOrOptions)) {
        callbackArgs = argsOrOptions;
        theOptions = options;
    }
    else {
        theOptions = argsOrOptions;
    }
    var taskCallback = callbackArgs ? fnBindArgs(callback, UNDEF_VALUE, callbackArgs) : callback;
    var queueMicrotaskFn = getQueueMicrotask();
    if (!queueMicrotaskFn) {
        queueMicrotaskFn = _resolveScheduleFn(theOptions, _defaultOptions$1, 0 );
    }
    return _createCancellableTask(taskCallback, queueMicrotaskFn || _addMicrotaskQueue);
}

(getGlobal() || {})["Symbol"];
(getGlobal() || {})["Reflect"];
var strHasOwnProperty = "hasOwnProperty";
var __objAssignFnImpl = function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (ObjProto$1[strHasOwnProperty].call(s, p)) {
                t[p] = s[p];
            }
        }
    }
    return t;
};
var __assignFn = objAssign || __objAssignFnImpl;
var extendStaticsFn = function (d, b) {
    extendStaticsFn = ObjClass$1["setPrototypeOf"] ||
        ({ __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        }) ||
        function (d, b) {
            for (var p in b) {
                if (b[strHasOwnProperty](p)) {
                    d[p] = b[p];
                }
            }
        };
    return extendStaticsFn(d, b);
};
function __extendsFn(d, b) {
    if (typeof b !== strShimFunction && b !== null) {
        throwTypeError("Class extends value " + String(b) + " is not a constructor or null");
    }
    extendStaticsFn(d, b);
    function __() {
        this.constructor = d;
    }
    d[strShimPrototype] = b === null ? objCreate(b) : (__[strShimPrototype] = b[strShimPrototype], new __());
}
function __spreadArrayFn(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
        to[j] = from[i];
    }
    return to;
}

var _a$8;
var Constructor = 'constructor';
var Prototype = 'prototype';
var strFunction = 'function';
var DynInstFuncTable = '_dynInstFuncs';
var DynProxyTag = '_isDynProxy';
var DynClassName = '_dynClass';
var DynBaseProtoFuncs = '_dynBaseFuncs';
var DynClassNamePrefix = '_dynCls$';
var DynInstChkTag = '_dynInstChk';
var DynAllowInstChkTag = DynInstChkTag;
var DynResolvedCachePrefix = '_dyn_r$';
var DynProtoDefaultOptions = '_dfOpts';
var UnknownValue = '_unknown_';
var str__Proto = "__proto__";
var DynProtoBaseProto = "_dyn" + str__Proto;
var DynProtoGlobalSettings = "__dynProto$Gbl";
var DynProtoCurrent = "_dynInstProto";
var strUseBaseInst = 'useBaseInst';
var strSetInstFuncs = 'setInstFuncs';
var Obj = Object;
var _objGetPrototypeOf = Obj["getPrototypeOf"];
var _objGetOwnProps = Obj["getOwnPropertyNames"];
var _gbl = getGlobal();
var _gblInst = _gbl[DynProtoGlobalSettings] || (_gbl[DynProtoGlobalSettings] = {
    o: (_a$8 = {},
        _a$8[strSetInstFuncs] = true,
        _a$8[strUseBaseInst] = true,
        _a$8),
    n: 1000
});
function _isObjectOrArrayPrototype(target) {
    return target && (target === Obj[Prototype] || target === Array[Prototype]);
}
function _isObjectArrayOrFunctionPrototype(target) {
    return _isObjectOrArrayPrototype(target) || target === Function[Prototype];
}
function _getObjProto$1(target) {
    var newProto;
    if (target) {
        if (_objGetPrototypeOf) {
            return _objGetPrototypeOf(target);
        }
        var curProto = target[str__Proto] || target[Prototype] || (target[Constructor] ? target[Constructor][Prototype] : null);
        newProto = target[DynProtoBaseProto] || curProto;
        if (!objHasOwnProperty(target, DynProtoBaseProto)) {
            delete target[DynProtoCurrent];
            newProto = target[DynProtoBaseProto] = target[DynProtoCurrent] || target[DynProtoBaseProto];
            target[DynProtoCurrent] = curProto;
        }
    }
    return newProto;
}
function _forEachProp(target, func) {
    var props = [];
    if (_objGetOwnProps) {
        props = _objGetOwnProps(target);
    }
    else {
        for (var name_1 in target) {
            if (typeof name_1 === "string" && objHasOwnProperty(target, name_1)) {
                props.push(name_1);
            }
        }
    }
    if (props && props.length > 0) {
        for (var lp = 0; lp < props.length; lp++) {
            func(props[lp]);
        }
    }
}
function _isDynamicCandidate(target, funcName, skipOwn) {
    return (funcName !== Constructor && typeof target[funcName] === strFunction && (skipOwn || objHasOwnProperty(target, funcName)) && funcName !== str__Proto && funcName !== Prototype);
}
function _throwTypeError(message) {
    throwTypeError("DynamicProto: " + message);
}
function _getInstanceFuncs(thisTarget) {
    var instFuncs = objCreate(null);
    _forEachProp(thisTarget, function (name) {
        if (!instFuncs[name] && _isDynamicCandidate(thisTarget, name, false)) {
            instFuncs[name] = thisTarget[name];
        }
    });
    return instFuncs;
}
function _hasVisited(values, value) {
    for (var lp = values.length - 1; lp >= 0; lp--) {
        if (values[lp] === value) {
            return true;
        }
    }
    return false;
}
function _getBaseProtoFuncs(classProto) {
    if (objHasOwnProperty(classProto, DynBaseProtoFuncs)) {
        return classProto[DynBaseProtoFuncs];
    }
    var baseFuncSources = objCreate(null);
    var baseProto = _getObjProto$1(classProto);
    var visited = [];
    while (baseProto && !_isObjectArrayOrFunctionPrototype(baseProto) && !_hasVisited(visited, baseProto)) {
        _forEachProp(baseProto, function (name) {
            if (!baseFuncSources[name] && _isDynamicCandidate(baseProto, name, !_objGetPrototypeOf)) {
                baseFuncSources[name] = baseProto;
            }
        });
        visited.push(baseProto);
        baseProto = _getObjProto$1(baseProto);
    }
    classProto[DynBaseProtoFuncs] = baseFuncSources;
    return baseFuncSources;
}
function _getBaseFuncs(classProto, thisTarget, instFuncs, useBaseInst) {
    function _instFuncProxy(target, funcHost, funcName) {
        var theFunc = funcHost[funcName];
        if (theFunc[DynProxyTag] && useBaseInst) {
            var instFuncTable = target[DynInstFuncTable] || {};
            if (instFuncTable[DynAllowInstChkTag] !== false) {
                theFunc = (instFuncTable[funcHost[DynClassName]] || {})[funcName] || theFunc;
            }
        }
        return function () {
            return theFunc.apply(target, arguments);
        };
    }
    var baseFuncs = objCreate(null);
    _forEachProp(instFuncs, function (name) {
        baseFuncs[name] = _instFuncProxy(thisTarget, instFuncs, name);
    });
    var baseFuncSources = _getBaseProtoFuncs(classProto);
    for (var name_2 in baseFuncSources) {
        if (!baseFuncs[name_2]) {
            baseFuncs[name_2] = _instFuncProxy(thisTarget, baseFuncSources[name_2], name_2);
        }
    }
    return baseFuncs;
}
function _getInstFunc(target, funcName, proto, currentDynProtoProxy) {
    var instFunc = null;
    if (target && objHasOwnProperty(proto, DynClassName)) {
        var instFuncTable = target[DynInstFuncTable] || objCreate(null);
        instFunc = (instFuncTable[proto[DynClassName]] || objCreate(null))[funcName];
        if (!instFunc) {
            _throwTypeError("Missing [" + funcName + "] " + strFunction);
        }
        if (!instFunc[DynInstChkTag] && instFuncTable[DynAllowInstChkTag] !== false) {
            var canAddInst = !objHasOwnProperty(target, funcName);
            if (canAddInst) {
                var objProto = _getObjProto$1(target);
                var visited = [];
                while (objProto && !_isObjectArrayOrFunctionPrototype(objProto) && !_hasVisited(visited, objProto)) {
                    var protoFunc = objProto[funcName];
                    if (protoFunc) {
                        canAddInst = (protoFunc === currentDynProtoProxy);
                        break;
                    }
                    visited.push(objProto);
                    objProto = _getObjProto$1(objProto);
                }
            }
            try {
                if (canAddInst) {
                    target[funcName] = instFunc;
                }
                instFunc[DynInstChkTag] = 1;
            }
            catch (e) {
                instFuncTable[DynAllowInstChkTag] = false;
            }
        }
    }
    return instFunc;
}
function _getProtoFunc(funcName, proto, currentDynProtoProxy) {
    var protoFunc = proto[funcName];
    if (protoFunc === currentDynProtoProxy) {
        protoFunc = _getObjProto$1(proto)[funcName];
    }
    if (typeof protoFunc !== strFunction) {
        _throwTypeError("[" + funcName + "] is not a " + strFunction);
    }
    return protoFunc;
}
function _populatePrototype(proto, className, target, baseInstFuncs, setInstanceFunc) {
    function _createDynamicPrototype(proto, funcName) {
        var cacheKey = DynResolvedCachePrefix + className + "." + funcName;
        var dynProtoProxy = function () {
            var instFuncTable = this[DynInstFuncTable];
            var instFunc = instFuncTable ? instFuncTable[cacheKey] : undefined;
            if (!instFunc) {
                instFunc = _getInstFunc(this, funcName, proto, dynProtoProxy) || _getProtoFunc(funcName, proto, dynProtoProxy);
                if (instFuncTable) {
                    instFuncTable[cacheKey] = instFunc;
                }
            }
            return instFunc.apply(this, arguments);
        };
        dynProtoProxy[DynProxyTag] = 1;
        return dynProtoProxy;
    }
    if (!_isObjectOrArrayPrototype(proto)) {
        var instFuncTable_1 = target[DynInstFuncTable] = target[DynInstFuncTable] || objCreate(null);
        if (!_isObjectOrArrayPrototype(instFuncTable_1)) {
            var instFuncs_1 = instFuncTable_1[className] = (instFuncTable_1[className] || objCreate(null));
            if (instFuncTable_1[DynAllowInstChkTag] !== false) {
                instFuncTable_1[DynAllowInstChkTag] = !!setInstanceFunc;
            }
            if (!_isObjectOrArrayPrototype(instFuncs_1)) {
                _forEachProp(target, function (name) {
                    if (_isDynamicCandidate(target, name, false) && target[name] !== baseInstFuncs[name]) {
                        instFuncs_1[name] = target[name];
                        delete target[name];
                        delete instFuncTable_1[DynResolvedCachePrefix + className + "." + name];
                        if (!objHasOwnProperty(proto, name) || (proto[name] && !proto[name][DynProxyTag])) {
                            proto[name] = _createDynamicPrototype(proto, name);
                        }
                    }
                });
            }
        }
    }
}
function _checkPrototype(classProto, thisTarget) {
    if (_objGetPrototypeOf) {
        var visited = [];
        var thisProto = _getObjProto$1(thisTarget);
        while (thisProto && !_isObjectArrayOrFunctionPrototype(thisProto) && !_hasVisited(visited, thisProto)) {
            if (thisProto === classProto) {
                return true;
            }
            visited.push(thisProto);
            thisProto = _getObjProto$1(thisProto);
        }
        return false;
    }
    return true;
}
function _getObjName(target, unknownValue) {
    if (objHasOwnProperty(target, Prototype)) {
        return target.name || unknownValue || UnknownValue;
    }
    return (((target || {})[Constructor]) || {}).name || unknownValue || UnknownValue;
}
function dynamicProto(theClass, target, delegateFunc, options) {
    if (!objHasOwnProperty(theClass, Prototype)) {
        _throwTypeError("theClass is an invalid class definition.");
    }
    var classProto = theClass[Prototype];
    if (!_checkPrototype(classProto, target)) {
        _throwTypeError("[" + _getObjName(theClass) + "] not in hierarchy of [" + _getObjName(target) + "]");
    }
    var className = null;
    if (objHasOwnProperty(classProto, DynClassName)) {
        className = classProto[DynClassName];
    }
    else {
        className = DynClassNamePrefix + _getObjName(theClass, "_") + "$" + _gblInst.n;
        _gblInst.n++;
        classProto[DynClassName] = className;
    }
    var perfOptions = dynamicProto[DynProtoDefaultOptions];
    var useBaseInst = !!perfOptions[strUseBaseInst];
    if (useBaseInst && options && options[strUseBaseInst] !== undefined) {
        useBaseInst = !!options[strUseBaseInst];
    }
    var instFuncs = _getInstanceFuncs(target);
    var baseFuncs = _getBaseFuncs(classProto, target, instFuncs, useBaseInst);
    delegateFunc(target, baseFuncs);
    var setInstanceFunc = !!_objGetPrototypeOf && !!perfOptions[strSetInstFuncs];
    if (setInstanceFunc && options) {
        setInstanceFunc = !!options[strSetInstFuncs];
    }
    _populatePrototype(classProto, className, target, instFuncs, setInstanceFunc !== false);
}
dynamicProto[DynProtoDefaultOptions] = _gblInst.o;

var MinChannelPriorty = 100;

var createEnumStyle = createEnum;
var createValueMap = createTypeMap;

var EventsDiscardedReason = (/*@__PURE__*/createEnumStyle({
    Unknown: 0 ,
    NonRetryableStatus: 1 ,
    InvalidEvent: 2 ,
    SizeLimitExceeded: 3 ,
    KillSwitch: 4 ,
    QueueFull: 5 ,
    BeaconSendFailure: 6
}));

var ActiveStatus = (/*@__PURE__*/createEnumStyle({
    NONE: 0 ,
    PENDING: 3 ,
    INACTIVE: 1 ,
    ACTIVE: 2
}));

var _DYN_TO_LOWER_CASE$1 = "toLowerCase";
var _DYN_LENGTH$2 = "length";
var _DYN_WARN_TO_CONSOLE = "warnToConsole";
var _DYN_THROW_INTERNAL = "throwInternal";
var _DYN_WATCH = "watch";
var _DYN_APPLY = "apply";
var _DYN_PUSH$1 = "push";
var _DYN_SPLICE = "splice";
var _DYN_LOGGER = "logger";
var _DYN_CANCEL = "cancel";
var _DYN_INITIALIZE$1 = "initialize";
var _DYN_IDENTIFIER$1 = "identifier";
var _DYN_REMOVE_NOTIFICATION_0 = "removeNotificationListener";
var _DYN_ADD_NOTIFICATION_LIS1 = "addNotificationListener";
var _DYN_STRINGIFY = "stringify";
var _DYN_TRACE_ID = "traceId";
var _DYN_SPAN_ID = "spanId";
var _DYN_TRACE_FLAGS = "traceFlags";
var _DYN_IS_INITIALIZED = "isInitialized";
var _DYN_TRACE_HDR_MODE = "traceHdrMode";
var _DYN_GET_NOTIFY_MGR = "getNotifyMgr";
var _DYN_GET_PLUGIN = "getPlugin";
var _DYN_TRACK$1 = "track";
var _DYN_NAME = "name";
var _DYN_I_KEY$1 = "iKey";
var _DYN_TIME = "time";
var _DYN_PROCESS_NEXT = "processNext";
var _DYN_GET_PROCESS_TEL_CONT2 = "getProcessTelContext";
var _DYN_POLL_INTERNAL_LOGS = "pollInternalLogs";
var _DYN_VALUE = "value";
var _DYN_ENABLED = "enabled";
var _DYN_STOP_POLLING_INTERNA3 = "stopPollingInternalLogs";
var _DYN_UNLOAD = "unload";
var _DYN_ON_COMPLETE = "onComplete";
var _DYN_REASON = "reason";
var _DYN_FLUSH = "flush";
var _DYN_GET_TRACE_CTX$1 = "getTraceCtx";
var _DYN_SET_TRACE_CTX = "setTraceCtx";
var _DYN_GET_ACTIVE_SPAN = "getActiveSpan";
var _DYN_SET_ACTIVE_SPAN = "setActiveSpan";
var _DYN_SPAN_CONTEXT = "spanContext";
var _DYN_PARENT_SPAN_CONTEXT = "parentSpanContext";
var _DYN_PARENT_SPAN_ID = "parentSpanId";
var _DYN_LOGGING_LEVEL_CONSOL4 = "loggingLevelConsole";
var _DYN_JOIN = "join";
var _DYN_CREATE_NEW = "createNew";
var _DYN_TEARDOWN = "teardown";
var _DYN_MESSAGE_ID = "messageId";
var _DYN_MESSAGE = "message";
var _DYN_ATTRIBUTE_COUNT_LIMI5 = "attributeCountLimit";
var _DYN_SUPPRESS_TRACING = "suppressTracing";
var _DYN_NOT_IMPLEMENTED = "notImplemented";
var _DYN_DIAG_LOG$1 = "diagLog";
var _DYN__DO_TEARDOWN = "_doTeardown";
var _DYN_UPDATE = "update";
var _DYN_GET_NEXT = "getNext";
var _DYN_SET_NEXT_PLUGIN = "setNextPlugin";
var _DYN_SPLIT$1 = "split";
var _DYN_IS_CHILD_EVT = "isChildEvt";
var _DYN_DATA = "data";
var _DYN_GET_CTX = "getCtx";
var _DYN_SET_CTX = "setCtx";
var _DYN_CONFIG$1 = "config";
var _DYN_CALL = "call";
var _DYN_HEADERS$1 = "headers";
var _DYN_URL_STRING = "urlString";
var _DYN_TIMEOUT = "timeout";
var _DYN_STATUS = "status";
var _DYN_REPLACE = "replace";
var _DYN_HOST = "host";
var _DYN_HAS_OWN_PROPERTY = "hasOwnProperty";
var _DYN_EXCEPTION = "exception";
var _DYN_INDEX_OF = "indexOf";
var _DYN_TYPE = "type";
var _DYN_MATCH = "match";
var _DYN_SET_TRACE_FLAGS = "setTraceFlags";
var _DYN_PATHNAME = "pathname";
var _DYN_TRACE_STATE = "traceState";
var _DYN_TIMINGS$1 = "timings";
var _DYN_BASE_DATA = "baseData";
var _DYN_PROPERTIES$1 = "properties";
var _DYN_USER_AGENT = "userAgent";
var _DYN_ATTRIBUTES = "attributes";
var _DYN_KIND = "kind";
var _DYN_START_TIME$1 = "startTime";
var _DYN_DURATION$1 = "duration";
var _DYN_TO_STRING$1 = "toString";
var _DYN_PROCESS_TELEMETRY_ST6 = "processTelemetryStart";
var _DYN_HANDLER = "handler";
var _DYN_ERROR_HANDLERS = "errorHandlers";
var _DYN_EVT_NAME = "evtName";
var _DYN_CONCAT$1 = "concat";
var _DYN_CREATE_EVENT = "createEvent";
var _DYN_SUBSTRING = "substring";
var _DYN_GET_ALL_RESPONSE_HEA7 = "getAllResponseHeaders";
var _DYN_REMOVE_ITEM = "removeItem";
var _DYN_GET_ATTRIBUTE = "getAttribute";
var _DYN_ENTRIES = "entries";
var _DYN_TRACE_CFG = "traceCfg";
var _DYN_MEASUREMENTS = "measurements";
var _DYN_SIZE_IN_BYTES = "sizeInBytes";
var _DYN_TYPE_NAME = "typeName";
var _DYN_EXCEPTIONS = "exceptions";
var _DYN_SEVERITY_LEVEL = "severityLevel";
var _DYN_PROBLEM_GROUP = "problemGroup";
var _DYN_PARSED_STACK = "parsedStack";
var _DYN_HAS_FULL_STACK = "hasFullStack";
var _DYN_ASSEMBLY = "assembly";
var _DYN_FILE_NAME = "fileName";
var _DYN_LINE = "line";
var _DYN_AI_DATA_CONTRACT = "aiDataContract";

var aggregationErrorType;
function throwAggregationError(message, sourceErrors) {
    if (!aggregationErrorType) {
        aggregationErrorType = createCustomError("AggregationError", function (self, args) {
            if (args[_DYN_LENGTH$2 ] > 1) {
                self.errors = args[1];
            }
        });
    }
    var theMessage = message || "One or more errors occurred.";
    arrForEach(sourceErrors, function (srcError, idx) {
        theMessage += "\n".concat(idx, " > ").concat(dumpObj(srcError));
    });
    throw new aggregationErrorType(theMessage, sourceErrors || []);
}

/*!
 * NevWare21 Solutions LLC - ts-async, 0.5.5
 * https://github.com/nevware21/ts-async
 * Copyright (c) NevWare21 Solutions LLC and contributors. All rights reserved.
 * Licensed under the MIT license.
 */
var STR_PROMISE$1 = "Promise";
var REJECTED$1 = "rejected";
function doAwaitResponse(value, cb) {
    return doAwait$1(value, function (value) {
        return cb ? cb({
            status: "fulfilled",
            rejected: false,
            value: value
        }) : value;
    }, function (reason) {
        return cb ? cb({
            status: REJECTED$1,
            rejected: true,
            reason: reason
        }) : reason;
    });
}
function doAwait$1(value, resolveFn, rejectFn, finallyFn) {
    var result = value;
    try {
        if (isPromiseLike(value)) {
            if (resolveFn || rejectFn) {
                result = value.then(resolveFn, rejectFn);
            }
        }
        else {
            try {
                if (resolveFn) {
                    result = resolveFn(value);
                }
            }
            catch (err) {
                if (rejectFn) {
                    result = rejectFn(err);
                }
                else {
                    throw err;
                }
            }
        }
    }
    finally {
        if (finallyFn) {
            doFinally$1(result, finallyFn);
        }
    }
    return result;
}
function doFinally$1(value, finallyFn) {
    var result = value;
    if (finallyFn) {
        if (isPromiseLike(value)) {
            if (value.finally) {
                result = value.finally(finallyFn);
            }
            else {
                result = value.then(function (value) {
                    finallyFn();
                    return value;
                }, function (reason) {
                    finallyFn();
                    throw reason;
                });
            }
        }
        else {
            finallyFn();
        }
    }
    return result;
}
var STRING_STATES$1 = [
    "pending", "resolving", "resolved", REJECTED$1
];
var DISPATCH_EVENT$1 = "dispatchEvent";
var _hasInitEvent$1;
function _hasInitEventFn$1(doc) {
    var evt;
    if (doc && doc.createEvent) {
        evt = doc.createEvent("Event");
    }
    return (!!evt && evt.initEvent);
}
function emitEvent$1(target, evtName, populateEvent, useNewEvent) {
    var doc = getDocument();
    !_hasInitEvent$1 && (_hasInitEvent$1 = createCachedValue(!!safe(_hasInitEventFn$1, [doc]).v));
    var theEvt = _hasInitEvent$1.v ? doc.createEvent("Event") : (useNewEvent ? new Event(evtName) : {});
    populateEvent && populateEvent(theEvt);
    if (_hasInitEvent$1.v) {
        theEvt.initEvent(evtName, false, true);
    }
    if (theEvt && target[DISPATCH_EVENT$1]) {
        target[DISPATCH_EVENT$1](theEvt);
    }
    else {
        var handler = target["on" + evtName];
        if (handler) {
            handler(theEvt);
        }
        else {
            var theConsole = getInst("console");
            theConsole && (theConsole["error"] || theConsole["log"])(evtName, dumpObj(theEvt));
        }
    }
}
var NODE_UNHANDLED_REJECTION$1 = "unhandledRejection";
var UNHANDLED_REJECTION$1 = NODE_UNHANDLED_REJECTION$1.toLowerCase();
var _unhandledRejectionTimeout$1 = 10;
var _hasPromiseRejectionEvent$1;
function dumpFnObj$1(value) {
    if (isFunction(value)) {
        return value.toString();
    }
    return dumpObj(value);
}
function _createPromise$1(newPromise, processor, executor) {
    var additionalArgs = arrSlice(arguments, 3);
    var _state = 0 ;
    var _hasResolved = false;
    var _settledValue;
    var _queue = [];
    var _handled = false;
    var _unHandledRejectionHandler = null;
    var _thePromise;
    function _then(onResolved, onRejected) {
        try {
            _handled = true;
            _unHandledRejectionHandler && _unHandledRejectionHandler.cancel();
            _unHandledRejectionHandler = null;
            var thenPromise = newPromise(function (resolve, reject) {
                _queue.push(function () {
                    try {
                        var handler = _state === 2  ? onResolved : onRejected;
                        var value = isUndefined(handler) ? _settledValue : (isFunction(handler) ? handler(_settledValue) : handler);
                        if (isPromiseLike(value)) {
                            value.then(resolve, reject);
                        }
                        else if (handler) {
                            resolve(value);
                        }
                        else if (_state === 3 ) {
                            reject(value);
                        }
                        else {
                            resolve(value);
                        }
                    }
                    catch (e) {
                        reject(e);
                    }
                });
                if (_hasResolved) {
                    _processQueue();
                }
            }, additionalArgs);
            return thenPromise;
        }
        finally {
        }
    }
    function _catch(onRejected) {
        return _then(undefined, onRejected);
    }
    function _finally(onFinally) {
        var thenFinally = onFinally;
        var catchFinally = onFinally;
        if (isFunction(onFinally)) {
            thenFinally = function (value) {
                onFinally && onFinally();
                return value;
            };
            catchFinally = function (reason) {
                onFinally && onFinally();
                throw reason;
            };
        }
        return _then(thenFinally, catchFinally);
    }
    function _strState() {
        return STRING_STATES$1[_state];
    }
    function _processQueue() {
        if (_queue.length > 0) {
            var pending = _queue.slice();
            _queue = [];
            _handled = true;
            _unHandledRejectionHandler && _unHandledRejectionHandler.cancel();
            _unHandledRejectionHandler = null;
            processor(pending);
        }
    }
    function _createSettleIfFn(newState, allowState) {
        return function (theValue) {
            if (_state === allowState) {
                if (newState === 2  && isPromiseLike(theValue)) {
                    _state = 1 ;
                    theValue.then(_createSettleIfFn(2 , 1 ), _createSettleIfFn(3 , 1 ));
                    return;
                }
                _state = newState;
                _hasResolved = true;
                _settledValue = theValue;
                _processQueue();
                if (!_handled && newState === 3  && !_unHandledRejectionHandler) {
                    _unHandledRejectionHandler = scheduleTimeout(_notifyUnhandledRejection, _unhandledRejectionTimeout$1);
                }
            }
        };
    }
    function _notifyUnhandledRejection() {
        if (!_handled) {
            _handled = true;
            if (isNode()) {
                process.emit(NODE_UNHANDLED_REJECTION$1, _settledValue, _thePromise);
            }
            else {
                var gbl = getWindow() || getGlobal();
                !_hasPromiseRejectionEvent$1 && (_hasPromiseRejectionEvent$1 = createCachedValue(safe((getInst), [STR_PROMISE$1 + "RejectionEvent"]).v));
                emitEvent$1(gbl, UNHANDLED_REJECTION$1, function (theEvt) {
                    objDefine(theEvt, "promise", { g: function () { return _thePromise; } });
                    theEvt.reason = _settledValue;
                    return theEvt;
                }, !!_hasPromiseRejectionEvent$1.v);
            }
        }
    }
    _thePromise = {
        then: _then,
        "catch": _catch,
        finally: _finally
    };
    objDefineProp(_thePromise, "state", {
        get: _strState
    });
    if (hasSymbol()) {
        _thePromise[getKnownSymbol(11 )] = "IPromise";
    }
    function _toString() {
        return "IPromise" + ("") + " " + _strState() + (_hasResolved ? (" - " + dumpFnObj$1(_settledValue)) : "") + ("");
    }
    _thePromise.toString = _toString;
    (function _initialize() {
        if (!isFunction(executor)) {
            throwTypeError(STR_PROMISE$1 + ": executor is not a function - " + dumpFnObj$1(executor));
        }
        var _rejectFn = _createSettleIfFn(3 , 0 );
        try {
            executor.call(_thePromise, _createSettleIfFn(2 , 0 ), _rejectFn);
        }
        catch (e) {
            _rejectFn(e);
        }
    })();
    return _thePromise;
}
/*#__NO_SIDE_EFFECTS__*/
function _createAllPromise(newPromise) {
    return function (input) {
        var additionalArgs = arrSlice(arguments, 1);
        return newPromise(function (resolve, reject) {
            try {
                var values_1 = [];
                var pending_1 = 1;
                iterForOf(input, function (item, idx) {
                    if (item) {
                        pending_1++;
                        doAwait$1(item, function (value) {
                            values_1[idx] = value;
                            if (--pending_1 === 0) {
                                resolve(values_1);
                            }
                        }, reject);
                    }
                });
                pending_1--;
                if (pending_1 === 0) {
                    resolve(values_1);
                }
            }
            catch (e) {
                reject(e);
            }
        }, additionalArgs);
    };
}
/*#__NO_SIDE_EFFECTS__*/
function _createAllSettledPromise(newPromise) {
    return createCachedValue(function (input) {
        var additionalArgs = arrSlice(arguments, 1);
        return newPromise(function (resolve, reject) {
            var values = [];
            var pending = 1;
            function processItem(item, idx) {
                pending++;
                doAwaitResponse(item, function (value) {
                    if (value.rejected) {
                        values[idx] = {
                            status: REJECTED$1,
                            reason: value.reason
                        };
                    }
                    else {
                        values[idx] = {
                            status: "fulfilled",
                            value: value.value
                        };
                    }
                    if (--pending === 0) {
                        resolve(values);
                    }
                });
            }
            try {
                if (isArray(input)) {
                    arrForEach(input, processItem);
                }
                else if (isIterable(input)) {
                    iterForOf(input, processItem);
                }
                else {
                    throwTypeError("Input is not an iterable");
                }
                pending--;
                if (pending === 0) {
                    resolve(values);
                }
            }
            catch (e) {
                reject(e);
            }
        }, additionalArgs);
    });
}
function syncItemProcessor$1(pending) {
    arrForEach(pending, function (fn) {
        try {
            fn();
        }
        catch (e) {
        }
    });
}
function timeoutItemProcessor$1(timeout) {
    var callbackTimeout = isNumber(timeout) ? timeout : 0;
    return function (pending) {
        scheduleTimeout(function () {
            syncItemProcessor$1(pending);
        }, callbackTimeout);
    };
}
function createAsyncPromise$1(executor, timeout) {
    return _createPromise$1(createAsyncPromise$1, timeoutItemProcessor$1(timeout), executor, timeout);
}
var _promiseCls$1;
function createNativePromise$1(executor, timeout) {
    !_promiseCls$1 && (_promiseCls$1 = createCachedValue((safe(getInst, [STR_PROMISE$1]).v) || null));
    var PrmCls = _promiseCls$1.v;
    if (!PrmCls) {
        return createAsyncPromise$1(executor);
    }
    if (!isFunction(executor)) {
        throwTypeError(STR_PROMISE$1 + ": executor is not a function - " + dumpObj(executor));
    }
    var _state = 0 ;
    function _strState() {
        return STRING_STATES$1[_state];
    }
    var thePromise = new PrmCls(function (resolve, reject) {
        function _resolve(value) {
            _state = 2 ;
            resolve(value);
        }
        function _reject(reason) {
            _state = 3 ;
            reject(reason);
        }
        executor(_resolve, _reject);
    });
    objDefineProp(thePromise, "state", {
        get: _strState
    });
    return thePromise;
}
var _allSyncSettledCreator;
function createSyncPromise(executor) {
    return _createPromise$1(createSyncPromise, syncItemProcessor$1, executor);
}
function createSyncAllSettledPromise(input, timeout) {
    !_allSyncSettledCreator && (_allSyncSettledCreator = _createAllSettledPromise(createSyncPromise));
    return _allSyncSettledCreator.v(input, timeout);
}
var _promiseCreator$1;
function createPromise$1(executor, timeout) {
    !_promiseCreator$1 && (_promiseCreator$1 = createCachedValue(createNativePromise$1));
    return _promiseCreator$1.v.call(this, executor, timeout);
}
var createAllPromise = ( /*#__PURE__*/_createAllPromise(createPromise$1));

var UNDEFINED_VALUE = undefined;
var STR_EMPTY$1 = "";
var STR_CHANNELS = "channels";
var STR_CORE = "core";
var STR_CREATE_PERF_MGR = "createPerfMgr";
var STR_DISABLED = "disabled";
var STR_EXTENSION_CONFIG = "extensionConfig";
var STR_EXTENSIONS = "extensions";
var STR_PROCESS_TELEMETRY = "processTelemetry";
var STR_PRIORITY = "priority";
var STR_EVENTS_SENT = "eventsSent";
var STR_EVENTS_DISCARDED = "eventsDiscarded";
var STR_EVENTS_SEND_REQUEST = "eventsSendRequest";
var STR_PERF_EVENT = "perfEvent";
var STR_OFFLINE_STORE = "offlineEventsStored";
var STR_OFFLINE_SENT = "offlineBatchSent";
var STR_OFFLINE_DROP = "offlineBatchDrop";
var STR_GET_PERF_MGR = "getPerfMgr";
var STR_DOMAIN = "domain";
var STR_PATH = "path";
var STR_NOT_DYNAMIC_ERROR = "Not dynamic - ";
var STR_REDACTED = "REDACTED";
var DEFAULT_SENSITIVE_PARAMS = ["sig", "Signature", "AWSAccessKeyId", "X-Goog-Signature"];
var STR_DEFAULT_ENDPOINT_URL = "https://browser.events.data.microsoft.com/OneCollector/1.0/";
var STR_VERSION = "version";
var STR_NOT_SPECIFIED = "not_specified";

function _stringToBoolOrDefault(theValue, defaultValue, theConfig) {
    if (!theValue && isNullOrUndefined(theValue)) {
        return defaultValue;
    }
    if (isBoolean(theValue)) {
        return theValue;
    }
    return asString(theValue)[_DYN_TO_LOWER_CASE$1 ]() === "true";
}
function cfgDfMerge(defaultValue) {
    return {
        mrg: true,
        v: defaultValue
    };
}
function cfgDfSet(setter, defaultValue) {
    return {
        set: setter,
        v: defaultValue
    };
}
function cfgDfValidate(validator, defaultValue, fallBackName) {
    return {
        fb: fallBackName,
        isVal: validator,
        v: defaultValue
    };
}
function cfgDfBoolean(defaultValue, fallBackName) {
    return {
        fb: fallBackName,
        set: _stringToBoolOrDefault,
        v: !!defaultValue
    };
}
function cfgDfFunc(defaultValue) {
    return {
        isVal: isFunction,
        v: defaultValue || null
    };
}
function cfgDfString(defaultValue) {
    return {
        isVal: isString,
        v: asString(defaultValue || STR_EMPTY$1)
    };
}

var strGetPrototypeOf = "getPrototypeOf";
var rCamelCase = /-([a-z])/g;
var rNormalizeInvalid = /([^\w\d_$])/g;
var rLeadingNumeric = /^(\d+[\w\d_$])/;
var _ProtoNameTag;
var _getObjProto = Object[strGetPrototypeOf];
/*#__NO_SIDE_EFFECTS__*/
function isNotNullOrUndefined(value) {
    return !isNullOrUndefined(value);
}
/*#__NO_SIDE_EFFECTS__*/
function normalizeJsName(name) {
    var value = name;
    if (value && isString(value)) {
        value = value[_DYN_REPLACE ](rCamelCase, function (_all, letter) {
            return letter.toUpperCase();
        });
        value = value[_DYN_REPLACE ](rNormalizeInvalid, "_");
        value = value[_DYN_REPLACE ](rLeadingNumeric, function (_all, match) {
            return "_" + match;
        });
    }
    return value;
}
/*#__NO_SIDE_EFFECTS__*/
function strContains(value, search) {
    if (value && search) {
        return strIndexOf(value, search) !== -1;
    }
    return false;
}
/*#__NO_SIDE_EFFECTS__*/
function toISOString(date) {
    return date && date.toISOString() || STR_EMPTY$1;
}
/*#__NO_SIDE_EFFECTS__*/
function getExceptionName(object) {
    if (isError(object)) {
        return object[_DYN_NAME ];
    }
    return STR_EMPTY$1;
}
function setValue(target, field, value, valChk, srcChk) {
    var theValue = value;
    if (target) {
        theValue = target[field];
        if (theValue !== value && (!srcChk || srcChk(theValue)) && (!valChk || valChk(value))) {
            theValue = value;
            target[field] = theValue;
        }
    }
    return theValue;
}
function getSetValue(target, field, defValue) {
    var theValue;
    if (target) {
        theValue = target[field];
        if (!theValue && isNullOrUndefined(theValue)) {
            theValue = !isUndefined(defValue) ? defValue : {};
            target[field] = theValue;
        }
    }
    else {
        theValue = !isUndefined(defValue) ? defValue : {};
    }
    return theValue;
}
function _createProxyFunction(source, funcName) {
    var srcFunc = null;
    var src = null;
    if (isFunction(source)) {
        srcFunc = source;
    }
    else {
        src = source;
    }
    return function () {
        var originalArguments = arguments;
        if (srcFunc) {
            src = srcFunc();
        }
        if (src) {
            return src[funcName][_DYN_APPLY ](src, originalArguments);
        }
    };
}
function proxyAssign(target, source, chkSet) {
    if (target && source && isObject(target) && isObject(source)) {
        var _loop_1 = function (field) {
            if (isString(field)) {
                var value = source[field];
                if (isFunction(value)) {
                    if (!chkSet || chkSet(field, true, source, target)) {
                        target[field] = _createProxyFunction(source, field);
                    }
                }
                else if (!chkSet || chkSet(field, false, source, target)) {
                    if (objHasOwn(target, field)) {
                        delete target[field];
                    }
                    objDefine(target, field, {
                        g: function () {
                            return source[field];
                        },
                        s: function (theValue) {
                            source[field] = theValue;
                        }
                    });
                }
            }
        };
        for (var field in source) {
            _loop_1(field);
        }
    }
    return target;
}
function proxyFunctionAs(target, name, source, theFunc, overwriteTarget) {
    if (target && name && source) {
        if (overwriteTarget !== false || isUndefined(target[name])) {
            target[name] = _createProxyFunction(source, theFunc);
        }
    }
}
function proxyFunctions(target, source, functionsToProxy, overwriteTarget) {
    if (target && source && isObject(target) && isArray(functionsToProxy)) {
        arrForEach(functionsToProxy, function (theFuncName) {
            if (isString(theFuncName)) {
                proxyFunctionAs(target, theFuncName, source, theFuncName, overwriteTarget);
            }
        });
    }
    return target;
}
function setObjStringTag(target, nameOrFunc) {
    safe(objDefine, [target, getKnownSymbol(11 ), isFunction(nameOrFunc) ? { g: nameOrFunc, e: false } : { v: nameOrFunc, w: false, e: false }]);
    return target;
}
function setProtoTypeName(target, name) {
    if (target) {
        var proto_1 = _getObjProto(target);
        var done_1 = false;
        if (proto_1) {
            safe(function () {
                var newProto = setObjStringTag(objCreate(proto_1), name);
                if (!_ProtoNameTag) {
                    _ProtoNameTag = createCachedValue(newSymbol("ai$ProtoName"));
                }
                objDefine(newProto, _ProtoNameTag.v, {
                    v: true,
                    w: false,
                    e: false
                });
                objSetPrototypeOf(target, newProto);
                done_1 = true;
            });
        }
        if (!done_1) {
            safe(setObjStringTag, [target, name]);
        }
    }
    return target;
}
function updateProtoTypeName(target, name) {
    if (_ProtoNameTag) {
        while (target && target !== ObjProto$1 && !target[_ProtoNameTag.v]) {
            var protoTarget = objGetPrototypeOf(target);
            if (target === protoTarget) {
                break;
            }
            target = protoTarget;
        }
        if (target[_ProtoNameTag.v]) {
            safe(setObjStringTag, [target, name]);
        }
    }
    return target;
}
/*#__NO_SIDE_EFFECTS__*/
function optimizeObject(theObject) {
    if (theObject && objAssign) {
        theObject = ObjClass$1(objAssign({}, theObject));
    }
    return theObject;
}
/*#__NO_SIDE_EFFECTS__*/
function isFeatureEnabled(feature, cfg, sdkDefaultState) {
    var ft = cfg && cfg.featureOptIn && cfg.featureOptIn[feature];
    if (feature && ft) {
        var mode = ft.mode;
        if (mode === 3 ) {
            return true;
        }
        else if (mode === 2 ) {
            return false;
        }
    }
    return sdkDefaultState;
}
/*#__NO_SIDE_EFFECTS__*/
function getResponseText(xhr) {
    try {
        return xhr.responseText;
    }
    catch (e) {
    }
    return null;
}
/*#__NO_SIDE_EFFECTS__*/
function formatErrorMessageXhr(xhr, message) {
    if (xhr) {
        return "XMLHttpRequest,Status:" + xhr[_DYN_STATUS ] + ",Response:" + getResponseText(xhr) || xhr.response || STR_EMPTY$1;
    }
    return message;
}
/*#__NO_SIDE_EFFECTS__*/
function prependTransports(theTransports, newTransports) {
    if (newTransports) {
        if (isNumber(newTransports)) {
            theTransports = [newTransports][_DYN_CONCAT$1 ](theTransports);
        }
        else if (isArray(newTransports)) {
            theTransports = newTransports[_DYN_CONCAT$1 ](theTransports);
        }
    }
    return theTransports;
}
var strDisabledPropertyName = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation";
var strWithCredentials = "withCredentials";
var strTimeout = "timeout";
function openXhr(method, urlString, withCredentials, disabled, isSync, timeout) {
    if (disabled === void 0) { disabled = false; }
    if (isSync === void 0) { isSync = false; }
    function _wrapSetXhrProp(xhr, prop, value) {
        try {
            xhr[prop] = value;
        }
        catch (e) {
        }
    }
    var xhr = new XMLHttpRequest();
    if (disabled) {
        _wrapSetXhrProp(xhr, strDisabledPropertyName, disabled);
    }
    if (withCredentials) {
        _wrapSetXhrProp(xhr, strWithCredentials, withCredentials);
    }
    xhr.open(method, urlString, !isSync);
    if (withCredentials) {
        _wrapSetXhrProp(xhr, strWithCredentials, withCredentials);
    }
    if (!isSync && timeout) {
        _wrapSetXhrProp(xhr, strTimeout, timeout);
    }
    return xhr;
}
/*#__NO_SIDE_EFFECTS__*/
function convertAllHeadersToMap(headersString) {
    var headers = {};
    if (isString(headersString)) {
        var headersArray = strTrim(headersString)[_DYN_SPLIT$1 ](/[\r\n]+/);
        arrForEach(headersArray, function (headerEntry) {
            if (headerEntry) {
                var idx = strIndexOf(headerEntry, ": ");
                if (idx !== -1) {
                    var header = strTrim(headerEntry.substring(0, idx))[_DYN_TO_LOWER_CASE$1 ]();
                    var value = strTrim(headerEntry[_DYN_SUBSTRING ](idx + 1));
                    headers[header] = value;
                }
                else {
                    headers[strTrim(headerEntry)] = 1;
                }
            }
        });
    }
    return headers;
}
function _appendHeader(theHeaders, xhr, name) {
    if (!theHeaders[name] && xhr && xhr.getResponseHeader) {
        var value = xhr.getResponseHeader(name);
        if (value) {
            theHeaders[name] = strTrim(value);
        }
    }
    return theHeaders;
}
var STR_KILL_DURATION_HEADER$1 = "kill-duration";
var STR_KILL_DURATION_SECONDS_HEADER = "kill-duration-seconds";
var STR_TIME_DELTA_HEADER$1 = "time-delta-millis";
function _getAllResponseHeaders(xhr, isOneDs) {
    var theHeaders = {};
    if (!xhr[_DYN_GET_ALL_RESPONSE_HEA7 ]) {
        if (!!isOneDs) {
            theHeaders = _appendHeader(theHeaders, xhr, STR_TIME_DELTA_HEADER$1);
            theHeaders = _appendHeader(theHeaders, xhr, STR_KILL_DURATION_HEADER$1);
            theHeaders = _appendHeader(theHeaders, xhr, STR_KILL_DURATION_SECONDS_HEADER);
        }
    }
    else {
        theHeaders = convertAllHeadersToMap(xhr[_DYN_GET_ALL_RESPONSE_HEA7 ]());
    }
    return theHeaders;
}
/*#__NO_SIDE_EFFECTS__*/
function msToTimeSpan(totalms) {
    if (isTimeSpan(totalms)) {
        return totalms;
    }
    if (isNaN(totalms) || totalms < 0) {
        totalms = 0;
    }
    totalms = mathRound(totalms);
    var ms = STR_EMPTY$1 + totalms % 1000;
    var sec = STR_EMPTY$1 + mathFloor(totalms / 1000) % 60;
    var min = STR_EMPTY$1 + mathFloor(totalms / (1000 * 60)) % 60;
    var hour = STR_EMPTY$1 + mathFloor(totalms / (1000 * 60 * 60)) % 24;
    var days = mathFloor(totalms / (1000 * 60 * 60 * 24));
    ms = ms[_DYN_LENGTH$2 ] === 1 ? "00" + ms : ms[_DYN_LENGTH$2 ] === 2 ? "0" + ms : ms;
    sec = sec[_DYN_LENGTH$2 ] < 2 ? "0" + sec : sec;
    min = min[_DYN_LENGTH$2 ] < 2 ? "0" + min : min;
    hour = hour[_DYN_LENGTH$2 ] < 2 ? "0" + hour : hour;
    return (days > 0 ? days + "." : STR_EMPTY$1) + hour + ":" + min + ":" + sec + "." + ms;
}
/*#__NO_SIDE_EFFECTS__*/
function isCrossOriginError(message, url, lineNumber, columnNumber, error) {
    return !error && isString(message) && (message === "Script error." || message === "Script error");
}
/*#__NO_SIDE_EFFECTS__*/
function isTimeSpan(value) {
    var result = false;
    if (isString(value)) {
        var parts = strSplit(value, ":");
        if (parts[_DYN_LENGTH$2 ] === 3) {
            var daysHours = strSplit(parts[0], ".");
            if (daysHours[_DYN_LENGTH$2 ] === 2) {
                result = !isNaN(parseInt(daysHours[0] || "0")) && !isNaN(parseInt(daysHours[1] || "0"));
            }
            else {
                result = !isNaN(parseInt(daysHours[0] || "0"));
            }
            result = result && !isNaN(parseInt(parts[1] || "0"));
            var secondsParts = strSplit(parts[2], ".");
            if (secondsParts[_DYN_LENGTH$2 ] === 2) {
                result = result && !isNaN(parseInt(secondsParts[0] || "0")) && !isNaN(parseInt(secondsParts[1] || "0"));
            }
            else {
                result = result && !isNaN(parseInt(secondsParts[0] || "0"));
            }
        }
    }
    return result;
}

var strLocation = "location";
var strConsole = "console";
var strJSON = "JSON";
var strCrypto = "crypto";
var strMsCrypto = "msCrypto";
var strReactNative = "ReactNative";
var strMsie = "msie";
var strTrident = "trident/";
var strXMLHttpRequest = "XMLHttpRequest";
var _isTrident;
var _navUserAgentCheck;
var _enableMocks = false;
var _beaconsSupported;
var _userAgent;
function _hasProperty(theClass, property) {
    var supported = false;
    if (theClass) {
        try {
            supported = property in theClass;
            if (!supported) {
                var proto = theClass[strShimPrototype];
                if (proto) {
                    supported = property in proto;
                }
            }
        }
        catch (e) {
        }
        if (!supported) {
            try {
                var tmp = new theClass();
                supported = !isUndefined(tmp[property]);
            }
            catch (e) {
            }
        }
    }
    return supported;
}
/*#__NO_SIDE_EFFECTS__*/
function getUserAgentString() {
    if (!_userAgent) {
        _userAgent = getLazy(function () {
            var nav = getNavigator() || {};
            return nav[_DYN_USER_AGENT ] || STR_EMPTY$1;
        });
    }
    return _userAgent.v;
}
/*#__NO_SIDE_EFFECTS__*/
function getLocation(checkForMock) {
    if (checkForMock && _enableMocks) {
        var mockLocation = getInst("__mockLocation");
        if (mockLocation) {
            return mockLocation;
        }
    }
    if (typeof location === strShimObject && location) {
        return location;
    }
    return getInst(strLocation);
}
/*#__NO_SIDE_EFFECTS__*/
function getConsole() {
    if (typeof console !== strShimUndefined) {
        return console;
    }
    return getInst(strConsole);
}
/*#__NO_SIDE_EFFECTS__*/
function hasJSON() {
    return Boolean((typeof JSON === strShimObject && JSON) || getInst(strJSON) !== null);
}
/*#__NO_SIDE_EFFECTS__*/
function getJSON() {
    if (hasJSON()) {
        return JSON || getInst(strJSON);
    }
    return null;
}
/*#__NO_SIDE_EFFECTS__*/
function getCrypto() {
    return getInst(strCrypto);
}
/*#__NO_SIDE_EFFECTS__*/
function getMsCrypto() {
    return getInst(strMsCrypto);
}
/*#__NO_SIDE_EFFECTS__*/
function isReactNative() {
    var nav = getNavigator();
    if (nav && nav.product) {
        return nav.product === strReactNative;
    }
    return false;
}
/*#__NO_SIDE_EFFECTS__*/
function isIE() {
    var userAgent = getUserAgentString();
    if (!_isTrident || userAgent !== _navUserAgentCheck) {
        _navUserAgentCheck = userAgent;
        var lwrUserAgent = _navUserAgentCheck[_DYN_TO_LOWER_CASE$1 ]();
        _isTrident = createCachedValue(strContains(lwrUserAgent, strMsie) || strContains(lwrUserAgent, strTrident));
    }
    return _isTrident.v;
}
function isBeaconsSupported(useCached) {
    if (!_beaconsSupported || useCached === false) {
        _beaconsSupported = createCachedValue(hasNavigator() && !!(getNavigator().sendBeacon));
    }
    return _beaconsSupported.v;
}
/*#__NO_SIDE_EFFECTS__*/
function isFetchSupported(withKeepAlive) {
    var isSupported = false;
    try {
        isSupported = !!getInst("fetch");
        var request = getInst("Request");
        if (isSupported && withKeepAlive && request) {
            isSupported = _hasProperty(request, "keepalive");
        }
    }
    catch (e) {
    }
    return isSupported;
}
/*#__NO_SIDE_EFFECTS__*/
function isXhrSupported() {
    var isSupported = false;
    try {
        var xmlHttpRequest = getInst(strXMLHttpRequest);
        isSupported = !!xmlHttpRequest;
    }
    catch (e) {
    }
    return isSupported;
}
/*#__NO_SIDE_EFFECTS__*/
function _getNamedValue(values, name) {
    var items = [];
    if (values) {
        arrForEach(values, function (value) {
            if (value[_DYN_NAME ]) {
                if (value[_DYN_NAME ] === name) {
                    items[_DYN_PUSH$1 ](value);
                }
            }
        });
    }
    return items;
}
/*#__NO_SIDE_EFFECTS__*/
function findMetaTag(name) {
    var tags = findMetaTags(name);
    if (tags[_DYN_LENGTH$2 ] > 0) {
        return tags[0];
    }
    return null;
}
/*#__NO_SIDE_EFFECTS__*/
function findMetaTags(name) {
    var tags = [];
    var doc = getDocument();
    if (doc && name) {
        arrForEach(_getNamedValue(doc.querySelectorAll("meta"), name), function (item) {
            tags[_DYN_PUSH$1 ](item.content);
        });
    }
    return tags;
}
/*#__NO_SIDE_EFFECTS__*/
function findNamedServerTiming(name) {
    var value;
    var serverTimings = findNamedServerTimings(name);
    if (serverTimings[_DYN_LENGTH$2 ] > 0) {
        value = serverTimings[0];
    }
    return value;
}
/*#__NO_SIDE_EFFECTS__*/
function findNamedServerTimings(name) {
    var values = [];
    var perf = getPerformance();
    if (perf && perf.getEntriesByType) {
        arrForEach(perf.getEntriesByType("navigation") || [], function (navPerf) {
            arrForEach(_getNamedValue(navPerf.serverTiming, name), function (value) {
                var desc = value.description;
                if (!isNullOrUndefined(desc)) {
                    values[_DYN_PUSH$1 ](desc);
                }
            });
        });
    }
    return values;
}
/*#__NO_SIDE_EFFECTS__*/
function redactUserInfo(url) {
    return url.replace(/^([a-zA-Z][a-zA-Z0-9+.-]*:\/\/)([^:@]{1,200}):([^@]{1,200})@(.*)$/, "$1REDACTED:REDACTED@$4");
}
/*#__NO_SIDE_EFFECTS__*/
function redactQueryParameters(url, config) {
    var sensitiveParams;
    var questionMarkIndex = strIndexOf(url, "?");
    if (questionMarkIndex === -1) {
        return url;
    }
    var option = config ? config.redactUrls : undefined;
    if (option === 3 ) {
        sensitiveParams = DEFAULT_SENSITIVE_PARAMS[_DYN_CONCAT$1 ](config.redactQueryParams);
    }
    else if (option === 4 ) {
        sensitiveParams = config.redactQueryParams;
    }
    else {
        sensitiveParams = DEFAULT_SENSITIVE_PARAMS;
    }
    var baseUrl = strSubstring(url, 0, questionMarkIndex + 1);
    var queryString = strSubstring(url, questionMarkIndex + 1);
    var fragment = STR_EMPTY$1;
    var hashIndex = strIndexOf(queryString, "#");
    if (hashIndex !== -1) {
        fragment = strSubstring(queryString, hashIndex);
        queryString = strSubstring(queryString, 0, hashIndex);
    }
    var hasPotentialSensitiveParam = false;
    for (var i = 0; i < sensitiveParams[_DYN_LENGTH$2 ]; i++) {
        var paramCheck = sensitiveParams[i] + "=";
        if (strIndexOf(queryString, paramCheck) !== -1) {
            hasPotentialSensitiveParam = true;
            break;
        }
    }
    if (!hasPotentialSensitiveParam) {
        return url;
    }
    var resultParts = [];
    var anyParamRedacted = false;
    if (queryString && queryString[_DYN_LENGTH$2 ]) {
        var pairs = queryString[_DYN_SPLIT$1 ]("&");
        for (var i = 0; i < pairs[_DYN_LENGTH$2 ]; i++) {
            var pair = pairs[i];
            if (!pair) {
                continue;
            }
            var equalsIndex = strIndexOf(pair, "=");
            if (equalsIndex === -1) {
                resultParts[_DYN_PUSH$1 ](pair);
            }
            else {
                var paramName = pair[_DYN_SUBSTRING ](0, equalsIndex);
                var paramValue = pair[_DYN_SUBSTRING ](equalsIndex + 1);
                if (paramValue === STR_EMPTY$1) {
                    resultParts[_DYN_PUSH$1 ](pair);
                }
                else {
                    var shouldRedact = false;
                    for (var j = 0; j < sensitiveParams[_DYN_LENGTH$2 ]; j++) {
                        if (paramName === sensitiveParams[j]) {
                            shouldRedact = true;
                            anyParamRedacted = true;
                            break;
                        }
                    }
                    if (shouldRedact) {
                        resultParts[_DYN_PUSH$1 ](paramName + "=" + STR_REDACTED);
                    }
                    else {
                        resultParts[_DYN_PUSH$1 ](pair);
                    }
                }
            }
        }
    }
    if (!anyParamRedacted) {
        return url;
    }
    return baseUrl + resultParts[_DYN_JOIN ]("&") + fragment;
}
/*#__NO_SIDE_EFFECTS__*/
function fieldRedaction(input, config) {
    if (!input || !isString(input) || strIndexOf(input, " ") !== -1) {
        return input;
    }
    var option = config ? config.redactUrls : undefined;
    var isRedactionDisabled = option === false || option === 2 ;
    if (isRedactionDisabled) {
        return input;
    }
    var hasCredentials = strIndexOf(input, "@") !== -1;
    var hasQueryParams = strIndexOf(input, "?") !== -1;
    if (!hasCredentials && !hasQueryParams) {
        return input;
    }
    if (option === 5 ) {
        hasQueryParams = false;
    }
    if (option === 6 ) {
        hasCredentials = false;
    }
    try {
        var result = input;
        if (hasCredentials) {
            result = redactUserInfo(input);
        }
        if (hasQueryParams) {
            result = redactQueryParameters(result, config);
        }
        return result;
    }
    catch (e) {
        return input;
    }
}

var UInt32Mask = 0x100000000;
var MaxUInt32 = 0xffffffff;
var SEED1 = 123456789;
var SEED2 = 987654321;
var _mwcSeeded = false;
var _mwcW = SEED1;
var _mwcZ = SEED2;
function _mwcSeed(seedValue) {
    if (seedValue < 0) {
        seedValue >>>= 0;
    }
    _mwcW = (SEED1 + seedValue) & MaxUInt32;
    _mwcZ = (SEED2 - seedValue) & MaxUInt32;
    _mwcSeeded = true;
}
function _autoSeedMwc() {
    try {
        var now = utcNow() & 0x7fffffff;
        _mwcSeed(((mathRandom() * UInt32Mask) ^ now) + now);
    }
    catch (e) {
    }
}
function random32(signed) {
    var value = 0;
    var c = getCrypto() || getMsCrypto();
    if (c && c.getRandomValues) {
        value = c.getRandomValues(new Uint32Array(1))[0] & MaxUInt32;
    }
    if (value === 0 && isIE()) {
        if (!_mwcSeeded) {
            _autoSeedMwc();
        }
        value = mwcRandom32() & MaxUInt32;
    }
    if (value === 0) {
        value = mathFloor((UInt32Mask * mathRandom()) | 0);
    }
    if (!signed) {
        value >>>= 0;
    }
    return value;
}
function mwcRandom32(signed) {
    _mwcZ = (36969 * (_mwcZ & 0xFFFF) + (_mwcZ >> 16)) & MaxUInt32;
    _mwcW = (18000 * (_mwcW & 0xFFFF) + (_mwcW >> 16)) & MaxUInt32;
    var value = (((_mwcZ << 16) + (_mwcW & 0xFFFF)) >>> 0) & MaxUInt32 | 0;
    if (!signed) {
        value >>>= 0;
    }
    return value;
}
function newId(maxLength) {
    if (maxLength === void 0) { maxLength = 22; }
    var base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var number = random32() >>> 0;
    var chars = 0;
    var result = STR_EMPTY$1;
    while (result[_DYN_LENGTH$2 ] < maxLength) {
        chars++;
        result += base64chars.charAt(number & 0x3F);
        number >>>= 6;
        if (chars === 5) {
            number = (((random32() << 2) & 0xFFFFFFFF) | (number & 0x03)) >>> 0;
            chars = 0;
        }
    }
    return result;
}

var version = "3.4.2";
var instanceName = "." + newId(6);
var _dataUid = 0;
function _canAcceptData(target) {
    return target.nodeType === 1 || target.nodeType === 9 || !(+target.nodeType);
}
function _getCache(data, target) {
    var theCache = target[data.id];
    if (!theCache) {
        theCache = {};
        try {
            if (_canAcceptData(target)) {
                objDefine(target, data.id, {
                    e: false,
                    v: theCache
                });
            }
        }
        catch (e) {
        }
    }
    return theCache;
}
function createUniqueNamespace(name, includeVersion) {
    if (includeVersion === void 0) { includeVersion = false; }
    return normalizeJsName(name + (_dataUid++) + (includeVersion ? "." + version : STR_EMPTY$1) + instanceName);
}
function createElmNodeData(name) {
    var data = {
        id: createUniqueNamespace("_aiData-" + (name || STR_EMPTY$1) + "." + version),
        accept: function (target) {
            return _canAcceptData(target);
        },
        get: function (target, name, defValue, addDefault) {
            var theCache = target[data.id];
            if (!theCache) {
                if (addDefault) {
                    theCache = _getCache(data, target);
                    theCache[normalizeJsName(name)] = defValue;
                }
                return defValue;
            }
            return theCache[normalizeJsName(name)];
        },
        kill: function (target, name) {
            if (target && target[name]) {
                try {
                    delete target[name];
                }
                catch (e) {
                }
            }
        }
    };
    return data;
}

function _isConfigDefaults(value) {
    return (value && isObject(value) && !isArray(value) && (value.isVal || value.fb || objHasOwn(value, "v") || objHasOwn(value, "mrg") || objHasOwn(value, "ref") || value.set));
}
function _getDefault(dynamicHandler, theConfig, cfgDefaults) {
    var defValue;
    var isDefaultValid = cfgDefaults.dfVal || isDefined;
    if (theConfig && cfgDefaults.fb) {
        var fallbacks = cfgDefaults.fb;
        if (!isArray(fallbacks)) {
            fallbacks = [fallbacks];
        }
        for (var lp = 0; lp < fallbacks[_DYN_LENGTH$2 ]; lp++) {
            var fallback = fallbacks[lp];
            var fbValue = theConfig[fallback];
            if (isDefaultValid(fbValue)) {
                defValue = fbValue;
            }
            else if (dynamicHandler) {
                fbValue = dynamicHandler.cfg[fallback];
                if (isDefaultValid(fbValue)) {
                    defValue = fbValue;
                }
                dynamicHandler.set(dynamicHandler.cfg, asString(fallback), fbValue);
            }
            if (isDefaultValid(defValue)) {
                break;
            }
        }
    }
    if (!isDefaultValid(defValue) && isDefaultValid(cfgDefaults.v)) {
        defValue = cfgDefaults.v;
    }
    return defValue;
}
function _resolveDefaultValue(dynamicHandler, theConfig, cfgDefaults) {
    var theValue = cfgDefaults;
    if (cfgDefaults && _isConfigDefaults(cfgDefaults)) {
        theValue = _getDefault(dynamicHandler, theConfig, cfgDefaults);
    }
    if (theValue) {
        if (_isConfigDefaults(theValue)) {
            theValue = _resolveDefaultValue(dynamicHandler, theConfig, theValue);
        }
        var newValue_1;
        if (isArray(theValue)) {
            newValue_1 = [];
            newValue_1[_DYN_LENGTH$2 ] = theValue[_DYN_LENGTH$2 ];
        }
        else if (isPlainObject(theValue)) {
            newValue_1 = {};
        }
        if (newValue_1) {
            objForEachKey(theValue, function (key, value) {
                if (value && _isConfigDefaults(value)) {
                    value = _resolveDefaultValue(dynamicHandler, theConfig, value);
                }
                newValue_1[key] = value;
            });
            theValue = newValue_1;
        }
    }
    return theValue;
}
function _applyDefaultValue(dynamicHandler, theConfig, name, defaultValue) {
    var isValid;
    var setFn;
    var defValue;
    var cfgDefaults = defaultValue;
    var mergeDf;
    var reference;
    var readOnly;
    var blkDynamicValue;
    if (_isConfigDefaults(cfgDefaults)) {
        isValid = cfgDefaults.isVal;
        setFn = cfgDefaults.set;
        readOnly = cfgDefaults.rdOnly;
        blkDynamicValue = cfgDefaults.blkVal;
        mergeDf = cfgDefaults.mrg;
        reference = cfgDefaults.ref;
        if (!reference && isUndefined(reference)) {
            reference = !!mergeDf;
        }
        defValue = _getDefault(dynamicHandler, theConfig, cfgDefaults);
    }
    else {
        defValue = defaultValue;
    }
    if (blkDynamicValue) {
        dynamicHandler.blkVal(theConfig, name);
    }
    var theValue;
    var usingDefault = true;
    var cfgValue = theConfig[name];
    if (cfgValue || !isNullOrUndefined(cfgValue)) {
        theValue = cfgValue;
        usingDefault = false;
        if (isValid && theValue !== defValue && !isValid(theValue)) {
            theValue = defValue;
            usingDefault = true;
        }
        if (setFn) {
            theValue = setFn(theValue, defValue, theConfig);
            usingDefault = theValue === defValue;
        }
    }
    if (!usingDefault) {
        if (isPlainObject(theValue) || isArray(defValue)) {
            if (mergeDf && defValue && (isPlainObject(defValue) || isArray(defValue))) {
                objForEachKey(defValue, function (dfName, dfValue) {
                    _applyDefaultValue(dynamicHandler, theValue, dfName, dfValue);
                });
            }
        }
    }
    else if (defValue) {
        theValue = _resolveDefaultValue(dynamicHandler, theConfig, defValue);
    }
    else {
        theValue = defValue;
    }
    dynamicHandler.set(theConfig, name, theValue);
    if (reference) {
        dynamicHandler.ref(theConfig, name);
    }
    if (readOnly) {
        dynamicHandler.rdOnly(theConfig, name);
    }
}

var CFG_HANDLER_LINK = symbolFor("[[ai_dynCfg_1]]");
var BLOCK_DYNAMIC = symbolFor("[[ai_blkDynCfg_1]]");
var FORCE_DYNAMIC = symbolFor("[[ai_frcDynCfg_1]]");
function _cfgDeepCopy(source) {
    if (source) {
        var target_1;
        if (isArray(source)) {
            target_1 = [];
            target_1[_DYN_LENGTH$2 ] = source[_DYN_LENGTH$2 ];
        }
        else if (isPlainObject(source)) {
            target_1 = {};
        }
        if (target_1) {
            objForEachKey(source, function (key, value) {
                target_1[key] = _cfgDeepCopy(value);
            });
            return target_1;
        }
    }
    return source;
}
function getDynamicConfigHandler(value) {
    if (value) {
        var handler = value[CFG_HANDLER_LINK] || value;
        if (handler.cfg && (handler.cfg === value || handler.cfg[CFG_HANDLER_LINK] === handler)) {
            return handler;
        }
    }
    return null;
}
function blockDynamicConversion(value) {
    if (value && (isPlainObject(value) || isArray(value))) {
        try {
            value[BLOCK_DYNAMIC] = true;
        }
        catch (e) {
        }
    }
    return value;
}
function _canMakeDynamic(getFunc, state, value) {
    var result = false;
    if (value && !getFunc[state.blkVal]) {
        result = value[FORCE_DYNAMIC];
        if (!result && !value[BLOCK_DYNAMIC]) {
            result = isPlainObject(value) || isArray(value);
        }
    }
    return result;
}
function throwInvalidAccess(message) {
    throwTypeError("InvalidAccess:" + message);
}

var arrayMethodsToPatch = [
    "push",
    "pop",
    "shift",
    "unshift",
    "splice"
];
var _throwDynamicError = function (logger, name, desc, e) {
    logger && logger[_DYN_THROW_INTERNAL ](3 , 108 , "".concat(desc, " [").concat(name, "] failed - ") + dumpObj(e));
};
function _patchArray(state, target, name) {
    if (isArray(target)) {
        arrForEach(arrayMethodsToPatch, function (method) {
            var orgMethod = target[method];
            target[method] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var result = orgMethod[_DYN_APPLY ](this, args);
                _makeDynamicObject(state, target, name, "Patching");
                return result;
            };
        });
    }
}
function _getOwnPropGetter(target, name) {
    var propDesc = objGetOwnPropertyDescriptor(target, name);
    return propDesc && propDesc.get;
}
function _createDynamicProperty(state, theConfig, name, value) {
    var detail = {
        n: name,
        h: [],
        trk: function (handler) {
            if (handler && handler.fn) {
                if (arrIndexOf(detail.h, handler) === -1) {
                    detail.h[_DYN_PUSH$1 ](handler);
                }
                state.trk(handler, detail);
            }
        },
        clr: function (handler) {
            var idx = arrIndexOf(detail.h, handler);
            if (idx !== -1) {
                detail.h[_DYN_SPLICE ](idx, 1);
            }
        }
    };
    var checkDynamic = true;
    var isObjectOrArray = false;
    function _getProperty() {
        if (checkDynamic) {
            isObjectOrArray = isObjectOrArray || _canMakeDynamic(_getProperty, state, value);
            if (value && !value[CFG_HANDLER_LINK] && isObjectOrArray) {
                value = _makeDynamicObject(state, value, name, "Converting");
            }
            checkDynamic = false;
        }
        var activeHandler = state.act;
        if (activeHandler) {
            detail.trk(activeHandler);
        }
        return value;
    }
    _getProperty[state.prop] = {
        chng: function () {
            state.add(detail);
        }
    };
    function _setProperty(newValue) {
        if (value !== newValue) {
            if (!!_getProperty[state.ro] && !state.upd) {
                throwInvalidAccess("[" + name + "] is read-only:" + dumpObj(theConfig));
            }
            if (checkDynamic) {
                isObjectOrArray = isObjectOrArray || _canMakeDynamic(_getProperty, state, value);
                checkDynamic = false;
            }
            var isReferenced = isObjectOrArray && _getProperty[state.rf];
            if (isObjectOrArray) {
                if (isReferenced) {
                    objForEachKey(value, function (key) {
                        value[key] = newValue ? newValue[key] : UNDEFINED_VALUE;
                    });
                    try {
                        objForEachKey(newValue, function (key, theValue) {
                            _setDynamicProperty(state, value, key, theValue);
                        });
                        newValue = value;
                    }
                    catch (e) {
                        _throwDynamicError((state.hdlr || {})[_DYN_LOGGER ], name, "Assigning", e);
                        isObjectOrArray = false;
                    }
                }
                else if (value && value[CFG_HANDLER_LINK]) {
                    objForEachKey(value, function (key) {
                        var getter = _getOwnPropGetter(value, key);
                        if (getter) {
                            var valueState = getter[state.prop];
                            valueState && valueState.chng();
                        }
                    });
                }
            }
            if (newValue !== value) {
                var newIsObjectOrArray = newValue && _canMakeDynamic(_getProperty, state, newValue);
                if (!isReferenced && newIsObjectOrArray) {
                    newValue = _makeDynamicObject(state, newValue, name, "Converting");
                }
                value = newValue;
                isObjectOrArray = newIsObjectOrArray;
            }
            state.add(detail);
        }
    }
    objDefine(theConfig, detail.n, { g: _getProperty, s: _setProperty });
}
function _setDynamicProperty(state, target, name, value) {
    if (target) {
        var getter = _getOwnPropGetter(target, name);
        var isDynamic = getter && !!getter[state.prop];
        if (!isDynamic) {
            _createDynamicProperty(state, target, name, value);
        }
        else {
            target[name] = value;
        }
    }
    return target;
}
function _setDynamicPropertyState(state, target, name, flags) {
    if (target) {
        var getter = _getOwnPropGetter(target, name);
        var isDynamic = getter && !!getter[state.prop];
        var inPlace = flags && flags[0 ];
        var rdOnly = flags && flags[1 ];
        var blkProp = flags && flags[2 ];
        if (!isDynamic) {
            if (blkProp) {
                try {
                    blockDynamicConversion(target);
                }
                catch (e) {
                    _throwDynamicError((state.hdlr || {})[_DYN_LOGGER ], name, "Blocking", e);
                }
            }
            try {
                _setDynamicProperty(state, target, name, target[name]);
                getter = _getOwnPropGetter(target, name);
            }
            catch (e) {
                _throwDynamicError((state.hdlr || {})[_DYN_LOGGER ], name, "State", e);
            }
        }
        if (inPlace) {
            getter[state.rf] = inPlace;
        }
        if (rdOnly) {
            getter[state.ro] = rdOnly;
        }
        if (blkProp) {
            getter[state.blkVal] = true;
        }
    }
    return target;
}
function _makeDynamicObject(state, target, name, desc) {
    try {
        objForEachKey(target, function (key, value) {
            _setDynamicProperty(state, target, key, value);
        });
        if (!target[CFG_HANDLER_LINK]) {
            objDefineProp(target, CFG_HANDLER_LINK, {
                get: function () {
                    return state.hdlr;
                }
            });
            _patchArray(state, target, name);
        }
    }
    catch (e) {
        _throwDynamicError((state.hdlr || {})[_DYN_LOGGER ], name, desc, e);
    }
    return target;
}

var symPrefix = "[[ai_";
var symPostfix = "]]";
function _createState(cfgHandler) {
    var dynamicPropertySymbol = newSymbol(symPrefix + "get" + cfgHandler.uid + symPostfix);
    var dynamicPropertyReadOnly = newSymbol(symPrefix + "ro" + cfgHandler.uid + symPostfix);
    var dynamicPropertyReferenced = newSymbol(symPrefix + "rf" + cfgHandler.uid + symPostfix);
    var dynamicPropertyBlockValue = newSymbol(symPrefix + "blkVal" + cfgHandler.uid + symPostfix);
    var dynamicPropertyDetail = newSymbol(symPrefix + "dtl" + cfgHandler.uid + symPostfix);
    var _waitingHandlers = null;
    var _watcherTimer = null;
    var theState;
    function _useHandler(activeHandler, callback) {
        var prevWatcher = theState.act;
        try {
            theState.act = activeHandler;
            if (activeHandler && activeHandler[dynamicPropertyDetail]) {
                arrForEach(activeHandler[dynamicPropertyDetail], function (detail) {
                    detail.clr(activeHandler);
                });
                activeHandler[dynamicPropertyDetail] = [];
            }
            callback({
                cfg: cfgHandler.cfg,
                set: cfgHandler.set.bind(cfgHandler),
                setDf: cfgHandler.setDf.bind(cfgHandler),
                ref: cfgHandler.ref.bind(cfgHandler),
                rdOnly: cfgHandler.rdOnly.bind(cfgHandler)
            });
        }
        catch (e) {
            var logger = cfgHandler[_DYN_LOGGER ];
            if (logger) {
                logger[_DYN_THROW_INTERNAL ](1 , 107 , dumpObj(e));
            }
            throw e;
        }
        finally {
            theState.act = prevWatcher || null;
        }
    }
    function _notifyWatchers() {
        if (_waitingHandlers) {
            var notifyHandlers = _waitingHandlers;
            _waitingHandlers = null;
            _watcherTimer && _watcherTimer[_DYN_CANCEL ]();
            _watcherTimer = null;
            var watcherFailures_1 = [];
            arrForEach(notifyHandlers, function (handler) {
                if (handler) {
                    if (handler[dynamicPropertyDetail]) {
                        arrForEach(handler[dynamicPropertyDetail], function (detail) {
                            detail.clr(handler);
                        });
                        handler[dynamicPropertyDetail] = null;
                    }
                    if (handler.fn) {
                        try {
                            _useHandler(handler, handler.fn);
                        }
                        catch (e) {
                            watcherFailures_1[_DYN_PUSH$1 ](e);
                        }
                    }
                }
            });
            if (_waitingHandlers) {
                try {
                    _notifyWatchers();
                }
                catch (e) {
                    watcherFailures_1[_DYN_PUSH$1 ](e);
                }
            }
            if (watcherFailures_1[_DYN_LENGTH$2 ] > 0) {
                throwAggregationError("Watcher error(s): ", watcherFailures_1);
            }
        }
    }
    function _addWatcher(detail) {
        if (detail && detail.h[_DYN_LENGTH$2 ] > 0) {
            if (!_waitingHandlers) {
                _waitingHandlers = [];
            }
            if (!_watcherTimer) {
                _watcherTimer = scheduleTimeout(function () {
                    _watcherTimer = null;
                    _notifyWatchers();
                }, 0);
            }
            for (var idx = 0; idx < detail.h[_DYN_LENGTH$2 ]; idx++) {
                var handler = detail.h[idx];
                if (handler && arrIndexOf(_waitingHandlers, handler) === -1) {
                    _waitingHandlers[_DYN_PUSH$1 ](handler);
                }
            }
        }
    }
    function _trackHandler(handler, detail) {
        if (handler) {
            var details = handler[dynamicPropertyDetail] = handler[dynamicPropertyDetail] || [];
            if (arrIndexOf(details, detail) === -1) {
                details[_DYN_PUSH$1 ](detail);
            }
        }
    }
    theState = {
        prop: dynamicPropertySymbol,
        ro: dynamicPropertyReadOnly,
        rf: dynamicPropertyReferenced,
        blkVal: dynamicPropertyBlockValue,
        hdlr: cfgHandler,
        add: _addWatcher,
        notify: _notifyWatchers,
        use: _useHandler,
        trk: _trackHandler
    };
    return theState;
}

function _createAndUseHandler(state, configHandler) {
    var handler = {
        fn: configHandler,
        rm: function () {
            handler.fn = null;
            state = null;
            configHandler = null;
        }
    };
    objDefine(handler, "toJSON", { v: function () { return "WatcherHandler" + (handler.fn ? STR_EMPTY$1 : "[X]"); } });
    state.use(handler, configHandler);
    return handler;
}
function _createDynamicHandler(logger, target, inPlace) {
    var dynamicHandler = getDynamicConfigHandler(target);
    if (dynamicHandler) {
        return dynamicHandler;
    }
    var uid = createUniqueNamespace("dyncfg", true);
    var newTarget = (target && inPlace !== false) ? target : _cfgDeepCopy(target);
    var theState;
    function _notifyWatchers() {
        theState.notify();
    }
    function _setValue(target, name, value) {
        try {
            target = _setDynamicProperty(theState, target, name, value);
        }
        catch (e) {
            _throwDynamicError(logger, name, "Setting value", e);
        }
        return target[name];
    }
    function _watch(configHandler) {
        return _createAndUseHandler(theState, configHandler);
    }
    function _block(configHandler, allowUpdate) {
        theState.use(null, function (details) {
            var prevUpd = theState.upd;
            try {
                if (!isUndefined(allowUpdate)) {
                    theState.upd = allowUpdate;
                }
                configHandler(details);
            }
            finally {
                theState.upd = prevUpd;
            }
        });
    }
    function _ref(target, name) {
        var _a;
        return _setDynamicPropertyState(theState, target, name, (_a = {}, _a[0 ] = true, _a))[name];
    }
    function _rdOnly(target, name) {
        var _a;
        return _setDynamicPropertyState(theState, target, name, (_a = {}, _a[1 ] = true, _a))[name];
    }
    function _blkPropValue(target, name) {
        var _a;
        return _setDynamicPropertyState(theState, target, name, (_a = {}, _a[2 ] = true, _a))[name];
    }
    function _applyDefaults(theConfig, defaultValues) {
        if (defaultValues) {
            objForEachKey(defaultValues, function (name, value) {
                _applyDefaultValue(cfgHandler, theConfig, name, value);
            });
        }
        return theConfig;
    }
    var cfgHandler = {
        uid: null,
        cfg: newTarget,
        logger: logger,
        notify: _notifyWatchers,
        set: _setValue,
        setDf: _applyDefaults,
        watch: _watch,
        ref: _ref,
        rdOnly: _rdOnly,
        blkVal: _blkPropValue,
        _block: _block
    };
    objDefine(cfgHandler, "uid", {
        c: false,
        e: false,
        w: false,
        v: uid
    });
    theState = _createState(cfgHandler);
    _makeDynamicObject(theState, newTarget, "config", "Creating");
    return cfgHandler;
}
function _logInvalidAccess(logger, message) {
    if (logger) {
        logger[_DYN_WARN_TO_CONSOLE ](message);
        logger[_DYN_THROW_INTERNAL ](2 , 108 , message);
    }
    else {
        throwInvalidAccess(message);
    }
}
function createDynamicConfig(config, defaultConfig, logger, inPlace) {
    var dynamicHandler = _createDynamicHandler(logger, config || {}, inPlace);
    if (defaultConfig) {
        dynamicHandler.setDf(dynamicHandler.cfg, defaultConfig);
    }
    return dynamicHandler;
}
function onConfigChange(config, configHandler, logger) {
    var handler = config[CFG_HANDLER_LINK] || config;
    if (handler.cfg && (handler.cfg === config || handler.cfg[CFG_HANDLER_LINK] === handler)) {
        return handler[_DYN_WATCH ](configHandler);
    }
    _logInvalidAccess(logger, STR_NOT_DYNAMIC_ERROR + dumpObj(config));
    return createDynamicConfig(config, null, logger)[_DYN_WATCH ](configHandler);
}

var DisabledPropertyName = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation";
var ChannelControllerPriority = 500;
var strNotSpecified = "not_specified";
var strIkey = "iKey";

var listenerFuncs = [STR_EVENTS_SENT, STR_EVENTS_DISCARDED, STR_EVENTS_SEND_REQUEST, STR_PERF_EVENT];
var _aiNamespace = null;
var _debugListener;
function _listenerProxyFunc(name, config) {
    return function () {
        var args = arguments;
        var dbgExt = getDebugExt(config);
        if (dbgExt) {
            var listener = dbgExt.listener;
            if (listener && listener[name]) {
                listener[name][_DYN_APPLY ](listener, args);
            }
        }
    };
}
function _getExtensionNamespace() {
    var target = getInst("Microsoft");
    if (target) {
        _aiNamespace = target["ApplicationInsights"];
    }
    return _aiNamespace;
}
function getDebugExt(config) {
    var ns = _aiNamespace;
    if (!ns && config.disableDbgExt !== true) {
        ns = _aiNamespace || _getExtensionNamespace();
    }
    return ns ? ns["ChromeDbgExt"] : null;
}
function getDebugListener(config) {
    if (!_debugListener) {
        _debugListener = {};
        for (var lp = 0; lp < listenerFuncs[_DYN_LENGTH$2 ]; lp++) {
            _debugListener[listenerFuncs[lp]] = _listenerProxyFunc(listenerFuncs[lp], config);
        }
    }
    return _debugListener;
}

var _a$7;
var STR_WARN_TO_CONSOLE = "warnToConsole";
var AiNonUserActionablePrefix = "AI (Internal): ";
var AiUserActionablePrefix = "AI: ";
var AIInternalMessagePrefix = "AITR_";
var defaultValues$3 = {
    loggingLevelConsole: 0,
    loggingLevelTelemetry: 1,
    maxMessageLimit: 25,
    enableDebug: false
};
var _logFuncs = (_a$7 = {},
    _a$7[0 ] = null,
    _a$7[1 ] = "errorToConsole",
    _a$7[2 ] = STR_WARN_TO_CONSOLE,
    _a$7[3 ] = "debugToConsole",
    _a$7);
function _sanitizeDiagnosticText(text) {
    if (text) {
        return "\"" + text[_DYN_REPLACE ](/\"/g, STR_EMPTY$1) + "\"";
    }
    return STR_EMPTY$1;
}
function _logToConsole(func, message) {
    var theConsole = getConsole();
    if (!!theConsole) {
        var logFunc = "log";
        if (theConsole[func]) {
            logFunc = func;
        }
        if (isFunction(theConsole[logFunc])) {
            theConsole[logFunc](message);
        }
    }
}
var _InternalLogMessage = /** @class */ (function () {
    function _InternalLogMessage(msgId, msg, isUserAct, properties) {
        if (isUserAct === void 0) { isUserAct = false; }
        var _self = this;
        _self[_DYN_MESSAGE_ID ] = msgId;
        _self[_DYN_MESSAGE ] =
            (isUserAct ? AiUserActionablePrefix : AiNonUserActionablePrefix) +
                msgId;
        var strProps = STR_EMPTY$1;
        if (hasJSON()) {
            strProps = getJSON()[_DYN_STRINGIFY ](properties);
        }
        var diagnosticText = (msg ? " message:" + _sanitizeDiagnosticText(msg) : STR_EMPTY$1) +
            (properties ? " props:" + _sanitizeDiagnosticText(strProps) : STR_EMPTY$1);
        _self[_DYN_MESSAGE ] += diagnosticText;
    }
    _InternalLogMessage.dataType = "MessageData";
    return _InternalLogMessage;
}());
/*#__NO_SIDE_EFFECTS__*/
function safeGetLogger(core, config) {
    return (core || {})[_DYN_LOGGER ] || new DiagnosticLogger(config || (core || {})[_DYN_CONFIG$1 ]);
}
var DiagnosticLogger = /** @class */ (function () {
    function DiagnosticLogger(config) {
        this.identifier = "DiagnosticLogger";
        this.queue = [];
        var _messageCount = 0;
        var _messageLogged = {};
        var _loggingLevelConsole;
        var _loggingLevelTelemetry;
        var _maxInternalMessageLimit;
        var _enableDebug;
        var _unloadHandler;
        dynamicProto(DiagnosticLogger, this, function (_self) {
            _unloadHandler = _setDefaultsFromConfig(config || {});
            _self.consoleLoggingLevel = function () { return _loggingLevelConsole; };
            _self[_DYN_THROW_INTERNAL ] = function (severity, msgId, msg, properties, isUserAct) {
                if (isUserAct === void 0) { isUserAct = false; }
                var message = new _InternalLogMessage(msgId, msg, isUserAct, properties);
                if (_enableDebug) {
                    throw dumpObj(message);
                }
                else {
                    var logFunc = _logFuncs[severity] || STR_WARN_TO_CONSOLE;
                    if (!isUndefined(message[_DYN_MESSAGE ])) {
                        if (isUserAct) {
                            var messageKey = +message[_DYN_MESSAGE_ID ];
                            if (!_messageLogged[messageKey] && _loggingLevelConsole >= severity) {
                                _self[logFunc](message[_DYN_MESSAGE ]);
                                _messageLogged[messageKey] = true;
                            }
                        }
                        else {
                            if (_loggingLevelConsole >= severity) {
                                _self[logFunc](message[_DYN_MESSAGE ]);
                            }
                        }
                        _logInternalMessage(severity, message);
                    }
                    else {
                        _debugExtMsg("throw" + (severity === 1  ? "Critical" : "Warning"), message);
                    }
                }
            };
            _self.debugToConsole = function (message) {
                _logToConsole("debug", message);
                _debugExtMsg("warning", message);
            };
            _self[_DYN_WARN_TO_CONSOLE ] = function (message) {
                _logToConsole("warn", message);
                _debugExtMsg("warning", message);
            };
            _self.errorToConsole = function (message) {
                _logToConsole("error", message);
                _debugExtMsg("error", message);
            };
            _self.resetInternalMessageCount = function () {
                _messageCount = 0;
                _messageLogged = {};
            };
            _self.logInternalMessage = _logInternalMessage;
            _self[_DYN_UNLOAD ] = function (isAsync) {
                _unloadHandler && _unloadHandler.rm();
                _unloadHandler = null;
            };
            objDefine(_self, "dbgMode", {
                g: function () { return _enableDebug; }
            });
            function _logInternalMessage(severity, message) {
                if (_areInternalMessagesThrottled()) {
                    return;
                }
                var logMessage = true;
                var messageKey = AIInternalMessagePrefix + message[_DYN_MESSAGE_ID ];
                if (_messageLogged[messageKey]) {
                    logMessage = false;
                }
                else {
                    _messageLogged[messageKey] = true;
                }
                if (logMessage) {
                    if (severity <= _loggingLevelTelemetry) {
                        _self.queue[_DYN_PUSH$1 ](message);
                        _messageCount++;
                        _debugExtMsg((severity === 1  ? "error" : "warn"), message);
                    }
                    if (_messageCount === _maxInternalMessageLimit) {
                        var throttleLimitMessage = "Internal events throttle limit per PageView reached for this app.";
                        var throttleMessage = new _InternalLogMessage(23 , throttleLimitMessage, false);
                        _self.queue[_DYN_PUSH$1 ](throttleMessage);
                        if (severity === 1 ) {
                            _self.errorToConsole(throttleLimitMessage);
                        }
                        else {
                            _self[_DYN_WARN_TO_CONSOLE ](throttleLimitMessage);
                        }
                    }
                }
            }
            function _setDefaultsFromConfig(config) {
                return onConfigChange(createDynamicConfig(config, defaultValues$3, _self).cfg, function (details) {
                    var config = details.cfg;
                    _loggingLevelConsole = config[_DYN_LOGGING_LEVEL_CONSOL4 ];
                    _loggingLevelTelemetry = config.loggingLevelTelemetry;
                    _maxInternalMessageLimit = config.maxMessageLimit;
                    _enableDebug = config.enableDebug;
                });
            }
            function _areInternalMessagesThrottled() {
                return _messageCount >= _maxInternalMessageLimit;
            }
            function _debugExtMsg(name, data) {
                var dbgExt = getDebugExt(config || {});
                if (dbgExt && dbgExt[_DYN_DIAG_LOG$1 ]) {
                    dbgExt[_DYN_DIAG_LOG$1 ](name, data);
                }
            }
        });
    }
    DiagnosticLogger.__ieDyn=1;
    return DiagnosticLogger;
}());
function _getLogger(logger) {
    return (logger || new DiagnosticLogger());
}
function _throwInternal(logger, severity, msgId, msg, properties, isUserAct) {
    if (isUserAct === void 0) { isUserAct = false; }
    _getLogger(logger)[_DYN_THROW_INTERNAL ](severity, msgId, msg, properties, isUserAct);
}
function _warnToConsole(logger, message) {
    _getLogger(logger)[_DYN_WARN_TO_CONSOLE ](message);
}

function _noopVoid() {
}

var MAX_TRACE_STATE_MEMBERS = 32;
var MAX_TRACE_STATE_LEN = 512;
var LCALPHA = "[a-z]";
var LCALPHA_DIGIT = "[a-z\\d]";
var LCALPHA_DIGIT_UNDERSCORE_DASH_STAR_SLASH = "[a-z\\d_\\-*\\/]";
var SIMPLE_KEY = "(" + LCALPHA + LCALPHA_DIGIT_UNDERSCORE_DASH_STAR_SLASH + "{0,255})";
var TENANT_ID = "(" + LCALPHA_DIGIT + LCALPHA_DIGIT_UNDERSCORE_DASH_STAR_SLASH + "{0,240})";
var SYSTEM_ID = "(" + LCALPHA + LCALPHA_DIGIT_UNDERSCORE_DASH_STAR_SLASH + "{0,13})";
var MULTI_TENANT_KEY = "(" + TENANT_ID + "@" + SYSTEM_ID + ")";
var NBLK_CHAR = "\x21-\x2B\\--\x3C\x3E-\x7E";
var TRACESTATE_VALUE = "[\x20" + NBLK_CHAR + "]{0,255}[" + NBLK_CHAR + "]";
var TRACESTATE_KVP_REGEX = (/*#__PURE__*/new RegExp("^\\s*((?:" + SIMPLE_KEY + "|" + MULTI_TENANT_KEY + ")=(" + TRACESTATE_VALUE + "))\\s*$"));
function _parseListMember(value) {
    if (value) {
        TRACESTATE_KVP_REGEX.lastIndex = 0;
        var match = TRACESTATE_KVP_REGEX.exec(value);
        if (match && match[_DYN_LENGTH$2 ] >= 7 && match[1] && match[6]) {
            var type = match[3] ? 1  : 0 ;
            var multiTenant = null;
            if (type === 1 ) {
                multiTenant = {
                    tenantId: match[4],
                    systemId: match[5]
                };
            }
            var parts = {
                type: type,
                key: match[2],
                multiTenant: multiTenant,
                value: match[6]
            };
            return parts;
        }
    }
    return null;
}
function _parseTraceStateList(value) {
    var items = [];
    if (value) {
        var addedKeys_1 = [];
        arrForEach(strSplit(value, ","), function (member) {
            var parts = _parseListMember(member);
            if (parts) {
                if (arrIndexOf(addedKeys_1, parts.key) === -1) {
                    items[_DYN_PUSH$1 ](parts);
                    addedKeys_1[_DYN_PUSH$1 ](parts.key);
                    if (items[_DYN_LENGTH$2 ] >= MAX_TRACE_STATE_MEMBERS) {
                        return -1;
                    }
                }
            }
        });
    }
    return items;
}
function _indexOf(items, key) {
    for (var lp = 0; lp < items[_DYN_LENGTH$2 ]; lp++) {
        if (items[lp].key === key) {
            return lp;
        }
    }
    return -1;
}
function _keys(items, parent) {
    var keys = [];
    var delKeys = [];
    arrForEach(items, function (member) {
        if (member[_DYN_VALUE ] != null) {
            keys[_DYN_PUSH$1 ](member.key);
        }
        else {
            delKeys[_DYN_PUSH$1 ](member.key);
        }
    });
    if (parent) {
        arrForEach(parent.keys, function (key) {
            if (arrIndexOf(keys, key) === -1 && arrIndexOf(delKeys, key) === -1) {
                keys[_DYN_PUSH$1 ](key);
            }
        });
    }
    return keys;
}
/*#__NO_SIDE_EFFECTS__*/
function _isEmpty(items, parent) {
    var delKeys;
    var isEmpty = true;
    if (items && items[_DYN_LENGTH$2 ] > 0) {
        arrForEach(items, function (member) {
            if (member[_DYN_VALUE ] != null) {
                isEmpty = false;
            }
            else {
                if (!delKeys) {
                    delKeys = [];
                }
                delKeys[_DYN_PUSH$1 ](member.key);
            }
        });
    }
    if (isEmpty && parent) {
        isEmpty = parent.isEmpty;
        if (!isEmpty && delKeys && delKeys[_DYN_LENGTH$2 ] > 0) {
            isEmpty = true;
            arrForEach(parent.keys, function (key) {
                if (arrIndexOf(delKeys, key) === -1) {
                    isEmpty = false;
                    return -1;
                }
            });
        }
    }
    return isEmpty;
}
/*#__NO_SIDE_EFFECTS__*/
function isW3cTraceState(value) {
    return !!(value && isArray(value.keys) && isFunction(value.get) && isFunction(value.set) && isFunction(value.del) && isFunction(value.hdrs));
}
/*#__NO_SIDE_EFFECTS__*/
function createW3cTraceState(value, parent) {
    var cachedItems = safeGetDeferred(_parseTraceStateList, [], [value || STR_EMPTY$1]);
    function _get(key) {
        var value;
        var theItems = cachedItems.v;
        var idx = _indexOf(theItems, key);
        if (idx !== -1) {
            var itmValue = theItems[idx][_DYN_VALUE ];
            if (itmValue != null) {
                value = itmValue;
            }
        }
        else if (parent) {
            value = parent.get(key);
        }
        return value;
    }
    function _setMember(member) {
        if (member) {
            var theItems = cachedItems.v;
            var idx = _indexOf(theItems, member.key);
            if (idx !== -1) {
                theItems[_DYN_SPLICE ](idx, 1);
            }
            theItems.unshift(member);
            cachedItems = createCachedValue(theItems);
            return 0;
        }
        return -1;
    }
    function _set(key, value) {
        var member;
        if (key && isString(key) && !isNullOrUndefined(value) && isString(value)) {
            member = _parseListMember(key + "=" + value);
        }
        return _setMember(member);
    }
    function _del(key) {
        _setMember({
            type: 2 ,
            key: key
        });
    }
    function _headers(maxHeaders, maxKeys, maxLen) {
        var results = [];
        var result = STR_EMPTY$1;
        var numKeys = 0;
        var len = 0;
        maxKeys = maxKeys || MAX_TRACE_STATE_MEMBERS;
        maxLen = maxLen || MAX_TRACE_STATE_LEN;
        var theItems = cachedItems.v;
        arrForEach(_keys(theItems, parent), function (key) {
            var value = _get(key);
            if (!isNullOrUndefined(value) && isString(value)) {
                numKeys++;
                var val = key + "=" + value;
                var valLen = val[_DYN_LENGTH$2 ];
                if (len + 1 + valLen >= maxLen) {
                    results[_DYN_PUSH$1 ](result);
                    if (maxHeaders && results[_DYN_LENGTH$2 ] <= maxHeaders) {
                        return -1;
                    }
                    result = STR_EMPTY$1;
                    len = 0;
                }
                if (result[_DYN_LENGTH$2 ] > 0) {
                    result += ",";
                    len++;
                }
                result += val;
                len += valLen;
                if (numKeys >= maxKeys) {
                    return -1;
                }
            }
        });
        if (result) {
            results[_DYN_PUSH$1 ](result);
        }
        return results;
    }
    var traceStateList = {
        keys: [],
        isEmpty: false,
        get: _get,
        set: _set,
        del: _del,
        hdrs: _headers,
        child: function () { return createW3cTraceState(null, traceStateList); }
    };
    function _toString() {
        var headers = traceStateList.hdrs(1);
        return headers[_DYN_LENGTH$2 ] > 0 ? headers[0] : STR_EMPTY$1;
    }
    objDefineProps(traceStateList, {
        "keys": {
            g: function () { return _keys(cachedItems.v, parent); }
        },
        "isEmpty": {
            g: function () { return _isEmpty(cachedItems.v, parent); }
        },
        "toString": {
            v: _toString,
            e: false
        },
        "_p": {
            v: parent,
            e: false
        }
    });
    setObjStringTag(traceStateList, _toString);
    return traceStateList;
}
/*#__NO_SIDE_EFFECTS__*/
function findW3cTraceState() {
    var name = "tracestate";
    var traceState = null;
    var metaTags = findMetaTags(name);
    if (metaTags[_DYN_LENGTH$2 ] > 0) {
        traceState = createW3cTraceState(metaTags[_DYN_JOIN ](","));
    }
    if (!traceState) {
        var serverTimings = findNamedServerTimings(name);
        if (serverTimings[_DYN_LENGTH$2 ] > 0) {
            traceState = createW3cTraceState(serverTimings[_DYN_JOIN ](","));
        }
    }
    return traceState;
}

function newGuid() {
    var uuid = generateW3CId();
    return strSubstring(uuid, 0, 8) + "-" + strSubstring(uuid, 8, 12) + "-" + strSubstring(uuid, 12, 16) + "-" + strSubstring(uuid, 16, 20) + "-" + strSubstring(uuid, 20);
}
function generateW3CId() {
    var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    var oct = STR_EMPTY$1, tmp;
    for (var a = 0; a < 4; a++) {
        tmp = random32();
        oct +=
            hexValues[tmp & 0xF] +
                hexValues[tmp >> 4 & 0xF] +
                hexValues[tmp >> 8 & 0xF] +
                hexValues[tmp >> 12 & 0xF] +
                hexValues[tmp >> 16 & 0xF] +
                hexValues[tmp >> 20 & 0xF] +
                hexValues[tmp >> 24 & 0xF] +
                hexValues[tmp >> 28 & 0xF];
    }
    var clockSequenceHi = hexValues[8 + (random32() & 0x03) | 0];
    return strSubstr(oct, 0, 8) + strSubstr(oct, 9, 4) + "4" + strSubstr(oct, 13, 3) + clockSequenceHi + strSubstr(oct, 16, 3) + strSubstr(oct, 19, 12);
}

var TRACE_PARENT_REGEX = /^([\da-f]{2})-([\da-f]{32})-([\da-f]{16})-([\da-f]{2})(-[^\s]{1,64})?$/i;
var INVALID_VERSION = "ff";
var INVALID_TRACE_ID = "00000000000000000000000000000000";
var INVALID_SPAN_ID = "0000000000000000";
function _isValid(value, len, invalidValue) {
    if (value && value[_DYN_LENGTH$2 ] === len && value !== invalidValue) {
        return !!value.match(/^[\da-f]*$/i);
    }
    return false;
}
/*#__NO_SIDE_EFFECTS__*/
function parseTraceParent(value, selectIdx) {
    if (!value) {
        return null;
    }
    if (isArray(value)) {
        value = value[0] || STR_EMPTY$1;
    }
    if (!value || !isString(value) || value[_DYN_LENGTH$2 ] > 8192) {
        return null;
    }
    if (strIndexOf(value, ",") !== -1) {
        var values = value[_DYN_SPLIT$1 ](",");
        value = values[selectIdx > 0 && values[_DYN_LENGTH$2 ] > selectIdx ? selectIdx : 0];
    }
    TRACE_PARENT_REGEX.lastIndex = 0;
    var match = TRACE_PARENT_REGEX.exec(strTrim(value));
    if (!match ||
        match[1] === INVALID_VERSION ||
        match[2] === INVALID_TRACE_ID ||
        match[3] === INVALID_SPAN_ID) {
        return null;
    }
    return {
        version: (match[1] || STR_EMPTY$1)[_DYN_TO_LOWER_CASE$1 ](),
        traceId: (match[2] || STR_EMPTY$1)[_DYN_TO_LOWER_CASE$1 ](),
        spanId: (match[3] || STR_EMPTY$1)[_DYN_TO_LOWER_CASE$1 ](),
        traceFlags: parseInt(match[4], 16)
    };
}
/*#__NO_SIDE_EFFECTS__*/
function isValidTraceId(value) {
    return _isValid(value, 32, INVALID_TRACE_ID);
}
/*#__NO_SIDE_EFFECTS__*/
function isValidSpanId(value) {
    return _isValid(value, 16, INVALID_SPAN_ID);
}
function findW3cTraceParent(selectIdx) {
    var name = "traceparent";
    var traceParent = parseTraceParent(findMetaTag(name), selectIdx);
    if (!traceParent) {
        traceParent = parseTraceParent(findNamedServerTiming(name), selectIdx);
    }
    return traceParent;
}
function findAllScripts(doc) {
    var scripts = doc.getElementsByTagName("script");
    var result = [];
    arrForEach(scripts, function (script) {
        var src = script[_DYN_GET_ATTRIBUTE ]("src");
        if (src) {
            var crossOrigin = script[_DYN_GET_ATTRIBUTE ]("crossorigin");
            var async = script.hasAttribute("async") === true;
            var defer = script.hasAttribute("defer") === true;
            var referrerPolicy = script[_DYN_GET_ATTRIBUTE ]("referrerpolicy");
            var info = { url: src };
            if (crossOrigin) {
                info.crossOrigin = crossOrigin;
            }
            if (async) {
                info.async = async;
            }
            if (defer) {
                info.defer = defer;
            }
            if (referrerPolicy) {
                info.referrerPolicy = referrerPolicy;
            }
            result[_DYN_PUSH$1 ](info);
        }
    });
    return result;
}

function runTargetUnload(target, isAsync) {
    if (target && target[_DYN_UNLOAD ]) {
        return target[_DYN_UNLOAD ](isAsync);
    }
}
function doUnloadAll(targets, isAsync, done) {
    var result;
    if (!done) {
        result = createPromise$1(function (resolved) {
            done = resolved;
        });
    }
    if (targets && getLength(targets) > 0) {
        doAwaitResponse(runTargetUnload(targets[0], isAsync), function () {
            doUnloadAll(arrSlice(targets, 1), isAsync, done);
        });
    }
    else {
        done();
    }
    return result;
}

var _a$6, _b$1;
var strToGMTString = "toGMTString";
var strToUTCString = "toUTCString";
var strCookie = "cookie";
var strExpires = "expires";
var strIsCookieUseDisabled = "isCookieUseDisabled";
var strDisableCookiesUsage = "disableCookiesUsage";
var strConfigCookieMgr = "_ckMgr";
var _supportsCookies = null;
var _allowUaSameSite = null;
var _parsedCookieValue = null;
var _doc;
var _cookieCache = {};
var _globalCookieConfig = {};
var rootDefaultConfig = (_a$6 = {
        cookieCfg: cfgDfMerge((_b$1 = {},
            _b$1[STR_DOMAIN] = { fb: "cookieDomain", dfVal: isNotNullOrUndefined },
            _b$1.path = { fb: "cookiePath", dfVal: isNotNullOrUndefined },
            _b$1.enabled = UNDEFINED_VALUE,
            _b$1.ignoreCookies = UNDEFINED_VALUE,
            _b$1.blockedCookies = UNDEFINED_VALUE,
            _b$1.disableCookieDefer = false,
            _b$1)),
        cookieDomain: UNDEFINED_VALUE,
        cookiePath: UNDEFINED_VALUE
    },
    _a$6[strDisableCookiesUsage] = UNDEFINED_VALUE,
    _a$6);
function _getDoc() {
    !_doc && (_doc = getLazy(function () { return getDocument(); }));
}
function _gblCookieMgr(config, logger) {
    var inst = createCookieMgr[strConfigCookieMgr] || _globalCookieConfig[strConfigCookieMgr];
    if (!inst) {
        inst = createCookieMgr[strConfigCookieMgr] = createCookieMgr(config, logger);
        _globalCookieConfig[strConfigCookieMgr] = inst;
    }
    return inst;
}
function _isMgrEnabled(cookieMgr) {
    if (cookieMgr) {
        return cookieMgr.isEnabled();
    }
    return true;
}
function _isIgnoredCookie(cookieMgrCfg, name) {
    if (name && cookieMgrCfg && isArray(cookieMgrCfg.ignoreCookies)) {
        return arrIndexOf(cookieMgrCfg.ignoreCookies, name) !== -1;
    }
    return false;
}
function _isBlockedCookie(cookieMgrCfg, name) {
    if (name && cookieMgrCfg && isArray(cookieMgrCfg.blockedCookies)) {
        if (arrIndexOf(cookieMgrCfg.blockedCookies, name) !== -1) {
            return true;
        }
    }
    return _isIgnoredCookie(cookieMgrCfg, name);
}
function _isCfgEnabled(rootConfig, cookieMgrConfig) {
    var isCfgEnabled = cookieMgrConfig[_DYN_ENABLED ];
    if (isNullOrUndefined(isCfgEnabled)) {
        var cookieEnabled = void 0;
        if (!isUndefined(rootConfig[strIsCookieUseDisabled])) {
            cookieEnabled = !rootConfig[strIsCookieUseDisabled];
        }
        if (!isUndefined(rootConfig[strDisableCookiesUsage])) {
            cookieEnabled = !rootConfig[strDisableCookiesUsage];
        }
        isCfgEnabled = cookieEnabled;
    }
    return isCfgEnabled;
}
function safeGetCookieMgr(core, config) {
    var cookieMgr;
    if (core) {
        cookieMgr = core.getCookieMgr();
    }
    else if (config) {
        var cookieCfg = config.cookieCfg;
        if (cookieCfg && cookieCfg[strConfigCookieMgr]) {
            cookieMgr = cookieCfg[strConfigCookieMgr];
        }
        else {
            cookieMgr = createCookieMgr(config);
        }
    }
    if (!cookieMgr) {
        cookieMgr = _gblCookieMgr(config, (core || {})[_DYN_LOGGER ]);
    }
    return cookieMgr;
}
function createCookieMgr(rootConfig, logger) {
    var cookieMgrConfig;
    var _path;
    var _domain;
    var unloadHandler;
    var _enabled;
    var _getCookieFn;
    var _setCookieFn;
    var _delCookieFn;
    var _pendingCookies = [];
    function _formatDeletionValue(path) {
        var _a;
        var values = (_a = {},
            _a[STR_PATH] = path ? path : "/",
            _a[strExpires] = "Thu, 01 Jan 1970 00:00:01 GMT",
            _a);
        if (!isIE()) {
            values["max-age"] = "0";
        }
        return _formatCookieValue(STR_EMPTY$1, values);
    }
    function _formatSetCookieValue(value, maxAgeSec, domain, path) {
        var values = {};
        var theValue = strTrim(value || STR_EMPTY$1);
        var idx = strIndexOf(theValue, ";");
        if (idx !== -1) {
            theValue = strTrim(strLeft(value, idx));
            values = _extractParts(strSubstring(value, idx + 1));
        }
        setValue(values, STR_DOMAIN, domain || _domain, isTruthy, isUndefined);
        if (!isNullOrUndefined(maxAgeSec)) {
            var _isIE = isIE();
            if (isUndefined(values[strExpires])) {
                var nowMs = utcNow();
                var expireMs = nowMs + (maxAgeSec * 1000);
                if (expireMs > 0) {
                    var expiry = new Date();
                    expiry.setTime(expireMs);
                    setValue(values, strExpires, _formatDate(expiry, !_isIE ? strToUTCString : strToGMTString) || _formatDate(expiry, _isIE ? strToGMTString : strToUTCString) || STR_EMPTY$1, isTruthy);
                }
            }
            if (!_isIE) {
                setValue(values, "max-age", STR_EMPTY$1 + maxAgeSec, null, isUndefined);
            }
        }
        var location = getLocation();
        if (location && location.protocol === "https:") {
            setValue(values, "secure", null, null, isUndefined);
            if (_allowUaSameSite === null) {
                _allowUaSameSite = !uaDisallowsSameSiteNone(getUserAgentString());
            }
            if (_allowUaSameSite) {
                setValue(values, "SameSite", "None", null, isUndefined);
            }
        }
        setValue(values, STR_PATH, path || _path, null, isUndefined);
        return _formatCookieValue(theValue, values);
    }
    function _removePendingCookie(name) {
        if (_pendingCookies) {
            for (var i = _pendingCookies[_DYN_LENGTH$2 ] - 1; i >= 0; i--) {
                if (_pendingCookies[i].n === name) {
                    _pendingCookies[_DYN_SPLICE ](i, 1);
                }
            }
        }
    }
    function _flushPendingCookies() {
        if (areCookiesSupported(logger) && _pendingCookies) {
            arrForEach(_pendingCookies, function (pendingData) {
                if (!_isBlockedCookie(cookieMgrConfig, pendingData.n)) {
                    if (pendingData.o === 0 ) {
                        _setCookieFn(pendingData.n, pendingData.v);
                    }
                    else if (pendingData.o === 1 ) {
                        _delCookieFn(pendingData.n, pendingData.v);
                    }
                }
            });
            _pendingCookies = [];
        }
    }
    rootConfig = createDynamicConfig(rootConfig || _globalCookieConfig, null, logger).cfg;
    unloadHandler = onConfigChange(rootConfig, function (details) {
        details.setDf(details.cfg, rootDefaultConfig);
        cookieMgrConfig = details.ref(details.cfg, "cookieCfg");
        _path = cookieMgrConfig[STR_PATH ] || "/";
        _domain = cookieMgrConfig[STR_DOMAIN ];
        if (cookieMgrConfig.disableCookieDefer) {
            _pendingCookies = null;
        }
        else if (_pendingCookies === null) {
            _pendingCookies = [];
        }
        var wasEnabled = _enabled;
        _enabled = _isCfgEnabled(rootConfig, cookieMgrConfig) !== false;
        _getCookieFn = cookieMgrConfig.getCookie || _getCookieValue;
        _setCookieFn = cookieMgrConfig.setCookie || _setCookieValue;
        _delCookieFn = cookieMgrConfig.delCookie || _setCookieValue;
        if (!wasEnabled && _enabled && _pendingCookies) {
            _flushPendingCookies();
        }
    }, logger);
    var cookieMgr = {
        isEnabled: function () {
            var enabled = _isCfgEnabled(rootConfig, cookieMgrConfig) !== false && _enabled && areCookiesSupported(logger);
            var gblManager = _globalCookieConfig[strConfigCookieMgr];
            if (enabled && gblManager && cookieMgr !== gblManager) {
                enabled = _isMgrEnabled(gblManager);
            }
            return enabled;
        },
        setEnabled: function (value) {
            cookieMgrConfig[_DYN_ENABLED ] = value;
            if (!isUndefined(rootConfig[strDisableCookiesUsage])) {
                rootConfig[strDisableCookiesUsage] = !value;
            }
        },
        set: function (name, value, maxAgeSec, domain, path) {
            var result = false;
            var isBlocked = _isBlockedCookie(cookieMgrConfig, name);
            if (!isBlocked) {
                var cookieValue = _formatSetCookieValue(value, maxAgeSec, domain, path);
                if (_isMgrEnabled(cookieMgr)) {
                    _setCookieFn(name, cookieValue);
                    result = true;
                }
                else if (_pendingCookies) {
                    _removePendingCookie(name);
                    _pendingCookies[_DYN_PUSH$1 ]({
                        n: name,
                        o: 0 ,
                        v: cookieValue
                    });
                    result = true;
                }
            }
            return result;
        },
        get: function (name) {
            var value = STR_EMPTY$1;
            var isIgnored = _isIgnoredCookie(cookieMgrConfig, name);
            if (!isIgnored) {
                if (_isMgrEnabled(cookieMgr)) {
                    value = _getCookieFn(name);
                }
                else if (_pendingCookies) {
                    for (var i = _pendingCookies[_DYN_LENGTH$2 ] - 1; i >= 0; i--) {
                        var pendingData = _pendingCookies[i];
                        if (pendingData.n === name) {
                            if (pendingData.o === 0 ) {
                                var cookieValue = pendingData.v;
                                var idx = strIndexOf(cookieValue, ";");
                                value = idx !== -1 ? strTrim(strLeft(cookieValue, idx)) : strTrim(cookieValue);
                            }
                            break;
                        }
                    }
                }
            }
            return value;
        },
        del: function (name, path) {
            var result = false;
            if (_isMgrEnabled(cookieMgr)) {
                result = cookieMgr.purge(name, path);
            }
            else if (_pendingCookies) {
                _removePendingCookie(name);
                _pendingCookies[_DYN_PUSH$1 ]({
                    n: name,
                    o: 1 ,
                    v: _formatDeletionValue(path)
                });
                result = true;
            }
            return result;
        },
        purge: function (name, path) {
            var result = false;
            if (areCookiesSupported(logger)) {
                _delCookieFn(name, _formatDeletionValue(path));
                result = true;
            }
            return result;
        },
        unload: function (isAsync) {
            unloadHandler && unloadHandler.rm();
            unloadHandler = null;
            _pendingCookies = null;
        }
    };
    cookieMgr[strConfigCookieMgr] = cookieMgr;
    return cookieMgr;
}
function areCookiesSupported(logger) {
    if (_supportsCookies === null) {
        _supportsCookies = false;
        !_doc && _getDoc();
        try {
            var doc = _doc.v || {};
            _supportsCookies = doc[strCookie] !== undefined;
        }
        catch (e) {
            _throwInternal(logger, 2 , 68 , "Cannot access document.cookie - " + getExceptionName(e), { exception: dumpObj(e) });
        }
    }
    return _supportsCookies;
}
function _extractParts(theValue) {
    var values = {};
    if (theValue && theValue[_DYN_LENGTH$2 ]) {
        var parts = strTrim(theValue)[_DYN_SPLIT$1 ](";");
        arrForEach(parts, function (thePart) {
            thePart = strTrim(thePart || STR_EMPTY$1);
            if (thePart) {
                var idx = strIndexOf(thePart, "=");
                if (idx === -1) {
                    values[thePart] = null;
                }
                else {
                    values[strTrim(strLeft(thePart, idx))] = strTrim(strSubstring(thePart, idx + 1));
                }
            }
        });
    }
    return values;
}
function _formatDate(theDate, func) {
    if (isFunction(theDate[func])) {
        return theDate[func]();
    }
    return null;
}
function _formatCookieValue(value, values) {
    var cookieValue = value || STR_EMPTY$1;
    objForEachKey(values, function (name, theValue) {
        cookieValue += "; " + name + (!isNullOrUndefined(theValue) ? "=" + theValue : STR_EMPTY$1);
    });
    return cookieValue;
}
function _getCookieValue(name) {
    var cookieValue = STR_EMPTY$1;
    !_doc && _getDoc();
    if (_doc.v) {
        var theCookie = _doc.v[strCookie] || STR_EMPTY$1;
        if (_parsedCookieValue !== theCookie) {
            _cookieCache = _extractParts(theCookie);
            _parsedCookieValue = theCookie;
        }
        cookieValue = strTrim(_cookieCache[name] || STR_EMPTY$1);
    }
    return cookieValue;
}
function _setCookieValue(name, cookieValue) {
    !_doc && _getDoc();
    if (_doc.v) {
        _doc.v[strCookie] = name + "=" + cookieValue;
    }
}
function uaDisallowsSameSiteNone(userAgent) {
    if (!isString(userAgent)) {
        return false;
    }
    if (strContains(userAgent, "CPU iPhone OS 12") || strContains(userAgent, "iPad; CPU OS 12")) {
        return true;
    }
    if (strContains(userAgent, "Macintosh; Intel Mac OS X 10_14") && strContains(userAgent, "Version/") && strContains(userAgent, "Safari")) {
        return true;
    }
    if (strContains(userAgent, "Macintosh; Intel Mac OS X 10_14") && strEndsWith(userAgent, "AppleWebKit/605.1.15 (KHTML, like Gecko)")) {
        return true;
    }
    if (strContains(userAgent, "Chrome/5") || strContains(userAgent, "Chrome/6")) {
        return true;
    }
    if (strContains(userAgent, "UnrealEngine") && !strContains(userAgent, "Chrome")) {
        return true;
    }
    if (strContains(userAgent, "UCBrowser/12") || strContains(userAgent, "UCBrowser/11")) {
        return true;
    }
    return false;
}

var defaultValues$2 = {
    perfEvtsSendAll: false
};
function _runScheduledListeners(asyncNotifications) {
    asyncNotifications.h = null;
    var callbacks = asyncNotifications.cb;
    asyncNotifications.cb = [];
    arrForEach(callbacks, function (cb) {
        safe(cb.fn, [cb.arg]);
    });
}
function _runListeners(listeners, name, asyncNotifications, callback) {
    arrForEach(listeners, function (listener) {
        if (listener && listener[name]) {
            if (asyncNotifications) {
                asyncNotifications.cb[_DYN_PUSH$1 ]({
                    fn: callback,
                    arg: listener
                });
                asyncNotifications.h = asyncNotifications.h || scheduleTimeout(_runScheduledListeners, 0, asyncNotifications);
            }
            else {
                safe(callback, [listener]);
            }
        }
    });
}
var NotificationManager = /** @class */ (function () {
    function NotificationManager(config) {
        this.listeners = [];
        var perfEvtsSendAll;
        var unloadHandler;
        var _listeners = [];
        var _asyncNotifications = {
            h: null,
            cb: []
        };
        var cfgHandler = createDynamicConfig(config, defaultValues$2);
        unloadHandler = cfgHandler[_DYN_WATCH ](function (details) {
            perfEvtsSendAll = !!details.cfg.perfEvtsSendAll;
        });
        dynamicProto(NotificationManager, this, function (_self) {
            objDefine(_self, "listeners", {
                g: function () { return _listeners; }
            });
            _self[_DYN_ADD_NOTIFICATION_LIS1 ] = function (listener) {
                _listeners[_DYN_PUSH$1 ](listener);
            };
            _self[_DYN_REMOVE_NOTIFICATION_0 ] = function (listener) {
                var index = arrIndexOf(_listeners, listener);
                while (index > -1) {
                    _listeners[_DYN_SPLICE ](index, 1);
                    index = arrIndexOf(_listeners, listener);
                }
            };
            _self[STR_EVENTS_SENT ] = function (events) {
                _runListeners(_listeners, STR_EVENTS_SENT, _asyncNotifications, function (listener) {
                    listener[STR_EVENTS_SENT ](events);
                });
            };
            _self[STR_EVENTS_DISCARDED ] = function (events, reason, sendType) {
                _runListeners(_listeners, STR_EVENTS_DISCARDED, _asyncNotifications, function (listener) {
                    listener[STR_EVENTS_DISCARDED ](events, reason, sendType);
                });
            };
            _self[STR_EVENTS_SEND_REQUEST ] = function (sendReason, isAsync) {
                _runListeners(_listeners, STR_EVENTS_SEND_REQUEST, isAsync ? _asyncNotifications : null, function (listener) {
                    listener[STR_EVENTS_SEND_REQUEST ](sendReason, isAsync);
                });
            };
            _self[STR_PERF_EVENT ] = function (perfEvent) {
                if (perfEvent) {
                    if (perfEvtsSendAll || !perfEvent[_DYN_IS_CHILD_EVT ]()) {
                        _runListeners(_listeners, STR_PERF_EVENT, null, function (listener) {
                            if (perfEvent.isAsync) {
                                scheduleTimeout(function () { return listener[STR_PERF_EVENT ](perfEvent); }, 0);
                            }
                            else {
                                listener[STR_PERF_EVENT ](perfEvent);
                            }
                        });
                    }
                }
            };
            _self[STR_OFFLINE_STORE ] = function (events) {
                if (events && events[_DYN_LENGTH$2 ]) {
                    _runListeners(_listeners, STR_OFFLINE_STORE, _asyncNotifications, function (listener) {
                        listener[STR_OFFLINE_STORE ](events);
                    });
                }
            };
            _self[STR_OFFLINE_SENT ] = function (batch) {
                if (batch && batch[_DYN_DATA ]) {
                    _runListeners(_listeners, STR_OFFLINE_SENT, _asyncNotifications, function (listener) {
                        listener[STR_OFFLINE_SENT ](batch);
                    });
                }
            };
            _self[STR_OFFLINE_DROP ] = function (cnt, reason) {
                if (cnt > 0) {
                    var rn_1 = reason || 0;
                    _runListeners(_listeners, STR_OFFLINE_DROP, _asyncNotifications, function (listener) {
                        listener[STR_OFFLINE_DROP ](cnt, rn_1);
                    });
                }
            };
            _self[_DYN_UNLOAD ] = function (isAsync) {
                var _finishUnload = function () {
                    unloadHandler && unloadHandler.rm();
                    unloadHandler = null;
                    _listeners = [];
                    _asyncNotifications.h && _asyncNotifications.h[_DYN_CANCEL ]();
                    _asyncNotifications.h = null;
                    _asyncNotifications.cb = [];
                };
                var waiting;
                _runListeners(_listeners, "unload", null, function (listener) {
                    var asyncUnload = listener[_DYN_UNLOAD ](isAsync);
                    if (asyncUnload) {
                        if (!waiting) {
                            waiting = [];
                        }
                        waiting[_DYN_PUSH$1 ](asyncUnload);
                    }
                });
                if (waiting) {
                    return createPromise$1(function (resolve) {
                        return doAwaitResponse(createAllPromise(waiting), function () {
                            _finishUnload();
                            resolve();
                        });
                    });
                }
                else {
                    _finishUnload();
                }
            };
        });
    }
    NotificationManager.__ieDyn=1;
    return NotificationManager;
}());

var strExecutionContextKey = "ctx";
var strParentContextKey = "ParentContextKey";
var strChildrenContextKey = "ChildrenContextKey";
var _defaultPerfManager = null;
var PerfEvent = /** @class */ (function () {
    function PerfEvent(name, payloadDetails, isAsync) {
        var _self = this;
        _self.start = utcNow();
        _self[_DYN_NAME ] = name;
        _self.isAsync = isAsync;
        _self[_DYN_IS_CHILD_EVT ] = function () { return false; };
        if (isFunction(payloadDetails)) {
            var theDetails_1;
            objDefine(_self, "payload", {
                g: function () {
                    if (!theDetails_1 && isFunction(payloadDetails)) {
                        theDetails_1 = payloadDetails();
                        payloadDetails = null;
                    }
                    return theDetails_1;
                }
            });
        }
        _self[_DYN_GET_CTX ] = function (key) {
            if (key) {
                if (key === PerfEvent[strParentContextKey] || key === PerfEvent[strChildrenContextKey]) {
                    return _self[key];
                }
                return (_self[strExecutionContextKey] || {})[key];
            }
            return null;
        };
        _self[_DYN_SET_CTX ] = function (key, value) {
            if (key) {
                if (key === PerfEvent[strParentContextKey]) {
                    if (!_self[key]) {
                        _self[_DYN_IS_CHILD_EVT ] = function () { return true; };
                    }
                    _self[key] = value;
                }
                else if (key === PerfEvent[strChildrenContextKey]) {
                    _self[key] = value;
                }
                else {
                    var ctx = _self[strExecutionContextKey] = _self[strExecutionContextKey] || {};
                    ctx[key] = value;
                }
            }
        };
        _self.complete = function () {
            var childTime = 0;
            var childEvts = _self[_DYN_GET_CTX ](PerfEvent[strChildrenContextKey]);
            if (isArray(childEvts)) {
                for (var lp = 0; lp < childEvts[_DYN_LENGTH$2 ]; lp++) {
                    var childEvt = childEvts[lp];
                    if (childEvt) {
                        childTime += childEvt[_DYN_TIME ];
                    }
                }
            }
            _self[_DYN_TIME ] = utcNow() - _self.start;
            _self.exTime = _self[_DYN_TIME ] - childTime;
            _self.complete = _noopVoid;
        };
    }
    PerfEvent.ParentContextKey = "parent";
    PerfEvent.ChildrenContextKey = "childEvts";
    return PerfEvent;
}());
var PerfManager = /** @class */ (function () {
    function PerfManager(manager) {
        this.ctx = {};
        dynamicProto(PerfManager, this, function (_self) {
            _self.create = function (src, payloadDetails, isAsync) {
                return new PerfEvent(src, payloadDetails, isAsync);
            };
            _self.fire = function (perfEvent) {
                if (perfEvent) {
                    perfEvent.complete();
                    if (manager && isFunction(manager[STR_PERF_EVENT ])) {
                        manager[STR_PERF_EVENT ](perfEvent);
                    }
                }
            };
            _self[_DYN_SET_CTX ] = function (key, value) {
                if (key) {
                    var ctx = _self[strExecutionContextKey] = _self[strExecutionContextKey] || {};
                    ctx[key] = value;
                }
            };
            _self[_DYN_GET_CTX ] = function (key) {
                return (_self[strExecutionContextKey] || {})[key];
            };
        });
    }
    PerfManager.__ieDyn=1;
    return PerfManager;
}());
var doPerfActiveKey = "CoreUtils.doPerf";
function doPerf(mgrSource, getSource, func, details, isAsync) {
    if (mgrSource) {
        var perfMgr = mgrSource;
        if (perfMgr[STR_GET_PERF_MGR]) {
            perfMgr = perfMgr[STR_GET_PERF_MGR]();
        }
        if (perfMgr) {
            var perfEvt = void 0;
            var currentActive = perfMgr[_DYN_GET_CTX ](doPerfActiveKey);
            try {
                perfEvt = perfMgr.create(getSource(), details, isAsync);
                if (perfEvt) {
                    if (currentActive && perfEvt[_DYN_SET_CTX ]) {
                        perfEvt[_DYN_SET_CTX ](PerfEvent[strParentContextKey], currentActive);
                        if (currentActive[_DYN_GET_CTX ] && currentActive[_DYN_SET_CTX ]) {
                            var children = currentActive[_DYN_GET_CTX ](PerfEvent[strChildrenContextKey]);
                            if (!children) {
                                children = [];
                                currentActive[_DYN_SET_CTX ](PerfEvent[strChildrenContextKey], children);
                            }
                            children[_DYN_PUSH$1 ](perfEvt);
                        }
                    }
                    perfMgr[_DYN_SET_CTX ](doPerfActiveKey, perfEvt);
                    return func(perfEvt);
                }
            }
            catch (ex) {
                if (perfEvt && perfEvt[_DYN_SET_CTX ]) {
                    perfEvt[_DYN_SET_CTX ]("exception", ex);
                }
            }
            finally {
                if (perfEvt) {
                    perfMgr.fire(perfEvt);
                }
                perfMgr[_DYN_SET_CTX ](doPerfActiveKey, currentActive);
            }
        }
    }
    return func();
}
function getGblPerfMgr() {
    return _defaultPerfManager;
}

var _otelTraceState;
function _initOTelTraceStateSymbol() {
    if (!_otelTraceState) {
        _otelTraceState = createCachedValue(symbolFor("otTraceState"));
    }
    return _otelTraceState;
}
/*#__NO_SIDE_EFFECTS__*/
function _createOTelTraceState(traceState) {
    if (!_otelTraceState) {
        _otelTraceState = _initOTelTraceStateSymbol();
    }
    var otTraceState = {
        set: function (key, value) {
            var newState = createW3cTraceState(STR_EMPTY$1, traceState);
            newState.set(key, value);
            return _createOTelTraceState(newState);
        },
        unset: function (key) {
            var newState = createW3cTraceState(STR_EMPTY$1, traceState);
            newState.del(key);
            return _createOTelTraceState(newState);
        },
        get: function (key) {
            return traceState.get(key);
        },
        serialize: function () {
            var headers = traceState.hdrs(1);
            if (headers[_DYN_LENGTH$2 ] > 0) {
                return headers[0];
            }
            return STR_EMPTY$1;
        }
    };
    objDefine(otTraceState, _otelTraceState.v, { g: function () { return traceState; } });
    return otTraceState;
}
/*#__NO_SIDE_EFFECTS__*/
function isOTelTraceState(value) {
    if (!_otelTraceState) {
        _otelTraceState = _initOTelTraceStateSymbol();
    }
    if (value && value[_otelTraceState.v]) {
        return true;
    }
    return value && isFunction(value.serialize) && isFunction(value.unset) && isFunction(value.get) && isFunction(value.set);
}
/*#__NO_SIDE_EFFECTS__*/
function createOTelTraceState(value) {
    var traceState = null;
    if (isOTelTraceState(value)) {
        var parentTraceState = void 0;
        if (_otelTraceState) {
            parentTraceState = value[_otelTraceState.v];
        }
        if (parentTraceState) {
            traceState = createW3cTraceState(STR_EMPTY$1, parentTraceState);
        }
        else {
            traceState = createW3cTraceState(value.serialize());
        }
    }
    else if (isW3cTraceState(value)) {
        traceState = value;
    }
    else {
        traceState = createW3cTraceState(isString(value) ? value : STR_EMPTY$1);
    }
    return _createOTelTraceState(traceState);
}

function createOTelSpanContext(traceContext) {
    var traceId = isValidTraceId(traceContext[_DYN_TRACE_ID ]) ? traceContext[_DYN_TRACE_ID ] : INVALID_TRACE_ID;
    var spanId = isValidSpanId(traceContext[_DYN_SPAN_ID ]) ? traceContext[_DYN_SPAN_ID ] : INVALID_SPAN_ID;
    var isRemote = traceContext.isRemote;
    var traceFlags = (!isNullOrUndefined(traceContext[_DYN_TRACE_FLAGS ]) ? traceContext[_DYN_TRACE_FLAGS ] : 1 );
    var otTraceState = null;
    var traceContextObj = {
        traceId: traceId,
        spanId: spanId,
        traceFlags: traceFlags
    };
    return objDefineProps(traceContextObj, {
        traceId: {
            g: function () { return traceId; },
            s: function (value) { return traceId = isValidTraceId(value) ? value : INVALID_TRACE_ID; }
        },
        spanId: {
            g: function () { return spanId; },
            s: function (value) { return spanId = isValidSpanId(value) ? value : INVALID_SPAN_ID; }
        },
        isRemote: {
            g: function () { return isRemote; }
        },
        traceFlags: {
            g: function () { return traceFlags; },
            s: function (value) { return traceFlags = value; }
        },
        traceState: {
            g: function () {
                if (!otTraceState) {
                    otTraceState = createOTelTraceState(traceContext[_DYN_TRACE_STATE ]);
                }
                return otTraceState;
            },
            s: function (value) {
                otTraceState = value;
            }
        }
    });
}

var pluginStateData = createElmNodeData("plugin");
function _getPluginState(plugin) {
    return pluginStateData.get(plugin, "state", {}, true);
}
function initializePlugins(processContext, extensions) {
    var initPlugins = [];
    var lastPlugin = null;
    var proxy = processContext[_DYN_GET_NEXT ]();
    var pluginState;
    while (proxy) {
        var thePlugin = proxy[_DYN_GET_PLUGIN ]();
        if (thePlugin) {
            if (lastPlugin && lastPlugin[_DYN_SET_NEXT_PLUGIN ] && thePlugin[STR_PROCESS_TELEMETRY ]) {
                lastPlugin[_DYN_SET_NEXT_PLUGIN ](thePlugin);
            }
            pluginState = _getPluginState(thePlugin);
            var isInitialized = !!pluginState[_DYN_IS_INITIALIZED ];
            if (thePlugin[_DYN_IS_INITIALIZED ]) {
                isInitialized = thePlugin[_DYN_IS_INITIALIZED ]();
            }
            if (!isInitialized) {
                initPlugins[_DYN_PUSH$1 ](thePlugin);
            }
            lastPlugin = thePlugin;
            proxy = proxy[_DYN_GET_NEXT ]();
        }
    }
    arrForEach(initPlugins, function (thePlugin) {
        var core = processContext[STR_CORE ]();
        thePlugin[_DYN_INITIALIZE$1 ](processContext.getCfg(), core, extensions, processContext[_DYN_GET_NEXT ]());
        pluginState = _getPluginState(thePlugin);
        if (!thePlugin[STR_CORE] && !pluginState[STR_CORE]) {
            pluginState[STR_CORE] = core;
        }
        pluginState[_DYN_IS_INITIALIZED ] = true;
        delete pluginState[_DYN_TEARDOWN ];
    });
}
function sortPlugins(plugins) {
    return plugins.sort(function (extA, extB) {
        var result = 0;
        if (extB) {
            var bHasProcess = extB[STR_PROCESS_TELEMETRY];
            if (extA[STR_PROCESS_TELEMETRY]) {
                result = bHasProcess ? extA[STR_PRIORITY] - extB[STR_PRIORITY] : 1;
            }
            else if (bHasProcess) {
                result = -1;
            }
        }
        else {
            result = extA ? 1 : -1;
        }
        return result;
    });
}
/*#__NO_SIDE_EFFECTS__*/
function isDistributedTraceContext(obj) {
    return obj &&
        isFunction(obj.getName) &&
        isFunction(obj.getTraceId) &&
        isFunction(obj.getSpanId) &&
        isFunction(obj.getTraceFlags) &&
        isFunction(obj.setName) &&
        isFunction(obj.setTraceId) &&
        isFunction(obj.setSpanId) &&
        isFunction(obj[_DYN_SET_TRACE_FLAGS ]);
}
/*#__NO_SIDE_EFFECTS__*/
function createDistributedTraceContext(parent) {
    var _a;
    var parentCtx = null;
    var initCtx = null;
    var traceId = (parent && isValidTraceId(parent[_DYN_TRACE_ID ])) ? parent[_DYN_TRACE_ID ] : generateW3CId();
    var spanId = (parent && isValidSpanId(parent[_DYN_SPAN_ID ])) ? parent[_DYN_SPAN_ID ] : STR_EMPTY$1;
    var traceFlags = parent ? parent[_DYN_TRACE_FLAGS ] : UNDEFINED_VALUE;
    var isRemote = parent ? parent.isRemote : false;
    var pageName = STR_EMPTY$1;
    var traceState = null;
    if (parent) {
        if (isDistributedTraceContext(parent)) {
            parentCtx = parent;
            pageName = parentCtx.getName();
        }
        else {
            initCtx = parent;
        }
    }
    if (!pageName) {
        pageName = "_unknown_";
        var location_1 = getLocation();
        if (location_1 && location_1[_DYN_PATHNAME ]) {
            pageName = location_1[_DYN_PATHNAME ] + (location_1.hash || "");
        }
    }
    function _getName() {
        return pageName;
    }
    function _setPageNameFn(updateParent) {
        return function (newValue) {
            if (updateParent) {
                parentCtx && parentCtx.setName(newValue);
            }
            pageName = newValue;
        };
    }
    function _getTraceId() {
        return traceId;
    }
    function _setTraceIdFn(updateParent) {
        return function (newValue) {
            if (updateParent) {
                parentCtx && parentCtx.setTraceId(newValue);
            }
            if (isValidTraceId(newValue)) {
                traceId = newValue;
            }
        };
    }
    function _getSpanId() {
        return spanId;
    }
    function _setSpanIdFn(updateParent) {
        return function (newValue) {
            if (updateParent) {
                parentCtx && parentCtx.setSpanId(newValue);
            }
            if (isValidSpanId(newValue)) {
                spanId = newValue;
            }
        };
    }
    function _getTraceFlags() {
        return traceFlags;
    }
    function _setTraceFlagsFn(updateParent) {
        return function (newTraceFlags) {
            if (updateParent) {
                parentCtx && parentCtx[_DYN_SET_TRACE_FLAGS ](newTraceFlags);
            }
            traceFlags = newTraceFlags;
        };
    }
    function _getTraceState() {
        if (!traceState) {
            if (!parentCtx) {
                if (initCtx) {
                    if (isOTelTraceState(initCtx[_DYN_TRACE_STATE ])) {
                        traceState = createW3cTraceState(initCtx[_DYN_TRACE_STATE ].serialize() || STR_EMPTY$1, parentCtx ? parentCtx[_DYN_TRACE_STATE ] : undefined);
                    }
                    else {
                        traceState = createW3cTraceState(STR_EMPTY$1, initCtx[_DYN_TRACE_STATE ] || (parentCtx ? parentCtx[_DYN_TRACE_STATE ] : undefined));
                    }
                }
            }
            if (!traceState) {
                traceState = createW3cTraceState(STR_EMPTY$1, parentCtx ? parentCtx[_DYN_TRACE_STATE ] : undefined);
            }
        }
        return traceState;
    }
    var otelSpanCtx = null;
    var traceCtx = setProtoTypeName((_a = {
            getName: _getName,
            setName: _setPageNameFn(true),
            getTraceId: _getTraceId,
            setTraceId: _setTraceIdFn(true),
            getSpanId: _getSpanId,
            setSpanId: _setSpanIdFn(true),
            getTraceFlags: _getTraceFlags
        },
        _a[_DYN_SET_TRACE_FLAGS ] = _setTraceFlagsFn(true),
        _a.traceId = traceId,
        _a.spanId = spanId,
        _a.traceFlags = traceFlags,
        _a.traceState = traceState,
        _a.isRemote = isRemote,
        _a.pageName = pageName,
        _a.getOTelSpanContext = function () {
            if (!otelSpanCtx) {
                otelSpanCtx = createOTelSpanContext(traceCtx);
            }
            return otelSpanCtx;
        },
        _a), "DistributedTraceContext");
    return objDefineProps(traceCtx, {
        pageName: {
            g: _getName,
            s: _setPageNameFn(false)
        },
        traceId: {
            g: _getTraceId,
            s: _setTraceIdFn(false)
        },
        spanId: {
            g: _getSpanId,
            s: _setSpanIdFn(false)
        },
        traceFlags: {
            g: _getTraceFlags,
            s: _setTraceFlagsFn(false)
        },
        isRemote: {
            v: isRemote,
            w: false
        },
        traceState: {
            g: _getTraceState
        },
        parentCtx: {
            g: function () { return parentCtx; }
        },
        _parent: {
            g: function () {
                var result;
                if (parentCtx) {
                    result = {
                        t: "traceCtx",
                        v: parentCtx
                    };
                }
                else if (initCtx) {
                    result = {
                        t: "initCtx",
                        v: initCtx
                    };
                }
                return result;
            }
        }
    });
}

var strTelemetryPluginChain = "TelemetryPluginChain";
var strHasRunFlags = "_hasRun";
var strGetTelCtx = "_getTelCtx";
var _chainId = 0;
function _getNextProxyStart(proxy, core, startAt) {
    while (proxy) {
        if (proxy[_DYN_GET_PLUGIN ]() === startAt) {
            return proxy;
        }
        proxy = proxy[_DYN_GET_NEXT ]();
    }
    return createTelemetryProxyChain([startAt], core[_DYN_CONFIG$1 ] || {}, core);
}
function _createInternalContext(telemetryChain, dynamicHandler, core, startAt) {
    var _nextProxy = null;
    var _onComplete = [];
    if (!dynamicHandler) {
        dynamicHandler = createDynamicConfig({}, null, core[_DYN_LOGGER ]);
    }
    if (startAt !== null) {
        _nextProxy = startAt ? _getNextProxyStart(telemetryChain, core, startAt) : telemetryChain;
    }
    var context = {
        _next: _moveNext,
        ctx: {
            core: function () {
                return core;
            },
            diagLog: function () {
                return safeGetLogger(core, dynamicHandler.cfg);
            },
            getCfg: function () {
                return dynamicHandler.cfg;
            },
            getExtCfg: _resolveExtCfg,
            getConfig: _getConfig,
            hasNext: function () {
                return !!_nextProxy;
            },
            getNext: function () {
                return _nextProxy;
            },
            setNext: function (nextPlugin) {
                _nextProxy = nextPlugin;
            },
            iterate: _iterateChain,
            onComplete: _addOnComplete
        }
    };
    function _addOnComplete(onComplete, that) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        if (onComplete) {
            _onComplete[_DYN_PUSH$1 ]({
                func: onComplete,
                self: !isUndefined(that) ? that : context.ctx,
                args: args
            });
        }
    }
    function _moveNext() {
        var nextProxy = _nextProxy;
        _nextProxy = nextProxy ? nextProxy[_DYN_GET_NEXT ]() : null;
        if (!nextProxy) {
            var onComplete = _onComplete;
            if (onComplete && onComplete[_DYN_LENGTH$2 ] > 0) {
                arrForEach(onComplete, function (completeDetails) {
                    try {
                        completeDetails.func[_DYN_CALL ](completeDetails.self, completeDetails.args);
                    }
                    catch (e) {
                        _throwInternal(core[_DYN_LOGGER ], 2 , 73 , "Unexpected Exception during onComplete - " + dumpObj(e));
                    }
                });
                _onComplete = [];
            }
        }
        return nextProxy;
    }
    function _getExtCfg(identifier, createIfMissing) {
        var idCfg = null;
        var extCfg = _getCfg(dynamicHandler.cfg, "extensionConfig", createIfMissing);
        if (extCfg) {
            idCfg = _getCfg(extCfg, identifier, createIfMissing);
        }
        return idCfg;
    }
    function _getCfg(cfg, identifier, createIfMissing) {
        var idCfg = null;
        if (cfg && identifier) {
            idCfg = cfg[identifier];
            if (!idCfg && createIfMissing) {
                idCfg = {};
            }
            cfg[identifier] = idCfg;
            idCfg = dynamicHandler.ref(cfg, identifier);
        }
        return idCfg;
    }
    function _resolveExtCfg(identifier, defaultValues, rootOnly) {
        var newConfig = rootOnly ? _getCfg(dynamicHandler.cfg, identifier, true) : _getExtCfg(identifier, true);
        if (defaultValues) {
            objForEachKey(defaultValues, function (field, defaultValue) {
                if (isNullOrUndefined(newConfig[field])) {
                    var cfgValue = dynamicHandler.cfg[field];
                    if (cfgValue || !isNullOrUndefined(cfgValue)) {
                        newConfig[field] = cfgValue;
                    }
                }
                _applyDefaultValue(dynamicHandler, newConfig, field, defaultValue);
            });
        }
        return dynamicHandler.setDf(newConfig, defaultValues);
    }
    function _getConfig(identifier, field, defaultValue) {
        if (defaultValue === void 0) { defaultValue = false; }
        var theValue;
        var extConfig = _getExtCfg(identifier, false);
        var rootConfig = dynamicHandler.cfg;
        if (extConfig && (extConfig[field] || !isNullOrUndefined(extConfig[field]))) {
            theValue = extConfig[field];
        }
        else if (rootConfig[field] || !isNullOrUndefined(rootConfig[field])) {
            theValue = rootConfig[field];
        }
        return (theValue || !isNullOrUndefined(theValue)) ? theValue : defaultValue;
    }
    function _iterateChain(cb) {
        var nextPlugin;
        while (!!(nextPlugin = context._next())) {
            var plugin = nextPlugin[_DYN_GET_PLUGIN ]();
            if (plugin) {
                cb(plugin);
            }
        }
    }
    return context;
}
function createProcessTelemetryContext(telemetryChain, cfg, core, startAt) {
    var config = createDynamicConfig(cfg);
    var internalContext = _createInternalContext(telemetryChain, config, core, startAt);
    var context = internalContext.ctx;
    function _processNext(env) {
        var nextPlugin = internalContext._next();
        if (nextPlugin) {
            nextPlugin[STR_PROCESS_TELEMETRY ](env, context);
        }
        return !nextPlugin;
    }
    function _createNew(plugins, startAt) {
        if (plugins === void 0) { plugins = null; }
        if (isArray(plugins)) {
            plugins = createTelemetryProxyChain(plugins, config.cfg, core, startAt);
        }
        return createProcessTelemetryContext(plugins || context[_DYN_GET_NEXT ](), config.cfg, core, startAt);
    }
    context[_DYN_PROCESS_NEXT ] = _processNext;
    context[_DYN_CREATE_NEW ] = _createNew;
    return context;
}
function createProcessTelemetryUnloadContext(telemetryChain, core, startAt) {
    var config = createDynamicConfig(core[_DYN_CONFIG$1 ]);
    var internalContext = _createInternalContext(telemetryChain, config, core, startAt);
    var context = internalContext.ctx;
    function _processNext(unloadState) {
        var nextPlugin = internalContext._next();
        nextPlugin && nextPlugin[_DYN_UNLOAD ](context, unloadState);
        return !nextPlugin;
    }
    function _createNew(plugins, startAt) {
        if (plugins === void 0) { plugins = null; }
        if (isArray(plugins)) {
            plugins = createTelemetryProxyChain(plugins, config.cfg, core, startAt);
        }
        return createProcessTelemetryUnloadContext(plugins || context[_DYN_GET_NEXT ](), core, startAt);
    }
    context[_DYN_PROCESS_NEXT ] = _processNext;
    context[_DYN_CREATE_NEW ] = _createNew;
    return context;
}
function createProcessTelemetryUpdateContext(telemetryChain, core, startAt) {
    var config = createDynamicConfig(core[_DYN_CONFIG$1 ]);
    var internalContext = _createInternalContext(telemetryChain, config, core, startAt);
    var context = internalContext.ctx;
    function _processNext(updateState) {
        return context.iterate(function (plugin) {
            if (isFunction(plugin[_DYN_UPDATE ])) {
                plugin[_DYN_UPDATE ](context, updateState);
            }
        });
    }
    function _createNew(plugins, startAt) {
        if (plugins === void 0) { plugins = null; }
        if (isArray(plugins)) {
            plugins = createTelemetryProxyChain(plugins, config.cfg, core, startAt);
        }
        return createProcessTelemetryUpdateContext(plugins || context[_DYN_GET_NEXT ](), core, startAt);
    }
    context[_DYN_PROCESS_NEXT ] = _processNext;
    context[_DYN_CREATE_NEW ] = _createNew;
    return context;
}
function createTelemetryProxyChain(plugins, config, core, startAt) {
    var firstProxy = null;
    var add = startAt ? false : true;
    if (isArray(plugins) && plugins[_DYN_LENGTH$2 ] > 0) {
        var lastProxy_1 = null;
        arrForEach(plugins, function (thePlugin) {
            if (!add && startAt === thePlugin) {
                add = true;
            }
            if (add && thePlugin && isFunction(thePlugin[STR_PROCESS_TELEMETRY ])) {
                var newProxy = createTelemetryPluginProxy(thePlugin, config, core);
                if (!firstProxy) {
                    firstProxy = newProxy;
                }
                if (lastProxy_1) {
                    lastProxy_1._setNext(newProxy);
                }
                lastProxy_1 = newProxy;
            }
        });
    }
    if (startAt && !firstProxy) {
        return createTelemetryProxyChain([startAt], config, core);
    }
    return firstProxy;
}
function createTelemetryPluginProxy(plugin, config, core) {
    var _a;
    var nextProxy = null;
    var hasProcessTelemetry = isFunction(plugin[STR_PROCESS_TELEMETRY ]);
    var hasSetNext = isFunction(plugin[_DYN_SET_NEXT_PLUGIN ]);
    var chainId;
    if (plugin) {
        chainId = plugin[_DYN_IDENTIFIER$1 ] + "-" + plugin[STR_PRIORITY ] + "-" + _chainId++;
    }
    else {
        chainId = "Unknown-0-" + _chainId++;
    }
    var proxyChain = (_a = {
            getPlugin: function () {
                return plugin;
            },
            getNext: function () {
                return nextProxy;
            }
        },
        _a[STR_PROCESS_TELEMETRY ] = _processTelemetry,
        _a.unload = _unloadPlugin,
        _a.update = _updatePlugin,
        _a._id = chainId,
        _a._setNext = function (nextPlugin) {
            nextProxy = nextPlugin;
        },
        _a);
    function _getTelCtx() {
        var itemCtx;
        if (plugin && isFunction(plugin[strGetTelCtx])) {
            itemCtx = plugin[strGetTelCtx]();
        }
        if (!itemCtx) {
            itemCtx = createProcessTelemetryContext(proxyChain, config, core);
        }
        return itemCtx;
    }
    function _processChain(itemCtx, processPluginFn, name, details, isAsync) {
        var hasRun = false;
        var identifier = plugin ? plugin[_DYN_IDENTIFIER$1 ] : strTelemetryPluginChain;
        var hasRunContext = itemCtx[strHasRunFlags];
        if (!hasRunContext) {
            hasRunContext = itemCtx[strHasRunFlags] = {};
        }
        itemCtx.setNext(nextProxy);
        if (plugin) {
            doPerf(itemCtx[STR_CORE ](), function () { return identifier + ":" + name; }, function () {
                hasRunContext[chainId] = true;
                try {
                    var nextId = nextProxy ? nextProxy._id : STR_EMPTY$1;
                    if (nextId) {
                        hasRunContext[nextId] = false;
                    }
                    hasRun = processPluginFn(itemCtx);
                }
                catch (error) {
                    var hasNextRun = nextProxy ? hasRunContext[nextProxy._id] : true;
                    if (hasNextRun) {
                        hasRun = true;
                    }
                    if (!nextProxy || !hasNextRun) {
                        _throwInternal(itemCtx[_DYN_DIAG_LOG$1 ](), 1 , 73 , "Plugin [" + identifier + "] failed during " + name + " - " + dumpObj(error) + ", run flags: " + dumpObj(hasRunContext));
                    }
                }
            }, details, isAsync);
        }
        return hasRun;
    }
    function _processTelemetry(env, itemCtx) {
        itemCtx = itemCtx || _getTelCtx();
        function _callProcessTelemetry(itemCtx) {
            if (!plugin || !hasProcessTelemetry) {
                return false;
            }
            var pluginState = _getPluginState(plugin);
            if (pluginState[_DYN_TEARDOWN ] || pluginState[STR_DISABLED]) {
                return false;
            }
            if (hasSetNext) {
                plugin[_DYN_SET_NEXT_PLUGIN ](nextProxy);
            }
            plugin[STR_PROCESS_TELEMETRY ](env, itemCtx);
            return true;
        }
        if (!_processChain(itemCtx, _callProcessTelemetry, "processTelemetry", function () { return ({ item: env }); }, !(env.sync))) {
            itemCtx[_DYN_PROCESS_NEXT ](env);
        }
    }
    function _unloadPlugin(unloadCtx, unloadState) {
        function _callTeardown() {
            var hasRun = false;
            if (plugin) {
                var pluginState = _getPluginState(plugin);
                var pluginCore = plugin[STR_CORE] || pluginState[STR_CORE ];
                if (plugin && (!pluginCore || pluginCore === unloadCtx.core()) && !pluginState[_DYN_TEARDOWN ]) {
                    pluginState[STR_CORE ] = null;
                    pluginState[_DYN_TEARDOWN ] = true;
                    pluginState[_DYN_IS_INITIALIZED ] = false;
                    if (plugin[_DYN_TEARDOWN ] && plugin[_DYN_TEARDOWN ](unloadCtx, unloadState) === true) {
                        hasRun = true;
                    }
                }
            }
            return hasRun;
        }
        if (!_processChain(unloadCtx, _callTeardown, "unload", _noopVoid, unloadState.isAsync)) {
            unloadCtx[_DYN_PROCESS_NEXT ](unloadState);
        }
    }
    function _updatePlugin(updateCtx, updateState) {
        function _callUpdate() {
            var hasRun = false;
            if (plugin) {
                var pluginState = _getPluginState(plugin);
                var pluginCore = plugin[STR_CORE] || pluginState[STR_CORE ];
                if (plugin && (!pluginCore || pluginCore === updateCtx.core()) && !pluginState[_DYN_TEARDOWN ]) {
                    if (plugin[_DYN_UPDATE ] && plugin[_DYN_UPDATE ](updateCtx, updateState) === true) {
                        hasRun = true;
                    }
                }
            }
            return hasRun;
        }
        if (!_processChain(updateCtx, _callUpdate, "update", _noopVoid, false)) {
            updateCtx[_DYN_PROCESS_NEXT ](updateState);
        }
    }
    return objFreeze(proxyChain);
}

/*#__NO_SIDE_EFFECTS__*/
function createUnloadHandlerContainer() {
    var handlers = [];
    function _addHandler(handler) {
        if (handler) {
            handlers[_DYN_PUSH$1 ](handler);
        }
    }
    function _runHandlers(unloadCtx, unloadState) {
        arrForEach(handlers, function (handler) {
            try {
                handler(unloadCtx, unloadState);
            }
            catch (e) {
                _throwInternal(unloadCtx[_DYN_DIAG_LOG$1 ](), 2 , 73 , "Unexpected error calling unload handler - " + dumpObj(e));
            }
        });
        handlers = [];
    }
    return {
        add: _addHandler,
        run: _runHandlers
    };
}

function createUnloadHookContainer() {
    var _hooks = [];
    function _doUnload(logger) {
        var oldHooks = _hooks;
        _hooks = [];
        arrForEach(oldHooks, function (fn) {
            try {
                (fn.rm || fn.remove)[_DYN_CALL ](fn);
            }
            catch (e) {
                _throwInternal(logger, 2 , 73 , "Unloading:" + dumpObj(e));
            }
        });
    }
    function _addHook(hooks) {
        if (hooks) {
            arrAppend(_hooks, hooks);
        }
    }
    return {
        run: _doUnload,
        add: _addHook
    };
}

var _a$5;
var strGetPlugin = "getPlugin";
var defaultValues$1 = (_a$5 = {},
    _a$5[STR_EXTENSION_CONFIG] = { isVal: isNotNullOrUndefined, v: {} },
    _a$5);
var BaseTelemetryPlugin = /** @class */ (function () {
    function BaseTelemetryPlugin() {
        var _self = this;
        var _isinitialized;
        var _rootCtx;
        var _nextPlugin;
        var _unloadHandlerContainer;
        var _hookContainer;
        _initDefaults();
        dynamicProto(BaseTelemetryPlugin, _self, function (_self) {
            _self[_DYN_INITIALIZE$1 ] = function (config, core, extensions, pluginChain) {
                _setDefaults(config, core, pluginChain);
                _isinitialized = true;
            };
            _self[_DYN_TEARDOWN ] = function (unloadCtx, unloadState) {
                var core = _self[STR_CORE ];
                if (!core || (unloadCtx && core !== unloadCtx[STR_CORE ]())) {
                    return;
                }
                var result;
                var unloadDone = false;
                var theUnloadCtx = unloadCtx || createProcessTelemetryUnloadContext(null, core, _nextPlugin && _nextPlugin[strGetPlugin] ? _nextPlugin[strGetPlugin]() : _nextPlugin);
                var theUnloadState = unloadState || {
                    reason: 0 ,
                    isAsync: false
                };
                function _unloadCallback() {
                    if (!unloadDone) {
                        unloadDone = true;
                        _unloadHandlerContainer.run(theUnloadCtx, unloadState);
                        _hookContainer.run(theUnloadCtx[_DYN_DIAG_LOG$1 ]());
                        if (result === true) {
                            theUnloadCtx[_DYN_PROCESS_NEXT ](theUnloadState);
                        }
                        _initDefaults();
                    }
                }
                if (!_self[_DYN__DO_TEARDOWN ] || _self[_DYN__DO_TEARDOWN ](theUnloadCtx, theUnloadState, _unloadCallback) !== true) {
                    _unloadCallback();
                }
                else {
                    result = true;
                }
                return result;
            };
            _self[_DYN_UPDATE ] = function (updateCtx, updateState) {
                var core = _self[STR_CORE ];
                if (!core || (updateCtx && core !== updateCtx[STR_CORE ]())) {
                    return;
                }
                var result;
                var updateDone = false;
                var theUpdateCtx = updateCtx || createProcessTelemetryUpdateContext(null, core, _nextPlugin && _nextPlugin[strGetPlugin] ? _nextPlugin[strGetPlugin]() : _nextPlugin);
                var theUpdateState = updateState || {
                    reason: 0
                };
                function _updateCallback() {
                    if (!updateDone) {
                        updateDone = true;
                        _setDefaults(theUpdateCtx.getCfg(), theUpdateCtx.core(), theUpdateCtx[_DYN_GET_NEXT ]());
                    }
                }
                if (!_self._doUpdate || _self._doUpdate(theUpdateCtx, theUpdateState, _updateCallback) !== true) {
                    _updateCallback();
                }
                else {
                    result = true;
                }
                return result;
            };
            proxyFunctionAs(_self, "_addUnloadCb", function () { return _unloadHandlerContainer; }, "add");
            proxyFunctionAs(_self, "_addHook", function () { return _hookContainer; }, "add");
            objDefine(_self, "_unloadHooks", { g: function () { return _hookContainer; } });
        });
        _self[_DYN_DIAG_LOG$1 ] = function (itemCtx) {
            return _getTelCtx(itemCtx)[_DYN_DIAG_LOG$1 ]();
        };
        _self[_DYN_IS_INITIALIZED ] = function () {
            return _isinitialized;
        };
        _self.setInitialized = function (isInitialized) {
            _isinitialized = isInitialized;
        };
        _self[_DYN_SET_NEXT_PLUGIN ] = function (next) {
            _nextPlugin = next;
        };
        _self[_DYN_PROCESS_NEXT ] = function (env, itemCtx) {
            if (itemCtx) {
                itemCtx[_DYN_PROCESS_NEXT ](env);
            }
            else if (_nextPlugin && isFunction(_nextPlugin[STR_PROCESS_TELEMETRY ])) {
                _nextPlugin[STR_PROCESS_TELEMETRY ](env, null);
            }
        };
        _self._getTelCtx = _getTelCtx;
        function _getTelCtx(currentCtx) {
            if (currentCtx === void 0) { currentCtx = null; }
            var itemCtx = currentCtx;
            if (!itemCtx) {
                var rootCtx = _rootCtx || createProcessTelemetryContext(null, {}, _self[STR_CORE ]);
                if (_nextPlugin && _nextPlugin[strGetPlugin]) {
                    itemCtx = rootCtx[_DYN_CREATE_NEW ](null, _nextPlugin[strGetPlugin]);
                }
                else {
                    itemCtx = rootCtx[_DYN_CREATE_NEW ](null, _nextPlugin);
                }
            }
            return itemCtx;
        }
        function _setDefaults(config, core, pluginChain) {
            createDynamicConfig(config, defaultValues$1, safeGetLogger(core));
            if (!pluginChain && core) {
                pluginChain = core[_DYN_GET_PROCESS_TEL_CONT2 ]()[_DYN_GET_NEXT ]();
            }
            var nextPlugin = _nextPlugin;
            if (_nextPlugin && _nextPlugin[strGetPlugin]) {
                nextPlugin = _nextPlugin[strGetPlugin]();
            }
            _self[STR_CORE ] = core;
            _rootCtx = createProcessTelemetryContext(pluginChain, config, core, nextPlugin);
        }
        function _initDefaults() {
            _isinitialized = false;
            _self[STR_CORE ] = null;
            _rootCtx = null;
            _nextPlugin = null;
            _hookContainer = createUnloadHookContainer();
            _unloadHandlerContainer = createUnloadHandlerContainer();
        }
    }
    BaseTelemetryPlugin.__ieDyn=1;
    return BaseTelemetryPlugin;
}());

function _addInitializer(_initializers, id, telemetryInitializer) {
    var theInitializer = {
        id: id,
        fn: telemetryInitializer
    };
    arrAppend(_initializers, theInitializer);
    var handler = {
        remove: function () {
            arrForEach(_initializers, function (initializer, idx) {
                if (initializer.id === theInitializer.id) {
                    _initializers[_DYN_SPLICE ](idx, 1);
                    return -1;
                }
            });
        }
    };
    return handler;
}
function _runInitializers(_initializers, item, logger) {
    var doNotSendItem = false;
    var telemetryInitializersCount = _initializers[_DYN_LENGTH$2 ];
    for (var i = 0; i < telemetryInitializersCount; ++i) {
        var telemetryInitializer = _initializers[i];
        if (telemetryInitializer) {
            try {
                if (telemetryInitializer.fn[_DYN_APPLY ](null, [item]) === false) {
                    doNotSendItem = true;
                    break;
                }
            }
            catch (e) {
                _throwInternal(logger, 2 , 64 , "Telemetry initializer failed: " + getExceptionName(e), { exception: dumpObj(e) }, true);
            }
        }
    }
    return !doNotSendItem;
}
var TelemetryInitializerPlugin = /** @class */ (function (_super) {
    __extendsFn(TelemetryInitializerPlugin, _super);
    function TelemetryInitializerPlugin() {
        var _this = _super.call(this) || this;
        _this.identifier = "TelemetryInitializerPlugin";
        _this.priority = 199;
        var _id;
        var _initializers;
        _initDefaults();
        dynamicProto(TelemetryInitializerPlugin, _this, function (_self, _base) {
            _self.addTelemetryInitializer = function (telemetryInitializer) {
                return _addInitializer(_initializers, _id++, telemetryInitializer);
            };
            _self[STR_PROCESS_TELEMETRY ] = function (item, itemCtx) {
                if (_runInitializers(_initializers, item, itemCtx ? itemCtx[_DYN_DIAG_LOG$1 ]() : _self[_DYN_DIAG_LOG$1 ]())) {
                    _self[_DYN_PROCESS_NEXT ](item, itemCtx);
                }
            };
            _self[_DYN__DO_TEARDOWN ] = function () {
                _initDefaults();
            };
        });
        function _initDefaults() {
            _id = 0;
            _initializers = [];
        }
        return _this;
    }
    TelemetryInitializerPlugin.__ieDyn=1;
    return TelemetryInitializerPlugin;
}(BaseTelemetryPlugin));

var _a$4, _b, _c;
var strValidationError = "Plugins must provide initialize method";
var strNotificationManager = "_notificationManager";
var strSdkUnloadingError = "SDK is still unloading...";
var strSdkNotInitialized = "SDK is not initialized";
var maxInitQueueSize = 100;
var maxInitTimeout = 50000;
var maxAttributeCount = 128;
var defaultConfig$3 = objDeepFreeze((_a$4 = {
        cookieCfg: {}
    },
    _a$4[STR_EXTENSIONS] = { rdOnly: true, ref: true, v: [] },
    _a$4[STR_CHANNELS] = { rdOnly: true, ref: true, v: [] },
    _a$4[STR_EXTENSION_CONFIG] = { ref: true, v: {} },
    _a$4[STR_CREATE_PERF_MGR] = UNDEFINED_VALUE,
    _a$4.loggingLevelConsole = 0 ,
    _a$4.diagnosticLogInterval = UNDEFINED_VALUE,
    _a$4.traceHdrMode = 3 ,
    _a$4.traceCfg = cfgDfMerge((_b = {
            generalLimits: cfgDfMerge((_c = {
                    attributeValueLengthLimit: undefined
                },
                _c[_DYN_ATTRIBUTE_COUNT_LIMI5 ] = maxAttributeCount,
                _c)),
            serviceName: null
        },
        _b[_DYN_SUPPRESS_TRACING ] = false,
        _b)),
    _a$4));
function _getDefaultConfig(core) {
    var _a;
    var handlers = {
        errorHandlers: cfgDfMerge((_a = {
                attribError: function (message, key, value) {
                    core.logger[_DYN_THROW_INTERNAL ](2 , 115 , message, {
                        attribName: key,
                        value: value
                    });
                },
                spanError: function (message, spanName) {
                    core.logger[_DYN_THROW_INTERNAL ](2 , 116 , message, {
                        spanName: spanName
                    });
                },
                debug: function (message) {
                    core[_DYN_LOGGER ].debugToConsole(message);
                },
                warn: function (message) {
                    core.logger[_DYN_WARN_TO_CONSOLE ](message);
                },
                error: function (message) {
                    core.logger[_DYN_THROW_INTERNAL ](1 , 117 , message);
                }
            },
            _a[_DYN_NOT_IMPLEMENTED ] = function (message) {
                core.logger[_DYN_THROW_INTERNAL ](1 , 118 , message);
            },
            _a))
    };
    return objDeepFreeze(objAssign({}, defaultConfig$3, handlers));
}
/*#__NO_SIDE_EFFECTS__*/
function _createPerfManager(core, notificationMgr) {
    return new PerfManager(notificationMgr);
}
/*#__NO_SIDE_EFFECTS__*/
function _validateExtensions(logger, channelPriority, allExtensions) {
    var coreExtensions = [];
    var channels = [];
    var extPriorities = {};
    arrForEach(allExtensions, function (ext) {
        if (isNullOrUndefined(ext) || isNullOrUndefined(ext[_DYN_INITIALIZE$1 ])) {
            throwError(strValidationError);
        }
        var extPriority = ext[STR_PRIORITY ];
        var identifier = ext[_DYN_IDENTIFIER$1 ];
        if (ext && extPriority) {
            if (!isNullOrUndefined(extPriorities[extPriority])) {
                _warnToConsole(logger, "Two extensions have same priority #" + extPriority + " - " + extPriorities[extPriority] + ", " + identifier);
            }
            else {
                extPriorities[extPriority] = identifier;
            }
        }
        if (!extPriority || extPriority < channelPriority) {
            coreExtensions[_DYN_PUSH$1 ](ext);
        }
        else {
            channels[_DYN_PUSH$1 ](ext);
        }
    });
    return {
        core: coreExtensions,
        channels: channels
    };
}
/*#__NO_SIDE_EFFECTS__*/
function _isPluginPresent(thePlugin, plugins) {
    var exists = false;
    arrForEach(plugins, function (plugin) {
        if (plugin === thePlugin) {
            exists = true;
            return -1;
        }
    });
    return exists;
}
function _deepMergeConfig(details, target, newValues, merge) {
    if (newValues) {
        objForEachKey(newValues, function (key, value) {
            if (merge) {
                if (isPlainObject(value) && isPlainObject(target[key])) {
                    _deepMergeConfig(details, target[key], value, merge);
                }
            }
            if (merge && isPlainObject(value) && isPlainObject(target[key])) {
                _deepMergeConfig(details, target[key], value, merge);
            }
            else {
                details.set(target, key, value);
            }
        });
    }
}
/*#__NO_SIDE_EFFECTS__*/
function _findWatcher(listeners, newWatcher) {
    var theListener = null;
    var idx = -1;
    arrForEach(listeners, function (listener, lp) {
        if (listener.w === newWatcher) {
            theListener = listener;
            idx = lp;
            return -1;
        }
    });
    return { i: idx, l: theListener };
}
function _addDelayedCfgListener(listeners, newWatcher) {
    var theListener = _findWatcher(listeners, newWatcher).l;
    if (!theListener) {
        theListener = {
            w: newWatcher,
            rm: function () {
                var fnd = _findWatcher(listeners, newWatcher);
                if (fnd.i !== -1) {
                    listeners[_DYN_SPLICE ](fnd.i, 1);
                }
            }
        };
        listeners[_DYN_PUSH$1 ](theListener);
    }
    return theListener;
}
function _registerDelayedCfgListener(config, listeners, logger) {
    arrForEach(listeners, function (listener) {
        var unloadHdl = onConfigChange(config, listener.w, logger);
        delete listener.w;
        listener.rm = function () {
            unloadHdl.rm();
        };
    });
}
function _initDebugListener(configHandler, unloadContainer, notificationManager, debugListener) {
    unloadContainer.add(configHandler[_DYN_WATCH ](function (details) {
        var disableDbgExt = details.cfg.disableDbgExt;
        if (disableDbgExt === true && debugListener) {
            notificationManager[_DYN_REMOVE_NOTIFICATION_0 ](debugListener);
            debugListener = null;
        }
        if (notificationManager && !debugListener && disableDbgExt !== true) {
            debugListener = getDebugListener(details.cfg);
            notificationManager[_DYN_ADD_NOTIFICATION_LIS1 ](debugListener);
        }
    }));
    return debugListener;
}
/*#__NO_SIDE_EFFECTS__*/
function _createUnloadHook$1(unloadHook) {
    return objDefine({
        rm: function () {
            unloadHook.rm();
        }
    }, "toJSON", { v: function () { return "aicore::onCfgChange<" + JSON[_DYN_STRINGIFY ](unloadHook) + ">"; } });
}
/*#__NO_SIDE_EFFECTS__*/
function _getParentTraceCtx(mode) {
    var spanContext = null;
    var parentTrace = (mode & 1 ) ? findW3cTraceParent() : null;
    var parentTraceState = (mode & 2 ) ? findW3cTraceState() : null;
    if (parentTrace || parentTraceState) {
        spanContext = createDistributedTraceContext({
            traceId: parentTrace ? parentTrace[_DYN_TRACE_ID ] : null,
            spanId: parentTrace ? parentTrace[_DYN_SPAN_ID ] : null,
            traceFlags: parentTrace ? parentTrace[_DYN_TRACE_FLAGS ] : UNDEFINED_VALUE,
            isRemote: true,
            traceState: parentTraceState
        });
    }
    return spanContext;
}
var AppInsightsCore = /** @class */ (function () {
    function AppInsightsCore() {
        var _configHandler;
        var _isInitialized;
        var _logger;
        var _eventQueue;
        var _notificationManager;
        var _perfManager;
        var _cfgPerfManager;
        var _cookieManager;
        var _pluginChain;
        var _configExtensions;
        var _channelConfig;
        var _channels;
        var _isUnloading;
        var _telemetryInitializerPlugin;
        var _serverOTelCtx;
        var _serverTraceHdrMode;
        var _internalLogsEventName;
        var _evtNamespace;
        var _unloadHandlers;
        var _hookContainer;
        var _debugListener;
        var _traceCtx;
        var _traceProvider;
        var _activeSpan;
        var _instrumentationKey;
        var _cfgListeners;
        var _extensions;
        var _pluginVersionStringArr;
        var _pluginVersionString;
        var _activeStatus;
        var _endpoint;
        var _initInMemoMaxSize;
        var _isStatusSet;
        var _initTimer;
        var _internalLogPoller;
        var _internalLogPollerListening;
        var _forceStopInternalLogPoller;
        dynamicProto(AppInsightsCore, this, function (_self) {
            _initDefaults();
            _self["_getDbgPlgTargets"] = function () {
                return [_extensions, _eventQueue];
            };
            _self[_DYN_IS_INITIALIZED ] = function () { return _isInitialized; };
            _self.activeStatus = function () { return _activeStatus; };
            _self._setPendingStatus = function () {
                _activeStatus = 3 ;
            };
            _self[_DYN_INITIALIZE$1 ] = function (config, extensions, logger, notificationManager) {
                if (_isUnloading) {
                    throwError(strSdkUnloadingError);
                }
                if (_self[_DYN_IS_INITIALIZED ]()) {
                    throwError("Core cannot be initialized more than once");
                }
                _configHandler = createDynamicConfig(config, _getDefaultConfig(_self), logger || _self[_DYN_LOGGER ], false);
                config = _configHandler.cfg;
                _addUnloadHook(_configHandler[_DYN_WATCH ](function (details) {
                    var rootCfg = details.cfg;
                    _initInMemoMaxSize = rootCfg.initInMemoMaxSize || maxInitQueueSize;
                    _handleIKeyEndpointPromises(rootCfg);
                    var extCfg = details.ref(details.cfg, STR_EXTENSION_CONFIG);
                    objForEachKey(extCfg, function (key) {
                        details.ref(extCfg, key);
                    });
                    if (rootCfg[_DYN_TRACE_HDR_MODE ] !== _serverTraceHdrMode) {
                        _serverOTelCtx = _getParentTraceCtx(rootCfg[_DYN_TRACE_HDR_MODE ]);
                        _serverTraceHdrMode = rootCfg[_DYN_TRACE_HDR_MODE ];
                    }
                }));
                _notificationManager = notificationManager;
                _debugListener = _initDebugListener(_configHandler, _hookContainer, _notificationManager && _self[_DYN_GET_NOTIFY_MGR ](), _debugListener);
                _initPerfManager();
                _self[_DYN_LOGGER ] = logger;
                var cfgExtensions = config[STR_EXTENSIONS ];
                _configExtensions = [];
                _configExtensions[_DYN_PUSH$1 ].apply(_configExtensions, __spreadArrayFn(__spreadArrayFn([], extensions, false), cfgExtensions));
                _channelConfig = config[STR_CHANNELS ];
                _initPluginChain(null);
                if (!_channels || _channels[_DYN_LENGTH$2 ] === 0) {
                    throwError("No " + STR_CHANNELS + " available");
                }
                if (_channelConfig && _channelConfig[_DYN_LENGTH$2 ] > 1) {
                    var teeController = _self[_DYN_GET_PLUGIN ]("TeeChannelController");
                    if (!teeController || !teeController.plugin) {
                        _throwInternal(_logger, 1 , 28 , "TeeChannel required");
                    }
                }
                _registerDelayedCfgListener(config, _cfgListeners, _logger);
                _cfgListeners = null;
                _isInitialized = true;
                if (_activeStatus === ActiveStatus.ACTIVE) {
                    _releaseQueues();
                }
            };
            _self.getChannels = function () {
                var controls = [];
                if (_channels) {
                    arrForEach(_channels, function (channel) {
                        controls[_DYN_PUSH$1 ](channel);
                    });
                }
                return objFreeze(controls);
            };
            _self[_DYN_TRACK$1 ] = function (telemetryItem) {
                doPerf(_self[STR_GET_PERF_MGR ](), function () { return "AppInsightsCore:track"; }, function () {
                    if (telemetryItem === null) {
                        _notifyInvalidEvent(telemetryItem);
                        throwError("Invalid telemetry item");
                    }
                    if (!telemetryItem[_DYN_NAME ] && isNullOrUndefined(telemetryItem[_DYN_NAME ])) {
                        _notifyInvalidEvent(telemetryItem);
                        throwError("telemetry name required");
                    }
                    telemetryItem[_DYN_I_KEY$1 ] = telemetryItem[_DYN_I_KEY$1 ] || _instrumentationKey;
                    telemetryItem[_DYN_TIME ] = telemetryItem[_DYN_TIME ] || toISOString(new Date());
                    telemetryItem.ver = telemetryItem.ver || "4.0";
                    if (!_isUnloading && _self[_DYN_IS_INITIALIZED ]() && _activeStatus === ActiveStatus.ACTIVE) {
                        _createTelCtx()[_DYN_PROCESS_NEXT ](telemetryItem);
                    }
                    else if (_activeStatus !== ActiveStatus.INACTIVE) {
                        if (_eventQueue[_DYN_LENGTH$2 ] <= _initInMemoMaxSize) {
                            _eventQueue[_DYN_PUSH$1 ](telemetryItem);
                        }
                    }
                }, function () { return ({ item: telemetryItem }); }, !(telemetryItem.sync));
            };
            _self[_DYN_GET_PROCESS_TEL_CONT2 ] = _createTelCtx;
            _self[_DYN_GET_NOTIFY_MGR ] = function () {
                if (!_notificationManager) {
                    _notificationManager = new NotificationManager(_configHandler.cfg);
                    _self[strNotificationManager] = _notificationManager;
                }
                return _notificationManager;
            };
            _self[_DYN_ADD_NOTIFICATION_LIS1 ] = function (listener) {
                _self.getNotifyMgr()[_DYN_ADD_NOTIFICATION_LIS1 ](listener);
            };
            _self[_DYN_REMOVE_NOTIFICATION_0 ] = function (listener) {
                if (_notificationManager) {
                    _notificationManager[_DYN_REMOVE_NOTIFICATION_0 ](listener);
                }
            };
            _self.getCookieMgr = function () {
                if (!_cookieManager) {
                    _cookieManager = createCookieMgr(_configHandler.cfg, _self[_DYN_LOGGER ]);
                }
                return _cookieManager;
            };
            _self.setCookieMgr = function (cookieMgr) {
                if (_cookieManager !== cookieMgr) {
                    runTargetUnload(_cookieManager, false);
                    _cookieManager = cookieMgr;
                }
            };
            _self[STR_GET_PERF_MGR ] = function () {
                return _perfManager || _cfgPerfManager || getGblPerfMgr();
            };
            _self.setPerfMgr = function (perfMgr) {
                _perfManager = perfMgr;
            };
            _self.eventCnt = function () {
                return _eventQueue[_DYN_LENGTH$2 ];
            };
            _self.releaseQueue = function () {
                if (_isInitialized && _eventQueue[_DYN_LENGTH$2 ] > 0) {
                    var eventQueue = _eventQueue;
                    _eventQueue = [];
                    if (_activeStatus === 2 ) {
                        arrForEach(eventQueue, function (event) {
                            event[_DYN_I_KEY$1 ] = event[_DYN_I_KEY$1 ] || _instrumentationKey;
                            _createTelCtx()[_DYN_PROCESS_NEXT ](event);
                        });
                    }
                    else {
                        _throwInternal(_logger, 2 , 20 , "core init status is not active");
                    }
                }
            };
            _self[_DYN_POLL_INTERNAL_LOGS ] = function (eventName) {
                _internalLogsEventName = eventName || null;
                _forceStopInternalLogPoller = false;
                _internalLogPoller && _internalLogPoller[_DYN_CANCEL ]();
                return _startLogPoller(true);
            };
            function _handleIKeyEndpointPromises(theConfig) {
                var ikey = theConfig.instrumentationKey;
                var endpointUrl = theConfig.endpointUrl;
                if (_activeStatus !== 3 ) {
                    if (isNullOrUndefined(ikey)) {
                        _instrumentationKey = null;
                        _activeStatus = ActiveStatus.INACTIVE;
                        var msg = "Please provide instrumentation key";
                        if (!_isInitialized) {
                            throwError(msg);
                        }
                        else {
                            _throwInternal(_logger, 1 , 100 , msg);
                            _releaseQueues();
                        }
                        return;
                    }
                    var promises = [];
                    if (isPromiseLike(ikey)) {
                        promises[_DYN_PUSH$1 ](ikey);
                        _instrumentationKey = null;
                    }
                    else {
                        _instrumentationKey = ikey;
                    }
                    if (isPromiseLike(endpointUrl)) {
                        promises[_DYN_PUSH$1 ](endpointUrl);
                        _endpoint = null;
                    }
                    else {
                        _endpoint = endpointUrl;
                    }
                    if (promises[_DYN_LENGTH$2 ]) {
                        _waitForInitPromises(theConfig, promises);
                    }
                    else {
                        _setStatus();
                    }
                }
            }
            function _waitForInitPromises(theConfig, promises) {
                _isStatusSet = false;
                _activeStatus = 3 ;
                var initTimeout = isNotNullOrUndefined(theConfig.initTimeOut) ? theConfig.initTimeOut : maxInitTimeout;
                var allPromises = createSyncAllSettledPromise(promises);
                if (_initTimer) {
                    _initTimer[_DYN_CANCEL ]();
                }
                _initTimer = scheduleTimeout(function () {
                    _initTimer = null;
                    if (!_isStatusSet) {
                        _setStatus();
                    }
                }, initTimeout);
                doAwaitResponse(allPromises, function (response) {
                    try {
                        if (_isStatusSet) {
                            return;
                        }
                        if (!response.rejected) {
                            var values = response[_DYN_VALUE ];
                            if (values && values[_DYN_LENGTH$2 ]) {
                                var ikeyRes = values[0];
                                _instrumentationKey = ikeyRes && ikeyRes[_DYN_VALUE ];
                                if (values[_DYN_LENGTH$2 ] > 1) {
                                    var endpointRes = values[1];
                                    _endpoint = endpointRes && endpointRes[_DYN_VALUE ];
                                }
                            }
                            if (_instrumentationKey) {
                                theConfig.instrumentationKey = _instrumentationKey;
                                theConfig.endpointUrl = _endpoint;
                            }
                        }
                        _setStatus();
                    }
                    catch (e) {
                        if (!_isStatusSet) {
                            _setStatus();
                        }
                    }
                });
            }
            function _setStatus() {
                _isStatusSet = true;
                if (isNullOrUndefined(_instrumentationKey)) {
                    _activeStatus = ActiveStatus.INACTIVE;
                    _throwInternal(_logger, 1 , 112 , "ikey can't be resolved from promises");
                }
                else {
                    _activeStatus = ActiveStatus.ACTIVE;
                }
                _releaseQueues();
            }
            function _releaseQueues() {
                if (_isInitialized) {
                    _self.releaseQueue();
                    _self[_DYN_POLL_INTERNAL_LOGS ]();
                }
            }
            function _startLogPoller(alwaysStart) {
                if ((!_internalLogPoller || !_internalLogPoller[_DYN_ENABLED ]) && !_forceStopInternalLogPoller) {
                    var shouldStart = alwaysStart || (_logger && _logger.queue[_DYN_LENGTH$2 ] > 0);
                    if (shouldStart) {
                        if (!_internalLogPollerListening) {
                            _internalLogPollerListening = true;
                            _addUnloadHook(_configHandler[_DYN_WATCH ](function (details) {
                                var interval = details.cfg.diagnosticLogInterval;
                                if (!interval || !(interval > 0)) {
                                    interval = 10000;
                                }
                                var isRunning = false;
                                if (_internalLogPoller) {
                                    isRunning = _internalLogPoller[_DYN_ENABLED ];
                                    _internalLogPoller[_DYN_CANCEL ]();
                                }
                                _internalLogPoller = createTimeout(_flushInternalLogs, interval);
                                _internalLogPoller.unref();
                                _internalLogPoller[_DYN_ENABLED ] = isRunning;
                            }));
                        }
                        _internalLogPoller[_DYN_ENABLED ] = true;
                    }
                }
                return _internalLogPoller;
            }
            _self[_DYN_STOP_POLLING_INTERNA3 ] = function () {
                _forceStopInternalLogPoller = true;
                _internalLogPoller && _internalLogPoller[_DYN_CANCEL ]();
                _flushInternalLogs();
            };
            proxyFunctions(_self, function () { return _telemetryInitializerPlugin; }, ["addTelemetryInitializer"]);
            _self[_DYN_UNLOAD ] = function (isAsync, unloadComplete, cbTimeout) {
                if (isAsync === void 0) { isAsync = true; }
                if (!_isInitialized) {
                    throwError(strSdkNotInitialized);
                }
                if (_isUnloading) {
                    throwError(strSdkUnloadingError);
                }
                var unloadState = {
                    reason: 50 ,
                    isAsync: isAsync,
                    flushComplete: false
                };
                var result;
                if (isAsync && !unloadComplete) {
                    result = createPromise$1(function (resolve) {
                        unloadComplete = resolve;
                    });
                }
                var processUnloadCtx = createProcessTelemetryUnloadContext(_getPluginChain(), _self);
                processUnloadCtx[_DYN_ON_COMPLETE ](function () {
                    _hookContainer.run(_self[_DYN_LOGGER ]);
                    doUnloadAll([_cookieManager, _notificationManager, _logger], isAsync, function () {
                        _initDefaults();
                        unloadComplete && unloadComplete(unloadState);
                    });
                }, _self);
                function _doUnload(flushComplete) {
                    unloadState.flushComplete = flushComplete;
                    _isUnloading = true;
                    _unloadHandlers.run(processUnloadCtx, unloadState);
                    _self[_DYN_STOP_POLLING_INTERNA3 ]();
                    processUnloadCtx[_DYN_PROCESS_NEXT ](unloadState);
                }
                _flushInternalLogs();
                if (!_flushChannels(isAsync, _doUnload, 6 , cbTimeout)) ;
                return result;
            };
            _self[_DYN_GET_PLUGIN ] = _getPlugin;
            _self.addPlugin = function (plugin, replaceExisting, isAsync, addCb) {
                if (!plugin) {
                    addCb && addCb(false);
                    _logOrThrowError(strValidationError);
                    return;
                }
                var existingPlugin = _getPlugin(plugin[_DYN_IDENTIFIER$1 ]);
                if (existingPlugin && !replaceExisting) {
                    addCb && addCb(false);
                    _logOrThrowError("Plugin [" + plugin[_DYN_IDENTIFIER$1 ] + "] is already loaded!");
                    return;
                }
                var updateState = {
                    reason: 16
                };
                function _addPlugin(removed) {
                    _configExtensions[_DYN_PUSH$1 ](plugin);
                    updateState.added = [plugin];
                    _initPluginChain(updateState);
                    addCb && addCb(true);
                }
                if (existingPlugin) {
                    var removedPlugins_1 = [existingPlugin.plugin];
                    var unloadState = {
                        reason: 2 ,
                        isAsync: !!isAsync
                    };
                    _removePlugins(removedPlugins_1, unloadState, function (removed) {
                        if (!removed) {
                            addCb && addCb(false);
                        }
                        else {
                            updateState.removed = removedPlugins_1;
                            updateState[_DYN_REASON ] |= 32 ;
                            _addPlugin();
                        }
                    });
                }
                else {
                    _addPlugin();
                }
            };
            _self.updateCfg = function (newConfig, mergeExisting) {
                if (mergeExisting === void 0) { mergeExisting = true; }
                var updateState;
                if (_self[_DYN_IS_INITIALIZED ]()) {
                    updateState = {
                        reason: 1 ,
                        cfg: _configHandler.cfg,
                        oldCfg: deepExtend({}, _configHandler.cfg),
                        newConfig: deepExtend({}, newConfig),
                        merge: mergeExisting
                    };
                    newConfig = updateState.newConfig;
                    var cfg = _configHandler.cfg;
                    newConfig[STR_EXTENSIONS ] = cfg[STR_EXTENSIONS ];
                    newConfig[STR_CHANNELS ] = cfg[STR_CHANNELS ];
                }
                _configHandler._block(function (details) {
                    var theConfig = details.cfg;
                    _deepMergeConfig(details, theConfig, newConfig, mergeExisting);
                    if (!mergeExisting) {
                        objForEachKey(theConfig, function (key) {
                            if (!objHasOwn(newConfig, key)) {
                                details.set(theConfig, key, UNDEFINED_VALUE);
                            }
                        });
                    }
                    details.setDf(theConfig, defaultConfig$3);
                }, true);
                _configHandler.notify();
                if (updateState) {
                    _doUpdate(updateState);
                }
            };
            _self.evtNamespace = function () {
                return _evtNamespace;
            };
            _self[_DYN_FLUSH ] = _flushChannels;
            _self[_DYN_GET_TRACE_CTX$1 ] = function (createNew) {
                if ((!_traceCtx && createNew !== false) || createNew === true) {
                    _traceCtx = createDistributedTraceContext(_serverOTelCtx);
                }
                return _traceCtx;
            };
            _self[_DYN_SET_TRACE_CTX ] = function (traceCtx) {
                _traceCtx = traceCtx || null;
            };
            _self.startSpan = function (name, options, parent) {
                if (!_traceProvider || !_traceProvider.v || !_traceProvider.v.isAvailable()) {
                    return null;
                }
                return _traceProvider.v.createSpan(name, options, parent || _self[_DYN_GET_TRACE_CTX$1 ]());
            };
            _self[_DYN_GET_ACTIVE_SPAN ] = function (createNew) {
                if (createNew !== false && _traceProvider && !_activeSpan && _traceProvider.v) {
                    _activeSpan = _traceProvider.v.createSpan(_traceProvider.v.getProviderId(), {
                        recording: false,
                        root: true
                    });
                }
                return _activeSpan;
            };
            _self[_DYN_SET_ACTIVE_SPAN ] = function (span) {
                var theSpanContext = null;
                var currentCtx = _self[_DYN_GET_TRACE_CTX$1 ]();
                var currentSpan = _activeSpan;
                var scope;
                if (span) {
                    var otelSpanContext = null;
                    if (span[_DYN_SPAN_CONTEXT ]) {
                        otelSpanContext = span[_DYN_SPAN_CONTEXT ]();
                    }
                    else if (span.context) {
                        otelSpanContext = span.context();
                    }
                    if (otelSpanContext) {
                        if (isDistributedTraceContext(otelSpanContext)) {
                            theSpanContext = otelSpanContext;
                        }
                        else {
                            theSpanContext = createDistributedTraceContext(currentCtx);
                            var parentContext = span[_DYN_PARENT_SPAN_CONTEXT ];
                            if (!parentContext) {
                                if (span[_DYN_PARENT_SPAN_ID ]) {
                                    parentContext = {
                                        traceId: otelSpanContext[_DYN_TRACE_ID ],
                                        spanId: span[_DYN_PARENT_SPAN_ID ]
                                    };
                                }
                            }
                            if (parentContext && parentContext[_DYN_TRACE_ID ] !== theSpanContext[_DYN_TRACE_ID ] &&
                                parentContext[_DYN_SPAN_ID ] !== theSpanContext[_DYN_SPAN_ID ] &&
                                parentContext[_DYN_TRACE_FLAGS ] !== theSpanContext[_DYN_TRACE_FLAGS ]) {
                                theSpanContext[_DYN_TRACE_ID ] = parentContext[_DYN_TRACE_ID ];
                                theSpanContext[_DYN_SPAN_ID ] = parentContext[_DYN_SPAN_ID ];
                                theSpanContext[_DYN_TRACE_FLAGS ] = parentContext[_DYN_TRACE_FLAGS ];
                                theSpanContext = createDistributedTraceContext(theSpanContext);
                            }
                            theSpanContext[_DYN_TRACE_ID ] = otelSpanContext[_DYN_TRACE_ID ];
                            theSpanContext[_DYN_SPAN_ID ] = otelSpanContext[_DYN_SPAN_ID ];
                            theSpanContext[_DYN_TRACE_FLAGS ] = otelSpanContext[_DYN_TRACE_FLAGS ];
                        }
                    }
                }
                scope = {
                    host: _self,
                    span: span,
                    prvSpan: currentSpan,
                    restore: function () {
                        if (currentSpan) {
                            _self[_DYN_SET_ACTIVE_SPAN ](currentSpan);
                        }
                        else {
                            _activeSpan = null;
                            _self[_DYN_SET_TRACE_CTX ](currentCtx);
                        }
                        scope.restore = _noopVoid;
                    }
                };
                _activeSpan = span;
                if (theSpanContext) {
                    _self[_DYN_SET_TRACE_CTX ](theSpanContext);
                }
                return scope;
            };
            _self.setTraceProvider = function (traceProvider) {
                _traceProvider = traceProvider;
            };
            _self.getTraceProvider = function () {
                return _traceProvider ? _traceProvider.v : null;
            };
            _self.addUnloadHook = _addUnloadHook;
            proxyFunctionAs(_self, "addUnloadCb", function () { return _unloadHandlers; }, "add");
            _self.onCfgChange = function (handler) {
                var unloadHook;
                if (!_isInitialized) {
                    unloadHook = _addDelayedCfgListener(_cfgListeners, handler);
                }
                else {
                    unloadHook = onConfigChange(_configHandler.cfg, handler, _self[_DYN_LOGGER ]);
                }
                return _createUnloadHook$1(unloadHook);
            };
            _self.getWParam = function () {
                return (hasDocument() || !!_configHandler.cfg.enableWParam) ? 0 : -1;
            };
            function _setPluginVersions() {
                var thePlugins = {};
                _pluginVersionStringArr = [];
                var _addPluginVersions = function (plugins) {
                    if (plugins) {
                        arrForEach(plugins, function (plugin) {
                            if (plugin[_DYN_IDENTIFIER$1 ] && plugin[STR_VERSION ] && !thePlugins[plugin.identifier]) {
                                var ver = plugin[_DYN_IDENTIFIER$1 ] + "=" + plugin[STR_VERSION ];
                                _pluginVersionStringArr[_DYN_PUSH$1 ](ver);
                                thePlugins[plugin.identifier] = plugin;
                            }
                        });
                    }
                };
                _addPluginVersions(_channels);
                if (_channelConfig) {
                    arrForEach(_channelConfig, function (channels) {
                        _addPluginVersions(channels);
                    });
                }
                _addPluginVersions(_configExtensions);
            }
            function _initDefaults() {
                _isInitialized = false;
                _configHandler = createDynamicConfig({}, defaultConfig$3, _self[_DYN_LOGGER ]);
                _configHandler.cfg[_DYN_LOGGING_LEVEL_CONSOL4 ] = 1 ;
                objDefine(_self, "config", {
                    g: function () { return _configHandler.cfg; },
                    s: function (newValue) {
                        _self.updateCfg(newValue, false);
                    }
                });
                objDefine(_self, "pluginVersionStringArr", {
                    g: function () {
                        if (!_pluginVersionStringArr) {
                            _setPluginVersions();
                        }
                        return _pluginVersionStringArr;
                    }
                });
                objDefine(_self, "pluginVersionString", {
                    g: function () {
                        if (!_pluginVersionString) {
                            if (!_pluginVersionStringArr) {
                                _setPluginVersions();
                            }
                            _pluginVersionString = _pluginVersionStringArr[_DYN_JOIN ](";");
                        }
                        return _pluginVersionString || STR_EMPTY$1;
                    }
                });
                objDefine(_self, "logger", {
                    g: function () {
                        if (!_logger) {
                            _logger = new DiagnosticLogger(_configHandler.cfg);
                            _configHandler[_DYN_LOGGER ] = _logger;
                        }
                        return _logger;
                    },
                    s: function (newLogger) {
                        _configHandler[_DYN_LOGGER ] = newLogger;
                        if (_logger !== newLogger) {
                            runTargetUnload(_logger, false);
                            _logger = newLogger;
                        }
                    }
                });
                _self[_DYN_LOGGER ] = new DiagnosticLogger(_configHandler.cfg);
                _extensions = [];
                var cfgExtensions = _self[_DYN_CONFIG$1 ][STR_EXTENSIONS ] || [];
                cfgExtensions.splice(0, cfgExtensions[_DYN_LENGTH$2 ]);
                arrAppend(cfgExtensions, _extensions);
                _telemetryInitializerPlugin = new TelemetryInitializerPlugin();
                _serverOTelCtx = null;
                _serverTraceHdrMode = 0 ;
                _eventQueue = [];
                runTargetUnload(_notificationManager, false);
                _notificationManager = null;
                _perfManager = null;
                _cfgPerfManager = null;
                runTargetUnload(_cookieManager, false);
                _cookieManager = null;
                _pluginChain = null;
                _configExtensions = [];
                _channelConfig = null;
                _channels = null;
                _isUnloading = false;
                _internalLogsEventName = null;
                _evtNamespace = createUniqueNamespace("AIBaseCore", true);
                _unloadHandlers = createUnloadHandlerContainer();
                _traceCtx = null;
                _traceProvider = null;
                _instrumentationKey = null;
                _hookContainer = createUnloadHookContainer();
                _cfgListeners = [];
                _pluginVersionString = null;
                _pluginVersionStringArr = null;
                _forceStopInternalLogPoller = false;
                _internalLogPoller = null;
                _internalLogPollerListening = false;
                _activeStatus = 0 ;
                _endpoint = null;
                _initInMemoMaxSize = null;
                _isStatusSet = false;
                _initTimer = null;
            }
            function _createTelCtx() {
                var theCtx = createProcessTelemetryContext(_getPluginChain(), _configHandler.cfg, _self);
                theCtx[_DYN_ON_COMPLETE ](_startLogPoller);
                return theCtx;
            }
            function _initPluginChain(updateState) {
                var theExtensions = _validateExtensions(_self[_DYN_LOGGER ], ChannelControllerPriority, _configExtensions);
                _pluginChain = null;
                _pluginVersionString = null;
                _pluginVersionStringArr = null;
                _channels = (_channelConfig || [])[0] || [];
                _channels = sortPlugins(arrAppend(_channels, theExtensions[STR_CHANNELS ]));
                var allExtensions = arrAppend(sortPlugins(theExtensions[STR_CORE ]), _channels);
                _extensions = objFreeze(allExtensions);
                var cfgExtensions = _self[_DYN_CONFIG$1 ][STR_EXTENSIONS ] || [];
                cfgExtensions.splice(0, cfgExtensions[_DYN_LENGTH$2 ]);
                arrAppend(cfgExtensions, _extensions);
                var rootCtx = _createTelCtx();
                if (_channels && _channels[_DYN_LENGTH$2 ] > 0) {
                    initializePlugins(rootCtx[_DYN_CREATE_NEW ](_channels), allExtensions);
                }
                initializePlugins(rootCtx, allExtensions);
                if (updateState) {
                    _doUpdate(updateState);
                }
            }
            function _getPlugin(pluginIdentifier) {
                var theExt = null;
                var thePlugin = null;
                var channelHosts = [];
                arrForEach(_extensions, function (ext) {
                    if (ext[_DYN_IDENTIFIER$1 ] === pluginIdentifier && ext !== _telemetryInitializerPlugin) {
                        thePlugin = ext;
                        return -1;
                    }
                    if (ext.getChannel) {
                        channelHosts[_DYN_PUSH$1 ](ext);
                    }
                });
                if (!thePlugin && channelHosts[_DYN_LENGTH$2 ] > 0) {
                    arrForEach(channelHosts, function (host) {
                        thePlugin = host.getChannel(pluginIdentifier);
                        if (!thePlugin) {
                            return -1;
                        }
                    });
                }
                if (thePlugin) {
                    theExt = {
                        plugin: thePlugin,
                        setEnabled: function (enabled) {
                            _getPluginState(thePlugin)[STR_DISABLED] = !enabled;
                        },
                        isEnabled: function () {
                            var pluginState = _getPluginState(thePlugin);
                            return !pluginState[_DYN_TEARDOWN ] && !pluginState[STR_DISABLED];
                        },
                        remove: function (isAsync, removeCb) {
                            if (isAsync === void 0) { isAsync = true; }
                            var pluginsToRemove = [thePlugin];
                            var unloadState = {
                                reason: 1 ,
                                isAsync: isAsync
                            };
                            _removePlugins(pluginsToRemove, unloadState, function (removed) {
                                if (removed) {
                                    _initPluginChain({
                                        reason: 32 ,
                                        removed: pluginsToRemove
                                    });
                                }
                                removeCb && removeCb(removed);
                            });
                        }
                    };
                }
                return theExt;
            }
            function _getPluginChain() {
                if (!_pluginChain) {
                    var extensions = (_extensions || []).slice();
                    if (arrIndexOf(extensions, _telemetryInitializerPlugin) === -1) {
                        extensions[_DYN_PUSH$1 ](_telemetryInitializerPlugin);
                    }
                    _pluginChain = createTelemetryProxyChain(sortPlugins(extensions), _configHandler.cfg, _self);
                }
                return _pluginChain;
            }
            function _removePlugins(thePlugins, unloadState, removeComplete) {
                if (thePlugins && thePlugins[_DYN_LENGTH$2 ] > 0) {
                    var unloadChain = createTelemetryProxyChain(thePlugins, _configHandler.cfg, _self);
                    var unloadCtx = createProcessTelemetryUnloadContext(unloadChain, _self);
                    unloadCtx[_DYN_ON_COMPLETE ](function () {
                        var removed = false;
                        var newConfigExtensions = [];
                        arrForEach(_configExtensions, function (plugin, idx) {
                            if (!_isPluginPresent(plugin, thePlugins)) {
                                newConfigExtensions[_DYN_PUSH$1 ](plugin);
                            }
                            else {
                                removed = true;
                            }
                        });
                        _configExtensions = newConfigExtensions;
                        _pluginVersionString = null;
                        _pluginVersionStringArr = null;
                        var newChannelConfig = [];
                        if (_channelConfig) {
                            arrForEach(_channelConfig, function (queue, idx) {
                                var newQueue = [];
                                arrForEach(queue, function (channel) {
                                    if (!_isPluginPresent(channel, thePlugins)) {
                                        newQueue[_DYN_PUSH$1 ](channel);
                                    }
                                    else {
                                        removed = true;
                                    }
                                });
                                newChannelConfig[_DYN_PUSH$1 ](newQueue);
                            });
                            _channelConfig = newChannelConfig;
                        }
                        removeComplete && removeComplete(removed);
                        _startLogPoller();
                    });
                    unloadCtx[_DYN_PROCESS_NEXT ](unloadState);
                }
                else {
                    removeComplete(false);
                }
            }
            function _flushInternalLogs() {
                if (_logger && _logger.queue) {
                    var queue = _logger.queue.slice(0);
                    _logger.queue[_DYN_LENGTH$2 ] = 0;
                    arrForEach(queue, function (logMessage) {
                        var item = {
                            name: _internalLogsEventName ? _internalLogsEventName : "InternalMessageId: " + logMessage[_DYN_MESSAGE_ID ],
                            iKey: _instrumentationKey,
                            time: toISOString(new Date()),
                            baseType: _InternalLogMessage.dataType,
                            baseData: { message: logMessage[_DYN_MESSAGE ] }
                        };
                        _self[_DYN_TRACK$1 ](item);
                    });
                }
            }
            function _flushChannels(isAsync, callBack, sendReason, cbTimeout) {
                var waiting = 1;
                var doneIterating = false;
                var cbTimer = null;
                cbTimeout = cbTimeout || 5000;
                function doCallback() {
                    waiting--;
                    if (doneIterating && waiting === 0) {
                        cbTimer && cbTimer[_DYN_CANCEL ]();
                        cbTimer = null;
                        callBack && callBack(doneIterating);
                        callBack = null;
                    }
                }
                if (_channels && _channels[_DYN_LENGTH$2 ] > 0) {
                    var flushCtx = _createTelCtx()[_DYN_CREATE_NEW ](_channels);
                    flushCtx.iterate(function (plugin) {
                        if (plugin[_DYN_FLUSH ]) {
                            waiting++;
                            var handled_1 = false;
                            if (!plugin[_DYN_FLUSH ](isAsync, function () {
                                handled_1 = true;
                                doCallback();
                            }, sendReason)) {
                                if (!handled_1) {
                                    if (isAsync && cbTimer == null) {
                                        cbTimer = scheduleTimeout(function () {
                                            cbTimer = null;
                                            doCallback();
                                        }, cbTimeout);
                                    }
                                    else {
                                        doCallback();
                                    }
                                }
                            }
                        }
                    });
                }
                doneIterating = true;
                doCallback();
                return true;
            }
            function _initPerfManager() {
                var prevCfgPerfMgr;
                _addUnloadHook(_configHandler[_DYN_WATCH ](function (details) {
                    var enablePerfMgr = details.cfg.enablePerfMgr;
                    if (enablePerfMgr) {
                        var createPerfMgr = details.cfg[STR_CREATE_PERF_MGR ];
                        if ((prevCfgPerfMgr !== createPerfMgr) || !prevCfgPerfMgr) {
                            if (!createPerfMgr) {
                                createPerfMgr = _createPerfManager;
                            }
                            getSetValue(details.cfg, STR_CREATE_PERF_MGR, createPerfMgr);
                            prevCfgPerfMgr = createPerfMgr;
                            _cfgPerfManager = null;
                        }
                        if (!_perfManager && !_cfgPerfManager && isFunction(createPerfMgr)) {
                            _cfgPerfManager = createPerfMgr(_self, _self[_DYN_GET_NOTIFY_MGR ]());
                        }
                    }
                    else {
                        _cfgPerfManager = null;
                        prevCfgPerfMgr = null;
                    }
                }));
            }
            function _doUpdate(updateState) {
                var updateCtx = createProcessTelemetryUpdateContext(_getPluginChain(), _self);
                updateCtx[_DYN_ON_COMPLETE ](_startLogPoller);
                if (!_self._updateHook || _self._updateHook(updateCtx, updateState) !== true) {
                    updateCtx[_DYN_PROCESS_NEXT ](updateState);
                }
            }
            function _logOrThrowError(message) {
                var logger = _self[_DYN_LOGGER ];
                if (logger) {
                    _throwInternal(logger, 2 , 73 , message);
                    _startLogPoller();
                }
                else {
                    throwError(message);
                }
            }
            function _notifyInvalidEvent(telemetryItem) {
                var manager = _self[_DYN_GET_NOTIFY_MGR ]();
                if (manager) {
                    manager[STR_EVENTS_DISCARDED ]([telemetryItem], 2 );
                }
            }
            function _addUnloadHook(hooks) {
                _hookContainer.add(hooks);
            }
        });
    }
    AppInsightsCore.__ieDyn=1;
    return AppInsightsCore;
}());

var STR_NO_RESPONSE_BODY$1 = "NoResponseBody";
var _noResponseQs$1 = "&" + STR_NO_RESPONSE_BODY$1 + "=true";
var STR_POST_METHOD = "POST";
var SenderPostManager = /** @class */ (function () {
    function SenderPostManager() {
        var _syncFetchPayload = 0;
        var _enableSendPromise;
        var _isInitialized;
        var _diagLog;
        var _isOneDs;
        var _onCompleteFuncs;
        var _disableCredentials;
        var _fetchCredentials;
        var _fallbackInst;
        var _disableXhr;
        var _disableBeacon;
        var _disableBeaconSync;
        var _disableFetchKeepAlive;
        var _addNoResponse;
        var _timeoutWrapper;
        dynamicProto(SenderPostManager, this, function (_self, _base) {
            var _sendCredentials = true;
            _initDefaults();
            _self[_DYN_INITIALIZE$1 ] = function (config, diagLog) {
                _diagLog = diagLog;
                if (_isInitialized) {
                    _throwInternal(_diagLog, 1 , 28 , "Sender is already initialized");
                }
                _self.SetConfig(config);
                _isInitialized = true;
            };
            _self["_getDbgPlgTargets"] = function () {
                return [_isInitialized, _isOneDs, _disableCredentials, _enableSendPromise];
            };
            _self.SetConfig = function (config) {
                try {
                    _onCompleteFuncs = config.senderOnCompleteCallBack || {};
                    _disableCredentials = !!config.disableCredentials;
                    _fetchCredentials = config.fetchCredentials;
                    _isOneDs = !!config.isOneDs;
                    _enableSendPromise = !!config.enableSendPromise;
                    _disableXhr = !!config.disableXhr;
                    _disableBeacon = !!config.disableBeacon;
                    _disableBeaconSync = !!config.disableBeaconSync;
                    _timeoutWrapper = config.timeWrapper;
                    _addNoResponse = !!config.addNoResponse;
                    _disableFetchKeepAlive = !!config.disableFetchKeepAlive;
                    _fallbackInst = { sendPOST: _xhrSender };
                    if (!_isOneDs) {
                        _sendCredentials = false;
                    }
                    if (_disableCredentials) {
                        var location_1 = getLocation();
                        if (location_1 && location_1.protocol && location_1.protocol[_DYN_TO_LOWER_CASE$1 ]() === "file:") {
                            _sendCredentials = false;
                        }
                    }
                    return true;
                }
                catch (e) {
                }
                return false;
            };
            _self.getSyncFetchPayload = function () {
                return _syncFetchPayload;
            };
            _self.getSenderInst = function (transports, sync) {
                if (transports && transports[_DYN_LENGTH$2 ]) {
                    return _getSenderInterface(transports, sync);
                }
                return null;
            };
            _self.getFallbackInst = function () {
                return _fallbackInst;
            };
            _self[_DYN__DO_TEARDOWN ] = function (unloadCtx, unloadState) {
                _initDefaults();
            };
            _self.preparePayload = function (callback, zipPayload, payload, isSync) {
                if (!zipPayload || isSync || !payload[_DYN_DATA ]) {
                    callback(payload);
                    return;
                }
                try {
                    var csStream = getInst("CompressionStream");
                    if (!isFunction(csStream)) {
                        callback(payload);
                        return;
                    }
                    var body = new ReadableStream({
                        start: function (controller) {
                            controller.enqueue(isString(payload[_DYN_DATA ]) ? new TextEncoder().encode(payload[_DYN_DATA ]) : payload[_DYN_DATA ]);
                            controller.close();
                        }
                    });
                    var compressedStream = body.pipeThrough(new csStream("gzip"));
                    var reader_1 = compressedStream.getReader();
                    var chunks_1 = [];
                    var totalLength_1 = 0;
                    var callbackCalled_1 = false;
                    doAwaitResponse(reader_1.read(), function processChunk(response) {
                        if (!callbackCalled_1 && !response.rejected) {
                            var result = response[_DYN_VALUE ];
                            if (!result.done) {
                                chunks_1[_DYN_PUSH$1 ](result[_DYN_VALUE ]);
                                totalLength_1 += result.value[_DYN_LENGTH$2 ];
                                return doAwaitResponse(reader_1.read(), processChunk);
                            }
                            var combined = new Uint8Array(totalLength_1);
                            var offset = 0;
                            for (var _i = 0, chunks_2 = chunks_1; _i < chunks_2.length; _i++) {
                                var chunk = chunks_2[_i];
                                combined.set(chunk, offset);
                                offset += chunk[_DYN_LENGTH$2 ];
                            }
                            payload[_DYN_DATA ] = combined;
                            payload[_DYN_HEADERS$1 ]["Content-Encoding"] = "gzip";
                            payload._chunkCount = chunks_1[_DYN_LENGTH$2 ];
                        }
                        if (!callbackCalled_1) {
                            callbackCalled_1 = true;
                            callback(payload);
                        }
                    });
                    return reader_1;
                }
                catch (error) {
                    callback(payload);
                    return;
                }
            };
            function _onSuccess(res, onComplete) {
                _doOnComplete(onComplete, 200, {}, res);
            }
            function _onError(message, onComplete) {
                _throwInternal(_diagLog, 2 , 26 , "Failed to send telemetry.", { message: message });
                _doOnComplete(onComplete, 400, {});
            }
            function _onNoPayloadUrl(onComplete) {
                _onError("No endpoint url is provided for the batch", onComplete);
            }
            function _getSenderInterface(transports, syncSupport) {
                var transportType = 0 ;
                var sendPostFunc = null;
                var lp = 0;
                while (sendPostFunc == null && lp < transports[_DYN_LENGTH$2 ]) {
                    transportType = transports[lp];
                    if (!_disableXhr && transportType === 1 ) {
                        if (isXhrSupported()) {
                            sendPostFunc = _xhrSender;
                        }
                    }
                    else if (transportType === 2  && isFetchSupported(syncSupport) && (!syncSupport || !_disableFetchKeepAlive)) {
                        sendPostFunc = _doFetchSender;
                    }
                    else if (transportType === 3  && isBeaconsSupported() && (syncSupport ? !_disableBeaconSync : !_disableBeacon)) {
                        sendPostFunc = _beaconSender;
                    }
                    lp++;
                }
                if (sendPostFunc) {
                    return {
                        _transport: transportType,
                        _isSync: syncSupport,
                        sendPOST: sendPostFunc
                    };
                }
                return null;
            }
            function _doOnComplete(oncomplete, status, headers, response) {
                try {
                    oncomplete && oncomplete(status, headers, response);
                }
                catch (e) {
                }
            }
            function _doBeaconSend(payload, oncomplete) {
                var nav = getNavigator();
                var url = payload[_DYN_URL_STRING ];
                if (!url) {
                    _onNoPayloadUrl(oncomplete);
                    return true;
                }
                url = payload[_DYN_URL_STRING ] + (_addNoResponse ? _noResponseQs$1 : STR_EMPTY$1);
                var data = payload[_DYN_DATA ];
                var plainTextBatch = _isOneDs ? data : new Blob([data], { type: "text/plain;charset=UTF-8" });
                var queued = nav.sendBeacon(url, plainTextBatch);
                return queued;
            }
            function _beaconSender(payload, oncomplete, sync) {
                var data = payload[_DYN_DATA ];
                try {
                    if (data) {
                        if (!_doBeaconSend(payload, oncomplete)) {
                            var onRetry = _onCompleteFuncs && _onCompleteFuncs.beaconOnRetry;
                            if (onRetry && isFunction(onRetry)) {
                                onRetry(payload, oncomplete, _doBeaconSend);
                            }
                            else {
                                _fallbackInst && _fallbackInst.sendPOST(payload, oncomplete, true);
                                _throwInternal(_diagLog, 2 , 40 , ". " + "Failed to send telemetry with Beacon API, retried with normal sender.");
                            }
                        }
                        else {
                            _onSuccess(STR_EMPTY$1, oncomplete);
                        }
                    }
                }
                catch (e) {
                    _isOneDs && _warnToConsole(_diagLog, "Failed to send telemetry using sendBeacon API. Ex:" + dumpObj(e));
                    _doOnComplete(oncomplete, _isOneDs ? 0 : 400, {}, STR_EMPTY$1);
                }
                return;
            }
            function _xhrSender(payload, oncomplete, sync) {
                var thePromise;
                var resolveFunc;
                var rejectFunc;
                var headers = payload[_DYN_HEADERS$1 ] || {};
                if (!sync && _enableSendPromise) {
                    thePromise = createPromise$1(function (resolve, reject) {
                        resolveFunc = resolve;
                        rejectFunc = reject;
                    });
                }
                if (_isOneDs && sync && payload.disableXhrSync) {
                    sync = false;
                }
                var endPointUrl = payload[_DYN_URL_STRING ];
                if (!endPointUrl) {
                    _onNoPayloadUrl(oncomplete);
                    resolveFunc && resolveFunc(false);
                    return;
                }
                var xhr = openXhr(STR_POST_METHOD, endPointUrl, _sendCredentials, true, sync, payload[_DYN_TIMEOUT ]);
                if (!_isOneDs) {
                    xhr.setRequestHeader("Content-type", "application/json");
                }
                arrForEach(objKeys(headers), function (headerName) {
                    xhr.setRequestHeader(headerName, headers[headerName]);
                });
                xhr.onreadystatechange = function () {
                    if (!_isOneDs) {
                        _doOnReadyFunc(xhr);
                        if (xhr.readyState === 4) {
                            resolveFunc && resolveFunc(true);
                        }
                    }
                };
                xhr.onload = function () {
                    if (_isOneDs) {
                        _doOnReadyFunc(xhr);
                    }
                };
                function _doOnReadyFunc(xhr) {
                    var onReadyFunc = _onCompleteFuncs && _onCompleteFuncs.xhrOnComplete;
                    var onReadyFuncExist = onReadyFunc && isFunction(onReadyFunc);
                    if (onReadyFuncExist) {
                        onReadyFunc(xhr, oncomplete, payload);
                    }
                    else {
                        var response = getResponseText(xhr);
                        _doOnComplete(oncomplete, xhr[_DYN_STATUS ], _getAllResponseHeaders(xhr, _isOneDs), response);
                    }
                }
                xhr.onerror = function (event) {
                    _doOnComplete(oncomplete, _isOneDs ? xhr[_DYN_STATUS ] : 400, _getAllResponseHeaders(xhr, _isOneDs), _isOneDs ? STR_EMPTY$1 : formatErrorMessageXhr(xhr));
                    rejectFunc && rejectFunc(event);
                };
                xhr.ontimeout = function () {
                    _doOnComplete(oncomplete, _isOneDs ? xhr[_DYN_STATUS ] : 500, _getAllResponseHeaders(xhr, _isOneDs), _isOneDs ? STR_EMPTY$1 : formatErrorMessageXhr(xhr));
                    resolveFunc && resolveFunc(false);
                };
                xhr.send(payload[_DYN_DATA ]);
                return thePromise;
            }
            function _doFetchSender(payload, oncomplete, sync) {
                var _a;
                var endPointUrl = payload[_DYN_URL_STRING ];
                var batch = payload[_DYN_DATA ];
                var plainTextBatch = _isOneDs ? batch : new Blob([batch], { type: "application/json" });
                var thePromise;
                var resolveFunc;
                var rejectFunc;
                var requestHeaders = new Headers();
                var batchLength = batch[_DYN_LENGTH$2 ];
                var ignoreResponse = false;
                var responseHandled = false;
                var headers = payload[_DYN_HEADERS$1 ] || {};
                var init = (_a = {
                        method: STR_POST_METHOD,
                        body: plainTextBatch
                    },
                    _a[DisabledPropertyName] = true
                ,
                    _a);
                if (payload.headers && objKeys(payload.headers)[_DYN_LENGTH$2 ] > 0) {
                    arrForEach(objKeys(headers), function (headerName) {
                        requestHeaders.append(headerName, headers[headerName]);
                    });
                    init[_DYN_HEADERS$1 ] = requestHeaders;
                }
                if (_fetchCredentials) {
                    init.credentials = _fetchCredentials;
                }
                else if (_sendCredentials && _isOneDs) {
                    init.credentials = "include";
                }
                if (sync) {
                    init.keepalive = true;
                    _syncFetchPayload += batchLength;
                    if (_isOneDs) {
                        if (payload["_sendReason"] === 2 ) {
                            ignoreResponse = true;
                            if (_addNoResponse) {
                                endPointUrl += _noResponseQs$1;
                            }
                        }
                    }
                    else {
                        ignoreResponse = true;
                    }
                }
                var request = new Request(endPointUrl, init);
                try {
                    request[DisabledPropertyName] = true;
                }
                catch (e) {
                }
                if (!sync && _enableSendPromise) {
                    thePromise = createPromise$1(function (resolve, reject) {
                        resolveFunc = resolve;
                        rejectFunc = reject;
                    });
                }
                if (!endPointUrl) {
                    _onNoPayloadUrl(oncomplete);
                    resolveFunc && resolveFunc(false);
                    return;
                }
                function _handleError(res, statusCode) {
                    if (statusCode) {
                        _doOnComplete(oncomplete, _isOneDs ? 0 : statusCode, {}, _isOneDs ? STR_EMPTY$1 : res);
                    }
                    else {
                        _doOnComplete(oncomplete, _isOneDs ? 0 : 400, {}, _isOneDs ? STR_EMPTY$1 : res);
                    }
                }
                function _onFetchComplete(response, payload, value) {
                    var status = response[_DYN_STATUS ];
                    var onCompleteFunc = _onCompleteFuncs.fetchOnComplete;
                    if (onCompleteFunc && isFunction(onCompleteFunc)) {
                        onCompleteFunc(response, oncomplete, value || STR_EMPTY$1, payload);
                    }
                    else {
                        _doOnComplete(oncomplete, status, {}, value || STR_EMPTY$1);
                    }
                }
                try {
                    doAwaitResponse(fetch(_isOneDs ? endPointUrl : request, _isOneDs ? init : null), function (result) {
                        if (sync) {
                            _syncFetchPayload -= batchLength;
                            batchLength = 0;
                        }
                        if (!responseHandled) {
                            responseHandled = true;
                            if (!result.rejected) {
                                var response_1 = result[_DYN_VALUE ];
                                try {
                                    if (!_isOneDs && !response_1.ok) {
                                        if (response_1[_DYN_STATUS ]) {
                                            _handleError(response_1.statusText, response_1[_DYN_STATUS ]);
                                        }
                                        else {
                                            _handleError(response_1.statusText, 499);
                                        }
                                        resolveFunc && resolveFunc(false);
                                    }
                                    else {
                                        if (_isOneDs && !response_1.body) {
                                            _onFetchComplete(response_1, null, STR_EMPTY$1);
                                            resolveFunc && resolveFunc(true);
                                        }
                                        else {
                                            doAwaitResponse(response_1.text(), function (resp) {
                                                _onFetchComplete(response_1, payload, resp[_DYN_VALUE ]);
                                                resolveFunc && resolveFunc(true);
                                            });
                                        }
                                    }
                                }
                                catch (e) {
                                    if (response_1 && response_1[_DYN_STATUS ]) {
                                        _handleError(dumpObj(e), response_1[_DYN_STATUS ]);
                                    }
                                    else {
                                        _handleError(dumpObj(e), 499);
                                    }
                                    rejectFunc && rejectFunc(e);
                                }
                            }
                            else {
                                _handleError(result[_DYN_REASON ] && result[_DYN_REASON ][_DYN_MESSAGE ], 499);
                                rejectFunc && rejectFunc(result[_DYN_REASON ]);
                            }
                        }
                    });
                }
                catch (e) {
                    if (!responseHandled) {
                        _handleError(dumpObj(e), 499);
                        rejectFunc && rejectFunc(e);
                    }
                }
                if (ignoreResponse && !responseHandled) {
                    responseHandled = true;
                    _doOnComplete(oncomplete, 200, {});
                    resolveFunc && resolveFunc(true);
                }
                if (_isOneDs && !responseHandled && payload[_DYN_TIMEOUT ] > 0) {
                    _timeoutWrapper && _timeoutWrapper.set(function () {
                        if (!responseHandled) {
                            responseHandled = true;
                            _doOnComplete(oncomplete, 500, {});
                            resolveFunc && resolveFunc(true);
                        }
                    }, payload[_DYN_TIMEOUT ]);
                }
                return thePromise;
            }
            function _initDefaults() {
                _syncFetchPayload = 0;
                _isInitialized = false;
                _enableSendPromise = false;
                _diagLog = null;
                _isOneDs = null;
                _onCompleteFuncs = null;
                _disableCredentials = null;
                _fetchCredentials = null;
                _fallbackInst = null;
                _disableXhr = false;
                _disableBeacon = false;
                _disableBeaconSync = false;
                _disableFetchKeepAlive = false;
                _addNoResponse = false;
                _timeoutWrapper = null;
            }
        });
    }
    SenderPostManager.__ieDyn=1;
    return SenderPostManager;
}());

var strOnPrefix = "on";
var strAttachEvent = "attachEvent";
var strAddEventHelper = "addEventListener";
var strDetachEvent = "detachEvent";
var strRemoveEventListener = "removeEventListener";
var strEvents = "events";
var strVisibilityChangeEvt = "visibilitychange";
var strPageHide = "pagehide";
var strPageShow = "pageshow";
var strUnload = "unload";
var strBeforeUnload = "beforeunload";
var _strPageHideNamespace;
var _strPageShowNamespace;
/*#__NO_SIDE_EFFECTS__*/
function _getPageHideNamespace() {
    !_strPageHideNamespace && (_strPageHideNamespace = createCachedValue(createUniqueNamespace("aiEvtPageHide")));
    return _strPageHideNamespace.v;
}
/*#__NO_SIDE_EFFECTS__*/
function _getPageShowNamespace() {
    !_strPageShowNamespace && (_strPageShowNamespace = createCachedValue(createUniqueNamespace("aiEvtPageShow")));
    return _strPageShowNamespace.v;
}
var rRemoveEmptyNs = /\.[\.]+/g;
var rRemoveTrailingEmptyNs = /[\.]+$/;
var _guid = 1;
var _elmNodeData;
/*#__NO_SIDE_EFFECTS__*/
function _getElmNodeData() {
    !_elmNodeData && (_elmNodeData = createCachedValue(createElmNodeData("events")));
    return _elmNodeData.v;
}
var eventNamespace = /^([^.]*)(?:\.(.+)|)/;
/*#__NO_SIDE_EFFECTS__*/
function _normalizeNamespace(name) {
    if (name && name[_DYN_REPLACE ]) {
        return name[_DYN_REPLACE ](/^[\s\.]+|(?=[\s\.])[\.\s]+$/g, STR_EMPTY$1);
    }
    return name;
}
/*#__NO_SIDE_EFFECTS__*/
function _getEvtNamespace(eventName, evtNamespace) {
    if (evtNamespace) {
        var theNamespace_1 = STR_EMPTY$1;
        if (isArray(evtNamespace)) {
            theNamespace_1 = STR_EMPTY$1;
            arrForEach(evtNamespace, function (name) {
                name = _normalizeNamespace(name);
                if (name) {
                    if (name[0] !== ".") {
                        name = "." + name;
                    }
                    theNamespace_1 += name;
                }
            });
        }
        else {
            theNamespace_1 = _normalizeNamespace(evtNamespace);
        }
        if (theNamespace_1) {
            if (theNamespace_1[0] !== ".") {
                theNamespace_1 = "." + theNamespace_1;
            }
            eventName = (eventName || STR_EMPTY$1) + theNamespace_1;
        }
    }
    var parsedEvent = (eventNamespace.exec(eventName || STR_EMPTY$1) || []);
    return {
        type: parsedEvent[1],
        ns: ((parsedEvent[2] || STR_EMPTY$1).replace(rRemoveEmptyNs, ".").replace(rRemoveTrailingEmptyNs, STR_EMPTY$1).split(".").sort())[_DYN_JOIN ](".")
    };
}
/*#__NO_SIDE_EFFECTS__*/
function _getRegisteredEvents(target, evtName, addDefault) {
    if (addDefault === void 0) { addDefault = true; }
    var aiEvts = _getElmNodeData().get(target, strEvents, {}, addDefault);
    var registeredEvents = aiEvts[evtName];
    if (!registeredEvents) {
        registeredEvents = aiEvts[evtName] = [];
    }
    return registeredEvents;
}
function _doDetach(obj, evtName, handlerRef, useCapture) {
    if (obj && evtName && evtName[_DYN_TYPE ]) {
        if (obj[strRemoveEventListener]) {
            obj[strRemoveEventListener](evtName[_DYN_TYPE ], handlerRef, useCapture);
        }
        else if (obj[strDetachEvent]) {
            obj[strDetachEvent](strOnPrefix + evtName[_DYN_TYPE ], handlerRef);
        }
    }
}
function _doAttach(obj, evtName, handlerRef, useCapture) {
    var result = false;
    if (obj && evtName && evtName[_DYN_TYPE ] && handlerRef) {
        if (obj[strAddEventHelper]) {
            obj[strAddEventHelper](evtName[_DYN_TYPE ], handlerRef, useCapture);
            result = true;
        }
        else if (obj[strAttachEvent]) {
            obj[strAttachEvent](strOnPrefix + evtName[_DYN_TYPE ], handlerRef);
            result = true;
        }
    }
    return result;
}
function _doUnregister(target, events, evtName, unRegFn) {
    var idx = events[_DYN_LENGTH$2 ];
    while (idx--) {
        var theEvent = events[idx];
        if (theEvent) {
            if (!evtName.ns || evtName.ns === theEvent[_DYN_EVT_NAME ].ns) {
                if (!unRegFn || unRegFn(theEvent)) {
                    _doDetach(target, theEvent.evtName, theEvent[_DYN_HANDLER ], theEvent.capture);
                    events[_DYN_SPLICE ](idx, 1);
                }
            }
        }
    }
}
function _unregisterEvents(target, evtName, unRegFn) {
    if (evtName[_DYN_TYPE ]) {
        _doUnregister(target, _getRegisteredEvents(target, evtName[_DYN_TYPE ]), evtName, unRegFn);
    }
    else {
        var eventCache = _getElmNodeData().get(target, strEvents, {});
        objForEachKey(eventCache, function (evtType, events) {
            _doUnregister(target, events, evtName, unRegFn);
        });
        if (objKeys(eventCache)[_DYN_LENGTH$2 ] === 0) {
            _getElmNodeData().kill(target, strEvents);
        }
    }
}
/*#__NO_SIDE_EFFECTS__*/
function mergeEvtNamespace(theNamespace, namespaces) {
    var newNamespaces;
    if (namespaces) {
        if (isArray(namespaces)) {
            newNamespaces = [theNamespace][_DYN_CONCAT$1 ](namespaces);
        }
        else {
            newNamespaces = [theNamespace, namespaces];
        }
        newNamespaces = (_getEvtNamespace("xx", newNamespaces).ns)[_DYN_SPLIT$1 ](".");
    }
    else {
        newNamespaces = theNamespace;
    }
    return newNamespaces;
}
function eventOn(target, eventName, handlerRef, evtNamespace, useCapture) {
    if (useCapture === void 0) { useCapture = false; }
    var result = false;
    if (target) {
        try {
            var evtName = _getEvtNamespace(eventName, evtNamespace);
            result = _doAttach(target, evtName, handlerRef, useCapture);
            if (result && _getElmNodeData().accept(target)) {
                var registeredEvent = {
                    guid: _guid++,
                    evtName: evtName,
                    handler: handlerRef,
                    capture: useCapture
                };
                _getRegisteredEvents(target, evtName.type)[_DYN_PUSH$1 ](registeredEvent);
            }
        }
        catch (e) {
        }
    }
    return result;
}
function eventOff(target, eventName, handlerRef, evtNamespace, useCapture) {
    if (useCapture === void 0) { useCapture = false; }
    if (target) {
        try {
            var evtName_1 = _getEvtNamespace(eventName, evtNamespace);
            var found_1 = false;
            _unregisterEvents(target, evtName_1, function (regEvent) {
                if ((evtName_1.ns && !handlerRef) || regEvent[_DYN_HANDLER ] === handlerRef) {
                    found_1 = true;
                    return true;
                }
                return false;
            });
            if (!found_1) {
                _doDetach(target, evtName_1, handlerRef, useCapture);
            }
        }
        catch (e) {
        }
    }
}
function addEventHandler(eventName, callback, evtNamespace) {
    var result = false;
    var w = getWindow();
    if (w) {
        result = eventOn(w, eventName, callback, evtNamespace);
        result = eventOn(w["body"], eventName, callback, evtNamespace) || result;
    }
    var doc = getDocument();
    if (doc) {
        result = eventOn(doc, eventName, callback, evtNamespace) || result;
    }
    return result;
}
function removeEventHandler(eventName, callback, evtNamespace) {
    var w = getWindow();
    if (w) {
        eventOff(w, eventName, callback, evtNamespace);
        eventOff(w["body"], eventName, callback, evtNamespace);
    }
    var doc = getDocument();
    if (doc) {
        eventOff(doc, eventName, callback, evtNamespace);
    }
}
function _addEventListeners(events, listener, excludeEvents, evtNamespace) {
    var added = false;
    if (listener && events && events[_DYN_LENGTH$2 ] > 0) {
        arrForEach(events, function (name) {
            if (name) {
                if (!excludeEvents || arrIndexOf(excludeEvents, name) === -1) {
                    added = addEventHandler(name, listener, evtNamespace) || added;
                }
            }
        });
    }
    return added;
}
function addEventListeners(events, listener, excludeEvents, evtNamespace) {
    var added = false;
    if (listener && events && isArray(events)) {
        added = _addEventListeners(events, listener, excludeEvents, evtNamespace);
        if (!added && excludeEvents && excludeEvents[_DYN_LENGTH$2 ] > 0) {
            added = _addEventListeners(events, listener, null, evtNamespace);
        }
    }
    return added;
}
function removeEventListeners(events, listener, evtNamespace) {
    if (events && isArray(events)) {
        arrForEach(events, function (name) {
            if (name) {
                removeEventHandler(name, listener, evtNamespace);
            }
        });
    }
}
function addPageUnloadEventListener(listener, excludeEvents, evtNamespace) {
    return addEventListeners([strBeforeUnload, strUnload, strPageHide], listener, excludeEvents, evtNamespace);
}
function removePageUnloadEventListener(listener, evtNamespace) {
    removeEventListeners([strBeforeUnload, strUnload, strPageHide], listener, evtNamespace);
}
function addPageHideEventListener(listener, excludeEvents, evtNamespace) {
    function _handlePageVisibility(evt) {
        var doc = getDocument();
        if (listener && doc && doc.visibilityState === "hidden") {
            listener(evt);
        }
    }
    var newNamespaces = mergeEvtNamespace(_getPageHideNamespace(), evtNamespace);
    var pageUnloadAdded = _addEventListeners([strPageHide], listener, excludeEvents, newNamespaces);
    if (!excludeEvents || arrIndexOf(excludeEvents, strVisibilityChangeEvt) === -1) {
        pageUnloadAdded = _addEventListeners([strVisibilityChangeEvt], _handlePageVisibility, excludeEvents, newNamespaces) || pageUnloadAdded;
    }
    if (!pageUnloadAdded && excludeEvents) {
        pageUnloadAdded = addPageHideEventListener(listener, null, evtNamespace);
    }
    return pageUnloadAdded;
}
function removePageHideEventListener(listener, evtNamespace) {
    var newNamespaces = mergeEvtNamespace(_getPageHideNamespace(), evtNamespace);
    removeEventListeners([strPageHide], listener, newNamespaces);
    removeEventListeners([strVisibilityChangeEvt], null, newNamespaces);
}
function addPageShowEventListener(listener, excludeEvents, evtNamespace) {
    function _handlePageVisibility(evt) {
        var doc = getDocument();
        if (listener && doc && doc.visibilityState === "visible") {
            listener(evt);
        }
    }
    var newNamespaces = mergeEvtNamespace(_getPageShowNamespace(), evtNamespace);
    var pageShowAdded = _addEventListeners([strPageShow], listener, excludeEvents, newNamespaces);
    pageShowAdded = _addEventListeners([strVisibilityChangeEvt], _handlePageVisibility, excludeEvents, newNamespaces) || pageShowAdded;
    if (!pageShowAdded && excludeEvents) {
        pageShowAdded = addPageShowEventListener(listener, null, evtNamespace);
    }
    return pageShowAdded;
}
function removePageShowEventListener(listener, evtNamespace) {
    var newNamespaces = mergeEvtNamespace(_getPageShowNamespace(), evtNamespace);
    removeEventListeners([strPageShow], listener, newNamespaces);
    removeEventListeners([strVisibilityChangeEvt], null, newNamespaces);
}

var aiInstrumentHooks = "_aiHooks";
var cbNames = [
    "req", "rsp", "hkErr", "fnErr"
];
function _arrLoop(arr, fn) {
    if (arr) {
        for (var lp = 0; lp < arr[_DYN_LENGTH$2 ]; lp++) {
            if (fn(arr[lp], lp)) {
                break;
            }
        }
    }
}
function _doCallbacks(hooks, callDetails, cbArgs, hookCtx, type) {
    if (type >= 0  && type <= 2 ) {
        _arrLoop(hooks, function (hook, idx) {
            var cbks = hook.cbks;
            var cb = cbks[cbNames[type]];
            if (cb) {
                callDetails.ctx = function () {
                    var ctx = hookCtx[idx] = (hookCtx[idx] || {});
                    return ctx;
                };
                try {
                    cb[_DYN_APPLY ](callDetails.inst, cbArgs);
                }
                catch (err) {
                    var orgEx = callDetails.err;
                    try {
                        var hookErrorCb = cbks[cbNames[2 ]];
                        if (hookErrorCb) {
                            callDetails.err = err;
                            hookErrorCb[_DYN_APPLY ](callDetails.inst, cbArgs);
                        }
                    }
                    catch (e) {
                    }
                    finally {
                        callDetails.err = orgEx;
                    }
                }
            }
        });
    }
}
function _createFunctionHook(aiHook) {
    return function () {
        var funcThis = this;
        var orgArgs = arguments;
        var hooks = aiHook.h;
        var funcArgs = {
            name: aiHook.n,
            inst: funcThis,
            ctx: null,
            set: _replaceArg
        };
        var hookCtx = [];
        var cbArgs = _createArgs([funcArgs], orgArgs);
        funcArgs.evt = getInst("event");
        function _createArgs(target, theArgs) {
            _arrLoop(theArgs, function (arg) {
                target[_DYN_PUSH$1 ](arg);
            });
            return target;
        }
        function _replaceArg(idx, value) {
            orgArgs = _createArgs([], orgArgs);
            orgArgs[idx] = value;
            cbArgs = _createArgs([funcArgs], orgArgs);
        }
        _doCallbacks(hooks, funcArgs, cbArgs, hookCtx, 0 );
        var theFunc = aiHook.f;
        if (theFunc) {
            try {
                funcArgs.rslt = theFunc[_DYN_APPLY ](funcThis, orgArgs);
            }
            catch (err) {
                funcArgs.err = err;
                _doCallbacks(hooks, funcArgs, cbArgs, hookCtx, 3 );
                throw err;
            }
        }
        _doCallbacks(hooks, funcArgs, cbArgs, hookCtx, 1 );
        return funcArgs.rslt;
    };
}
function _getOwner(target, name, checkPrototype, checkParentProto) {
    var owner = null;
    if (target) {
        if (objHasOwnProperty(target, name)) {
            owner = target;
        }
        else if (checkPrototype) {
            owner = _getOwner(_getObjProto(target), name, checkParentProto, false);
        }
    }
    return owner;
}
function _createInstrumentHook(owner, funcName, fn, callbacks) {
    var aiHook = fn && fn[aiInstrumentHooks];
    if (!aiHook) {
        aiHook = {
            i: 0,
            n: funcName,
            f: fn,
            h: []
        };
        var newFunc = _createFunctionHook(aiHook);
        newFunc[aiInstrumentHooks] = aiHook;
        owner[funcName] = newFunc;
    }
    var theHook = {
        id: aiHook.i,
        cbks: callbacks,
        rm: function () {
            var id = this.id;
            _arrLoop(aiHook.h, function (hook, idx) {
                if (hook.id === id) {
                    aiHook.h[_DYN_SPLICE ](idx, 1);
                    return 1;
                }
            });
        }
    };
    aiHook.i++;
    aiHook.h[_DYN_PUSH$1 ](theHook);
    return theHook;
}
function InstrumentEvent(target, evtName, callbacks, checkPrototype, checkParentProto) {
    if (target && evtName && callbacks) {
        var owner = _getOwner(target, evtName, checkPrototype, checkParentProto) || target;
        if (owner) {
            return _createInstrumentHook(owner, evtName, owner[evtName], callbacks);
        }
    }
    return null;
}

/*#__NO_SIDE_EFFECTS__*/
function handleAttribError(handlers, message, key, value) {
    if (handlers.attribError) {
        handlers.attribError(message, key, value);
    }
}

var _inheritedKey = "~[[inherited]]";
var _deletedKey = "~[[deleted]]";
var _containerId = 0;
function _noOpFunc() {
}
function _addValue(container, target, theKey, value, maxAttribs, cfg) {
    var errorHandlers = cfg[_DYN_ERROR_HANDLERS ] || {};
    if (theKey && getLength(theKey) > 0) {
        var key = theKey[_DYN_SPLIT$1 ](".");
        var parts = [];
        var keyIndex = 0;
        var keyLen = getLength(key);
        while (keyIndex < keyLen) {
            var part = key[keyIndex];
            parts[_DYN_PUSH$1 ](part);
            if (keyIndex === keyLen - 1) {
                if (target[part] && target[part].n) {
                    handleAttribError(errorHandlers, "Attribute key [" + parts[_DYN_JOIN ](".") + "] already exists as a branch node", theKey, value);
                    return { r: 2  };
                }
                if (!target[part] || target[part].d) {
                    if (container.size >= maxAttribs) {
                        if (!container.has(theKey)) {
                            return { r: 1  };
                        }
                    }
                    target[part] = {
                        v: value
                    };
                    return { r: 0 , a: true };
                }
                else {
                    var previousValue = target[part].v;
                    target[part].v = value;
                    target[part].d = false;
                    return { r: 0 , a: false, p: previousValue };
                }
            }
            if (!target[part]) {
                target[part] = {
                    n: {}
                };
            }
            if (!target[part].n) {
                handleAttribError(errorHandlers, "Attribute key [" + parts[_DYN_JOIN ](".") + "] already exists as a leaf node", theKey, value);
                return { r: 3  };
            }
            target = target[part].n;
            keyIndex++;
        }
    }
    return { r: 4  };
}
function _deleteValue(target, key) {
    if (key && getLength(key) > 0) {
        var keyIndex = 0;
        var keyLen = getLength(key);
        while (keyIndex < keyLen - 1) {
            var part = key[keyIndex++];
            if (!target[part]) {
                target[part] = {
                    n: {}
                };
            }
            if (!target[part].n) {
                return { d: false };
            }
            target = target[part].n;
        }
        var lastPart = key[keyLen - 1];
        if (target[lastPart] && !target[lastPart].d && !target[lastPart].n) {
            var prev = target[lastPart].v;
            target[lastPart].d = true;
            target[lastPart].v = UNDEFINED_VALUE;
            return { d: true, p: prev };
        }
        else if (!target[lastPart] || !target[lastPart].d) {
            target[lastPart] = {
                d: true
            };
            return { d: true };
        }
    }
    return { d: false };
}
function _findDetail(container, key, filter, cb, nodes, inheritContainer, inheritAttribObj, otelCfg) {
    var theDetail;
    if (key && getLength(key) > 0) {
        var theNode = void 0;
        var target = nodes;
        var keys = strSplit(key, ".");
        var keysLen = getLength(keys);
        var idx = 0;
        if (filter == 0  || filter === 2  || isUndefined(filter)) {
            while (target && idx < keysLen) {
                var part = keys[idx++];
                var node = target[part];
                if (node && idx >= keysLen) {
                    theNode = node;
                    break;
                }
                if (!node || !node.n) {
                    break;
                }
                target = node.n;
            }
            if (theNode) {
                theDetail = {
                    c: container,
                    k: key,
                    n: theNode,
                    v: theNode.d ? UNDEFINED_VALUE : theNode.v,
                    s: 0 ,
                    e: !theNode.d
                };
            }
        }
        if (!theDetail && (filter === 1  || isUndefined(filter))) {
            var inheritedValue = _getInheritedValue(key, inheritContainer, inheritAttribObj);
            if (inheritedValue) {
                theDetail = {
                    c: container,
                    k: key,
                    n: null,
                    v: inheritedValue.v,
                    s: 1 ,
                    e: true
                };
            }
        }
    }
    return cb(theDetail);
}
function _size(target, inheritAttrib, inheritContainer) {
    var count = 0;
    var seenKeys = [];
    var iter = _iterator(target, function (prefix, key, _node) {
        return prefix + key;
    }, undefined, inheritContainer || inheritAttrib);
    iterForOf(iter, function (key) {
        if (arrIndexOf(seenKeys, key) === -1) {
            seenKeys[_DYN_PUSH$1 ](key);
            count++;
        }
    });
    return count;
}
function _getStackEntry(theNode, prefix) {
    var entry;
    if (theNode) {
        var allKeys = objKeys(theNode);
        if (getLength(allKeys) > 0) {
            entry = {
                p: prefix,
                n: theNode,
                k: allKeys,
                i: -1
            };
        }
    }
    return entry;
}
function _iterator(target, cb, otelCfg, parentAttribs, inclDeleted) {
    var stack = [];
    var visitedKeys = parentAttribs ? [] : UNDEFINED_VALUE;
    var inheritState;
    var inheritContainerIter;
    var current = _getStackEntry(target, STR_EMPTY$1);
    var inheritContainer;
    var inheritAttribs;
    var ctx = {
        v: undefined,
        n: _moveNext
    };
    if (parentAttribs) {
        if (isAttributeContainer(parentAttribs)) {
            inheritContainer = parentAttribs;
        }
        else if (isObject(parentAttribs)) {
            inheritAttribs = parentAttribs;
        }
    }
    function _moveNext() {
        var thePrefix = STR_EMPTY$1;
        var theKey;
        var theNode;
        var theSource = 0 ;
        while (current) {
            current.i++;
            if (current.i < getLength(current.k)) {
                var key = current.k[current.i];
                var node = current.n[key];
                if (node) {
                    if (node.n) {
                        stack[_DYN_PUSH$1 ](current);
                        current = _getStackEntry(node.n, current.p + key + ".");
                        if (!current) {
                            current = stack.pop();
                        }
                    }
                    else {
                        var fullKey = current.p + key;
                        if (visitedKeys && arrIndexOf(visitedKeys, fullKey) === -1) {
                            visitedKeys[_DYN_PUSH$1 ](fullKey);
                        }
                        if (!node.d || inclDeleted) {
                            thePrefix = current.p;
                            theKey = key;
                            theNode = node;
                            theSource = node.d ? 2  : 0 ;
                            break;
                        }
                    }
                }
            }
            else {
                current = stack.pop();
            }
        }
        if (!theNode && inheritAttribs) {
            if (!inheritState) {
                inheritState = {
                    p: STR_EMPTY$1,
                    n: UNDEFINED_VALUE,
                    k: objKeys(inheritAttribs),
                    i: -1
                };
            }
            while (inheritState.i < getLength(inheritState.k) - 1) {
                inheritState.i++;
                var key = inheritState.k[inheritState.i];
                if (arrIndexOf(visitedKeys, key) === -1) {
                    visitedKeys[_DYN_PUSH$1 ](key);
                    theKey = key;
                    theNode = { v: inheritAttribs[key] };
                    theSource = 1 ;
                    break;
                }
            }
        }
        if (!theNode && inheritContainer) {
            if (!inheritContainerIter) {
                inheritContainerIter = inheritContainer[_DYN_ENTRIES ]();
            }
            iterForOf(inheritContainerIter, function (entry) {
                var key = entry[0];
                if (arrIndexOf(visitedKeys, key) === -1) {
                    visitedKeys[_DYN_PUSH$1 ](key);
                    theKey = key;
                    theNode = { v: entry[1] };
                    theSource = 1 ;
                    return -1;
                }
            });
        }
        if (theNode) {
            ctx.v = cb(thePrefix, theKey, theNode, theSource);
        }
        return !theNode;
    }
    return createIterator(ctx);
}
function _generateAttributes(container, target, otelCfg, inheritAttrib, showTree) {
    var attribs = objCreate(null);
    var deletedKeys;
    if (showTree) {
        objDefine(attribs, "#id", {
            v: container.id,
            w: false
        });
    }
    var iter = _iterator(target, function (prefix, key, node, source) {
        var name = prefix + key;
        return { n: name, v: node.v, d: node.d, s: source };
    }, otelCfg, showTree ? null : inheritAttrib, showTree ? 2  : UNDEFINED_VALUE);
    iterForOf(iter, function (entry) {
        var theNode = attribs;
        var theName = entry.n;
        if (entry.d) {
            if (!deletedKeys) {
                deletedKeys = objCreate(null);
                objDefine(attribs, _deletedKey, {
                    v: deletedKeys,
                    w: false
                });
            }
            theNode = deletedKeys;
        }
        if (theNode && !(theName in theNode)) {
            theNode[theName] = entry.v;
        }
    });
    if (inheritAttrib && showTree) {
        var inheritedKeys_1;
        if (isAttributeContainer(inheritAttrib)) {
            inheritedKeys_1 = inheritAttrib._attributes;
        }
        else {
            inheritedKeys_1 = objCreate(null);
            objForEachKey(inheritAttrib, function (key, value) {
                inheritedKeys_1[key] = value;
            });
        }
        objDefine(attribs, _inheritedKey, {
            v: inheritedKeys_1,
            w: false
        });
    }
    return attribs;
}
function _notifyListeners(listeners, changeInfo) {
    if (listeners) {
        arrForEach(listeners, function (listener) {
            safe(listener.cb, [changeInfo]);
        });
    }
}
function _getInheritedValue(key, inheritContainer, inheritAttribObj) {
    if (inheritContainer && inheritContainer.has(key)) {
        return { v: inheritContainer.get(key) };
    }
    if (inheritAttribObj && key in inheritAttribObj) {
        return { v: inheritAttribObj[key] };
    }
}
function _createUnloadHook(listeners, callback) {
    var cbInst = {
        cb: callback
    };
    listeners[_DYN_PUSH$1 ](cbInst);
    var unloadHook = {
        rm: function () {
            if (listeners && cbInst) {
                var index = arrIndexOf(listeners, cbInst);
                if (index >= 0) {
                    listeners[_DYN_SPLICE ](index, 1);
                }
                cbInst.cb = null;
                cbInst = null;
                unloadHook.rm = _noOpFunc;
            }
        }
    };
    return unloadHook;
}
function createAttributeContainer(otelCfg, name, inheritAttrib, attribLimits) {
    var traceCfg = otelCfg[_DYN_TRACE_CFG ] || {};
    var nodes = null;
    var theSize = null;
    var theDropped = null;
    var limits = traceCfg.generalLimits || {};
    var maxAttribs = limits[_DYN_ATTRIBUTE_COUNT_LIMI5 ] || 128;
    var theAttributes;
    var localAttributes;
    var droppedAttribs = 0;
    var inheritContainer = null;
    var inheritAttribObj = null;
    var listeners = null;
    var parentListenerHook = null;
    var containerName = name || STR_EMPTY$1;
    if (attribLimits) {
        maxAttribs = attribLimits[_DYN_ATTRIBUTE_COUNT_LIMI5 ] || maxAttribs;
    }
    if (isAttributeContainer(inheritAttrib)) {
        inheritContainer = inheritAttrib;
    }
    else if (isObject(inheritAttrib)) {
        inheritAttribObj = inheritAttrib;
    }
    inheritAttrib = null;
    var inheritSrc = inheritAttribObj || inheritContainer;
    var container = {
        id: (containerName || STR_EMPTY$1) + "." + (_containerId++),
        size: 0,
        droppedAttributes: 0,
        attributes: UNDEFINED_VALUE,
        clear: function () {
            if (parentListenerHook) {
                parentListenerHook.rm();
                parentListenerHook = null;
            }
            if (nodes || inheritContainer || inheritAttribObj) {
                _notifyListeners(listeners, { frm: container.id, op: 0  });
            }
            nodes = null;
            theSize = null;
            theDropped = null;
            theAttributes = null;
            localAttributes = null;
            droppedAttribs = 0;
            inheritSrc = null;
            inheritContainer = null;
            inheritAttribObj = null;
        },
        get: function (key, source) {
            return _findDetail(container, key, source, function (detail) {
                return detail ? detail.v : UNDEFINED_VALUE;
            }, nodes, inheritContainer, inheritAttribObj);
        },
        has: function (key, source) {
            return _findDetail(container, key, source, function (detail) {
                return detail ? (detail.e || source === 2 ) : false;
            }, nodes, inheritContainer, inheritAttribObj);
        },
        set: function (key, value) {
            if (!nodes) {
                nodes = objCreate(null);
            }
            var addResult = _addValue(container, nodes, key, value, maxAttribs, otelCfg);
            if (addResult.r === 0 ) {
                theSize = null;
                theAttributes = null;
                localAttributes = null;
                var op = addResult.a ? 2  : 1 ;
                var prevValue = addResult.p;
                if (op === 2 ) {
                    var inheritedValue = _getInheritedValue(key, inheritContainer, inheritAttribObj);
                    if (inheritedValue) {
                        op = 1 ;
                        prevValue = inheritedValue.v;
                    }
                }
                if (!objIs(value, prevValue)) {
                    _notifyListeners(listeners, {
                        frm: container.id,
                        op: op,
                        k: key,
                        prev: prevValue,
                        val: value
                    });
                }
            }
            else if (addResult.r === 1 ) {
                theDropped = null;
                droppedAttribs++;
                _notifyListeners(listeners, {
                    frm: container.id,
                    op: 4 ,
                    k: key,
                    val: value
                });
            }
            return addResult.r === 0 ;
        },
        del: function (key) {
            return _findDetail(container, key, UNDEFINED_VALUE, function (detail) {
                if (detail) {
                    if (!nodes) {
                        nodes = objCreate(null);
                    }
                    var deleteResult = _deleteValue(nodes, key[_DYN_SPLIT$1 ]("."));
                    if (deleteResult.d) {
                        theSize = null;
                        theAttributes = null;
                        localAttributes = null;
                    }
                    _notifyListeners(listeners, {
                        frm: container.id,
                        op: 3 ,
                        k: key,
                        prev: detail.v
                    });
                    return deleteResult.d;
                }
                return false;
            }, nodes, inheritContainer, inheritAttribObj);
        },
        keys: function () {
            return _iterator(nodes, function (prefix, key, node, source) {
                return prefix + key;
            }, otelCfg, inheritSrc);
        },
        entries: function () {
            return _iterator(nodes, function (prefix, key, node, source) {
                return [prefix + key, node.v, source];
            }, otelCfg, inheritSrc);
        },
        values: function () {
            return _iterator(nodes, function (_prefix, _key, node, _source) {
                return node.v;
            }, otelCfg, inheritSrc);
        },
        forEach: function (cb) {
            var iter = _iterator(nodes, function (prefix, key, node, source) {
                cb(prefix + key, node.v, source);
                return true;
            }, otelCfg, inheritSrc);
            iterForOf(iter, _noOpFunc);
        },
        child: function (name, snapshot) {
            var childName = (name ? name : "child") + (snapshot ? "<-@[" : "<=[") + container.id + "]";
            return snapshot ? _createSnapshotContainer(otelCfg, childName, container, attribLimits) : createAttributeContainer(otelCfg, childName, container, attribLimits);
        },
        listen: function (callback) {
            if (!listeners) {
                listeners = [];
            }
            return _createUnloadHook(listeners, callback);
        }
    };
    function _listener(changeInfo) {
        var shouldNotify = true;
        if (changeInfo.op === 2  || changeInfo.op === 1  || changeInfo.op === 3 ) {
            theSize = null;
            theAttributes = null;
            localAttributes = null;
            _findDetail(container, changeInfo.k, 2 , function (detail) {
                shouldNotify = !detail || !detail.n;
            }, nodes);
        }
        else if (changeInfo.op === 0 ) {
            theSize = null;
            theAttributes = null;
            localAttributes = null;
            shouldNotify = true;
        }
        else if (changeInfo.op === 4 ) {
            shouldNotify = true;
            theDropped = null;
        }
        if (shouldNotify) {
            _notifyListeners(listeners, changeInfo);
        }
    }
    if (inheritContainer && isFunction(inheritContainer.listen)) {
        parentListenerHook = inheritContainer.listen(_listener);
    }
    return objDefineProps(container, {
        size: {
            g: function () {
                if (!theSize) {
                    theSize = createCachedValue(_size(nodes, inheritAttribObj, inheritContainer));
                }
                return theSize.v;
            }
        },
        droppedAttributes: {
            g: function () {
                if (!theDropped) {
                    theDropped = createCachedValue((inheritContainer ? inheritContainer.droppedAttributes : 0) + droppedAttribs);
                }
                return theDropped.v;
            }
        },
        attributes: {
            g: function () {
                if (!theAttributes) {
                    theAttributes = createCachedValue(_generateAttributes(container, nodes, otelCfg, inheritSrc));
                }
                return theAttributes.v;
            }
        },
        _attributes: {
            g: function () {
                if (!localAttributes) {
                    localAttributes = createCachedValue(_generateAttributes(container, nodes, otelCfg, inheritSrc, true));
                }
                return localAttributes.v;
            }
        }
    });
}
function addAttributes(container, attributes) {
    if (isAttributeContainer(attributes)) {
        attributes.forEach(function (key, value, source) {
            container.set(key, value);
        });
    }
    else if (attributes) {
        if (isFunction(attributes[_DYN_ENTRIES ])) {
            iterForOf(attributes[_DYN_ENTRIES ](), function (entry) {
                container.set(entry[0], entry[1]);
            });
        }
        else {
            objForEachKey(attributes, function (key, value) {
                container.set(key, value);
            });
        }
    }
}
function _createSnapshotContainer(otelCfg, name, sourceContainer, attribLimits) {
    var newContainer = createAttributeContainer(otelCfg, name, sourceContainer, attribLimits);
    sourceContainer.listen(function (changeInfo) {
        if (changeInfo.op === 0 ) {
            iterForOf(sourceContainer[_DYN_ENTRIES ](), function (entry) {
                var key = entry[0];
                if (!newContainer.has(key, 2 ) && sourceContainer.has(key)) {
                    newContainer.set(key, entry[1]);
                }
            });
        }
        else if (changeInfo.op === 2 ) {
            var key = changeInfo.k;
            if (!newContainer.has(key, 0 )) {
                newContainer.del(key);
            }
        }
        else if (changeInfo.op === 1  || changeInfo.op === 3 ) {
            var key = changeInfo.k;
            if (!newContainer.has(key, 2 )) {
                newContainer.set(key, changeInfo.prev);
            }
        }
    });
    return newContainer;
}
/*#__NO_SIDE_EFFECTS__*/
function isAttributeContainer(value) {
    return value &&
        isFunction(value.clear) &&
        isFunction(value.get) &&
        isFunction(value.has) &&
        isFunction(value.set) &&
        isFunction(value.del) &&
        isFunction(value.keys) &&
        isFunction(value[_DYN_ENTRIES ]) &&
        isFunction(value.forEach) &&
        isFunction(value.values) &&
        isFunction(value.child) &&
        isFunction(value.listen) &&
        (isObject(value) || isFunction(value)) &&
        ("id" in value) &&
        ("size" in value) &&
        ("droppedAttributes" in value) &&
        ("attributes" in value);
}

/*#__NO_SIDE_EFFECTS__*/
function _isSupportedType(theType) {
    return theType === "number" || theType === "boolean" || theType === "string";
}
/*#__NO_SIDE_EFFECTS__*/
function _isHomogeneousArray(arr) {
    var type;
    var result = true;
    arrForEach(arr, function (element) {
        if (element !== null) {
            var elType = typeof element;
            if (!type) {
                result = _isSupportedType(elType);
                type = elType;
            }
            else {
                result = (type === elType);
            }
        }
        if (!result) {
            return -1;
        }
    });
    return result;
}
/*#__NO_SIDE_EFFECTS__*/
function isAttributeValue(val) {
    var result = (val === null || _isSupportedType(typeof val));
    if (val && isArray(val)) {
        result = _isHomogeneousArray(val);
    }
    return result;
}

var NANOS_IN_MILLIS = 1000000;
var NANOS_IN_SECOND = 1000000000;
var MILLIS_IN_SECOND = 1000;
var cSecondsToNanos;
var cTimeOrigin;
function _notMutable() {
    throwTypeError("HrTime is not mutable");
}
/*#__NO_SIDE_EFFECTS__*/
function _initSecondsToNanos() {
    if (!cSecondsToNanos) {
        cSecondsToNanos = createCachedValue(NANOS_IN_SECOND);
    }
    return cSecondsToNanos;
}
/*#__NO_SIDE_EFFECTS__*/
function _initTimeOrigin() {
    if (!cTimeOrigin) {
        var timeOrigin = 0;
        var perf = getPerformance();
        if (perf) {
            timeOrigin = perf.timeOrigin;
            if (!isNumber(timeOrigin)) {
                timeOrigin = perf.timing && perf.timing.fetchStart;
            }
            if (!isNumber(timeOrigin) && perf.now) {
                timeOrigin = perf.now();
            }
        }
        cTimeOrigin = createCachedValue({
            to: timeOrigin,
            hr: millisToHrTime(timeOrigin)
        });
    }
    return cTimeOrigin;
}
/*#__NO_SIDE_EFFECTS__*/
function _finalizeHrTime(hrTime) {
    function _toString() {
        return "[" + hrTime[0] + ", " + hrTime[1] + "]";
    }
    setObjStringTag(hrTime, _toString);
    return objFreeze(hrTime);
}
/*#__NO_SIDE_EFFECTS__*/
function _createUnixNanoHrTime(unixNano) {
    var hrTime = [0, 0];
    var immutable = { v: _notMutable, w: false, e: false };
    objDefineProps(hrTime, {
        0: {
            l: getDeferred(function () { return mathFloor(unixNano / NANOS_IN_SECOND); })
        },
        1: {
            l: getDeferred(function () { return unixNano % NANOS_IN_SECOND; })
        },
        push: immutable,
        pop: immutable,
        shift: immutable,
        unshift: immutable,
        splice: immutable,
        sort: immutable,
        reverse: immutable,
        fill: immutable,
        copyWithin: immutable
    });
    return _finalizeHrTime(hrTime);
}
/*#__NO_SIDE_EFFECTS__*/
function _createHrTime(seconds, nanoseconds) {
    var hrTime = [seconds, nanoseconds];
    return _finalizeHrTime(hrTime);
}
/*#__NO_SIDE_EFFECTS__*/
function zeroHrTime() {
    return _createUnixNanoHrTime(0);
}
/*#__NO_SIDE_EFFECTS__*/
function millisToHrTime(epochMillis) {
    var result;
    if (epochMillis > 0) {
        var wholeMillis = mathFloor(epochMillis);
        var fractionalMillis = epochMillis - wholeMillis;
        var seconds = mathFloor(wholeMillis / MILLIS_IN_SECOND);
        var millisFromSeconds = wholeMillis % MILLIS_IN_SECOND;
        var nanosFromWholeMillis = millisFromSeconds * NANOS_IN_MILLIS;
        var nanosFromFraction = mathRound(fractionalMillis * NANOS_IN_MILLIS);
        var totalNanos = nanosFromWholeMillis + nanosFromFraction;
        var adjustedSeconds = seconds;
        if (totalNanos >= NANOS_IN_SECOND) {
            adjustedSeconds++;
            totalNanos -= NANOS_IN_SECOND;
        }
        result = _createHrTime(adjustedSeconds, totalNanos);
    }
    return result || zeroHrTime();
}
/*#__NO_SIDE_EFFECTS__*/
function hrTime(performanceNow) {
    var result = millisToHrTime(isNumber(performanceNow) ? performanceNow : perfNow());
    var perf = getPerformance();
    if (perf) {
        var timeOrigin = cTimeOrigin || _initTimeOrigin();
        result = addHrTimes(timeOrigin.v.hr, result);
    }
    return result;
}
/*#__NO_SIDE_EFFECTS__*/
function timeInputToHrTime(time) {
    var result;
    if (!isTimeInputHrTime(time)) {
        if (isNumber(time)) {
            var timeOrigin = cTimeOrigin || _initTimeOrigin();
            result = (time < timeOrigin.v.to) ? hrTime(time) : millisToHrTime(time);
        }
        else if (isDate(time)) {
            result = millisToHrTime(time.getTime());
        }
        else {
            throwTypeError("Invalid input type");
        }
    }
    else {
        result = _createHrTime(time[0], time[1]);
    }
    return result;
}
/*#__NO_SIDE_EFFECTS__*/
function hrTimeDuration(startTime, endTime) {
    var seconds = endTime[0] - startTime[0];
    var nanos = endTime[1] - startTime[1];
    if (nanos < 0) {
        var adjustedSeconds = seconds - 1;
        var nanoSeconds = cSecondsToNanos || _initSecondsToNanos();
        nanos += nanoSeconds.v;
        return _createHrTime(adjustedSeconds, nanos);
    }
    return _createHrTime(seconds, nanos);
}
/*#__NO_SIDE_EFFECTS__*/
function hrTimeToMilliseconds(time) {
    var millisFromSeconds = time[0] * MILLIS_IN_SECOND;
    var millisFromNanos = Math.round(time[1] / NANOS_IN_MILLIS);
    return millisFromSeconds + millisFromNanos;
}
/*#__NO_SIDE_EFFECTS__*/
function isTimeInputHrTime(value) {
    return isArray(value) && value[_DYN_LENGTH$2 ] === 2 && isNumber(value[0]) && isNumber(value[1]);
}
/*#__NO_SIDE_EFFECTS__*/
function addHrTimes(time1, time2) {
    var seconds = time1[0] + time2[0];
    var nanos = time1[1] + time2[1];
    var nanoSeconds = cSecondsToNanos || _initSecondsToNanos();
    if (nanos >= nanoSeconds.v) {
        nanos -= nanoSeconds.v;
        return _createHrTime(seconds + 1, nanos);
    }
    return _createHrTime(seconds, nanos);
}

function createSpan(spanCtx, orgName, kind) {
    var otelCfg = spanCtx.api.cfg;
    var perfStartTime = perfNow();
    var spanContext = spanCtx[_DYN_SPAN_CONTEXT ];
    var attributes;
    var isEnded = false;
    var spanStartTime = getDeferred(function () {
        if (isNullOrUndefined(spanCtx[_DYN_START_TIME$1 ])) {
            return hrTime(perfStartTime);
        }
        return timeInputToHrTime(spanCtx[_DYN_START_TIME$1 ]);
    });
    var spanEndTime;
    var spanDuration;
    var spanStatus;
    var localDroppedAttributes = 0;
    var localContainer = null;
    var isRecording = spanCtx.isRecording !== false;
    if (otelCfg.traceCfg && otelCfg.traceCfg[_DYN_SUPPRESS_TRACING ]) {
        isRecording = false;
    }
    var spanName = orgName || STR_EMPTY$1;
    if (isRecording) {
        attributes = getDeferred(function () { return createAttributeContainer(otelCfg, spanName, spanCtx[_DYN_ATTRIBUTES ]); });
    }
    function _handleIsEnded(operation, extraMsg) {
        return isEnded;
    }
    function _toString() {
        return "ReadableSpan (\"" + spanName + "\")";
    }
    var theSpan = setProtoTypeName({
        spanContext: function () { return spanContext; },
        setAttribute: function (key, value) {
            var message;
            if (value !== null && !_handleIsEnded() && isRecording) {
                if (!key || key[_DYN_LENGTH$2 ] === 0) {
                    message = "Invalid attribute key: " + dumpObj(key);
                }
                else if (!isAttributeValue(value)) {
                    message = "Invalid attribute value: " + dumpObj(value);
                }
                if (message) {
                    localDroppedAttributes++;
                }
                else if (attributes) {
                    attributes.v.set(key, value);
                }
                else {
                    localDroppedAttributes++;
                }
            }
            else {
                localDroppedAttributes++;
            }
            return theSpan;
        },
        setAttributes: function (attrs) {
            if (!_handleIsEnded() && isRecording && attributes) {
                addAttributes(attributes.v, attrs);
            }
            else {
                localDroppedAttributes += (objKeys(attrs)[_DYN_LENGTH$2 ] || 0);
            }
            return theSpan;
        },
        setStatus: function (newStatus) {
            if (!_handleIsEnded()) {
                spanStatus = newStatus;
                if (!isNullOrUndefined(spanStatus) && !isNullOrUndefined(spanStatus[_DYN_MESSAGE ]) && !isString(spanStatus[_DYN_MESSAGE ])) {
                    spanStatus[_DYN_MESSAGE ] = dumpObj(spanStatus[_DYN_MESSAGE ]);
                }
            }
            return theSpan;
        },
        updateName: function (name) {
            if (!_handleIsEnded() && !objIs(spanName, name)) {
                spanName = name;
                updateProtoTypeName(theSpan, _toString());
            }
            return theSpan;
        },
        end: function (endTime) {
            var calcDuration;
            if (!_handleIsEnded()) {
                try {
                    if (!isNullOrUndefined(endTime)) {
                        spanEndTime = timeInputToHrTime(endTime);
                        spanDuration = hrTimeDuration(spanStartTime.v, spanEndTime);
                        calcDuration = hrTimeToMilliseconds(spanDuration);
                    }
                    else {
                        var perfEndTime = perfNow();
                        calcDuration = perfEndTime - perfStartTime;
                        spanDuration = millisToHrTime(calcDuration);
                        spanEndTime = hrTime(perfEndTime);
                    }
                    if (calcDuration < 0) {
                        spanDuration = zeroHrTime();
                        spanEndTime = spanStartTime.v;
                    }
                    spanCtx.onEnd && spanCtx.onEnd(theSpan);
                }
                finally {
                    isEnded = true;
                }
            }
        },
        isRecording: function () { return isRecording && !isEnded; },
        recordException: function (exception, time) {
            if (!_handleIsEnded()) {
                if (spanCtx.onException) {
                    spanCtx.onException(theSpan, exception, time);
                }
            }
        }
    }, _toString());
    objDefineProps(theSpan, {
        name: {
            g: function () { return spanName; }
        },
        kind: {
            v: kind || 0
        },
        startTime: {
            g: function () {
                return spanStartTime.v;
            }
        },
        endTime: {
            g: function () {
                return spanEndTime;
            }
        },
        status: {
            g: function () {
                return spanStatus || {
                    code: 0
                };
            }
        },
        attributes: {
            g: function () {
                return attributes ? attributes.v[_DYN_ATTRIBUTES ] : objFreeze({});
            }
        },
        attribContainer: {
            g: function () {
                if (!attributes && !localContainer) {
                    localContainer = createAttributeContainer(otelCfg, spanName);
                }
                return attributes ? attributes.v : localContainer;
            }
        },
        links: {
            g: function () {
                return [];
            }
        },
        events: {
            g: function () {
                return [];
            }
        },
        duration: {
            g: function () {
                return spanDuration || zeroHrTime();
            }
        },
        ended: {
            g: function () {
                return isEnded;
            }
        },
        droppedAttributesCount: {
            g: function () {
                return attributes ? attributes.v.droppedAttributes : localDroppedAttributes;
            }
        },
        parentSpanContext: {
            l: getDeferred(function () {
                return spanCtx ? spanCtx[_DYN_PARENT_SPAN_CONTEXT ] : UNDEFINED_VALUE;
            })
        },
        parentSpanId: {
            l: getDeferred(function () {
                var parentSpanId = UNDEFINED_VALUE;
                if (spanCtx) {
                    var parentSpanCtx = spanCtx[_DYN_PARENT_SPAN_CONTEXT ];
                    parentSpanId = parentSpanCtx ? parentSpanCtx[_DYN_SPAN_ID ] : UNDEFINED_VALUE;
                }
                return parentSpanId;
            })
        }
    });
    return theSpan;
}

/*#__NO_SIDE_EFFECTS__*/
function createTraceProvider(host, traceName, api, onEnd, onException) {
    var provider = {
        api: null,
        createSpan: function (name, options, parent) {
            var newCtx;
            var parentCtx;
            if (options && options.root) {
                newCtx = createDistributedTraceContext();
            }
            else {
                newCtx = createDistributedTraceContext(parent || host[_DYN_GET_TRACE_CTX$1 ]());
                if (newCtx.parentCtx) {
                    parentCtx = newCtx.parentCtx;
                }
            }
            newCtx[_DYN_SPAN_ID ] = strSubstr(generateW3CId(), 0, 16);
            var spanCtx = {
                api: api,
                spanContext: newCtx,
                attributes: options ? options[_DYN_ATTRIBUTES ] : undefined,
                startTime: options ? options[_DYN_START_TIME$1 ] : undefined,
                isRecording: options ? options.recording !== false : true,
                onEnd: onEnd,
                onException: onException
            };
            if (parentCtx) {
                objDefine(spanCtx, "parentSpanContext", {
                    v: parentCtx,
                    w: false
                });
            }
            return createSpan(spanCtx, name, (options === null || options === void 0 ? void 0 : options.kind) || 0 );
        },
        getProviderId: function () { return traceName; },
        isAvailable: function () { return !!onEnd; }
    };
    objDefine(provider, "api", {
        v: api,
        w: false
    });
    return provider;
}

function _executeWithActiveSpan(scope, fn, thisArg, args) {
    var isAsync = false;
    try {
        var result = fnApply(fn, thisArg || scope, args);
        if (isPromiseLike(result)) {
            isAsync = true;
            return doFinally$1(result, function () {
                if (scope) {
                    scope.restore();
                }
            });
        }
        return result;
    }
    finally {
        if (scope && !isAsync) {
            scope.restore();
        }
    }
}
function withSpan(traceHost, span, fn, thisArg) {
    var scope = traceHost[_DYN_SET_ACTIVE_SPAN ](span);
    return _executeWithActiveSpan(scope, fn, thisArg, arrSlice(arguments, 4));
}
function useSpan(traceHost, span, fn, thisArg) {
    var scope = traceHost[_DYN_SET_ACTIVE_SPAN ](span);
    return _executeWithActiveSpan(scope, fn, thisArg, [scope][_DYN_CONCAT$1 ](arrSlice(arguments, 4)));
}
function startActiveSpan(traceHost, name, optionsOrFn, maybeFnOrThis, thisArg) {
    var options = null;
    var fn;
    var that = thisArg;
    if (isFunction(optionsOrFn)) {
        fn = optionsOrFn;
    }
    else {
        options = optionsOrFn;
        fn = maybeFnOrThis;
        that = thisArg || maybeFnOrThis;
    }
    var span = traceHost.startSpan(name, options);
    var useAsync = false;
    try {
        var result = useSpan(traceHost, span, function (scope) {
            return fnApply(fn, that, [scope]);
        });
        if (isPromiseLike(result)) {
            useAsync = true;
            return doAwait$1(result, function (value) { return value; }, function (reason) {
                if (span) {
                    span.setStatus({ code: reason ? 2  : 1 , message: reason ? reason[_DYN_MESSAGE ] || reason : undefined });
                }
            }, function () {
                if (span) {
                    span.end();
                }
            });
        }
        return result;
    }
    catch (e) {
        if (span) {
            span.setStatus({ code: e ? 2  : 1 , message: e ? e[_DYN_MESSAGE ] : undefined });
        }
        throw e;
    }
    finally {
        if (!useAsync && span) {
            span.end();
        }
    }
}
/*#__NO_SIDE_EFFECTS__*/
function isSpanContextValid(spanContext) {
    return spanContext ? (isValidTraceId(spanContext[_DYN_TRACE_ID ]) && isValidSpanId(spanContext[_DYN_SPAN_ID ])) : false;
}
function wrapSpanContext(otelApi, spanContext) {
    if (!isDistributedTraceContext(spanContext)) {
        spanContext = createDistributedTraceContext(spanContext);
    }
    return createNonRecordingSpan(otelApi, "wrapped(\"" + spanContext[_DYN_SPAN_ID ] + "\")", spanContext);
}
function createNonRecordingSpan(otelApi, spanName, spanContext) {
    var spanCtx = {
        api: otelApi,
        spanContext: isDistributedTraceContext(spanContext) ? spanContext : createDistributedTraceContext(spanContext),
        isRecording: false
    };
    return createSpan(spanCtx, spanName, 0 );
}
function _getTraceCfg(context) {
    var traceCfg = null;
    if (context) {
        if (context.cfg && context[_DYN_HOST ]) {
            traceCfg = context.cfg[_DYN_TRACE_CFG ];
        }
        else if (isFunction(context[_DYN_INITIALIZE$1 ]) && context[_DYN_CONFIG$1 ]) {
            traceCfg = context[_DYN_CONFIG$1 ][_DYN_TRACE_CFG ];
        }
        else if (context[_DYN_TRACE_CFG ]) {
            traceCfg = context[_DYN_TRACE_CFG ];
        }
    }
    return traceCfg;
}
/*#__NO_SIDE_EFFECTS__*/
function suppressTracing(context) {
    var traceCfg = _getTraceCfg(context);
    if (traceCfg) {
        traceCfg[_DYN_SUPPRESS_TRACING ] = true;
    }
    return context;
}
/*#__NO_SIDE_EFFECTS__*/
function unsuppressTracing(context) {
    var traceCfg = _getTraceCfg(context);
    if (traceCfg) {
        traceCfg[_DYN_SUPPRESS_TRACING ] = false;
    }
    return context;
}
/*#__NO_SIDE_EFFECTS__*/
function isTracingSuppressed(context) {
    var result = false;
    var traceCfg = _getTraceCfg(context);
    if (traceCfg) {
        result = !!traceCfg[_DYN_SUPPRESS_TRACING ];
    }
    return result;
}

var CLIENT_DOT$1 = "client.";
var HTTP_DOT$2 = "http.";
var NET_DOT = "net.";
var PEER_DOT = "peer.";
var EXCEPTION_DOT = "exception.";
var ENDUSER_DOT = "enduser.";
var URL_DOT = "url.";
var DB_DOT = "db.";
var NETWORK_DOT = "network.";
var ATTR_ENDUSER_ID = ENDUSER_DOT + "id";
var ATTR_ENDUSER_PSEUDO_ID = ENDUSER_DOT + "pseudo_id";
var SEMATTRS_NET_PEER_IP = NET_DOT + PEER_DOT + "ip";
var SEMATTRS_NET_PEER_NAME = NET_DOT + PEER_DOT + "name";
var SEMATTRS_NET_HOST_IP = NET_DOT + "host.ip";
var SEMATTRS_PEER_SERVICE = PEER_DOT + "service";
var SEMATTRS_HTTP_USER_AGENT$1 = HTTP_DOT$2 + "user_agent";
var SEMATTRS_HTTP_METHOD$1 = HTTP_DOT$2 + "method";
var SEMATTRS_HTTP_URL$1 = HTTP_DOT$2 + "url";
var SEMATTRS_HTTP_STATUS_CODE$1 = HTTP_DOT$2 + "status_code";
var SEMATTRS_HTTP_ROUTE = HTTP_DOT$2 + "route";
var SEMATTRS_HTTP_HOST$1 = HTTP_DOT$2 + "host";
var SEMATTRS_DB_SYSTEM = DB_DOT + "system";
var SEMATTRS_DB_STATEMENT = DB_DOT + "statement";
var SEMATTRS_DB_OPERATION = DB_DOT + "operation";
var SEMATTRS_DB_NAME = DB_DOT + "name";
var SEMATTRS_RPC_SYSTEM = "rpc.system";
var SEMATTRS_RPC_GRPC_STATUS_CODE = "rpc.grpc.status_code";
var SEMATTRS_EXCEPTION_TYPE = EXCEPTION_DOT + "type";
var SEMATTRS_EXCEPTION_MESSAGE = EXCEPTION_DOT + "message";
var SEMATTRS_EXCEPTION_STACKTRACE = EXCEPTION_DOT + "stacktrace";
var SEMATTRS_HTTP_SCHEME$1 = HTTP_DOT$2 + "scheme";
var SEMATTRS_HTTP_TARGET = HTTP_DOT$2 + "target";
var SEMATTRS_HTTP_FLAVOR = HTTP_DOT$2 + "flavor";
var SEMATTRS_NET_TRANSPORT = NET_DOT + "transport";
var SEMATTRS_NET_HOST_NAME = NET_DOT + "host.name";
var SEMATTRS_NET_HOST_PORT = NET_DOT + "host.port";
var SEMATTRS_NET_PEER_PORT = NET_DOT + PEER_DOT + "port";
var SEMATTRS_HTTP_CLIENT_IP$1 = HTTP_DOT$2 + "client_ip";
var SEMATTRS_ENDUSER_ID = ENDUSER_DOT + "id";
var ATTR_CLIENT_ADDRESS$1 = CLIENT_DOT$1 + "address";
var ATTR_CLIENT_PORT = CLIENT_DOT$1 + "port";
var ATTR_SERVER_ADDRESS$1 = "server.address";
var ATTR_SERVER_PORT = "server.port";
var ATTR_URL_FULL$1 = URL_DOT + "full";
var ATTR_URL_PATH = URL_DOT + "path";
var ATTR_URL_QUERY = URL_DOT + "query";
var ATTR_URL_SCHEME$1 = URL_DOT + "scheme";
var ATTR_ERROR_TYPE = "error.type";
var ATTR_NETWORK_LOCAL_ADDRESS = NETWORK_DOT + "local.address";
var ATTR_NETWORK_LOCAL_PORT = NETWORK_DOT + "local.port";
var ATTR_NETWORK_PROTOCOL_NAME = NETWORK_DOT + "protocol.name";
var ATTR_NETWORK_PEER_ADDRESS = NETWORK_DOT + PEER_DOT + "address";
var ATTR_NETWORK_PEER_PORT = NETWORK_DOT + PEER_DOT + "port";
var ATTR_NETWORK_PROTOCOL_VERSION = NETWORK_DOT + "protocol.version";
var ATTR_NETWORK_TRANSPORT = NETWORK_DOT + "transport";
var ATTR_USER_AGENT_ORIGINAL$1 = "user_agent.original";
var ATTR_HTTP_REQUEST_METHOD$1 = HTTP_DOT$2 + "request.method";
var ATTR_HTTP_RESPONSE_STATUS_CODE$1 = HTTP_DOT$2 + "response.status_code";
var ATTR_EXCEPTION_TYPE = EXCEPTION_DOT + "type";
var ATTR_EXCEPTION_MESSAGE = EXCEPTION_DOT + "message";
var ATTR_EXCEPTION_STACKTRACE = EXCEPTION_DOT + "stacktrace";
var EXP_ATTR_ENDUSER_ID = ENDUSER_DOT + "id";
var EXP_ATTR_ENDUSER_PSEUDO_ID = ENDUSER_DOT + "pseudo_id";
var EXP_ATTR_SYNTHETIC_TYPE = "synthetic.type";

var otelErrorType;
/*#__NO_SIDE_EFFECTS__*/
function getOpenTelemetryError() {
    if (!otelErrorType) {
        otelErrorType = createCustomError("OpenTelemetryError", function (self, args) {
        });
    }
    return otelErrorType;
}
function throwOTelError(message) {
    throw new (getOpenTelemetryError())(message);
}

function _createTraceApi(otelApi) {
    var traceProvider = otelApi;
    if (!traceProvider) {
        throwOTelError("Must provide an otelApi instance");
    }
    return getDeferred(function () {
        return setProtoTypeName({
            getTracer: fnBind(traceProvider.getTracer, traceProvider),
            wrapSpanContext: fnBind(wrapSpanContext, UNDEFINED_VALUE, [otelApi]),
            isSpanContextValid: isSpanContextValid,
            getActiveSpan: function () {
                return otelApi.host ? otelApi.host[_DYN_GET_ACTIVE_SPAN ]() : null;
            },
            setActiveSpan: function (span) {
                return otelApi.host ? otelApi.host[_DYN_SET_ACTIVE_SPAN ](span) : null;
            }
        }, "TraceApi");
    });
}

function _createTracer(host, name) {
    var tracer = setProtoTypeName({
        startSpan: function (spanName, options) {
            if (host) {
                return host.startSpan(spanName, options);
            }
            return null;
        },
        startActiveSpan: function (name, fnOrOptions, fn) {
            var theFn = null;
            var opts = null;
            if (isFunction(fnOrOptions)) {
                theFn = fnOrOptions;
            }
            else {
                opts = fnOrOptions;
                theFn = fn;
            }
            if (theFn) {
                return startActiveSpan(host, name, opts, function (spanScope) {
                    return fnApply(theFn, spanScope, [spanScope.span, spanScope]);
                });
            }
        }
    }, "OTelTracer" + (name ? (" (" + name + ")") : STR_EMPTY$1));
    return tracer;
}

function _createTracerProvider(host) {
    var tracers = {};
    return {
        getTracer: function (name, version) {
            var tracerKey = (name || "ai-web") + "@" + (version || "unknown");
            if (!tracers[tracerKey]) {
                tracers[tracerKey] = _createTracer(host);
            }
            return tracers[tracerKey];
        },
        forceFlush: function () {
            return;
        },
        shutdown: function () {
            tracers = {};
            host = null;
            return;
        }
    };
}

/*#__NO_SIDE_EFFECTS__*/
function createOTelApi(otelApiCtx) {
    var _traceApi;
    var otelApi = setProtoTypeName(objDefineProps(_createTracerProvider(otelApiCtx[_DYN_HOST ]), {
        cfg: { g: function () { return otelApiCtx.host[_DYN_CONFIG$1 ]; } },
        trace: { g: function () { return _traceApi.v; } },
        host: { g: function () { return otelApiCtx[_DYN_HOST ]; } }
    }), "OTelApi");
    _traceApi = _createTraceApi(otelApi);
    return otelApi;
}

var OTelSpanKind = (/*@__PURE__*/createEnumStyle({
    INTERNAL: 0 ,
    SERVER: 1 ,
    CLIENT: 2 ,
    PRODUCER: 3 ,
    CONSUMER: 4
}));

var OTelSpanStatusCode = (/*@__PURE__*/createEnumStyle({
    UNSET: 0 ,
    OK: 1 ,
    ERROR: 2
}));

var SYNTHETIC_TYPE = "user_agent.synthetic.type";
var CLIENT_DOT = "client.";
var HTTP_DOT$1 = "http.";
var ATTR_CLIENT_ADDRESS = CLIENT_DOT + "address";
var SEMATTRS_HTTP_CLIENT_IP = HTTP_DOT$1 + "client_ip";
var ATTR_USER_AGENT_ORIGINAL = "user_agent.original";
var SEMATTRS_HTTP_USER_AGENT = HTTP_DOT$1 + "user_agent";
var ATTR_URL_FULL = "url.full";
var SEMATTRS_HTTP_URL = HTTP_DOT$1 + "url";
var ATTR_HTTP_REQUEST_METHOD = HTTP_DOT$1 + "request.method";
var SEMATTRS_HTTP_METHOD = HTTP_DOT$1 + "method";
var ATTR_HTTP_RESPONSE_STATUS_CODE = HTTP_DOT$1 + "response.status_code";
var SEMATTRS_HTTP_STATUS_CODE = HTTP_DOT$1 + "status_code";
var ATTR_URL_SCHEME = "url.scheme";
var SEMATTRS_HTTP_SCHEME = HTTP_DOT$1 + "scheme";
var ATTR_SERVER_ADDRESS = "server.address";
var SEMATTRS_HTTP_HOST = HTTP_DOT$1 + "host";
/* #__NO_SIDE_EFFECTS__ */
function getSyntheticType(container) {
    return container.get(SYNTHETIC_TYPE);
}
/* #__NO_SIDE_EFFECTS__ */
function getHttpClientIp(container) {
    if (container) {
        return container.get(ATTR_CLIENT_ADDRESS) || container.get(SEMATTRS_HTTP_CLIENT_IP);
    }
}
/* #__NO_SIDE_EFFECTS__ */
function getUserAgent(container) {
    if (container) {
        return container.get(ATTR_USER_AGENT_ORIGINAL) || container.get(SEMATTRS_HTTP_USER_AGENT);
    }
}
/* #__NO_SIDE_EFFECTS__ */
function getHttpUrl(container) {
    if (container) {
        return container.get(ATTR_URL_FULL) || container.get(SEMATTRS_HTTP_URL);
    }
}
/* #__NO_SIDE_EFFECTS__ */
function getHttpMethod(container) {
    if (container) {
        return container.get(ATTR_HTTP_REQUEST_METHOD) || container.get(SEMATTRS_HTTP_METHOD);
    }
}
/* #__NO_SIDE_EFFECTS__ */
function getHttpStatusCode(container) {
    if (container) {
        return container.get(ATTR_HTTP_RESPONSE_STATUS_CODE) || container.get(SEMATTRS_HTTP_STATUS_CODE);
    }
}
/* #__NO_SIDE_EFFECTS__ */
function getHttpScheme(container) {
    if (container) {
        return container.get(ATTR_URL_SCHEME) || container.get(SEMATTRS_HTTP_SCHEME);
    }
}
/* #__NO_SIDE_EFFECTS__ */
function getHttpHost(container) {
    if (container) {
        return container.get(ATTR_SERVER_ADDRESS) || container.get(SEMATTRS_HTTP_HOST);
    }
}

/*#__NO_SIDE_EFFECTS__*/
function dataSanitizeKeyAndAddUniqueness(logger, key, map) {
    var origLength = key[_DYN_LENGTH$2 ];
    var field = dataSanitizeKey(logger, key);
    if (field[_DYN_LENGTH$2 ] !== origLength) {
        var i = 0;
        var uniqueField = field;
        while (map[uniqueField] !== undefined) {
            i++;
            uniqueField = strSubstring(field, 0, 150  - 3) + dsPadNumber(i);
        }
        field = uniqueField;
    }
    return field;
}
/*#__NO_SIDE_EFFECTS__*/
function dataSanitizeKey(logger, name) {
    var nameTrunc;
    if (name) {
        name = strTrim(asString(name));
        if (name[_DYN_LENGTH$2 ] > 150 ) {
            nameTrunc = strSubstring(name, 0, 150 );
            _throwInternal(logger, 2 , 57 , "name is too long.  It has been truncated to " + 150  + " characters.", { name: name }, true);
        }
    }
    return nameTrunc || name;
}
/*#__NO_SIDE_EFFECTS__*/
function dataSanitizeString(logger, value, maxLength) {
    if (maxLength === void 0) { maxLength = 1024 ; }
    var valueTrunc;
    if (value) {
        maxLength = maxLength ? maxLength : 1024 ;
        value = strTrim(asString(value));
        if (value[_DYN_LENGTH$2 ] > maxLength) {
            valueTrunc = strSubstring(value, 0, maxLength);
            _throwInternal(logger, 2 , 61 , "string value is too long. It has been truncated to " + maxLength + " characters.", { value: value }, true);
        }
    }
    return valueTrunc || value;
}
/*#__NO_SIDE_EFFECTS__*/
function dataSanitizeMessage(logger, message) {
    var messageTrunc;
    if (message) {
        if (message[_DYN_LENGTH$2 ] > 32768 ) {
            messageTrunc = strSubstring(message, 0, 32768 );
            _throwInternal(logger, 2 , 56 , "message is too long, it has been truncated to " + 32768  + " characters.", { message: message }, true);
        }
    }
    return messageTrunc || message;
}
/*#__NO_SIDE_EFFECTS__*/
function dataSanitizeException(logger, exception) {
    var exceptionTrunc;
    if (exception) {
        var value = "" + exception;
        if (value[_DYN_LENGTH$2 ] > 32768 ) {
            exceptionTrunc = strSubstring(value, 0, 32768 );
            _throwInternal(logger, 2 , 52 , "exception is too long, it has been truncated to " + 32768  + " characters.", { exception: exception }, true);
        }
    }
    return exceptionTrunc || exception;
}
/*#__NO_SIDE_EFFECTS__*/
function dataSanitizeProperties(logger, properties) {
    if (properties) {
        var tempProps_1 = {};
        objForEachKey(properties, function (prop, value) {
            if (isObject(value) && hasJSON()) {
                try {
                    value = getJSON()[_DYN_STRINGIFY ](value);
                }
                catch (e) {
                    _throwInternal(logger, 2 , 49 , "custom property is not valid", { exception: e }, true);
                }
            }
            value = dataSanitizeString(logger, value, 8192 );
            prop = dataSanitizeKeyAndAddUniqueness(logger, prop, tempProps_1);
            tempProps_1[prop] = value;
        });
        properties = tempProps_1;
    }
    return properties;
}
/*#__NO_SIDE_EFFECTS__*/
function dataSanitizeMeasurements(logger, measurements) {
    if (measurements) {
        var tempMeasurements_1 = {};
        objForEachKey(measurements, function (measure, value) {
            measure = dataSanitizeKeyAndAddUniqueness(logger, measure, tempMeasurements_1);
            tempMeasurements_1[measure] = value;
        });
        measurements = tempMeasurements_1;
    }
    return measurements;
}
/*#__NO_SIDE_EFFECTS__*/
function dsPadNumber(num) {
    var s = "00" + num;
    return strSubstr(s, s[_DYN_LENGTH$2 ] - 3);
}

function dateTimeUtilsDuration(start, end) {
    var result = null;
    if (start !== 0 && end !== 0 && !isNullOrUndefined(start) && !isNullOrUndefined(end)) {
        result = end - start;
    }
    return result;
}

var StorageType = (/*@__PURE__*/createEnumStyle({
    LocalStorage: 0 ,
    SessionStorage: 1
}));
var EventPersistence = (/*@__PURE__*/createEnumStyle({
    Normal: 1 ,
    Critical: 2
}));

var _canUseLocalStorage$1 = undefined;
var _canUseSessionStorage = undefined;
var _storagePrefix = STR_EMPTY$1;
function _getVerifiedStorageObject$1(storageType) {
    try {
        if (isNullOrUndefined(getGlobal())) {
            return null;
        }
        var uid = (new Date)[_DYN_TO_STRING$1 ]();
        var storage = getInst(storageType === StorageType.LocalStorage ? "localStorage" : "sessionStorage");
        var name_1 = _storagePrefix + uid;
        storage.setItem(name_1, uid);
        var fail = storage.getItem(name_1) !== uid;
        storage[_DYN_REMOVE_ITEM ](name_1);
        if (!fail) {
            return storage;
        }
    }
    catch (exception) {
    }
    return null;
}
function _getSessionStorageObject() {
    if (utlCanUseSessionStorage()) {
        return _getVerifiedStorageObject$1(StorageType.SessionStorage);
    }
    return null;
}
function utlDisableStorage() {
    _canUseLocalStorage$1 = false;
    _canUseSessionStorage = false;
}
function utlSetStoragePrefix(storagePrefix) {
    _storagePrefix = storagePrefix || STR_EMPTY$1;
}
function utlEnableStorage() {
    _canUseLocalStorage$1 = utlCanUseLocalStorage(true);
    _canUseSessionStorage = utlCanUseSessionStorage(true);
}
function utlCanUseLocalStorage(reset) {
    if (reset || _canUseLocalStorage$1 === undefined) {
        _canUseLocalStorage$1 = !!_getVerifiedStorageObject$1(StorageType.LocalStorage);
    }
    return _canUseLocalStorage$1;
}
function utlCanUseSessionStorage(reset) {
    if (reset || _canUseSessionStorage === undefined) {
        _canUseSessionStorage = !!_getVerifiedStorageObject$1(StorageType.SessionStorage);
    }
    return _canUseSessionStorage;
}
function utlGetSessionStorage(logger, name) {
    var storage = _getSessionStorageObject();
    if (storage !== null) {
        try {
            return storage.getItem(name);
        }
        catch (e) {
            _canUseSessionStorage = false;
            _throwInternal(logger, 2 , 2 , "Browser failed read of session storage. " + getExceptionName(e), { exception: dumpObj(e) });
        }
    }
    return null;
}
function utlSetSessionStorage(logger, name, data) {
    var storage = _getSessionStorageObject();
    if (storage !== null) {
        try {
            storage.setItem(name, data);
            return true;
        }
        catch (e) {
            _canUseSessionStorage = false;
            _throwInternal(logger, 2 , 4 , "Browser failed write to session storage. " + getExceptionName(e), { exception: dumpObj(e) });
        }
    }
    return false;
}
function utlRemoveSessionStorage(logger, name) {
    var storage = _getSessionStorageObject();
    if (storage !== null) {
        try {
            storage[_DYN_REMOVE_ITEM ](name);
            return true;
        }
        catch (e) {
            _canUseSessionStorage = false;
            _throwInternal(logger, 2 , 6 , "Browser failed removal of session storage item. " + getExceptionName(e), { exception: dumpObj(e) });
        }
    }
    return false;
}

var EventDataType = "EventData";
var ExceptionDataType = "ExceptionData";
var MetricDataType = "MetricData";
var PageViewDataType = "PageviewData";
var PageViewPerformanceDataType = "PageviewPerformanceData";
var RemoteDependencyDataType = "RemoteDependencyData";
var TraceDataType = "MessageData";

/* #__NO_SIDE_EFFECTS__# */
function _AddPrefix(name) {
    return "Microsoft.ApplicationInsights.{0}." + name;
}
var EventEnvelopeType = (/*#__PURE__*/_AddPrefix("Event"));
var ExceptionEnvelopeType = (/*#__PURE__*/_AddPrefix("Exception"));
var MetricEnvelopeType = (/*#__PURE__*/_AddPrefix("Metric"));
var PageViewEnvelopeType = (/*#__PURE__*/_AddPrefix("Pageview"));
var PageViewPerformanceEnvelopeType = (/*#__PURE__*/_AddPrefix("PageviewPerformance"));
var TraceEnvelopeType = (/*#__PURE__*/_AddPrefix("Message"));

var STACKFRAME_BASE_SIZE = 58;
var IS_FRAME = /^\s{0,50}(from\s|at\s|Line\s{1,5}\d{1,10}\s{1,5}of|\w{1,50}@\w{1,80}|[^\(\s\n]+:[0-9\?]+(?::[0-9\?]+)?)/;
var FULL_STACK_FRAME_1 = /^(?:\s{0,50}at)?\s{0,50}([^\@\()\s]+)?\s{0,50}(?:\s|\@|\()\s{0,5}([^\(\s\n\]]+):([0-9\?]+):([0-9\?]+)\)?$/;
var FULL_STACK_FRAME_2 = /^(?:\s{0,50}at)?\s{0,50}([^\@\()\s]+)?\s{0,50}(?:\s|\@|\()\s{0,5}([^\(\s\n\]]+):([0-9\?]+)\)?$/;
var FULL_STACK_FRAME_3 = /^(?:\s{0,50}at)?\s{0,50}([^\@\()\s]+)?\s{0,50}(?:\s|\@|\()\s{0,5}([^\(\s\n\)\]]+)\)?$/;
var EXTRACT_FILENAME = /(?:^|\(|\s{0,10}[\w\)]+\@)?([^\(\n\s\]\)]+)(?:\:([0-9]+)(?:\:([0-9]+))?)?\)?(?:,|$)/;
var PARSE_FILENAME_LINE_COL = /([^\(\s\n]+):([0-9]+):([0-9]+)$/;
var PARSE_FILENAME_LINE_ONLY = /([^\(\s\n]+):([0-9]+)$/;
var NoMethod = "<no_method>";
var strError = "error";
var strStack = "stack";
var strStackDetails = "stackDetails";
var strErrorSrc = "errorSrc";
var strMessage = "message";
var strDescription = "description";
var _parseSequence = [
    { re: FULL_STACK_FRAME_1, len: 5, m: 1, fn: 2, ln: 3, col: 4 },
    { chk: _ignoreNative, pre: _scrubAnonymous, re: FULL_STACK_FRAME_2, len: 4, m: 1, fn: 2, ln: 3 },
    { re: FULL_STACK_FRAME_3, len: 3, m: 1, fn: 2, hdl: _handleFilename },
    { re: EXTRACT_FILENAME, len: 2, fn: 1, hdl: _handleFilename }
];
function _scrubAnonymous(frame) {
    return frame[_DYN_REPLACE ](/(\(anonymous\))/, "<anonymous>");
}
function _ignoreNative(frame) {
    return strIndexOf(frame, "[native") < 0;
}
function _stringify(value, convertToString) {
    var result = value;
    if (result && !isString(result)) {
        if (JSON && JSON[_DYN_STRINGIFY ]) {
            result = JSON[_DYN_STRINGIFY ](value);
            if (convertToString && (!result || result === "{}")) {
                if (isFunction(value[_DYN_TO_STRING$1 ])) {
                    result = value[_DYN_TO_STRING$1 ]();
                }
                else {
                    result = "" + value;
                }
            }
        }
        else {
            result = "" + value + " - (Missing JSON.stringify)";
        }
    }
    return result || "";
}
function _formatMessage(theEvent, errorType) {
    var evtMessage = theEvent;
    if (theEvent) {
        if (evtMessage && !isString(evtMessage)) {
            evtMessage = theEvent[strMessage] || theEvent[strDescription] || evtMessage;
        }
        if (evtMessage && !isString(evtMessage)) {
            evtMessage = _stringify(evtMessage, true);
        }
        if (theEvent["filename"]) {
            evtMessage = evtMessage + " @" + (theEvent["filename"] || "") + ":" + (theEvent["lineno"] || "?") + ":" + (theEvent["colno"] || "?");
        }
    }
    if (errorType && errorType !== "String" && errorType !== "Object" && errorType !== "Error" && strIndexOf(evtMessage || "", errorType) === -1) {
        evtMessage = errorType + ": " + evtMessage;
    }
    return evtMessage || "";
}
function _isExceptionDetailsInternal(value) {
    try {
        if (isObject(value)) {
            return "hasFullStack" in value && "typeName" in value;
        }
    }
    catch (e) {
    }
    return false;
}
function _isExceptionInternal(value) {
    try {
        if (isObject(value)) {
            return ("ver" in value && "exceptions" in value && "properties" in value);
        }
    }
    catch (e) {
    }
    return false;
}
function _isStackDetails(details) {
    return details && details.src && isString(details.src) && details.obj && isArray(details.obj);
}
function _convertStackObj(errorStack) {
    var src = errorStack || "";
    if (!isString(src)) {
        if (isString(src[strStack])) {
            src = src[strStack];
        }
        else {
            src = "" + src;
        }
    }
    var items = src[_DYN_SPLIT$1 ]("\n");
    return {
        src: src,
        obj: items
    };
}
function _getOperaStack(errorMessage) {
    var stack = [];
    var lines = errorMessage[_DYN_SPLIT$1 ]("\n");
    for (var lp = 0; lp < lines[_DYN_LENGTH$2 ]; lp++) {
        var entry = lines[lp];
        if (lines[lp + 1]) {
            entry += "@" + lines[lp + 1];
            lp++;
        }
        stack[_DYN_PUSH$1 ](entry);
    }
    return {
        src: errorMessage,
        obj: stack
    };
}
function _getStackFromErrorObj(errorObj) {
    var details = null;
    if (errorObj) {
        try {
            if (errorObj[strStack]) {
                details = _convertStackObj(errorObj[strStack]);
            }
            else if (errorObj[strError] && errorObj[strError][strStack]) {
                details = _convertStackObj(errorObj[strError][strStack]);
            }
            else if (errorObj["exception"] && errorObj[_DYN_EXCEPTION ][strStack]) {
                details = _convertStackObj(errorObj[_DYN_EXCEPTION ][strStack]);
            }
            else if (_isStackDetails(errorObj)) {
                details = errorObj;
            }
            else if (_isStackDetails(errorObj[strStackDetails])) {
                details = errorObj[strStackDetails];
            }
            else if (getWindow() && getWindow()["opera"] && errorObj[strMessage]) {
                details = _getOperaStack(errorObj[_DYN_MESSAGE ]);
            }
            else if (errorObj["reason"] && errorObj[_DYN_REASON ][strStack]) {
                details = _convertStackObj(errorObj[_DYN_REASON ][strStack]);
            }
            else if (isString(errorObj)) {
                details = _convertStackObj(errorObj);
            }
            else {
                var evtMessage = errorObj[strMessage] || errorObj[strDescription] || "";
                if (isString(errorObj[strErrorSrc])) {
                    if (evtMessage) {
                        evtMessage += "\n";
                    }
                    evtMessage += " from " + errorObj[strErrorSrc];
                }
                if (evtMessage) {
                    details = _convertStackObj(evtMessage);
                }
            }
        }
        catch (e) {
            details = _convertStackObj(e);
        }
    }
    return details || {
        src: "",
        obj: null
    };
}
function _formatStackTrace(stackDetails) {
    var stack = "";
    if (stackDetails) {
        if (stackDetails.obj) {
            stack = stackDetails.obj[_DYN_JOIN ]("\n");
        }
        else {
            stack = stackDetails.src || "";
        }
    }
    return stack;
}
function _parseStack(stack) {
    var parsedStack;
    var frames = stack.obj;
    if (frames && frames[_DYN_LENGTH$2 ] > 0) {
        parsedStack = [];
        var level_1 = 0;
        var foundStackStart_1 = false;
        var totalSizeInBytes_1 = 0;
        arrForEach(frames, function (frame) {
            if (foundStackStart_1 || _isStackFrame(frame)) {
                var theFrame = asString(frame);
                foundStackStart_1 = true;
                var parsedFrame = _extractStackFrame(theFrame, level_1);
                if (parsedFrame) {
                    totalSizeInBytes_1 += parsedFrame[_DYN_SIZE_IN_BYTES ];
                    parsedStack[_DYN_PUSH$1 ](parsedFrame);
                    level_1++;
                }
            }
        });
        var exceptionParsedStackThreshold = 32 * 1024;
        if (totalSizeInBytes_1 > exceptionParsedStackThreshold) {
            var left = 0;
            var right = parsedStack[_DYN_LENGTH$2 ] - 1;
            var size = 0;
            var acceptedLeft = left;
            var acceptedRight = right;
            while (left < right) {
                var lSize = parsedStack[left][_DYN_SIZE_IN_BYTES ];
                var rSize = parsedStack[right][_DYN_SIZE_IN_BYTES ];
                size += lSize + rSize;
                if (size > exceptionParsedStackThreshold) {
                    var howMany = acceptedRight - acceptedLeft + 1;
                    parsedStack[_DYN_SPLICE ](acceptedLeft, howMany);
                    break;
                }
                acceptedLeft = left;
                acceptedRight = right;
                left++;
                right--;
            }
        }
    }
    return parsedStack;
}
function _getErrorType(errorType) {
    var typeName = "";
    if (errorType) {
        typeName = errorType.typeName || errorType[_DYN_NAME ] || "";
        if (!typeName) {
            try {
                var funcNameRegex = /function (.{1,200})\(/;
                var results = (funcNameRegex).exec((errorType).constructor[_DYN_TO_STRING$1 ]());
                typeName = (results && results[_DYN_LENGTH$2 ] > 1) ? results[1] : "";
            }
            catch (e) {
            }
        }
    }
    return typeName;
}
function _formatErrorCode(errorObj) {
    if (errorObj) {
        try {
            if (!isString(errorObj)) {
                var errorType = _getErrorType(errorObj);
                var result = _stringify(errorObj, false);
                if (!result || result === "{}") {
                    if (errorObj[strError]) {
                        errorObj = errorObj[strError];
                        errorType = _getErrorType(errorObj);
                    }
                    result = _stringify(errorObj, true);
                }
                if (strIndexOf(result, errorType) !== 0 && errorType !== "String") {
                    return errorType + ":" + result;
                }
                return result;
            }
        }
        catch (e) {
        }
    }
    return "" + (errorObj || "");
}
var Exception = /** @class */ (function () {
    function Exception(logger, exception, properties, measurements, severityLevel, id) {
        this.aiDataContract = {
            ver: 1 ,
            exceptions: 1 ,
            severityLevel: 0 ,
            properties: 0 ,
            measurements: 0
        };
        var _self = this;
        _self.ver = 2;
        if (!_isExceptionInternal(exception)) {
            if (!properties) {
                properties = {};
            }
            if (id) {
                properties.id = id;
            }
            _self[_DYN_EXCEPTIONS ] = [_createExceptionDetails(logger, exception, properties)];
            _self[_DYN_PROPERTIES$1 ] = dataSanitizeProperties(logger, properties);
            _self[_DYN_MEASUREMENTS ] = dataSanitizeMeasurements(logger, measurements);
            if (severityLevel) {
                _self[_DYN_SEVERITY_LEVEL ] = severityLevel;
            }
            if (id) {
                _self.id = id;
            }
        }
        else {
            _self[_DYN_EXCEPTIONS ] = exception[_DYN_EXCEPTIONS ] || [];
            _self[_DYN_PROPERTIES$1 ] = exception[_DYN_PROPERTIES$1 ];
            _self[_DYN_MEASUREMENTS ] = exception[_DYN_MEASUREMENTS ];
            if (exception[_DYN_SEVERITY_LEVEL ]) {
                _self[_DYN_SEVERITY_LEVEL ] = exception[_DYN_SEVERITY_LEVEL ];
            }
            if (exception.id) {
                _self.id = exception.id;
                exception[_DYN_PROPERTIES$1 ].id = exception.id;
            }
            if (exception[_DYN_PROBLEM_GROUP ]) {
                _self[_DYN_PROBLEM_GROUP ] = exception[_DYN_PROBLEM_GROUP ];
            }
            if (!isNullOrUndefined(exception.isManual)) {
                _self.isManual = exception.isManual;
            }
        }
    }
    Exception.CreateAutoException = function (message, url, lineNumber, columnNumber, error, evt, stack, errorSrc) {
        var errorType = _getErrorType(error || evt || message);
        return {
            message: _formatMessage(message, errorType),
            url: url,
            lineNumber: lineNumber,
            columnNumber: columnNumber,
            error: _formatErrorCode(error || evt || message),
            evt: _formatErrorCode(evt || message),
            typeName: errorType,
            stackDetails: _getStackFromErrorObj(stack || error || evt),
            errorSrc: errorSrc
        };
    };
    Exception.CreateFromInterface = function (logger, exception, properties, measurements) {
        var exceptions = exception[_DYN_EXCEPTIONS ]
            && arrMap(exception[_DYN_EXCEPTIONS ], function (ex) { return _createExDetailsFromInterface(logger, ex); });
        var exceptionData = new Exception(logger, __assignFn(__assignFn({}, exception), { exceptions: exceptions }), properties, measurements);
        return exceptionData;
    };
    Exception.prototype.toInterface = function () {
        var _a = this, exceptions = _a.exceptions, properties = _a.properties, measurements = _a.measurements, severityLevel = _a.severityLevel, problemGroup = _a.problemGroup, id = _a.id, isManual = _a.isManual;
        var exceptionDetailsInterface = exceptions instanceof Array
            && arrMap(exceptions, function (exception) { return exception.toInterface(); })
            || undefined;
        return {
            ver: "4.0",
            exceptions: exceptionDetailsInterface,
            severityLevel: severityLevel,
            properties: properties,
            measurements: measurements,
            problemGroup: problemGroup,
            id: id,
            isManual: isManual
        };
    };
    Exception.CreateSimpleException = function (message, typeName, assembly, fileName, details, line) {
        var _a;
        return {
            exceptions: [
                (_a = {},
                    _a[_DYN_HAS_FULL_STACK ] = true,
                    _a.message = message,
                    _a.stack = details,
                    _a.typeName = typeName,
                    _a)
            ]
        };
    };
    Exception.envelopeType = ExceptionEnvelopeType;
    Exception.dataType = ExceptionDataType;
    Exception.formatError = _formatErrorCode;
    return Exception;
}());
var exDetailsAiDataContract = (/*#__PURE__*/objFreeze({
    id: 0 ,
    outerId: 0 ,
    typeName: 1 ,
    message: 1 ,
    hasFullStack: 0 ,
    stack: 0 ,
    parsedStack: 2
}));
function _toInterface() {
    var _self = this;
    var parsedStack = isArray(_self[_DYN_PARSED_STACK ])
        && arrMap(_self[_DYN_PARSED_STACK ], function (frame) { return _parsedFrameToInterface(frame); });
    var exceptionDetailsInterface = {
        id: _self.id,
        outerId: _self.outerId,
        typeName: _self[_DYN_TYPE_NAME ],
        message: _self[_DYN_MESSAGE ],
        hasFullStack: _self[_DYN_HAS_FULL_STACK ],
        stack: _self[strStack],
        parsedStack: parsedStack || undefined
    };
    return exceptionDetailsInterface;
}
function _createExceptionDetails(logger, exception, properties) {
    var _a;
    var id;
    var outerId;
    var typeName;
    var message;
    var hasFullStack;
    var theStack;
    var parsedStack;
    if (!_isExceptionDetailsInternal(exception)) {
        var error = exception;
        var evt = error && error.evt;
        if (!isError(error)) {
            error = error[strError] || evt || error;
        }
        typeName = dataSanitizeString(logger, _getErrorType(error)) || strNotSpecified;
        message = dataSanitizeMessage(logger, _formatMessage(exception || error, typeName)) || strNotSpecified;
        var stack = exception[strStackDetails] || _getStackFromErrorObj(exception);
        parsedStack = _parseStack(stack);
        if (isArray(parsedStack)) {
            arrMap(parsedStack, function (frame) {
                frame[_DYN_ASSEMBLY ] = dataSanitizeString(logger, frame[_DYN_ASSEMBLY ]);
                frame[_DYN_FILE_NAME ] = dataSanitizeString(logger, frame[_DYN_FILE_NAME ]);
            });
        }
        theStack = dataSanitizeException(logger, _formatStackTrace(stack));
        hasFullStack = isArray(parsedStack) && parsedStack[_DYN_LENGTH$2 ] > 0;
        if (properties) {
            properties[_DYN_TYPE_NAME ] = properties[_DYN_TYPE_NAME ] || typeName;
        }
    }
    else {
        typeName = exception[_DYN_TYPE_NAME ];
        message = exception[_DYN_MESSAGE ];
        theStack = exception[strStack];
        parsedStack = exception[_DYN_PARSED_STACK ] || [];
        hasFullStack = exception[_DYN_HAS_FULL_STACK ];
    }
    return _a = {},
        _a[_DYN_AI_DATA_CONTRACT ] = exDetailsAiDataContract,
        _a.id = id,
        _a.outerId = outerId,
        _a.typeName = typeName,
        _a.message = message,
        _a[_DYN_HAS_FULL_STACK ] = hasFullStack,
        _a.stack = theStack,
        _a.parsedStack = parsedStack,
        _a.toInterface = _toInterface,
        _a;
}
function _createExDetailsFromInterface(logger, exception) {
    var parsedStack = (isArray(exception[_DYN_PARSED_STACK ])
        && arrMap(exception[_DYN_PARSED_STACK ], function (frame) { return _stackFrameFromInterface(frame); }))
        || exception[_DYN_PARSED_STACK ];
    var exceptionDetails = _createExceptionDetails(logger, __assignFn(__assignFn({}, exception), { parsedStack: parsedStack }));
    return exceptionDetails;
}
function _parseFilename(theFrame, fileName) {
    var lineCol = fileName[_DYN_MATCH ](PARSE_FILENAME_LINE_COL);
    if (lineCol && lineCol[_DYN_LENGTH$2 ] >= 4) {
        theFrame[_DYN_FILE_NAME ] = lineCol[1];
        theFrame[_DYN_LINE ] = parseInt(lineCol[2]);
    }
    else {
        var lineNo = fileName[_DYN_MATCH ](PARSE_FILENAME_LINE_ONLY);
        if (lineNo && lineNo[_DYN_LENGTH$2 ] >= 3) {
            theFrame[_DYN_FILE_NAME ] = lineNo[1];
            theFrame[_DYN_LINE ] = parseInt(lineNo[2]);
        }
        else {
            theFrame[_DYN_FILE_NAME ] = fileName;
        }
    }
}
function _handleFilename(theFrame, sequence, matches) {
    var filename = theFrame[_DYN_FILE_NAME ];
    if (sequence.fn && matches && matches[_DYN_LENGTH$2 ] > sequence.fn) {
        if (sequence.ln && matches[_DYN_LENGTH$2 ] > sequence.ln) {
            filename = strTrim(matches[sequence.fn] || "");
            theFrame[_DYN_LINE ] = parseInt(strTrim(matches[sequence.ln] || "")) || 0;
        }
        else {
            filename = strTrim(matches[sequence.fn] || "");
        }
    }
    if (filename) {
        _parseFilename(theFrame, filename);
    }
}
function _isStackFrame(frame) {
    var result = false;
    if (frame && isString(frame)) {
        var trimmedFrame = strTrim(frame);
        if (trimmedFrame) {
            result = IS_FRAME.test(trimmedFrame);
        }
    }
    return result;
}
var stackFrameAiDataContract = (/*#__PURE__*/objFreeze({
    level: 1 ,
    method: 1 ,
    assembly: 0 ,
    fileName: 0 ,
    line: 0
}));
function _extractStackFrame(frame, level) {
    var _a;
    var theFrame;
    if (frame && isString(frame) && strTrim(frame)) {
        theFrame = (_a = {},
            _a[_DYN_AI_DATA_CONTRACT ] = stackFrameAiDataContract,
            _a.level = level,
            _a.assembly = strTrim(frame),
            _a.method = NoMethod,
            _a.fileName = "",
            _a.line = 0,
            _a.sizeInBytes = 0,
            _a);
        var idx = 0;
        while (idx < _parseSequence[_DYN_LENGTH$2 ]) {
            var sequence = _parseSequence[idx];
            if (sequence.chk && !sequence.chk(frame)) {
                break;
            }
            if (sequence.pre) {
                frame = sequence.pre(frame);
            }
            var matches = frame[_DYN_MATCH ](sequence.re);
            if (matches && matches[_DYN_LENGTH$2 ] >= sequence.len) {
                if (sequence.m) {
                    theFrame.method = strTrim(matches[sequence.m] || NoMethod);
                }
                if (sequence.hdl) {
                    sequence.hdl(theFrame, sequence, matches);
                }
                else if (sequence.fn) {
                    if (sequence.ln) {
                        theFrame[_DYN_FILE_NAME ] = strTrim(matches[sequence.fn] || "");
                        theFrame[_DYN_LINE ] = parseInt(strTrim(matches[sequence.ln] || "")) || 0;
                    }
                    else {
                        _parseFilename(theFrame, matches[sequence.fn] || "");
                    }
                }
                break;
            }
            idx++;
        }
    }
    return _populateFrameSizeInBytes(theFrame);
}
function _stackFrameFromInterface(frame) {
    var _a;
    var parsedFrame = (_a = {},
        _a[_DYN_AI_DATA_CONTRACT ] = stackFrameAiDataContract,
        _a.level = frame.level,
        _a.method = frame.method,
        _a.assembly = frame[_DYN_ASSEMBLY ],
        _a.fileName = frame[_DYN_FILE_NAME ],
        _a.line = frame[_DYN_LINE ],
        _a.sizeInBytes = 0,
        _a);
    return _populateFrameSizeInBytes(parsedFrame);
}
function _populateFrameSizeInBytes(frame) {
    var sizeInBytes = STACKFRAME_BASE_SIZE;
    if (frame) {
        sizeInBytes += frame.method[_DYN_LENGTH$2 ];
        sizeInBytes += frame.assembly[_DYN_LENGTH$2 ];
        sizeInBytes += frame.fileName[_DYN_LENGTH$2 ];
        sizeInBytes += frame.level.toString()[_DYN_LENGTH$2 ];
        sizeInBytes += frame.line.toString()[_DYN_LENGTH$2 ];
        frame[_DYN_SIZE_IN_BYTES ] = sizeInBytes;
    }
    return frame;
}
function _parsedFrameToInterface(frame) {
    return {
        level: frame.level,
        method: frame.method,
        assembly: frame[_DYN_ASSEMBLY ],
        fileName: frame[_DYN_FILE_NAME ],
        line: frame[_DYN_LINE ]
    };
}

function createTelemetryItem(item, baseType, envelopeName, logger, customProperties, systemProperties) {
    envelopeName = dataSanitizeString(logger, envelopeName) || strNotSpecified;
    if (isNullOrUndefined(item) ||
        isNullOrUndefined(baseType) ||
        isNullOrUndefined(envelopeName)) {
        throwError("Input doesn't contain all required fields");
    }
    var iKey = "";
    if (item[strIkey]) {
        iKey = item[strIkey];
        delete item[strIkey];
    }
    var telemetryItem = {
        name: envelopeName,
        time: toISOString(new Date()),
        iKey: iKey,
        ext: systemProperties ? systemProperties : {},
        tags: [],
        data: {},
        baseType: baseType,
        baseData: item
    };
    if (!isNullOrUndefined(customProperties)) {
        objForEachKey(customProperties, function (prop, value) {
            telemetryItem[_DYN_DATA ][prop] = value;
        });
    }
    return telemetryItem;
}

function createDomEvent(eventName) {
    var event = null;
    if (isFunction(Event)) {
        event = new Event(eventName);
    }
    else {
        var doc = getDocument();
        if (doc && doc[_DYN_CREATE_EVENT ]) {
            event = doc[_DYN_CREATE_EVENT ]("Event");
            event.initEvent(eventName, true, true);
        }
    }
    return event;
}

var ValueKind = (/*@__PURE__*/createEnumStyle({
    NotSet: 0 ,
    Pii_DistinguishedName: 1 ,
    Pii_GenericData: 2 ,
    Pii_IPV4Address: 3 ,
    Pii_IPv6Address: 4 ,
    Pii_MailSubject: 5 ,
    Pii_PhoneNumber: 6 ,
    Pii_QueryString: 7 ,
    Pii_SipAddress: 8 ,
    Pii_SmtpAddress: 9 ,
    Pii_Identity: 10 ,
    Pii_Uri: 11 ,
    Pii_Fqdn: 12 ,
    Pii_IPV4AddressLegacy: 13 ,
    Pii_IPv6ScrubLastHextets: 14 ,
    Pii_DropValue: 15 ,
    CustomerContent_GenericContent: 32
}));
var EventLatency = (/*@__PURE__*/createEnumStyle({
    Normal: 1 ,
    CostDeferred: 2 ,
    RealTime: 3 ,
    Immediate: 4
}));
var TraceLevel = (/*@__PURE__*/createEnumStyle({
    NONE: 0 ,
    ERROR: 1 ,
    WARNING: 2 ,
    INFORMATION: 3
}));

var _a$3;
var ExtVersion = '4.4.2';
var ExtFullVersionString = "1DS-Web-JS-" + ExtVersion;
var FullVersionString = ExtFullVersionString;
var ObjHasOwnProperty = Object.prototype[_DYN_HAS_OWN_PROPERTY ];
var _fieldTypeEventPropMap = (_a$3 = {},
    _a$3[0 ] = 0 ,
    _a$3[2 ] = 6 ,
    _a$3[1 ] = 1 ,
    _a$3[3 ] = 7 ,
    _a$3[4096  | 2 ] = 6 ,
    _a$3[4096  | 1 ] = 1 ,
    _a$3[4096  | 3 ] = 7 ,
    _a$3);
var isDocumentObjectAvailable = (/*#__PURE__*/hasDocument());
var isWindowObjectAvailable = (/*#__PURE__*/hasWindow());
function isValueAssigned(value) {
    return !(value === STR_EMPTY$1 || isNullOrUndefined(value));
}
function getTenantId(apiKey) {
    if (apiKey) {
        var indexTenantId = strIndexOf(apiKey, "-");
        if (indexTenantId > -1) {
            return strLeft(apiKey, indexTenantId);
        }
    }
    return STR_EMPTY$1;
}
function isLatency(value) {
    if (value && isNumber(value) && value >= 1  && value <= 4 ) {
        return true;
    }
    return false;
}
function sanitizeProperty(name, property, stringifyObjects) {
    if ((!property && !isValueAssigned(property)) || typeof name !== "string") {
        return null;
    }
    var propType = typeof property;
    if (propType === "string" || propType === "number" || propType === "boolean" || isArray(property)) {
        property = { value: property };
    }
    else if (propType === "object" && !ObjHasOwnProperty[_DYN_CALL ](property, "value")) {
        property = { value: stringifyObjects ? JSON[_DYN_STRINGIFY ](property) : property };
    }
    else if (isNullOrUndefined(property[_DYN_VALUE ])
        || property[_DYN_VALUE ] === STR_EMPTY$1 || (!isString(property[_DYN_VALUE ])
        && !isNumber(property[_DYN_VALUE ]) && !isBoolean(property[_DYN_VALUE ])
        && !isArray(property[_DYN_VALUE ]))) {
        return null;
    }
    if (isArray(property[_DYN_VALUE ]) &&
        !isArrayValid(property[_DYN_VALUE ])) {
        return null;
    }
    if (!isNullOrUndefined(property[_DYN_KIND ])) {
        if (isArray(property[_DYN_VALUE ]) || !isValueKind(property[_DYN_KIND ])) {
            return null;
        }
        property[_DYN_VALUE ] = property[_DYN_VALUE ][_DYN_TO_STRING$1 ]();
    }
    return property;
}
function getCommonSchemaMetaData(value, kind, type) {
    var encodedTypeValue = -1;
    if (!isUndefined(value)) {
        if (kind > 0) {
            if (kind === 32 ) {
                encodedTypeValue = (1 << 13);
            }
            else if (kind <= 13) {
                encodedTypeValue = (kind << 5);
            }
        }
        if (isDataType(type)) {
            if (encodedTypeValue === -1) {
                encodedTypeValue = 0;
            }
            encodedTypeValue |= type;
        }
        else {
            var propType = _fieldTypeEventPropMap[getFieldValueType(value)] || -1;
            if (encodedTypeValue !== -1 && propType !== -1) {
                encodedTypeValue |= propType;
            }
            else if (propType === 6 ) {
                encodedTypeValue = propType;
            }
        }
    }
    return encodedTypeValue;
}
function getCookieValue(cookieMgr, name, decode) {
    if (decode === void 0) { decode = true; }
    var cookieValue;
    if (cookieMgr) {
        cookieValue = cookieMgr.get(name);
        if (decode && cookieValue && decodeURIComponent) {
            cookieValue = decodeURIComponent(cookieValue);
        }
    }
    return cookieValue || STR_EMPTY$1;
}
function createGuid(style) {
    if (style === void 0) { style = "D" ; }
    var theGuid = newGuid();
    if (style === "B" ) {
        theGuid = "{" + theGuid + "}";
    }
    else if (style === "P" ) {
        theGuid = "(" + theGuid + ")";
    }
    else if (style === "N" ) {
        theGuid = theGuid[_DYN_REPLACE ](/-/g, STR_EMPTY$1);
    }
    return theGuid;
}
function extend(obj, obj2, obj3, obj4, obj5) {
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments[_DYN_LENGTH$2 ];
    var theArgs = arguments;
    if (isBoolean(theArgs[0])) {
        deep = theArgs[0];
        i++;
    }
    for (; i < length; i++) {
        var obj = theArgs[i];
        objForEachKey(obj, function (prop, value) {
            if (isUnsafePropKey(prop)) {
                return;
            }
            if (deep && value && isObject(value)) {
                if (isArray(value)) {
                    extended[prop] = extended[prop] || [];
                    arrForEach(value, function (arrayValue, arrayIndex) {
                        if (arrayValue && isObject(arrayValue)) {
                            extended[prop][arrayIndex] = extend(true, extended[prop][arrayIndex], arrayValue);
                        }
                        else {
                            extended[prop][arrayIndex] = arrayValue;
                        }
                    });
                }
                else {
                    extended[prop] = extend(true, extended[prop], value);
                }
            }
            else {
                extended[prop] = value;
            }
        });
    }
    return extended;
}
var getTime = perfNow;
function isValueKind(value) {
    if (value === 0  || ((value > 0  && value <= 13 ) || value === 32 )) {
        return true;
    }
    return false;
}
function isDataType(value) {
    if (value >= 0 && value <= 9) {
        return true;
    }
    return false;
}
function isArrayValid(value) {
    return value[_DYN_LENGTH$2 ] > 0;
}
function setProcessTelemetryTimings(event, identifier) {
    var evt = event;
    evt[_DYN_TIMINGS$1 ] = evt[_DYN_TIMINGS$1 ] || {};
    evt[_DYN_TIMINGS$1 ][_DYN_PROCESS_TELEMETRY_ST6 ] = evt[_DYN_TIMINGS$1 ][_DYN_PROCESS_TELEMETRY_ST6 ] || {};
    evt[_DYN_TIMINGS$1 ][_DYN_PROCESS_TELEMETRY_ST6 ][identifier] = getTime();
}
function getFieldValueType(value) {
    var theType = 0 ;
    if (value !== null && value !== undefined) {
        var objType = typeof value;
        if (objType === "string") {
            theType = 1 ;
        }
        else if (objType === "number") {
            theType = 2 ;
        }
        else if (objType === "boolean") {
            theType = 3 ;
        }
        else if (objType === "object") {
            theType = 4 ;
            if (isArray(value)) {
                theType = 4096 ;
                if (value[_DYN_LENGTH$2 ] > 0) {
                    theType |= getFieldValueType(value[0]);
                }
            }
            else if (ObjHasOwnProperty[_DYN_CALL ](value, "value")) {
                theType = 8192  | getFieldValueType(value[_DYN_VALUE ]);
            }
        }
    }
    return theType;
}
function isChromium() {
    return !!getInst("chrome");
}
function isGreaterThanZero(value) {
    return value > 0;
}

var defaultConfig$2 = (/*#__PURE__*/objDeepFreeze({
    endpointUrl: STR_DEFAULT_ENDPOINT_URL,
    propertyStorageOverride: { isVal: _chkPropOverride }
}));
/*#__NO_SIDE_EFFECTS__*/
function _chkPropOverride(propertyStorageOverride) {
    if (propertyStorageOverride && (!propertyStorageOverride.getProperty || !propertyStorageOverride.setProperty)) {
        throwError("Invalid property storage override passed.");
    }
    return true;
}
var AppInsightsExtCore = /** @class */ (function (_super) {
    __extendsFn(AppInsightsExtCore, _super);
    function AppInsightsExtCore() {
        var _this = _super.call(this) || this;
        dynamicProto(AppInsightsExtCore, _this, function (_self, _base) {
            _self[_DYN_INITIALIZE$1 ] = function (config, extensions, logger, notificationManager) {
                doPerf(_self, function () { return "AppInsightsCore.initialize"; }, function () {
                    try {
                        _base.initialize(createDynamicConfig(config, defaultConfig$2, logger || _self[_DYN_LOGGER ], false).cfg, extensions, logger, notificationManager);
                    }
                    catch (e) {
                        var logger_1 = _self[_DYN_LOGGER ];
                        var message = dumpObj(e);
                        if (message[_DYN_INDEX_OF ]("channels") !== -1) {
                            message += "\n - Channels must be provided through config.channels only!";
                        }
                        _throwInternal(logger_1, 1 , 514 , "SDK Initialization Failed - no telemetry will be sent: " + message);
                    }
                }, function () { return ({ config: config, extensions: extensions, logger: logger, notificationManager: notificationManager }); });
            };
            _self[_DYN_TRACK$1 ] = function (item) {
                doPerf(_self, function () { return "AppInsightsCore.track"; }, function () {
                    var telemetryItem = item;
                    if (telemetryItem) {
                        telemetryItem[_DYN_TIMINGS$1 ] = telemetryItem[_DYN_TIMINGS$1 ] || {};
                        telemetryItem[_DYN_TIMINGS$1 ].trackStart = getTime();
                        if (!isLatency(telemetryItem.latency)) {
                            telemetryItem.latency = 1 ;
                        }
                        var itemExt = telemetryItem.ext = telemetryItem.ext || {};
                        itemExt.sdk = itemExt.sdk || {};
                        itemExt.sdk.ver = ExtFullVersionString;
                        var baseData = telemetryItem[_DYN_BASE_DATA ] = telemetryItem[_DYN_BASE_DATA ] || {};
                        baseData[_DYN_PROPERTIES$1 ] = baseData[_DYN_PROPERTIES$1 ] || {};
                        var itemProperties = baseData[_DYN_PROPERTIES$1 ];
                        itemProperties[STR_VERSION] = itemProperties[STR_VERSION] || _self.pluginVersionString || STR_EMPTY$1;
                    }
                    _base[_DYN_TRACK$1 ](telemetryItem);
                }, function () { return ({ item: item }); }, !(item.sync));
            };
            _self[_DYN_POLL_INTERNAL_LOGS ] = function (eventName) {
                return _base[_DYN_POLL_INTERNAL_LOGS ](eventName || "InternalLog");
            };
        });
        return _this;
    }
    AppInsightsExtCore.__ieDyn=1;
    return AppInsightsExtCore;
}(AppInsightsCore));

var AzNamespace = "az.namespace";
var AzResourceNamespace = "azure.resource_provider.namespace";
var PORT_REGEX = (/*#__PURE__*/getLazy(function () { return new RegExp(/(https?)(:\/\/.*)(:\d+)(\S*)/); }));
var HTTP_DOT = "http.";
var _MS_PROCESSED_BY_METRICS_EXTRACTORS = "_MS.ProcessedByMetricExtractors";
var _ignoreSemanticValues = (/*#__PURE__*/getLazy(_initIgnoreSemanticValues));
/* #__NO_SIDE_EFFECTS__ */
function _initIgnoreSemanticValues() {
    return [
        _MS_PROCESSED_BY_METRICS_EXTRACTORS,
        SEMATTRS_NET_PEER_IP,
        SEMATTRS_NET_PEER_NAME,
        SEMATTRS_NET_HOST_IP,
        SEMATTRS_PEER_SERVICE,
        SEMATTRS_HTTP_USER_AGENT$1,
        SEMATTRS_HTTP_METHOD$1,
        SEMATTRS_HTTP_URL$1,
        SEMATTRS_HTTP_STATUS_CODE$1,
        SEMATTRS_HTTP_ROUTE,
        SEMATTRS_HTTP_HOST$1,
        SEMATTRS_DB_SYSTEM,
        SEMATTRS_DB_STATEMENT,
        SEMATTRS_DB_OPERATION,
        SEMATTRS_DB_NAME,
        SEMATTRS_RPC_SYSTEM,
        SEMATTRS_RPC_GRPC_STATUS_CODE,
        SEMATTRS_EXCEPTION_TYPE,
        SEMATTRS_EXCEPTION_MESSAGE,
        SEMATTRS_EXCEPTION_STACKTRACE,
        SEMATTRS_HTTP_SCHEME$1,
        SEMATTRS_HTTP_TARGET,
        SEMATTRS_HTTP_FLAVOR,
        SEMATTRS_NET_TRANSPORT,
        SEMATTRS_NET_HOST_NAME,
        SEMATTRS_NET_HOST_PORT,
        SEMATTRS_NET_PEER_PORT,
        SEMATTRS_HTTP_CLIENT_IP$1,
        SEMATTRS_ENDUSER_ID,
        HTTP_DOT + "status_text",
        ATTR_CLIENT_ADDRESS$1,
        ATTR_CLIENT_PORT,
        ATTR_SERVER_ADDRESS$1,
        ATTR_SERVER_PORT,
        ATTR_URL_FULL$1,
        ATTR_URL_PATH,
        ATTR_URL_QUERY,
        ATTR_URL_SCHEME$1,
        ATTR_ERROR_TYPE,
        ATTR_NETWORK_LOCAL_ADDRESS,
        ATTR_NETWORK_LOCAL_PORT,
        ATTR_NETWORK_PROTOCOL_NAME,
        ATTR_NETWORK_PEER_ADDRESS,
        ATTR_NETWORK_PEER_PORT,
        ATTR_NETWORK_PROTOCOL_VERSION,
        ATTR_NETWORK_TRANSPORT,
        ATTR_USER_AGENT_ORIGINAL$1,
        ATTR_HTTP_REQUEST_METHOD$1,
        ATTR_HTTP_RESPONSE_STATUS_CODE$1,
        ATTR_EXCEPTION_TYPE,
        ATTR_EXCEPTION_MESSAGE,
        ATTR_EXCEPTION_STACKTRACE,
        EXP_ATTR_ENDUSER_ID,
        EXP_ATTR_ENDUSER_PSEUDO_ID,
        EXP_ATTR_SYNTHETIC_TYPE,
        AzNamespace,
        AzResourceNamespace,
        "az.client_request_id",
        "azure.client.id",
        "az.service_request_id",
        "azure.service.request.id"
    ];
}
function _applyExtValue(ext, extName, name, value, overwriteExt) {
    if (isString(value) || isNumber(value) || isBoolean(value)) {
        var target = ext[extName] = ext[extName] || {};
        _applyValue$1(target, name, value, overwriteExt);
    }
}
function _applyValue$1(target, name, value, overwriteTarget) {
    if (target) {
        if (isString(value) || isNumber(value) || isBoolean(value)) {
            var targetValue = target[name];
            if (!overwriteTarget && (targetValue || isString(targetValue) || isNumber(targetValue) || isBoolean(targetValue))) {
                value = targetValue;
            }
            target[name] = value;
        }
    }
    return target;
}
function _populateExtensionsFromSpan(telemetryItem, span, container) {
    var ext = telemetryItem.ext = telemetryItem.ext || {};
    var endUserId = container.get(ATTR_ENDUSER_ID);
    if (endUserId) {
        _applyExtValue(ext, "user", "authId", asString(endUserId), false);
    }
    var endUserPseudoId = container.get(ATTR_ENDUSER_PSEUDO_ID);
    if (endUserPseudoId) {
        _applyExtValue(ext, "user", "id", asString(endUserPseudoId), false);
    }
}
function _isIgnorePartCKey(key) {
    var result = false;
    if (arrIncludes(_ignoreSemanticValues.v, key)) {
        result = true;
    }
    else if (strStartsWith(key, "microsoft.")) {
        result = true;
    }
    return result;
}
function _populatePartC(item, container) {
    if (container) {
        var partC_1 = item[_DYN_DATA ] = (item[_DYN_DATA ] || {});
        _applyValue$1(partC_1, "httpHost", getHttpHost(container), false);
        _applyValue$1(partC_1, "httpScheme", getHttpScheme(container), false);
        _applyValue$1(partC_1, "httpClientIp", getHttpClientIp(container), false);
        _applyValue$1(partC_1, "httpUserAgent", getUserAgent(container), false);
        _applyValue$1(partC_1, "httpRoute", container.get(SEMATTRS_HTTP_ROUTE), false);
        _applyValue$1(partC_1, "netPeerName", container.get(SEMATTRS_NET_PEER_NAME), false);
        _applyValue$1(partC_1, "netPeerPort", container.get(SEMATTRS_NET_PEER_PORT), false);
        _applyValue$1(partC_1, "netPeerIp", container.get(SEMATTRS_NET_PEER_IP), false);
        _applyValue$1(partC_1, "peerService", container.get("service.name") || container.get(SEMATTRS_PEER_SERVICE), false);
        var syntheticSource = getSyntheticType(container);
        if (!!syntheticSource) {
            _applyValue$1(partC_1, "userAgentSyntheticType", syntheticSource, false);
        }
        var nav = getNavigator();
        if (nav && nav[_DYN_USER_AGENT ]) {
            _applyValue$1(partC_1, "userAgentOriginal", nav[_DYN_USER_AGENT ], false);
        }
        _applyValue$1(partC_1, "azureClientRequestId", container.get("azure.client.id") || container.get("az.client_request_id"), false);
        _applyValue$1(partC_1, "azureServiceRequestId", container.get("azure.service.request.id") || container.get("az.service_request_id"), false);
        var sampleRate = container.get("microsoft.sample_rate");
        if (!isNullOrUndefined(sampleRate)) {
            _applyValue$1(partC_1, "sampleRate", sampleRate, false);
        }
        container.forEach(function (key, value) {
            if (!_isIgnorePartCKey(key)) {
                partC_1[key] = value;
            }
        });
    }
}
function _populateHttpProperties(otelSpanTelemetry, container, httpMethod, config) {
    if (httpMethod) {
        _applyValue$1(otelSpanTelemetry, "httpMethod", httpMethod, false);
        var httpUrl = getHttpUrl(container);
        if (httpUrl) {
            try {
                var res = PORT_REGEX.v.exec(asString(httpUrl));
                if (res !== null) {
                    var protocol = res[1];
                    var port = res[3];
                    if ((protocol === "https" && port === ":443") ||
                        (protocol === "http" && port === ":80")) {
                        httpUrl = res[1] + res[2] + res[4];
                    }
                }
            }
            catch (_a) {
            }
            _applyValue$1(otelSpanTelemetry, "httpUrl", fieldRedaction(asString(httpUrl), config), false);
        }
        var httpStatusCode = getHttpStatusCode(container);
        if (httpStatusCode) {
            _applyValue$1(otelSpanTelemetry, "httpStatusCode", httpStatusCode, false);
        }
    }
}
function _populateDbProperties(otelSpanTelemetry, container, dbSystem) {
    if (dbSystem) {
        _applyValue$1(otelSpanTelemetry, "dbSystem", dbSystem, false);
        _applyValue$1(otelSpanTelemetry, "dbStatement", container.get(SEMATTRS_DB_STATEMENT) || container.get(SEMATTRS_DB_OPERATION), false);
        _applyValue$1(otelSpanTelemetry, "dbName", container.get(SEMATTRS_DB_NAME) || dbSystem || "<undefined>", false);
    }
}
function _populateRpcDependencyProperties(otelSpanTelemetry, container, rpcSystem) {
    if (rpcSystem) {
        _applyValue$1(otelSpanTelemetry, "rpcSystem", strLower(rpcSystem), false);
        _applyValue$1(otelSpanTelemetry, "rpcGrpcStatusCode", container.get(SEMATTRS_RPC_GRPC_STATUS_CODE), false);
    }
}
function _createOTelSpanTelemetryItem(core, span) {
    var container = span.attribContainer || createAttributeContainer(span[_DYN_ATTRIBUTES ]);
    var spanCtx = span[_DYN_SPAN_CONTEXT ]();
    var statusCode = span[_DYN_STATUS ] ? span[_DYN_STATUS ].code : 0 ;
    var spanTelemetry = {
        name: span[_DYN_NAME ],
        kind: span[_DYN_KIND ],
        startTime: toISOString(new Date(hrTimeToMilliseconds(span[_DYN_START_TIME$1 ]))),
        success: statusCode !== 0  ? statusCode !== 2  : (Number(getHttpStatusCode(container)) || 0) < 400,
        duration: hrTimeToMilliseconds(span[_DYN_DURATION$1 ])
    };
    var parentCtx = span[_DYN_PARENT_SPAN_CONTEXT ] || (spanCtx ? spanCtx.parentCtx : null);
    _applyValue$1(spanTelemetry, "parentId", span.parentSpanId || (parentCtx ? parentCtx[_DYN_SPAN_ID ] : null), false);
    if (spanCtx) {
        var traceState = spanCtx[_DYN_TRACE_STATE ];
        if (traceState && !traceState.isEmpty) {
            _applyValue$1(spanTelemetry, "traceState", traceState.hdrs(1)[0], false);
        }
    }
    _populateHttpProperties(spanTelemetry, container, getHttpMethod(container), core[_DYN_CONFIG$1 ]);
    _populateDbProperties(spanTelemetry, container, container.get(SEMATTRS_DB_SYSTEM));
    _populateRpcDependencyProperties(spanTelemetry, container, container.get(SEMATTRS_RPC_SYSTEM));
    _applyValue$1(spanTelemetry, "azureResourceProvider", container.get(AzResourceNamespace) || container.get(AzNamespace), false);
    return _createTelemetryItem(spanTelemetry, span, "OTelSpan", "Ms.Web.Span");
}
function _createTelemetryItem(item, span, baseType, eventName) {
    eventName = eventName || STR_NOT_SPECIFIED;
    if (isNullOrUndefined(item) ||
        isNullOrUndefined(baseType) ||
        isNullOrUndefined(eventName)) {
        throwError("Input doesn't contain all required fields");
    }
    var iKey = "";
    if (item[_DYN_I_KEY$1 ]) {
        iKey = item[_DYN_I_KEY$1 ];
        delete item[_DYN_I_KEY$1 ];
    }
    var telemetryItem = {
        name: eventName,
        time: toISOString(span.endTime ? new Date(hrTimeToMilliseconds(span.endTime)) : new Date()),
        iKey: iKey,
        ext: {},
        baseType: baseType,
        baseData: item,
        data: {}
    };
    return telemetryItem;
}
function createExtendedTelemetryItemFromSpan(core, span) {
    var telemetryItem = _createOTelSpanTelemetryItem(core, span);
    var container = span.attribContainer || createAttributeContainer(span[_DYN_ATTRIBUTES ]);
    if (telemetryItem) {
        var partB = telemetryItem[_DYN_BASE_DATA ] = telemetryItem[_DYN_BASE_DATA ] || {};
        partB[_DYN_START_TIME$1 ] = new Date(hrTimeToMilliseconds(span[_DYN_START_TIME$1 ]));
        var spanContext = span[_DYN_SPAN_CONTEXT ]();
        if (spanContext) {
            var ext = telemetryItem.ext = telemetryItem.ext || {};
            var dt = ext["dt"] = ext["dt"] || {};
            _applyValue$1(dt, "spanId", spanContext[_DYN_SPAN_ID ], false);
            _applyValue$1(dt, "traceId", spanContext[_DYN_TRACE_ID ], false);
            _applyValue$1(dt, "traceFlags", spanContext[_DYN_TRACE_FLAGS ], false);
        }
        _populateExtensionsFromSpan(telemetryItem, span, container);
        _populatePartC(telemetryItem, container);
    }
    return telemetryItem;
}

var AnalyticsPluginIdentifier = "ApplicationInsightsAnalytics";

var STR_EMPTY = "";
var STR_DROPPED = "drop";
var STR_SENDING = "send";
var STR_REQUEUE = "requeue";
var STR_RESPONSE_FAIL = "rspFail";
var STR_OTHER = "oth";
var DEFAULT_CACHE_CONTROL = "no-cache, no-store";
var DEFAULT_CONTENT_TYPE = "application/x-json-stream";
var STR_CACHE_CONTROL = "cache-control";
var STR_CONTENT_TYPE_HEADER = "content-type";
var STR_KILL_TOKENS_HEADER = "kill-tokens";
var STR_KILL_DURATION_HEADER = "kill-duration";
var STR_TIME_DELTA_HEADER = "time-delta-millis";
var STR_CLIENT_VERSION = "client-version";
var STR_CLIENT_ID = "client-id";
var STR_TIME_DELTA_TO_APPLY = "time-delta-to-apply-millis";
var STR_UPLOAD_TIME = "upload-time";
var STR_API_KEY = "apikey";
var STR_MSA_DEVICE_TICKET = "AuthMsaDeviceTicket";
var STR_AUTH_WEB_TOKEN = "WebAuthToken";
var STR_AUTH_XTOKEN = "AuthXToken";
var STR_NO_RESPONSE_BODY = "NoResponseBody";
var STR_MSFPC = "msfpc";
var STR_TRACE = "trace";
var STR_USER = "user";

var _DYN_LENGTH$1 = "length";
var _DYN_CONCAT = "concat";
var _DYN_I_KEY = "iKey";
var _DYN_COUNT = "count";
var _DYN_EVENTS = "events";
var _DYN_PUSH = "push";
var _DYN_SPLIT = "split";
var _DYN_TO_LOWER_CASE = "toLowerCase";
var _DYN_HDRS = "hdrs";
var _DYN_USE_HDRS = "useHdrs";
var _DYN_INITIALIZE = "initialize";
var _DYN_SET_TIMEOUT_OVERRIDE = "setTimeoutOverride";
var _DYN_CLEAR_TIMEOUT_OVERRI0 = "clearTimeoutOverride";
var _DYN_PAYLOAD_PREPROCESSOR = "payloadPreprocessor";
var _DYN_OVERRIDE_ENDPOINT_UR1 = "overrideEndpointUrl";
var _DYN_AVOID_OPTIONS = "avoidOptions";
var _DYN_DISABLE_EVENT_TIMING2 = "disableEventTimings";
var _DYN_ENABLE_COMPOUND_KEY = "enableCompoundKey";
var _DYN_DISABLE_XHR_SYNC = "disableXhrSync";
var _DYN_DISABLE_FETCH_KEEP_A3 = "disableFetchKeepAlive";
var _DYN_ADD_NO_RESPONSE = "addNoResponse";
var _DYN_USE_SEND_BEACON = "useSendBeacon";
var _DYN_FETCH_CREDENTIALS = "fetchCredentials";
var _DYN_ALWAYS_USE_XHR_OVERR4 = "alwaysUseXhrOverride";
var _DYN_SERIALIZE_OFFLINE_EV5 = "serializeOfflineEvt";
var _DYN_GET_OFFLINE_REQUEST_6 = "getOfflineRequestDetails";
var _DYN_CREATE_PAYLOAD = "createPayload";
var _DYN_CREATE_ONE_DSPAYLOAD = "createOneDSPayload";
var _DYN_PAYLOAD_BLOB = "payloadBlob";
var _DYN_HEADERS = "headers";
var _DYN__THE_PAYLOAD = "_thePayload";
var _DYN_BATCHES = "batches";
var _DYN_SEND_TYPE = "sendType";
var _DYN_CAN_SEND_REQUEST = "canSendRequest";
var _DYN_ALLOW_REQUEST_SENDIN7 = "allowRequestSending";
var _DYN_SEND_QUEUED_REQUESTS = "sendQueuedRequests";
var _DYN_SET_UNLOADING = "setUnloading";
var _DYN_SEND_SYNCHRONOUS_BAT8 = "sendSynchronousBatch";
var _DYN__TRANSPORT = "_transport";
var _DYN_GET_WPARAM = "getWParam";
var _DYN_IS_BEACON = "isBeacon";
var _DYN_TIMINGS = "timings";
var _DYN_IS_TEARDOWN = "isTeardown";
var _DYN__SEND_REASON = "_sendReason";
var _DYN_SET_KILL_SWITCH_TENA9 = "setKillSwitchTenants";
var _DYN__BACK_OFF_TRANSMISSI10 = "_backOffTransmission";
var _DYN_IDENTIFIER = "identifier";
var _DYN_IGNORE_MC1_MS0_COOKI11 = "ignoreMc1Ms0CookieProcessing";
var _DYN_AUTO_FLUSH_EVENTS_LI12 = "autoFlushEventsLimit";
var _DYN_DISABLE_AUTO_BATCH_F13 = "disableAutoBatchFlushLimit";
var _DYN_OVERRIDE_INSTRUMENTA14 = "overrideInstrumentationKey";
var _DYN_SEND_ATTEMPT = "sendAttempt";
var _DYN_LATENCY = "latency";
var _DYN_SYNC = "sync";

function _getEventMsfpc(theEvent) {
    var intWeb = ((theEvent.ext || {})["intweb"]);
    if (intWeb && isValueAssigned(intWeb[STR_MSFPC])) {
        return intWeb[STR_MSFPC];
    }
    return null;
}
function _getMsfpc$1(theEvents) {
    var msfpc = null;
    for (var lp = 0; msfpc === null && lp < theEvents[_DYN_LENGTH$1 ]; lp++) {
        msfpc = _getEventMsfpc(theEvents[lp]);
    }
    return msfpc;
}
var EventBatch = /** @class */ (function () {
    function EventBatch(iKey, addEvents) {
        var events = addEvents ? [][_DYN_CONCAT ](addEvents) : [];
        var _self = this;
        var _msfpc = _getMsfpc$1(events);
        _self[_DYN_I_KEY ] = function () {
            return iKey;
        };
        _self.Msfpc = function () {
            return _msfpc || STR_EMPTY;
        };
        _self[_DYN_COUNT ] = function () {
            return events[_DYN_LENGTH$1 ];
        };
        _self[_DYN_EVENTS ] = function () {
            return events;
        };
        _self.addEvent = function (theEvent) {
            if (theEvent) {
                events[_DYN_PUSH ](theEvent);
                if (!_msfpc) {
                    _msfpc = _getEventMsfpc(theEvent);
                }
                return true;
            }
            return false;
        };
        _self[_DYN_SPLIT ] = function (fromEvent, numEvents) {
            var theEvents;
            if (fromEvent < events[_DYN_LENGTH$1 ]) {
                var cnt = events[_DYN_LENGTH$1 ] - fromEvent;
                if (!isNullOrUndefined(numEvents)) {
                    cnt = numEvents < cnt ? numEvents : cnt;
                }
                theEvents = events.splice(fromEvent, cnt);
                _msfpc = _getMsfpc$1(events);
            }
            return new EventBatch(iKey, theEvents);
        };
    }
    EventBatch.create = function (iKey, theEvents) {
        return new EventBatch(iKey, theEvents);
    };
    return EventBatch;
}());

function createClockSkewManager() {
    var _allowRequestSending = true;
    var _shouldAddClockSkewHeaders = true;
    var _isFirstRequest = true;
    var _clockSkewHeaderValue = "use-collector-delta";
    var _clockSkewSet = false;
    return {
        allowRequestSending: function () {
            return _allowRequestSending;
        },
        firstRequestSent: function () {
            if (_isFirstRequest) {
                _isFirstRequest = false;
                if (!_clockSkewSet) {
                    _allowRequestSending = false;
                }
            }
        },
        shouldAddClockSkewHeaders: function () {
            return _shouldAddClockSkewHeaders;
        },
        getClockSkewHeaderValue: function () {
            return _clockSkewHeaderValue;
        },
        setClockSkew: function (timeDeltaInMillis) {
            if (!_clockSkewSet) {
                if (timeDeltaInMillis) {
                    _clockSkewHeaderValue = timeDeltaInMillis;
                    _shouldAddClockSkewHeaders = true;
                    _clockSkewSet = true;
                }
                else {
                    _shouldAddClockSkewHeaders = false;
                }
                _allowRequestSending = true;
            }
        }
    };
}

var SecToMsMultiplier = 1000;
function _normalizeTenants(values) {
    var result = [];
    if (values) {
        arrForEach(values, function (value) {
            result[_DYN_PUSH ](strTrim(value));
        });
    }
    return result;
}
function createKillSwitch() {
    var _a;
    var _killedTokenDictionary = {};
    return _a = {},
        _a[_DYN_SET_KILL_SWITCH_TENA9 ] = function (killTokens, killDuration) {
            if (killTokens && killDuration) {
                try {
                    var killedTokens = _normalizeTenants(killTokens[_DYN_SPLIT ](","));
                    if (killDuration === "this-request-only") {
                        return killedTokens;
                    }
                    var durationMs = parseInt(killDuration, 10) * SecToMsMultiplier;
                    for (var i = 0; i < killedTokens[_DYN_LENGTH$1 ]; ++i) {
                        _killedTokenDictionary[killedTokens[i]] = utcNow() + durationMs;
                    }
                }
                catch (ex) {
                    return [];
                }
            }
            return [];
        },
        _a.isTenantKilled = function (tenantToken) {
            var killDictionary = _killedTokenDictionary;
            var name = strTrim(tenantToken);
            if (killDictionary[name] !== undefined && killDictionary[name] > utcNow()) {
                return true;
            }
            delete killDictionary[name];
            return false;
        },
        _a;
}

var RandomizationLowerThreshold = 0.8;
var RandomizationUpperThreshold = 1.2;
var BaseBackoff = 3000;
var MaxBackoff = 600000;
function retryPolicyShouldRetryForStatus(httpStatusCode) {
    return !((httpStatusCode >= 300 && httpStatusCode < 500 && httpStatusCode != 429)
        || (httpStatusCode == 501)
        || (httpStatusCode == 505));
}
function retryPolicyGetMillisToBackoffForRetry(retriesSoFar) {
    var waitDuration = 0;
    var minBackoff = BaseBackoff * RandomizationLowerThreshold;
    var maxBackoff = BaseBackoff * RandomizationUpperThreshold;
    var randomBackoff = mathFloor(Math.random() * (maxBackoff - minBackoff)) + minBackoff;
    waitDuration = Math.pow(2, retriesSoFar) * randomBackoff;
    return mathMin(waitDuration, MaxBackoff);
}

var _MAX_STRING_JOINS = 20;
var RequestSizeLimitBytes = 3145728;
var BeaconRequestSizeLimitBytes = 65000;
var MaxRecordSize = 2000000;
var MaxBeaconRecordSize = mathMin(MaxRecordSize, BeaconRequestSizeLimitBytes);
var metadata = "metadata";
var f = "f";
var rCheckDot = /\./;
var Serializer = /** @class */ (function () {
    function Serializer(perfManager, valueSanitizer, stringifyObjects, enableCompoundKey, getEncodedTypeOverride, excludeCsMetaData, cfg) {
        var strData = "data";
        var strBaseData = "baseData";
        var strExt = "ext";
        var _checkForCompoundkey = !!enableCompoundKey;
        var _processSubKeys = true;
        var _theSanitizer = valueSanitizer;
        var _isReservedCache = {};
        var _excludeCsMetaData = !!excludeCsMetaData;
        var _getEncodedType = getEncodedTypeOverride || getCommonSchemaMetaData;
        var _sizeCfg = _getSizeLimtCfg(cfg);
        var _requestSizeLimitBytes = _validateSizeLimit(_sizeCfg.requestLimit, RequestSizeLimitBytes, 0);
        var _beaconRequestSizeLimitBytes = _validateSizeLimit(_sizeCfg.requestLimit, BeaconRequestSizeLimitBytes, 1);
        var _maxRecordSize = _validateSizeLimit(_sizeCfg.recordLimit, MaxRecordSize, 0);
        var _maxBeaconRecordSize = Math.min(_validateSizeLimit(_sizeCfg.recordLimit, MaxBeaconRecordSize, 1), _beaconRequestSizeLimitBytes);
        dynamicProto(Serializer, this, function (_self) {
            _self.createPayload = function (retryCnt, isTeardown, isSync, isReducedPayload, sendReason, sendType) {
                return {
                    apiKeys: [],
                    payloadBlob: STR_EMPTY,
                    overflow: null,
                    sizeExceed: [],
                    failedEvts: [],
                    batches: [],
                    numEvents: 0,
                    retryCnt: retryCnt,
                    isTeardown: isTeardown,
                    isSync: isSync,
                    isBeacon: isReducedPayload,
                    sendType: sendType,
                    sendReason: sendReason
                };
            };
            _self.appendPayload = function (payload, theBatch, maxEventsPerBatch) {
                var canAddEvents = payload && theBatch && !payload.overflow;
                if (canAddEvents) {
                    doPerf(perfManager, function () { return "Serializer:appendPayload"; }, function () {
                        var theEvents = theBatch.events();
                        var payloadBlob = payload.payloadBlob;
                        var payloadEvents = payload.numEvents;
                        var eventsAdded = false;
                        var sizeExceeded = [];
                        var failedEvts = [];
                        var isBeaconPayload = payload.isBeacon;
                        var requestMaxSize = isBeaconPayload ? _beaconRequestSizeLimitBytes : _requestSizeLimitBytes;
                        var recordMaxSize = isBeaconPayload ? _maxBeaconRecordSize : _maxRecordSize;
                        var lp = 0;
                        var joinCount = 0;
                        while (lp < theEvents.length) {
                            var theEvent = theEvents[lp];
                            if (theEvent) {
                                if (payloadEvents >= maxEventsPerBatch) {
                                    payload.overflow = theBatch.split(lp);
                                    break;
                                }
                                var eventBlob = _self.getEventBlob(theEvent);
                                if (eventBlob && eventBlob.length <= recordMaxSize) {
                                    var blobLength = eventBlob.length;
                                    var currentSize = payloadBlob.length;
                                    if (currentSize + blobLength > requestMaxSize) {
                                        payload.overflow = theBatch.split(lp);
                                        break;
                                    }
                                    if (payloadBlob) {
                                        payloadBlob += "\n";
                                    }
                                    payloadBlob += eventBlob;
                                    joinCount++;
                                    if (joinCount > _MAX_STRING_JOINS) {
                                        strSubstr(payloadBlob, 0, 1);
                                        joinCount = 0;
                                    }
                                    eventsAdded = true;
                                    payloadEvents++;
                                }
                                else {
                                    if (eventBlob) {
                                        sizeExceeded.push(theEvent);
                                    }
                                    else {
                                        failedEvts.push(theEvent);
                                    }
                                    theEvents.splice(lp, 1);
                                    lp--;
                                }
                            }
                            lp++;
                        }
                        if (sizeExceeded.length > 0) {
                            payload.sizeExceed.push(EventBatch.create(theBatch.iKey(), sizeExceeded));
                        }
                        if (failedEvts.length > 0) {
                            payload.failedEvts.push(EventBatch.create(theBatch.iKey(), failedEvts));
                        }
                        if (eventsAdded) {
                            payload.batches.push(theBatch);
                            payload.payloadBlob = payloadBlob;
                            payload.numEvents = payloadEvents;
                            var apiKey = theBatch.iKey();
                            if (arrIndexOf(payload.apiKeys, apiKey) === -1) {
                                payload.apiKeys.push(apiKey);
                            }
                        }
                    }, function () { return ({ payload: payload, theBatch: { iKey: theBatch.iKey(), evts: theBatch.events() }, max: maxEventsPerBatch }); });
                }
                return canAddEvents;
            };
            _self.getEventBlob = function (eventData) {
                try {
                    return doPerf(perfManager, function () { return "Serializer.getEventBlob"; }, function () {
                        var serializedEvent = {};
                        serializedEvent.name = eventData.name;
                        serializedEvent.time = eventData.time;
                        serializedEvent.ver = eventData.ver;
                        serializedEvent.iKey = "o:" + getTenantId(eventData.iKey);
                        var serializedExt = {};
                        var _addMetadataCallback;
                        if (!_excludeCsMetaData) {
                            _addMetadataCallback = function (pathKeys, key, value) {
                                _addJSONPropertyMetaData(_getEncodedType, serializedExt, pathKeys, key, value);
                            };
                        }
                        var eventExt = eventData[strExt];
                        if (eventExt) {
                            serializedEvent[strExt] = serializedExt;
                            objForEachKey(eventExt, function (key, value) {
                                var data = serializedExt[key] = {};
                                _processPathKeys(value, data, "ext." + key, true, null, null, true);
                            });
                        }
                        var serializedData = serializedEvent[strData] = {};
                        serializedData.baseType = eventData.baseType;
                        var serializedBaseData = serializedData[strBaseData] = {};
                        _processPathKeys(eventData.baseData, serializedBaseData, strBaseData, false, [strBaseData], _addMetadataCallback, _processSubKeys);
                        _processPathKeys(eventData.data, serializedData, strData, false, [], _addMetadataCallback, _processSubKeys);
                        return JSON.stringify(serializedEvent);
                    }, function () { return ({ item: eventData }); });
                }
                catch (e) {
                    return null;
                }
            };
            function _isReservedField(path, name) {
                var result = _isReservedCache[path];
                if (result === undefined) {
                    if (path.length >= 7) {
                        result = strStartsWith(path, "ext.metadata") || strStartsWith(path, "ext.web");
                    }
                    _isReservedCache[path] = result;
                }
                return result;
            }
            function _processPathKeys(srcObj, target, thePath, checkReserved, metadataPathKeys, metadataCallback, processSubKeys) {
                objForEachKey(srcObj, function (key, srcValue) {
                    var prop = null;
                    if (srcValue || isValueAssigned(srcValue)) {
                        var path = thePath;
                        var name_1 = key;
                        var theMetaPathKeys = metadataPathKeys;
                        var destObj = target;
                        if (_checkForCompoundkey && !checkReserved && rCheckDot.test(key)) {
                            var subKeys = key.split(".");
                            var keyLen = subKeys.length;
                            if (keyLen > 1) {
                                if (theMetaPathKeys) {
                                    theMetaPathKeys = theMetaPathKeys.slice();
                                }
                                for (var lp = 0; lp < keyLen - 1; lp++) {
                                    var subKey = subKeys[lp];
                                    destObj = destObj[subKey] = destObj[subKey] || {};
                                    path += "." + subKey;
                                    if (theMetaPathKeys) {
                                        theMetaPathKeys.push(subKey);
                                    }
                                }
                                name_1 = subKeys[keyLen - 1];
                            }
                        }
                        var isReserved = checkReserved && _isReservedField(path);
                        if (!isReserved && _theSanitizer && _theSanitizer.handleField(path, name_1)) {
                            prop = _theSanitizer.value(path, name_1, srcValue, stringifyObjects);
                        }
                        else {
                            prop = sanitizeProperty(name_1, srcValue, stringifyObjects);
                        }
                        if (prop) {
                            var newValue = prop.value;
                            destObj[name_1] = newValue;
                            if (metadataCallback) {
                                metadataCallback(theMetaPathKeys, name_1, prop);
                            }
                            if (processSubKeys && typeof newValue === "object" && !isArray(newValue)) {
                                var newPath = theMetaPathKeys;
                                if (newPath) {
                                    newPath = newPath.slice();
                                    newPath.push(name_1);
                                }
                                _processPathKeys(srcValue, newValue, path + "." + name_1, checkReserved, newPath, metadataCallback, processSubKeys);
                            }
                        }
                    }
                });
            }
        });
    }
    Serializer.__ieDyn=1;
    return Serializer;
}());
function _validateSizeLimit(cfgVal, defaultVal, idx) {
    if (isArray(cfgVal)) {
        var val = cfgVal[idx];
        if (val > 0 && val <= defaultVal) {
            return val;
        }
    }
    return defaultVal;
}
function _getSizeLimtCfg(cfg) {
    var defaultCfg = {};
    if (cfg && cfg.requestLimit) {
        return cfg.requestLimit;
    }
    return defaultCfg;
}
function _addJSONPropertyMetaData(getEncodedType, json, propKeys, name, propertyValue) {
    if (propertyValue && json) {
        var encodedTypeValue = getEncodedType(propertyValue.value, propertyValue.kind, propertyValue.propertyType);
        if (encodedTypeValue > -1) {
            var metaData = json[metadata];
            if (!metaData) {
                metaData = json[metadata] = { f: {} };
            }
            var metaTarget = metaData[f];
            if (!metaTarget) {
                metaTarget = metaData[f] = {};
            }
            if (propKeys) {
                for (var lp = 0; lp < propKeys.length; lp++) {
                    var key = propKeys[lp];
                    if (!metaTarget[key]) {
                        metaTarget[key] = { f: {} };
                    }
                    var newTarget = metaTarget[key][f];
                    if (!newTarget) {
                        newTarget = metaTarget[key][f] = {};
                    }
                    metaTarget = newTarget;
                }
            }
            metaTarget = metaTarget[name] = {};
            if (isArray(propertyValue.value)) {
                metaTarget["a"] = {
                    t: encodedTypeValue
                };
            }
            else {
                metaTarget["t"] = encodedTypeValue;
            }
        }
    }
}

function createTimeoutWrapper(argSetTimeout, argClearTimeout) {
    return {
        set: function (callback, ms) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            return scheduleTimeoutWith([argSetTimeout, argClearTimeout], callback, ms, args);
        }
    };
}

var _a$2;
var strSendAttempt = "sendAttempt";
var _noResponseQs = "&" + STR_NO_RESPONSE_BODY + "=true";
var UrlQueryString = "?cors=true&" + STR_CONTENT_TYPE_HEADER[_DYN_TO_LOWER_CASE ]() + "=" + DEFAULT_CONTENT_TYPE;
var _eventActionMap = (_a$2 = {},
    _a$2[1 ] = STR_REQUEUE,
    _a$2[100 ] = STR_REQUEUE,
    _a$2[200 ] = "sent",
    _a$2[8004 ] = STR_DROPPED,
    _a$2[8003 ] = STR_DROPPED,
    _a$2[8006 ] = STR_DROPPED,
    _a$2);
var _collectorQsHeaders = {};
var _collectorHeaderToQs = {};
function _addCollectorHeaderQsMapping(qsName, headerName, allowQs) {
    _collectorQsHeaders[qsName] = headerName;
    if (allowQs !== false) {
        _collectorHeaderToQs[headerName] = qsName;
    }
}
_addCollectorHeaderQsMapping(STR_MSA_DEVICE_TICKET, STR_MSA_DEVICE_TICKET, false);
_addCollectorHeaderQsMapping(STR_CLIENT_VERSION, STR_CLIENT_VERSION);
_addCollectorHeaderQsMapping(STR_CLIENT_ID, "Client-Id");
_addCollectorHeaderQsMapping(STR_API_KEY, STR_API_KEY);
_addCollectorHeaderQsMapping(STR_TIME_DELTA_TO_APPLY, STR_TIME_DELTA_TO_APPLY);
_addCollectorHeaderQsMapping(STR_UPLOAD_TIME, STR_UPLOAD_TIME);
_addCollectorHeaderQsMapping(STR_AUTH_XTOKEN, STR_AUTH_XTOKEN);
function _hasHeader(headers, header) {
    var hasHeader = false;
    if (headers && header) {
        var keys = objKeys(headers);
        if (keys && keys[_DYN_LENGTH$1 ] > 0) {
            var lowerHeader = header[_DYN_TO_LOWER_CASE ]();
            for (var lp = 0; lp < keys[_DYN_LENGTH$1 ]; lp++) {
                var value = keys[lp];
                if (value && objHasOwnProperty(header, value) &&
                    value[_DYN_TO_LOWER_CASE ]() === lowerHeader) {
                    hasHeader = true;
                    break;
                }
            }
        }
    }
    return hasHeader;
}
function _addRequestDetails(details, name, value, useHeaders) {
    if (name && value && value[_DYN_LENGTH$1 ] > 0) {
        if (useHeaders && _collectorQsHeaders[name]) {
            details[_DYN_HDRS ][_collectorQsHeaders[name]] = value;
            details[_DYN_USE_HDRS ] = true;
        }
        else {
            details.url += "&" + name + "=" + value;
        }
    }
}
function _addQueryStringParameter(qsParams, name, value) {
    for (var i = 0; i < qsParams[_DYN_LENGTH$1 ]; i++) {
        if (qsParams[i].name === name) {
            qsParams[i].value = value;
            return;
        }
    }
    qsParams[_DYN_PUSH ]({ name: name, value: value });
}
function _removeQueryStringParameter(qsParams, name) {
    for (var i = 0; i < qsParams[_DYN_LENGTH$1 ]; i++) {
        if (qsParams[i].name === name) {
            qsParams.splice(i, 1);
            return;
        }
    }
}
var HttpManager = /** @class */ (function () {
    function HttpManager(maxEventsPerBatch, maxConnections, maxRequestRetriesBeforeBackoff, actions) {
        var _urlString;
        var _killSwitch;
        var _paused;
        var _clockSkewManager;
        var _useBeacons = false;
        var _outstandingRequests;
        var _postManager;
        var _logger;
        var _sendInterfaces;
        var _core;
        var _customHttpInterface;
        var _queryStringParameters;
        var _headers;
        var _batchQueue;
        var _serializer;
        var _enableEventTimings;
        var _cookieMgr;
        var _isUnloading;
        var _useHeaders;
        var _xhrTimeout;
        var _zipPayload;
        var _disableXhrSync;
        var _disableFetchKeepAlive;
        var _canHaveReducedPayload;
        var _addNoResponse;
        var _unloadHooks;
        var _sendHook;
        var _sendListener;
        var _responseHandlers;
        var _isInitialized;
        var _timeoutWrapper;
        var _excludeCsMetaData;
        var _sendPostMgr;
        var _fetchCredentials;
        var _maxEvtPerBatch = maxEventsPerBatch;
        dynamicProto(HttpManager, this, function (_self) {
            _initDefaults();
            var _sendCredentials = true;
            _self[_DYN_INITIALIZE ] = function (theConfig, core, postChannel) {
                if (!_isInitialized) {
                    _core = core;
                    _cookieMgr = core.getCookieMgr();
                    _postManager = postChannel;
                    _logger = _postManager.diagLog();
                    arrAppend(_unloadHooks, onConfigChange(theConfig, function (details) {
                        var _a;
                        var coreConfig = details.cfg;
                        var channelConfig = details.cfg.extensionConfig[postChannel.identifier];
                        _timeoutWrapper = createTimeoutWrapper(channelConfig[_DYN_SET_TIMEOUT_OVERRIDE ], channelConfig[_DYN_CLEAR_TIMEOUT_OVERRI0 ]);
                        if (isValueAssigned(coreConfig.anonCookieName)) {
                            _addQueryStringParameter(_queryStringParameters, "anoncknm", coreConfig.anonCookieName);
                        }
                        else {
                            _removeQueryStringParameter(_queryStringParameters, "anoncknm");
                        }
                        _sendHook = channelConfig[_DYN_PAYLOAD_PREPROCESSOR ];
                        _sendListener = channelConfig.payloadListener;
                        var httpInterface = channelConfig.httpXHROverride;
                        var endpointUrl = channelConfig[_DYN_OVERRIDE_ENDPOINT_UR1 ] ? channelConfig[_DYN_OVERRIDE_ENDPOINT_UR1 ] : coreConfig.endpointUrl;
                        _urlString = endpointUrl + UrlQueryString;
                        _useHeaders = !isUndefined(channelConfig[_DYN_AVOID_OPTIONS ]) ? !channelConfig[_DYN_AVOID_OPTIONS ] : true;
                        _enableEventTimings = !channelConfig[_DYN_DISABLE_EVENT_TIMING2 ];
                        var maxEvtCfg = channelConfig.maxEvtPerBatch;
                        _maxEvtPerBatch = maxEvtCfg && maxEvtCfg <= maxEventsPerBatch ? maxEvtCfg : maxEventsPerBatch;
                        var valueSanitizer = channelConfig.valueSanitizer;
                        var stringifyObjects = channelConfig.stringifyObjects;
                        var enableCompoundKey = !!coreConfig[_DYN_ENABLE_COMPOUND_KEY ];
                        if (!isUndefined(channelConfig[_DYN_ENABLE_COMPOUND_KEY ])) {
                            enableCompoundKey = !!channelConfig[_DYN_ENABLE_COMPOUND_KEY ];
                        }
                        _xhrTimeout = channelConfig.xhrTimeout;
                        var csStream = getInst("CompressionStream");
                        _zipPayload = isFeatureEnabled("zipPayload", coreConfig, false);
                        if (!isFunction(csStream) || _sendHook) {
                            _zipPayload = false;
                        }
                        _disableXhrSync = !!channelConfig[_DYN_DISABLE_XHR_SYNC ];
                        _disableFetchKeepAlive = !!channelConfig[_DYN_DISABLE_FETCH_KEEP_A3 ];
                        _addNoResponse = channelConfig[_DYN_ADD_NO_RESPONSE ] !== false;
                        _excludeCsMetaData = !!channelConfig.excludeCsMetaData;
                        if (!!core.getPlugin("LocalStorage")) {
                            _disableFetchKeepAlive = true;
                        }
                        _useBeacons = !isReactNative();
                        _serializer = new Serializer(_core, valueSanitizer, stringifyObjects, enableCompoundKey, getCommonSchemaMetaData, _excludeCsMetaData, channelConfig);
                        if (!isNullOrUndefined(channelConfig[_DYN_USE_SEND_BEACON ])) {
                            _useBeacons = !!channelConfig[_DYN_USE_SEND_BEACON ];
                        }
                        if (channelConfig[_DYN_FETCH_CREDENTIALS ]) {
                            _fetchCredentials = channelConfig[_DYN_FETCH_CREDENTIALS ];
                        }
                        var sendPostConfig = _getSendPostMgrConfig();
                        if (!_sendPostMgr) {
                            _sendPostMgr = new SenderPostManager();
                            _sendPostMgr[_DYN_INITIALIZE ](sendPostConfig, _logger);
                        }
                        else {
                            _sendPostMgr.SetConfig(sendPostConfig);
                        }
                        var syncHttpInterface = httpInterface;
                        var beaconHttpInterface = channelConfig[_DYN_ALWAYS_USE_XHR_OVERR4 ] ? httpInterface : null;
                        var fetchSyncHttpInterface = channelConfig[_DYN_ALWAYS_USE_XHR_OVERR4 ] ? httpInterface : null;
                        var beaconUnloadTransports = [3 , 2 ];
                        if (!httpInterface) {
                            _customHttpInterface = false;
                            var theTransports = [];
                            if (isReactNative()) {
                                theTransports = [2 , 1 ];
                                beaconUnloadTransports = [2 , 1 , 3 ];
                            }
                            else {
                                theTransports = [1 , 2 , 3 ];
                            }
                            theTransports = prependTransports(theTransports, channelConfig.transports);
                            httpInterface = _getSenderInterface(theTransports, false);
                            if (!httpInterface) {
                                _warnToConsole(_logger, "No available transport to send events");
                            }
                            syncHttpInterface = _getSenderInterface(theTransports, true);
                        }
                        if (!beaconHttpInterface) {
                            beaconUnloadTransports = prependTransports(beaconUnloadTransports, channelConfig.unloadTransports);
                            beaconHttpInterface = _getSenderInterface(beaconUnloadTransports, true);
                        }
                        _canHaveReducedPayload = !_customHttpInterface && ((_useBeacons && isBeaconsSupported()) || (!_disableFetchKeepAlive && isFetchSupported(true)));
                        _sendInterfaces = (_a = {},
                            _a[0 ] = httpInterface,
                            _a[1 ] = syncHttpInterface || _getSenderInterface([1 , 2 , 3 ], true),
                            _a[2 ] = beaconHttpInterface || syncHttpInterface || _getSenderInterface([1 ], true),
                            _a[3 ] = fetchSyncHttpInterface || _getSenderInterface([2 , 3 ], true) || syncHttpInterface || _getSenderInterface([1 ], true),
                            _a);
                    }));
                    _isInitialized = true;
                }
            };
            _self.addResponseHandler = function (responseHandler) {
                _responseHandlers[_DYN_PUSH ](responseHandler);
                return {
                    rm: function () {
                        var index = _responseHandlers.indexOf(responseHandler);
                        if (index >= 0) {
                            _responseHandlers.splice(index, 1);
                        }
                    }
                };
            };
            _self[_DYN_SERIALIZE_OFFLINE_EV5 ] = function (evt) {
                try {
                    if (_serializer) {
                        return _serializer.getEventBlob(evt);
                    }
                }
                catch (e) {
                }
                return STR_EMPTY;
            };
            _self[_DYN_GET_OFFLINE_REQUEST_6 ] = function () {
                try {
                    var payload = _serializer && _serializer[_DYN_CREATE_PAYLOAD ](0, false, false, false, 1 , 0 );
                    return _buildRequestDetails(payload, _useHeaders);
                }
                catch (e) {
                }
                return null;
            };
            _self[_DYN_CREATE_ONE_DSPAYLOAD ] = function (evts, optimize) {
                var _a;
                try {
                    var theBatches_1 = [];
                    arrForEach(evts, function (evt) {
                        if (optimize) {
                            evt = optimizeObject(evt);
                        }
                        var batch = EventBatch.create(evt[_DYN_I_KEY ], [evt]);
                        theBatches_1[_DYN_PUSH ](batch);
                    });
                    var thePayload = null;
                    while (theBatches_1[_DYN_LENGTH$1 ] > 0 && _serializer) {
                        var theBatch = theBatches_1.shift();
                        if (theBatch && theBatch[_DYN_COUNT ]() > 0) {
                            thePayload = thePayload || _serializer[_DYN_CREATE_PAYLOAD ](0, false, false, false, 1 , 0 );
                            _serializer.appendPayload(thePayload, theBatch, _maxEvtPerBatch);
                        }
                    }
                    var requestDetails = _buildRequestDetails(thePayload, _useHeaders);
                    var payloadData = (_a = {
                            data: thePayload[_DYN_PAYLOAD_BLOB ],
                            urlString: requestDetails.url,
                            headers: requestDetails[_DYN_HDRS ],
                            timeout: _xhrTimeout
                        },
                        _a[_DYN_DISABLE_XHR_SYNC ] = _disableXhrSync,
                        _a[_DYN_DISABLE_FETCH_KEEP_A3 ] = _disableFetchKeepAlive,
                        _a);
                    if (_useHeaders) {
                        if (!_hasHeader(payloadData[_DYN_HEADERS ], STR_CACHE_CONTROL)) {
                            payloadData[_DYN_HEADERS ][STR_CACHE_CONTROL] = DEFAULT_CACHE_CONTROL;
                        }
                        if (!_hasHeader(payloadData[_DYN_HEADERS ], STR_CONTENT_TYPE_HEADER)) {
                            payloadData[_DYN_HEADERS ][STR_CONTENT_TYPE_HEADER] = DEFAULT_CONTENT_TYPE;
                        }
                    }
                    return payloadData;
                }
                catch (e) {
                }
                return null;
            };
            function _getSenderInterface(transports, syncSupport) {
                try {
                    return _sendPostMgr && _sendPostMgr.getSenderInst(transports, syncSupport);
                }
                catch (e) {
                }
                return null;
            }
            _self["_getDbgPlgTargets"] = function () {
                return [_sendInterfaces[0 ], _killSwitch, _serializer, _sendInterfaces, _getSendPostMgrConfig(), _urlString, _maxEvtPerBatch];
            };
            function _getSendPostMgrConfig() {
                var _a;
                try {
                    var onCompleteFuncs = {
                        xdrOnComplete: _xdrOncomplete,
                        fetchOnComplete: _fetchOnComplete,
                        xhrOnComplete: _xhrOnComplete,
                        beaconOnRetry: _onBeaconRetry
                    };
                    var config = (_a = {
                            enableSendPromise: false,
                            isOneDs: true,
                            disableCredentials: !_sendCredentials
                        },
                        _a[_DYN_FETCH_CREDENTIALS ] = _fetchCredentials,
                        _a.disableXhr = false,
                        _a.disableBeacon = !_useBeacons,
                        _a.disableBeaconSync = !_useBeacons,
                        _a[_DYN_DISABLE_FETCH_KEEP_A3 ] = _disableFetchKeepAlive,
                        _a.timeWrapper = _timeoutWrapper,
                        _a[_DYN_ADD_NO_RESPONSE ] = _addNoResponse,
                        _a.senderOnCompleteCallBack = onCompleteFuncs,
                        _a);
                    return config;
                }
                catch (e) {
                }
                return null;
            }
            function _xdrOncomplete(xdr, oncomplete, payload) {
                var response = getResponseText(xdr);
                _doOnComplete(oncomplete, 200, {}, response);
                _handleCollectorResponse(response);
            }
            function _initDefaults() {
                var undefValue;
                _urlString = null;
                _killSwitch = createKillSwitch();
                _paused = false;
                _clockSkewManager = createClockSkewManager();
                _useBeacons = false;
                _outstandingRequests = 0;
                _postManager = null;
                _logger = null;
                _sendInterfaces = null;
                _core = null;
                _customHttpInterface = true;
                _queryStringParameters = [];
                _headers = {};
                _batchQueue = [];
                _serializer = null;
                _enableEventTimings = false;
                _cookieMgr = null;
                _isUnloading = false;
                _useHeaders = false;
                _xhrTimeout = undefValue;
                _disableXhrSync = undefValue;
                _disableFetchKeepAlive = undefValue;
                _canHaveReducedPayload = undefValue;
                _addNoResponse = undefValue;
                _unloadHooks = [];
                _sendHook = undefValue;
                _sendListener = undefValue;
                _responseHandlers = [];
                _isInitialized = false;
                _timeoutWrapper = createTimeoutWrapper();
                _excludeCsMetaData = false;
                _sendPostMgr = null;
                _maxEvtPerBatch = null;
            }
            function _fetchOnComplete(response, onComplete, resValue, payload) {
                var handleResponse = function (status, headerMap, responseText) {
                    _doOnComplete(onComplete, status, headerMap, responseText);
                    _handleCollectorResponse(responseText);
                };
                var headerMap = {};
                var headers = response[_DYN_HEADERS ];
                if (headers) {
                    headers["forEach"](function (value, name) {
                        headerMap[name] = value;
                    });
                }
                handleResponse(response.status, headerMap, resValue || STR_EMPTY);
            }
            function _xhrOnComplete(request, oncomplete, payload) {
                var response = getResponseText(request);
                _doOnComplete(oncomplete, request.status, _getAllResponseHeaders(request, true), response);
                _handleCollectorResponse(response);
            }
            function _doOnComplete(oncomplete, status, headers, response) {
                try {
                    oncomplete(status, headers, response);
                }
                catch (e) {
                    _throwInternal(_logger, 2 , 518 , dumpObj(e));
                }
            }
            function _onBeaconRetry(payload, onComplete, canSend) {
                var internalPayloadData = payload;
                var status = 200;
                var thePayload = internalPayloadData[_DYN__THE_PAYLOAD ];
                var theUrl = payload.urlString + (_addNoResponse ? _noResponseQs : STR_EMPTY);
                try {
                    var nav_1 = getNavigator();
                    if (thePayload) {
                        var persistStorage = !!_core.getPlugin("LocalStorage");
                        var droppedBatches_1 = [];
                        var sentBatches_1 = [];
                        arrForEach(thePayload[_DYN_BATCHES ], function (theBatch) {
                            if (droppedBatches_1 && theBatch && theBatch[_DYN_COUNT ]() > 0) {
                                var theEvents = theBatch[_DYN_EVENTS ]();
                                for (var lp = 0; lp < theEvents[_DYN_LENGTH$1 ]; lp++) {
                                    if (!nav_1.sendBeacon(theUrl, _serializer.getEventBlob(theEvents[lp]))) {
                                        droppedBatches_1[_DYN_PUSH ](theBatch[_DYN_SPLIT ](lp));
                                        break;
                                    }
                                    else {
                                        sentBatches_1[_DYN_PUSH ](theBatch[lp]);
                                    }
                                }
                            }
                            else {
                                droppedBatches_1[_DYN_PUSH ](theBatch[_DYN_SPLIT ](0));
                            }
                        });
                        if (sentBatches_1[_DYN_LENGTH$1 ] > 0) {
                            thePayload.sentEvts = sentBatches_1;
                        }
                        if (!persistStorage) {
                            _sendBatchesNotification(droppedBatches_1, 8006 , thePayload[_DYN_SEND_TYPE ], true);
                        }
                    }
                    else {
                        status = 0;
                    }
                }
                catch (ex) {
                    _warnToConsole(_logger, "Failed to send telemetry using sendBeacon API. Ex:" + dumpObj(ex));
                    status = 0;
                }
                finally {
                    _doOnComplete(onComplete, status, {}, STR_EMPTY);
                }
            }
            function _isBeaconPayload(sendType) {
                return sendType === 2  || sendType === 3 ;
            }
            function _adjustSendType(sendType) {
                if (_isUnloading && _isBeaconPayload(sendType)) {
                    sendType = 2 ;
                }
                return sendType;
            }
            _self.addHeader = function (name, value) {
                _headers[name] = value;
            };
            _self.removeHeader = function (name) {
                delete _headers[name];
            };
            _self[_DYN_CAN_SEND_REQUEST ] = function () {
                return _hasIdleConnection() && _clockSkewManager[_DYN_ALLOW_REQUEST_SENDIN7 ]();
            };
            _self[_DYN_SEND_QUEUED_REQUESTS ] = function (sendType, sendReason) {
                if (isUndefined(sendType)) {
                    sendType = 0 ;
                }
                if (_isUnloading) {
                    sendType = _adjustSendType(sendType);
                    sendReason = 2 ;
                }
                if (_canSendPayload(_batchQueue, sendType, 0)) {
                    _sendBatches(_clearQueue(), 0, false, sendType, sendReason || 0 );
                }
            };
            _self.isCompletelyIdle = function () {
                return !_paused && _outstandingRequests === 0 && _batchQueue[_DYN_LENGTH$1 ] === 0;
            };
            _self[_DYN_SET_UNLOADING ] = function (value) {
                _isUnloading = value;
            };
            _self.addBatch = function (theBatch) {
                if (theBatch && theBatch[_DYN_COUNT ]() > 0) {
                    if (_killSwitch.isTenantKilled(theBatch[_DYN_I_KEY ]())) {
                        return false;
                    }
                    _batchQueue[_DYN_PUSH ](theBatch);
                }
                return true;
            };
            _self.teardown = function () {
                if (_batchQueue[_DYN_LENGTH$1 ] > 0) {
                    _sendBatches(_clearQueue(), 0, true, 2 , 2 );
                }
                arrForEach(_unloadHooks, function (hook) {
                    hook && hook.rm && hook.rm();
                });
                _unloadHooks = [];
            };
            _self.pause = function () {
                _paused = true;
            };
            _self.resume = function () {
                _paused = false;
                _self[_DYN_SEND_QUEUED_REQUESTS ](0 , 4 );
            };
            _self[_DYN_SEND_SYNCHRONOUS_BAT8 ] = function (batch, sendType, sendReason) {
                if (batch && batch[_DYN_COUNT ]() > 0) {
                    if (isNullOrUndefined(sendType)) {
                        sendType = 1 ;
                    }
                    if (_isUnloading) {
                        sendType = _adjustSendType(sendType);
                        sendReason = 2 ;
                    }
                    _sendBatches([batch], 0, false, sendType, sendReason || 0 );
                }
            };
            function _hasIdleConnection() {
                return !_paused && _outstandingRequests < maxConnections;
            }
            function _clearQueue() {
                var theQueue = _batchQueue;
                _batchQueue = [];
                return theQueue;
            }
            function _canSendPayload(theBatches, sendType, retryCnt) {
                var result = false;
                if (theBatches && theBatches[_DYN_LENGTH$1 ] > 0 && !_paused && _sendInterfaces[sendType] && _serializer) {
                    result = (sendType !== 0 ) || (_hasIdleConnection() && (retryCnt > 0 || _clockSkewManager[_DYN_ALLOW_REQUEST_SENDIN7 ]()));
                }
                return result;
            }
            function _createDebugBatches(theBatches) {
                var values = {};
                if (theBatches) {
                    arrForEach(theBatches, function (theBatch, idx) {
                        values[idx] = {
                            iKey: theBatch[_DYN_I_KEY ](),
                            evts: theBatch[_DYN_EVENTS ]()
                        };
                    });
                }
                return values;
            }
            function _sendBatches(theBatches, retryCount, isTeardown, sendType, sendReason) {
                if (!theBatches || theBatches[_DYN_LENGTH$1 ] === 0) {
                    return;
                }
                if (_paused) {
                    _sendBatchesNotification(theBatches, 1 , sendType);
                    return;
                }
                sendType = _adjustSendType(sendType);
                try {
                    var orgBatches_1 = theBatches;
                    var isSynchronous_1 = sendType !== 0 ;
                    doPerf(_core, function () { return "HttpManager:_sendBatches"; }, function (perfEvt) {
                        if (perfEvt) {
                            theBatches = theBatches.slice(0);
                        }
                        var droppedBatches = [];
                        var thePayload = null;
                        var serializationStart = getTime();
                        var sendInterface = _sendInterfaces[sendType] || (isSynchronous_1 ? _sendInterfaces[1 ] : _sendInterfaces[0 ]);
                        var sendTransport = sendInterface && sendInterface[_DYN__TRANSPORT ];
                        var isReducedPayload = _canHaveReducedPayload && (_isUnloading || _isBeaconPayload(sendType) || (sendTransport === 3  || (sendInterface._isSync && sendTransport === 2 )));
                        while (_canSendPayload(theBatches, sendType, retryCount)) {
                            var theBatch = theBatches.shift();
                            if (theBatch && theBatch[_DYN_COUNT ]() > 0) {
                                if (!_killSwitch.isTenantKilled(theBatch[_DYN_I_KEY ]())) {
                                    thePayload = thePayload || _serializer[_DYN_CREATE_PAYLOAD ](retryCount, isTeardown, isSynchronous_1, isReducedPayload, sendReason, sendType);
                                    if (!_serializer.appendPayload(thePayload, theBatch, _maxEvtPerBatch)) {
                                        _doPayloadSend(thePayload, serializationStart, getTime(), sendReason);
                                        serializationStart = getTime();
                                        theBatches = [theBatch][_DYN_CONCAT ](theBatches);
                                        thePayload = null;
                                    }
                                    else if (thePayload.overflow !== null) {
                                        theBatches = [thePayload.overflow][_DYN_CONCAT ](theBatches);
                                        thePayload.overflow = null;
                                        _doPayloadSend(thePayload, serializationStart, getTime(), sendReason);
                                        serializationStart = getTime();
                                        thePayload = null;
                                    }
                                }
                                else {
                                    droppedBatches[_DYN_PUSH ](theBatch);
                                }
                            }
                        }
                        if (thePayload) {
                            _doPayloadSend(thePayload, serializationStart, getTime(), sendReason);
                        }
                        if (theBatches[_DYN_LENGTH$1 ] > 0) {
                            _batchQueue = theBatches[_DYN_CONCAT ](_batchQueue);
                        }
                        _sendBatchesNotification(droppedBatches, 8004 , sendType);
                    }, function () { return ({ batches: _createDebugBatches(orgBatches_1), retryCount: retryCount, isTeardown: isTeardown, isSynchronous: isSynchronous_1, sendReason: sendReason, useSendBeacon: _isBeaconPayload(sendType), sendType: sendType }); }, !isSynchronous_1);
                }
                catch (ex) {
                    _throwInternal(_logger, 2 , 48 , "Unexpected Exception sending batch: " + dumpObj(ex));
                }
            }
            function _buildRequestDetails(thePayload, useHeaders) {
                var requestDetails = {
                    url: _urlString,
                    hdrs: {},
                    useHdrs: false
                };
                if (!useHeaders) {
                    objForEachKey(_headers, function (name, value) {
                        if (_collectorHeaderToQs[name]) {
                            _addRequestDetails(requestDetails, _collectorHeaderToQs[name], value, false);
                        }
                        else {
                            requestDetails[_DYN_HDRS ][name] = value;
                            requestDetails[_DYN_USE_HDRS ] = true;
                        }
                    });
                }
                else {
                    requestDetails[_DYN_HDRS ] = extend(requestDetails[_DYN_HDRS ], _headers);
                    requestDetails.useHdrs = (objKeys(requestDetails.hdrs)[_DYN_LENGTH$1 ] > 0);
                }
                _addRequestDetails(requestDetails, STR_CLIENT_ID, "NO_AUTH", useHeaders);
                _addRequestDetails(requestDetails, STR_CLIENT_VERSION, FullVersionString, useHeaders);
                var apiQsKeys = STR_EMPTY;
                arrForEach(thePayload.apiKeys, function (apiKey) {
                    if (apiQsKeys[_DYN_LENGTH$1 ] > 0) {
                        apiQsKeys += ",";
                    }
                    apiQsKeys += apiKey;
                });
                _addRequestDetails(requestDetails, STR_API_KEY, apiQsKeys, useHeaders);
                _addRequestDetails(requestDetails, STR_UPLOAD_TIME, utcNow().toString(), useHeaders);
                var msfpc = _getMsfpc(thePayload);
                if (isValueAssigned(msfpc)) {
                    requestDetails.url += "&ext.intweb.msfpc=" + msfpc;
                }
                if (_clockSkewManager.shouldAddClockSkewHeaders()) {
                    _addRequestDetails(requestDetails, STR_TIME_DELTA_TO_APPLY, _clockSkewManager.getClockSkewHeaderValue(), useHeaders);
                }
                if (_core[_DYN_GET_WPARAM ]) {
                    var wParam = _core[_DYN_GET_WPARAM ]();
                    if (wParam >= 0) {
                        requestDetails.url += "&w=" + wParam;
                    }
                }
                for (var i = 0; i < _queryStringParameters[_DYN_LENGTH$1 ]; i++) {
                    requestDetails.url += "&" + _queryStringParameters[i].name + "=" + _queryStringParameters[i].value;
                }
                return requestDetails;
            }
            function _setTimingValue(timings, name, value) {
                timings[name] = timings[name] || {};
                timings[name][_postManager.identifier] = value;
            }
            function _doPayloadSend(thePayload, serializationStart, serializationCompleted, sendReason) {
                if (thePayload && thePayload.payloadBlob && thePayload.payloadBlob[_DYN_LENGTH$1 ] > 0) {
                    var useSendHook_1 = !!_sendHook;
                    var sendInterface_1 = _sendInterfaces[thePayload.sendType];
                    if (!_isBeaconPayload(thePayload[_DYN_SEND_TYPE ]) && thePayload[_DYN_IS_BEACON ] && thePayload.sendReason === 2 ) {
                        sendInterface_1 = _sendInterfaces[2 ] || _sendInterfaces[3 ] || sendInterface_1;
                    }
                    var useHeaders_1 = _useHeaders;
                    if (thePayload.isBeacon || sendInterface_1[_DYN__TRANSPORT ] === 3 ) {
                        useHeaders_1 = false;
                    }
                    var requestDetails_1 = _buildRequestDetails(thePayload, useHeaders_1);
                    useHeaders_1 = useHeaders_1 || requestDetails_1[_DYN_USE_HDRS ];
                    var sendEventStart_1 = getTime();
                    doPerf(_core, function () { return "HttpManager:_doPayloadSend"; }, function () {
                        var _a;
                        for (var batchLp = 0; batchLp < thePayload.batches[_DYN_LENGTH$1 ]; batchLp++) {
                            var theBatch = thePayload[_DYN_BATCHES ][batchLp];
                            var theEvents = theBatch[_DYN_EVENTS ]();
                            for (var evtLp = 0; evtLp < theEvents[_DYN_LENGTH$1 ]; evtLp++) {
                                var telemetryItem = theEvents[evtLp];
                                if (_enableEventTimings) {
                                    var timings = telemetryItem[_DYN_TIMINGS ] = telemetryItem[_DYN_TIMINGS ] || {};
                                    _setTimingValue(timings, "sendEventStart", sendEventStart_1);
                                    _setTimingValue(timings, "serializationStart", serializationStart);
                                    _setTimingValue(timings, "serializationCompleted", serializationCompleted);
                                }
                                telemetryItem[strSendAttempt] > 0 ? telemetryItem[strSendAttempt]++ : telemetryItem[strSendAttempt] = 1;
                            }
                        }
                        _sendBatchesNotification(thePayload[_DYN_BATCHES ], (1000  + (sendReason || 0 )), thePayload[_DYN_SEND_TYPE ], true);
                        var orgPayloadData = (_a = {
                                data: thePayload[_DYN_PAYLOAD_BLOB ],
                                urlString: requestDetails_1.url,
                                headers: requestDetails_1[_DYN_HDRS ],
                                _thePayload: thePayload,
                                _sendReason: sendReason,
                                timeout: _xhrTimeout
                            },
                            _a[_DYN_DISABLE_XHR_SYNC ] = _disableXhrSync,
                            _a[_DYN_DISABLE_FETCH_KEEP_A3 ] = _disableFetchKeepAlive,
                            _a);
                        if (useHeaders_1) {
                            if (!_hasHeader(orgPayloadData[_DYN_HEADERS ], STR_CACHE_CONTROL)) {
                                orgPayloadData[_DYN_HEADERS ][STR_CACHE_CONTROL] = DEFAULT_CACHE_CONTROL;
                            }
                            if (!_hasHeader(orgPayloadData[_DYN_HEADERS ], STR_CONTENT_TYPE_HEADER)) {
                                orgPayloadData[_DYN_HEADERS ][STR_CONTENT_TYPE_HEADER] = DEFAULT_CONTENT_TYPE;
                            }
                        }
                        var sender = null;
                        if (sendInterface_1) {
                            sender = function (payload) {
                                _clockSkewManager.firstRequestSent();
                                var onComplete = function (status, headers) {
                                    _retryRequestIfNeeded(status, headers, thePayload, sendReason);
                                };
                                var isSync = thePayload[_DYN_IS_TEARDOWN ] || thePayload.isSync;
                                _sendPostMgr.preparePayload(function (processedPayload) {
                                    try {
                                        sendInterface_1.sendPOST(processedPayload, onComplete, isSync);
                                        if (_sendListener) {
                                            _sendListener(orgPayloadData, processedPayload, isSync, thePayload[_DYN_IS_BEACON ]);
                                        }
                                    }
                                    catch (ex) {
                                        _doOnComplete(onComplete, 0, {});
                                        _warnToConsole(_logger, "Unexpected exception sending payload. Ex:" + dumpObj(ex));
                                    }
                                }, _zipPayload, payload, isSync);
                            };
                        }
                        doPerf(_core, function () { return "HttpManager:_doPayloadSend.sender"; }, function () {
                            if (sender) {
                                if (thePayload[_DYN_SEND_TYPE ] === 0 ) {
                                    _outstandingRequests++;
                                }
                                if (useSendHook_1 && !thePayload.isBeacon && sendInterface_1[_DYN__TRANSPORT ] !== 3 ) {
                                    var hookData_1 = {
                                        data: orgPayloadData.data,
                                        urlString: orgPayloadData.urlString,
                                        headers: extend({}, orgPayloadData[_DYN_HEADERS ]),
                                        timeout: orgPayloadData.timeout,
                                        disableXhrSync: orgPayloadData[_DYN_DISABLE_XHR_SYNC ],
                                        disableFetchKeepAlive: orgPayloadData[_DYN_DISABLE_FETCH_KEEP_A3 ]
                                    };
                                    var senderCalled_1 = false;
                                    doPerf(_core, function () { return "HttpManager:_doPayloadSend.sendHook"; }, function () {
                                        try {
                                            _sendHook(hookData_1, function (payload) {
                                                senderCalled_1 = true;
                                                if (!_customHttpInterface && !payload[_DYN__THE_PAYLOAD ]) {
                                                    payload[_DYN__THE_PAYLOAD ] = payload[_DYN__THE_PAYLOAD ] || orgPayloadData[_DYN__THE_PAYLOAD ];
                                                    payload[_DYN__SEND_REASON ] = payload[_DYN__SEND_REASON ] || orgPayloadData[_DYN__SEND_REASON ];
                                                }
                                                sender(payload);
                                            }, thePayload.isSync || thePayload[_DYN_IS_TEARDOWN ]);
                                        }
                                        catch (ex) {
                                            if (!senderCalled_1) {
                                                sender(orgPayloadData);
                                            }
                                        }
                                    });
                                }
                                else {
                                    sender(orgPayloadData);
                                }
                            }
                        });
                    }, function () { return ({ thePayload: thePayload, serializationStart: serializationStart, serializationCompleted: serializationCompleted, sendReason: sendReason }); }, thePayload.isSync);
                }
                if (thePayload.sizeExceed && thePayload.sizeExceed[_DYN_LENGTH$1 ] > 0) {
                    _sendBatchesNotification(thePayload.sizeExceed, 8003 , thePayload[_DYN_SEND_TYPE ]);
                }
                if (thePayload.failedEvts && thePayload.failedEvts[_DYN_LENGTH$1 ] > 0) {
                    _sendBatchesNotification(thePayload.failedEvts, 8002 , thePayload[_DYN_SEND_TYPE ]);
                }
            }
            function _addEventCompletedTimings(theEvents, sendEventCompleted) {
                if (_enableEventTimings) {
                    arrForEach(theEvents, function (theEvent) {
                        var timings = theEvent[_DYN_TIMINGS ] = theEvent[_DYN_TIMINGS ] || {};
                        _setTimingValue(timings, "sendEventCompleted", sendEventCompleted);
                    });
                }
            }
            function _retryRequestIfNeeded(status, headers, thePayload, sendReason) {
                var reason = 9000 ;
                var droppedBatches = null;
                var isRetrying = false;
                var backOffTrans = false;
                try {
                    var shouldRetry = true;
                    if (typeof status !== strShimUndefined) {
                        if (headers) {
                            _clockSkewManager.setClockSkew(headers[STR_TIME_DELTA_HEADER]);
                            var killDuration = headers[STR_KILL_DURATION_HEADER] || headers["kill-duration-seconds"];
                            arrForEach(_killSwitch[_DYN_SET_KILL_SWITCH_TENA9 ](headers[STR_KILL_TOKENS_HEADER], killDuration), function (killToken) {
                                arrForEach(thePayload[_DYN_BATCHES ], function (theBatch) {
                                    if (theBatch[_DYN_I_KEY ]() === killToken) {
                                        droppedBatches = droppedBatches || [];
                                        var removedEvents = theBatch[_DYN_SPLIT ](0);
                                        thePayload.numEvents -= removedEvents[_DYN_COUNT ]();
                                        droppedBatches[_DYN_PUSH ](removedEvents);
                                    }
                                });
                            });
                        }
                        if (status == 200 || status == 204) {
                            reason = 200 ;
                            return;
                        }
                        if (!retryPolicyShouldRetryForStatus(status) || thePayload.numEvents <= 0) {
                            shouldRetry = false;
                        }
                        reason = 9000  + (status % 1000);
                    }
                    if (shouldRetry) {
                        reason = 100 ;
                        var retryCount_1 = thePayload.retryCnt;
                        if (thePayload[_DYN_SEND_TYPE ] === 0 ) {
                            if (retryCount_1 < maxRequestRetriesBeforeBackoff) {
                                isRetrying = true;
                                _doAction(function () {
                                    if (thePayload[_DYN_SEND_TYPE ] === 0 ) {
                                        _outstandingRequests--;
                                    }
                                    _sendBatches(thePayload[_DYN_BATCHES ], retryCount_1 + 1, thePayload[_DYN_IS_TEARDOWN ], _isUnloading ? 2  : thePayload[_DYN_SEND_TYPE ], 5 );
                                }, _isUnloading, retryPolicyGetMillisToBackoffForRetry(retryCount_1));
                            }
                            else {
                                backOffTrans = true;
                                if (_isUnloading) {
                                    reason = 8001 ;
                                }
                            }
                        }
                    }
                }
                finally {
                    if (!isRetrying) {
                        _clockSkewManager.setClockSkew();
                        _handleRequestFinished(thePayload, reason, sendReason, backOffTrans);
                    }
                    _sendBatchesNotification(droppedBatches, 8004 , thePayload[_DYN_SEND_TYPE ]);
                }
            }
            function _handleRequestFinished(thePayload, batchReason, sendReason, backOffTrans) {
                try {
                    if (backOffTrans) {
                        _postManager[_DYN__BACK_OFF_TRANSMISSI10 ]();
                    }
                    var theBatches = thePayload[_DYN_BATCHES ];
                    if (batchReason === 200 ) {
                        theBatches = thePayload.sentEvts || thePayload[_DYN_BATCHES ];
                        if (!backOffTrans && !thePayload.isSync) {
                            _postManager._clearBackOff();
                        }
                        _addCompleteTimings(theBatches);
                    }
                    _sendBatchesNotification(theBatches, batchReason, thePayload[_DYN_SEND_TYPE ], true);
                }
                finally {
                    if (thePayload[_DYN_SEND_TYPE ] === 0 ) {
                        _outstandingRequests--;
                        if (sendReason !== 5 ) {
                            _self.sendQueuedRequests(thePayload[_DYN_SEND_TYPE ], sendReason);
                        }
                    }
                }
            }
            function _addCompleteTimings(theBatches) {
                if (_enableEventTimings) {
                    var sendEventCompleted_1 = getTime();
                    arrForEach(theBatches, function (theBatch) {
                        if (theBatch && theBatch[_DYN_COUNT ]() > 0) {
                            _addEventCompletedTimings(theBatch[_DYN_EVENTS ](), sendEventCompleted_1);
                        }
                    });
                }
            }
            function _doAction(cb, isSync, interval) {
                if (isSync) {
                    cb();
                }
                else {
                    _timeoutWrapper.set(cb, interval);
                }
            }
            function _getMsfpc(thePayload) {
                for (var lp = 0; lp < thePayload.batches[_DYN_LENGTH$1 ]; lp++) {
                    var msfpc = thePayload[_DYN_BATCHES ][lp].Msfpc();
                    if (msfpc) {
                        return encodeURIComponent(msfpc);
                    }
                }
                return STR_EMPTY;
            }
            function _handleCollectorResponse(responseText) {
                var responseHandlers = _responseHandlers;
                try {
                    for (var i = 0; i < responseHandlers[_DYN_LENGTH$1 ]; i++) {
                        try {
                            responseHandlers[i](responseText);
                        }
                        catch (e) {
                            _throwInternal(_logger, 1 , 519 , "Response handler failed: " + e);
                        }
                    }
                    if (responseText) {
                        var response = JSON.parse(responseText);
                        if (isValueAssigned(response.webResult) && isValueAssigned(response.webResult[STR_MSFPC])) {
                            _cookieMgr.set("MSFPC", response.webResult[STR_MSFPC], 365 * 86400);
                        }
                    }
                }
                catch (ex) {
                }
            }
            function _sendBatchesNotification(theBatches, batchReason, sendType, sendSync) {
                if (theBatches && theBatches[_DYN_LENGTH$1 ] > 0 && actions) {
                    var theAction_1 = actions[_getNotificationAction(batchReason)];
                    if (theAction_1) {
                        var isSyncRequest_1 = sendType !== 0 ;
                        doPerf(_core, function () { return "HttpManager:_sendBatchesNotification"; }, function () {
                            _doAction(function () {
                                try {
                                    theAction_1.call(actions, theBatches, batchReason, isSyncRequest_1, sendType);
                                }
                                catch (e) {
                                    _throwInternal(_logger, 1 , 74 , "send request notification failed: " + e);
                                }
                            }, sendSync || isSyncRequest_1, 0);
                        }, function () { return ({ batches: _createDebugBatches(theBatches), reason: batchReason, isSync: isSyncRequest_1, sendSync: sendSync, sendType: sendType }); }, !isSyncRequest_1);
                    }
                }
            }
            function _getNotificationAction(reason) {
                var action = _eventActionMap[reason];
                if (!isValueAssigned(action)) {
                    action = STR_OTHER;
                    if (reason >= 9000  && reason <= 9999 ) {
                        action = STR_RESPONSE_FAIL;
                    }
                    else if (reason >= 8000  && reason <= 8999 ) {
                        action = STR_DROPPED;
                    }
                    else if (reason >= 1000  && reason <= 1999 ) {
                        action = STR_SENDING;
                    }
                }
                return action;
            }
        });
    }
    HttpManager.__ieDyn=1;
    return HttpManager;
}());

var FlushCheckTimer = 0.250;
var MaxNumberEventPerBatch = 500;
var EventsDroppedAtOneTime = 20;
var MaxSendAttempts = 6;
var MaxSyncUnloadSendAttempts = 2;
var MaxBackoffCount = 4;
var MaxConnections = 2;
var MaxRequestRetriesBeforeBackoff = 1;
var MaxEventsLimitInMem = 10000;
var strEventsDiscarded = "eventsDiscarded";
var EMPTY_STR = "";
var undefValue$1 = undefined;
var defaultPostChannelConfig = objDeepFreeze({
    eventsLimitInMem: { isVal: isGreaterThanZero, v: MaxEventsLimitInMem },
    immediateEventLimit: { isVal: isGreaterThanZero, v: 500 },
    autoFlushEventsLimit: { isVal: isGreaterThanZero, v: 0 },
    disableAutoBatchFlushLimit: false,
    httpXHROverride: { isVal: isOverrideFn, v: undefValue$1 },
    overrideInstrumentationKey: undefValue$1,
    overrideEndpointUrl: undefValue$1,
    disableTelemetry: false,
    ignoreMc1Ms0CookieProcessing: false,
    setTimeoutOverride: undefValue$1,
    clearTimeoutOverride: undefValue$1,
    payloadPreprocessor: undefValue$1,
    payloadListener: undefValue$1,
    disableEventTimings: undefValue$1,
    valueSanitizer: undefValue$1,
    stringifyObjects: undefValue$1,
    enableCompoundKey: undefValue$1,
    disableOptimizeObj: false,
    fetchCredentials: undefValue$1,
    transports: undefValue$1,
    unloadTransports: undefValue$1,
    useSendBeacon: undefValue$1,
    disableFetchKeepAlive: undefValue$1,
    avoidOptions: false,
    xhrTimeout: undefValue$1,
    disableXhrSync: undefValue$1,
    alwaysUseXhrOverride: false,
    maxEventRetryAttempts: { isVal: isNumber, v: MaxSendAttempts },
    maxUnloadEventRetryAttempts: { isVal: isNumber, v: MaxSyncUnloadSendAttempts },
    addNoResponse: undefValue$1,
    maxEvtPerBatch: { isVal: isNumber, v: MaxNumberEventPerBatch },
    excludeCsMetaData: undefValue$1,
    requestLimit: {}
});
function isOverrideFn(httpXHROverride) {
    return httpXHROverride && httpXHROverride.sendPOST;
}
var PostChannel = /** @class */ (function (_super) {
    __extendsFn(PostChannel, _super);
    function PostChannel() {
        var _this = _super.call(this) || this;
        _this.identifier = "PostChannel";
        _this.priority = 1011;
        _this.version = '4.4.2';
        var _postConfig;
        var _isTeardownCalled = false;
        var _flushCallbackQueue = [];
        var _flushCallbackTimer;
        var _paused = false;
        var _immediateQueueSize = 0;
        var _immediateQueueSizeLimit;
        var _queueSize = 0;
        var _queueSizeLimit;
        var _profiles = {};
        var _currentProfile = RT_PROFILE;
        var _scheduledTimer;
        var _immediateTimer;
        var _currentBackoffCount;
        var _timerCount;
        var _httpManager;
        var _batchQueues;
        var _autoFlushEventsLimit;
        var _autoFlushBatchLimit;
        var _delayedBatchSendLatency;
        var _delayedBatchReason;
        var _optimizeObject;
        var _isPageUnloadTriggered;
        var _maxEventSendAttempts;
        var _maxUnloadEventSendAttempts;
        var _evtNamespace;
        var _timeoutWrapper;
        var _ignoreMc1Ms0CookieProcessing;
        var _disableAutoBatchFlushLimit;
        var _notificationManager;
        var _unloadHandlersAdded;
        var _overrideInstrumentationKey;
        var _disableTelemetry;
        var _maxEvtPerBatch;
        dynamicProto(PostChannel, _this, function (_self, _base) {
            _initDefaults();
            _self["_getDbgPlgTargets"] = function () {
                return [_httpManager, _postConfig];
            };
            _self[_DYN_INITIALIZE ] = function (theConfig, core, extensions) {
                doPerf(core, function () { return "PostChannel:initialize"; }, function () {
                    _base[_DYN_INITIALIZE ](theConfig, core, extensions);
                    _notificationManager = core.getNotifyMgr();
                    try {
                        _evtNamespace = mergeEvtNamespace(createUniqueNamespace(_self[_DYN_IDENTIFIER ]), core.evtNamespace && core.evtNamespace());
                        _self._addHook(onConfigChange(theConfig, function (details) {
                            var coreConfig = details.cfg;
                            var ctx = createProcessTelemetryContext(null, coreConfig, core);
                            _postConfig = ctx.getExtCfg(_self[_DYN_IDENTIFIER ], defaultPostChannelConfig);
                            _timeoutWrapper = createTimeoutWrapper(_postConfig[_DYN_SET_TIMEOUT_OVERRIDE ], _postConfig[_DYN_CLEAR_TIMEOUT_OVERRI0 ]);
                            _optimizeObject = !_postConfig.disableOptimizeObj && isChromium();
                            _ignoreMc1Ms0CookieProcessing = _postConfig[_DYN_IGNORE_MC1_MS0_COOKI11 ];
                            _hookWParam(core);
                            _queueSizeLimit = _postConfig.eventsLimitInMem;
                            _immediateQueueSizeLimit = _postConfig.immediateEventLimit;
                            _autoFlushEventsLimit = _postConfig[_DYN_AUTO_FLUSH_EVENTS_LI12 ];
                            _maxEventSendAttempts = _postConfig.maxEventRetryAttempts;
                            _maxUnloadEventSendAttempts = _postConfig.maxUnloadEventRetryAttempts;
                            _disableAutoBatchFlushLimit = _postConfig[_DYN_DISABLE_AUTO_BATCH_F13 ];
                            _maxEvtPerBatch = _postConfig.maxEvtPerBatch;
                            if (isPromiseLike(coreConfig.endpointUrl)) {
                                _self.pause();
                            }
                            else if (!!_paused) {
                                _self.resume();
                            }
                            _setAutoLimits();
                            _overrideInstrumentationKey = _postConfig[_DYN_OVERRIDE_INSTRUMENTA14 ];
                            _disableTelemetry = !!_postConfig.disableTelemetry;
                            if (_unloadHandlersAdded) {
                                _removeUnloadHandlers();
                            }
                            var excludePageUnloadEvents = coreConfig.disablePageUnloadEvents || [];
                            _unloadHandlersAdded = addPageUnloadEventListener(_handleUnloadEvents, excludePageUnloadEvents, _evtNamespace);
                            _unloadHandlersAdded = addPageHideEventListener(_handleUnloadEvents, excludePageUnloadEvents, _evtNamespace) || _unloadHandlersAdded;
                            _unloadHandlersAdded = addPageShowEventListener(_handleShowEvents, coreConfig.disablePageShowEvents, _evtNamespace) || _unloadHandlersAdded;
                        }));
                        _httpManager[_DYN_INITIALIZE ](theConfig, _self.core, _self);
                    }
                    catch (e) {
                        _self.setInitialized(false);
                        throw e;
                    }
                }, function () { return ({ theConfig: theConfig, core: core, extensions: extensions }); });
            };
            _self.processTelemetry = function (ev, itemCtx) {
                setProcessTelemetryTimings(ev, _self[_DYN_IDENTIFIER ]);
                itemCtx = itemCtx || _self._getTelCtx(itemCtx);
                var event = ev;
                if (!_disableTelemetry && !_isTeardownCalled) {
                    if (_overrideInstrumentationKey) {
                        event[_DYN_I_KEY ] = _overrideInstrumentationKey;
                    }
                    _addEventToQueues(event, true);
                    if (_isPageUnloadTriggered) {
                        _releaseAllQueues(2 , 2 );
                    }
                    else {
                        _scheduleTimer();
                    }
                }
                _self.processNext(event, itemCtx);
            };
            _self.getOfflineSupport = function () {
                try {
                    var details_1 = _httpManager && _httpManager[_DYN_GET_OFFLINE_REQUEST_6 ]();
                    if (_httpManager) {
                        return {
                            getUrl: function () {
                                if (details_1) {
                                    return details_1.url;
                                }
                                return null;
                            },
                            serialize: _serialize,
                            batch: _batch,
                            shouldProcess: function (evt) {
                                return !_disableTelemetry;
                            },
                            createPayload: function (evt) {
                                return null;
                            },
                            createOneDSPayload: function (evts) {
                                if (_httpManager[_DYN_CREATE_ONE_DSPAYLOAD ]) {
                                    return _httpManager[_DYN_CREATE_ONE_DSPAYLOAD ](evts, _optimizeObject);
                                }
                            }
                        };
                    }
                }
                catch (e) {
                }
                return null;
            };
            _self._doTeardown = function (unloadCtx, unloadState) {
                _releaseAllQueues(2 , 2 );
                _isTeardownCalled = true;
                _httpManager.teardown();
                _removeUnloadHandlers();
                _initDefaults();
            };
            function _removeUnloadHandlers() {
                removePageUnloadEventListener(null, _evtNamespace);
                removePageHideEventListener(null, _evtNamespace);
                removePageShowEventListener(null, _evtNamespace);
            }
            function _hookWParam(core) {
                var existingGetWParamMethod = core[_DYN_GET_WPARAM ];
                core[_DYN_GET_WPARAM ] = function () {
                    var wparam = 0;
                    if (_ignoreMc1Ms0CookieProcessing) {
                        wparam = wparam | 2;
                    }
                    return wparam | existingGetWParamMethod.call(core);
                };
            }
            function _batch(arr) {
                var rlt = EMPTY_STR;
                if (arr && arr[_DYN_LENGTH$1 ]) {
                    arrForEach(arr, function (item) {
                        if (rlt) {
                            rlt += "\n";
                        }
                        rlt += item;
                    });
                }
                return rlt;
            }
            function _serialize(event) {
                var rlt = EMPTY_STR;
                try {
                    _cleanEvent(event);
                    rlt = _httpManager[_DYN_SERIALIZE_OFFLINE_EV5 ](event);
                }
                catch (e) {
                }
                return rlt;
            }
            function _handleUnloadEvents(evt) {
                var theEvt = evt || getWindow().event;
                if (theEvt.type !== "beforeunload") {
                    _isPageUnloadTriggered = true;
                    _httpManager[_DYN_SET_UNLOADING ](_isPageUnloadTriggered);
                }
                _releaseAllQueues(2 , 2 );
            }
            function _handleShowEvents(evt) {
                _isPageUnloadTriggered = false;
                _httpManager[_DYN_SET_UNLOADING ](_isPageUnloadTriggered);
            }
            function _cleanEvent(event) {
                if (event.ext && event.ext[STR_TRACE]) {
                    delete (event.ext[STR_TRACE]);
                }
                if (event.ext && event.ext[STR_USER] && event.ext[STR_USER]["id"]) {
                    delete (event.ext[STR_USER]["id"]);
                }
                if (_optimizeObject) {
                    event.ext = optimizeObject(event.ext);
                    if (event.baseData) {
                        event.baseData = optimizeObject(event.baseData);
                    }
                    if (event.data) {
                        event.data = optimizeObject(event.data);
                    }
                }
            }
            function _addEventToQueues(event, append) {
                if (!event[_DYN_SEND_ATTEMPT ]) {
                    event[_DYN_SEND_ATTEMPT ] = 0;
                }
                if (!event[_DYN_LATENCY ]) {
                    event[_DYN_LATENCY ] = 1 ;
                }
                _cleanEvent(event);
                if (event[_DYN_SYNC ]) {
                    if (_currentBackoffCount || _paused) {
                        event[_DYN_LATENCY ] = 3 ;
                        event[_DYN_SYNC ] = false;
                    }
                    else {
                        if (_httpManager) {
                            if (_optimizeObject) {
                                event = optimizeObject(event);
                            }
                            _httpManager[_DYN_SEND_SYNCHRONOUS_BAT8 ](EventBatch.create(event[_DYN_I_KEY ], [event]), event[_DYN_SYNC ] === true ? 1  : event[_DYN_SYNC ], 3 );
                            return;
                        }
                    }
                }
                var evtLatency = event[_DYN_LATENCY ];
                var queueSize = _queueSize;
                var queueLimit = _queueSizeLimit;
                if (evtLatency === 4 ) {
                    queueSize = _immediateQueueSize;
                    queueLimit = _immediateQueueSizeLimit;
                }
                var eventDropped = false;
                if (queueSize < queueLimit) {
                    eventDropped = !_addEventToProperQueue(event, append);
                }
                else {
                    var dropLatency = 1 ;
                    var dropNumber = EventsDroppedAtOneTime;
                    if (evtLatency === 4 ) {
                        dropLatency = 4 ;
                        dropNumber = 1;
                    }
                    eventDropped = true;
                    if (_dropEventWithLatencyOrLess(event[_DYN_I_KEY ], event[_DYN_LATENCY ], dropLatency, dropNumber)) {
                        eventDropped = !_addEventToProperQueue(event, append);
                    }
                }
                if (eventDropped) {
                    _notifyEvents(strEventsDiscarded, [event], EventsDiscardedReason.QueueFull);
                }
            }
            _self.setEventQueueLimits = function (eventLimit, autoFlushLimit) {
                _postConfig.eventsLimitInMem = _queueSizeLimit = isGreaterThanZero(eventLimit) ? eventLimit : MaxEventsLimitInMem;
                _postConfig[_DYN_AUTO_FLUSH_EVENTS_LI12 ] = _autoFlushEventsLimit = isGreaterThanZero(autoFlushLimit) ? autoFlushLimit : 0;
                _setAutoLimits();
                var doFlush = _queueSize > eventLimit;
                if (!doFlush && _autoFlushBatchLimit > 0) {
                    for (var latency = 1 ; !doFlush && latency <= 3 ; latency++) {
                        var batchQueue = _batchQueues[latency];
                        if (batchQueue && batchQueue[_DYN_BATCHES ]) {
                            arrForEach(batchQueue[_DYN_BATCHES ], function (theBatch) {
                                if (theBatch && theBatch[_DYN_COUNT ]() >= _autoFlushBatchLimit) {
                                    doFlush = true;
                                }
                            });
                        }
                    }
                }
                _performAutoFlush(true, doFlush);
            };
            _self.pause = function () {
                _clearScheduledTimer();
                _paused = true;
                _httpManager && _httpManager.pause();
            };
            _self.resume = function () {
                _paused = false;
                _httpManager && _httpManager.resume();
                _scheduleTimer();
            };
            _self._loadTransmitProfiles = function (profiles) {
                _resetTransmitProfiles();
                objForEachKey(profiles, function (profileName, profileValue) {
                    var profLen = profileValue[_DYN_LENGTH$1 ];
                    if (profLen >= 2) {
                        var directValue = (profLen > 2 ? profileValue[2] : 0);
                        profileValue.splice(0, profLen - 2);
                        if (profileValue[1] < 0) {
                            profileValue[0] = -1;
                        }
                        if (profileValue[1] > 0 && profileValue[0] > 0) {
                            var timerMultiplier = profileValue[0] / profileValue[1];
                            profileValue[0] = mathCeil(timerMultiplier) * profileValue[1];
                        }
                        if (directValue >= 0 && profileValue[1] >= 0 && directValue > profileValue[1]) {
                            directValue = profileValue[1];
                        }
                        profileValue[_DYN_PUSH ](directValue);
                        _profiles[profileName] = profileValue;
                    }
                });
            };
            _self.flush = function (isAsync, callback, sendReason) {
                if (isAsync === void 0) { isAsync = true; }
                var result;
                if (!_paused) {
                    sendReason = sendReason || 1 ;
                    if (isAsync) {
                        if (!callback) {
                            result = createPromise$1(function (resolve) {
                                callback = resolve;
                            });
                        }
                        if (_flushCallbackTimer == null) {
                            _clearScheduledTimer();
                            _queueBatches(1 , 0 , sendReason);
                            _flushCallbackTimer = _createTimer(function () {
                                _flushCallbackTimer = null;
                                _flushImpl(callback, sendReason);
                            }, 0);
                        }
                        else {
                            _flushCallbackQueue[_DYN_PUSH ](callback);
                        }
                    }
                    else {
                        var cleared = _clearScheduledTimer();
                        _sendEventsForLatencyAndAbove(1 , 1 , sendReason);
                        callback && callback();
                        if (cleared) {
                            _scheduleTimer();
                        }
                    }
                }
                return result;
            };
            _self.setMsaAuthTicket = function (ticket) {
                _httpManager.addHeader(STR_MSA_DEVICE_TICKET, ticket);
            };
            _self.setAuthPluginHeader = function (token) {
                _httpManager.addHeader(STR_AUTH_WEB_TOKEN, token);
            };
            _self.removeAuthPluginHeader = function () {
                _httpManager.removeHeader(STR_AUTH_WEB_TOKEN);
            };
            _self.hasEvents = _hasEvents;
            _self._setTransmitProfile = function (profileName) {
                if (_currentProfile !== profileName && _profiles[profileName] !== undefined) {
                    _clearScheduledTimer();
                    _currentProfile = profileName;
                    _scheduleTimer();
                }
            };
            proxyFunctions(_self, function () { return _httpManager; }, ["addResponseHandler"]);
            function _sendEventsForLatencyAndAbove(latency, sendType, sendReason) {
                var queued = _queueBatches(latency, sendType, sendReason);
                _httpManager[_DYN_SEND_QUEUED_REQUESTS ](sendType, sendReason);
                return queued;
            }
            function _hasEvents() {
                return _queueSize > 0;
            }
            function _scheduleTimer() {
                if (_delayedBatchSendLatency >= 0 && _queueBatches(_delayedBatchSendLatency, 0 , _delayedBatchReason)) {
                    _httpManager[_DYN_SEND_QUEUED_REQUESTS ](0 , _delayedBatchReason);
                }
                if (_immediateQueueSize > 0 && !_immediateTimer && !_paused) {
                    var immediateTimeOut = _profiles[_currentProfile][2];
                    if (immediateTimeOut >= 0) {
                        _immediateTimer = _createTimer(function () {
                            _immediateTimer = null;
                            _sendEventsForLatencyAndAbove(4 , 0 , 1 );
                            _scheduleTimer();
                        }, immediateTimeOut);
                    }
                }
                var timeOut = _profiles[_currentProfile][1];
                if (!_scheduledTimer && !_flushCallbackTimer && timeOut >= 0 && !_paused) {
                    if (_hasEvents()) {
                        _scheduledTimer = _createTimer(function () {
                            _scheduledTimer = null;
                            _sendEventsForLatencyAndAbove(_timerCount === 0 ? 3  : 1 , 0 , 1 );
                            _timerCount++;
                            _timerCount %= 2;
                            _scheduleTimer();
                        }, timeOut);
                    }
                    else {
                        _timerCount = 0;
                    }
                }
            }
            _self[_DYN__BACK_OFF_TRANSMISSI10 ] = function () {
                if (_currentBackoffCount < MaxBackoffCount) {
                    _currentBackoffCount++;
                    _clearScheduledTimer();
                    _scheduleTimer();
                }
            };
            _self._clearBackOff = function () {
                if (_currentBackoffCount) {
                    _currentBackoffCount = 0;
                    _clearScheduledTimer();
                    _scheduleTimer();
                }
            };
            function _initDefaults() {
                _postConfig = null;
                _isTeardownCalled = false;
                _flushCallbackQueue = [];
                _flushCallbackTimer = null;
                _paused = false;
                _immediateQueueSize = 0;
                _immediateQueueSizeLimit = 500;
                _queueSize = 0;
                _queueSizeLimit = MaxEventsLimitInMem;
                _profiles = {};
                _currentProfile = RT_PROFILE;
                _scheduledTimer = null;
                _immediateTimer = null;
                _currentBackoffCount = 0;
                _timerCount = 0;
                _batchQueues = {};
                _autoFlushEventsLimit = 0;
                _unloadHandlersAdded = false;
                _autoFlushBatchLimit = 0;
                _delayedBatchSendLatency = -1;
                _delayedBatchReason = null;
                _optimizeObject = true;
                _isPageUnloadTriggered = false;
                _maxEventSendAttempts = MaxSendAttempts;
                _maxUnloadEventSendAttempts = MaxSyncUnloadSendAttempts;
                _evtNamespace = null;
                _overrideInstrumentationKey = null;
                _maxEvtPerBatch = null;
                _disableTelemetry = false;
                _timeoutWrapper = createTimeoutWrapper();
                _httpManager = new HttpManager(MaxNumberEventPerBatch, MaxConnections, MaxRequestRetriesBeforeBackoff, {
                    requeue: _requeueEvents,
                    send: _sendingEvent,
                    sent: _eventsSentEvent,
                    drop: _eventsDropped,
                    rspFail: _eventsResponseFail,
                    oth: _otherEvent
                });
                _initializeProfiles();
                _clearQueues();
                _setAutoLimits();
            }
            function _createTimer(theTimerFunc, timeOut) {
                if (timeOut === 0 && _currentBackoffCount) {
                    timeOut = 1;
                }
                var timerMultiplier = 1000;
                if (_currentBackoffCount) {
                    timerMultiplier = retryPolicyGetMillisToBackoffForRetry(_currentBackoffCount - 1);
                }
                return _timeoutWrapper.set(theTimerFunc, timeOut * timerMultiplier);
            }
            function _clearScheduledTimer() {
                if (_scheduledTimer !== null) {
                    _scheduledTimer.cancel();
                    _scheduledTimer = null;
                    _timerCount = 0;
                    return true;
                }
                return false;
            }
            function _releaseAllQueues(sendType, sendReason) {
                _clearScheduledTimer();
                if (_flushCallbackTimer) {
                    _flushCallbackTimer.cancel();
                    _flushCallbackTimer = null;
                }
                if (!_paused) {
                    _sendEventsForLatencyAndAbove(1 , sendType, sendReason);
                }
            }
            function _clearQueues() {
                _batchQueues[4 ] = {
                    batches: [],
                    iKeyMap: {}
                };
                _batchQueues[3 ] = {
                    batches: [],
                    iKeyMap: {}
                };
                _batchQueues[2 ] = {
                    batches: [],
                    iKeyMap: {}
                };
                _batchQueues[1 ] = {
                    batches: [],
                    iKeyMap: {}
                };
            }
            function _getEventBatch(iKey, latency, create) {
                var batchQueue = _batchQueues[latency];
                if (!batchQueue) {
                    latency = 1 ;
                    batchQueue = _batchQueues[latency];
                }
                var eventBatch = batchQueue.iKeyMap[iKey];
                if (!eventBatch && create) {
                    eventBatch = EventBatch.create(iKey);
                    batchQueue.batches[_DYN_PUSH ](eventBatch);
                    batchQueue.iKeyMap[iKey] = eventBatch;
                }
                return eventBatch;
            }
            function _performAutoFlush(isAsync, doFlush) {
                if (_httpManager[_DYN_CAN_SEND_REQUEST ]() && !_currentBackoffCount) {
                    if (_autoFlushEventsLimit > 0 && _queueSize > _autoFlushEventsLimit) {
                        doFlush = true;
                    }
                    if (doFlush && _flushCallbackTimer == null) {
                        _self.flush(isAsync, function () { }, 20 );
                    }
                }
            }
            function _addEventToProperQueue(event, append) {
                if (_optimizeObject) {
                    event = optimizeObject(event);
                }
                var latency = event[_DYN_LATENCY ];
                var eventBatch = _getEventBatch(event[_DYN_I_KEY ], latency, true);
                if (eventBatch.addEvent(event)) {
                    if (latency !== 4 ) {
                        _queueSize++;
                        if (append && event[_DYN_SEND_ATTEMPT ] === 0) {
                            _performAutoFlush(!event.sync, _autoFlushBatchLimit > 0 && eventBatch[_DYN_COUNT ]() >= _autoFlushBatchLimit);
                        }
                    }
                    else {
                        _immediateQueueSize++;
                    }
                    return true;
                }
                return false;
            }
            function _dropEventWithLatencyOrLess(iKey, latency, currentLatency, dropNumber) {
                while (currentLatency <= latency) {
                    var eventBatch = _getEventBatch(iKey, latency, true);
                    if (eventBatch && eventBatch[_DYN_COUNT ]() > 0) {
                        var droppedEvents = eventBatch[_DYN_SPLIT ](0, dropNumber);
                        var droppedCount = droppedEvents[_DYN_COUNT ]();
                        if (droppedCount > 0) {
                            if (currentLatency === 4 ) {
                                _immediateQueueSize -= droppedCount;
                            }
                            else {
                                _queueSize -= droppedCount;
                            }
                            _notifyBatchEvents(strEventsDiscarded, [droppedEvents], EventsDiscardedReason.QueueFull, undefined);
                            return true;
                        }
                    }
                    currentLatency++;
                }
                _resetQueueCounts();
                return false;
            }
            function _resetQueueCounts() {
                var immediateQueue = 0;
                var normalQueue = 0;
                var _loop_1 = function (latency) {
                    var batchQueue = _batchQueues[latency];
                    if (batchQueue && batchQueue[_DYN_BATCHES ]) {
                        arrForEach(batchQueue[_DYN_BATCHES ], function (theBatch) {
                            if (latency === 4 ) {
                                immediateQueue += theBatch[_DYN_COUNT ]();
                            }
                            else {
                                normalQueue += theBatch[_DYN_COUNT ]();
                            }
                        });
                    }
                };
                for (var latency = 1 ; latency <= 4 ; latency++) {
                    _loop_1(latency);
                }
                _queueSize = normalQueue;
                _immediateQueueSize = immediateQueue;
            }
            function _queueBatches(latency, sendType, sendReason) {
                var eventsQueued = false;
                var isAsync = sendType === 0 ;
                if (!isAsync || _httpManager[_DYN_CAN_SEND_REQUEST ]()) {
                    doPerf(_self.core, function () { return "PostChannel._queueBatches"; }, function () {
                        var droppedEvents = [];
                        var latencyToProcess = 4 ;
                        while (latencyToProcess >= latency) {
                            var batchQueue = _batchQueues[latencyToProcess];
                            if (batchQueue && batchQueue.batches && batchQueue.batches[_DYN_LENGTH$1 ] > 0) {
                                arrForEach(batchQueue[_DYN_BATCHES ], function (theBatch) {
                                    if (!_httpManager.addBatch(theBatch)) {
                                        droppedEvents = droppedEvents[_DYN_CONCAT ](theBatch[_DYN_EVENTS ]());
                                    }
                                    else {
                                        eventsQueued = eventsQueued || (theBatch && theBatch[_DYN_COUNT ]() > 0);
                                    }
                                    if (latencyToProcess === 4 ) {
                                        _immediateQueueSize -= theBatch[_DYN_COUNT ]();
                                    }
                                    else {
                                        _queueSize -= theBatch[_DYN_COUNT ]();
                                    }
                                });
                                batchQueue[_DYN_BATCHES ] = [];
                                batchQueue.iKeyMap = {};
                            }
                            latencyToProcess--;
                        }
                        if (droppedEvents[_DYN_LENGTH$1 ] > 0) {
                            _notifyEvents(strEventsDiscarded, droppedEvents, EventsDiscardedReason.KillSwitch);
                        }
                        if (eventsQueued && _delayedBatchSendLatency >= latency) {
                            _delayedBatchSendLatency = -1;
                            _delayedBatchReason = 0 ;
                        }
                    }, function () { return ({ latency: latency, sendType: sendType, sendReason: sendReason }); }, !isAsync);
                }
                else {
                    _delayedBatchSendLatency = _delayedBatchSendLatency >= 0 ? mathMin(_delayedBatchSendLatency, latency) : latency;
                    _delayedBatchReason = mathMax(_delayedBatchReason, sendReason);
                }
                return eventsQueued;
            }
            function _flushImpl(callback, sendReason) {
                _sendEventsForLatencyAndAbove(1 , 0 , sendReason);
                _resetQueueCounts();
                _waitForIdleManager(function () {
                    if (callback) {
                        callback();
                    }
                    if (_flushCallbackQueue[_DYN_LENGTH$1 ] > 0) {
                        _flushCallbackTimer = _createTimer(function () {
                            _flushCallbackTimer = null;
                            _flushImpl(_flushCallbackQueue.shift(), sendReason);
                        }, 0);
                    }
                    else {
                        _flushCallbackTimer = null;
                        _scheduleTimer();
                    }
                });
            }
            function _waitForIdleManager(callback) {
                if (_httpManager.isCompletelyIdle()) {
                    callback();
                }
                else {
                    _flushCallbackTimer = _createTimer(function () {
                        _flushCallbackTimer = null;
                        _waitForIdleManager(callback);
                    }, FlushCheckTimer);
                }
            }
            function _resetTransmitProfiles() {
                _clearScheduledTimer();
                _initializeProfiles();
                _currentProfile = RT_PROFILE;
                _scheduleTimer();
            }
            function _initializeProfiles() {
                _profiles = {};
                _profiles[RT_PROFILE] = [2, 1, 0];
                _profiles[NRT_PROFILE] = [6, 3, 0];
                _profiles[BE_PROFILE] = [18, 9, 0];
            }
            function _requeueEvents(batches, reason) {
                var droppedEvents = [];
                var maxSendAttempts = _maxEventSendAttempts;
                if (_isPageUnloadTriggered) {
                    maxSendAttempts = _maxUnloadEventSendAttempts;
                }
                arrForEach(batches, function (theBatch) {
                    if (theBatch && theBatch[_DYN_COUNT ]() > 0) {
                        arrForEach(theBatch[_DYN_EVENTS ](), function (theEvent) {
                            if (theEvent) {
                                if (theEvent[_DYN_SYNC ]) {
                                    theEvent[_DYN_LATENCY ] = 4 ;
                                    theEvent[_DYN_SYNC ] = false;
                                }
                                if (theEvent[_DYN_SEND_ATTEMPT ] < maxSendAttempts) {
                                    setProcessTelemetryTimings(theEvent, _self[_DYN_IDENTIFIER ]);
                                    _addEventToQueues(theEvent, false);
                                }
                                else {
                                    droppedEvents[_DYN_PUSH ](theEvent);
                                }
                            }
                        });
                    }
                });
                if (droppedEvents[_DYN_LENGTH$1 ] > 0) {
                    _notifyEvents(strEventsDiscarded, droppedEvents, EventsDiscardedReason.NonRetryableStatus);
                }
                if (_isPageUnloadTriggered) {
                    _releaseAllQueues(2 , 2 );
                }
            }
            function _callNotification(evtName, theArgs) {
                var manager = (_notificationManager || {});
                var notifyFunc = manager[evtName];
                if (notifyFunc) {
                    try {
                        notifyFunc.apply(manager, theArgs);
                    }
                    catch (e) {
                        _throwInternal(_self.diagLog(), 1 , 74 , evtName + " notification failed: " + e);
                    }
                }
            }
            function _notifyEvents(evtName, theEvents) {
                var extraArgs = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    extraArgs[_i - 2] = arguments[_i];
                }
                if (theEvents && theEvents[_DYN_LENGTH$1 ] > 0) {
                    _callNotification(evtName, [theEvents][_DYN_CONCAT ](extraArgs));
                }
            }
            function _notifyBatchEvents(evtName, batches) {
                var extraArgs = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    extraArgs[_i - 2] = arguments[_i];
                }
                if (batches && batches[_DYN_LENGTH$1 ] > 0) {
                    arrForEach(batches, function (theBatch) {
                        if (theBatch && theBatch[_DYN_COUNT ]() > 0) {
                            _callNotification(evtName, [theBatch.events()][_DYN_CONCAT ](extraArgs));
                        }
                    });
                }
            }
            function _sendingEvent(batches, reason, isSyncRequest) {
                if (batches && batches[_DYN_LENGTH$1 ] > 0) {
                    _callNotification("eventsSendRequest", [(reason >= 1000  && reason <= 1999  ?
                            reason - 1000  :
                            0 ), isSyncRequest !== true]);
                }
            }
            function _eventsSentEvent(batches, reason) {
                _notifyBatchEvents("eventsSent", batches, reason);
                _scheduleTimer();
            }
            function _eventsDropped(batches, reason, isSyncRequest, sendType) {
                _notifyBatchEvents(strEventsDiscarded, batches, (reason >= 8000  && reason <= 8999  ?
                    reason - 8000  :
                    EventsDiscardedReason.Unknown), sendType);
            }
            function _eventsResponseFail(batches, reason, isSyncRequest, sendType) {
                _notifyBatchEvents(strEventsDiscarded, batches, EventsDiscardedReason.NonRetryableStatus, sendType);
                _scheduleTimer();
            }
            function _otherEvent(batches, reason, isSyncRequest, sendType) {
                _notifyBatchEvents(strEventsDiscarded, batches, EventsDiscardedReason.Unknown, sendType);
                _scheduleTimer();
            }
            function _setAutoLimits() {
                if (!_disableAutoBatchFlushLimit) {
                    _autoFlushBatchLimit = mathMax(_maxEvtPerBatch * (MaxConnections + 1), _queueSizeLimit / 6);
                }
                else {
                    _autoFlushBatchLimit = 0;
                }
            }
        });
        return _this;
    }
    PostChannel.__ieDyn=1;
    return PostChannel;
}(BaseTelemetryPlugin));

var STR_DEVICE = "device";
var STR_LOCALE = "locale";
var STR_VER = "ver";
var STR_BROWSER = "browser";
var STR_BROWSER_VER = "browserVer";
var STR_POP_SAMPLE = "popSample";
var STR_EVENT_FLAGS = "eventFlags";
var STR_NAME = "name";
var STR_SERVICE_NAME = "serviceName";

var Extensions = createValueMap({
    UserExt: [0 , "user"],
    DeviceExt: [1 , STR_DEVICE],
    TraceExt: [2 , "trace"],
    WebExt: [3 , "web"],
    AppExt: [4 , "app"],
    OSExt: [5 , "os"],
    SdkExt: [6 , "sdk"],
    IntWebExt: [7 , "intweb"],
    UtcExt: [8 , "utc"],
    LocExt: [9 , "loc"],
    CloudExt: [10 , "cloud"],
    DtExt: [11 , "dt"]
});
var AppExtensionKeys = createValueMap({
    id: [0 , "id"],
    ver: [1 , STR_VER],
    appName: [2 , STR_NAME],
    locale: [3 , STR_LOCALE],
    expId: [4 , "expId"],
    env: [5 , "env"]
});
var WebExtensionKeys = createValueMap({
    domain: [0 , "domain"],
    browser: [1 , STR_BROWSER],
    browserVer: [2 , STR_BROWSER_VER],
    screenRes: [3 , "screenRes"],
    userConsent: [4 , "userConsent"],
    consentDetails: [5 , "consentDetails"]
});
var UserExtensionKeys = createValueMap({
    locale: [0 , STR_LOCALE],
    localId: [1 , "localId"],
    id: [2 , "id"]
});
var OSExtKeys = createValueMap({
    osName: [0 , STR_NAME],
    ver: [1 , STR_VER]
});
var SDKExtKeys = createValueMap({
    ver: [0 , STR_VER],
    seq: [1 , "seq"],
    installId: [2 , "installId"],
    epoch: [3 , "epoch"]
});
var IntWebExtKeys = createValueMap({
    msfpc: [0 , "msfpc"],
    anid: [1 , "anid"],
    serviceName: [2 , STR_SERVICE_NAME]
});
var UtcExtKeys = createValueMap({
    popSample: [0 , STR_POP_SAMPLE],
    eventFlags: [1 , STR_EVENT_FLAGS]
});
var LocExtKeys = createValueMap({
    tz: [0 , "tz"]
});
var SessionExtKeys = createValueMap({
    sessionId: [0 , "sesId"]
});
var DeviceExtKeys = createValueMap({
    localId: [0 , "localId"],
    deviceClass: [1 , "deviceClass"],
    make: [2 , "make"],
    model: [3 , "model"]
});
var CloudExtKeys = createValueMap({
    role: [0 , "role"],
    roleInstance: [1 , "roleInstance"],
    roleVer: [2 , "roleVer"]
});
var TraceExtKeys = createValueMap({
    traceId: [0 , "traceID"],
    traceName: [1 , STR_NAME],
    parentId: [2 , "parentID"]
});
var DistributedTraceExtKeys = createValueMap({
    traceId: [0 , "traceId"],
    spanId: [1 , "spanId"],
    traceFlags: [2 , "traceFlags"]
});

var _canUseLocalStorage;
function canUseLocalStorage() {
    if (_canUseLocalStorage === undefined) {
        _canUseLocalStorage = !!_getVerifiedStorageObject(0 );
    }
    return _canUseLocalStorage;
}
function _getLocalStorageObject() {
    if (canUseLocalStorage()) {
        return _getVerifiedStorageObject(0 );
    }
    return null;
}
function _getVerifiedStorageObject(storageType) {
    var storage = null;
    var fail;
    var uid;
    try {
        var global_1 = getGlobal();
        if (!global_1) {
            return null;
        }
        uid = new Date();
        storage = storageType === 0  ? global_1.localStorage : global_1.sessionStorage;
        if (storage && isFunction(storage.setItem)) {
            storage.setItem(uid, uid);
            fail = storage.getItem(uid) !== uid;
            storage.removeItem(uid);
            if (fail) {
                storage = null;
            }
        }
    }
    catch (exception) {
        storage = null;
    }
    return storage;
}
function setStorage(logger, name, data) {
    var storage = _getLocalStorageObject();
    if (storage !== null) {
        try {
            storage.setItem(name, data);
            return true;
        }
        catch (e) {
            _canUseLocalStorage = false;
            _throwInternal(logger, 1 , 504 , "Browser failed write to local storage. " + e);
        }
    }
    return false;
}
function getStorage(logger, name) {
    var storage = _getLocalStorageObject();
    if (storage !== null) {
        try {
            return storage.getItem(name);
        }
        catch (e) {
            _canUseLocalStorage = false;
            _throwInternal(logger, 1 , 503 , "Browser failed read of local storage. " + e);
        }
    }
    return null;
}

function _getId() {
    return this.getId();
}
function _setId(id) {
    this.setId(id);
}
var Session = /** @class */ (function () {
    function Session() {
        dynamicProto(Session, this, function (_self) {
            _self.setId = function (id) {
                _self.customId = id;
            };
            _self.getId = function () {
                if (isString(_self.customId)) {
                    return _self.customId;
                }
                else {
                    return _self.automaticId;
                }
            };
        });
    }
    Session._staticInit = (function () {
        objDefine(Session.prototype, "id", { g: _getId, s: _setId });
    })();
    return Session;
}());

var cookieNameConst = "ai_session";
var SessionManager = /** @class */ (function () {
    function SessionManager(core, propConfig, unloadHookContainer) {
        var _cookieUpdatedTimestamp;
        var _logger = safeGetLogger(core);
        var cookieMgr = safeGetCookieMgr(core);
        var _storageNamePrefix;
        var _config;
        dynamicProto(SessionManager, this, function (_self) {
            var unloadHook = onConfigChange(propConfig, function () {
                _config = propConfig;
                _self.config = _config;
            });
            unloadHookContainer && unloadHookContainer.add(unloadHook);
            _storageNamePrefix = function () { return _self.config.namePrefix ? cookieNameConst + _self.config.namePrefix : cookieNameConst; };
            _self.automaticSession = new Session();
            _self.update = function () {
                if (!_self.automaticSession.getId()) {
                    _initializeAutomaticSession();
                }
                var autoSession = _self.automaticSession;
                var config = _self.config;
                var now = new Date().getTime();
                var acquisitionExpired = now - autoSession.acquisitionDate > config.sessionExpirationMs;
                var renewalExpired = now - autoSession.renewalDate > config.sessionRenewalMs;
                if (acquisitionExpired || renewalExpired) {
                    _renew();
                }
                else {
                    var cookieUpdatedTimestamp = _cookieUpdatedTimestamp;
                    if (!cookieUpdatedTimestamp || now - cookieUpdatedTimestamp > SessionManager.cookieUpdateInterval) {
                        autoSession.renewalDate = now;
                        _setCookie(autoSession.getId(), autoSession.acquisitionDate, autoSession.renewalDate);
                    }
                }
            };
            _self.backup = function () {
                var automaticSession = _self.automaticSession;
                _setStorage(automaticSession.getId(), automaticSession.acquisitionDate, automaticSession.renewalDate);
            };
            function _initializeAutomaticSession() {
                var cookie = cookieMgr.get(_storageNamePrefix());
                if (cookie && isFunction(cookie.split)) {
                    _initializeAutomaticSessionWithData(cookie);
                }
                else {
                    var storage = getStorage(_logger, _storageNamePrefix());
                    if (storage) {
                        _initializeAutomaticSessionWithData(storage);
                    }
                }
                if (!_self.automaticSession.getId()) {
                    _renew();
                }
            }
            function _initializeAutomaticSessionWithData(sessionData) {
                var automaticSession = _self.automaticSession;
                var params = sessionData.split("|");
                if (params.length > 0) {
                    automaticSession.setId(params[0]);
                }
                try {
                    if (params.length > 1) {
                        var acq = +params[1];
                        automaticSession.acquisitionDate = +new Date(acq);
                        automaticSession.acquisitionDate = automaticSession.acquisitionDate > 0 ? automaticSession.acquisitionDate : 0;
                    }
                    if (params.length > 2) {
                        var renewal = +params[2];
                        automaticSession.renewalDate = +new Date(renewal);
                        automaticSession.renewalDate = automaticSession.renewalDate > 0 ? automaticSession.renewalDate : 0;
                    }
                }
                catch (e) {
                    _throwInternal(_logger, 1 , 510 , "Error parsing ai_session cookie, session will be reset: " + e);
                }
                if (automaticSession.renewalDate === 0) {
                    _throwInternal(_logger, 2 , 517 , "AI session renewal date is 0, session will be reset.");
                }
            }
            function _renew() {
                var automaticSession = _self.automaticSession;
                var now = new Date().getTime();
                var sessionAsGuid = _self.config.sessionAsGuid;
                if (!isUndefined(sessionAsGuid) && sessionAsGuid) {
                    if (!isBoolean(sessionAsGuid)) {
                        automaticSession.setId(createGuid(sessionAsGuid));
                    }
                    else {
                        automaticSession.setId(createGuid());
                    }
                }
                else {
                    automaticSession.setId(newId(_config.idLength || 22));
                }
                automaticSession.acquisitionDate = now;
                automaticSession.renewalDate = now;
                _setCookie(automaticSession.getId(), automaticSession.acquisitionDate, automaticSession.renewalDate);
                if (!canUseLocalStorage()) {
                    _throwInternal(_logger, 2 , 505 , "Browser does not support local storage. Session durations will be inaccurate.");
                }
            }
            function _setCookie(guid, acq, renewal) {
                var acquisitionExpiry = acq + _self.config.sessionExpirationMs;
                var renewalExpiry = renewal + _self.config.sessionRenewalMs;
                var cookieExpiry = new Date();
                var cookie = [guid, acq, renewal];
                if (acquisitionExpiry < renewalExpiry) {
                    cookieExpiry.setTime(acquisitionExpiry);
                }
                else {
                    cookieExpiry.setTime(renewalExpiry);
                }
                var cookieDomain = _self.config.cookieDomain || null;
                cookieMgr.set(_storageNamePrefix(), cookie.join("|") + ";expires=" + cookieExpiry.toUTCString(), null, cookieDomain);
                _cookieUpdatedTimestamp = new Date().getTime();
            }
            function _setStorage(guid, acq, renewal) {
                setStorage(_logger, _storageNamePrefix(), [guid, acq, renewal].join("|"));
            }
        });
    }
    SessionManager.cookieUpdateInterval = 60000;
    return SessionManager;
}());

var defaultFlightIdNameSpaces = [
    "AX",
    "EX",
    "SF",
    "CS",
    "CF",
    "CT",
    "CU",
    "DC",
    "DF",
    "H5",
    "HL",
    "WS",
    "WP"
];
function _validateAppExpId(appExpIdNew, flightIdNameSpaces) {
    if (flightIdNameSpaces === void 0) { flightIdNameSpaces = defaultFlightIdNameSpaces; }
    var appExpId = null;
    if (appExpIdNew) {
        var expIdArray = appExpIdNew.split(",");
        for (var i = 0; i < expIdArray.length; i++) {
            if (_isValidAppFlightId(expIdArray[i], flightIdNameSpaces)) {
                if (!appExpId) {
                    appExpId = expIdArray[i];
                }
                else {
                    appExpId += "," + expIdArray[i];
                }
            }
        }
    }
    return appExpId;
}
function _isValidAppFlightId(appFlightId, flightIdNameSpaces) {
    if (flightIdNameSpaces === void 0) { flightIdNameSpaces = defaultFlightIdNameSpaces; }
    if (!appFlightId || appFlightId.length < 4) {
        return false;
    }
    var isValid = false;
    var MAXFLIGHTIDLENGTH = 256;
    var curNameSpace = (appFlightId.substring(0, 3)).toString().toUpperCase();
    for (var i = 0; i < flightIdNameSpaces.length; i++) {
        if (flightIdNameSpaces[i] + ":" === curNameSpace && appFlightId.length <= MAXFLIGHTIDLENGTH) {
            isValid = true;
            break;
        }
    }
    return isValid;
}
function _getExpId() {
    return this.getExpId();
}
var Application = /** @class */ (function () {
    function Application(propertiesConfig, core, unloadHookContainer) {
        var _appExpId = null;
        var flightIdNameSpaces = defaultFlightIdNameSpaces.slice(0);
        var expIdCookieName = "Treatments";
        var _cookieMgr;
        var _propertiesConfig = null;
        dynamicProto(Application, this, function (_self) {
            _populateDefaults(propertiesConfig);
            if (hasDocument()) {
                var documentElement = getDocument().documentElement;
                if (documentElement) {
                    _self.locale = documentElement.lang;
                }
            }
            _self.getExpId = function () {
                return _propertiesConfig.expId ? _readExpIdFromCoreData(_propertiesConfig.expId) : _readExpIdFromCookie();
            };
            function _getMetaDataFromDOM(prefix) {
                var metaElements;
                var metaData = {};
                var doc = getDocument();
                if (doc) {
                    metaElements = doc && doc.querySelectorAll("meta");
                    for (var i = 0; i < metaElements.length; i++) {
                        var meta = metaElements[i];
                        if (meta.name) {
                            var mt = meta.name.toLowerCase();
                            if (mt.indexOf(prefix) === 0) {
                                var name = meta.name.replace(prefix, "");
                                metaData[name] = meta.content;
                            }
                        }
                    }
                }
                return metaData;
            }
            function _setAppExpId(appExpIdNew) {
                if (appExpIdNew === _appExpId) {
                    return;
                }
                _appExpId = _validateAppExpId(appExpIdNew, flightIdNameSpaces);
            }
            function _readExpIdFromCookie() {
                var cookieValue = getCookieValue(_cookieMgr, expIdCookieName);
                _setAppExpId(cookieValue);
                return _appExpId;
            }
            function _readExpIdFromCoreData(expId) {
                _setAppExpId(expId);
                return _appExpId;
            }
            function _populateDefaults(config) {
                var unloadHook = onConfigChange(config, function () {
                    _cookieMgr = core && core.getCookieMgr();
                    _propertiesConfig = config || {};
                    _self.env = _propertiesConfig.env || _getMetaDataFromDOM("awa-")["env"];
                });
                unloadHookContainer && unloadHookContainer.add(unloadHook);
            }
        });
    }
    Application.validateAppExpId = _validateAppExpId;
    Application._staticInit = (function () {
        objDefine(Application.prototype, "expId", { g: _getExpId });
    })();
    return Application;
}());

var Cloud = /** @class */ (function () {
    function Cloud() {
    }
    return Cloud;
}());

var Device = /** @class */ (function () {
    function Device() {
    }
    return Device;
}());

function _getMsfpc() {
    return this.getMsfpc();
}
function _getAnid() {
    return this.getAnid();
}
var IntWeb = /** @class */ (function () {
    function IntWeb(propertiesConfig, core, unloadHookContainer) {
        var _cookieMgr;
        dynamicProto(IntWeb, this, function (_self) {
            _populateDefaults(propertiesConfig);
            _self.getMsfpc = function () {
                return getCookieValue(_cookieMgr, "MSFPC");
            };
            _self.getAnid = function () {
                return getCookieValue(_cookieMgr, "ANON").slice(0, 34);
            };
            function _populateDefaults(config) {
                var unloadHook = onConfigChange(config, function () {
                    _cookieMgr = core && core.getCookieMgr();
                    var _config = config || {};
                    if (_config.serviceName) {
                        _self.serviceName = _config.serviceName;
                    }
                });
                unloadHookContainer && unloadHookContainer.add(unloadHook);
            }
        });
    }
    IntWeb._staticInit = (function () {
        var proto = IntWeb.prototype;
        objDefine(proto, "msfpc", { g: _getMsfpc });
        objDefine(proto, "anid", { g: _getAnid });
    })();
    return IntWeb;
}());

var Loc = /** @class */ (function () {
    function Loc() {
        var timeZone = new Date().getTimezoneOffset();
        var minutes = timeZone % 60;
        var hours = (timeZone - minutes) / 60;
        var timeZonePrefix = "+";
        if (hours > 0) {
            timeZonePrefix = "-";
        }
        hours = Math.abs(hours);
        minutes = Math.abs(minutes);
        this.tz = timeZonePrefix + (hours < 10 ? "0" + hours : hours.toString()) + ":"
            + (minutes < 10 ? "0" + minutes : minutes.toString());
    }
    return Loc;
}());

var OSNAMEREGEX = {
    WIN: /(windows|win32)/i,
    WINRT: / arm;/i,
    WINPHONE: /windows\sphone\s\d+\.\d+/i,
    OSX: /(macintosh|mac os x)/i,
    IOS: /(ipad|iphone|ipod)(?=.*like mac os x)/i,
    LINUX: /(linux|joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)/i,
    ANDROID: /android/i,
    CROS: /CrOS/i
};
var VERSION_MAPPINGS = {
    "5.1": "XP",
    "6.0": "Vista",
    "6.1": "7",
    "6.2": "8",
    "6.3": "8.1",
    "10.0": "10"
};
var REGEX_VERSION$1 = "([\\d,.]+)";
var REGEX_VERSION_MAC = "([\\d,_,.]+)";
var UNKNOWN$1 = "Unknown";
var OSNAMES = [
    { r: OSNAMEREGEX.WINPHONE, os: "Windows Phone" },
    { r: OSNAMEREGEX.WINRT, os: "Windows RT" },
    { r: OSNAMEREGEX.WIN, os: "Windows"  },
    { r: OSNAMEREGEX.IOS, os: "iOS"  },
    { r: OSNAMEREGEX.ANDROID, os: "Android"  },
    { r: OSNAMEREGEX.LINUX, os: "Linux" },
    { r: OSNAMEREGEX.CROS, os: "Chrome OS" },
    { s: "x11", os: "Unix" },
    { s: "blackberry", os: "BlackBerry" },
    { s: "symbian", os: "Symbian" },
    { s: "nokia", os: "Nokia" },
    { r: OSNAMEREGEX.OSX, os: "Mac OS X"  }
];
function _getOsName(lowerCaseUserAgent) {
    for (var lp = 0; lp < OSNAMES.length; lp++) {
        var match = OSNAMES[lp];
        if (match.r && lowerCaseUserAgent.match(match.r)) {
            return match.os;
        }
        else if (match.s && lowerCaseUserAgent.indexOf(match.s) !== -1) {
            return match.os;
        }
    }
    return UNKNOWN$1;
}
function _getOsVersion(userAgent, osName) {
    if (osName === "Windows" ) {
        return _getGenericOsVersion(userAgent, "Windows NT");
    }
    if (osName === "Android" ) {
        return _getGenericOsVersion(userAgent, osName);
    }
    if (osName === "Mac OS X" ) {
        return _getMacOsxVersion(userAgent);
    }
    if (osName === "iOS" ) {
        return _getIosVersion(userAgent);
    }
    return UNKNOWN$1;
}
function _getGenericOsVersion(userAgent, osName) {
    var ntVersionMatches = userAgent.match(new RegExp(osName + " " + REGEX_VERSION$1));
    if (ntVersionMatches) {
        if (VERSION_MAPPINGS[ntVersionMatches[1]]) {
            return VERSION_MAPPINGS[ntVersionMatches[1]];
        }
        return ntVersionMatches[1];
    }
    return UNKNOWN$1;
}
function _getMacOsxVersion(userAgent) {
    var macOsxVersionInUserAgentMatches = userAgent.match(new RegExp("Mac OS X"  + " " + REGEX_VERSION_MAC));
    if (macOsxVersionInUserAgentMatches) {
        var versionString = macOsxVersionInUserAgentMatches[1].replace(/_/g, ".");
        if (versionString) {
            var delimiter = _getDelimiter(versionString);
            if (delimiter) {
                var components = versionString.split(delimiter);
                return components[0];
            }
            else {
                return versionString;
            }
        }
    }
    return UNKNOWN$1;
}
function _getIosVersion(userAgent) {
    var iosVersionInUserAgentMatches = userAgent.match(new RegExp("OS " + REGEX_VERSION_MAC));
    if (iosVersionInUserAgentMatches) {
        var versionString = iosVersionInUserAgentMatches[1].replace(/_/g, ".");
        if (versionString) {
            var delimiter = _getDelimiter(versionString);
            if (delimiter) {
                var components = versionString.split(delimiter);
                return components[0];
            }
            else {
                return versionString;
            }
        }
    }
    return UNKNOWN$1;
}
function _getDelimiter(versionString) {
    if (versionString.indexOf(".") > -1) {
        return ".";
    }
    if (versionString.indexOf("_") > -1) {
        return "_";
    }
    return null;
}
var OperatingSystem = /** @class */ (function () {
    function OperatingSystem(propertiesConfig, unloadHookContainer) {
        var self = this;
        var _config;
        var _name = null;
        var _ver = null;
        var _userName = null;
        var _userVer = null;
        var _setSysName = function (value) {
            _userName = value;
        };
        var _setSysVer = function (value) {
            _userVer = value;
        };
        var _getSysName = function () {
            return _userName || _name;
        };
        var _getSysVer = function () {
            return _userVer || _ver;
        };
        var unloadHook = onConfigChange(propertiesConfig, function () {
            _config = propertiesConfig || {};
            if (_config.populateOperatingSystemInfo) {
                var theNav = getNavigator() || {};
                var userAgent = propertiesConfig.userAgent || theNav.userAgent || "";
                var userAgentDataPlatform = (propertiesConfig.userAgentData || {}).platform || (theNav.userAgentData || {}).platform;
                if (userAgent) {
                    var osName = _getOsName(userAgent.toLowerCase());
                    _name = osName;
                    _ver = _getOsVersion(userAgent, osName);
                }
                if ((!_name || _name === UNKNOWN$1) && isString(userAgentDataPlatform)) {
                    _name = userAgentDataPlatform;
                }
            }
        });
        unloadHookContainer && unloadHookContainer.add(unloadHook);
        objDefine(self, "name", { s: _setSysName, g: _getSysName });
        objDefine(self, "ver", { s: _setSysVer, g: _getSysVer });
    }
    return OperatingSystem;
}());

var DEVICE_ID_COOKIE = "MicrosoftApplicationsTelemetryDeviceId";
function _saveData(mgr, propertyStorage, name, value) {
    if (propertyStorage) {
        propertyStorage.setProperty(name, value);
    }
    else {
        mgr.set(name, value, 31536000);
    }
}
function _getData(mgr, propertyStorage, name) {
    if (propertyStorage) {
        return propertyStorage.getProperty(name) || "";
    }
    return getCookieValue(mgr, name);
}
var Sdk = /** @class */ (function () {
    function Sdk(coreConfig, core, unloadHookContainer) {
        var _sequenceId = 0;
        var _cookieMgr;
        dynamicProto(Sdk, this, function (_self) {
            _self.seq = _sequenceId;
            _self.epoch = random32(false).toString();
            _self.getSequenceId = function () {
                return ++_sequenceId;
            };
            var unloadHook = onConfigChange(coreConfig, function (details) {
                _cookieMgr = core && core.getCookieMgr();
                var coreConfig = details.cfg;
                var propertyStorage = coreConfig.propertyStorageOverride;
                var cookieMgrEnabled = _cookieMgr.isEnabled();
                if (cookieMgrEnabled || propertyStorage) {
                    var deviceId = _getData(_cookieMgr, propertyStorage, DEVICE_ID_COOKIE);
                    if (!deviceId) {
                        deviceId = newGuid();
                    }
                    _saveData(_cookieMgr, propertyStorage, DEVICE_ID_COOKIE, deviceId);
                    _self.installId = deviceId;
                }
                else {
                    _cookieMgr.purge(DEVICE_ID_COOKIE);
                }
            });
            unloadHookContainer && unloadHookContainer.add(unloadHook);
        });
    }
    Sdk.__ieDyn=1;
    return Sdk;
}());

var strSetLocalId = "setLocalId";
function _getLocalId() {
    return this.getLocalId();
}
function _setLocalId(value) {
    this[strSetLocalId](value);
}
var User = /** @class */ (function () {
    function User(coreConfig, propertiesConfig, core, unloadHookContainer) {
        var _propertiesConfig;
        var _customLocalId;
        var _cookieMgr;
        dynamicProto(User, this, function (_self) {
            _populateDefaults(propertiesConfig);
            if (typeof navigator !== strShimUndefined) {
                var nav = navigator;
                _self.locale = nav.userLanguage || nav.language;
            }
            _self.getLocalId = function () {
                if (_customLocalId) {
                    return _customLocalId;
                }
                return _populateMuidFromCookie();
            };
            _self[strSetLocalId] = function (value) {
                _customLocalId = value;
            };
            function _populateMuidFromCookie() {
                if (!_propertiesConfig.hashIdentifiers && !_propertiesConfig.dropIdentifiers) {
                    var muidValue = getCookieValue(_cookieMgr, "MUID");
                    if (muidValue) {
                        _customLocalId = "t:" + muidValue;
                    }
                }
                return _customLocalId;
            }
            function _populateDefaults(config) {
                var unloadHook = onConfigChange(config, function () {
                    _cookieMgr = core && core.getCookieMgr();
                    _propertiesConfig = config;
                    _customLocalId = null;
                    if (_cookieMgr && _cookieMgr.isEnabled()) {
                        _populateMuidFromCookie();
                        if (_propertiesConfig.enableApplicationInsightsUser) {
                            var aiUser = getCookieValue(_cookieMgr, User.userCookieName);
                            if (aiUser) {
                                var params = aiUser.split(User.cookieSeparator);
                                if (params.length > 0) {
                                    _self.id = params[0];
                                }
                            }
                            if (!_self.id) {
                                _self.id = newId((coreConfig && !isUndefined(coreConfig.idLength)) ? coreConfig.idLength : 22);
                                var acqStr = toISOString(new Date());
                                _self.accountAcquisitionDate = acqStr;
                                var newCookie = [_self.id, acqStr];
                                var cookieDomain = _propertiesConfig.cookieDomain ? _propertiesConfig.cookieDomain : undefined;
                                _cookieMgr.set(User.userCookieName, newCookie.join(User.cookieSeparator), 31536000, cookieDomain);
                            }
                        }
                    }
                });
                unloadHookContainer && unloadHookContainer.add(unloadHook);
            }
        });
    }
    User.cookieSeparator = "|";
    User.userCookieName = "ai_user";
    User._staticInit = (function () {
        objDefine(User.prototype, "localId", { g: _getLocalId, s: _setLocalId });
    })();
    return User;
}());

var HASH_IDENTIFIERS_FLAG = 0x100000;
var DROP_IDENTIFIERS_FLAG = 0x200000;
var SCRUB_IP_FLAG = 0x400000;
var Utc = /** @class */ (function () {
    function Utc(propertiesConfig, unloadHookContainer) {
        var self = this;
        self.popSample = 100;
        var unloadHook = onConfigChange(propertiesConfig, function () {
            self.eventFlags = 0;
            if (propertiesConfig.hashIdentifiers) {
                self.eventFlags = self.eventFlags | HASH_IDENTIFIERS_FLAG;
            }
            if (propertiesConfig.dropIdentifiers) {
                self.eventFlags = self.eventFlags | DROP_IDENTIFIERS_FLAG;
            }
            if (propertiesConfig.scrubIpOnly) {
                self.eventFlags = self.eventFlags | SCRUB_IP_FLAG;
            }
        });
        unloadHookContainer && unloadHookContainer.add(unloadHook);
    }
    return Utc;
}());

var USER_CONSENT_DETAILS = [
    "Required", "Analytics", "SocialMedia", "Advertising"
];
var REGEX_VERSION = "([\\d,.]+)";
var UNKNOWN = "Unknown";
var EDGE_CHROMIUM = "Edg/";
var EDGE_IOS = "EdgiOS/";
var USER_AGENTS = [
    { ua: "OPR/", b: "Opera"  },
    { ua: "PhantomJS" , b: "PhantomJS"  },
    { ua: "Edge" , b: "Edge"  },
    { ua: EDGE_CHROMIUM, b: "Edge"  },
    { ua: EDGE_IOS, b: "Edge"  },
    { ua: "Electron" , b: "Electron"  },
    { ua: "Chrome" , b: "Chrome"  },
    { ua: "Trident", b: "MSIE"  },
    { ua: "MSIE ", b: "MSIE"  },
    { ua: "Firefox" , b: "Firefox"  },
    { ua: "Safari" , b: "Safari"  },
    { ua: "SkypeShell" , b: "SkypeShell"  }
];
var BRANDS = [
    { br: "Microsoft Edge", b: "Edge"  },
    { br: "Google Chrome", b: "Chrome"  },
    { br: "Opera", b: "Opera"  }
];
function _userAgentContainsString(searchString, userAgent) {
    return userAgent.indexOf(searchString) > -1;
}
function _getBrandVersion(match, brands) {
    for (var lp = 0; lp < brands.length; lp++) {
        if (match == brands[lp].brand) {
            return brands[lp].version;
        }
    }
    return null;
}
function _getBrowserName(userAgent) {
    if (userAgent) {
        for (var lp = 0; lp < USER_AGENTS.length; lp++) {
            var ua = USER_AGENTS[lp].ua;
            if (_userAgentContainsString(ua, userAgent)) {
                return USER_AGENTS[lp].b;
            }
        }
    }
    return UNKNOWN;
}
function _getBrowserVersion(userAgent, browserName) {
    if (browserName === "MSIE" ) {
        return _getIeVersion(userAgent);
    }
    return _getOtherVersion(browserName, userAgent);
}
function _getIeVersion(userAgent) {
    var classicIeVersionMatches = userAgent.match(new RegExp("MSIE"  + " " + REGEX_VERSION));
    if (classicIeVersionMatches) {
        return classicIeVersionMatches[1];
    }
    var ieVersionMatches = userAgent.match(new RegExp("rv:" + REGEX_VERSION));
    if (ieVersionMatches) {
        return ieVersionMatches[1];
    }
}
function _getOtherVersion(browserString, userAgent) {
    if (browserString === "Safari" ) {
        browserString = "Version";
    }
    else if (browserString === "Edge" ) {
        if (_userAgentContainsString(EDGE_CHROMIUM, userAgent)) {
            browserString = "Edg";
        }
        else if (_userAgentContainsString(EDGE_IOS, userAgent)) {
            browserString = "EdgiOS";
        }
    }
    var matches = userAgent.match(new RegExp(browserString + "/" + REGEX_VERSION));
    if (matches) {
        return matches[1];
    }
    if (browserString === "Opera" ) {
        matches = userAgent.match(new RegExp("OPR/" + REGEX_VERSION));
        if (matches) {
            return matches[1];
        }
    }
    return UNKNOWN;
}
function _getScreenResolution() {
    var screenRes = { h: 0, w: 0 };
    var win = getWindow();
    if (win && win.screen) {
        screenRes.h = screen.height;
        screenRes.w = screen.width;
    }
    return screenRes;
}
function _getUserConsent() {
    return this.getUserConsent();
}
var Web = /** @class */ (function () {
    function Web(propertiesConfig, core, unloadHookContainer) {
        safeGetCookieMgr(core);
        var _propertiesConfig = propertiesConfig || {};
        var _userAgent = null;
        var _userAgentBrands = null;
        var _userBrowser = null;
        var _userBrowserVer = null;
        var _browser = null;
        var _browserVer = null;
        var _gpcDataSharingOption = null;
        dynamicProto(Web, this, function (_self) {
            _populateDefaults(propertiesConfig);
            var windowLocation = getLocation();
            if (windowLocation) {
                var domain = windowLocation.hostname;
                if (domain) {
                    _self.domain = windowLocation.protocol === "file:" ? "local" : domain;
                }
            }
            var screenRes = _getScreenResolution();
            _self.screenRes = screenRes.w + "X" + screenRes.h;
            _self.getUserConsent = function () {
                return false;
            };
            _self.getUserConsentDetails = function () {
                var consentDetails = null;
                try {
                    var callback = _propertiesConfig.callback;
                    if (callback && callback.userConsentDetails) {
                        var result = callback.userConsentDetails();
                        if (result) {
                            if (_propertiesConfig.disableConsentDetailsSanitize) {
                                consentDetails = result;
                            }
                            else {
                                consentDetails = {};
                            }
                            for (var lp = 0; lp < USER_CONSENT_DETAILS.length; lp++) {
                                var key = USER_CONSENT_DETAILS[lp];
                                consentDetails[key] = result[key] || false;
                            }
                        }
                    }
                    if (_gpcDataSharingOption !== null) {
                        consentDetails = consentDetails || {};
                        consentDetails.GPC_DataSharingOptIn = !!_gpcDataSharingOption;
                    }
                    return consentDetails ? JSON.stringify(consentDetails) : null;
                }
                catch (e) {
                }
            };
            function _parseUserAgent(userAgent, userAgentBrands) {
                if (isArray(userAgentBrands)) {
                    try {
                        for (var lp = 0; lp < BRANDS.length; lp++) {
                            var version = _getBrandVersion(BRANDS[lp].br, userAgentBrands);
                            if (version) {
                                _browser = BRANDS[lp].b;
                                _browserVer = version;
                                return;
                            }
                        }
                    }
                    catch (e) {
                    }
                }
                if (userAgent) {
                    var browserName = _getBrowserName(userAgent);
                    _browser = browserName;
                    _browserVer = _getBrowserVersion(userAgent, browserName);
                }
            }
            function _setBrowser(value) {
                _userBrowser = value;
            }
            function _setBrowserVer(value) {
                _userBrowserVer = value;
            }
            function _getBrowser() {
                return _userBrowser || _browser;
            }
            function _getBrowserVer() {
                return _userBrowserVer || _browserVer;
            }
            var _getGpcDataSharing = function () {
                return _gpcDataSharingOption;
            };
            var _setGpcDataSharing = function (value) {
                _gpcDataSharingOption = isBoolean(value) ? value : null;
                _propertiesConfig.gpcDataSharingOptIn = _gpcDataSharingOption;
            };
            function _populateDefaults(config) {
                var unloadHook = onConfigChange(config, function () {
                    _propertiesConfig = config;
                    if (_propertiesConfig.populateBrowserInfo) {
                        var userAgent = _propertiesConfig.userAgent;
                        var userAgentBrands = (_propertiesConfig.userAgentData || {}).brands;
                        if (userAgent !== _userAgent || userAgentBrands !== _userAgentBrands) {
                            if (!userAgent || !userAgentBrands || userAgentBrands.length === 0) {
                                var theNav = getNavigator();
                                if (theNav) {
                                    userAgent = userAgent || theNav.userAgent || "";
                                    userAgentBrands = userAgentBrands || (theNav.userAgentData || {}).brands;
                                }
                            }
                            _parseUserAgent(userAgent, userAgentBrands);
                            _userAgent = userAgent;
                            _userAgentBrands = userAgentBrands;
                        }
                    }
                    _gpcDataSharingOption = isBoolean(_propertiesConfig.gpcDataSharingOptIn) ? _propertiesConfig.gpcDataSharingOptIn : null;
                });
                unloadHookContainer && unloadHookContainer.add(unloadHook);
            }
            objDefineProps(_self, {
                "userConsent": { g: _self.getUserConsent },
                "browser": { s: _setBrowser, g: _getBrowser },
                "browserVer": { s: _setBrowserVer, g: _getBrowserVer },
                "gpcDataSharingOptIn": { g: _getGpcDataSharing, s: _setGpcDataSharing }
            });
        });
    }
    Web._staticInit = (function () {
        objDefine(Web.prototype, "userConsent", { g: _getUserConsent });
    })();
    return Web;
}());

function _applyExtValues(theEvent, extension, names, map, overwriteTarget) {
    var target = theEvent.ext[Extensions[extension]];
    if (target) {
        try {
            objForEachKey(map, function (field, value) {
                if (isString(value) || isNumber(value) || isBoolean(value)) {
                    var targetValue = target[names[field]];
                    if (!overwriteTarget && (targetValue || isString(targetValue) || isNumber(targetValue) || isBoolean(targetValue))) {
                        value = targetValue;
                    }
                    target[names[field]] = value;
                }
            });
        }
        catch (e) {
        }
    }
    return target;
}
function _applyValue(target, name, value, overwriteTarget) {
    if (target) {
        if (isString(value) || isNumber(value) || isBoolean(value)) {
            var targetValue = target[name];
            if (!overwriteTarget && (targetValue || isString(targetValue) || isNumber(targetValue) || isBoolean(targetValue))) {
                value = targetValue;
            }
            target[name] = value;
        }
    }
    return target;
}
function _getTraceCtx(itemCtx, defaultCore) {
    var core = defaultCore;
    var traceCtx = null;
    if (itemCtx && itemCtx.core) {
        core = itemCtx.core() || defaultCore;
    }
    if (core && core.getTraceCtx) {
        traceCtx = core.getTraceCtx() || null;
    }
    return traceCtx;
}
function createTelemetryContext(coreConfig, propertiesConfig, core, unloadHookContainer) {
    var app = new Application(propertiesConfig, core, unloadHookContainer);
    var cloud = new Cloud();
    var user = new User(coreConfig, propertiesConfig, core, unloadHookContainer);
    var os = new OperatingSystem(propertiesConfig, unloadHookContainer);
    var web = new Web(propertiesConfig, core, unloadHookContainer);
    var _sdk = new Sdk(coreConfig, core, unloadHookContainer);
    var _intWeb = new IntWeb(propertiesConfig, core, unloadHookContainer);
    var _utc = new Utc(propertiesConfig, unloadHookContainer);
    var loc = new Loc();
    var device = new Device();
    var _sessionManager = new SessionManager(core, propertiesConfig, unloadHookContainer);
    var session = new Session();
    var _overwriteEventPartA = !(propertiesConfig || {}).eventContainExtFields;
    function _getSessionId() {
        if (session && isString(session.customId)) {
            return session.customId;
        }
        _sessionManager.update();
        var autoSession = _sessionManager.automaticSession;
        if (autoSession) {
            var autoId = autoSession.getId();
            if (autoId && isString(autoId)) {
                session.automaticId = autoId;
            }
        }
        return session.automaticId;
    }
    var _parentId;
    var unloadHook = onConfigChange(propertiesConfig, function () {
        var _config = propertiesConfig;
        var traceCtx = _getTraceCtx(null, core);
        if (_config.enableDistributedTracing && !_parentId) {
            _parentId = generateW3CId().substring(0, 16);
        }
        if (traceCtx) {
            traceCtx.spanId = traceCtx.spanId || _parentId;
        }
    });
    unloadHookContainer && unloadHookContainer.add(unloadHook);
    var ctx = {
        app: null,
        user: null,
        os: null,
        web: null,
        session: null,
        device: null,
        cloud: null,
        loc: null,
        getTraceCtx: function (itemCtx) {
            return _getTraceCtx(itemCtx, core);
        },
        getSessionId: _getSessionId,
        applyApplicationContext: function (theEvent, itemCtx) {
            var _a;
            return _applyExtValues(theEvent, 4 , AppExtensionKeys, (_a = {},
                _a[0 ] = app.id,
                _a[1 ] = app.ver,
                _a[2 ] = app.name,
                _a[3 ] = app.locale,
                _a[4 ] = app.getExpId(),
                _a[5 ] = app.env,
                _a), _overwriteEventPartA);
        },
        applyUserContext: function (theEvent, itemCtx) {
            var _a;
            return _applyExtValues(theEvent, 0 , UserExtensionKeys, (_a = {},
                _a[1 ] = user.getLocalId(),
                _a[0 ] = user.locale,
                _a[2 ] = user.id,
                _a), _overwriteEventPartA);
        },
        applyWebContext: function (theEvent, itemCtx) {
            var _a;
            return _applyExtValues(theEvent, 3 , WebExtensionKeys, (_a = {},
                _a[0 ] = web.domain,
                _a[1 ] = web.browser,
                _a[2 ] = web.browserVer,
                _a[3 ] = web.screenRes,
                _a[5 ] = web.getUserConsentDetails(),
                _a[4 ] = false,
                _a), _overwriteEventPartA);
        },
        applyOsContext: function (theEvent, itemCtx) {
            var _a;
            return _applyExtValues(theEvent, 5 , OSExtKeys, (_a = {},
                _a[0 ] = os.name,
                _a[1 ] = os.ver,
                _a), _overwriteEventPartA);
        },
        applySdkContext: function (theEvent, itemCtx) {
            var _a;
            return _applyExtValues(theEvent, 6 , SDKExtKeys, (_a = {},
                _a[2 ] = _sdk.installId,
                _a[1 ] = _sdk.getSequenceId(),
                _a[3 ] = _sdk.epoch,
                _a), _overwriteEventPartA);
        },
        applyIntWebContext: function (theEvent, itemCtx) {
            var _a;
            return _applyExtValues(theEvent, 7 , IntWebExtKeys, (_a = {},
                _a[0 ] = _intWeb.getMsfpc(),
                _a[1 ] = _intWeb.getAnid(),
                _a[2 ] = _intWeb.serviceName,
                _a), _overwriteEventPartA);
        },
        applyUtcContext: function (event, itemCtx) {
            var _a;
            var utcFields = (_a = {},
                _a[0 ] = _utc.popSample,
                _a);
            if (_utc.eventFlags > 0) {
                utcFields[1 ] = _utc.eventFlags;
            }
            _applyExtValues(event, 8 , UtcExtKeys, utcFields, _overwriteEventPartA);
        },
        applyLocContext: function (theEvent, itemCtx) {
            var _a;
            return _applyExtValues(theEvent, 9 , LocExtKeys, (_a = {},
                _a[0 ] = loc.tz,
                _a), _overwriteEventPartA);
        },
        applySessionContext: function (theEvent, itemCtx) {
            var _a;
            return _applyExtValues(theEvent, 4 , SessionExtKeys, (_a = {},
                _a[0 ] = _getSessionId(),
                _a), _overwriteEventPartA);
        },
        applyDeviceContext: function (theEvent, itemCtx) {
            var _a;
            return _applyExtValues(theEvent, 1 , DeviceExtKeys, (_a = {},
                _a[0 ] = device.localId,
                _a[2 ] = device.make,
                _a[3 ] = device.model,
                _a[1 ] = device.deviceClass,
                _a), _overwriteEventPartA);
        },
        applyCloudContext: function (theEvent, itemCtx) {
            var _a;
            return _applyExtValues(theEvent, 10 , CloudExtKeys, (_a = {},
                _a[0 ] = cloud.role,
                _a[1 ] = cloud.roleInstance,
                _a[2 ] = cloud.roleVer,
                _a), _overwriteEventPartA);
        },
        applyAITraceContext: function (event, itemCtx) {
            var _a;
            if (propertiesConfig.enableApplicationInsightsTrace) {
                var distributedTrace = _getTraceCtx(itemCtx, core);
                if (distributedTrace) {
                    _applyExtValues(event, 2 , TraceExtKeys, (_a = {},
                        _a[0 ] = distributedTrace.traceId,
                        _a[1 ] = distributedTrace.pageName,
                        _a[2 ] = distributedTrace.spanId || _parentId,
                        _a), false);
                }
            }
        },
        applyDistributedTraceContext: function (event, itemCtx) {
            var _a;
            var distributedTrace = _getTraceCtx(itemCtx, core);
            if (distributedTrace && propertiesConfig.enableDistributedTracing) {
                var traceFields = (_a = {},
                    _a[0 ] = distributedTrace.traceId,
                    _a[1 ] = distributedTrace.spanId || _parentId,
                    _a);
                var traceFlags = distributedTrace.getTraceFlags();
                if (!isNullOrUndefined(traceFlags)) {
                    traceFields[2 ] = traceFlags;
                }
                _applyExtValues(event, 11 , DistributedTraceExtKeys, traceFields, false);
                var parentCtx = distributedTrace.parentCtx;
                var traceState = distributedTrace.traceState;
                if (parentCtx || traceState) {
                    var partB = event.baseData = event.baseData || {};
                    if (parentCtx) {
                        var parentSpanId = parentCtx.spanId;
                        if (parentSpanId && parentSpanId !== traceFields[1 ]) {
                            _applyValue(partB, "parentId", parentSpanId, false);
                        }
                    }
                    if (traceState && !traceState.isEmpty) {
                        _applyValue(partB, "traceState", traceState.hdrs(1), false);
                    }
                }
            }
        }
    };
    return objDefineProps(ctx, {
        app: { g: function () { return app; }, s: function (value) { app = value; } },
        user: { g: function () { return user; }, s: function (value) { user = value; } },
        os: { g: function () { return os; }, s: function (value) { os = value; } },
        web: { g: function () { return web; }, s: function (value) { web = value; } },
        session: { g: function () { return session; }, s: function (value) { session = value; } },
        device: { g: function () { return device; }, s: function (value) { device = value; } },
        cloud: { g: function () { return cloud; }, s: function (value) { cloud = value; } },
        loc: { g: function () { return loc; }, s: function (value) { loc = value; } }
    });
}

var undefValue;
var extensions = [
    Extensions[4 ],
    Extensions[0 ],
    Extensions[3 ],
    Extensions[5 ],
    Extensions[6 ],
    Extensions[7 ],
    Extensions[8 ],
    Extensions[9 ],
    Extensions[1 ],
    Extensions[2 ],
    Extensions[11 ],
    Extensions[10 ]
];
var defaultPropertyConfig = objDeepFreeze({
    populateBrowserInfo: false,
    populateOperatingSystemInfo: false,
    userAgent: cfgDfString(),
    userAgentData: cfgDfMerge({
        brands: undefValue,
        mobile: undefValue,
        platform: undefValue
    }),
    userConsentCookieName: cfgDfString(),
    userConsented: false,
    serviceName: cfgDfString(),
    env: cfgDfString(),
    expId: cfgDfString(),
    sessionRenewalMs: 1800000,
    sessionExpirationMs: 86400000,
    sessionAsGuid: null,
    cookieDomain: cfgDfString(),
    namePrefix: cfgDfString(),
    enableApplicationInsightsTrace: false,
    enableApplicationInsightsUser: false,
    hashIdentifiers: false,
    dropIdentifiers: false,
    scrubIpOnly: false,
    callback: cfgDfMerge({
        userConsentDetails: null
    }),
    gpcDataSharingOptIn: undefValue,
    idLength: 22,
    enableDistributedTracing: false,
    eventContainExtFields: false
});
var PropertiesPlugin = /** @class */ (function (_super) {
    __extendsFn(PropertiesPlugin, _super);
    function PropertiesPlugin() {
        var _this = _super.call(this) || this;
        _this.identifier = "SystemPropertiesCollector";
        _this.priority = 3;
        _this.version = '4.4.2';
        var _context;
        var _properties;
        var _config;
        dynamicProto(PropertiesPlugin, _this, function (_self, _base) {
            _initDefaults();
            _self.initialize = function (coreConfig, core, extensions) {
                _base.initialize(coreConfig, core, extensions);
                _populateDefaults(coreConfig);
            };
            _self.processTelemetry = function (event, itemCtx) {
                setProcessTelemetryTimings(event, _self.identifier);
                itemCtx = _self._getTelCtx(itemCtx);
                var evtExt = event.ext = event.ext ? event.ext : {};
                event.data = event.data ? event.data : {};
                arrForEach(extensions, function (value) {
                    evtExt[value] = evtExt[value] || {};
                });
                if (_context) {
                    _context.applyUtcContext(event, itemCtx);
                    _context.applyApplicationContext(event, itemCtx);
                    _context.applyUserContext(event, itemCtx);
                    _context.applyWebContext(event, itemCtx);
                    _context.applyOsContext(event, itemCtx);
                    _context.applySdkContext(event, itemCtx);
                    _context.applyIntWebContext(event, itemCtx);
                    _context.applyLocContext(event, itemCtx);
                    _context.applySessionContext(event, itemCtx);
                    _context.applyDeviceContext(event, itemCtx);
                    if (_config.enableApplicationInsightsTrace) {
                        _context.applyAITraceContext(event, itemCtx);
                    }
                    if (_config.enableDistributedTracing) {
                        _context.applyDistributedTraceContext(event, itemCtx);
                    }
                    _context.applyCloudContext(event, itemCtx);
                }
                arrForEach(objKeys(evtExt), function (key) {
                    if (objKeys(evtExt[key]).length === 0) {
                        delete evtExt[key];
                    }
                });
                _addPropertiesIfAbsent(_properties, event.data);
                _self.processNext(event, itemCtx);
            };
            _self.getPropertiesContext = function () {
                return _context;
            };
            _self.setProperty = function (name, value) {
                _properties[name] = value;
            };
            _self._doTeardown = function (unloadCtx, unloadState) {
                var core = (unloadCtx || {}).core();
                if (core && core.getTraceCtx && _context) {
                    var traceCtx = core.getTraceCtx(false);
                    if (traceCtx && traceCtx === _context.getTraceCtx()) {
                        core.setTraceCtx(null);
                    }
                }
                _initDefaults();
            };
            _self["_getDbgPlgTargets"] = function () {
                return [_config];
            };
            function _initDefaults() {
                _context = null;
                _properties = {};
            }
            function _populateDefaults(config) {
                var identifier = _self.identifier;
                var core = _self.core;
                _self._addHook(onConfigChange(config, function () {
                    var ctx = createProcessTelemetryContext(null, config, core);
                    _config = ctx.getExtCfg(identifier, defaultPropertyConfig);
                }));
                _context = createTelemetryContext(config, _config, core, _self._unloadHooks);
                if (core && core.setTraceCtx) {
                    core.setTraceCtx(_context.getTraceCtx());
                }
            }
            function _addPropertiesIfAbsent(inputMap, outputMap) {
                if (inputMap) {
                    objForEachKeySafe(inputMap, function (name, inputValue) {
                        if (!outputMap[name]) {
                            outputMap[name] = inputValue;
                        }
                    });
                }
            }
        });
        return _this;
    }
    PropertiesPlugin.__ieDyn=1;
    return PropertiesPlugin;
}(BaseTelemetryPlugin));

var MSCONTENT_PARTB_VERSION = "1.0";
var CONTENT_VERSION = "2.0";
var MAX_CONTENTNAME_LENGTH = 200;

var doNotTrackFieldName = "data-bi-dnt";
var manualTrackOnlyFieldName = "data-bi-mto";
function _removeInvalidElements(object) {
    objForEachKey(object, function (property, value) {
        if (!isValueAssigned(value) ||
            (JSON.stringify(value) === "{}" && (property !== "callback"))) {
            delete object[property];
        }
    });
}
function _getIntersectionArea(rect1, rect2) {
    var x11 = rect1.left;
    var y11 = rect1.top;
    var x12 = rect1.right;
    var y12 = rect1.bottom;
    var x21 = rect2.left;
    var y21 = rect2.top;
    var x22 = rect2.right;
    var y22 = rect2.bottom;
    var xOverlap = Math.max(0, Math.min(x12, x22) - Math.max(x11, x21));
    var yOverlap = Math.max(0, Math.min(y12, y22) - Math.max(y11, y21));
    return xOverlap * yOverlap;
}
function _findClosestAnchor(element) {
    return _walkUpDomChainWithElementValidation(element, _isElementAnAnchor);
}
function _walkUpDomChainWithElementValidation(el, validationMethod, validationMethodParam) {
    var element = el;
    if (element) {
        element = _returnDomObjectIfjQuery(element);
        while (!validationMethod(element, validationMethodParam)) {
            element = element.parentNode;
            element = _returnDomObjectIfjQuery(element);
            if (!element || !(element.getAttribute)) {
                return null;
            }
        }
        return element;
    }
}
function _isElementAnAnchor(element) {
    return element.nodeName === "A";
}
function _returnDomObjectIfjQuery(element) {
    return element;
}
function _isElementTrulyVisible(element, viewportBoundingRect) {
    element = _returnDomObjectIfjQuery(element);
    var rect = element.getBoundingClientRect();
    var intersectionArea = _getIntersectionArea(rect, viewportBoundingRect);
    if (intersectionArea > 0) {
        return true;
    }
    else {
        return false;
    }
}
function _extractFieldFromObject(obj, fieldName) {
    var fieldValue;
    if (obj && obj[fieldName]) {
        fieldValue = obj[fieldName];
        delete obj[fieldName];
    }
    return fieldValue;
}
function _isRightClick(evt) {
    if ("which" in evt) {
        return (evt.which === 3);
    }
    else if ("button" in evt) {
        return (evt.button === 2);
    }
}
function _isLeftClick(evt) {
    if ("which" in evt) {
        return (evt.which === 1);
    }
    else if ("button" in evt) {
        return (evt.button === 1);
    }
}
function _isMiddleClick(evt) {
    if ("which" in evt) {
        return (evt.which === 2);
    }
    else if ("button" in evt) {
        return (evt.button === 4);
    }
}
function _isKeyboardEnter(evt) {
    if ("keyCode" in evt) {
        return (evt.keyCode === 13);
    }
}
function _isKeyboardSpace(evt) {
    if ("keyCode" in evt) {
        return (evt.keyCode === 32);
    }
}
function _isElementDnt(element, deprecated) {
    var dntElement = _findClosestByAttribute(element, doNotTrackFieldName);
    if (!isValueAssigned(dntElement)) {
        return false;
    }
    return true;
}
function _isClickTelemetryAllowed(element, overrideValues) {
    if (overrideValues &&
        overrideValues.isAuto &&
        isValueAssigned(_findClosestByAttribute(element, manualTrackOnlyFieldName))) {
        return false;
    }
    if (_isElementDnt(element)) {
        return false;
    }
    return true;
}
function _findClosestByAttribute(el, attribute) {
    return _walkUpDomChainWithElementValidation(el, _isAttributeInElement, attribute);
}
function _isAttributeInElement(element, attributeToLookFor) {
    var value = element.getAttribute(attributeToLookFor);
    return isValueAssigned(value) || value === "";
}
function _bracketIt(str) {
    return "[" + str + "]";
}
function _debounce(firstCallFunction, secondCallFunction, wait, context) {
    var timeout;
    return function () {
        var args = arguments;
        var later = function () {
            timeout = 0;
            if (secondCallFunction) {
                secondCallFunction.apply(context, args);
            }
        };
        var callNow = !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            if (firstCallFunction) {
                firstCallFunction.apply(context, args);
            }
        }
    };
}
function _getScrollOffset() {
    var scrollOffset = { h: 0, v: 0 };
    var win = getWindow();
    var doc = getDocument();
    if (doc && win) {
        scrollOffset = {
            h: parseInt(doc.body.scrollLeft || doc.documentElement.scrollLeft || win.pageXOffset, 10),
            v: parseInt(doc.body.scrollTop || doc.documentElement.scrollTop || win.pageYOffset, 10)
        };
    }
    return scrollOffset;
}
function _getViewportDimensions() {
    var viewport = { h: 0, w: 0 };
    var win = getWindow();
    var doc = getDocument();
    if (win && doc && win.screen) {
        var body = doc.body || {};
        var docElem = doc.documentElement || {};
        viewport.h = win.innerHeight || body.clientHeight || docElem.clientHeight;
        viewport.w = win.innerWidth || body.clientWidth || docElem.clientWidth;
    }
    return viewport;
}
function _getViewportBoundingRect(viewportDimensions) {
    var viewportBoundingRect = {
        top: 0,
        bottom: viewportDimensions.h,
        left: 0,
        right: viewportDimensions.w
    };
    return viewportBoundingRect;
}

var clickCaptureInputTypes$1 = { BUTTON: true, CHECKBOX: true, RADIO: true, RESET: true, SUBMIT: true };
function _getImageHref(element) {
    var temp = element;
    if (temp) {
        var parent = _findClosestAnchor(temp);
        if (parent && parent.length === 1) {
            if (parent[0].href) {
                return parent[0].href;
            }
            else if (parent[0].src) {
                return (parent[0].src);
            }
        }
    }
    return "";
}
function _isPii(element) {
    if (!element || !element.attributes) {
        return false;
    }
    try {
        var pii = element.getAttribute("data-dc");
        if (isValueAssigned(pii)) {
            if (pii.toLowerCase() === "pii") {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    catch (e) {
        return false;
    }
}
function _getUri(config, location) {
    if (config.coreData && config.coreData.requestUri && config.coreData.requestUri !== "") {
        return config.coreData.requestUri;
    }
    return _sanitizeUrl(config, location);
}
function _sanitizeUrl(config, location) {
    if (!location) {
        return null;
    }
    var url = location.protocol + "//" + (location.hostname || location.host) +
        (isValueAssigned(location.port) ? ":" + location.port : "") +
        location.pathname;
    if (config.urlCollectQuery) {
        var query = location.search;
        if (!query) {
            var hash = location.hash || "";
            var queryIndex = hash.indexOf("?");
            if (queryIndex !== -1) {
                query = hash.slice(queryIndex);
            }
        }
        url += query;
    }
    if (config.urlCollectHash) {
        url += (location.hash || "");
    }
    return url;
}
function _getPageName(config, overrideValues) {
    if (overrideValues && overrideValues.pageName) {
        return overrideValues.pageName;
    }
    else if (config.callback && typeof (config.callback.pageName) === "function") {
        return config.callback.pageName();
    }
    else if (config.coreData && config.coreData.pageName) {
        return config.coreData.pageName;
    }
    else {
        var loc = getLocation() || {};
        var pagename = loc.pathname || "";
        var fragments = pagename.replace(/(^\/+|\/+$)/g, "").split("/");
        if (fragments && fragments[fragments.length - 1]) {
            pagename = fragments[fragments.length - 1];
        }
        else {
            pagename = "Home";
        }
        return pagename;
    }
}
function _getSignedInStatus(config) {
    var isLoggedIn = config.callback && typeof (config.callback.signedinStatus) === "function" ?
        config.callback.signedinStatus() : config.isLoggedIn;
    return isLoggedIn;
}
function _getCookies(config, _cookieMgr, traceLogger) {
    var cookies = "";
    var uniqueCookies = {};
    var mergedCookies = [];
    var cookiesConfig = config.cookiesToCollect;
    if (config.shareAuthStatus === false) {
        mergedCookies = cookiesConfig;
    }
    else {
        arrForEach(cookiesConfig, function (value) {
            if (value !== "ANON") {
                mergedCookies.push(value);
            }
        });
    }
    try {
        if (isWindowObjectAvailable && window.varCustomerCookies && window.varCustomerCookies.length > 0) {
            mergedCookies = mergedCookies.concat(window.varCustomerCookies);
        }
    }
    catch (e) {
        _throwInternal(traceLogger, 1 , 512 , "Failed to get cookies ");
    }
    var cookieValue;
    arrForEach(mergedCookies, function (value) {
        if (!uniqueCookies.hasOwnProperty(value)) {
            uniqueCookies[value] = "";
            cookieValue = decodeURIComponent(_cookieMgr.get(value));
            if (cookieValue !== "") {
                cookies += value + "=" + cookieValue + ";";
            }
        }
    });
    return cookies;
}
function _getClickTarget(element) {
    var clickTarget = "";
    switch (element.tagName) {
        case "A":
        case "AREA":
            clickTarget = element.href || "";
            break;
        case "IMG":
            clickTarget = _getImageHref(element);
            break;
        case "INPUT":
            var type = element.type;
            if (type && (clickCaptureInputTypes$1[type.toUpperCase()])) {
                var loc = getLocation() || {};
                if (element.form) {
                    clickTarget = element.form.action || (loc.pathname || "");
                }
                else {
                    clickTarget = loc.pathname || "";
                }
            }
            break;
    }
    return clickTarget;
}
function onDomLoaded(callback, parentEvtNamespace) {
    var evtNamespace = mergeEvtNamespace(createUniqueNamespace("onDomLoaded"), parentEvtNamespace);
    onDomReadyDo(function () {
        if (isDocumentObjectAvailable && document.readyState === "complete") {
            callback();
        }
        else {
            var win_1 = getWindow();
            if (win_1) {
                eventOn(win_1, "load", function () {
                    callback && callback();
                    callback = null;
                    eventOff(win_1, null, null, evtNamespace);
                }, evtNamespace);
            }
        }
    });
}
function onDomReadyDo(f) {
    var doc = getDocument() || {};
    /in/.test(doc.readyState) ? setTimeout(function () { onDomReadyDo(f); }, 100) : f.call();
}

exports.Behavior = void 0;
(function (Behavior) {
    Behavior[Behavior["UNDEFINED"] = 0] = "UNDEFINED";
    Behavior[Behavior["NAVIGATIONBACK"] = 1] = "NAVIGATIONBACK";
    Behavior[Behavior["NAVIGATION"] = 2] = "NAVIGATION";
    Behavior[Behavior["NAVIGATIONFORWARD"] = 3] = "NAVIGATIONFORWARD";
    Behavior[Behavior["APPLY"] = 4] = "APPLY";
    Behavior[Behavior["REMOVE"] = 5] = "REMOVE";
    Behavior[Behavior["SORT"] = 6] = "SORT";
    Behavior[Behavior["EXPAND"] = 7] = "EXPAND";
    Behavior[Behavior["REDUCE"] = 8] = "REDUCE";
    Behavior[Behavior["CONTEXTMENU"] = 9] = "CONTEXTMENU";
    Behavior[Behavior["TAB"] = 10] = "TAB";
    Behavior[Behavior["COPY"] = 11] = "COPY";
    Behavior[Behavior["EXPERIMENTATION"] = 12] = "EXPERIMENTATION";
    Behavior[Behavior["PRINT"] = 13] = "PRINT";
    Behavior[Behavior["SHOW"] = 14] = "SHOW";
    Behavior[Behavior["HIDE"] = 15] = "HIDE";
    Behavior[Behavior["MAXIMIZE"] = 16] = "MAXIMIZE";
    Behavior[Behavior["MINIMIZE"] = 17] = "MINIMIZE";
    Behavior[Behavior["BACKBUTTON"] = 18] = "BACKBUTTON";
    Behavior[Behavior["OPENAPP"] = 19] = "OPENAPP";
    Behavior[Behavior["STARTPROCESS"] = 20] = "STARTPROCESS";
    Behavior[Behavior["PROCESSCHECKPOINT"] = 21] = "PROCESSCHECKPOINT";
    Behavior[Behavior["COMPLETEPROCESS"] = 22] = "COMPLETEPROCESS";
    Behavior[Behavior["SCENARIOCANCEL"] = 23] = "SCENARIOCANCEL";
    Behavior[Behavior["DOWNLOADCOMMIT"] = 40] = "DOWNLOADCOMMIT";
    Behavior[Behavior["DOWNLOAD"] = 41] = "DOWNLOAD";
    Behavior[Behavior["SEARCHAUTOCOMPLETE"] = 60] = "SEARCHAUTOCOMPLETE";
    Behavior[Behavior["SEARCH"] = 61] = "SEARCH";
    Behavior[Behavior["SEARCHINITIATE"] = 62] = "SEARCHINITIATE";
    Behavior[Behavior["TEXTBOXINPUT"] = 63] = "TEXTBOXINPUT";
    Behavior[Behavior["SEARCHAI"] = 64] = "SEARCHAI";
    Behavior[Behavior["SEARCHAIAUTOCOMPLETE"] = 65] = "SEARCHAIAUTOCOMPLETE";
    Behavior[Behavior["PURCHASE"] = 80] = "PURCHASE";
    Behavior[Behavior["ADDTOCART"] = 81] = "ADDTOCART";
    Behavior[Behavior["VIEWCART"] = 82] = "VIEWCART";
    Behavior[Behavior["ADDWISHLIST"] = 83] = "ADDWISHLIST";
    Behavior[Behavior["FINDSTORE"] = 84] = "FINDSTORE";
    Behavior[Behavior["CHECKOUT"] = 85] = "CHECKOUT";
    Behavior[Behavior["REMOVEFROMCART"] = 86] = "REMOVEFROMCART";
    Behavior[Behavior["PURCHASECOMPLETE"] = 87] = "PURCHASECOMPLETE";
    Behavior[Behavior["VIEWCHECKOUTPAGE"] = 88] = "VIEWCHECKOUTPAGE";
    Behavior[Behavior["VIEWCARTPAGE"] = 89] = "VIEWCARTPAGE";
    Behavior[Behavior["VIEWPDP"] = 90] = "VIEWPDP";
    Behavior[Behavior["UPDATEITEMQUANTITY"] = 91] = "UPDATEITEMQUANTITY";
    Behavior[Behavior["INTENTTOBUY"] = 92] = "INTENTTOBUY";
    Behavior[Behavior["PUSHTOINSTALL"] = 93] = "PUSHTOINSTALL";
    Behavior[Behavior["SIGNIN"] = 100] = "SIGNIN";
    Behavior[Behavior["SIGNOUT"] = 101] = "SIGNOUT";
    Behavior[Behavior["SOCIALSHARE"] = 120] = "SOCIALSHARE";
    Behavior[Behavior["SOCIALLIKE"] = 121] = "SOCIALLIKE";
    Behavior[Behavior["SOCIALREPLY"] = 122] = "SOCIALREPLY";
    Behavior[Behavior["CALL"] = 123] = "CALL";
    Behavior[Behavior["EMAIL"] = 124] = "EMAIL";
    Behavior[Behavior["COMMUNITY"] = 125] = "COMMUNITY";
    Behavior[Behavior["SOCIALFOLLOW"] = 126] = "SOCIALFOLLOW";
    Behavior[Behavior["VOTE"] = 140] = "VOTE";
    Behavior[Behavior["SURVEYINITIATE"] = 141] = "SURVEYINITIATE";
    Behavior[Behavior["SURVEYCOMPLETE"] = 142] = "SURVEYCOMPLETE";
    Behavior[Behavior["REPORTAPPLICATION"] = 143] = "REPORTAPPLICATION";
    Behavior[Behavior["REPORTREVIEW"] = 144] = "REPORTREVIEW";
    Behavior[Behavior["SURVEYCHECKPOINT"] = 145] = "SURVEYCHECKPOINT";
    Behavior[Behavior["CONTACT"] = 160] = "CONTACT";
    Behavior[Behavior["REGISTRATIONINITIATE"] = 161] = "REGISTRATIONINITIATE";
    Behavior[Behavior["REGISTRATIONCOMPLETE"] = 162] = "REGISTRATIONCOMPLETE";
    Behavior[Behavior["CANCELSUBSCRIPTION"] = 163] = "CANCELSUBSCRIPTION";
    Behavior[Behavior["RENEWSUBSCRIPTION"] = 164] = "RENEWSUBSCRIPTION";
    Behavior[Behavior["CHANGESUBSCRIPTION"] = 165] = "CHANGESUBSCRIPTION";
    Behavior[Behavior["REGISTRATIONCHECKPOINT"] = 166] = "REGISTRATIONCHECKPOINT";
    Behavior[Behavior["CHATINITIATE"] = 180] = "CHATINITIATE";
    Behavior[Behavior["CHATEND"] = 181] = "CHATEND";
    Behavior[Behavior["AICHATINITIATE"] = 182] = "AICHATINITIATE";
    Behavior[Behavior["TRIALSIGNUP"] = 200] = "TRIALSIGNUP";
    Behavior[Behavior["TRIALINITIATE"] = 201] = "TRIALINITIATE";
    Behavior[Behavior["SIGNUP"] = 210] = "SIGNUP";
    Behavior[Behavior["FREESIGNUP"] = 211] = "FREESIGNUP";
    Behavior[Behavior["PARTNERREFERRAL"] = 220] = "PARTNERREFERRAL";
    Behavior[Behavior["LEARNLOWFUNNEL"] = 230] = "LEARNLOWFUNNEL";
    Behavior[Behavior["LEARNHIGHFUNNEL"] = 231] = "LEARNHIGHFUNNEL";
    Behavior[Behavior["SHOPPINGINTENT"] = 232] = "SHOPPINGINTENT";
    Behavior[Behavior["TRIALINTENT"] = 234] = "TRIALINTENT";
    Behavior[Behavior["VIDEOSTART"] = 240] = "VIDEOSTART";
    Behavior[Behavior["VIDEOPAUSE"] = 241] = "VIDEOPAUSE";
    Behavior[Behavior["VIDEOCONTINUE"] = 242] = "VIDEOCONTINUE";
    Behavior[Behavior["VIDEOCHECKPOINT"] = 243] = "VIDEOCHECKPOINT";
    Behavior[Behavior["VIDEOJUMP"] = 244] = "VIDEOJUMP";
    Behavior[Behavior["VIDEOCOMPLETE"] = 245] = "VIDEOCOMPLETE";
    Behavior[Behavior["VIDEOBUFFERING"] = 246] = "VIDEOBUFFERING";
    Behavior[Behavior["VIDEOERROR"] = 247] = "VIDEOERROR";
    Behavior[Behavior["VIDEOMUTE"] = 248] = "VIDEOMUTE";
    Behavior[Behavior["VIDEOUNMUTE"] = 249] = "VIDEOUNMUTE";
    Behavior[Behavior["VIDEOFULLSCREEN"] = 250] = "VIDEOFULLSCREEN";
    Behavior[Behavior["VIDEOUNFULLSCREEN"] = 251] = "VIDEOUNFULLSCREEN";
    Behavior[Behavior["VIDEOREPLAY"] = 252] = "VIDEOREPLAY";
    Behavior[Behavior["VIDEOPLAYERLOAD"] = 253] = "VIDEOPLAYERLOAD";
    Behavior[Behavior["VIDEOPLAYERCLICK"] = 254] = "VIDEOPLAYERCLICK";
    Behavior[Behavior["VIDEOVOLUMECONTROL"] = 255] = "VIDEOVOLUMECONTROL";
    Behavior[Behavior["VIDEOAUDIOTRACKCONTROL"] = 256] = "VIDEOAUDIOTRACKCONTROL";
    Behavior[Behavior["VIDEOCLOSEDCAPTIONCONTROL"] = 257] = "VIDEOCLOSEDCAPTIONCONTROL";
    Behavior[Behavior["VIDEOCLOSEDCAPTIONSTYLE"] = 258] = "VIDEOCLOSEDCAPTIONSTYLE";
    Behavior[Behavior["VIDEORESOLUTIONCONTROL"] = 259] = "VIDEORESOLUTIONCONTROL";
    Behavior[Behavior["VIRTUALEVENTJOIN"] = 260] = "VIRTUALEVENTJOIN";
    Behavior[Behavior["VIRTUALEVENTEND"] = 261] = "VIRTUALEVENTEND";
    Behavior[Behavior["JOINTEAMSMEETINGEVENT"] = 262] = "JOINTEAMSMEETINGEVENT";
    Behavior[Behavior["IMPRESSION"] = 280] = "IMPRESSION";
    Behavior[Behavior["CLICK"] = 281] = "CLICK";
    Behavior[Behavior["RICHMEDIACOMPLETE"] = 282] = "RICHMEDIACOMPLETE";
    Behavior[Behavior["ADBUFFERING"] = 283] = "ADBUFFERING";
    Behavior[Behavior["ADERROR"] = 284] = "ADERROR";
    Behavior[Behavior["ADSTART"] = 285] = "ADSTART";
    Behavior[Behavior["ADCOMPLETE"] = 286] = "ADCOMPLETE";
    Behavior[Behavior["ADSKIP"] = 287] = "ADSKIP";
    Behavior[Behavior["ADTIMEOUT"] = 288] = "ADTIMEOUT";
    Behavior[Behavior["OTHER"] = 300] = "OTHER";
})(exports.Behavior || (exports.Behavior = {}));

var BehaviorsVersion = '4.4.0';
var _gblNsKey = "oneDS";
var _currentVersion;
var _nsOverride;
var _delegatingAny = false;
function _compareVersions(a, b) {
    var partsA = strSplit((a || "0"), ".");
    var partsB = strSplit((b || "0"), ".");
    var len = mathMax(partsA.length, partsB.length);
    for (var i = 0; i < len; i++) {
        var numA = parseInt(partsA[i], 10) || 0;
        var numB = parseInt(partsB[i], 10) || 0;
        if (numA !== numB) {
            return numA - numB;
        }
    }
    return 0;
}
function _getNewerGlobal() {
    var nsInst = getInst(_gblNsKey);
    if (nsInst) {
        var nsVersion = nsInst.BehaviorsVersion;
        if (nsVersion && _currentVersion !== nsVersion && _compareVersions(nsVersion, BehaviorsVersion) > 0) {
            _currentVersion = nsVersion;
            _nsOverride = nsInst;
        }
    }
    return _nsOverride;
}
function _parseBehaviorValue(behavior) {
    var result = -1;
    if (!isStrictNullOrUndefined(behavior) && behavior !== "") {
        var value = parseInt(behavior);
        if (!isNaN(value)) {
            result = value;
        }
        else if (isString(behavior)) {
            var enumValue = exports.Behavior[behavior];
            if (!isStrictUndefined(enumValue)) {
                result = enumValue;
            }
        }
    }
    return result;
}
function getAnyNumericBehavior(behavior) {
    if (!_delegatingAny) {
        var gbl = _getNewerGlobal();
        if (gbl && gbl.getAnyNumericBehavior && gbl.getAnyNumericBehavior !== getAnyNumericBehavior) {
            _delegatingAny = true;
            try {
                return gbl.getAnyNumericBehavior(behavior);
            }
            catch (e) {
            }
            finally {
                _delegatingAny = false;
            }
        }
    }
    var value;
    var result = _parseBehaviorValue(behavior);
    if (result >= 0 && result <= 2147483647) {
        value = result;
    }
    return value || 0;
}

var ActionType = {
    CLICKLEFT: "CL",
    CLICKRIGHT: "CR",
    CLICKMIDDLE: "CM",
    SCROLL: "S",
    ZOOM: "Z",
    RESIZE: "R",
    KEYBOARDENTER: "KE",
    KEYBOARDSPACE: "KS",
    OTHER: "O"
};
var EventType;
(function (EventType) {
    EventType[EventType["PAGE_ACTION"] = 0] = "PAGE_ACTION";
    EventType[EventType["CONTENT_UPDATE"] = 1] = "CONTENT_UPDATE";
})(EventType || (EventType = {}));

var _DYN_TO_STRING = "toString";
var _DYN_IS_STORAGE_USE_DISAB0 = "isStorageUseDisabled";
var _DYN__ADD_HOOK = "_addHook";
var _DYN_CORE = "core";
var _DYN_DIAG_LOG = "diagLog";
var _DYN_TRACK = "track";
var _DYN_TRACK_PAGE_VIEW = "trackPageView";
var _DYN_CONFIG = "config";
var _DYN_TRACK_PREVIOUS_PAGE_1 = "trackPreviousPageVisit";
var _DYN_SEND_PAGE_VIEW_INTER2 = "sendPageViewInternal";
var _DYN_REF_URI = "refUri";
var _DYN_START_TIME = "startTime";
var _DYN_PROPERTIES = "properties";
var _DYN_DURATION = "duration";
var _DYN_SEND_PAGE_VIEW_PERFO3 = "sendPageViewPerformanceInternal";
var _DYN_POPULATE_PAGE_VIEW_P4 = "populatePageViewPerformanceEvent";
var _DYN_HREF = "href";
var _DYN_SEND_EXCEPTION_INTER5 = "sendExceptionInternal";
var _DYN_ERROR = "error";
var _DYN_LINE_NUMBER = "lineNumber";
var _DYN_COLUMN_NUMBER = "columnNumber";
var _DYN__CREATE_AUTO_EXCEPTI6 = "CreateAutoException";
var _DYN_ADD_TELEMETRY_INITIA7 = "addTelemetryInitializer";
var _DYN_OVERRIDE_PAGE_VIEW_D8 = "overridePageViewDuration";
var _DYN_AUTO_EXCEPTION_INSTR9 = "autoExceptionInstrumented";
var _DYN_AUTO_TRACK_PAGE_VISI10 = "autoTrackPageVisitTime";
var _DYN_IS_BROWSER_LINK_TRAC11 = "isBrowserLinkTrackingEnabled";
var _DYN_LENGTH = "length";
var _DYN_ENABLE_AUTO_ROUTE_TR12 = "enableAutoRouteTracking";
var _DYN_GET_TRACE_CTX = "getTraceCtx";
var _DYN_ENABLE_UNHANDLED_PRO13 = "enableUnhandledPromiseRejectionTracking";
var _DYN_AUTO_UNHANDLED_PROMI14 = "autoUnhandledPromiseInstrumented";
var _DYN_GET_ENTRIES_BY_TYPE = "getEntriesByType";
var _DYN_IS_PERFORMANCE_TIMIN15 = "isPerformanceTimingSupported";
var _DYN_GET_PERFORMANCE_TIMI16 = "getPerformanceTiming";
var _DYN_NAVIGATION_START = "navigationStart";
var _DYN_SHOULD_COLLECT_DURAT17 = "shouldCollectDuration";
var _DYN_IS_PERFORMANCE_TIMIN18 = "isPerformanceTimingDataReady";
var _DYN_RESPONSE_START = "responseStart";
var _DYN_REQUEST_START = "requestStart";
var _DYN_LOAD_EVENT_END = "loadEventEnd";
var _DYN_RESPONSE_END = "responseEnd";
var _DYN_CONNECT_END = "connectEnd";
var _DYN_PAGE_VISIT_TIME = "pageVisitTime";

function createPageViewManager(appInsights, overridePageViewDuration, core, pageViewPerformanceManager) {
    var _a;
    var queueTimer = null;
    var itemQueue = [];
    var pageViewPerformanceSent = false;
    var firstPageViewSent = false;
    var _logger;
    if (core) {
        _logger = core.logger;
    }
    function _flushChannels(isAsync) {
        if (core) {
            core.flush(isAsync, function () {
            });
        }
    }
    function _startTimer() {
        if (!queueTimer) {
            queueTimer = scheduleTimeout((function () {
                queueTimer = null;
                var allItems = itemQueue.slice(0);
                var doFlush = false;
                itemQueue = [];
                arrForEach(allItems, function (item) {
                    if (!item()) {
                        itemQueue.push(item);
                    }
                    else {
                        doFlush = true;
                    }
                });
                if (itemQueue[_DYN_LENGTH ] > 0) {
                    _startTimer();
                }
                if (doFlush) {
                    _flushChannels(true);
                }
            }), 100);
        }
    }
    function _addQueue(cb) {
        itemQueue.push(cb);
        _startTimer();
    }
    return _a = {},
        _a[_DYN_TRACK_PAGE_VIEW ] = function (pageView, customProperties) {
            var name = pageView.name;
            if (isNullOrUndefined(name) || typeof name !== "string") {
                var doc = getDocument();
                name = pageView.name = doc && doc.title || "";
            }
            var uri = pageView.uri;
            if (isNullOrUndefined(uri) || typeof uri !== "string") {
                var location_1 = getLocation();
                uri = pageView.uri = location_1 && location_1[_DYN_HREF ] || "";
            }
            if (core && core[_DYN_CONFIG ]) {
                uri = pageView.uri = fieldRedaction(pageView.uri, core[_DYN_CONFIG ]);
            }
            if (!firstPageViewSent) {
                var perf = getPerformance();
                var navigationEntries = (perf && perf[_DYN_GET_ENTRIES_BY_TYPE ] && perf[_DYN_GET_ENTRIES_BY_TYPE ]("navigation"));
                if (navigationEntries && navigationEntries[0] && !isUndefined(perf.timeOrigin)) {
                    var loadEventStart = navigationEntries[0].loadEventStart;
                    pageView[_DYN_START_TIME ] = new Date(perf.timeOrigin + loadEventStart);
                }
                else {
                    var duration_1 = ((customProperties || pageView[_DYN_PROPERTIES ] || {})[_DYN_DURATION ] || 0);
                    pageView[_DYN_START_TIME ] = new Date(new Date().getTime() - duration_1);
                }
                firstPageViewSent = true;
            }
            if (!pageViewPerformanceManager[_DYN_IS_PERFORMANCE_TIMIN15 ]()) {
                appInsights[_DYN_SEND_PAGE_VIEW_INTER2 ](pageView, customProperties);
                _flushChannels(true);
                if (!isWebWorker()) {
                    _throwInternal(_logger, 2 , 25 , "trackPageView: navigation timing API used for calculation of page duration is not supported in this browser. This page view will be collected without duration and timing info.");
                }
                return;
            }
            var pageViewSent = false;
            var customDuration;
            var start = pageViewPerformanceManager[_DYN_GET_PERFORMANCE_TIMI16 ]()[_DYN_NAVIGATION_START ];
            if (start > 0) {
                customDuration = dateTimeUtilsDuration(start, +new Date);
                if (!pageViewPerformanceManager[_DYN_SHOULD_COLLECT_DURAT17 ](customDuration)) {
                    customDuration = undefined;
                }
            }
            var duration;
            if (!isNullOrUndefined(customProperties) &&
                !isNullOrUndefined(customProperties[_DYN_DURATION ])) {
                duration = customProperties[_DYN_DURATION ];
            }
            if (overridePageViewDuration || !isNaN(duration)) {
                if (isNaN(duration)) {
                    if (!customProperties) {
                        customProperties = {};
                    }
                    customProperties[_DYN_DURATION ] = customDuration;
                }
                appInsights[_DYN_SEND_PAGE_VIEW_INTER2 ](pageView, customProperties);
                _flushChannels(true);
                pageViewSent = true;
            }
            var maxDurationLimit = 60000;
            if (!customProperties) {
                customProperties = {};
            }
            _addQueue(function () {
                var processed = false;
                try {
                    if (pageViewPerformanceManager[_DYN_IS_PERFORMANCE_TIMIN18 ]()) {
                        processed = true;
                        var pageViewPerformance = {
                            name: name,
                            uri: uri
                        };
                        pageViewPerformanceManager[_DYN_POPULATE_PAGE_VIEW_P4 ](pageViewPerformance);
                        if (!pageViewPerformance.isValid && !pageViewSent) {
                            customProperties[_DYN_DURATION ] = customDuration;
                            appInsights[_DYN_SEND_PAGE_VIEW_INTER2 ](pageView, customProperties);
                        }
                        else {
                            if (!pageViewSent) {
                                customProperties[_DYN_DURATION ] = pageViewPerformance.durationMs;
                                appInsights[_DYN_SEND_PAGE_VIEW_INTER2 ](pageView, customProperties);
                            }
                            if (!pageViewPerformanceSent) {
                                appInsights[_DYN_SEND_PAGE_VIEW_PERFO3 ](pageViewPerformance, customProperties);
                                pageViewPerformanceSent = true;
                            }
                        }
                    }
                    else if (start > 0 && dateTimeUtilsDuration(start, +new Date) > maxDurationLimit) {
                        processed = true;
                        if (!pageViewSent) {
                            customProperties[_DYN_DURATION ] = maxDurationLimit;
                            appInsights[_DYN_SEND_PAGE_VIEW_INTER2 ](pageView, customProperties);
                        }
                    }
                }
                catch (e) {
                    _throwInternal(_logger, 1 , 38 , "trackPageView failed on page load calculation: " + getExceptionName(e), { exception: dumpObj(e) });
                }
                return processed;
            });
        },
        _a.teardown = function (unloadCtx, unloadState) {
            if (queueTimer) {
                queueTimer.cancel();
                queueTimer = null;
                var allItems = itemQueue.slice(0);
                itemQueue = [];
                arrForEach(allItems, function (item) {
                    if (item()) ;
                });
            }
        },
        _a;
}

var MAX_DURATION_ALLOWED = 3600000;
var botAgentNames = ["googlebot", "adsbot-google", "apis-google", "mediapartners-google"];
function _isPerformanceTimingSupported() {
    var perf = getPerformance();
    return perf && !!perf.timing;
}
function _isPerformanceNavigationTimingSupported() {
    var perf = getPerformance();
    return perf && perf.getEntriesByType && perf.getEntriesByType("navigation")[_DYN_LENGTH ] > 0;
}
function _isPerformanceTimingDataReady() {
    var perf = getPerformance();
    var timing = perf ? perf.timing : 0;
    return timing
        && timing.domainLookupStart > 0
        && timing[_DYN_NAVIGATION_START ] > 0
        && timing[_DYN_RESPONSE_START ] > 0
        && timing[_DYN_REQUEST_START ] > 0
        && timing[_DYN_LOAD_EVENT_END ] > 0
        && timing[_DYN_RESPONSE_END ] > 0
        && timing[_DYN_CONNECT_END ] > 0
        && timing.domLoading > 0;
}
function _getPerformanceTiming() {
    if (_isPerformanceTimingSupported()) {
        return getPerformance().timing;
    }
    return null;
}
function _getPerformanceNavigationTiming() {
    if (_isPerformanceNavigationTimingSupported()) {
        return getPerformance()[_DYN_GET_ENTRIES_BY_TYPE ]("navigation")[0];
    }
    return null;
}
function _shouldCollectDuration() {
    var durations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        durations[_i] = arguments[_i];
    }
    var _navigator = getNavigator() || {};
    var userAgent = _navigator.userAgent;
    var isGoogleBot = false;
    if (userAgent) {
        for (var i = 0; i < botAgentNames[_DYN_LENGTH ]; i++) {
            isGoogleBot = isGoogleBot || strIndexOf(userAgent.toLowerCase(), botAgentNames[i]) !== -1;
        }
    }
    if (isGoogleBot) {
        return false;
    }
    else {
        for (var i = 0; i < durations[_DYN_LENGTH ]; i++) {
            if (durations[i] < 0 || durations[i] >= MAX_DURATION_ALLOWED) {
                return false;
            }
        }
    }
    return true;
}
function createPageViewPerformanceManager(core) {
    var _a;
    var _logger = safeGetLogger(core);
    return _a = {},
        _a[_DYN_POPULATE_PAGE_VIEW_P4 ] = function (pageViewPerformance) {
            pageViewPerformance.isValid = false;
            var navigationTiming = _getPerformanceNavigationTiming();
            var timing = _getPerformanceTiming();
            var total = 0;
            var network = 0;
            var request = 0;
            var response = 0;
            var dom = 0;
            if (navigationTiming || timing) {
                if (navigationTiming) {
                    total = navigationTiming[_DYN_DURATION ];
                    network = navigationTiming[_DYN_START_TIME ] === 0 ? navigationTiming[_DYN_CONNECT_END ] : dateTimeUtilsDuration(navigationTiming[_DYN_START_TIME ], navigationTiming[_DYN_CONNECT_END ]);
                    request = dateTimeUtilsDuration(navigationTiming.requestStart, navigationTiming[_DYN_RESPONSE_START ]);
                    response = dateTimeUtilsDuration(navigationTiming[_DYN_RESPONSE_START ], navigationTiming[_DYN_RESPONSE_END ]);
                    dom = dateTimeUtilsDuration(navigationTiming.responseEnd, navigationTiming[_DYN_LOAD_EVENT_END ]);
                }
                else {
                    total = dateTimeUtilsDuration(timing[_DYN_NAVIGATION_START ], timing[_DYN_LOAD_EVENT_END ]);
                    network = dateTimeUtilsDuration(timing[_DYN_NAVIGATION_START ], timing[_DYN_CONNECT_END ]);
                    request = dateTimeUtilsDuration(timing.requestStart, timing[_DYN_RESPONSE_START ]);
                    response = dateTimeUtilsDuration(timing[_DYN_RESPONSE_START ], timing[_DYN_RESPONSE_END ]);
                    dom = dateTimeUtilsDuration(timing.responseEnd, timing[_DYN_LOAD_EVENT_END ]);
                }
                if (total === 0) {
                    _throwInternal(_logger, 2 , 10 , "error calculating page view performance.", { total: total, network: network, request: request, response: response, dom: dom });
                }
                else if (!_shouldCollectDuration(total, network, request, response, dom)) {
                    _throwInternal(_logger, 2 , 45 , "Invalid page load duration value. Browser perf data won't be sent.", { total: total, network: network, request: request, response: response, dom: dom });
                }
                else if (total < mathFloor(network) + mathFloor(request) + mathFloor(response) + mathFloor(dom)) {
                    _throwInternal(_logger, 2 , 8 , "client performance math error.", { total: total, network: network, request: request, response: response, dom: dom });
                }
                else {
                    pageViewPerformance.durationMs = total;
                    pageViewPerformance.perfTotal = pageViewPerformance[_DYN_DURATION ] = msToTimeSpan(total);
                    pageViewPerformance.networkConnect = msToTimeSpan(network);
                    pageViewPerformance.sentRequest = msToTimeSpan(request);
                    pageViewPerformance.receivedResponse = msToTimeSpan(response);
                    pageViewPerformance.domProcessing = msToTimeSpan(dom);
                    pageViewPerformance.isValid = true;
                }
            }
        },
        _a[_DYN_GET_PERFORMANCE_TIMI16 ] = _getPerformanceTiming,
        _a[_DYN_IS_PERFORMANCE_TIMIN15 ] = _isPerformanceTimingSupported,
        _a[_DYN_IS_PERFORMANCE_TIMIN18 ] = _isPerformanceTimingDataReady,
        _a[_DYN_SHOULD_COLLECT_DURAT17 ] = _shouldCollectDuration,
        _a;
}

function createPageVisitData(pageName, pageUrl) {
    var _a;
    return _a = {
            pageVisitStartTime: utcNow(),
            pageName: pageName,
            pageUrl: pageUrl
        },
        _a[_DYN_PAGE_VISIT_TIME ] = 0,
        _a;
}
function createPageVisitTimeManager(logger, pageVisitTimeTrackingHandler) {
    var _a;
    var prevPageVisitDataKeyName = "prevPageVisitData";
    function restartPageVisitTimer(pageName, pageUrl) {
        var prevPageVisitData = null;
        try {
            prevPageVisitData = stopPageVisitTimer();
            if (utlCanUseSessionStorage()) {
                if (utlGetSessionStorage(logger, prevPageVisitDataKeyName) != null) {
                    throwError("Cannot call startPageVisit consecutively without first calling stopPageVisit");
                }
                var currPageVisitDataStr = getJSON().stringify(createPageVisitData(pageName, pageUrl));
                utlSetSessionStorage(logger, prevPageVisitDataKeyName, currPageVisitDataStr);
            }
        }
        catch (e) {
            _warnToConsole(logger, "Call to restart failed: " + dumpObj(e));
            prevPageVisitData = null;
        }
        return prevPageVisitData;
    }
    function stopPageVisitTimer() {
        var prevPageVisitData = null;
        try {
            if (utlCanUseSessionStorage()) {
                var pageVisitEndTime = utcNow();
                var pageVisitDataJsonStr = utlGetSessionStorage(logger, prevPageVisitDataKeyName);
                if (pageVisitDataJsonStr && hasJSON()) {
                    prevPageVisitData = getJSON().parse(pageVisitDataJsonStr);
                    prevPageVisitData[_DYN_PAGE_VISIT_TIME ] = pageVisitEndTime - prevPageVisitData.pageVisitStartTime;
                    utlRemoveSessionStorage(logger, prevPageVisitDataKeyName);
                }
            }
        }
        catch (e) {
            _warnToConsole(logger, "Stop page visit timer failed: " + dumpObj(e));
            prevPageVisitData = null;
        }
        return prevPageVisitData;
    }
    return _a = {},
        _a[_DYN_TRACK_PREVIOUS_PAGE_1 ] = function (currentPageName, currentPageUrl) {
            try {
                var prevPageVisitTimeData = restartPageVisitTimer(currentPageName, currentPageUrl);
                if (prevPageVisitTimeData) {
                    pageVisitTimeTrackingHandler(prevPageVisitTimeData.pageName, prevPageVisitTimeData.pageUrl, prevPageVisitTimeData[_DYN_PAGE_VISIT_TIME ]);
                }
            }
            catch (e) {
                _warnToConsole(logger, "Auto track page visit time failed, metric will not be collected: " + dumpObj(e));
            }
        },
        _a._logger = logger,
        _a.pageVisitTimeTrackingHandler = pageVisitTimeTrackingHandler,
        _a;
}

function createTiming(logger, name) {
    var _events = {};
    var timing = {
        action: null,
        start: function (name) {
            if (typeof _events[name] !== "undefined") {
                _throwInternal(logger, 2 , 62 , "start was called more than once for this event without calling stop.", { name: name, key: name }, true);
            }
            _events[name] = +new Date;
        },
        stop: function (name, url, properties, measurements) {
            var start = _events[name];
            if (isNaN(start)) {
                _throwInternal(logger, 2 , 63 , "stop was called without a corresponding start.", { name: name, key: name }, true);
            }
            else {
                var end = +new Date;
                var duration = dateTimeUtilsDuration(start, end);
                timing.action(name, url, duration, properties, measurements);
            }
            delete _events[name];
            _events[name] = undefined;
        }
    };
    return timing;
}

var _a$1;
var strEvent = "event";
function _dispatchEvent(target, evnt) {
    if (target && target.dispatchEvent && evnt) {
        target.dispatchEvent(evnt);
    }
}
function _getReason(error) {
    if (error && error.reason) {
        var reason = error.reason;
        if (!isString(reason) && isFunction(reason[_DYN_TO_STRING ])) {
            return reason[_DYN_TO_STRING ]();
        }
        return dumpObj(reason);
    }
    return error || "";
}
var MinMilliSeconds = 60000;
var defaultValues = objDeepFreeze((_a$1 = {
        sessionRenewalMs: cfgDfSet(_chkConfigMilliseconds, 30 * 60 * 1000),
        sessionExpirationMs: cfgDfSet(_chkConfigMilliseconds, 24 * 60 * 60 * 1000),
        disableExceptionTracking: cfgDfBoolean()
    },
    _a$1[_DYN_AUTO_TRACK_PAGE_VISI10 ] = cfgDfBoolean(),
    _a$1[_DYN_OVERRIDE_PAGE_VIEW_D8 ] = cfgDfBoolean(),
    _a$1[_DYN_ENABLE_UNHANDLED_PRO13 ] = cfgDfBoolean(),
    _a$1[_DYN_AUTO_UNHANDLED_PROMI14 ] = false,
    _a$1.samplingPercentage = cfgDfValidate(_chkSampling, 100),
    _a$1[_DYN_IS_STORAGE_USE_DISAB0 ] = cfgDfBoolean(),
    _a$1[_DYN_IS_BROWSER_LINK_TRAC11 ] = cfgDfBoolean(),
    _a$1[_DYN_ENABLE_AUTO_ROUTE_TR12 ] = cfgDfBoolean(),
    _a$1.namePrefix = cfgDfString(),
    _a$1.enableDebug = cfgDfBoolean(),
    _a$1.disableFlushOnBeforeUnload = cfgDfBoolean(),
    _a$1.disableFlushOnUnload = cfgDfBoolean(false, "disableFlushOnBeforeUnload"),
    _a$1.expCfg = cfgDfMerge({ inclScripts: false, expLog: undefined, maxLogs: 50 }),
    _a$1.routeTraceStrategy = 0 ,
    _a$1));
function _chkConfigMilliseconds(value, defValue) {
    value = value || defValue;
    if (value < MinMilliSeconds) {
        value = MinMilliSeconds;
    }
    return +value;
}
function _chkSampling(value) {
    return !isNaN(value) && value > 0 && value <= 100;
}
function _updateStorageUsage(extConfig) {
    if (!isUndefined(extConfig[_DYN_IS_STORAGE_USE_DISAB0 ])) {
        if (extConfig[_DYN_IS_STORAGE_USE_DISAB0 ]) {
            utlDisableStorage();
        }
        else {
            utlEnableStorage();
        }
    }
}
var AnalyticsPlugin = /** @class */ (function (_super) {
    __extendsFn(AnalyticsPlugin, _super);
    function AnalyticsPlugin() {
        var _this = _super.call(this) || this;
        _this.identifier = AnalyticsPluginIdentifier;
        _this.priority = 180;
        _this.autoRoutePVDelay = 500;
        var _eventTracking;
        var _pageTracking;
        var _pageViewManager;
        var _pageViewPerformanceManager;
        var _pageVisitTimeManager;
        var _preInitTelemetryInitializers;
        var _isBrowserLinkTrackingEnabled;
        var _browserLinkInitializerAdded;
        var _enableAutoRouteTracking;
        var _historyListenerAdded;
        var _disableExceptionTracking;
        var _autoExceptionInstrumented;
        var _enableUnhandledPromiseRejectionTracking;
        var _autoUnhandledPromiseInstrumented;
        var _extConfig;
        var _autoTrackPageVisitTime;
        var _expCfg;
        var _routeTraceStrategy;
        var _prevUri;
        var _currUri;
        var _evtNamespace;
        var _errorHookCnt;
        dynamicProto(AnalyticsPlugin, _this, function (_self, _base) {
            var _addHook = _base[_DYN__ADD_HOOK ];
            _initDefaults();
            _self.getCookieMgr = function () {
                return safeGetCookieMgr(_self[_DYN_CORE ]);
            };
            _self.processTelemetry = function (env, itemCtx) {
                _self.processNext(env, itemCtx);
            };
            _self.trackEvent = function (event, customProperties) {
                try {
                    var telemetryItem = createTelemetryItem(event, EventDataType, EventEnvelopeType, _self[_DYN_DIAG_LOG ](), customProperties);
                    _self[_DYN_CORE ][_DYN_TRACK ](telemetryItem);
                }
                catch (e) {
                    _throwInternal(2 , 39 , "trackTrace failed, trace will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
                }
            };
            _self.startTrackEvent = function (name) {
                try {
                    _eventTracking.start(name);
                }
                catch (e) {
                    _throwInternal(1 , 29 , "startTrackEvent failed, event will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
                }
            };
            _self.stopTrackEvent = function (name, properties, measurements) {
                try {
                    _eventTracking.stop(name, undefined, properties, measurements);
                }
                catch (e) {
                    _throwInternal(1 , 30 , "stopTrackEvent failed, event will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
                }
            };
            _self.trackTrace = function (trace, customProperties) {
                try {
                    var telemetryItem = createTelemetryItem(trace, TraceDataType, TraceEnvelopeType, _self[_DYN_DIAG_LOG ](), customProperties);
                    _self[_DYN_CORE ][_DYN_TRACK ](telemetryItem);
                }
                catch (e) {
                    _throwInternal(2 , 39 , "trackTrace failed, trace will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
                }
            };
            _self.trackMetric = function (metric, customProperties) {
                try {
                    var telemetryItem = createTelemetryItem(metric, MetricDataType, MetricEnvelopeType, _self[_DYN_DIAG_LOG ](), customProperties);
                    _self[_DYN_CORE ][_DYN_TRACK ](telemetryItem);
                }
                catch (e) {
                    _throwInternal(1 , 36 , "trackMetric failed, metric will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
                }
            };
            _self[_DYN_TRACK_PAGE_VIEW ] = function (pageView, customProperties) {
                try {
                    var inPv = pageView || {};
                    if (_self[_DYN_CORE ] && _self[_DYN_CORE ][_DYN_CONFIG ]) {
                        inPv.uri = fieldRedaction(inPv.uri, _self[_DYN_CORE ][_DYN_CONFIG ]);
                    }
                    _pageViewManager[_DYN_TRACK_PAGE_VIEW ](inPv, __assignFn(__assignFn(__assignFn({}, inPv.properties), inPv.measurements), customProperties));
                    if (_autoTrackPageVisitTime) {
                        _pageVisitTimeManager[_DYN_TRACK_PREVIOUS_PAGE_1 ](inPv.name, inPv.uri);
                    }
                }
                catch (e) {
                    _throwInternal(1 , 37 , "trackPageView failed, page view will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
                }
            };
            _self[_DYN_SEND_PAGE_VIEW_INTER2 ] = function (pageView, properties, systemProperties) {
                var doc = getDocument();
                if (doc) {
                    pageView[_DYN_REF_URI ] = pageView[_DYN_REF_URI ] === undefined ? doc.referrer : pageView[_DYN_REF_URI ];
                }
                if (_self[_DYN_CORE ] && _self[_DYN_CORE ][_DYN_CONFIG ]) {
                    pageView.refUri = fieldRedaction(pageView.refUri, _self[_DYN_CORE ][_DYN_CONFIG ]);
                }
                if (isNullOrUndefined(pageView[_DYN_START_TIME ])) {
                    var duration = ((properties || pageView[_DYN_PROPERTIES ] || {})[_DYN_DURATION ] || 0);
                    pageView[_DYN_START_TIME ] = new Date(new Date().getTime() - duration);
                }
                var telemetryItem = createTelemetryItem(pageView, PageViewDataType, PageViewEnvelopeType, _self[_DYN_DIAG_LOG ](), properties, systemProperties);
                _self[_DYN_CORE ][_DYN_TRACK ](telemetryItem);
                _resetAjaxAttempts();
            };
            _self[_DYN_SEND_PAGE_VIEW_PERFO3 ] = function (pageViewPerformance, properties, systemProperties) {
                var telemetryItem = createTelemetryItem(pageViewPerformance, PageViewPerformanceDataType, PageViewPerformanceEnvelopeType, _self[_DYN_DIAG_LOG ](), properties, systemProperties);
                _self[_DYN_CORE ][_DYN_TRACK ](telemetryItem);
            };
            _self.trackPageViewPerformance = function (pageViewPerformance, customProperties) {
                var inPvp = pageViewPerformance || {};
                try {
                    _pageViewPerformanceManager[_DYN_POPULATE_PAGE_VIEW_P4 ](inPvp);
                    _self[_DYN_SEND_PAGE_VIEW_PERFO3 ](inPvp, customProperties);
                }
                catch (e) {
                    _throwInternal(1 , 37 , "trackPageViewPerformance failed, page view will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
                }
            };
            _self.startTrackPage = function (name) {
                try {
                    if (typeof name !== "string") {
                        var doc = getDocument();
                        name = doc && doc.title || "";
                    }
                    _pageTracking.start(name);
                }
                catch (e) {
                    _throwInternal(1 , 31 , "startTrackPage failed, page view may not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
                }
            };
            _self.stopTrackPage = function (name, url, properties, measurement) {
                try {
                    if (typeof name !== "string") {
                        var doc = getDocument();
                        name = doc && doc.title || "";
                    }
                    if (typeof url !== "string") {
                        var loc = getLocation();
                        url = loc && loc[_DYN_HREF ] || "";
                    }
                    if (_self[_DYN_CORE ] && _self[_DYN_CORE ][_DYN_CONFIG ]) {
                        url = fieldRedaction(url, _self[_DYN_CORE ][_DYN_CONFIG ]);
                    }
                    _pageTracking.stop(name, url, properties, measurement);
                    if (_autoTrackPageVisitTime) {
                        _pageVisitTimeManager[_DYN_TRACK_PREVIOUS_PAGE_1 ](name, url);
                    }
                }
                catch (e) {
                    _throwInternal(1 , 32 , "stopTrackPage failed, page view will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
                }
            };
            _self[_DYN_SEND_EXCEPTION_INTER5 ] = function (exception, customProperties, systemProperties) {
                var theError = (exception && (exception.exception || exception[_DYN_ERROR ])) ||
                    isError(exception) && exception ||
                    { name: (exception && typeof exception), message: exception || strNotSpecified };
                exception = exception || {};
                var exceptionPartB = new Exception(_self[_DYN_DIAG_LOG ](), theError, exception[_DYN_PROPERTIES ] || customProperties, exception.measurements, exception.severityLevel, exception.id).toInterface();
                var doc = getDocument();
                if (doc && (_expCfg === null || _expCfg === void 0 ? void 0 : _expCfg.inclScripts)) {
                    var scriptsInfo = findAllScripts(doc);
                    exceptionPartB[_DYN_PROPERTIES ]["exceptionScripts"] = JSON.stringify(scriptsInfo);
                }
                if (_expCfg === null || _expCfg === void 0 ? void 0 : _expCfg.expLog) {
                    var logs = _expCfg.expLog();
                    if (logs && logs.logs && isArray(logs.logs)) {
                        exceptionPartB[_DYN_PROPERTIES ]["exceptionLog"] = logs.logs.slice(0, _expCfg.maxLogs).join("\n");
                    }
                }
                var telemetryItem = createTelemetryItem(exceptionPartB, ExceptionDataType, ExceptionEnvelopeType, _self[_DYN_DIAG_LOG ](), customProperties, systemProperties);
                _self[_DYN_CORE ][_DYN_TRACK ](telemetryItem);
            };
            _self.trackException = function (exception, customProperties) {
                if (exception && !exception.exception && exception[_DYN_ERROR ]) {
                    exception.exception = exception[_DYN_ERROR ];
                }
                try {
                    _self[_DYN_SEND_EXCEPTION_INTER5 ](exception, customProperties);
                }
                catch (e) {
                    _throwInternal(1 , 35 , "trackException failed, exception will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
                }
            };
            _self._onerror = function (exception) {
                var error = exception && exception[_DYN_ERROR ];
                var evt = exception && exception.evt;
                try {
                    if (!evt) {
                        var _window = getWindow();
                        if (_window) {
                            evt = _window[strEvent];
                        }
                    }
                    var url = (exception && exception.url) || (getDocument() || {}).URL;
                    var errorSrc = exception.errorSrc || "window.onerror@" + url + ":" + (exception[_DYN_LINE_NUMBER ] || 0) + ":" + (exception[_DYN_COLUMN_NUMBER ] || 0);
                    var properties = {
                        errorSrc: errorSrc,
                        url: url,
                        lineNumber: exception[_DYN_LINE_NUMBER ] || 0,
                        columnNumber: exception[_DYN_COLUMN_NUMBER ] || 0,
                        message: exception.message
                    };
                    if (isCrossOriginError(exception.message, exception.url, exception.lineNumber, exception.columnNumber, exception[_DYN_ERROR ])) {
                        _sendCORSException(Exception[_DYN__CREATE_AUTO_EXCEPTI6 ]("Script error: The browser's same-origin policy prevents us from getting the details of this exception. Consider using the 'crossorigin' attribute.", url, exception[_DYN_LINE_NUMBER ] || 0, exception[_DYN_COLUMN_NUMBER ] || 0, error, evt, null, errorSrc), properties);
                    }
                    else {
                        if (!exception.errorSrc) {
                            exception.errorSrc = errorSrc;
                        }
                        _self.trackException({ exception: exception, severityLevel: 3  }, properties);
                    }
                }
                catch (e) {
                    var errorString = error ? (error.name + ", " + error.message) : "null";
                    _throwInternal(1 , 11 , "_onError threw exception while logging error, error will not be collected: "
                        + getExceptionName(e), { exception: dumpObj(e), errorString: errorString });
                }
            };
            _self[_DYN_ADD_TELEMETRY_INITIA7 ] = function (telemetryInitializer) {
                if (_self[_DYN_CORE ]) {
                    return _self[_DYN_CORE ][_DYN_ADD_TELEMETRY_INITIA7 ](telemetryInitializer);
                }
                if (!_preInitTelemetryInitializers) {
                    _preInitTelemetryInitializers = [];
                }
                _preInitTelemetryInitializers.push(telemetryInitializer);
            };
            _self.initialize = function (config, core, extensions, pluginChain) {
                if (_self.isInitialized()) {
                    return;
                }
                if (isNullOrUndefined(core)) {
                    throwError("Error initializing");
                }
                _base.initialize(config, core, extensions, pluginChain);
                try {
                    _evtNamespace = mergeEvtNamespace(createUniqueNamespace(_self.identifier), core.evtNamespace && core.evtNamespace());
                    if (_preInitTelemetryInitializers) {
                        arrForEach(_preInitTelemetryInitializers, function (initializer) {
                            core[_DYN_ADD_TELEMETRY_INITIA7 ](initializer);
                        });
                        _preInitTelemetryInitializers = null;
                    }
                    _populateDefaults(config);
                    _pageViewPerformanceManager = createPageViewPerformanceManager(_self[_DYN_CORE ]);
                    _pageViewManager = createPageViewManager(_self, _extConfig.overridePageViewDuration, _self[_DYN_CORE ], _pageViewPerformanceManager);
                    _pageVisitTimeManager = createPageVisitTimeManager(_self[_DYN_DIAG_LOG ](), function (pageName, pageUrl, pageVisitTime) { return trackPageVisitTime(pageName, pageUrl, pageVisitTime); });
                    _eventTracking = createTiming(_self[_DYN_DIAG_LOG ]());
                    _eventTracking.action =
                        function (name, url, duration, properties, measurements) {
                            if (!properties) {
                                properties = {};
                            }
                            if (!measurements) {
                                measurements = {};
                            }
                            properties.duration = duration[_DYN_TO_STRING ]();
                            _self.trackEvent({ name: name, properties: properties, measurements: measurements });
                        };
                    _pageTracking = createTiming(_self[_DYN_DIAG_LOG ]());
                    _pageTracking.action = function (name, url, duration, properties, measurements) {
                        if (isNullOrUndefined(properties)) {
                            properties = {};
                        }
                        properties.duration = duration[_DYN_TO_STRING ]();
                        var pageViewItem = {
                            name: name,
                            uri: url,
                            properties: properties,
                            measurements: measurements
                        };
                        _self[_DYN_SEND_PAGE_VIEW_INTER2 ](pageViewItem, properties);
                    };
                    if (hasWindow()) {
                        _updateExceptionTracking();
                        _updateLocationChange();
                    }
                }
                catch (e) {
                    _self.setInitialized(false);
                    throw e;
                }
            };
            _self._doTeardown = function (unloadCtx, unloadState) {
                _pageViewManager && _pageViewManager.teardown(unloadCtx, unloadState);
                eventOff(window, null, null, _evtNamespace);
                _initDefaults();
            };
            _self["_getDbgPlgTargets"] = function () {
                return [_errorHookCnt, _autoExceptionInstrumented];
            };
            function _resetAjaxAttempts() {
                if (_self[_DYN_CORE ]) {
                    var ajaxPlugin = _self[_DYN_CORE ].getPlugin("AjaxDependencyPlugin");
                    if (ajaxPlugin && ajaxPlugin.plugin && ajaxPlugin.plugin.resetAjaxAttempts) {
                        ajaxPlugin.plugin.resetAjaxAttempts();
                    }
                }
            }
            function _populateDefaults(config) {
                var identifier = _self.identifier;
                var core = _self[_DYN_CORE ];
                _self[_DYN__ADD_HOOK ](onConfigChange(config, function () {
                    var ctx = createProcessTelemetryContext(null, config, core);
                    _extConfig = ctx.getExtCfg(identifier, defaultValues);
                    _autoExceptionInstrumented = _autoExceptionInstrumented || config[_DYN_AUTO_EXCEPTION_INSTR9 ] || _extConfig[_DYN_AUTO_EXCEPTION_INSTR9 ];
                    _expCfg = _extConfig.expCfg;
                    _autoTrackPageVisitTime = _extConfig[_DYN_AUTO_TRACK_PAGE_VISI10 ];
                    _routeTraceStrategy = _extConfig.routeTraceStrategy || 0 ;
                    if (config.storagePrefix) {
                        utlSetStoragePrefix(config.storagePrefix);
                    }
                    _updateStorageUsage(_extConfig);
                    _isBrowserLinkTrackingEnabled = _extConfig[_DYN_IS_BROWSER_LINK_TRAC11 ];
                    _addDefaultTelemetryInitializers();
                }));
            }
            function trackPageVisitTime(pageName, pageUrl, pageVisitTime) {
                var properties = { PageName: pageName, PageUrl: pageUrl };
                _self.trackMetric({
                    name: "PageVisitTime",
                    average: pageVisitTime,
                    max: pageVisitTime,
                    min: pageVisitTime,
                    sampleCount: 1
                }, properties);
            }
            function _addDefaultTelemetryInitializers() {
                if (!_browserLinkInitializerAdded && _isBrowserLinkTrackingEnabled) {
                    var browserLinkPaths_1 = ["/browserLinkSignalR/", "/__browserLink/"];
                    var dropBrowserLinkRequests = function (envelope) {
                        if (_isBrowserLinkTrackingEnabled && envelope.baseType === RemoteDependencyDataType) {
                            var remoteData = envelope.baseData;
                            if (remoteData) {
                                for (var i = 0; i < browserLinkPaths_1[_DYN_LENGTH ]; i++) {
                                    if (remoteData.target && strIndexOf(remoteData.target, browserLinkPaths_1[i]) >= 0) {
                                        return false;
                                    }
                                }
                            }
                        }
                        return true;
                    };
                    _self[_DYN__ADD_HOOK ](_self[_DYN_ADD_TELEMETRY_INITIA7 ](dropBrowserLinkRequests));
                    _browserLinkInitializerAdded = true;
                }
            }
            function _sendCORSException(exception, properties) {
                var telemetryItem = createTelemetryItem(exception, ExceptionDataType, ExceptionEnvelopeType, _self[_DYN_DIAG_LOG ](), properties);
                _self[_DYN_CORE ][_DYN_TRACK ](telemetryItem);
            }
            function _updateExceptionTracking() {
                var _window = getWindow();
                var locn = getLocation(true);
                _self[_DYN__ADD_HOOK ](onConfigChange(_extConfig, function () {
                    _disableExceptionTracking = _extConfig.disableExceptionTracking;
                    if (!_disableExceptionTracking && !_autoExceptionInstrumented && !_extConfig[_DYN_AUTO_EXCEPTION_INSTR9 ]) {
                        _addHook(InstrumentEvent(_window, "onerror", {
                            ns: _evtNamespace,
                            rsp: function (callDetails, message, url, lineNumber, columnNumber, error) {
                                if (!_disableExceptionTracking && callDetails.rslt !== true) {
                                    _self._onerror(Exception[_DYN__CREATE_AUTO_EXCEPTI6 ](message, url, lineNumber, columnNumber, error, callDetails.evt));
                                }
                            }
                        }, false));
                        _errorHookCnt++;
                        _autoExceptionInstrumented = true;
                    }
                }));
                _addUnhandledPromiseRejectionTracking(_window, locn);
            }
            function _updateLocationChange() {
                var win = getWindow();
                var locn = getLocation(true);
                _self[_DYN__ADD_HOOK ](onConfigChange(_extConfig, function () {
                    _enableAutoRouteTracking = _extConfig[_DYN_ENABLE_AUTO_ROUTE_TR12 ] === true;
                    if (win && _enableAutoRouteTracking && !_historyListenerAdded && hasHistory()) {
                        var _history = getHistory();
                        if (isFunction(_history.pushState) && isFunction(_history.replaceState) && typeof Event !== strShimUndefined) {
                            _addHistoryListener(win, _history, locn);
                        }
                    }
                }));
            }
            function _addHistoryListener(win, history, locn) {
                if (_historyListenerAdded) {
                    return;
                }
                var namePrefix = _extConfig.namePrefix || "";
                function _popstateHandler() {
                    if (_enableAutoRouteTracking) {
                        _dispatchEvent(win, createDomEvent(namePrefix + "locationchange"));
                    }
                }
                function _locationChangeHandler() {
                    if (_currUri) {
                        _prevUri = _currUri;
                        _currUri = locn && locn[_DYN_HREF ] || "";
                    }
                    else {
                        _currUri = locn && locn[_DYN_HREF ] || "";
                    }
                    if (_self[_DYN_CORE ] && _self[_DYN_CORE ][_DYN_CONFIG ]) {
                        _currUri = fieldRedaction(_currUri, _self[_DYN_CORE ][_DYN_CONFIG ]);
                    }
                    if (_enableAutoRouteTracking) {
                        var newContext = void 0;
                        if (_self[_DYN_CORE ] && _self[_DYN_CORE ][_DYN_GET_TRACE_CTX ]) {
                            var currentContext = _self[_DYN_CORE ][_DYN_GET_TRACE_CTX ](false);
                            if (currentContext && _routeTraceStrategy === 1 ) {
                                newContext = createDistributedTraceContext(currentContext);
                            }
                            else {
                                newContext = _self[_DYN_CORE ][_DYN_GET_TRACE_CTX ](true);
                            }
                            newContext.traceId = generateW3CId();
                            newContext.pageName = dataSanitizeString(_self[_DYN_DIAG_LOG ](), newContext.pageName || "_unknown_");
                            _self[_DYN_CORE ].setTraceCtx(newContext);
                        }
                        scheduleTimeout((function (uri) {
                            _self[_DYN_TRACK_PAGE_VIEW ]({ refUri: uri, properties: { duration: 0 } });
                        }).bind(_self, _prevUri), _self.autoRoutePVDelay);
                    }
                }
                _addHook(InstrumentEvent(history, "pushState", {
                    ns: _evtNamespace,
                    rsp: function () {
                        if (_enableAutoRouteTracking) {
                            _dispatchEvent(win, createDomEvent(namePrefix + "pushState"));
                            _dispatchEvent(win, createDomEvent(namePrefix + "locationchange"));
                        }
                    }
                }, true));
                _addHook(InstrumentEvent(history, "replaceState", {
                    ns: _evtNamespace,
                    rsp: function () {
                        if (_enableAutoRouteTracking) {
                            _dispatchEvent(win, createDomEvent(namePrefix + "replaceState"));
                            _dispatchEvent(win, createDomEvent(namePrefix + "locationchange"));
                        }
                    }
                }, true));
                eventOn(win, namePrefix + "popstate", _popstateHandler, _evtNamespace);
                eventOn(win, namePrefix + "locationchange", _locationChangeHandler, _evtNamespace);
                _historyListenerAdded = true;
            }
            function _addUnhandledPromiseRejectionTracking(_window, _location) {
                _self[_DYN__ADD_HOOK ](onConfigChange(_extConfig, function () {
                    _enableUnhandledPromiseRejectionTracking = _extConfig[_DYN_ENABLE_UNHANDLED_PRO13 ] === true;
                    _autoExceptionInstrumented = _autoExceptionInstrumented || _extConfig[_DYN_AUTO_UNHANDLED_PROMI14 ];
                    if (_enableUnhandledPromiseRejectionTracking && !_autoUnhandledPromiseInstrumented) {
                        _addHook(InstrumentEvent(_window, "onunhandledrejection", {
                            ns: _evtNamespace,
                            rsp: function (callDetails, error) {
                                if (_enableUnhandledPromiseRejectionTracking && callDetails.rslt !== true) {
                                    _self._onerror(Exception[_DYN__CREATE_AUTO_EXCEPTI6 ](_getReason(error), _location ? _location[_DYN_HREF ] : "", 0, 0, error, callDetails.evt));
                                }
                            }
                        }, false));
                        _errorHookCnt++;
                        _extConfig[_DYN_AUTO_UNHANDLED_PROMI14 ] = _autoUnhandledPromiseInstrumented = true;
                    }
                }));
            }
            function _throwInternal(severity, msgId, msg, properties, isUserAct) {
                _self[_DYN_DIAG_LOG ]().throwInternal(severity, msgId, msg, properties, isUserAct);
            }
            function _initDefaults() {
                _eventTracking = null;
                _pageTracking = null;
                _pageViewManager = null;
                _pageViewPerformanceManager = null;
                _pageVisitTimeManager = null;
                _preInitTelemetryInitializers = null;
                _isBrowserLinkTrackingEnabled = false;
                _browserLinkInitializerAdded = false;
                _enableAutoRouteTracking = false;
                _historyListenerAdded = false;
                _disableExceptionTracking = false;
                _autoExceptionInstrumented = false;
                _enableUnhandledPromiseRejectionTracking = false;
                _autoUnhandledPromiseInstrumented = false;
                _autoTrackPageVisitTime = false;
                _resetAjaxAttempts();
                var location = getLocation(true);
                _prevUri = location && location[_DYN_HREF ] || "";
                if (_self[_DYN_CORE ] && _self[_DYN_CORE ][_DYN_CONFIG ]) {
                    _prevUri = fieldRedaction(_prevUri, _self[_DYN_CORE ][_DYN_CONFIG ]);
                }
                _currUri = null;
                _evtNamespace = null;
                _extConfig = null;
                _errorHookCnt = 0;
                objDefine(_self, "config", {
                    g: function () { return _extConfig; }
                });
            }
            objDefine(_self, "_pageViewManager", { g: function () { return _pageViewManager; } });
            objDefine(_self, "_pageViewPerformanceManager", { g: function () { return _pageViewPerformanceManager; } });
            objDefine(_self, "_pageVisitTimeManager", { g: function () { return _pageVisitTimeManager; } });
            objDefine(_self, "_evtNamespace", { g: function () { return "." + _evtNamespace; } });
        });
        return _this;
    }
    AnalyticsPlugin.Version = '3.4.2';
    return AnalyticsPlugin;
}(BaseTelemetryPlugin));

var userIdPrefixes = [
    "c:",
    "i:",
    "w:"
];
var supportedMuidHosts = {
    "microsoft.com": "c1.microsoft.com",
    "xbox.com": "c.xbox.com",
    "live.com": "c.live.com",
    "microsoftstore.com": "c.microsoftstore.com",
    "msn.com": "c.msn.com",
    "windows.com": "c.windows.com",
    "office.com": "c.office.com"
};
var Id = /** @class */ (function () {
    function Id(core) {
        this.core = core;
        var lastPageViewId = createGuid();
        var internalTraceId = generateW3CId();
        var appUserId = null;
        var firstPageView = false;
        var deviceClass;
        var _cookieMgr = safeGetCookieMgr(core);
        dynamicProto(Id, this, function (_self) {
            _self.getTraceId = function () {
                if (core && core.getTraceCtx) {
                    return core.getTraceCtx().getTraceId() || internalTraceId;
                }
                return internalTraceId;
            };
            _self.getLastPageViewId = function () {
                return lastPageViewId;
            };
            _self.initializeIds = function () {
                if (!firstPageView) {
                    firstPageView = true;
                }
                else {
                    lastPageViewId = createGuid();
                }
            };
            _self.getMuidUserId = function () {
                var muidValue = getCookieValue(_cookieMgr, "MUID");
                return muidValue && muidValue.length ? "t:" + muidValue : muidValue;
            };
            _self.setAppUserId = function (uid) {
                appUserId = null;
                if (!uid) {
                    return;
                }
                for (var i = 0; i < userIdPrefixes.length; i++) {
                    if (userIdPrefixes[i] === uid.substring(0, 2)) {
                        appUserId = uid;
                        break;
                    }
                }
            };
            _self.setDeviceClass = function (newDeviceClass) {
                if (newDeviceClass) {
                    deviceClass = newDeviceClass;
                }
            };
            _self.getDeviceClass = function () {
                return deviceClass;
            };
            _self.getAppUserId = function () {
                return appUserId;
            };
            _self.syncMuid = function (muidHost) {
                var location = getLocation();
                if (location && muidHost) {
                    var muidsrc = (location.protocol || "http:") + "//" + muidHost + "/c.gif?DI=4050&did=1&t=";
                    var document_1 = getDocument();
                    if (document_1) {
                        var img = document_1.createElement("IMG");
                        img.style.display = "none";
                        img.src = muidsrc;
                        img.hidden = "";
                        img["aria-hidden"] = "true";
                        img.role = "presentation";
                    }
                    return true;
                }
                return false;
            };
            _self.getMuidHost = function (rootDomain) {
                return supportedMuidHosts[rootDomain];
            };
        });
    }
    Id.visitorId = function () {
        var userId = getCookieValue(safeGetCookieMgr(null), "MUID");
        return userId;
    };
    return Id;
}());

var Timespan = /** @class */ (function () {
    function Timespan() {
        this._timers = [];
    }
    Timespan.prototype._recordTimeSpan = function (counterName, isComplete) {
        var timestamp = new Date().getTime();
        if (!isComplete) {
            this._timers[counterName] = timestamp;
        }
        else {
            return timestamp - this._timers[counterName];
        }
    };
    return Timespan;
}());

function _getMetaData(metaTags, coreData, metaTagName) {
    var value = "";
    if (coreData && coreData[metaTagName]) {
        value = coreData[metaTagName];
    }
    else if (metaTags) {
        value = metaTags[metaTagName];
    }
    return value;
}
var WebEvent = /** @class */ (function () {
    function WebEvent(_webAnalyticsPlugin, _config, _contentHandler, _id, _pageTagsCallback, metaTags, _traceLogger) {
        this._webAnalyticsPlugin = _webAnalyticsPlugin;
        this._config = _config;
        this._contentHandler = _contentHandler;
        this._id = _id;
        this._pageTagsCallback = _pageTagsCallback;
        this.metaTags = metaTags;
        this._traceLogger = _traceLogger;
        this._pageTags = {};
    }
    WebEvent.prototype._setBasicProperties = function (event, overrideValues) {
        event.ver = MSCONTENT_PARTB_VERSION;
        event.id = this._id.getLastPageViewId();
        if (!isValueAssigned(event.name)) {
            event.name = _getPageName(this._config, overrideValues);
        }
        if (!isValueAssigned(event.uri) && isWindowObjectAvailable) {
            event.uri = _getUri(this._config, getLocation());
        }
    };
    WebEvent.prototype._setCommonProperties = function (event, eventProperties, overrideValues) {
        var _self = this;
        _self._setBasicProperties(event, overrideValues);
        _self._setPageTags(event, overrideValues);
        _self._pageTypeMetaTag = _getMetaData(_self.metaTags, _self._config.coreData, "pageType");
        _self._marketMetaTag = _getMetaData(_self.metaTags, _self._config.coreData, "market");
        _self._behaviorMetaTag = _getMetaData(_self.metaTags, _self._config.coreData, "behavior");
        if (isValueAssigned(overrideValues.pageType)) {
            event.pageType = overrideValues.pageType;
        }
        if (isValueAssigned(_self._pageTypeMetaTag) && !isValueAssigned(event.pageType)) {
            event.pageType = _self._pageTypeMetaTag;
        }
        if (isValueAssigned(_self._marketMetaTag)) {
            event.market = _self._marketMetaTag;
        }
        event.isLoggedIn = _getSignedInStatus(_self._config);
        eventProperties.cookieEnabled = areCookiesSupported();
    };
    WebEvent.prototype._setPageTags = function (event, overrideValues) {
        var _self = this;
        _self._pageTags = {};
        if (_self.metaTags) {
            _self._pageTags.metaTags = _self._pageTags.metaTags || {};
            objForEachKeySafe(_self.metaTags, function (metaTag, value) {
                if (metaTag !== "behavior" && metaTag !== "market" && metaTag !== "pageType") {
                    _self._pageTags.metaTags[metaTag] = value;
                }
            });
        }
        if (_self._config.coreData && _self._config.coreData.pageTags) {
            _self._pageTags = extend(true, _self._pageTags, _self._config.coreData.pageTags);
        }
        if (_self._pageTagsCallback) {
            _self._pageTags = extend(true, _self._pageTags, _self._pageTagsCallback());
        }
        if (isValueAssigned(overrideValues.pageTags)) {
            _self._pageTags = extend(true, _self._pageTags, overrideValues.pageTags);
        }
        event.properties = event.properties || {};
        event.properties["pageTags"] = _self._pageTags;
    };
    WebEvent.prototype._getBehavior = function (overrideValues) {
        var behavior;
        if (overrideValues && isValueAssigned(overrideValues.behavior)) {
            behavior = overrideValues.behavior;
        }
        else if (isValueAssigned(this._behaviorMetaTag)) {
            behavior = this._behaviorMetaTag;
        }
        return this._getValidBehavior(behavior);
    };
    WebEvent.prototype._getValidBehavior = function (behavior) {
        if (isValueAssigned(behavior)) {
            var validator = this._config.behaviorValidator || getAnyNumericBehavior;
            if (isFunction(validator)) {
                return validator(behavior);
            }
        }
        return 0;
    };
    WebEvent.prototype._getContentFormatted = function (content) {
        if (isValueAssigned(content)) {
            if (isArray(content)) {
                return JSON.stringify(content);
            }
            else {
                return _bracketIt(JSON.stringify(content));
            }
        }
        return undefined;
    };
    return WebEvent;
}());

var ContentUpdate = /** @class */ (function (_super) {
    __extendsFn(ContentUpdate, _super);
    function ContentUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentUpdate.prototype.trackContentUpdate = function (contentUpdateEvent, properties) {
        var ext = {};
        ext["web"] = {};
        ext["web"]["isManual"] = contentUpdateEvent.isManual;
        var event = {
            name: "Ms.Web.ContentUpdate",
            baseType: "ContentUpdateData",
            ext: ext,
            data: {},
            baseData: {},
            latency: 3
        };
        arrForEach([
            "name",
            "uri",
            "market",
            "pageType",
            "isLoggedIn",
            "id",
            "properties",
            "ver",
            "actionType",
            "behavior",
            "pageHeight",
            "content",
            "contentVer",
            "vpHeight",
            "vpWidth",
            "vScrollOffset",
            "hScrollOffset"
        ], function (key) {
            event.baseData[key] = contentUpdateEvent[key];
        });
        objForEachKeySafe(properties, function (property, value) {
            if (!event.data[property]) {
                event.data[property] = value;
            }
        });
        this._webAnalyticsPlugin.core.track(event);
    };
    ContentUpdate.prototype.captureContentUpdate = function (overrideValues, customProperties) {
        overrideValues = !isValueAssigned(overrideValues) ? {} : overrideValues;
        var event = {};
        var properties = isValueAssigned(customProperties) ? customProperties : {};
        this._setCommonProperties(event, properties, overrideValues);
        event.behavior = this._getBehavior(overrideValues);
        if (isValueAssigned(overrideValues.actionType)) {
            event.actionType = overrideValues.actionType;
        }
        var viewportDim = _getViewportDimensions();
        var scrollOffset = _getScrollOffset();
        event.pageHeight = isDocumentObjectAvailable ? document.body.scrollHeight : null;
        event.vpHeight = viewportDim.h;
        event.vpWidth = viewportDim.w;
        event.vScrollOffset = scrollOffset.v;
        event.hScrollOffset = scrollOffset.h;
        event.contentVer = CONTENT_VERSION;
        event.isManual = !overrideValues.isAuto;
        var content = this._getContentFormatted(overrideValues.content) || JSON.stringify(this._contentHandler.getVisibleContent());
        if (content) {
            event.content = content;
        }
        if (isValueAssigned(overrideValues.isDomComplete)) {
            properties.isDomComplete = overrideValues.isDomComplete;
        }
        else {
            properties.isDomComplete = false;
        }
        this.trackContentUpdate(event, properties);
    };
    return ContentUpdate;
}(WebEvent));

var PageAction = /** @class */ (function (_super) {
    __extendsFn(PageAction, _super);
    function PageAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageAction.prototype.trackPageAction = function (pageActionEvent, properties) {
        var ext = {};
        ext["web"] = {};
        ext["web"]["isManual"] = pageActionEvent.isManual;
        var event = {
            name: "Ms.Web.PageAction",
            baseType: "PageActionData",
            ext: ext,
            data: {},
            baseData: {},
            latency: 1
        };
        if (!isUndefined(pageActionEvent.sync)) {
            event.sync = pageActionEvent.sync;
        }
        event.baseData["name"] = pageActionEvent.name;
        event.baseData["uri"] = pageActionEvent.uri;
        event.baseData["market"] = pageActionEvent.market;
        event.baseData["pageType"] = pageActionEvent.pageType;
        event.baseData["isLoggedIn"] = pageActionEvent.isLoggedIn;
        event.baseData["id"] = pageActionEvent.id;
        event.baseData["properties"] = pageActionEvent.properties;
        event.baseData["ver"] = pageActionEvent.ver;
        event.baseData["actionType"] = pageActionEvent.actionType;
        event.baseData["behavior"] = pageActionEvent.behavior;
        event.baseData["clickCoordinates"] = pageActionEvent.clickCoordinates;
        event.baseData["content"] = pageActionEvent.content;
        event.baseData["contentVer"] = pageActionEvent.contentVer;
        event.baseData["targetUri"] = pageActionEvent.targetUri;
        objForEachKeySafe(properties, function (property, value) {
            if (!event.data[property]) {
                event.data[property] = value;
            }
        });
        this._webAnalyticsPlugin.core.track(event);
    };
    PageAction.prototype.capturePageAction = function (element, overrideValues, customProperties, isRightClick) {
        overrideValues = !isValueAssigned(overrideValues) ? {} : overrideValues;
        var pageActionEvent = {};
        var pageActionProperties = isValueAssigned(customProperties) ? customProperties : {};
        this._setCommonProperties(pageActionEvent, pageActionProperties, overrideValues);
        pageActionEvent.isManual = !overrideValues.isAuto;
        pageActionEvent.behavior = this._getBehavior(overrideValues);
        var elementContent = {};
        element = _returnDomObjectIfjQuery(element);
        if (isRightClick) {
            pageActionEvent.behavior = 9 ;
        }
        else {
            var config = this._config || {};
            if (element && config.syncPageActionNavClick) {
                if (overrideValues.actionType === ActionType.CLICKLEFT || overrideValues.actionType === ActionType.KEYBOARDENTER) {
                    if (element.tagName.toLowerCase() === "a") {
                        var href = (element.getAttribute("href") || "").toLowerCase();
                        if (href && (strStartsWith(href, "https:") || strStartsWith(href, "http:") || strStartsWith(href, ".") || strStartsWith(href, "/"))) {
                            pageActionEvent.sync = 3 ;
                        }
                    }
                }
            }
        }
        if (element) {
            pageActionEvent.targetUri = _getClickTarget(element);
            elementContent = this._contentHandler.getElementContent(element, EventType.PAGE_ACTION);
            elementContent = extend(elementContent, this._getCustomTags(element));
            if (elementContent && elementContent.bhvr && !isValueAssigned(overrideValues.behavior)) {
                var currentBehavior = _extractFieldFromObject(elementContent, "bhvr");
                pageActionEvent.behavior = this._getValidBehavior(currentBehavior);
            }
        }
        if (isValueAssigned(overrideValues.actionType)) {
            pageActionEvent.actionType = overrideValues.actionType;
        }
        if (isValueAssigned(overrideValues.clickCoordinateX) && isValueAssigned(overrideValues.clickCoordinateY)) {
            pageActionEvent.clickCoordinates = overrideValues.clickCoordinateX + "X" + overrideValues.clickCoordinateY;
        }
        if (isValueAssigned(overrideValues.targetUri)) {
            pageActionEvent.targetUri = overrideValues.targetUri;
        }
        pageActionEvent.contentVer = CONTENT_VERSION;
        var currentContent = overrideValues.content || elementContent;
        if (!isArray(currentContent)) {
            var pageActionContentTags = this._config.callback.pageActionContentTags;
            currentContent = extend(currentContent, typeof pageActionContentTags === "function" ? pageActionContentTags(element) : {}, overrideValues && overrideValues.contentTags ? overrideValues.contentTags : {});
        }
        pageActionEvent.content = this._getContentFormatted(currentContent);
        pageActionProperties.timeToAction = this._getTimeToClick();
        pageActionProperties.refUri = isValueAssigned(overrideValues.refUri) ? overrideValues.refUri : this._config.coreData.referrerUri;
        var cookieMgr = this._webAnalyticsPlugin.core && safeGetCookieMgr(this._webAnalyticsPlugin.core);
        var cookiesValue = _getCookies(this._config, cookieMgr, this._traceLogger);
        if (cookiesValue) {
            pageActionProperties.cookies = cookiesValue;
        }
        this.trackPageAction(pageActionEvent, pageActionProperties);
    };
    PageAction.prototype._getCustomTags = function (obj) {
        var customParameters = {};
        while (obj) {
            if (!_isPii(obj)) {
                for (var attr in obj.attributes) {
                    if (attr) {
                        if (obj.attributes[attr]) {
                            var nn = obj.attributes[attr].name;
                            if (nn) {
                                if (nn.toLowerCase().indexOf("ms.") === 0) {
                                    customParameters[nn] = obj.attributes[attr].value;
                                }
                            }
                        }
                    }
                }
            }
            obj = (obj.parentElement || obj.parentNode);
        }
        return customParameters;
    };
    PageAction.prototype._getTimeToClick = function () {
        var perf = getPerformance();
        if (perf && perf.timing) {
            var isNavigationStart = perf.timing.navigationStart;
            if (isNavigationStart && isNavigationStart !== 0) {
                return new Date().getTime() - isNavigationStart;
            }
        }
        return -1;
    };
    return PageAction;
}(WebEvent));

var PageUnload = /** @class */ (function (_super) {
    __extendsFn(PageUnload, _super);
    function PageUnload(_webAnalyticsPlugin, _config, _id, _traceLogger, timestamp, maxScroll) {
        var _this = _super.call(this, _webAnalyticsPlugin, _config, null, _id, {}, {}, _traceLogger) || this;
        _this._webAnalyticsPlugin = _webAnalyticsPlugin;
        _this._config = _config;
        _this._id = _id;
        _this._traceLogger = _traceLogger;
        _this._timestamp = timestamp;
        _this._maxScroll = maxScroll;
        return _this;
    }
    PageUnload.prototype.trackPageUnload = function (pageUnloadEvent, properties) {
        var ext = {};
        ext["web"] = {};
        ext["web"]["isManual"] = pageUnloadEvent.isManual;
        var event = {
            name: "Ms.Web.PageUnload",
            baseType: "PageUnloadData",
            ext: ext,
            data: {},
            baseData: {},
            latency: 3
        };
        var config = this._config || {};
        if (isUndefined(config.syncUnloadAction) || config.syncUnloadAction) {
            event.sync = 3 ;
        }
        event.baseData["name"] = pageUnloadEvent.name;
        event.baseData["uri"] = pageUnloadEvent.uri;
        event.baseData["id"] = pageUnloadEvent.id;
        event.baseData["properties"] = pageUnloadEvent.properties;
        event.baseData["ver"] = pageUnloadEvent.ver;
        event.baseData["market"] = pageUnloadEvent.market;
        event.baseData["pageType"] = pageUnloadEvent.pageType;
        event.baseData["isLoggedIn"] = pageUnloadEvent.isLoggedIn;
        objForEachKeySafe(properties, function (property, value) {
            if (!event.data[property]) {
                event.data[property] = value;
            }
        });
        this._webAnalyticsPlugin.core.track(event);
    };
    PageUnload.prototype.capturePageUnload = function (overrideValues, customProperties) {
        overrideValues = !isValueAssigned(overrideValues) ? {} : overrideValues;
        var event = {};
        var properties = isValueAssigned(customProperties) ? customProperties : {};
        var scrollHeight = isDocumentObjectAvailable ? document.body.scrollHeight : 0;
        this._setBasicProperties(event, overrideValues);
        event.isManual = !overrideValues.isAuto;
        properties.dwellTime = this._timestamp._recordTimeSpan("dwellTime", true);
        properties.scrollDepth = overrideValues.scrollDepth || this._maxScroll.v.toString() + "/" + scrollHeight.toString();
        properties.vpHeight = _getViewportDimensions().h;
        properties.vScrollOffset = overrideValues.vScrollOffset || this._maxScroll.v;
        if (isWindowObjectAvailable) {
            var perf = getPerformance();
            var windowPerformanceTiming = perf ? perf.timing : null;
            if (windowPerformanceTiming && windowPerformanceTiming.loadEventStart && windowPerformanceTiming.navigationStart) {
                if (windowPerformanceTiming.loadEventStart > 0) {
                    properties.pageLoadTime = windowPerformanceTiming.loadEventStart - windowPerformanceTiming.navigationStart;
                }
            }
        }
        this.trackPageUnload(event, properties);
    };
    return PageUnload;
}(WebEvent));

var PageView = /** @class */ (function (_super) {
    __extendsFn(PageView, _super);
    function PageView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageView.prototype.capturePageView = function (overrideValues, customProperties) {
        overrideValues = !isValueAssigned(overrideValues) ? {} : overrideValues;
        var pageViewEvent = {};
        var properties = isValueAssigned(customProperties) ? customProperties : {};
        this._setCommonProperties(pageViewEvent, properties, overrideValues);
        pageViewEvent.refUri = isValueAssigned(overrideValues.referrerUri) ? overrideValues.referrerUri : this._config.coreData.referrerUri;
        pageViewEvent.isManual = !overrideValues.isAuto;
        var cookieMgr = this._webAnalyticsPlugin.core && safeGetCookieMgr(this._webAnalyticsPlugin.core);
        var cookiesValue = _getCookies(this._config, cookieMgr, this._traceLogger);
        if (cookiesValue) {
            properties.cookies = cookiesValue;
        }
        properties.behavior = this._getBehavior(overrideValues);
        this._webAnalyticsPlugin.trackPageView(pageViewEvent, properties);
    };
    return PageView;
}(WebEvent));

var PageViewPerformance = /** @class */ (function (_super) {
    __extendsFn(PageViewPerformance, _super);
    function PageViewPerformance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageViewPerformance.prototype.capturePageViewPerformance = function (overrideValues, customProperties) {
        overrideValues = !isValueAssigned(overrideValues) ? {} : overrideValues;
        var event = {};
        var properties = isValueAssigned(customProperties) ? customProperties : {};
        this._setBasicProperties(event, overrideValues);
        this._setPageTags(event, overrideValues);
        event.isManual = !overrideValues.isAuto;
        properties.behavior = this._getBehavior(overrideValues);
        properties.vpHeight = overrideValues.vpHeight;
        properties.vpWidth = overrideValues.vpWidth;
        properties.framework = overrideValues.framework;
        properties.systemTiming = overrideValues.systemTiming;
        properties.customTiming = overrideValues.customTiming;
        this._webAnalyticsPlugin._populatePageViewPerformance(event);
        this._webAnalyticsPlugin.trackPageViewPerformance(event, properties);
    };
    return PageViewPerformance;
}(WebEvent));

var clickCaptureInputTypes = { BUTTON: true, CHECKBOX: true, RADIO: true, RESET: true, SUBMIT: true };
var AutoCaptureHandler = /** @class */ (function () {
    function AutoCaptureHandler(webAnalytics, diagLog) {
        var _this = this;
        var _plugin;
        var _logger;
        var _evtNamespace;
        var _clickAdded;
        var _scrollAdded;
        var _maxScrollAdded;
        var _resizeAdded;
        var _unloadAdded;
        var _domLoadedAdded;
        dynamicProto(AutoCaptureHandler, this, function (_self) {
            _initDefaults();
            _plugin = webAnalytics;
            _logger = diagLog;
            _evtNamespace = mergeEvtNamespace(createUniqueNamespace("AutoCaptureHandler"), _plugin._evtNamespace);
            _self._analyticsPlugin = _plugin;
            _self._traceLogger = _logger;
            _self.pageView = function () {
                _plugin && _plugin.capturePageView({ isAuto: true });
            };
            _self.onLoad = function () {
                if (_plugin && !_domLoadedAdded) {
                    onDomLoaded(function () {
                        _plugin && _plugin.capturePageViewPerformance({ isAuto: true });
                        _plugin && _plugin.captureContentUpdate({ isAuto: true, isDomComplete: true });
                    }, _evtNamespace);
                    _domLoadedAdded = true;
                }
            };
            _self.click = function () {
                if (!_clickAdded) {
                    var win = getWindow();
                    var doc = getDocument();
                    if (win && win.addEventListener) {
                        var event = (navigator.appVersion.indexOf("MSIE") !== -1) ? "click" : "mousedown";
                        eventOn(win, event, _processClick, _evtNamespace);
                        eventOn(win, "keyup", _processClick, _evtNamespace);
                    }
                    else if (doc && doc.attachEvent) {
                        eventOn(doc, "click", _processClick, _evtNamespace);
                        eventOn(doc, "keyup", _processClick, _evtNamespace);
                    }
                    _clickAdded = true;
                }
            };
            _self.scroll = function (debounceConfig) {
                if (!_scrollAdded) {
                    var processScroll = _debounce(
                    null,
                    function () {
                        _plugin && _plugin.captureContentUpdate({ isAuto: true, actionType: ActionType.SCROLL });
                    }, debounceConfig.scroll, _this);
                    eventOn(getWindow(), "scroll", processScroll, _evtNamespace);
                    _scrollAdded = true;
                }
            };
            _self.maxScroll = function (maxScroll) {
                if (!_maxScrollAdded) {
                    var getMaxScrollDepth = function () {
                        var currentScroll = _getScrollOffset();
                        maxScroll.v = maxScroll.v > currentScroll.v ? maxScroll.v : currentScroll.v;
                    };
                    eventOn(getWindow(), "scroll", getMaxScrollDepth, _evtNamespace);
                    _maxScrollAdded = true;
                }
            };
            _self.resize = function (debounceConfig) {
                if (!_resizeAdded) {
                    var processResize = _debounce(
                    function () {
                        _plugin && _plugin.captureContentUpdate({ isAuto: true, actionType: ActionType.RESIZE });
                    },
                    null, debounceConfig.resize, _this);
                    eventOn(getWindow(), "resize", processResize, _evtNamespace);
                    _resizeAdded = true;
                }
            };
            _self.onUnload = function () {
                function _doUnload() {
                    _plugin && _plugin.capturePageUnload({ isAuto: true });
                }
                if (!_unloadAdded) {
                    var coreConfig = ((_plugin || {}).core || {}).config;
                    var excludePageUnloadEvents = coreConfig.disablePageUnloadEvents;
                    addPageUnloadEventListener(_doUnload, excludePageUnloadEvents, _evtNamespace);
                    addPageHideEventListener(_doUnload, excludePageUnloadEvents, _evtNamespace);
                    _unloadAdded = true;
                }
            };
            _self.teardown = function (unloadCtx, unloadState) {
                eventOff(getWindow(), null, null, _evtNamespace);
                eventOff(getDocument(), null, null, _evtNamespace);
                removePageUnloadEventListener(null, _evtNamespace);
                removePageHideEventListener(null, _evtNamespace);
                _initDefaults();
            };
            _self._processClick = _processClick;
            function _processClick(clickEvent) {
                var clickCaptureElements = { A: true, BUTTON: true, AREA: true, INPUT: true };
                var win = getWindow();
                clickEvent = clickEvent || win.event;
                var element = clickEvent.srcElement || clickEvent.target;
                var overrideValues = {
                    isAuto: true,
                    clickCoordinateX: clickEvent.pageX,
                    clickCoordinateY: clickEvent.pageY
                };
                var isRightClick = _isRightClick(clickEvent);
                if (isRightClick) {
                    overrideValues.actionType = ActionType.CLICKRIGHT;
                }
                else if (_isLeftClick(clickEvent)) {
                    overrideValues.actionType = ActionType.CLICKLEFT;
                }
                else if (_isKeyboardEnter(clickEvent)) {
                    overrideValues.actionType = ActionType.KEYBOARDENTER;
                }
                else if (_isKeyboardSpace(clickEvent)) {
                    overrideValues.actionType = ActionType.KEYBOARDSPACE;
                }
                else if (_isMiddleClick(clickEvent)) {
                    overrideValues.actionType = ActionType.CLICKMIDDLE;
                }
                else {
                    return;
                }
                while (element && element.tagName) {
                    if (element.control && clickCaptureElements[element.control.tagName.toUpperCase()]) {
                        element = element.control;
                    }
                    if (!clickCaptureElements[element.tagName.toUpperCase()]) {
                        element = element.parentElement || element.parentNode;
                        continue;
                    }
                    else {
                        var sendEvent = element.tagName.toUpperCase() === "INPUT" ? clickCaptureInputTypes[element.type.toUpperCase()] : true;
                        if (sendEvent) {
                            _plugin && _plugin.capturePageAction(element, overrideValues, {}, isRightClick);
                        }
                        break;
                    }
                }
            }
            function _initDefaults() {
                _self._analyticsPlugin = null;
                _self._traceLogger = null;
                _plugin = null;
                _logger = null;
                _evtNamespace = null;
                _scrollAdded = false;
                _maxScrollAdded = false;
                _resizeAdded = false;
                _unloadAdded = false;
                _domLoadedAdded = false;
            }
        });
    }
    AutoCaptureHandler.__ieDyn=1;
    return AutoCaptureHandler;
}());

var _contentBlobFieldNameObjects = {
    longNames: {
        isShortNames: false,
        id: "data-bi-id",
        areaName: "data-bi-area",
        slotNumber: "data-bi-slot",
        contentName: "data-bi-name",
        contentSource: "data-bi-source",
        templateName: "data-bi-view",
        productId: "data-bi-product",
        contentType: "data-bi-type",
        parentId: "data-bi-parentid",
        parentName: "data-bi-parentname"
    },
    shortNames: {
        isShortNames: true,
        id: "data-bi-id",
        areaName: "data-bi-an",
        slotNumber: "data-bi-sn",
        contentName: "data-bi-cn",
        contentSource: "data-bi-cs",
        templateName: "data-bi-tn",
        productId: "data-bi-pid",
        contentType: "data-bi-ct",
        parentId: "data-bi-pi",
        parentName: "data-bi-pn"
    }
};
var _keyName = {
    longKeys: {
        parentId: "parentId",
        parentName: "parentName"
    },
    shortKeys: {
        parentId: "pI",
        parentName: "pN"
    }
};
var DomContentHandler = /** @class */ (function () {
    function DomContentHandler(_config, _traceLogger) {
        this._config = _config;
        this._traceLogger = _traceLogger;
        this._contentBlobFieldNames = null;
        this._contentBlobFieldNames = this._config.useShortNameForContentBlob === true ?
            _contentBlobFieldNameObjects.shortNames : _contentBlobFieldNameObjects.longNames;
    }
    DomContentHandler.prototype.getMetadata = function () {
        var msTags = {};
        var awaTags = {};
        if (isDocumentObjectAvailable) {
            awaTags = this._getMetaDataFromDOM("awa-", true);
            if (this._config.autoCapture && this._config.autoCapture.msTags) {
                msTags = this._getMetaDataFromDOM("ms.", false);
            }
        }
        return extend(true, awaTags, msTags);
    };
    DomContentHandler.prototype.getVisibleContent = function () {
        var viewportDim = _getViewportDimensions();
        var viewportBoundingRect = _getViewportBoundingRect(viewportDim);
        var elements = null;
        if (isDocumentObjectAvailable) {
            elements = document.querySelectorAll(_bracketIt(this._contentBlobFieldNames.areaName) + "," +
                _bracketIt(this._contentBlobFieldNames.slotNumber) + "," +
                _bracketIt(this._config.biBlobAttributeTag));
        }
        var arrayOfContents = [];
        if (elements) {
            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                if (!_isElementDnt(element)) {
                    if (_isElementTrulyVisible(element, viewportBoundingRect)) {
                        var elementContent = this.getElementContent(element, EventType.CONTENT_UPDATE);
                        if (elementContent) {
                            arrayOfContents.push(elementContent);
                        }
                    }
                }
            }
        }
        return arrayOfContents;
    };
    DomContentHandler.prototype.getElementContent = function (element, eventType) {
        if (!element) {
            return {};
        }
        var elementContent = {};
        var biBlobElement;
        var biBlobValue;
        var contentElement;
        if (!this._isTracked(element)) {
            biBlobElement = _findClosestByAttribute(element, this._config.biBlobAttributeTag);
            if (biBlobElement) {
                biBlobValue = biBlobElement.getAttribute(this._config.biBlobAttributeTag);
            }
            if (biBlobValue) {
                try {
                    elementContent = JSON.parse(biBlobValue);
                }
                catch (e) {
                    _throwInternal(this._traceLogger, 1 , 506 , "Can not parse " + biBlobValue);
                }
            }
            else {
                contentElement = _walkUpDomChainWithElementValidation(element, this._isTrackedWithDataBi);
                elementContent = extend(elementContent, this._populateElementContentwithDataBi(contentElement, element));
            }
        }
        else if (this._isTrackedWithDataM(element)) {
            biBlobElement = element;
            biBlobValue = biBlobElement.getAttribute(this._config.biBlobAttributeTag);
            try {
                elementContent = JSON.parse(biBlobValue);
            }
            catch (e) {
                _throwInternal(this._traceLogger, 1 , 506 , "Can not parse " + biBlobValue);
            }
        }
        else if (this._isTrackedWithDataBi(element)) {
            contentElement = element;
            elementContent = extend(elementContent, this._populateElementContentwithDataBi(contentElement, element));
        }
        _removeInvalidElements(elementContent);
        if (this._config.autoCapture.lineage && eventType === EventType.PAGE_ACTION) {
            elementContent = extend(elementContent, this.getLineageDetails(element));
        }
        if (this._config.autoPopulateParentIdAndParentName) {
            elementContent = extend(elementContent, this._getParentDetails(biBlobElement ? biBlobElement : contentElement, elementContent));
        }
        return elementContent;
    };
    DomContentHandler.prototype.getLineageDetails = function (element) {
        var name = [];
        var identifier = [];
        var lineageDelimiter = ">";
        var elementBiDataAttribute = this._config.biBlobAttributeTag;
        var elementModuleIdAttribute = "data-module-id";
        var containerName;
        var nameValue;
        var idValue;
        while (element) {
            var dataAttr = element.getAttribute(elementBiDataAttribute) || element[elementBiDataAttribute];
            var moduleIdAttribute = element.getAttribute(elementModuleIdAttribute) || element[elementModuleIdAttribute];
            if (dataAttr) {
                try {
                    var telemetryObject = JSON.parse(dataAttr);
                }
                catch (e) {
                    _throwInternal(this._traceLogger, 1 , 507 , "Can not parse " + dataAttr);
                }
                if (telemetryObject) {
                    nameValue = telemetryObject.cN || telemetryObject.cT;
                    idValue = telemetryObject.id || undefined;
                    if (nameValue || idValue) {
                        name.push(nameValue);
                        if (moduleIdAttribute) {
                            containerName = nameValue;
                        }
                        identifier.push(idValue);
                    }
                }
            }
            else {
                nameValue = element.getAttribute(this._contentBlobFieldNames.contentName) || element.getAttribute(this._contentBlobFieldNames.contentType);
                idValue = element.getAttribute(this._contentBlobFieldNames.id) || undefined;
                if (nameValue || idValue) {
                    name.push(nameValue);
                    if (moduleIdAttribute) {
                        containerName = nameValue;
                    }
                    identifier.push(idValue);
                }
            }
            element = element.parentElement;
        }
        var lineageDetails = {
            lineage: name.join(lineageDelimiter),
            lineageById: identifier.join(lineageDelimiter),
            lineageContainerName: containerName
        };
        return lineageDetails;
    };
    DomContentHandler.prototype._populateElementContentwithDataBi = function (contentElement, element) {
        var elementContent = {};
        if (!contentElement) {
            if (this._config.useDefaultContentName) {
                contentElement = element;
            }
            else {
                return elementContent;
            }
        }
        var areaElement = _findClosestByAttribute(contentElement, this._contentBlobFieldNames.areaName);
        var areaContent = extend({}, this._getAreaContent(areaElement));
        var customizedContentName = this._config.callback.contentName ? this._config.callback.contentName(contentElement, this._config.useDefaultContentName) : "";
        var defaultContentName = this._getDefaultContentName(element, this._config.useDefaultContentName);
        elementContent = {
            id: contentElement.getAttribute(this._contentBlobFieldNames.id) || contentElement.id || "",
            aN: areaContent.areaName,
            sN: contentElement.getAttribute(this._contentBlobFieldNames.slotNumber),
            cN: customizedContentName || contentElement.getAttribute(this._contentBlobFieldNames.contentName) || defaultContentName || contentElement.getAttribute("alt") || "",
            cS: contentElement.getAttribute(this._contentBlobFieldNames.contentSource) || areaContent.contentSource,
            tN: areaContent.templateName,
            pid: contentElement.getAttribute(this._contentBlobFieldNames.productId),
            cT: contentElement.getAttribute(this._contentBlobFieldNames.contentType) || areaContent.type,
            pI: contentElement.getAttribute(this._contentBlobFieldNames.parentId),
            pN: contentElement.getAttribute(this._contentBlobFieldNames.parentName)
        };
        if (!elementContent.id || !elementContent.aN || !elementContent.sN || !elementContent.cN) {
            _throwInternal(this._traceLogger, 2 , 515 , "Invalid content blob.  Missing required attributes (id, aN/area, sN/slot), cN/contentName. " +
                " Content information will still be collected!");
        }
        if (!this._contentBlobFieldNames.isShortNames) {
            elementContent = {
                contentId: elementContent.id,
                areaName: elementContent.aN,
                slotNumber: elementContent.sN,
                contentName: elementContent.cN,
                contentSource: elementContent.cS,
                templateName: elementContent.tN,
                productId: elementContent.pid,
                contentType: elementContent.cT,
                parentId: elementContent.pI,
                parentName: elementContent.pN
            };
        }
        for (var i = 0, attrib; i < contentElement.attributes.length; i++) {
            attrib = contentElement.attributes[i];
            if (attrib.name === this._contentBlobFieldNames.id ||
                attrib.name === this._contentBlobFieldNames.areaName ||
                attrib.name === this._contentBlobFieldNames.slotNumber ||
                attrib.name === this._contentBlobFieldNames.contentName ||
                attrib.name === this._contentBlobFieldNames.contentSource ||
                attrib.name === this._contentBlobFieldNames.templateName ||
                attrib.name === this._contentBlobFieldNames.productId ||
                attrib.name === this._contentBlobFieldNames.contentType ||
                attrib.name === this._contentBlobFieldNames.parentId ||
                attrib.name === this._contentBlobFieldNames.parentName ||
                attrib.name.indexOf("data-bi-") === -1) {
                continue;
            }
            var attribName = attrib.name.replace("data-bi-", "");
            elementContent[attribName] = attrib.value;
        }
        return elementContent;
    };
    DomContentHandler.prototype._getMetaDataFromDOM = function (prefix, removePrefix) {
        var metaElements;
        var metaData = {};
        if (isDocumentObjectAvailable) {
            metaElements = document.querySelectorAll("meta");
            for (var i = 0; i < metaElements.length; i++) {
                var meta = metaElements[i];
                if (meta.name) {
                    var mt = meta.name.toLowerCase();
                    if (mt.indexOf(prefix) === 0) {
                        var name = removePrefix ? meta.name.replace(prefix, "") : meta.name;
                        metaData[name] = meta.content;
                    }
                }
            }
        }
        return metaData;
    };
    DomContentHandler.prototype._getAreaContent = function (areaElement) {
        areaElement = _returnDomObjectIfjQuery(areaElement);
        if (areaElement) {
            return {
                areaName: areaElement.getAttribute(this._contentBlobFieldNames.areaName),
                templateName: areaElement.getAttribute(this._contentBlobFieldNames.templateName),
                contentSource: areaElement.getAttribute(this._contentBlobFieldNames.contentSource),
                product: areaElement.getAttribute(this._contentBlobFieldNames.productId),
                type: areaElement.getAttribute(this._contentBlobFieldNames.contentType)
            };
        }
    };
    DomContentHandler.prototype._getDefaultContentName = function (element, useDefaultContentName) {
        if (useDefaultContentName === false || _isPii(element) || !element.tagName) {
            return "";
        }
        var doc = getDocument() || {};
        var contentName;
        switch (element.tagName) {
            case "A":
                contentName = doc.all ? element.innerText || element.innerHTML : element.text || element.innerHTML;
                break;
            case "IMG":
            case "AREA":
                contentName = element.alt;
                break;
            default:
                contentName = element.value || element.name || element.alt || element.innerText || element.id;
        }
        return contentName.substring(0, MAX_CONTENTNAME_LENGTH);
    };
    DomContentHandler.prototype._getParentDetails = function (element, elementContent) {
        var parentIdKey = this._contentBlobFieldNames.isShortNames ? _keyName.shortKeys.parentId : _keyName.longKeys.parentId;
        var parentNameKey = this._contentBlobFieldNames.isShortNames ? _keyName.shortKeys.parentName : _keyName.longKeys.parentName;
        var parentId = elementContent[parentIdKey];
        var parentName = elementContent[parentNameKey];
        var parentInfo = {};
        if (parentId || parentName || !element) {
            return parentInfo;
        }
        return this._populateParentInfo(element, parentIdKey, parentNameKey);
    };
    DomContentHandler.prototype._isTrackedWithDataM = function (element) {
        var attrs = element.attributes;
        for (var i = 0; i < attrs.length; i++) {
            if (attrs[i].name === "data-m") {
                return true;
            }
        }
        return false;
    };
    DomContentHandler.prototype._isTrackedWithDataBi = function (element) {
        var attrs = element.attributes;
        for (var i = 0; i < attrs.length; i++) {
            if (attrs[i].name.indexOf("data-bi-") >= 0) {
                return true;
            }
        }
        return false;
    };
    DomContentHandler.prototype._isTracked = function (element) {
        var attrs = element.attributes;
        for (var i = 0; i < attrs.length; i++) {
            if (attrs[i].name === "data-m" || attrs[i].name.indexOf("data-bi-") >= 0) {
                return true;
            }
        }
        return false;
    };
    DomContentHandler.prototype._populateParentInfo = function (element, parentIdKey, parentNameKey) {
        var parentInfo = {};
        var elementBiDataAttribute = this._config.biBlobAttributeTag;
        var parentId;
        var parentName;
        var closestParentElement = _walkUpDomChainWithElementValidation(element.parentElement, this._isTracked);
        if (closestParentElement) {
            var dataAttr = closestParentElement.getAttribute(elementBiDataAttribute) || element[elementBiDataAttribute];
            if (dataAttr) {
                try {
                    var telemetryObject = JSON.parse(dataAttr);
                }
                catch (e) {
                    _throwInternal(this._traceLogger, 1 , 507 , "Can not parse " + dataAttr);
                }
                if (telemetryObject) {
                    parentId = telemetryObject.id;
                    parentName = telemetryObject.cN;
                }
            }
            else {
                parentId = closestParentElement.getAttribute(this._contentBlobFieldNames.id);
                parentName = closestParentElement.getAttribute(this._contentBlobFieldNames.contentName);
            }
            if (parentId) {
                parentInfo[parentIdKey] = parentId;
            }
            if (parentName) {
                parentInfo[parentNameKey] = parentName;
            }
        }
        return parentInfo;
    };
    return DomContentHandler;
}());

var defaultConfig$1 = objDeepFreeze({
    useDefaultContentName: true,
    useShortNameForContentBlob: true,
    debounceMs: cfgDfMerge({
        scroll: 600,
        resize: 3000
    }),
    biBlobAttributeTag: "data-m",
    isLoggedIn: false,
    shareAuthStatus: false,
    cookiesToCollect: ["MSFPC", "ANON"],
    autoCapture: cfgDfMerge({
        pageView: true,
        onLoad: true,
        onUnload: true,
        click: true,
        scroll: false,
        resize: false,
        lineage: false,
        jsError: true,
        msTags: true
    }),
    callback: cfgDfMerge({
        pageName: cfgDfFunc(),
        pageActionPageTags: cfgDfFunc(),
        pageViewPageTags: cfgDfFunc(),
        contentUpdatePageTags: cfgDfFunc(),
        pageActionContentTags: cfgDfFunc(),
        signedinStatus: cfgDfFunc()
    }),
    coreData: cfgDfMerge({
        referrerUri: isDocumentObjectAvailable ? document.referrer : "",
        requestUri: "",
        pageName: "",
        pageType: "",
        product: "",
        market: "",
        pageTags: {}
    }),
    autoPopulateParentIdAndParentName: false,
    syncMuid: false,
    muidDomain: "microsoft.com",
    mscomCookies: false,
    manageCv: false,
    urlCollectHash: false,
    urlCollectQuery: false,
    manualPageUnload: false,
    syncPageActionNavClick: true,
    syncUnloadAction: true,
    behaviorValidator: getAnyNumericBehavior
});
var ApplicationInsights$1 = /** @class */ (function (_super) {
    __extendsFn(ApplicationInsights, _super);
    function ApplicationInsights() {
        var _this = _super.call(this) || this;
        _this.identifier = "WebAnalyticsPlugin";
        _this.version = '4.4.2';
        var _pageView;
        var _pageAction;
        var _contentUpdate;
        var _pageUnload;
        var _pageViewPerformance;
        var _cvPlugin;
        var _theConfig;
        var _maxScroll;
        var _isPageUnloadFired = false;
        var _timespan;
        var _contentHandler;
        var _autoCaptureHandler;
        var _autoCaptureConfig;
        var _syncMuid;
        var _muidDomain;
        var _userSetContentHandler;
        dynamicProto(ApplicationInsights, _this, function (_self, _base) {
            _initDefaults();
            _self.updateCoreDataConfig = function (coreData) {
                _theConfig.coreData = extend(true, _theConfig.coreData, coreData);
            };
            _self.refreshMetadata = function () {
                var metaTags = _contentHandler.getMetadata();
                _pageView.metaTags = metaTags;
                _contentUpdate.metaTags = metaTags;
                _pageAction.metaTags = metaTags;
                _pageViewPerformance.metaTags = metaTags;
            };
            _self.initialize = function (coreConfig, core, extensions) {
                _base.initialize(coreConfig, core, extensions);
                _populateDefaults(coreConfig, extensions);
            };
            _self.processTelemetry = function (evt, itemCtx) {
                setProcessTelemetryTimings(evt, _self.identifier);
                var event = evt;
                if (event.baseType === "PageviewData") {
                    event.name = "Ms.Web.PageView";
                    event.latency = 3 ;
                }
                else if (event.baseType === "ExceptionData") {
                    event.name = "Ms.Web.ClientError";
                    event.latency = 1 ;
                    delete (event.baseData["aiDataContract"]);
                }
                else if (event.baseType === "PageviewPerformanceData") {
                    event.name = "Ms.Web.PageViewPerformance";
                    event.latency = 1 ;
                    delete (event.baseData["isValid"]);
                    delete (event.baseData["durationMs"]);
                }
                var cv = null;
                if (event.baseType !== "PageviewData") {
                    if (_theConfig.manageCv) {
                        cv = _cvPlugin.getCv();
                        if (cv) {
                            cv.increment();
                        }
                    }
                }
                else {
                    if (_theConfig.manageCv) {
                        cv = _cvPlugin.getCv();
                        if (!cv) {
                            cv = _cvPlugin.getCv();
                        }
                        else {
                            cv.seed();
                        }
                    }
                }
                _base.processTelemetry(event, itemCtx);
            };
            _self.trackEvent = function (event, customProperties) {
                event.latency = event.latency || 1 ;
                event.baseData = event.baseData || {};
                event.data = event.data || {};
                if (isValueAssigned(customProperties)) {
                    objForEachKeySafe(customProperties, function (prop, value) {
                        event.data[prop] = value;
                    });
                }
                _self.core.track(event);
            };
            _self.trackPageView = function (pageViewEvent, properties) {
                _resetPageUnloadProperties();
                _self.id.initializeIds();
                pageViewEvent.id = _self.id.getLastPageViewId();
                _base.sendPageViewInternal(pageViewEvent, properties, _getSystemProperties(pageViewEvent));
            };
            _self.capturePageView = function (overrideValues, customProperties) {
                _pageView.capturePageView(overrideValues, customProperties);
            };
            _self.trackPageViewPerformance = function (pageViewPerformance, customProperties) {
                _base.sendPageViewPerformanceInternal(pageViewPerformance, customProperties, _getSystemProperties(pageViewPerformance));
            };
            _self.capturePageViewPerformance = function (overrideValues, customProperties) {
                _pageViewPerformance.capturePageViewPerformance(overrideValues, customProperties);
            };
            _self.trackException = function (exception, customProperties) {
                exception.id = exception.id || createGuid();
                _base.sendExceptionInternal(exception, customProperties, _getSystemProperties(exception));
            };
            _self.trackPageAction = function (pageActionEvent, pageActionProperties) {
                _pageAction.trackPageAction(pageActionEvent, pageActionProperties);
            };
            _self.capturePageAction = function (element, overrideValues, customProperties, isRightClick) {
                if (_isClickTelemetryAllowed(element, overrideValues)) {
                    _pageAction.capturePageAction(element, overrideValues, customProperties, isRightClick);
                }
            };
            _self.trackContentUpdate = function (contentUpdateEvent, properties) {
                _contentUpdate.trackContentUpdate(contentUpdateEvent, properties);
            };
            _self.captureContentUpdate = function (overrideValues, customProperties) {
                _contentUpdate.captureContentUpdate(overrideValues, customProperties);
            };
            _self.trackPageUnload = function (pageUnloadEvent, properties) {
                if (!_isPageUnloadFired) {
                    _isPageUnloadFired = true;
                    _pageUnload.trackPageUnload(pageUnloadEvent, properties);
                }
            };
            _self.capturePageUnload = function (overrideValues, customProperties) {
                if (!_isPageUnloadFired) {
                    _isPageUnloadFired = true;
                    _pageUnload.capturePageUnload(overrideValues, customProperties);
                }
            };
            _self._populatePageViewPerformance = function (pageViewPerformance) {
                var perfManager = _self._pageViewPerformanceManager;
                if (perfManager) {
                    perfManager.populatePageViewPerformanceEvent(pageViewPerformance);
                }
            };
            _self.setContentHandler = function (contentHandler) {
                _contentHandler = _userSetContentHandler = contentHandler;
            };
            _self.setAutoCaptureHandler = function (autoCaptureHandler) {
                if (_autoCaptureHandler !== autoCaptureHandler) {
                    _autoCaptureHandler && _autoCaptureHandler.teardown();
                    _autoCaptureHandler = autoCaptureHandler;
                    _setupAutoCapture(false);
                }
            };
            _self._doTeardown = function (unloadCtx, unloadState) {
                _autoCaptureHandler && _autoCaptureHandler.teardown(unloadCtx, unloadState);
                _base._doTeardown(unloadCtx, unloadState);
                _initDefaults();
            };
            _self["_getDbgPlgTargets"] = function () {
                return [_theConfig];
            };
            function _populateDefaults(coreConfig, extensions) {
                var core = _self.core;
                var logger = _self.diagLog();
                _self.id = new Id(core);
                _timespan = new Timespan();
                _autoCaptureHandler = _autoCaptureHandler ? _autoCaptureHandler : new AutoCaptureHandler(_self, logger);
                _self._addHook(onConfigChange(coreConfig, function () {
                    var ctx = createProcessTelemetryContext(null, coreConfig, core);
                    var extConfig = ctx.getExtCfg(_self.identifier, defaultConfig$1);
                    _theConfig = extConfig;
                    _autoCaptureConfig = _theConfig.autoCapture;
                    var existingGetWParamMethod = core.getWParam;
                    core.getWParam = function () {
                        var wparam = 0;
                        if (_theConfig.mscomCookies) {
                            wparam = wparam | 1;
                        }
                        return wparam | existingGetWParamMethod.call(core);
                    };
                    _theConfig.disableExceptionTracking = coreConfig.extensionConfig[_self.identifier].disableExceptionTracking = !_autoCaptureConfig.jsError;
                    if (_theConfig.manageCv) {
                        for (var i = 0; i < extensions.length; i++) {
                            if ((extensions[i]).identifier === "CorrelationVectorPlugin") {
                                _theConfig.manageCv = true;
                                _cvPlugin = extensions[i];
                                break;
                            }
                        }
                        if (!_cvPlugin) {
                            _throwInternal(_self.diagLog(), 2 , 508 , "Automatic Cv management is set to \"true\" in config.  However, cv plugin is not available. Disabling automatic Cv management");
                            _theConfig.manageCv = false;
                        }
                    }
                    _contentHandler = _userSetContentHandler || new DomContentHandler(_theConfig, logger);
                    var callback = _theConfig.callback;
                    var metaTags = _contentHandler.getMetadata();
                    var id = _self.id;
                    _contentUpdate = new ContentUpdate(_self, _theConfig, _contentHandler, id, callback.contentUpdatePageTags, metaTags, logger);
                    _pageView = new PageView(_self, _theConfig, _contentHandler, id, callback.pageViewPageTags, metaTags, logger);
                    _pageAction = new PageAction(_self, _theConfig, _contentHandler, id, callback.pageActionPageTags, metaTags, logger);
                    _contentUpdate = new ContentUpdate(_self, _theConfig, _contentHandler, id, callback.contentUpdatePageTags, metaTags, logger);
                    _pageUnload = new PageUnload(_self, _theConfig, id, logger, _timespan, _maxScroll);
                    _pageViewPerformance = new PageViewPerformance(_self, _theConfig, _contentHandler, id, callback.pageViewPageTags, metaTags, logger);
                    _updateMuid();
                    _syncMuid = !!_theConfig.syncMuid;
                    _muidDomain = _theConfig.muidDomain;
                }));
                _setupAutoCapture(true);
            }
            function _updateMuid() {
                var syncMuid = !!_theConfig.syncMuid;
                var shouldUpdate = !_syncMuid || (_muidDomain !== _theConfig.muidDomain);
                if (syncMuid && shouldUpdate) {
                    onDomLoaded(function () {
                        var muidDomain = _self.id.getMuidHost(_theConfig.muidDomain);
                        _self.id.syncMuid(muidDomain);
                    }, _self._evtNamespace);
                }
            }
            function _initDefaults() {
                _pageView = null;
                _pageAction = null;
                _contentUpdate = null;
                _pageUnload = null;
                _pageViewPerformance = null;
                _cvPlugin = null;
                _theConfig = null;
                _maxScroll = { h: 0, v: 0 };
                _isPageUnloadFired = false;
                _timespan = null;
                _contentHandler = null;
                _autoCaptureHandler = null;
                _autoCaptureConfig = null;
                _syncMuid = false;
                _muidDomain = null;
            }
            function _setupAutoCapture(isInitialize) {
                if (_autoCaptureHandler) {
                    if (isInitialize) {
                        if (_autoCaptureConfig.pageView) {
                            _autoCaptureHandler.pageView();
                        }
                        if (_autoCaptureConfig.onLoad) {
                            _autoCaptureHandler.onLoad();
                        }
                    }
                    if (_autoCaptureConfig.click) {
                        _autoCaptureHandler.click();
                    }
                    if (_autoCaptureConfig.scroll) {
                        _autoCaptureHandler.scroll(_theConfig.debounceMs);
                    }
                    if (_autoCaptureConfig.resize) {
                        _autoCaptureHandler.resize(_theConfig.debounceMs);
                    }
                    if (_autoCaptureConfig.onUnload || _theConfig.manualPageUnload) {
                        _autoCaptureHandler.maxScroll(_maxScroll);
                    }
                    if (_autoCaptureConfig.onUnload) {
                        _autoCaptureHandler.onUnload();
                    }
                }
            }
            function _getSystemProperties(event) {
                var ext = {};
                if (event.isManual !== undefined) {
                    ext["web"] = {};
                    ext["web"]["isManual"] = event.isManual !== undefined ? event.isManual : true;
                    delete (event.isManual);
                }
                return ext;
            }
            function _resetPageUnloadProperties() {
                _timespan._recordTimeSpan("dwellTime", false);
                _maxScroll.v = 0;
                _isPageUnloadFired = false;
            }
        });
        return _this;
    }
    ApplicationInsights.__ieDyn=1;
    return ApplicationInsights;
}(AnalyticsPlugin));

/*!
 * NevWare21 Solutions LLC - ts-async, 0.6.1
 * https://github.com/nevware21/ts-async
 * Copyright (c) NevWare21 Solutions LLC and contributors. All rights reserved.
 * Licensed under the MIT license.
 */
var STR_PROMISE = "Promise";
var REJECTED = "rejected";
function doAwait(value, resolveFn, rejectFn, finallyFn) {
    var result = value;
    try {
        if (isPromiseLike(value)) {
            if (resolveFn || rejectFn) {
                result = value.then(resolveFn, rejectFn);
            }
        }
        else {
            try {
                if (resolveFn) {
                    result = resolveFn(value);
                }
            }
            catch (err) {
                if (rejectFn) {
                    result = rejectFn(err);
                }
                else {
                    throw err;
                }
            }
        }
    }
    finally {
        if (finallyFn) {
            doFinally(result, finallyFn);
        }
    }
    return result;
}
function doFinally(value, finallyFn) {
    var result = value;
    if (finallyFn) {
        if (isPromiseLike(value)) {
            if (value.finally) {
                result = value.finally(finallyFn);
            }
            else {
                result = value.then(function (value) {
                    return doAwait(finallyFn(), function () {
                        return value;
                    });
                }, function (reason) {
                    return doAwait(finallyFn(), function () {
                        throw reason;
                    });
                });
            }
        }
        else {
            finallyFn();
        }
    }
    return result;
}
var STRING_STATES = [
    "pending", "resolving", "resolved", REJECTED
];
var DISPATCH_EVENT = "dispatchEvent";
var _hasInitEvent;
function _hasInitEventFn(doc) {
    var evt;
    if (doc && doc.createEvent) {
        evt = doc.createEvent("Event");
    }
    return (!!evt && evt.initEvent);
}
function emitEvent(target, evtName, populateEvent, useNewEvent) {
    var doc = getDocument();
    !_hasInitEvent && (_hasInitEvent = createCachedValue(!!safe(_hasInitEventFn, [doc]).v));
    var theEvt = _hasInitEvent.v ? doc.createEvent("Event") : (useNewEvent ? new Event(evtName) : {});
    populateEvent && populateEvent(theEvt);
    if (_hasInitEvent.v) {
        theEvt.initEvent(evtName, false, true);
    }
    if (theEvt && target[DISPATCH_EVENT]) {
        target[DISPATCH_EVENT](theEvt);
    }
    else {
        var handler = target["on" + evtName];
        if (handler) {
            handler(theEvt);
        }
        else {
            var theConsole = getInst("console");
            theConsole && (theConsole["error"] || theConsole["log"])(evtName, dumpObj(theEvt));
        }
    }
}
var NODE_UNHANDLED_REJECTION = "unhandledRejection";
var UNHANDLED_REJECTION = NODE_UNHANDLED_REJECTION.toLowerCase();
var _unhandledRejectionTimeout = 10;
var _hasPromiseRejectionEvent;
function dumpFnObj(value) {
    if (isFunction(value)) {
        return value.toString();
    }
    return dumpObj(value);
}
function _createPromise(newPromise, processor, executor) {
    var additionalArgs = arrSlice(arguments, 3);
    var _state = 0 ;
    var _hasResolved = false;
    var _settledValue;
    var _queue = [];
    var _handled = false;
    var _unHandledRejectionHandler = null;
    var _thePromise;
    function _then(onResolved, onRejected) {
        try {
            _handled = true;
            _unHandledRejectionHandler && _unHandledRejectionHandler.cancel();
            _unHandledRejectionHandler = null;
            var thenPromise = newPromise(function (resolve, reject) {
                _queue.push(function () {
                    try {
                        var handler = _state === 2  ? onResolved : onRejected;
                        var value = isFunction(handler) ? handler(_settledValue) : _settledValue;
                        if (isPromiseLike(value)) {
                            value.then(resolve, reject);
                        }
                        else if (isFunction(handler)) {
                            resolve(value);
                        }
                        else if (_state === 3 ) {
                            reject(value);
                        }
                        else {
                            resolve(value);
                        }
                    }
                    catch (e) {
                        reject(e);
                    }
                });
                if (_hasResolved) {
                    _processQueue();
                }
            }, additionalArgs);
            return thenPromise;
        }
        finally {
        }
    }
    function _catch(onRejected) {
        return _then(undefined, onRejected);
    }
    function _finally(onFinally) {
        var thenFinally = onFinally;
        var catchFinally = onFinally;
        if (isFunction(onFinally)) {
            thenFinally = function (value) {
                return doAwait(onFinally && onFinally(), function () {
                    return value;
                });
            };
            catchFinally = function (reason) {
                return doAwait(onFinally && onFinally(), function () {
                    throw reason;
                });
            };
        }
        return _then(thenFinally, catchFinally);
    }
    function _strState() {
        return STRING_STATES[_state];
    }
    function _processQueue() {
        if (_queue.length > 0) {
            var pending = _queue.slice();
            _queue = [];
            _handled = true;
            _unHandledRejectionHandler && _unHandledRejectionHandler.cancel();
            _unHandledRejectionHandler = null;
            processor(pending);
        }
    }
    function _createSettleIfFn(newState, allowState) {
        return function (theValue) {
            if (_state === allowState) {
                if (newState === 2  && isPromiseLike(theValue)) {
                    _state = 1 ;
                    theValue.then(_createSettleIfFn(2 , 1 ), _createSettleIfFn(3 , 1 ));
                    return;
                }
                _state = newState;
                _hasResolved = true;
                _settledValue = theValue;
                _processQueue();
                if (!_handled && newState === 3  && !_unHandledRejectionHandler) {
                    _unHandledRejectionHandler = scheduleTimeout(_notifyUnhandledRejection, _unhandledRejectionTimeout);
                }
            }
        };
    }
    function _notifyUnhandledRejection() {
        if (!_handled) {
            _handled = true;
            if (isNode()) {
                process.emit(NODE_UNHANDLED_REJECTION, _settledValue, _thePromise);
            }
            else {
                var gbl = getWindow() || getGlobal();
                !_hasPromiseRejectionEvent && (_hasPromiseRejectionEvent = createCachedValue(safe((getInst), [STR_PROMISE + "RejectionEvent"]).v));
                emitEvent(gbl, UNHANDLED_REJECTION, function (theEvt) {
                    objDefine(theEvt, "promise", { g: function () { return _thePromise; } });
                    theEvt.reason = _settledValue;
                    return theEvt;
                }, !!_hasPromiseRejectionEvent.v);
            }
        }
    }
    _thePromise = {
        then: _then,
        "catch": _catch,
        finally: _finally
    };
    objDefineProp(_thePromise, "state", {
        get: _strState
    });
    if (hasSymbol()) {
        _thePromise[getKnownSymbol(11 )] = "IPromise";
    }
    function _toString() {
        return "IPromise" + ("") + " " + _strState() + (_hasResolved ? (" - " + dumpFnObj(_settledValue)) : "") + ("");
    }
    _thePromise.toString = _toString;
    (function _initialize() {
        if (!isFunction(executor)) {
            throwTypeError(STR_PROMISE + ": executor is not a function - " + dumpFnObj(executor));
        }
        var _rejectFn = _createSettleIfFn(3 , 0 );
        try {
            executor.call(_thePromise, _createSettleIfFn(2 , 0 ), _rejectFn);
        }
        catch (e) {
            _rejectFn(e);
        }
    })();
    return _thePromise;
}
/*#__NO_SIDE_EFFECTS__*/
function _normalizeTimeoutValue(timeout, defaultTimeout) {
    var result = defaultTimeout;
    if (!isUndefined(timeout)) {
        if (isNumber(timeout)) {
            result = timeout;
        }
        else {
            while (!isUndefined(timeout) && isArray(timeout) && timeout.length > 0) {
                timeout = timeout[0];
                if (isNumber(timeout)) {
                    result = timeout;
                    break;
                }
            }
        }
    }
    return result;
}
function _isFakeTimersEnabled() {
    var setTimeoutFn = setTimeout;
    return !!(setTimeoutFn && setTimeoutFn.clock);
}
function syncItemProcessor(pending) {
    arrForEach(pending, function (fn) {
        try {
            fn();
        }
        catch (e) {
        }
    });
}
function timeoutItemProcessor(timeout) {
    var timeoutValue = _normalizeTimeoutValue(timeout);
    var hasTimeout = isNumber(timeoutValue);
    var callbackTimeout = hasTimeout ? timeoutValue : 0;
    return function (pending) {
        function _processPending() {
            syncItemProcessor(pending);
        }
        if (hasTimeout && callbackTimeout > 0) {
            scheduleTimeout(_processPending, callbackTimeout);
        }
        else if (_isFakeTimersEnabled()) {
            scheduleTimeout(_processPending, 0);
        }
        else {
            scheduleMicrotask(_processPending);
        }
    };
}
function createAsyncPromise(executor, timeout) {
    return _createPromise(createAsyncPromise, timeoutItemProcessor(timeout), executor, timeout);
}
var _promiseCls;
function createNativePromise(executor, timeout) {
    !_promiseCls && (_promiseCls = createCachedValue((safe(getInst, [STR_PROMISE]).v) || null));
    var PrmCls = _promiseCls.v;
    if (!PrmCls) {
        return createAsyncPromise(executor);
    }
    if (!isFunction(executor)) {
        throwTypeError(STR_PROMISE + ": executor is not a function - " + dumpObj(executor));
    }
    var _state = 0 ;
    function _strState() {
        return STRING_STATES[_state];
    }
    var thePromise = new PrmCls(function (resolve, reject) {
        function _resolve(value) {
            _state = 2 ;
            resolve(value);
        }
        function _reject(reason) {
            _state = 3 ;
            reject(reason);
        }
        executor(_resolve, _reject);
    });
    objDefineProp(thePromise, "state", {
        get: _strState
    });
    return thePromise;
}
var _promiseCreator;
function createPromise(executor, timeout) {
    !_promiseCreator && (_promiseCreator = createCachedValue(createNativePromise));
    return _promiseCreator.v.call(this, executor, timeout);
}

var _a;
var defaultConfig = objDeepFreeze({
    cookieCfg: { ref: true, v: {} },
    extensions: { rdOnly: true, ref: true, v: [] },
    channels: { rdOnly: true, ref: true, v: [] },
    featureOptIn: (_a = {},
        _a["zipPayload"] = { mode: 1 },
        _a),
    extensionConfig: { ref: true, v: {} }
});
function _initOTel(sku, traceName, onEnd) {
    var otelApi = getDeferred(createOTelApi, [{
            host: sku
        }]);
    sku.setTraceProvider(getDeferred(function () {
        return createTraceProvider(sku, traceName, otelApi.v, onEnd);
    }));
    return otelApi;
}
var _ignoreUpdateSnippetProperties = [
    "snippet", "_webAnalytics", "_postChannel", "_propertyManager", "_extensions"
];
var _ignoreUpdateDefineSnippetProperties = [
    "queue", "extensions", "version", "sv"
];
var ApplicationInsights = /** @class */ (function (_super) {
    __extendsFn(ApplicationInsights, _super);
    function ApplicationInsights() {
        var _this = _super.call(this) || this;
        var _webAnalytics;
        var _postChannel;
        var _propertyManager;
        var _otelApi;
        dynamicProto(ApplicationInsights, _this, function (_self, _base) {
            _initDefaults();
            objDefine(_self, "otelApi", {
                g: function () {
                    return _otelApi ? _otelApi.v : null;
                }
            });
            objDefine(_self, "trace", {
                g: function () {
                    return _otelApi ? _otelApi.v.trace : null;
                }
            });
            _self.initialize = function (config, extensions) {
                doPerf(_self, function () { return "ApplicationInsights:initialize"; }, function () {
                    config = createDynamicConfig(config, defaultConfig, _self.logger, false).cfg;
                    var plugins = [_propertyManager, _webAnalytics];
                    if (extensions) {
                        plugins = plugins.concat(extensions);
                    }
                    if (!config) {
                        throwError("You must provide a config object!");
                    }
                    if (config.channels && config.channels.length > 0) {
                        var postFound = false;
                        for (var j = 0; j < config.channels[0].length; j++) {
                            if (config.channels[0][j].identifier === _postChannel.identifier) {
                                postFound = true;
                                break;
                            }
                        }
                        if (!postFound) {
                            arrAppend(config.channels[0], _postChannel);
                        }
                    }
                    else {
                        config.channels.push([_postChannel]);
                    }
                    var extConfig = config.extensionConfig = config.extensionConfig || [];
                    extConfig[_postChannel.identifier] = extConfig[_postChannel.identifier] || (config && config.channelConfiguration) || {};
                    extConfig[_propertyManager.identifier] = extConfig[_propertyManager.identifier] || (config && config.propertyConfiguration) || {};
                    extConfig[_webAnalytics.identifier] = extConfig[_webAnalytics.identifier] || (config && config.webAnalyticsConfiguration) || {};
                    try {
                        _base.initialize(config, plugins);
                        if (_self.isInitialized()) {
                            objDefineProps(config, {
                                channelConfiguration: { g: function () { return config.extensionConfig[_postChannel.identifier]; } },
                                propertyConfiguration: { g: function () { return config.extensionConfig[_propertyManager.identifier]; } },
                                webAnalyticsConfiguration: { g: function () { return config.extensionConfig[_webAnalytics.identifier]; } }
                            });
                            if (!_otelApi) {
                                _otelApi = _initOTel(_self, "aisku", _onEnd);
                            }
                        }
                    }
                    catch (error) {
                        _throwInternal(_self.logger, 1 , 514 , "Failed to initialize SDK." + dumpObj(error));
                    }
                }, function () { return ({ config: config, extensions: extensions }); });
            };
            _self.getPropertyManager = function () {
                return _propertyManager;
            };
            _self.getPostChannel = function () {
                return _postChannel;
            };
            _self.getWebAnalyticsExtension = function () {
                return _webAnalytics;
            };
            proxyFunctions(_self, function () { return _webAnalytics; }, [
                "trackEvent",
                "trackPageView",
                "trackPageAction",
                "trackContentUpdate",
                "trackPageUnload",
                "trackException",
                "trackPageViewPerformance",
                "capturePageView",
                "capturePageViewPerformance",
                "capturePageAction",
                "captureContentUpdate",
                "capturePageUnload",
                "_onerror"
            ]);
            _self.emptySnippetQueue = function (snippet) {
                function _updateSnippetProperties() {
                    if (snippet) {
                        objForEachKey(_self, function (field, value) {
                            if (isString(field) &&
                                !isFunction(value) &&
                                field && field[0] !== "_" &&
                                arrIndexOf(_ignoreUpdateSnippetProperties, field) === -1) {
                                try {
                                    snippet[field] = value;
                                }
                                catch (error) {
                                    _throwInternal(_self.logger, 2 , 514 , "Failed to set [" + field + "] during initialization." + dumpObj(error));
                                }
                            }
                        });
                    }
                }
                try {
                    _updateSnippetProperties();
                    if (isArray(snippet.queue)) {
                        var length = snippet.queue.length;
                        for (var i = 0; i < length; i++) {
                            var call = snippet.queue[i];
                            call();
                        }
                        snippet.queue = undefined;
                        delete snippet.queue;
                    }
                }
                catch (exception) {
                    var properties = {};
                    if (exception && isFunction(exception.toString)) {
                        properties.exception = exception.toString();
                    }
                }
            };
            _self.updateSnippetDefinitions = function (snippet) {
                var _self = _this;
                _self.snippet = snippet;
                var snipCfg = snippet.config;
                if (snipCfg) {
                    _self.updateCfg(snippet.config, true);
                }
                proxyAssign(snippet, _self, function (name) {
                    return name && arrIndexOf(_ignoreUpdateSnippetProperties, name) === -1 && arrIndexOf(_ignoreUpdateDefineSnippetProperties, name) === -1;
                });
            };
            _self.unload = function (isAsync, unloadComplete, cbTimeout) {
                if (isAsync === void 0) { isAsync = true; }
                var unloadDone = false;
                var result;
                if (isAsync !== false && !unloadComplete) {
                    result = createPromise(function (resolve) {
                        unloadComplete = resolve;
                    });
                }
                function _unloadCallback(unloadState) {
                    if (!unloadDone) {
                        unloadDone = true;
                        _base.setTraceProvider(null);
                        if (_otelApi) {
                            _otelApi.v.shutdown();
                        }
                        _otelApi = null;
                        _initDefaults();
                        unloadComplete && unloadComplete(unloadState);
                    }
                }
                _base.unload && _base.unload(isAsync, _unloadCallback, cbTimeout);
                return result;
            };
            function _onEnd(span) {
                if (_otelApi && span && span.isRecording() && !_otelApi.v.cfg.traceCfg.suppressTracing) {
                    useSpan(_self, span, function () {
                        try {
                            var telemetryItem = createExtendedTelemetryItemFromSpan(_self, span);
                            if (telemetryItem) {
                                _self.track(telemetryItem);
                            }
                        }
                        catch (error) {
                            _throwInternal(_self.logger, 2 , 64 , "Error processing span - " + dumpObj(error));
                        }
                    });
                }
            }
        });
        function _initDefaults() {
            _postChannel = new PostChannel();
            _propertyManager = new PropertiesPlugin();
            _webAnalytics = new ApplicationInsights$1();
        }
        return _this;
    }
    ApplicationInsights.__ieDyn=1;
    return ApplicationInsights;
}(AppInsightsExtCore));

function _logWarn(aiName, message) {
    var _console = typeof console !== strShimUndefined ? console : null;
    if (_console) {
        var func = "warn";
        if (!_console[func]) {
            func = "log";
        }
        _console[func]("Failed to initialize AppInsights JS SDK for instance " + (aiName || "<unknown>") + " - " + message);
    }
}
(function () {
    try {
        var aiName = "oneDSWeb";
        var global = getGlobal();
        if (global) {
            if (typeof JSON !== strShimUndefined) {
                aiName = global["onedsSDK"] || aiName;
                if (global[aiName] !== undefined) {
                    var snippet = global[aiName];
                    var ai = new ApplicationInsights();
                    ai.updateSnippetDefinitions(snippet);
                    ai.initialize(snippet.config, snippet.extensions);
                    global[aiName] = ai;
                    ai.emptySnippetQueue(snippet);
                }
            }
            else {
                _logWarn(aiName, "Missing JSON - you must supply a JSON polyfill!");
            }
        }
        else {
            _logWarn(aiName, "Missing global/window");
        }
    }
    catch (e) {
        _logWarn(aiName, "Unexpected Error: " + dumpObj(e));
    }
})();

exports.ActionType = ActionType;
exports.AppInsightsCore = AppInsightsExtCore;
exports.ApplicationInsights = ApplicationInsights;
exports.AutoCaptureHandler = AutoCaptureHandler;
exports.BE_PROFILE = BE_PROFILE;
exports.DiagnosticLogger = DiagnosticLogger;
exports.EventLatency = EventLatency;
exports.EventPersistence = EventPersistence;
exports.EventsDiscardedReason = EventsDiscardedReason;
exports.MinChannelPriorty = MinChannelPriorty;
exports.NRT_PROFILE = NRT_PROFILE;
exports.NotificationManager = NotificationManager;
exports.OTelSpanKind = OTelSpanKind;
exports.OTelSpanStatusCode = OTelSpanStatusCode;
exports.PostChannel = PostChannel;
exports.PropertiesPlugin = PropertiesPlugin;
exports.RT_PROFILE = RT_PROFILE;
exports.TraceLevel = TraceLevel;
exports.ValueKind = ValueKind;
exports.WebAnalytics = ApplicationInsights$1;
exports.isTracingSuppressed = isTracingSuppressed;
exports.suppressTracing = suppressTracing;
exports.unsuppressTracing = unsuppressTracing;
exports.useSpan = useSpan;
exports.withSpan = withSpan;

}));
//# sourceMappingURL=ms.analytics-web-4.4.2.js.map
