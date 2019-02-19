const btnTweet= document.getElementById('btn-tweet');
document.getElementById('btn-tweet').addEventListener('click',clickTweet);
function clickTweet(){
    const lastTweet= document.createElement('li');
    const msgTweet= document.getElementById('msg-tweet').value;
    let content= document.createTextNode(msgTweet);
    lastTweet.appendChild(content);
    document.body.appendChild(lastTweet);
    document.getElementById('list-tweet').appendChild(lastTweet);
//listTweet.insertBefore(lastTweet, listTweet[0]);
};
document.getElementById('msg-tweet').addEventListener('input',enableTweet);
function enableTweet(){
let msgTweet= document.getElementById('msg-tweet').value.length;
    btnTweet.disabled= false;
    if(msgTweet === 0 || msgTweet > 140){
        btnTweet.disabled= true;
    }
};