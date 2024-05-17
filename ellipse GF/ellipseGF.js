const numeratorx = document.querySelector(".numeratorx");
const denominatorx = document.querySelector(".denominatorx");
const numeratory = document.querySelector(".numeratory");
const denominatory = document.querySelector(".denominatory");
const result = document.querySelector(".final-answer");

const step1Container = document.querySelector(".step1");
const step2Container = document.querySelector(".step2");
const step3Container = document.querySelector(".step3");
const step4Container = document.querySelector(".step4");
const step5num = document.querySelector(".numerator");
const step5deno = document.querySelector(".denominator");
function transform() {
    const x2 = parseFloat(document.querySelector(".x2").value);
    const y2 = parseFloat(document.querySelector(".y2").value);
    const coeffX = parseFloat(document.querySelector(".coeffX").value);
    const coeffY = parseFloat(document.querySelector(".coeffY").value);
    const constant = parseFloat(document.querySelector(".constant").value);

    const centerX = coeffX / x2;
    const centerY = coeffY / y2;
    const constX = Math.pow(centerX / 2, 2);
    const constY = Math.pow(centerY / 2, 2);
    const radius = ((constX * x2) + (constY * y2)) + (constant / -1);

    const numeX = centerX / 2;
    const numeY = centerY / 2;
    const denoX = radius / x2;
    const denoY = radius / y2;

    const step1 = [
        {"xyPositive": `(${x2}x² + ${coeffX}) + (${y2}y²  + ${coeffY}) = ${constant / -1}`},
        {"xPositive": `(${x2}x² + ${coeffX}) + (${y2}y²   ${coeffY}) = ${constant / -1}`},
        {"yPositive": `(${x2}x²  ${coeffX}) + (${y2}y²  + ${coeffY}) = ${constant / -1}`},
        {"xyNegative": `(${x2}x²  ${coeffX}) + (${y2}y²  ${coeffY}) = ${constant / -1}`},
    ]

    const step2 = [
        {"xyPositive": `${x2} (x²+${centerX}) + ${y2} (y²+${centerY}) = ${constant / -1}`},
        {"xPositive": `${x2} (x²+${centerX}) + ${y2} (y² ${centerY}) = ${constant / -1}`},
        {"yPositive": `${x2} (x² ${centerX}) + ${y2} (y²+${centerY}) = ${constant / -1}`},
        {"xyNegative": `${x2} (x² ${centerX}) + ${y2} (y² ${centerY}) = ${constant / -1}`}
    ]

    const step3 = [
        {"xyPositive": `${x2} (x²+${centerX}+${constX}) + ${y2} (y²+${centerY}+${constY}) = ${constant / -1}`},
        {"xPositive": `${x2} (x²+${centerX} + ${constX}) + ${y2} (y² ${centerY}+${constY}) = ${constant / -1}`},
        {"yPositive": `${x2} (x² ${centerX}+${constX}) + ${y2} (y²+${centerY}+${constY}) = ${constant / -1}`},
        {"xyNegative": `${x2} (x² ${centerX})+${constX}) + ${y2} (y² ${centerY}+${constY}) = ${constant / -1}`}
    ]

    const step4 = [
        {"xyPositive": `${x2} (x²+${centerX}+${constX}) + ${y2} (y²+${centerY}+${constY}) = ${constant / -1} + ${constX} + ${constY}`},
        {"xPositive": `${x2} (x²+${centerX} + ${constX}) + ${y2} (y² ${centerY}+${constY}) = ${constant / -1} + ${constX} + ${constY}`},
        {"yPositive": `${x2} (x² ${centerX}+${constX}) + ${y2} (y²+${centerY}+${constY}) = ${constant / -1} + ${constX} + ${constY}`},
        {"xyNegative": `${x2} (x² ${centerX}+${constX}) + ${y2} (y² ${centerY}+${constY}) = ${constant / -1} + ${constX} + ${constY}`}
    ]

    const step5 = [
        {"xyPositive": `${x2} (x²+${centerX}+${constX}) + ${y2} (y²+${centerY}+${constY}) = ${radius}`},
        {"xPositive": `${x2} (x²+${centerX} + ${constX}) + ${y2} (y² ${centerY}+${constY}) = ${radius}`},
        {"yPositive": `${x2} (x² ${centerX}+${constX}) + ${y2} (y²+${centerY}+${constY}) = ${radius}`},
        {"xyNegative": `${x2} (x² ${centerX}+${constX}) + ${y2} (y² ${centerY}+${constY}) = ${radius}`}
    ]
    //
    document.querySelector(".answer-container").style.display = "block";
    if (coeffX > 0 && coeffY > 0) {
        step1Container.textContent = step1[0].xyPositive;
        step2Container.textContent = step2[0].xyPositive;
        step3Container.textContent = step3[0].xyPositive;
        step4Container.textContent = step4[0].xyPositive;
        //STEP 5
        step5num.textContent = step5[0].xyPositive;
        step5deno.textContent = radius;
        // ANSWER IN PARENTHESIS
        numeratorx.innerHTML = `(x+${numeX})²`;
        denominatorx.innerHTML = denoX;
        numeratory.innerHTML = `(y+${numeY})²`;
        denominatory.innerHTML = denoY;
        result.style.display = "flex";
    }
    else if(coeffX > 0){
        step1Container.textContent = step1[1].xPositive;
        step2Container.textContent = step2[1].xPositive;
        step3Container.textContent = step3[1].xPositive;
        step4Container.textContent = step4[1].xPositive;
        //STEP 5
        step5num.textContent = step5[1].xPositive;
        step5deno.textContent = radius;
        // ANSWER IN PARENTHESIS
        numeratorx.innerHTML = `(x+${numeX})²`;
        denominatorx.innerHTML = denoX;
        numeratory.innerHTML = `(y${numeY})²`;
        denominatory.innerHTML = denoY;
        result.style.display = "flex";  
    }
    else if(coeffY > 0){
        step1Container.textContent = step1[2].yPositive;
        step2Container.textContent = step2[2].yPositive;
        step3Container.textContent = step3[2].yPositive;
        step4Container.textContent = step4[2].yPositive;
        //STEP 5
        step5num.textContent = step5[2].yPositive;
        step5deno.textContent = radius;
        // ANSWER IN PARENTHESIS
        numeratorx.innerHTML = `(x${numeX})²`;
        denominatorx.innerHTML = denoX;
        numeratory.innerHTML = `(y+${numeY})²`;
        denominatory.innerHTML = denoY;
        result.style.display = "flex";  
    }
    else if(coeffX < 0 && coeffY < 0){
        step1Container.textContent = step1[3].xyNegative;
        step2Container.textContent = step2[3].xyNegative;
        step3Container.textContent = step3[3].xyNegative;
        step4Container.textContent = step4[3].xyNegative;
        //STEP 5
        step5num.textContent = step5[3].xyNegative;
        step5deno.textContent = radius;
        // ANSWER IN PARENTHESIS
        numeratorx.innerHTML = `(x${numeX})²`;
        denominatorx.innerHTML = denoX;
        numeratory.innerHTML = `(y${numeY})²`;
        denominatory.innerHTML = denoY;
        result.style.display = "flex";  
    }
     else {
        step1Container.innerHTML = "";
        step2Container.innerHTML = "";
        step3Container.innerHTML = "";
        step4Container.innerHTML = "";
        result.style.display = "none";
    }
}
