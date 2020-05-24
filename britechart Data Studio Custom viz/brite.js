!function(e,R){"object"==typeof exports&&"object"==typeof module?module.exports=R():"function"==typeof define&&define.amd?define("dscc",[],R):"object"==typeof exports?exports.dscc=R():e.dscc=R()}(window,function(){return t={},n.m=C={"./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */function(e,N,R){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var R,C=1,t=arguments.length;C<t;C++)for(var n in R=arguments[C])Object.prototype.hasOwnProperty.call(R,n)&&(e[n]=R[n]);return e}).apply(this,arguments)};Object.defineProperty(N,"__esModule",{value:!0});
/*!
  @license
  Copyright 2019 Google LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
var _=R(/*! ./types */"./src/types.ts");!function(e){for(var R in e)N.hasOwnProperty(R)||(N[R]=e[R])}(R(/*! ./types */"./src/types.ts")),N.getWidth=function(){return document.body.clientWidth},N.getHeight=function(){return document.documentElement.clientHeight},N.getComponentId=function(){var e=new URLSearchParams(window.location.search);if(null!==e.get("dscId"))return e.get("dscId");throw new Error("dscId must be in the query parameters. This is a bug in ds-component, please file a bug: https://github.com/googledatastudio/ds-component/issues/new")};function E(e){return e.type===_.ConfigDataElementType.DIMENSION||e.type===_.ConfigDataElementType.METRIC}function r(e){return e===_.ConfigDataElementType.DIMENSION?-1:1}function a(e){var R=[];e.config.data.forEach(function(e){e.elements.filter(E).forEach(function(e){R.push(e)})});var C,t=(C=function(e,R){return r(e.type)-r(R.type)},R.map(function(e,R){return{item:e,index:R}}).sort(function(e,R){return C(e.item,R.item)||e.index-R.index}).map(function(e){return e.item})),n=[];return t.forEach(function(e){e.value.forEach(function(){return n.push(e.id)})}),n}function o(R){return function(e){var C,t,n={};return t=R,((C=e).length<t.length?C.map(function(e,R){return[e,t[R]]}):t.map(function(e,R){return[C[R],e]})).forEach(function(e){var R=e[0],C=e[1];void 0===n[C]&&(n[C]=[]),n[C].push(R)},{}),n}}N.fieldsByConfigId=function(e){var R=e.fields.reduce(function(e,R){return e[R.id]=R,e},{}),C={};return e.config.data.forEach(function(e){e.elements.filter(E).forEach(function(e){C[e.id]=e.value.map(function(e){return R[e]})})}),C};function U(e){var R={};return(e.config.style||[]).forEach(function(e){e.elements.forEach(function(e){if(void 0!==R[e.id])throw new Error("styleIds must be unique. Your styleId: '"+e.id+"' is used more than once.");R[e.id]={value:e.value,defaultValue:e.defaultValue}})},{}),R}function Y(e){return e.config.themeStyle}function n(e){switch(e){case _.DSInteractionType.FILTER:return _.InteractionType.FILTER}}function s(e){var R=e.config.interactions;return void 0===R?{}:R.reduce(function(e,R){var C=R.supportedActions.map(n),t={type:n(R.value.type),data:R.value.data};return e[R.id]={value:t,supportedActions:C},e},{})}N.tableTransform=function(e){return{tables:(R=e,t=N.fieldsByConfigId(R),n=a(R),E={},r=n.map(function(e){void 0===E[e]?E[e]=0:E[e]++;var R=E[e],C=t[e][R];return i(i({},C),{configId:e})}),(C={})[_.TableType.DEFAULT]={headers:[],rows:[]},o=C,R.dataResponse.tables.forEach(function(e){o[e.id]={headers:r,rows:e.rows}}),o),fields:N.fieldsByConfigId(e),style:U(e),theme:Y(e),interactions:s(e)};var R,C,t,n,E,r,o},N.objectTransform=function(e){return{tables:(t=a(R=e),(C={})[_.TableType.DEFAULT]=[],n=C,R.dataResponse.tables.forEach(function(e){var R=e.rows.map(o(t));e.id===_.TableType.DEFAULT?n[e.id]=R:(void 0===n[e.id]&&(n[e.id]=[]),n[e.id]=n[e.id].concat(R))}),n),fields:N.fieldsByConfigId(e),style:U(e),theme:Y(e),interactions:s(e)};var R,C,t,n};function u(e){var R,C=!1;return e===N.tableTransform||e===N.objectTransform?C=!0:(R=!1,"identity"===e("identity")&&(R=!0,console.warn("This is an unsupported data format. Please use one of the supported transforms:\n       dscc.objectFormat or dscc.tableFormat.")),R&&(C=!0)),C}N.subscribeToData=function(R,C){if(u(C.transform)){var e=function(e){e.data.type===_.MessageType.RENDER?R(C.transform(e.data)):console.error("MessageType: "+e.data.type+" is not supported by this version of the library.")};window.addEventListener("message",e);var t={componentId:N.getComponentId(),type:_.ToDSMessageType.VIZ_READY};return window.parent.postMessage(t,"*"),function(){return window.removeEventListener("message",e)}}throw new Error("Only the built in transform functions are supported.")},N.sendInteraction=function(e,R,C){var t=N.getComponentId(),n={type:_.ToDSMessageType.INTERACTION,id:e,data:C,componentId:t};window.parent.postMessage(n,"*")},N.clearInteraction=function(e,R){N.sendInteraction(e,R,void 0)}},"./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/*! no static exports found */function(e,R,C){"use strict";var t,n,E,r,o,N;Object.defineProperty(R,"__esModule",{value:!0}),(t=R.ConceptType||(R.ConceptType={})).METRIC="METRIC",t.DIMENSION="DIMENSION",(R.MessageType||(R.MessageType={})).RENDER="RENDER",(n=R.FieldType||(R.FieldType={})).YEAR="YEAR",n.YEAR_QUARTER="YEAR_QUARTER",n.YEAR_MONTH="YEAR_MONTH",n.YEAR_WEEK="YEAR_WEEK",n.YEAR_MONTH_DAY="YEAR_MONTH_DAY",n.YEAR_MONTH_DAY_HOUR="YEAR_MONTH_DAY_HOUR",n.QUARTER="QUARTER",n.MONTH="MONTH",n.WEEK="WEEK",n.MONTH_DAY="MONTH_DAY",n.DAY_OF_WEEK="DAY_OF_WEEK",n.DAY="DAY",n.HOUR="HOUR",n.MINUTE="MINUTE",n.DURATION="DURATION",n.COUNTRY="COUNTRY",n.COUNTRY_CODE="COUNTRY_CODE",n.CONTINENT="CONTINENT",n.CONTINENT_CODE="CONTINENT_CODE",n.SUB_CONTINENT="SUB_CONTINENT",n.SUB_CONTINENT_CODE="SUB_CONTINENT_CODE",n.REGION="REGION",n.REGION_CODE="REGION_CODE",n.CITY="CITY",n.CITY_CODE="CITY_CODE",n.METRO_CODE="METRO_CODE",n.LATITUDE_LONGITUDE="LATITUDE_LONGITUDE",n.NUMBER="NUMBER",n.PERCENT="PERCENT",n.TEXT="TEXT",n.BOOLEAN="BOOLEAN",n.URL="URL",n.IMAGE="IMAGE",n.CURRENCY_AED="CURRENCY_AED",n.CURRENCY_ALL="CURRENCY_ALL",n.CURRENCY_ARS="CURRENCY_ARS",n.CURRENCY_AUD="CURRENCY_AUD",n.CURRENCY_BDT="CURRENCY_BDT",n.CURRENCY_BGN="CURRENCY_BGN",n.CURRENCY_BOB="CURRENCY_BOB",n.CURRENCY_BRL="CURRENCY_BRL",n.CURRENCY_CAD="CURRENCY_CAD",n.CURRENCY_CDF="CURRENCY_CDF",n.CURRENCY_CHF="CURRENCY_CHF",n.CURRENCY_CLP="CURRENCY_CLP",n.CURRENCY_CNY="CURRENCY_CNY",n.CURRENCY_COP="CURRENCY_COP",n.CURRENCY_CRC="CURRENCY_CRC",n.CURRENCY_CZK="CURRENCY_CZK",n.CURRENCY_DKK="CURRENCY_DKK",n.CURRENCY_DOP="CURRENCY_DOP",n.CURRENCY_EGP="CURRENCY_EGP",n.CURRENCY_ETB="CURRENCY_ETB",n.CURRENCY_EUR="CURRENCY_EUR",n.CURRENCY_GBP="CURRENCY_GBP",n.CURRENCY_HKD="CURRENCY_HKD",n.CURRENCY_HRK="CURRENCY_HRK",n.CURRENCY_HUF="CURRENCY_HUF",n.CURRENCY_IDR="CURRENCY_IDR",n.CURRENCY_ILS="CURRENCY_ILS",n.CURRENCY_INR="CURRENCY_INR",n.CURRENCY_IRR="CURRENCY_IRR",n.CURRENCY_ISK="CURRENCY_ISK",n.CURRENCY_JMD="CURRENCY_JMD",n.CURRENCY_JPY="CURRENCY_JPY",n.CURRENCY_KRW="CURRENCY_KRW",n.CURRENCY_LKR="CURRENCY_LKR",n.CURRENCY_LTL="CURRENCY_LTL",n.CURRENCY_MNT="CURRENCY_MNT",n.CURRENCY_MVR="CURRENCY_MVR",n.CURRENCY_MXN="CURRENCY_MXN",n.CURRENCY_MYR="CURRENCY_MYR",n.CURRENCY_NOK="CURRENCY_NOK",n.CURRENCY_NZD="CURRENCY_NZD",n.CURRENCY_PAB="CURRENCY_PAB",n.CURRENCY_PEN="CURRENCY_PEN",n.CURRENCY_PHP="CURRENCY_PHP",n.CURRENCY_PKR="CURRENCY_PKR",n.CURRENCY_PLN="CURRENCY_PLN",n.CURRENCY_RON="CURRENCY_RON",n.CURRENCY_RSD="CURRENCY_RSD",n.CURRENCY_RUB="CURRENCY_RUB",n.CURRENCY_SAR="CURRENCY_SAR",n.CURRENCY_SEK="CURRENCY_SEK",n.CURRENCY_SGD="CURRENCY_SGD",n.CURRENCY_THB="CURRENCY_THB",n.CURRENCY_TRY="CURRENCY_TRY",n.CURRENCY_TWD="CURRENCY_TWD",n.CURRENCY_TZS="CURRENCY_TZS",n.CURRENCY_UAH="CURRENCY_UAH",n.CURRENCY_USD="CURRENCY_USD",n.CURRENCY_UYU="CURRENCY_UYU",n.CURRENCY_VEF="CURRENCY_VEF",n.CURRENCY_VND="CURRENCY_VND",n.CURRENCY_YER="CURRENCY_YER",n.CURRENCY_ZAR="CURRENCY_ZAR",(E=R.TableType||(R.TableType={})).DEFAULT="DEFAULT",E.COMPARISON="COMPARISON",E.SUMMARY="SUMMARY",(r=R.ConfigDataElementType||(R.ConfigDataElementType={})).METRIC="METRIC",r.DIMENSION="DIMENSION",r.MAX_RESULTS="MAX_RESULTS",(o=R.ConfigStyleElementType||(R.ConfigStyleElementType={})).TEXTINPUT="TEXTINPUT",o.SELECT_SINGLE="SELECT_SINGLE",o.CHECKBOX="CHECKBOX",o.FONT_COLOR="FONT_COLOR",o.FONT_SIZE="FONT_SIZE",o.FONT_FAMILY="FONT_FAMILY",o.FILL_COLOR="FILL_COLOR",o.BORDER_COLOR="BORDER_COLOR",o.AXIS_COLOR="AXIS_COLOR",o.GRID_COLOR="GRID_COLOR",o.OPACITY="OPACITY",o.LINE_WEIGHT="LINE_WEIGHT",o.LINE_STYLE="LINE_STYLE",o.BORDER_RADIUS="BORDER_RADIUS",o.INTERVAL="INTERVAL",o.SELECT_RADIO="SELECT_RADIO",(R.DSInteractionType||(R.DSInteractionType={})).FILTER="FILTER",(N=R.ToDSMessageType||(R.ToDSMessageType={})).VIZ_READY="vizReady",N.INTERACTION="vizAction",(R.InteractionType||(R.InteractionType={})).FILTER="FILTER"}},n.c=t,n.d=function(e,R,C){n.o(e,R)||Object.defineProperty(e,R,{enumerable:!0,get:C})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(R,e){if(1&e&&(R=n(R)),8&e)return R;if(4&e&&"object"==typeof R&&R&&R.__esModule)return R;var C=Object.create(null);if(n.r(C),Object.defineProperty(C,"default",{enumerable:!0,value:R}),2&e&&"string"!=typeof R)for(var t in R)n.d(C,t,function(e){return R[e]}.bind(null,t));return C},n.n=function(e){var R=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(R,"a",R),R},n.o=function(e,R){return Object.prototype.hasOwnProperty.call(e,R)},n.p="",n(n.s="./src/index.ts");function n(e){if(t[e])return t[e].exports;var R=t[e]={i:e,l:!1,exports:{}};return C[e].call(R.exports,R,R.exports,n),R.l=!0,R.exports}var C,t});// https://d3js.org/d3-selection/ Version 1.2.0. Copyright 2017 Mike Bostock.
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.d3 = global.d3 || {})));
}(this, (function (exports) { 'use strict';

var xhtml = "http://www.w3.org/1999/xhtml";

var namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

var namespace = function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name;
};

function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === xhtml && document.documentElement.namespaceURI === xhtml
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

var creator = function(name) {
  var fullname = namespace(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
};

var nextId = 0;

function local() {
  return new Local;
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};

var matcher = function(selector) {
  return function() {
    return this.matches(selector);
  };
};

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!element.matches) {
    var vendorMatches = element.webkitMatchesSelector
        || element.msMatchesSelector
        || element.mozMatchesSelector
        || element.oMatchesSelector;
    matcher = function(selector) {
      return function() {
        return vendorMatches.call(this, selector);
      };
    };
  }
}

var matcher$1 = matcher;

var filterEvents = {};

exports.event = null;

if (typeof document !== "undefined") {
  var element$1 = document.documentElement;
  if (!("onmouseenter" in element$1)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = exports.event; // Events can be reentrant (e.g., focus).
    exports.event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      exports.event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

var selection_on = function(typename, value, capture) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
};

function customEvent(event1, listener, that, args) {
  var event0 = exports.event;
  event1.sourceEvent = exports.event;
  exports.event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    exports.event = event0;
  }
}

var sourceEvent = function() {
  var current = exports.event, source;
  while (source = current.sourceEvent) current = source;
  return current;
};

var point = function(node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
};

var mouse = function(node) {
  var event = sourceEvent();
  if (event.changedTouches) event = event.changedTouches[0];
  return point(node, event);
};

function none() {}

var selector = function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
};

var selection_select = function(select) {
  if (typeof select !== "function") select = selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new Selection(subgroups, this._parents);
};

function empty() {
  return [];
}

var selectorAll = function(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
};

var selection_selectAll = function(select) {
  if (typeof select !== "function") select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new Selection(subgroups, parents);
};

var selection_filter = function(match) {
  if (typeof match !== "function") match = matcher$1(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Selection(subgroups, this._parents);
};

var sparse = function(update) {
  return new Array(update.length);
};

var selection_enter = function() {
  return new Selection(this._enter || this._groups.map(sparse), this._parents);
};

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};

var constant = function(x) {
  return function() {
    return x;
  };
};

var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

var selection_data = function(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = constant(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
};

var selection_exit = function() {
  return new Selection(this._exit || this._groups.map(sparse), this._parents);
};

var selection_merge = function(selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Selection(merges, this._parents);
};

var selection_order = function() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
};

var selection_sort = function(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new Selection(sortgroups, this._parents).order();
};

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

var selection_call = function() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
};

var selection_nodes = function() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
};

var selection_node = function() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
};

var selection_size = function() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
};

var selection_empty = function() {
  return !this.node();
};

var selection_each = function(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
};

function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

var selection_attr = function(name, value) {
  var fullname = namespace(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
};

var defaultView = function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
};

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

var selection_style = function(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
};

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
}

function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

var selection_property = function(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
};

function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

var selection_classed = function(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
};

function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

var selection_text = function(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
};

function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

var selection_html = function(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
};

function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

var selection_raise = function() {
  return this.each(raise);
};

function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

var selection_lower = function() {
  return this.each(lower);
};

var selection_append = function(name) {
  var create = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
};

function constantNull() {
  return null;
}

var selection_insert = function(name, before) {
  var create = typeof name === "function" ? name : creator(name),
      select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
};

function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

var selection_remove = function() {
  return this.each(remove);
};

var selection_datum = function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
};

function dispatchEvent(node, type, params) {
  var window = defaultView(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

var selection_dispatch = function(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
};

var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: selection_select,
  selectAll: selection_selectAll,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  merge: selection_merge,
  order: selection_order,
  sort: selection_sort,
  call: selection_call,
  nodes: selection_nodes,
  node: selection_node,
  size: selection_size,
  empty: selection_empty,
  each: selection_each,
  attr: selection_attr,
  style: selection_style,
  property: selection_property,
  classed: selection_classed,
  text: selection_text,
  html: selection_html,
  raise: selection_raise,
  lower: selection_lower,
  append: selection_append,
  insert: selection_insert,
  remove: selection_remove,
  datum: selection_datum,
  on: selection_on,
  dispatch: selection_dispatch
};

var select = function(selector) {
  return typeof selector === "string"
      ? new Selection([[document.querySelector(selector)]], [document.documentElement])
      : new Selection([[selector]], root);
};

var selectAll = function(selector) {
  return typeof selector === "string"
      ? new Selection([document.querySelectorAll(selector)], [document.documentElement])
      : new Selection([selector == null ? [] : selector], root);
};

var touch = function(node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = sourceEvent().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return point(node, touch);
    }
  }

  return null;
};

var touches = function(node, touches) {
  if (touches == null) touches = sourceEvent().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = point(node, touches[i]);
  }

  return points;
};

