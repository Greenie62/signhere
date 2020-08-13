

let stickitone=document.querySelector(".stickitone")
let stickittwo=document.querySelector(".stickittwo")
let stickitwaiver=document.querySelector(".stickitwaiver")



stickitone.onclick=(e)=>{
    e.target.innerHTML=""
    e.target.style.backgroundColor='white'
    let html=`<h3 class=addtext>Well</h3>`
    e.target.innerHTML=html
}

stickittwo.onclick=(e)=>{
    e.target.innerHTML=""
    e.target.style.backgroundColor='white'
    let html=`<h3 class=addtext>Wishes and</h3>`
    e.target.innerHTML=html
}


stickitwaiver.onclick=(e)=>{
    e.target.innerHTML=""
    e.target.style.backgroundColor='white'
    let html=`<h3 class=addtext>Feel better!</h3>`
    e.target.innerHTML=html
    document.querySelector(".dateDOM").innerHTML= '😎'
}