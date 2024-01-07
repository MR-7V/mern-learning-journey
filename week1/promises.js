//Que: Need to know why fetch result is printing first.
//Ans: Beacause of micro-task queue.

//handle resolve
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("time up!");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Step after promise.");
});

//handle reject
new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Mohith", age: 22 });
    } else {
      reject("500 Error");
    }
  }, 2000);
})
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then((user) => {
    console.log(user);
  })
  .catch(function (str) {
    console.log(str);
  });

//using async and await.
const asyncPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Mohith", age: 22 });
    } else {
      reject("500 Error");
    }
  }, 2000);
});

async function consumeAsyncPromise() {
  try {
    const response = await asyncPromise;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumeAsyncPromise();

//fetch API
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
