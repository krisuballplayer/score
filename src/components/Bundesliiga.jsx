import List from "./List";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function Bundesliiga() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    Axios.get("https://bundesliga-standings.p.rapidapi.com/", {
      headers: {
        "x-rapidapi-key": "avain",
        "x-rapidapi-host": "bundesliga-standings.p.rapidapi.com",
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
            <th>Bundesliiga</th>
          </tr>
          <tr>
            <th></th>
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
          <List key={record.team.name} record={record} index={index} />
        ))}
      </table>
    </>
  );
}
