var vm = new Vue({
	el:"#app",
	data:{ //模型（操作dom）
		title:"hello vuejs",
		totalMoney:0,
		productList:[],
		checkAllFlag:false,
		delFalg:false,
		curProduct:[]
	},
	filters:{//局部过滤器
		formatMoney: function(value){
			return "¥" +value.toFixed(2)//加货币符号跟两位小数
		}
		
	},//过滤器
//	ready:function(){},//查询接口，列表  vue1.0版本
	mounted: function(){
//		this.$nextTick(function(){
//			vm.cartView();
//		}) //vm实现方式跟this同理
		this.cartView();
	},//查询接口，列表 vue2.0版本
	methods:{//所有事件绑定都要在这里定义，一些方法
		cartView:function(){
//			this.title="Vue Hello";
//			var _this = this;
//			this.$http.get("data/cartData.json",{'id':123}).then(function(res){
//				_this.productList = res.data.result.list;
//				_this.totalMoney = res.data.result.totalMoney;
//			});
			
			//箭头函数的写法，更加简洁，指明this为内部函数
			let _this = this;
			this.$http.get("data/cartData.json",{'id':123}).then(res=>{
				this.productList = res.data.result.list;
//				this.totalMoney = res.data.result.totalMoney;
			});
	},
	//实现商品加减的方法
	changMoney:function(product,way){
		if(way>0){
			product.productQuantity++;
		}else{
			product.productQuantity--;
			if(product.productQuantity<1){
				product.productQuantity=1;
			}
		}
		this.calcTotalPrice();//调用计算总金额
	},
	//选中商品的方法
	selectdProduct :function(item){
		if(typeof item.checked == "undefined"){
			Vue.set(item,"checked",true);//全局注册变量（没有定义的变量，但需要用到---用Vue监测一个不存在的变量）
			//局部注册
//			this.$set(item,"checked",true);
		}else{
			item.checked = !item.checked;
		}
		this.calcTotalPrice();//调用计算总金额
	},
	//全选的方法
	checkAll :function(flag){
		this.checkAllFlag = flag;
		var _this = this;
		this.productList.forEach(function(item,index){
				if(typeof item.checked == "undefined"){
					_this.$set(item,"checked",_this.checkAllFlag);
				}else{
					item.checked =_this.checkAllFlag;
				}
			})
		this.calcTotalPrice();//调用计算总金额
	},
	//计算总金额
	calcTotalPrice: function(){
		var _this = this;
		_this.totalMoney = 0;
		this.productList.forEach(function(item,index){
			if(item.checked){
				_this.totalMoney += item.productPrice*item.productQuantity;
			}
		})
	},
	//保存点击删除的对象
	delConfirm:function(item){
		this.delFalg=true;
		this.curProduct=item;
	},
	//删除数据
	delProduct:function(){
//		this.$delProduct.delete(this.curProduct);//Vue1.0
		var index = this.productList.indexOf(this.curProduct);
		this.productList.splice(index,1);
		this.delFalg=false;
	}
	}	
});

//过滤器全局作用域写法
Vue.filter("money",function(value,type){
	return "¥" +value.toFixed(2) + type;//加货币符号跟两位小数
})
