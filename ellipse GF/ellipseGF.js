const numeratorx = document.querySelector(".numeratorx");
const denominatorx = document.querySelector(".denominatorx");
const numeratory = document.querySelector(".numeratory");
const denominatory = document.querySelector(".denominatory");
const answerContainer = document.querySelector(".answer-container");
const noneCoeff0 = document.querySelector(".step1-container");
const noneCoeff1 = document.querySelector(".step2-container");
const noneCoeff2 = document.querySelector(".step3-container");
const noneCoeff3 = document.querySelector(".step4-container");
const noneCoeff4 = document.querySelector(".step5-container");
const noneCoeff5 = document.querySelector(".step6-container");
const step5H1 = document.querySelector(".step5-container h1");
const step6H1 = document.querySelector(".step6-container h1");
const userContainer = document.querySelector(".users-answer-container");

const givenA = document.querySelector(".givenA");
const givenB = document.querySelector(".givenB");
const givenC = document.querySelector(".givenC");
const givenD = document.querySelector(".givenD");
const givenE = document.querySelector(".givenE");
const sign1 = document.querySelector(".givenSign1");
const sign2 = document.querySelector(".givenSign2");
const sign3 = document.querySelector(".givenSign3"); 
const given = document.querySelector(".given");
 
const steps = document.querySelector(".steps");
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


// Bind buttons to show functions
document.querySelector(".step1Btn").addEventListener("click", showAnswer1);
document.querySelector(".step2Btn").addEventListener("click", showAnswer2);
document.querySelector(".step3Btn").addEventListener("click", showAnswer3);
document.querySelector(".step4Btn").addEventListener("click", showAnswer4);
document.querySelector(".step5Btn").addEventListener("click", showAnswer5);
document.querySelector(".step6Btn").addEventListener("click", showAnswer6);

function showStart(){
    step1Container.style.display = "none";
    noneCoeff1.style.display = "none";
    document.querySelector(".step1Btn").style.display = "block"; // Initially hide this button
}
// Function to show Step 1
function showAnswer1() {
    step1Container.style.display = "block";
    noneCoeff1.style.display = "block";
    document.querySelector(".step1Btn").style.display = "none"; // Initially hide this button
    document.querySelector(".step2Btn").style.display = "block"; // Show Step 2 button
}

// Function to show Step 2
function showAnswer2() {
    step2Container.style.display = "block";
    noneCoeff2.style.display = "block";
    document.querySelector(".step2Btn").style.display = "none";
    document.querySelector(".step3Btn").style.display = "block";
}

// Function to show Step 3
function showAnswer3() {
    step3Container.style.display = "block";
    noneCoeff3.style.display = "block";
    document.querySelector(".step3Btn").style.display = "none";
    document.querySelector(".step4Btn").style.display = "block";
}

// Function to show Step 4
function showAnswer4() {
    step4Container.style.display = "block";
    noneCoeff4.style.display = "block";
    document.querySelector(".step4Btn").style.display = "none";
    document.querySelector(".step5Btn").style.display = "block";
    step5H1.innerHTML = "STEP 5: Simplify the right side of the equation and make the perfect square trinomial into square of binomial.";
    step6H1.innerHTML = "STEP 6: Divide both sides of the equation by the constant on the right side, then simplify.";
}

// Function to show Step 5
function showAnswer5() {
    step5Container.style.display = "block";
    noneCoeff5.style.display = "block";
    document.querySelector(".step5Btn").style.display = "none";
    document.querySelector(".step6Btn").style.display = "block";
    step6Container.classList.add('finalAnswerBgColor');
}

// Function to show Step 6
function showAnswer6() {
    step6Container.style.display = "block";
    graphContainer.style.display = "block";
    graph.style.display = "none";
    userContainer.style.display = "block";
    document.querySelector(".step6Btn").style.display = "none";

    // Check if confetti function is defined and available
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x: 0.5, y: 1 }
        });
    }
}


