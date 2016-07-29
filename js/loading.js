(function(d){
	var loading_dom = d.createElement("div");
	with(loading_dom){
        addEventListener('touchstart',function(e){
             e.preventDefault();
         });
            addEventListener('touchmove',function(e){
             e.preventDefault();
         });
            addEventListener('touchend',function(e){
             e.preventDefault();
         });
    }
	loading_dom.className = "loading";
	loading_dom.innerHTML = '<div class="yellowMonkey"></div><p class="progress"><span id="pro">0</span><span>%</span></p>';
	var first=d.body.firstChild; //得到第一个元素
	d.body.insertBefore(loading_dom,first);
})(document);
