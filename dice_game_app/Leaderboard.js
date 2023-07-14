// Leaderboard.js

// Leaderboard.js

import { Table } from 'reactstrap';

export default function Leaderboard({ data }) {

  return (
    <Table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Rolls</th>
        </tr>  
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr key={item.name}>
            <td>{index + 1}</td>
            <td>{item.name}</td> 
            <td>{item.rolls}</td>
          </tr>
        ))}
      </tbody>

    </Table>
  );

}
