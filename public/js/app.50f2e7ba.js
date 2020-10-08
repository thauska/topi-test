(function(t){function e(e){for(var r,i,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],r=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=s[0]))}return t}var r={},a={app:0},n=[];function i(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=r,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var r=s("85ec"),a=s.n(r);a.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("HomePage")},n=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slds-scope"},[s("Header"),s("div",{staticClass:"myapp slds-m-horizontal_large"},[s("Search"),s("List")],1)],1)},o=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slds-page-header slds-p-around_medium"},[r("div",{staticClass:"slds-page-header__row"},[r("div",{staticClass:"slds-page-header__col-title"},[r("div",{staticClass:"slds-media"},[r("div",{staticClass:"slds-media__figure"},[r("span",{staticClass:"slds-icon_container slds-icon-standard-opportunity"},[r("svg",{staticClass:"slds-icon slds-page-header__icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":s("eff7")+"#favorite"}})])])]),r("div",{staticClass:"slds-text-heading_large"},[t._v("Stars Repos")])])])])])},l=[],u={name:"Header"},d=u,p=s("2877"),f=Object(p["a"])(d,c,l,!1,null,null,null),v=f.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slds-form-element slds-m-top_medium"},[r("div",{staticClass:"slds-form-element__control slds-input-has-icon slds-input-has-icon_left"},[r("svg",{staticClass:"slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":s("eff7")+"#search"}})]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"slds-input",attrs:{type:"text",id:"text-input-id-1",placeholder:"Procurar…"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])])},m=[],_=(s("4de4"),s("caad"),s("ac1f"),s("2532"),s("841c"),{data:function(){return{search:""}},computed:{filteredList:function(){var t=this;return this.repositoriesData.filter((function(e){return e.title.toLowerCase().includes(t.search.toLowerCase())}))}}}),g=_,b=Object(p["a"])(g,h,m,!1,null,null,null),w=b.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slds-grid slds-wrap"},t._l(t.repositoriesData,(function(e,a){return r("div",{key:a,staticClass:"slds-col slds-size--1-of-1 slds-small-size--1-of-1 slds-medium-size--2-of-4"},[r("div",{staticClass:"slds-box slds-box_x-small slds-m-around--x-small"},[r("article",{staticClass:"slds-card"},[r("div",{staticClass:"slds-card__body"},[r("div",{staticClass:"slds-col slds-align_absolute-center"},[r("img",{staticStyle:{display:"block","border-radius":"50%",width:"50%"},attrs:{alt:"Person name",src:e.owner.avatar_url,title:"User avatar"}})])]),r("div",{staticClass:"slds-col slds-m-around_x-small"},[r("div",{staticClass:"slds-media__body slds-m-vertical_small"},[r("a",{attrs:{href:e.html_url}},[r("h2",{staticClass:"slds-card__header-title"},[r("strong",[t._v(t._s(e.full_name))])])]),r("div",[r("ul",{staticClass:"slds-col slds-grid slds-wrap slds-list_horizontal slds-has-dividers_left slds-has-block-links_space"},[r("li",{staticClass:"slds-item"},[t._v("Criado por")]),r("li",{staticClass:"slds-item"},[r("strong",[t._v(t._s(e.owner.login))])]),r("li",{staticClass:"slds-item"},[t._v("em: "+t._s(t.formatDate(e.created_at)))])])])]),r("div",{staticClass:"slds-col slds-grid slds-wrap"},[r("div",[t._v(t._s(e.description))]),r("div",{staticClass:"slds-m-top_small"},[r("ul",{staticClass:"slds-list_horizontal"},[r("li",{staticClass:"slds-item slds-p-right_small"},[r("svg",{staticClass:"slds-button__icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":s("eff7")+"#favorite"}})]),r("span",{staticClass:"slds-p-left_xx-small"},[t._v("stars: "+t._s(e.stargazers_count))])]),r("li",{staticClass:"slds-item slds-p-right_medium"},[r("svg",{staticClass:"slds-button__icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":s("eff7")+"#strategy"}})]),r("span",{staticClass:"slds-p-left_xx-small"},[t._v("forks: "+t._s(e.forks_count))])]),r("li",{staticClass:"slds-item"},[r("small",[t._v("Última atualização: "+t._s(t.submittedDays(e.pushed_at))+" dias atrás por "+t._s(e.owner.login)+" ")])])])])])])])])])})),0)},C=[],y=s("2909"),O=s("d4ec"),j=s("262e"),k=s("2caf"),R=(s("99af"),s("96cf"),s("1da1")),S=s("ade3"),P=s("bc3a"),z=s.n(P),D=z.a.create({baseURL:"https://api.github.com"});D.defaults.headers.post["Content-Type"]="application/json",D.defaults.headers.common["Accept"]="application/vnd.github.v3+json";var E=function(t,e,s){var r=JSON.parse(JSON.stringify(t)).response;return navigator.onLine?r?new Error(L(r,e,s)):new Error("Servidor indisponivel, tente mais tarde"):new Error("Sem acesso à internet, por favor, tente mais tarde")},L=function(t,e,s){var r=t.data,a={400:function(){return N(r)},403:function(){return"Problemas com o token de autenticação. Logue-se novamente."},401:function(){return"Você não tem permissão para executar essa ação."},404:function(){return"Endereço de acesso não encontrado"},500:function(){return H(e,s)},503:function(){return"Servidor indisponível. Tente novamente mais tarde"},default:function(){return"Erro de verificação do status da requisição"}};return(a[t.status]||a["default"])()},N=function(t){return t&&t!=={}?t.length>1?t:t[0].errorMessage:"Existem erros a serem processados"},H=function(t){var e={list:"Não foi possível realizar a listagem, tente mais tarde.",show:"Não foi possível realizar a listagem, tente mais tarde.",create:"Não foi possível realizar o cadastro, tente mais tarde.",update:"Não foi possível realizar a edição, tente mais tarde.",remove:"Não foi possível realizar a exclusão, tente mais tarde.",default:"Erro de verificação"};return e[t]||e["default"]},M=function t(e){var s=this;Object(O["a"])(this,t),Object(S["a"])(this,"list",Object(R["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D.get(s.api);case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t["catch"](0),E(t.t0,"list");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))),Object(S["a"])(this,"show",function(){var t=Object(R["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D.get("".concat(s.api,"/").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t["catch"](0),E(t.t0,"show");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()),Object(S["a"])(this,"create",function(){var t=Object(R["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D.post(s.api,e);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t["catch"](0),E(t.t0,"create");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()),Object(S["a"])(this,"update",function(){var t=Object(R["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D.put(s.api,e);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t["catch"](0),E(t.t0,"update");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()),Object(S["a"])(this,"remove",function(){var t=Object(R["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D.delete("".concat(s.api,"/").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t["catch"](0),E(t.t0,"remove");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()),Object(S["a"])(this,"search",function(){var t=Object(R["a"])(regeneratorRuntime.mark((function t(e,r,a,n,i){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D.get("/search/".concat(s.api,"?sort=").concat(e,"&order=").concat(r,"&page=").concat(a,"&q=language:").concat(n,"&perPage=").concat(i));case 3:return o=t.sent,t.abrupt("return",o.data);case 7:throw t.prev=7,t.t0=t["catch"](0),E(t.t0,"update");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,s,r,a,n){return t.apply(this,arguments)}}()),this.api=e,this.http=D},$=function(t){Object(j["a"])(s,t);var e=Object(k["a"])(s);function s(){return Object(O["a"])(this,s),e.call(this,"repositories")}return s}(M),J={name:"List",components:{},data:function(){return{RepositoriesService:new $,repositoriesData:[],page:1,language:"JavaScript"}},mounted:function(){this.fetchRepositories()},methods:{fetchRepositories:function(){var t=this;this.RepositoriesService.search("stars","desc",1,this.language,10).then((function(e){var s;t.page+=1,(s=t.repositoriesData).push.apply(s,Object(y["a"])(e.items))})).catch((function(t){console.log(t)}))},submittedDays:function(t){var e=new Date,s=new Date(t),r=Math.floor((e-s)/864e5);return r},formatDate:function(t){var e=new Date(t).toLocaleDateString("pt-BR");return e}}},T=J,q=Object(p["a"])(T,x,C,!1,null,null,null),U=q.exports,A={name:"HomePage",components:{Header:v,Search:w,List:U}},B=A,V=Object(p["a"])(B,i,o,!1,null,null,null),F=V.exports,G={components:{HomePage:F}},I=G,K=(s("034f"),Object(p["a"])(I,a,n,!1,null,null,null)),Q=K.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(Q)}}).$mount("#app")},"85ec":function(t,e,s){},eff7:function(t,e,s){t.exports=s.p+"img/symbols.3d89470a.svg"}});
//# sourceMappingURL=app.50f2e7ba.js.map