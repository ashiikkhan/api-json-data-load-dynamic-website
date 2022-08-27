/**JavaScript Object Notation (JSON) */
const user = {
  id: 1,
  name: 'Gorib',
  email: 'gorib@gmail.com',
};
console.log(user);
// { id: 1, name: 'Gorib', email: 'gorib@gmail.com' }

const stringified = JSON.stringify(user);
console.log(stringified);
// {"id":1,"name":"Gorib","email":"gorib@gmail.com"}

const users = {
  name: 'Muhammad Ishaq',
  gender: 'Male',
  age: 23,
  address: {
    street: '87',
    city: 'Gultari Matyal Skardu',
    state: 'Gilgit Baltistan',
    postalCode: '16350',
  },
  phoneNumber: [{ type: 'personal', number: '116263747' }],
};

console.log(JSON.stringify(users));
