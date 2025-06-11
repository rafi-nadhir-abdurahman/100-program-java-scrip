function conv(){
    let m=+document.getElementById("min").value
    let h=Math.floor(m/60), r=m%60
    document.getElementById("out").innerText=h+":"+r.toString().padStart(2,'0')
  }
  