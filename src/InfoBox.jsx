import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1610557013547-dc7a52d44709?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwdGVtcGVyYXR1cmV8ZW58MHx8MHx8fDA%3D";
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1661591217251-f87e0fa0955c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENvbGQlMjB0ZW1wZXJhdHVyZXxlbnwwfHwwfHx8MA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1721504314427-7151c1b6b371?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFJhaW4lMjBwaG90fGVufDB8fDB8fHwwp";

  const weatherIcon =
    info.humidity > 70 ? <ThunderstormIcon fontSize="large" /> : info.temp > 18 ? <WbSunnyIcon fontSize="large" /> : <AcUnitIcon fontSize="large" />;
  const weatherImg =
    info.humidity > 70 ? RAIN_URL : info.temp > 18 ? HOT_URL : COLD_URL;

  return (
    <Card sx={{ mt: 3, borderRadius: 3, boxShadow: 4 }}>
      <CardMedia component="img" height="180" image={weatherImg} alt="weather" />
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
          <Typography variant="h5" fontWeight="bold">
            {info.city}
          </Typography>
          {weatherIcon}
        </Box>

        <Typography variant="body1" component="div">
          <p>🌡️ Temperature: {info.temp}&deg;C</p>
          <p>💧 Humidity: {info.humidity}%</p>
          <p>🔻 Min Temp: {info.tempMin}&deg;C</p>
          <p>🔺 Max Temp: {info.tempMax}&deg;C</p>
          <p>🌥️ Weather: <i>{info.weather}</i></p>
          <p>🤒 Feels Like: {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
  );
}
