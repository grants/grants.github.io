$(function() {
	// process image path problem
	$("img").each(function() {
		var oldsrc = $(this).attr("src");
		var newsrc = oldsrc.replace("../project/mywiki/i7haowiki","");
		$(this).attr("src", newsrc);
	});
})

