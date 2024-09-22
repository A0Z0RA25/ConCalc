const step1Container = document.querySelector(".step1");
const step2Container = document.querySelector(".step2");
const step3Container = document.querySelector(".step3");
 
const givenMajor = document.querySelector(".givenMajor");
const givenMajorVar = document.querySelector(".givenMajorVar");
const givenMinor = document.querySelector(".givenMinor");
const givenMinorVar = document.querySelector(".givenMinorVar");
const givenA = document.querySelector(".givenA");
const sign1 = document.querySelector(".sign1");
const sign2 = document.querySelector(".sign2");

const step1DivContainer = document.querySelector(".step1-container");
const step2DivContainer = document.querySelector(".step2-container");
const step3DivContainer = document.querySelector(".step3-container");
const answerContainer = document.querySelector(".answer-container");

function showStep1(){
  step1Container.style.display = "block";
  step2DivContainer.style.display = "block";
  document.querySelector(".step1Btn").style.display = "none";
  document.querySelector(".step2Btn").style.display = "block";
}

function showStep2(){
  step2Container.style.display = "block";
  step3DivContainer.style.display = "block";
  document.querySelector(".step2Btn").style.display = "none";
  document.querySelector(".step3Btn").style.display = "block";
}

function showStep3(){
  step3Container.style.display = "block";
  step2DivContainer.style.display = "block";
  document.querySelector(".step3Btn").style.display = "none";

  confetti({
    particleCount: 100,   
    spread: 100,           
    origin: { y: 0.6 }  
});
}
 
