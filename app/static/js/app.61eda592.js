(function(e){function t(t){for(var i,a,o=t[0],c=t[1],l=t[2],d=0,h=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(h.length)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},s={app:0},r=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/static/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"10e5":function(e,t,n){e.exports=n.p+"../static/img/wg.da14b5cb.jpg"},"264f":function(e,t,n){e.exports=n.p+"../static/img/ilohh.3a3d45f3.jpg"},2802:function(e){e.exports=JSON.parse('[{"wish":"make hello wuselig","status":"done"},{"wish":"make wusel-color selectable","status":""},{"wish":"mark in Navbar the current displayed Content","status":"done"},{"wish":"manage Session for saving visitor-name","status":""},{"wish":"saving and display visitors who enter their name","status":""},{"wish":"create sidebar for displaying wish tasks","status":"active"},{"wish":"currently fulfilling \\"Wish\\"","status":""},{"wish":"Display Wishlist as Cards","status":"done"},{"wish":"load Wishlist from database","status":""},{"wish":"add Bachelor-area","status":"done"},{"wish":"add Bachelor_todos","status":""},{"wish":"database backup ","status":""},{"wish":"make deployment with github and portainer API ","status":""},{"wish":" security","status":"done"},{"wish":" deployment","status":"done"},{"wish":"Frontend with Vue","status":"done"},{"wish":"Handel todo is \\"done\\"","status":"done"},{"wish":"add to done-Cards the picture of \\"how-to\\"","status":""},{"wish":"add graph database (neo4j)","status":""},{"wish":"implement like button for prioritize the Wishes ","status":""},{"wish":"create Wishlist for Visitors","status":""},{"wish":"create comment-space for implementation-hints and orthography-hints ","status":""},{"wish":"add authorization to change the status from cards","status":""},{"wish":"add footer for impressum","status":""},{"wish":"add Maximal Wishlist item size","status":""},{"wish":"add Wishlist Backlog ","status":""}]')},"379b":function(e,t,n){e.exports=n.p+"../static/img/lankow.51af0fe2.jpg"},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"eventBus",(function(){return Ge}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Background"),n("router-view")],1)},r=[],a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"div_bg"},[n("canvas",{attrs:{id:"c"}})])}],c=(n("ac1f"),n("1276"),{name:"Background",mounted:function(){var e=document.getElementById("c"),t=e.getContext("2d");e.height=window.innerHeight,e.width=window.innerWidth;for(var n="wusel.",i=14,s=e.width/i,r=[],a=0;a<s;a++)r[a]=1;for(var o=0;o<5;o++)n+=n;function c(){t.fillStyle="rgba(0, 0, 0, 0.05)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#1E8449",t.font=i+"px arial";for(var s=0;s<r.length;s++){var a=n[s];t.fillText(a,s*i,r[s]*i),(r[s]*i>e.height||Math.random()>.98)&&(r[s]=0),r[s]++}}n=n.split(""),setInterval(c,30)}}),l=c,u=n("2877"),d=Object(u["a"])(l,a,o,!1,null,"6a417ce0",null),h=d.exports,m={name:"App",components:{Background:h}},p=m,f=(n("5c0b"),Object(u["a"])(p,s,r,!1,null,null,null)),_=f.exports,b=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"header_div"},[n("Menu",{model:{value:e.component_selected,callback:function(t){e.component_selected=t},expression:"component_selected"}})],1),n("div",{staticClass:"main_div"},[n("LeftSidebar"),"Hello"===e.component_selected?n("Hello"):e._e(),"Wish-List"===e.component_selected?n("WishList"):e._e(),"Impressum"===e.component_selected?n("Impressum"):e._e(),"Bachelor"===e.component_selected?n("Bachelor"):e._e(),"Pictures"===e.component_selected?n("Pictures"):e._e()],1),n("div",{staticClass:"footer_div"},[n("Footer")],1)])},g=[],w=(n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu_container"},e._l(e.buttons,(function(t){return n("button",{key:t.name,staticClass:"menu_button",on:{click:function(n){return e.change_main_content(t,n)}}},[e._v(" "+e._s(t.name)+" ")])})),0)}),k=[],y={name:"Footer",data:function(){return{buttons:[{name:"Impressum"}]}},methods:{change_main_content:function(e,t){var n=e.name;Ge.$emit("change_main_content",{event:t,name:n})}}},S=y,x=Object(u["a"])(S,w,k,!1,null,null,null),C=x.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu_container",staticStyle:{overflow:"hidden","text-align":"center"}},[n("span",{staticClass:"menu_buttons"},e._l(e.buttons,(function(t){return n("button",{key:t.name,staticClass:"menu_button",on:{click:function(n){return e.change_main_content(t,n)}}},[e._v(" "+e._s(t.name)+" ")])})),0),e.hide_input?e._e():n("span",{staticClass:"menu_input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input_name,expression:"input_name"}],attrs:{placeholder:"Name ",type:"text"},domProps:{value:e.input_name},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.hide_input=!0},input:[function(t){t.target.composing||(e.input_name=t.target.value)},function(t){return e.checkExist(t)}]}})]),n("span",{staticClass:"menu_title"},[e._v(" Welcome"),n("span",{staticClass:"rainbow"},[e._v(e._s(e.name))])])])},E=[],I={name:"Menu",components:{},data:function(){return{input_name:"",name:"",hide_input:!1,buttons:[{name:"Hello"},{name:"Pictures"},{name:"Bachelor"},{name:"Wish-List"}]}},methods:{change_main_content:function(e,t){var n=e.name;Ge.$emit("change_main_content",{event:t,name:n})},checkExist:function(e){this.name=" "+e.target.value}}},W=I,O=Object(u["a"])(W,j,E,!1,null,null,null),z=O.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main_container"},[n("div",{staticClass:"side_content"},[n("Descriptions",{attrs:{descriptions:e.texts.hello.descriptions}})],1)])},H=[],B=n("78d9"),A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"descriptions_container"},e._l(e.descriptions,(function(e,t){return n("Info",{key:t,attrs:{title:e.title,en:e.en,de:e.de}})})),1)},L=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"description_div"},[e.isHidden?n("button",{staticClass:"show_button",domProps:{innerHTML:e._s(e.title)},on:{click:function(t){e.isHidden=!1}}},[e._v(" "+e._s(e.title)+" ")]):e._e(),e.isHidden?e._e():n("div",{staticClass:"description_content"},[n("button",{staticClass:"show_button",domProps:{innerHTML:e._s(e.title)},on:{click:function(t){e.isHidden=!0}}},[e._v(" "+e._s(e.title)+" ")]),n("button",{staticClass:"language_button",on:{click:function(t){return e.change_language()}}},[e._v(" "+e._s(e.value)+" ")]),n("span",{staticClass:"description_text",domProps:{innerHTML:e._s(e.text)}},[e._v(" "+e._s(e.text)+" ")])])])},M=[],$={name:"Info",props:{title:{type:String,required:!1,default:"INFOS?"},de:{type:String,required:!1,default:"äääähh keene Übersätzung, wa!"},en:{type:String,required:!1,default:"äääähh no translation, nüff!"}},data:function(){return{value:"de?",text:this.en,isHidden:!0}},methods:{change_language:function(){"de?"===this.value?(this.text=this.de,this.value="en?"):(this.text=this.en,this.value="de?")}}},T=$,N=Object(u["a"])(T,P,M,!1,null,"a19fa744",null),R=N.exports,G={name:"Descriptions",components:{Info:R},props:{descriptions:{type:Array,required:!1,default:function(){return[]}}}},U=G,F=Object(u["a"])(U,A,L,!1,null,"1d1904b7",null),V=F.exports,K={name:"Hello",components:{Descriptions:V},data:function(){return{texts:B}}},Z=K,q=Object(u["a"])(Z,D,H,!1,null,null,null),J=q.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main_container",staticStyle:{"text-align":"center"}},[n("div",{staticClass:"side_content"},[n("Descriptions",{attrs:{descriptions:e.texts.wish_list.descriptions}})],1),n("div",{staticClass:"wish_list_container"},e._l(e.examples,(function(t){return n("Wish",e._b({key:t.wish},"Wish",{wish:t},!1))})),1),n("div",{staticClass:"wish_list_container"},e._l(e.wishes_json,(function(t,i){return n("Wish",e._b({key:i},"Wish",{wish:t},!1))})),1)])},Q=[],X=n("2802"),ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wish_card",class:e.cardClasses,on:{click:function(t){return e.toggle_active()}}},[n("div",{staticClass:"wish_card_title"},[n("p",{staticClass:"wish_card_text"},[e._v(e._s(e.wish.wish))])]),n("div",{staticClass:"wish_card_container"})])},te=[],ne={name:"Wish",props:{wish:{type:Object,required:!0}},data:function(){return{status:this.wish.status,is_active:"active"===this.wish.status,is_done:"done"===this.wish.status}},computed:{cardClasses:function(){return{card_active:this.is_active,card_done:this.is_done}}},methods:{toggle_active:function(){alert("nice soon you can see all tasks an decisions for this wish/todo if you click on it!")}}},ie=ne,se=Object(u["a"])(ie,ee,te,!1,null,null,null),re=se.exports,ae={name:"WishList",components:{Descriptions:V,Wish:re},data:function(){return{texts:B,wishes_json:X,examples:[{wish:"done",status:"done"},{wish:"active",status:"active"},{wish:"todo",status:""}]}}},oe=ae,ce=Object(u["a"])(oe,Y,Q,!1,null,"20719eb8",null),le=ce.exports,ue=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},de=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main_container"},[n("div",{staticClass:"content",staticStyle:{"text-align":"left"}},[n("h1",[e._v("Impressum")]),n("p",[e._v("Angaben gemäß § 5 TMG")]),n("p",[e._v(" Constanze Maaß"),n("br"),e._v(" Woltmanstraße 16"),n("br"),e._v(" 20097 Hamburg"),n("br")]),n("p",[n("strong",[e._v("Kontakt:")]),e._v(" "),n("br"),e._v(" Telefon: 0172-9718209"),n("br"),e._v(" E-Mail: "),n("a",[e._v("cosmaastani@googlemail.com")]),e._v(" "),n("br")]),n("p",[n("strong",[e._v("Haftungsausschluss: ")]),n("br"),n("br"),n("strong",[e._v("Haftung für Inhalte")]),n("br"),n("br"),e._v(" Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen."),n("br"),n("br"),n("strong",[e._v("Urheberrecht")]),n("br"),n("br"),e._v(" Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen."),n("br"),n("br"),n("strong",[e._v("Datenschutz")]),n("br"),n("br"),e._v(" Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. "),n("br"),e._v(" Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. "),n("br"),e._v(" Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor."),n("br")]),n("br"),e._v(" Website Impressum erstellt durch "),n("a",{attrs:{href:"https://www.impressum-generator.de"}},[e._v("impressum-generator.de")]),e._v(" von der "),n("a",{attrs:{href:"https://www.kanzlei-hasselbach.de/"}},[e._v("Kanzlei Hasselbach")])])])}],he={name:"Impressum"},me=he,pe=Object(u["a"])(me,ue,de,!1,null,null,null),fe=pe.exports,_e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main_container"},[n("div",{staticClass:"side_content"},[n("Descriptions",{attrs:{descriptions:e.texts.bachelor.descriptions}})],1)])},be=[],ve={name:"Bachelor",components:{Descriptions:V},data:function(){return{texts:B}}},ge=ve,we=Object(u["a"])(ge,_e,be,!1,null,null,null),ke=we.exports,ye=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Se=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container_left"},[n("div",{staticClass:"side_banner_div"},[n("span",{staticClass:"rainbow vertical_side_banner "},[e._v("WUSEL.SPACE")])])])}],xe={name:"LeftSidebar",data:function(){return{}}},Ce=xe,je=Object(u["a"])(Ce,ye,Se,!1,null,"db091b40",null),Ee=je.exports,Ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main_container"},[n("div",{staticClass:"banners-container"},e._l(e.images,(function(t){return n("article",{key:t.pathShort,staticClass:"banner",style:{"background-image":"url("+t.pathLong+")"}},[n("section",{staticClass:"banner-copy"},[n("h1",[e._v(e._s(t.pathShort))])])])})),0)])},We=[],Oe=(n("4160"),n("d3b7"),n("159b"),n("ddb0"),{name:"Pictures",data:function(){return{images:[]}},mounted:function(){this.importAll(n("ade8"))},methods:{importAll:function(e){var t=this;e.keys().forEach((function(n){return t.images.push({pathLong:e(n),pathShort:n})}))}}}),ze=Oe,De=Object(u["a"])(ze,Ie,We,!1,null,null,null),He=De.exports,Be={name:"Landing",components:{Pictures:He,LeftSidebar:Ee,Bachelor:ke,Impressum:fe,WishList:le,Hello:J,Menu:z,Footer:C},data:function(){return{component_selected:"Hello"}},created:function(){var e=this;Ge.$on("change_main_content",(function(t){e.component_selected=t.name}))}},Ae=Be,Le=Object(u["a"])(Ae,v,g,!1,null,null,null),Pe=Le.exports;i["default"].use(b["a"]);var Me=[{path:"/",name:"hello",component:Pe}],$e=new b["a"]({mode:"history",base:"/static/",routes:Me}),Te=$e,Ne=n("b1e0"),Re=n("5f5b");n("4449");i["default"].use(Ne["a"]),i["default"].config.productionTip=!1,i["default"].use(Re["a"]);var Ge=new i["default"];new i["default"]({router:Te,render:function(e){return e(_)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var i=n("9c0c"),s=n.n(i);s.a},"78d9":function(e){e.exports=JSON.parse('{"bachelor":{"descriptions":[{"title":"BACHELOR THESIS IN PROGRESS","de":"hier möchte ich meinen status der Bachelor Arbeit dokumentieren und präsentieren... viel Spaß beim luschern!"}]},"wish_list":{"descriptions":[{"title":"HÄÄÄ WISH-LIST?","en":"... is a list of tasks and projects that I (and Renate) are working on.","de":"... ist eine Liste von Aufgaben und Projekten an denen ich (und Renate) arbeiten. "}]},"hello":{"descriptions":[{"title":"WAHTS <span class=\'rainbow\'>WUSEL.SPACE</span>?","en":"Wusel.Space is a playground for all kinds of my projects (programming, knitting, crocheting, living, bachelor thesis etc ...)\\nYou can watch how I am gradually working through the wish list and add wishes yourself at a later date.","de":"Wusel.Space ist ein Tummelplatz für meine Projekte jeder Art ( programmieren, stricken, häkel, leben, Bachelor Arbeit etc... ) \\nDu, kannst hier gucken wie ich nach und nach die Wish-List abarbeite und selbst zu einem späteren Zeitpunkt Wünsche hinzufügen."},{"title":"WHY IN ENGLISH?","en":"<span class=\'rainbow\'>Wusel</span> is in English, because I have to learn it, so ... Soon there will be an area where you can tell me if I misspelled something.","de":"<span class=\'rainbow\'>Wusel</span> ist auf Englisch, weil ich es lernen muss, so...  Bald gibts auch einen Bereich, in dem ihr mir mitteilen könnt wenn ich etwas falsch geschrieben habe."}]}}')},"9c0c":function(e,t,n){},ade8:function(e,t,n){var i={"./ilohh.jpg":"264f","./lankow.jpg":"379b","./wg.jpg":"10e5"};function s(e){var t=r(e);return n(t)}function r(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}s.keys=function(){return Object.keys(i)},s.resolve=r,e.exports=s,s.id="ade8"}});
//# sourceMappingURL=app.61eda592.js.map