import GeoJsonMap from "@/components/GeoJsonMap";

export default function AnomalyMap() {
  const dataUrl = "geo/2022-06-20.geojson"; // Change this to the appropriate URL/path.

  return <GeoJsonMap dataUrl={dataUrl} />;
}
