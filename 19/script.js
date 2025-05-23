const quotes = [
    { text: "Jadilah perubahan yang ingin kamu lihat di dunia.", author: "Mahatma Gandhi" },
    { text: "Kesuksesan adalah hasil dari persiapan, kerja keras, dan belajar dari kegagalan.", author: "Colin Powell" },
    { text: "Jangan menunggu waktu yang tepat, buatlah waktu sekarang menjadi tepat.", author: "Unknown" },
    { text: "Pendidikan adalah senjata paling ampuh untuk mengubah dunia.", author: "Nelson Mandela" },
    { text: "Hidup adalah 10% apa yang terjadi pada kita dan 90% bagaimana kita meresponnya.", author: "Charles R. Swindoll" }
  ];
  
  const quoteEl = document.getElementById("quote");
  const authorEl = document.getElementById("author");
  const newQuoteBtn = document.getElementById("newQuoteBtn");
  
  function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const { text, author } = quotes[randomIndex];
    quoteEl.textContent = `"${text}"`;
    authorEl.textContent = `— ${author}`;
  }
  
  newQuoteBtn.addEventListener("click", displayRandomQuote);
  