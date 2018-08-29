window.kyoscaling_fullscreen_ready = Boolean(false);

function show_video(title, div){
	
	var div2;
	
	$('#poupup').empty();
	
	div2=$(div).clone();
	
	$('#poupup').css('padding','5px 0px 0px 0px');
	div2.appendTo('#poupup');
	div2.show();
	
	$('#poupup').dialog({
		draggable: false,
		modal: true,
		resizable: false,
		width:645,
		height:413,
		position:'center',
		title: title,
		close: function(){$('#poupup').empty();$('body').unbind('mousewheel');}
	});
	
	
}


function show_video_button(){
	var button, button2;
	//button=$('a.ShowVideoLink div.PlayButton');
	button2=$('a.ShowVideoLink div.PlayButton2');
	
	var img=new Image();
	img.src="/images/v2/video_play2_active.png";
	
	button2.animate({opacity:1},1000,function(){
		//button2.css('background','url(/images/v2/video_play2_active.png) left top no-repeat');
		//button2.css('background','url(/images/v2/video_play2.png) left top no-repeat');
	});
}


function convertimagestopreview(){
	$('.ShowPhoto img.ShowPhotoNeed').each(function(){
		srcvalue=$(this).attr('src');
		srcvalue=srcvalue.replace('_mini','');
		$(this).attr('fullsrc',srcvalue);
		$(this).attr('alt',$('h1').text());
		$(this).removeClass('ShowPhotoneed');
		$(this).wrap('<a href="" title="" class="ShowPhoto"></a>')
		$(this).parent().attr('title',$(this).attr('alt'));
		$(this).parent().attr('href',$(this).attr('fullsrc'));
	});
}

$(function(){
	
	convertimagestopreview();
	
	$('a.ShowVideoLink').unbind('click').click(function(){
		if($(this).hasClass('Pdf')) return true;
		var div;
		div=$('#'+$(this).attr('video')).get(0);
		show_video($(this).attr('title'),div);
		return false;
	});	
	
	if($('a.ShowVideoLink').length){
		setTimeout(function(){
			show_video_button();
		},500);
	};
	
	var img2=new Image();
	img2.src="/images/v2/video2_active.jpg";
	var img3=new Image();
	img2.src="/images/v2/pdf_active.jpg";
});