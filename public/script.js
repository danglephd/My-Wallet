
// Cấu hình API URL (Google Apps Script Web App URL)
const SHEET_API_URL = "https://script.google.com/macros/s/XXXXXXXXXXXX/exec";

// Lấy dữ liệu từ Google Sheets
async function fetchTransactions() {
  const res = await fetch(SHEET_API_URL);
  const data = await res.json();
  console.log("Transactions:", data);
  renderTable(data);
}

// Gửi dữ liệu mới lên Google Sheets
async function addTransaction(transaction) {
  const res = await fetch(SHEET_API_URL, {
    method: "POST",
    body: JSON.stringify(transaction),
    headers: { "Content-Type": "application/json" }
  });
  const result = await res.json();
  console.log("Add result:", result);
  fetchTransactions(); // refresh list
}

// Hiển thị bảng dữ liệu
function renderTable(data) {
  const table = document.getElementById("transactionTable");
  table.innerHTML = "";
  data.forEach((row, i) => {
    if (i === 0) return; // skip header
    const tr = document.createElement("tr");
    row.forEach(cell => {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });
}

// Gọi hàm khi load trang
document.addEventListener("DOMContentLoaded", fetchTransactions);
