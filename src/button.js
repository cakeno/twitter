const btnTweet= document.getElementById('btn-tweet');
document.getElementById('btn-tweet').addEventListener('click',()=>{
    hideTimelineB();
    clickTweet();
    //event.preventDefault();
})
function clickTweet(){
    const lastTweet= document.createElement('li');
    let msgTweet= document.getElementById('msg-tweet').value;
    let lengthTweet= msgTweet.length;
    let today = new Date();
    let date= today.getHours()+":"+today.getMinutes();
    if(lengthTweet !== 0 || lengthTweet <= 140){
        lastTweet.appendChild(document.createTextNode(date+' '+msgTweet));
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