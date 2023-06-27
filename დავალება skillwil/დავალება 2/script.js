function FahrenheitToCelsius(temperature) {
	if (typeof temperature !== 'Number') {
		let celsius = (temperature - 32) * 5 / 9;
		return celsius;
		else{
			return false;
		}
	}
}
