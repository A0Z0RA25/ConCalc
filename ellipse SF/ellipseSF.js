const numex = document.querySelector(".numeratorx");
const denox = document.querySelector(".denominatorx");
const numey = document.querySelector(".numeratory");
const denoy = document.querySelector(".denominatory");
const lcdVal = document.querySelector(".lcd");

const step2Container = document.querySelector(".step2");
const step3Container = document.querySelector(".step3");
const step4Container = document.querySelector(".step4");
const step5Container = document.querySelector(".step5");
const answerContainer = document.querySelector(".answer");
const resultContainer = document.querySelector(".result-container");
function transform() {
    // Get the values of semi-major and semi-minor axes
    const semiMajor = parseFloat(document.getElementById('semi-major').value);
    const semiMinor = parseFloat(document.getElementById('semi-minor').value);

    // Get the center coordinates
    const centerX = parseFloat(document.getElementById('center-x').value);
    const centerY = parseFloat(document.getElementById('center-y').value);
 
    // Calculate the constants A, B, C, D, and E for the general form
    const lcd = semiMajor * semiMinor;
    const xlcd = lcd / semiMajor; 
    const ylcd = lcd / semiMinor;

    const expandedX = centerX * 2;
    const expandedY = centerY * 2;
    const expandedCenterX = expandedX * xlcd;
    const expandedCenterY = expandedY * ylcd;
    const constantX = Math.pow((expandedX / 2), 2);
    const constantY = Math.pow((expandedY / 2), 2);
    const expandedConstantX = constantX * xlcd;
    const expandedConstantY = constantY * ylcd;

    // Display the general form
    const step1X = [
        {"xPositive": `(x+${centerX})²`},
        {"xNegative": `(x ${centerX})²)`}
    ]
    const step1Y = [
        {"yPositive": `(x+${centerY})²`},
        {"yNegative": `(x ${centerY})²)`}
    ]
    const step2 = [
        {"xyPositive": `${xlcd}(x+${centerX})²+${ylcd}(y+${centerY})²=${lcd}`},
        {"xPositive": `${xlcd}(x+${centerX})²+${ylcd}(y${centerY})²=${lcd}`},
        {"yPositive": `${xlcd}(x${centerX})²+${ylcd}(y+${centerY})²=${lcd}`},
        {"xyNegative": `${xlcd}(x${centerX})²+${ylcd}(y${centerY})²=${lcd}`}
    ]
    const step3 = [
        {"xyPositive": `${xlcd}(x²+${expandedX}x+${constantX})+${ylcd}(y²+${expandedY}y+${constantY})=${lcd}`},
        {"xPositive": `${xlcd}(x²+${expandedX}x+${constantX})+${ylcd}(y²${expandedY}y+${constantY})=${lcd}`},
        {"yPositive": `${xlcd}(x²${expandedX}x+${constantX})+${ylcd}(y²+${expandedY}y+${constantY})=${lcd}`},
        {"xyNegative": `${xlcd}(x²${expandedX}x+${constantX})+${ylcd}(y²${expandedY}y+${constantY})=${lcd}`},
    ]
    const step4 = [
        {"xyPositive": `(${xlcd}x²+${expandedCenterX}x+${expandedConstantX})+(${ylcd}y²+${expandedCenterY}y+${expandedConstantY})=${lcd}`},
        {"xPositive": `(${xlcd}x²+${expandedCenterX}x+${expandedConstantX})+(${ylcd}y²${expandedCenterY}y+${expandedConstantY})=${lcd}`},
        {"yPositive": `(${xlcd}x²${expandedCenterX}x+${expandedConstantX})+(${ylcd}y²+${expandedCenterY}y+${expandedConstantY})=${lcd}`},
        {"xyNegative": `(${xlcd}x²${expandedCenterX}x+${expandedConstantX})+(${ylcd}y²${expandedCenterY}y+${expandedConstantY})=${lcd}`}
    ]
    const step5 = [
        {"xyPositive": `${xlcd}x²+${ylcd}y²+${expandedCenterX}x+${expandedCenterY}y+${expandedConstantX}+${expandedConstantY}${lcd / -1}=0`},
        {"xPositive": `${xlcd}x²+${ylcd}y²+${expandedCenterX}x${expandedCenterY}y+${expandedConstantX}+${expandedConstantY}${lcd / -1}=0`},
        {"yPositive": `${xlcd}x²+${ylcd}y²${expandedCenterX}x+${expandedCenterY}y+${expandedConstantX}+${expandedConstantY}${lcd / -1}=0`},
        {"xyNegative": `${xlcd}x²+${ylcd}y²${expandedCenterX}x${expandedCenterY}y+${expandedConstantX}+${expandedConstantY}${lcd / -1}=0`}
    ]
    const answer = [
        {"xyPositive": `${xlcd}x²+${ylcd}y²+${expandedCenterX}x+${expandedCenterY}y${expandedConstantX + expandedConstantY + (lcd / -1)}=0`},
        {"xPositive": `${xlcd}x²+${ylcd}y²+${expandedCenterX}x${expandedCenterY}y${expandedConstantX + expandedConstantY + (lcd / -1)}=0`},
        {"yPositive": `${xlcd}x²+${ylcd}y²${expandedCenterX}x+${expandedCenterY}y${expandedConstantX + expandedConstantY + (lcd / -1)}=0`},
        {"xyNegative": `${xlcd}x²+${ylcd}y²${expandedCenterX}x${expandedCenterY}y${expandedConstantX + expandedConstantY + (lcd / -1)}=0`}
    ]
    resultContainer.style.display = "block";
    if(centerX > 0 && centerY > 0){
        // STEP 1
        numex.textContent = step1X[0].xPositive;
        numey.textContent = step1Y[0].yPositive;
        denox.textContent = semiMajor;
        denoy.textContent = semiMinor;
        lcdVal.textContent = `LCD:(${semiMajor})(${semiMinor})=${lcd}`;
        // STEP 2
        step2Container.textContent = step2[0].xyPositive; 
        // STEP 3
        step3Container.textContent = step3[0].xyPositive;
        // STEP 4
        step4Container.textContent = step4[0].xyPositive;
        // STEP 5
        step5Container.textContent = step5[0].xyPositive;
        answerContainer.textContent = answer[0].xyPositive;
    } 
    else if(centerX > 0){
        numex.textContent = step1X[0].xPositive;
        numey.textContent = step1Y[1].yNegative;
        denox.textContent = semiMajor;
        denoy.textContent = semiMinor;
        lcdVal.textContent = `LCD:(${semiMajor})(${semiMinor})=${lcd}`;
        // STEP 2
        step2Container.textContent = step2[1].xPositive; 
        // STEP 3
        step3Container.textContent = step3[1].xPositive;
        // STEP 4
        step4Container.textContent = step4[1].xPositive;
        // STEP 5
        step5Container.textContent = step5[1].xPositive;
        answerContainer.textContent = answer[1].xPositive;
    } 
    else if(centerY > 0){
        numex.textContent = step1X[1].xNegative;
        numey.textContent = step1Y[0].yPositive;
        denox.textContent = semiMajor;
        denoy.textContent = semiMinor;
        lcdVal.textContent = `LCD:(${semiMajor})(${semiMinor})=${lcd}`;
        // STEP 2
        step2Container.textContent = step2[2].yPositive; 
        // STEP 3
        step3Container.textContent = step3[2].yPositive;
        // STEP 4
        step4Container.textContent = step4[2].yPositive;
        // STEP 5
        step5Container.textContent = step5[2].yPositive;
        answerContainer.textContent = answer[2].yPositive;
    }
    else if(isNaN(semiMajor) || isNaN(semiMinor) || isNaN(centerX) || isNaN(centerY)){
        window.alert("Put invalid value");
        resultContainer.style.display = "none";
    } else{
            numex.textContent = step1X[1].xNegative;
            numey.textContent = step1Y[1].yNegative;
            denox.textContent = semiMajor;
            denoy.textContent = semiMinor;
            lcdVal.textContent = `LCD:(${semiMajor})(${semiMinor})=${lcd}`;
            // STEP 2
            step2Container.textContent = step2[3].xyNegative; 
            // STEP 3
            step3Container.textContent = step3[3].xyNegative;
            // STEP 4
            step4Container.textContent = step4[3].xyNegative;
            // STEP 5
            step5Container.textContent = step5[3].xyNegative;
            answerContainer.textContent = answer[3].xyNegative;
    }
}
