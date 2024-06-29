const numeratorx = document.querySelector(".numeratorx");
const denominatorx = document.querySelector(".denominatorx");
const numeratory = document.querySelector(".numeratory");
const denominatory = document.querySelector(".denominatory");
const answerContainer = document.querySelector(".answer-container");
const noneCoeff1 = document.querySelector(".step2-container");
const noneCoeff2 = document.querySelector(".step3-container");
const noneCoeff3 = document.querySelector(".step4-container");
const step5H1 = document.querySelector(".step5-container h1");
const step6H1 = document.querySelector(".step6-container h1");

const givenA = document.querySelector(".givenA");
const givenB = document.querySelector(".givenB");
const givenC = document.querySelector(".givenC");
const givenD = document.querySelector(".givenD");
const givenE = document.querySelector(".givenE");
const sign1 = document.querySelector(".givenSign1");
const sign2 = document.querySelector(".givenSign2");
const sign3 = document.querySelector(".givenSign3"); 
const given = document.querySelector(".given");
 
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

    const centerX = coeffX / x2;
    const centerY = coeffY / y2;
    const constX = Math.pow(centerX / 2, 2);
    const constY = Math.pow(centerY / 2, 2);
    const radius = ((constX * x2) + (constY * y2)) + (constant / -1);

    const numeX = radius / x2;
    const numeY = radius / y2;
    //ABC
    ABC(numeX, numeY);
    //Vertex
    vertex(centerX, centerY, numeX, numeY);
    //Center and radius value
    centerValue.textContent = `(${(centerX / 2) / -1}, ${(centerY / 2) / -1})`;
    //
    if(isNaN(x2) || isNaN(y2)){
        answerContainer.style.visibility = "hidden";
    } else {
        answerContainer.style.visibility = "visible"
    }

    const coeffXSign = (coeffX > 0) ? "+" : "-";
    const coeffYSign = (coeffY > 0) ? "+" : "-";
    const constantSign = (constant > 0) ? "+" : "-";
    const radiusX = -constant + (constY * y2);
    const radiusY = -constant + (constX * x2);

    //Given
    given.textContent = `${x2}x² ${coeffXSign} ${Math.abs(coeffX)}x + ${y2}y² ${coeffYSign} ${Math.abs(coeffY)}y ${constantSign} ${Math.abs(constant)} = 0`;

    if(coeffX !== 0 && coeffY !== 0){
        step1Container.textContent = `(${x2}x² ${coeffXSign} ${Math.abs(coeffX)}x) + (${y2}y² ${coeffYSign} ${Math.abs(coeffY)}y) = ${constant / -1}`;
        step2Container.textContent = `${x2} (x² ${coeffXSign} ${Math.abs(centerX)}x) + ${y2} (y² ${coeffYSign} ${Math.abs(centerY)}y) = ${constant / -1}`;
        step3Container.textContent = `${x2} (x² ${coeffXSign} ${Math.abs(centerX)}x +${constX}) + ${y2} (y² ${coeffYSign} ${Math.abs(centerY)}y +${constY}) = ${constant / -1}`;
        step4Container.textContent = `${x2} (x² ${coeffXSign} ${Math.abs(centerX)}x +${constX}) + ${y2} (y² ${coeffYSign} ${Math.abs(centerY)}y +${constY}) = ${constant / -1} + ${constX}(${x2}) + ${constY}(${y2})`;
        //STEP 5
        aValue.textContent = `${x2} (x ${coeffXSign} ${Math.abs(centerX / 2)})²`;
        aDeno.textContent = `${radius}`;
        bValue.textContent = `${y2} (y ${coeffYSign} ${Math.abs(centerY / 2)})²`;
        bDeno.textContent = `${radius}`;
        constValue.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        // FINAL
        finalaValue.textContent = `(x ${coeffXSign} ${Math.abs(centerX / 2)})²`;
        finalaDeno.textContent = `${numeX}`;
        finalbValue.textContent = `(y ${coeffYSign} ${Math.abs(centerY / 2)})²`;
        finalbDeno.textContent = `${numeY}`; 
        finalConstValue.textContent = radius / radius;
    }
    else if(coeffX == 0 && coeffY == 0){
        given.textContent = `${x2}x² + ${y2}y² ${constantSign} ${Math.abs(constant)} = 0`;
        step1Container.textContent = `${x2}x² + ${y2}y² = ${constant / -1}`;
        noneCoeff1.style.display = "none";
        noneCoeff2.style.display = "none";
        noneCoeff3.style.display = "none";
        step5H1.innerHTML = "STEP 2: Simplify the right side of the equation and make the perfect square trinomial into square of binomial.";
        step6H1.innerHTML = "STEP 3: Divide both sides of the equation by the constant on the right side, then simplify.";
        //STEP 5
        aValue.textContent = `${x2}x²`;
        aDeno.textContent = `${-constant}`;
        bValue.textContent = `${y2}y²`;
        bDeno.textContent = `${-constant}`;
        constValue.textContent = -constant;
        constDeno.textContent = -constant;
        // FINAL
        finalaValue.textContent = `x²`;
        finalaDeno.textContent = `${-constant / x2}`;
        finalbValue.textContent = `y²`;
        finalbDeno.textContent = `${-constant / y2}`;
        finalConstValue.textContent = -constant / -constant;
    }
    else if(coeffX == 0){
        given.textContent = `${x2}x² + ${y2}y² ${coeffYSign} ${Math.abs(coeffY)}y ${constantSign} ${Math.abs(constant)} = 0`;
        step1Container.textContent = `${x2}x² + (${y2}y² ${coeffYSign} ${Math.abs(coeffY)}y) = ${constant / -1}`;
        step2Container.textContent = `${x2}x² + ${y2} (y² ${coeffYSign} ${Math.abs(centerY)}y) = ${constant / -1}`;
        step3Container.textContent = `${x2}x² + ${y2} (y² ${coeffYSign} ${Math.abs(centerY)}y + ${constY}) = ${constant / -1}`;
        step4Container.textContent = `${x2}x² + ${y2} (y² ${coeffYSign} ${Math.abs(centerY)}y + ${constY}) = ${constant / -1} + ${constY}(${y2})`;
        //STEP 5
        aValue.textContent = `${x2}x²`;
        aDeno.textContent = `${radiusX}`;
        bValue.textContent = `${y2} (y ${centerY / 2})²`;
        bDeno.textContent = `${radiusX}`;
        constValue.textContent = `${-constant + x2 + constY * y2}`;
        constDeno.textContent = `${-constant + x2 + constY * y2}`;
        // FINAL
        finalaValue.textContent = `x²`;
        finalaDeno.textContent = `${radiusX / x2}`;
        finalbValue.textContent = `(y ${centerY / 2})²`;
        finalbDeno.textContent = `${radiusX / y2}`; 
        finalConstValue.textContent = radiusX / radiusX;
    } else if(coeffY == 0) {
        given.textContent = `${x2}x² ${coeffXSign} ${Math.abs(coeffX)}x + ${y2}y² ${constantSign} ${Math.abs(constant)} = 0`;
        step1Container.textContent = `(${x2}x² ${coeffXSign} ${Math.abs(coeffX)}x) + ${y2}y² = ${constant / -1}`;
        step2Container.textContent = `${x2} (x² ${coeffXSign} ${Math.abs(centerX)}x) + ${y2}y² = ${constant / -1}`;
        step3Container.textContent = `${x2} (x² ${coeffXSign} ${Math.abs(centerX)}x +${constX}) + ${y2}y² = ${constant / -1}`;
        step4Container.textContent = `${x2} (x² ${coeffXSign} ${Math.abs(centerX)}x +${constX}) + ${y2}y² = ${constant / -1} + ${constX}(${x2})`;
        //STEP 5
        aValue.textContent = `${x2} (x ${centerX / 2})²`;
        aDeno.textContent = `${radiusY}`;
        bValue.textContent = `${y2}y²`;
        bDeno.textContent = `${radiusY}`;
        constValue.textContent = radius;
        constDeno.textContent = radius;
        // FINAL
        finalaValue.textContent = `(x ${centerX / 2})²`;
        finalaDeno.textContent = `${radiusY / x2}`;
        finalbValue.textContent = `y²`;
        finalbDeno.textContent = `${radiusY / y2}`;
        finalConstValue.textContent = radiusY / radiusY;
    } 
}

