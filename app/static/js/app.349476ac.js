(function(e){function t(t){for(var i,a,o=t[0],l=t[1],c=t[2],d=0,h=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(h.length)h.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},s={app:0},r=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("ecfe"),s=n.n(i);s.a},2802:function(e){e.exports=JSON.parse('[{"wish":"make hello.page wuselig","status":"done"},{"wish":"mark in Navbar the current displayed Content","status":"now"},{"wish":"manage Session for saving visitor-name","status":""},{"wish":"manage Session for saving visitor-name","status":""},{"wish":"saving and display visitors who enter their name","status":""},{"wish":"currently fulfilling \\"Wish\\"","status":""},{"wish":"Display Wishlist as Cards","status":""},{"wish":"load Wishlist from database","status":""},{"wish":"database backup ","status":""},{"wish":"make deployment with github and portainer API ","status":""},{"wish":" security","status":""},{"wish":"Handel todo is \\"done\\" with date","status":""},{"wish":"add to done-Cards the picture of \\"how-to\\"","status":""},{"wish":"add graph database (neo4j)","status":""},{"wish":"implement like button for prioritize the Wishes ","status":""},{"wish":"create Wishlist for Visitors","status":""},{"wish":"create comment-space for implementation-hints and orthography-hints ","status":""},{"wish":"add authorization to change the status from cards","status":""},{"wish":"add footer for impressum","status":""},{"wish":"add Maximal Wishlist item size","status":""},{"wish":"add Wishlist Backlog ","status":""}]')},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"eventBus",(function(){return ve}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Background"),n("router-view")],1)},r=[],a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"div_bg"},[n("canvas",{attrs:{id:"c"}})])}],l=(n("ac1f"),n("1276"),{name:"Background",mounted:function(){var e=document.getElementById("c"),t=e.getContext("2d");e.height=window.innerHeight,e.width=window.innerWidth;for(var n="wusel.",i=14,s=e.width/i,r=[],a=0;a<s;a++)r[a]=1;for(a=0;a<5;a++)n+=n;function o(){t.fillStyle="rgba(0, 0, 0, 0.05)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#990096",t.font=i+"px arial";for(var s=0;s<r.length;s++){var a=n[s];t.fillText(a,s*i,r[s]*i),(r[s]*i>e.height||Math.random()>.98)&&(r[s]=0),r[s]++}}n=n.split(""),setInterval(o,30)}}),c=l,u=n("0c7c"),d=Object(u["a"])(c,a,o,!1,null,"c85cf588",null),h=d.exports,m={name:"App",components:{Background:h}},p=m,f=(n("034f"),Object(u["a"])(p,s,r,!1,null,null,null)),_=f.exports,g=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"header"},[n("Menu",{model:{value:e.component_selected,callback:function(t){e.component_selected=t},expression:"component_selected"}})],1),n("div",{staticClass:"main_container"},["Hello"===e.component_selected?n("Hello"):e._e(),"Wish-List"===e.component_selected?n("WishList"):e._e(),"Impressum"===e.component_selected?n("Impressum"):e._e()],1),n("div",{staticClass:"footer"},[n("Footer")],1)])},v=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",staticStyle:{overflow:"hidden"}},e._l(e.buttons,(function(t){return n("button",{key:t.name,staticClass:"menu_button",on:{click:function(n){return e.change_main_content(t,n)}}},[e._v(e._s(t.name))])})),0)},k=[],S={name:"Footer",data(){return{buttons:[{name:"Impressum"}]}},methods:{change_main_content(e,t){var n=e.name;ve.$emit("change_main_content",{event:t,name:n})}}},y=S,x=Object(u["a"])(y,w,k,!1,null,null,null),W=x.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",staticStyle:{overflow:"hidden","text-align":"center"}},[n("span",{staticClass:"menu_buttons"},e._l(e.buttons,(function(t){return n("button",{key:t.name,staticClass:"menu_button",on:{click:function(n){return e.change_main_content(t,n)}}},[e._v(e._s(t.name))])})),0),n("span",{staticClass:"menu_title"},[e._v("Welcome"),n("span",{staticClass:"rainbow"},[e._v(e._s(e.name))]),e._v(", to "),n("span",{staticClass:"rainbow"},[e._v("WUSEL.SPACE")])]),n("span",{staticClass:"menu_input"},[e._v(" Name: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],attrs:{type:"text"},domProps:{value:e.form.name},on:{input:[function(t){t.target.composing||e.$set(e.form,"name",t.target.value)},function(t){return e.checkExist(t)}]}})])])},C=[],j={name:"Menu",components:{},data(){return{form:{name:""},name:"",buttons:[{name:"Hello"},{name:"Wish-List"}]}},methods:{change_main_content(e,t){var n=e.name;ve.$emit("change_main_content",{event:t,name:n})},checkExist(e){this.name=" "+e.target.value}}},I=j,D=Object(u["a"])(I,z,C,!1,null,null,null),E=D.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("Description",e._b({},"Description",{description_de:e.wusel_de,description_en:e.wusel_en,title:"WHAT'S WUSEL.SPACE ?"},!1)),n("Description",e._b({},"Description",{description_de:e.de,description_en:e.en,title:"WHY ENGLISH ?"},!1))],1)},H=[],A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("span",{staticClass:"wusel_h4"},[e._v(e._s(e.title))]),n("button",{staticClass:"language_button",on:{click:function(t){return e.change_language()}}},[e._v(e._s(e.value))]),n("p",[n("span",{staticClass:"description_text_wish_list",attrs:{id:"text_wish_list"},domProps:{innerHTML:e._s(e.text)}},[e._v(" "+e._s(e.text)+" ")])])])},B=[],M={name:"Topic",props:{title:{type:String,required:!1},description_en:{type:String,required:!1},description_de:{type:Array,required:!1}},data(){return{value:"de?",text:this.description_en}},computed(){this.data.text=this.props.description_en},methods:{change_language(){"de?"===this.value?(this.text=this.description_de,this.value="en?"):(this.text=this.description_en,this.value="de?")}}},$=M,P=Object(u["a"])($,A,B,!1,null,"06ee8817",null),T=P.exports,L=n("78d9"),N={name:"Hello",components:{Description:T},data(){return{form:{name:""},name:"",en:L.hello_text_en,de:L.hello_text_de,wusel_en:L.wusel_en,wusel_de:L.wusel_de}},methods:{checkExist(e){this.name=" "+e.target.value}}},G=N,R=Object(u["a"])(G,O,H,!1,null,null,null),U=R.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",staticStyle:{"text-align":"center"}},[n("Description",e._b({},"Description",{description_de:e.de,description_en:e.en,title:"HÄÄÄ WISHLIST ?"},!1)),n("div",{staticClass:"wish_list_container"},e._l(e.wishes_json,(function(t,i){return n("Wish",e._b({key:i},"Wish",{wish:t.wish},!1))})),1)],1)},K=[],V=n("2802"),Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wish_card"},[n("div",{staticClass:"wish_card_title"},[n("p",{staticClass:"wish_card_text"},[e._v(e._s(e.wish))])]),n("div",{staticClass:"wish_card_container"},[e._v(" "+e._s(e.tasks)+" ")])])},F=[],J={name:"Wish",props:{wish:{type:String,required:!0,default:"default-wish (data is missing)"},status:{type:String,required:!0,default:""},tasks:{type:Array,required:!1}}},Y=J,Q=Object(u["a"])(Y,Z,F,!1,null,null,null),X=Q.exports,ee={name:"WishList",components:{Description:T,Wish:X},data(){return{en:L.wish_en,de:L.wish_de,wishes_json:V}}},te=ee,ne=Object(u["a"])(te,q,K,!1,null,"a6a90db2",null),ie=ne.exports,se=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},re=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"content",staticStyle:{"text-align":"left"}},[n("h1",[e._v("Impressum")]),n("p",[e._v("Angaben gemäß § 5 TMG")]),n("p",[e._v(" Constanze Maaß"),n("br"),e._v(" Woltmanstraße 16"),n("br"),e._v(" 20097 Hamburg"),n("br")]),n("p",[n("strong",[e._v("Kontakt:")]),e._v(" "),n("br"),e._v(" Telefon: 0172-9718209"),n("br"),e._v(" E-Mail: "),n("a",[e._v("cosmaastani@googlemail.com")]),e._v(" "),n("br")]),n("p",[n("strong",[e._v("Haftungsausschluss: ")]),n("br"),n("br"),n("strong",[e._v("Haftung für Inhalte")]),n("br"),n("br"),e._v(" Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen."),n("br"),n("br"),n("strong",[e._v("Urheberrecht")]),n("br"),n("br"),e._v(" Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen."),n("br"),n("br"),n("strong",[e._v("Datenschutz")]),n("br"),n("br"),e._v(" Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. "),n("br"),e._v(" Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. "),n("br"),e._v(" Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor."),n("br")]),n("br"),e._v(" Website Impressum erstellt durch "),n("a",{attrs:{href:"https://www.impressum-generator.de"}},[e._v("impressum-generator.de")]),e._v(" von der "),n("a",{attrs:{href:"https://www.kanzlei-hasselbach.de/"}},[e._v("Kanzlei Hasselbach")])])])}],ae={name:"Impressum"},oe=ae,le=Object(u["a"])(oe,se,re,!1,null,null,null),ce=le.exports,ue={name:"Landing",components:{Impressum:ce,WishList:ie,Hello:U,Menu:E,Footer:W},data(){return{component_selected:"Hello"}},created(){var e=this;ve.$on("change_main_content",(function(t){e.component_selected=t.name}))}},de=ue,he=Object(u["a"])(de,b,v,!1,null,null,null),me=he.exports;i["default"].use(g["a"]);var pe=[{path:"/",name:"hello",component:me}],fe=new g["a"]({mode:"history",base:"/",routes:pe}),_e=fe,ge=n("b1e0"),be=n("5f5b");n("f9e3"),n("2dd8"),n("4449");i["default"].use(ge["a"]),i["default"].config.productionTip=!1,i["default"].use(be["a"]);var ve=new i["default"];new i["default"]({router:_e,render:function(e){return e(_)}}).$mount("#app")},"78d9":function(e){e.exports=JSON.parse('{"wish_en":"... is a list of tasks and projects that I (and Renate) are working on.","wish_de":"... ist eine Liste von Aufgaben und Projekten an denen ich (und Renate) arbeiten. ","hello_text_en":"<span class=\'rainbow\'>Wusel.Space</span>  is in English as it is an ongoing process of learning to speak and write English. Soon there will be an area where you can tell me if I have misspelled something.","hello_text_de":"<span class=\'rainbow\'>Wusel.Space</span> ist auf Englisch, da es ein fortlaufender Prozesse ist english reden und schreiben zu lernen. Bald gibts auch einen Bereich, in dem ihr mir mitteilen könnt wenn ich etwas falsch geschrieben habe.","wusel_en":"<span class=\'rainbow\'>Wusel.Space</span> is a playground for my projects of all kinds (programming, knitting, crocheting, living, bachelor thesis etc ...)\\nYou can watch how I am gradually working through the wish list and add wishes yourself at a later date.","wusel_de":"<span class=\'rainbow\'>Wusel.Space</span> ist ein Tummelplatz für meine Projekte jeder Art ( programmieren, stricken, häkel, leben, Bachelor Arbeit etc... ) \\nDu, kannst hier gucken wie ich nach und nach die Wish-List abarbeite und selbst zu einem späteren Zeitpunkt Wünsche hinzufügen."}')},ecfe:function(e,t,n){}});
//# sourceMappingURL=app.349476ac.js.map