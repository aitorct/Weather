import { Coordinates } from "@assets/cityCoordinates";

const API_URL = "https://api.open-meteo.com/v1/";

const getTemperatureForCoordinates = ({ latitude, longitude }: Coordinates) =>
  fetch(
    `${API_URL}/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&&forecast_days=1`
  ).then(res => res.json());

export { getTemperatureForCoordinates };
