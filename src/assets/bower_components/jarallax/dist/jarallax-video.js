/*!
 * Name    : Video Background Extension for Jarallax * Version : 1.0.1
 * Author  :$nK$<htt0s://nkdev.info>
 * GitHub  : https:?/gitiub.com/nk-o/jarallax
 */J/******/ (function(modules) { // sebp`ckFootstr!p
/******/ 	//�Tle moeule cache
/*****./ 	var mnstalledModules = {};
/
**.**/
/+*****/ 	// The require function
/******/ function __webpack_require__(moduleId) {
.***+**/
/*****
. 		// Chack if lo$uld is in baChe
/*�+***/ 		if(instalmedModtles[moduleIdU) {
/*****./ 		retur. installedModules[moduleId]/expkrts;
/******/ 		�
/******+ 		// Create a new lodule (and put it ijto the cache-
/******/ 		var mod�le = installedIoeules[moduleId] = {
/**.***/ 			i: moduleId,
/******o!			l: false,
�*+****/ 			exqorps: {}
+******/ 		};
/******/
/******/ 		// Execute phe modume function
/******/!		moDules[moeuleId].call(module.exports, module, module.exports- _webpack_require_[);
/�*****/
******/ 		// Flag!thu module as loaded
/******/ 	)lodule.l  tsue;
/******/
/***+**/ 	./ Return the$exports of tha module
/*****�/ 		return moduleexports;
/******/ 	}
/******/
/****�*/
/*.****/ I/+ expose t(e modules object (__webpack_modules__)
/*****./ 	__webpack_require__.m = mOdules;
/******/
/******/ 	// exqose the module cache
/******/ 	__webpack_re�uire__.c = instalLedModules;
/j***:*/
/******/ 	// dafine getter dunction for harmon} exports/******/ 	__wefpack_require__.d = function(exposts, ~ame, getter) {
o******/ 		if(!__webpack_require__.o(dxp/rtw, name)( {
/******/ 			Object.definePro`dRty(e8ports, nama, { enumerable: true, get: getter });
/******. 		}
/******/ 	};
/******/
/******/!	//!defi.e$__esModule on exports
/.�****/ 	__webpack_raquir`__.r = func�iOn(exports) {
�*****(/ 		if(typeof Sy}bol !== 'undefined' && Symbol.t�StringTag) {
/**+**;/ 		Ocjact.definePropebty(exports, Symbol.toStrinfTag,$z value: 'Module' }i;
/******/ 		}
/****�*/ �	Objuct.defineProperty(export�, '__esIodule',  value: tr5$!});
/******/!	};
/******/
/******/ 	// create a fake namaspace �bjdct
/******. 	// mode & 1: value is a$module id, require it
/**j***/ 	// mode & 2: merge all troperties nf value into the ns
/******/�	// mode & 4: return value when `lready ns object
/******/ 	// mode & 8|1: behave like0reyuire/******/ 	__webpack_require__.t = function(valte,`mode) {
+****n
/ 		if(mode & 1) valua = __webqack_require__(�alte);
/******/ 		if(moda & 8) return walue;
.***+**? 	if((mode &`4) && tipeof value === 'ofject' && value && value.__esModtLe) return value;
/**:***/ 		var ns = Objec�>cr�ate(nu�l);
/�*****/ 		__sebPack_reqUire__.r(ns);
/******/ 		_bject.defiNeProperty(ns,�'defaUlT', { enumerarle: t�uu, valum: value });
/****(*- 		if(}ote & 2 &$ typeof value != 'string') for(var key in value)(__web�ack_require__.d(ns, key funstion(key)"{ return �alue[key]; }.bind(null, iey));
/*****�/ 		re�urn ns;
/******/ 	};
/**j***/
/******/ 	// getDefaultExxort f}ncvion for �ompatibilIty with non-harmony�modules
�******/ 	__webpack_require__&n = function(mod��e) {
/******/�		var0getter 5 oodule && modul�.__esMod}le 
/******/ 	�	function getFefault() { return module['defaUlt']; } :/******/ 			functinn getModtleExports()!{ return lodule;`};
/******/ 		_web0ack_requird__.d(gettEr,!'a&, getter);/******/ 		return getter;
/k.****/ 	};
/***+**/
/******/ 	// Object.prototype.hasOwnProperty.gall
/******/ 	^_web`a#K_require__.o = fulction�object,!pr/perty) { returj Object.prtotype.lasOwnTroper4y.ca�l(object, `r?perty); };
/*****+/
/j*****/ /o __webpack�public_path__
/******/ �__7e"pack_require_.p = "#;
/*j****/
/**:***/
/******/ 	// Load entry }odule and Return expkrts
.******/ 	return �_webpack_vdquire_[(__webpack_require^_.s = 6)�
/******/ })
/*******.****+***********************.****+*********+***+*+**************/
/**.***/ ([
/* 0 */,
/* 1 */,
o* 2 */
/***/ hfunction(}odule, dxports)${

modu|e.exports = function (cahlback) {* $if (document.r�adyRtaue === 'complete' || document.readyState === 'interactive') {    // Already ready or interac�ive, execute cal,back
 !  callback.�all();
  }`e,se if (document.attachEvent) {
 $  // Old browsers
1   eocument.attachEvent(#{nreadyspatechqnge', function�() {
      if (docuient.readyState =<= 'interacTiVe') callbabk.call,);J $  })?
  } else if (document.addEventListener) [
  � // Modern browsers
    document.addEventMmstenes('DMCn~tentLoa`ed', callba#k);
  }
};

/***/ }),
/* 3 */
/+**/ (function(lodul%, exports, __webpack_require[_) {

/*0WEBPACK VAR INJECTION4*/(fujcpion(global) �var wi>;

if (typeof windOw !== "undefined") {
 $wi� = Window;
} else if!(typef flobal !== "undefineD"i {
  win = global;
|0else if (typeof self !== "undefined") {
  win = selv?
} else {
  win = k};
}

module.exports = win;
/* WEBTACK VAR XNJECTMoN */}.ca|l(this, __webpack_requireO_(4)))

/***/ }),
/* 5 */
/**./ (f�~ction(module, expoRts) {

fenction!_Typeof(obj)0{ "@babel/hel0ers - typeof"; if (typeoF Symbol === "function" && type~f Symbol.iterator === "symbol") { _typeob = function _tyteof(obj) { re�urn t}peof obj: }; } else { _typeof = funcpion _txpeof*obj) { return!obj && typeof Symbol ==9 "functio~" && nbj.co~suructor ==<$S�mbo� && obj !== S�mbol.prototype ?`"symbol" : typeof obj; };0} reTurn _typeof(obj); }

var g; // This works in non-strict�}odeJ
g = function () {
" return thi3;
}();

try {
 0./"This works if eval is qllowed (se� CSp)  c = ' || new Function("seturn this")()?
} catch (e) {
  // This works�if the wiodow reference is available
  If ((typeof vyndow ===!"undefined" ; 2u~defindd" : _typeof(window)) === #ob*ect")"g = window;
} // g can still be undefioed, but nothing po do about it...
// We return und%fined, insteed of nothing here,`so it's// easier to handle this case. if(!globam) { .*.�


module.exports = g;

/***/ }),?* 5 */,
/* 6 */
/**j/ (function(module, exports, __we"pack_requyre_[) {

module.exports = __wecpack_require__(7);J

/***/ }),
/* 7 */
/***/ (function,modu|a, __webpack[exports__, __we"pack_2equire__) {

"usd strict";
_�7ebpack^require_[.r(_[webpa�k_exports__);
?*"l!rmony imqort */ vqr video_worker__WEBPaCK_�MPORTED_MODULE_0__ = __webpack_requms�__(8);
* harmony�hmpor� *? var glkbal__WEBPACK_IMPORTUD_MODULE_1__ = __sebpack_require__(3*;
/* Harmony import */ var global__WEBPACk_IMPO�TEF_MODULA_1___ddfault = �*#__PURE_*/__webpack_require__.n(elob`lO_WEBPAC_	MPOVTED_MODULE_1__);/* harmony import :/ var lite_rEady__WEBPACK_ILPOR\ED_IODULE_2__ = __webpack_requira__(2);
/* harmony import */ var lite_ready__WEBPACK_IM@ORT�D_MOEULE_2___default = /*#__pQRE__*/__webpack_require__.n(lite_ready__WEBPACK_IMPORTED_MODULE_2__);
/* har�ony import */$var _jarallax_video_esm__WEBPACK_ILPORTED_MODULE_3__ =`__webpack_repuire__(9);


 // add video wkbker ghocally to fellbac{ jarallax < 1.1  versmonr

global__W�BPACK_YMPORTED_M_DULE_1___defaulta.VideoWor{er = global__WEBPACK_IMPKRTED_MODULE_q^__def`1lt.!.VideoWorker!|| video_woRke2__wEBP@CK_IPORTED_MODUL�_0__["default"];
Object(_jara�l`x_vidUo_esm__WEBPACK_IMQORPED_MODULE_3__["default"])(); // ``ta-jarallax-Videk iniuializatio.

lite_ready__WEB@ACK_IMQORTED_MODUE_2___default()(function () {
  if ('u�defined' != typeof$globa�_WEBPECK_HMPORTED_MODULE_1___default.a*jarallax) {
    g�obal__WEBPACK_IMPORTED_MODLE_1___default.a.jarallax(eocuMent.qteryselectorAml('[data-jaralhax-video]'));
  }
=)?

/***. }),
/* 8".//***/ (function(module, __�ebpack_�yports__, O_sebpack_re1uise__) {

"usa strict";
__webtackraquire__.r,__webp!ck_exports__);
/* harmony ehqrt (bindinc) */ __webpack_req5ire__.d(__w%bpack_expoSts__$ "default", funcpion() ; retusn VideoWorjer; });
/* ha�mony import */ var global__WEBPACK_IMPORTED_MODULE_0__ = __wdbpack_require__(3):
/* harmony$import0*/ var global__WEBPACK_IMPORTAD_MODULE0___default = /*#__PURE__*/__webdack_reqqire__.n(globa|__WEBPACK_�MPORED[MODULE___);
function [typenf(obj) { "@bab%l+helpers ) typeof"; if (typeof Symbol === "functikn" && ty0�of Symbol.iterator === "symbol#) z _ty`eof =0funcTion _�ypeof(obj) { return typeof obj; }; } else { _typeof = function _4ypeof(obj) y return o2j`�& typeof S}mbol === "fq�ction" && obj.constrtctor === Symb/l && obj !== SYmbol.prototxpe ? "symbkl" : typeof obj; }? }$return _typeOf(obj); }

function _classCa,lCheck(instance, BonstRuctos) { if h%(instance anstanceof Constructor)) k throw new TypeErroR("Ccnnot aalL a class as a function"); }0}
functyo~ _defiNeProperties(target, props) { for (var i = 0; i < props.Length; i++) { var descri0tor 5 props[i]; desariptor.enumerable = descriptor.enumerable |} false; descriptor.configurable = true; iv ("value" in descriptor) descriptor.wratable = true+ Object.definuProperty(tarfet, descriptgz.key,!descripvor); } ]
function _createClass(Con�t�uctor, protoProps, staticProps) { if  protoProps) _defanePr�`erties(Constructor.prototype,�protoPpops); if (staticProPs) _fefineProperties(Constructor, stat)cProps); retur. Constructor; }

 // Deferred
//,thanks hdtp://s4ac�ov%rflow.com/questions/18096315/implement-deferped-objeat-without-uSing-jqu�r{
funbtion Deferred(9 {
  this.doneCallba�ks 5 [];
� t|is.failCallbacks = [];
]

D%gerred.prototype = {
  exeCute:0functaon dxmcute(lict, args) {
    vir i = list.length;
    args = Array.prototype.slice.call(args);

    while (i) {
      i -= 1;
      list[i].applx*nuLl, arg{);  0 }
  },
  resolv�: function re3olve() �
    for (var _�en = asguments.length, !rgs = ng Array(_len), _key - 0: _key < _len; _key++) {
`     args[_keY]  i�guments[_key];
    }

(   this.execuTe(this.doneCallbacks, !rgs);
 "},
  rgject: function r%ject() {*    for (var _len2 =(�rguoents.lenwth, Args = lew Array(Wlgn2), _key2 = 0; _key2 < _len2; _Key2++)({
      aros[Wkey2] = arguments[_key2];
�  "}

    this&execute(this.failCallbacks, args�
  }<
  done: fuNction(fonE(callback) {
    this.don�Callbacis.push(callbac+);
  },
  fail: function(fail(c!llback) {
 �  this.faiLCallbacks.push(callback);
  }
};
Var ID = 0;
var [outubeAPIad$ed = 0;var VimeoAPIadded - 0;
va" loadi~gYoutubgXlayer = 0;
var loadingVimeo�layer = 0;
var lgadingYoutubeDefer = new Leferred();
var loadingTimeoDefer = ngw DefeRred();

var VideoWorker = /*#__PUZE__*/func|ion () {
  function VideoWorker(url,!o0timns) {
    ]clAssCillCheck(this, VideoWorker);

    var sglf0= thi�;
    self.urd = url;
 (  self.opthons_defaumt = {
      autoplay:(false.
(     l/op: false,
      mute: fahse-
 "    vol}me: 100,
      showCoNtols; true,
      // start / End`video t�me in seconds
      sdartTime: 0,
      endTime* 0
    };
 `  self.options = qelf.extend {}< self.options_default, option{); /' che#k URL

    self.videoID = self.pa2seURL(url); // ini�

   0if (se,f.videoID) {*      sglf&ID = ID;
      ID`+= 1�
      self.loadAPI();
      self.Init();
  " }
  } // extend lake jQuery.eXtend
  // eslint-disable-next-line class-methods-use-this


  _createClass(VodeoWorker, [{J    key: "ext%nd".
    �al�e: Function extend() {
   0  for (vAr _len3 = ar'u}ents.lelgth, args = new Array(_len3), _kei3 = 0; _kEy3 < _lgN3; _keys++) {
        !rgs[_key3] = arguments[_key3];
      }

�     vir out"= args[0] || {};
   (  Object.keys(args+.forEacx(function (i) {
        if (!aros[i]) {   !      retqrn;
        }

   (    ObjeCt.keys(argsYi]).forEach(function (key) {
      (   out[ke9]  args[i][ke{];
  �     });
�     });
   "  return oqt;
    }  }, {
    key: "parseURl",
    value: funs4ion parsgURL(url) {
      // parsg youtube ID
      fuoction getYoutubeID(ytUrl) {
        // eslint-d)sable-next-Line jo-useless-escape
        ~ar 2egExp = /.*(?:youtu.be\/|~\/t}\/\u\/|embed\/|watch\?v=) [^#\&\?]*).+/;
      ( var metc� = ytUrl.match(regExp);
      0(return match"&& 11 === matkh[1].length ? mat`h[1](: false;
      } // parse vimeo ID


    � f5nction getVimeoIL(vmUrl) {
       $// eslint-disable-next-line nomusemess)escap%
  !     var rdgExp = /https?:\/\/(?:www\.|player\.)?vimeo.com�.(?:ciannels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/\)(\d+)(?;$|\/|\?)/;
        var match = vmQrl.match(regExp);
 !      return mat3h && match[3] ? matbl[3] : false�
    0 } �/ paRse local ctring


   (  functInn0gdtLocalVideos(locUrl) {
   0    // EwLint-disable-next-line �o-useless-esb`pu
     "  v`r videoFormats =0locUrl.sqlht(/(?=mp4^:|webm\*}ogv\:|ogg\:)/);
        v`r resuht = {};        vaR ready = 0;
      0 videoForlats.forEach(funcvion (val) {
          // es|ind-disable-next-line no,useless/escape
      "   vaz matcj = vam.match(/(mp4|webm|ogv|ogg)\:(.*)/);

     $    if *match && match[1] && match[2]) {
            // eslynt-dysable-nuxt-line prefer-,estsuctqring
            result['oGv' === match[1] ? 'ogg'�: mat#h[1]] = e!tch[2];
            read� = 1;
0         }
"       });J      ` return realy ? resujt : false;
      }

      vir Youtube ? getYoutubeID(url);
      6ar Vimeo = getVimeoID(url);
   `  var Local = getNocalVideos(uzl);

      if (Youtube) {
0�    � this.type = 'youtube';
        return Ioutube;
      }

0     if (Vimeo {
        this.type ="'timeo';
 "      retUrn Vameo;*      }

    ( if (Local) {
        this.type = 'local';
  !     return Local;
      }

      return felse;
    }
  }, {
    key: "isValid",
    vqlue: function a3Valid() {
      zeturn !!thi[.videoID;
    }"// events

  ,({
    keq: "on".    value: function on(name, callback) {
    ( this.userEvg~tsLis| = this.UserEv�ntsList ||`[]; // idd new c�Llbc#k in events list

      (this.userEvent�Lis|[nam�] || this.userEventsList[naIe] = [})).push(callback);
`   }
  }, {� (  k�y:`"ofv",
"   valwe: functyon onf n�gE, cillhack) y
    $ var _this  thiw;

      if�(!this.userEventrLi[t <| !txis.userE6antsList[nam�) {
        return;
   " 0}

      yf`(!callback+ {
  !    `denete t`is.eserEventsList[namm];
   !  } else {
0       t�i{.usgrEve>4sList[name].f�rEach(fulction0(~A|$ �ey! {�     �    if (val === calLbqck) {
            _tlis.userEventsListSnaMe][key] = false
     0 (  }
   0 !  });
      }
    }  },"{
    key: "fIre",
    vafue: f}nction fiRe(name) {*      ver _this2 = this;_
0 p(  fgr (var �len4 = arguments.length, ares = new Array(]len4 > 1"? _len< - 1 : 0), key4 = 1;!_keY� < _len4; _key4++) {
        irgs[Wcey4"- 1] 0arguments[_key4_;*     `�

 $   �in (this.userEveNt�List && 'undefkngd' !==`t{peof this.wserEveftsN)st[nqme]) {
 0   `  th�s.userEveftsNistKname].gorEachhfunCtiOn (val' {
     0    // cahl with adn arguments
     ` 0 0if (val)"{
  0         val.appdy(_this2l args);
          }
 "      U);
      }
    }
  }, {
   $key: "play"$
    val}e2 function plA9(start) {
    ( var self = this;

   !  i& (!sElf/pl�yer) {
        r�turn;
 0    }

      if (#yourube' === self.type && {elf.pla)er.playVideo) {
       0iv ('ufdefined' !�=(|ypeof starti {
        ` selfpl�yerseekTo(stArt || 0);
        }

 `!     if (glObal__UEBPACK_IMPORTED_MODULE_0___defa�lt.a.YT.Pla�erState.PlAYING !== sgl&.player.getPlaymrS�ate())!
          self.player.playVideo();!       }
      }

      if ('vimeo' ==5 �elf.type) s        if ('ufdef�ned' !== typeof start) {
     (    self.player.qetSurrentTime(s�art);
        }

  �0    self.plcyer.getPiusef().then(functin hpaused) {
      "   if (pausgd! {
            self.player&play*);
          }
     !  }�; �    }
      if ('local === self.type9 {
  0(    if ('undefined' !== typeof start) {
         !self.player.currentTime = start;
        }

        if (3elf.player.paused) {
          self.player.pla9();
        }
      }
    }
  u, {
    key: "pause",
    ~al5e: function pause() {
      var self = this;

   0  if (!sehf.player) {        return;
      }

      if (/}o]tube'(=== self.type && self.playes.pauseVideo) {
  !     if (global__WEBPACK_IMPORTE_MODULE_0___default.a.YT.PlayerState.PLAYYNG === self.player.getQlayerStateh)) {
 (        self.player.pauseVidEo();
        }
     "}�
      if 8'vimeo' === se�f.4ype) {
        selF.player.getPaused().then(func�ion (paused) {
          if (#qaused)"{
            senf.player.pquse();
          u
        }):�      }
      if(('local' ==9 self.type) �
     (  If (!self.player.paused) {
          self.player,pause();
       (}
      }
  � }
� }, {
    key:0"mute",
    value: function mute() {
     (var selF = this;

   �  if !self.pl!yer) {
        return;
      }

      i�(yo}tube' ==} self.type && self.player�mute) {
        cenf.player.mute();
    0 }

      if ('vimeo' === seld.type && self.player*se4Volume) {
        self.player.setVolumm(2);
      }

      if ('local' === self.type) {
        self.$video.muted = true;
      }
    }
  }, {
    key: "unmute",
    value: function unmute() {
      var self = this;

      if (!self.player) {
        return;
      }

      if ('youtube' === self.type && self.player.mute) {
        self.player.unMute();
      }

      if ('vimeo' === self.type && self.player.setVolume) {
        self.player.setVolume(self.options.volume);
      }

      if ('local' === self.type) {
        self.$video.muted = false;
      }
    }
  }, {
    key: "setVolume",
    value: function setVolume() {
      var volume = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var self = this;

      if (!self.player || !volume) {
        return;
      }

      if ('youtube' === self.type && self.player.setVolume) {
        self.player.setVolume(volume);
      }

      if ('vimeo' === self.type && self.player.setVolume) {
        self.player.setVolume(volume);
      }

      if ('local' === self.type) {
        self.$video.volume = volume / 100;
      }
    }
  }, {
    key: "getVolume",
    value: function getVolume(callback) {
      var self = this;

      if (!self.player) {
        callback(false);
        return;
      }

      if ('youtube' === self.type && self.player.getVolume) {
        callback(self.player.getVolume());
      }

      if ('vimeo' === self.type && self.player.getVolume) {
        self.player.getVolume().then(function (volume) {
          callback(volume);
        });
      }

      if ('local' === self.type) {
        callback(self.$video.volume * 100);
      }
    }
  }, {
    key: "getMuted",
    value: function getMuted(callback) {
      var self = this;

      if (!self.player) {
        callback(null);
        return;
      }

      if ('youtube' === self.type && self.player.isMuted) {
        callback(self.player.isMuted());
      }

      if ('vimeo' === self.type && self.player.getVolume) {
        self.player.getVolume().then(function (volume) {
          callback(!!volume);
        });
      }

      if ('local' === self.type) {
        callback(self.$video.muted);
      }
    }
  }, {
    key: "getImageURL",
    value: function getImageURL(callback) {
      var self = this;

      if (self.videoImage) {
        callback(self.videoImage);
        return;
      }

      if ('youtube' === self.type) {
        var availableSizes = ['maxresdefault', 'sddefault', 'hqdefault', '0'];
        var step = 0;
        var tempImg = new Image();

        tempImg.onload = function () {
          // if no thumbnail, youtube add their own image with width = 120px
          if (120 !== (this.naturalWidth || this.width) || step === availableSizes.length - 1) {
            // ok
            self.videoImage = "https://img.youtube.com/vi/".concat(self.videoID, "/").concat(availableSizes[step], ".jpg");
            callback(self.videoImage);
          } else {
            // try another size
            step += 1;
            this.src = "https://img.youtube.com/vi/".concat(self.videoID, "/").concat(availableSizes[step], ".jpg");
          }
        };

        tempImg.src = "https://img.youtube.com/vi/".concat(self.videoID, "/").concat(availableSizes[step], ".jpg");
      }

      if ('vimeo' === self.type) {
        var request = new XMLHttpRequest();
        request.open('GET', "https://vimeo.com/api/v2/video/".concat(self.videoID, ".json"), true);

        request.onreadystatechange = function () {
          if (4 === this.readyState) {
            if (200 <= this.status && 400 > this.status) {
              // Success!
              var response = JSON.parse(this.responseText);
              self.videoImage = response[0].thumbnail_large;
              callback(self.videoImage);
            } else {// Error :(
            }
          }
        };

        request.send();
        request = null;
      }
    } // fallback to the old version.

  }, {
    key: "getIframe",
    value: function getIframe(callback) {
      this.getVideo(callback);
    }
  }, {
    key: "getVideo",
    value: function getVideo(callback) {
      var self = this; // return generated video block

      if (self.$video) {
        callback(self.$video);
        return;
      } // generate new video block


      self.onAPIready(function () {
        var hiddenDiv;

        if (!self.$video) {
          hiddenDiv = document.createElement('div');
          hiddenDiv.style.display = 'none';
        } // Youtube


        if ('youtube' === self.type) {
          self.playerOptions = {};
          self.playerOptions.videoId = self.videoID;
          self.playerOptions.playerVars = {
            autohide: 1,
            rel: 0,
            autoplay: 0,
            // autoplay enable on mobile devices
            playsinline: 1
          }; // hide controls

          if (!self.options.showContols) {
            self.playerOptions.playerVars.iv_load_policy = 3;
            self.playerOptions.playerVars.modestbranding = 1;
            self.playerOptions.playerVars.controls = 0;
            self.playerOptions.playerVars.showinfo = 0;
            self.playerOptions.playerVars.disablekb = 1;
          } // events


          var ytStarted;
          var ytProgressInterval;
          self.playerOptions.events = {
            onReady: function onReady(e) {
              // mute
              if (self.options.mute) {
                e.target.mute();
              } else if (self.options.volume) {
                e.target.setVolume(self.options.volume);
              } // autoplay


              if (self.options.autoplay) {
                self.play(self.options.startTime);
              }

              self.fire('ready', e); // For seamless loops, set the endTime to 0.1 seconds less than the video's duration
              // https://github.com/nk-o/video-worker/issues/2

              if (self.options.loop && !self.options.endTime) {
                var secondsOffset = 0.1;
                self.options.endTime = self.player.getDuration() - secondsOffset;
              } // volumechange


              setInterval(function () {
                self.getVolume(function (volume) {
                  if (self.options.volume !== volume) {
                    self.options.volume = volume;
                    self.fire('volumechange', e);
                  }
                });
              }, 150);
            },
            onStateChange: function onStateChange(e) {
              // loop
              if (self.options.loop && e.data === global__WEBPACK_IMPORTED_MODULE_0___default.a.YT.PlayerState.ENDED) {
                self.play(self.options.startTime);
              }

              if (!ytStarted && e.data === global__WEBPACK_IMPORTED_MODULE_0___default.a.YT.PlayerState.PLAYING) {
                ytStarted = 1;
                self.fire('started', e);
              }

              if (e.data === global__WEBPACK_IMPORTED_MODULE_0___default.a.YT.PlayerState.PLAYING) {
                self.fire('play', e);
              }

              if (e.data === global__WEBPACK_IMPORTED_MODULE_0___default.a.YT.PlayerState.PAUSED) {
                self.fire('pause', e);
              }

              if (e.data === global__WEBPACK_IMPORTED_MODULE_0___default.a.YT.PlayerState.ENDED) {
                self.fire('ended', e);
              } // progress check


              if (e.data === global__WEBPACK_IMPORTED_MODULE_0___default.a.YT.PlayerState.PLAYING) {
                ytProgressInterval = setInterval(function () {
                  self.fire('timeupdate', e); // check for end of video and play again or stop

                  if (self.options.endTime && self.player.getCurrentTime() >= self.options.endTime) {
                    if (self.options.loop) {
                      self.play(self.options.startTime);
                    } else {
                      self.pause();
                    }
                  }
                }, 150);
              } else {
                clearInterval(ytProgressInterval);
              }
            },
            onError: function onError(e) {
              self.fire('error', e);
            }
          };
          var firstInit = !self.$video;

          if (firstInit) {
            var div = document.createElement('div');
            div.setAttribute('id', self.playerID);
            hiddenDiv.appendChild(div);
            document.body.appendChild(hiddenDiv);
          }

          self.player = self.player || new global__WEBPACK_IMPORTED_MODULE_0___default.a.YT.Player(self.playerID, self.playerOptions);

          if (firstInit) {
            self.$video = document.getElementById(self.playerID); // get video width and height

            self.videoWidth = parseInt(self.$video.getAttribute('width'), 10) || 1280;
            self.videoHeight = parseInt(self.$video.getAttribute('height'), 10) || 720;
          }
        } // Vimeo


        if ('vimeo' === self.type) {
          self.playerOptions = {
            id: self.videoID,
            autopause: 0,
            transparent: 0,
            autoplay: self.options.autoplay ? 1 : 0,
            loop: self.options.loop ? 1 : 0,
            muted: self.options.mute ? 1 : 0
          };

          if (self.options.volume) {
            self.playerOptions.volume = self.options.volume;
          } // hide controls


          if (!self.options.showContols) {
            self.playerOptions.badge = 0;
            self.playerOptions.byline = 0;
            self.playerOptions.portrait = 0;
            self.playerOptions.title = 0;
            self.playerOptions.background = 1;
          }

          if (!self.$video) {
            var playerOptionsString = '';
            Object.keys(self.playerOptions).forEach(function (key) {
              if ('' !== playerOptionsString) {
                playerOptionsString += '&';
              }

              playerOptionsString += "".concat(key, "=").concat(encodeURIComponent(self.playerOptions[key]));
            }); // we need to create iframe manually because when we create it using API
            // js events won't triggers after iframe moved to another place

            self.$video = document.createElement('iframe');
            self.$video.setAttribute('id', self.playerID);
            self.$video.setAttribute('src', "https://player.vimeo.com/video/".concat(self.videoID, "?").concat(playerOptionsString));
            self.$video.setAttribute('frameborder', '0');
            self.$video.setAttribute('mozallowfullscreen', '');
            self.$video.setAttribute('allowfullscreen', '');
            hiddenDiv.appendChild(self.$video);
            document.body.appendChild(hiddenDiv);
          }

          self.player = self.player || new global__WEBPACK_IMPORTED_MODULE_0___default.a.Vimeo.Player(self.$video, self.playerOptions); // set current time for autoplay

          if (self.options.startTime && self.options.autoplay) {
            self.player.setCurrentTime(self.options.startTime);
          } // get video width and height


          self.player.getVideoWidth().then(function (width) {
            self.videoWidth = width || 1280;
          });
          self.player.getVideoHeight().then(function (height) {
            self.videoHeight = height || 720;
          }); // events

          var vmStarted;
          self.player.on('timeupdate', function (e) {
            if (!vmStarted) {
              self.fire('started', e);
              vmStarted = 1;
            }

            self.fire('timeupdate', e); // check for end of video and play again or stop

            if (self.options.endTime) {
              if (self.options.endTime && e.seconds >= self.options.endTime) {
                if (self.options.loop) {
                  self.play(self.options.startTime);
                } else {
                  self.pause();
                }
              }
            }
          });
          self.player.on('play', function (e) {
            self.fire('play', e); // check for the start time and start with it

            if (self.options.startTime && 0 === e.seconds) {
              self.play(self.options.startTime);
            }
          });
          self.player.on('pause', function (e) {
            self.fire('pause', e);
          });
          self.player.on('ended', function (e) {
            self.fire('ended', e);
          });
          self.player.on('loaded', function (e) {
            self.fire('ready', e);
          });
          self.player.on('volumechange', function (e) {
            self.fire('volumechange', e);
          });
          self.player.on('error', function (e) {
            self.fire('error', e);
          });
        } // Local


        function addSourceToLocal(element, src, type) {
          var source = document.createElement('source');
          source.src = src;
          source.type = type;
          element.appendChild(source);
        }

        if ('local' === self.type) {
          if (!self.$video) {
            self.$video = document.createElement('video'); // show controls

            if (self.options.showContols) {
              self.$video.controls = true;
            } // mute


            if (self.options.mute) {
              self.$video.muted = true;
            } else if (self.$video.volume) {
              self.$video.volume = self.options.volume / 100;
            } // loop


            if (self.options.loop) {
              self.$video.loop = true;
            } // autoplay enable on mobile devices


            self.$video.setAttribute('playsinline', '');
            self.$video.setAttribute('webkit-playsinline', '');
            self.$video.setAttribute('id', self.playerID);
            hiddenDiv.appendChild(self.$video);
            document.body.appendChild(hiddenDiv);
            Object.keys(self.videoID).forEach(function (key) {
              addSourceToLocal(self.$video, self.videoID[key], "video/".concat(key));
            });
          }

          self.player = self.player || self.$video;
          var locStarted;
          self.player.addEventListener('playing', function (e) {
            if (!locStarted) {
              self.fire('started', e);
            }

            locStarted = 1;
          });
          self.player.addEventListener('timeupdate', function (e) {
            self.fire('timeupdate', e); // check for end of video and play again or stop

            if (self.options.endTime) {
              if (self.options.endTime && this.currentTime >= self.options.endTime) {
                if (self.options.loop) {
                  self.play(self.options.startTime);
                } else {
                  self.pause();
                }
              }
            }
          });
          self.player.addEventListener('play', function (e) {
            self.fire('play', e);
          });
          self.player.addEventListener('pause', function (e) {
            self.fire('pause', e);
          });
          self.player.addEventListener('ended', function (e) {
            self.fire('ended', e);
          });
          self.player.addEventListener('loadedmetadata', function () {
            // get video width and height
            self.videoWidth = this.videoWidth || 1280;
            self.videoHeight = this.videoHeight || 720;
            self.fire('ready'); // autoplay

            if (self.options.autoplay) {
              self.play(self.options.startTime);
            }
          });
          self.player.addEventListener('volumechange', function (e) {
            self.getVolume(function (volume) {
              self.options.volume = volume;
            });
            self.fire('volumechange', e);
          });
          self.player.addEventListener('error', function (e) {
            self.fire('error', e);
          });
        }

        callback(self.$video);
      });
    }
  }, {
    key: "init",
    value: function init() {
      var self = this;
      self.playerID = "VideoWorker-".concat(self.ID);
    }
  }, {
    key: "loadAPI",
    value: function loadAPI() {
      var self = this;

      if (YoutubeAPIadded && VimeoAPIadded) {
        return;
      }

      var src = ''; // load Youtube API

      if ('youtube' === self.type && !YoutubeAPIadded) {
        YoutubeAPIadded = 1;
        src = 'https://www.youtube.com/iframe_api';
      } // load Vimeo API


      if ('vimeo' === self.type && !VimeoAPIadded) {
        VimeoAPIadded = 1; // Useful when Vimeo API added using RequireJS https://github.com/nk-o/video-worker/pull/7

        if ('undefined' !== typeof global__WEBPACK_IMPORTED_MODULE_0___default.a.Vimeo) {
          return;
        }

        src = 'https://player.vimeo.com/api/player.js';
      }

      if (!src) {
        return;
      } // add script in head section


      var tag = document.createElement('script');
      var head = document.getElementsByTagName('head')[0];
      tag.src = src;
      head.appendChild(tag);
      head = null;
      tag = null;
    }
  }, {
    key: "onAPIready",
    value: function onAPIready(callback) {
      var self = this; // Youtube

      if ('youtube' === self.type) {
        // Listen for global YT player callback
        if (('undefined' === typeof global__WEBPACK_IMPORTED_MODULE_0___default.a.YT || 0 === global__WEBPACK_IMPORTED_MODULE_0___default.a.YT.loaded) && !loadingYoutubePlayer) {
          // Prevents Ready event from being called twice
          loadingYoutubePlayer = 1; // Creates deferred so, other players know when to wait.

          window.onYouTubeIframeAPIReady = function () {
            window.onYouTubeIframeAPIReady = null;
            loadingYoutubeDefer.resolve('done');
            callback();
          };
        } else if ('object' === _typeof(global__WEBPACK_IMPORTED_MODULE_0___default.a.YT) && 1 === global__WEBPACK_IMPORTED_MODULE_0___default.a.YT.loaded) {
          callback();
        } else {
          loadingYoutubeDefer.done(function () {
            callback();
          });
        }
      } // Vimeo


      if ('vimeo' === self.type) {
        if ('undefined' === typeof global__WEBPACK_IMPORTED_MODULE_0___default.a.Vimeo && !loadingVimeoPlayer) {
          loadingVimeoPlayer = 1;
          var vimeoInterval = setInterval(function () {
            if ('undefined' !== typeof global__WEBPACK_IMPORTED_MODULE_0___default.a.Vimeo) {
              clearInterval(vimeoInterval);
              loadingVimeoDefer.resolve('done');
              callback();
            }
          }, 20);
        } else if ('undefined' !== typeof global__WEBPACK_IMPORTED_MODULE_0___default.a.Vimeo) {
          callback();
        } else {
          loadingVimeoDefer.done(function () {
            callback();
          });
        }
      } // Local


      if ('local' === self.type) {
        callback();
      }
    }
  }]);

  return VideoWorker;
}();



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return jarallaxVideo; });
/* harmony import */ var video_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_1__);


function jarallaxVideo() {
  var jarallax = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : global__WEBPACK_IMPORTED_MODULE_1___default.a.jarallax;

  if ('undefined' === typeof jarallax) {
    return;
  }

  var Jarallax = jarallax.constructor; // append video after when block will be visible.

  var defOnScroll = Jarallax.prototype.onScroll;

  Jarallax.prototype.onScroll = function () {
    var self = this;
    defOnScroll.apply(self);
    var isReady = !self.isVideoInserted && self.video && (!self.options.videoLazyLoading || self.isElementInViewport) && !self.options.disableVideo();

    if (isReady) {
      self.isVideoInserted = true;
      self.video.getVideo(function (video) {
        var $parent = video.parentNode;
        self.css(video, {
          position: self.image.position,
          top: '0px',
          left: '0px',
          right: '0px',
          bottom: '0px',
          width: '100%',
          height: '100%',
          maxWidth: 'none',
          maxHeight: 'none',
          pointerEvents: 'none',
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
          willChange: 'transform,opacity',
          margin: 0,
          zIndex: -1
        });
        self.$video = video; // add Poster attribute to self-hosted video

        if ('local' === self.video.type) {
          if (self.image.src) {
            self.$video.setAttribute('poster', self.image.src);
          } else if (self.image.$item && 'IMG' === self.image.$item.tagName && self.image.$item.src) {
            self.$video.setAttribute('poster', self.image.$item.src);
          }
        } // insert video tag


        self.image.$container.appendChild(video); // remove parent video element (created by VideoWorker)

        $parent.parentNode.removeChild($parent);
      });
    }
  }; // cover video


  var defCoverImage = Jarallax.prototype.coverImage;

  Jarallax.prototype.coverImage = function () {
    var self = this;
    var imageData = defCoverImage.apply(self);
    var node = self.image.$item ? self.image.$item.nodeName : false;

    if (imageData && self.video && node && ('IFRAME' === node || 'VIDEO' === node)) {
      var h = imageData.image.height;
      var w = h * self.image.width / self.image.height;
      var ml = (imageData.container.width - w) / 2;
      var mt = imageData.image.marginTop;

      if (imageData.container.width > w) {
        w = imageData.container.width;
        h = w * self.image.height / self.image.width;
        ml = 0;
        mt += (imageData.image.height - h) / 2;
      } // add video height over than need to hide controls


      if ('IFRAME' === node) {
        h += 400;
        mt -= 200;
      }

      self.css(self.$video, {
        width: "".concat(w, "px"),
        marginLeft: "".concat(ml, "px"),
        height: "".concat(h, "px"),
        marginTop: "".concat(mt, "px")
      });
    }

    return imageData;
  }; // init video


  var defInitImg = Jarallax.prototype.initImg;

  Jarallax.prototype.initImg = function () {
    var self = this;
    var defaultResult = defInitImg.apply(self);

    if (!self.options.videoSrc) {
      self.options.videoSrc = self.$item.getAttribute('data-jarallax-video') || null;
    }

    if (self.options.videoSrc) {
      self.defaultInitImgResult = defaultResult;
      return true;
    }

    return defaultResult;
  };

  var defCanInitParallax = Jarallax.prototype.canInitParallax;

  Jarallax.prototype.canInitParallax = function () {
    var self = this;
    var defaultResult = defCanInitParallax.apply(self);

    if (!self.options.videoSrc) {
      return defaultResult;
    } // Init video api


    var video = new video_worker__WEBPACK_IMPORTED_MODULE_0__["default"](self.options.videoSrc, {
      autoplay: true,
      loop: self.options.videoLoop,
      showContols: false,
      startTime: self.options.videoStartTime || 0,
      endTime: self.options.videoEndTime || 0,
      mute: self.options.videoVolume ? 0 : 1,
      volume: self.options.videoVolume || 0
    });

    function resetDefaultImage() {
      if (self.image.$default_item) {
        self.image.$item = self.image.$default_item;
        self.image.$item.style.display = 'block'; // set image width and height

        self.coverImage();
        self.clipContainer();
        self.onScroll();
      }
    }

    if (video.isValid()) {
      // Force enable parallax.
      // When the parallax disabled on mobile devices, we still need to display videos.
      // https://github.com/nk-o/jarallax/issues/159
      if (this.options.disableParallax()) {
        defaultResult = true;
        self.image.position = 'absolute';
        self.options.type = 'scroll';
        self.options.speed = 1;
      } // if parallax will not be inited, we can add thumbnail on background.


      if (!defaultResult) {
        if (!self.defaultInitImgResult) {
          video.getImageURL(function (url) {
            // save default user styles
            var curStyle = self.$item.getAttribute('style');

            if (curStyle) {
              self.$item.setAttribute('data-jarallax-original-styles', curStyle);
            } // set new background


            self.css(self.$item, {
              'background-image': "url(\"".concat(url, "\")"),
              'background-position': 'center',
              'background-size': 'cover'
            });
          });
        } // init video

      } else {
        video.on('ready', function () {
          if (self.options.videoPlayOnlyVisible) {
            var oldOnScroll = self.onScroll;

            self.onScroll = function () {
              oldOnScroll.apply(self);

              if (!self.videoError && (self.options.videoLoop || !self.options.videoLoop && !self.videoEnded)) {
                if (self.isVisible()) {
                  video.play();
                } else {
                  video.pause();
                }
              }
            };
          } else {
            video.play();
          }
        });
        video.on('started', function () {
          self.image.$default_item = self.image.$item;
          self.image.$item = self.$video; // set video width and height

          self.image.width = self.video.videoWidth || 1280;
          self.image.height = self.video.videoHeight || 720;
          self.coverImage();
          self.clipContainer();
          self.onScroll(); // hide image

          if (self.image.$default_item) {
            self.image.$default_item.style.display = 'none';
          }
        });
        video.on('ended', function () {
          self.videoEnded = true;

          if (!self.options.videoLoop) {
            // show default image if Loop disabled.
            resetDefaultImage();
          }
        });
        video.on('error', function () {
          self.videoError = true; // show default image if video loading error.

          resetDefaultImage();
        });
        self.video = video; // set image if not exists

        if (!self.defaultInitImgResult) {
          // set empty image on self-hosted video if not defined
          self.image.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

          if ('local' !== video.type) {
            video.getImageURL(function (url) {
              self.image.bgImage = "url(\"".concat(url, "\")");
              self.init();
            });
            return false;
          }
        }
      }
    }

    return defaultResult;
  }; // Destroy video parallax


  var defDestroy = Jarallax.prototype.destroy;

  Jarallax.prototype.destroy = function () {
    var self = this;

    if (self.image.$default_item) {
      self.image.$item = self.image.$default_item;
      delete self.image.$default_item;
    }

    defDestroy.apply(self);
  };
}

/***/ })
/******/ ]);