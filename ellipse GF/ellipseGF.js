const numeratorx = document.querySelector(".numeratorx");
const denominatorx = document.querySelector(".denominatorx");
const numeratory = document.querySelector(".numeratory");
const denominatory = document.querySelector(".denominatory");
const answerContainer = document.querySelector(".answer-container");
const noneCoeff1 = document.querySelector(".step2-container");
const noneCoeff2 = document.querySelector(".step3-container");
const noneCoeff3 = document.querySelector(".step4-container");
const noneCoeff4 = document.querySelector(".step5-container");
const noneCoeff5 = document.querySelector(".step6-container");
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
 
const step1Container = document.querySelector(".step1-container .step1"); 
const step2Container = document.querySelector(".step2-container .step2");
const step3Container = document.querySelector(".step3-container .step3");
const step4Container = document.querySelector(".step4-container .step4");
const step5Container = document.querySelector(".step5-container .step5");
const step6Container = document.querySelector(".step6-container .step6");
   
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
const graphContainer = document.querySelector(".answer-container .graph-container");
const graph = document.querySelector(".container .graph");
const centerValue = document.querySelector(".centerValue");

function showAnswer1(){
    step1Container.style.display = "block";
    noneCoeff1.style.display = "block";
    document.querySelector(".step1Btn").style.display = "none";
    document.querySelector(".step2Btn").style.display = "block";
}

function showAnswer2(){
    step2Container.style.display = "block";
    noneCoeff2.style.display = "block";
    document.querySelector(".step2Btn").style.display = "none";
    document.querySelector(".step3Btn").style.display = "block";
}

function showAnswer3(){
    step3Container.style.display = "block";
    noneCoeff3.style.display = "block";
    document.querySelector(".step3Btn").style.display = "none";
    document.querySelector(".step4Btn").style.display = "block";
}

function showAnswer4(){
    step4Container.style.display = "block";
    noneCoeff4.style.display = "block";
    document.querySelector(".step4Btn").style.display = "none";
    document.querySelector(".step5Btn").style.display = "block";
}

function showAnswer5(){
    step5Container.style.display = "block";
    noneCoeff5.style.display = "block";
    document.querySelector(".step5Btn").style.display = "none";
    document.querySelector(".step6Btn").style.display = "block";
    step6Container.classList.add('finalAnswerBgColor');
}

