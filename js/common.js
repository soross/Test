var basep="../images/",//图片目录
	preLoadSource;//图片资源
preLoadSource = [//背景资源
	basep+"bg.jpg",
	basep+"1.jpg",
	basep+"2.jpg",
	basep+"4.jpg",
	basep+"5.jpg",
	basep+"7.jpg",
	basep+"card4.jpg",
	basep+"card5.jpg",
	basep+"card6.jpg",
	basep+"index_left.jpg",
	basep+"index_right.jpg",
	basep+"again.png",
	basep+"back.png",
	basep+"close.png",
	basep+"effectbg.png",
	basep+"img1.png",
	basep+"img2.png",
	basep+"img3.png",
	basep+"monkeymove.png",
	basep+"select1.png",
	basep+"select2.png",
	basep+"select3.png",
	basep+"select4.png",
	basep+"select5.png",
	basep+"select6.png",
	basep+"share.png",
	basep+"shareimg.png",
	basep+"show.png",
	basep+"tap_l.png",
	basep+"tap_r.png",
	basep+"tiptxt.png"
];
$(function(){
	FastClick.attach(document.body);
	//loader
	sourceArr=preLoadSource;//去除相同的资源
	new mo.Loader(sourceArr,{
		loadType : 0,
		minTime : 300,
		onLoading : function(count,total){
			var r = Math.round(count/total*100);
			$('.loading').find('#pro').text(r);
		},
		onComplete : function(time){
			setTimeout(function(){
				$('.loading').remove();
				$('.wrap').css('visibility','visible');
				$('.monkeyBox').addClass('movetop')
				$("body").bind("touchmove", function(event) {
				event.preventDefault()
				}, false);  
				delete mo.Loader;
				preLoadSource='';
			},600)	
		}
	});	
	//手机捕捉触摸事件
	document.addEventListener("touchstart", function(){}, true);
})
function progress(val){//进度条调用此方法
	$('.line p').css('width',val+'%');
}
