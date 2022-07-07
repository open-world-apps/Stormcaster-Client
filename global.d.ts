export {};

declare global {
  type Celsius = "&#x2103;" | "&#8451;" | "0x2103" | "\u2103";
  type Fahrenheit = "&#8457;" | "&#x2109;" | "U+02109" | "0x2109" | "\u2109";
  type Kelvin = "&#8490;" | "&#x212A" | "U+0212A" | "0x212A" | "\u212A";
  type Directional = "N" | "S" | "E" | "W" | "NE" | "SE" | "SW" | "NW";
  type LatitudeDirection = "N" | "S";
  type LongitudeDirection = "E" | "W";
  type Degree = "&#176" | "&#xB0" | "\u00B0" | "0x00B0";
  type Direction =
    | `${number}${Degree} ${Directional}`
    | `${number} ${Directional}`
    | Directional;
  type Temperature = Celsius | Fahrenheit | Kelvin | "C" | "c" | "F" | "f" | "K" | "k";
  type MeasurementSymbol = Temperature | Direction;
  type Coordinates =
    | {
        lat: number | `${number}${Degree} ${LatitudeDirection}`;
        lon: number | `${number}${Degree} ${LongitudeDirection}`;
      }
    | GeolocationCoordinates;
}
