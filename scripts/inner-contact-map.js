/* MULTI LOCATION */

function initialize() {
	var latlng  = new google.maps.LatLng(32.333120, -96.135200);
	var latlng2 = new google.maps.LatLng(32.333120, -96.135200);
	var latlng3 = new google.maps.LatLng(32.333120, -96.135200);
	var imageCustom = "https://s3.amazonaws.com/static.organiclead.com/Site-5b18209f-04ed-4b33-9b4c-1b1d1de10137/InnerContactAssets/marker.png";

	var stylesArray = [
		{
			featureType: 'poi.medical',
			elementType: '',
			stylers: [
				{visibility: 'off'},
			]
		}
	]
	/* MAP 1 SETTINGS */ 
	if(!$('#mapCustom1').length == 0){
		var map =  new google.maps.Map(document.getElementById("mapCustom1"), {
			zoom: 15,
			center: latlng,
			disableDefaultUI: true,
			styles: stylesArray
		});
		var myMarker = new google.maps.Marker({
			position: latlng,
			map: map,
			icon: imageCustom,
			title: 'Location 1'
		});
	}
	/* MAP 2 SETTINGS */ 
	if(!$('#mapCustom2').length == 0){
		var map2 = new google.maps.Map(document.getElementById("mapCustom2"),{
			zoom: 15,
			center: latlng2,
			disableDefaultUI: true,
			styles: stylesArray

		});
		var myMarker2 = new google.maps.Marker({
			position: latlng2,
			map: map2,
			icon: imageCustom,
			title: 'Location 3'
		});
	}
	/* MAP 3 SETTINGS */ 
	if(!$('#mapCustom3').length == 0){
		var map3 = new google.maps.Map(document.getElementById("mapCustom3"), {
			zoom: 15,
			center: latlng3,
			disableDefaultUI: true,
			styles: stylesArray

		});
		var myMarker3 = new google.maps.Marker({
			position: latlng3,
			map: map3,
			icon: imageCustom,
			title: 'Location 3'
		});
	}
}
google.maps.event.addDomListener(window, 'load', initialize);
/* END MULTI LOCATION */

if(!$('#mapCustomstyle1').length == 0){
	console.log('xx');
	function initMap() {
		var latlng = new google.maps.LatLng(32.333120, -96.135200);
		/*var default_view = {
			     
			lat: 32.89030007828348,
			lng: -117.17989177801535
		};*/
		var imageCustom = "https://s3.amazonaws.com/static.organiclead.com/Site-5b18209f-04ed-4b33-9b4c-1b1d1de10137/InnerContactAssets/marker.png";
		var stylesArray = [
			{
				featureType: 'poi.medical',
				elementType: '',
				stylers: [
					{visibility: 'off'},
				]
			}
		]
		var mapCustom = new google.maps.Map(document.getElementById('mapCustomstyle1'), {
			zoom: 14,
			disableDefaultUI: true,
			center: latlng,
			styles: stylesArray
		});

		var Location_1 = new google.maps.Marker({
			position: latlng,
			map: mapCustom,
			icon: imageCustom,
			title: 'Location Name'
		});

	}

	google.maps.event.addDomListener(window, 'load', initMap);
}

if(!$('#mapCustomstyle2').length == 0){
	function initMap2() {
		var latlng = new google.maps.LatLng(32.333120, -96.135200);
		/*var default_view = {
			lat: 35.826810,
			lng: -78.617500
		};*/
		var imageCustom = "https://s3.amazonaws.com/static.organiclead.com/Site-5b18209f-04ed-4b33-9b4c-1b1d1de10137/InnerContactAssets/style2_icon.png";
		var stylesArray = [
			{
				featureType: 'poi.medical',
				elementType: '',
				stylers: [
					{visibility: 'off'},
				]
			}
		]
		var mapCustom = new google.maps.Map(document.getElementById('mapCustomstyle2'), {
			zoom: 14,
			disableDefaultUI: true,
			center: latlng,
			styles: stylesArray
		});

		var Location_1 = new google.maps.Marker({
			position: latlng,
			map: mapCustom,
			icon: imageCustom,
			title: 'Location Name'
		});

	}
	google.maps.event.addDomListener(window, 'load', initMap2);
}

if(!$('#mapCustomstyle3').length == 0){
	function initMap3() {
		var latlng = new google.maps.LatLng(32.333120, -96.135200);
		/*var default_view = {
			lat: 35.826810,
			lng: -78.617500
		};*/
		var imageCustom = "https://s3.amazonaws.com/static.organiclead.com/Site-5b18209f-04ed-4b33-9b4c-1b1d1de10137/InnerContactAssets/style2_icon.png";
		var stylesArray = [
			{
				featureType: 'poi.medical',
				elementType: '',
				stylers: [
					{visibility: 'off'},
				]
			}
		]
		var mapCustom = new google.maps.Map(document.getElementById('mapCustomstyle3'), {
			zoom: 14,
			disableDefaultUI: true,
			center: latlng,
			styles: stylesArray
		});

		var Location_1 = new google.maps.Marker({
			position: latlng,
			map: mapCustom,
			icon: imageCustom,
			title: 'Location Name'
		});

	}
	google.maps.event.addDomListener(window, 'load', initMap3);
}


$(function($) {
	var templateBackground = $('.contact-template.style-1').attr('data-background-header-display');

	if (templateBackground == 'No' || templateBackground == 'no' ) {
		$('#ry-pg-banner').hide();
	}


});


$(window).resize(function () {
	var div = $('.style-2 .custom-social-wrapper .social-inner-wrap li');
	var width = div.width();
	setTimeout(function() {
		div.css('height', width);
	}, 100);
	

	var div2 = $('.style-3 .custom-social-wrapper .social-inner-wrap li');
	var width = div.width();
	setTimeout(function() {
		div2.css('height', width);
	}, 100);

});