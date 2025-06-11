function tambah() {
    let teks = document.getElementById("item").value
    let li = document.createElement("li")
    let cb = document.createElement("input")
    cb.type = "checkbox"
    li.appendChild(cb)
    li.appendChild(document.createTextNode(teks))
    document.getElementById("daftar").appendChild(li)
  }
  