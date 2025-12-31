import "./index.css";
// CustomTable component definition
const CustomTable = ({ headers, data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {/* Render table headers */}
          {headers.map((header, index) => (
            <th key={index} className="tableHeader">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Render table rows */}
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, index) => {
              let cellContent = row[header]; // Default cell content from the row object
              // Apply conditional styling based on header
              let dClass = "default"; // Default class for cell
              if (header === "percentChange") {
                const changeValue = parseFloat(row[header]);
                if (!isNaN(changeValue)) {
                  dClass += changeValue >= 0 ? " green" : " red"; // Green for positive change, red for negative
                }
              }
              // Render table cell with conditional class
              return (
                <td key={index} className={dClass}>
                  {cellContent}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
