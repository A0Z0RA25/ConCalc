const numeratorx = document.querySelector(".numeratorx");
const denominatorx = document.querySelector(".denominatorx");
const numeratory = document.querySelector(".numeratory");
const denominatory = document.querySelector(".denominatory");
const result = document.querySelector(".parenthesis");
function transform(){
 
    const x2 = parseFloat(document.querySelector(".x2").value);
    const y2 = parseFloat(document.querySelector(".y2").value);
    const coeffX = parseFloat(document.querySelector(".coeffX").value);
    const coeffY = parseFloat(document.querySelector(".coeffY").value);
    const constant = parseFloat(document.querySelector(".constant").value);


    const centerX = coeffX / x2;
    const centerY = coeffY / y2;
    const constX = Math.pow(centerX / 2, 2);
    const constY = Math.pow(centerY / 2, 2);
    const radius = ((constX * x2)  + (constY * y2)) + (constant / -1);
console.log(radius)
console.log(constX)
console.log(constY)
    const numeX = centerX / 2;
    const numeY = centerY / 2;
    const denoX = radius / x2;
    const denoY = radius / y2;


    numeratorx.innerHTML = `x+${numeX}`;
    denominatorx.innerHTML = denoX;

    numeratory.innerHTML = `x+${numeY}`;
    denominatory.innerHTML = denoY;

    result.style.display = "flex";
}