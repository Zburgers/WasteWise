import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';

// Fix for default markers in React Leaflet
const createCustomIcon = () => {
  return L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
};

interface MapComponentProps {
  center: [number, number];
  markerPosition: [number, number];
  onMapClick: (latlng: [number, number]) => void;
}

const MapComponent: React.FC<MapComponentProps> = ({ center, markerPosition, onMapClick }) => {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  // Custom icon for marker
  const customIcon = createCustomIcon();

  useEffect(() => {
    if (containerRef.current && !mapRef.current) {
      // Initialize map
      mapRef.current = L.map(containerRef.current, {
        center: center,
        zoom: 13,
        scrollWheelZoom: false,
      });

      // Add Tile Layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);

      // Add click listener
      mapRef.current.on('click', (e: L.LeafletMouseEvent) => {
        onMapClick([e.latlng.lat, e.latlng.lng]);
      });
    }

    // Clean up function to remove map on unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Update map center when prop changes
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(center, mapRef.current.getZoom());
    }
  }, [center]);

  // Update marker position when prop changes
  useEffect(() => {
    if (mapRef.current) {
      if (markerRef.current) {
        markerRef.current.setLatLng(markerPosition);
      } else {
        markerRef.current = L.marker(markerPosition, { icon: customIcon }).addTo(mapRef.current);
      }
    }
  }, [markerPosition, customIcon]);

  return (
    <div ref={containerRef} style={{ height: '300px', width: '100%' }}>
    </div>
  );
};

export default MapComponent;