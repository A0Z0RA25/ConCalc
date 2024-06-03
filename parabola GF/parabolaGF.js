const step1 = document.querySelector(".step1");
const step2 = document.querySelector(".step2");
const step3 = document.querySelector(".step3");
const step4 = document.querySelector(".step4");
const step5 = document.querySelector(".step5");
const finalAnswer = document.querySelector(".finalAnswer");
const fracContainer = document.querySelector(".frac-container");

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
const answerContainer = document.querySelector(".parabolaGF-answer-container");

function transform() {
    const a = parseFloat(document.getElementById('Ax').value);
    const xvalue = parseFloat(document.getElementById('coeffXMajor').value);
    const yvalue = parseFloat(document.getElementById('coeffYMinor').value);
    const constant = parseFloat(document.getElementById('constantx').value);
    const major = document.querySelector(".major").value;
    const minor = document.querySelector(".minor").value;
    const com = document.querySelector(".com").value;
    // if a is 1
    const xConst = Math.pow(xvalue / 2, 2);
    // if a is greaterthan 1
    const divideCenter = xvalue / a;
    const divideConstant = Math.pow(divideCenter / 2, 2);
    const finalK = (constant / -1) + xConst

    const ConstNotZero = (constant / -1) + divideConstant * a;
    //IF A is 1
    answerContainer.style.display = "block";
    if(a == 1){
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
           step3.textContent = `(${com} ${xvalue / 2})² = ${yvalue / -1}${minor} ${finalK}`; 
           step4.textContent = `(${com} ${xvalue / 2})² = ${yvalue / -1} (${minor} - ${finalK / yvalue})`;
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
            step3.textContent = `(${com} ${xvalue / 2})² = ${yvalue / -1}${minor} + ${finalK}`;
            step4.textContent = `(${com} ${xvalue / 2})² = ${yvalue / -1} (${minor} + ${(finalK / yvalue) / -1})`;
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
            step4.textContent = `(${com} ${xvalue / 2})² = ${yvalue / -1} (${minor} + ${finalK / yvalue})`;
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
     else{
      answerContainer.style.display = "none";
    }

}
