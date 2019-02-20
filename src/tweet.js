function sendTweet(){
    const lastTweet= document.createElement('li');
    let msgTweet= document.getElementById('msg-tweet').value;
    let lengthTweet= msgTweet.length;
    if(lengthTweet === 0 || lengthTweet > 140){
        btnTweet.disabled= true;
    }else{
    lastTweet.appendChild(document.createTextNode(msgTweet));
    document.body.appendChild(lastTweet);
    document.getElementById('list-tweet').appendChild(lastTweet);
    document.getElementById('formTweet').reset();
    }    
}