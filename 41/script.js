function calc(){
    let h=+document.getElementById("harga").value
    let d=+document.getElementById("disc").value
    document.getElementById("out").innerText=(h*(100-d)/100).toFixed(2)
  }
  