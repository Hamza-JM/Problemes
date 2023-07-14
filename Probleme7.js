function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "This is the fetched data";
      resolve(data);
    }, 2000);
  });
}
async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.log("Error", error);
  }
}
getData();