// Main function
function zerozero(coeffX, coeffY) {
    // Ensure step1Container is hidden at the start
    step1Container.style.display = "none";

    if (coeffX === 0 && coeffY === 0) {
        // Show the Step 1 button
        noneCoeff1.style.display = 'none';
        noneCoeff2.style.display = 'none';
        noneCoeff3.style.display = 'none';
        document.querySelector(".step1Btn").style.display = "block"; // Show step 1 button

        // Show step1Container when step1Btn is clicked
        document.querySelector(".step1Btn").addEventListener("click", () => {
            showStart(); // Call to show step 1
            step5H1.innerHTML = "STEP 2: Simplify the right side of the equation and make the perfect square trinomial into square of binomial.";
            step6H1.innerHTML = "STEP 3: Divide both sides of the equation by the constant on the right side, then simplify.";
            step1Container.style.display = "block";
            noneCoeff4.style.display = "block"; 
            document.querySelector(".step1Btn").style.display = "none"; // Hide the Step 1 button
            document.querySelector(".step5Btn").style.display = "block"; // Show Step 5 button
        });
    } else if(coeffX !== 0 || coeffY !== 0) {
        // For other cases, just show Step 1 directly

        document.querySelector(".step1Btn").addEventListener('click', () => {
            showAnswer1();
            noneCoeff4.style.display = "none";
        });
        document.querySelector(".step2Btn").addEventListener('click', () => {
            showAnswer2();
        });
        document.querySelector(".step3Btn").addEventListener('click', () => {
            showAnswer3();
        });
        document.querySelector(".step4Btn").addEventListener('click', () => {
            showAnswer4();
        });
        document.querySelector(".step5Btn").addEventListener('click', () => {
            showAnswer5();
        });
    };
};

function wrongSound(){
    var audio = document.getElementById("wrongSound");
        audio.play();
}

function correctSound(){
    var audio = document.getElementById("correctSound");
        audio.play();
}

