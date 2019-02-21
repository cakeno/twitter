const btnTweet= document.getElementById('btn-tweet');
document.getElementById('btn-tweet').addEventListener('click',()=>{
    hideTimelineB();
    clickTweet();
})
function leftZeros(number){
	if(number < 10){
		newNumber= '0' + number
		return newNumber
}else{
	return number
	}
}
function clickTweet(){
    const lastTweet= document.createElement('li');
    let msgTweet= document.getElementById('msg-tweet').value;
    let lengthTweet= msgTweet.length;
    let today = new Date();
    let hour= today.getHours();
    let min= today.getMinutes();
    let  time= leftZeros(hour) +":"+leftZeros(min);
    if(lengthTweet !== 0 || lengthTweet <= 140){
        lastTweet.appendChild(document.createTextNode(time+' '+msgTweet));
        document.body.appendChild(lastTweet);
        document.getElementById('list-tweet').appendChild(lastTweet).insertBefore;
        document.getElementById('charNum').textContent = 140;
        btnTweet.disabled= true;
    }
    document.getElementById('formTweet').reset();
}
function hideTimelineB(){
    document.getElementById('timeline-begin').style.cssText= 'display: none;';
}