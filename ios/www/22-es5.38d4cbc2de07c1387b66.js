function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,e,i){return e&&_defineProperties(n.prototype,e),i&&_defineProperties(n,i),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{x5bZ:function(n,e,i){"use strict";i.r(e),i.d(e,"RegisterPageModule",(function(){return h}));var o,t,b,a=i("ofXK"),l=i("3Pt+"),c=i("TEn/"),r=i("tyNb"),s=i("fXoL"),M=i("e8h1"),u=i("tnAE"),g=[{path:"",component:(o=function(){function n(e,i,o,t){_classCallCheck(this,n),this.navCtrl=e,this.storage=i,this.router=o,this.rest=t}return _createClass(n,[{key:"register",value:function(){var n={userType:this.userType,userPic:this.userPic,password:this.password,firstName:this.firstName,lastName:this.lastName,gender:this.gender,birthday:this.birthday,idNum:this.idNum,mobileNo:this.mobileNo,userEmail:this.userEmail,bloodGroup:this.bloodGroup,weight:this.weight,height:this.height,address:this.address,subDistrict:this.subDistrict,district:this.district,province:this.province,zipCode:this.zipCode,drugAllergy:this.drugAllergy,congenitalDisease:this.congenitalDisease,hospital:this.hospital,contactName:this.contactName,contactPhone:this.contactPhone,contactRelation:this.contactRelation,registDate:this.registDate,userStatus:"ACTIVE"};this.rest.register(n).then((function(e){console.log(n)})),this.goToLogin()}},{key:"goToHome",value:function(){this.navCtrl.navigateRoot("/home").then()}},{key:"goToLogin",value:function(){this.navCtrl.navigateRoot("/login").then()}},{key:"goToStep2",value:function(){this.navCtrl.navigateRoot("/member2").then()}},{key:"ngOnInit",value:function(){}}]),n}(),o.\u0275fac=function(n){return new(n||o)(s.Kb(c.M),s.Kb(M.b),s.Kb(r.g),s.Kb(u.a))},o.\u0275cmp=s.Eb({type:o,selectors:[["app-register"]],decls:146,vars:24,consts:[[1,"header"],["slot","start"],[1,"mycss1"],[1,"cardcss"],[1,"center"],[2,"width","100px","height","100px"],["src","../../assets/icon/images.png"],["position","floating",1,"inputcss"],["placeholder","\u0e42\u0e1b\u0e23\u0e14\u0e23\u0e30\u0e1a\u0e38","type","name",3,"ngModel","ngModelChange"],["placeholder","\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e27\u0e31\u0e19\u0e40\u0e14\u0e37\u0e2d\u0e19\u0e1b\u0e35\u0e40\u0e01\u0e34\u0e14",3,"ngModel","ngModelChange"],["placeholder","\u0e42\u0e1b\u0e23\u0e14\u0e23\u0e30\u0e1a\u0e38",3,"ngModel","ngModelChange"],["placeholder","Select One",3,"ngModel","ngModelChange"],["value","M"],["value","W"],["value","AB"],["value","A"],["value","B"],["value","O"],["placeholder","\u0e42\u0e1b\u0e23\u0e14\u0e23\u0e30\u0e1a\u0e38","type","number",3,"ngModel","ngModelChange"],["value","V"],["value","P"],["placeholder","\u0e42\u0e1b\u0e23\u0e14\u0e23\u0e30\u0e1a\u0e38","type","password",3,"ngModel","ngModelChange"],["position","floating"],["color","dark","checked","true"],["color","dark"],["href","#"],["expand","round","color","brown",1,"savecss",3,"click"]],template:function(n,e){1&n&&(s.Nb(0,"ion-header"),s.Nb(1,"ion-toolbar",0),s.Nb(2,"ion-buttons",1),s.Lb(3,"ion-menu-button"),s.Mb(),s.Nb(4,"ion-title"),s.ic(5," \u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19 "),s.Mb(),s.Mb(),s.Mb(),s.Nb(6,"ion-content",2),s.Nb(7,"ion-grid"),s.Nb(8,"ion-card",3),s.Nb(9,"ion-col",4),s.Nb(10,"ion-avatar",5),s.Lb(11,"img",6),s.Mb(),s.Mb(),s.Nb(12,"ion-item"),s.Nb(13,"ion-label",7),s.ic(14,"\u0e0a\u0e37\u0e48\u0e2d*"),s.Mb(),s.Nb(15,"ion-input",8),s.Vb("ngModelChange",(function(n){return e.firstName=n})),s.Mb(),s.Mb(),s.Nb(16,"ion-item"),s.Nb(17,"ion-label",7),s.ic(18,"\u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25*"),s.Mb(),s.Nb(19,"ion-input",8),s.Vb("ngModelChange",(function(n){return e.lastName=n})),s.Mb(),s.Mb(),s.Nb(20,"ion-item"),s.Nb(21,"ion-label",7),s.ic(22,"Email*"),s.Mb(),s.Nb(23,"ion-input",8),s.Vb("ngModelChange",(function(n){return e.userEmail=n})),s.Mb(),s.Mb(),s.Nb(24,"ion-item"),s.Nb(25,"ion-label",7),s.ic(26,"\u0e27\u0e31\u0e19\u0e40\u0e14\u0e37\u0e2d\u0e19\u0e1b\u0e35\u0e40\u0e01\u0e34\u0e14*"),s.Mb(),s.Nb(27,"ion-datetime",9),s.Vb("ngModelChange",(function(n){return e.birthday=n})),s.Mb(),s.Mb(),s.Nb(28,"ion-item"),s.Nb(29,"ion-label",7),s.ic(30,"\u0e40\u0e25\u0e02\u0e1a\u0e31\u0e15\u0e23\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e15\u0e31\u0e27\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e0a\u0e19*"),s.Mb(),s.Nb(31,"ion-input",10),s.Vb("ngModelChange",(function(n){return e.idNum=n})),s.Mb(),s.Mb(),s.Nb(32,"ion-item"),s.Nb(33,"ion-label",7),s.ic(34,"\u0e40\u0e1e\u0e28*"),s.Mb(),s.Nb(35,"ion-select",11),s.Vb("ngModelChange",(function(n){return e.gender=n})),s.Nb(36,"ion-select-option",12),s.ic(37,"Male"),s.Mb(),s.Nb(38,"ion-select-option",13),s.ic(39,"Female"),s.Mb(),s.Mb(),s.Mb(),s.Nb(40,"ion-item"),s.Nb(41,"ion-label",7),s.ic(42,"\u0e01\u0e23\u0e38\u0e4a\u0e1b\u0e40\u0e25\u0e37\u0e2d\u0e14"),s.Mb(),s.Nb(43,"ion-select",11),s.Vb("ngModelChange",(function(n){return e.bloodGroup=n})),s.Nb(44,"ion-select-option",14),s.ic(45,"AB"),s.Mb(),s.Nb(46,"ion-select-option",15),s.ic(47,"A"),s.Mb(),s.Nb(48,"ion-select-option",16),s.ic(49,"B"),s.Mb(),s.Nb(50,"ion-select-option",17),s.ic(51,"O"),s.Mb(),s.Mb(),s.Mb(),s.Nb(52,"ion-item"),s.Nb(53,"ion-label",7),s.ic(54,"\u0e19\u0e49\u0e33\u0e2b\u0e19\u0e31\u0e01"),s.Mb(),s.Nb(55,"ion-input",18),s.Vb("ngModelChange",(function(n){return e.weight=n})),s.Mb(),s.Mb(),s.Nb(56,"ion-item"),s.Nb(57,"ion-label",7),s.ic(58,"\u0e2a\u0e48\u0e27\u0e19\u0e2a\u0e39\u0e07"),s.Mb(),s.Nb(59,"ion-input",10),s.Vb("ngModelChange",(function(n){return e.height=n})),s.Mb(),s.Mb(),s.Nb(60,"ion-item"),s.Nb(61,"ion-label",7),s.ic(62,"\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48"),s.Mb(),s.Nb(63,"ion-input",10),s.Vb("ngModelChange",(function(n){return e.address=n})),s.Mb(),s.Mb(),s.Nb(64,"ion-item"),s.Nb(65,"ion-label",7),s.ic(66,"\u0e15\u0e33\u0e1a\u0e25"),s.Mb(),s.Nb(67,"ion-input",10),s.Vb("ngModelChange",(function(n){return e.subDistrict=n})),s.Mb(),s.Mb(),s.Nb(68,"ion-item"),s.Nb(69,"ion-label",7),s.ic(70,"\u0e2d\u0e33\u0e40\u0e20\u0e2d"),s.Mb(),s.Nb(71,"ion-input",10),s.Vb("ngModelChange",(function(n){return e.district=n})),s.Mb(),s.Mb(),s.Nb(72,"ion-item"),s.Nb(73,"ion-label",7),s.ic(74,"\u0e08\u0e31\u0e07\u0e2b\u0e27\u0e31\u0e14"),s.Mb(),s.Nb(75,"ion-input",10),s.Vb("ngModelChange",(function(n){return e.province=n})),s.Mb(),s.Mb(),s.Nb(76,"ion-item"),s.Nb(77,"ion-label",7),s.ic(78,"\u0e23\u0e2b\u0e31\u0e2a\u0e44\u0e1b\u0e23\u0e29\u0e13\u0e35\u0e22\u0e4c"),s.Mb(),s.Nb(79,"ion-input",10),s.Vb("ngModelChange",(function(n){return e.zipCode=n})),s.Mb(),s.Mb(),s.Nb(80,"ion-item"),s.Nb(81,"ion-label",7),s.ic(82,"\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34\u0e01\u0e32\u0e23\u0e41\u0e1e\u0e49\u0e22\u0e32"),s.Mb(),s.Nb(83,"ion-input",10),s.Vb("ngModelChange",(function(n){return e.drugAllergy=n})),s.Mb(),s.Mb(),s.Nb(84,"ion-item"),s.Nb(85,"ion-label",7),s.ic(86,"\u0e42\u0e23\u0e04\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e15\u0e31\u0e27"),s.Mb(),s.Nb(87,"ion-input",10),s.Vb("ngModelChange",(function(n){return e.congenitalDisease=n})),s.Mb(),s.Mb(),s.Nb(88,"ion-item"),s.Nb(89,"ion-label",7),s.ic(90,"\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25"),s.Mb(),s.Nb(91,"ion-input",10),s.Vb("ngModelChange",(function(n){return e.hospital=n})),s.Mb(),s.Mb(),s.Nb(92,"ion-item"),s.Nb(93,"ion-label",7),s.ic(94,"\u0e0a\u0e37\u0e48\u0e2d\u0e1c\u0e39\u0e49\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e44\u0e14\u0e49\u0e43\u0e19\u0e01\u0e23\u0e13\u0e35\u0e09\u0e38\u0e01\u0e40\u0e09\u0e34\u0e19"),s.Mb(),s.Nb(95,"ion-input",10),s.Vb("ngModelChange",(function(n){return e.contactName=n})),s.Mb(),s.Mb(),s.Nb(96,"ion-item"),s.Nb(97,"ion-label",7),s.ic(98,"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23\u0e1c\u0e39\u0e48\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e44\u0e14\u0e49"),s.Mb(),s.Nb(99,"ion-input",18),s.Vb("ngModelChange",(function(n){return e.contactPhone=n})),s.Mb(),s.Mb(),s.Nb(100,"ion-item"),s.Nb(101,"ion-label",7),s.ic(102,"\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e31\u0e21\u0e1e\u0e31\u0e19\u0e18\u0e4c"),s.Mb(),s.Nb(103,"ion-input",10),s.Vb("ngModelChange",(function(n){return e.contactRelation=n})),s.Mb(),s.Mb(),s.Nb(104,"ion-item"),s.Nb(105,"ion-label",7),s.ic(106,"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19*"),s.Mb(),s.Nb(107,"ion-select",11),s.Vb("ngModelChange",(function(n){return e.userType=n})),s.Nb(108,"ion-select-option",19),s.ic(109,"Volunteer"),s.Mb(),s.Nb(110,"ion-select-option",20),s.ic(111,"Patient"),s.Mb(),s.Mb(),s.Mb(),s.Nb(112,"ion-item"),s.Nb(113,"ion-label",7),s.ic(114,"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c*"),s.Mb(),s.Nb(115,"ion-input",10),s.Vb("ngModelChange",(function(n){return e.mobileNo=n})),s.Mb(),s.Mb(),s.Nb(116,"ion-item"),s.Nb(117,"ion-label",7),s.ic(118,"\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19*"),s.Mb(),s.Nb(119,"ion-input",21),s.Vb("ngModelChange",(function(n){return e.password=n})),s.Mb(),s.Mb(),s.Nb(120,"ion-item"),s.Nb(121,"ion-label",7),s.ic(122,"\u0e23\u0e39\u0e1b\u0e20\u0e32\u0e1e"),s.Mb(),s.Nb(123,"ion-input",10),s.Vb("ngModelChange",(function(n){return e.userPic=n})),s.Mb(),s.Mb(),s.Nb(124,"ion-row"),s.Nb(125,"ion-col"),s.Nb(126,"ion-label",22),s.ic(127,"\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22"),s.Mb(),s.Mb(),s.Mb(),s.Nb(128,"ion-row"),s.Nb(129,"ion-radio-group"),s.Nb(130,"ion-text"),s.ic(131,"\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34\u0e01\u0e32\u0e23\u0e41\u0e1e\u0e17\u0e22\u0e4c"),s.Mb(),s.Lb(132,"ion-radio",23),s.Nb(133,"ion-label"),s.ic(134," \u0e22\u0e34\u0e19\u0e22\u0e2d\u0e21"),s.Mb(),s.Lb(135,"ion-radio",24),s.Nb(136,"ion-label"),s.ic(137,"\u0e44\u0e21\u0e48\u0e22\u0e34\u0e19\u0e22\u0e2d\u0e21"),s.Mb(),s.Mb(),s.Mb(),s.Nb(138,"ion-row"),s.Nb(139,"a",25),s.ic(140,"\u0e19\u0e42\u0e22\u0e1a\u0e32\u0e22\u0e04\u0e27\u0e32\u0e21\u0e40\u0e1b\u0e47\u0e19\u0e2a\u0e48\u0e27\u0e19\u0e15\u0e31\u0e27"),s.Mb(),s.Mb(),s.Lb(141,"br"),s.Lb(142,"br"),s.Nb(143,"ion-col",4),s.Nb(144,"ion-button",26),s.Vb("click",(function(){return e.register()})),s.ic(145,"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01 "),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb()),2&n&&(s.Ab(15),s.ac("ngModel",e.firstName),s.Ab(4),s.ac("ngModel",e.lastName),s.Ab(4),s.ac("ngModel",e.userEmail),s.Ab(4),s.ac("ngModel",e.birthday),s.Ab(4),s.ac("ngModel",e.idNum),s.Ab(4),s.ac("ngModel",e.gender),s.Ab(8),s.ac("ngModel",e.bloodGroup),s.Ab(12),s.ac("ngModel",e.weight),s.Ab(4),s.ac("ngModel",e.height),s.Ab(4),s.ac("ngModel",e.address),s.Ab(4),s.ac("ngModel",e.subDistrict),s.Ab(4),s.ac("ngModel",e.district),s.Ab(4),s.ac("ngModel",e.province),s.Ab(4),s.ac("ngModel",e.zipCode),s.Ab(4),s.ac("ngModel",e.drugAllergy),s.Ab(4),s.ac("ngModel",e.congenitalDisease),s.Ab(4),s.ac("ngModel",e.hospital),s.Ab(4),s.ac("ngModel",e.contactName),s.Ab(4),s.ac("ngModel",e.contactPhone),s.Ab(4),s.ac("ngModel",e.contactRelation),s.Ab(4),s.ac("ngModel",e.userType),s.Ab(8),s.ac("ngModel",e.mobileNo),s.Ab(4),s.ac("ngModel",e.password),s.Ab(4),s.ac("ngModel",e.userPic))},directives:[c.p,c.I,c.e,c.x,c.H,c.k,c.o,c.f,c.j,c.c,c.t,c.u,c.s,c.S,l.d,l.e,c.l,c.R,c.D,c.E,c.N,c.C,c.A,c.G,c.z,c.P,c.d],styles:[".header[_ngcontent-%COMP%]{color:#fff;background:brown;font-family:Kanit,sans-serif}.header[_ngcontent-%COMP%], .mycss1[_ngcontent-%COMP%]{--background:brown}.cardcss[_ngcontent-%COMP%]{border-radius:20px;--background:#fff}.whitetext[_ngcontent-%COMP%]{color:#fff}.savecss[_ngcontent-%COMP%]{border-radius:50px;--font-color:#fff;background:brown}.inputcss[_ngcontent-%COMP%]{margin-bottom:5px}*[_ngcontent-%COMP%]{font-family:Kanit,sans-serif!important}.center[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-content:stretch;align-items:center}"]}),o)}],d=((b=function n(){_classCallCheck(this,n)}).\u0275mod=s.Ib({type:b}),b.\u0275inj=s.Hb({factory:function(n){return new(n||b)},imports:[[r.i.forChild(g)],r.i]}),b),h=((t=function n(){_classCallCheck(this,n)}).\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(n){return new(n||t)},imports:[[a.b,l.a,c.J,d]]}),t)}}]);