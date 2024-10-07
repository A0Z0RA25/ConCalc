const step1 = document.querySelector(".step1");
const step2 = document.querySelector(".step2");
const step3 = document.querySelector(".step3");
const step4 = document.querySelector(".step4");
const finalAnswer = document.querySelector(".finalAnswer");
const fracContainer = document.querySelector(".frac-container");
const finalh1 = document.querySelector(".finalH1");
const givenMajor = document.querySelector(".givenMajor");
const givenMajorVar = document.querySelector(".givenMajorVar");
const givenMajorCoefVar = document.querySelector(".givenMajorCoefVar");
const givenMajorCoef = document.querySelector(".givenMajorCoef");
const givenMinor = document.querySelector(".givenMinor");
const givenMinorVar = document.querySelector(".givenMinorVar");
const givenConst = document.querySelector(".givenConst"); 
const sign1 = document.querySelector(".sign1");
const sign2 = document.querySelector(".sign2");
const sign3 = document.querySelector(".sign3");
const allSteps = document.querySelector(".all-steps");

const step1Container = document.querySelector(".step1-container");
const step2Container = document.querySelector(".step2-container");
const step3Container = document.querySelector(".step3-container");
const step4Container = document.querySelector(".step4-container");
const step4h1 = document.querySelector(".step4-container h1");
const graphContainer = document.querySelector(".parabolaGF-answer-container .graphValue");
const graph = document.querySelector(".graph");
const userContainer = document.querySelector(".users-answer-container");
const partsContainer = document.querySelector(".parts-container") 

const majorOut = document.querySelector(".majorOut");
const majorIn = document.querySelector(".majorIn");
const minorOut = document.querySelector(".minorOut");
const minorIn = document.querySelector(".minorIn");
const majorDeno = document.querySelector(".majorDeno");
const minorDeno = document.querySelector(".minorDeno");

const finalMajorIn = document.querySelector(".finalMajorIn");
const finalMinorIn = document.querySelector(".finalMinorIn");
const finalMinorOut = document.querySelector(".finalMinorOut");
const finalMinorDeno = document.querySelector(".finalMinorDeno");
const parabolaAnswerContainer = document.querySelector(".parabolaGF-answer-container");

// Event listeners set up initially
document.querySelector(".step1Btn").addEventListener('click', showStep1);
document.querySelector(".step2Btn").addEventListener('click', showStep2);
document.querySelector(".step3Btn").addEventListener('click', showStep3);
document.querySelector(".step4Btn").addEventListener('click', showStep4);

// Function to show start step
function showStart() {
    step1.style.display = "none";
    step1Container.style.display = "block";
    document.querySelector(".step1Btn").style.display = "block";
}

// Function to show Step 1
function showStep1() {
    step1.style.display = "block";
    step2Container.style.display = "block";
    document.querySelector(".step1Btn").style.display = "none";
    document.querySelector(".step2Btn").style.display = "block";
}

// Function to show Step 2
function showStep2() {
    step2.style.display = "block";
    step3Container.style.display = "block";
    document.querySelector(".step2Btn").style.display = "none";
    document.querySelector(".step3Btn").style.display = "block";
}

// Function to show Step 3
function showStep3() {
    step3.style.display = "block";
    step4Container.style.visibility = "visible";
    step4.style.display = "none";
    document.querySelector(".step3Btn").style.display = "none";
    document.querySelector(".step4Btn").style.display = "block";
    fracContainer.style.display = "none";
    graphContainer.style.display = "none";
    finalAnswer.style.display = "none";
    step3.classList.remove('finalAnswerBgColor');
    step3.classList.add('normalBgColor');
}

// Function to show Step 4 and trigger confetti
function showStep4() {
    step4.style.display = "block";
    step4Container.style.display = "block";
    graphContainer.style.display = "block";
    graph.style.display = "none";
    step4.classList.add("finalAnswerBgColor");
    finalh1.innerHTML = "Final Answer:";
    userContainer.style.display = "block";
    partsContainer.style.display = "block";
    document.querySelector(".step3Btn").style.display = "none";
    document.querySelector(".step4Btn").style.display = "none";
    confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 }
    });
}

