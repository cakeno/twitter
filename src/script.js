function enableTweet() {
	let lengthTweet = document.getElementById('msg-tweet').value.length;
	if (lengthTweet === 0 || lengthTweet > 140) {
		btnTweet.disabled = true;
	} else {
		btnTweet.disabled = false;
	}
}
function count() {
	let lengthTweet = document.getElementById('msg-tweet').value.length;
	document.getElementById('charNum').textContent = 140 - lengthTweet;
	if (lengthTweet < 120) {
		document.getElementById('p-msg-tweet').style.color = "#29A3EF";
	} if (lengthTweet > 120) {
		document.getElementById('p-msg-tweet').style.color = "#FDA2B1";
	} if (lengthTweet > 130) {
		document.getElementById('p-msg-tweet').style.color = "orange";
	} if (lengthTweet > 140) {
		document.getElementById('p-msg-tweet').style.color = "#FC0D2C";
	};
}
function autosize() {
	let el = this;
	setTimeout(function () {
		el.style.cssText = 'height:auto; padding:0';
		el.style.cssText = 'height:' + el.scrollHeight + 'px';
	}, 0);
}
document.getElementById('msg-tweet').addEventListener('keydown', autosize)
document.getElementById('msg-tweet').addEventListener('input', () => {
	count();
	enableTweet();
})