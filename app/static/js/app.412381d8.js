(function(e){function t(t){for(var r,a,o=t[0],l=t[1],c=t[2],h=0,d=[];h<o.length;h++)a=o[h],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("ecfe"),i=n.n(r);i.a},2802:function(e){e.exports=JSON.parse('[{"wish":"make hello.page wuselig"},{"wish":"mark in Navbar the current displayed Content"},{"wish":"manage Session for saving visitor-name"},{"wish":"manage Session for saving visitor-name"},{"wish":"saving and display visitors who enter their name"},{"wish":"currently fulfilling \\"Wish\\""},{"wish":"Display Wishlist as Cards"},{"wish":"load Wishlist from database"},{"wish":"database backup "},{"wish":" security"},{"wish":"Handel todo is \\"done\\" with date"},{"wish":"add to done-Cards the picture of \\"how-to\\""},{"wish":"add graph database (neo4j)"},{"wish":"implement like button for prioritize the Wishes "},{"wish":"create Wishlist for Visitors"},{"wish":"create comment-space for implementation-hints and orthography-hints "},{"wish":"add authorization to change the status from cards"},{"wish":"add footer for impressum"},{"wish":"add Maximal Wishlist item size"},{"wish":"add Wishlist Backlog "}]')},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"eventBus",(function(){return de}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Background"),n("router-view")],1)},s=[],a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"div_bg"},[n("canvas",{attrs:{id:"c"}})])}],l=(n("ac1f"),n("1276"),{name:"Background",mounted:function(){var e=document.getElementById("c"),t=e.getContext("2d");e.height=window.innerHeight,e.width=window.innerWidth;for(var n="wusel.",r=14,i=e.width/r,s=[],a=0;a<i;a++)s[a]=1;for(a=0;a<5;a++)n+=n;function o(){t.fillStyle="rgba(0, 0, 0, 0.05)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#990096",t.font=r+"px arial";for(var i=0;i<s.length;i++){var a=n[i];t.fillText(a,i*r,s[i]*r),(s[i]*r>e.height||Math.random()>.98)&&(s[i]=0),s[i]++}}n=n.split(""),setInterval(o,30)}}),c=l,u=n("0c7c"),h=Object(u["a"])(c,a,o,!1,null,"c85cf588",null),d=h.exports,m={name:"App",components:{Background:d}},f=m,p=(n("034f"),Object(u["a"])(f,i,s,!1,null,null,null)),g=p.exports,v=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"header"},[n("Menu",{model:{value:e.component_selected,callback:function(t){e.component_selected=t},expression:"component_selected"}})],1),n("div",{staticClass:"main_container"},["Hello"===e.component_selected?n("Hello"):e._e(),"Wish-List"===e.component_selected?n("WishList"):e._e(),"Impressum"===e.component_selected?n("Impressum"):e._e()],1),n("div",{staticClass:"footer"},[n("Footer")],1)])},_=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",staticStyle:{overflow:"hidden"}},e._l(e.buttons,(function(t){return n("button",{key:t.name,staticClass:"menu_button",on:{click:function(n){return e.change_main_content(t,n)}}},[e._v(e._s(t.name))])})),0)},k=[],y={name:"Footer",data(){return{buttons:[{name:"Impressum"}]}},methods:{change_main_content(e,t){var n=e.name;de.$emit("change_main_content",{event:t,name:n})}}},S=y,x=Object(u["a"])(S,w,k,!1,null,null,null),z=x.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",staticStyle:{overflow:"hidden"}},e._l(e.buttons,(function(t){return n("button",{key:t.name,staticClass:"menu_button",on:{click:function(n){return e.change_main_content(t,n)}}},[e._v(e._s(t.name))])})),0)},W=[],I={name:"Menu",components:{},data(){return{buttons:[{name:"Hello"},{name:"Wish-List"}]}},methods:{change_main_content(e,t){var n=e.name;de.$emit("change_main_content",{event:t,name:n})}}},j=I,E=Object(u["a"])(j,C,W,!1,null,null,null),D=E.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("h1",[e._v(" Welcome"),n("span",{staticClass:"rainbow"},[e._v(e._s(e.name))]),e._v(", to "),n("span",{staticClass:"rainbow"},[e._v("WUSEL.SPACE")])]),e._v(" Name: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],attrs:{type:"text"},domProps:{value:e.form.name},on:{input:[function(t){t.target.composing||e.$set(e.form,"name",t.target.value)},function(t){return e.checkExist(t)}]}})])])},M=[],B={name:"Hello",data(){return{form:{name:""},name:""}},methods:{checkExist(e){this.name=" "+e.target.value}}},$=B,H=Object(u["a"])($,O,M,!1,null,null,null),A=H.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",staticStyle:{"text-align":"center"}},[n("button",{staticClass:"language_button",on:{click:function(t){return e.change_language()}}},[e._v(e._s(e.value))]),n("p",[n("span",{staticClass:"description_text_wish_list",attrs:{id:"text_wish_list"},domProps:{innerHTML:e._s(e.text)}},[e._v(" "+e._s(e.text)+" ")])]),n("div",{staticClass:"wish_list_container"},e._l(e.myJson,(function(t,r){return n("Wish",e._b({key:r},"Wish",{wish:t.wish},!1))})),1)])},T=[],L=n("2802"),N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wish_card"},[n("div",{staticClass:"wish_card_title"},[n("p",{staticClass:"wish_card_text"},[e._v(e._s(e.wish))])]),n("div",{staticClass:"wish_card_container"},[e._v(" "+e._s(e.tasks)+" ")])])},R=[],G={name:"Wish",props:{wish:{type:String,required:!0,default:"default-wish (data is missing)"},tasks:{type:Array,required:!1}}},U=G,K=Object(u["a"])(U,N,R,!1,null,null,null),V=K.exports,F={name:"WishList",components:{Wish:V},data(){return{value:"de?",text:"",en:"This is a list of tasks and projects that I (and Renate) are working on. <span class='rainbow'>Wusel.Space</span>  is in English as it is an ongoing process of learning to speak and write English. Soon there will be an area where you can tell me if I have misspelled something.",de:"Das ist eine Liste von Aufgaben und Projekten an denen ich (und Renate) arbeiten. <span class='rainbow'>Wusel.Space</span> ist auf Englisch, da es ein fortlaufender Prozesse ist english reden und schreiben zu lernen. Bald gibts auch einen Bereich, in dem ihr mir mitteilen könnt wenn ich etwas falsch geschrieben habe.",myJson:L}},created(){this.text=this.en},methods:{change_language(){"de?"===this.value?(this.text=this.de,this.value="en?"):(this.text=this.en,this.value="de?")}}},J=F,Z=Object(u["a"])(J,P,T,!1,null,"320a7758",null),q=Z.exports,Q=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},X=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"content",staticStyle:{"text-align":"left"}},[n("h1",[e._v("Impressum")]),n("p",[e._v("Angaben gemäß § 5 TMG")]),n("p",[e._v("Constanze Maaß"),n("br"),e._v(" Woltmanstraße 16"),n("br"),e._v(" 20097 Hamburg"),n("br")]),n("p",[n("strong",[e._v("Kontakt:")]),e._v(" "),n("br"),e._v(" Telefon: 00172-9718209"),n("br"),e._v(" E-Mail: "),n("a",{attrs:{href:"cosmaastani@googlemail.com"}},[e._v("stani@wusel.space")]),n("br")]),n("p",[n("strong",[e._v("Haftungsausschluss: ")]),n("br"),n("br"),n("strong",[e._v("Haftung für Inhalte")]),n("br"),n("br"),e._v(" Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen."),n("br"),n("br"),n("strong",[e._v("Urheberrecht")]),n("br"),n("br"),e._v(" Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen."),n("br"),n("br"),n("strong",[e._v("Datenschutz")]),n("br"),n("br"),e._v(" Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. "),n("br"),e._v(" Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. "),n("br"),e._v(" Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor."),n("br")]),n("br"),e._v(" Website Impressum erstellt durch "),n("a",{attrs:{href:"https://www.impressum-generator.de"}},[e._v("impressum-generator.de")]),e._v(" von der "),n("a",{attrs:{href:"https://www.kanzlei-hasselbach.de/"}},[e._v("Kanzlei Hasselbach")])])])}],Y={name:"Impressum"},ee=Y,te=Object(u["a"])(ee,Q,X,!1,null,null,null),ne=te.exports,re={name:"Landing",components:{Impressum:ne,WishList:q,Hello:A,Menu:D,Footer:z},data(){return{component_selected:"Hello"}},created(){var e=this;de.$on("change_main_content",(function(t){e.component_selected=t.name}))}},ie=re,se=Object(u["a"])(ie,b,_,!1,null,null,null),ae=se.exports;r["default"].use(v["a"]);var oe=[{path:"/",name:"hello",component:ae}],le=new v["a"]({mode:"history",base:"/",routes:oe}),ce=le,ue=n("b1e0"),he=n("5f5b");n("f9e3"),n("2dd8"),n("4449");r["default"].use(ue["a"]),r["default"].config.productionTip=!1,r["default"].use(he["a"]);var de=new r["default"];new r["default"]({router:ce,render:function(e){return e(g)}}).$mount("#app")},ecfe:function(e,t,n){}});
//# sourceMappingURL=app.412381d8.js.map