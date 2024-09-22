const majorIn1 = document.querySelector(".majorIn1");
const majorDeno1 = document.querySelector(".majorDeno1");
const minorIn1 = document.querySelector(".minorIn1");
const minorDeno1 = document.querySelector(".minorDeno1")
const constant1 = document.querySelector(".constant1");
const lcmMajor1 = document.querySelector(".lcmMajor1");
const lcmMinor1 = document.querySelector(".lcmMinor1");
const lcmInConst = document.querySelector(".lcmInConst");
const answerContainer = document.querySelector(".hyperbolaSF-answer");

const step1 = document.querySelector(".step1 .step1-answer");
const step2 = document.querySelector(".step2"); 
const step3 = document.querySelector(".step3");
const step4 = document.querySelector(".step4");
const step5 = document.querySelector(".step5");
const step6 = document.querySelector(".step6");

const step1Container = document.querySelector(".step1");
const step2Container = document.querySelector(".step2-container");
const step3Container = document.querySelector(".step3-container");
const step4Container = document.querySelector(".step4-container");
const step5Container = document.querySelector(".step5-container");
const step6Container = document.querySelector(".step6-container");

const addStep = document.querySelector(".add-step");

function showStep1(){
    step1.style.visibility = "visible";
    step2Container.style.display = "block";
    document.querySelector(".step1Btn").style.display = "none";
    document.querySelector(".step2Btn").style.display = "block";
}

function showStep2(){
    step2.style.display = "block";
    step3Container.style.display = "block";
    document.querySelector(".step2Btn").style.display = "none";
    document.querySelector(".step3Btn").style.display = "block";
}

function showStep3(){
    step3.style.display = "block";
    step4Container.style.display = "block";
    document.querySelector(".step3Btn").style.display = "none";
    document.querySelector(".step4Btn").style.display = "block";
}

function showStep4(){
    step4.style.display = "block";
    step5Container.style.display = "block";
    document.querySelector(".step4Btn").style.display = "none";
    document.querySelector(".step5Btn").style.display = "block";
}

function showStep5(){
    step5.style.display = "block";
    step6.style.display = "block";
    step6Container.style.display = "block";
    document.querySelector(".step5Btn").style.display = "none";

    confetti({
        particleCount: 100,   
        spread: 100,           
        origin: { y: 0.6 }  
    });
}

