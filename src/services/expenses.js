const APIlink = "https://expense-tracker-backend-n3ce.onrender.com";

// const APITestLink = "http://localhost:5000";

export async function getExpenses() {
  const response = await fetch(`${APIlink}/api/expenses`);

  if (!response.ok) {
    throw new Error("Failed to fetch expenses");
  }

  const data = await response.json();

  return data;
}

export async function createExpenses(expense) {
  const request = await fetch(`${APIlink}/api/expenses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expense),
  });

  return request.json();
}

export async function deleteExpenseBackEnd(id) {
  const response = await fetch(`${APIlink}/api/expenses/${id}`, {
    method: "DELETE",
  });

  return response;
}

export async function updateExpenseBackend(id, editedExpenses) {
  const response = await fetch(`${APIlink}/api/expenses/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedExpenses),
  });

  return response.json();
}
