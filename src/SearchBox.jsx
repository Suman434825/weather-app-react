 import { useState } from "react";
import { Box, TextField, Button, Alert } from "@mui/material";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "d388e2106f2f6319fdfa3ac4a0e3a318";

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const jsonResponse = await response.json();

      const result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      return result;
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setError(false);
      setCity("");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      <Box display="flex" gap={2} mb={2}>
        <TextField
          id="city"
          label="Enter City Name"
          variant="outlined"
          fullWidth
          required
          value={city}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </Box>
      {error && <Alert severity="error">No such place exists!</Alert>}
    </Box>
  );
}
