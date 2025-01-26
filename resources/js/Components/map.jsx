import React, { useRef, useEffect } from "react";
import Map, { Source, Layer } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

const iraqGeoJSON = {
  type: "FeatureCollection",
  features: [
    // Example GeoJSON feature for a province
    {
      type: "Feature",
      properties: { name: "Baghdad" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [44.30, 33.20],
            [44.50, 33.30],
            [44.60, 33.10],
            [44.30, 33.20],
          ],
        ],
      },
    },
  ],
};

function MapComponent() {
  const mapRef = useRef();

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Map
        ref={mapRef}
        initialViewState={{
          longitude: 44.3, // Center of Iraq
          latitude: 33.2,
          zoom: 3.5,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="https://api.maptiler.com/maps/basic-v2/style.json?key=Y82FaXg9buuklWpryw1x"
      >
        {/* Highlight provinces using GeoJSON */}
        <Source id="iraq-provinces" type="geojson" data={iraqGeoJSON}>
          <Layer
            id="province-fill"
            type="fill"
            paint={{
              "fill-color": "#088",
              "fill-opacity": 0.4,
            }}
          />
          <Layer
            id="province-outline"
            type="line"
            paint={{
              "line-color": "#000",
              "line-width": 2,
            }}
          />
        </Source>
      </Map>
    </div>
  );
}

export default MapComponent;
