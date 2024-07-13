const body = document.body;
const userImg = document.createElement('img');
const userName = document.createElement('a');
const userBio = document.createElement('p');
const userFullName = document.createElement('h2');

const users = [
  {
    id: 1,
    firstName: "Emma",
    lastName: "Johnson",
    username: "emmaj",
    profilePic: "assets/images/emma.jpg",
    bio: "Nature enthusiast. Love to capture moments. 📸"
  },
  {
    id: 2,
    firstName: "Liam",
    lastName: "Smith",
    username: "liams",
    profilePic: "assets/images/liam.jpg",
    bio: "Tech geek. Coding my way through life. 💻"
  },
  {
    id: 3,
    firstName: "Olivia",
    lastName: "Brown",
    username: "oliviab",
    profilePic: "assets/images/olivia.jpg",
    bio: "Coffee lover. Always on the go. ☕"
  },
  {
    id: 4,
    firstName: "Noah",
    lastName: "Davis",
    username: "noahd",
    profilePic: "assets/images/noah.jpg",
    bio: "Fitness addict. Running towards my goals. 🏃‍♂️"
  },
  {
    id: 5,
    firstName: "Ava",
    lastName: "Miller",
    username: "avam",
    profilePic: "assets/images/ava.jpg",
    bio: "Bookworm. Exploring new worlds one page at a time. 📚"
  }
];

let count = 1;
switch(count) {
  case 0:
    userFullName.textContent = users[0].firstName + ' ' + users[0].lastName;
    userBio.textContent = users[0].bio;
    userName.textContent = users[0].username;
    break;
  case 1:
    userFullName.textContent = users[1].firstName + ' ' + users[1].lastName;
    userBio.textContent = users[1].bio;
    userName.textContent = users[1].username;
    break;
  case 2:
    userFullName.textContent = users[2].firstName + ' ' + users[2].lastName;
    userBio.textContent = users[2].bio;
    userName.textContent = users[2].username;
    break;
  case 3:
    userFullName.textContent = users[3].firstName + ' ' + users[3].lastName;
    userBio.textContent = users[3].bio;
    userName.textContent = users[3].username;
    break;
  case 4:
    userFullName.textContent = users[4].firstName + ' ' + users[4].lastName;
    userBio.textContent = users[4].bio;
    userName.textContent = users[4].username;
    break;
  default:
    userFullName.textContent = "Error";
    userBio.textContent = "Error";
    userName.textContent = "Error";
    break;
};

body.appendChild(userFullName);
body.appendChild(userBio);
body.appendChild(userName);
