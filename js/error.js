/*
* @Author: 宏达
* @Date:   2017-09-17 20:03:10
* @Last Modified by:   宏达
* @Last Modified time: 2017-09-17 22:35:48
*/
window.onload=function(){
let time=document.getElementById('time');
let a=setInterval(function(){
	if(time.innerText<=1){
		clearTimeout(a);
		location.replace('login.html');
	}
	time.innerText-=1;
}, 1000)
}