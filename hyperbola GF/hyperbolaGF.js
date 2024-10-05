const hyperbolaAnswers = document.querySelector(".hyperbolaGF-answer");
const step1 = document.querySelector(".step1");
const step2 = document.querySelector(".step2");
const step3 = document.querySelector(".step3");
const step4 = document.querySelector(".step4");
const step5 = document.querySelector(".step5");
const step6 = document.querySelector(".step6-container math");
const step7 = document.querySelector(".step7-container math");
const finalSign1 = document.querySelector(".finalSign1");
const finalSign2 = document.querySelector(".finalSign2");
const step1Container = document.querySelector(".step1-container");
const step2Container = document.querySelector(".step2-container");
const step3Container = document.querySelector(".step3-container");
const step4Container = document.querySelector(".step4-container");
const step5Container = document.querySelector(".step5-container");
const step6Container = document.querySelector(".step6-container");
const step7Container = document.querySelector(".step7-container");
const graphContainer = document.querySelector(".hyperbolaGF-answer .graph-container");
const graph = document.querySelector(".graph"); 

const majorIn = document.querySelector(".majorIn");
const majorOut = document.querySelector(".majorOut");
const majorDeno = document.querySelector(".majorDeno");
const minorIn = document.querySelector(".minorIn");
const minorOut = document.querySelector(".minorOut");
const minorDeno = document.querySelector(".minorDeno");
const constNume = document.querySelector(".constNume");
const constDeno = document.querySelector(".constDeno");

const finalMajorIn = document.querySelector(".finalMajorIn");
const finalMajorOut = document.querySelector(".finalMajorOut");
const finalMajorDeno = document.querySelector(".finalMajorDeno");
const finalMinorIn = document.querySelector(".finalMinorIn");
const finalMinorOut = document.querySelector(".finalMinorOut");
const finalMinorDeno = document.querySelector(".finalMinorDeno");
const allStep = document.querySelector(".steps");

const givenA = document.querySelector(".givenA");
const givenB = document.querySelector(".givenB");
const givenC = document.querySelector(".givenC");
const givenD = document.querySelector(".givenD");
const givenE = document.querySelector(".givenE");
const sign1 = document.querySelector(".sign1");
const sign2 = document.querySelector(".sign2");
const sign3 = document.querySelector(".sign3");

const answerContainer = document.querySelector(".hyperbolaGF-answer");

function showStep1(){
    step1.style.display = "block";
    step2Container.style.display = "block";
    document.querySelector(".btn1").style.display = "none";
    document.querySelector(".btn2").style.display = "block";
}

function showStep2(){
    step2.style.display = "block";
    step3Container.style.display = "block";
    document.querySelector(".btn2").style.display = "none";
    document.querySelector(".btn3").style.display = "block";
}

function showStep3(){
    step3.style.display = "block";
    step4Container.style.display = "block";
    document.querySelector(".btn3").style.display = "none";
    document.querySelector(".btn4").style.display = "block";
}

function showStep4(){
    step4.style.display = "block";
    step5Container.style.display = "block";
    document.querySelector(".btn4").style.display = "none";
    document.querySelector(".btn5").style.display = "block";
}

function showStep5(){
    step5.style.display = "block";
    step6Container.style.display = "block";
    document.querySelector(".btn5").style.display = "none";
    document.querySelector(".btn6").style.display = "block";
}
 
function showStep6(){
    step6.style.display= "flex";
    step7Container.style.display = "block";
    document.querySelector(".btn6").style.display = "none";
    document.querySelector(".btn7").style.display = "block";
    step7.classList.add('finalAnswerBgColor');
}

function showStep7(){
    confetti({
        particleCount: 100,   
        spread: 100,           
        origin: { y: 0.6 }  
    }); 

    step7.style.visibility = "visible";
    graphContainer.style.display = "block";
    graph.style.display = "none";
}

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
//---------

