function hitung() {
    let input = new Date(document.getElementById("tgl").value)
    let now = new Date()
    input.setFullYear(now.getFullYear())
    if (input < now) input.setFullYear(now.getFullYear() + 1)
    let sisa = Math.ceil((input - now) / (1000 * 60 * 60 * 24))
    document.getElementById("hasil").innerText = sisa + " hari lagi"
  }
  