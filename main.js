// выдвижение и возврат боковой панели
$(function(){
	$('.panel-inside').hide();
	$('.additionally').hide();

	$('#drive-panel').click(function(){
		$('.panel-drive').show(500);
	});

	$('#panel-back-drive').click(function(){
		$('.panel-drive').hide(500);
		$('.panel-inside').hide(500);
		$('.additionally').hide(500);
	});

	console.dir($('#panel-click > p'))
	console.log($('.panel-inside > div > p'))
	// console.log($('#panel-click > p').lenght())

	$('#panel-click > p').click(function(e){
		$('.panel-inside').show(500);
		$('.additionally').hide(500);

		let idClick = e.target.id + 0;

		console.log(e.target.id + 0)

		if (idClick == 10 ) {
			$('#10.additionally').show(500);
		}
		else if (idClick == 20 ) {
			$('#20.additionally').show(500);
		}
		else if (idClick == 30 ) {
			$('#30.additionally').show(500);
		}
		else if (idClick == 40 ) {
			$('#40.additionally').show(500);
		}
		else if (idClick == 50 ) {
			$('#50.additionally').show(500);
		}
		else if (idClick == 60 ) {
			$('#60.additionally').show(500);
		}
		else if (idClick == 70 ) {
			$('#70.additionally').show(500);
		}
		else if (idClick == 80 ) {
			$('#80.additionally').show(500);
		}
		else if (idClick == 90 ) {
			$('#90.additionally').show(500);
		}
		else if (idClick == 100 ) {
			$('#100.additionally').show(500);
		}
	});
})
