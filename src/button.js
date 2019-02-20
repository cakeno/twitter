
document.getElementById('btn-tweet').addEventListener('click',clickTweet);
function clickTweet(){
    const lastTweet= document.createElement('li');
    let msgTweet= date+' '+document.getElementById('msg-tweet').value;
    let lengthTweet= msgTweet.length;
    if(lengthTweet === 0 || lengthTweet > 140){
        btnTweet.disabled= true;
    }else{
    lastTweet.appendChild(document.createTextNode(msgTweet));
    document.body.appendChild(lastTweet);
    document.getElementById('list-tweet').appendChild(lastTweet);
    document.getElementById('formTweet').reset();
    }
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