import { useParams } from "react-router-dom";
import GeoJsonMap from "@/components/GeoJsonMap";

export default function AnomalyMap() {
  const { selectedDate } = useParams();
  const dateFile = selectedDate ?? "2022-06-20";
  const dataUrl = `geo/${dateFile}.geojson`;

  return <GeoJsonMap dataUrl={dataUrl} />;
}
