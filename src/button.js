
document.getElementById('btn-tweet').addEventListener('click',clickTweet);
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
    };
    document.getElementById('formTweet').reset();
};
tweet.addEventListener('input',enableTweet);
function enableTweet(){
let msgTweet= tweet.value;
let lengthTweet= msgTweet.length;
    if(lengthTweet !== 0 || lengthTweet <= 140){
        btnTweet.disabled= false;
    }else{
        btnTweet.disabled= true;
    };
};