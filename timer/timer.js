let h=0
let m=0
let s=0
const t=setInterval(()=>{
    console.log(`${h}:${m}:${s}`)
    s++
    if (m===60){
        h++
        m=0
        s=0
    }
    if(s===60){
        s=0
        m++
    }   
},1)