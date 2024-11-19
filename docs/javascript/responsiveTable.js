// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select all tables on the page
  const tables = document.querySelectorAll("table");

  // Iterate over each table
  tables.forEach((table) => {
    // Step 1: Extract the headers (column titles) from the <th> elements in <thead>
    const headers = Array.from(table.querySelectorAll("thead th")).map(
      (th) => th.textContent.trim() // Get the text content of each <th> and trim whitespace
    );

    // Step 2: Iterate over all rows in the <tbody>
    table.querySelectorAll("tbody tr").forEach((row) => {
      // Step 3: Iterate over each cell (<td>) in the current row
      Array.from(row.children).forEach((cell, index) => {
        // If a header exists for this cell's column, add it as a data-label attribute
        if (headers[index]) {
          cell.setAttribute("data-label", headers[index]);
        }
      });
    });
  });
});

