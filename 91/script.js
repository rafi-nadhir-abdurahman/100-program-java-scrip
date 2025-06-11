function cek(){
    let x=+n.value
    if(x<2)return out.innerText="Tidak"
    for(let i=2;i<x;i++)if(x%i==0)return out.innerText="Tidak"
    out.innerText="Ya"
  }
  