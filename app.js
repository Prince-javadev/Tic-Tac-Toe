let btn=document.querySelectorAll(".box");
let rstbtn=document.querySelector(".rstbtn");
let newG=document.querySelector(".newgame")
let msgc=document.querySelector(".msgc");
let msg=document.querySelector(".msg");

let player0=true;
let count=0;

const winnerptrn=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
];
btn.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(player0){
            box.innerText="0";
            player0=false;
        }
        else{
            box.innerText="X" ;
            player0=true;
        }
        box.disabled=true;
        count ++;
       let iswinner= winner();
       if(count===9&&!iswinner){
        draw();
       }
        
 
    })

});
const showwinner=(won)=>{
    msg.innerText=`congratulation ${won} you won the game`;
    msgc.classList.remove("hide");
    disable();
}
const winner=()=>{
    for(let patterns of winnerptrn){
        let pos1=btn[patterns[0]].innerText;
        let pos2=btn[patterns[1]].innerText;
        let pos3=btn[patterns[2]].innerText;
        if(pos1!=""&& pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner"+pos1);
                showwinner(pos1);
                disable();
                return true;
            }
        }
    }
}
const disable=()=>{
    for(let i of btn){
        i.disabled=true;
    }
}
const enable=()=>{
   for(b of btn){
    b.disabled=false;
    b.innerText="";
   }
}
 const draw=()=>{
    msg.innerText="Game is Draw";
    msgc.classList.remove("hide");
    disable();

 }
 const resetgame=()=>{
    player0=true;
    count=0;
    enable();
    msgc.classList.add("hide");
 }
 rstbtn.addEventListener("click",resetgame);

 newG.addEventListener("click",resetgame);