const numeratorx = document.querySelector(".numeratorx");
const denominatorx = document.querySelector(".denominatorx");
const numeratory = document.querySelector(".numeratory");
const denominatory = document.querySelector(".denominatory");
const answerContainer = document.querySelector(".answer-container");
const givenA = document.querySelector(".givenA");
const givenB = document.querySelector(".givenB");
const givenC = document.querySelector(".givenC");
const givenD = document.querySelector(".givenD");
const givenE = document.querySelector(".givenE");
const sign1 = document.querySelector(".givenSign1");
const sign2 = document.querySelector(".givenSign2");
const sign3 = document.querySelector(".givenSign3"); 

const step1Container = document.querySelector(".step1");
const step2Container = document.querySelector(".step2");
const step3Container = document.querySelector(".step3");
const step4Container = document.querySelector(".step4");
  
const aValue = document.querySelector(".aValue");
const aDeno = document.querySelector(".aDeno");
const bValue = document.querySelector(".bValue");
const bDeno = document.querySelector(".bDeno");
const constValue = document.querySelector(".constValue");
const constDeno = document.querySelector(".constDeno");

const finalaValue = document.querySelector(".finalaValue");
const finalaDeno = document.querySelector(".finalaDeno");
const finalbValue = document.querySelector(".finalbValue");
const finalbDeno = document.querySelector(".finalbDeno");
const finalConstValue = document.querySelector(".finalConstValue");

const centerValue = document.querySelector(".centerValue");

function transform() {
    const x2 = parseFloat(document.querySelector(".x2").value);
    const y2 = parseFloat(document.querySelector(".y2").value);
    const coeffX = parseFloat(document.querySelector(".coeffX").value);
    const coeffY = parseFloat(document.querySelector(".coeffY").value);
    const constant = parseFloat(document.querySelector(".constant").value);

    //Given
    sign1.textContent = (coeffX > 0) ? "+" : "-";
    sign2.textContent = (coeffY > 0) ? "+" : "-";
    sign3.textContent = (constant > 0) ? "+" : "-";

    givenA.textContent = (x2 == 1) ? "" : x2;
    givenB.textContent = (y2 == 1) ? "" : y2;
    givenC.textContent = (coeffX < 0) ? coeffX / -1 : coeffX;
    givenD.textContent = (coeffY < 0) ? coeffY / -1 : coeffY;
    givenE.textContent = (constant < 0) ? constant / -1 : constant;
    

    const centerX = coeffX / x2;
    const centerY = coeffY / y2;
    const constX = Math.pow(centerX / 2, 2);
    const constY = Math.pow(centerY / 2, 2);
    const radius = ((constX * x2) + (constY * y2)) + (constant / -1);

    const numeX = centerX / 2;
    const numeY = centerY / 2;

    //Center and radius value
    centerValue.textContent = `(${centerX / -1}, ${centerY / -1})`;

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
        {"xyPositive": `${x2} (x²+${centerX}+${constX}) + ${y2} (y²+${centerY}+${constY}) = ${constant / -1} + ${constX}(${x2}) + ${constY}(${y2})`},
        {"xPositive": `${x2} (x²+${centerX} + ${constX}) + ${y2} (y² ${centerY}+${constY}) = ${constant / -1} + ${constX}(${x2}) + ${constY}(${y2}`},
        {"yPositive": `${x2} (x² ${centerX}+${constX}) + ${y2} (y²+${centerY}+${constY}) = ${constant / -1} + ${constX}(${x2}) + ${constY}(${y2})`},
        {"xyNegative": `${x2} (x² ${centerX}+${constX}) + ${y2} (y² ${centerY}+${constY}) = ${constant / -1} + ${constX}(${x2}) + ${constY}(${y2})`}
    ]

    //
    if(isNaN(x2) || isNaN(y2)){
        answerContainer.style.visibility = "hidden";
    } else {
        answerContainer.style.visibility = "visible"
    }
   
    if (coeffX > 0 && coeffY > 0) {
        step1Container.textContent = step1[0].xyPositive;
        step2Container.textContent = step2[0].xyPositive;
        step3Container.textContent = step3[0].xyPositive;
        step4Container.textContent = step4[0].xyPositive;
        //STEP 5
        aValue.textContent = `${x2} (x + ${centerX})²`;
        aDeno.textContent = `${radius}`;
        bValue.textContent = `${y2} (y + ${centerY})`;
        bDeno.textContent = `${radius}`;
        constValue.textContent = radius;
        constDeno.textContent = radius;
        // FINAL
        finalaValue.textContent = `(x + ${centerX})²`;
        finalaDeno.textContent = `${radius / numeX}`;
        finalbValue.textContent = `(y + ${centerY})²`;
        finalbDeno.textContent = `${radius / numeY}`;
        finalConstValue.textContent = radius / radius;
    }
    else if(coeffX > 0){
        step1Container.textContent = step1[1].xPositive;
        step2Container.textContent = step2[1].xPositive;
        step3Container.textContent = step3[1].xPositive;
        step4Container.textContent = step4[1].xPositive;
        //STEP 5
        aValue.textContent = `${x2} (x + ${centerX})²`;
        aDeno.textContent = `${radius}`;
        bValue.textContent = `${y2} (y ${centerY})`;
        bDeno.textContent = `${radius}`;
        constValue.textContent = radius;
        constDeno.textContent = radius;
        // FINAL
        finalaValue.textContent = `(x + ${centerX})²`;
        finalaDeno.textContent = `${radius / numeX}`;
        finalbValue.textContent = `(y ${centerY})²`;
        finalbDeno.textContent = `${radius / numeY}`;
        finalConstValue.textContent = radius / radius; 
    }
    else if(coeffY > 0){
        step1Container.textContent = step1[2].yPositive;
        step2Container.textContent = step2[2].yPositive;
        step3Container.textContent = step3[2].yPositive;
        step4Container.textContent = step4[2].yPositive;
        //STEP 5
        aValue.textContent = `${x2} (x ${centerX})²`;
        aDeno.textContent = `${radius}`;
        bValue.textContent = `${y2} (y + ${centerY})`;
        bDeno.textContent = `${radius}`;
        constValue.textContent = radius;
        constDeno.textContent = radius;
        // FINAL
        finalaValue.textContent = `(x ${centerX})²`;
        finalaDeno.textContent = `${radius / numeX}`;
        finalbValue.textContent = `(y + ${centerY})²`;
        finalbDeno.textContent = `${radius / numeY}`;
        finalConstValue.textContent = radius / radius;
    }
    else if(coeffX < 0 && coeffY < 0){
        step1Container.textContent = step1[3].xyNegative;
        step2Container.textContent = step2[3].xyNegative;
        step3Container.textContent = step3[3].xyNegative;
        step4Container.textContent = step4[3].xyNegative;
        //STEP 5
        aValue.textContent = `${x2} (x ${centerX})²`;
        aDeno.textContent = `${radius}`;
        bValue.textContent = `${y2} (y ${centerY})`;
        bDeno.textContent = `${radius}`;
        constValue.textContent = radius;
        constDeno.textContent = radius;
        // FINAL
        finalaValue.textContent = `(x ${centerX})²`;
        finalaDeno.textContent = `${radius / numeX}`;
        finalbValue.textContent = `(y ${centerY})²`;
        finalbDeno.textContent = `${radius / numeY}}`;
        finalConstValue.textContent = radius / radius;
    }
     else {
        step1Container.innerHTML = "";
        step2Container.innerHTML = "";
        step3Container.innerHTML = "";
        step4Container.innerHTML = "";
    }
}
