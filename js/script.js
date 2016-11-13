(function($){

	var btn = $("#btn-create");

	
	btn.on("click", function(e){
		 e.preventDefault();

		var inputVal = $("#input-val").val();
		var ul = $("#list");

		if($.trim(inputVal) == "")
		{
			alert('Proszę o uzupełnienie Pola!');
		}
		else
		{
			
			ul.append("<li>"+inputVal+"</li>");
			$("#input-val").val("");
		}
	})

})(jQuery);