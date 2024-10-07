const resultDiv = document.querySelector(".steps-container .circleGF-result");
const form = document.querySelector(".form");
const addContainer = document.querySelector(".add-container");
const step1Container = document.querySelector(".step1");
const step2Container = document.querySelector(".step2");
const step3Container = document.querySelector(".step3");
const AllStep1 = document.querySelector(".step1-container");
const AllStep2 = document.querySelector(".step2-container");
const AllStep3 = document.querySelector(".step3-container");
const AllStep4 = document.querySelector(".step4-container");
const answers = document.querySelector(".circleGF-answer-container");
const graphValue = document.querySelector(".graph-value");
const graph = document.querySelector(".graph");
const userContainer = document.querySelector(".users-answer-container");
const partsContainer = document.querySelector(".parts-container");
const allStep = document.querySelector(".all-steps")
  
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

function showStep1(){
    step1Container.style.display = "block";
    AllStep2.style.display = "block";
    document.querySelector(".step1Btn").style.display = "none";
    document.querySelector(".step2Btn").style.display = "block";
}

function showStep2(){
    step2Container.style.display = "block";
    AllStep3.style.display = "block";
    document.querySelector(".step2Btn").style.display = "none";
    document.querySelector(".step3Btn").style.display = "block";
}

function showStep3(){
    step3Container.style.display = "block";
    AllStep4.style.display = "block";
    document.querySelector(".step3Btn").style.display = "none";
    document.querySelector(".step4Btn").style.display = "block";
}

function showStep4(){
    resultDiv.style.display = "block";
    graphValue.style.display = "block";
    graph.style.display = "none";
    userContainer.style.display = "block";
    partsContainer.style.display = "block";
    document.querySelector(".step4Btn").style.display = "none";
    resultDiv.classList.add('finalAnswerBgColor');
 
    confetti({
        particleCount: 100, 
        spread: 70,
        origin: { x:0.5 , y: 1 }
    });
};

function wrongSound(){
    var audio = document.getElementById("wrongSound");
        audio.play();
}

function correctSound(){
    var audio = document.getElementById("correctSound");
        audio.play();
}

