// Fungsi fetchData mengembalikan Promise
const fetchData = (status) => {
  return new Promise((resolve, reject) => {
    if (status) {
      setTimeout(() => {
        resolve("Data berhasil disimpan");
      }, 3000);
    } else {
      reject("Gagal mengambil data");
    }
  });
};

// 1. Menggunakan then-catch
fetchData(true)
  .then((result) => {
    console.log("Then-Catch (Sukses):", result);
  })
  .catch((error) => {
    console.log("Then-Catch (Gagal):", error);
  });

// 2. Menggunakan async/await + try-catch
const getData = async () => {
  try {
    const result = await fetchData(true);
    console.log("Async/Await (Sukses):", result);
  } catch (error) {
    console.log("Async/Await (Gagal):", error);
  }
};

getData();

/*
  
  - Promise: Struktur di JavaScript untuk menangani operasi asynchronous.
    Contohnya fetchData() yang akan resolve atau reject setelah 3 detik.
  
  - .then().catch(): Digunakan untuk menangani Promise.
    - .then() menangani jika Promise berhasil (resolve)
    - .catch() menangani jika Promise gagal (reject)
  
  - async/await: Gaya penulisan modern untuk menangani Promise agar lebih mudah dibaca.
    - await menunggu Promise selesai.
    - try-catch digunakan untuk menangkap error jika Promise gagal (mirip seperti .catch).
  
  Semua ini digunakan untuk mengeksekusi kode asynchronous (seperti fetching data dari API) dengan aman.
  */
