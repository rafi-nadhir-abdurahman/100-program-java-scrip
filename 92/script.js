function show(){
    let r=[]
    for(let i=1;i<=30;i++)if(i%3==0)r.push(i)
    out.innerText=r.join(', ')
  }
  