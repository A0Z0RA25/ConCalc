const numex = document.querySelector(".numeratorx");
const denox = document.querySelector(".denominatorx");
const numey = document.querySelector(".numeratory");
const denoy = document.querySelector(".denominatory");
const givenA = document.querySelector(".givenA");
const givenADeno = document.querySelector(".givenADeno");
const givenB = document.querySelector(".givenB");
const givenBDeno = document.querySelector(".givenBDeno");
const givenSignX = document.querySelector(".givenSignX");
const givenSignY = document.querySelector(".givenSignY");
const given = document.querySelector(".given");

const step1Container = document.querySelector(".step1");
const step2Container = document.querySelector(".step2");
const step3Container = document.querySelector(".step3");
const step4Container = document.querySelector(".step4");
const step5Container = document.querySelector(".step5");
const answerContainer = document.querySelector(".final");
const resultContainer = document.querySelector(".result-container");
const step1DivCon = document.querySelector(".step1-container");
const step2DivCon = document.querySelector(".step2-container");
const step3DivCon = document.querySelector(".step3-container");
const step4DivCon = document.querySelector(".step4-container");
const step5DivCon = document.querySelector(".step5-container");
const finalContainer = document.querySelector(".final-container");

const aValue = document.querySelector(".aValue");
const bValue = document.querySelector(".bValue");
const aDeno = document.querySelector(".aDeno");
const bDeno = document.querySelector(".bDeno");
const lcmConst =document.querySelector(".lcmConst");

function showStep1(){
    step1Container.style.display = "block";
    step2DivCon.style.display = "block";
    document.querySelector(".step1Btn").style.display = "none";
    document.querySelector(".step2Btn").style.display = "block";
}

function showStep2(){
    step2Container.style.display = "block";
    step3DivCon.style.display = "block";
    document.querySelector(".step2Btn").style.display = "none";
    document.querySelector(".step3Btn").style.display = "block";
}

function showStep3(){
    step3Container.style.display = "block";
    step4DivCon.style.display = "block";
    document.querySelector(".step3Btn").style.display = "none";
    document.querySelector(".step4Btn").style.display = "block";
}

function showStep4(){
    step4Container.style.display = "block";
    step5DivCon.style.display = "block";
    document.querySelector(".step4Btn").style.display = "none";
    document.querySelector(".step5Btn").style.display = "block";
}

function showStep5(){
    step5Container.style.display = "block";
    finalContainer.style.display = "block";
    document.querySelector(".step5Btn").style.display = "none";
    answerContainer.classList.add('finalAnswerBgColor');
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x:0.5 , y: 1 }
    });
}

