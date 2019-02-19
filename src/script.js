
document.getElementById('msg-tweet').addEventListener('input',count);
function count(){
    let counter= document.getElementById('msg-tweet').value.length;
    document.getElementById('charNum').innerHTML = counter;
    if(counter > 140){
        const btnTweet = document.getElementById('btn-tweet');
        document.getElementById('charNum').innerHTML = 140 - counter;
        btnTweet.disabled = true;
    }if else (counter > 130){
        
    }if else(counter > 120){

    }
};