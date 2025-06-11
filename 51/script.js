let letter
function gen(){
  letter=String.fromCharCode(97+Math.floor(Math.random()*26))
}
function cek(){
  out.innerText=(guess.value===letter?"Benar":"Salah")
}
