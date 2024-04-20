import Map, { Marker } from "react-map-gl";
import { Room } from "@mui/icons-material"

function App() {
  return (
    <Map
      mapboxAccessToken={process.env.REACT_APP_MAP}
      initialViewState={{
        longitude: 80.7718,
        latitude: 7.8731,
        zoom: 7,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker longitude={79.8612} latitude={6.9271} anchor="bottom">
        <Room />
      </Marker>
    </Map>
  );
}

export default App;
