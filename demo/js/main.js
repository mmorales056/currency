$(document).ready(function () {
	$('#format').on('click', function () {
		var value = $('#number').val();
		var cop = new app.Currency(value).format('cop');
		$('#result').val(cop);
	});
});