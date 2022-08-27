//data fetch
function loadData() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => displayUsers(data));
}
function displayUsers(users) {
  const ul = document.getElementById('user-list');
  for (const user of users) {
    const li = document.createElement('li');
    li.innerText = user.name;
    ul.appendChild(li);
  }
}
