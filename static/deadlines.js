// This runs once for every row in the table.
//   row          the table row (<tr>)
//   cell         the deadline cell (<td>)
//   opportunity  the row's data, including days_left from the server
//
// The label goes by days_left only, whatever the status (team rule).
// days_left comes from the server. We never count days here.
function showDeadline(row, cell, opportunity) {
  const days = opportunity.days_left;
  let text = "";
  let className = "";

  if (days < 0) {
    text = "Overdue";
    className = "deadline-overdue";
  } else if (days === 0) {
    text = "Due today";
    className = "deadline-soon";
  } else if (days === 1) {
    text = "Due in 1 day";
    className = "deadline-soon";
  } else if (days <= 7) {
    text = "Due in " + days + " days";
    className = "deadline-soon";
  }

  // Deadlines more than 7 days away keep just the date.
  if (text === "") {
    return;
  }

  const label = document.createElement("span");
  label.className = "deadline-label " + className;
  label.textContent = text;
  cell.appendChild(label);
}
