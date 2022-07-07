import BaseConverter from './BaseConverter';

export default class TempConverter extends BaseConverter {
  input: number; // OpenWeather provides Kelvin by default.
  output: number;
  mode: Temperature;

  constructor(value = 0) {
    super(value);

    this.input = value;
    this.output = 0;
    this.mode = 'k';
  }

  set valueToConvert(value: number) {
    this.input = value;
  }

  set result(value: number) {
    this.output = value;
  }

  set changeMode(value: Temperature) {
    this.mode = value;
  }

  get currentMode(): Temperature {
    return this.mode;
  }

  toCelsius(value: number): this {
    this.valueToConvert = value;

    switch (this.mode) {
      case 'k':
        this.result = this.valueToConvert - 273.15;
        break;
      case 'f':
        this.result = ((this.valueToConvert - 32) * 5) / 9;
        break;
      default:
        console.log('Already in Celsius.');
    }

    this.changeMode = 'c';

    return this;
  }

  toKelvin(value: number): this {
    this.valueToConvert = value;

    switch (this.mode) {
      case 'c':
        this.result = this.valueToConvert + 273.15;
        break;
      case 'f':
        this.result = ((this.valueToConvert - 32) * 5) / 9 + 273.15;
        break;
      default:
        console.log('Already in Kelvin.');
    }

    this.changeMode = 'k';

    return this;
  }

  toFahrenheit(value: number): this {
    this.valueToConvert = value;

    switch (this.mode) {
      case 'c':
        this.result = (this.valueToConvert * 9) / 5 + 32;
        break;
      case 'k':
        this.result = ((this.valueToConvert - 273.15) * 5) / 9 + 32;
        break;
      default:
        console.log('Already in Fahrenheit.');
    }

    this.changeMode = 'f';

    return this;
  }
}
