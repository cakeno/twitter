const btnTweet= document.getElementById('btn-tweet');
document.getElementById('btn-tweet').addEventListener('click',()=>{
    hideTimelineB();
    clickTweet();
    event.preventDefault();
})
function clickTweet(){
    const lastTweet= document.createElement('li');
    let msgTweet= tweet.value;
    let lengthTweet= msgTweet.length;
    let today = new Date();
    let date= today.getHours()+":"+today.getMinutes();
    if(lengthTweet !== 0 || lengthTweet <= 140){
        let dateTweet= date+' '+msgTweet;
        lastTweet.appendChild(document.createTextNode(dateTweet));
        document.body.appendChild(lastTweet);
        document.getElementById('list-tweet').appendChild(lastTweet);
        document.getElementById('charNum').textContent = 140;
        btnTweet.disabled= true;
    }
    //document.getElementById('formTweet').reset();
}
function hideTimelineB(){
    document.getElementById('timeline-begin').style.cssText= 'display: none;';
}