let finalXCenter, finalYCenter, major, opening, radius;
function transform(){
    allStep.style.display = "none";
    const reminderContainer = document.querySelector(".reminderContainer");
    reminderContainer.style.display = "block";
    
    document.getElementById('showMessageBtn').addEventListener('click', function() {
        reminderContainer.style.display = "none";
        allStep.style.display = "block";
        startSound();
    });
    document.querySelector(".btn1").style.display = "block";
    step1.style.display = "none";
    step2.style.display = "none";
    step3.style.display = "none";
    step4.style.display = "none";
    step5.style.display = "none";
     
    step2Container.style.display = "none";
    step3Container.style.display = "none";
    step4Container.style.display = "none";
    step5Container.style.display = "none";
    step6Container.style.display = "none";
    step7Container.style.display = "none";
    graphContainer.style.display = "none";
    graph.style.display = "none";

    major = document.querySelector("#major").value;
    const minor = document.querySelector("#minor").value;
    const mjc = document.querySelector("#majorConst").value;
    const mnc = document.querySelector("#minorConst").value;
    const A = parseFloat(document.querySelector("#majorValue").value);
    const B = parseFloat(document.querySelector("#minorValue").value);
    const C = parseFloat(document.querySelector("#coeffMajor").value);
    const D = parseFloat(document.querySelector("#coeffMinor").value);
    const E = parseFloat(document.querySelector("#constant").value);

    if(isNaN(A, B, C, D ,E)){
        alert("Please put a value.")
        answerContainer.style.visibility = "hidden";
    } else {
        answerContainer.style.visibility = "visible";
    }

    const majorCenter = Number.isInteger(C / A) ? C / A : (C / A).toFixed(2);
    const minorCenter = Number.isInteger(D / B) ? D / B : (D / B).toFixed(2);
    const majorExpanded = Number.isInteger(Math.pow(majorCenter / 2, 2)) ? Math.abs(Math.pow(majorCenter / 2, 2)) : Math.abs((Math.pow(majorCenter / 2, 2))).toFixed(2);
    const minorExpanded = Number.isInteger(Math.pow(minorCenter / 2, 2)) ? Math.abs(Math.pow(minorCenter / 2, 2)) : Math.abs((Math.pow(minorCenter / 2, 2))).toFixed(2);
    const majorFinalDeno = Number.isInteger(Math.abs(((E / -1) + majorExpanded * A + minorExpanded * B) / A)) ? Math.abs(((E / -1) + majorExpanded * A + minorExpanded * B) / A) : (Math.abs(((E / -1) + majorExpanded * A + minorExpanded * B) / A)).toFixed(2);
    const minorFinalDeno = Number.isInteger(Math.abs(((E / -1) + majorExpanded * A + minorExpanded * B) / B)) ? Math.abs(((E / -1) + majorExpanded * A + minorExpanded * B) / B) : (Math.abs(((E / -1) + majorExpanded * A + minorExpanded * B) / B)).toFixed(2);
    const radius = Number.isInteger((E / -1) + majorExpanded * A + minorExpanded * B) ? ((E / -1) + majorExpanded * A + minorExpanded * B) : parseFloat(((E / -1) + majorExpanded * A + minorExpanded * B).toFixed(2));

    finalSign1.textContent = (radius > 0) ? " " : "-";
    finalSign2.textContent = (radius > 0) ? "-" : "+";
    //Given
    givenA.textContent = (A == 1) ? "" : A;
    givenB.textContent = (B == 1) ? "" : B / -1;
    givenC.textContent = (C > 0 ) ? C : C / -1;
    givenD.textContent = (D > 0 ) ? D : D / -1;
    givenE.textContent = (E > 0 ) ? E : E / -1;
    sign1.textContent = (C > 0) ? "+" : "-";
    sign2.textContent = (D > 0) ? "+" : "-";
    sign3.textContent = (E > 0) ? "+" : "-";
    //CD SIGNS
    const Bsign = (D > 0) ? "+" : "-";
    const Csign = (C > 0) ? "+" : "-";
    const Dsign = (B < 0 && D > 0) ? "-" : "+";
    // Graph
    drawHyperbola(majorFinalDeno, minorFinalDeno, radius, major, majorCenter, minorCenter);
    //ABC
    ABC(majorFinalDeno, minorFinalDeno, radius);
    //Vertex
    parts(majorFinalDeno, minorFinalDeno, radius, majorCenter, minorCenter, major);
    initiate();
    //Center
    const centerValue = document.querySelector(".centerValue");
    finalXCenter = (major == "x²") ? majorCenter / -2 : minorCenter / -2;
    finalYCenter = (major == "x²") ? minorCenter / -2 : majorCenter / -2;
    const centerGraph = (major == "x²") ? `(${majorCenter / -2}, ${minorCenter / -2})` : `(${minorCenter / -2}, ${majorCenter / -2})`;
    centerValue.style.color = 'green';
    centerValue.textContent = centerGraph;
    // Orientation
    const orri = document.querySelector(".orriValue");
    opening = (major == "x²" && radius > 0) ? "Left and Right" : "Up and Down";
    orri.innerHTML = opening;

    const majorFraction = `
    <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mo>(</mo>
    <mfrac>
        <msup>
            <mi>${Math.abs(C)}</mi>
        </msup>
        <mi>${Math.abs(A)}</mi>
    </mfrac>
    <mo>)</mo>
</math>
`;
const majorDecFrac = Number.isInteger(C / A) ? C / A : `
    <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mo>(</mo>
    <mfrac>
        <msup>
            <mi>${Math.abs(C)}</mi>
        </msup>
        <mi>${Math.abs(A)}</mi>
    </mfrac>
    <mo>)</mo>
</math>
`;
    const minorFraction = `
    <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mo>(</mo>
    <mfrac>
        <mi>${Math.abs(D)}</mi>
        <mi>${Math.abs(B)}</mi>
    </mfrac>
    <mo>)</mo>
</math>
`;

const minorDecFrac = Number.isInteger(D / B) ? D / B : `
    <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mo>(</mo>
    <mfrac>
        <mi>${Math.abs(D)}</mi>
        <mi>${Math.abs(B)}</mi>
    </mfrac>
    <mo>)</mo>
</math>
`;

const majorExpandedFraction = `
<math xmlns="http://www.w3.org/1998/Math/MathML">
    <msup>
        <mrow>
            <mo>(</mo>
            <mfrac>
                <mi>${Math.abs(majorCenter)}</mi>
                <mn>2</mn>
            </mfrac>
            <mo>)</mo>
        </mrow>
        <mn>2</mn>
    </msup>
</math>
`;

const minorExpandedFraction = `
<math xmlns="http://www.w3.org/1998/Math/MathML">
    <msup>
        <mrow>
            <mo>(</mo>
            <mfrac>
                <mi>${Math.abs(minorCenter)}</mi>
                <mn>2</mn>
            </mfrac>
            <mo>)</mo>
        </mrow>
        <mn>2</mn>
    </msup>
</math>
`;


    if(A == 1){
        step1.innerHTML = `${major} ${Csign} ${Math.abs(C)}${mjc} ${B}${minor} ${Dsign} ${Math.abs(D)}${mnc} = ${E / -1}`;
        step2.innerHTML = `(${major} ${Csign} ${Math.abs(C)}${mjc}) ${B}(${minor} ${minorFraction}${mnc}) = ${E / -1}`;
        step3.innerHTML = `(${major} ${Csign} ${Math.abs(C)}${mjc} + ${majorExpandedFraction}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpandedFraction}) = ${E / -1}`;
        step4.innerHTML= `(${major} ${Csign} ${Math.abs(C)}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded} + ${minorExpanded}(${B})`;
        step5.textContent = `(${major} ${Csign} ${Math.abs(C)}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = '';
        majorIn.textContent = `${mjc} ${Csign} ${Math.abs(C / 2)}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} ${minorCenter / 2}`;
        minorDeno.textContent = radius;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${mjc} ${Csign} ${Math.abs(C / 2)}`;
        finalMajorDeno.textContent = majorFinalDeno;

        finalMinorIn.textContent = `${mnc} ${minorCenter / 2}`;
        finalMinorDeno.textContent = minorFinalDeno;
    } 
    // B -------------------------------------------------------
    else if(B == -1){
        step1.innerHTML = `${A}${major} ${Csign} ${Math.abs(C)}${mjc} - ${minor} ${Dsign} ${Math.abs(D)}${mnc} = ${E / -1}`;
        step2.innerHTML = `${A}(${major} ${Csign} ${majorFraction}${mjc}) - (${minor} ${Dsign} ${Math.abs(minorCenter)}${mnc}) = ${E / -1}`;
        step3.innerHTML = `${A}(${major} ${Csign} ${Math.abs(majorCenter)}${mjc} + ${majorExpandedFraction}) - (${minor} ${Dsign} ${Math.abs(D)}${mnc} + ${minorExpandedFraction}) = ${E / -1}`;
        step4.innerHTML = `${A}(${major} ${Csign} ${Math.abs(majorCenter)}${mjc} + ${majorExpanded}) - (${minor} ${Dsign} ${Math.abs(D)}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} ${Csign} ${Math.abs(majorCenter)}${mjc} + ${majorExpanded}) - (${minor} ${Dsign} ${Math.abs(D)}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} ${Csign} ${Math.abs(majorCenter / 2)}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = '';
        minorIn.textContent = `${mnc} ${minorCenter / 2}`;
        minorDeno.textContent = `${radius}`;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${mjc} ${Csign} ${Math.abs(majorCenter / 2)}`;
        finalMajorDeno.textContent = `${majorFinalDeno}`;

        finalMinorIn.textContent = `${mnc} ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${minorFinalDeno}`;
    } 
    // A B-------------------------------------------------------------------------- 
    else if(A !== 1 && B !== 1){
        step1.innerHTML = `${A}${major} ${Csign} ${Math.abs(C)}${mjc} ${B}${minor} ${Bsign} ${Math.abs(D)}${mnc} = ${E / -1}`;
        step2.innerHTML = `${A}(${major} ${Csign} ${majorFraction}${mjc}) ${B}(${minor} ${Dsign} ${minorFraction}${mnc}) = ${E / -1}`;
        step3.innerHTML = `${A}(${major} ${Csign} ${Math.abs(majorDecFrac)}${mjc} + ${majorExpandedFraction}) ${B}(${minor} ${Dsign} ${Math.abs(minorDecFrac)}${mnc} + ${minorExpandedFraction}) = ${E / -1}`;
        step4.innerHTML = `${A}(${major} ${Csign} ${Math.abs(majorCenter)}${mjc} + ${majorExpanded}) ${B}(${minor} ${Dsign} ${Math.abs(minorCenter)}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} ${Csign} ${Math.abs(majorCenter)}${mjc} + ${majorExpanded}) ${B}(${minor} ${Dsign} ${Math.abs(minorCenter)}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} ${Csign} ${Math.abs(majorCenter / 2)}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} ${Dsign} ${Math.abs(minorCenter / 2)}`;
        minorDeno.textContent = `${radius}`;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${mjc} ${Csign} ${Math.abs(majorCenter / 2)}`;
        finalMajorDeno.textContent = `${majorFinalDeno}`;

        finalMinorIn.textContent = `${mnc} ${Dsign} ${Math.abs(minorCenter / 2)}`;
        finalMinorDeno.textContent = `${minorFinalDeno}`;
    } 
    else if(C == 0 || D == 0){
        noneCoeff(A, B, C, D, E, major, minor, mjc, mnc, majorCenter, minorCenter, majorExpanded, minorExpanded, majorFinalDeno, minorFinalDeno);
    }
    else {
       
};
};
//--parts------------

const answerEach = document.querySelector(".answer-each-parts");

function initiate() {
    hideAllSections();
    document.querySelector(".user-center-value").style.display = "block"; 
    answerEach.classList.remove('wrong', 'correct');
};


function hideAllSections() {
    document.querySelector(".user-center-value").style.display = "none";
    document.querySelector(".user-vertex-value").style.display = "none";
    document.querySelector(".user-foci-value").style.display = "none";
    document.querySelector(".user-asymp-value").style.display = "none";
    document.querySelector(".user-orrientation").style.display = "none";
    document.querySelector(".center-container").style.display = "none";
    document.querySelector(".vertex-container").style.display = "none";
    document.querySelector(".foci-container").style.display = "none";
    document.querySelector(".asymp-container").style.display = "none";
    document.querySelector(".orri-container").style.display = "none";
    answerEach.innerHTML = '';

    document.querySelector('.user-x-answer').value = '';
    document.querySelector('.user-y-answer').value = '';

    document.querySelector('.user-vertex-x1-answer').value = '';
    document.querySelector('.user-vertex-y1-answer').value = '';
    document.querySelector('.user-vertex-x2-answer').value = '';
    document.querySelector('.user-vertex-y2-answer').value = '';

    document.querySelector('.user-foci-x1-answer').value = '';
    document.querySelector('.user-foci-y1-answer').value = '';
    document.querySelector('.user-foci-x2-answer').value = '';
    document.querySelector('.user-foci-y2-answer').value = '';

    document.querySelector('.user-asympx-answer').value = '';
    document.querySelector('.user-asympy-answer').value = '';
    document.querySelector('.user-asympnume-answer').value = '';
    document.querySelector('.user-asympdeno-answer').value = '';

    document.querySelector(".opening").value = '';
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
    if(userX && userY) {
        // Show the next section (minor vertex)
        showNextSection(".user-center-value", ".user-vertex-value");
        document.querySelector(".center-container").style.display = "block";
        answerEach.innerHTML = `Your Answer: (${userX}, ${userY})`;

        if(finalXCenter == userX && finalYCenter == userY){
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

// Event listener for Major Vertex (Third step)
document.querySelector(".submitBtn-vertex").addEventListener('click', checkMajor);
function checkMajor(e) {
    e.preventDefault();
    
    // Get values from the major vertex input fields
    const majorX1 = document.querySelector('.user-vertex-x1-answer').value;
    const majorY1 = document.querySelector('.user-vertex-y1-answer').value;
    const majorX2 = document.querySelector('.user-vertex-x2-answer').value;
    const majorY2 = document.querySelector('.user-vertex-y2-answer').value;
    if(major = "x²" && majorX1 == majorAddDecimal && majorY1 == xMajorfinalVertY && majorX2 == majorSubDecimal && majorY2 == xMajorfinalVertY){
        answerEach.classList.add('correct');
        answerEach.classList.remove('wrong');
        correctSound();
    } else if(major = "y²" && majorX1 == yMajorfinalVertX && majorY1 == majorAddDecimal && majorX2 == yMajorfinalVertX && majorY2 == majorSubDecimal){
        answerEach.classList.add('correct');
        answerEach.classList.remove('wrong');
        correctSound();
    } else if(major = "x²" && radius < 0 && majorX1 == yMajorfinalVertX && majorY1 == majorAddDecimal && majorX2 == yMajorfinalVertX && majorY2 == majorSubDecimal){
        answerEach.classList.add('correct');
        answerEach.classList.remove('wrong');
        correctSound();
    } else if(major = "y²" && radius < 0 && majorX1 == majorAddDecimal && majorY1 == xMajorfinalVertY && majorX2 == majorSubDecimal && majorY2 == xMajorfinalVertY){
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
        showNextSection(".user-vertex-value", ".user-foci-value");
        document.querySelector(".vertex-container").style.display = "block";
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
    if(major = "x²" && focix1 == fociAddMajorDec && fociy1 == xMajorfinalVertY && focix2 == fociSubMajorDec && fociy2 == xMajorfinalVertY){
        answerEach.classList.add('correct');
        answerEach.classList.remove('wrong');
        correctSound();
    } else if(major = "y²" && focix1 == yMajorfinalVertX && fociy1 == fociAddMajorDec && focix2 == yMajorfinalVertX && fociy2 == fociSubMajorDec){
        answerEach.classList.add('correct');
        answerEach.classList.remove('wrong');
        correctSound();
    } else if(major = "x²" && radius < 0 && focix1 == yMajorfinalVertX && fociy1 == fociAddMajorDec && focix2 == yMajorfinalVertX && fociy2 == fociSubMajorDec){
        answerEach.classList.add('correct');
        answerEach.classList.remove('wrong');
        correctSound();
    } else if(major = "y²" && radius < 0 && focix1 == fociAddMajorDec && fociy1 == xMajorfinalVertY && focix2 == fociSubMajorDec && fociy2 == xMajorfinalVertY){
        answerEach.classList.add('correct');
        answerEach.classList.remove('wrong');
        correctSound();
    } else {
        answerEach.classList.add('wrong');
        answerEach.classList.remove('correct');
        wrongSound();
    }

    if(focix1 && fociy1 && focix2 && fociy2) {
        // Show the next section (orientation)
        showNextSection(".user-foci-value", ".user-asymp-value");
        document.querySelector(".foci-container").style.display = "block";
        answerEach.innerHTML = `Your Answer: (${focix1}, ${fociy1}), (${focix2}, ${fociy2})`; 
    } else {
        answerEach.innerHTML = 'Put your answers first.';
    }
};

document.querySelector(".submitBtn-asymp").addEventListener('click', checkAsymp);
function checkAsymp(e) {
    e.preventDefault();
    
    // Get values from the foci input fields
    const asympx = document.querySelector('.user-asympx-answer').value;
    const asympy = document.querySelector('.user-asympy-answer').value;
    const asympnume = document.querySelector('.user-asympnume-answer').value;
    const asympdeno = document.querySelector('.user-asympdeno-answer').value;

    const asympxSign = asympx > 0 ? "+" : "-";
    const asympySign = asympy > 0 ? "+" : "-";
    console.log(asympx, asympValueYMajor, asympy, asympValueXMajor,)
    console.log(asympnume, vertexOfBDec, asympdeno, vertexOfADec)
    if(major = "x²" && asympx == asympValueYMajor && asympy == asympValueXMajor && asympnume == vertexOfBDec && asympdeno == vertexOfADec){
        answerEach.classList.add('correct');
        answerEach.classList.remove('wrong');
        correctSound();
    } else if(major = "y²" && asympx == asympValueXMajor && asympy == asympValueYMajor && asympnume == vertexOfADec && asympdeno == vertexOfBDec){ 
        answerEach.classList.add('correct');
        answerEach.classList.remove('wrong');
        correctSound();
    } else if(major = "x²" && radius < 0 && asympx == asympValueXMajor && asympy == asympValueYMajor && asympnume == vertexOfADec && asympdeno == vertexOfBDec){
        answerEach.classList.add('correct');
        answerEach.classList.remove('wrong');
        correctSound();
    } else if(major = "y²" && radius < 0 && asympx == asympValueYMajor && asympy == asympValueXMajor && asympnume == vertexOfBDec && asympdeno == vertexOfADec){
        answerEach.classList.add('correct');
        answerEach.classList.remove('wrong');
        correctSound();
    } else {
        answerEach.classList.add('wrong');
        answerEach.classList.remove('correct');
        wrongSound();
    }
  
    if(major = "x²" && asympx && asympy && asympnume && asympdeno) {
        // Show the next section (orientation)
        showNextSection(".user-asymp-value", ".user-orrientation");
        document.querySelector(".asymp-container").style.display = "block";
            answerEach.innerHTML = `Your Answer: 
                y ${asympySign} ${Math.abs(asympy)} = &plusmn;
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mfrac>
                    <mi>${Math.abs(asympnume)}</mi>
                    <mi>${Math.abs(asympdeno)}</mi> 
                </mfrac>
                </math> 
                (x ${asympxSign} ${Math.abs(asympx)})`; 
    } 
    else if(major = "y²" && asympx && asympy && asympnume && asympdeno) {
        showNextSection(".user-asymp-value", ".user-orrientation");
        document.querySelector(".asymp-container").style.display = "block";
        answerEach.innerHTML = `Your Answer: 
            x ${asympxSign} ${Math.abs(asympx)} = &plusmn;
            <math xmlns="http://www.w3.org/1998/Math/MathML">
            <mfrac>
                <mi>${Math.abs(asympnume)}</mi>
                <mi>${Math.abs(asympdeno)}</mi> 
            </mfrac>
            </math> 
            (y ${asympySign} ${Math.abs(asympy)})`;
    } else if(major = "x²" && radius < 0 && asympx && asympy && asympnume && asympdeno){
        showNextSection(".user-asymp-value", ".user-orrientation");
        document.querySelector(".asymp-container").style.display = "block";
        answerEach.innerHTML = `Your Answer: 
            x ${asympxSign} ${Math.abs(asympx)} = &plusmn;
            <math xmlns="http://www.w3.org/1998/Math/MathML">
            <mfrac>
                <mi>${Math.abs(asympnume)}</mi>
                <mi>${Math.abs(asympdeno)}</mi> 
            </mfrac>
            </math> 
            (y ${asympySign} ${Math.abs(asympy)})`;
    } else if(major = "y²" && radius < 0 && asympx && asympy && asympnume && asympdeno){
        showNextSection(".user-asymp-value", ".user-orrientation");
        document.querySelector(".asymp-container").style.display = "block";
            answerEach.innerHTML = `Your Answer: 
            y ${asympySign} ${Math.abs(asympy)} = &plusmn;
            <math xmlns="http://www.w3.org/1998/Math/MathML">
            <mfrac>
                <mi>${Math.abs(asympnume)}</mi>
                <mi>${Math.abs(asympdeno)}</mi> 
        </mfrac>
        </math> 
        (x ${asympxSign} ${Math.abs(asympx)})`; 
    }
    else {
        answerEach.innerHTML = 'Put your answers first.';
    }
};

document.querySelector(".submitBtn-orrientation").addEventListener('click', checkOrri);
function checkOrri(e) {
    e.preventDefault(); 

    const userOpening = document.querySelector(".opening").value;
    answerEach.innerHTML = userOpening;
    graph.style.display = "block";

    const openingAnswer = opening.toLowerCase().replace(/\s+/g, '');
    const userOpeningAnswer = userOpening.toLowerCase().replace(/\s+/g, '');

    if(openingAnswer == userOpeningAnswer){
        answerEach.classList.add('correct');
        answerEach.classList.remove('wrong');
        correctSound();
    } else {
        wrongSound();
    }

    if(major = "x²" && userOpening) {
        document.querySelector(".orri-container").style.display = "block";
        answerEach.innerHTML = `Your Answer: ${userOpening}`;
    } else if(major = "y²" && userOpening){
        document.querySelector(".orri-container").style.display = "block";
        answerEach.innerHTML = `Your Answer: ${userOpening}`;
} else {
        answerEach.innerHTML = "Put your answer first.";
    }
};

//-----------
function ABC(majorFinalDeno, minorFinalDeno, radius){
    const graphAValue = document.querySelector(".graphAValue");
    const graphBValue = document.querySelector(".graphBValue");
    const graphCValue = document.querySelector(".graphCValue");
    const graphASqr = document.querySelector(".graphASqr");
    const graphBSqr = document.querySelector(".graphBSqr");
    const graphCSqr = document.querySelector(".graphCSqr");
    //ABC 
    const a2Value = Number.isInteger(Math.sqrt(majorFinalDeno)) ? Math.sqrt(majorFinalDeno) : Math.sqrt(majorFinalDeno).toFixed(2);
    const b2Value = Number.isInteger(Math.sqrt(minorFinalDeno)) ? Math.sqrt(minorFinalDeno) : Math.sqrt(minorFinalDeno).toFixed(2);
    const cValue = Number.isInteger((Math.pow(a2Value, 2) + Math.pow(b2Value, 2))) ? (Math.pow(a2Value, 2) + Math.pow(b2Value, 2)) : (Math.pow(a2Value, 2) + Math.pow(b2Value, 2)).toFixed(2);

    graphASqr.innerHTML = (radius > 0) ? majorFinalDeno : minorFinalDeno;
    graphBSqr.innerHTML = (radius > 0) ? minorFinalDeno : majorFinalDeno;
    graphCSqr.innerHTML = cValue; 
    graphAValue.innerHTML = (radius > 0) ? a2Value : b2Value;
    graphBValue.innerHTML = (radius > 0) ? b2Value : a2Value;
    graphCValue.innerHTML = Number.isInteger(Math.sqrt(cValue)) ? Math.sqrt(cValue) : Math.sqrt(cValue).toFixed(2);
}
//Vertices and foci and asymptote

let vertexOfADec, vertexOfBDec, majorAddDecimal, majorSubDecimal, fociAddMajorDec,
    fociSubMajorDec, asympValueXMajor, asympValueYMajor, xMajorfinalVertY, yMajorfinalVertX;
function parts(majorFinalDeno, minorFinalDeno, radius, majorCenter, minorCenter, major, minor){
    const vertexValue = document.querySelector(".vertexValue");
    const fociValue = document.querySelector(".fociValue");
    const asymp = document.querySelector(".asympValue");
    const vertexOfA = (radius > 0) ? Math.sqrt(majorFinalDeno) : Math.sqrt(minorFinalDeno);
    const vertexOfB = (radius > 0) ? Math.sqrt(minorFinalDeno) : Math.sqrt(majorFinalDeno);
    vertexOfADec = Number.isInteger(vertexOfA) ? vertexOfA : vertexOfA.toFixed(2);
    vertexOfBDec = Number.isInteger(vertexOfB) ? vertexOfB : vertexOfB.toFixed(2);
    const a2Value = Number.isInteger(Math.sqrt(majorFinalDeno)) ? Math.sqrt(majorFinalDeno) : Math.sqrt(majorFinalDeno).toFixed(2);
    const b2Value = Number.isInteger(Math.sqrt(minorFinalDeno)) ? Math.sqrt(minorFinalDeno) : Math.sqrt(minorFinalDeno).toFixed(2);
    const cValue = Number.isInteger((Math.pow(a2Value, 2) + Math.pow(b2Value, 2))) ? (Math.pow(a2Value, 2) + Math.pow(b2Value, 2)) : (Math.pow(a2Value, 2) + Math.pow(b2Value, 2)).toFixed(2);
    const vertexOfC = Math.sqrt(cValue);

    const majorSign = (majorCenter > 0) ? "+" : "-";
    const minorSign = (minorCenter > 0) ? "+" : "-";

    majorAddDecimal = Number.isInteger((majorCenter / -2) + vertexOfA) ? ((majorCenter / -2) + vertexOfA) : ((majorCenter / -2) + vertexOfA).toFixed(2);
    majorSubDecimal = Number.isInteger((majorCenter / -2) - vertexOfA) ? ((majorCenter / -2) - vertexOfA) : ((majorCenter / -2) - vertexOfA).toFixed(2);
    fociAddMajorDec = Number.isInteger((majorCenter / -2) + vertexOfC) ? ((majorCenter / -2) + vertexOfC) : ((majorCenter / -2) + vertexOfC).toFixed(2);
    fociSubMajorDec = Number.isInteger((majorCenter / -2) - vertexOfC) ? ((majorCenter / -2) - vertexOfC) : ((majorCenter / -2) - vertexOfC).toFixed(2);
    asympValueXMajor = Number.isInteger(minorCenter / 2) ? minorCenter / 2 :  (minorCenter / 2).toFixed(2);
    asympValueYMajor = Number.isInteger(majorCenter / 2) ? majorCenter / 2 :  (majorCenter / 2).toFixed(2);

    xMajorfinalVertY = minorCenter / -2;
    yMajorfinalVertX = minorCenter / -2;

    vertexValue.style.color = 'orange';
    fociValue.style.color = 'purple';
    asymp.style.color = 'red';
    if(major == "x²" && radius > 0){
        vertexValue.textContent = `(${majorAddDecimal}, ${xMajorfinalVertY}), (${majorSubDecimal}, ${xMajorfinalVertY})`;
        fociValue.textContent =  `(${fociAddMajorDec}, ${xMajorfinalVertY}), (${fociSubMajorDec}, ${xMajorfinalVertY})`;
        asymp.innerHTML = `y ${minorSign} ${Math.abs(asympValueXMajor)} = &plusmn;
        <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mfrac>
            <mi>${vertexOfBDec}</mi>
            <mi>${vertexOfADec}</mi> 
        </mfrac>
        </math> 
         (x ${majorSign} ${Math.abs(asympValueYMajor)})`;
    } else if(major == "y²" && radius > 0){
        vertexValue.textContent = `(${yMajorfinalVertX}, ${majorAddDecimal}), (${yMajorfinalVertX}, ${majorSubDecimal})`;
        fociValue.textContent = `(${yMajorfinalVertX}, ${fociAddMajorDec}), (${yMajorfinalVertX}, ${fociSubMajorDec})`;
        asymp.innerHTML = `y ${majorSign} ${Math.abs(asympValueYMajor)} = &plusmn; 
        <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mfrac>
            <mi>${vertexOfADec}</mi>
            <mi>${vertexOfBDec}</mi>
        </mfrac>
        </math> 
         (x ${minorSign} ${Math.abs(asympValueXMajor)})`;
    } else if(major == "x²" && radius < 0){
        vertexValue.textContent = `(${yMajorfinalVertX}, ${majorAddDecimal}), (${yMajorfinalVertX}, ${majorSubDecimal})`;
        fociValue.textContent = `(${yMajorfinalVertX}, ${fociAddMajorDec}), (${yMajorfinalVertX}, ${fociSubMajorDec})`;
        asymp.innerHTML = `y ${majorSign} ${Math.abs(asympValueYMajor)} = &plusmn; 
        <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mfrac>
            <mi>${vertexOfADec}</mi>
            <mi>${vertexOfBDec}</mi>
        </mfrac>
        </math> 
         (x ${minorSign} ${Math.abs(asympValueXMajor)})`;
    } else if(major == "y²" && radius < 0){
        vertexValue.textContent = `(${majorAddDecimal}, ${xMajorfinalVertY}), (${majorSubDecimal}, ${xMajorfinalVertY})`;
        fociValue.textContent =  `(${fociAddMajorDec}, ${xMajorfinalVertY}), (${fociSubMajorDec}, ${xMajorfinalVertY})`;
        asymp.innerHTML = `y ${minorSign} ${Math.abs(asympValueXMajor)} = &plusmn;
        <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mfrac>
            <mi>${vertexOfBDec}</mi>
            <mi>${vertexOfADec}</mi> 
        </mfrac>
        </math> 
         (x ${majorSign} ${Math.abs(asympValueYMajor)})`;
    }
   
}

function noneCoeff(A, B, C, D, E, major, minor, mjc, mnc, majorCenter, minorCenter, majorExpanded, minorExpanded, majorFinalDeno, minorFinalDeno){
    const step2Container = document.querySelector(".step2-container");
    const step3Container = document.querySelector(".step3-container");
    const step4Container = document.querySelector(".step4-container");
    const step5Container = document.querySelector(".step5-container");
    const step6Container = document.querySelector(".step6-container h1");

    let signs = ["+", "-"];
    const CSign = (C > 0) ? "+" : "-";
    const ESign = (E > 0) ? "+" : "-";
    const ANot1 = (A == 1) ? "" : A;

    if(C == 0 && D == 0){
    //Given
    const givenContainer = document.querySelector(".given");
    givenContainer.textContent = `${A}${major} ${B}${minor} ${ESign} ${Math.abs(E)} = 0`;
    //
    step1.textContent = `${A}${major} ${signs[1]} ${Math.abs(B)}${minor} = ${E / -1}`;
    step2Container.style.display = "none";
    step3Container.style.display = "none";
    step4Container.style.display = "none";
    step5Container.style.display = "none";
    step6Container.textContent = "STEP2: Divide both sides of the equation by the constant on the right side, then simplify.";
    //
    majorOut.textContent = A;
    majorIn.textContent = mjc;
    majorDeno.textContent = `${E / -1}`;

    minorOut.textContent = -B;
    minorIn.textContent = mnc;
    minorDeno.textContent = `${E / -1}`;

    constNume.textContent = `${E / -1}`;
    constDeno.textContent = `${E / -1}`;
    //
    finalMajorIn.textContent = mjc;
    finalMajorDeno.textContent = `${Math.abs(E / A)}`;

    finalMinorIn.textContent = mnc;
    finalMinorDeno.textContent = `${Math.abs(E / B)}`;
} else if(D == 0){
    const givenContainer = document.querySelector(".given");
    givenContainer.textContent = `${A}${major} ${B}${minor} ${CSign} ${Math.abs(C)} ${ESign} ${Math.abs(E)} = 0`;
    //
    step1.textContent = `${ANot1}${major} ${signs[1]} ${Math.abs(B)}${minor} ${CSign} ${Math.abs(C)} = ${-E}`;
    step2.textContent = `${ANot1} (${mjc} ${CSign} ${Math.abs(majorCenter)} + ${majorExpanded}) ${B}${minor} = ${-E} + ${majorExpanded}(${ANot1})`;
    step3.textContent = `${ANot1} (${mjc} ${CSign} ${Math.abs(majorCenter)} + ${majorExpanded}) ${B}${minor} = ${-E + (majorExpanded * A)}`;
    step4Container.style.display = "none";
    step5Container.style.display = "none";
    step6Container.textContent = "STEP4: Divide both sides of the equation by the constant on the right side, then simplify.";
    //
    majorOut.textContent = A;
    majorIn.textContent = `${mjc} ${CSign} ${Math.abs(majorCenter) / 2}`;
    majorDeno.textContent = `${(E / -1) + (majorExpanded * A)}`;

    minorOut.textContent = -B;
    minorIn.textContent = mnc;
    minorDeno.textContent = `${(E / -1) + (majorExpanded * A)}`;

    constNume.textContent = `${(E / -1) + (majorExpanded * A)}`;
    constDeno.textContent = `${(E / -1) + (majorExpanded * A)}`;
    //
    finalMajorIn.textContent = `${mjc} ${CSign} ${Math.abs(majorCenter) / 2}`;
    finalMajorDeno.textContent = `${Math.abs((-E + (majorExpanded * A)) / A)}`;

    finalMinorIn.textContent = mnc;
    finalMinorDeno.textContent = `${Math.abs((-E + (majorExpanded * A)) / B)}`;
 }
}

// For the Graph
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const scale = 20; // Number of pixels per unit
const width = canvas.width;
const height = canvas.height;
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Draw coordinate plane
function drawCoordinatePlane() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setLineDash([]);

    // Draw grid lines
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 1;

    // Draw arrows on the axes
    drawArrow(width, centerY);  // Arrow for the positive x-axis
    drawArrow(0, centerY, Math.PI);  // Arrow for the negative x-axis
    drawArrow(centerX, height, Math.PI / 2);  // Arrow for the positive y-axis
    drawArrow(centerX, 0, -Math.PI / 2);  // Arrow for the negative y-axis

    // Horizontal lines
    for (let y = 0; y <= canvas.height; y += scale) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();

        // Add Y-axis numbers
        const yPos = (centerY - y) / scale;
        if (y !== centerY) {
            ctx.fillStyle = 'black';
            ctx.font = '8px Arial';
            ctx.fillText(yPos, centerX + 5, y + 5);
        }
    }

    // Vertical lines
for (let x = 0; x <= canvas.width; x += scale) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();

    // Add X-axis numbers
    const xPos = (x - centerX) / scale;
    if (x !== centerX) {
        ctx.fillStyle = 'black';
        ctx.font = '8px Arial';
        ctx.fillText(xPos, x + 5, centerY - 5);
    }
}

    // For the axis
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;

    // X-axis
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(canvas.width, centerY);
    ctx.stroke();

    // Y-axis
    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, canvas.height);
    ctx.stroke();

    // For the origin
    ctx.fillStyle = 'black';
    ctx.font = '8px Arial';
    ctx.fillText('0', centerX + 5, centerY - 5);
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


function drawHyperbola(majorFinalDeno, minorFinalDeno, radius, major, majorCenter, minorCenter) {
    drawCoordinatePlane();
    let a = (radius > 0) ? Math.sqrt(majorFinalDeno) : Math.sqrt(minorFinalDeno);
    let b = (radius > 0) ? Math.sqrt(minorFinalDeno) : Math.sqrt(majorFinalDeno);
    let h = (major == "x²" && radius > 0) ? majorCenter / -2 : minorCenter / -2;
    let k = (major == "x²" && radius > 0) ? minorCenter / -2 : majorCenter / -2;

    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;

const arcRange = 30;  // For range of x and y

if (major == "x²" && radius > 0) {
// For drawing hyperbola
ctx.beginPath();
for (let x = h + a; x <= h + arcRange; x += 0.1) {
    const y = k + b * Math.sqrt((x - h) ** 2 / a ** 2 - 1);
    ctx.lineTo(centerX + x * scale, centerY - y * scale);
}
ctx.stroke();

ctx.beginPath();
for (let x = h + a; x <= h + arcRange; x += 0.1) {
    const y = k - b * Math.sqrt((x - h) ** 2 / a ** 2 - 1);
    ctx.lineTo(centerX + x * scale, centerY - y * scale);
}
ctx.stroke();

ctx.beginPath();
for (let x = h - a; x >= h - arcRange; x -= 0.1) {
    const y = k + b * Math.sqrt((x - h) ** 2 / a ** 2 - 1);
    ctx.lineTo(centerX + x * scale, centerY - y * scale);
}
ctx.stroke();

ctx.beginPath();
for (let x = h - a; x >= h - arcRange; x -= 0.1) {
    const y = k - b * Math.sqrt((x - h) ** 2 / a ** 2 - 1);
    ctx.lineTo(centerX + x * scale, centerY - y * scale);
}
ctx.stroke();

// Draw Asymptotes
ctx.strokeStyle = 'red';
ctx.setLineDash([5, 5]);
ctx.beginPath();
ctx.moveTo(centerX + (h - arcRange) * scale, centerY - (b / a) * arcRange * scale - k * scale);
ctx.lineTo(centerX + (h + arcRange) * scale, centerY + (b / a) * arcRange * scale - k * scale);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(centerX + (h - arcRange) * scale, centerY + (b / a) * arcRange * scale - k * scale);
ctx.lineTo(centerX + (h + arcRange) * scale, centerY - (b / a) * arcRange * scale - k * scale);
ctx.stroke();

// Draw center
ctx.fillStyle = "green"
ctx.beginPath();
ctx.arc(centerX + h * scale, centerY - k * scale, 5, 0, 2 * Math.PI);
ctx.fill();

// Draw vertices
ctx.fillStyle = 'orange';
ctx.beginPath();
ctx.arc(centerX + (h + a) * scale, centerY - k * scale, 5, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(centerX + (h - a) * scale, centerY - k * scale, 5, 0, 2 * Math.PI);
ctx.fill();

// Draw foci
const c = Math.sqrt(a ** 2 + b ** 2);
console.log(c)
ctx.fillStyle = 'purple';
ctx.beginPath();
ctx.arc(centerX + (h + c) * scale, centerY - k * scale, 5, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(centerX + (h - c) * scale, centerY - k * scale, 5, 0, 2 * Math.PI);
ctx.fill();

} else if(major == "y²" && radius > 0){
// Draw Hyperbola branches
ctx.beginPath();
for (let y = k + a; y <= k + arcRange; y += 0.1) {
    const x = h + b * Math.sqrt((y - k) ** 2 / a ** 2 - 1);
    ctx.lineTo(centerX + x * scale, centerY - y * scale);
}
ctx.stroke();

ctx.beginPath();
for (let y = k + a; y <= k + arcRange; y += 0.1) {
    const x = h - b * Math.sqrt((y - k) ** 2 / a ** 2 - 1);
    ctx.lineTo(centerX + x * scale, centerY - y * scale);
}
ctx.stroke();

ctx.beginPath();
for (let y = k - a; y >= k - arcRange; y -= 0.1) {
    const x = h + b * Math.sqrt((y - k) ** 2 / a ** 2 - 1);
    ctx.lineTo(centerX + x * scale, centerY - y * scale);
}
ctx.stroke();

ctx.beginPath();
for (let y = k - a; y >= k - arcRange; y -= 0.1) {
    const x = h - b * Math.sqrt((y - k) ** 2 / a ** 2 - 1);
    ctx.lineTo(centerX + x * scale, centerY - y * scale);
}
ctx.stroke();

// Draw Asymptotes
ctx.strokeStyle = 'red';
ctx.setLineDash([5, 5]);
ctx.beginPath();
ctx.moveTo(centerX + (h - arcRange) * scale, centerY - (a / b) * arcRange * scale - k * scale);
ctx.lineTo(centerX + (h + arcRange) * scale, centerY + (a / b) * arcRange * scale - k * scale);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(centerX + (h - arcRange) * scale, centerY + (a / b) * arcRange * scale - k * scale);
ctx.lineTo(centerX + (h + arcRange) * scale, centerY - (a / b) * arcRange * scale - k * scale);
ctx.stroke();

// Draw center
ctx.fillStyle = 'green';
ctx.beginPath();
ctx.arc(centerX + h * scale, centerY - k * scale, 5, 0, 2 * Math.PI);
ctx.fill();

// Draw vertices
ctx.fillStyle = 'orange';
ctx.beginPath();
ctx.arc(centerX + h * scale, centerY - (k + a) * scale, 5, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(centerX + h * scale, centerY - (k - a) * scale, 5, 0, 2 * Math.PI);
ctx.fill();

// Draw foci
const c = Math.sqrt(a ** 2 + b ** 2);
ctx.fillStyle = 'purple';
ctx.beginPath();
ctx.arc(centerX + h * scale, centerY - (k + c) * scale, 5, 0, 2 * Math.PI);
ctx.fill();
 
ctx.beginPath();
ctx.arc(centerX + h * scale, centerY - (k - c) * scale, 5, 0, 2 * Math.PI);
ctx.fill();
} else if(major == "x²" && radius < 0){
    ctx.beginPath();
for (let y = k + a; y <= k + arcRange; y += 0.1) {
    const x = h + b * Math.sqrt((y - k) ** 2 / a ** 2 - 1);
    ctx.lineTo(centerX + x * scale, centerY - y * scale);
}
ctx.stroke();

ctx.beginPath();
for (let y = k + a; y <= k + arcRange; y += 0.1) {
    const x = h - b * Math.sqrt((y - k) ** 2 / a ** 2 - 1);
    ctx.lineTo(centerX + x * scale, centerY - y * scale);
}
ctx.stroke();

ctx.beginPath();
for (let y = k - a; y >= k - arcRange; y -= 0.1) {
    const x = h + b * Math.sqrt((y - k) ** 2 / a ** 2 - 1);
    ctx.lineTo(centerX + x * scale, centerY - y * scale);
}
ctx.stroke();

ctx.beginPath();
for (let y = k - a; y >= k - arcRange; y -= 0.1) {
    const x = h - b * Math.sqrt((y - k) ** 2 / a ** 2 - 1);
    ctx.lineTo(centerX + x * scale, centerY - y * scale);
}
ctx.stroke();

// Draw Asymptotes
ctx.strokeStyle = 'red';
ctx.setLineDash([5, 5]);
ctx.beginPath();
ctx.moveTo(centerX + (h - arcRange) * scale, centerY - (a / b) * arcRange * scale - k * scale);
ctx.lineTo(centerX + (h + arcRange) * scale, centerY + (a / b) * arcRange * scale - k * scale);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(centerX + (h - arcRange) * scale, centerY + (a / b) * arcRange * scale - k * scale);
ctx.lineTo(centerX + (h + arcRange) * scale, centerY - (a / b) * arcRange * scale - k * scale);
ctx.stroke();

// Draw center
ctx.fillStyle = 'green';
ctx.beginPath();
ctx.arc(centerX + h * scale, centerY - k * scale, 5, 0, 2 * Math.PI);
ctx.fill();

// Draw vertices
ctx.fillStyle = 'orange';
ctx.beginPath();
ctx.arc(centerX + h * scale, centerY - (k + a) * scale, 5, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(centerX + h * scale, centerY - (k - a) * scale, 5, 0, 2 * Math.PI);
ctx.fill();

// Draw foci
const c = Math.sqrt(a ** 2 + b ** 2);
ctx.fillStyle = 'purple';
ctx.beginPath();
ctx.arc(centerX + h * scale, centerY - (k + c) * scale, 5, 0, 2 * Math.PI);
ctx.fill();
 
ctx.beginPath();
ctx.arc(centerX + h * scale, centerY - (k - c) * scale, 5, 0, 2 * Math.PI);
ctx.fill();
} else if(major == "y²" && radius < 0){
// For drawing hyperbola
ctx.beginPath();
for (let x = h + a; x <= h + arcRange; x += 0.1) {
    const y = k + b * Math.sqrt((x - h) ** 2 / a ** 2 - 1);
    ctx.lineTo(centerX + x * scale, centerY - y * scale);
}
ctx.stroke();

ctx.beginPath();
for (let x = h + a; x <= h + arcRange; x += 0.1) {
    const y = k - b * Math.sqrt((x - h) ** 2 / a ** 2 - 1);
    ctx.lineTo(centerX + x * scale, centerY - y * scale);
}
ctx.stroke();

ctx.beginPath();
for (let x = h - a; x >= h - arcRange; x -= 0.1) {
    const y = k + b * Math.sqrt((x - h) ** 2 / a ** 2 - 1);
    ctx.lineTo(centerX + x * scale, centerY - y * scale);
}
ctx.stroke();

ctx.beginPath();
for (let x = h - a; x >= h - arcRange; x -= 0.1) {
    const y = k - b * Math.sqrt((x - h) ** 2 / a ** 2 - 1);
    ctx.lineTo(centerX + x * scale, centerY - y * scale);
}
ctx.stroke();

// Draw Asymptotes
ctx.strokeStyle = 'red';
ctx.setLineDash([5, 5]);
ctx.beginPath();
ctx.moveTo(centerX + (h - arcRange) * scale, centerY - (b / a) * arcRange * scale - k * scale);
ctx.lineTo(centerX + (h + arcRange) * scale, centerY + (b / a) * arcRange * scale - k * scale);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(centerX + (h - arcRange) * scale, centerY + (b / a) * arcRange * scale - k * scale);
ctx.lineTo(centerX + (h + arcRange) * scale, centerY - (b / a) * arcRange * scale - k * scale);
ctx.stroke();

// Draw center
ctx.fillStyle = "green"
ctx.beginPath();
ctx.arc(centerX + h * scale, centerY - k * scale, 5, 0, 2 * Math.PI);
ctx.fill();

// Draw vertices
ctx.fillStyle = 'orange';
ctx.beginPath();
ctx.arc(centerX + (h + a) * scale, centerY - k * scale, 5, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(centerX + (h - a) * scale, centerY - k * scale, 5, 0, 2 * Math.PI);
ctx.fill();

// Draw foci
const c = Math.sqrt(a ** 2 + b ** 2);
console.log(c)
ctx.fillStyle = 'purple';
ctx.beginPath();
ctx.arc(centerX + (h + c) * scale, centerY - k * scale, 5, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(centerX + (h - c) * scale, centerY - k * scale, 5, 0, 2 * Math.PI);
ctx.fill();
}
}