function transform() {
    const reminderContainer = document.querySelector(".reminderContainer");
    reminderContainer.style.display = "block";
    
    document.getElementById('showMessageBtn').addEventListener('click', function() {
        reminderContainer.style.display = "none";
    });

    step1Container.style.display = "none";
    step2DivCon.style.display = "none";
    step2Container.style.display = "none";
    step3DivCon.style.display = "none";
    step3Container.style.display = "none";
    step4DivCon.style.display = "none";
    step4Container.style.display = "none";
    step5DivCon.style.display = "none";
    step5Container.style.display = "none";
    finalContainer.style.display = "none";
    document.querySelector(".step1Btn").style.display = "block";
    // Get the values 
    const semiMajor = parseFloat(document.getElementById('semi-major').value);
    const semiMinor = parseFloat(document.getElementById('semi-minor').value);

    // Get the center 
    const centerX = parseFloat(document.getElementById('center-x').value);
    const centerY = parseFloat(document.getElementById('center-y').value);

    let lcm = (semiMajor, semiMinor) => {
        if (!semiMajor || !semiMinor || isNaN(semiMajor) || isNaN(semiMinor)) {
            const alert = window.alert("It should not be empty!!")
            return alert;
        }
        //Find the min and max
        let lar = Math.max(semiMajor,semiMinor);
        let small = Math.min(semiMajor,semiMinor);
        
        //Loop 
        let i = lar;
        while(i % small !== 0){
          i += lar;
        }
        //return the number
        return i; 
      }

    const lcmValue = lcm(semiMajor,semiMinor);
    const xlcd = lcmValue / semiMajor; 
    const ylcd = lcmValue / semiMinor;

    const expandedX = centerX * 2;
    const expandedY = centerY * 2;
    const expandedCenterX = expandedX * xlcd; 
    const expandedCenterY = expandedY * ylcd;
    const constantX = Math.pow((expandedX / 2), 2);
    const constantY = Math.pow((expandedY / 2), 2);
    const expandedConstantX = constantX * xlcd;
    const expandedConstantY = constantY * ylcd;

    // Given
    given.style.display = (centerX == 0 && centerY == 0) ? "none" : "block";
    givenSignX.textContent = (centerX > 0) ? "+" : "-";
    givenSignY.textContent = (centerY > 0) ? "+" : "-";
    givenA.textContent = (centerX > 0) ? centerX : centerX / -1;
    givenB.textContent = (centerY > 0) ? centerY : centerY / -1;
    givenADeno.textContent = semiMajor; 
    givenBDeno.textContent = semiMinor;

    // Display the general form
    const step2 = [
        {"xyPositive": `${xlcd}(x+${centerX})²+${ylcd}(y+${centerY})²=${lcmValue}`},
        {"xPositive": `${xlcd}(x+${centerX})²+${ylcd}(y${centerY})²=${lcmValue}`},
        {"yPositive": `${xlcd}(x${centerX})²+${ylcd}(y+${centerY})²=${lcmValue}`},
        {"xyNegative": `${xlcd}(x${centerX})²+${ylcd}(y${centerY})²=${lcmValue}`},
    ]
    const step3 = [
        {"xyPositive": `${xlcd}(x²+${expandedX}x+${constantX})+${ylcd}(y²+${expandedY}y+${constantY})=${lcmValue}`},
        {"xPositive": `${xlcd}(x²+${expandedX}x+${constantX})+${ylcd}(y²${expandedY}y+${constantY})=${lcmValue}`},
        {"yPositive": `${xlcd}(x²${expandedX}x+${constantX})+${ylcd}(y²+${expandedY}y+${constantY})=${lcmValue}`},
        {"xyNegative": `${xlcd}(x²${expandedX}x+${constantX})+${ylcd}(y²${expandedY}y+${constantY})=${lcmValue}`}
    ] 
    const step4 = [
        {"xyPositive": `(${xlcd}x²+${expandedCenterX}x+${expandedConstantX})+(${ylcd}y²+${expandedCenterY}y+${expandedConstantY})=${lcmValue}`},
        {"xPositive": `(${xlcd}x²+${expandedCenterX}x+${expandedConstantX})+(${ylcd}y²${expandedCenterY}y+${expandedConstantY})=${lcmValue}`},
        {"yPositive": `(${xlcd}x²${expandedCenterX}x+${expandedConstantX})+(${ylcd}y²+${expandedCenterY}y+${expandedConstantY})=${lcmValue}`},
        {"xyNegative": `(${xlcd}x²${expandedCenterX}x+${expandedConstantX})+(${ylcd}y²${expandedCenterY}y+${expandedConstantY})=${lcmValue}`}
    ]
    const step5 = [
        {"xyPositive": `${xlcd}x²+${ylcd}y²+${expandedCenterX}x+${expandedCenterY}y+${expandedConstantX}+${expandedConstantY}${lcmValue / -1}=0`},
        {"xPositive": `${xlcd}x²+${ylcd}y²+${expandedCenterX}x${expandedCenterY}y+${expandedConstantX}+${expandedConstantY}${lcmValue / -1}=0`},
        {"yPositive": `${xlcd}x²+${ylcd}y²${expandedCenterX}x+${expandedCenterY}y+${expandedConstantX}+${expandedConstantY}${lcmValue / -1}=0`},
        {"xyNegative": `${xlcd}x²+${ylcd}y²${expandedCenterX}x${expandedCenterY}y+${expandedConstantX}+${expandedConstantY}${lcmValue / -1}=0`}
    ]
    const answer = [
        {"xyPositive": `${xlcd}x²+${ylcd}y²+${expandedCenterX}x+${expandedCenterY}y + ${expandedConstantX + expandedConstantY + (lcmValue / -1)}=0`},
        {"xPositive": `${xlcd}x²+${ylcd}y²+${expandedCenterX}x${expandedCenterY}y + ${expandedConstantX + expandedConstantY + (lcmValue / -1)}=0`},
        {"yPositive": `${xlcd}x²+${ylcd}y²${expandedCenterX}x+${expandedCenterY}y + ${expandedConstantX + expandedConstantY + (lcmValue / -1)}=0`},
        {"xyNegative": `${xlcd}x²+${ylcd}y²${expandedCenterX}x${expandedCenterY}y + ${expandedConstantX + expandedConstantY + (lcmValue / -1)}=0`}
    ] 
    
    if(isNaN(centerX) || isNaN(centerY)){
        resultContainer.style.visibility = "hidden";
    } else {
      resultContainer.style.visibility = "visible";  
    }
    
    if(centerX > 0 && centerY > 0 && centerX !== 0 && centerY !== 0){
        // STEP 1
        aValue.textContent = `${lcmValue}(x + ${centerX})²`;
        aDeno.textContent = semiMajor;
        bValue.textContent = `${lcmValue}(y + ${centerY})²`;
        bDeno.textContent = semiMinor;
        lcmConst.textContent = `LCM: (${semiMajor})(${semiMinor}) = ${lcmValue}`;
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
    else if(centerX > 0 && centerX !== 0 && centerY !== 0){
        // STEP 1
        aValue.textContent = `${lcmValue}(x + ${centerX})²`;
        aDeno.textContent = semiMajor;
        bValue.textContent = `${lcmValue}(y + ${centerY})²`;
        bDeno.textContent = semiMinor;
        lcmConst.textContent = `LCM: (${semiMajor})(${semiMinor}) = ${lcmValue}`;
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
    else if(centerY > 0 && centerX !== 0 && centerY !== 0){
        // STEP 1
        aValue.textContent = `${lcmValue}(x + ${centerX})²`;
        aDeno.textContent = semiMajor;
        bValue.textContent = `${lcmValue}(y + ${centerY})²`;
        bDeno.textContent = semiMinor;
        lcmConst.textContent = `LCM: (${semiMajor})(${semiMinor}) = ${lcmValue}`;
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
    else if(centerX == 0 && centerY > 0 && centerY !== 0){
        given.style.display = "none";
        aValue.textContent = `${lcmValue}x²`;
        aDeno.textContent = semiMajor;
        bValue.textContent = `${lcmValue}(y + ${centerY})²`;
        bDeno.textContent = semiMinor;
        lcmConst.textContent = `LCM: (${semiMajor})(${semiMinor}) = ${lcmValue}`;
        // STEP 2
        step2Container.textContent = `${xlcd}x² + ${ylcd}(y + ${centerY})²=${lcmValue}`; 
        // STEP 3
        step3Container.textContent = `${xlcd}x² + ${ylcd}(y² + ${expandedY}y + ${constantY}) = ${lcmValue}`;
        // STEP 4
        step4Container.textContent = `${xlcd}x² + (${ylcd}y² + ${expandedCenterY}y+ ${expandedConstantY}) = ${lcmValue}`;
        // STEP 5
        step5Container.textContent = `${xlcd}x² + ${ylcd}y² + ${expandedCenterY}y + ${expandedConstantY}${lcmValue / -1} = 0`;
        answerContainer.textContent = `${xlcd}x² + ${ylcd}y² + ${expandedCenterY}y + ${expandedConstantY + (lcmValue / -1)}=0`;
    }
    else if(centerX == 0 && centerY < 0 && centerY !== 0){
        given.style.display = "none";
        aValue.textContent = `${lcmValue}x²`;
        aDeno.textContent = semiMajor;
        bValue.textContent = `${lcmValue}(y ${centerY})²`;
        bDeno.textContent = semiMinor;
        lcmConst.textContent = `LCM: (${semiMajor})(${semiMinor}) = ${lcmValue}`;
        // STEP 2
        step2Container.textContent = `${xlcd}x² + ${ylcd}(y ${centerY})²=${lcmValue}`; 
        // STEP 3
        step3Container.textContent = `${xlcd}x² + ${ylcd}(y² ${expandedY}y + ${constantY}) = ${lcmValue}`;
        // STEP 4
        step4Container.textContent = `${xlcd}x² + (${ylcd}y² ${expandedCenterY}y+ ${expandedConstantY}) = ${lcmValue}`;
        // STEP 5
        step5Container.textContent = `${xlcd}x² + ${ylcd}y² ${expandedCenterY}y + ${expandedConstantY}${lcmValue / -1} = 0`;
        answerContainer.textContent = `${xlcd}x² + ${ylcd}y² ${expandedCenterY}y + ${expandedConstantY + (lcmValue / -1)}=0`;
    }
    else if(centerY == 0 && centerX > 0 && centerX !== 0){
        given.style.display = "none";
        aValue.textContent = `${lcmValue}(x + ${centerX})²`;
        aDeno.textContent = semiMajor;
        bValue.textContent = `${lcmValue}y²`;
        bDeno.textContent = semiMinor;
        lcmConst.textContent = `LCM: (${semiMajor})(${semiMinor}) = ${lcmValue}`;
        // STEP 2
        step2Container.textContent = `${xlcd}(x + ${centerX})² + ${ylcd}y²=${lcmValue}`; 
        // STEP 3
        step3Container.textContent = `${xlcd}(x² + ${expandedX}x+${constantX}) + ${ylcd}y² = ${lcmValue}`;
        // STEP 4
        step4Container.textContent = `(${xlcd}x² + ${expandedCenterX}x+${expandedConstantX}) + (${ylcd}y² = ${lcmValue}`;
        // STEP 5
        step5Container.textContent = `${xlcd}x² + ${ylcd}y² + ${expandedCenterX}x + ${expandedConstantX} ${lcmValue / -1} = 0`;
        answerContainer.textContent = `${xlcd}x² + ${ylcd}y² + ${expandedCenterX}x + ${expandedConstantX + (lcmValue / -1)} = 0`;
    }
    else if(centerY == 0 && centerX < 0 && centerX !== 0){
        given.style.display = "none";
        aValue.textContent = `${lcmValue}(x ${centerX})²`;
        aDeno.textContent = semiMajor;
        bValue.textContent = `${lcmValue}y²`;
        bDeno.textContent = semiMinor;
        lcmConst.textContent = `LCM: (${semiMajor})(${semiMinor}) = ${lcmValue}`;
        // STEP 2
        step2Container.textContent = `${xlcd}(x ${centerX})² + ${ylcd}y²=${lcmValue}`; 
        // STEP 3
        step3Container.textContent = `${xlcd}(x² ${expandedX}x+${constantX}) + ${ylcd}y² = ${lcmValue}`;
        // STEP 4
        step4Container.textContent = `(${xlcd}x² ${expandedCenterX}x+${expandedConstantX}) + ${ylcd}y² = ${lcmValue}`;
        // STEP 5 
        step5Container.textContent = `${xlcd}x² + ${ylcd}y² ${expandedCenterX}x + ${expandedConstantX} ${lcmValue / -1} = 0`;
        answerContainer.textContent = `${xlcd}x² + ${ylcd}y² ${expandedCenterX}x + ${expandedConstantX + (lcmValue / -1)} = 0`;
    }
    else if(centerY == 0 && centerY == 0){
        given.style.display = "none";
        aValue.textContent = `${lcmValue}x²`;
        aDeno.textContent = semiMajor;
        bValue.textContent = `${lcmValue}y²`;
        bDeno.textContent = semiMinor;
        lcmConst.textContent = `LCM: (${semiMajor})(${semiMinor}) = ${lcmValue}`;
        // STEP 2
        step2Container.textContent = `${xlcd}x² + ${ylcd}y² = ${lcmValue}`; 
        // STEP 3
        step3Container.textContent = `${xlcd}x² + ${ylcd}y² = ${lcmValue}`;
        // STEP 4
        step4Container.textContent = `${xlcd}x² + ${ylcd}y² = ${lcmValue}`;
        // STEP 5
        step5Container.textContent = `${xlcd}x² + ${ylcd}y² ${lcmValue / -1} = 0`;
        answerContainer.textContent = `${xlcd}x² + ${ylcd}y² ${(lcmValue / -1)} = 0`;
    }
     else{ 
        // STEP 1
        aValue.textContent = `${lcmValue}(x + ${centerX})²`;
        aDeno.textContent = semiMajor;
        bValue.textContent = `${lcmValue}(y + ${centerY})²`;
        bDeno.textContent = semiMinor;
        lcmConst.textContent = `LCM: (${semiMajor})(${semiMinor}) = ${lcmValue}`;
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
