const majorIn1 = document.querySelector(".majorIn1");
const majorDeno1 = document.querySelector(".majorDeno1");
const minorIn1 = document.querySelector(".minorIn1");
const minorDeno1 = document.querySelector(".minorDeno1")
const constant1 = document.querySelector(".constant1");
const lcmMajor1 = document.querySelector(".lcmMajor1");
const lcmMinor1 = document.querySelector(".lcmMinor1");
const lcmInConst = document.querySelector(".lcmInConst");

const step2 = document.querySelector(".step2");
const step3 = document.querySelector(".step3");
const step4 = document.querySelector(".step4");
const step5 = document.querySelector(".step5");
const step6 = document.querySelector(".step6");

const addStep = document.querySelector(".add-step");

function transform(){
    const majorValue = parseFloat(document.getElementById("majorValue").value);
    const minorValue = parseFloat(document.getElementById("minorValue").value);
    const majorDenoValue = parseFloat(document.getElementById("majorDenoValue").value);
    const minorDenoValue = parseFloat(document.getElementById("minorDenoValue").value);
    const major = document.querySelector(".major").value;
    const minor = document.querySelector(".minor").value;
    addStep.style.display = "block";
    let lcm = (majorDenoValue, minorDenoValue) => {
        if(isNaN(majorDenoValue) || isNaN(minorDenoValue)){
            const alert = window.alert("It should not be empty!!");
            return alert;
        }
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

    const lcmValue = lcm(majorDenoValue,minorDenoValue);
    const majorLCM = lcmValue / majorDenoValue;
    const minorLCM = lcmValue / minorDenoValue;
    const majorCenter = majorValue * 2;
    const minorCenter = minorValue * 2;
    const majorConstant = Math.pow(majorValue, 2);
    const minorConstant = Math.pow(minorValue, 2);


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
        step3.textContent = `${majorLCM} (${major}² + ${majorCenter}${major} + ${majorConstant}) - ${minorLCM}${minor}² = ${lcmValue}`;
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
        step3.textContent = `${majorLCM} (${major}² ${majorCenter}${major} + ${majorConstant}) - ${minorLCM}${minor}² = ${lcmValue}`;
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
        step3.textContent = `${majorLCM}${major}² - ${minorLCM} (${minor}² + ${minorCenter}${minor} + ${minorConstant}) = ${lcmValue}`;
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
        step3.textContent = `${majorLCM}${major}² - ${minorLCM} (${minor}² ${minorCenter}${minor} + ${minorConstant}) = ${lcmValue}`;
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
        step3.textContent = `${majorLCM} (${major}² + ${majorCenter}${major} + ${majorConstant}) - ${minorLCM} (${minor}² + ${minorCenter}${minor} + ${minorConstant}) = ${lcmValue}`;
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
        step3.textContent = `${majorLCM} (${major}² + ${majorCenter}${major} + ${majorConstant}) - ${minorLCM} (${minor}² ${minorCenter}${minor} + ${minorConstant}) = ${lcmValue}`;
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
        step3.textContent = `${majorLCM} (${major}² ${majorCenter}${major} + ${majorConstant}) - ${minorLCM} (${minor}² + ${minorCenter}${minor} + ${minorConstant}) = ${lcmValue}`;
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
        step3.textContent = `${majorLCM} (${major}² ${majorCenter}${major} + ${majorConstant}) - ${minorLCM} (${minor}² ${minorCenter}${minor} + ${minorConstant}) = ${lcmValue}`;
        // STEP 4
        step4.textContent = `${majorLCM}${major}² ${majorCenter * majorLCM}${major} + ${majorConstant * majorLCM} - ${minorLCM}${minor}² + ${minorCenter * -minorLCM}${minor} ${minorConstant * -minorLCM} = ${lcmValue}`;
        // STEP 5
        step5.textContent = `${majorLCM}${major}² - ${minorLCM}${minor}² ${majorCenter * majorLCM}${major} + ${minorCenter * -minorLCM}${minor} + ${majorConstant * majorLCM} ${minorConstant * -minorLCM} ${lcmValue / -1} = 0`;
        // STEP 6
        step6.textContent = `${majorLCM}${major}² - ${minorLCM}${minor}² ${majorCenter * majorLCM}${major} + ${minorCenter * -minorLCM}${minor} + ${finalConst} = 0`;
    }
}