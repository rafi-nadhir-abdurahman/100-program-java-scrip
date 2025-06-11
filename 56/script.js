function roll(){
    out.innerText=Array(3).fill().map(_=>Math.floor(Math.random()*6)+1).join(",")
  }
  