const step1 = document.querySelector(".step1");
const step2 = document.querySelector(".step2");
const step3 = document.querySelector(".step3");
const step4 = document.querySelector(".step4");
const finalAnswer = document.querySelector(".finalAnswer");
const fracContainer = document.querySelector(".frac-container");
 
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


function transform() { 
    const a = parseFloat(document.getElementById('Ax').value);
    const xvalue = parseFloat(document.getElementById('coeffXMajor').value);
    const yvalue = parseFloat(document.getElementById('coeffYMinor').value);
    const constant = parseFloat(document.getElementById('constantx').value);
    const major = document.querySelector(".major").value;
    const minor = document.querySelector(".minor").value;
    const com = document.querySelector(".com").value;
    parabolaAnswerContainer.style.visibility = "visible";

    //Given
    sign1.textContent = (xvalue > 0) ? "+" : "-";
    sign2.textContent = (yvalue > 0) ? "+" : "-";
    sign3.textContent = (constant > 0) ? "+" : "-";
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
    const step4Container = document.querySelector(".step4-container"); 
    step4Container.style.display = (fconst == 0) ? "none" : "block";

    const ConstNotZero = (constant / -1) + divideConstant * a;
    //Parts of graph
    parts(xvalue, yvalue, major, ConstNotZero);
    //IF A is 1
    if(a == 1 && xvalue !== 0 && yvalue !== 0){
      finalAnswer.style.display = "none";
      fracContainer.style.display = "none";
      step4.style.display = "block";
      // ALL POSITIVE
        if(xvalue > 0 && yvalue > 0 && constant > 0){
           step1.textContent = `${major} + ${xvalue}${com} = ${yvalue / -1}${minor} ${constant / -1}`;  
           step2.textContent = `${major} + ${xvalue}${com} + ${xConst} = ${yvalue / -1}${minor} ${constant / -1} + ${xConst}`;
           step3.textContent = `(${com} + ${xvalue / 2})² = ${yvalue / -1} ${minor} ${finalK}`; 
           step4.textContent = `(${com} + ${xvalue / 2})² = ${yvalue / -1} (${minor} + ${(finalK / yvalue) / -1})`; 
        }   
        // ONLY H/X IS NEGATIVE
        else if(xvalue < 0 && yvalue > 0 && constant > 0 ){
           step1.textContent = `${major} ${xvalue}${com} = ${yvalue / -1}${minor} ${constant / -1}`; 
           step2.textContent = `${major} ${xvalue}${com} + ${xConst} = ${yvalue / -1}${minor} ${constant / -1} + ${xConst}`;
           step3.textContent = `(${com} ${xvalue / 2})² = ${yvalue / -1}${minor} ${finalK}`;
           step4.textContent = `(${com} ${xvalue / 2})² = ${yvalue / -1} (${minor} + ${(finalK / yvalue) / -1})`; 
        } 
        // ONLY THE CONSTANT TERM IS POSITIVE
        else if(xvalue < 0 && yvalue < 0 && constant > 0){
           step1.textContent = `${major} ${xvalue}${com} = ${yvalue / -1}${minor} ${constant / -1}`; 
           step2.textContent = `${major} ${xvalue}${com} + ${xConst} = ${yvalue / -1}${minor} ${constant / -1} + ${xConst}`;
           step3.textContent = `(${com} ${xvalue / 2})² = ${yvalue / -1}${minor} + ${finalK}`; 
           step4.textContent = `(${com} ${xvalue / 2})² = ${yvalue / -1} (${minor} + ${Math.abs(finalK / yvalue)})`;
        } 
        // ONLY K/Y IS POSITIVE
        else if(xvalue < 0 && yvalue > 0 && constant < 0){
           step1.textContent = `${major} ${xvalue}${com} = ${yvalue / -1}${minor} + ${constant / -1}`; 
           step2.textContent = `${major} ${xvalue}${com} + ${xConst} = ${yvalue / -1}${minor} + ${constant / -1} + ${xConst}`; 
           step3.textContent = `(${com} ${xvalue / 2})² = ${yvalue / -1}${minor} + ${finalK}`;
           step4.textContent = `(${com} ${xvalue / 2})² = ${yvalue / -1} (${minor} - ${finalK / yvalue})`;
        } 
        // ONLY A/X IS POSITIVE
        else if(xvalue > 0 && yvalue < 0 && constant < 0){
            step1.textContent = `${major} + ${xvalue}${com} = ${yvalue / -1}${minor} + ${constant / -1}`; 
            step2.textContent = `${major} + ${xvalue}${com} + ${xConst} = ${yvalue / -1}${minor} + ${constant / -1} + ${xConst}`;
            step3.textContent = `(${com} ${xvalue / 2})² = ${yvalue / -1}${minor} + ${finalK}`;
            step4.textContent = `(${com} ${xvalue / 2})² = ${yvalue / -1} (${minor} + ${finalK / yvalue})`;
         }
         // ONLY CONSTANT IS NEGATIVE
         else if(xvalue > 0 && yvalue > 0 && constant < 0){
            step1.textContent = `${major} + ${xvalue}${com} = ${yvalue / -1}${minor} + ${constant / -1}`; 
            step2.textContent = `${major} + ${xvalue}${com} + ${xConst} = ${yvalue / -1}${minor} + ${constant / -1} + ${xConst}`;
            step3.textContent = `(${com} + ${xvalue / 2})² = ${yvalue / -1}${minor} + ${finalK}`;
            step4.textContent = `(${com} + ${xvalue / 2})² = ${yvalue / -1} (${minor} ${(finalK / yvalue) / -1})`;
         }
         // ONLY K/Y IS NEG
         else if(xvalue > 0 && yvalue < 0 && constant > 0){
            step1.textContent = `${major} + ${xvalue}${com} = ${yvalue / -1}${minor} ${constant / -1}`; 
            step2.textContent = `${major} + ${xvalue}${com} + ${xConst} = ${yvalue / -1}${minor} ${constant / -1} + ${xConst}`; 
            step3.textContent = `(${com} + ${xvalue / 2}) = ${yvalue / -1}${minor} ${finalK}`;
            step4.textContent = `(${com} + ${xvalue / 2})² = ${yvalue / -1} (${minor} + ${finalK / yvalue})`;
         }
         // ALL NEG
         else {
            step1.textContent = `${major} ${xvalue}${com} = ${yvalue / -1}${minor} + ${constant / -1}`;
            step2.textContent = `${major} ${xvalue}${com} + ${xConst} = ${yvalue / -1}${minor} + ${constant / -1} + ${xConst}`;
            step3.textContent = `(${com} ${xvalue / 2})² = ${yvalue / -1}${minor} + ${finalK}`;
            step4.textContent = `(${com} ${xvalue / 2})² = ${yvalue / -1} (${minor} + ${(finalK / yvalue) / -1})`;
        } 
        // A IS GREATERTHAN 1
    } else if(a > 1){
      finalAnswer.style.display = "block";
      step4.style.display = "none";
      fracContainer.style.display = "block";
      // All positive
      if(xvalue > 0 && yvalue > 0 && constant > 0){
         step1.textContent = `${a}${major} + ${xvalue}${com} = ${yvalue / -1}${minor} ${constant / -1}`; 
         step2.textContent = `${a} (${major} + ${divideCenter}${com} + ${divideConstant}) = ${yvalue / -1}${minor} ${constant / -1} + ${divideConstant} (${a})`;
         step3.textContent = `${a} (${major} + ${divideCenter}${com} + ${divideConstant}) = ${yvalue / -1}${minor} ${ConstNotZero}`;
         // FRACTION
         majorOut.textContent = `${a}`;
         majorIn.textContent = `${com} + ${divideCenter / 2}`;
         majorDeno.textContent = `${a}`;

         minorOut.textContent = `${yvalue / -1}`;
         minorIn.textContent = `${minor} + ${ConstNotZero / (yvalue / -1)}`;
         minorDeno.textContent = `${a}`;
         // FINAL
         finalMajorIn.textContent = `${com} + ${divideCenter / 2}`;
         finalMinorOut.textContent = `${yvalue / -1}`;
         finalMinorDeno.textContent = `${a}`;
         finalMinorIn.textContent = `${minor} + ${ConstNotZero / (yvalue / -1)}`;
      } 
      // ONLY H/X IS NEGATIVE
      else if(xvalue < 0 && yvalue > 0 && constant > 0 ){
         step1.textContent = `${a}${major} ${xvalue}${com} = ${yvalue / -1}${minor} ${constant / -1}`; 
         step2.textContent = `${a} (${major} ${divideCenter}${com} + ${divideConstant}) = ${yvalue / -1}${minor} ${constant / -1} + ${divideConstant} (${a})`;
         step3.textContent = `${a} (${major} ${divideCenter}${com} + ${divideConstant}) = ${yvalue / -1}${minor} ${ConstNotZero}`;
         // FRACTION
         majorOut.textContent = `${a}`;
         majorIn.textContent = `${com} ${divideCenter / 2}`;
         majorDeno.textContent = `${a}`;

         minorOut.textContent = `${yvalue / -1}`;
         minorIn.textContent = `${minor} + ${ConstNotZero / (yvalue / -1)}`;
         minorDeno.textContent = `${a}`;
         // FINAL
         finalMajorIn.textContent = `${com} ${divideCenter / 2}`;
         finalMinorOut.textContent = `${yvalue / -1}`;
         finalMinorDeno.textContent = `${a}`;
         finalMinorIn.textContent = `${minor} + ${ConstNotZero / (yvalue / -1)}`;
      } 
      // ONLY THE CONSTANT TERM IS POSITIVE
      else if(xvalue < 0 && yvalue < 0 && constant > 0){
         step1.textContent = `${a}${major} ${xvalue}${com} = ${yvalue / -1}${minor} ${constant / -1}`; 
         step2.textContent = `${a} (${major} ${divideCenter}${com} + ${divideConstant}) = ${yvalue / -1}${minor} ${constant / -1} + ${divideConstant} (${a})`; 
         step3.textContent = `${a} (${major} ${divideCenter}${com} + ${divideConstant}) = ${yvalue / -1}${minor} ${ConstNotZero}`;
         // FRACTION
         majorOut.textContent = a;
         majorIn.textContent = `${com} ${divideCenter / 2}`;
         majorDeno.textContent = a;

         minorOut.textContent = yvalue / -1;
         minorIn.textContent = `${minor} ${ConstNotZero / (yvalue / -1)}`;
         minorDeno.textContent = a;
         // FINAL
         finalMajorIn.textContent = `${com} ${divideCenter / 2}`;
         finalMinorOut.textContent = yvalue / -1;
         finalMinorDeno.textContent = a;
         finalMinorIn.textContent = `${minor} ${ConstNotZero / (yvalue / -1)}`;
      } 
      // ONLY K/Y IS POSITIVE
      else if(xvalue < 0 && yvalue > 0 && constant < 0){
         step1.textContent = `${a}${major} ${xvalue}${com} = ${yvalue / -1}${minor} + ${constant / -1}`; 
         step2.textContent = `${a} (${major} ${divideCenter}${com} + ${divideConstant}) = ${yvalue / -1}${minor} + ${constant / -1} + ${divideConstant} (${a})`;
         step3.textContent = `${a} (${major} ${divideCenter}${com} + ${divideConstant}) = ${yvalue / -1}${minor} + ${ConstNotZero}`;
         // FRACTION
         majorOut.textContent = a;
         majorIn.textContent = `${com} ${divideCenter / 2}`;
         majorDeno.textContent = a;
 
         minorOut.textContent = yvalue / -1;
         minorIn.textContent = `${minor} ${ConstNotZero / (yvalue / -1)}`;
         minorDeno.textContent = a;
         // FINAL
         finalMajorIn.textContent = `${com} ${divideCenter / 2}`;
         finalMinorOut.textContent = yvalue / -1;
         finalMinorDeno.textContent = a;
         finalMinorIn.textContent = `${minor} ${ConstNotZero / (yvalue / -1)}`;
      } 
      // ONLY A/X IS POSITIVE
      else if(xvalue > 0 && yvalue < 0 && constant < 0){
          step1.textContent = `${a}${major} + ${xvalue}${com} = ${yvalue / -1}${minor} + ${constant / -1}`; 
          step2.textContent = `${a} (${major} + ${divideCenter}${com} + ${divideConstant})  = ${yvalue / -1}${minor} + ${constant / -1} + ${divideConstant} (${a})`; 
          step3.textContent = `${a} (${major} + ${divideCenter}${com} + ${divideConstant})  = ${yvalue / -1}${minor} + ${ConstNotZero}`;
          // FRACTION
         majorOut.textContent = a;
         majorIn.textContent = `${com} + ${divideCenter / 2}`;
         majorDeno.textContent = a;

         minorOut.textContent = yvalue / -1;
         minorIn.textContent = `${minor} + ${ConstNotZero / (yvalue / -1)}`;
         minorDeno.textContent = a;
         // FINAL
         finalMajorIn.textContent = `${com} + ${divideCenter / 2}`;
         finalMinorOut.textContent = yvalue / -1;
         finalMinorDeno.textContent = a;
         finalMinorIn.textContent = `${minor} + ${ConstNotZero / (yvalue / -1)}`;
       }
       // ONLY CONSTANT IS NEGATIVE
       else if(xvalue > 0 && yvalue > 0 && constant < 0){
          step1.textContent = `${a}${major} + ${xvalue}${com} = ${yvalue / -1}${minor} + ${constant / -1}`; 
          step2.textContent = `${a} (${major} + ${divideCenter}${com} + ${divideConstant}) = ${yvalue / -1}${minor} + ${constant / -1} + ${divideConstant} (${a})`;
          step3.textContent = `${a} (${major} + ${divideCenter}${com} + ${divideConstant}) = ${yvalue / -1}${minor} + ${ConstNotZero}`;
          // FRACTION
         majorOut.textContent = a;
         majorIn.textContent = `${com} + ${divideCenter / 2}`;
         majorDeno.textContent = a;

         minorOut.textContent = yvalue / -1;
         minorIn.textContent = `${minor} ${ConstNotZero / (yvalue / -1)}`;
         minorDeno.textContent = a;
         // FINAL
         finalMajorIn.textContent = `${com} + ${divideCenter / 2}`;
         finalMinorOut.textContent = yvalue / -1;
         finalMinorDeno.textContent = a;
         finalMinorIn.textContent = `${minor} ${ConstNotZero / (yvalue / -1)}`;
       }
       // ONLY K/Y IS NEG
       else if(xvalue > 0 && yvalue < 0 && constant > 0){
          step1.textContent = `${a}${major} + ${xvalue}${com} = ${yvalue / -1}${minor} ${constant / -1}`; 
          step2.textContent = `${a} (${major} + ${divideCenter}${com} + ${divideConstant}) = ${yvalue / -1}${minor} ${constant / -1} + ${divideConstant} (${a})`;
          step3.textContent = `${a} (${major} + ${divideCenter}${com} + ${divideConstant}) = ${yvalue / -1}${minor} ${ConstNotZero}`;
          // FRACTION
         majorOut.textContent = a;
         majorIn.textContent = `${com} + ${divideCenter / 2}`;
         majorDeno.textContent = a;

         minorOut.textContent = yvalue / -1;
         minorIn.textContent = `${minor} + ${ConstNotZero / (yvalue / -1)}`;
         minorDeno.textContent = a;
         // FINAL
         finalMajorIn.textContent = `${com} + ${divideCenter / 2}`;
         finalMinorOut.textContent = yvalue / -1;
         finalMinorDeno.textContent = a;
         finalMinorIn.textContent = `${minor} + ${ConstNotZero / (yvalue / -1)}`;
       } 
       // ALL NEG
       else {
          step1.textContent = `${a}${major} ${xvalue}${com} = ${yvalue / -1}${minor} + ${constant / -1}`;
          step2.textContent = `${a} (${major} ${divideCenter}${com} + ${divideConstant}) = ${yvalue / -1}${minor} + ${constant / -1} + ${divideConstant} (${a})`;
          step3.textContent = `${a} (${major} ${divideCenter}${com} + ${divideConstant}) = ${yvalue / -1}${minor} + ${ConstNotZero} `;
          // FRACTION
         majorOut.textContent = a;
         majorIn.textContent = `${com} ${divideCenter / 2}`;
         majorDeno.textContent = a;

         minorOut.textContent = yvalue / -1;
         minorIn.textContent = `${minor} + ${ConstNotZero / (yvalue / -1)}`;
         minorDeno.textContent = a;
         // FINAL
         finalMajorIn.textContent = `${com} ${divideCenter / 2}`;
         finalMinorOut.textContent = yvalue / -1;
         finalMinorDeno.textContent = a;
         finalMinorIn.textContent = `${minor} + ${ConstNotZero / (yvalue / -1)}`;
      }
    }
    else if(xvalue == 0){
      coeffIsNone(xvalue, yvalue, a,constant , major, minor, ConstNotZero, step1, step2, step3, step4Container, finalAnswer, fracContainer);
    }
     else{
      answerContainer.style.display = "none";
    }

}

