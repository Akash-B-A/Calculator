let waterLevel = 100; 
let isDecreasing = false;  
let decreaseInterval = null;  

function toggleWaterLevel(button) {
    const tank = document.querySelector(".tank");  
    const box5 = document.querySelector(".box5"); 

    if (isDecreasing) { 
        clearInterval(decreaseInterval);
        isDecreasing = false;  
        box5.classList.remove("error");  
    } else { 
        box5.classList.add("error");  
        decreaseInterval = setInterval(() => {
            if (waterLevel > 0) {  
                waterLevel -= 1; 

                tank.style.background = `linear-gradient(to top, blue ${waterLevel}%, transparent 0%)`;
            } else {
                clearInterval(decreaseInterval);
                isDecreasing = false;  
                box5.classList.remove("error"); 
            }
        }, 100);
        isDecreasing = true;  
    }
}
