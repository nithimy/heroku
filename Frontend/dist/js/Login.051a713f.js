(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{"0604":function(t,a,e){},"5af4":function(t,a,e){},b97f:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"navi-bar"}},[e("div",{staticClass:"left"},[e("div",{staticClass:"btn-back",on:{click:function(a){return t.$router.go(-1)}}},[t._m(0),e("label",[t._v("Back")])])]),e("div",{staticClass:"center"},[e("label",[t._v(t._s(t.pageName))])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"icon"},[e("img",{attrs:{src:"/img/btn/chevron.png"}})])}],i={name:"topNavibar",props:{pageName:String}},r=i,o=(e("babd"),e("2877")),l=Object(o["a"])(r,s,n,!1,null,null,null);a["a"]=l.exports},babd:function(t,a,e){"use strict";var s=e("0604"),n=e.n(s);n.a},dd7b:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"welcome-page"},[e("topNavi"),e("div",{staticClass:"content-page"},[e("div",{staticClass:"wrapper"},[t._m(0),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"E-mail"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}}),e("div",{staticClass:"btn-wrapper"},[e("button",{staticClass:"sign-in",on:{click:t.signin}},[e("router-link",{attrs:{to:"/home"}},[e("div",{staticClass:"single-land"},[e("label",[t._v("Sign In")])])])],1)])])]),t._m(1)],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-header"},[e("h1",{staticClass:"pagename"},[t._v("Sign In with E-mail")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bottom-sec"},[e("div",{staticClass:"wrapper"},[e("label",{staticClass:"bottom-label"},[t._v("Forget your password?")]),e("label",{staticClass:"bottom-btn"},[t._v("Reset password")])])])}],i=e("b97f"),r=e("bb36"),o={name:"Login-Page",components:{topNavi:i["a"]},data:function(){return{email:"",password:""}},methods:{signin:function(){var t=this;r["a"].post("/login",{email:this.email,password:this.password}).then((function(t){console.log(t)})).catch((function(a){a.response?t.errorStatus=a.response.data.message:t.errorStatus="Error: Network Error"}))}}},l=o,c=(e("f8c1"),e("2877")),p=Object(c["a"])(l,s,n,!1,null,"fa483aa6",null);a["default"]=p.exports},f8c1:function(t,a,e){"use strict";var s=e("5af4"),n=e.n(s);n.a}}]);
//# sourceMappingURL=Login.051a713f.js.map