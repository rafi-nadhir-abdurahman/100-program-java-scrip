function cek(){
    let now=new Date(), tgl=new Date(b.value)
    tgl.setFullYear(now.getFullYear())
    if(tgl<now)tgl.setFullYear(now.getFullYear()+1)
    let d=Math.ceil((tgl-now)/(1000*60*60*24))
    out.innerText=d+" hari lagi"
  }
  