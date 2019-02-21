const btnTweet= document.getElementById('btn-tweet');
const tweet= document.getElementById('msg-tweet');

tweet.addEventListener('input',count);
function count(){
    let lengthTweet= tweet.value.length;
    document.getElementById('charNum').textContent = 140 - lengthTweet;
    if(lengthTweet < 120){
        document.getElementById('p-msg-tweet').style.color= "#29A3EF";
    }if(lengthTweet > 120){
        document.getElementById('p-msg-tweet').style.color= "#FDA2B1";
    }if(lengthTweet > 130){
        document.getElementById('p-msg-tweet').style.color= "orange";
    }if(lengthTweet > 140){
        document.getElementById('p-msg-tweet').style.color= "#FC0D2C";
    };
};
(document.querySelector('textarea')).addEventListener('keydown', autosize);
function autosize(){
  let el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
},0);
};
	var today = new Date();
	var date= today.getHours()+":"+today.getMinutes();