function startSound(){
    var audio = document.getElementById("startSound");
        audio.play();
};
//-----
let finalCenterX, finalCenterY, finalRadius;
function transform() {
    userContainer.style.display = "none";
    allStep.style.display = "none";
    const reminderContainer = document.querySelector(".reminderContainer");
    reminderContainer.style.display = "block";
    
    document.getElementById('showMessageBtn').addEventListener('click', function() {
        reminderContainer.style.display = "none";
        allStep.style.display = "block";
        startSound();
    });

    document.querySelector(".step1Btn").style.display = "block";
    step1Container.style.display = "none";
    step2Container.style.display = "none";
    step3Container.style.display = "none";
    resultDiv.style.display = "none";
    AllStep2.style.display = "none";
    AllStep3.style.display = "none";
    AllStep4.style.display = "none";
    graphValue.style.display = "none";
    graph.style.display = "none";
    centerValue.innerHTML = "";
    radiusGraph.innerHTML = "";

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
    const centerX = Number.isInteger((coeffX / xvalue) / 2) ? (coeffX / xvalue) / 2 : ((coeffX / xvalue) / 2).toFixed(2);
    const centerY = Number.isInteger(coeffY / yvalue) ? (coeffY / yvalue) / 2 : ((coeffY / yvalue) / 2).toFixed(2);
    const radius = Number.isInteger(Math.pow(centerX, 2) + Math.pow(centerY, 2) - (constant / xvalue)) ? (Math.pow(centerX, 2) + Math.pow(centerY, 2) - (constant / xvalue)).toFixed(2) : (Math.pow(centerX, 2) + Math.pow(centerY, 2) - (constant / xvalue));
    const radiusFrac = Number.isInteger(Math.pow(centerX, 2) + Math.pow(centerY, 2) - (constant / xvalue)) ? 
    `<math xmlns="http://www.w3.org/1998/Math/MathML">
            <mi>${(Math.pow(centerX, 2) + Math.pow(centerY, 2) - (constant / xvalue))}</mi>
    </math>` :
    `<math xmlns="http://www.w3.org/1998/Math/MathML">
            <mfrac>
                <mi>${(Math.pow(coeffX / xvalue, 2) + Math.pow(coeffY / yvalue, 2) - ((constant / xvalue) * 4))}</mi>
                <mi>4</mi>
            </mfrac>
    </math>`;
    const xpow = Number.isInteger(Math.pow(centerX, 2)) ? Math.pow(centerX, 2) : Math.pow(centerX, 2).toFixed(2);
    const ypow = Number.isInteger(Math.pow(centerY, 2)) ? Math.pow(centerY, 2) : Math.pow(centerY, 2).toFixed(2);
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
    finalCenterX = centerX / -1;
    finalCenterY = centerY / -1;
    finalRadius = Number.isInteger(Math.sqrt(radius)) ? Math.sqrt(radius) : Math.sqrt(radius).toFixed(2);
    centerValue.innerHTML = `(${finalCenterX}, ${finalCenterY})`;
    radiusGraph.innerHTML = finalRadius;
    //Graph
    drawCoordinatePlane();
    drawCircle(centerX, centerY, radius);
    initiate();
    
 
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
//Center frac

//constantDec
    const constantDecimal = Number.isInteger(constant / xvalue) ? (-constant / xvalue) : 
    `<math xmlns="http://www.w3.org/1998/Math/MathML">
        <mfrac>
            <msup>
            <mfenced>
                <mi>${-constant}</mi>
            </mfenced>
            </msup>
            <mfenced>
            <mi>${xvalue}</mi>
            </mfenced>
        </mfrac>
        </math>
        `;
    const xExpanded = `
    <math xmlns="http://www.w3.org/1998/Math/MathML">
        <msup>
            <mrow>
                <mo>(</mo>
                <mfrac>
                    <mn>${Math.abs(centerX * 2)}</mn>
                    <mn>2</mn>
                </mfrac>
                <mo>)</mo>
            </mrow>
            <mn>2</mn>
        </msup>
    </math>`;
    
    
        //---
        const yExpanded = `
    <math xmlns="http://www.w3.org/1998/Math/MathML">
        <msup>
            <mrow>
                <mo>(</mo>
                <mfrac>
                    <mn>${Math.abs(centerY * 2)}</mn>
                    <mn>2</mn>
                </mfrac>
                <mo>)</mo>
            </mrow>
            <mn>2</mn>
        </msup>
    </math>`;




if(coeffX !== 0 && coeffY !== 0) {
    step1Container.innerHTML = `x² ${coeffXSign} ${Math.abs((coeffX / xvalue))}x ${yvalueSign} y² ${coeffYSign} ${Math.abs((coeffY / yvalue))}y = ${constantDecimal}`;
    step2Container.innerHTML = `(x² ${coeffXSign} ${Math.abs(coeffX / xvalue)}x + ${xExpanded}) ${yvalueSign} (y² ${coeffYSign} ${Math.abs(coeffY / yvalue)}y + ${yExpanded}) = ${constantDecimal}`;
    step3Container.innerHTML = `(x² ${coeffXSign} ${Math.abs((coeffX / xvalue))}x + ${xExpanded}) ${yvalueSign} (y² ${coeffYSign} ${Math.abs((coeffY / yvalue))}y + ${yExpanded}) = ${constantDecimal} + ${xExpanded} + ${yExpanded}`;
    resultDiv.innerHTML = `(x ${coeffXSign} ${Math.abs(centerX)})² + (y ${coeffYSign} ${Math.abs(centerY)})² = ${radiusFrac}`;  
} else if(coeffX == 0){
    step1Container.innerHTML = `x² ${yvalueSign} y² ${coeffYSign} ${Math.abs(coeffY)}y = ${constantDecimal}`;
    step2Container.innerHTML = `x² ${yvalueSign} (y² ${coeffYSign} ${Math.abs(centerY * 2)}y + ${yExpanded}) = ${constantDecimal}`;
    step3Container.innerHTML = `x² ${yvalueSign} (y² ${coeffYSign} ${Math.abs(centerY * 2)}y + ${ypow}) = ${constantDecimal} + ${ypow}`;
    resultDiv.innerHTML = `x² + (y ${coeffYSign} ${Math.abs(centerY)})² = ${radius}`;  
} else if(coeffY == 0) {
    step1Container.innerHTML = `x² ${coeffXSign} ${Math.abs(coeffX)}x ${yvalueSign} y² = ${constantDecimal}`;
    step2Container.innerHTML = `(x² ${coeffXSign} ${Math.abs(centerX * 2)}x + ${xExpanded}) ${yvalueSign} y² = ${constantDecimal}`;
    step3Container.innerHTML = `(x² ${coeffXSign} ${Math.abs(centerX * 2)}x + ${xpow}) ${yvalueSign} y² = ${constantDecimal} + ${xpow}`;
    resultDiv.innerHTML = `(x ${coeffXSign} ${Math.abs(centerX)})² + y² = ${-constant / xvalue + xpow}`;  
} 
    }  
};

