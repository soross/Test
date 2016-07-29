Jacky.util.landscape({color:'#861f1f'});
	(function(d){
		$('#scroller li').css("width",$(window).width()+"px"); //设置滚动页面li的宽度
		var myScroll,
			scroller=$('#scroller'),
			item=scroller.find('li'),
			length=item.length,//多少项
			width=item.width();//每项元素宽度		
		scroller.css('width',width*length);	
		d.addEventListener('DOMContentLoaded',function(){
			myScroll = new iScroll('wrapper',{
				hScrollbar:false,
				vScrollbar:false,
				lockDirection: false,
				freeScroll:true,
				onBeforeScrollStart: function (e) {
					e.preventDefault(); 
					myScroll.refresh();
					$('.tipBox').fadeOut();
				}
			});
		}, false);
		//d.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	})(document);

	var audio = document.getElementById('car_audio');
	//限制字数函数
	function getLimit(){
        var len = Math.floor($.trim($('.comment-area').val()).length);
        if(len>=45){
        	Jacky.util.alertBox('此祝福语只可输入45个字以内哦');
        }      
	}
	
	//选卡片
	function selectCard(obj){		
		Jacky.util.pageLoad.show({txt:'载入中'});
		var srcImg = $(obj).find('.bgImg').attr("src"),
		    textTxt = $(obj).find('textarea').val(),
			toTxt = $(obj).find(".topName").val(),
			fromTxt = $(obj).find(".bottomName").val(),
			index = $(obj).index();		
		setTimeout(function(){
			$('.pageStage2').hide();
			$('.pageStage3').show();
			Jacky.util.pageLoad.remove();
		},600)
		$('.imgList').show().find('img').eq(index).removeClass('hide').siblings().addClass('hide');
		$('.editorBox').find('.show').data('num',index);
		$('.editorBox').find('textarea').val(textTxt);
		$('.editorBox').find('.topName').val(toTxt);
		$('.editorBox').find('.bottomName').val(fromTxt);
		$('.editorBox').find('.tapR').attr("data-num",index);
		$('.editorBox').find('.tapL').attr("data-num",index);
	}
	
	//返回选卡片
	function backSelectCard(){
		$('.pageStage2').fadeIn();
		$('.pageStage3').fadeOut();
		snow.stop();
		audio.pause();
	}
	//music
	var i = 0 ;	
	function music(obj){
		var dir = $(obj).attr("data-dir");
		if(dir == "left"){
			i--;
			if(i==-1){i=3;}		
		}
		if(dir == "right"){
			i++;
			if(i==4){i=0;}
		}
		if(i==0){
			audio.setAttribute('src','');
			$('.music b').html("无音乐");
		}else{
			audio.setAttribute('src','../images/music'+i+'.mp3');
			audio.play();
			$('.music b').html("背景音乐"+i);			
		}
		
	}
	//效果
	var j = 0;	
	function effecting(obj){
		var dir = $(obj).attr("data-dir");
		if(dir == "left"){
			j--;
			if(j == -1){j = 3;}		
		}
		if(dir == "right"){
			j++;
			if(j == 4){j = 0;}
		}
		if(j==0){$('.effective b').html("无特效");}	
		if(j==1){$('.effective b').html("红包特效");}
		if(j==2){$('.effective b').html("爱心特效");}
		if(j==3){$('.effective b').html("雪花特效");}	
		snow.stop();
		snow.start(j);
	}
	
	//浏览
	function showDangle(obj){
		var textTxt = $('.editorBox').find('textarea').val(),
			dataNum = $(obj).attr('data-num'),
			toTxt = $("#to").val(),
			fromTxt = $("#from").val();
		$('.editorBox,.imgList').hide();
		$('.showBox,.imgList2').show(1000);	
		$('.imgList2').find('img').eq(dataNum).removeClass('hide').siblings().addClass('hide');	
		$('.showBox').find('textarea').val(textTxt);
		$('.showBox').find('.topName').val(toTxt);
		$('.showBox').find('.bottomName').val(fromTxt);
	}
	function hideDangle(){
		$('.editorBox,.imgList').show();
		$('.showBox,.imgList2').hide();	
	}
	
	//文案切换
	var a = 0;
	function writing(obj){
		var dataNum = $(obj).attr('data-num'),
		 	dir = $(obj).attr("data-dir");
		if(dir == "left"){
			a--;
			if(a == -1){a = 3;}		
		}
		if(dir == "right"){
			a++;
			if(a == 4){a = 0}
		}		
		if(dataNum == 0){
			$('#to').val(data.children[a].to);$('#descript').val(data.children[a].descript);$('#from').val(data.children[a].from);
		}
		if(dataNum == 1){
			$('#to').val(data.leader[a].to);$('#descript').val(data.leader[a].descript);$('#from').val(data.leader[a].from);
		}
		if(dataNum == 2){
			$('#to').val(data.colleagues[a].to);$('#descript').val(data.colleagues[a].descript);$('#from').val(data.colleagues[a].from);
		}
		if(dataNum == 3){
			$('#to').val(data.parent[a].to);$('#descript').val(data.parent[a].descript);$('#from').val(data.parent[a].from);
		}
		if(dataNum == 4){
			$('#to').val(data.lover[a].to);$('#descript').val(data.lover[a].descript);$('#from').val(data.lover[a].from);
		}
		if(dataNum == 5){
			$('#to').val(data.friend[a].to);$('#descript').val(data.friend[a].descript);$('#from').val(data.friend[a].from);
		}		
	}	
	
	//分享
	function share(){
	    Jacky.util.popup({elem:$('.shareCover'),move:true});//popup	  
	}
	$(function(){
		window.tab1 = new mo.PageSlide({
			target: $('#slide01 .content li'),
			direction:'x',
			loop:true,
			event : {
				"change" : function(){
					$(".pageHold").find("span").removeClass("on");
					$(".pageHold").find("span").eq(tab1.curPage).addClass("on");
				}
			}
		});
		$('#monkey').on('touchmove',function(){
			window.scrollTo(0,0);
			$(".monkey").fadeOut(300);
			
			setTimeout(function(){
				$("#leftBox").animate({'left':'-50%'},800);
				$("#rightBox").animate({'right':'-50%'},800);
				$("body").unbind("touchmove");
			},300)
			setTimeout(function(){
				$('.pageStage2').animate({'opacity':1},800);
			},600)
			setTimeout(function(){
				$("#index").hide();				
			},1100)
		})		
		//回顾2015
		$("#again,.scrollCover i.close").on('tap', function(e) {
	    	e.preventDefault();
			Jacky.util.popup({elem:$('.scrollCover'),move:true});//popup	  
			var slide01_w = $("#slide01").width();
			$("#slide01 .content").css({"width":slide01_w*6+"px"})
		});
		
	})