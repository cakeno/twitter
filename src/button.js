const btnTweet= document.getElementById('btn-tweet');
document.getElementById('btn-tweet').addEventListener('click',clickTweet);
function clickTweet(){
    const lastTweet= document.createElement('li');
    const msgTweet= document.getElementById('msg-tweet').value;
    let lengthTweet= msgTweet.length;
    if(lengthTweet === 0 || lengthTweet > 140){
        btnTweet.disabled= true;
    }else{
    let content= document.createTextNode(msgTweet);
    lastTweet.appendChild(content);
    document.body.appendChild(lastTweet);
    document.getElementById('list-tweet').appendChild(lastTweet);
    document.getElementById('formTweet').reset();
    }
//listTweet.insertBefore(lastTweet, listTweet[0]);
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