function showAnswer6(){
    step6Container.style.display = "block";
    graphContainer.style.display = "block";
    graph.style.display = "block";
    document.querySelector(".step6Btn").style.display = "none";

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
    document.querySelector(".step1Btn").style.display = "block";
    step1Container.style.display = "none";
    step2Container.style.display = "none";
    step3Container.style.display = "none";
    step4Container.style.display = "none";
    step5Container.style.display = "none";

    noneCoeff1.style.display = "none";
    noneCoeff2.style.display = "none";
    noneCoeff3.style.display = "none";
    noneCoeff4.style.display = "none";
    noneCoeff5.style.display = "none";
    graph.style.display = "none";
    graphContainer.style.display = "none";
    

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
    const finalCenterX = (centerX / 2) / -1;
    const finalCenterY = (centerY / 2) / -1;
    centerValue.textContent = `(${finalCenterX}, ${finalCenterY})`;
    // 
    if(isNaN(x2) || isNaN(y2)){
        answerContainer.style.visibility = "hidden";
    } else {
        answerContainer.style.visibility = "visible"
    }
    // STEPS HIDDEN

    const coeffXSign = (coeffX > 0) ? "+" : "-";
    const coeffYSign = (coeffY > 0) ? "+" : "-";
    const constantSign = (constant > 0) ? "+" : "-";
    const radiusX = -constant + (constY * y2);
    const radiusY = -constant + (constX * x2);

    //Given
    given.textContent = `${x2}x² ${coeffXSign} ${Math.abs(coeffX)}x + ${y2}y² ${coeffYSign} ${Math.abs(coeffY)}y ${constantSign} ${Math.abs(constant)} = 0`;
    //Graph
    drawEllipse(centerX, centerY, numeX, numeY);
    //Fraction
    const xCenterFraction = `<sup>${Math.abs(coeffX)}</sup>&frasl;<sub>${Math.abs(x2)}</sub>`;
    const yCenterFraction = `<sup>${Math.abs(coeffY)}</sup>&frasl;<sub>${Math.abs(y2)}</sub>`;
    const xExpandedFraction = `(<sup>${Math.abs(centerX)}</sup>&frasl;<sub>${2}</sub>)²`;
    const yExpandedFraction = `(<sup>${Math.abs(centerY)}</sup>&frasl;<sub>${2}</sub>)²`;

    if(coeffX !== 0 && coeffY !== 0){
        step1Container.textContent = `(${x2}x² ${coeffXSign} ${Math.abs(coeffX)}x) + (${y2}y² ${coeffYSign} ${Math.abs(coeffY)}y) = ${constant / -1}`;
        step2Container.innerHTML = `${x2} (x² ${coeffXSign} ${xCenterFraction}x) + ${y2} (y² ${coeffYSign} ${yCenterFraction}y) = ${constant / -1}`;
        step3Container.innerHTML = `${x2} (x² ${coeffXSign} ${Math.abs(centerX)}x +${xExpandedFraction}) + ${y2} (y² ${coeffYSign} ${Math.abs(centerY)}y +${yExpandedFraction}) = ${constant / -1}`;
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
    const xValueIfA = (Math.sqrt(numeX) % 2 === 0) ? Math.sqrt(numeX) : Math.sqrt(numeX).toFixed(2);
    const yValueIfA = (Math.sqrt(numeY) % 2 === 0) ? Math.sqrt(numeY) : Math.sqrt(numeY).toFixed(2);

    a.textContent = (numeX > numeY) ? xValueIfA : yValueIfA;
    a2.textContent = (numeX > numeY) ? numeX : numeY;
    b.textContent = (numeX > numeY) ? yValueIfA : xValueIfA;
    b2.textContent = (numeX > numeY) ? numeY : numeX;
    c.textContent = (Math.sqrt(cValue) % 2 === 0) ? Math.sqrt(cValue) : Math.sqrt(cValue).toFixed(2);
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
    const xCenterValueFirst = Number.isInteger(centerXInVertex + aValue) 
    ? (centerXInVertex + aValue) 
    : (centerXInVertex + aValue).toFixed(2);

    const xCenterValueSecond = Number.isInteger(centerXInVertex - aValue) 
        ? (centerXInVertex - aValue) 
        : (centerXInVertex - aValue).toFixed(2);

    const yCenterValueFirst = Number.isInteger(centerXInVertex + aValue) 
    ? (centerYInVertex + aValue) 
    : (centerYInVertex + aValue).toFixed(2);

    const yCenterValueSecond = Number.isInteger(centerXInVertex - aValue) 
        ? (centerYInVertex - aValue) 
        : (centerYInVertex - aValue).toFixed(2);


    if (numeX > numeY) {
        majorVertexValue.textContent = `(${xCenterValueFirst}, ${centerYInVertex}), (${xCenterValueSecond}, ${centerYInVertex})`;
        minorVertexValue.textContent = `(${centerXInVertex}, ${centerYInVertex + bValue}), (${centerXInVertex}, ${centerYInVertex - bValue})`;
        fociValue.textContent = `(${(centerXInVertex + cValue).toFixed(2)}, ${centerYInVertex}), (${(centerXInVertex - cValue).toFixed(2)}, ${centerYInVertex})`;
        orri.textContent = "Horizontal";
    } else {
        majorVertexValue.textContent = `(${centerXInVertex}, ${yCenterValueFirst}), (${centerXInVertex}, ${yCenterValueSecond})`;
        minorVertexValue.textContent = `(${centerXInVertex + bValue}, ${centerYInVertex}), (${centerXInVertex - bValue}, ${centerYInVertex})`;
        fociValue.textContent = `(${centerXInVertex}, ${(centerYInVertex + cValue).toFixed(2)}), (${centerXInVertex}, ${(centerYInVertex - cValue).toFixed(2)})`;
        orri.textContent = "Vertical";
    }

};


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// For the graph center
const Xmeasure = width / 2;
const Ymeasure = height / 2;

// The scale of each
const scale = 20;

function drawCoordinatePlane() {
    // Clear the canvas and set up basic styles
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = 'gray';
    ctx.lineWidth = 2;

    // For the x-axis
    ctx.beginPath();
    ctx.moveTo(0, Ymeasure);
    ctx.lineTo(width, Ymeasure);
    ctx.stroke();

    // For the y-axis
    ctx.beginPath();
    ctx.moveTo(Xmeasure, 0);
    ctx.lineTo(Xmeasure, height);
    ctx.stroke();

    // Draw arrows on the axes
    drawArrow(width, Ymeasure);  // Arrow for the positive x-axis
    drawArrow(0, Ymeasure, Math.PI);  // Arrow for the negative x-axis
    drawArrow(Xmeasure, height, Math.PI / 2);  // Arrow for the positive y-axis
    drawArrow(Xmeasure, 0, -Math.PI / 2);  // Arrow for the negative y-axis

    // For grids and the numbers
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 1;
    ctx.font = '8px Arial';
    ctx.fillStyle = 'black';

    // For creating grids
    for (let i = 0; i <= width / 2; i += scale) {
        // Vertical grid lines
        ctx.beginPath();
        ctx.moveTo(Xmeasure + i, 0);
        ctx.lineTo(Xmeasure + i, height);
        ctx.moveTo(Xmeasure - i, 0);
        ctx.lineTo(Xmeasure - i, height);
        ctx.stroke();

        // Horizontal grid
        ctx.beginPath();
        ctx.moveTo(0, Ymeasure + i);
        ctx.lineTo(width, Ymeasure + i);
        ctx.moveTo(0, Ymeasure - i);
        ctx.lineTo(width, Ymeasure - i);
        ctx.stroke();

        // x-axis numbers
        if (i !== 0) {
            ctx.fillText(i / scale, Xmeasure + i + 2, Ymeasure - 5);
            ctx.fillText(-i / scale, Xmeasure - i + 2, Ymeasure - 5);
        }

        // y-axis numbers
        if (i !== 0) {
            ctx.fillText(-i / scale, Xmeasure + 5, Ymeasure + i - 2);
            ctx.fillText(i / scale, Xmeasure + 5, Ymeasure - i - 2);
        }
    }

    // For the origin
    ctx.fillText("0", Xmeasure + 5, Ymeasure - 5);
}

function drawArrow(x, y, angle = 0) {
    const headlen = 10; // Length of the arrow head
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);

    // Draw the main line of the arrow
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-headlen, headlen / 2);
    ctx.lineTo(-headlen, -headlen / 2);
    ctx.lineTo(0, 0);
    ctx.fillStyle = 'gray';
    ctx.fill();
    
    ctx.restore();
}

