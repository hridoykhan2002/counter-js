// selecting elements

const spanValue = document.querySelector("#getValue");
const buttonS = document.querySelectorAll(".btn");

// variable

let count = 0

// add Event listener
buttonS.forEach((item) =>{
    item.addEventListener("click", (e)=>{
        const classList =e.target.classList;
        if(classList.contains("iv")){
            count++;
        }else if(classList.contains("dv")){
            count--;
        }else{
            count =0;
        }
        if(count<0){
            spanValue.style.color = "Red";
        }if(count>0){
            spanValue.style.color = "green";
        }if(count===0){
            spanValue.style.color = "black";
        }
        spanValue.textContent = count;
    })
});