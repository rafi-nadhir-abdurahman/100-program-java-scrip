function calc(){
    let p=+document.getElementById("part").value
    let t=+document.getElementById("total").value
    document.getElementById("out").innerText=(t?((p/t)*100).toFixed(2):0)+" %"
  }
  