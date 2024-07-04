/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.12.4
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

module.exports = function (callback) {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // Already ready or interactive, execute callback
    callback.call();
  } else if (document.attachEvent) {
    // Old browsers
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState === 'interactive') callback.call();
    });
  } else if (document.addEventListener) {
    // Modern browsers
    document.addEventListener('DOMContentLoaded', callback);
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
  win = window;
} else if (typeof global !== "undefined") {
  win = global;
} else if (typeof self !== "undefined") {
  win = self;
} else {
  win = {};
}

module.exports = win;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lite_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var lite_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lite_ready__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jarallax_esm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



 // no conflict

var oldPlugin = global__WEBPACK_IMPORTED_MODULE_1__["window"].jarallax;
global__WEBPACK_IMPORTED_MODULE_1__["window"].jarallax = _jarallax_esm__WEBPACK_IMPORTED_MODULE_2__["default"];

global__WEBPACK_IMPORTED_MODULE_1__["window"].jarallax.noConflict = function () {
  global__WEBPACK_IMPORTED_MODULE_1__["window"].jarallax = oldPlugin;
  return this;
}; // jQuery support


if ('undefined' !== typeof global__WEBPACK_IMPORTED_MODULE_1__["jQuery"]) {
  var jQueryPlugin = function jQueryPlugin() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    Array.prototype.unshift.call(args, this);
    var res = _jarallax_esm__WEBPACK_IMPORTED_MODULE_2__["default"].apply(global__WEBPACK_IMPORTED_MODULE_1__["window"], args);
    return 'object' !== _typeof(res) ? res : this;
  };

  jQueryPlugin.constructor = _jarallax_esm__WEBPACK_IMPORTED_MODULE_2__["default"].constructor; // no conflict

  var oldJqPlugin = global__WEBPACK_IMPORTED_MODULE_1__["jQuery"].fn.jarallax;
  global__WEBPACK_IMPORTED_MODULE_1__["jQuery"].fn.jarallax = jQueryPlugin;

  global__WEBPACK_IMPORTED_MODULE_1__["jQuery"].fn.jarallax.noConflict = function () {
    global__WEBPACK_IMPORTED_MODULE_1__["jQuery"].fn.jarallax = oldJqPlugin;
    return this;
  };
} // data-jarallax initialization


lite_ready__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  Object(_jarallax_esm__WEBPACK_IMPORTED_MODULE_2__["default"])(document.querySelectorAll('[data-jarallax]'));
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lite_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var lite_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lite_ready__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var navigator = global__WEBPACK_IMPORTED_MODULE_1__["window"].navigator;
var isIE = -1 < navigator.userAgent.indexOf('MSIE ') || -1 < navigator.userAgent.indexOf('Trident/') || -1 < navigator.userAgent.indexOf('Edge/');
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

var supportTransform = function () {
  var prefixes = 'transform WebkitTransform MozTransform'.split(' ');
  var div = document.createElement('div');

  for (var i = 0; i < prefixes.length; i += 1) {
    if (div && div.style[prefixes[i]] !== undefined) {
      return prefixes[i];
    }
  }

  return false;
}();

var $deviceHelper;
/**
 * The most popular mobile browsers changes height after page scroll and this generates image jumping.
 * We can fix it using this workaround with vh units.
 */

function getDeviceHeight() {
  if (!$deviceHelper && document.body) {
    $deviceHelper = document.createElement('div');
    $deviceHelper.style.cssText = 'position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;';
    document.body.appendChild($deviceHelper);
  }

  return ($deviceHelper ? $deviceHelper.clientHeight : 0) || global__WEBPACK_IMPORTED_MODULE_1__["window"].innerHeight || document.documentElement.clientHeight;
} // Window height data


var wndH;

function updateWndVars() {
  if (isMobile) {
    wndH = getDeviceHeight();
  } else {
    wndH = global__WEBPACK_IMPORTED_MODULE_1__["window"].innerHeight || document.documentElement.clientHeight;
  }
}

updateWndVars();
global__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('resize', updateWndVars);
global__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('orientationchange', updateWndVars);
global__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('load', updateWndVars);
lite_ready__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  updateWndVars({
    type: 'dom-loaded'
  });
}); // list with all jarallax instances
// need to render all in one scroll/resize event

