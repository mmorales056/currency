/**
 * OBJECTO MONEDA
 */
var Currency = ( function () {
	/** Constructor */
	function Currency () {
		// Manejo de errores
		try {
			// ...
		} catch ( e ) {
			// Imprime en consola el error
			console.error( 'CURRENCY ERROR: ' +  e.message );
		}
	}

	/** Formato de moneda */
	Currency.prototype.format = function ( data ) {
		// Valores por defecto
		var def = { number:0 , decimales:0 , decPoint:'.' , thousandsSep:',' };

		// Datos
		var data = $.extend( def , data );

		// Separa caracter a caracter el numero y le da la vuelta
		data.number =  String( data.number ).split( '' ).reverse();
		// Numero de digitos
		var len = data.number.length ;

		// Respuesta
		var res = '' ;

		// Recorre los numeros
		for ( var i=0 ; i<len ; i++ ) {
			// Agrega el numero a la respuesta
			res = data.number[i] + res ;
			
			// Si lleva 3 digitos y no el ultimo digito
			if ( ( i + 1 ) % 3 == 0 && ( i + 1 ) < len ) {
				// Agrega el punto decimal
				res = data.thousandsSep + res ;
			}
		}

		// Respuesta
		return res ;
	}

	// Instancia
	return new Currency ;
} () );