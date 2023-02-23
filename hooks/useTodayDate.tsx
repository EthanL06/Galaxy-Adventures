import { useState, useEffect } from "react";

export function useTodayDate() {
  const [todayDate, setTodayDate] = useState("");

  useEffect(() => {
    // Get todays date in format YYYY-MM-DD
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    const todaysDate = yyyy + "-" + mm + "-" + dd;
    setTodayDate(todaysDate);
  }, []);

  return { todayDate };
}
