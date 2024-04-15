const getUbe = [
  { id: 1, username: "mosh" },
  { id: 2, username: "kirubel" },
];

console.log("beffor");
const pr = getUser(3)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const us = getRepos("mosh1")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// const ur = getUbe.filter(u=>u.id ===1);
// console.log(ur)

console.log("affter ");

function getUser(Id) {
  return new Promise((resove, reject) => {
    setTimeout(() => {
      const user = getUbe.filter((u) => u.id === Id);
      if (user[0]) resove(user);
      if (!user[0]) reject(new Error("Not found"));
    }, 2000);
  });
}
function getRepos(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = getUbe.filter((u) => u.username === username);
      if (user[0]) resolve(user);
      if (!user[0]) reject(new Error("No user name found"));
    }, 2000);
  });
}