// Function to show answers based on condition
function showAnswers(a) {
    showStart();
    
    if (a > 1) {
        step4Container.style.display = "block";
        userContainer.style.display = "none";
        document.querySelector(".step3Btn").addEventListener('click', () => {
            step4.style.display = "none";
            fracContainer.style.display = "none";
            finalAnswer.style.display = "none";
            graphContainer.style.display = "none";
            step3.classList.remove('finalAnswerBgColor');
            step3.classList.add('normalBgColor');
            document.querySelector(".step3Btn").style.display = "none";
        });
        document.querySelector(".step4Btn").addEventListener('click', () => {
            graphContainer.innerHTML = "Sorry, we can't provide the parts and graph for this equation. The Graph and Parts only appear if the value of a is 1.(If a problem or error occurs, try refreshing the page)";
            graph.style.display = "none";
            step4.style.display = "none";
            fracContainer.style.display = "block";
            finalAnswer.style.display = "block";
            document.querySelector('.finalAnswer math').classList.add('finalAnswerBgColor');
            document.querySelector(".step4Btn").style.display = "none";
        });
    } else {
        document.querySelector(".step1Btn").addEventListener('click', () => {
            showStep1();
        });
        document.querySelector(".step2Btn").addEventListener('click', () => {
            showStep2();
        });
        document.querySelector(".step3Btn").addEventListener('click', () => {
            showStep3();
            step4.classList.remove('finalAnswerBgColor');
        });
        document.querySelector(".step4Btn").addEventListener('click', () => {
            showStep4();
            userContainer.style.display = "block";
        });
    }
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

let major, a;
function transform() {
    allSteps.style.display = "none"; 
    userContainer.style.display = "none";
    partsContainer.style.display = "none";
    const reminderContainer = document.querySelector(".reminderContainer");
    reminderContainer.style.display = "block";
    
    document.getElementById('showMessageBtn').addEventListener('click', function() {
        reminderContainer.style.display = "none";
        allSteps.style.display = "block";
        startSound();
    });
    document.querySelector(".step1Btn").style.display = "block";
    step1.style.display = "none";
    step2.style.display = "none";
    step3.style.display = "none";
    step4.style.display = "none";
    step2Container.style.display = "none";
    step3Container.style.display = "none";
    step4Container.style.visibility = "hidden";
    graphContainer.style.display = "none";
    graph.style.display = "none";
    fracContainer.style.display = "none";
    finalAnswer.style.display = "none";
    
    finalh1.innerHTML = "";

    const a = parseFloat(document.getElementById('Ax').value);
    const xvalue = parseFloat(document.getElementById('coeffXMajor').value);
    const yvalue = parseFloat(document.getElementById('coeffYMinor').value);
    const constant = parseFloat(document.getElementById('constantx').value);
    major = document.querySelector(".major").value;
    const minor = document.querySelector(".minor").value;
    const com = document.querySelector(".com").value;

    if(isNaN(a, xvalue,yvalue,constant)){
       parabolaAnswerContainer.style.visibility = "hidden"; 
    } else {
        parabolaAnswerContainer.style.visibility = "visible";
    }

    //Given
    sign1.innerHTML = (xvalue > 0) ? "+" : "-";
    sign2.innerHTML = (yvalue > 0) ? "+" : "-";
    sign3.innerHTML = (constant > 0) ? "+" : "-";
    givenMajor.textContent = (a == 1) ? "" : a;
    givenMajorVar.textContent = major;
    givenMajorCoef.textContent = (xvalue > 0) ? xvalue : xvalue / -1;
    givenMajorCoefVar.textContent = com;
    givenMinor.textContent = (yvalue > 0) ? yvalue : yvalue / -1;
    givenMinorVar.textContent = minor;
    givenConst.textContent = (constant > 0) ? constant : constant / -1;

    // if a is 1
    const xConst = Math.pow(xvalue / 2, 2);
    // if a is greaterthan 1
    const divideCenter = xvalue / a;
    const divideConstant = Math.pow(divideCenter / 2, 2);
    // constant
    const fconst = (constant / -1) + xConst;
    const finalK = (fconst == 0) ? "" : fconst;

    const ConstNotZero = (constant / -1) + divideConstant * a;
    const constNotZeroSign = (ConstNotZero > 0) ? "+" : "-";
    //Parts of graph
    parts(a,xvalue, yvalue, major, ConstNotZero);
    drawParabola(a, xvalue, yvalue, major, ConstNotZero);
    initiate();
    //SIgns
    const majorCenterSign = divideCenter > 0 ? "+" : "-";
    const majorSign = (xvalue > 0) ? "+" : "-";
    const minorSign = yvalue > 0 ? "-" : "+";
    const constantSign = constant > 0 ? "-" : "+";
    let step3ConstSign = fconst > 0 ? "+" : "-";
    let finalConstSign = yvalue < 0 && finalK > 0 || finalK < 0 && yvalue > 0 ? "+" : "-";

    let finalFrac = Number.isInteger(finalK / yvalue) ? Math.abs(finalK / yvalue) : `
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mfrac>
    <mi>${Math.abs(finalK)}</mi>
    <mi>${Math.abs(yvalue)}</mi>
  </mfrac>
</math> 
`;

if(fconst == 0){
    step3.classList.add('finalAnswerBgColor');
    step3.classList.remove('normalBgColor');
    finalConstSign = " ";
    finalFrac = " ";
} 

    //IF A is 1
    if(a == 1 && xvalue !== 0 && yvalue !== 0){
      finalAnswer.style.display = "none";
      fracContainer.style.display = "none";
      step4.style.display = "block";
      document.querySelector(".step3Btn").addEventListener('click', () => {
        graphContainer.style.display = "block";
        step3.classList.add('finalAnswerBgColor');
      });
      
      // ALL POSITIVE
           step1.innerHTML = `${major} ${majorSign} ${Math.abs(xvalue)}${com} = ${yvalue / -1}${minor} ${constantSign} ${Math.abs(constant)}`;  
           step2.innerHTML = `${major} ${majorSign} ${Math.abs(xvalue)}${com} + ${xConst} = ${yvalue / -1}${minor} ${constantSign} ${Math.abs(constant)} + ${xConst}`;
           step3.innerHTML = `(${com} ${majorSign} ${Math.abs(xvalue / 2)})² = ${yvalue / -1}${minor} ${step3ConstSign} ${Math.abs(finalK)}`; 
           step4.innerHTML = `(${com} ${majorSign} ${Math.abs(xvalue / 2)})² = ${yvalue / -1}(${minor} ${finalConstSign} ${finalFrac})`;  
    } 
    else if(a > 1){
         step3.classList.remove('finalAnswerBgColor');
         step3.classList.add('normalBgColor');
         step4.style.display = "none";
      // All positive
         step1.innerHTML = `${a}${major} ${majorSign} ${Math.abs(xvalue)}${com} = ${yvalue / -1}${minor} ${constantSign} ${Math.abs(constant)}`; 
         step2.innerHTML = `${a} (${major} ${majorCenterSign} ${Math.abs(divideCenter)}${com} + ${divideConstant}) = ${yvalue / -1}${minor} ${constantSign} ${Math.abs(constant)} + ${divideConstant} (${a})`;
         step3.innerHTML = `${a} (${major} ${majorCenterSign} ${Math.abs(divideCenter)}${com} + ${divideConstant}) = ${yvalue / -1}${minor} ${constNotZeroSign} ${Math.abs(ConstNotZero)}`;
         // FRACTION
         fracContainer.innerHTML = `
         <math xmlns="http://www.w3.org/1998/Math/MathML">
    <msup>
    <mrow>
    <mn>${a}</mn>
    <mo>(</mo>
    <mi>${com}</mi>
    <mo>${majorCenterSign}</mo>
    <mn>${Math.abs(divideCenter / 2)}</mn>
    <mo>)</mo>
    </mrow>
        <mn>2</mn>
    </msup>

    <mo>=</mo>

    <mfrac>
        <mn>${yvalue / -1}</mn>
        <mn>${a}</mn>
    </mfrac>

    <mo>(</mo>
    <mi>${minor}</mi>
    <mo>+</mo>
    <mfrac>
        <mn>${Math.abs(ConstNotZero)}</mn>
        <mn>${Math.abs(yvalue)}</mn>
    </mfrac>
    <mo>)</mo>
</math>
`;
         // FINAL
         finalAnswer.innerHTML = `
         <math xmlns="http://www.w3.org/1998/Math/MathML">
        <msup>
            <mrow>
            <mo>(</mo>
            <mi>${com}</mi>
            <mo>${majorSign}</mo>
            <mn>${Math.abs(divideCenter / 2)}</mn>
            <mo>)</mo>
            </mrow>
            <mn>2</mn> 
        </msup>

        <mo>=</mo>

        <mfrac>
            <mn>${yvalue / -1}</mn>
            <mn>${a}</mn>
        </mfrac>

        <mo>(</mo>
        <mi>${minor}</mi>
        <mo>+</mo>
        <mfrac>
            <mn>${Math.abs(ConstNotZero)}</mn>
            <mn>${Math.abs(yvalue)}</mn>
        </mfrac>
        <mo>)</mo>
        </math>
`;
    }
    else if(xvalue == 0){
        const coeffMinorSign = (yvalue > 0) ? "+" : "-";
        const constantSign = (constant > 0) ? "+" : "-";
        const minorOppSign = (yvalue > 0) ? "-" : "+";
        const constantOppSign = (constant > 0) ? "+" : "-";
        const finalConstSign = (yvalue > 0 && constant > 0 || yvalue < 0 && constant < 0) ? "+" : "-";
     
        //Given
        sign1.textContent = (xvalue > 0) ? "" : "";
        sign2.textContent = (yvalue > 0) ? "+" : "-";
        sign3.textContent = (constant > 0) ? "+" : "-";
        givenMajor.textContent = (a == 1) ? "" : a;
        givenMajorVar.textContent = major;
        givenMajorCoef.textContent = (xvalue > 0) ? "" : "";
        givenMajorCoefVar.textContent = "";
        givenMinor.textContent = (yvalue > 0) ? yvalue : yvalue / -1;
        givenMinorVar.textContent = minor;
        givenConst.textContent = (constant > 0) ? constant : constant / -1;
     
        step1.innerHTML = `${major} ${coeffMinorSign} ${Math.abs(yvalue)}${minor} ${constantSign} ${Math.abs(constant)} = 0`;
        step2.innerHTML = `${major} = ${minorOppSign}${Math.abs(yvalue)}${minor} ${constantOppSign} ${Math.abs(constant)}`;
        step3.innerHTML = `${major} = ${minorOppSign}${Math.abs(yvalue)} (${minor} ${finalConstSign} ${Math.abs((constant / -1) / (yvalue / -1))})`;
        step4Container.style.display = "none";
        finalAnswer.style.display = "none";
        fracContainer.style.display = "none";
    }
    showAnswers(a);
}

//-------
//user answer
const answerEach = document.querySelector(".answer-each-parts");

function initiate() {
    hideAllSections();
    document.querySelector(".user-center-value").style.display = "block"; 
    answerEach.classList.remove('wrong', 'correct');
};
function hideAllSections() {
    document.querySelector(".user-latus-value").style.display = "none";
    document.querySelector(".user-foci-value").style.display = "none";
    document.querySelector(".user-directrix-value").style.display = "none";
    document.querySelector(".user-axis-value").style.display = "none";
    //document.querySelector(".user-orrientation").style.display = "none";
    document.querySelector(".center-container").style.display = "none";
    document.querySelector(".focus-container").style.display = "none";
    document.querySelector(".directrix-container").style.display = "none"; 
    document.querySelector(".axis-container").style.display = "none";
    document.querySelector(".latus-container").style.display = "none";
    answerEach.innerHTML = '';

    document.querySelector('.user-x-answer').value = '';
    document.querySelector('.user-y-answer').value = '';

    document.querySelector('.user-foci-x-answer').value = '';
    document.querySelector('.user-foci-y-answer').value = '';

    document.querySelector('.user-directrix-answer').value = '';

    document.querySelector('.user-axis-answer').value = '';

    document.querySelector('.user-latus-x1-answer').value = '';
    document.querySelector('.user-latus-y1-answer').value = '';
    document.querySelector('.user-latus-x2-answer').value = '';
    document.querySelector('.user-latus-y2-answer').value = '';

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
    
    if(major = "x²" && xMajorfinalX == userX && xMajorFinalY == userY){
        answerEach.classList.add('correct');
        correctSound();
    } else if (major = "y²" && xMajorFinalY == userX && xMajorfinalX == userY){
        answerEach.classList.add('correct');
        correctSound();
    } else {
        answerEach.classList.add('wrong');
        wrongSound();
    }

    if(userX && userY) {
        // Show the next section (minor vertex)
        showNextSection(".user-center-value", ".user-foci-value");
        document.querySelector(".center-container").style.display = "block";
        answerEach.innerHTML = `Your Answer: (${userX}, ${userY})`;
        
    } else {
        answerEach.innerHTML = "Put your answer first.";
    }
};

document.querySelector(".submitBtn-foci").addEventListener('click', checkFoci);
function checkFoci(e) {
    e.preventDefault();
    
    // Get values from the center input fields
    const focix = document.querySelector('.user-foci-x-answer').value;
    const fociy = document.querySelector('.user-foci-y-answer').value;
console.log(xoryMajor, xMajorFinalFocusXY)
    if(major = "x²" && focix == xoryMajor && fociy == xMajorFinalFocusXY){
        answerEach.classList.add('correct');
        answerEach.classList.remove('wrong');
        correctSound();
    } else if(major = "y²" && focix == xMajorFinalFocusXY  && fociy == xoryMajor){
        answerEach.classList.add('correct');
        answerEach.classList.remove('wrong');
        correctSound();
    } else {
        answerEach.classList.add('wrong');
        wrongSound();
    }
    
    if(focix && fociy) {
        // Show the next section (minor vertex)
        showNextSection(".user-foci-value", ".user-directrix-value");
        document.querySelector(".focus-container").style.display = "block";
        answerEach.innerHTML = `Your Answer: (${focix}, ${fociy})`;
        
    } else {
        answerEach.innerHTML = "Put your answer first.";
    }
};

document.querySelector(".submitBtn-directrix").addEventListener('click', checkDirectrix);
function checkDirectrix(e) {
    e.preventDefault();
    
    // Get values from the center input fields
    const direc = document.querySelector('.user-directrix-answer').value;

    if(direc == xMajorFinalDirec){
        answerEach.classList.add('correct');
        answerEach.classList.remove('wrong');
        correctSound();
    }  else {
        answerEach.classList.add('wrong');
        wrongSound();
    }
    
    if(direc) {
        // Show the next section (minor vertex)
        showNextSection(".user-directrix-value", ".user-axis-value");
        document.querySelector(".directrix-container").style.display = "block";
        answerEach.innerHTML = `Your Answer: ${direc}`;
        
    } else {
        answerEach.innerHTML = "Put your answer first.";
    }
};

document.querySelector(".submitBtn-axis").addEventListener('click', checkAxis);
function checkAxis(e) {
    e.preventDefault();
    
    // Get values from the center input fields
    const axis = document.querySelector('.user-axis-answer').value;

    if(axis == xoryMajor){
        answerEach.classList.add('correct');
        answerEach.classList.remove('wrong');
        correctSound();
    }  else {
        answerEach.classList.add('wrong');
        wrongSound();
    }
    
    if(axis) {
        // Show the next section (minor vertex)
        showNextSection(".user-axis-value", ".user-latus-value");
        document.querySelector(".axis-container").style.display = "block";
        answerEach.innerHTML = `Your Answer: ${axis}`;
        
    } else {
        answerEach.innerHTML = "Put your answer first.";
    }
};

document.querySelector(".submitBtn-latus").addEventListener('click', checkLatus);
function checkLatus(e) {
    e.preventDefault();

    
    if(a > 1){
        graph.style.display = "none";
    } else {
        graph.style.display = "block";
    }
    // Get values from the center input fields
    const latusx1 = document.querySelector('.user-latus-x1-answer').value;
    const latusy1 = document.querySelector('.user-latus-y1-answer').value;
    const latusx2 = document.querySelector('.user-latus-x2-answer').value;
    const latusy2 = document.querySelector('.user-latus-y2-answer').value;

    if(major = "x²" && latusx1 == xMajorFinalLatusX1 && latusy1 == xMajorFinalLatusY1 && latusx2 == xMajorFinalLatusX2 && latusy2 == xMajorFinalLatusY2){
        answerEach.classList.add('correct');
        answerEach.classList.remove('wrong');
        correctSound();
    } else if(major = "y²" && latusx1 == xMajorFinalLatusY1 && latusy1 == xMajorFinalLatusX1 && latusx2 == xMajorFinalLatusY2 && latusy2 == xMajorFinalLatusX2){
        answerEach.classList.add('correct');
        answerEach.classList.remove('wrong');
        correctSound();
    } else {
        answerEach.classList.add('wrong');
        wrongSound();
    }
    
    if(latusx1 && latusy1 && latusx2 && latusy2) {
        // Show the next section (minor vertex)
        document.querySelector(".latus-container").style.display = "block";
        answerEach.innerHTML = `Your Answer: (${latusx1}, ${latusy1}), (${latusx2}, ${latusy2})`;
        
    } else {
        answerEach.innerHTML = "Put your answer first.";
    }
};

//Parts of Graph
let xoryMajor, xoryMinor, xMajorfinalX, xMajorFinalDirec, xMajorFinalFocusXY, xMajorFinalLatusX1, 
    xMajorFinalLatusY1, xMajorFinalLatusX2, xMajorFinalLatusY2, xMajorFinalY;
function parts(a, xvalue, yvalue, major, ConstNotZero){
   const center = document.querySelector(".centerValue");
   const focus = document.querySelector(".fociValue");
   const direc = document.querySelector(".direcValue");
   const axis = document.querySelector(".axisValue");
   const latus = document.querySelector(".latusValue");

     //center
    xoryMajor = (xvalue == 1) ? 0 : xvalue / -2;
    xoryMinor = (ConstNotZero == 0) ? 0 :  ConstNotZero / yvalue ;
    xMajorFinalY = Number.isInteger(xoryMinor) ? xoryMinor : xoryMinor.toFixed(2);
    xMajorfinalX = Number.isInteger(xoryMajor / a) ? xoryMajor / a : (xoryMajor / a).toFixed(2);
    xMajorFinalFocusXY = Number.isInteger(xoryMinor + yvalue / -4) ? xoryMinor + yvalue / -4 : (xoryMinor + yvalue / -4).toFixed(2);
    xMajorFinalDirec = Number.isInteger(xoryMinor + yvalue / 4) ? xoryMinor + yvalue / 4 : (xoryMinor + yvalue / 4).toFixed(2);
    xMajorFinalLatusX1 = Number.isInteger(xoryMajor + 2 * (yvalue / -4)) ? xoryMajor + 2 * (yvalue / -4) : (xoryMajor + 2 * (yvalue / -4)).toFixed(2);
    xMajorFinalLatusY1 = Number.isInteger(xoryMinor + yvalue / -4) ? xoryMinor + yvalue / -4 : (xoryMinor + yvalue / -4).toFixed(2);
    xMajorFinalLatusX2 = Number.isInteger(xoryMajor - 2 * (yvalue / -4)) ? xoryMajor - 2 * (yvalue / -4) : (xoryMajor - 2 * (yvalue / -4)).toFixed(2);
    xMajorFinalLatusY2 = Number.isInteger(xoryMinor + yvalue / -4) ? xoryMinor + yvalue / -4 : (xoryMinor + yvalue / -4).toFixed(2);

    const centerGraph = (major == "x²") ? `(${xMajorfinalX}, ${xMajorFinalY})` : `(${xMajorFinalY}, ${xMajorfinalX})`;
    //focus
    const focusValue = (major == "x²") ? `(${xoryMajor}, ${xMajorFinalFocusXY})` : `(${xMajorFinalFocusXY}, ${xoryMajor})`;
    //directrix
    const direcXOrY = (major == "x²") ? `y = ${xMajorFinalDirec}` : `x = ${xMajorFinalDirec}`;
    //axis of symmetry
    const axisXOrY = (major == "x²") ? `x = ${xoryMajor}` : `y = ${xoryMajor}`;
    //latus rectum
    const latusValue = (major == "x²") ? `(${xMajorFinalLatusX1}, ${xMajorFinalLatusY1}), (${xMajorFinalLatusX2}, ${xMajorFinalLatusY2})` 
        : `(${xMajorFinalLatusY1}, ${xMajorFinalLatusX1}), (${xMajorFinalLatusY2}, ${xMajorFinalLatusX2})`;

    center.textContent = centerGraph;
    center.style.color = "violet";
    focus.textContent = focusValue;
    focus.style.color = "blue";
    direc.textContent = direcXOrY;
    direc.style.color = "red";
    axis.textContent = axisXOrY;
    axis.style.color = "green";
    latus.textContent = latusValue; 
    latus.style.color = "orange";
};

// Function to plot a parabola
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Scale factor in pixels per unit
const scale = 20;

// Function to draw the coordinate plane with scaling
function drawCoordinatePlane() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setLineDash([]);

    // Draw grid lines
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 1;

    // Horizontal grid lines and y-axis labels
    for (let y = 0; y <= canvas.height; y += scale) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();

        // Add y-axis numbers
        let label = ((canvas.height / 2 - y) / scale);
        if (label != 0) {  // Skip the origin (0,0) label
            ctx.fillText(label, canvas.width / 2 + 5, y + 5);
        }
    }

    // Vertical grid lines and x-axis labels
    for (let x = 0; x <= canvas.width; x += scale) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();

        // Add x-axis numbers
        let label = ((x - canvas.width / 2) / scale);
        if (label != 0) {  // Skip the origin (0,0) label
            ctx.fillText(label, x - 5, canvas.height / 2 - 5);
        }
    }

    // For the axis
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;

    // Draw arrows on the axes
    drawArrow(canvas.width, canvas.width / 2);  // Arrow for the positive x-axis
    drawArrow(0, canvas.height / 2, Math.PI);  // Arrow for the negative x-axis
    drawArrow(canvas.width / 2, canvas.height, Math.PI / 2);  // Arrow for the positive y-axis
    drawArrow(canvas.width / 2, 0, -Math.PI / 2);  // Arrow for the negative y-axis

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

    // For the origin
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


