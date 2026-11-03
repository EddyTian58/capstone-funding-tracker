// This runs once for every row in the table.
//   row          the table row (<tr>)
//   cell         the deadline cell (<td>)
//   opportunity  the row's data, including days_left from the server
function showDeadline(row, cell, opportunity) {
  const daysLeft = opportunity.days_left;
  let text = "";
  let colorClass = "";

  if (daysLeft < 0) {
    text = "Overdue";
    colorClass = "deadline-overdue";
  } else if (daysLeft === 0) {
    text = "Due today";
    colorClass = "deadline-soon";
  } else if (daysLeft <= 7) {
    text = "Due in " + daysLeft + (daysLeft === 1 ? " day" : " days");
    colorClass = "deadline-soon";
  }

  // More than 7 days away: leave the cell as it is.
  if (text === "") {
    return;
  }

  const label = document.createElement("div");
  label.className = "deadline-label " + colorClass;
  label.textContent = text;
  cell.appendChild(label);
}
