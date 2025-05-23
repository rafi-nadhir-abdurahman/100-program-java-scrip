function convertToFahrenheit() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (!isNaN(celsius)) {
      const fahrenheit = (celsius * 9/5) + 32;
      document.getElementById('fahrenheit').textContent = fahrenheit.toFixed(2);
    } else {
      document.getElementById('fahrenheit').textContent = '0';
    }
  }
  
  function convertToCelsius() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheitInput').value);
    if (!isNaN(fahrenheit)) {
      const celsius = (fahrenheit - 32) * 5/9;
      document.getElementById('celsiusResult').textContent = celsius.toFixed(2);
    } else {
      document.getElementById('celsiusResult').textContent = '0';
    }
  }
  