function transform(){
    alert("Prepare your pen and a piece of paper for writing your answers.");
    document.querySelector(".step1Btn").style.display = "block";
    step1Container.style.visibility= "visible";
    step2Container.style.display = "none";
    step3Container.style.display = "none";
    step4Container.style.display = "none";
    step5Container.style.display = "none";
    step6Container.style.display = "none";
    step2.style.display = "none";
    step3.style.display = "none";
    step4.style.display = "none";
    step5.style.display = "none";
    step6.style.display = "none";

    const majorValue = parseFloat(document.getElementById("majorValue").value);
    const minorValue = parseFloat(document.getElementById("minorValue").value);
    const majorDenoValue = parseFloat(document.getElementById("majorDenoValue").value);
    const minorDenoValue = parseFloat(document.getElementById("minorDenoValue").value);
    answerContainer.style.visibility = "visible";

    if(isNaN(majorValue, minorValue, majorDenoValue, minorDenoValue)){
        step1.style.visibility = "hidden";
        step1Container.style.display = "none";
        answerContainer.style.visibility = "hidden";
    } else{
        answerContainer.style.visibility = "visible";
        step1.style.visibility = "hidden";
        step1Container.style.display = "block";
    }

    const major = document.querySelector(".major").value;
    const minor = document.querySelector(".minor").value;
    addStep.style.display = "block";
    let lcm = (majorDenoValue, minorDenoValue) => {
        if(isNaN(majorDenoValue) || isNaN(minorDenoValue)){
            const alert = window.alert("It should not be empty!!");
            return alert;
        } else if(majorDenoValue == 0 || minorDenoValue == 0){
            window.alert("Do not put a zero value on denominator, try using 1");
        } else {
            //Find the min and max
        let lar = Math.max(majorDenoValue,minorDenoValue);
        let small = Math.min(majorDenoValue,minorDenoValue);
        
        //Loop 
        let i = lar; 
        while(i % small !== 0){
          i += lar;
        }
        //return the number
        return i;
        }
      }

    const lcmValue = lcm(majorDenoValue,minorDenoValue);
    const majorLCM = lcmValue / majorDenoValue;
    const minorLCM = lcmValue / minorDenoValue;
    const majorCenter = majorValue * 2;
    const minorCenter = minorValue * 2;
    const majorConstant = Math.pow(majorValue, 2);
    const minorConstant = Math.pow(minorValue, 2);

    const majorExpandedFraction = `(<sup>${majorCenter}</sup>&frasl;<sub>${2}</sub>)²`;
    const minorExpandedFraction = `(<sup>${minorCenter}</sup>&frasl;<sub>${2}</sub>)²`;

    if(majorValue == 0 && minorValue == 0){
        lcmMajor1.textContent = lcmValue;
        lcmMinor1.textContent = lcmValue;
        majorIn1.textContent = `(${major}²)`;
        majorDeno1.textContent = `${majorDenoValue}`;
        minorIn1.textContent = `(${minor}²)`;
        minorDeno1.textContent = `${minorDenoValue}`; 
        lcmInConst.textContent = `LCM:(${majorDenoValue})(${minorDenoValue}) = ${lcmValue}`;
        // STEP 2
        step2.textContent = `${lcmValue / majorDenoValue}${major}² - ${lcmValue / minorDenoValue}${minor}² = ${lcmValue}`;
        // STEP 3
        step3.textContent = `${lcmValue / majorDenoValue}${major}² - ${lcmValue / minorDenoValue}${minor}² ${lcmValue / -1} = 0`;
        addStep.style.display = "none";
    } 
    else if(majorValue > 0 && minorValue == 0) {
        // STEP 1
        lcmMajor1.textContent = lcmValue;
        lcmMinor1.textContent = lcmValue;
        majorIn1.textContent = `(${major} + ${majorValue})²`;
        majorDeno1.textContent = `${majorDenoValue}`;
        minorIn1.textContent = `(${minor}²)`;
        minorDeno1.textContent = `${minorDenoValue}`; 
        lcmInConst.textContent = `LCM:(${majorDenoValue})(${minorDenoValue}) = ${lcmValue}`;
        // STEP 2
        step2.textContent = `${majorLCM} (${major} + ${majorValue})² - ${minorLCM}${minor}² = ${lcmValue}`;
        // STEP 3
        step3.innerHTML = `${majorLCM} (${major}² + ${majorCenter}${major} + ${majorExpandedFraction}) - ${minorLCM}${minor}² = ${lcmValue}`;
        // STEP 4
        step4.textContent = `${majorLCM}${major}² + ${majorCenter * majorLCM}${major} + ${majorConstant * majorLCM} - ${minorLCM}${minor}² = ${lcmValue}`;
        // STEP 5
        step5.textContent = `${majorLCM}${major}² - ${minorLCM}${minor}² + ${majorCenter * majorLCM}${major} + ${majorConstant * majorLCM} ${lcmValue / -1} = 0`;
        // STEP 6
        step6.textContent = `${majorLCM}${major}² - ${minorLCM}${minor}² + ${majorCenter * majorLCM}${major} + ${majorConstant * majorLCM + lcmValue / -1} = 0`;
    } 
    else if(majorValue < 0 && minorValue == 0) {
        // STEP 1
        lcmMajor1.textContent = lcmValue;
        lcmMinor1.textContent = lcmValue;
        majorIn1.textContent = `(${major} ${majorValue})²`;
        majorDeno1.textContent = `${majorDenoValue}`;
        minorIn1.textContent = `(${minor})²`;
        minorDeno1.textContent = `${minorDenoValue}`; 
        lcmInConst.textContent = `LCM:(${majorDenoValue})(${minorDenoValue}) = ${lcmValue}`;
        // STEP 2
        step2.textContent = `${majorLCM} (${major} ${majorValue})² - ${minorLCM}${minor}² = ${lcmValue}`;
        // STEP 3
        step3.innerHTML = `${majorLCM} (${major}² ${majorCenter}${major} + ${majorExpandedFraction}) - ${minorLCM}${minor}² = ${lcmValue}`;
        // STEP 4
        step4.textContent = `${majorLCM}${major}² ${majorCenter * majorLCM}${major} + ${majorConstant * majorLCM} - ${minorLCM}${minor}² = ${lcmValue}`;
        // STEP 5
        step5.textContent = `${majorLCM}${major}² - ${minorLCM}${minor}² ${majorCenter * majorLCM}${major} + ${majorConstant * majorLCM} ${lcmValue / -1} = 0`;
        // STEP 6
        step6.textContent = `${majorLCM}${major}² - ${minorLCM}${minor}² ${majorCenter * majorLCM}${major} + ${majorConstant * majorLCM + lcmValue / -1} = 0`;
    } 
    else if(majorValue == 0 && minorValue > 0) {
        // STEP 1
        lcmMajor1.textContent = lcmValue;
        lcmMinor1.textContent = lcmValue;
        majorIn1.textContent = `(${major}²)`;
        majorDeno1.textContent = `${majorDenoValue}`;
        minorIn1.textContent = `(${minor} + ${minorValue})²`;
        minorDeno1.textContent = `${minorDenoValue}`; 
        lcmInConst.textContent = `LCM:(${majorDenoValue})(${minorDenoValue}) = ${lcmValue}`;
        // STEP 2
        step2.textContent = `${majorLCM}${major}² - ${minorLCM} (${minor} + ${minorValue})² = ${lcmValue}`;
        // STEP 3
        step3.innerHTML = `${majorLCM}${major}² - ${minorLCM} (${minor}² + ${minorCenter}${minor} + ${minorExpandedFraction}) = ${lcmValue}`;
        // STEP 4
        step4.textContent = `${majorLCM}${major}² - ${minorLCM}${minor}² - ${minorCenter}${minor} - ${minorConstant * minorLCM} = ${lcmValue}`;
        // STEP 5
        step5.textContent = `${majorLCM}${major}² - ${minorLCM}${minor}² - ${minorCenter * minorLCM}${minor} - ${minorConstant * minorLCM} ${lcmValue / -1} = 0`;
        // STEP 6
        step6.textContent = `${majorLCM}${major}² - ${minorLCM}${minor}² - ${minorCenter * minorLCM}${major}  ${(minorConstant * minorLCM / -1) + lcmValue / -1} = 0`;
    } 
    else if(majorValue == 0 && minorValue < 0){
        lcmMajor1.textContent = lcmValue;
        lcmMinor1.textContent = lcmValue;
        majorIn1.textContent = `(${major}²)`;
        majorDeno1.textContent = `${majorDenoValue}`;
        minorIn1.textContent = `(${minor} ${minorValue})²`;
        minorDeno1.textContent = `${minorDenoValue}`; 
        lcmInConst.textContent = `LCM:(${majorDenoValue})(${minorDenoValue}) = ${lcmValue}`;
        // STEP 2
        step2.textContent = `${majorLCM}${major}² - ${minorLCM} (${minor} ${minorValue})² = ${lcmValue}`;
        // STEP 3
        step3.innerHTML = `${majorLCM}${major}² - ${minorLCM} (${minor}² ${minorCenter}${minor} + ${minorExpandedFraction}) = ${lcmValue}`;
        // STEP 4
        step4.textContent = `${majorLCM}${major}² - ${minorLCM}${minor}² + ${(minorCenter * minorLCM) / -1}${minor} + ${minorConstant * minorLCM} = ${lcmValue}`;
        // STEP 5
        step5.textContent = `${majorLCM}${major}² - ${minorLCM}${minor}² + ${(minorCenter * minorLCM) / - 1}${minor} + ${minorConstant * minorLCM} ${lcmValue / -1} = 0`;
        // STEP 6
        step6.textContent = `${majorLCM}${major}² - ${minorLCM}${minor}² + ${(minorCenter  * minorLCM) / -1}${major} ${minorConstant * minorLCM + lcmValue / -1} = 0`; 
    } 
    else if (majorValue > 0 && minorValue > 0){
        const finalConst = (majorConstant * majorLCM) + (-minorConstant * minorLCM) + lcmValue / -1;
        // STEP 1
        lcmMajor1.textContent = lcmValue;
        lcmMinor1.textContent = lcmValue;
        majorIn1.textContent = `(${major} + ${majorValue})²`;
        majorDeno1.textContent = `${majorDenoValue}`;
        minorIn1.textContent = `(${minor} + ${minorValue})²`;
        minorDeno1.textContent = `${minorDenoValue}`; 
        lcmInConst.textContent = `LCM:(${majorDenoValue})(${minorDenoValue}) = ${lcmValue}`;
        // STEP 2 
        step2.textContent = `${majorLCM} (${major} + ${majorValue})² - ${minorLCM} (${minor} + ${minorValue})² = ${lcmValue}`;
        // STEP 3
        step3.innerHTML = `${majorLCM} (${major}² + ${majorCenter}${major} + ${majorExpandedFraction}) - ${minorLCM} (${minor}² + ${minorCenter}${minor} + ${minorExpandedFraction}) = ${lcmValue}`;
        // STEP 4
        step4.textContent = `${majorLCM}${major}² + ${majorCenter * majorLCM}${major} + ${majorConstant * majorLCM} - ${minorLCM}${minor}² - ${minorCenter * minorLCM}${minor} ${minorConstant * -minorLCM} = ${lcmValue}`;
        // STEP 5
        step5.textContent = `${majorLCM}${major}² - ${minorLCM}${minor}² + ${majorCenter * majorLCM}${major} - ${minorCenter * minorLCM}${minor} + ${majorConstant * majorLCM} ${minorConstant * -minorLCM} ${lcmValue / -1} = 0`;
        // STEP 6
        step6.textContent = `${majorLCM}${major}² - ${minorLCM}${minor}² + ${majorCenter * majorLCM}${major} - ${minorCenter * minorLCM}${minor} + ${finalConst} = 0`;
    }
    else if (majorValue > 0 && minorValue < 0){
        const finalConst = (majorConstant * majorLCM) + (-minorConstant * minorLCM) + lcmValue / -1;
        // STEP 1
        lcmMajor1.textContent = lcmValue;
        lcmMinor1.textContent = lcmValue;
        majorIn1.textContent = `(${major} + ${majorValue})²`;
        majorDeno1.textContent = `${majorDenoValue}`;
        minorIn1.textContent = `(${minor} ${minorValue})²`;
        minorDeno1.textContent = `${minorDenoValue}`; 
        lcmInConst.textContent = `LCM:(${majorDenoValue})(${minorDenoValue}) = ${lcmValue}`;
        // STEP 2
        step2.textContent = `${majorLCM} (${major} + ${majorValue})² - ${minorLCM} (${minor} ${minorValue})² = ${lcmValue}`;
        // STEP 3
        step3.innerHTML = `${majorLCM} (${major}² + ${majorCenter}${major} + ${majorExpandedFraction}) - ${minorLCM} (${minor}² ${minorCenter}${minor} + ${minorExpandedFraction}) = ${lcmValue}`;
        // STEP 4
        step4.textContent = `${majorLCM}${major}² + ${majorCenter * majorLCM}${major} + ${majorConstant * majorLCM} - ${minorLCM}${minor}² + ${minorCenter * -minorLCM}${minor} ${minorConstant * -minorLCM} = ${lcmValue}`;
        // STEP 5
        step5.textContent = `${majorLCM}${major}² - ${minorLCM}${minor}² + ${majorCenter * majorLCM}${major} + ${minorCenter * -minorLCM}${minor} + ${majorConstant * majorLCM} ${minorConstant * -minorLCM} ${lcmValue / -1} = 0`;
        // STEP 6
        step6.textContent = `${majorLCM}${major}² - ${minorLCM}${minor}² + ${majorCenter * majorLCM}${major} + ${minorCenter * -minorLCM}${minor} ${finalConst} = 0`;
    }
    else if (majorValue < 0 && minorValue > 0){
        const finalConst = (majorConstant * majorLCM) + (minorConstant * -minorLCM) + lcmValue / -1;
        // STEP 1
        lcmMajor1.textContent = lcmValue;
        lcmMinor1.textContent = lcmValue;
        majorIn1.textContent = `(${major} ${majorValue})²`;
        majorDeno1.textContent = `${majorDenoValue}`;
        minorIn1.textContent = `(${minor} + ${minorValue})²`;
        minorDeno1.textContent = `${minorDenoValue}`; 
        lcmInConst.textContent = `LCM:(${majorDenoValue})(${minorDenoValue}) = ${lcmValue}`;
        // STEP 2
        step2.textContent = `${majorLCM} (${major} ${majorValue})² - ${minorLCM} (${minor} + ${minorValue})² = ${lcmValue}`;
        // STEP 3
        step3.innerHTML = `${majorLCM} (${major}² ${majorCenter}${major} + ${majorExpandedFraction}) - ${minorLCM} (${minor}² + ${minorCenter}${minor} + ${minorExpandedFraction}) = ${lcmValue}`;
        // STEP 4
        step4.textContent = `${majorLCM}${major}² ${majorCenter * majorLCM}${major} + ${majorConstant * majorLCM} - ${minorLCM}${minor}² ${minorCenter * -minorLCM}${minor} ${minorConstant * -minorLCM} = ${lcmValue}`;
        // STEP 5
        step5.textContent = `${majorLCM}${major}² - ${minorLCM}${minor}² ${majorCenter * majorLCM}${major} ${minorCenter * -minorLCM}${minor} + ${majorConstant * majorLCM} ${minorConstant * -minorLCM} ${lcmValue / -1} = 0`;
        // STEP 6
        step6.textContent = `${majorLCM}${major}² - ${minorLCM}${minor}² ${majorCenter * majorLCM}${major} ${minorCenter * -minorLCM}${minor} + ${finalConst} = 0`;
    } 
    else if(majorValue < 0 && minorValue < 0){
        const finalConst = (majorConstant * majorLCM) + (minorConstant * -minorLCM) + lcmValue / -1;
        // STEP 1
        lcmMajor1.textContent = lcmValue;
        lcmMinor1.textContent = lcmValue;
        majorIn1.textContent = `(${major} ${majorValue})²`;
        majorDeno1.textContent = `${majorDenoValue}`;
        minorIn1.textContent = `(${minor} ${minorValue})²`;
        minorDeno1.textContent = `${minorDenoValue}`; 
        lcmInConst.textContent = `LCM:(${majorDenoValue})(${minorDenoValue}) = ${lcmValue}`;
        // STEP 2
        step2.textContent = `${majorLCM} (${major} ${majorValue})² - ${minorLCM} (${minor} ${minorValue})² = ${lcmValue}`;
        // STEP 3
        step3.innerHTML = `${majorLCM} (${major}² ${majorCenter}${major} + ${majorExpandedFraction}) - ${minorLCM} (${minor}² ${minorCenter}${minor} + ${minorExpandedFraction}) = ${lcmValue}`;
        // STEP 4
        step4.textContent = `${majorLCM}${major}² ${majorCenter * majorLCM}${major} + ${majorConstant * majorLCM} - ${minorLCM}${minor}² + ${minorCenter * -minorLCM}${minor} ${minorConstant * -minorLCM} = ${lcmValue}`;
        // STEP 5
        step5.textContent = `${majorLCM}${major}² - ${minorLCM}${minor}² ${majorCenter * majorLCM}${major} + ${minorCenter * -minorLCM}${minor} + ${majorConstant * majorLCM} ${minorConstant * -minorLCM} ${lcmValue / -1} = 0`;
        // STEP 6
        step6.textContent = `${majorLCM}${major}² - ${minorLCM}${minor}² ${majorCenter * majorLCM}${major} + ${minorCenter * -minorLCM}${minor} + ${finalConst} = 0`;
    }
}