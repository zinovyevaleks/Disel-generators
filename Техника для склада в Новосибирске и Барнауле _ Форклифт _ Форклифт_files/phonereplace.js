$(window).ready(function() {
	reklamaphone = $("#reklamaphone").text();

	if (reklamaphone.length > 1) {
		$(".foot, .left-col, p").each(function() {
			var kaguya = $(this).html();
			var meeguya = kaguya;
			kaguya = kaguya.replace(new RegExp('8-800-550-22-75','g'),reklamaphone);
			kaguya = kaguya.replace(new RegExp('\\+7 \\(383\\) 287-84-15','g'),reklamaphone);
			kaguya = kaguya.replace(new RegExp('\\(383\\) 291-22-75','g'),reklamaphone);
			kaguya = kaguya.replace(new RegExp('\\(3852\\) 600-673','g'),reklamaphone);
			kaguya = kaguya.replace(new RegExp('\\(3822\\)977-600','g'),reklamaphone);
			kaguya = kaguya.replace(new RegExp('\\(383\\) 287-84-15','g'),reklamaphone);
			kaguya = kaguya.replace(new RegExp('\\(383\\) 292-10-31','g'),reklamaphone);
			if (meeguya != kaguya) {
				$(this).html(kaguya);
			};
		});
	}
});