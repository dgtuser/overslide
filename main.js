let button =   document.querySelector(".ChangeImg"); 
let imggg = document.querySelectorAll("img"); 
 
let i = 0; 
  
button.addEventListener("click", function () { 
    i++;
    if (i >= imggg.length) { 
        imggg[i-1].classList.remove("imgb"); 
        i = 0; 
        imggg[i].classList.add("imgb"); 
    } else { 
        imggg[i-1].classList.remove("imgb"); 
        imggg[i].classList.add("imgb"); 
    } 
     
}) 
