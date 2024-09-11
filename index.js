const btn = document.querySelector(".btn");
const randomBg = document.querySelector(".main"); 
const text = document.querySelector(".text");
btn.addEventListener("click", ()=>{
        let randomValueOne = Math.floor(Math.random() * 255);
        let randomValueTwo = Math.floor(Math.random() * 255);
        let randomValueThree = Math.floor(Math.random() * 255);
        let bgColor = `rgb(${randomValueOne}, ${randomValueTwo}, ${randomValueThree})`;
        randomBg.style.backgroundColor = bgColor;
        const luminance = 0.2126 * (randomValueOne / 255) +
                        0.7152 * (randomValueTwo / 255) +  
                        0.0722 * (randomValueThree / 255);  
        const textColor = luminance > 0.5 ? "black" : "white";
        text.style.color = textColor;               
});
