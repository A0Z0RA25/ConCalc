const resultDiv = document.getElementById('circleGF-result');
const invalidValue = document.querySelector(".invalid");
const form = document.querySelector(".form");
const addContainer = document.querySelector(".add-container");
const step1Container = document.querySelector(".step1");
const step2Container = document.querySelector(".step2");
const step3Container = document.querySelector(".step3");
const answerContainer = document.querySelectorAll(".answer-container");
const answers = document.querySelector(".circleGF-answer-container");

const aValue = document.querySelector(".aValue");
const bValue = document.querySelector(".bValue");
const cValue = document.querySelector(".cValue");
const dValue = document.querySelector(".dValue");
const constValue = document.querySelector(".constValue");
const aDeno = document.querySelector(".aDeno");
const bDeno = document.querySelector(".bDeno");
const cDeno = document.querySelector(".cDeno");
const dDeno = document.querySelector(".dDeno");
const constDeno = document.querySelector(".constDeno");

const sign1 = document.querySelector(".sign1");
const sign2 = document.querySelector(".sign2");
const sign3 = document.querySelector(".sign3");
const centerValue = document.querySelector(".centerValue");
const radiusGraph = document.querySelector(".radius");
const given = document.querySelector(".given");

function transform() {
    const coeffX = parseFloat(document.getElementById('coeffX').value);
    const coeffY = parseFloat(document.getElementById('coeffY').value);
    const constant = parseFloat(document.getElementById('constant').value);
    const xvalue = parseFloat(document.getElementById('xvalue').value);
    const yvalue = parseFloat(document.getElementById('yvalue').value);
    // Transforming general form to standard form
    const centerX = (coeffX / xvalue) / 2;
    const centerY = (coeffY / yvalue) / 2;
    const radius = Math.pow(centerX, 2) + Math.pow(centerY, 2) - (constant / xvalue);
    const xpow = Math.pow(centerX, 2);
    const ypow = Math.pow(centerY, 2);
    //Given
    const givenA = document.querySelector(".givenA");
    const givenB = document.querySelector(".givenB");
    const givenC = document.querySelector(".givenC");
    const givenD = document.querySelector(".givenD");
    const givenE = document.querySelector(".givenE");
    const givenSign1 = document.querySelector(".givenSign1");
    const givenSign2 = document.querySelector(".givenSign2");
    const givenSign3 = document.querySelector(".givenSign3");

    givenA.textContent = (xvalue !== 1) ? xvalue : "";
    givenB.textContent = (yvalue !== 1) ? yvalue : "";
    givenSign1.textContent = (coeffX > 0) ? "+" : "-"; 
    givenSign2.textContent = (coeffY > 0) ? "+" : "-"; 
    givenSign3.textContent = (constant > 0) ? "+" : "-"; 
    givenC.textContent = (coeffX < 0) ? `${coeffX / -1}` : `${coeffX}`;
    givenD.textContent = (coeffY < 0) ? `${coeffY / -1}` : `${coeffY}`;
    givenE.textContent = (constant < 0) ? `${constant / -1}` : `${constant}`;
    // Output the result
    const step1 = [
        {"bothPostive": `x² + ${coeffX / xvalue}x + y² + ${coeffY / yvalue}y = ${(constant / -1) / xvalue}`},
        {"xPostive" : `x² + ${coeffX / xvalue}x + y² ${coeffY / yvalue}y = ${(constant / -1) / xvalue}`},
        {"yPositive" : `x² ${coeffX / xvalue}x + y² + ${coeffY / yvalue}y = ${(constant / -1) / xvalue}`},
        {"bothNegative" : `x² ${coeffX / xvalue}x + y² ${coeffY / yvalue}y = ${(constant / -1) / xvalue}`},
        {"xyvalue": `${xvalue}x²/${xvalue}`}
    ]

    const step2 = [
        {"bothPostive": `(x² + ${coeffX / xvalue}x + ${xpow}) + (y² + ${coeffY / yvalue}y + ${ypow}) = ${(constant / -1) / xvalue}`},
        {"xPostive" : `(x² + ${coeffX / xvalue}x + ${xpow}) + (y² ${coeffY / yvalue}y + ${ypow}) = ${(constant / -1) / xvalue}`} ,
        {"yPositive" : `(x² ${coeffX / xvalue}x + ${xpow}) + (y² + ${coeffY / yvalue}y + ${ypow}) = ${(constant / -1) / xvalue}`},
        {"bothNegative" : `(x² ${coeffX / xvalue}x + ${xpow}) + (y² ${coeffY / yvalue}y + ${ypow}) = ${(constant / -1) / xvalue}`}
    ]

    const step3 = [
        {"bothPostive": `(x² + ${coeffX / xvalue}x + ${xpow}) + (y² + ${coeffY / yvalue}y + ${ypow}) = ${(constant / -1) / xvalue} + ${xpow} + ${ypow}`},
        {"xPostive" : `(x² + ${coeffX / xvalue}x + ${xpow}) + (y² ${coeffY / yvalue}y + ${ypow}) = ${(constant / -1) / xvalue} + ${xpow} + ${ypow} `} ,
        {"yPositive" : `(x² ${coeffX / xvalue}x + ${xpow}) + (y² + ${coeffY / yvalue}y + ${ypow}) = ${(constant / -1) / xvalue} + ${xpow} + ${ypow}`},
        {"bothNegative" : `(x² ${coeffX / xvalue}x + ${xpow}) + (y² ${coeffY / yvalue}y + ${ypow}) = ${(constant / -1) / xvalue} + ${xpow} + ${ypow}`}
    ]

    if (xvalue === yvalue && xvalue > 1 && yvalue > 1) { 
        //FINAL ANSWER WILL DISPLAY
        invalidValue.textContent = "";
        answers.style.display = "block";
        addContainer.style.display = "block";

        sign1.textContent = (coeffX > 0) ? "+" : "-"; 
        sign2.textContent = (coeffY > 0) ? "+" : "-"; 
        sign3.textContent = (constant > 0) ? "+" : "-"; 
        aValue.textContent = `${xvalue}x²`;
        bValue.textContent = `${yvalue}y²`;
        cValue.textContent = (coeffX < 0) ? `${coeffX / -1}x` : `${coeffX}x`;
        dValue.textContent = (coeffY < 0) ? `${coeffY / -1}y` : `${coeffY}y`;
        constValue.textContent = (constant < 0) ? `${constant / -1}` : `${constant}`;
        aDeno.textContent = xvalue;
        bDeno.textContent = xvalue;
        cDeno.textContent = xvalue;
        dDeno.textContent = xvalue;
        constDeno.textContent = xvalue;

        centerValue.textContent = `(${centerX / -1}, ${centerY / -1})`;
        radiusGraph.textContent = Math.sqrt(radius).toFixed(3);
        // CENTER GREATER 0R LESSTHAN
        if (centerX > 0 && centerY > 0) {            
            //
            step1Container.textContent = step1[0].bothPostive;
            step2Container.textContent = step2[0].bothPostive;
            step3Container.textContent = step3[0].bothPostive;
            resultDiv.textContent = `(x + ${centerX})² + (y + ${centerY})²= √${radius}`;
        } 
        else if (centerX > 0) { 
            //
            step1Container.textContent = step1[1].xPostive;
            step2Container.textContent = step2[1].xPostive;
            step3Container.textContent = step3[1].xPostive;
            resultDiv.textContent = `(x + ${centerX})² + (y ${centerY})²= √${radius}`;
        } 
        else if (centerY > 0) {
            //
            step1Container.textContent = step1[2].yPositive;
            step2Container.textContent = step2[2].yPositive;
            step3Container.textContent = step3[2].yPositive;
            resultDiv.textContent = `(x ${centerX})² + (y + ${centerY})²= √${radius}`;
        } 
        else {
            //
            step1Container.textContent = step1[3].bothNegative;
            step2Container.textContent = step2[3].bothNegative;
            step3Container.textContent = step3[3].bothNegative;
            resultDiv.textContent = `(x ${centerX})² + (y ${centerY})²= √${radius}`;
        }
    } 
    //
    else if(xvalue === yvalue && xvalue == 1 && yvalue == 1){
        addContainer.style.display = "none"
        answers.style.display = "block";
        domain.textContent = (centerX !== 0) ? centerX / -1 : centerX / -1;
        range.textContent = (centerY !== 0) ? centerY / -1 : centerY / -1;
        radiusGraph.textContent = Math.sqrt(radius);
        if (centerX > 0 && centerY > 0) {
            step1Container.textContent = step1[0].bothPostive;
            step2Container.textContent = step2[0].bothPostive;
            step3Container.textContent = step3[0].bothPostive;
            resultDiv.textContent = `(x + ${centerX})² + (y + ${centerY})²= √${radius}`;
        } 
        else if (centerX > 0) {
            step1Container.textContent = step1[1].xPostive;
            step2Container.textContent = step2[1].xPostive;
            step3Container.textContent = step3[1].xPostive;
            resultDiv.textContent = `(x + ${centerX})² + (y ${centerY})²= √${radius}`;
        } 
        else if (centerY > 0) {
            step1Container.textContent = step1[2].yPositive;
            step2Container.textContent = step2[2].yPositive;
            step3Container.textContent = step3[2].yPositive;
            resultDiv.textContent = `(x ${centerX})² + (y + ${centerY})²= √${radius}`;
        } 
        else {
            step1Container.textContent = step1[3].bothNegative;
            step2Container.textContent = step2[3].bothNegative;
            step3Container.textContent = step3[3].bothNegative;
            resultDiv.textContent = `(x ${centerX})² + (y ${centerY})²= √${radius}`;
        } 
    }
    //DISPLAY INVALID VALUE
    else {
        step1Container.textContent = "";
        step2Container.textContent = "";
        step3Container.textContent = "";
        invalidValue.textContent = "It should be equal";
        window.alert("You put invalid value NOTE that a circle has equal value")
        resultDiv.textContent = "";
    }
} 
   
   