var jarallaxList = []; // get all parents of the element.

function getParents(elem) {
  var parents = [];

  while (null !== elem.parentElement) {
    elem = elem.parentElement;

    if (1 === elem.nodeType) {
      parents.push(elem);
    }
  }

  return parents;
}

function updateParallax() {
  if (!jarallaxList.length) {
    return;
  }

  jarallaxList.forEach(function (data, k) {
    var instance = data.instance,
        oldData = data.oldData;
    var clientRect = instance.$item.getBoundingClientRect();
    var newData = {
      width: clientRect.width,
      height: clientRect.height,
      top: clientRect.top,
      bottom: clientRect.bottom,
      wndW: global__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth,
      wndH: wndH
    };
    var isResized = !oldData || oldData.wndW !== newData.wndW || oldData.wndH !== newData.wndH || oldData.width !== newData.width || oldData.height !== newData.height;
    var isScrolled = isResized || !oldData || oldData.top !== newData.top || oldData.bottom !== newData.bottom;
    jarallaxList[k].oldData = newData;

    if (isResized) {
      instance.onResize();
    }

    if (isScrolled) {
      instance.onScroll();
    }
  });
  global__WEBPACK_IMPORTED_MODULE_1__["window"].requestAnimationFrame(updateParallax);
}

var instanceID = 0; // Jarallax class

