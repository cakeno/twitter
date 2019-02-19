document.getElementById('btn-tweet').addEventListener('click',clickTweet);
function clickTweet(evento){
    let lastTweet = document.createElement('li');
    let content = document.createTextNode(document.getElementById('msg-tweet').value);
    lastTweet.appendChild(content);
    document.body.appendChild(lastTweet);
    let listTweet = document.getElementById('list-tweet');
    listTweet.appendChild(lastTweet);
        listTweet.insertBefore(lastTweet);
}