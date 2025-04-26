const url = "https://jsonplaceholder.typicode.com/users";
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const res = await response.json();
    if (res) {
      data(res);
    } else {
      throw new Error("Gagal Mengambil API");
    }
  } catch (err) {
    console.log(err.message);
  }
};
fetchData();
function data(items) {
  const usersData = items.map((e) => ({
    name: e.name,
    city: e.address.city,
  }));
  const res = usersData.sort((a, b) => a.city.localeCompare(b.city));
  res.forEach((e, index) => console.log(`${index + 1}. ${e.name} - ${e.city}`));
}