let finalCenterX,finalCenterY, numeX, numeY;
function transform() {
    steps.style.display = "none";
    const reminderContainer = document.querySelector(".reminderContainer");
    reminderContainer.style.display = "block";
    document.getElementById('showMessageBtn').addEventListener('click', function() {
        reminderContainer.style.display = "none";
        steps.style.display = "block";
    });
    document.querySelector(".step1Btn").style.display = "block";
    step1Container.style.display = "none";
    step2Container.style.display = "none";
    step3Container.style.display = "none";
    step4Container.style.display = "none";
    step5Container.style.display = "none";
    userContainer.style.display = "none";

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

    zerozero(coeffX, coeffY);
    const centerX = coeffX / x2;
    const centerY = coeffY / y2;
    const constX =  Number.isInteger(Math.pow(centerX / 2, 2)) ? Math.pow(centerX / 2, 2) : `
    <math xmlns="http://www.w3.org/1998/Math/MathML">
    <msup>
        <mrow>
        <mo>(</mo> 
        <mfrac>
            <mn>${Math.abs(centerX)}</mn>
            <mn>2</mn>
        </mfrac>
        <mo>)</mo>
        </mrow>
        <mn>2</mn>
    </msup>
    </math>
    `;
    const constY = Number.isInteger(Math.pow(centerY / 2, 2)) ? Math.pow(centerY / 2, 2) : `
    <math xmlns="http://www.w3.org/1998/Math/MathML">
    <msup>
        <mrow>
        <mo>(</mo>
        <mfrac>
            <mn>${Math.abs(centerY)}</mn>
            <mn>2</mn>
        </mfrac>
        <mo>)</mo> 
        </mrow>
        <mn>2</mn>
    </msup>
    </math>
    `;
    const radius = ((constX * x2) + (constY * y2)) + (constant / -1);

    numeX = Number.isInteger(radius / x2) ? radius / x2 : (radius / x2).toFixed(2);
    numeY = Number.isInteger(radius / y2) ? radius / y2 : (radius / y2).toFixed(2);
    //ABC
    ABC(numeX, numeY);
    //Vertex
    vertex(centerX, centerY, numeX, numeY);
    //Center and radius value
    finalCenterX = (centerX / 2) / -1;
    finalCenterY = (centerY / 2) / -1;
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
    initiate();
    //Fraction
    const xCenterFraction = `
    <math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mn>${Math.abs(coeffX)}</mn>
    <mn>${Math.abs(x2)}</mn>
  </mfrac>
</math>
`;
    const yCenterFraction = `
    <math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mn>${Math.abs(coeffY)}</mn>
    <mn>${Math.abs(y2)}</mn>
  </mfrac>
</math>
`;
    const xExpandedFraction = `
    <math xmlns="http://www.w3.org/1998/Math/MathML">
    <msup>
        <mrow>
        <mo>(</mo> <!-- Left parenthesis -->
        <mfrac>
            <mn>${Math.abs(centerX)}</mn>
            <mn>2</mn>
        </mfrac>
        <mo>)</mo> <!-- Right parenthesis -->
        </mrow>
        <mn>2</mn>
    </msup>
    </math>
    `;

    const yExpandedFraction = `
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mrow>
      <mo>(</mo> <!-- Left parenthesis -->
      <mfrac>
        <mn>${Math.abs(centerY)}</mn>
        <mn>2</mn>
      </mfrac>
      <mo>)</mo> <!-- Right parenthesis -->
    </mrow>
    <mn>2</mn>
  </msup>
</math>
`;

//Not an ellipse
if(radius < 0){
    graphContainer.innerHTML = `
    Since the left side represents a sum of squares (which is always non-negative), and the right side becomes a negative number, this equation does not represent an ellipse or any real figure in the Cartesian plane.
    `;
    graph.style.display = "none";
}


    if(coeffX !== 0 && coeffY !== 0){
        step1Container.innerHTML = `(${x2}x² ${coeffXSign} ${Math.abs(coeffX)}x) + (${y2}y² ${coeffYSign} ${Math.abs(coeffY)}y) = ${constant / -1}`;
        step2Container.innerHTML = `${x2} (x² ${coeffXSign} ${xCenterFraction}x) + ${y2} (y² ${coeffYSign} ${yCenterFraction}y) = ${constant / -1}`;
        step3Container.innerHTML = `${x2} (x² ${coeffXSign} ${Math.abs(centerX)}x +${xExpandedFraction}) + ${y2} (y² ${coeffYSign} ${Math.abs(centerY)}y +${yExpandedFraction}) = ${constant / -1}`;
        step4Container.innerHTML = `${x2} (x² ${coeffXSign} ${Math.abs(centerX)}x +${constX}) + ${y2} (y² ${coeffYSign} ${Math.abs(centerY)}y +${constY}) = ${constant / -1} + ${constX}(${x2}) + ${constY}(${y2})`;
        //STEP 5
        aValue.innerHTML = `${x2} (x ${coeffXSign} ${Math.abs(centerX / 2)})²`;
        aDeno.innerHTML = `${radius}`;
        bValue.innerHTML = `${y2} (y ${coeffYSign} ${Math.abs(centerY / 2)})²`;
        bDeno.innerHTML = `${radius}`;
        constValue.innerHTML = `${radius}`;
        constDeno.innerHTML = `${radius}`;
        // FINAL
        finalaValue.innerHTML = `(x ${coeffXSign} ${Math.abs(centerX / 2)})²`;
        finalaDeno.innerHTML = `${numeX}`;
        finalbValue.innerHTML = `(y ${coeffYSign} ${Math.abs(centerY / 2)})²`;
        finalbDeno.innerHTML = `${numeY}`; 
        finalConstValue.innerHTML = radius / radius;
    }
    else if(coeffX == 0 && coeffY == 0){
        noneCoeff1.style.display = "none";
        noneCoeff2.style.display = "none";
        noneCoeff3.style.display = "none";
        noneCoeff4.style.display = "none";
        noneCoeff5.style.display = "none";
        //
        given.innerHTML = `${x2}x² + ${y2}y² ${constantSign} ${Math.abs(constant)} = 0`;
        step1Container.innerHTML = `${x2}x² + ${y2}y² = ${constant / -1}`;
        noneCoeff1.style.display = "none";
        noneCoeff2.style.display = "none";
        noneCoeff3.style.display = "none";
        //STEP 5
        aValue.innerHTML = `${x2}x²`;
        aDeno.innerHTML = `${-constant}`;
        bValue.innerHTML = `${y2}y²`;
        bDeno.innerHTML = `${-constant}`;
        constValue.innerHTML = -constant;
        constDeno.innerHTML = -constant;
        // FINAL
        finalaValue.innerHTML = `x²`;
        finalaDeno.innerHTML = Number.isInteger(-constant / x2) ? `${-constant / x2}` : (-constant / x2).toFixed(2); 
        finalbValue.innerHTML = `y²`;
        finalbDeno.innerHTML = Number.isInteger(-constant / y2) ? `${-constant / y2}` : (-constant / y2).toFixed(2);
        finalConstValue.innerHTML = -constant / -constant;
    }
    else if(coeffX == 0){
        given.textContent = `${x2}x² + ${y2}y² ${coeffYSign} ${Math.abs(coeffY)}y ${constantSign} ${Math.abs(constant)} = 0`;
        step1Container.innerHTML = `${x2}x² + (${y2}y² ${coeffYSign} ${Math.abs(coeffY)}y) = ${constant / -1}`;
        step2Container.innerHTML = `${x2}x² + ${y2} (y² ${coeffYSign} ${Math.abs(centerY)}y) = ${constant / -1}`;
        step3Container.innerHTML = `${x2}x² + ${y2} (y² ${coeffYSign} ${Math.abs(centerY)}y + ${yExpandedFraction}) = ${constant / -1}`;
        step4Container.innerHTML = `${x2}x² + ${y2} (y² ${coeffYSign} ${Math.abs(centerY)}y + ${constY}) = ${constant / -1} + ${constY}(${y2})`;
        //STEP 5
        aValue.innerHTML = `${x2}x²`;
        aDeno.innerHTML = `${radiusX}`;
        bValue.innerHTML = `${y2} (y ${coeffYSign} ${Math.abs(centerY / 2)})²`;
        bDeno.innerHTML = `${radiusX}`;
        constValue.innerHTML = `${radius}`;
        constDeno.innerHTML = `${radius}`;
        // FINAL
        finalaValue.textContent = `x²`;
        finalaDeno.innerHTML = Number.isInteger(radiusX / x2) ? `${radiusX / x2}` : (radiusX / x2).toFixed(2);
        finalbValue.innerHTML = `(y ${coeffYSign} ${Math.abs(centerY / 2)})²`;
        finalbDeno.innerHTML = Number.isInteger(radiusX / y2) ? `${radiusX / y2}` : (radiusX / y2).toFixed(2); 
        finalConstValue.innerHTML = radiusX / radiusX;
    } else if(coeffY == 0) {
        given.textContent = `${x2}x² ${coeffXSign} ${Math.abs(coeffX)}x + ${y2}y² ${constantSign} ${Math.abs(constant)} = 0`;
        step1Container.innerHTML = `(${x2}x² ${coeffXSign} ${Math.abs(coeffX)}x) + ${y2}y² = ${constant / -1}`;
        step2Container.innerHTML = `${x2} (x² ${coeffXSign} ${Math.abs(centerX)}x) + ${y2}y² = ${constant / -1}`;
        step3Container.innerHTML = `${x2} (x² ${coeffXSign} ${Math.abs(centerX)}x +${xExpandedFraction}) + ${y2}y² = ${constant / -1}`;
        step4Container.innerHTML = `${x2} (x² ${coeffXSign} ${Math.abs(centerX)}x +${constX}) + ${y2}y² = ${constant / -1} + ${constX}(${x2})`;
        //STEP 5
        aValue.innerHTML = `${x2} (x ${coeffXSign} ${Math.abs(centerX / 2)})²`;
        aDeno.innerHTML = `${radiusY}`;
        bValue.innerHTML = `${y2}y²`;
        bDeno.innerHTML = `${radiusY}`;
        constValue.innerHTML = radius;
        constDeno.innerHTML = radius;
        // FINAL
        finalaValue.innerHTML = `(x ${coeffXSign} ${Math.abs(centerX / 2)})²`;
        finalaDeno.innerHTML = Number.isInteger(radiusY / x2) ? `${radiusY / x2}` : (radiusY / x2).toFixed(2);
        finalbValue.textContent = `y²`;
        finalbDeno.innerHTML = Number.isInteger(radiusY / y2) ? `${radiusY / y2}` : (radiusY / y2).toFixed(2);
        finalConstValue.innerHTML = radiusY / radiusY;
    } 
};

