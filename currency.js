var Currency = ( function () {
	function Currency () {
		try {
			// ...
		} catch ( e ) {
			console.error( 'CURRENCY ERROR: ' +  e.message );
		}
	}

	Currency.prototype.format = function ( data ) {
		var def = { number:0 , decimales:0 , decPoint:'.' , thousandsSep:',' };

		var data = $.extend( def , data );

		data.number =  String( data.number ).split( '' ).reverse();
		var len = data.number.length ;
		var res = '' ;

		for ( var i=0 ; i<len ; i++ ) {
			res += data.number[i] ;
			
			if ( (i+1)%3 == 0 ) {
				res += data.thousandsSep ;
			}
		}

		res = res.split('').reverse();
		console.log( res.join('') );
	}

	return new Currency ;
} () );