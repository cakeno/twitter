document.getElementById('btn-tweet').addEventListener('click',clickTweet);
function clickTweet(){
    const lastTweet = document.createElement('li');
    const msgTweet= document.getElementById('msg-tweet').value;
    let content = document.createTextNode(msgTweet);
    const listTweet = document.getElementById('list-tweet');
    lastTweet.appendChild(content);
    document.body.appendChild(lastTweet);
    listTweet.appendChild(lastTweet);
//listTweet.insertBefore(lastTweet, listTweet[0]);
};
document.getElementById('msg-tweet').addEventListener('input',enableTweet);
function enableTweet(){
    const msgTweet= document.getElementById('msg-tweet').value.length;
    const btnTweet = document.getElementById('btn-tweet');
    btnTweet.disabled = false;
    if(msgTweet === 0){
        btnTweet.disabled = true;
    }
};