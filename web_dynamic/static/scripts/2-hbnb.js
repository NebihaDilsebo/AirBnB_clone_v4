document.ready(function () {
	const amenities = {};
	$("li input[type=checkbox]").change(function () {
		if (this.checked) {
			amenities[this.dataset.name] = this.dataset.id;
		} else {
			delete amenities[this.dataset.name];
		}
		$(".amenities h4").text(Object.keys(amenities).sort().join(", "));
	});

	// get status of API
	$.getJSON("http://107.21.37.236:5003/api/v1/status/", (data) => {
		if (data.status === "OK") {
			$("div#api_status").addClass("available");
		} else {
			$("div#api_status").removeClass("available");
		}
	});
});
