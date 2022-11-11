// let turno = 1
//  

// const catGame() {
//     if (turno==1){
//         bigKitty.addEventListener("click", (e) => {
//             e.preventDefault();
//             console.log(e);
//           });          
// }};

let player= true;
console.log(player)
const bigKitty=document.getElementById("bigKitty");

const catBtn=document.querySelectorAll('.box');
const botones=Array.from(catBtn);     
botones.forEach((boton)=>{
        boton.addEventListener("click",()=>{
        player=!player;
        console.log(player);
        })
});






