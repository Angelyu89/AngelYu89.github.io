var vm = new Vue({
	el:".container",
	data:{
		litmtName:3, //默认卡片显示长度
		addressList:[],
		currentIndex:0,//默认卡片选中状态
		shippingMethod:1,//默认配送方式
	},
	mounted: function(){
//		this.$nextTick(function(){
//			vm.getAddressList();
//		});
		this.getAddressList();
	},
	//控制只显示3条数据
	computed:{
		filterAddress:function(){
			return this.addressList.slice(0,this.litmtName);
		}
	},
	methods:{
		getAddressList: function(){
			var _this = this;
			this.$http.get("data/address.json").then(function(response){
				var res = response.data;
				if(res.status=="0"){
					_this.addressList = res.result;
				}
			})
		},
		//点击更多
		loadMore: function(){
			this.litmtName = this.addressList.length;
		},
		//设置默认
		setdefault: function(addressId){
			this.addressList.forEach(function(address,index){
				if(address.addressId==addressId){
					address.isDefault = true;
				}else{
					address.isDefault =false;
				}
				
			})
		}
	}
	
})
