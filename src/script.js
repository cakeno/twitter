
document.getElementById('msg-tweet').addEventListener('input',count);
function count(){
    let msgTweet= document.getElementById('msg-tweet').value.length;
    document.getElementById('charNum').innerHTML= msgTweet;
    if(msgTweet < 121){
        document.getElementById('charNum').style.color= "black";
    }if(msgTweet > 120){
        document.getElementById('charNum').style.color= "green";
    }if(msgTweet > 130 && msgTweet < 140){
        document.getElementById('charNum').style.color= "blue";
    }if(msgTweet > 140){
        document.getElementById('charNum').style.color= "red";
        document.getElementById('charNum').innerHTML= 140 - msgTweet;
    }
};