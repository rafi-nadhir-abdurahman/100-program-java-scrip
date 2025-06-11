function cek(){
    let t=text.value.replace(/\s/g,'').toLowerCase()
    out.innerText=t==t.split('').reverse().join('')?"Ya":"Tidak"
  }
  