function ABC(numeX, numeY){
    //ABC
    const a = document.querySelector(".a");
    const a2 = document.querySelector(".a2");
    const b = document.querySelector(".b");
    const b2 = document.querySelector(".b2");
    const c = document.querySelector(".c");
    const c2 = document.querySelector(".c2");

    const cValue = (numeX > numeY) ? numeX - numeY : numeY - numeX;

    a.textContent = (numeX > numeY) ? Math.sqrt(numeX).toFixed(2) : Math.sqrt(numeY).toFixed(2);
    a2.textContent = (numeX > numeY) ? numeX : numeY;
    b.textContent = (numeX > numeY) ? Math.sqrt(numeY).toFixed(2) : Math.sqrt(numeX).toFixed(2);
    b2.textContent = (numeX > numeY) ? numeY : numeX;
    c.textContent = Math.sqrt(cValue).toFixed(2);
    c2.textContent = cValue;
}
//vertex ad foci 
function vertex(centerX, centerY, numeX, numeY){
    const majorVertexValue = document.querySelector(".majorVertexValue");
    const minorVertexValue = document.querySelector(".minorVertexValue");
    const fociValue = document.querySelector(".fociValue");
    const orri = document.querySelector(".orriValue");
    const centerXInVertex = centerX / -2;
    const centerYInVertex = centerY / -2;

    const aValue = (numeX > numeY) ?  Math.sqrt(numeX) : Math.sqrt(numeY);
    const bValue = (numeX > numeY) ? Math.sqrt(numeY) : Math.sqrt(numeX);
    const cValue= (numeX > numeY) ? Math.sqrt(numeX - numeY) : Math.sqrt(numeY - numeX);

    if(numeX > numeY){
        majorVertexValue.textContent = `(${(centerXInVertex + aValue).toFixed(2)}, ${centerYInVertex}), (${(centerXInVertex - aValue).toFixed(2)}, ${centerYInVertex})`;
        minorVertexValue.textContent = `(${centerXInVertex}, ${centerYInVertex + bValue}), (${centerXInVertex}, ${centerYInVertex - bValue})`;
        fociValue.textContent = `(${(centerXInVertex + cValue).toFixed(2)}, ${centerYInVertex}), (${(centerXInVertex - cValue).toFixed(2)}, ${centerYInVertex})`;
        orri.textContent = "Horizontal";
    } else {
        majorVertexValue.textContent = `(${centerXInVertex}, ${(centerYInVertex + aValue).toFixed(2)}), (${centerXInVertex}, ${(centerYInVertex - aValue).toFixed(2)})`;
        minorVertexValue.textContent = `(${centerXInVertex + bValue}, ${centerYInVertex}), (${centerXInVertex - bValue}, ${centerYInVertex})`;
        fociValue.textContent = `(${centerXInVertex}, ${(centerYInVertex + cValue).toFixed(2)}), (${centerXInVertex}, ${(centerYInVertex - cValue).toFixed(2)})`;
        orri.textContent = "Vertical";
    }
}
