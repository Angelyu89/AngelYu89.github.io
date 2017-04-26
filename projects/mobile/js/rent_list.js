$(function() {
	rentList();
	//	sub_rentOrder();

})

//短租工位
function rentList() {
	var date = new Date();

	var seperator1 = "-";
	var seperator2 = ":";
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	if(month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if(strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;

	$.ajax({
		type: "post",
		url: box_webapp_url + "/dzStation/getStationListVO",
		data: {
			date: currentdate,
			province: "",
			cityCode: "",
			spaceId: ""
		},
		dataType: "json",
		success: function(res) {
			console.log(res);

			if(res.code == 200) {

				var data = res.data;
				var str = '';

				for(var i = 0; i < data.length; i++) {

					str += '<div class="long-rent-nav-img-box rent-office-yuyuanbox" value="' + data[i].id + '">' +
						'<img src=' + data[i].img + ' id=' + data[i].id + ' alt="" />' +
						'<div class="long-price">' +
						'<span>' + data[i].spaceName + '</span>' +
						'<span class="long-price-rg">' + data[i].price + '元/天</span>' +
						'</div>' +
						'<div class="long-ip">' +
						'<span>' + data[i].spaceAddress + '</span>' +
						'<button class="long-price-rg ren_yueUserB" id=' + data[i].id + '>预约入驻</button>' +
						'</div>' +
						'<div class="rent-office-gongwei">' +
						'<span>' + data[i].count + '个工位可预订</span>' +
						'<span class="rent-office-yuding-time">' + data[i].openTime + '-' + data[i].closeTime + '</span>' +
						'</div>' +

						'</div>'

				}
				//				console.log(str);
				$(".rentoffice-listbox").html(str);
			}
		}

	});
}
//切换城市
$(".user_rent_city").change(function() {
	cityId = $(".user_rent_city option:selected").val();
	var date = new Date();

	var seperator1 = "-";
	var seperator2 = ":";
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	if(month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if(strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;

	$.ajax({
		type: "post",
		url: box_webapp_url + "/dzStation/getStationListVO",
		data: {
			date: currentdate,
			province: provinceId,
			cityCode:"",
			spaceId:cityId,
		},
		dataType: "json",
		success: function(res) {
			console.log(res);

			if(res.code == 200) {

				var data = res.data;
				var str = '';

				for(var i = 0; i < data.length; i++) {

					str += '<div class="long-rent-nav-img-box rent-office-yuyuanbox" value="' + data[i].id + '">' +
						'<img src="' + data[i].img + '" id=' + data[i].id + ' alt="" />' +
						'<div class="long-price">' +
						'<span>' + data[i].spaceName + '</span>' +
						'<span class="long-price-rg">' + data[i].price + '</span>' +
						'</div>' +
						'<div class="long-ip">' +
						'<span>' + data[i].spaceAddress + '</span>' +
						'<button class="long-price-rg ren_yueUserB" id=' + data[i].id + '>预约入驻</button>' +
						'</div>' +
						'<div class="rent-office-gongwei">' +
						'<span>' + data[i].saleCount + '个工位可预订</span>' +
						'<span class="rent-office-yuding-time">' + data[i].openTime + '-' + data[i].closeTime + '</span>' +
						'</div>' +
						'</div>'

				}
				//				console.log(str);
				$(".rentoffice-listbox").html(str);
			}
		}

	});

})