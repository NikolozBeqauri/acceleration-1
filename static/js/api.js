// Make a request to the API
fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
.then((data) => {
  // Update the page with the data
  const dataTbody = document.getElementById("data");
  data.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${user.name}</td><td>${user.username}</td><td>${user.email}</td><td>${user.phone}</td><td>${user.website}</td>`;
    dataTbody.appendChild(row);
  });
})
.catch((error) => {
  // Handle errors
  console.error(error);
  const dataTbody = document.getElementById("data");
  dataTbody.innerHTML = "<tr><td colspan='5'>An error occurred</td></tr>";
});