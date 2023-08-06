import GeoJsonMap from "@/components/GeoJsonMap";

import useGetSelectedDate from "@/hooks/useGetSelectedDate";

export default function AnomalyMap() {
  const selectedDate = useGetSelectedDate();
  const dataUrl = `geo/${selectedDate}.geojson`;

  return <GeoJsonMap dataUrl={dataUrl} />;
}
