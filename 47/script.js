function conv(){
    let s=+document.getElementById("sec").value
    let m=Math.floor(s/60), r=s%60
    document.getElementById("out").innerText=m+":"+r.toString().padStart(2,'0')
  }
  