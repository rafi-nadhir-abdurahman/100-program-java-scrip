function calc(){
    let p=+document.getElementById("p").value
    let r=+document.getElementById("r").value
    let t=+document.getElementById("t").value
    document.getElementById("out").innerText=(p*r*t/100).toFixed(2)
  }
  