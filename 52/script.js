let ang=Math.floor(Math.random()*5)+1, s=0
function cek(){
  if(+t.value===ang){s++;ang=Math.floor(Math.random()*5)+1;out.innerText="Benar! Skor:"+s}
  else out.innerText="Salah. Skor:"+s
}
