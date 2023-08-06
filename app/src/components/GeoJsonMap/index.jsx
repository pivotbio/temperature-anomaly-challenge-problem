// src/components/GeoJsonMap.js
import React, { useEffect, useState } from "react";
import DeckGL from "@deck.gl/react";
import { MapView } from "@deck.gl/core";
import { BitmapLayer, GeoJsonLayer } from "@deck.gl/layers";
import { TileLayer } from "@deck.gl/geo-layers";

export default function GeoJsonMap({ dataUrl }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(dataUrl)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [dataUrl]);

  const layers = [
    new TileLayer({
      data: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",

      minZoom: 0,
      maxZoom: 19,
      tileSize: 256,

      renderSubLayers: (props) => {
        const {
          bbox: { west, south, east, north },
        } = props.tile;

        return new BitmapLayer(props, {
          data: null,
          image: props.data,
          bounds: [west, south, east, north],
        });
      },
    }),
    new GeoJsonLayer({
      id: "geojson-layer",
      data,
      stroked: false,
      filled: true,
      extruded: true,
      lineWidthScale: 20,
      lineWidthMinPixels: 2,
      getFillColor: (d) => getColorFromAnomaly(d.properties.TempAnomaly),
      getLineWidth: 1,
      getElevation: 30,
    }),
  ];

  return (
    <DeckGL
      initialViewState={{
        longitude: 0,
        latitude: 0,
        zoom: 1,
        pitch: 0,
        bearing: 0,
      }}
      layers={layers}
      controller={true}
      views={new MapView({ repeat: true })}
    >
    </DeckGL>
  );
}

function getColorFromAnomaly(tempAnomaly) {
  const maxAnomaly = 12;
  const absAnomaly = Math.abs(tempAnomaly);
  const alpha = absAnomaly / maxAnomaly;

  if (tempAnomaly < 0) {
    // Map the anomaly value to a blue color for negative values
    return [0, 0, 255 * alpha, 255 * alpha];
  } else {
    // Map the anomaly value to a red color for positive values
    return [255 * alpha, 0, 0, 255 * alpha];
  }
}
