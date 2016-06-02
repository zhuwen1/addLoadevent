function addLoadEvent(func){
	var oldloa = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			onload();
			func();
		}
	}
}