function drawEllipse(centerX, centerY, numeX, numeY) {
    drawCoordinatePlane();
    centerX = centerX / -2;
    centerY = centerY / -2;
    numeX = Math.sqrt(numeX);
    numeY = Math.sqrt(numeY);

    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.ellipse(Xmeasure + centerX * scale, Ymeasure - centerY * scale, numeX * scale, numeY * scale, 0, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.ellipse(Xmeasure + centerX * scale, Ymeasure - centerY * scale, 3, 3, 0, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = (numeX > numeY) ? 'blue' : 'orange';
    ctx.ellipse(Xmeasure + (centerX - numeX) * scale, Ymeasure - centerY * scale, 3, 3, 0, 0, 2 * Math.PI);
    ctx.ellipse(Xmeasure + (centerX + numeX) * scale, Ymeasure - centerY * scale, 3, 3, 0, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = (numeX > numeY) ? 'orange' : 'blue';
    ctx.ellipse(Xmeasure + centerX * scale, Ymeasure - (centerY - numeY) * scale, 3, 3, 0, 0, 2 * Math.PI);
    ctx.ellipse(Xmeasure + centerX * scale, Ymeasure - (centerY + numeY) * scale, 3, 3, 0, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "purple";
    const c = Math.sqrt(numeX + numeY);
    if (numeX > numeY) {
        // Horizontal ellipse
        ctx.beginPath();
        ctx.arc(Xmeasure + (centerX + c) * scale, Ymeasure - centerY * scale, 3, 0, 2 * Math.PI);
        ctx.fill();
    
        ctx.beginPath();
        ctx.arc(Xmeasure + (centerX - c) * scale, Ymeasure - centerY * scale, 3, 0, 2 * Math.PI);
        ctx.fill();
    } else {
        // Vertical ellipse
        ctx.beginPath();
        ctx.arc(Xmeasure + centerX * scale, Ymeasure - (centerY + c) * scale, 3, 0, 2 * Math.PI);
        ctx.fill();
    
        ctx.beginPath();
        ctx.arc(Xmeasure + centerX * scale, Ymeasure - (centerY - c) * scale, 3, 0, 2 * Math.PI);
        ctx.fill();
    }
}

// Draw the initial coordinate plane
drawCoordinatePlane();
