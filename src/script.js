
document.getElementById('msg-tweet').addEventListener('input',count);
function count(){
    let lengthTweet= document.getElementById('msg-tweet').value.length;
    document.getElementById('charNum').innerHTML= lengthTweet;
    if(lengthTweet < 121){
        document.getElementById('charNum').style.color= "black";
    }if(lengthTweet > 120){
        document.getElementById('charNum').style.color= "green";
    }if(lengthTweet > 130 && lengthTweet < 140){
        document.getElementById('charNum').style.color= "blue";
    }if(lengthTweet > 140){
        document.getElementById('charNum').style.color= "red";
        document.getElementById('charNum').innerHTML= 140 - lengthTweet;
    }
};
