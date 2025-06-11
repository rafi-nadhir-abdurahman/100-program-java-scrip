let an=Math.floor(Math.random()*100)+1
function cek(){
  let v=+t.value
  out.innerText=v===an?"Benar":v<an?"Terlalu kecil":"Terlalu besar"
}
