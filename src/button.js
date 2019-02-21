
var today = new Date();
var date= today.getHours()+":"+today.getMinutes();
const btnTweet= document.getElementById('btn-tweet');
document.getElementById('btn-tweet').addEventListener('click',()=>{
    clickTweet();
    hideTimelineB();
})
function clickTweet(){
    const lastTweet= document.createElement('li');
    let msgTweet= tweet.value;
    let lengthTweet= msgTweet.length;
    if(lengthTweet !== 0 || lengthTweet <= 140){
        let dateTweet= date+' '+msgTweet;
        lastTweet.appendChild(document.createTextNode(dateTweet));
        document.body.appendChild(lastTweet);
        document.getElementById('list-tweet').appendChild(lastTweet);
        document.getElementById('charNum').textContent = 140;
        event.preventDefault();
        btnTweet.disabled= true;
    }
    document.getElementById('formTweet').reset();
}
function hideTimelineB(){
    document.getElementById('timeline-begin').style.cssText= 'display: none;';
}