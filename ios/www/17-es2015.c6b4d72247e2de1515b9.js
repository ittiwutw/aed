(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{aaio:function(t,n,e){"use strict";e.r(n),e.d(n,"AddAed2PageModule",(function(){return u}));var o=e("ofXK"),i=e("3Pt+"),c=e("TEn/"),r=e("tyNb"),s=e("mrSG"),a=e("fXoL"),b=e("e8h1"),l=e("tk/3");const d=[{path:"",component:(()=>{class t{constructor(t,n,e){this.storage=t,this.http=n,this.navCtrl=e,this.storage.get("api_base_url").then(t=>{this.api_base_url=t,this.getAllMatchine()})}setData(t,n){return Object(s.a)(this,void 0,void 0,(function*(){yield this.storage.set(t,n).then(()=>!0)}))}getData(t){return Object(s.a)(this,void 0,void 0,(function*(){yield this.storage.get(t).then(t=>t)}))}ngOnInit(){}goToHome(){this.navCtrl.navigateRoot("/home").then()}getAllMatchine(){this.http.get(this.api_base_url+"/getAllMachine",{}).subscribe(t=>{const n=JSON.stringify(t),e=JSON.parse(n);this.datas=e})}goToSuccess(){this.navCtrl.navigateRoot("/success-aed").then()}}return t.\u0275fac=function(n){return new(n||t)(a.Kb(b.b),a.Kb(l.a),a.Kb(c.M))},t.\u0275cmp=a.Eb({type:t,selectors:[["app-add-aed2"]],decls:32,vars:0,consts:[[1,"header"],["slot","start"],[1,"mycss1"],["justify-content-center","","align-items-center",""],["justify-content-center","","align-items-center","",1,"cardcss",2,"height","630px"],[1,"progressbar"],[2,"font-size","10px"],["align-items-center","","justify-content-center","",2,"height","20%"],[2,"width","100%","text-align","center","font-size","20px"],["text-center",""],["align-items-center","","justify-content-center","",2,"height","30%"],[2,"width","100%"],["text-center","",2,"background-color","#d7d8da","padding","10px","border-radius","6px"],[1,"center"],["expand","round","color","brown",1,"buttoncss",3,"click"]],template:function(t,n){1&t&&(a.Nb(0,"ion-header"),a.Nb(1,"ion-toolbar",0),a.Nb(2,"ion-buttons",1),a.Lb(3,"ion-menu-button"),a.Mb(),a.Nb(4,"ion-title"),a.ic(5," \u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07 AED "),a.Mb(),a.Mb(),a.Mb(),a.Nb(6,"ion-content",2),a.Nb(7,"ion-grid",3),a.Nb(8,"ion-card",4),a.Nb(9,"div",5),a.Nb(10,"ul"),a.Nb(11,"li"),a.Nb(12,"p",6),a.ic(13,"\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07 AED"),a.Mb(),a.Mb(),a.Nb(14,"li"),a.Nb(15,"p",6),a.ic(16,"\u0e23\u0e2b\u0e31\u0e2a\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07"),a.Mb(),a.Mb(),a.Nb(17,"li"),a.Nb(18,"p",6),a.ic(19,"\u0e40\u0e2a\u0e23\u0e47\u0e08\u0e2a\u0e34\u0e49\u0e19"),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Nb(20,"ion-col"),a.Nb(21,"ion-row",7),a.Nb(22,"div",8),a.Nb(23,"ion-label",9),a.ic(24,"\u0e23\u0e2b\u0e31\u0e2a\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07 \u0e02\u0e2d\u0e07\u0e17\u0e48\u0e32\u0e19\u0e04\u0e37\u0e2d"),a.Mb(),a.Mb(),a.Mb(),a.Nb(25,"ion-row",10),a.Nb(26,"div",11),a.Lb(27,"ion-input",12),a.Mb(),a.Mb(),a.Lb(28,"br"),a.Nb(29,"div",13),a.Nb(30,"ion-button",14),a.Vb("click",(function(){return n.goToSuccess()})),a.ic(31," \u0e16\u0e31\u0e14\u0e44\u0e1b "),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb())},directives:[c.p,c.I,c.e,c.x,c.H,c.k,c.o,c.f,c.j,c.C,c.u,c.s,c.S,c.d],styles:['.header[_ngcontent-%COMP%]{color:#fff;background:brown;font-family:Kanit,sans-serif!important}.header[_ngcontent-%COMP%], .mycss1[_ngcontent-%COMP%]{--background:brown}.cardcss[_ngcontent-%COMP%]{border-radius:20px;--background:#fff}.whitetext[_ngcontent-%COMP%]{color:#fff}.buttoncss[_ngcontent-%COMP%]{border-radius:50px;--font-color:#fff;background:brown}*[_ngcontent-%COMP%]{font-family:Kanit,sans-serif!important}.center[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-content:stretch;align-items:center}.progressbar[_ngcontent-%COMP%]{margin:auto;font-size:20px;display:table}.progressbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:inline-block;width:20px}ul[_ngcontent-%COMP%]{display:inline-flex;padding-left:20px}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;width:100px;text-align:center}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{background:#ccc;width:10px;height:10px;color:#fff;border-radius:50%}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]:after{content:"";background:#ccc;height:2px;width:80px;display:block;position:absolute;top:50px}']}),t})()}];let g=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(n){return new(n||t)},imports:[[r.i.forChild(d)],r.i]}),t})(),u=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(n){return new(n||t)},imports:[[o.b,i.a,c.J,g]]}),t})()}}]);