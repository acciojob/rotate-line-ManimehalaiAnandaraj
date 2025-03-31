//your JS code here. If required.
document.addEventListener('DOMContentLoaded',()=>{
	const line=document.getElementById('line');
	let angle=0;

	function rotateLine() {
		angle +=2;
		line.style.transform=`rotate(${angle}deg)`;
	}
	setInterval(rotateLine,20)	
});