export default function SheetTable({ width, height }) {
  const xDimension = width || 10;
  const yDimension = height || 10;

  const headerRow = (<>
    {/* create xDimension + 1 header cells; the +1 accomodates for the index column */}
    {[...Array(xDimension + 1).keys()].map((col, idx) => {
      return idx == 0 ? <th key={`col-${col}-${idx}`}></th> :
        <th key={`col-${col}-${idx}`}>{--idx}</th>
    })}
  </>)

  // This is the body of the spreadsheet. It is a table.
  const cellArray = [...Array(yDimension).keys()].map((row, index) => {
    // Create a new row
    return (<tr key={`row-${row}`}>
      {/* sticky left-column that shows row number */}
      <td>{row}</td>
      {/* Now create a row of <td> elements */}
      {[...Array(xDimension).keys()].map((col, idx) => {
        return (<td key={`cell-${row}-${col}`}>
          <input
            className='cell' onBlur={handleCellInput} id={`cell-${row}-${col}`}>
          </input>
        </td>)
      })}</tr>)
  });

  function handleCellInput(cellEvent) {
    console.log("Just exited: ", cellEvent.target.id);
    console.log("Cell has a value of : ", cellEvent.target.value);
  }

  return (
    <table className='cell-container'>
      <thead>
        <tr>{headerRow}</tr>
      </thead>
      <tbody>
        {cellArray}
      </tbody>
    </table>
  )
}