//coeff of major is none
function coeffIsNone(xvalue, yvalue, a,constant , major, minor, ConstNotZero, step1, step2, step3, step4Container, finalAnswer, fracContainer){
   let signs = ["+", "-"];
   const coeffMinorSign = (yvalue > 0) ? signs[0] : signs[1];
   const constantSign = (constant > 0) ? signs[0] : signs[1];
   const minorOppSign = (yvalue > 0) ? signs[1] : signs[0];
   const constantOppSign = (constant > 0) ? signs[1] : signs[0];
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

   step1.textContent = `${major} ${coeffMinorSign} ${Math.abs(yvalue)}${minor} ${constantSign} ${Math.abs(constant)} = 0`;
   step2.textContent = `${major} = ${minorOppSign}${Math.abs(yvalue)}${minor} ${constantOppSign} ${Math.abs(constant)}`;
   step3.textContent = `${major} = ${minorOppSign}${Math.abs(yvalue)} (${minor} ${finalConstSign} ${Math.abs((constant / -1) / (yvalue / -1))})`;
   step4Container.style.display = "none";
   finalAnswer.style.display = "none";
   fracContainer.style.display = "none";
}

//Parts of Graph
function parts(xvalue, yvalue, major, ConstNotZero){
   const vertex = document.querySelector(".vertexValue");
   const focus = document.querySelector(".fociValue");
   const direc = document.querySelector(".direcValue");
   const pValue = document.querySelector(".pValue");
   const axis = document.querySelector(".axisValue");
   const latus = document.querySelector(".latusValue");

   const computedP = `${yvalue / -1} / 4, C = ${yvalue / -4}`;
   //center
   const xoryMajor = (xvalue == 1) ? 0 : xvalue / -2;
   const xoryMinor = (ConstNotZero == 0) ? 0 :  ConstNotZero / yvalue ;
   const centerGraph = (major == "x²") ? `(${xoryMajor}, ${xoryMinor})` : `(${xoryMinor}, ${xoryMajor})`;
   //focus
   const focusValue = (major == "x²") ? `(${xoryMajor}, ${xoryMinor + yvalue / -4})` : `(${xoryMinor + yvalue / -4}, ${xoryMajor})`;
   //directrix
   const direcXOrY = (major == "x²") ? `y = ${xoryMinor - (yvalue / -4)}` : `x = ${xoryMinor - (yvalue / -4)}`;
   //axis of symmetry
   const axisXOrY = (major == "x²") ? `x = ${xoryMajor}` : `y = ${xoryMajor}`;
   //latus rectum
   const latusValue = (major == "x²") ? `(${xoryMajor + 2 * (yvalue / -4)}, ${xoryMinor + yvalue / -4}), (${xoryMajor - 2 * (yvalue / -4)}, ${xoryMinor + yvalue / -4})` : `(${xoryMinor + yvalue / -4}, ${xoryMajor + 2 * (yvalue / -4)}), (${xoryMinor + yvalue / -4}, ${xoryMajor - 2 * (yvalue / -4)})`;

   pValue.textContent = computedP;
   vertex.textContent = centerGraph;
   focus.textContent = focusValue;
   direc.textContent = direcXOrY;
   axis.textContent = axisXOrY;
   latus.textContent = latusValue;
}