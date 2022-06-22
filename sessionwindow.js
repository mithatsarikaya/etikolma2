var remote;

function opensessionwin() {
	// Define the size of your remote window in pixels with "width" and "height."
	remote = window.open("","sessionwin","width=220,height=380,toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1");
}

function closesessionwin() {
	if (remote) {
		remote.close();
	}
}

function setsessionwinurl(url) {
	if (remote) {
		remote.location.href = url;
		remote.focus();
	}
}

function showsessionpage(url) {
	opensessionwin();
	setsessionwinurl(url);
}
