for (let i = 0; i < 3; i++) {
  const myPromise = new Promise((resolve, reject) => {
    let cond = false;
    if (cond === true) {
      setTimeout(() => {
        resolve(i + 1);
      }, (i + 1) * 1000);
    } else {
      reject(new Error("cond = false"));
    }
  });

  myPromise
    .then((numTask) => {
      console.log("Task " + numTask + ": Delayed task " + numTask);
    })
    .catch((error) => {
      console.log("Promise rejected with error: " + error.message);
    });
}
