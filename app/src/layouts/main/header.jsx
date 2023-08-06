import { Link, useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import useGetSelectedDate from "@/hooks/useGetSelectedDate";

function Links({ className }) {
  return (
    <ul className={`menu ${className}`}>
      <li>
        <Link to="/">Map</Link>
      </li>
    </ul>
  );
}

export default function Header() {
  const navigate = useNavigate();
  const selectedDate = useGetSelectedDate();

  return (
    <header className="relative z-10 max-h flex items-center p-2">
      Select a Date:{" "}
      <DatePicker
        className="p-2"
        selected={convertUTCToLocalDate(selectedDate ?? "2022-06-20")}
        onChange={(date) =>
          navigate(convertLocalToUTCDate(date).toISOString().split("T")[0])}
      />
    </header>
  );
}

function convertUTCToLocalDate(date) {
  if (!date) {
    return date;
  }
  date = new Date(date);
  date = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  return date;
}

function convertLocalToUTCDate(date) {
  if (!date) {
    return date;
  }
  date = new Date(date);
  date = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
  );
  return date;
}
