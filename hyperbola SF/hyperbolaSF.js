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
const allStep = document.querySelector(".all-steps");

const step1Container = document.querySelector(".step1");
const step2Container = document.querySelector(".step2-container");
const step3Container = document.querySelector(".step3-container");
const step4Container = document.querySelector(".step4-container");
const step5Container = document.querySelector(".step5-container");
const step6Container = document.querySelector(".step6-container");

// Add event listeners for all step buttons
document.querySelector(".step1Btn").addEventListener('click', showStep1);
document.querySelector(".step2Btn").addEventListener('click', showStep2);
document.querySelector(".step3Btn").addEventListener('click', showStep3);
document.querySelector(".step4Btn").addEventListener('click', showStep4);
document.querySelector(".step5Btn").addEventListener('click', showStep5);

const addStep = document.querySelector(".add-step");

// Step display functions
function showStep0() {
    step1Container.style.display = "block";
    document.querySelector(".step1Btn").style.display = "block";
}

function showStep1() {
    step1.style.visibility = "visible";
    step2Container.style.display = "block";
    document.querySelector(".step1Btn").style.display = "none";
    document.querySelector(".step2Btn").style.display = "block";
}

function showStep2() {
    step2.style.display = "block";
    step3Container.style.display = "block";
    step3.style.background = "white";
    document.querySelector(".step2Btn").style.display = "none";
    document.querySelector(".step3Btn").style.display = "block";
    document.querySelector(".step3-container h1").innerHTML = "STEP 3: Expand the square of binomial.";
}

function showStep3() {
    step3.style.display = "block";
    step4Container.style.display = "block";
    document.querySelector(".step3Btn").style.display = "none";
    document.querySelector(".step4Btn").style.display = "block";
    step3.style.background = "white";
    // No confetti if majorValue or minorValue is not 0
    confetti({
        particleCount: 0,
        spread: 0,
        origin: { y: 0 }
    });
}

function showStep4() {
    step4.style.display = "block";
    step5Container.style.display = "block";
    document.querySelector(".step4Btn").style.display = "none";
    document.querySelector(".step5Btn").style.display = "block";
}

function showStep5() {
    step5.style.display = "block";
    step6.style.display = "block";
    step6Container.style.display = "block";
    document.querySelector(".step5Btn").style.display = "none";
    step6.classList.add('finalAnswerBgColor');

    confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 }
    });
}

// Logic to control the flow based on majorValue and minorValue
function ShowBtnSteps(majorValue, minorValue) {
    // Check if both majorValue and minorValue are zero
    if (majorValue === 0 && minorValue === 0) {
        showStep0();
        document.querySelector(".step2Btn").addEventListener('click', () => {
        document.querySelector(".step3-container h1").innerHTML = "Final Answer:";
        });
        document.querySelector(".step3Btn").addEventListener('click', () => {
            // Show the final answer without progressing to other steps
            step4Container.style.display = "none";
            step5Container.style.display = "none";
            step6Container.style.display = "none";
            step3.style.display = "block";
            step3Container.style.display = "block";
            document.querySelector(".step3Btn").style.display = "none";
            step3.style.background = "yellow";
        });
    } else {
        // If majorValue or minorValue is not zero, follow the normal step progression
        showStep0();
        document.querySelector(".step1Btn").addEventListener('click', () => {
            showStep1();
        });
        document.querySelector(".step2Btn").addEventListener('click', () => {
            showStep2();
        });
        document.querySelector(".step3Btn").addEventListener('click', () => {
            showStep3();
        });
        document.querySelector(".step4Btn").addEventListener('click', () => {
            showStep4();
        });
        document.querySelector(".step5Btn").addEventListener('click', () => {
            showStep5();
        });
    }
}

function startSound(){
    var audio = document.getElementById("startSound");
        audio.play();
};

