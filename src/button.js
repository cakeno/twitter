
document.getElementById('btn-tweet').addEventListener('click',clickTweet);
function clickTweet(){
    event.preventDefault()
    const lastTweet= document.createElement('li');
    let msgTweet= document.getElementById('msg-tweet').value;
    let dateTweet= date+' '+msgTweet;
    let lengthTweet= msgTweet.length;
    if(lengthTweet !== 0 || lengthTweet < 140){
        lastTweet.appendChild(document.createTextNode(dateTweet));
        document.body.appendChild(lastTweet);
        document.getElementById('list-tweet').appendChild(lastTweet);
        document.getElementById('charNum').textContent = 140;
    }else{
        btnTweet.disabled= true;
    }
    document.getElementById('formTweet').reset();
};
document.getElementById('msg-tweet').addEventListener('input',enableTweet);
function enableTweet(){
const msgTweet= document.getElementById('msg-tweet').value;
let lengthTweet= msgTweet.length;
    btnTweet.disabled= false;
    if(lengthTweet === 0 || lengthTweet > 140){
        btnTweet.disabled= true;
    }
};