//------
let centerXInVertex, centerYInVertex, finalFociXAdd, finalFociXSub, finalFociYAdd, finalFociYSub,
    xCenterValueFirst, xCenterValueSecond, yCenterValueFirst, yCenterValueSecond, minorYValAdd, minorYValSub,
    minorXValAdd, minorXValSub, orriUser;
function vertex(centerX, centerY, numeX, numeY){
    const majorVertexValue = document.querySelector(".majorVertexValue");
    const minorVertexValue = document.querySelector(".minorVertexValue"); 
    const fociValue = document.querySelector(".fociValue");
    const orri = document.querySelector(".orriValue");
    centerXInVertex = centerX / -2;
    centerYInVertex = centerY / -2; 

    const aValue = (numeX > numeY) ?  Math.sqrt(numeX) : Math.sqrt(numeY);
    const bValue = (numeX > numeY) ? Math.sqrt(numeY) : Math.sqrt(numeX);
    const cValue= (numeX > numeY) ? Math.sqrt(numeX - numeY) : Math.sqrt(numeY - numeX);

    finalFociXAdd = Number.isInteger(centerXInVertex + cValue) ? centerXInVertex + cValue : (centerXInVertex + cValue).toFixed(2);
    finalFociXSub = Number.isInteger(centerXInVertex - cValue) ? centerXInVertex - cValue : (centerXInVertex - cValue).toFixed(2);
    finalFociYAdd = Number.isInteger(centerYInVertex + cValue) ? centerYInVertex + cValue : (centerYInVertex + cValue).toFixed(2);
    finalFociYSub = Number.isInteger(centerYInVertex - cValue) ? centerYInVertex - cValue : (centerYInVertex - cValue).toFixed(2);
    xCenterValueFirst = Number.isInteger(centerXInVertex + aValue)
    ? (centerXInVertex + aValue) 
    : (centerXInVertex + aValue).toFixed(2);

    xCenterValueSecond = Number.isInteger(centerXInVertex - aValue) 
        ? (centerXInVertex - aValue) 
        : (centerXInVertex - aValue).toFixed(2);

    yCenterValueFirst = Number.isInteger(centerXInVertex + aValue) 
    ? (centerYInVertex + aValue) 
    : (centerYInVertex + aValue).toFixed(2);

    yCenterValueSecond = Number.isInteger(centerXInVertex - aValue) 
        ? (centerYInVertex - aValue) 
        : (centerYInVertex - aValue).toFixed(2);

    minorYValAdd = Number.isInteger(centerYInVertex + bValue) ? centerYInVertex + bValue : (centerYInVertex + bValue).toFixed(2);
    minorYValSub = Number.isInteger(centerYInVertex - bValue) ? centerYInVertex - bValue : (centerYInVertex - bValue).toFixed(2);
    minorXValAdd = Number.isInteger(centerXInVertex + bValue) ? centerXInVertex + bValue : (centerXInVertex + bValue).toFixed(2);
    minorXValSub = Number.isInteger(centerXInVertex - bValue) ? centerXInVertex - bValue : (centerXInVertex - bValue).toFixed(2);

    orriUser = (numeX > numeY) ? "Horizontal" : "Vertical";
    if (numeX > numeY) {
        majorVertexValue.textContent = `(${xCenterValueFirst}, ${centerYInVertex}), (${xCenterValueSecond}, ${centerYInVertex})`;
        minorVertexValue.textContent = `(${centerXInVertex}, ${minorYValAdd}), (${centerXInVertex}, ${minorYValSub})`;
        fociValue.textContent = `(${finalFociXAdd}, ${centerYInVertex}), (${finalFociXSub}, ${centerYInVertex})`;
        orri.textContent = orriUser;
    } else {
        majorVertexValue.textContent = `(${centerXInVertex}, ${yCenterValueFirst}), (${centerXInVertex}, ${yCenterValueSecond})`;
        minorVertexValue.textContent = `(${minorXValAdd}, ${centerYInVertex}), (${minorXValSub}, ${centerYInVertex})`;
        fociValue.textContent = `(${centerXInVertex}, ${finalFociYAdd}), (${centerXInVertex}, ${finalFociYSub})`;
        orri.textContent = orriUser;
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
    document.querySelector(".user-minorvertex-value").style.display = "none";
    document.querySelector(".user-majorvertex-value").style.display = "none";
    document.querySelector(".user-foci-value").style.display = "none";
    document.querySelector(".user-orrientation").style.display = "none";
    document.querySelector(".centerValue-container").style.display = "none";
    document.querySelector(".majorValue-container").style.display = "none";
    document.querySelector(".minorValue-container").style.display = "none"; 
    document.querySelector(".fociValue-container").style.display = "none";
    document.querySelector(".orriValue-container").style.display = "none";
    answerEach.innerHTML = '';

    document.querySelector('.user-x-answer').value = '';
    document.querySelector('.user-y-answer').value = '';

    document.querySelector('.user-minorvertex-x1-answer').value = '';
    document.querySelector('.user-minorvertex-y1-answer').value = '';
    document.querySelector('.user-minorvertex-x2-answer').value = '';
    document.querySelector('.user-minorvertex-y2-answer').value = '';

    document.querySelector('.user-majorvertex-x1-answer').value = '';
    document.querySelector('.user-majorvertex-y1-answer').value = '';
    document.querySelector('.user-majorvertex-x2-answer').value = '';
    document.querySelector('.user-majorvertex-y2-answer').value = '';

    document.querySelector('.user-foci-x1-answer').value = '';
    document.querySelector('.user-foci-y1-answer').value = '';
    document.querySelector('.user-foci-x2-answer').value = '';
    document.querySelector('.user-foci-y2-answer').value = '';

    document.querySelector('.user-orrientation-answer').value = '';
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
    console.log(finalCenterX, finalCenterY)
    if(userX && userY) {
        // Show the next section (minor vertex)
        showNextSection(".user-center-value", ".user-minorvertex-value");
        document.querySelector(".centerValue-container").style.display = "block";
        answerEach.innerHTML = `Your Answer: (${userX}, ${userY})`;

        if(finalCenterX == userX && finalCenterY == userY){
            answerEach.classList.add('correct');
            correctSound();
        } else {
            answerEach.classList.add('wrong');
            wrongSound();
        }
        
    } else {
        answerEach.innerHTML = "Please put your center values first.";
    }
};

// Event listener for Minor Vertex (Second step)
document.querySelector(".submitBtn-minor").addEventListener('click', checkMinor);
function checkMinor(e) {
    e.preventDefault();
    
    // Get values from the minor vertex input fields
    const minorX1 = document.querySelector('.user-minorvertex-x1-answer').value;
    const minorY1 = document.querySelector('.user-minorvertex-y1-answer').value;
    const minorX2 = document.querySelector('.user-minorvertex-x2-answer').value;
    const minorY2 = document.querySelector('.user-minorvertex-y2-answer').value;

    console.log(minorX1, minorY1, minorX2, minorY2, centerXInVertex, minorYValAdd, minorXValAdd, minorYValSub);
    console.log(numeX, numeY)
        if(minorX1 && minorY1 && minorX2 && minorY2){
            showNextSection(".user-minorvertex-value", ".user-majorvertex-value");
            document.querySelector(".minorValue-container").style.display = "block";
            answerEach.innerHTML = `Your Answer: (${minorX1}, ${minorY1}), (${minorX2}, ${minorY2})`; 
        } else{
            answerEach.innerHTML = `Put your answers first.`;
        }
console.log(minorXValAdd, centerYInVertex, minorXValAdd, centerYInVertex)
        if(numeX > numeY && centerXInVertex == minorX1 && minorYValAdd == minorY1 && centerXInVertex == minorX2 && minorYValSub == minorY2){
            answerEach.classList.add('correct');
            answerEach.classList.remove('wrong');
            correctSound();
        } else if(numeX < numeY && minorXValAdd  == minorX1 && centerYInVertex == minorY1 && minorXValSub == minorX2 && centerYInVertex == minorY2){
            answerEach.classList.add('correct');
            answerEach.classList.remove('wrong');
            correctSound();
        } else {
            answerEach.classList.add('wrong');
            wrongSound();
        };
};

// Event listener for Major Vertex (Third step)
document.querySelector(".submitBtn-major").addEventListener('click', checkMajor);
function checkMajor(e) {
    e.preventDefault();
    
    // Get values from the major vertex input fields
    const majorX1 = document.querySelector('.user-majorvertex-x1-answer').value;
    const majorY1 = document.querySelector('.user-majorvertex-y1-answer').value;
    const majorX2 = document.querySelector('.user-majorvertex-x2-answer').value;
    const majorY2 = document.querySelector('.user-majorvertex-y2-answer').value;
console.log(majorX1, xCenterValueFirst)
    if(numeX > numeY && majorX1 == xCenterValueFirst && majorY1 == centerYInVertex && majorX2 == xCenterValueSecond && majorY2 == centerYInVertex){
        answerEach.classList.add('correct');
        answerEach.classList.remove('wrong');
        correctSound();
    } else if(majorX1 == centerXInVertex && majorY1 == yCenterValueFirst && majorX2 == centerXInVertex && majorY2 == yCenterValueSecond){
        answerEach.classList.add('correct');
        answerEach.classList.remove('wrong');
        correctSound();
    } 
    else {
        answerEach.classList.add('wrong');
        wrongSound();
    }

    if(majorX1 && majorY1 && majorX2 && majorY2) {
        // Show the next section (foci)
        showNextSection(".user-majorvertex-value", ".user-foci-value");
        document.querySelector(".majorValue-container").style.display = "block";
        answerEach.innerHTML = `Your Answer: (${majorX1}, ${majorY1}), (${majorX2}, ${majorY2})`; 
    } else {
        answerEach.innerHTML = "Put your answers first."
    }
};

// Event listener for Foci (Fourth step)
document.querySelector(".submitBtn-foci").addEventListener('click', checkFoci);
function checkFoci(e) {
    e.preventDefault();
    
    // Get values from the foci input fields
    const focix1 = document.querySelector('.user-foci-x1-answer').value;
    const fociy1 = document.querySelector('.user-foci-y1-answer').value;
    const focix2 = document.querySelector('.user-foci-x2-answer').value;
    const fociy2 = document.querySelector('.user-foci-y2-answer').value;
console.log(focix1, finalFociXAdd)
    if(numeX > numeY && focix1 == finalFociXAdd && fociy1 == centerYInVertex && focix2 == finalFociXSub && fociy2 == centerYInVertex){
        answerEach.classList.add('correct');
        answerEach.classList.remove('wrong');
        correctSound();
    } else if(numeX < numeY && focix1 == centerXInVertex && fociy1 == finalFociYAdd && focix2 == centerXInVertex && fociy2 == finalFociYSub){
        answerEach.classList.add('correct');
        answerEach.classList.remove('wrong');
        correctSound();
    } else {
        answerEach.classList.add('wrong');
        answerEach.classList.remove('correct');
        wrongSound();
    }
console.log()
    if(focix1 && fociy1 && focix2 && fociy2) {
        // Show the next section (orientation)
        showNextSection(".user-foci-value", ".user-orrientation");
        document.querySelector(".fociValue-container").style.display = "block";
        answerEach.innerHTML = `Your Answer: (${focix1}, ${fociy1}), (${focix2}, ${fociy2})`; 
    } else {
        answerEach.innerHTML = 'Put your answers first.';
    }
};

document.querySelector(".submitBtn-orrientation").addEventListener('click', checkOrri);
function checkOrri(e) {
    e.preventDefault();

    const orrientationHV = numeX > numeY ? "Horizontal" : "Vertical";  
    const userOrri = document.querySelector('.user-orrientation-answer').value.trim(); 

    graph.style.display = "block";

    if (userOrri.trim().toLowerCase() === orrientationHV.toLowerCase()) {
        answerEach.classList.add('correct');
        answerEach.classList.remove('wrong');
        correctSound();
    } else {
        wrongSound();
    }

    if(userOrri) {
        document.querySelector(".orriValue-container").style.display = "block";
        answerEach.innerHTML = `Your Answer: ${userOrri}`;
    } else {
        answerEach.innerHTML = "Put your answer first.";
    }
};
//-----------------
function ABC(numeX, numeY){
    //ABC
    const a = document.querySelector(".a");
    const a2 = document.querySelector(".a2");
    const b = document.querySelector(".b");
    const b2 = document.querySelector(".b2");
    const c = document.querySelector(".c"); 
    const c2 = document.querySelector(".c2");

    const cValue = (numeX > numeY) ? numeX - numeY : numeY - numeX;
    const xValueIfA = Number.isInteger(Math.sqrt(numeX)) ? Math.sqrt(numeX) : Math.sqrt(numeX).toFixed(2);
    const yValueIfA = Number.isInteger(Math.sqrt(numeY)) ? Math.sqrt(numeY) : Math.sqrt(numeY).toFixed(2);

    a.textContent = (numeX > numeY) ? xValueIfA : yValueIfA;
    a2.textContent = (numeX > numeY) ? numeX : numeY;
    b.textContent = (numeX > numeY) ? yValueIfA : xValueIfA;
    b2.textContent = (numeX > numeY) ? numeY : numeX;
    c.textContent = Number.isInteger(Math.sqrt(cValue)) ? Math.sqrt(cValue) : Math.sqrt(cValue).toFixed(2);
    c2.textContent = Number.isInteger(cValue) ? cValue : cValue.toFixed(2);
}


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