function transform(){
    allStep.style.display = "none";
    const reminderContainer = document.querySelector(".reminderContainer");
    reminderContainer.style.display = "block";
    
    document.getElementById('showMessageBtn').addEventListener('click', function() {
        reminderContainer.style.display = "none";
        allStep.style.display = "block";
        startSound();
    });

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
    
    ShowBtnSteps(majorValue, minorValue); 

answerContainer.style.visibility = "visible";
    if(isNaN(majorValue, minorValue, majorDenoValue, minorDenoValue) || majorDenoValue == 0 || minorDenoValue == 0){
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
    const majorLCM = Math.abs(lcmValue / majorDenoValue);
    const minorLCM = Math.abs(lcmValue / minorDenoValue);
    const majorCenter = Math.abs(majorValue * 2);
    const minorCenter = Math.abs(minorValue * 2);
    const majorConstant = Math.pow(majorValue, 2);
    const minorConstant = Math.pow(minorValue, 2);
    
    const majorValueSign = (majorValue > 0) ? "+" : "-";
    const minorValueSign = (minorValue > 0) ? "+" : "-";
    const minorCenterSign = minorValue > 0 ? "-" : "+";
    const majorConstantSign = (majorConstant > 0) ? "+" : "-";
    const minorConstantSign = (minorConstant < 0) ? "+" : "-";
    const finalXConst = Math.abs(majorConstant * majorLCM + lcmValue / -1);
    const finalYConst = Math.abs((minorConstant * minorLCM / -1) + lcmValue / -1);
    const finalConstXSign = (majorConstant * majorLCM + lcmValue / -1 > 0) ? "+" : "-";
    const finalConstYSign = ((minorConstant * minorLCM / -1) + lcmValue / -1 > 0) ? "+" : "-";

    const majorExpandedFraction = `
    <math xmlns="http://www.w3.org/1998/Math/MathML">
    <msup>
        <mrow>
        <mo>(</mo>
        <mfrac>
            <mn>${majorCenter}</mn>
            <mn>2</mn>
        </mfrac>
        <mo>)</mo>
        </mrow>
        <mn>2</mn> 
    </msup>
    </math>`;


 
    const minorExpandedFraction = `
    <math xmlns="http://www.w3.org/1998/Math/MathML">
    <msup>
        <mrow>
        <mo>(</mo>
        <mfrac>
            <mn>${minorCenter}</mn>
            <mn>2</mn>
        </mfrac>
        <mo>)</mo>
        </mrow>
        <mn>2</mn>
    </msup>
    </math>`;
 
    if(majorValue == 0 && minorValue == 0){
        lcmMajor1.innerHTML = lcmValue;
        lcmMinor1.innerHTML = lcmValue;
        majorIn1.textContent = `(${major}²)`;
        majorDeno1.textContent = `${majorDenoValue}`;
        minorIn1.textContent = `(${minor}²)`;
        minorDeno1.textContent = `${minorDenoValue}`; 
        lcmInConst.textContent = `LCM:(${majorDenoValue})(${minorDenoValue}) = ${lcmValue}`;
        // STEP 2
        step2.innerHTML = `${lcmValue / majorDenoValue}${major}² - ${lcmValue / minorDenoValue}${minor}² = ${lcmValue}`;
        // STEP 3
        step3.innerHTML = `${lcmValue / majorDenoValue}${major}² - ${lcmValue / minorDenoValue}${minor}² ${lcmValue / -1} = 0`;
    } 
    else if(majorValue !== 0 && minorValue == 0) {
        // STEP 1
        lcmMajor1.textContent = lcmValue;
         lcmMinor1.textContent = lcmValue;
         majorIn1.textContent = `(${major} ${majorValueSign} ${Math.abs(majorValue)})²`;
         majorDeno1.textContent = `${majorDenoValue}`;
         minorIn1.textContent = `(${minor}²)`;
         minorDeno1.textContent = `${minorDenoValue}`; 
         lcmInConst.textContent = `LCM:(${majorDenoValue})(${minorDenoValue}) = ${lcmValue}`;
         // STEP 2
         step2.innerHTML = `${majorLCM} (${major} ${majorValueSign} ${Math.abs(majorValue)})² - ${minorLCM}${minor}² = ${lcmValue}`;
         // STEP 3
         step3.innerHTML = `${majorLCM} (${major}² ${majorValueSign} ${Math.abs(majorCenter)}${major} + ${majorExpandedFraction}) - ${minorLCM}${minor}² = ${lcmValue}`;
         // STEP 4
         step4.innerHTML = `${majorLCM}${major}² ${majorValueSign} ${Math.abs(majorCenter * majorLCM)}${major} + ${Math.abs(majorConstant * majorLCM)} - ${minorLCM}${minor}² = ${lcmValue}`;
         // STEP 5
         step5.innerHTML = `${majorLCM}${major}² - ${Math.abs(minorLCM)}${minor}² ${majorValueSign} ${Math.abs(majorCenter * majorLCM)}${major} + ${majorConstant * majorLCM} ${lcmValue / -1} = 0`;
         // STEP 6
         step6.innerHTML = `${majorLCM}${major}² - ${Math.abs(minorLCM)}${minor}² ${majorValueSign} ${Math.abs(majorCenter * majorLCM)}${major} ${finalConstXSign} ${Math.abs((majorConstant * majorLCM) + lcmValue / -1)} = 0`;
    } 
    else if(majorValue == 0 && minorValue !== 0) {
        // STEP 1
         lcmMajor1.textContent = lcmValue;
         lcmMinor1.textContent = lcmValue;
         majorIn1.textContent = `(${major}²)`;
         majorDeno1.textContent = `${majorDenoValue}`;
         minorIn1.textContent = `(${minor} ${minorValueSign} ${minorValue})²`;
         minorDeno1.textContent = `${minorDenoValue}`; 
         lcmInConst.textContent = `LCM:(${majorDenoValue})(${minorDenoValue}) = ${lcmValue}`;
         // STEP 2
         step2.innerHTML = `${majorLCM}${major}² - ${minorLCM} (${minor} ${minorValueSign} ${Math.abs(minorValue)})² = ${lcmValue}`;
         // STEP 3
         step3.innerHTML = `${majorLCM}${major}² - ${minorLCM}(${minor}² ${minorValueSign} ${minorCenter}${minor} + ${minorExpandedFraction}) = ${lcmValue}`;
         // STEP 4
         step4.innerHTML = `${majorLCM}${major}² - ${minorLCM}${minor}² ${minorCenterSign} ${minorCenter * minorLCM}${minor} - ${minorConstant * minorLCM} = ${lcmValue}`;
         // STEP 5
         step5.innerHTML = `${majorLCM}${major}² - ${Math.abs(minorLCM)}${minor}² ${minorCenterSign} ${minorCenter * minorLCM}${minor} - ${minorConstant * minorLCM} ${lcmValue / -1} = 0`;
         // STEP 6
         step6.innerHTML = `${majorLCM}${major}² - ${Math.abs(minorLCM)}${minor}² ${minorCenterSign} ${Math.abs(minorCenter * minorLCM)}${minor} ${finalConstXSign} ${Math.abs((-minorConstant * minorLCM) + lcmValue / -1)} = 0`;
    } else {
         // STEP 1
         lcmMajor1.textContent = lcmValue;
         lcmMinor1.textContent = lcmValue;
         majorIn1.textContent = `(${major} ${majorValueSign} ${Math.abs(majorValue)})²`;
         majorDeno1.textContent = `${majorDenoValue}`;
         minorIn1.textContent = `(${minor} ${minorValueSign} ${Math.abs(minorValue)})²`;
         minorDeno1.textContent = `${minorDenoValue}`; 
         lcmInConst.textContent = `LCM:(${majorDenoValue})(${minorDenoValue}) = ${lcmValue}`;
         // STEP 2
         step2.innerHTML = `${majorLCM} (${major} ${majorValueSign} ${Math.abs(majorValue)})² - ${minorLCM} (${minor} ${minorValueSign} ${Math.abs(minorValue)})² = ${lcmValue}`;
         // STEP 3
         step3.innerHTML = `${majorLCM} (${major}² ${majorValueSign} ${Math.abs(majorCenter)}${major} + ${majorExpandedFraction}) - ${minorLCM}(${minor}² ${minorValueSign} ${minorCenter}${minor} + ${minorExpandedFraction}) = ${lcmValue}`;
         // STEP 4
         step4.innerHTML = `${majorLCM}${major}² ${majorValueSign} ${Math.abs(majorCenter * majorLCM)}${major} + ${Math.abs(majorConstant * majorLCM)} - ${minorLCM}${minor}² ${minorCenterSign} ${minorCenter * minorLCM}${minor} - ${minorConstant * minorLCM} = ${lcmValue}`;
         // STEP 5
         step5.innerHTML = `${majorLCM}${major}² - ${Math.abs(minorLCM)}${minor}² ${majorValueSign} ${Math.abs(majorCenter * majorLCM)}${major} ${minorCenterSign} ${minorCenter * minorLCM}${minor} - ${minorConstant * minorLCM} + ${majorConstant * majorLCM} ${lcmValue / -1} = 0`;
         // STEP 6
         step6.innerHTML = `${majorLCM}${major}² - ${Math.abs(minorLCM)}${minor}² ${majorValueSign} ${Math.abs(majorCenter * majorLCM)}${major} ${minorCenterSign} ${Math.abs(minorCenter * minorLCM)}${minor} ${finalConstXSign} ${Math.abs((-minorConstant * minorLCM) + (majorConstant * majorLCM) + lcmValue / -1)} = 0`;
    }
}