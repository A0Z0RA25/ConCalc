const resultDiv = document.querySelector(".steps-container .circleGF-result");
const form = document.querySelector(".form");
const addContainer = document.querySelector(".add-container");
const step1Container = document.querySelector(".step1");
const step2Container = document.querySelector(".step2");
const step3Container = document.querySelector(".step3");
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
    //Signs
    const yvalueSign = (yvalue > 0) ? "+" : "-";
    const coeffXSign = (coeffX > 0) ? "+" : "-";
    const coeffYSign = (coeffY > 0) ? "+" : "-";
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
    centerValue.textContent = `(${centerX / -1}, ${centerY / -1})`;
    radiusGraph.textContent = Math.sqrt(radius).toFixed(2);
 
    if (xvalue === yvalue) { 
        //FINAL ANSWER WILL DISPLAY
        answers.style.visibility = "visible";
        addContainer.style.display = (xvalue == 1 || yvalue == 1) ? "none" : "block";

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
    if(coeffX !== 0 && coeffY !== 0) {
        step1Container.textContent = `x² ${yvalueSign} y² ${coeffXSign} ${Math.abs(coeffX / xvalue)}x ${coeffYSign} ${Math.abs(coeffY / yvalue)}y = ${-constant / xvalue}`;
        step2Container.textContent = `(x² ${coeffXSign} ${Math.abs(coeffX / xvalue)}x + ${xpow}) ${yvalueSign} (y² ${coeffYSign} ${Math.abs(coeffX / yvalue)}y + ${ypow}) = ${-constant / xvalue}`;
        step3Container.textContent = `(x² ${coeffXSign} ${Math.abs(coeffX / xvalue)}x + ${xpow}) ${yvalueSign} (y² ${coeffYSign} ${Math.abs(coeffX / yvalue)}y + ${ypow}) = ${-constant / xvalue} + ${xpow} + ${ypow}`;
        resultDiv.textContent = `(x ${coeffXSign} ${Math.abs(centerX)})² + (y ${coeffYSign} ${Math.abs(centerY)})² = ${radius}`;  
    } else if(coeffX == 0){
        step1Container.textContent = `x² ${yvalueSign} y² ${coeffYSign} ${Math.abs(coeffY)}y = ${-constant / xvalue}`;
        step2Container.textContent = `x² ${yvalueSign} (y² ${coeffYSign} ${Math.abs(coeffY / yvalue)}y + ${ypow})² = ${-constant / xvalue}`;
        step3Container.textContent = `x² ${yvalueSign} (y² ${coeffYSign} ${Math.abs(coeffY / yvalue)}y + ${ypow})² = ${-constant / xvalue} + ${ypow}`;
        resultDiv.textContent = `x² + (y ${coeffYSign} ${Math.abs(centerY)})² = ${-constant / xvalue + ypow}`;  
    } else {
        step1Container.textContent = `x² ${yvalueSign} y² ${coeffXSign} ${Math.abs(coeffX)} = ${-constant / xvalue}`;
        step2Container.textContent = `(x² ${coeffXSign} ${Math.abs(coeffX / xvalue)}x + ${xpow}) ${yvalueSign} y² = ${-constant / xvalue}`;
        step3Container.textContent = `(x² ${coeffXSign} ${Math.abs(coeffX / xvalue)}x + ${xpow}) ${yvalueSign} y² = ${-constant / xvalue} + ${xpow}`;
        resultDiv.textContent = `(x ${coeffXSign} ${Math.abs(centerX)})² + y² = ${-constant / xvalue + xpow}`;  
    } 
    }
} 
   
  