//user answer
const answerEach = document.querySelector(".answer-each-parts");

function initiate() {
    hideAllSections();
    document.querySelector(".user-center-value").style.display = "block"; 
    answerEach.classList.remove('wrong', 'correct');
};

function hideAllSections() {
    document.querySelector(".user-center-value").style.display = "none";
    document.querySelector(".user-radius-value").style.display = "none";
    document.querySelector(".center-container").style.display = "none";
    document.querySelector(".radius-container").style.display = "none";
    answerEach.innerHTML = '';
    document.querySelector('.user-x-answer').value = '';
    document.querySelector('.user-y-answer').value = '';    
    document.querySelector('.user-radius-answer').value = '';

}

// Function to show the next section after submitting the previous input
function showNextSection(currentSection, nextSection) {
    document.querySelector(currentSection).style.display = "none"; // Hide current section
    document.querySelector(nextSection).style.display = "block";   // Show next section
}

// Event listener for Center (First step)
document.querySelector(".submitBtn-center").addEventListener('click', checkCenter);

function checkCenter(e) {
    e.preventDefault();
    
    // Get values from the center input fields
    const userX = document.querySelector('.user-x-answer').value;
    const userY = document.querySelector('.user-y-answer').value;

    if(finalCenterX == userX && finalCenterY == userY){
        answerEach.classList.add('correct');
        correctSound();
    } else {
        answerEach.classList.add('wrong');
        wrongSound();
    }

    if(userX && userY) {
        // Show the next section (minor vertex)
        showNextSection(".user-center-value", ".user-radius-value");
        document.querySelector(".center-container").style.display = "block";
        answerEach.innerHTML = `Your Answer: (${userX}, ${userY})`;
        
    } else {
        answerEach.innerHTML = "Put your answer first.";
    }
};
   
document.querySelector(".submitBtn-radius").addEventListener('click', checkRadius);

function checkRadius(e) {
    e.preventDefault();
    
    graph.style.display = "block";
    // Get values from the center input fields
    const radius = document.querySelector('.user-radius-answer').value;

    if(radius == finalRadius){
        answerEach.classList.add('correct');
        answerEach.classList.remove('wrong')
        correctSound();
    } else {
        answerEach.classList.add('wrong');
        wrongSound();
    }

    if(radius) {
        // Show the next section (minor vertex)
        document.querySelector(".radius-container").style.display = "block";
        answerEach.innerHTML = `Your Answer: ${radius}`;
        
    } else {
        answerEach.innerHTML = "Put your answer first.";
    }
};
  
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Canvas size
const width = canvas.width;
const height = canvas.height;

// For the center
const Xmeasure = width / 2;
const Ymeasure = height / 2;

// For each grid
const scale = 20;

function drawCoordinatePlane() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setLineDash([]);

    // For drawing grid
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 1;

    drawArrow(width, Ymeasure);  // Arrow for the positive x-axis
    drawArrow(0, Ymeasure, Math.PI);  // Arrow for the negative x-axis
    drawArrow(Xmeasure, height, Math.PI / 2);  // Arrow for the positive y-axis
    drawArrow(Xmeasure, 0, -Math.PI / 2);  // Arrow for the negative y-axis

    // For horizontal
    for (let y = 0; y <= canvas.height; y += scale) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();

        // For adding y-axis
        let label = ((canvas.height / 2 - y) / scale);
        if (label != 0) { 
            ctx.fillText(label, canvas.width / 2 + 5, y + 5);
        }
    }

    // For the labels
    for (let x = 0; x <= canvas.width; x += scale) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();

        // For numbers in x
        let label = ((x - canvas.width / 2) / scale);
        if (label != 0) { 
            ctx.fillText(label, x - 5, canvas.height / 2 - 5);
        }
    }

    // For axis
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;

    // X-axis
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();

    // Y-axis
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();

    // For adding the origin
    ctx.fillText("0", canvas.width / 2 + 5, canvas.height / 2 - 5);
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

function drawCircle(centerX, centerY, radius) {
    drawCoordinatePlane();
    centerX = centerX * -1;
    centerY = centerY * -1;
    radius = Math.sqrt(radius).toFixed(2);

    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.arc(Xmeasure + centerX * scale, Ymeasure - centerY * scale, radius * scale, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(Xmeasure + centerX * scale, Ymeasure - centerY * scale, 3, 0, 2 * Math.PI); // small circle for center
    ctx.fill();
}



