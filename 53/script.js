function start(){
    let n=5;out.innerText=n
    let iv=setInterval(()=>{
      n--;out.innerText=n
      if(n===0)clearInterval(iv)
    },1000)
  }
  