import { useParams } from "react-router-dom";

export default function useGetSelectedDate() {
  const { selectedDate } = useParams();

  return selectedDate ?? "2022-06-20";
}
