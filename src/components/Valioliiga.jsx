import List2 from "./List2";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function Valioliiga() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    Axios.get("https://premier-league18.p.rapidapi.com/teams/standings", {
      headers: {
        "x-rapidapi-key": "avain",
        "x-rapidapi-host": "premier-league18.p.rapidapi.com",
      },
    }).then((res) => {
      setRecords(res.data);
    });
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Pelit</th>
            <th>Voitot</th>
            <th>Tasapelit</th>
            <th>Häviöt</th>
            <th>TM</th>
            <th>PM</th>
            <th>Pisteet</th>
          </tr>
        </thead>

        {records.map((record, index) => (
          <List2 key={record._id} record={record} index={index} />
        ))}
      </table>
    </>
  );
}
