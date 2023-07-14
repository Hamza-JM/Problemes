function delayedGreeting(name) {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let bol = false;
      if (bol) {
        resolve(name);
      } else {
        reject(name);
      }
    }, 2000);
  });
  myPromise
    .then((result) => {
      console.log("Hi " + name);
    })
    .catch((name) => {
      console.log("Goodbye " + name);
    });
}
delayedGreeting("Hamza");
delayedGreeting("Yasmine");
