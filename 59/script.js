function add(){
    let li=document.createElement("li");li.innerText=it.value
    li.onclick=()=>li.remove()
    ul.appendChild(li)
  }
  