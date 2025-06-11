function rand(){
    let h="#"+Math.floor(Math.random()*0xFFFFFF).toString(16).padStart(6,'0')
    out.innerText=h;document.body.style.background=h
  }
  