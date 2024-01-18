/**
 * The external imports
 */
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "100%",
};
const center = {
  lat: 46.85203170776367, // default latitude
  lng: 6.1543779373168945, // default longitude
};

const MyGoogleMapView = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div className="googleMap">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default MyGoogleMapView;