exports.creator = creator;
exports.local = local;
exports.matcher = matcher$1;
exports.mouse = mouse;
exports.namespace = namespace;
exports.namespaces = namespaces;
exports.clientPoint = point;
exports.select = select;
exports.selectAll = selectAll;
exports.selection = selection;
exports.selector = selector;
exports.selectorAll = selectorAll;
exports.style = styleValue;
exports.touch = touch;
exports.touches = touches;
exports.window = defaultView;
exports.customEvent = customEvent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.bar=n():(t.britecharts=t.britecharts||{},t.britecharts.bar=n())}(window,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=28)}([function(t,n,e){"use strict";e.r(n);var r="http://www.w3.org/1999/xhtml",i={svg:"http://www.w3.org/2000/svg",xhtml:r,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},o=function(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),i.hasOwnProperty(n)?{space:i[n],local:t}:t};var u=function(t){var n=o(t);return(n.local?function(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}:function(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===r&&n.documentElement.namespaceURI===r?n.createElement(t):n.createElementNS(e,t)}})(n)},a=0;function c(){return new s}function s(){this._="@"+(++a).toString(36)}s.prototype=c.prototype={constructor:s,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}};var l=function(t){return function(){return this.matches(t)}};if("undefined"!=typeof document){var f=document.documentElement;if(!f.matches){var h=f.webkitMatchesSelector||f.msMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector;l=function(t){return function(){return h.call(this,t)}}}}var d=l,p={},_=null;"undefined"!=typeof document&&("onmouseenter"in document.documentElement||(p={mouseenter:"mouseover",mouseleave:"mouseout"}));function y(t,n,e){return t=g(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function g(t,n,e){return function(r){var i=_;_=r;try{t.call(this,this.__data__,n,e)}finally{_=i}}}function v(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function m(t,n,e){var r=p.hasOwnProperty(t.type)?y:g;return function(i,o,u){var a,c=this.__on,s=r(n,o,u);if(c)for(var l=0,f=c.length;l<f;++l)if((a=c[l]).type===t.type&&a.name===t.name)return this.removeEventListener(a.type,a.listener,a.capture),this.addEventListener(a.type,a.listener=s,a.capture=e),void(a.value=n);this.addEventListener(t.type,s,e),a={type:t.type,name:t.name,value:n,listener:s,capture:e},c?c.push(a):this.__on=[a]}}function x(t,n,e,r){var i=_;t.sourceEvent=_,_=t;try{return n.apply(e,r)}finally{_=i}}var w=function(){for(var t,n=_;t=n.sourceEvent;)n=t;return n},b=function(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,[(r=r.matrixTransform(t.getScreenCTM().inverse())).x,r.y]}var i=t.getBoundingClientRect();return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]},M=function(t){var n=w();return n.changedTouches&&(n=n.changedTouches[0]),b(t,n)};function T(){}var A=function(t){return null==t?T:function(){return this.querySelector(t)}};function S(){return[]}var C=function(t){return null==t?S:function(){return this.querySelectorAll(t)}},k=function(t){return new Array(t.length)};function N(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}N.prototype={constructor:N,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var O="$";function E(t,n,e,r,i,o){for(var u,a=0,c=n.length,s=o.length;a<s;++a)(u=n[a])?(u.__data__=o[a],r[a]=u):e[a]=new N(t,o[a]);for(;a<c;++a)(u=n[a])&&(i[a]=u)}function D(t,n,e,r,i,o,u){var a,c,s,l={},f=n.length,h=o.length,d=new Array(f);for(a=0;a<f;++a)(c=n[a])&&(d[a]=s=O+u.call(c,c.__data__,a,n),s in l?i[a]=c:l[s]=c);for(a=0;a<h;++a)(c=l[s=O+u.call(t,o[a],a,o)])?(r[a]=c,c.__data__=o[a],l[s]=null):e[a]=new N(t,o[a]);for(a=0;a<f;++a)(c=n[a])&&l[d[a]]===c&&(i[a]=c)}function F(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}var P=function(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView};function L(t,n){return t.style.getPropertyValue(n)||P(t).getComputedStyle(t,null).getPropertyValue(n)}function I(t){return t.trim().split(/^|\s+/)}function j(t){return t.classList||new R(t)}function R(t){this._node=t,this._names=I(t.getAttribute("class")||"")}function U(t,n){for(var e=j(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function B(t,n){for(var e=j(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}R.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function H(){this.textContent=""}function Y(){this.innerHTML=""}function q(){this.nextSibling&&this.parentNode.appendChild(this)}function z(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function G(){return null}function X(){var t=this.parentNode;t&&t.removeChild(this)}function W(t,n,e){var r=P(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}var $=[null];function V(t,n){this._groups=t,this._parents=n}function Z(){return new V([[document.documentElement]],$)}V.prototype=Z.prototype={constructor:V,select:function(t){"function"!=typeof t&&(t=A(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u,a=n[i],c=a.length,s=r[i]=new Array(c),l=0;l<c;++l)(o=a[l])&&(u=t.call(o,o.__data__,l,a))&&("__data__"in o&&(u.__data__=o.__data__),s[l]=u);return new V(r,this._parents)},selectAll:function(t){"function"!=typeof t&&(t=C(t));for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var u,a=n[o],c=a.length,s=0;s<c;++s)(u=a[s])&&(r.push(t.call(u,u.__data__,s,a)),i.push(u));return new V(r,i)},filter:function(t){"function"!=typeof t&&(t=d(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],a=u.length,c=r[i]=[],s=0;s<a;++s)(o=u[s])&&t.call(o,o.__data__,s,u)&&c.push(o);return new V(r,this._parents)},data:function(t,n){if(!t)return p=new Array(this.size()),l=-1,this.each(function(t){p[++l]=t}),p;var e,r=n?D:E,i=this._parents,o=this._groups;"function"!=typeof t&&(e=t,t=function(){return e});for(var u=o.length,a=new Array(u),c=new Array(u),s=new Array(u),l=0;l<u;++l){var f=i[l],h=o[l],d=h.length,p=t.call(f,f&&f.__data__,l,i),_=p.length,y=c[l]=new Array(_),g=a[l]=new Array(_);r(f,h,y,g,s[l]=new Array(d),p,n);for(var v,m,x=0,w=0;x<_;++x)if(v=y[x]){for(x>=w&&(w=x+1);!(m=g[w])&&++w<_;);v._next=m||null}}return(a=new V(a,i))._enter=c,a._exit=s,a},enter:function(){return new V(this._enter||this._groups.map(k),this._parents)},exit:function(){return new V(this._exit||this._groups.map(k),this._parents)},merge:function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),a=0;a<o;++a)for(var c,s=n[a],l=e[a],f=s.length,h=u[a]=new Array(f),d=0;d<f;++d)(c=s[d]||l[d])&&(h[d]=c);for(;a<r;++a)u[a]=n[a];return new V(u,this._parents)},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,u=i[o];--o>=0;)(r=i[o])&&(u&&u!==r.nextSibling&&u.parentNode.insertBefore(r,u),u=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=F);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var u,a=e[o],c=a.length,s=i[o]=new Array(c),l=0;l<c;++l)(u=a[l])&&(s[l]=u);s.sort(n)}return new V(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var u=r[i];if(u)return u}return null},size:function(){var t=0;return this.each(function(){++t}),t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],u=0,a=o.length;u<a;++u)(i=o[u])&&t.call(i,i.__data__,u,o);return this},attr:function(t,n){var e=o(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}}:"function"==typeof n?e.local?function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}:function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}:e.local?function(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}:function(t,n){return function(){this.setAttribute(t,n)}})(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?function(t){return function(){this.style.removeProperty(t)}}:"function"==typeof n?function(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}:function(t,n,e){return function(){this.style.setProperty(t,n,e)}})(t,n,null==e?"":e)):L(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?function(t){return function(){delete this[t]}}:"function"==typeof n?function(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}:function(t,n){return function(){this[t]=n}})(t,n)):this.node()[t]},classed:function(t,n){var e=I(t+"");if(arguments.length<2){for(var r=j(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?function(t,n){return function(){(n.apply(this,arguments)?U:B)(this,t)}}:n?function(t){return function(){U(this,t)}}:function(t){return function(){B(this,t)}})(e,n))},text:function(t){return arguments.length?this.each(null==t?H:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}:function(t){return function(){this.textContent=t}})(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?Y:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}:function(t){return function(){this.innerHTML=t}})(t)):this.node().innerHTML},raise:function(){return this.each(q)},lower:function(){return this.each(z)},append:function(t){var n="function"==typeof t?t:u(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})},insert:function(t,n){var e="function"==typeof t?t:u(t),r=null==n?G:"function"==typeof n?n:A(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})},remove:function(){return this.each(X)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=function(t){return t.trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}})}(t+""),u=o.length;if(!(arguments.length<2)){for(a=n?m:v,null==e&&(e=!1),r=0;r<u;++r)this.each(a(o[r],n,e));return this}var a=this.node().__on;if(a)for(var c,s=0,l=a.length;s<l;++s)for(r=0,c=a[s];r<u;++r)if((i=o[r]).type===c.type&&i.name===c.name)return c.value},dispatch:function(t,n){return this.each(("function"==typeof n?function(t,n){return function(){return W(this,t,n.apply(this,arguments))}}:function(t,n){return function(){return W(this,t,n)}})(t,n))}};var Q=Z,J=function(t){return"string"==typeof t?new V([[document.querySelector(t)]],[document.documentElement]):new V([[t]],$)},K=function(t){return"string"==typeof t?new V([document.querySelectorAll(t)],[document.documentElement]):new V([null==t?[]:t],$)},tt=function(t,n,e){arguments.length<3&&(e=n,n=w().changedTouches);for(var r,i=0,o=n?n.length:0;i<o;++i)if((r=n[i]).identifier===e)return b(t,r);return null},nt=function(t,n){null==n&&(n=w().touches);for(var e=0,r=n?n.length:0,i=new Array(r);e<r;++e)i[e]=b(t,n[e]);return i};e.d(n,"creator",function(){return u}),e.d(n,"local",function(){return c}),e.d(n,"matcher",function(){return d}),e.d(n,"mouse",function(){return M}),e.d(n,"namespace",function(){return o}),e.d(n,"namespaces",function(){return i}),e.d(n,"select",function(){return J}),e.d(n,"selectAll",function(){return K}),e.d(n,"selection",function(){return Q}),e.d(n,"selector",function(){return A}),e.d(n,"selectorAll",function(){return C}),e.d(n,"style",function(){return L}),e.d(n,"touch",function(){return tt}),e.d(n,"touches",function(){return nt}),e.d(n,"window",function(){return P}),e.d(n,"event",function(){return _}),e.d(n,"customEvent",function(){return x})},function(t,n,e){"use strict";e.r(n);var r=new Date,i=new Date;function o(t,n,e,u){function a(n){return t(n=new Date(+n)),n}return a.floor=a,a.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},a.round=function(t){var n=a(t),e=a.ceil(t);return t-n<e-t?n:e},a.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},a.range=function(e,r,i){var o=[];if(e=a.ceil(e),i=null==i?1:Math.floor(i),!(e<r&&i>0))return o;do{o.push(new Date(+e))}while(n(e,i),t(e),e<r);return o},a.filter=function(e){return o(function(n){if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)},function(t,r){if(t>=t)if(r<0)for(;++r<=0;)for(;n(t,-1),!e(t););else for(;--r>=0;)for(;n(t,1),!e(t););})},e&&(a.count=function(n,o){return r.setTime(+n),i.setTime(+o),t(r),t(i),Math.floor(e(r,i))},a.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?a.filter(u?function(n){return u(n)%t==0}:function(n){return a.count(0,n)%t==0}):a:null}),a}var u=o(function(){},function(t,n){t.setTime(+t+n)},function(t,n){return n-t});u.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?o(function(n){n.setTime(Math.floor(n/t)*t)},function(n,e){n.setTime(+n+e*t)},function(n,e){return(e-n)/t}):u:null};var a=u,c=u.range,s=6e4,l=6048e5,f=o(function(t){t.setTime(1e3*Math.floor(t/1e3))},function(t,n){t.setTime(+t+1e3*n)},function(t,n){return(n-t)/1e3},function(t){return t.getUTCSeconds()}),h=f,d=f.range,p=o(function(t){t.setTime(Math.floor(t/s)*s)},function(t,n){t.setTime(+t+n*s)},function(t,n){return(n-t)/s},function(t){return t.getMinutes()}),_=p,y=p.range,g=o(function(t){var n=t.getTimezoneOffset()*s%36e5;n<0&&(n+=36e5),t.setTime(36e5*Math.floor((+t-n)/36e5)+n)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getHours()}),v=g,m=g.range,x=o(function(t){t.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*s)/864e5},function(t){return t.getDate()-1}),w=x,b=x.range;function M(t){return o(function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+7*n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*s)/l})}var T=M(0),A=M(1),S=M(2),C=M(3),k=M(4),N=M(5),O=M(6),E=T.range,D=A.range,F=S.range,P=C.range,L=k.range,I=N.range,j=O.range,R=o(function(t){t.setDate(1),t.setHours(0,0,0,0)},function(t,n){t.setMonth(t.getMonth()+n)},function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())},function(t){return t.getMonth()}),U=R,B=R.range,H=o(function(t){t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,n){t.setFullYear(t.getFullYear()+n)},function(t,n){return n.getFullYear()-t.getFullYear()},function(t){return t.getFullYear()});H.every=function(t){return isFinite(t=Math.floor(t))&&t>0?o(function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)},function(n,e){n.setFullYear(n.getFullYear()+e*t)}):null};var Y=H,q=H.range,z=o(function(t){t.setUTCSeconds(0,0)},function(t,n){t.setTime(+t+n*s)},function(t,n){return(n-t)/s},function(t){return t.getUTCMinutes()}),G=z,X=z.range,W=o(function(t){t.setUTCMinutes(0,0,0)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getUTCHours()}),$=W,V=W.range,Z=o(function(t){t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+n)},function(t,n){return(n-t)/864e5},function(t){return t.getUTCDate()-1}),Q=Z,J=Z.range;function K(t){return o(function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+7*n)},function(t,n){return(n-t)/l})}var tt=K(0),nt=K(1),et=K(2),rt=K(3),it=K(4),ot=K(5),ut=K(6),at=tt.range,ct=nt.range,st=et.range,lt=rt.range,ft=it.range,ht=ot.range,dt=ut.range,pt=o(function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCMonth(t.getUTCMonth()+n)},function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())},function(t){return t.getUTCMonth()}),_t=pt,yt=pt.range,gt=o(function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)},function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()},function(t){return t.getUTCFullYear()});gt.every=function(t){return isFinite(t=Math.floor(t))&&t>0?o(function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)}):null};var vt=gt,mt=gt.range;e.d(n,"timeInterval",function(){return o}),e.d(n,"timeMillisecond",function(){return a}),e.d(n,"timeMilliseconds",function(){return c}),e.d(n,"utcMillisecond",function(){return a}),e.d(n,"utcMilliseconds",function(){return c}),e.d(n,"timeSecond",function(){return h}),e.d(n,"timeSeconds",function(){return d}),e.d(n,"utcSecond",function(){return h}),e.d(n,"utcSeconds",function(){return d}),e.d(n,"timeMinute",function(){return _}),e.d(n,"timeMinutes",function(){return y}),e.d(n,"timeHour",function(){return v}),e.d(n,"timeHours",function(){return m}),e.d(n,"timeDay",function(){return w}),e.d(n,"timeDays",function(){return b}),e.d(n,"timeWeek",function(){return T}),e.d(n,"timeWeeks",function(){return E}),e.d(n,"timeSunday",function(){return T}),e.d(n,"timeSundays",function(){return E}),e.d(n,"timeMonday",function(){return A}),e.d(n,"timeMondays",function(){return D}),e.d(n,"timeTuesday",function(){return S}),e.d(n,"timeTuesdays",function(){return F}),e.d(n,"timeWednesday",function(){return C}),e.d(n,"timeWednesdays",function(){return P}),e.d(n,"timeThursday",function(){return k}),e.d(n,"timeThursdays",function(){return L}),e.d(n,"timeFriday",function(){return N}),e.d(n,"timeFridays",function(){return I}),e.d(n,"timeSaturday",function(){return O}),e.d(n,"timeSaturdays",function(){return j}),e.d(n,"timeMonth",function(){return U}),e.d(n,"timeMonths",function(){return B}),e.d(n,"timeYear",function(){return Y}),e.d(n,"timeYears",function(){return q}),e.d(n,"utcMinute",function(){return G}),e.d(n,"utcMinutes",function(){return X}),e.d(n,"utcHour",function(){return $}),e.d(n,"utcHours",function(){return V}),e.d(n,"utcDay",function(){return Q}),e.d(n,"utcDays",function(){return J}),e.d(n,"utcWeek",function(){return tt}),e.d(n,"utcWeeks",function(){return at}),e.d(n,"utcSunday",function(){return tt}),e.d(n,"utcSundays",function(){return at}),e.d(n,"utcMonday",function(){return nt}),e.d(n,"utcMondays",function(){return ct}),e.d(n,"utcTuesday",function(){return et}),e.d(n,"utcTuesdays",function(){return st}),e.d(n,"utcWednesday",function(){return rt}),e.d(n,"utcWednesdays",function(){return lt}),e.d(n,"utcThursday",function(){return it}),e.d(n,"utcThursdays",function(){return ft}),e.d(n,"utcFriday",function(){return ot}),e.d(n,"utcFridays",function(){return ht}),e.d(n,"utcSaturday",function(){return ut}),e.d(n,"utcSaturdays",function(){return dt}),e.d(n,"utcMonth",function(){return _t}),e.d(n,"utcMonths",function(){return yt}),e.d(n,"utcYear",function(){return vt}),e.d(n,"utcYears",function(){return mt})},function(t,n,e){"use strict";e.r(n);var r=function(t,n){return t<n?-1:t>n?1:t>=n?0:NaN},i=function(t){var n;return 1===t.length&&(n=t,t=function(t,e){return r(n(t),e)}),{left:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)<0?r=o+1:i=o}return r},right:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)>0?i=o:r=o+1}return r}}};var o=i(r),u=o.right,a=o.left,c=u,s=function(t,n){null==n&&(n=l);for(var e=0,r=t.length-1,i=t[0],o=new Array(r<0?0:r);e<r;)o[e]=n(i,i=t[++e]);return o};function l(t,n){return[t,n]}var f=function(t,n,e){var r,i,o,u,a=t.length,c=n.length,s=new Array(a*c);for(null==e&&(e=l),r=o=0;r<a;++r)for(u=t[r],i=0;i<c;++i,++o)s[o]=e(u,n[i]);return s},h=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},d=function(t){return null===t?NaN:+t},p=function(t,n){var e,r,i=t.length,o=0,u=-1,a=0,c=0;if(null==n)for(;++u<i;)isNaN(e=d(t[u]))||(c+=(r=e-a)*(e-(a+=r/++o)));else for(;++u<i;)isNaN(e=d(n(t[u],u,t)))||(c+=(r=e-a)*(e-(a+=r/++o)));if(o>1)return c/(o-1)},_=function(t,n){var e=p(t,n);return e?Math.sqrt(e):e},y=function(t,n){var e,r,i,o=t.length,u=-1;if(null==n){for(;++u<o;)if(null!=(e=t[u])&&e>=e)for(r=i=e;++u<o;)null!=(e=t[u])&&(r>e&&(r=e),i<e&&(i=e))}else for(;++u<o;)if(null!=(e=n(t[u],u,t))&&e>=e)for(r=i=e;++u<o;)null!=(e=n(t[u],u,t))&&(r>e&&(r=e),i<e&&(i=e));return[r,i]},g=Array.prototype,v=g.slice,m=g.map,x=function(t){return function(){return t}},w=function(t){return t},b=function(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e;return o},M=Math.sqrt(50),T=Math.sqrt(10),A=Math.sqrt(2),S=function(t,n,e){var r,i,o,u=n<t,a=-1;if(u&&(r=t,t=n,n=r),0===(o=C(t,n,e))||!isFinite(o))return[];if(o>0)for(t=Math.ceil(t/o),n=Math.floor(n/o),i=new Array(r=Math.ceil(n-t+1));++a<r;)i[a]=(t+a)*o;else for(t=Math.floor(t*o),n=Math.ceil(n*o),i=new Array(r=Math.ceil(t-n+1));++a<r;)i[a]=(t-a)/o;return u&&i.reverse(),i};function C(t,n,e){var r=(n-t)/Math.max(0,e),i=Math.floor(Math.log(r)/Math.LN10),o=r/Math.pow(10,i);return i>=0?(o>=M?10:o>=T?5:o>=A?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=M?10:o>=T?5:o>=A?2:1)}function k(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i;return o>=M?i*=10:o>=T?i*=5:o>=A&&(i*=2),n<t?-i:i}var N=function(t){return Math.ceil(Math.log(t.length)/Math.LN2)+1},O=function(){var t=w,n=y,e=N;function r(r){var i,o,u=r.length,a=new Array(u);for(i=0;i<u;++i)a[i]=t(r[i],i,r);var s=n(a),l=s[0],f=s[1],h=e(a,l,f);Array.isArray(h)||(h=k(l,f,h),h=b(Math.ceil(l/h)*h,Math.floor(f/h)*h,h));for(var d=h.length;h[0]<=l;)h.shift(),--d;for(;h[d-1]>f;)h.pop(),--d;var p,_=new Array(d+1);for(i=0;i<=d;++i)(p=_[i]=[]).x0=i>0?h[i-1]:l,p.x1=i<d?h[i]:f;for(i=0;i<u;++i)l<=(o=a[i])&&o<=f&&_[c(h,o,0,d)].push(r[i]);return _}return r.value=function(n){return arguments.length?(t="function"==typeof n?n:x(n),r):t},r.domain=function(t){return arguments.length?(n="function"==typeof t?t:x([t[0],t[1]]),r):n},r.thresholds=function(t){return arguments.length?(e="function"==typeof t?t:Array.isArray(t)?x(v.call(t)):x(t),r):e},r},E=function(t,n,e){if(null==e&&(e=d),r=t.length){if((n=+n)<=0||r<2)return+e(t[0],0,t);if(n>=1)return+e(t[r-1],r-1,t);var r,i=(r-1)*n,o=Math.floor(i),u=+e(t[o],o,t);return u+(+e(t[o+1],o+1,t)-u)*(i-o)}},D=function(t,n,e){return t=m.call(t,d).sort(r),Math.ceil((e-n)/(2*(E(t,.75)-E(t,.25))*Math.pow(t.length,-1/3)))},F=function(t,n,e){return Math.ceil((e-n)/(3.5*_(t)*Math.pow(t.length,-1/3)))},P=function(t,n){var e,r,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&e>r&&(r=e)}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&e>r&&(r=e);return r},L=function(t,n){var e,r=t.length,i=r,o=-1,u=0;if(null==n)for(;++o<r;)isNaN(e=d(t[o]))?--i:u+=e;else for(;++o<r;)isNaN(e=d(n(t[o],o,t)))?--i:u+=e;if(i)return u/i},I=function(t,n){var e,i=t.length,o=-1,u=[];if(null==n)for(;++o<i;)isNaN(e=d(t[o]))||u.push(e);else for(;++o<i;)isNaN(e=d(n(t[o],o,t)))||u.push(e);return E(u.sort(r),.5)},j=function(t){for(var n,e,r,i=t.length,o=-1,u=0;++o<i;)u+=t[o].length;for(e=new Array(u);--i>=0;)for(n=(r=t[i]).length;--n>=0;)e[--u]=r[n];return e},R=function(t,n){var e,r,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&r>e&&(r=e)}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&r>e&&(r=e);return r},U=function(t,n){for(var e=n.length,r=new Array(e);e--;)r[e]=t[n[e]];return r},B=function(t,n){if(e=t.length){var e,i,o=0,u=0,a=t[u];for(null==n&&(n=r);++o<e;)(n(i=t[o],a)<0||0!==n(a,a))&&(a=i,u=o);return 0===n(a,a)?u:void 0}},H=function(t,n,e){for(var r,i,o=(null==e?t.length:e)-(n=null==n?0:+n);o;)i=Math.random()*o--|0,r=t[o+n],t[o+n]=t[i+n],t[i+n]=r;return t},Y=function(t,n){var e,r=t.length,i=-1,o=0;if(null==n)for(;++i<r;)(e=+t[i])&&(o+=e);else for(;++i<r;)(e=+n(t[i],i,t))&&(o+=e);return o},q=function(t){if(!(i=t.length))return[];for(var n=-1,e=R(t,z),r=new Array(e);++n<e;)for(var i,o=-1,u=r[n]=new Array(i);++o<i;)u[o]=t[o][n];return r};function z(t){return t.length}var G=function(){return q(arguments)};e.d(n,"bisect",function(){return c}),e.d(n,"bisectRight",function(){return u}),e.d(n,"bisectLeft",function(){return a}),e.d(n,"ascending",function(){return r}),e.d(n,"bisector",function(){return i}),e.d(n,"cross",function(){return f}),e.d(n,"descending",function(){return h}),e.d(n,"deviation",function(){return _}),e.d(n,"extent",function(){return y}),e.d(n,"histogram",function(){return O}),e.d(n,"thresholdFreedmanDiaconis",function(){return D}),e.d(n,"thresholdScott",function(){return F}),e.d(n,"thresholdSturges",function(){return N}),e.d(n,"max",function(){return P}),e.d(n,"mean",function(){return L}),e.d(n,"median",function(){return I}),e.d(n,"merge",function(){return j}),e.d(n,"min",function(){return R}),e.d(n,"pairs",function(){return s}),e.d(n,"permute",function(){return U}),e.d(n,"quantile",function(){return E}),e.d(n,"range",function(){return b}),e.d(n,"scan",function(){return B}),e.d(n,"shuffle",function(){return H}),e.d(n,"sum",function(){return Y}),e.d(n,"ticks",function(){return S}),e.d(n,"tickIncrement",function(){return C}),e.d(n,"tickStep",function(){return k}),e.d(n,"transpose",function(){return q}),e.d(n,"variance",function(){return p}),e.d(n,"zip",function(){return G})},function(t,n,e){"use strict";e.r(n);var r=function(t,n,e){t.prototype=n.prototype=e,e.constructor=t};function i(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function o(){}var u="\\s*([+-]?\\d+)\\s*",a="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",c="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",s=/^#([0-9a-f]{3})$/,l=/^#([0-9a-f]{6})$/,f=new RegExp("^rgb\\("+[u,u,u]+"\\)$"),h=new RegExp("^rgb\\("+[c,c,c]+"\\)$"),d=new RegExp("^rgba\\("+[u,u,u,a]+"\\)$"),p=new RegExp("^rgba\\("+[c,c,c,a]+"\\)$"),_=new RegExp("^hsl\\("+[a,c,c]+"\\)$"),y=new RegExp("^hsla\\("+[a,c,c,a]+"\\)$"),g={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function v(t){var n;return t=(t+"").trim().toLowerCase(),(n=s.exec(t))?new M((n=parseInt(n[1],16))>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):(n=l.exec(t))?m(parseInt(n[1],16)):(n=f.exec(t))?new M(n[1],n[2],n[3],1):(n=h.exec(t))?new M(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=d.exec(t))?x(n[1],n[2],n[3],n[4]):(n=p.exec(t))?x(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=_.exec(t))?T(n[1],n[2]/100,n[3]/100,1):(n=y.exec(t))?T(n[1],n[2]/100,n[3]/100,n[4]):g.hasOwnProperty(t)?m(g[t]):"transparent"===t?new M(NaN,NaN,NaN,0):null}function m(t){return new M(t>>16&255,t>>8&255,255&t,1)}function x(t,n,e,r){return r<=0&&(t=n=e=NaN),new M(t,n,e,r)}function w(t){return t instanceof o||(t=v(t)),t?new M((t=t.rgb()).r,t.g,t.b,t.opacity):new M}function b(t,n,e,r){return 1===arguments.length?w(t):new M(t,n,e,null==r?1:r)}function M(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function T(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new S(t,n,e,r)}function A(t,n,e,r){return 1===arguments.length?function(t){if(t instanceof S)return new S(t.h,t.s,t.l,t.opacity);if(t instanceof o||(t=v(t)),!t)return new S;if(t instanceof S)return t;var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),u=Math.max(n,e,r),a=NaN,c=u-i,s=(u+i)/2;return c?(a=n===u?(e-r)/c+6*(e<r):e===u?(r-n)/c+2:(n-e)/c+4,c/=s<.5?u+i:2-u-i,a*=60):c=s>0&&s<1?0:a,new S(a,c,s,t.opacity)}(t):new S(t,n,e,null==r?1:r)}function S(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function C(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}r(o,v,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}}),r(M,b,i(o,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new M(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new M(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}})),r(S,A,i(o,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new S(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new S(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new M(C(t>=240?t-240:t+120,i,r),C(t,i,r),C(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));var k=Math.PI/180,N=180/Math.PI,O=.95047,E=1,D=1.08883,F=4/29,P=6/29,L=3*P*P,I=P*P*P;function j(t){if(t instanceof U)return new U(t.l,t.a,t.b,t.opacity);if(t instanceof G){var n=t.h*k;return new U(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}t instanceof M||(t=w(t));var e=q(t.r),r=q(t.g),i=q(t.b),o=B((.4124564*e+.3575761*r+.1804375*i)/O),u=B((.2126729*e+.7151522*r+.072175*i)/E);return new U(116*u-16,500*(o-u),200*(u-B((.0193339*e+.119192*r+.9503041*i)/D)),t.opacity)}function R(t,n,e,r){return 1===arguments.length?j(t):new U(t,n,e,null==r?1:r)}function U(t,n,e,r){this.l=+t,this.a=+n,this.b=+e,this.opacity=+r}function B(t){return t>I?Math.pow(t,1/3):t/L+F}function H(t){return t>P?t*t*t:L*(t-F)}function Y(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function q(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function z(t,n,e,r){return 1===arguments.length?function(t){if(t instanceof G)return new G(t.h,t.c,t.l,t.opacity);t instanceof U||(t=j(t));var n=Math.atan2(t.b,t.a)*N;return new G(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}(t):new G(t,n,e,null==r?1:r)}function G(t,n,e,r){this.h=+t,this.c=+n,this.l=+e,this.opacity=+r}r(U,R,i(o,{brighter:function(t){return new U(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new U(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return t=E*H(t),new M(Y(3.2404542*(n=O*H(n))-1.5371385*t-.4985314*(e=D*H(e))),Y(-.969266*n+1.8760108*t+.041556*e),Y(.0556434*n-.2040259*t+1.0572252*e),this.opacity)}})),r(G,z,i(o,{brighter:function(t){return new G(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new G(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return j(this).rgb()}}));var X=-.14861,W=1.78277,$=-.29227,V=-.90649,Z=1.97294,Q=Z*V,J=Z*W,K=W*$-V*X;function tt(t,n,e,r){return 1===arguments.length?function(t){if(t instanceof nt)return new nt(t.h,t.s,t.l,t.opacity);t instanceof M||(t=w(t));var n=t.r/255,e=t.g/255,r=t.b/255,i=(K*r+Q*n-J*e)/(K+Q-J),o=r-i,u=(Z*(e-i)-$*o)/V,a=Math.sqrt(u*u+o*o)/(Z*i*(1-i)),c=a?Math.atan2(u,o)*N-120:NaN;return new nt(c<0?c+360:c,a,i,t.opacity)}(t):new nt(t,n,e,null==r?1:r)}function nt(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}r(nt,tt,i(o,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new nt(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new nt(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*k,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t);return new M(255*(n+e*(X*r+W*i)),255*(n+e*($*r+V*i)),255*(n+e*(Z*r)),this.opacity)}})),e.d(n,"color",function(){return v}),e.d(n,"rgb",function(){return b}),e.d(n,"hsl",function(){return A}),e.d(n,"lab",function(){return R}),e.d(n,"hcl",function(){return z}),e.d(n,"cubehelix",function(){return tt})},function(t,n,e){"use strict";e.r(n);var r=e(3);function i(t,n,e,r,i){var o=t*t,u=o*t;return((1-3*t+3*o-u)*n+(4-6*o+3*u)*e+(1+3*t+3*o-3*u)*r+u*i)/6}var o=function(t){var n=t.length-1;return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),o=t[r],u=t[r+1],a=r>0?t[r-1]:2*o-u,c=r<n-1?t[r+2]:2*u-o;return i((e-r/n)*n,a,o,u,c)}},u=function(t){var n=t.length;return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),o=t[(r+n-1)%n],u=t[r%n],a=t[(r+1)%n],c=t[(r+2)%n];return i((e-r/n)*n,o,u,a,c)}},a=function(t){return function(){return t}};function c(t,n){return function(e){return t+e*n}}function s(t,n){var e=n-t;return e?c(t,e>180||e<-180?e-360*Math.round(e/360):e):a(isNaN(t)?n:t)}function l(t){return 1==(t=+t)?f:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):a(isNaN(n)?e:n)}}function f(t,n){var e=n-t;return e?c(t,e):a(isNaN(t)?n:t)}var h=function t(n){var e=l(n);function i(t,n){var i=e((t=Object(r.rgb)(t)).r,(n=Object(r.rgb)(n)).r),o=e(t.g,n.g),u=e(t.b,n.b),a=f(t.opacity,n.opacity);return function(n){return t.r=i(n),t.g=o(n),t.b=u(n),t.opacity=a(n),t+""}}return i.gamma=t,i}(1);function d(t){return function(n){var e,i,o=n.length,u=new Array(o),a=new Array(o),c=new Array(o);for(e=0;e<o;++e)i=Object(r.rgb)(n[e]),u[e]=i.r||0,a[e]=i.g||0,c[e]=i.b||0;return u=t(u),a=t(a),c=t(c),i.opacity=1,function(t){return i.r=u(t),i.g=a(t),i.b=c(t),i+""}}}var p=d(o),_=d(u),y=function(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,o=new Array(r),u=new Array(r);for(e=0;e<i;++e)o[e]=C(t[e],n[e]);for(;e<r;++e)u[e]=n[e];return function(t){for(e=0;e<i;++e)u[e]=o[e](t);return u}},g=function(t,n){var e=new Date;return n-=t=+t,function(r){return e.setTime(t+n*r),e}},v=function(t,n){return n-=t=+t,function(e){return t+n*e}},m=function(t,n){var e,r={},i={};for(e in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)e in t?r[e]=C(t[e],n[e]):i[e]=n[e];return function(t){for(e in r)i[e]=r[e](t);return i}},x=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,w=new RegExp(x.source,"g");var b,M,T,A,S=function(t,n){var e,r,i,o=x.lastIndex=w.lastIndex=0,u=-1,a=[],c=[];for(t+="",n+="";(e=x.exec(t))&&(r=w.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),a[u]?a[u]+=i:a[++u]=i),(e=e[0])===(r=r[0])?a[u]?a[u]+=r:a[++u]=r:(a[++u]=null,c.push({i:u,x:v(e,r)})),o=w.lastIndex;return o<n.length&&(i=n.slice(o),a[u]?a[u]+=i:a[++u]=i),a.length<2?c[0]?function(t){return function(n){return t(n)+""}}(c[0].x):function(t){return function(){return t}}(n):(n=c.length,function(t){for(var e,r=0;r<n;++r)a[(e=c[r]).i]=e.x(t);return a.join("")})},C=function(t,n){var e,i=typeof n;return null==n||"boolean"===i?a(n):("number"===i?v:"string"===i?(e=Object(r.color)(n))?(n=e,h):S:n instanceof r.color?h:n instanceof Date?g:Array.isArray(n)?y:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?m:v)(t,n)},k=function(t,n){return n-=t=+t,function(e){return Math.round(t+n*e)}},N=180/Math.PI,O={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1},E=function(t,n,e,r,i,o){var u,a,c;return(u=Math.sqrt(t*t+n*n))&&(t/=u,n/=u),(c=t*e+n*r)&&(e-=t*c,r-=n*c),(a=Math.sqrt(e*e+r*r))&&(e/=a,r/=a,c/=a),t*r<n*e&&(t=-t,n=-n,c=-c,u=-u),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*N,skewX:Math.atan(c)*N,scaleX:u,scaleY:a}};function D(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}return function(o,u){var a=[],c=[];return o=t(o),u=t(u),function(t,r,i,o,u,a){if(t!==i||r!==o){var c=u.push("translate(",null,n,null,e);a.push({i:c-4,x:v(t,i)},{i:c-2,x:v(r,o)})}else(i||o)&&u.push("translate("+i+n+o+e)}(o.translateX,o.translateY,u.translateX,u.translateY,a,c),function(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:v(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}(o.rotate,u.rotate,a,c),function(t,n,e,o){t!==n?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:v(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}(o.skewX,u.skewX,a,c),function(t,n,e,r,o,u){if(t!==e||n!==r){var a=o.push(i(o)+"scale(",null,",",null,")");u.push({i:a-4,x:v(t,e)},{i:a-2,x:v(n,r)})}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")")}(o.scaleX,o.scaleY,u.scaleX,u.scaleY,a,c),o=u=null,function(t){for(var n,e=-1,r=c.length;++e<r;)a[(n=c[e]).i]=n.x(t);return a.join("")}}}var F=D(function(t){return"none"===t?O:(b||(b=document.createElement("DIV"),M=document.documentElement,T=document.defaultView),b.style.transform=t,t=T.getComputedStyle(M.appendChild(b),null).getPropertyValue("transform"),M.removeChild(b),t=t.slice(7,-1).split(","),E(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5]))},"px, ","px)","deg)"),P=D(function(t){return null==t?O:(A||(A=document.createElementNS("http://www.w3.org/2000/svg","g")),A.setAttribute("transform",t),(t=A.transform.baseVal.consolidate())?(t=t.matrix,E(t.a,t.b,t.c,t.d,t.e,t.f)):O)},", ",")",")"),L=Math.SQRT2;function I(t){return((t=Math.exp(t))+1/t)/2}var j=function(t,n){var e,r,i=t[0],o=t[1],u=t[2],a=n[0],c=n[1],s=n[2],l=a-i,f=c-o,h=l*l+f*f;if(h<1e-12)r=Math.log(s/u)/L,e=function(t){return[i+t*l,o+t*f,u*Math.exp(L*t*r)]};else{var d=Math.sqrt(h),p=(s*s-u*u+4*h)/(2*u*2*d),_=(s*s-u*u-4*h)/(2*s*2*d),y=Math.log(Math.sqrt(p*p+1)-p),g=Math.log(Math.sqrt(_*_+1)-_);r=(g-y)/L,e=function(t){var n,e=t*r,a=I(y),c=u/(2*d)*(a*(n=L*e+y,((n=Math.exp(2*n))-1)/(n+1))-function(t){return((t=Math.exp(t))-1/t)/2}(y));return[i+c*l,o+c*f,u*a/I(L*e+y)]}}return e.duration=1e3*r,e};function R(t){return function(n,e){var i=t((n=Object(r.hsl)(n)).h,(e=Object(r.hsl)(e)).h),o=f(n.s,e.s),u=f(n.l,e.l),a=f(n.opacity,e.opacity);return function(t){return n.h=i(t),n.s=o(t),n.l=u(t),n.opacity=a(t),n+""}}}var U=R(s),B=R(f);function H(t,n){var e=f((t=Object(r.lab)(t)).l,(n=Object(r.lab)(n)).l),i=f(t.a,n.a),o=f(t.b,n.b),u=f(t.opacity,n.opacity);return function(n){return t.l=e(n),t.a=i(n),t.b=o(n),t.opacity=u(n),t+""}}function Y(t){return function(n,e){var i=t((n=Object(r.hcl)(n)).h,(e=Object(r.hcl)(e)).h),o=f(n.c,e.c),u=f(n.l,e.l),a=f(n.opacity,e.opacity);return function(t){return n.h=i(t),n.c=o(t),n.l=u(t),n.opacity=a(t),n+""}}}var q=Y(s),z=Y(f);function G(t){return function n(e){function i(n,i){var o=t((n=Object(r.cubehelix)(n)).h,(i=Object(r.cubehelix)(i)).h),u=f(n.s,i.s),a=f(n.l,i.l),c=f(n.opacity,i.opacity);return function(t){return n.h=o(t),n.s=u(t),n.l=a(Math.pow(t,e)),n.opacity=c(t),n+""}}return e=+e,i.gamma=n,i}(1)}var X=G(s),W=G(f),$=function(t,n){for(var e=new Array(n),r=0;r<n;++r)e[r]=t(r/(n-1));return e};e.d(n,"interpolate",function(){return C}),e.d(n,"interpolateArray",function(){return y}),e.d(n,"interpolateBasis",function(){return o}),e.d(n,"interpolateBasisClosed",function(){return u}),e.d(n,"interpolateDate",function(){return g}),e.d(n,"interpolateNumber",function(){return v}),e.d(n,"interpolateObject",function(){return m}),e.d(n,"interpolateRound",function(){return k}),e.d(n,"interpolateString",function(){return S}),e.d(n,"interpolateTransformCss",function(){return F}),e.d(n,"interpolateTransformSvg",function(){return P}),e.d(n,"interpolateZoom",function(){return j}),e.d(n,"interpolateRgb",function(){return h}),e.d(n,"interpolateRgbBasis",function(){return p}),e.d(n,"interpolateRgbBasisClosed",function(){return _}),e.d(n,"interpolateHsl",function(){return U}),e.d(n,"interpolateHslLong",function(){return B}),e.d(n,"interpolateLab",function(){return H}),e.d(n,"interpolateHcl",function(){return q}),e.d(n,"interpolateHclLong",function(){return z}),e.d(n,"interpolateCubehelix",function(){return X}),e.d(n,"interpolateCubehelixLong",function(){return W}),e.d(n,"quantize",function(){return $})},function(t,n,e){"use strict";e.r(n);var r,i=function(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]},o=function(t){return(t=i(Math.abs(t)))?t[1]:NaN},u=function(t,n){var e=i(t,n);if(!e)return t+"";var r=e[0],o=e[1];return o<0?"0."+new Array(-o).join("0")+r:r.length>o+1?r.slice(0,o+1)+"."+r.slice(o+1):r+new Array(o-r.length+2).join("0")},a={"":function(t,n){t:for(var e,r=(t=t.toPrecision(n)).length,i=1,o=-1;i<r;++i)switch(t[i]){case".":o=e=i;break;case"0":0===o&&(o=i),e=i;break;case"e":break t;default:o>0&&(o=0)}return o>0?t.slice(0,o)+t.slice(e+1):t},"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return u(100*t,n)},r:u,s:function(t,n){var e=i(t,n);if(!e)return t+"";var o=e[0],u=e[1],a=u-(r=3*Math.max(-8,Math.min(8,Math.floor(u/3))))+1,c=o.length;return a===c?o:a>c?o+new Array(a-c+1).join("0"):a>0?o.slice(0,a)+"."+o.slice(a):"0."+new Array(1-a).join("0")+i(t,Math.max(0,n+a-1))[0]},X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}},c=/^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;function s(t){return new l(t)}function l(t){if(!(n=c.exec(t)))throw new Error("invalid format: "+t);var n,e=n[1]||" ",r=n[2]||">",i=n[3]||"-",o=n[4]||"",u=!!n[5],s=n[6]&&+n[6],l=!!n[7],f=n[8]&&+n[8].slice(1),h=n[9]||"";"n"===h?(l=!0,h="g"):a[h]||(h=""),(u||"0"===e&&"="===r)&&(u=!0,e="0",r="="),this.fill=e,this.align=r,this.sign=i,this.symbol=o,this.zero=u,this.width=s,this.comma=l,this.precision=f,this.type=h}s.prototype=l.prototype,l.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(null==this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(null==this.precision?"":"."+Math.max(0,0|this.precision))+this.type};var f,h,d,p=function(t){return t},_=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"],y=function(t){var n,e,i=t.grouping&&t.thousands?(n=t.grouping,e=t.thousands,function(t,r){for(var i=t.length,o=[],u=0,a=n[0],c=0;i>0&&a>0&&(c+a+1>r&&(a=Math.max(1,r-c)),o.push(t.substring(i-=a,i+a)),!((c+=a+1)>r));)a=n[u=(u+1)%n.length];return o.reverse().join(e)}):p,u=t.currency,c=t.decimal,l=t.numerals?function(t){return function(n){return n.replace(/[0-9]/g,function(n){return t[+n]})}}(t.numerals):p,f=t.percent||"%";function h(t){var n=(t=s(t)).fill,e=t.align,o=t.sign,h=t.symbol,d=t.zero,p=t.width,y=t.comma,g=t.precision,v=t.type,m="$"===h?u[0]:"#"===h&&/[boxX]/.test(v)?"0"+v.toLowerCase():"",x="$"===h?u[1]:/[%p]/.test(v)?f:"",w=a[v],b=!v||/[defgprs%]/.test(v);function M(t){var u,a,s,f=m,h=x;if("c"===v)h=w(t)+h,t="";else{var M=(t=+t)<0;if(t=w(Math.abs(t),g),M&&0==+t&&(M=!1),f=(M?"("===o?o:"-":"-"===o||"("===o?"":o)+f,h=h+("s"===v?_[8+r/3]:"")+(M&&"("===o?")":""),b)for(u=-1,a=t.length;++u<a;)if(48>(s=t.charCodeAt(u))||s>57){h=(46===s?c+t.slice(u+1):t.slice(u))+h,t=t.slice(0,u);break}}y&&!d&&(t=i(t,1/0));var T=f.length+t.length+h.length,A=T<p?new Array(p-T+1).join(n):"";switch(y&&d&&(t=i(A+t,A.length?p-h.length:1/0),A=""),e){case"<":t=f+t+h+A;break;case"=":t=f+A+t+h;break;case"^":t=A.slice(0,T=A.length>>1)+f+t+h+A.slice(T);break;default:t=A+f+t+h}return l(t)}return g=null==g?v?6:12:/[gprs]/.test(v)?Math.max(1,Math.min(21,g)):Math.max(0,Math.min(20,g)),M.toString=function(){return t+""},M}return{format:h,formatPrefix:function(t,n){var e=h(((t=s(t)).type="f",t)),r=3*Math.max(-8,Math.min(8,Math.floor(o(n)/3))),i=Math.pow(10,-r),u=_[8+r/3];return function(t){return e(i*t)+u}}}};function g(t){return f=y(t),h=f.format,d=f.formatPrefix,f}g({decimal:".",thousands:",",grouping:[3],currency:["$",""]});var v=function(t){return Math.max(0,-o(Math.abs(t)))},m=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(o(n)/3)))-o(Math.abs(t)))},x=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,o(n)-o(t))+1};e.d(n,"formatDefaultLocale",function(){return g}),e.d(n,"format",function(){return h}),e.d(n,"formatPrefix",function(){return d}),e.d(n,"formatLocale",function(){return y}),e.d(n,"formatSpecifier",function(){return s}),e.d(n,"precisionFixed",function(){return v}),e.d(n,"precisionPrefix",function(){return m}),e.d(n,"precisionRound",function(){return x})},function(t,n,e){"use strict";e.r(n);var r=e(1);function i(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function o(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function u(t){return{y:t,m:0,d:1,H:0,M:0,S:0,L:0}}function a(t){var n=t.dateTime,e=t.date,r=t.time,a=t.periods,c=t.days,s=t.shortDays,l=t.months,f=t.shortMonths,h=m(a),p=x(a),_=m(c),y=x(c),g=m(s),v=x(s),lt=m(l),ft=x(l),ht=m(f),dt=x(f),pt={a:function(t){return s[t.getDay()]},A:function(t){return c[t.getDay()]},b:function(t){return f[t.getMonth()]},B:function(t){return l[t.getMonth()]},c:null,d:L,e:L,H:I,I:j,j:R,L:U,m:B,M:H,p:function(t){return a[+(t.getHours()>=12)]},S:Y,U:q,w:z,W:G,x:null,X:null,y:X,Y:W,Z:$,"%":st},_t={a:function(t){return s[t.getUTCDay()]},A:function(t){return c[t.getUTCDay()]},b:function(t){return f[t.getUTCMonth()]},B:function(t){return l[t.getUTCMonth()]},c:null,d:V,e:V,H:Z,I:Q,j:J,L:K,m:tt,M:nt,p:function(t){return a[+(t.getUTCHours()>=12)]},S:et,U:rt,w:it,W:ot,x:null,X:null,y:ut,Y:at,Z:ct,"%":st},yt={a:function(t,n,e){var r=g.exec(n.slice(e));return r?(t.w=v[r[0].toLowerCase()],e+r[0].length):-1},A:function(t,n,e){var r=_.exec(n.slice(e));return r?(t.w=y[r[0].toLowerCase()],e+r[0].length):-1},b:function(t,n,e){var r=ht.exec(n.slice(e));return r?(t.m=dt[r[0].toLowerCase()],e+r[0].length):-1},B:function(t,n,e){var r=lt.exec(n.slice(e));return r?(t.m=ft[r[0].toLowerCase()],e+r[0].length):-1},c:function(t,e,r){return mt(t,n,e,r)},d:k,e:k,H:O,I:O,j:N,L:F,m:C,M:E,p:function(t,n,e){var r=h.exec(n.slice(e));return r?(t.p=p[r[0].toLowerCase()],e+r[0].length):-1},S:D,U:b,w:w,W:M,x:function(t,n,r){return mt(t,e,n,r)},X:function(t,n,e){return mt(t,r,n,e)},y:A,Y:T,Z:S,"%":P};function gt(t,n){return function(e){var r,i,o,u=[],a=-1,c=0,s=t.length;for(e instanceof Date||(e=new Date(+e));++a<s;)37===t.charCodeAt(a)&&(u.push(t.slice(c,a)),null!=(i=d[r=t.charAt(++a)])?r=t.charAt(++a):i="e"===r?" ":"0",(o=n[r])&&(r=o(e,i)),u.push(r),c=a+1);return u.push(t.slice(c,a)),u.join("")}}function vt(t,n){return function(e){var r=u(1900);if(mt(r,t,e+="",0)!=e.length)return null;if("p"in r&&(r.H=r.H%12+12*r.p),"W"in r||"U"in r){"w"in r||(r.w="W"in r?1:0);var i="Z"in r?o(u(r.y)).getUTCDay():n(u(r.y)).getDay();r.m=0,r.d="W"in r?(r.w+6)%7+7*r.W-(i+5)%7:r.w+7*r.U-(i+6)%7}return"Z"in r?(r.H+=r.Z/100|0,r.M+=r.Z%100,o(r)):n(r)}}function mt(t,n,e,r){for(var i,o,u=0,a=n.length,c=e.length;u<a;){if(r>=c)return-1;if(37===(i=n.charCodeAt(u++))){if(i=n.charAt(u++),!(o=yt[i in d?n.charAt(u++):i])||(r=o(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}return pt.x=gt(e,pt),pt.X=gt(r,pt),pt.c=gt(n,pt),_t.x=gt(e,_t),_t.X=gt(r,_t),_t.c=gt(n,_t),{format:function(t){var n=gt(t+="",pt);return n.toString=function(){return t},n},parse:function(t){var n=vt(t+="",i);return n.toString=function(){return t},n},utcFormat:function(t){var n=gt(t+="",_t);return n.toString=function(){return t},n},utcParse:function(t){var n=vt(t,o);return n.toString=function(){return t},n}}}var c,s,l,f,h,d={"-":"",_:" ",0:"0"},p=/^\s*\d+/,_=/^%/,y=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;function g(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",o=i.length;return r+(o<e?new Array(e-o+1).join(n)+i:i)}function v(t){return t.replace(y,"\\$&")}function m(t){return new RegExp("^(?:"+t.map(v).join("|")+")","i")}function x(t){for(var n={},e=-1,r=t.length;++e<r;)n[t[e].toLowerCase()]=e;return n}function w(t,n,e){var r=p.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1}function b(t,n,e){var r=p.exec(n.slice(e));return r?(t.U=+r[0],e+r[0].length):-1}function M(t,n,e){var r=p.exec(n.slice(e));return r?(t.W=+r[0],e+r[0].length):-1}function T(t,n,e){var r=p.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):-1}function A(t,n,e){var r=p.exec(n.slice(e,e+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function S(t,n,e){var r=/^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e,e+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function C(t,n,e){var r=p.exec(n.slice(e,e+2));return r?(t.m=r[0]-1,e+r[0].length):-1}function k(t,n,e){var r=p.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):-1}function N(t,n,e){var r=p.exec(n.slice(e,e+3));return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function O(t,n,e){var r=p.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1}function E(t,n,e){var r=p.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1}function D(t,n,e){var r=p.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):-1}function F(t,n,e){var r=p.exec(n.slice(e,e+3));return r?(t.L=+r[0],e+r[0].length):-1}function P(t,n,e){var r=_.exec(n.slice(e,e+1));return r?e+r[0].length:-1}function L(t,n){return g(t.getDate(),n,2)}function I(t,n){return g(t.getHours(),n,2)}function j(t,n){return g(t.getHours()%12||12,n,2)}function R(t,n){return g(1+r.timeDay.count(Object(r.timeYear)(t),t),n,3)}function U(t,n){return g(t.getMilliseconds(),n,3)}function B(t,n){return g(t.getMonth()+1,n,2)}function H(t,n){return g(t.getMinutes(),n,2)}function Y(t,n){return g(t.getSeconds(),n,2)}function q(t,n){return g(r.timeSunday.count(Object(r.timeYear)(t),t),n,2)}function z(t){return t.getDay()}function G(t,n){return g(r.timeMonday.count(Object(r.timeYear)(t),t),n,2)}function X(t,n){return g(t.getFullYear()%100,n,2)}function W(t,n){return g(t.getFullYear()%1e4,n,4)}function $(t){var n=t.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+g(n/60|0,"0",2)+g(n%60,"0",2)}function V(t,n){return g(t.getUTCDate(),n,2)}function Z(t,n){return g(t.getUTCHours(),n,2)}function Q(t,n){return g(t.getUTCHours()%12||12,n,2)}function J(t,n){return g(1+r.utcDay.count(Object(r.utcYear)(t),t),n,3)}function K(t,n){return g(t.getUTCMilliseconds(),n,3)}function tt(t,n){return g(t.getUTCMonth()+1,n,2)}function nt(t,n){return g(t.getUTCMinutes(),n,2)}function et(t,n){return g(t.getUTCSeconds(),n,2)}function rt(t,n){return g(r.utcSunday.count(Object(r.utcYear)(t),t),n,2)}function it(t){return t.getUTCDay()}function ot(t,n){return g(r.utcMonday.count(Object(r.utcYear)(t),t),n,2)}function ut(t,n){return g(t.getUTCFullYear()%100,n,2)}function at(t,n){return g(t.getUTCFullYear()%1e4,n,4)}function ct(){return"+0000"}function st(){return"%"}function lt(t){return c=a(t),s=c.format,l=c.parse,f=c.utcFormat,h=c.utcParse,c}lt({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var ft=Date.prototype.toISOString?function(t){return t.toISOString()}:f("%Y-%m-%dT%H:%M:%S.%LZ");var ht=+new Date("2000-01-01T00:00:00.000Z")?function(t){var n=new Date(t);return isNaN(n)?null:n}:h("%Y-%m-%dT%H:%M:%S.%LZ");e.d(n,"timeFormatDefaultLocale",function(){return lt}),e.d(n,"timeFormat",function(){return s}),e.d(n,"timeParse",function(){return l}),e.d(n,"utcFormat",function(){return f}),e.d(n,"utcParse",function(){return h}),e.d(n,"timeFormatLocale",function(){return a}),e.d(n,"isoFormat",function(){return ft}),e.d(n,"isoParse",function(){return ht})},function(t,n,e){"use strict";e.r(n);var r={value:function(){}};function i(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r)throw new Error("illegal type: "+t);r[t]=[]}return new o(r)}function o(t){this._=t}function u(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function a(t,n,e){for(var i=0,o=t.length;i<o;++i)if(t[i].name===n){t[i]=r,t=t.slice(0,i).concat(t.slice(i+1));break}return null!=e&&t.push({name:n,value:e}),t}o.prototype=i.prototype={constructor:o,on:function(t,n){var e,r,i=this._,o=(r=i,(t+"").trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");if(e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),t&&!r.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:n}})),c=-1,s=o.length;if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++c<s;)if(e=(t=o[c]).type)i[e]=a(i[e],t.name,n);else if(null==n)for(e in i)i[e]=a(i[e],t.name,null);return this}for(;++c<s;)if((e=(t=o[c]).type)&&(e=u(i[e],t.name)))return e},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new o(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};var c=i;e.d(n,"dispatch",function(){return c})},function(t,n,e){"use strict";function r(t){return+t}function i(t){return t*t}function o(t){return t*(2-t)}function u(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}function a(t){return t*t*t}function c(t){return--t*t*t+1}function s(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}e.r(n);var l=function t(n){function e(t){return Math.pow(t,n)}return n=+n,e.exponent=t,e}(3),f=function t(n){function e(t){return 1-Math.pow(1-t,n)}return n=+n,e.exponent=t,e}(3),h=function t(n){function e(t){return((t*=2)<=1?Math.pow(t,n):2-Math.pow(2-t,n))/2}return n=+n,e.exponent=t,e}(3),d=Math.PI,p=d/2;function _(t){return 1-Math.cos(t*p)}function y(t){return Math.sin(t*p)}function g(t){return(1-Math.cos(d*t))/2}function v(t){return Math.pow(2,10*t-10)}function m(t){return 1-Math.pow(2,-10*t)}function x(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}function w(t){return 1-Math.sqrt(1-t*t)}function b(t){return Math.sqrt(1- --t*t)}function M(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}var T=4/11,A=6/11,S=8/11,C=.75,k=9/11,N=10/11,O=.9375,E=21/22,D=63/64,F=1/T/T;function P(t){return 1-L(1-t)}function L(t){return(t=+t)<T?F*t*t:t<S?F*(t-=A)*t+C:t<N?F*(t-=k)*t+O:F*(t-=E)*t+D}function I(t){return((t*=2)<=1?1-L(1-t):L(t-1)+1)/2}var j=function t(n){function e(t){return t*t*((n+1)*t-n)}return n=+n,e.overshoot=t,e}(1.70158),R=function t(n){function e(t){return--t*t*((n+1)*t+n)+1}return n=+n,e.overshoot=t,e}(1.70158),U=function t(n){function e(t){return((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2}return n=+n,e.overshoot=t,e}(1.70158),B=2*Math.PI,H=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=B);function i(t){return n*Math.pow(2,10*--t)*Math.sin((r-t)/e)}return i.amplitude=function(n){return t(n,e*B)},i.period=function(e){return t(n,e)},i}(1,.3),Y=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=B);function i(t){return 1-n*Math.pow(2,-10*(t=+t))*Math.sin((t+r)/e)}return i.amplitude=function(n){return t(n,e*B)},i.period=function(e){return t(n,e)},i}(1,.3),q=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=B);function i(t){return((t=2*t-1)<0?n*Math.pow(2,10*t)*Math.sin((r-t)/e):2-n*Math.pow(2,-10*t)*Math.sin((r+t)/e))/2}return i.amplitude=function(n){return t(n,e*B)},i.period=function(e){return t(n,e)},i}(1,.3);e.d(n,"easeLinear",function(){return r}),e.d(n,"easeQuad",function(){return u}),e.d(n,"easeQuadIn",function(){return i}),e.d(n,"easeQuadOut",function(){return o}),e.d(n,"easeQuadInOut",function(){return u}),e.d(n,"easeCubic",function(){return s}),e.d(n,"easeCubicIn",function(){return a}),e.d(n,"easeCubicOut",function(){return c}),e.d(n,"easeCubicInOut",function(){return s}),e.d(n,"easePoly",function(){return h}),e.d(n,"easePolyIn",function(){return l}),e.d(n,"easePolyOut",function(){return f}),e.d(n,"easePolyInOut",function(){return h}),e.d(n,"easeSin",function(){return g}),e.d(n,"easeSinIn",function(){return _}),e.d(n,"easeSinOut",function(){return y}),e.d(n,"easeSinInOut",function(){return g}),e.d(n,"easeExp",function(){return x}),e.d(n,"easeExpIn",function(){return v}),e.d(n,"easeExpOut",function(){return m}),e.d(n,"easeExpInOut",function(){return x}),e.d(n,"easeCircle",function(){return M}),e.d(n,"easeCircleIn",function(){return w}),e.d(n,"easeCircleOut",function(){return b}),e.d(n,"easeCircleInOut",function(){return M}),e.d(n,"easeBounce",function(){return L}),e.d(n,"easeBounceIn",function(){return P}),e.d(n,"easeBounceOut",function(){return L}),e.d(n,"easeBounceInOut",function(){return I}),e.d(n,"easeBack",function(){return U}),e.d(n,"easeBackIn",function(){return j}),e.d(n,"easeBackOut",function(){return R}),e.d(n,"easeBackInOut",function(){return U}),e.d(n,"easeElastic",function(){return Y}),e.d(n,"easeElasticIn",function(){return H}),e.d(n,"easeElasticOut",function(){return Y}),e.d(n,"easeElasticInOut",function(){return q})},function(t,n,e){"use strict";e.r(n);function r(){}function i(t,n){var e=new r;if(t instanceof r)t.each(function(t,n){e.set(n,t)});else if(Array.isArray(t)){var i,o=-1,u=t.length;if(null==n)for(;++o<u;)e.set(o,t[o]);else for(;++o<u;)e.set(n(i=t[o],o,t),i)}else if(t)for(var a in t)e.set(a,t[a]);return e}r.prototype=i.prototype={constructor:r,has:function(t){return"$"+t in this},get:function(t){return this["$"+t]},set:function(t,n){return this["$"+t]=n,this},remove:function(t){var n="$"+t;return n in this&&delete this[n]},clear:function(){for(var t in this)"$"===t[0]&&delete this[t]},keys:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(n.slice(1));return t},values:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(this[n]);return t},entries:function(){var t=[];for(var n in this)"$"===n[0]&&t.push({key:n.slice(1),value:this[n]});return t},size:function(){var t=0;for(var n in this)"$"===n[0]&&++t;return t},empty:function(){for(var t in this)if("$"===t[0])return!1;return!0},each:function(t){for(var n in this)"$"===n[0]&&t(this[n],n.slice(1),this)}};var o=i,u=function(){var t,n,e,r=[],i=[];function u(e,i,a,c){if(i>=r.length)return null!=t&&e.sort(t),null!=n?n(e):e;for(var s,l,f,h=-1,d=e.length,p=r[i++],_=o(),y=a();++h<d;)(f=_.get(s=p(l=e[h])+""))?f.push(l):_.set(s,[l]);return _.each(function(t,n){c(y,n,u(t,i,a,c))}),y}return e={object:function(t){return u(t,0,a,c)},map:function(t){return u(t,0,s,l)},entries:function(t){return function t(e,o){if(++o>r.length)return e;var u,a=i[o-1];return null!=n&&o>=r.length?u=e.entries():(u=[],e.each(function(n,e){u.push({key:e,values:t(n,o)})})),null!=a?u.sort(function(t,n){return a(t.key,n.key)}):u}(u(t,0,s,l),0)},key:function(t){return r.push(t),e},sortKeys:function(t){return i[r.length-1]=t,e},sortValues:function(n){return t=n,e},rollup:function(t){return n=t,e}}};function a(){return{}}function c(t,n,e){t[n]=e}function s(){return o()}function l(t,n,e){t.set(n,e)}function f(){}var h=o.prototype;function d(t,n){var e=new f;if(t instanceof f)t.each(function(t){e.add(t)});else if(t){var r=-1,i=t.length;if(null==n)for(;++r<i;)e.add(t[r]);else for(;++r<i;)e.add(n(t[r],r,t))}return e}f.prototype=d.prototype={constructor:f,has:h.has,add:function(t){return this["$"+(t+="")]=t,this},remove:h.remove,clear:h.clear,values:h.keys,size:h.size,empty:h.empty,each:h.each};var p=d,_=function(t){var n=[];for(var e in t)n.push(e);return n},y=function(t){var n=[];for(var e in t)n.push(t[e]);return n},g=function(t){var n=[];for(var e in t)n.push({key:e,value:t[e]});return n};e.d(n,"nest",function(){return u}),e.d(n,"set",function(){return p}),e.d(n,"map",function(){return o}),e.d(n,"keys",function(){return _}),e.d(n,"values",function(){return y}),e.d(n,"entries",function(){return g})},function(t,n,e){"use strict";var r;void 0===(r=function(){return{colorSchemas:{britecharts:["#6aedc7","#39c2c9","#ffce00","#ffa71a","#f866b9","#998ce3"],grey:["#F8F8FA","#EFF2F5","#D2D6DF","#C3C6CF","#ADB0B6","#666A73","#45494E","#363A43","#282C35"],orange:["#fcc870","#ffa71a","#fb8825","#f6682f","#db5a2c","#bf4c28","#a43b1c","#892a10","#f9e9c5"],blueGreen:["#ccf7f6","#70e4e0","#00d8d2","#00acaf","#007f8c","#005e66","#003c3f","#002d2f","#0d2223"],teal:["#ccfffe","#94f7f4","#00fff8","#1de1e1","#39c2c9","#2e9a9d","#227270","#1a5957","#133f3e"],green:["#edfff7","#d7ffef","#c0ffe7","#95f5d7","#6aedc7","#59c3a3","#479980","#34816a","#206953"],yellow:["#f9f2b3","#fbe986","#fce05a","#fed72d","#ffce00","#fcc11c","#f9b438","#eda629","#e09819"],pink:["#fdd1ea","#fb9cd2","#f866b9","#fc40b6","#ff1ab3","#e3239d","#c62c86","#a62073","#85135f"],purple:["#ddd6fc","#bbb1f0","#998ce3","#8e6bc1","#824a9e","#77337f","#6b1c60","#591650","#470f3f"],red:["#ffd8d4","#ffb5b0","#ff938c","#ff766c","#ff584c","#f04b42","#e03d38","#be2e29","#9c1e19"]},colorSchemasHuman:{britecharts:"Britecharts Default",grey:"Britecharts Grey",orange:"Orange",blueGreen:"Blue",teal:"Light Blue",green:"Green",yellow:"Yellow",pink:"Pink",purple:"Purple",red:"Red"},colorGradients:{greenBlue:["#39C7EA","#4CDCBA"],orangePink:["#FBC670","#F766B8"],bluePurple:["#3DC3C9","#824a9e"]},colorGradientsHuman:{greenBlue:"Green to Blue",orangePink:"Orange to Pink",bluePurple:"Blue to Purple"},singleColors:{aloeGreen:["#7bdcc0"],greenColor:["#6aedc7"],blueColor:["#39c2c9"],yellowColor:["#ffce00"],orangeColor:["#ffa71a"],pinkColor:["#f866b9"],purpleColor:["#998ce3"]},singleColorsHuman:{aloeGreen:"Aloe Green",greenColor:"Green",blueColor:"Blue",yellowColor:"Yellow",orangeColor:"Orange",pinkColor:"Pink",purpleColor:"Purple"}}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict";e.r(n);var r=Math.PI,i=2*r,o=i-1e-6;function u(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function a(){return new u}u.prototype=a.prototype={constructor:u,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,e,i,o){t=+t,n=+n,e=+e,i=+i,o=+o;var u=this._x1,a=this._y1,c=e-t,s=i-n,l=u-t,f=a-n,h=l*l+f*f;if(o<0)throw new Error("negative radius: "+o);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(h>1e-6)if(Math.abs(f*c-s*l)>1e-6&&o){var d=e-u,p=i-a,_=c*c+s*s,y=d*d+p*p,g=Math.sqrt(_),v=Math.sqrt(h),m=o*Math.tan((r-Math.acos((_+h-y)/(2*g*v)))/2),x=m/v,w=m/g;Math.abs(x-1)>1e-6&&(this._+="L"+(t+x*l)+","+(n+x*f)),this._+="A"+o+","+o+",0,0,"+ +(f*d>l*p)+","+(this._x1=t+w*c)+","+(this._y1=n+w*s)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,u,a,c){t=+t,n=+n;var s=(e=+e)*Math.cos(u),l=e*Math.sin(u),f=t+s,h=n+l,d=1^c,p=c?u-a:a-u;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+f+","+h:(Math.abs(this._x1-f)>1e-6||Math.abs(this._y1-h)>1e-6)&&(this._+="L"+f+","+h),e&&(p<0&&(p=p%i+i),p>o?this._+="A"+e+","+e+",0,1,"+d+","+(t-s)+","+(n-l)+"A"+e+","+e+",0,1,"+d+","+(this._x1=f)+","+(this._y1=h):p>1e-6&&(this._+="A"+e+","+e+",0,"+ +(p>=r)+","+d+","+(this._x1=t+e*Math.cos(a))+","+(this._y1=n+e*Math.sin(a))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}};var c=a,s=function(t){return function(){return t}},l=Math.abs,f=Math.atan2,h=Math.cos,d=Math.max,p=Math.min,_=Math.sin,y=Math.sqrt,g=1e-12,v=Math.PI,m=v/2,x=2*v;function w(t){return t>=1?m:t<=-1?-m:Math.asin(t)}function b(t){return t.innerRadius}function M(t){return t.outerRadius}function T(t){return t.startAngle}function A(t){return t.endAngle}function S(t){return t&&t.padAngle}function C(t,n,e,r,i,o,u){var a=t-e,c=n-r,s=(u?o:-o)/y(a*a+c*c),l=s*c,f=-s*a,h=t+l,p=n+f,_=e+l,g=r+f,v=(h+_)/2,m=(p+g)/2,x=_-h,w=g-p,b=x*x+w*w,M=i-o,T=h*g-_*p,A=(w<0?-1:1)*y(d(0,M*M*b-T*T)),S=(T*w-x*A)/b,C=(-T*x-w*A)/b,k=(T*w+x*A)/b,N=(-T*x+w*A)/b,O=S-v,E=C-m,D=k-v,F=N-m;return O*O+E*E>D*D+F*F&&(S=k,C=N),{cx:S,cy:C,x01:-l,y01:-f,x11:S*(i/M-1),y11:C*(i/M-1)}}var k=function(){var t=b,n=M,e=s(0),r=null,i=T,o=A,u=S,a=null;function d(){var s,d,b,M=+t.apply(this,arguments),T=+n.apply(this,arguments),A=i.apply(this,arguments)-m,S=o.apply(this,arguments)-m,k=l(S-A),N=S>A;if(a||(a=s=c()),T<M&&(d=T,T=M,M=d),T>g)if(k>x-g)a.moveTo(T*h(A),T*_(A)),a.arc(0,0,T,A,S,!N),M>g&&(a.moveTo(M*h(S),M*_(S)),a.arc(0,0,M,S,A,N));else{var O,E,D=A,F=S,P=A,L=S,I=k,j=k,R=u.apply(this,arguments)/2,U=R>g&&(r?+r.apply(this,arguments):y(M*M+T*T)),B=p(l(T-M)/2,+e.apply(this,arguments)),H=B,Y=B;if(U>g){var q=w(U/M*_(R)),z=w(U/T*_(R));(I-=2*q)>g?(P+=q*=N?1:-1,L-=q):(I=0,P=L=(A+S)/2),(j-=2*z)>g?(D+=z*=N?1:-1,F-=z):(j=0,D=F=(A+S)/2)}var G=T*h(D),X=T*_(D),W=M*h(L),$=M*_(L);if(B>g){var V=T*h(F),Z=T*_(F),Q=M*h(P),J=M*_(P);if(k<v){var K=I>g?function(t,n,e,r,i,o,u,a){var c=e-t,s=r-n,l=u-i,f=a-o,h=(l*(n-o)-f*(t-i))/(f*c-l*s);return[t+h*c,n+h*s]}(G,X,Q,J,V,Z,W,$):[W,$],tt=G-K[0],nt=X-K[1],et=V-K[0],rt=Z-K[1],it=1/_(((b=(tt*et+nt*rt)/(y(tt*tt+nt*nt)*y(et*et+rt*rt)))>1?0:b<-1?v:Math.acos(b))/2),ot=y(K[0]*K[0]+K[1]*K[1]);H=p(B,(M-ot)/(it-1)),Y=p(B,(T-ot)/(it+1))}}j>g?Y>g?(O=C(Q,J,G,X,T,Y,N),E=C(V,Z,W,$,T,Y,N),a.moveTo(O.cx+O.x01,O.cy+O.y01),Y<B?a.arc(O.cx,O.cy,Y,f(O.y01,O.x01),f(E.y01,E.x01),!N):(a.arc(O.cx,O.cy,Y,f(O.y01,O.x01),f(O.y11,O.x11),!N),a.arc(0,0,T,f(O.cy+O.y11,O.cx+O.x11),f(E.cy+E.y11,E.cx+E.x11),!N),a.arc(E.cx,E.cy,Y,f(E.y11,E.x11),f(E.y01,E.x01),!N))):(a.moveTo(G,X),a.arc(0,0,T,D,F,!N)):a.moveTo(G,X),M>g&&I>g?H>g?(O=C(W,$,V,Z,M,-H,N),E=C(G,X,Q,J,M,-H,N),a.lineTo(O.cx+O.x01,O.cy+O.y01),H<B?a.arc(O.cx,O.cy,H,f(O.y01,O.x01),f(E.y01,E.x01),!N):(a.arc(O.cx,O.cy,H,f(O.y01,O.x01),f(O.y11,O.x11),!N),a.arc(0,0,M,f(O.cy+O.y11,O.cx+O.x11),f(E.cy+E.y11,E.cx+E.x11),N),a.arc(E.cx,E.cy,H,f(E.y11,E.x11),f(E.y01,E.x01),!N))):a.arc(0,0,M,L,P,N):a.lineTo(W,$)}else a.moveTo(0,0);if(a.closePath(),s)return a=null,s+""||null}return d.centroid=function(){var e=(+t.apply(this,arguments)+ +n.apply(this,arguments))/2,r=(+i.apply(this,arguments)+ +o.apply(this,arguments))/2-v/2;return[h(r)*e,_(r)*e]},d.innerRadius=function(n){return arguments.length?(t="function"==typeof n?n:s(+n),d):t},d.outerRadius=function(t){return arguments.length?(n="function"==typeof t?t:s(+t),d):n},d.cornerRadius=function(t){return arguments.length?(e="function"==typeof t?t:s(+t),d):e},d.padRadius=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:s(+t),d):r},d.startAngle=function(t){return arguments.length?(i="function"==typeof t?t:s(+t),d):i},d.endAngle=function(t){return arguments.length?(o="function"==typeof t?t:s(+t),d):o},d.padAngle=function(t){return arguments.length?(u="function"==typeof t?t:s(+t),d):u},d.context=function(t){return arguments.length?(a=null==t?null:t,d):a},d};function N(t){this._context=t}N.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}};var O=function(t){return new N(t)};function E(t){return t[0]}function D(t){return t[1]}var F=function(){var t=E,n=D,e=s(!0),r=null,i=O,o=null;function u(u){var a,s,l,f=u.length,h=!1;for(null==r&&(o=i(l=c())),a=0;a<=f;++a)!(a<f&&e(s=u[a],a,u))===h&&((h=!h)?o.lineStart():o.lineEnd()),h&&o.point(+t(s,a,u),+n(s,a,u));if(l)return o=null,l+""||null}return u.x=function(n){return arguments.length?(t="function"==typeof n?n:s(+n),u):t},u.y=function(t){return arguments.length?(n="function"==typeof t?t:s(+t),u):n},u.defined=function(t){return arguments.length?(e="function"==typeof t?t:s(!!t),u):e},u.curve=function(t){return arguments.length?(i=t,null!=r&&(o=i(r)),u):i},u.context=function(t){return arguments.length?(null==t?r=o=null:o=i(r=t),u):r},u},P=function(){var t=E,n=null,e=s(0),r=D,i=s(!0),o=null,u=O,a=null;function l(s){var l,f,h,d,p,_=s.length,y=!1,g=new Array(_),v=new Array(_);for(null==o&&(a=u(p=c())),l=0;l<=_;++l){if(!(l<_&&i(d=s[l],l,s))===y)if(y=!y)f=l,a.areaStart(),a.lineStart();else{for(a.lineEnd(),a.lineStart(),h=l-1;h>=f;--h)a.point(g[h],v[h]);a.lineEnd(),a.areaEnd()}y&&(g[l]=+t(d,l,s),v[l]=+e(d,l,s),a.point(n?+n(d,l,s):g[l],r?+r(d,l,s):v[l]))}if(p)return a=null,p+""||null}function f(){return F().defined(i).curve(u).context(o)}return l.x=function(e){return arguments.length?(t="function"==typeof e?e:s(+e),n=null,l):t},l.x0=function(n){return arguments.length?(t="function"==typeof n?n:s(+n),l):t},l.x1=function(t){return arguments.length?(n=null==t?null:"function"==typeof t?t:s(+t),l):n},l.y=function(t){return arguments.length?(e="function"==typeof t?t:s(+t),r=null,l):e},l.y0=function(t){return arguments.length?(e="function"==typeof t?t:s(+t),l):e},l.y1=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:s(+t),l):r},l.lineX0=l.lineY0=function(){return f().x(t).y(e)},l.lineY1=function(){return f().x(t).y(r)},l.lineX1=function(){return f().x(n).y(e)},l.defined=function(t){return arguments.length?(i="function"==typeof t?t:s(!!t),l):i},l.curve=function(t){return arguments.length?(u=t,null!=o&&(a=u(o)),l):u},l.context=function(t){return arguments.length?(null==t?o=a=null:a=u(o=t),l):o},l},L=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},I=function(t){return t},j=function(){var t=I,n=L,e=null,r=s(0),i=s(x),o=s(0);function u(u){var a,c,s,l,f,h=u.length,d=0,p=new Array(h),_=new Array(h),y=+r.apply(this,arguments),g=Math.min(x,Math.max(-x,i.apply(this,arguments)-y)),v=Math.min(Math.abs(g)/h,o.apply(this,arguments)),m=v*(g<0?-1:1);for(a=0;a<h;++a)(f=_[p[a]=a]=+t(u[a],a,u))>0&&(d+=f);for(null!=n?p.sort(function(t,e){return n(_[t],_[e])}):null!=e&&p.sort(function(t,n){return e(u[t],u[n])}),a=0,s=d?(g-h*m)/d:0;a<h;++a,y=l)c=p[a],l=y+((f=_[c])>0?f*s:0)+m,_[c]={data:u[c],index:a,value:f,startAngle:y,endAngle:l,padAngle:v};return _}return u.value=function(n){return arguments.length?(t="function"==typeof n?n:s(+n),u):t},u.sortValues=function(t){return arguments.length?(n=t,e=null,u):n},u.sort=function(t){return arguments.length?(e=t,n=null,u):e},u.startAngle=function(t){return arguments.length?(r="function"==typeof t?t:s(+t),u):r},u.endAngle=function(t){return arguments.length?(i="function"==typeof t?t:s(+t),u):i},u.padAngle=function(t){return arguments.length?(o="function"==typeof t?t:s(+t),u):o},u},R=B(O);function U(t){this._curve=t}function B(t){function n(n){return new U(t(n))}return n._curve=t,n}function H(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(B(t)):n()._curve},t}U.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}};var Y=function(){return H(F().curve(R))},q=function(){var t=P().curve(R),n=t.curve,e=t.lineX0,r=t.lineX1,i=t.lineY0,o=t.lineY1;return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return H(e())},delete t.lineX0,t.lineEndAngle=function(){return H(r())},delete t.lineX1,t.lineInnerRadius=function(){return H(i())},delete t.lineY0,t.lineOuterRadius=function(){return H(o())},delete t.lineY1,t.curve=function(t){return arguments.length?n(B(t)):n()._curve},t},z=function(t,n){return[(n=+n)*Math.cos(t-=Math.PI/2),n*Math.sin(t)]},G=Array.prototype.slice;function X(t){return t.source}function W(t){return t.target}function $(t){var n=X,e=W,r=E,i=D,o=null;function u(){var u,a=G.call(arguments),s=n.apply(this,a),l=e.apply(this,a);if(o||(o=u=c()),t(o,+r.apply(this,(a[0]=s,a)),+i.apply(this,a),+r.apply(this,(a[0]=l,a)),+i.apply(this,a)),u)return o=null,u+""||null}return u.source=function(t){return arguments.length?(n=t,u):n},u.target=function(t){return arguments.length?(e=t,u):e},u.x=function(t){return arguments.length?(r="function"==typeof t?t:s(+t),u):r},u.y=function(t){return arguments.length?(i="function"==typeof t?t:s(+t),u):i},u.context=function(t){return arguments.length?(o=null==t?null:t,u):o},u}function V(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n=(n+r)/2,e,n,i,r,i)}function Z(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n,e=(e+i)/2,r,e,r,i)}function Q(t,n,e,r,i){var o=z(n,e),u=z(n,e=(e+i)/2),a=z(r,e),c=z(r,i);t.moveTo(o[0],o[1]),t.bezierCurveTo(u[0],u[1],a[0],a[1],c[0],c[1])}function J(){return $(V)}function K(){return $(Z)}function tt(){var t=$(Q);return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t}var nt={draw:function(t,n){var e=Math.sqrt(n/v);t.moveTo(e,0),t.arc(0,0,e,0,x)}},et={draw:function(t,n){var e=Math.sqrt(n/5)/2;t.moveTo(-3*e,-e),t.lineTo(-e,-e),t.lineTo(-e,-3*e),t.lineTo(e,-3*e),t.lineTo(e,-e),t.lineTo(3*e,-e),t.lineTo(3*e,e),t.lineTo(e,e),t.lineTo(e,3*e),t.lineTo(-e,3*e),t.lineTo(-e,e),t.lineTo(-3*e,e),t.closePath()}},rt=Math.sqrt(1/3),it=2*rt,ot={draw:function(t,n){var e=Math.sqrt(n/it),r=e*rt;t.moveTo(0,-e),t.lineTo(r,0),t.lineTo(0,e),t.lineTo(-r,0),t.closePath()}},ut=Math.sin(v/10)/Math.sin(7*v/10),at=Math.sin(x/10)*ut,ct=-Math.cos(x/10)*ut,st={draw:function(t,n){var e=Math.sqrt(.8908130915292852*n),r=at*e,i=ct*e;t.moveTo(0,-e),t.lineTo(r,i);for(var o=1;o<5;++o){var u=x*o/5,a=Math.cos(u),c=Math.sin(u);t.lineTo(c*e,-a*e),t.lineTo(a*r-c*i,c*r+a*i)}t.closePath()}},lt={draw:function(t,n){var e=Math.sqrt(n),r=-e/2;t.rect(r,r,e,e)}},ft=Math.sqrt(3),ht={draw:function(t,n){var e=-Math.sqrt(n/(3*ft));t.moveTo(0,2*e),t.lineTo(-ft*e,-e),t.lineTo(ft*e,-e),t.closePath()}},dt=Math.sqrt(3)/2,pt=1/Math.sqrt(12),_t=3*(pt/2+1),yt={draw:function(t,n){var e=Math.sqrt(n/_t),r=e/2,i=e*pt,o=r,u=e*pt+e,a=-o,c=u;t.moveTo(r,i),t.lineTo(o,u),t.lineTo(a,c),t.lineTo(-.5*r-dt*i,dt*r+-.5*i),t.lineTo(-.5*o-dt*u,dt*o+-.5*u),t.lineTo(-.5*a-dt*c,dt*a+-.5*c),t.lineTo(-.5*r+dt*i,-.5*i-dt*r),t.lineTo(-.5*o+dt*u,-.5*u-dt*o),t.lineTo(-.5*a+dt*c,-.5*c-dt*a),t.closePath()}},gt=[nt,et,ot,lt,st,ht,yt],vt=function(){var t=s(nt),n=s(64),e=null;function r(){var r;if(e||(e=r=c()),t.apply(this,arguments).draw(e,+n.apply(this,arguments)),r)return e=null,r+""||null}return r.type=function(n){return arguments.length?(t="function"==typeof n?n:s(n),r):t},r.size=function(t){return arguments.length?(n="function"==typeof t?t:s(+t),r):n},r.context=function(t){return arguments.length?(e=null==t?null:t,r):e},r},mt=function(){};function xt(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6)}function wt(t){this._context=t}wt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:xt(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:xt(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};var bt=function(t){return new wt(t)};function Mt(t){this._context=t}Mt.prototype={areaStart:mt,areaEnd:mt,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n;break;case 1:this._point=2,this._x3=t,this._y3=n;break;case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6);break;default:xt(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};var Tt=function(t){return new Mt(t)};function At(t){this._context=t}At.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var e=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(e,r):this._context.moveTo(e,r);break;case 3:this._point=4;default:xt(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};var St=function(t){return new At(t)};function Ct(t,n){this._basis=new wt(t),this._beta=n}Ct.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,e=t.length-1;if(e>0)for(var r,i=t[0],o=n[0],u=t[e]-i,a=n[e]-o,c=-1;++c<=e;)r=c/e,this._basis.point(this._beta*t[c]+(1-this._beta)*(i+r*u),this._beta*n[c]+(1-this._beta)*(o+r*a));this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}};var kt=function t(n){function e(t){return 1===n?new wt(t):new Ct(t,n)}return e.beta=function(n){return t(+n)},e}(.85);function Nt(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2)}function Ot(t,n){this._context=t,this._k=(1-n)/6}Ot.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:Nt(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:Nt(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Et=function t(n){function e(t){return new Ot(t,n)}return e.tension=function(n){return t(+n)},e}(0);function Dt(t,n){this._context=t,this._k=(1-n)/6}Dt.prototype={areaStart:mt,areaEnd:mt,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:Nt(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Ft=function t(n){function e(t){return new Dt(t,n)}return e.tension=function(n){return t(+n)},e}(0);function Pt(t,n){this._context=t,this._k=(1-n)/6}Pt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Nt(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Lt=function t(n){function e(t){return new Pt(t,n)}return e.tension=function(n){return t(+n)},e}(0);function It(t,n,e){var r=t._x1,i=t._y1,o=t._x2,u=t._y2;if(t._l01_a>g){var a=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,c=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*a-t._x0*t._l12_2a+t._x2*t._l01_2a)/c,i=(i*a-t._y0*t._l12_2a+t._y2*t._l01_2a)/c}if(t._l23_a>g){var s=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,l=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*s+t._x1*t._l23_2a-n*t._l12_2a)/l,u=(u*s+t._y1*t._l23_2a-e*t._l12_2a)/l}t._context.bezierCurveTo(r,i,o,u,t._x2,t._y2)}function jt(t,n){this._context=t,this._alpha=n}jt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:It(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Rt=function t(n){function e(t){return n?new jt(t,n):new Ot(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);function Ut(t,n){this._context=t,this._alpha=n}Ut.prototype={areaStart:mt,areaEnd:mt,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:It(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Bt=function t(n){function e(t){return n?new Ut(t,n):new Dt(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);function Ht(t,n){this._context=t,this._alpha=n}Ht.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:It(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Yt=function t(n){function e(t){return n?new Ht(t,n):new Pt(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);function qt(t){this._context=t}qt.prototype={areaStart:mt,areaEnd:mt,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}};var zt=function(t){return new qt(t)};function Gt(t){return t<0?-1:1}function Xt(t,n,e){var r=t._x1-t._x0,i=n-t._x1,o=(t._y1-t._y0)/(r||i<0&&-0),u=(e-t._y1)/(i||r<0&&-0),a=(o*i+u*r)/(r+i);return(Gt(o)+Gt(u))*Math.min(Math.abs(o),Math.abs(u),.5*Math.abs(a))||0}function Wt(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n}function $t(t,n,e){var r=t._x0,i=t._y0,o=t._x1,u=t._y1,a=(o-r)/3;t._context.bezierCurveTo(r+a,i+a*n,o-a,u-a*e,o,u)}function Vt(t){this._context=t}function Zt(t){this._context=new Qt(t)}function Qt(t){this._context=t}function Jt(t){return new Vt(t)}function Kt(t){return new Zt(t)}function tn(t){this._context=t}function nn(t){var n,e,r=t.length-1,i=new Array(r),o=new Array(r),u=new Array(r);for(i[0]=0,o[0]=2,u[0]=t[0]+2*t[1],n=1;n<r-1;++n)i[n]=1,o[n]=4,u[n]=4*t[n]+2*t[n+1];for(i[r-1]=2,o[r-1]=7,u[r-1]=8*t[r-1]+t[r],n=1;n<r;++n)e=i[n]/o[n-1],o[n]-=e,u[n]-=e*u[n-1];for(i[r-1]=u[r-1]/o[r-1],n=r-2;n>=0;--n)i[n]=(u[n]-i[n+1])/o[n];for(o[r-1]=(t[r]+i[r-1])/2,n=0;n<r-1;++n)o[n]=2*t[n+1]-i[n+1];return[i,o]}Vt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:$t(this,this._t0,Wt(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN;if(n=+n,(t=+t)!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,$t(this,Wt(this,e=Xt(this,t,n)),e);break;default:$t(this,this._t0,e=Xt(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(Zt.prototype=Object.create(Vt.prototype)).point=function(t,n){Vt.prototype.point.call(this,n,t)},Qt.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,i,o){this._context.bezierCurveTo(n,t,r,e,o,i)}},tn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,e=t.length;if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1]);else for(var r=nn(t),i=nn(n),o=0,u=1;u<e;++o,++u)this._context.bezierCurveTo(r[0][o],i[0][o],r[1][o],i[1][o],t[u],n[u]);(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}};var en=function(t){return new tn(t)};function rn(t,n){this._context=t,this._t=n}rn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var e=this._x*(1-this._t)+t*this._t;this._context.lineTo(e,this._y),this._context.lineTo(e,n)}}this._x=t,this._y=n}};var on=function(t){return new rn(t,.5)};function un(t){return new rn(t,0)}function an(t){return new rn(t,1)}var cn=function(t,n){if((i=t.length)>1)for(var e,r,i,o=1,u=t[n[0]],a=u.length;o<i;++o)for(r=u,u=t[n[o]],e=0;e<a;++e)u[e][1]+=u[e][0]=isNaN(r[e][1])?r[e][0]:r[e][1]},sn=function(t){for(var n=t.length,e=new Array(n);--n>=0;)e[n]=n;return e};function ln(t,n){return t[n]}var fn=function(){var t=s([]),n=sn,e=cn,r=ln;function i(i){var o,u,a=t.apply(this,arguments),c=i.length,s=a.length,l=new Array(s);for(o=0;o<s;++o){for(var f,h=a[o],d=l[o]=new Array(c),p=0;p<c;++p)d[p]=f=[0,+r(i[p],h,p,i)],f.data=i[p];d.key=h}for(o=0,u=n(l);o<s;++o)l[u[o]].index=o;return e(l,u),l}return i.keys=function(n){return arguments.length?(t="function"==typeof n?n:s(G.call(n)),i):t},i.value=function(t){return arguments.length?(r="function"==typeof t?t:s(+t),i):r},i.order=function(t){return arguments.length?(n=null==t?sn:"function"==typeof t?t:s(G.call(t)),i):n},i.offset=function(t){return arguments.length?(e=null==t?cn:t,i):e},i},hn=function(t,n){if((r=t.length)>0){for(var e,r,i,o=0,u=t[0].length;o<u;++o){for(i=e=0;e<r;++e)i+=t[e][o][1]||0;if(i)for(e=0;e<r;++e)t[e][o][1]/=i}cn(t,n)}},dn=function(t,n){if((a=t.length)>1)for(var e,r,i,o,u,a,c=0,s=t[n[0]].length;c<s;++c)for(o=u=0,e=0;e<a;++e)(i=(r=t[n[e]][c])[1]-r[0])>=0?(r[0]=o,r[1]=o+=i):i<0?(r[1]=u,r[0]=u+=i):r[0]=o},pn=function(t,n){if((e=t.length)>0){for(var e,r=0,i=t[n[0]],o=i.length;r<o;++r){for(var u=0,a=0;u<e;++u)a+=t[u][r][1]||0;i[r][1]+=i[r][0]=-a/2}cn(t,n)}},_n=function(t,n){if((i=t.length)>0&&(r=(e=t[n[0]]).length)>0){for(var e,r,i,o=0,u=1;u<r;++u){for(var a=0,c=0,s=0;a<i;++a){for(var l=t[n[a]],f=l[u][1]||0,h=(f-(l[u-1][1]||0))/2,d=0;d<a;++d){var p=t[n[d]];h+=(p[u][1]||0)-(p[u-1][1]||0)}c+=f,s+=h*f}e[u-1][1]+=e[u-1][0]=o,c&&(o-=s/c)}e[u-1][1]+=e[u-1][0]=o,cn(t,n)}},yn=function(t){var n=t.map(gn);return sn(t).sort(function(t,e){return n[t]-n[e]})};function gn(t){for(var n,e=0,r=-1,i=t.length;++r<i;)(n=+t[r][1])&&(e+=n);return e}var vn=function(t){return yn(t).reverse()},mn=function(t){var n,e,r=t.length,i=t.map(gn),o=sn(t).sort(function(t,n){return i[n]-i[t]}),u=0,a=0,c=[],s=[];for(n=0;n<r;++n)e=o[n],u<a?(u+=i[e],c.push(e)):(a+=i[e],s.push(e));return s.reverse().concat(c)},xn=function(t){return sn(t).reverse()};e.d(n,"arc",function(){return k}),e.d(n,"area",function(){return P}),e.d(n,"line",function(){return F}),e.d(n,"pie",function(){return j}),e.d(n,"areaRadial",function(){return q}),e.d(n,"radialArea",function(){return q}),e.d(n,"lineRadial",function(){return Y}),e.d(n,"radialLine",function(){return Y}),e.d(n,"pointRadial",function(){return z}),e.d(n,"linkHorizontal",function(){return J}),e.d(n,"linkVertical",function(){return K}),e.d(n,"linkRadial",function(){return tt}),e.d(n,"symbol",function(){return vt}),e.d(n,"symbols",function(){return gt}),e.d(n,"symbolCircle",function(){return nt}),e.d(n,"symbolCross",function(){return et}),e.d(n,"symbolDiamond",function(){return ot}),e.d(n,"symbolSquare",function(){return lt}),e.d(n,"symbolStar",function(){return st}),e.d(n,"symbolTriangle",function(){return ht}),e.d(n,"symbolWye",function(){return yt}),e.d(n,"curveBasisClosed",function(){return Tt}),e.d(n,"curveBasisOpen",function(){return St}),e.d(n,"curveBasis",function(){return bt}),e.d(n,"curveBundle",function(){return kt}),e.d(n,"curveCardinalClosed",function(){return Ft}),e.d(n,"curveCardinalOpen",function(){return Lt}),e.d(n,"curveCardinal",function(){return Et}),e.d(n,"curveCatmullRomClosed",function(){return Bt}),e.d(n,"curveCatmullRomOpen",function(){return Yt}),e.d(n,"curveCatmullRom",function(){return Rt}),e.d(n,"curveLinearClosed",function(){return zt}),e.d(n,"curveLinear",function(){return O}),e.d(n,"curveMonotoneX",function(){return Jt}),e.d(n,"curveMonotoneY",function(){return Kt}),e.d(n,"curveNatural",function(){return en}),e.d(n,"curveStep",function(){return on}),e.d(n,"curveStepAfter",function(){return an}),e.d(n,"curveStepBefore",function(){return un}),e.d(n,"stack",function(){return fn}),e.d(n,"stackOffsetExpand",function(){return hn}),e.d(n,"stackOffsetDiverging",function(){return dn}),e.d(n,"stackOffsetNone",function(){return cn}),e.d(n,"stackOffsetSilhouette",function(){return pn}),e.d(n,"stackOffsetWiggle",function(){return _n}),e.d(n,"stackOrderAscending",function(){return yn}),e.d(n,"stackOrderDescending",function(){return vn}),e.d(n,"stackOrderInsideOut",function(){return mn}),e.d(n,"stackOrderNone",function(){return sn}),e.d(n,"stackOrderReverse",function(){return xn})},function(t,n,e){"use strict";e.r(n);var r,i,o=e(0),u=e(7),a=0,c=0,s=0,l=1e3,f=0,h=0,d=0,p="object"==typeof performance&&performance.now?performance:Date,_="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function y(){return h||(_(g),h=p.now()+d)}function g(){h=0}function v(){this._call=this._time=this._next=null}function m(t,n,e){var r=new v;return r.restart(t,n,e),r}function x(){h=(f=p.now())+d,a=c=0;try{!function(){y(),++a;for(var t,n=r;n;)(t=h-n._time)>=0&&n._call.call(null,t),n=n._next;--a}()}finally{a=0,function(){var t,n,e=r,o=1/0;for(;e;)e._call?(o>e._time&&(o=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:r=n);i=t,b(o)}(),h=0}}function w(){var t=p.now(),n=t-f;n>l&&(d-=n,f=t)}function b(t){if(!a){c&&(c=clearTimeout(c));var n=t-h;n>24?(t<1/0&&(c=setTimeout(x,n)),s&&(s=clearInterval(s))):(s||(f=h,s=setInterval(w,l)),a=1,_(x))}}v.prototype=m.prototype={constructor:v,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?y():+e)+(null==n?0:+n),this._next||i===this||(i?i._next=this:r=this,i=this),this._call=t,this._time=e,b()},stop:function(){this._call&&(this._call=null,this._time=1/0,b())}};var M=function(t,n,e){var r=new v;return n=null==n?0:+n,r.restart(function(e){r.stop(),t(e+n)},n,e),r},T=Object(u.dispatch)("start","end","interrupt"),A=[],S=0,C=1,k=2,N=3,O=4,E=5,D=6,F=function(t,n,e,r,i,o){var u=t.__transition;if(u){if(e in u)return}else t.__transition={};!function(t,n,e){var r,i=t.__transition;function o(c){var s,l,f,h;if(e.state!==C)return a();for(s in i)if((h=i[s]).name===e.name){if(h.state===N)return M(o);h.state===O?(h.state=D,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[s]):+s<n&&(h.state=D,h.timer.stop(),delete i[s])}if(M(function(){e.state===N&&(e.state=O,e.timer.restart(u,e.delay,e.time),u(c))}),e.state=k,e.on.call("start",t,t.__data__,e.index,e.group),e.state===k){for(e.state=N,r=new Array(f=e.tween.length),s=0,l=-1;s<f;++s)(h=e.tween[s].value.call(t,t.__data__,e.index,e.group))&&(r[++l]=h);r.length=l+1}}function u(n){for(var i=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(a),e.state=E,1),o=-1,u=r.length;++o<u;)r[o].call(null,i);e.state===E&&(e.on.call("end",t,t.__data__,e.index,e.group),a())}function a(){for(var r in e.state=D,e.timer.stop(),delete i[n],i)return;delete t.__transition}i[n]=e,e.timer=m(function(t){e.state=C,e.timer.restart(o,e.delay,e.time),e.delay<=t&&o(t-e.delay)},0,e.time)}(t,e,{name:n,index:r,group:i,on:T,tween:A,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:S})};function P(t,n){var e=t.__transition;if(!e||!(e=e[n])||e.state>S)throw new Error("too late");return e}function L(t,n){var e=t.__transition;if(!e||!(e=e[n])||e.state>k)throw new Error("too late");return e}function I(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("too late");return e}var j=function(t,n){var e,r,i,o=t.__transition,u=!0;if(o){for(i in n=null==n?null:n+"",o)(e=o[i]).name===n?(r=e.state>k&&e.state<E,e.state=D,e.timer.stop(),r&&e.on.call("interrupt",t,t.__data__,e.index,e.group),delete o[i]):u=!1;u&&delete t.__transition}},R=e(4);function U(t,n,e){var r=t._id;return t.each(function(){var t=L(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)}),function(t){return I(t,r).value[n]}}var B=e(3),H=function(t,n){var e;return("number"==typeof n?R.interpolateNumber:n instanceof B.color?R.interpolateRgb:(e=Object(B.color)(n))?(n=e,R.interpolateRgb):R.interpolateString)(t,n)};var Y=o.selection.prototype.constructor;var q=0;function z(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function G(t){return Object(o.selection)().transition(t)}function X(){return++q}var W=o.selection.prototype;z.prototype=G.prototype={constructor:z,select:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=Object(o.selector)(t));for(var r=this._groups,i=r.length,u=new Array(i),a=0;a<i;++a)for(var c,s,l=r[a],f=l.length,h=u[a]=new Array(f),d=0;d<f;++d)(c=l[d])&&(s=t.call(c,c.__data__,d,l))&&("__data__"in c&&(s.__data__=c.__data__),h[d]=s,F(h[d],n,e,d,h,I(c,e)));return new z(u,this._parents,n,e)},selectAll:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=Object(o.selectorAll)(t));for(var r=this._groups,i=r.length,u=[],a=[],c=0;c<i;++c)for(var s,l=r[c],f=l.length,h=0;h<f;++h)if(s=l[h]){for(var d,p=t.call(s,s.__data__,h,l),_=I(s,e),y=0,g=p.length;y<g;++y)(d=p[y])&&F(d,n,e,y,p,_);u.push(p),a.push(s)}return new z(u,a,n,e)},filter:function(t){"function"!=typeof t&&(t=Object(o.matcher)(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var u,a=n[i],c=a.length,s=r[i]=[],l=0;l<c;++l)(u=a[l])&&t.call(u,u.__data__,l,a)&&s.push(u);return new z(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),a=0;a<o;++a)for(var c,s=n[a],l=e[a],f=s.length,h=u[a]=new Array(f),d=0;d<f;++d)(c=s[d]||l[d])&&(h[d]=c);for(;a<r;++a)u[a]=n[a];return new z(u,this._parents,this._name,this._id)},selection:function(){return new Y(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=X(),r=this._groups,i=r.length,o=0;o<i;++o)for(var u,a=r[o],c=a.length,s=0;s<c;++s)if(u=a[s]){var l=I(u,n);F(u,t,e,s,a,{time:l.time+l.delay+l.duration,delay:0,duration:l.duration,ease:l.ease})}return new z(r,this._parents,t,e)},call:W.call,nodes:W.nodes,node:W.node,size:W.size,empty:W.empty,each:W.each,on:function(t,n){var e=this._id;return arguments.length<2?I(this.node(),e).on.on(t):this.each(function(t,n,e){var r,i,o=function(t){return(t+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t})}(n)?P:L;return function(){var u=o(this,t),a=u.on;a!==r&&(i=(r=a).copy()).on(n,e),u.on=i}}(e,t,n))},attr:function(t,n){var e=Object(o.namespace)(t),r="transform"===e?R.interpolateTransformSvg:H;return this.attrTween(t,"function"==typeof n?(e.local?function(t,n,e){var r,i,o;return function(){var u,a=e(this);if(null!=a)return(u=this.getAttributeNS(t.space,t.local))===a?null:u===r&&a===i?o:o=n(r=u,i=a);this.removeAttributeNS(t.space,t.local)}}:function(t,n,e){var r,i,o;return function(){var u,a=e(this);if(null!=a)return(u=this.getAttribute(t))===a?null:u===r&&a===i?o:o=n(r=u,i=a);this.removeAttribute(t)}})(e,r,U(this,"attr."+t,n)):null==n?(e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}})(e):(e.local?function(t,n,e){var r,i;return function(){var o=this.getAttributeNS(t.space,t.local);return o===e?null:o===r?i:i=n(r=o,e)}}:function(t,n,e){var r,i;return function(){var o=this.getAttribute(t);return o===e?null:o===r?i:i=n(r=o,e)}})(e,r,n+""))},attrTween:function(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;var r=Object(o.namespace)(t);return this.tween(e,(r.local?function(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttributeNS(t.space,t.local,r(n))}}return e._value=n,e}:function(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttribute(t,r(n))}}return e._value=n,e})(r,n))},style:function(t,n,e){var r="transform"==(t+="")?R.interpolateTransformCss:H;return null==n?this.styleTween(t,function(t,n){var e,r,i;return function(){var u=Object(o.style)(this,t),a=(this.style.removeProperty(t),Object(o.style)(this,t));return u===a?null:u===e&&a===r?i:i=n(e=u,r=a)}}(t,r)).on("end.style."+t,function(t){return function(){this.style.removeProperty(t)}}(t)):this.styleTween(t,"function"==typeof n?function(t,n,e){var r,i,u;return function(){var a=Object(o.style)(this,t),c=e(this);return null==c&&(this.style.removeProperty(t),c=Object(o.style)(this,t)),a===c?null:a===r&&c===i?u:u=n(r=a,i=c)}}(t,r,U(this,"style."+t,n)):function(t,n,e){var r,i;return function(){var u=Object(o.style)(this,t);return u===e?null:u===r?i:i=n(r=u,e)}}(t,r,n+""),e)},styleTween:function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,function(t,n,e){function r(){var r=this,i=n.apply(r,arguments);return i&&function(n){r.style.setProperty(t,i(n),e)}}return r._value=n,r}(t,n,null==e?"":e))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var n=t(this);this.textContent=null==n?"":n}}(U(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},remove:function(){return this.on("end.remove",(t=this._id,function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}));var t},tween:function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=I(this.node(),e).tween,o=0,u=i.length;o<u;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?function(t,n){var e,r;return function(){var i=L(this,t),o=i.tween;if(o!==e)for(var u=0,a=(r=e=o).length;u<a;++u)if(r[u].name===n){(r=r.slice()).splice(u,1);break}i.tween=r}}:function(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var o=L(this,t),u=o.tween;if(u!==r){i=(r=u).slice();for(var a={name:n,value:e},c=0,s=i.length;c<s;++c)if(i[c].name===n){i[c]=a;break}c===s&&i.push(a)}o.tween=i}})(e,t,n))},delay:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?function(t,n){return function(){P(this,t).delay=+n.apply(this,arguments)}}:function(t,n){return n=+n,function(){P(this,t).delay=n}})(n,t)):I(this.node(),n).delay},duration:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?function(t,n){return function(){L(this,t).duration=+n.apply(this,arguments)}}:function(t,n){return n=+n,function(){L(this,t).duration=n}})(n,t)):I(this.node(),n).duration},ease:function(t){var n=this._id;return arguments.length?this.each(function(t,n){if("function"!=typeof n)throw new Error;return function(){L(this,t).ease=n}}(n,t)):I(this.node(),n).ease}};var $={time:null,delay:0,duration:250,ease:e(8).easeCubicInOut};function V(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))return $.time=y(),$;return e}o.selection.prototype.interrupt=function(t){return this.each(function(){j(this,t)})},o.selection.prototype.transition=function(t){var n,e;t instanceof z?(n=t._id,t=t._name):(n=X(),(e=$).time=y(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var u,a=r[o],c=a.length,s=0;s<c;++s)(u=a[s])&&F(u,t,n,s,a,e||V(u,n));return new z(r,this._parents,t,n)};var Z=[null],Q=function(t,n){var e,r,i=t.__transition;if(i)for(r in n=null==n?null:n+"",i)if((e=i[r]).state>C&&e.name===n)return new z([[t]],Z,n,+r);return null};e.d(n,"transition",function(){return G}),e.d(n,"active",function(){return Q}),e.d(n,"interrupt",function(){return j})},function(t,n,e){"use strict";var r;void 0===(r=function(){var t=e(11),n=e(1);return{axisTimeCombinations:{MINUTE_HOUR:"minute-hour",HOUR_DAY:"hour-daymonth",DAY_MONTH:"day-month",MONTH_YEAR:"month-year",CUSTOM:"custom"},curveMap:{linear:t.curveLinear,basis:t.curveBasis,cardinal:t.curveCardinal,catmullRom:t.curveCatmullRom,monotoneX:t.curveMonotoneX,monotoneY:t.curveMonotoneY,natural:t.curveNatural,step:t.curveStep,stepAfter:t.curveStepAfter,stepBefore:t.curveStepBefore},emptyDonutData:[{quantity:1,percentage:100}],timeBenchmarks:{ONE_AND_A_HALF_YEARS:47304e6,ONE_YEAR:31536000365,ONE_DAY:86400001},lineGradientId:"lineGradientId",timeIntervals:{timeMillisecond:n.timeMillisecond,utcMillisecond:n.utcMillisecond,timeSecond:n.timeSecond,utcSecond:n.utcSecond,timeMinute:n.timeMinute,utcMinute:n.utcMinute,timeHour:n.timeHour,utcHour:n.utcHour,timeDay:n.timeDay,utcDay:n.utcDay,timeWeek:n.timeWeek,utcWeek:n.utcWeek,timeSunday:n.timeSunday,utcSunday:n.utcSunday,timeMonday:n.timeMonday,utcMonday:n.utcMonday,timeTuesday:n.timeTuesday,utcTuesday:n.utcTuesday,timeWednesday:n.timeWednesday,utcWednesday:n.utcWednesday,timeThursday:n.timeThursday,utcThursday:n.utcThursday,timeFriday:n.timeFriday,utcFriday:n.utcFriday,timeSaturday:n.timeSaturday,utcSaturday:n.utcSaturday,timeMonth:n.timeMonth,utcMonth:n.utcMonth,timeYear:n.timeYear,utcYear:n.utcYear}}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict";e.r(n);var r=e(2),i=e(9),o=Array.prototype,u=o.map,a=o.slice,c={name:"implicit"};function s(t){var n=Object(i.map)(),e=[],r=c;function o(i){var o=i+"",u=n.get(o);if(!u){if(r!==c)return r;n.set(o,u=e.push(i))}return t[(u-1)%t.length]}return t=null==t?[]:a.call(t),o.domain=function(t){if(!arguments.length)return e.slice();e=[],n=Object(i.map)();for(var r,u,a=-1,c=t.length;++a<c;)n.has(u=(r=t[a])+"")||n.set(u,e.push(r));return o},o.range=function(n){return arguments.length?(t=a.call(n),o):t.slice()},o.unknown=function(t){return arguments.length?(r=t,o):r},o.copy=function(){return s().domain(e).range(t).unknown(r)},o}function l(){var t,n,e=s().unknown(void 0),i=e.domain,o=e.range,u=[0,1],a=!1,c=0,f=0,h=.5;function d(){var e=i().length,s=u[1]<u[0],l=u[s-0],d=u[1-s];t=(d-l)/Math.max(1,e-c+2*f),a&&(t=Math.floor(t)),l+=(d-l-t*(e-c))*h,n=t*(1-c),a&&(l=Math.round(l),n=Math.round(n));var p=Object(r.range)(e).map(function(n){return l+t*n});return o(s?p.reverse():p)}return delete e.unknown,e.domain=function(t){return arguments.length?(i(t),d()):i()},e.range=function(t){return arguments.length?(u=[+t[0],+t[1]],d()):u.slice()},e.rangeRound=function(t){return u=[+t[0],+t[1]],a=!0,d()},e.bandwidth=function(){return n},e.step=function(){return t},e.round=function(t){return arguments.length?(a=!!t,d()):a},e.padding=function(t){return arguments.length?(c=f=Math.max(0,Math.min(1,t)),d()):c},e.paddingInner=function(t){return arguments.length?(c=Math.max(0,Math.min(1,t)),d()):c},e.paddingOuter=function(t){return arguments.length?(f=Math.max(0,Math.min(1,t)),d()):f},e.align=function(t){return arguments.length?(h=Math.max(0,Math.min(1,t)),d()):h},e.copy=function(){return l().domain(i()).range(u).round(a).paddingInner(c).paddingOuter(f).align(h)},d()}function f(){return function t(n){var e=n.copy;return n.padding=n.paddingOuter,delete n.paddingInner,delete n.paddingOuter,n.copy=function(){return t(e())},n}(l().paddingInner(1))}var h=e(4),d=function(t){return function(){return t}},p=function(t){return+t},_=[0,1];function y(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:d(n)}function g(t,n,e,r){var i=t[0],o=t[1],u=n[0],a=n[1];return o<i?(i=e(o,i),u=r(a,u)):(i=e(i,o),u=r(u,a)),function(t){return u(i(t))}}function v(t,n,e,i){var o=Math.min(t.length,n.length)-1,u=new Array(o),a=new Array(o),c=-1;for(t[o]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++c<o;)u[c]=e(t[c],t[c+1]),a[c]=i(n[c],n[c+1]);return function(n){var e=Object(r.bisect)(t,n,1,o)-1;return a[e](u[e](n))}}function m(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())}function x(t,n){var e,r,i,o=_,c=_,s=h.interpolate,l=!1;function f(){return e=Math.min(o.length,c.length)>2?v:g,r=i=null,d}function d(n){return(r||(r=e(o,c,l?function(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return t<=n?0:t>=e?1:r(t)}}}(t):t,s)))(+n)}return d.invert=function(t){return(i||(i=e(c,o,y,l?function(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return t<=0?n:t>=1?e:r(t)}}}(n):n)))(+t)},d.domain=function(t){return arguments.length?(o=u.call(t,p),f()):o.slice()},d.range=function(t){return arguments.length?(c=a.call(t),f()):c.slice()},d.rangeRound=function(t){return c=a.call(t),s=h.interpolateRound,f()},d.clamp=function(t){return arguments.length?(l=!!t,f()):l},d.interpolate=function(t){return arguments.length?(s=t,f()):s},f()}var w=e(5),b=function(t,n,e){var i,o=t[0],u=t[t.length-1],a=Object(r.tickStep)(o,u,null==n?10:n);switch((e=Object(w.formatSpecifier)(null==e?",f":e)).type){case"s":var c=Math.max(Math.abs(o),Math.abs(u));return null!=e.precision||isNaN(i=Object(w.precisionPrefix)(a,c))||(e.precision=i),Object(w.formatPrefix)(e,c);case"":case"e":case"g":case"p":case"r":null!=e.precision||isNaN(i=Object(w.precisionRound)(a,Math.max(Math.abs(o),Math.abs(u))))||(e.precision=i-("e"===e.type));break;case"f":case"%":null!=e.precision||isNaN(i=Object(w.precisionFixed)(a))||(e.precision=i-2*("%"===e.type))}return Object(w.format)(e)};function M(t){var n=t.domain;return t.ticks=function(t){var e=n();return Object(r.ticks)(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){return b(n(),t,e)},t.nice=function(e){null==e&&(e=10);var i,o=n(),u=0,a=o.length-1,c=o[u],s=o[a];return s<c&&(i=c,c=s,s=i,i=u,u=a,a=i),(i=Object(r.tickIncrement)(c,s,e))>0?(c=Math.floor(c/i)*i,s=Math.ceil(s/i)*i,i=Object(r.tickIncrement)(c,s,e)):i<0&&(c=Math.ceil(c*i)/i,s=Math.floor(s*i)/i,i=Object(r.tickIncrement)(c,s,e)),i>0?(o[u]=Math.floor(c/i)*i,o[a]=Math.ceil(s/i)*i,n(o)):i<0&&(o[u]=Math.ceil(c*i)/i,o[a]=Math.floor(s*i)/i,n(o)),t},t}function T(){var t=x(y,h.interpolateNumber);return t.copy=function(){return m(t,T())},M(t)}function A(){var t=[0,1];function n(t){return+t}return n.invert=n,n.domain=n.range=function(e){return arguments.length?(t=u.call(e,p),n):t.slice()},n.copy=function(){return A().domain(t)},M(n)}var S=function(t,n){var e,r=0,i=(t=t.slice()).length-1,o=t[r],u=t[i];return u<o&&(e=r,r=i,i=e,e=o,o=u,u=e),t[r]=n.floor(o),t[i]=n.ceil(u),t};function C(t,n){return(n=Math.log(n/t))?function(e){return Math.log(e/t)/n}:d(n)}function k(t,n){return t<0?function(e){return-Math.pow(-n,e)*Math.pow(-t,1-e)}:function(e){return Math.pow(n,e)*Math.pow(t,1-e)}}function N(t){return isFinite(t)?+("1e"+t):t<0?0:t}function O(t){return 10===t?N:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}function E(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}function D(t){return function(n){return-t(-n)}}function F(){var t=x(C,k).domain([1,10]),n=t.domain,e=10,i=E(10),o=O(10);function u(){return i=E(e),o=O(e),n()[0]<0&&(i=D(i),o=D(o)),t}return t.base=function(t){return arguments.length?(e=+t,u()):e},t.domain=function(t){return arguments.length?(n(t),u()):n()},t.ticks=function(t){var u,a=n(),c=a[0],s=a[a.length-1];(u=s<c)&&(d=c,c=s,s=d);var l,f,h,d=i(c),p=i(s),_=null==t?10:+t,y=[];if(!(e%1)&&p-d<_){if(d=Math.round(d)-1,p=Math.round(p)+1,c>0){for(;d<p;++d)for(f=1,l=o(d);f<e;++f)if(!((h=l*f)<c)){if(h>s)break;y.push(h)}}else for(;d<p;++d)for(f=e-1,l=o(d);f>=1;--f)if(!((h=l*f)<c)){if(h>s)break;y.push(h)}}else y=Object(r.ticks)(d,p,Math.min(p-d,_)).map(o);return u?y.reverse():y},t.tickFormat=function(n,r){if(null==r&&(r=10===e?".0e":","),"function"!=typeof r&&(r=Object(w.format)(r)),n===1/0)return r;null==n&&(n=10);var u=Math.max(1,e*n/t.ticks().length);return function(t){var n=t/o(Math.round(i(t)));return n*e<e-.5&&(n*=e),n<=u?r(t):""}},t.nice=function(){return n(S(n(),{floor:function(t){return o(Math.floor(i(t)))},ceil:function(t){return o(Math.ceil(i(t)))}}))},t.copy=function(){return m(t,F().base(e))},t}function P(t,n){return t<0?-Math.pow(-t,n):Math.pow(t,n)}function L(){var t=1,n=x(function(n,e){return(e=P(e,t)-(n=P(n,t)))?function(r){return(P(r,t)-n)/e}:d(e)},function(n,e){return e=P(e,t)-(n=P(n,t)),function(r){return P(n+e*r,1/t)}}),e=n.domain;return n.exponent=function(n){return arguments.length?(t=+n,e(e())):t},n.copy=function(){return m(n,L().exponent(t))},M(n)}function I(){return L().exponent(.5)}function j(){var t=[],n=[],e=[];function i(){var i=0,u=Math.max(1,n.length);for(e=new Array(u-1);++i<u;)e[i-1]=Object(r.quantile)(t,i/u);return o}function o(t){if(!isNaN(t=+t))return n[Object(r.bisect)(e,t)]}return o.invertExtent=function(r){var i=n.indexOf(r);return i<0?[NaN,NaN]:[i>0?e[i-1]:t[0],i<e.length?e[i]:t[t.length-1]]},o.domain=function(n){if(!arguments.length)return t.slice();t=[];for(var e,o=0,u=n.length;o<u;++o)null==(e=n[o])||isNaN(e=+e)||t.push(e);return t.sort(r.ascending),i()},o.range=function(t){return arguments.length?(n=a.call(t),i()):n.slice()},o.quantiles=function(){return e.slice()},o.copy=function(){return j().domain(t).range(n)},o}function R(){var t=0,n=1,e=1,i=[.5],o=[0,1];function u(t){if(t<=t)return o[Object(r.bisect)(i,t,0,e)]}function c(){var r=-1;for(i=new Array(e);++r<e;)i[r]=((r+1)*n-(r-e)*t)/(e+1);return u}return u.domain=function(e){return arguments.length?(t=+e[0],n=+e[1],c()):[t,n]},u.range=function(t){return arguments.length?(e=(o=a.call(t)).length-1,c()):o.slice()},u.invertExtent=function(r){var u=o.indexOf(r);return u<0?[NaN,NaN]:u<1?[t,i[0]]:u>=e?[i[e-1],n]:[i[u-1],i[u]]},u.copy=function(){return R().domain([t,n]).range(o)},M(u)}function U(){var t=[.5],n=[0,1],e=1;function i(i){if(i<=i)return n[Object(r.bisect)(t,i,0,e)]}return i.domain=function(r){return arguments.length?(t=a.call(r),e=Math.min(t.length,n.length-1),i):t.slice()},i.range=function(r){return arguments.length?(n=a.call(r),e=Math.min(t.length,n.length-1),i):n.slice()},i.invertExtent=function(e){var r=n.indexOf(e);return[t[r-1],t[r]]},i.copy=function(){return U().domain(t).range(n)},i}var B=e(1),H=e(6),Y=1e3,q=60*Y,z=60*q,G=24*z,X=7*G,W=30*G,$=365*G;function V(t){return new Date(t)}function Z(t){return t instanceof Date?+t:+new Date(+t)}function Q(t,n,e,i,o,a,c,s,l){var f=x(y,h.interpolateNumber),d=f.invert,p=f.domain,_=l(".%L"),g=l(":%S"),v=l("%I:%M"),w=l("%I %p"),b=l("%a %d"),M=l("%b %d"),T=l("%B"),A=l("%Y"),C=[[c,1,Y],[c,5,5*Y],[c,15,15*Y],[c,30,30*Y],[a,1,q],[a,5,5*q],[a,15,15*q],[a,30,30*q],[o,1,z],[o,3,3*z],[o,6,6*z],[o,12,12*z],[i,1,G],[i,2,2*G],[e,1,X],[n,1,W],[n,3,3*W],[t,1,$]];function k(r){return(c(r)<r?_:a(r)<r?g:o(r)<r?v:i(r)<r?w:n(r)<r?e(r)<r?b:M:t(r)<r?T:A)(r)}function N(n,e,i,o){if(null==n&&(n=10),"number"==typeof n){var u=Math.abs(i-e)/n,a=Object(r.bisector)(function(t){return t[2]}).right(C,u);a===C.length?(o=Object(r.tickStep)(e/$,i/$,n),n=t):a?(o=(a=C[u/C[a-1][2]<C[a][2]/u?a-1:a])[1],n=a[0]):(o=Math.max(Object(r.tickStep)(e,i,n),1),n=s)}return null==o?n:n.every(o)}return f.invert=function(t){return new Date(d(t))},f.domain=function(t){return arguments.length?p(u.call(t,Z)):p().map(V)},f.ticks=function(t,n){var e,r=p(),i=r[0],o=r[r.length-1],u=o<i;return u&&(e=i,i=o,o=e),e=(e=N(t,i,o,n))?e.range(i,o+1):[],u?e.reverse():e},f.tickFormat=function(t,n){return null==n?k:l(n)},f.nice=function(t,n){var e=p();return(t=N(t,e[0],e[e.length-1],n))?p(S(e,t)):f},f.copy=function(){return m(f,Q(t,n,e,i,o,a,c,s,l))},f}var J=function(){return Q(B.timeYear,B.timeMonth,B.timeWeek,B.timeDay,B.timeHour,B.timeMinute,B.timeSecond,B.timeMillisecond,H.timeFormat).domain([new Date(2e3,0,1),new Date(2e3,0,2)])},K=function(){return Q(B.utcYear,B.utcMonth,B.utcWeek,B.utcDay,B.utcHour,B.utcMinute,B.utcSecond,B.utcMillisecond,H.utcFormat).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)])};function tt(t){var n=0,e=1,r=!1;function i(i){var o=(i-n)/(e-n);return t(r?Math.max(0,Math.min(1,o)):o)}return i.domain=function(t){return arguments.length?(n=+t[0],e=+t[1],i):[n,e]},i.clamp=function(t){return arguments.length?(r=!!t,i):r},i.interpolator=function(n){return arguments.length?(t=n,i):t},i.copy=function(){return tt(t).domain([n,e]).clamp(r)},M(i)}e.d(n,"scaleBand",function(){return l}),e.d(n,"scalePoint",function(){return f}),e.d(n,"scaleIdentity",function(){return A}),e.d(n,"scaleLinear",function(){return T}),e.d(n,"scaleLog",function(){return F}),e.d(n,"scaleOrdinal",function(){return s}),e.d(n,"scaleImplicit",function(){return c}),e.d(n,"scalePow",function(){return L}),e.d(n,"scaleSqrt",function(){return I}),e.d(n,"scaleQuantile",function(){return j}),e.d(n,"scaleQuantize",function(){return R}),e.d(n,"scaleThreshold",function(){return U}),e.d(n,"scaleTime",function(){return J}),e.d(n,"scaleUtc",function(){return K}),e.d(n,"scaleSequential",function(){return tt})},function(t,n,e){"use strict";var r;void 0===(r=function(t){var n=e(10).colorSchemas,r=(e(13),e(16)),i="undefined"!=typeof window,o=navigator.msSaveOrOpenBlob,u="Sorry, this feature is not available for IE. If you require this to work, check this issue https://github.com/eventbrite/britecharts/pull/652",a=i&&window.btoa;a||(a=e(17).encode);var c=function(t){return a(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g,function(t,n){return String.fromCharCode("0x"+n)}))},s={styleClass:"britechartStyle",defaultFilename:"britechart.png",chartBackground:"white",imageSourceBase:"data:image/svg+xml;base64,",titleFontSize:"15px",titleFontFamily:"'Benton Sans', sans-serif",titleTopOffset:15,get styleBackgroundString(){return"<style>svg{background:"+this.chartBackground+";}</style>"}};function l(t,e){if(t){t.attr("version",1.1).attr("xmlns","http://www.w3.org/2000/svg");var i=r.initializeSerializer()(t.node());return i=function(t){if(navigator.userAgent.search("FireFox")>-1)return t.replace(/url.*&quot;\)/,'url(&quot;linearGradient[id*="-gradient-"]&quot;);');return t}(i),i=function(t){return t.replace(">",">"+s.styleBackgroundString)}(i=function(t,e,r){if(!e||!r)return t;var i=n.grey;return t=t.replace(/<g/,'<text x="'+this.margin().left+'" y="'+s.titleTopOffset+'" font-family="'+s.titleFontFamily+'" font-size="'+s.titleFontSize+'" fill="'+i[6]+'"> '+e+" </text><g ")}.call(this,i,e,parseInt(t.attr("width"),10)))}}function f(t){var n=new Image;return n.src=""+s.imageSourceBase+c(t),n}function h(t,n){return n.getContext("2d").drawImage(t,0,0),n}return{exportChart:function(t,n,e){if(o)return console.error(u),!1;var r,i,a,c=f(l.call(this,t,e));c.onload=function(t,n,e){e.preventDefault(),function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.defaultFilename,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"image/png",r=t.toDataURL(e),i=document.createElement("a");i.href=r,i.download=n,document.body.appendChild(i),i.click(),document.body.removeChild(i)}(h(this,t),n)}.bind(c,(r=this.width(),i=this.height(),(a=document.createElement("canvas")).height=i,a.width=r,a),n)},convertSvgToHtml:l,createImage:f,drawImageOnCanvas:h}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict";var r,i,o;t.exports=(r={BASE:!0,HEAD:!0,HTML:!0,META:!0,NOFRAME:!0,NOSCRIPT:!0,PARAM:!0,SCRIPT:!0,STYLE:!0,TITLE:!0},i=["A","ABBR","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BASE","BDI","BDO","BLOCKQUOTE","BODY","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATALIST","DD","DEL","DETAILS","DFN","DIV","DL","DT","EM","EMBED","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEAD","HEADER","HGROUP","HR","HTML","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","LINK","MAP","MARK","MATH","MENU","META","METER","NAV","NOBR","NOSCRIPT","OBJECT","OL","OPTION","OPTGROUP","OUTPUT","P","PARAM","PRE","PROGRESS","Q","RP","RT","RUBY","S","SAMP","SCRIPT","SECTION","SELECT","SMALL","SOURCE","SPAN","STRONG","STYLE","SUB","SUMMARY","SUP","SVG","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TITLE","TR","TRACK","U","UL","VAR","VIDEO","WBR"],o=function(t){var n={},e=document.body.appendChild(document.createElement(t)),r=window.getComputedStyle(e);return[].forEach.call(r,function(t){n[t]=r[t]}),document.body.removeChild(e),n},{initializeSerializer:function(){var t={};return[].forEach.call(i,function(n){r[n]||(t[n]=o(n))}),function(n){var e,i=[],u=void 0,a=void 0,c=void 0;if(n&&n.nodeType===Node.ELEMENT_NODE)return i=[],u=n.querySelectorAll("*"),[].forEach.call(u,function(n,e){var u;r[n.tagName]||(a=window.getComputedStyle(n),u=(u=n.tagName).toUpperCase(),t[u]||(t[u]=o(u)),c=t[u],i[e]=n.style.cssText,[].forEach.call(a,function(t){a[t]!==c[t]&&(n.style[t]=a[t])}))}),e=n.outerHTML,u=[].map.call(u,function(t,n){return t.style.cssText=i[n],t}),e}}})},function(t,n,e){(function(t,r){var i;/*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */!function(o){var u=n,a=(t&&t.exports,"object"==typeof r&&r);a.global!==a&&a.window;var c=function(t){this.message=t};(c.prototype=new Error).name="InvalidCharacterError";var s=function(t){throw new c(t)},l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f=/[\t\n\f\r ]/g,h={encode:function(t){t=String(t),/[^\0-\xFF]/.test(t)&&s("The string to be encoded contains characters outside of the Latin1 range.");for(var n,e,r,i,o=t.length%3,u="",a=-1,c=t.length-o;++a<c;)n=t.charCodeAt(a)<<16,e=t.charCodeAt(++a)<<8,r=t.charCodeAt(++a),u+=l.charAt((i=n+e+r)>>18&63)+l.charAt(i>>12&63)+l.charAt(i>>6&63)+l.charAt(63&i);return 2==o?(n=t.charCodeAt(a)<<8,e=t.charCodeAt(++a),u+=l.charAt((i=n+e)>>10)+l.charAt(i>>4&63)+l.charAt(i<<2&63)+"="):1==o&&(i=t.charCodeAt(a),u+=l.charAt(i>>2)+l.charAt(i<<4&63)+"=="),u},decode:function(t){var n=(t=String(t).replace(f,"")).length;n%4==0&&(n=(t=t.replace(/==?$/,"")).length),(n%4==1||/[^+a-zA-Z0-9\/]/.test(t))&&s("Invalid character: the string to be decoded is not correctly encoded.");for(var e,r,i=0,o="",u=-1;++u<n;)r=l.indexOf(t.charAt(u)),e=i%4?64*e+r:r,i++%4&&(o+=String.fromCharCode(255&e>>(-2*i&6)));return o},version:"0.1.0"};void 0===(i=function(){return h}.call(n,e,n,t))||(t.exports=i)}()}).call(this,e(18)(t),e(19))},function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r;void 0===(r=function(){return{bar:'\n            <svg class="load-state bar-load-state" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 711 325">\n              \n            <defs>\n                <linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%" >\n                    <stop offset="0" stop-color="#ffffff" stop-opacity="0.8" />\n                    <stop offset="33.33%" stop-color="#ffffff" stop-opacity="0.8" />\n                    <stop offset="50%" stop-color="#ffffff" stop-opacity="0" />\n                    <stop offset="66.66%" stop-color="#ffffff" stop-opacity="0.8" />\n                    <stop offset="100%" stop-color="#ffffff" stop-opacity="0.8" />\n                </linearGradient>\n            </defs>\n        \n                <g fill="none" fill-rule="evenodd">\n                    <g transform="translate(0 29)">\n                        <g stroke="#EFF2F5" stroke-dasharray="4 4">\n                            <path d="M.400592911 200.302477L710.674315 200.302477M.400592884 131.172748L710.674315 131.172748M.324410282 64.2071321L710.621499 64.2071321M.291004517.563888874L709.82431.563888889"/>\n                        </g>\n                        <g fill="#D2D6DF" transform="translate(63.08 11)">\n                            <polygon points="-.08 176 23.92 176 23.92 255 -.08 255"/>\n                            <polygon points="50.829 147 74.829 147 74.829 255 50.829 255"/>\n                            <polygon points="254.465 0 278.465 0 278.465 255 254.465 255"/>\n                            <polygon points="458.102 169 482.102 169 482.102 255 458.102 255"/>\n                            <polygon points="152.647 82 176.647 82 176.647 255 152.647 255"/>\n                            <polygon points="356.283 66 380.283 66 380.283 255 356.283 255"/>\n                            <polygon points="559.92 229 583.92 229 583.92 255 559.92 255"/>\n                            <polygon points="101.738 115 125.738 115 125.738 255 101.738 255"/>\n                            <polygon points="305.374 42 329.374 42 329.374 255 305.374 255"/>\n                            <polygon points="509.011 201 533.011 201 533.011 255 509.011 255"/>\n                            <polygon points="203.556 19 227.556 19 227.556 255 203.556 255"/>\n                            <polygon points="407.192 115 431.192 115 431.192 255 407.192 255"/>\n                        </g>\n                    </g>\n                    <polygon fill="#D2D6DF" fill-rule="nonzero" points="0 295 711 295 711 294 0 294"/>\n                </g>\n                <rect class="chart-filter" fill="url(#lgrad)" x="-100%" y="0" width="300%" height="100%"></rect>\n            </svg>\n        ',donut:'\n            <svg class="load-state donut-load-state" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 376 331">\n                \n            <defs>\n                <linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%" >\n                    <stop offset="0" stop-color="#ffffff" stop-opacity="0.8" />\n                    <stop offset="33.33%" stop-color="#ffffff" stop-opacity="0.8" />\n                    <stop offset="50%" stop-color="#ffffff" stop-opacity="0" />\n                    <stop offset="66.66%" stop-color="#ffffff" stop-opacity="0.8" />\n                    <stop offset="100%" stop-color="#ffffff" stop-opacity="0.8" />\n                </linearGradient>\n            </defs>\n        \n                <g fill="none" fill-rule="evenodd">\n                    <g transform="translate(116 107)">\n                        <circle cx="72" cy="72" r="72" stroke="#EFF2F5" stroke-linecap="round" stroke-width="9.6"/>\n                        <path stroke="#D2D6DF" stroke-width="19.2" d="M126.153559,119.524055 C137.264629,106.845712 144,90.2321371 144,72.0444604 C144,32.2554036 111.764502,0 72,0"/>\n                        <circle cx="72" cy="72" r="67.2" fill="#FFF"/>\n                    </g>\n                </g>\n                <rect class="chart-filter" fill="url(#lgrad)" x="-100%" y="0" width="300%" height="100%"></rect>\n            </svg>\n        ',line:'\n            <svg\n                class="load-state line-load-state"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 711 325"\n            >\n                \n            <defs>\n                <linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%" >\n                    <stop offset="0" stop-color="#ffffff" stop-opacity="0.8" />\n                    <stop offset="33.33%" stop-color="#ffffff" stop-opacity="0.8" />\n                    <stop offset="50%" stop-color="#ffffff" stop-opacity="0" />\n                    <stop offset="66.66%" stop-color="#ffffff" stop-opacity="0.8" />\n                    <stop offset="100%" stop-color="#ffffff" stop-opacity="0.8" />\n                </linearGradient>\n            </defs>\n        \n                <path\n                    id="chart-bg"\n                    class="chart-bg"\n                    style="stroke:#C3C6CF;"\n                    d="M3.4,216.5h707.3 M3.4,160.5h707.3 M3.3,103.5h707.3 M3.3,48.5h707.6 M0.4,276.6H710H0.4z"\n                />\n                <polyline\n                    id="chart-line"\n                    class="chart-line"\n                    style="stroke:#C3C6CF;stroke-width:4;fill:none;"\n                    points="8.8,175.8 62.4,237.7 116.1,184.7 169.7,175.8 223.3,57 277,176.8 330.6,176.8 384.3,122.5 437.9,176.8 491.6,176.8 545.2,218.4 598.8,122.5 652.5,184.7 706.1,135.1 "\n                />\n                <rect class="chart-filter" fill="url(#lgrad)" x="-100%" y="0" width="300%" height="100%"></rect>\n            </svg>\n        ',stackedArea:'\n            <svg\n                class="load-state stacked-area-load-state"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 711 325"\n            >\n                \n            <defs>\n                <linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%" >\n                    <stop offset="0" stop-color="#ffffff" stop-opacity="0.8" />\n                    <stop offset="33.33%" stop-color="#ffffff" stop-opacity="0.8" />\n                    <stop offset="50%" stop-color="#ffffff" stop-opacity="0" />\n                    <stop offset="66.66%" stop-color="#ffffff" stop-opacity="0.8" />\n                    <stop offset="100%" stop-color="#ffffff" stop-opacity="0.8" />\n                </linearGradient>\n            </defs>\n        \n                <path\n                    id="chart-bg"\n                    class="chart-bg"\n                    style="stroke:#C3C6CF;"\n                    d="M3.4,216.5h707.3 M3.4,160.5h707.3 M3.3,103.5h707.3 M3.3,48.5h707.6 M0.4,276.6H710H0.4z"\n                />\n                <g transform="translate(20 50)">\n                    <path\n                        id="chart-area"\n                        strokeLinecap="square"\n                        d="M0.34233103,0.593688165 L709.977885,0.593688189"\n                        transform="translate(.01 227.976)"\n                    />\n                    <path fill="#C3C6CF" d="M0.528124801,224.014648 L0.528124801,177.734375 L53.3834796,177.734375 C71.5390789,177.734375 86.8277373,168.972754 101.240241,151.662202 C112.578335,138.044258 121.139826,123.110227 136.974507,91.596773 C137.343842,90.8617404 139.300293,86.9654028 139.856735,85.8583549 C155.041692,55.6476711 163.354313,41.0906306 174.319873,27.7179171 C188.951312,9.87459412 204.885845,0.5 223.830634,0.5 C242.123071,0.5 257.291724,8.27027858 270.907992,23.1359289 C281.228683,34.4036118 289.135925,47.1272372 302.542017,72.085092 C303.275893,73.4513345 306.289669,79.0766612 307.063369,80.5168656 C321.41025,107.222876 330.088083,120.97663 341.470704,132.92446 C355.88994,148.05969 371.908861,155.792969 391.654853,155.792969 C412.142049,155.792969 428.763593,152.325614 442.880698,145.765582 C454.197328,140.506893 463.373931,133.679865 473.786035,123.626931 C476.528659,120.978915 486.44777,110.911455 488.791866,108.6483 C502.907223,95.0203436 514.194325,88.9355469 530.135322,88.9355469 C546.532652,88.9355469 559.505909,97.338499 575.973261,115.41103 C579.723508,119.526837 593.103621,135.086814 592.915496,134.871799 C605.09738,148.794859 614.368835,157.635549 625.072091,164.58539 C638.386599,173.230769 652.701021,177.734375 669.279853,177.734375 L673.779853,177.734375 L673.779853,224.014648 L0.528124801,224.014648 Z" />\n                </g>\n                <rect class="chart-filter" fill="url(#lgrad)" x="-100%" y="0" width="300%" height="100%"></rect>\n            </svg>\n        '}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict";e.r(n);var r=Array.prototype.slice,i=function(t){return t},o=1,u=2,a=3,c=4,s=1e-6;function l(t){return"translate("+(t+.5)+",0)"}function f(t){return"translate(0,"+(t+.5)+")"}function h(){return!this.__axis}function d(t,n){var e=[],d=null,p=null,_=6,y=6,g=3,v=t===o||t===c?-1:1,m=t===c||t===u?"x":"y",x=t===o||t===a?l:f;function w(r){var l=null==d?n.ticks?n.ticks.apply(n,e):n.domain():d,f=null==p?n.tickFormat?n.tickFormat.apply(n,e):i:p,w=Math.max(_,0)+g,b=n.range(),M=+b[0]+.5,T=+b[b.length-1]+.5,A=(n.bandwidth?function(t){var n=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(n=Math.round(n)),function(e){return+t(e)+n}}:function(t){return function(n){return+t(n)}})(n.copy()),S=r.selection?r.selection():r,C=S.selectAll(".domain").data([null]),k=S.selectAll(".tick").data(l,n).order(),N=k.exit(),O=k.enter().append("g").attr("class","tick"),E=k.select("line"),D=k.select("text");C=C.merge(C.enter().insert("path",".tick").attr("class","domain").attr("stroke","#000")),k=k.merge(O),E=E.merge(O.append("line").attr("stroke","#000").attr(m+"2",v*_)),D=D.merge(O.append("text").attr("fill","#000").attr(m,v*w).attr("dy",t===o?"0em":t===a?"0.71em":"0.32em")),r!==S&&(C=C.transition(r),k=k.transition(r),E=E.transition(r),D=D.transition(r),N=N.transition(r).attr("opacity",s).attr("transform",function(t){return isFinite(t=A(t))?x(t):this.getAttribute("transform")}),O.attr("opacity",s).attr("transform",function(t){var n=this.parentNode.__axis;return x(n&&isFinite(n=n(t))?n:A(t))})),N.remove(),C.attr("d",t===c||t==u?"M"+v*y+","+M+"H0.5V"+T+"H"+v*y:"M"+M+","+v*y+"V0.5H"+T+"V"+v*y),k.attr("opacity",1).attr("transform",function(t){return x(A(t))}),E.attr(m+"2",v*_),D.attr(m,v*w).text(f),S.filter(h).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===u?"start":t===c?"end":"middle"),S.each(function(){this.__axis=A})}return w.scale=function(t){return arguments.length?(n=t,w):n},w.ticks=function(){return e=r.call(arguments),w},w.tickArguments=function(t){return arguments.length?(e=null==t?[]:r.call(t),w):e.slice()},w.tickValues=function(t){return arguments.length?(d=null==t?null:r.call(t),w):d&&d.slice()},w.tickFormat=function(t){return arguments.length?(p=t,w):p},w.tickSize=function(t){return arguments.length?(_=y=+t,w):_},w.tickSizeInner=function(t){return arguments.length?(_=+t,w):_},w.tickSizeOuter=function(t){return arguments.length?(y=+t,w):y},w.tickPadding=function(t){return arguments.length?(g=+t,w):g},w}function p(t){return d(o,t)}function _(t){return d(u,t)}function y(t){return d(a,t)}function g(t){return d(c,t)}e.d(n,"axisTop",function(){return p}),e.d(n,"axisRight",function(){return _}),e.d(n,"axisBottom",function(){return y}),e.d(n,"axisLeft",function(){return g})},function(t,n,e){"use strict";var r;void 0===(r=function(t){var n=e(5),r=0,i={small:{limit:10,format:n.format("")},medium:{limit:1e3,format:n.format("")},large:{limit:null,format:n.format(".2s")}},o={small:{limit:10,format:n.format(".3f")},medium:{limit:100,format:n.format(".1f")},large:{limit:null,format:n.format(".2s")}},u=function(t,n){var e="large";return t<n.small.limit?e="small":t<n.medium.limit&&(e="medium"),e};return{calculatePercent:function(t,e,r){var i=e?t/e*100:0;return n.format(r)(i)},isInteger:function(t){return t%1==0},formatDecimalValue:function(t){var n=u(t,o);return(0,o[n].format)(t)},formatIntegerValue:function(t){var n=u(t,i);return(0,i[n].format)(t)},uniqueId:function(t){var n=++r;return t.toString()+"-"+n}}}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict";var r;void 0===(r=function(t){var n=e(0),r=1.2,i=10,o=.9,u=.6,a="value",c="label";return{getTextWidth:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Arial",r=document.createElement("canvas").getContext("2d");return r.font=n+"px "+e,r.measureText(t).width},wrapText:function(t,e,s,l){var f=n.select(l),h=f.text().split(/\s+/).reverse(),d=void 0,p=[],_=0,y=r*o,g=f.attr("y"),v=parseFloat(f.attr("dy")),m=e*u,x=f.text(null).append("tspan").attr("x",t).attr("y",g-5).attr("dy",v+"em").classed(a,!0).style("font-size",e+"px");for(x.text(h.pop()),x=f.append("tspan").classed(c,!0).attr("x",t).attr("y",g+i).attr("dy",++_*y+v+"em").style("font-size",m+"px");d=h.pop();)p.push(d),x.text(p.join(" ")),x.node()&&x.node().getComputedTextLength()>s-50&&(p.pop(),x.text(p.join(" ")),p=[d],x=f.append("tspan").classed(c,!0).attr("x",t).attr("y",g+i).attr("dy",++_*y+v+"em").text(d).style("font-size",m+"px"))},wrapTextWithEllipses:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2;t.each(function(){var o,u,a,c,s,l,f;for(o=(t=n.select(this)).text().split(/\s+/).reverse(),a=[],c=0,s=t.attr("y"),l=parseFloat(t.attr("dy")),f=t.text(null).append("tspan").attr("x",r).attr("y",s).attr("dy",l+"em");u=o.pop();)if(a.push(u),f.text(a.join(" ")),f.node()&&f.node().getComputedTextLength()>e){if(a.pop(),f.text(a.join(" ")),!(c<i-1)){a.push("..."),f.text(a.join(" "));break}a=[u],f=t.append("tspan").attr("x",r).attr("y",s).attr("dy",1.2*++c+l+"em").text(u),t.classed("adjust-upwards",!0)}})}}}.call(n,e,n,t))||(t.exports=r)},,,,,function(t,n,e){"use strict";var r,i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t};void 0===(r=function(t){var n=e(2),r=e(8),o=e(21),u=e(3),a=e(7),c=e(5),s=e(14),l=e(0),f=(e(12),e(23)),h=e(15).exportChart,d=e(10),p=e(20).bar,_=e(22).uniqueId;return function(){var t={top:20,right:20,bottom:30,left:40},e=960,y=500,g=p,v=void 0,m=void 0,x=void 0,w=void 0,b=void 0,M=void 0,T=d.singleColors.aloeGreen,A=void 0,S=void 0,C=null,k=void 0,N=_("bar-gradient"),O=5,E=5,D=1,F=",f",P=!1,L=7,I=",f",j=12,R=.1,U=void 0,B=void 0,H={top:0,left:0,bottom:0,right:0},Y=10,q=1,z=!1,G=void 0,X=!0,W=!1,$=r.easeQuadInOut,V=800,Z=function(t,n){return 70*n},Q=function(t){return t.attr("fill",function(t){var n=t.name;return u.color(C?C[1]:S(n)).darker()})},J=void 0,K="value",tt="name",nt=void 0,et=null,rt=null,it=30,ot=null,ut=null,at=-30,ct=!0,st=a.dispatch("customMouseOver","customMouseOut","customMouseMove","customClick"),lt=function(t){return t.name},ft=function(t){return t.value},ht=function(t){var n=t.value;return c.format(I)(n)},dt=function(t){var n=t.value;return b(n)+L},pt=function(t){var n=t.name;return M(n)+M.bandwidth()/2+j*(3/8)},_t=function(t){var n=t.name;return b(n)},yt=function(t){var n=t.value;return M(n)-L};function gt(r){r.each(function(r){x=e-t.left-t.right-1.2*Y,w=y-t.top-t.bottom;var i,u=function(t){var n=t.data,e=t.dataZeroed;J&&(n.sort(J),e.sort(J));return{data:n,dataZeroed:e}}(function(t){var n=t.reduce(function(t,n){return n.value=+n[K],n.name=String(n[tt]),[].concat(function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}(t),[n])},[]),e=n.map(function(t){return{value:0,name:String(t[tt])}});return{data:n,dataZeroed:e}}(r));v=u.data,m=u.dataZeroed,function(){var t=Math.min(D*n.max(v,ft));z?(b=s.scaleLinear().domain([0,t]).rangeRound([0,x]),M=s.scaleBand().domain(v.map(lt)).rangeRound([w,0]).padding(R)):(b=s.scaleBand().domain(v.map(lt)).rangeRound([0,x]).padding(R),M=s.scaleLinear().domain([0,t]).rangeRound([w,0]));A=ct?v.map(function(t){return t}).reverse().map(function(t,n){var e=t.name;return{name:e,color:T[n%T.length]}}):v.map(function(t){return t}).map(function(t,n){var e=t.name;return{name:e,color:T[n%T.length]}});S=function(t){return A.filter(function(n){var e=n.name;return e===t})[0].color}}(),z?(U=o.axisBottom(b).ticks(E,F).tickSizeInner([-w]),B=o.axisLeft(M)):(U=o.axisBottom(b),B=o.axisLeft(M).ticks(O,F)),function(n){G||(G=l.select(n).append("svg").classed("britechart bar-chart",!0),function(){var n=G.append("g").classed("container-group",!0).attr("transform","translate("+(t.left+Y)+", "+t.top+")");n.append("g").classed("grid-lines-group",!0),n.append("g").classed("chart-group",!0),n.append("g").classed("x-axis-group axis",!0).append("g").classed("x-axis-label",!0),n.append("g").attr("transform","translate("+-1*Y+", 0)").classed("y-axis-group axis",!0).append("g").classed("y-axis-label",!0),n.append("g").classed("metadata-group",!0)}());G.attr("width",e).attr("height",y)}(this),!k&&C&&(k=G.select(".metadata-group").append("linearGradient").attr("id",N).attr("x1","0%").attr("y1","0%").attr("x2","100%").attr("y2","100%").attr("gradientUnits","userSpaceOnUse").selectAll("stop").data([{offset:"0%",color:C[0]},{offset:"50%",color:C[1]}]).enter().append("stop").attr("offset",function(t){var n=t.offset;return n}).attr("stop-color",function(t){var n=t.color;return n})),G.select(".grid-lines-group").selectAll("line").remove(),z?(G.select(".grid-lines-group").selectAll("line.vertical-grid-line").data(b.ticks(E).slice(1)).enter().append("line").attr("class","vertical-grid-line").attr("y1",H.left).attr("y2",w).attr("x1",function(t){return b(t)}).attr("x2",function(t){return b(t)}),G.select(".grid-lines-group").selectAll("line.extended-y-line").data([0]).enter().append("line").attr("class","extended-y-line").attr("y1",H.bottom).attr("y2",w).attr("x1",0).attr("x2",0)):(G.select(".grid-lines-group").selectAll("line.horizontal-grid-line").data(M.ticks(O).slice(1)).enter().append("line").attr("class","horizontal-grid-line").attr("x1",H.left).attr("x2",x).attr("y1",function(t){return M(t)}).attr("y2",function(t){return M(t)}),G.select(".grid-lines-group").selectAll("line.extended-x-line").data([0]).enter().append("line").attr("class","extended-x-line").attr("x1",H.left).attr("x2",x).attr("y1",w).attr("y2",w)),i=void 0,W?(i=G.select(".chart-group").selectAll(".bar").data(m),z?xt(i):wt(i),i=G.select(".chart-group").selectAll(".bar").data(v),z?function(t){t.enter().append("rect").classed("bar",!0).attr("x",0).attr("y",w).attr("height",M.bandwidth()).attr("width",function(t){var n=t.value;return b(n)}).on("mouseover",function(t,n,e){bt(this,t,e,x,w)}).on("mousemove",function(t){Mt(this,t,x,w)}).on("mouseout",function(t,n,e){Tt(this,t,e,x,w)}).on("click",function(t){At(this,t,x,w)}),t.attr("x",0).attr("y",function(t){var n=t.name;return M(n)}).attr("height",M.bandwidth()).attr("fill",function(t){var n=t.name;return vt(n)}).transition().duration(V).delay(Z).ease($).attr("width",function(t){var n=t.value;return b(n)})}(i):function(t){t.enter().append("rect").classed("bar",!0).attr("x",x).attr("y",function(t){var n=t.value;return M(n)}).attr("width",b.bandwidth()).attr("height",function(t){var n=t.value;return w-M(n)}).on("mouseover",function(t,n,e){bt(this,t,e,x,w)}).on("mousemove",function(t){Mt(this,t,x,w)}).on("mouseout",function(t,n,e){Tt(this,t,e,x,w)}).on("click",function(t){At(this,t,x,w)}).merge(t).attr("x",function(t){var n=t.name;return b(n)}).attr("width",b.bandwidth()).attr("fill",function(t){var n=t.name;return vt(n)}).transition().duration(V).delay(Z).ease($).attr("y",function(t){var n=t.value;return M(n)}).attr("height",function(t){var n=t.value;return w-M(n)})}(i),i.exit().transition().style("opacity",0).remove()):(i=G.select(".chart-group").selectAll(".bar").data(v),z?xt(i):wt(i),i.exit().remove()),G.select(".x-axis-group.axis").attr("transform","translate(0, "+w+")").call(U),G.select(".y-axis-group.axis").call(B),G.selectAll(".y-axis-group .tick text").call(mt,t.left-Y),ut&&(ot&&ot.remove(),ot=G.select(".y-axis-label").append("text").classed("y-axis-label-text",!0).attr("x",-w/2).attr("y",at).attr("text-anchor","middle").attr("transform","rotate(270 0 0)").text(ut)),rt&&(et&&et.remove(),et=G.select(".x-axis-label").append("text").attr("y",it).attr("text-anchor","middle").classed("x-axis-label-text",!0).attr("x",x/2).text(rt)),P&&function(){var t=z?dt:_t,n=z?pt:yt,e=ht;nt&&G.selectAll(".percentage-label-group").remove();(nt=G.select(".metadata-group").append("g").classed("percentage-label-group",!0).selectAll("text").data(v.reverse()).enter().append("text")).classed("percentage-label",!0).attr("x",t).attr("y",n).text(e).attr("font-size",j+"px")}()})}function vt(t){return C?"url(#"+N+")":S(t)}function mt(t,n){f.wrapTextWithEllipses(t,n,0,q)}function xt(t){t.enter().append("rect").classed("bar",!0).attr("y",w).attr("x",0).attr("height",M.bandwidth()).attr("width",function(t){var n=t.value;return b(n)}).on("mouseover",function(t,n,e){bt(this,t,e,x,w)}).on("mousemove",function(t){Mt(this,t,x,w)}).on("mouseout",function(t,n,e){Tt(this,t,e,x,w)}).on("click",function(t){At(this,t,x,w)}).merge(t).attr("x",0).attr("y",function(t){var n=t.name;return M(n)}).attr("height",M.bandwidth()).attr("width",function(t){var n=t.value;return b(n)}).attr("fill",function(t){return vt(t.name)})}function wt(t){t.enter().append("rect").classed("bar",!0).attr("x",x).attr("y",function(t){var n=t.value;return M(n)}).attr("width",b.bandwidth()).attr("height",function(t){var n=t.value;return w-M(n)}).on("mouseover",function(t,n,e){bt(this,t,e,x,w)}).on("mousemove",function(t){Mt(this,t,x,w)}).on("mouseout",function(t,n,e){Tt(this,t,e,x,w)}).on("click",function(t){At(this,t,x,w)}).merge(t).attr("x",function(t){var n=t.name;return b(n)}).attr("y",function(t){var n=t.value;return M(n)}).attr("width",b.bandwidth()).attr("height",function(t){var n=t.value;return w-M(n)}).attr("fill",function(t){return vt(t.name)})}function bt(t,n,e,r,i){st.call("customMouseOver",t,n,l.mouse(t),[r,i]),Q=Q||function(){},X?Q(l.select(t)):e.forEach(function(n){n!==t&&Q(l.select(n))})}function Mt(t,n,e,r){st.call("customMouseMove",t,n,l.mouse(t),[e,r])}function Tt(t,n,e,r,i){st.call("customMouseOut",t,n,l.mouse(t),[r,i]),e.forEach(function(t){l.select(t).attr("fill",function(t){return vt(t.name)})})}function At(t,n,e,r){st.call("customClick",t,n,l.mouse(t),[e,r])}return gt.chartGradient=function(t){return arguments.length?(C=t,this):C},gt.betweenBarsPadding=function(t){return arguments.length?(R=t,this):R},gt.colorSchema=function(t){return arguments.length?(T=t,this):T},gt.enableLabels=function(t){return arguments.length?(P=t,this):P},gt.exportChart=function(t,n){h.call(gt,G,t,n)},gt.hasPercentage=function(t){return arguments.length?(F=t?"%":",f",this):"%"===F},gt.hasSingleBarHighlight=function(t){return arguments.length?(X=t,this):X},gt.height=function(t){return arguments.length?(y=t,this):y},gt.highlightBarFunction=function(t){return arguments.length?(Q=t,this):Q},gt.isAnimated=function(t){return arguments.length?(W=t,this):W},gt.isHorizontal=function(t){return arguments.length?(z=t,this):z},gt.labelsMargin=function(t){return arguments.length?(L=t,this):L},gt.labelsNumberFormat=function(t){return arguments.length?(I=t,this):I},gt.labelsSize=function(t){return arguments.length?(j=t,this):j},gt.loadingState=function(t){return arguments.length?(g=t,this):g},gt.margin=function(n){return arguments.length?(t=i({},t,n),this):t},gt.nameLabel=function(t){return arguments.length?(tt=t,this):tt},gt.numberFormat=function(t){return arguments.length?(F=t,this):F},gt.on=function(){var t=st.on.apply(st,arguments);return t===st?gt:t},gt.percentageAxisToMaxRatio=function(t){return arguments.length?(D=t,this):D},gt.shouldReverseColorList=function(t){return arguments.length?(ct=t,this):ct},gt.orderingFunction=function(t){return arguments.length?(J=t,this):J},gt.valueLabel=function(t){return arguments.length?(K=t,this):K},gt.width=function(t){return arguments.length?(e=t,this):e},gt.xAxisLabel=function(t){return arguments.length?(rt=t,this):rt},gt.xAxisLabelOffset=function(t){return arguments.length?(it=t,this):it},gt.xTicks=function(t){return arguments.length?(E=t,this):E},gt.yAxisLabel=function(t){return arguments.length?(ut=t,this):ut},gt.yAxisLabelOffset=function(t){return arguments.length?(at=t,this):at},gt.yAxisPaddingBetweenChart=function(t){return arguments.length?(Y=t,this):Y},gt.yTicks=function(t){return arguments.length?(O=t,this):O},gt}}.call(n,e,n,t))||(t.exports=r)}])});
//# sourceMappingURL=bar.min.js.map
// build the element to inject the chart into 
var chartElement = document.createElement('div');
chartElement.id = 'containerViz';
document.body.appendChild(chartElement);


function drawViz(vizData) {
// This is the actual drawing code 
  console.log("vizData " + JSON.stringify(vizData))
 console.log("getting height")

 //get height and width from helper library
  var height = dscc.getHeight();
  var width = dscc.getWidth();
  document.getElementById('containerViz').style.width = width;
  document.getElementById('containerViz').style.height = height;

  console.log(`height is ${height} and width is ${width}`);
  const barChart = britecharts.bar();
  const container = d3.select('.containerViz');

  // Configure chart
  barChart
      .isHorizontal(true)
      .height(width)
      .width(height);


 console.log("barChart")
  console.log("here2")
      // Use sample data to make it easier to test
      const barData = [
        { name: 'Luminous', value: 2 },
        { name: 'Glittering', value: 5 },
        { name: 'Intense', value: 4 },
        { name: 'Radiant', value: 3 }
    ];
    console.log("here3");

      container.datum(barData).call(barChart);

}
// subscribe to data and style changes.
dscc.subscribeToData(drawViz, {
  transform: dscc.objectTransform
});