function drawParabola(a, xvalue, yvalue, major, ConstNotZero) {
   drawCoordinatePlane();
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const h = (xvalue == 1) ? 0 : xvalue / -2;
    const k = (ConstNotZero == 0) ? 0 :  ConstNotZero / yvalue;
    const p = yvalue / 4;  

    if (major === 'x²' && yvalue < 0) {
        // Parabola opening towards positive x-axis: y = a * (x - h)^2 + k
        for (let x = -canvas.width / 2; x <= canvas.width / 2; x += 1) {
            const y = (x / scale - h) ** 2 / (4 * -p) + k;
            if (x === -canvas.width) {
                ctx.moveTo(x + centerX, -y * scale + centerY);
            } else {
                ctx.lineTo(x + centerX, -y * scale + centerY);
            }
        }
    ctx.strokeStyle = 'black'; // Color of the parabola
    ctx.stroke();

    // Draw the directrix
    const directrixY = k - (p * 2); // Directrix line
    ctx.beginPath();
    ctx.setLineDash([10, 15]);
    ctx.moveTo(-canvas.width / 2 + centerX, directrixY * scale + centerY);
    ctx.lineTo(canvas.width / 2 + centerX, directrixY * scale + centerY);
    ctx.strokeStyle = 'red'; // Color for the directrix
    ctx.stroke();

    // For focus
    const focusX = h; // x-coordinate of the focus
    const focusY = k - p; // y-coordinate of the focus
    ctx.beginPath();
    ctx.arc(centerX + focusX * scale, -focusY * scale + centerY, 5, 0, 2 * Math.PI); // Radius is 5, adjust as needed
    ctx.fillStyle = 'blue'; // Color for the focus
    ctx.fill();

    // For the Center
    ctx.beginPath();
    ctx.arc(centerX + focusX * scale, centerY - (focusY + p)  * scale, 5, 0, 2 * Math.PI); // Radius is 5, adjust as needed
    ctx.fillStyle = 'violet'; // Color for the focus
    ctx.fill();

    // For the latus
    ctx.beginPath();
    ctx.arc(centerX + (focusX - (p + p)) * scale, -focusY * scale + centerY, 4, 0, 2 * Math.PI); // Radius is 5, adjust as needed
    ctx.arc(centerX + (focusX + (p + p)) * scale, -focusY * scale + centerY, 4, 0, 2 * Math.PI); // Radius is 5, adjust as needed
    ctx.fillStyle = 'orange'; // Color for the focus
    ctx.fill();

    // For symmetry
    ctx.beginPath();
    ctx.moveTo(h * scale + centerX, -canvas.height / 2 * scale + centerY);
    ctx.lineTo(h * scale + centerX, canvas.height / 2 * scale + centerY);
    ctx.strokeStyle = 'green'; // Color for the axis of symmetry
    ctx.stroke();
        
    } else if (major === 'x²' && yvalue > 0) {
        // Parabola opening towards negative x-axis: y = -a * (x - h)^2 + k
        for (let x = -canvas.width / 2; x <= canvas.width / 2; x += 1) {
            const y = (x / scale - h) ** 2 / (4 * -p) + k;
            if (x === -canvas.width / 2) {
                ctx.moveTo(x + centerX, -y * scale + centerY);
            } else {
                ctx.lineTo(x + centerX, -y * scale + centerY);
            }
        }
    ctx.strokeStyle = 'black'; // Color for the parabola
    ctx.stroke();

    // For directrix
    const directrixY = k + p; // Directrix line
    ctx.beginPath();
    ctx.setLineDash([10, 15]);
    ctx.moveTo(-canvas.width / 2 + centerX, -directrixY * scale + centerY);
    ctx.lineTo(canvas.width / 2 + centerX, -directrixY * scale + centerY);
    ctx.strokeStyle = 'red'; // Color for the directrix
    ctx.stroke(); 

    // For the focus
    const focusX = h; // x-coordinate of the focus
    const focusY = k - p; // y-coordinate of the focus
    ctx.beginPath();
    ctx.arc(centerX + focusX * scale, -focusY * scale + centerY, 5, 0, 2 * Math.PI); // Radius is 5, adjust as needed
    ctx.fillStyle = 'blue'; // Color for the focus
    ctx.fill();

    // For the Center
    ctx.beginPath();
    ctx.arc(centerX + focusX * scale, centerY - (focusY + p)  * scale, 5, 0, 2 * Math.PI); // Radius is 5, adjust as needed
    ctx.fillStyle = 'violet'; // Color for the focus
    ctx.fill();

    // For latus
    ctx.beginPath();
    ctx.arc(centerX + (focusX + (p + p)) * scale, -focusY * scale + centerY, 4, 0, 2 * Math.PI); // Radius is 5, adjust as needed
    ctx.arc(centerX + (focusX - (p + p)) * scale, -focusY * scale + centerY, 4, 0, 2 * Math.PI); // Radius is 5, adjust as needed
    ctx.fillStyle = 'orange'; // Color for the focus
    ctx.fill();

    // For symmetry
    ctx.beginPath();
    ctx.moveTo(h * scale + centerX, -canvas.height / 2 * scale + centerY);
    ctx.lineTo(h * scale + centerX, canvas.height / 2 * scale + centerY);
    ctx.strokeStyle = 'green'; // Color for the axis of symmetry
    ctx.stroke();
    
    } else if (major === 'y²' && yvalue < 0) {
        // Parabola opening towards positive y-axis: x = a * (y - k)^2 + h
        for (let y = -canvas.height / 2; y <= canvas.height / 2; y += 1) {
            const x = (y / scale - h) ** 2 / (4 * -p) + k;
            if (y === -canvas.height / 2) {
                ctx.moveTo(x * scale + centerX, -y + centerY);
            } else {
                ctx.lineTo(x * scale + centerX, -y + centerY);
            }
        }
    ctx.strokeStyle = 'black'; // Color for the parabola
    ctx.stroke();

    // For the directrix
    const directrixX = k + p; // Directrix line
    ctx.beginPath();
    ctx.setLineDash([10, 15]);
    ctx.moveTo(directrixX * scale + centerX , -canvas.width / 2 + centerY);
    ctx.lineTo(directrixX * scale + centerX, canvas.width / 2 + centerY);
    ctx.strokeStyle = 'red'; // Color for the directrix
    ctx.stroke();

    // for the focus
    const focusX = h; // x-coordinate of the focus
    const focusY = k - p; // y-coordinate of the focus
    ctx.beginPath();
    ctx.arc(centerX + focusY * scale, -focusX * scale + centerY, 5, 0, 2 * Math.PI); // Radius is 5, adjust as needed
    ctx.fillStyle = 'blue'; // Color for the focus
    ctx.fill();

    // For the center
    ctx.beginPath();
    ctx.arc(centerX + (focusY + p)  * scale, centerY - focusX  * scale, 5, 0, 2 * Math.PI);; // Radius is 5, adjust as needed
    ctx.fillStyle = 'violet'; // Color for the focus
    ctx.fill();

    // For the latus rectum
    ctx.beginPath();
    ctx.arc(centerX + focusY * scale, (-focusX - (p + p)) * scale + centerY, 4, 0, 2 * Math.PI); // Radius is 5, adjust as needed
    ctx.arc(centerX + focusY * scale, (-focusX + (p + p)) * scale + centerY, 4, 0, 2 * Math.PI); // Radius is 5, adjust as needed
    ctx.fillStyle = 'orange'; // Color for the focus
    ctx.fill();

    // Draw the axis of symmetry
    ctx.beginPath();
    ctx.moveTo(-canvas.height / 2 * scale + centerX, -h * scale + centerY);
    ctx.lineTo(canvas.height / 2 * scale + centerX, -h * scale + centerY);
    ctx.strokeStyle = 'green'; // Color for the axis of symmetry
    ctx.stroke();

    } else if (major === 'y²' && yvalue > 0) {
        // Parabola opening towards negative y-axis: x = -a * (y - k)^2 + h
        for (let y = -canvas.height / 2; y <= canvas.height / 2; y += 1) {
            const x =  (y / scale - h) ** 2 / (4 * -p) + k;
            if (y === -canvas.height / 2) {
                ctx.moveTo(x * scale + centerX, -y + centerY);
            } else {
                ctx.lineTo(x * scale + centerX, -y + centerY);
            }
        }
    ctx.strokeStyle = 'black'; // Color for the parabola
    ctx.stroke();

    // Draw the directrix
    const directrixX = k + p; // Directrix line
    ctx.beginPath();
    ctx.setLineDash([10, 15]);
    ctx.moveTo(directrixX * scale + centerX , -canvas.width / 2 + centerY);
    ctx.lineTo(directrixX * scale + centerX, canvas.width / 2 + centerY);
    ctx.strokeStyle = 'red'; // Color for the directrix
    ctx.stroke();

    // For the focus
    const focusX = h; // x-coordinate of the focus
    const focusY = k - p; // y-coordinate of the focus
    ctx.beginPath();
    ctx.arc(centerX + focusY * scale, -focusX * scale + centerY, 5, 0, 2 * Math.PI); // Radius is 5, adjust as needed
    ctx.fillStyle = 'blue'; // Color for the focus
    ctx.fill();

    // for the center
    ctx.beginPath();
    ctx.arc(centerX + (focusY + p) * scale, centerY - focusX  * scale, 5, 0, 2 * Math.PI);; // Radius is 5, adjust as needed
    ctx.fillStyle = 'violet'; // Color for the focus
    ctx.fill();

    // For the latus
    ctx.beginPath();
    ctx.arc(centerX + focusY * scale, (-focusX - (p + p)) * scale + centerY, 4, 0, 2 * Math.PI); // Radius is 5, adjust as needed
    ctx.arc(centerX + focusY * scale, (-focusX + (p + p)) * scale + centerY, 4, 0, 2 * Math.PI); // Radius is 5, adjust as needed
    ctx.fillStyle = 'orange'; // Color for the focus
    ctx.fill(); 

    // For the symmetry
    ctx.beginPath();
    ctx.moveTo(-canvas.height / 2 * scale + centerX, -h * scale + centerY);
    ctx.lineTo(canvas.height / 2 * scale + centerX, -h * scale + centerY);
    ctx.strokeStyle = 'green'; // Color for the axis of symmetry
    ctx.stroke();
}
ctx.stroke();
}
