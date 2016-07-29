var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	an = undefined,
	bodyW = document.getElementsByTagName("body")[0].offsetWidth,
	bodyH = document.getElementsByTagName("body")[0].offsetHeight,
	img = new Image();
//var imgArr = ["../images/img1.png","../images/img2.png","../images/img3.png"]
	
//重设宽高
canvas.width = bodyW;
canvas.height = bodyH;

//requestAnimationFrame兼容性处理
(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
       return window.setTimeout(callback, 1000 / 60);//1秒60帧
    };
    window.requestAnimationFrame = requestAnimationFrame;
    
    window.cancelNextRequestAnimationFrame = window.cancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || 
    function(callback){
	    	window.clearTimeout(callback);
	    };
})();
//雪花对象
(function(){
	window.snow = {
		max:10,	// 雪花数量
		particles:[], 	//雪花数组{x:0,y:0,speed:5}
		imgArr:["../images/img1.png","../images/img2.png","../images/img3.png"],
		//生成初始的随机点
		createSnow:function(j){			
			var length = snow.max;
			if(j==0){
				img.src='';
			}
			if(j==1){
				img.src='../images/img1.png';
			}
			if(j==2){
				img.src='../images/img2.png';
			}
			if(j==3){
				img.src='../images/img3.png';
			}
			//console.log(snow.imgArr[j]);
			context.clearRect(0,0,bodyW,bodyH);	
			for(var i = 0; i < length ; i++){
				var x = Math.random()*bodyW,
					y = Math.random()*bodyH,
					w = Math.random()*1+0.2,
					speed = Math.random()*0.8 + 0.4;
				//压入数据	
				snow.particles.push({
					"x": x,
					"y": y,
					"w": w,
					"speed": speed//速度
				});
				context.moveTo(x,y);			
			}
			context.drawImage(img,x,y,25*w,25*w);			
		},
		//改变位置
		animationFrame:function(j){
			var length = snow.max;
			if(j==1){
				img.src='../images/img1.png';
			}
			if(j==2){
				img.src='../images/img2.png';
			}
			if(j==3){
				img.src='../images/img3.png';
			}
			context.clearRect(0,0,bodyW , bodyH);
			//context.beginPath();
			//循环所有点
			for(var j = 0; j < length ; j++){	
				//根据自身速度改变坐标
				context.moveTo(snow.particles[j].x , snow.particles[j].y +=snow.particles[j].speed );
				var p = snow.particles[j];
				context.drawImage(img,p.x,p.y,25*p.w,25*p.w);	
				if(p.x > bodyW || p.y > bodyH || p.x < 0){
					snow.particles[j].x = Math.random()*bodyW;
					snow.particles[j].y = 0;
				}	
			}
			
			//循环snow.animationFrame动画帧方法
			an = requestAnimationFrame(snow.animationFrame);
		},
		//开始
		start:function(j){
			snow.createSnow(j);
			snow.animationFrame(j);
		},
		//结束
		stop:function(){
			if (an) {
			 	window.cancelNextRequestAnimationFrame(an);	
			 	context.clearRect(0,0,bodyW,bodyH);//清空 
			  	an = undefined;
			}
		}
	}
})();