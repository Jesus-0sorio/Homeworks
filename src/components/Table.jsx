

export const Table = ({ numRows, numCols }) => {

  const tableRows = [];

  for (let i = 0; i < numRows; i++) {
    const rowCells = [];

    for (let j = 0; j < numCols; j++) {
      rowCells.push(
        <td className="px-6 py-4 border " key={`${i},${j}`}>
          {i + 1},{j + 1}
        </td>
      );
    }

    tableRows.push(<tr key={i}>{rowCells}</tr>);
  }

  return (
    <table className="w-auto mt-8 text-sm text-left text-black">
      <tbody className="border">{tableRows}</tbody>
    </table>
  );
};