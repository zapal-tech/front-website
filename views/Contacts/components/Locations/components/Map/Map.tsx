import { GoogleMap, GoogleMapProps, useJsApiLoader } from '@react-google-maps/api';
import { useEffect, useState } from 'react';

import { Coordinates } from 'types/locations';

export type MapProps = GoogleMapProps & {
  center: Coordinates;
};

const MapComponent: React.FC<MapProps> = ({ zoom = 15, children, ...props }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;

  return isLoaded && isMounted ? (
    <GoogleMap
      zoom={zoom}
      options={{
        disableDefaultUI: true,
        mapId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID,
        isFractionalZoomEnabled: true,
      }}
      {...props}
    >
      {children}
    </GoogleMap>
  ) : null;
};

export const Map = MapComponent;
