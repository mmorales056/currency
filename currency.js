window.app = window.app || {}; // Objeto general

/**
 * CLOSURE PARA EL MANEJO DE MONEDA
 * @author Steven Pardo 2017-03-27
 */
app.Currency = (function () {

	'use strict';
	
	/**
	 * CONSTRUCTOR
	 * @author Steven Pardo 2017-03-27
	 * @param double "number" Numero a dar formato
	 */
	function Currency (number) {
		try {
			this.__number__ = number; // Número a dar formato
			this.__decimals__ = 0; // Numero de decimales
			this.__decPoint__ = ','; // Punto decimal
			this.__thousandsSep__ = '.'; // Separador de miles
			this.__prefix__; // Prefijo de moneda
		} catch (e) {
			console.error(e);
		}
	}

	/**
	 * DAR FORMATO
	 * @author Steven Pardo 2017-03-27
	 * @param {string} "type" Tipo de moneda [cop, usd, eur, ...]
	 * @return {string} Número formateado
	 */
	Currency.prototype.format = function (type) {
		try {
			var self = this; // Scope
			
			switch (type) {
				case 'cop':
					self.__decimals__ = 0;
					self.__decPoint__ = ',';
					self.__thousandsSep__ = '.';
					self.__prefix__ = '$';
					break;
			}

			var number = String(self.__number__).split("").reverse(); // Numero a convertir
			var length = number.length; // Número de caracteres
			var response = ''; // Respuesta	

			for (var i = 0; i < length; i++) {
				response = number[i] + response;
				
				if ((i + 1) % 3 == 0 && (i + 1) < length) {
					response = self.__thousandsSep__ + response;
				}
			}

			return self.__prefix__ + response;
		} catch (e) {
			console.error(e);
		}

	}

	return Currency; // Objeto
})();