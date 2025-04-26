const getDataFromServer = (status, callback) => {
  if (status) {
    setTimeout(() => {
      const products = ["Product 1", "Product 2", "Product 3"];
      callback(products, null);
    }, 3000);
  } else {
    const err = new Error("Failed to fetch data");
    callback(null, err);
  }
};
function processData(products, err) {
  try {
    if (products) {
      products.forEach((item) => console.log(item));
    } else {
      console.log(err.message);
    }
  } catch (error) {
    console.log(error);
  }
}
getDataFromServer(null, processData);
getDataFromServer(true, processData);
