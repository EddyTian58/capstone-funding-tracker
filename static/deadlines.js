// This runs once for every row in the table.
//   row          the table row (<tr>)
//   cell         the deadline cell (<td>)
//   opportunity  the row's data, including days_left from the server
function showDeadline(row, cell, opportunity) {
  const label = deadlineLabel(opportunity.days_left);
  if (label === "") {
    return; // More than 7 days away: no label, no colour.
  }

  const badge = document.createElement("div");
  badge.className = "deadline-label";
  badge.textContent = label;
  cell.appendChild(badge);

  if (opportunity.days_left < 0) {
    cell.classList.add("deadline-overdue");
  } else {
    cell.classList.add("deadline-soon");
  }
}

// Turns days_left into the text we show under the date.
//   -1 or less  "Overdue"
//    0          "Due today"
//    1          "Due in 1 day"
//    2 to 7     "Due in 3 days" (or however many)
//    8 or more  "" (no label)
function deadlineLabel(daysLeft) {
  if (daysLeft < 0) {
    return "Overdue";
  }
  if (daysLeft === 0) {
    return "Due today";
  }
  if (daysLeft === 1) {
    return "Due in 1 day";
  }
  if (daysLeft <= 7) {
    return "Due in " + daysLeft + " days";
  }
  return "";
}
