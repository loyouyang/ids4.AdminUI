(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d8c4839a"],{"1af6":function(e,t,a){var r=a("63b6");r(r.S,"Array",{isArray:a("9003")})},"20fd":function(e,t,a){"use strict";var r=a("d9f6"),n=a("aebd");e.exports=function(e,t,a){t in e?r.f(e,t,n(0,a)):e[t]=a}},"549b":function(e,t,a){"use strict";var r=a("d864"),n=a("63b6"),i=a("241e"),o=a("b0dc"),l=a("3702"),s=a("b447"),c=a("20fd"),d=a("7cd6");n(n.S+n.F*!a("4ee1")(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,n,u,p=i(e),f="function"==typeof this?this:Array,b=arguments.length,m=b>1?arguments[1]:void 0,h=void 0!==m,w=0,y=d(p);if(h&&(m=r(m,b>2?arguments[2]:void 0,2)),void 0==y||f==Array&&l(y))for(t=s(p.length),a=new f(t);t>w;w++)c(a,w,h?m(p[w],w):p[w]);else for(u=y.call(p),a=new f;!(n=u.next()).done;w++)c(a,w,h?o(u,m,[n.value,w],!0):n.value);return a.length=w,a}})},"54a1":function(e,t,a){a("6c1c"),a("1654"),e.exports=a("95d5")},"75fc":function(e,t,a){"use strict";var r=a("a745"),n=a.n(r);function i(e){if(n()(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}var o=a("774e"),l=a.n(o),s=a("c8bb"),c=a.n(s);function d(e){if(c()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return l()(e)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(e){return i(e)||d(e)||u()}a.d(t,"a",function(){return p})},"774e":function(e,t,a){e.exports=a("d2d5")},"95d5":function(e,t,a){var r=a("40c3"),n=a("5168")("iterator"),i=a("481b");e.exports=a("584a").isIterable=function(e){var t=Object(e);return void 0!==t[n]||"@@iterator"in t||i.hasOwnProperty(r(t))}},"9e5d":function(e,t,a){},a745:function(e,t,a){e.exports=a("f410")},c8bb:function(e,t,a){e.exports=a("54a1")},d2d5:function(e,t,a){a("1654"),a("549b"),e.exports=a("584a").Array.from},da98:function(e,t,a){"use strict";var r=a("9e5d"),n=a.n(r);n.a},edb7:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-scrollbar",{attrs:{"wrap-class":"scrollbar-wrapper-y"}},[a("div",{staticStyle:{height:"20px"}}),a("el-form",{ref:"form",attrs:{"status-icon":"",model:e.data,rules:e.rules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"客户端id",prop:"clientId"}},[a("el-input",{attrs:{size:"mini"},model:{value:e.data.clientId,callback:function(t){e.$set(e.data,"clientId",t)},expression:"data.clientId"}})],1),a("el-form-item",{attrs:{label:"客户端名称",prop:"clientName"}},[a("el-input",{attrs:{size:"mini"},model:{value:e.data.clientName,callback:function(t){e.$set(e.data,"clientName",t)},expression:"data.clientName"}})],1),a("el-form-item",{attrs:{label:"授权类型",prop:"allowedGrantTypes"}},[a("el-checkbox-group",{model:{value:e.data.allowedGrantTypes,callback:function(t){e.$set(e.data,"allowedGrantTypes",t)},expression:"data.allowedGrantTypes"}},[a("el-checkbox",{attrs:{label:"client_credentials",name:"allowedGrantTypes"}}),a("el-checkbox",{attrs:{label:"password",name:"allowedGrantTypes"}}),a("el-checkbox",{attrs:{label:"implicit",name:"allowedGrantTypes"}}),a("el-checkbox",{attrs:{label:"hybrid",name:"allowedGrantTypes"}})],1)],1),a("el-form-item",{attrs:{label:"访问token"}},[a("el-switch",{model:{value:e.data.allowAccessTokensViaBrowser,callback:function(t){e.$set(e.data,"allowAccessTokensViaBrowser",t)},expression:"data.allowAccessTokensViaBrowser"}})],1),a("el-form-item",{attrs:{label:"登入跳转",prop:"redirectUris"}},[a("el-input",{attrs:{size:"mini"},model:{value:e.data.redirectUris[0],callback:function(t){e.$set(e.data.redirectUris,0,t)},expression:"data.redirectUris[0]"}})],1),a("el-form-item",{attrs:{label:"登出跳转",prop:"postLogoutRedirectUris"}},[a("el-input",{attrs:{size:"mini"},model:{value:e.data.postLogoutRedirectUris[0],callback:function(t){e.$set(e.data.postLogoutRedirectUris,0,t)},expression:"data.postLogoutRedirectUris[0]"}})],1),a("el-form-item",{attrs:{label:"设置跨域",prop:"allowedCorsOrigins"}},[a("el-input",{attrs:{size:"mini"},model:{value:e.data.allowedCorsOrigins[0],callback:function(t){e.$set(e.data.allowedCorsOrigins,0,t)},expression:"data.allowedCorsOrigins[0]"}})],1),a("el-form-item",{attrs:{label:"访问资源",prop:"allowedScopes"}},[a("el-checkbox-group",{model:{value:e.data.allowedScopes,callback:function(t){e.$set(e.data,"allowedScopes",t)},expression:"data.allowedScopes"}},[a("el-checkbox",{attrs:{label:"openid",name:"allowedScopes"}}),a("el-checkbox",{attrs:{label:"profile",name:"allowedScopes"}}),e._l(e.apiresources,function(e){return a("el-checkbox",{key:e,attrs:{label:e,name:"allowedScopes"}})})],2)],1),a("el-form-item",[a("el-button",{attrs:{type:"info",size:"mini"},on:{click:function(t){e.close(!1)}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.onSubmit()}}},[e._v("确认")])],1)],1)],1)},n=[],i=(a("96cf"),a("3b8d")),o=a("a4bb"),l=a.n(o),s=(a("ac6a"),a("7f7f"),a("75fc")),c={components:{},data:function(){var e=this,t=function(t){var a=e;return function(e,r,n){if(-1==a.data.allowedGrantTypes.indexOf("implicit")&&-1==a.data.allowedGrantTypes.indexOf("hybrid"))return n();r&&r.length&&r[0]?n():n(new Error(t))}};return{data:{clientId:"",clientName:"",allowedGrantTypes:[],allowedScopes:[],allowAccessTokensViaBrowser:!1,redirectUris:[""],postLogoutRedirectUris:[""],allowedCorsOrigins:[""]},apiresources:[],rules:{clientId:[{required:!0,message:"客户端id不能为空！",trigger:"blur"}],allowedGrantTypes:[{type:"array",required:!0,message:"至少选择一个授权类型！",trigger:"blur"}],allowedScopes:[{type:"array",required:!0,message:"至少选择一个访问资源！",trigger:"blur"}],redirectUris:[{validator:t("登入跳转不能为空！"),trigger:"blur"}],postLogoutRedirectUris:[{validator:t("登出跳转不能为空！"),trigger:"blur"}]}}},computed:{needredirectUris:function(){return-1!=this.data.allowedGrantTypes.indexOf("implicit")||-1!=this.data.allowedGrantTypes.indexOf("hybrid")}},mounted:function(){var e=this;this.$http.post("/base/api/ApiResource/Query",{pageIndex:1,pageSize:999}).then(function(t){var a;(a=e.apiresources).push.apply(a,Object(s["a"])(t.list.map(function(e){return e.name})))});var t=this.$router.currentRoute.query;t.id&&this.$http.get("/base/api/Client/Query?clientid="+t.id).then(function(t){l()(e.data).forEach(function(a){e.data[a]=t[a]})})},methods:{close:function(e){this.$store.commit("tab/closeAndTo",{fullPath:"/home/client"})},onSubmit:function(){var e=this;this.$refs.form.validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return");case 2:if("home.client.add"!=e.$router.currentRoute.name){t.next=7;break}return t.next=5,e.$http.post("/base/api/Client/Create",e.data);case 5:t.next=10;break;case 7:if("home.client.update"!=e.$router.currentRoute.name){t.next=10;break}return t.next=10,e.$http.post("/base/api/Client/Update",e.data);case 10:e.$store.commit("tab/closeAndTo",{fullPath:"/home/client",flush:"flush"}),console.log(e.data);case 12:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())}}},d=c,u=(a("da98"),a("2877")),p=Object(u["a"])(d,r,n,!1,null,"58d823d7",null);p.options.__file="ClientEdit.vue";t["default"]=p.exports},f410:function(e,t,a){a("1af6"),e.exports=a("584a").Array.isArray}}]);
//# sourceMappingURL=chunk-d8c4839a.bc196334.js.map