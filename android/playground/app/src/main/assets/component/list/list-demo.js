/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/99ead44ae17cbf382468a95f104e5bc6", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	__webpack_require__(15);
	  __weex_module__.exports = {
	    data: function () {return {
	      refresh_display : 'hide',
	      loading_display : 'hide',
	      backgroundColor: 'red',
	      composite: 'false',
	      shopList: [
	        {
	          id: 1,
	          scopeValue: 1,
	          PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	          PersonName: 'Mendeleyev',
	          PersonVisitTime: 'today',
	          shopDesc: 'Genius only means hard-working all one\'s life',
	          shopImgList: [{
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd2.alicdn.com/bao/uploaded/i2/TB1rtOnHpXXXXXLaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd4.alicdn.com/bao/uploaded/i4/TB15KrfFVXXXXXJXXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd2.alicdn.com/bao/uploaded/i2/TB1t5YBGVXXXXXcaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	          }],
	          shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopLikeText: '6',
	          shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopCommentText: '97',
	          shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	          shopLookText: '1003',
	          shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	          shareText: "10",

	        },
	        {
	          id: 2,
	          scopeValue: 2,
	          PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	          PersonName: 'Napoleon',
	          PersonVisitTime: 'yesterday',
	          shopDesc: 'The man who has made up his mind to win will never say "impossible "',
	          shopImgList: [{
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd1.alicdn.com/imgextra/i1/2655929383/TB2.qITjpXXXXcIXXXXXXXXXXXX_!!2655929383.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd3.alicdn.com/imgextra/i3/2655929383/TB2eWwZjpXXXXbHXXXXXXXXXXXX_!!2655929383.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd2.alicdn.com/imgextra/i2/2655929383/TB2tgQWjpXXXXbZXXXXXXXXXXXX_!!2655929383.jpg_220x220.jpg'
	          }],
	          shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopLikeText: '6',
	          shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopCommentText: '97',
	          shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	          shopLookText: '1003',
	          shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	          shareText: "10",

	        },
	        {
	          id: 3,
	          scopeValue: 3,
	          PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	          PersonName: 'Balzac',
	          PersonVisitTime: 'yesterday',
	          shopDesc: 'There is no such thing as a great talent without great will - power',
	          shopImgList: [{
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd1.alicdn.com/imgextra/i1/TB1AFz9LXXXXXbrXVXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd2.alicdn.com/imgextra/i2/2557954751/TB2is2njXXXXXatXpXXXXXXXXXX_!!2557954751.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd2.alicdn.com/imgextra/i2/2557954751/TB2PNYGjXXXXXbXXXXXXXXXXXXX_!!2557954751.jpg_220x220.jpg'
	          }],
	          shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopLikeText: '6',
	          shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopCommentText: '97',
	          shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	          shopLookText: '1003',
	          shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	          shareText: "10",

	        },
	        {
	          id: 4,
	          scopeValue: 4,
	          PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	          PersonName: 'Thomas Carlyle',
	          PersonVisitTime: '3 day ago',
	          shopDesc: 'Cease to struggle and you cease to live',
	          shopImgList: [{
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd4.alicdn.com/imgextra/i4/69426324/TB2zbwdfXXXXXa4XpXXXXXXXXXX_!!69426324.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd4.alicdn.com/imgextra/i4/69426324/TB2L7ZAfXXXXXXOXXXXXXXXXXXX_!!69426324.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd4.alicdn.com/imgextra/i4/69426324/TB2p9wufXXXXXbiXXXXXXXXXXXX_!!69426324.jpg_220x220.jpg'
	          }],
	          shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopLikeText: '6',
	          shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopCommentText: '97',
	          shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	          shopLookText: '1003',
	          shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	          shareText: "10",

	        },
	        {
	          id: 5,
	          scopeValue: 5,
	          PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	          PersonName: 'Addison',
	          PersonVisitTime: 'yesterday',
	          shopDesc: 'A strong man will struggle with the storms of fate',
	          shopImgList: [{
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1MQ8_KVXXXXaLXVXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd2.alicdn.com/imgextra/i2/53218032/TB2bGSqiXXXXXXyXpXXXXXXXXXX_!!53218032.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd2.alicdn.com/bao/uploaded/i2/TB1kP2zKFXXXXbIXXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	          }],
	          shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopLikeText: '6',
	          shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopCommentText: '97',
	          shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	          shopLookText: '1003',
	          shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	          shareText: "10",

	        },
	        {
	          id: 6,
	          scopeValue: 1,
	          PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	          PersonName: 'Ruskin',
	          PersonVisitTime: 'yesterday',
	          shopDesc: 'Living without an aim is like sailing without a compass',
	          shopImgList: [{
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd4.alicdn.com/bao/uploaded/i4/TB11yFnHXXXXXakaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd4.alicdn.com/imgextra/i4/32720628/TB2CRJUcXXXXXXwXpXXXXXXXXXX_!!32720628.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd2.alicdn.com/bao/uploaded/i2/TB17LUzHXXXXXcEaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	          }],
	          shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopLikeText: '6',
	          shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopCommentText: '97',
	          shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	          shopLookText: '1003',
	          shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	          shareText: "10",

	        },
	        {
	          id: 7,
	          scopeValue: 2,
	          PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	          PersonName: 'Yiming',
	          PersonVisitTime: 'today',
	          shopDesc: 'Live a noble and honest life. Reviving past times in your old age will help you to enjoy your life again',
	          shopImgList: [{
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd4.alicdn.com/bao/uploaded/i4/TB1hvNoJXXXXXaMaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd4.alicdn.com/imgextra/i4/2058567235/TB2V8iygFXXXXaRXpXXXXXXXXXX_!!2058567235.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd2.alicdn.com/imgextra/i2/2058567235/TB2im1QgFXXXXX8XXXXXXXXXXXX_!!2058567235.jpg_220x220.jpg'
	          }],
	          shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopLikeText: '6',
	          shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopCommentText: '97',
	          shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	          shopLookText: '1003',
	          shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	          shareText: "10",

	        },
	        {
	          id: 8,
	          scopeValue: 3,
	          PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	          PersonName: 'Brown',
	          PersonVisitTime: 'yesterday',
	          shopDesc: 'Behind every successful man there\'s a lot u unsuccessful years',
	          shopImgList: [{
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd1.alicdn.com/bao/uploaded/i1/TB18BZ2KFXXXXb8XFXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd1.alicdn.com/imgextra/i1/2775383848/TB2r012jVXXXXXHXpXXXXXXXXXX_!!2775383848.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd3.alicdn.com/imgextra/i3/2775383848/TB2iI9VjVXXXXaoXpXXXXXXXXXX_!!2775383848.jpg_220x220.jpg'
	          }],
	          shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopLikeText: '6',
	          shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopCommentText: '97',
	          shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	          shopLookText: '1003',
	          shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	          shareText: "10",

	        },
	        {
	          id: 9,
	          scopeValue: 4,
	          PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	          PersonName: 'YIMING',
	          PersonVisitTime: 'today',
	          shopDesc: 'Enrich your life today,. yesterday is history.tomorrow is mystery',
	          shopImgList: [{
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1JB.rLpXXXXXLXXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd4.alicdn.com/imgextra/i4/2702739128/TB2JdvmjVXXXXXjXXXXXXXXXXXX_!!2702739128.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd2.alicdn.com/imgextra/i2/2702739128/TB2A.e6jVXXXXXGXpXXXXXXXXXX_!!2702739128.jpg_220x220.jpg'
	          }],
	          shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopLikeText: '6',
	          shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopCommentText: '97',
	          shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	          shopLookText: '1003',
	          shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	          shareText: "10",

	        },
	        {
	          id: 10,
	          scopeValue: 5,
	          PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	          PersonName: 'YIMING',
	          PersonVisitTime: 'yesterday',
	          shopDesc: 'The secret of success is constancy to purpose',
	          shopImgList: [{
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd3.alicdn.com/bao/uploaded/i3/TB17zXOGXXXXXbEXVXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd1.alicdn.com/imgextra/i1/2265445951/TB22ACTbFXXXXXBXXXXXXXXXXXX_!!2265445951.jpg_220x220.jpg'
	          }, {
	            shopImgWidth: 220,
	            shopImgHeight: 220,
	            shopImg: 'https://gd3.alicdn.com/imgextra/i3/2265445951/TB2oXqUbFXXXXXIXXXXXXXXXXXX_!!2265445951.jpg_220x220.jpg'
	          }],
	          shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopLikeText: '6',
	          shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	          shopCommentText: '97',
	          shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	          shopLookText: '1003',
	          shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	          shareText: "10",
	        }
	      ],
	    }},
	    methods: {
	      oncellclick: function(e) {
	        this.$call('modal', 'toast', {
	          'message': 'row ' + e.target.attr.rownumber + ' clicked',
	          'duration': 2.0
	        });
	      },
	      onfixedclick: function(e) {
	        if (e.target.style.backgroundColor == 'red') {
	          this.backgroundColor = 'green';
	          this.composite = true;
	        }
	        else {
	          this.backgroundColor = 'red';
	          this.composite = false;
	        }
	      },
	      onloading: function (e) {
	        this.loading_display = "show"
	        setTimeout(function () {
	          this.loading_display = 'hide'
	        }.bind(this), 1000)
	      }
	    }

	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "playground-navpage",
	  "children": [
	    {
	      "type": "list",
	      "classList": [
	        "list"
	      ],
	      "attr": {
	        "loadmoreoffset": "2000"
	      },
	      "children": [
	        {
	          "type": "cell",
	          "append": "tree",
	          "classList": [
	            "cell"
	          ],
	          "events": {
	            "click": "oncellclick"
	          },
	          "attr": {
	            "rownumber": function () {return this.id},
	            "scope": function () {return this.scopeValue},
	            "composite": function () {return this.composite}
	          },
	          "repeat": function () {return this.shopList},
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "shopDiv"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "shopHeader"
	                  ],
	                  "style": {
	                    "flexDirection": "row"
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "style": {
	                        "flex": 2,
	                        "flexDirection": "row"
	                      },
	                      "children": [
	                        {
	                          "type": "div",
	                          "children": [
	                            {
	                              "type": "image",
	                              "style": {
	                                "width": 60,
	                                "height": 60
	                              },
	                              "attr": {
	                                "src": function () {return this.PersonPhoto}
	                              }
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "style": {
	                            "flexDirection": "column",
	                            "marginLeft": 5
	                          },
	                          "children": [
	                            {
	                              "type": "div",
	                              "style": {
	                                "marginTop": 5
	                              },
	                              "children": [
	                                {
	                                  "type": "text",
	                                  "style": {
	                                    "fontSize": 20
	                                  },
	                                  "attr": {
	                                    "value": function () {return this.PersonName}
	                                  }
	                                }
	                              ]
	                            },
	                            {
	                              "type": "div",
	                              "style": {
	                                "marginTop": 5
	                              },
	                              "children": [
	                                {
	                                  "type": "text",
	                                  "style": {
	                                    "fontSize": 20,
	                                    "color": "#cccccc"
	                                  },
	                                  "attr": {
	                                    "value": function () {return this.PersonVisitTime}
	                                  }
	                                }
	                              ]
	                            }
	                          ]
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "flex": 5,
	                        "flexDirection": "row"
	                      },
	                      "children": [
	                        {
	                          "type": "div",
	                          "style": {
	                            "flexDirection": "row",
	                            "marginLeft": 10,
	                            "marginTop": 10
	                          },
	                          "children": [
	                            {
	                              "type": "div",
	                              "children": [
	                                {
	                                  "type": "image",
	                                  "style": {
	                                    "width": 20,
	                                    "height": 20
	                                  },
	                                  "attr": {
	                                    "src": "https://img.alicdn.com/tps/i4/TB1zkDeIFXXXXXrXVXX07tlTXXX-200-200.png_88x88xz.jpg"
	                                  }
	                                }
	                              ]
	                            },
	                            {
	                              "type": "div",
	                              "children": [
	                                {
	                                  "type": "text",
	                                  "style": {
	                                    "fontSize": 20
	                                  },
	                                  "attr": {
	                                    "value": "Hope"
	                                  }
	                                }
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "style": {
	                            "position": "absolute",
	                            "left": 90,
	                            "top": 10,
	                            "flexDirection": "row"
	                          },
	                          "children": [
	                            {
	                              "type": "div",
	                              "children": [
	                                {
	                                  "type": "image",
	                                  "style": {
	                                    "width": 20,
	                                    "height": 20
	                                  },
	                                  "attr": {
	                                    "src": "https://img.alicdn.com/tps/i2/TB1hRb1IXXXXXX3XVXXXQaP.pXX-87-87.jpeg"
	                                  }
	                                }
	                              ]
	                            },
	                            {
	                              "type": "div",
	                              "children": [
	                                {
	                                  "type": "text",
	                                  "style": {
	                                    "fontSize": 20
	                                  },
	                                  "attr": {
	                                    "value": "Mem"
	                                  }
	                                }
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "style": {
	                            "position": "absolute",
	                            "left": 170,
	                            "top": 10,
	                            "flexDirection": "row"
	                          },
	                          "children": [
	                            {
	                              "type": "div",
	                              "children": [
	                                {
	                                  "type": "image",
	                                  "style": {
	                                    "width": 20,
	                                    "height": 20
	                                  },
	                                  "attr": {
	                                    "src": "https://img.alicdn.com/tps/i3/TB1DGkJJFXXXXaZXFXX07tlTXXX-200-200.png"
	                                  }
	                                }
	                              ]
	                            },
	                            {
	                              "type": "div",
	                              "children": [
	                                {
	                                  "type": "text",
	                                  "style": {
	                                    "fontSize": 20
	                                  },
	                                  "attr": {
	                                    "value": "auth"
	                                  }
	                                }
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "style": {
	                            "position": "absolute",
	                            "left": 250,
	                            "top": 10,
	                            "flexDirection": "row"
	                          },
	                          "children": [
	                            {
	                              "type": "div",
	                              "children": [
	                                {
	                                  "type": "image",
	                                  "style": {
	                                    "width": 20,
	                                    "height": 20
	                                  },
	                                  "attr": {
	                                    "src": "https://img.alicdn.com/tps/i1/TB1nFvPIXXXXXbUXXXXUAkPJpXX-87-87.png"
	                                  }
	                                }
	                              ]
	                            },
	                            {
	                              "type": "div",
	                              "children": [
	                                {
	                                  "type": "text",
	                                  "style": {
	                                    "fontSize": 20
	                                  },
	                                  "attr": {
	                                    "value": "Friend"
	                                  }
	                                }
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "style": {
	                            "position": "absolute",
	                            "left": 330,
	                            "top": 10,
	                            "flexDirection": "row"
	                          },
	                          "children": [
	                            {
	                              "type": "div",
	                              "children": [
	                                {
	                                  "type": "image",
	                                  "style": {
	                                    "width": 20,
	                                    "height": 20
	                                  },
	                                  "attr": {
	                                    "src": "https://img.alicdn.com/tps/i2/TB1CpD7IXXXXXbSXXXXUAkPJpXX-87-87.png"
	                                  }
	                                }
	                              ]
	                            },
	                            {
	                              "type": "div",
	                              "children": [
	                                {
	                                  "type": "text",
	                                  "style": {
	                                    "fontSize": 20
	                                  },
	                                  "attr": {
	                                    "value": "issue"
	                                  }
	                                }
	                              ]
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "style": {
	                            "position": "absolute",
	                            "left": 410,
	                            "top": 10,
	                            "flexDirection": "row"
	                          },
	                          "children": [
	                            {
	                              "type": "div",
	                              "children": [
	                                {
	                                  "type": "image",
	                                  "style": {
	                                    "width": 20,
	                                    "height": 20
	                                  },
	                                  "attr": {
	                                    "src": "https://gtms02.alicdn.com/tps/i2/TB11ZZfIVXXXXbMXFXXEDhGGXXX-32-32.png"
	                                  }
	                                }
	                              ]
	                            },
	                            {
	                              "type": "div",
	                              "children": [
	                                {
	                                  "type": "text",
	                                  "style": {
	                                    "fontSize": 20
	                                  },
	                                  "attr": {
	                                    "value": "super"
	                                  }
	                                }
	                              ]
	                            }
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "shopBody"
	                  ],
	                  "style": {
	                    "flexDirection": "column"
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "classList": [
	                        "descDiv"
	                      ],
	                      "style": {
	                        "marginTop": 10,
	                        "marginLeft": 10
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "shopDesc"
	                          ],
	                          "style": {
	                            "fontSize": 25
	                          },
	                          "attr": {
	                            "value": function () {return this.shopDesc}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "flexDirection": "row"
	                      },
	                      "children": [
	                        {
	                          "type": "div",
	                          "classList": [
	                            "imgDiv"
	                          ],
	                          "style": {
	                            "flex": 1,
	                            "flexDirection": "column",
	                            "margin": 10
	                          },
	                          "repeat": function () {return this.shopImgList},
	                          "children": [
	                            {
	                              "type": "div",
	                              "children": [
	                                {
	                                  "type": "image",
	                                  "classList": [
	                                    "shopImg"
	                                  ],
	                                  "style": {
	                                    "width": function () {return this.shopImgWidth},
	                                    "height": function () {return this.shopImgHeight}
	                                  },
	                                  "attr": {
	                                    "src": function () {return this.shopImg}
	                                  }
	                                }
	                              ]
	                            },
	                            {
	                              "type": "div",
	                              "style": {
	                                "flex": 1,
	                                "marginTop": 10,
	                                "flexDirection": "row"
	                              },
	                              "children": [
	                                {
	                                  "type": "div",
	                                  "style": {
	                                    "flex": 1,
	                                    "justifyContent": "center",
	                                    "flexDirection": "row"
	                                  },
	                                  "children": [
	                                    {
	                                      "type": "div",
	                                      "children": [
	                                        {
	                                          "type": "image",
	                                          "style": {
	                                            "width": 20,
	                                            "height": 20
	                                          },
	                                          "attr": {
	                                            "src": "https://img.alicdn.com/tps/i1/TB1nFvPIXXXXXbUXXXXUAkPJpXX-87-87.png"
	                                          }
	                                        }
	                                      ]
	                                    },
	                                    {
	                                      "type": "div",
	                                      "style": {
	                                        "marginLeft": 5
	                                      },
	                                      "children": [
	                                        {
	                                          "type": "text",
	                                          "style": {
	                                            "fontSize": 20,
	                                            "textAlign": "center"
	                                          },
	                                          "attr": {
	                                            "value": "Up"
	                                          }
	                                        }
	                                      ]
	                                    }
	                                  ]
	                                },
	                                {
	                                  "type": "div",
	                                  "style": {
	                                    "flex": 1,
	                                    "justifyContent": "center",
	                                    "flexDirection": "row"
	                                  },
	                                  "children": [
	                                    {
	                                      "type": "div",
	                                      "children": [
	                                        {
	                                          "type": "image",
	                                          "style": {
	                                            "width": 20,
	                                            "height": 20
	                                          },
	                                          "attr": {
	                                            "src": "https://img.alicdn.com/tps/i2/TB1CpD7IXXXXXbSXXXXUAkPJpXX-87-87.png"
	                                          }
	                                        }
	                                      ]
	                                    },
	                                    {
	                                      "type": "div",
	                                      "style": {
	                                        "marginLeft": 5
	                                      },
	                                      "children": [
	                                        {
	                                          "type": "text",
	                                          "style": {
	                                            "fontSize": 20,
	                                            "textAlign": "center"
	                                          },
	                                          "attr": {
	                                            "value": "down"
	                                          }
	                                        }
	                                      ]
	                                    }
	                                  ]
	                                }
	                              ]
	                            }
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "shopFooter"
	                  ],
	                  "style": {
	                    "flexDirection": "row",
	                    "marginTop": 10,
	                    "marginLeft": 10,
	                    "justifyContent": "flex-end"
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "style": {
	                        "marginRight": 5
	                      },
	                      "children": [
	                        {
	                          "type": "image",
	                          "classList": [
	                            "shopLikeImg",
	                            "smallImg"
	                          ],
	                          "attr": {
	                            "src": function () {return this.shopLikeImg}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "marginRight": 15
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "shopLikeText"
	                          ],
	                          "style": {
	                            "fontSize": 20
	                          },
	                          "attr": {
	                            "value": function () {return this.shopLikeText}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "marginRight": 5
	                      },
	                      "children": [
	                        {
	                          "type": "image",
	                          "classList": [
	                            "shopCommentImg",
	                            "smallImg"
	                          ],
	                          "attr": {
	                            "src": function () {return this.shopCommentImg}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "marginRight": 15
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "shopCommentText"
	                          ],
	                          "style": {
	                            "fontSize": 20
	                          },
	                          "attr": {
	                            "value": function () {return this.shopCommentText}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "marginRight": 5
	                      },
	                      "children": [
	                        {
	                          "type": "image",
	                          "classList": [
	                            "shopLookImg",
	                            "smallImg"
	                          ],
	                          "attr": {
	                            "src": function () {return this.shopLookImg}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "marginRight": 15
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "shopLookText"
	                          ],
	                          "style": {
	                            "fontSize": 20
	                          },
	                          "attr": {
	                            "value": function () {return this.shopLookText}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "marginRight": 5
	                      },
	                      "children": [
	                        {
	                          "type": "image",
	                          "classList": [
	                            "shareImg",
	                            "smallImg"
	                          ],
	                          "attr": {
	                            "src": function () {return this.shareImg}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "marginRight": 20
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "shareText"
	                          ],
	                          "style": {
	                            "fontSize": 20
	                          },
	                          "attr": {
	                            "value": function () {return this.shareText}
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "loading",
	          "classList": [
	            "refresh-view"
	          ],
	          "attr": {
	            "display": function () {return this.loading_display}
	          },
	          "events": {
	            "loading": "onloading"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "refresh-arrow"
	              ],
	              "style": {
	                "textAlign": "center",
	                "color": "rgb(238,162,54)"
	              },
	              "shown": function () {return (this.refresh_display==='hide')},
	              "attr": {
	                "value": "Load more"
	              }
	            },
	            {
	              "type": "loading-indicator",
	              "style": {
	                "height": 60,
	                "width": 60,
	                "color": "#3192e1"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "flexRow": {
	    "flexDirection": "row"
	  },
	  "flexColumn": {
	    "flexDirection": "column"
	  },
	  "fixed": {
	    "position": "fixed",
	    "bottom": 50,
	    "left": 50,
	    "width": 300,
	    "height": 50,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "shopImg": {
	    "width": 220,
	    "height": 220
	  },
	  "list": {
	    "flexDirection": "column",
	    "overflow": "hidden",
	    "width": 750,
	    "height": 1200,
	    "backgroundColor": "#dddddd"
	  },
	  "cell": {
	    "backgroundColor": "#dddddd",
	    "flexDirection": "column",
	    "width": 750
	  },
	  "shopDiv": {
	    "flexDirection": "column",
	    "backgroundColor": "#ffffff",
	    "margin": 5,
	    "padding": 10,
	    "borderWidth": 1,
	    "borderColor": "#cccccc",
	    "overflow": "visible"
	  },
	  "shopRowList": {
	    "flexDirection": "column",
	    "borderWidth": 1,
	    "borderColor": "#cccccc",
	    "overflow": "visible",
	    "margin": 5,
	    "padding": 10,
	    "backgroundColor": "#ffffff"
	  },
	  "shopHeader": {
	    "flexDirection": "row",
	    "width": 720
	  },
	  "shopFooter": {
	    "flexDirection": "row",
	    "width": 720
	  },
	  "smallImg": {
	    "width": 20,
	    "height": 20
	  },
	  "refresh-view": {
	    "height": 120,
	    "width": 750,
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/99ead44ae17cbf382468a95f104e5bc6", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/index", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __webpack_require__(3);
	  __webpack_require__(4);
	  __webpack_require__(5);
	  __webpack_require__(6);
	  __webpack_require__(7);
	  __webpack_require__(8);
	  __webpack_require__(9);
	  __webpack_require__(10);
	  __webpack_require__(11);
	  __webpack_require__(12);
	  __webpack_require__(13);

	})

/***/ },
/* 3 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-button", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      type: 'default',
	      size: 'large',
	      value: ''
	    }},
	    methods: {
	    }
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return ['btn', 'btn-' + (this.type), 'btn-sz-' + (this.size)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['btn-txt', 'btn-txt-' + (this.type), 'btn-txt-sz-' + (this.size)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "btn": {
	    "marginBottom": 0,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#333333"
	  },
	  "btn-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "borderColor": "rgb(40,96,144)"
	  },
	  "btn-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "borderColor": "rgb(76,174,76)"
	  },
	  "btn-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "borderColor": "rgb(70,184,218)"
	  },
	  "btn-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "borderColor": "rgb(238,162,54)"
	  },
	  "btn-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "borderColor": "rgb(212,63,58)"
	  },
	  "btn-link": {
	    "borderColor": "rgba(0,0,0,0)",
	    "borderRadius": 0
	  },
	  "btn-txt-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-txt-primary": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-success": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-info": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-warning": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-danger": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-link": {
	    "color": "rgb(51,122,183)"
	  },
	  "btn-sz-large": {
	    "width": 300,
	    "height": 100,
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 40,
	    "paddingRight": 40,
	    "borderRadius": 15
	  },
	  "btn-sz-middle": {
	    "width": 240,
	    "height": 80,
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderRadius": 10
	  },
	  "btn-sz-small": {
	    "width": 170,
	    "height": 60,
	    "paddingTop": 12,
	    "paddingBottom": 12,
	    "paddingLeft": 25,
	    "paddingRight": 25,
	    "borderRadius": 7
	  },
	  "btn-txt-sz-large": {
	    "fontSize": 45
	  },
	  "btn-txt-sz-middle": {
	    "fontSize": 35
	  },
	  "btn-txt-sz-small": {
	    "fontSize": 30
	  }
	})
	})

/***/ },
/* 4 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-hn", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      level: 1,
	      value: ''
	    }},
	    methods: {}
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return ['h' + (this.level)]},
	  "style": {
	    "justifyContent": "center"
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['txt-h' + (this.level)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "h1": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h2": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h3": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "txt-h1": {
	    "fontSize": 70
	  },
	  "txt-h2": {
	    "fontSize": 52
	  },
	  "txt-h3": {
	    "fontSize": 42
	  }
	})
	})

/***/ },
/* 5 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-list-item", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      bgColor: '#ffffff'
	    }},
	    methods: {
	      touchstart: function() {
	        // FIXME android touch
	        // TODO adaptive opposite bgColor
	//        this.bgColor = '#e6e6e6';
	      },
	      touchend: function() {
	        // FIXME android touchend not triggered
	//        this.bgColor = '#ffffff';
	      }
	    }
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "item"
	  ],
	  "events": {
	    "touchstart": "touchstart",
	    "touchend": "touchend"
	  },
	  "style": {
	    "backgroundColor": function () {return this.bgColor}
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "item": {
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 35,
	    "paddingRight": 35,
	    "height": 160,
	    "justifyContent": "center",
	    "borderBottomWidth": 1,
	    "borderColor": "#dddddd"
	  }
	})
	})

/***/ },
/* 6 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-panel", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      type: 'default',
	      title: '',
	      paddingBody: 20,
	      paddingHead: 20,
	      dataClass: '', // FIXME transfer class
	      border: 0
	    }},
	    ready: function() {
	    }
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return ['panel', 'panel-' + (this.type)]},
	  "style": {
	    "borderWidth": function () {return this.border}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['panel-header', 'panel-header-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingHead},
	        "paddingBottom": function () {return this.paddingHead},
	        "paddingLeft": function () {return this.paddingHead*1.5},
	        "paddingRight": function () {return this.paddingHead*1.5}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['panel-body', 'panel-body-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingBody},
	        "paddingBottom": function () {return this.paddingBody},
	        "paddingLeft": function () {return this.paddingBody*1.5},
	        "paddingRight": function () {return this.paddingBody*1.5}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "panel": {
	    "marginBottom": 20,
	    "backgroundColor": "#ffffff",
	    "borderColor": "#dddddd",
	    "borderWidth": 1
	  },
	  "panel-primary": {
	    "borderColor": "rgb(40,96,144)"
	  },
	  "panel-success": {
	    "borderColor": "rgb(76,174,76)"
	  },
	  "panel-info": {
	    "borderColor": "rgb(70,184,218)"
	  },
	  "panel-warning": {
	    "borderColor": "rgb(238,162,54)"
	  },
	  "panel-danger": {
	    "borderColor": "rgb(212,63,58)"
	  },
	  "panel-header": {
	    "backgroundColor": "#f5f5f5",
	    "fontSize": 40,
	    "color": "#333333"
	  },
	  "panel-header-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "color": "#ffffff"
	  },
	  "panel-header-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "color": "#ffffff"
	  },
	  "panel-header-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "color": "#ffffff"
	  },
	  "panel-header-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "color": "#ffffff"
	  },
	  "panel-header-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "color": "#ffffff"
	  },
	  "panel-body": {}
	})
	})

/***/ },
/* 7 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-tip", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      type: 'success',
	      value: ''
	    }}
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return ['tip', 'tip-' + (this.type)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['tip-txt', 'tip-txt-' + (this.type)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "tip": {
	    "paddingLeft": 36,
	    "paddingRight": 36,
	    "paddingTop": 36,
	    "paddingBottom": 36,
	    "borderRadius": 10
	  },
	  "tip-txt": {
	    "fontSize": 28
	  },
	  "tip-success": {
	    "backgroundColor": "#dff0d8",
	    "borderColor": "#d6e9c6"
	  },
	  "tip-txt-success": {
	    "color": "#3c763d"
	  },
	  "tip-info": {
	    "backgroundColor": "#d9edf7",
	    "borderColor": "#bce8f1"
	  },
	  "tip-txt-info": {
	    "color": "#31708f"
	  },
	  "tip-warning": {
	    "backgroundColor": "#fcf8e3",
	    "borderColor": "#faebcc"
	  },
	  "tip-txt-warning": {
	    "color": "#8a6d3b"
	  },
	  "tip-danger": {
	    "backgroundColor": "#f2dede",
	    "borderColor": "#ebccd1"
	  },
	  "tip-txt-danger": {
	    "color": "#a94442"
	  }
	})
	})

/***/ },
/* 8 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-countdown", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	__weex_module__.exports = {
	    data: function () {return {
	        now: 0,
	        remain: 0,
	        time: {
	            elapse: 0,
	            D: '0',
	            DD: '0',
	            h: '0',
	            hh: '00',
	            H: '0',
	            HH: '0',
	            m: '0',
	            mm: '00',
	            M: '0',
	            MM: '0',
	            s: '0',
	            ss: '00',
	            S: '0',
	            SS: '0'
	        },
	        outofview: false
	    }},
	    ready: function() {
	        if (this.remain <= 0) {
	            return;
	        }
	        // this.isWeb = this.$getConfig().env.platform === 'Web';
	        this.now = Date.now();
	        this.nextTick();
	    },
	    methods: {
	        nextTick: function() {
	            if (this.outofview) {
	                setTimeout(this.nextTick.bind(this), 1000);
	            } else {
	                this.time.elapse = parseInt((Date.now() - this.now) / 1000);

	                if (this.calc()) {
	                    this.$emit('tick', Object.assign({}, this.time));
	                    setTimeout(this.nextTick.bind(this), 1000);
	                } else {
	                    this.$emit('alarm', Object.assign({}, this.time));
	                }
	                this._app.updateActions(); 
	            }
	        },
	        format: function(str) {
	            if (str.length >= 2) {
	                return str;
	            } else {
	                return '0' + str;
	            }
	        },
	        calc: function() {
	            var remain = this.remain - this.time.elapse;
	            if (remain < 0) {
	                remain = 0;
	            }
	            this.time.D = String(parseInt(remain / 86400));
	            this.time.DD = this.format(this.time.D);
	            this.time.h = String(parseInt((remain - parseInt(this.time.D) * 86400) / 3600));
	            this.time.hh = this.format(this.time.h);
	            this.time.H = String(parseInt(remain / 3600));
	            this.time.HH = this.format(this.time.H);
	            this.time.m = String(parseInt((remain - parseInt(this.time.H) * 3600) / 60));
	            this.time.mm = this.format(this.time.m);
	            this.time.M = String(parseInt(remain / 60));
	            this.time.MM = this.format(this.time.M);
	            this.time.s = String(remain - parseInt(this.time.M) * 60);
	            this.time.ss = this.format(this.time.s);
	            this.time.S = String(remain);
	            this.time.SS = this.format(this.time.S);
	            // console.log(remain, this.D, this.h, this.hh, this.H, this.HH, this.m, this.MM, this.s, this.ss, this.S, this.SS);
	            return remain > 0;
	        },
	        appeared: function() {
	            this.outofview = false;
	        },
	        disappeared: function() {
	            this.outofview = true;
	        }
	    }
	}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "style": {
	    "overflow": "hidden",
	    "flexDirection": "row"
	  },
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wrap": {
	    "overflow": "hidden"
	  }
	})
	})

/***/ },
/* 9 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-marquee", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	__weex_module__.exports = {
	    data: function () {return {
	        step: 0,
	        count: 0,
	        index: 1,
	        duration: 0,
	        interval: 0,
	        outofview: false
	    }},
	    ready: function () {
	        if (this.interval > 0
	                && this.step > 0
	                && this.duration > 0) {
	            this.nextTick();    
	        }
	    },
	    methods: {
	        nextTick: function() {
	            var self = this;
	            if (this.outofview) {
	                setTimeout(self.nextTick.bind(self), self.interval);
	            } else {
	                setTimeout(function() {
	                    self.animation(self.nextTick.bind(self));
	                }, self.interval);
	            }
	        },
	        animation: function(cb) {
	            var self = this;
	            var offset = -self.step * self.index;
	            var $animation = __weex_require__('@weex-module/animation');
	            $animation.transition(this.$el('anim'), {
	              styles: {
	                transform: 'translateY(' + String(offset) + 'px) translateZ(0)'
	              },
	              timingFunction: 'ease',
	              duration: self.duration
	            }, function() {
	                self.index = (self.index + 1) % (self.count);
	                self.$emit('change', {
	                    index: self.index,
	                    count: self.count
	                });
	                cb && cb();
	            });
	        },
	        appeared: function() {
	            this.outofview = false;
	        },
	        disappeared: function() {
	            this.outofview = true;
	        }
	    }
	}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "wrap"
	  ],
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "div",
	      "id": "anim",
	      "classList": [
	        "anim"
	      ],
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wrap": {
	    "overflow": "hidden",
	    "position": "relative"
	  },
	  "anim": {
	    "flexDirection": "column",
	    "position": "absolute",
	    "transform": "translateY(0) translateZ(0)"
	  }
	})
	})

/***/ },
/* 10 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-navbar", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	          dataRole: 'navbar',

	          //导航条背景色
	          backgroundColor: 'black',

	          //导航条高度
	          height: 88,

	          //导航条标题 
	          title: "",

	          //导航条标题颜色
	          titleColor: 'black',

	          //右侧按钮图片
	          rightItemSrc: '',

	          //右侧按钮标题
	          rightItemTitle: '',

	          //右侧按钮标题颜色
	          rightItemColor: 'black',

	          //左侧按钮图片
	          leftItemSrc: '',

	          //左侧按钮标题
	          leftItemTitle: '',

	          //左侧按钮颜色
	          leftItemColor: 'black',
	        }},
	        methods: {
	          onclickrightitem: function (e) {
	            this.$dispatch('naviBar.rightItem.click', {});
	          },
	          onclickleftitem: function (e) {
	            this.$dispatch('naviBar.leftItem.click', {});
	          }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "height": function () {return this.height},
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "attr": {
	    "dataRole": function () {return this.dataRole}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "right-text"
	      ],
	      "style": {
	        "color": function () {return this.rightItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "right",
	        "value": function () {return this.rightItemTitle}
	      },
	      "shown": function () {return !this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "right-image"
	      ],
	      "attr": {
	        "naviItemPosition": "right",
	        "src": function () {return this.rightItemSrc}
	      },
	      "shown": function () {return this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "left-text"
	      ],
	      "style": {
	        "color": function () {return this.leftItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "left",
	        "value": function () {return this.leftItemTitle}
	      },
	      "shown": function () {return !this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "left-image"
	      ],
	      "attr": {
	        "naviItemPosition": "left",
	        "src": function () {return this.leftItemSrc}
	      },
	      "shown": function () {return this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "center-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "naviItemPosition": "center",
	        "value": function () {return this.title}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750
	  },
	  "right-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "right": 32,
	    "textAlign": "right",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "left": 32,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "center-text": {
	    "position": "absolute",
	    "bottom": 25,
	    "left": 172,
	    "right": 172,
	    "textAlign": "center",
	    "fontSize": 36,
	    "fontWeight": "bold"
	  },
	  "left-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "left": 28,
	    "width": 50,
	    "height": 50
	  },
	  "right-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "right": 28,
	    "width": 50,
	    "height": 50
	  }
	})
	})

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/wxc-navpage", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(10);

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "wxc-navbar",
	      "attr": {
	        "dataRole": function () {return this.dataRole},
	        "height": function () {return this.height},
	        "backgroundColor": function () {return this.backgroundColor},
	        "title": function () {return this.title},
	        "titleColor": function () {return this.titleColor},
	        "leftItemSrc": function () {return this.leftItemSrc},
	        "leftItemTitle": function () {return this.leftItemTitle},
	        "leftItemColor": function () {return this.leftItemColor},
	        "rightItemSrc": function () {return this.rightItemSrc},
	        "rightItemTitle": function () {return this.rightItemTitle},
	        "rightItemColor": function () {return this.rightItemColor}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "wrapper"
	      ],
	      "style": {
	        "marginTop": function () {return this.height}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "width": 750
	  }
	})
	})

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/wxc-tabbar", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(13);

	;
	    __weex_module__.exports = {
	        data: function () {return {
	          tabItems: [ ],
	          selectedIndex: 0,
	          selectedColor: '#ff0000',
	          unselectedColor: '#000000',
	        }},
	        created: function () {
	          this.selected(this.selectedIndex);

	          this.$on('tabItem.onClick',function(e){
	            var detail= e.detail;
	            this.selectedIndex = detail.index;
	            this.selected(detail.index);

	            var params = {
	              index: detail.index
	            };
	            this.$dispatch('tabBar.onClick', params);
	          });
	        },
	        methods: {
	            selected: function(index) {
	              for(var i = 0; i < this.tabItems.length; i++) {
	                var tabItem = this.tabItems[i];
	                if(i == index){
	                  tabItem.icon = tabItem.selectedImage;
	                  tabItem.titleColor = this.selectedColor;
	                  tabItem.visibility = 'visible';
	                }
	                else {
	                  tabItem.icon = tabItem.image;
	                  tabItem.titleColor = this.unselectedColor;
	                  tabItem.visibility = 'hidden';
	                }
	              }
	            },  
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "embed",
	      "classList": [
	        "content"
	      ],
	      "style": {
	        "visibility": function () {return this.visibility}
	      },
	      "repeat": function () {return this.tabItems},
	      "attr": {
	        "src": function () {return this.src},
	        "type": "weex"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "tabbar"
	      ],
	      "append": "tree",
	      "children": [
	        {
	          "type": "wxc-tabitem",
	          "repeat": function () {return this.tabItems},
	          "attr": {
	            "index": function () {return this.index},
	            "icon": function () {return this.icon},
	            "title": function () {return this.title},
	            "titleColor": function () {return this.titleColor}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 88
	  },
	  "tabbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 88
	  }
	})
	})

/***/ },
/* 13 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-tabitem", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	          index: 0,
	          title: '',
	          titleColor: '#000000',
	          icon: '',
	          backgroundColor: '#ffffff',
	        }},
	        methods: {
	          onclickitem: function (e) {
	            var vm = this;
	            var params = {
	              index: vm.index
	            };
	            vm.$dispatch('tabItem.onClick', params);
	          }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "events": {
	    "click": "onclickitem"
	  },
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "top-line"
	      ],
	      "attr": {
	        "src": "http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "tab-icon"
	      ],
	      "attr": {
	        "src": function () {return this.icon}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "tab-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 88
	  },
	  "top-line": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 2
	  },
	  "tab-icon": {
	    "marginTop": 5,
	    "width": 40,
	    "height": 40
	  },
	  "tab-text": {
	    "marginTop": 5,
	    "textAlign": "center",
	    "fontSize": 20
	  }
	})
	})

/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/playground-navpage", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __webpack_require__(2);
	    __weex_module__.exports = {
	        data: function () {return {
	            navBarHeight: 88,
	            title: '',
	            rightItemSrc: 'http://gw.alicdn.com/mt/TB17Re.LpXXXXajXpXXXXXXXXXX-46-46.png'
	        }},
	        created: function () {
	            var config = this.$getConfig();
	            var src = config.bundleUrl;
	            if (src != null) {
	                var end = src.lastIndexOf('?');
	                end = end < 0 ? src.length : end;
	                console.log("end:" + end);
	                this.title = src.substring(src.lastIndexOf("/") + 1, end);
	            }
	            if (src.indexOf('file') >= 0) {
	                this.rightItemSrc = '';
	            }
	            this.$on('naviBar.rightItem.click', function (e) {
	                __weex_require__("@weex-module/event").refresh(this.$getConfig().bundleUrl);
	            });
	            this.$on('naviBar.leftItem.click', function (e) {
	                var vm = this;
	                var params = {
	                    'animated': 'true'
	                }
	                vm.$call('navigator', 'pop', params, function () {
	                });
	            });
	        }, methods: {}
	    }


	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "wxc-navpage",
	  "attr": {
	    "height": function () {return this.navBarHeight},
	    "backgroundColor": "#3F51B5",
	    "leftItemSrc": "http://gw.alicdn.com/mt/TB1z6ilMVXXXXciXVXXXXXXXXXX-46-46.png",
	    "leftItemTitle": "Hello",
	    "leftItemColor": "white",
	    "titleColor": "white",
	    "title": function () {return this.title},
	    "rightItemSrc": function () {return this.rightItemSrc}
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	})
	})

/***/ }
/******/ ]);