var Jarallax = /*#__PURE__*/function () {
  function Jarallax(item, userOptions) {
    _classCallCheck(this, Jarallax);

    var self = this;
    self.instanceID = instanceID;
    instanceID += 1;
    self.$item = item;
    self.defaults = {
      type: 'scroll',
      // type of parallax: scroll, scale, opacity, scale-opacity, scroll-opacity
      speed: 0.5,
      // supported value from -1 to 2
      imgSrc: null,
      imgElement: '.jarallax-img',
      imgSize: 'cover',
      imgPosition: '50% 50%',
      imgRepeat: 'no-repeat',
      // supported only for background, not for <img> tag
      keepImg: false,
      // keep <img> tag in it's default place
      elementInViewport: null,
      zIndex: -100,
      disableParallax: false,
      disableVideo: false,
      // video
      videoSrc: null,
      videoStartTime: 0,
      videoEndTime: 0,
      videoVolume: 0,
      videoLoop: true,
      videoPlayOnlyVisible: true,
      videoLazyLoading: true,
      // events
      onScroll: null,
      // function(calculations) {}
      onInit: null,
      // function() {}
      onDestroy: null,
      // function() {}
      onCoverImage: null // function() {}

    }; // prepare data-options

    var dataOptions = self.$item.dataset || {};
    var pureDataOptions = {};
    Object.keys(dataOptions).forEach(function (key) {
` $ 0 var loweCaseOPtion = keù.subrtr(0, 1m.toLggd2Case(- + key.subsdr(19»

0  !  ib (loweCaseOptiob$&& 'uodefined' !<= uyqeof self.defaulps[loweCaseOption]) {
        pure`a4aOptions[loweCaseOqthon] 9 datAOqtionb[key]/.      }
!   });
    self.optiofs = self/extend({}, self.dafatltsl puseDataOppions, userOptions);
    self.qubeOptions = selF.exôdne({}, self.opuions); / prepare 'tbue' and 'false' strings`to booleAn

    _bject.)ayó(self.optmons).ForEach(functmon (key) {*`     if ('true' ½==(Seld&options[key]) {
        Self.opuiOns[key] = true;
 $  ! ] else if ('f`hs`' === óelf.oqtions[ëey]) z
        self.options[key] = false;
      ]
    });0// fmx speee optinn [-1/0, 2.0]

    self>opthons,spEel = Math.min¨2, Math.max()1, parreFloqõ(self.opdions*sqead-)); // rrepare eyRafleParallax callback
 !$ if (#string' 9== typejf self.optioos.dicablePqrall`x) 
 0    sel&.nptionw.dis`bleparallax = new RegEyp(seLf.oqti/ns.tisa"lePasallax);
    }Š
   $if (salf.opdions.disabìePaòallax insTansekf RegAxp) {
   0  var d)sableP`2állaxRewexp = self.optionsdisableParallax;
*      seln.opthols.dirablePIrellax = function () {
$    !! return disaBlePara,laxRegexp.test(navigator.tserAgent);
    ` };
    }

    if (functi.n& !== t9peof self.optio.r.di3ableTarallax) {
 `    self.options.disaBleParal,ax = functéok () {
        retusn balse;
 $0   };
    } // prepare disableVideo caìlbaãk


    in ('string% === typeof self*Optionr.disqbleVideo) {
      self/optíons.disableVide/ = naw RegExp)self.options.disableVidÅo);
  `!}

   !if (self.optionsdisabìeVideo i.2tancegf RegExp) {
 `    var disableVideoegexp$ self.optionr.dIsableWideo;

   0  self.oPtions.fisebleVédeo = function () {
     !$ retur. disableViDeoRegexp.test(~avigator.usdrAgeêt);
$   $ };
    }
  0 if ('funbtion' !== typeof self.options.d)sableVideo) {
  €   self.opti/ns.eisable^ideo <0Functmon () {
 !      rdôõBn falwa;
    !0};
    }$// custoi element to check if parallax in viewport


    var e|ementYoVT = selg.options.eläment	~ViewpoÒt; / get girst item from array

    if!(elementInVP ' gobJect' === ^typeof(eleme~pInVP) &&0§undefIn%d' !== typekf elemantINVP.èangph) {
  (   var _elementIîRQ(="elemejtInVP;

      v`r _elemendInWP6 5 _slice`oAvray(OelementINVP8 q);
     `elemuntInVP = _unelejtInVT2[0];
   $} ./ check$if $om ghemEntJ

    if ,!(e|ementIîVP instanceof Element)) {
      elementInVP ="null;
    }

    self.optionr.elementInViewport = elementInPP;
$  $self.hm!g% = {
      src: self.options.kmgSrk || null$J    ( $containe2: null,
      useImgTag: false,
      // positiïî fixed is needed for ôhepmosv of brmwser{ because absïlute poQition!have glitahes
     0/ on MacOS wiTh smooth scroìl txEre is a huçe lags witH ibsolute posi4ion - https://githu`,comonk-obarallax/issums/7µ
      // on mo"ile d%vices better(scromled wyth aBsolute0poóition
      ðositéon: /aPad|iPhone|iPod|Android/.teqt(navigator.userAgent) ? 'absglute' :('fixed'
    };
    if (self.initI-g() && self>canIn)vPirállaxh)) {
   (  seln,init¨);
   0}
( } // add styles to elemelt
  // eslint-d)waâlå-nexp%Lane clasS-methO$s=usE-this


! _Greateslass(Jarallax,![y*!   key: cw3",`   ra,ue: functio. css)el, styluqi {
    ( )f ('stryng7$=== typeof(styl%s( { !      wettrN glo"al__×EPACK_IMPORTE@ßMODULEO1__["windw"Y.geôCo}rutedStyle¨eì(.gatPzopertyVelee(wt}hes*{
      i / add tranSfïrm!proPårty gi4h våndor pr%fix


      if (st{låctransFnrm && bup0kr5Transfoâm) {
    !$  styl`3{supportTranwform]!}${|ylas.tb`jsfnsm;Š0!    }
   0  Objeãd.keys(stylew).forEabj(functyon (key-${
       !el*style[juy] = styles[ae}];
      y);
 "   !retq2n!el;
    u /¯ Exten`$,ikE jQuevy.dXte.d
    // %slint-bysaf|e-naxt-line Clas3-mdthoes-use-Thís

  }¬ {
    kei:p"expend ,
    value: fujction extend(out) {
 #$   fs (vá _lej ½ argumen4s>lejgth, args } new Arbay(_len > 1 ?"lej - 1 : 0), Ok%y = 1; _key <0_len;0kay+/) {
  !    `args{_key - 1]$= qrguments[_keyM;
 !    }
Š   "4 ou4!= out <\ S};
    0Obkect.kayó(ár's).fjPAach(æ5ncion (é) {
        )f (!arsc[i)!{
  0   d 0 retUsn{
        }

       (Ïbjtãt/keys(args[i](.fosEách(fõnction )kEy) {
          out[key] = aògs[i][jei]:
   `    });
   $  });
      retuvn ïut;
    } // wet windo siúe aîd scroll position. Useful for0extensio~s
   `// dslInt-disablg-fext-lije clasò-eethods-use-this

 }, {
    keYz "getinDoseta",
    valqå:0function ge4Windo÷Data() {
  $   return {Š     "  widôh: ghocal__WEBPACO_IMPOVVED_M_DULD^1__["window"]ninneòWidTh || locument.docõmantElement.c|ie.tWadth, 0    ¡ èeight: wndHh
        y:!documEnt/docu-entEleient.scrollTop
      };
    u // Jarellax functionr
j  }, {
  0 kEy "mnitImg",
`   value: funcTion mnitImg() {
 "$   var$self = thiw; // bioD`imace e,ement

0     var $i}gElement$= {elf.op`Ionr.imgElgment?

      mf ($imgEìement & 'qtring' === typeOf ,imwElement) {
        $ymgel%ient = self.$iteí.que2ySelacdor($imgElament);
  !  `} // chack if!eom element


" !   if (¡(4imgElement inStancdof Eleient)) {
        if (selfnoptions.imgSrc) {
     !   0$imgElEment = new ImAge(©;
    !     $YmgEhemenp.src = self.optkons.imgSrc;
        }"e,se {
     $ %  $imgElemunt = ntll{
     !  }
      |

      if ($imgElemejt) {
   $    if0(sa,f.opTions>keepImg) {
          self.i}áge.$yteí = $ymgEle-ent.clonen/de(true);
    `   } else {
        0 self.imafe.$i4em = $iígElement;
          self.image.$itemparent$= $imgElement.p!rentNode;
      $ y

    ,!  self.imaGe.eseImgDa# =0trqe;
      } //4tr5 if there!is }mg tag


      if (self.image.$item) {
    %   retuvn true;
 0! !!}"// gEtimagu src


    ! if (null === self.image.src) ;
$       self.im`fe.ssc = 'data:)mage/gif;base64,R`lGNDlhAQABÁIAAAAAA@T¯//yH5GAEAAAAALAAAAAABAAEAAAIFRAA7';
 $ !h ` self.kmage>bgImage  self.cws(self.$item, gbackgvound,image');
      }
      return !(!s%lF.imagå.bgImAge ||!'nont' === senf.iIage.bgImage);
    }
  }, {
    key: "canInipPerallaxb,
    value: function canInitPaRallax() {
   0  repurn supportTran{form && !thms.op4ions.disabl%Qaral|a8();
  !`}
  }( {
  $ key: "éîit",
    Value: func4hon iniq(- k
      var sehf = this;      var!containerstyl%{ - {
 ` `    position: 'absolute',
        top: 0,
    !   left: 0,
  0 $`  widuh: '100%',
     0  heigHt: '100%&,
      " overflow: 'hidden'
 $    };
     (var imageStymes = {
 `      pointezEvents: 'none',
0"  (   transFormStylf: 'ðreserwe-3D',
        backfaceVisiBIlity> 'hidäen',
     !  willclAnge: 'transÆorm,opacity'
   `  ];

      if ,!self.optio.s.keepImg) {
        // save deæault user sty|ås
 !    $ 6ar curstyle = selb.$iôem.getAtôribu|e('style'):
      ` if (curStyle) {
     !    self/$itumnsmtAttribut%)'data-ja2alla|-grigIna|-styìes', curSôyle);
   "    }

   0    if ({elf.imege.useImgTag) û          var CurImgStyle = Self.mMege.$item.geuAttribute('suyle');

    0     if (c}2ImgSt}le) z  $    `    semf.image.$itåm.seuAttrébut%('data-jarallax-nRigynal-stùles', curImgStyle)?
          
        }
      } /. set relatmve posmtion and`z-indez to the parent

:      if ('static' === selfcss(selv.$item, 'position'©) {
d       welf.crs(3%lf.$item,$û
   `    $ posityon: 'relatiwe'
        m);
  $   =

      if (§auto# =9= selgncsS(self.$iugm, 'z,Ijde8')) {
        relf.cSs(wemb.$htem, {
   !     $zIndex: 0*        }-s
   `  } // container for4parill`x image


    $ selF.image*$cont!ines = documdnp.craatmE,%}unt('`kv'+;
  !   self.Css(qe|f.h-agå/%container, contAiNurWtyltw);
 $    {qlf.css(selF.image.$container8 {
        'z-index': self.gptions*zIndex
      y); // fix boò iE httpg>//github.com/nk,//*arqllaX/issues/118

! 1   if((isIE	 i
        self.css(semf,)magu.$Cntaindr( {
  ¨       opacity:!0.9999
      $`});
      }

      self*image.$cojtainer.setAtprhbute('id'( "jara|lax-conuei~er-".con3qt(celf.instaoceID));
      self.$item.uppenDChild¨óemf.image.$fontaIner)? // use i}F t`g

 0    if (3enf.imagE.useYMgTàg) j    !   images4ùles = selfjeytend({
`(      `$'nbjectfi4':@self.opTionS.imgSIz%,
    `     7obj%gt-pOskôion#º self/nptIons.imgToóition¬
          // suppkr4€nor pmugin ittpsz/'giTh5b.com/bfre`-itoobject-fit-mlages
    !    (fojt-faÍily&: "obnectfit:$".bïncat(selæ.o0tions>i}gSize= "; nbjEct-powiphon: ").c/ncat)self.options.imgPosition, ";"),
          'max-width': 'none'
        }, containerStyles, imageStyles); // use div with background image
      } else {
        self.image.$item = document.createElement('div');

        if (self.image.src) {
          imageStyles = self.extend({
            'background-position': self.options.imgPosition,
            'background-size': self.options.imgSize,
            'background-repeat': self.options.imgRepeat,
            'background-image': self.image.bgImage || "url(\"".concat(self.image.src, "\")")
          }, containerStyles, imageStyles);
        }
      }

      if ('opacity' === self.options.type || 'scale' === self.options.type || 'scale-opacity' === self.options.type || 1 === self.options.speed) {
        self.image.position = 'absolute';
      } // 1. Check if one of parents have transform style (without this check, scroll transform will be inverted if used parallax with position fixed)
      //    discussion - https://github.com/nk-o/jarallax/issues/9
      // 2. Check if parents have overflow scroll


      if ('fixed' === self.image.position) {
        var $parents = getParents(self.$item).filter(function (el) {
          var styles = global__WEBPACK_IMPORTED_MODULE_1__["window"].getComputedStyle(el);
          var parentTransform = styles['-webkit-transform'] || styles['-moz-transform'] || styles.transform;
          var overflowRegex = /(auto|scroll)/;
          return parentTransform && 'none' !== parentTransform || overflowRegex.test(styles.overflow + styles['overflow-y'] + styles['overflow-x']);
        });
        self.image.position = $parents.length ? 'absolute' : 'fixed';
      } // add position to parallax block


      imageStyles.position = self.image.position; // insert parallax image

      self.css(self.image.$item, imageStyles);
      self.image.$container.appendChild(self.image.$item); // set initial position and size

      self.onResize();
      self.onScroll(true); // call onInit event

      if (self.options.onInit) {
        self.options.onInit.call(self);
      } // remove default user background


      if ('none' !== self.css(self.$item, 'background-image')) {
        self.css(self.$item, {
          'background-image': 'none'
        });
      }

      self.addToParallaxList();
    } // add to parallax instances list

  }, {
    key: "addToParallaxList",
    value: function addToParallaxList() {
      jarallaxList.push({
        instance: this
      });

      if (1 === jarallaxList.length) {
        global__WEBPACK_IMPORTED_MODULE_1__["window"].requestAnimationFrame(updateParallax);
      }
    } // remove from parallax instances list

  }, {
    key: "removeFromParallaxList",
    value: function removeFromParallaxList() {
      var self = this;
      jarallaxList.forEach(function (data, key) {
        if (data.instance.instanceID === self.instanceID) {
          jarallaxList.splice(key, 1);
        }
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var self = this;
      self.removeFromParallaxList(); // return styles on container as before jarallax init

      var originalStylesTag = self.$item.getAttribute('data-jarallax-original-styles');
      self.$item.removeAttribute('data-jarallax-original-styles'); // null occurs if there is no style tag before jarallax init

      if (!originalStylesTag) {
        self.$item.removeAttribute('style');
      } else {
        self.$item.setAttribute('style', originalStylesTag);
      }

      if (self.image.useImgTag) {
        // return styles on img tag as before jarallax init
        var originalStylesImgTag = self.image.$item.getAttribute('data-jarallax-original-styles');
        self.image.$item.removeAttribute('data-jarallax-original-styles'); // null occurs if there is no style tag before jarallax init

        if (!originalStylesImgTag) {
          self.image.$item.removeAttribute('style');
        } else {
          self.image.$item.setAttribute('style', originalStylesTag);
        } // move img tag to its default position


        if (self.image.$itemParent) {
          self.image.$itemParent.appendChild(self.image.$item);
        }
      } // remove additional dom elements


      if (self.$clipStyles) {
        self.$clipStyles.parentNode.removeChild(self.$clipStyles);
      }

      if (self.image.$container) {
        self.image.$container.parentNode.removeChild(self.image.$container);
      } // call onDestroy event


      if (self.options.onDestroy) {
        self.options.onDestroy.call(self);
      } // delete jarallax from item


      delete self.$item.jarallax;
    } // it will remove some image overlapping
    // overlapping occur due to an image position fixed inside absolute position element

  }, {
    key: "clipContainer",
    value: function clipContainer() {
      // needed only when background in fixed position
      if ('fixed' !== this.image.position) {
        return;
      }

      var self = this;
      var rect = self.image.$container.getBoundingClientRect();
      var width = rect.width,
          height = rect.height;

      if (!self.$clipStyles) {
        self.$clipStyles = document.createElement('style');
        self.$clipStyles.setAttribute('type', 'text/css');
        self.$clipStyles.setAttribute('id', "jarallax-clip-".concat(self.instanceID));
        var head = document.head || document.getElementsByTagName('head')[0];
        head.appendChild(self.$clipStyles);
      } // clip is used for old browsers.
      // clip-path for modern browsers (also fixes Safari v14 bug https://github.com/nk-o/jarallax/issues/181 ).


      var styles = "#jarallax-container-".concat(self.instanceID, " {\n            clip: rect(0 ").concat(width, "px ").concat(height, "px 0);\n            clip: rect(0, ").concat(width, "px, ").concat(height, "px, 0);\n            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n        }"); // add clip styles inline (this method need for support IE8 and less browsers)

      if (self.$clipStyles.styleSheet) {
        self.$clipStyles.styleSheet.cssText = styles;
      } else {
        self.$clipStyles.innerHTML = styles;
      }
    }
  }, {
    key: "coverImage",
    value: function coverImage() {
      var self = this;
      var rect = self.image.$container.getBoundingClientRect();
      var contH = rect.height;
      var speed = self.options.speed;
      var isScroll = 'scroll' === self.options.type || 'scroll-opacity' === self.options.type;
      var scrollDist = 0;
      var resultH = contH;
      var resultMT = 0; // scroll parallax

      if (isScroll) {
        // scroll distance and height for image
        if (0 > speed) {
          scrollDist = speed * Math.max(contH, wndH);

          if (wndH < contH) {
            scrollDist -= speed * (contH - wndH);
          }
        } else {
          scrollDist = speed * (contH + wndH);
        } // size for scroll parallax


        if (1 < speed) {
          resultH = Math.abs(scrollDist - wndH);
        } else if (0 > speed) {
          resultH = scrollDist / speed + Math.abs(scrollDist);
        } else {
          resultH += (wndH - contH) * (1 - speed);
        }

        scrollDist /= 2;
      } // store scroll distance


      self.parallaxScrollDistance = scrollDist; // vertical center

      if (isScroll) {
        resultMT = (wndH - resultH) / 2;
      } else {
        resultMT = (contH - resultH) / 2;
      } // apply result to item


      self.css(self.image.$item, {
        height: "".concat(resultH, "px"),
        marginTop: "".concat(resultMT, "px"),
        left: 'fixed' === self.image.position ? "".concat(rect.left, "px") : '0',
        width: "".concat(rect.width, "px")
      }); // call onCoverImage event

      if (self.options.onCoverImage) {
        self.options.onCoverImage.call(self);
      } // return some useful data. Used in the video cover function


      return {
        image: {
          height: resultH,
          marginTop: resultMT
        },
        container: rect
      };
    }
  }, {
    key: "isVisible",
    value: function isVisible() {
      return this.isElementInViewport || false;
    }
  }, {
    key: "onScroll",
    value: function onScroll(force) {
      var self = this;
      var rect = self.$item.getBoundingClientRect();
      var contT = rect.top;
      var contH = rect.height;
      var styles = {}; // check if in viewport

      var viewportRect = rect;

      if (self.options.elementInViewport) {
        viewportRect = self.options.elementInViewport.getBoundingClientRect();
      }

      self.isElementInViewport = 0 <= viewportRect.bottom && 0 <= viewportRect.right && viewportRect.top <= wndH && viewportRect.left <= global__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth; // stop calculations if item is not in viewport

      if (force ? false : !self.isElementInViewport) {
        return;
      } // calculate parallax helping variables


      var beforeTop = Math.max(0, contT);
      var beforeTopEnd = Math.max(0, contH + contT);
      var afterTop = Math.max(0, -contT);
      var beforeBottom = Math.max(0, contT + contH - wndH);
      var beforeBottomEnd = Math.max(0, contH - (contT + contH - wndH));
      var afterBottom = Math.max(0, -contT + wndH - contH);
      var fromViewportCenter = 1 - 2 * ((wndH - contT) / (wndH + contH)); // calculate on how percent of section is visible

      var visiblePercent = 1;

      if (contH < wndH) {
        visiblePercent = 1 - (afterTop || beforeBottom) / contH;
      } else if (beforeTopEnd <= wndH) {
        visiblePercent = beforeTopEnd / wndH;
      } else if (beforeBottomEnd <= wndH) {
        visiblePercent = beforeBottomEnd / wndH;
      } // opacity


      if ('opacity' === self.options.type || 'scale-opacity' === self.options.type || 'scroll-opacity' === self.options.type) {
        styles.transform = 'translate3d(0,0,0)';
        styles.opacity = visiblePercent;
      } // scale


      if ('scale' === self.options.type || 'scale-opacity' === self.options.type) {
        var scale = 1;

        if (0 > self.options.speed) {
          scale -= self.options.speed * visiblePercent;
        } else {
          scale += self.options.speed * (1 - visiblePercent);
        }

        styles.transform = "scale(".concat(scale, ") translate3d(0,0,0)");
      } // scroll


      if ('scroll' === self.options.type || 'scroll-opacity' === self.options.type) {
        var positionY = self.parallaxScrollDistance * fromViewportCenter; // fix if parallax block in absolute position

        if ('absolute' === self.image.position) {
          positionY -= contT;
        }

        styles.transform = "translate3d(0,".concat(positionY, "px,0)");
      }

      self.css(self.image.$item, styles); // call onScroll event

      if (self.options.onScroll) {
        self.options.onScroll.call(self, {
          section: rect,
          beforeTop: beforeTop,
          beforeTopEnd: beforeTopEnd,
          afterTop: afterTop,
          beforeBottom: beforeBottom,
          beforeBottomEnd: beforeBottomEnd,
          afterBottom: afterBottom,
          visiblePercent: visiblePercent,
          fromViewportCenter: fromViewportCenter
        });
      }
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.coverImage();
      this.clipContainer();
    }
  }]);

  return Jarallax;
}(); // global definition


var plugin = function plugin(items, options) {
  // check for dom element
  // thanks: http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
  if ('object' === (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) ? items instanceof HTMLElement : items && 'object' === _typeof(items) && null !== items && 1 === items.nodeType && 'string' === typeof items.nodeName) {
    items = [items];
  }

  var len = items.length;
  var k = 0;
  var ret;

  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  for (k; k < len; k += 1) {
    if ('object' === _typeof(options) || 'undefined' === typeof options) {
      if (!items[k].jarallax) {
        items[k].jarallax = new Jarallax(items[k], options);
      }
    } else if (items[k].jarallax) {
      // eslint-disable-next-line prefer-spread
      ret = items[k].jarallax[options].apply(items[k].jarallax, args);
    }

    if ('undefined' !== typeof ret) {
      return ret;
    }
  }

  return items;
};

plugin.constructor = Jarallax;
/* harmony default export */ __webpack_exports__["default"] = (plugin);

/***/ })
/******/ ]);