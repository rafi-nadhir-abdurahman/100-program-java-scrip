function cek() {
    let e = document.getElementById("email").value
    let valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
    document.getElementById("hasil").innerText = valid ? "Valid" : "Tidak valid"
  }
  