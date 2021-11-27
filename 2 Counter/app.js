// setting Initial Value to Zero
let count = 0;
//selecting Value and Buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        } else if(styles.contains("increase")){
            count++;
        } else {
            count = 0;
        }

        if(count>0){
            value.style.color = "yellow";
        }
        if(count<0){
            value.style.color = "pink";
        }
        if (count === 0){
            value.style.color = "Brown";
        }
        value.textContent = count;
    });
});