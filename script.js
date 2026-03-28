function addExpense() {
    const name = document.getElementById("expenseName").value;
    const amount = document.getElementById("expenseAmount").value;
    const category = document.getElementById("expenseCategory").value;
  
    if (name === "" || amount === "") {
      alert("Please fill all fields");
      return;
    }
  
    const li = document.createElement("li");
    li.textContent = `${name} - ₹${amount} (${category})`;
  
    document.getElementById("expenseList").appendChild(li);
  
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
  }