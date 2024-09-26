export default function List({ record, index }) {
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>
          <img src={record.team.logo} alt="logo" height="30px" />
        </td>
        <td className="vasen">{record.team.name}</td>
        <td>{record.stats.gamesPlayed}</td>
        <td>{record.stats.wins}</td>
        <td>{record.stats.ties}</td>
        <td>{record.stats.losses}</td>
        <td>{record.stats.goalsFor}</td>
        <td>{record.stats.goalsAgainst}</td>
        <td>{record.stats.points}</td>
      </tr>
    </>
  );
}
