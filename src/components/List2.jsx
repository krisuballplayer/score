export default function List2({ record, index }) {
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td className="vasen">{record.name}</td>
        <td>{record.matchesPlayed}</td>
        <td>{record.wins}</td>
        <td>{record.draws}</td>
        <td>{record.losses}</td>
        <td>{record.goalsScored}</td>
        <td>{record.goalsConceded}</td>
        <td>{record.points}</td>
      </tr>
    </>
  );
}
