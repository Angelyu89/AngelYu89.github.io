webpackJsonp([1],{100:function(t,e){},103:function(t,e,o){function s(t){o(100)}var a=o(8)(o(75),o(109),s,null,null);t.exports=a.exports},104:function(t,e,o){function s(t){o(97)}var a=o(8)(o(76),o(106),s,"data-v-07cec666",null);t.exports=a.exports},105:function(t,e,o){function s(t){o(98)}var a=o(8)(o(77),o(107),s,"data-v-0cf9e20f",null);t.exports=a.exports},106:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello"},[o("h1",[t._v(t._s(t.msg))]),t._v(" "),o("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),o("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1),t._v(" "),o("p",[o("router-link",{attrs:{to:"/user/foo"}},[t._v("/user/foo")]),t._v(" "),o("router-link",{attrs:{to:"/user/foo/profile"}},[t._v("/user/foo/profile")]),t._v(" "),o("router-link",{attrs:{to:"/user/foo/posts"}},[t._v("/user/foo/posts")])],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[o("li",[o("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[t._v("Gitter Chat")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),o("br"),t._v(" "),o("li",[o("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[o("li",[o("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),o("li",[o("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),o("li",[o("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}},107:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pos"},[o("div",[o("el-row",[o("el-col",{staticClass:"pos-order",attrs:{span:7,id:"order-list"}},[o("el-tabs",[o("el-tab-pane",{attrs:{label:"点餐"}},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","show-summary":""}},[o("el-table-column",{attrs:{prop:"goodsName",label:"商品"}}),t._v(" "),o("el-table-column",{attrs:{prop:"count",label:"量",width:"50"}}),t._v(" "),o("el-table-column",{attrs:{prop:"price",label:"金额",width:"70"}}),t._v(" "),o("el-table-column",{attrs:{label:"操作",width:"100",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){t.delSingleGoods(e.row)}}},[t._v("删除")]),t._v(" "),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){t.addOrderList(e.row)}}},[t._v("增加")])]}}])})],1),t._v(" "),o("div",{staticClass:"totalDiv"},[o("small",[t._v("数量：")]),t._v(t._s(t.totalCount)+"\n          "),o("small",[t._v("金额")]),t._v(t._s(t.totalMoney)+"\n         ")]),t._v(" "),o("div",{staticClass:"div-btn"},[o("el-button",{attrs:{type:"warning"}},[t._v("挂单")]),t._v(" "),o("el-button",{attrs:{type:"danger"},on:{click:t.delAllGoods}},[t._v("删除")]),t._v(" "),o("el-button",{attrs:{type:"success"},on:{click:t.checkout}},[t._v("结账")])],1)],1),t._v(" "),o("el-tab-pane",{attrs:{label:"挂单"}},[t._v("\n          挂单\n        ")]),t._v(" "),o("el-tab-pane",{attrs:{label:"外卖"}},[t._v("\n          外卖\n        ")])],1)],1),t._v(" "),o("el-col",{attrs:{span:17}},[o("div",{staticClass:"often-goods"},[o("div",{staticClass:"title"},[t._v("常用商品")]),t._v(" "),o("div",{staticClass:"often-goods-list"},[o("ul",t._l(t.oftenGoods,function(e){return o("li",{on:{click:function(o){t.addOrderList(e)}}},[o("span",[t._v(t._s(e.goodsName))]),t._v(" "),o("span",{staticClass:"o-price"},[t._v(t._s(e.price))])])}))])]),t._v(" "),o("div",{staticClass:"goods-type"},[o("el-tabs",[o("el-tab-pane",{attrs:{label:"汉堡"}},[o("ul",{staticClass:"cookList"},t._l(t.type0Goods,function(e){return o("li",{on:{click:function(o){t.addOrderList(e)}}},[o("span",{staticClass:"foodImg"},[o("img",{attrs:{src:e.goodsImg,width:"100%"}})]),t._v(" "),o("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),t._v(" "),o("span",{staticClass:"foodPrice"},[t._v(t._s(e.price))])])}))]),t._v(" "),o("el-tab-pane",{attrs:{label:"小食"}},[o("ul",{staticClass:"cookList"},t._l(t.type1Goods,function(e){return o("li",{on:{click:function(o){t.addOrderList(e)}}},[o("span",{staticClass:"foodImg"},[o("img",{attrs:{src:e.goodsImg,width:"100%"}})]),t._v(" "),o("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),t._v(" "),o("span",{staticClass:"foodPrice"},[t._v(t._s(e.price))])])}))]),t._v(" "),o("el-tab-pane",{attrs:{label:"饮料"}},[o("ul",{staticClass:"cookList"},t._l(t.type2Goods,function(e){return o("li",{on:{click:function(o){t.addOrderList(e)}}},[o("span",{staticClass:"foodImg"},[o("img",{attrs:{src:e.goodsImg,width:"100%"}})]),t._v(" "),o("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),t._v(" "),o("span",{staticClass:"foodPrice"},[t._v(t._s(e.price))])])}))]),t._v(" "),o("el-tab-pane",{attrs:{label:"套餐"}},[o("ul",{staticClass:"cookList"},t._l(t.type3Goods,function(e){return o("li",{on:{click:function(o){t.addOrderList(e)}}},[o("span",{staticClass:"foodImg"},[o("img",{attrs:{src:e.goodsImg,width:"100%"}})]),t._v(" "),o("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),t._v(" "),o("span",{staticClass:"foodPrice"},[t._v(t._s(e.price))])])}))])],1)],1)])],1)],1)])},staticRenderFns:[]}},108:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("leftNav"),t._v(" "),o("div",{staticClass:"main"},[o("router-view")],1)],1)},staticRenderFns:[]}},109:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"left-nav"},[o("ul",[o("li",[o("i",{staticClass:"icon iconfont icon-shouhuo"}),t._v(" "),o("div",[t._v("收银")])]),t._v(" "),o("li",[o("i",{staticClass:"icon iconfont icon-shouhuo"}),t._v(" "),o("div",[t._v("店铺")])]),t._v(" "),o("li",[o("i",{staticClass:"icon iconfont icon-hanbaobao"}),t._v(" "),o("div",[t._v("商品")])]),t._v(" "),o("li",[o("i",{staticClass:"icon iconfont icon-yingxiaoyuan"}),t._v(" "),o("div",[t._v("会员")])]),t._v(" "),o("li",[o("i",{staticClass:"icon iconfont icon-diannao"}),t._v(" "),o("div",[t._v("统计")])])])])}]}},30:function(t,e,o){"use strict";var s=o(3),a=o(110),n=o(104),i=(o.n(n),o(105)),l=o.n(i);s.default.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Pos",component:l.a}]})},32:function(t,e){},33:function(t,e,o){function s(t){o(99)}var a=o(8)(o(74),o(108),s,null,null);t.exports=a.exports},74:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(103),a=o.n(s);e.default={name:"app",components:{leftNav:a.a}}},75:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"leftNav",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},76:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},77:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(55),a=o.n(s);e.default={name:"pos",created:function(){var t=this;a.a.get("http://jspang.com/DemoApi/oftenGoods.php").then(function(e){t.oftenGoods=e.data}).catch(function(t){alert("网络错误，不能访问")}),a.a.get("http://jspang.com/DemoApi/typeGoods.php").then(function(e){t.type0Goods=e.data[0],t.type1Goods=e.data[1],t.type2Goods=e.data[2],t.type3Goods=e.data[3]}).catch(function(t){alert("网络错误，不能访问")})},mounted:function(){var t=document.body.clientHeight;document.getElementById("order-list").style.height=t+"px"},methods:{addOrderList:function(t){this.totalMoney=0,this.totalCount=0;for(var e=!1,o=0;o<this.tableData.length;o++)this.tableData[o].goodsId==t.goodsId&&(e=!0);if(e){this.tableData.filter(function(e){return e.goodsId==t.goodsId})[0].count++}else{var s={goodsId:t.goodsId,goodsName:t.goodsName,price:t.price,count:1};this.tableData.push(s)}this.getAllMoney()},delSingleGoods:function(t){this.tableData=this.tableData.filter(function(e){return e.goodsId!=t.goodsId}),this.getAllMoney()},delAllGoods:function(){this.tableData=[],this.totalCount=0,this.totalMoney=0},checkout:function(){0!=this.totalCount?(this.tableData=0,this.totalCount=0,this.totalMoney=0,this.$message({message:"结账成功,祝您购物愉快！",type:"success"})):this.$message.error("您还没有加入商品，请核对")},getAllMoney:function(){var t=this;this.totalCount=0,this.totalMoney=0,this.tableData&&this.tableData.forEach(function(e){t.totalCount+=e.count,t.totalMoney=t.totalMoney+e.price*e.count})}},data:function(){return{tableData:[],oftenGoods:[],type0Goods:[],type1Goods:[],type2Goods:[],type3Goods:[],totalCount:0,totalMoney:0}}}},78:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(3),a=o(33),n=o.n(a),i=o(30),l=o(31),r=o.n(l),c=o(32);o.n(c);s.default.use(r.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:i.a,template:"<App/>",components:{App:n.a}})},97:function(t,e){},98:function(t,e){},99:function(t,e){}},[78]);
//# sourceMappingURL=app.ad3199dfed1db2d27183.js.map