function transform() {
  alert("Prepare your pen and a piece of paper for writing your answers.");
  document.querySelector(".step1Btn").style.display = "block";
  step1Container.style.display = "none";
  step2Container.style.display = "none";
  step3Container.style.display = "none";
  step2DivContainer.style.display = "none";
  step3DivContainer.style.display = "none";

  const a = parseFloat(document.getElementById('a').value);
  const h = parseFloat(document.getElementById('h').value);
  const k = parseFloat(document.getElementById('k').value);
  const major = document.querySelector(".major").value;
  const minor = document.querySelector(".minor").value;

  if(isNaN(a,h,k)){
    alert("Please put a value.")
    answerContainer.style.visibility = "hidden";
  } else {
    answerContainer.style.visibility = "visible";
  }

  //Given
  const posNegSign1 = (h > 0) ? "+" : "-";
  const posNegSign2 = (k > 0) ? "+" : "-";
  sign1.textContent = (h == 0) ? "" :  posNegSign1;
  sign2.textContent = (k == 0) ? "" :  posNegSign2;

  const givenMajorNotZero = (h > 0) ? h : h / -1;
  const givenMinorNotZero = (k > 0) ? k : k / -1;
  givenMajor.textContent = (h == 0) ? "" : givenMajorNotZero;
  givenMinor.textContent = (k == 0) ? "" : givenMinorNotZero;

  givenA.textContent = a;
  givenMajorVar.textContent = major;
  givenMinorVar.textContent = minor; 

  const step3Hidden = document.querySelector(".step3-container");
  step3Hidden.style.visibility = (h == 0 || k == 0) ? "hidden" : "visible";
  //
  const xpanded = h * 2;
  const expandConstx = Math.pow(h, 2);

  const kconstant = a * k;

  // X is not none but Y is
  const xNotZero = [
    {"step1Positive": `${major}² + ${xpanded}${major} + ${expandConstx} = ${a}${minor}`},
    {"step1Negative": `${major}²  ${xpanded}${major} + ${expandConstx} = ${a}${minor}`},
    {"step2Positivea": `${major}² + ${xpanded}${major} + ${a / -1}${minor} + ${expandConstx} = 0`},
    {"step2Negativea": `${major}² + ${xpanded}${major} ${a / -1}${minor} + ${expandConstx} = 0`},
    {"step2Negativexa": `${major}²  ${xpanded}${major} ${a / -1}${minor} + ${expandConstx} = 0`},
    {"step2Negativex": `${major}²  ${xpanded}${major} + ${a / -1}${minor} + ${expandConstx} = 0`}
  ]

  //

  if(h == 0 && k == 0){
    // X AND Y IS none
    if(a < 0){
      step1Container.textContent = `${major}² + ${a / -1}${minor} = 0`;
      step2Container.textContent = '';

    } else {
      step1Container.textContent = `${major}²  ${a / -1}${minor} = 0`;
      step2Container.textContent = '';
    }
    
  }
  else if(h !== 0 && k == 0){
    //
    if(h > 0 && a < 0){
      step1Container.textContent = xNotZero[0].step1Positive;
      step2Container.textContent = xNotZero[2].step2Positivea;
    }
    else if(h > 0 && a > 0){
      step1Container.textContent = xNotZero[0].step1Positive;
      step2Container.textContent = xNotZero[3].step2Negativea;
    } else if(h < 0 && a > 0){
      step1Container.textContent = xNotZero[1].step1Negative;
      step2Container.textContent = xNotZero[4].step2Negativexa;
    } else {
      step1Container.textContent = xNotZero[1].step1Negative;
      step2Container.textContent = xNotZero[5].step2Negativex;
    }
    
  } 
  else if (k !== 0 && h == 0){
    // YNOTZERO
    if(k > 0 && a > 0){
      step1Container.textContent = `${major}² = ${a}${minor} + ${kconstant}`;
      step2Container.textContent = `${major}² ${a / -1}${minor} ${kconstant / -1} = 0`;
    } 
    
    else if(k < 0 && a > 0){
      step1Container.textContent = `${major}² = ${a}${minor} ${kconstant}`;
      step2Container.textContent = `${major}² ${a / -1}${minor} + ${kconstant / -1} = 0`;
    }
    else if(k > 0 && a < 0){
      step1Container.textContent = `${major}² = ${a}${minor} ${kconstant}`;
      step2Container.textContent = `${major}² + ${a / -1}${minor} + ${kconstant / -1} = 0`;
    } 
    else {
      step1Container.textContent = `${major}² = ${a}${minor} + ${kconstant}`;
      step2Container.textContent = `${major}² + ${a / -1}${minor} ${kconstant / -1} = 0`;
    }
  }
  else if(h !== 0 && k !== 0){
      // X AND Y NOT none
    if(h > 0 && a > 0 && k > 0){
      step1Container.textContent = `${major}² + ${xpanded}${major} + ${expandConstx} = ${a}${minor} + ${kconstant}`;
      step2Container.textContent = `${major}² + ${xpanded}${major} ${a / -1}${minor} + ${expandConstx} ${kconstant / -1} = 0`;
      step3Container.textContent = `${major}² + ${xpanded}${major} ${a / -1}${minor} ${expandConstx + (kconstant / -1)} = 0`;
    } 
    else if(h > 0 && a < 0 && k < 0){
      step1Container.textContent = `${major}² + ${xpanded}${major} + ${expandConstx} = ${a}${minor} + ${kconstant}`;
      step2Container.textContent = `${major}² + ${xpanded}${major} + ${a / -1}${minor} + ${expandConstx} ${kconstant / -1} = 0`;
      step3Container.textContent = `${major}² + ${xpanded}${major} + ${a / -1}${minor} ${expandConstx + kconstant / -1} = 0`;
    } 
    else if(h > 0 && a < 0 && k > 0){
      step1Container.textContent = `${major}² + ${xpanded}${major} + ${expandConstx} = ${a}${minor} ${kconstant}`;
      step2Container.textContent = `${major}² + ${xpanded}${major} + ${a / -1}${minor} + ${expandConstx} + ${kconstant / -1} = 0`;
      step3Container.textContent = `${major}² + ${xpanded}${major} + ${a / -1}${minor} + ${expandConstx + kconstant / -1} = 0`;
    } 
    else if(h > 0 && a > 0 && k < 0){
      step1Container.textContent = `${major}² + ${xpanded}${major} + ${expandConstx} = ${a}${minor} ${kconstant}`;
      step2Container.textContent = `${major}² + ${xpanded}${major} ${a / -1}${minor} + ${expandConstx} + ${kconstant / -1} = 0`;
      step3Container.textContent = `${major}² + ${xpanded}${major} ${a / -1}${minor} + ${expandConstx + kconstant / -1} = 0`;
    } 
    else if(h < 0 && a > 0 && k < 0){
      step1Container.textContent = `${major}² ${xpanded}${major} + ${expandConstx} = ${a}${minor} ${kconstant}`;
      step2Container.textContent = `${major}² ${xpanded}${major} ${a / -1}${minor} + ${expandConstx} + ${kconstant / -1} = 0`;
      step3Container.textContent = `${major}² ${xpanded}${major} ${a / -1}${minor} + ${expandConstx + kconstant / -1} = 0`;
    } 
    else if(h < 0 && a < 0 && k > 0){
      step1Container.textContent = `${major}² ${xpanded}${major} + ${expandConstx} = ${a}${minor} ${kconstant}`;
      step2Container.textContent = `${major}² ${xpanded}${major} + ${a / -1}${minor} + ${expandConstx} + ${kconstant / -1} = 0`;
      step3Container.textContent = `${major}² ${xpanded}${major} + ${a / -1}${minor} + ${expandConstx + kconstant / -1} = 0`;
    } 
    else if(h < 0 && a > 0 && k > 0){
      step1Container.textContent = `${major}² ${xpanded}${major} + ${expandConstx} = ${a}${minor} + ${kconstant}`;
      step2Container.textContent = `${major}² ${xpanded}${major} ${a / -1}${minor} + ${expandConstx} ${kconstant / -1} = 0`;
      step3Container.textContent = `${major}² ${xpanded}${major} ${a / -1}${minor} + ${expandConstx + kconstant / -1} = 0`;
    } 
    else{
      step1Container.textContent = `${major}² ${xpanded}${major} + ${expandConstx} = ${a}${minor} + ${kconstant}`;
      step2Container.textContent = `${major}² ${xpanded}${major} + ${a / -1}${minor} + ${expandConstx} ${kconstant / -1} = 0`;
      step3Container.textContent = `${major}² ${xpanded}${major} + ${a / -1}${minor} + ${expandConstx + kconstant / -1} = 0`;
    }  
  }
  else {
    step1Container = "";
    step2Container = "";
    step3Container = "";
  } 
}
