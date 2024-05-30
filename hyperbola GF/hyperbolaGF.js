const step1 = document.querySelector(".step1");
const step2 = document.querySelector(".step2");
const step3 = document.querySelector(".step3");
const step4 = document.querySelector(".step4");
const step5 = document.querySelector(".step5");
const step6 = document.querySelector(".step6");

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
function transform(){
    const major = document.querySelector("#major").value;
    const minor = document.querySelector("#minor").value;
    const mjc = document.querySelector("#majorConst").value;
    const mnc = document.querySelector("#minorConst").value;
    const A = parseFloat(document.querySelector("#majorValue").value);
    const B = parseFloat(document.querySelector("#minorValue").value);
    const C = parseFloat(document.querySelector("#coeffMajor").value);
    const D = parseFloat(document.querySelector("#coeffMinor").value);
    const E = parseFloat(document.querySelector("#constant").value);

    const majorCenter = C / A;
    const minorCenter = D / B;
    const majorExpanded = Math.pow(majorCenter / 2, 2);
    const minorExpanded = Math.pow(minorCenter / 2, 2);
    const majorFinalDeno = ((E / -1) + majorExpanded * A + minorExpanded * B) / A;
    const minorFinalDeno = ((E / -1) + majorExpanded * A + minorExpanded * B) / B;
    if(A == 1 && C > 0 && D > 0 && E > 0){
        step1.textContent = `${major} ${B}${minor} + ${C}${mjc} + ${D}${mnc} = ${E / -1}`;
        step2.textContent = `(${major} + ${C}${mjc}) ${B}(${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `(${major} + ${C}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `(${major} + ${C}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded} + ${minorExpanded}(${B})`;
        step5.textContent = `(${major} + ${C}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${(E / -1) + majorExpanded + minorExpanded * B}`;
        //
        majorOut.textContent = '';
        majorIn.textContent = `${mjc} + ${C / 2}`;
        majorDeno.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} ${minorCenter / 2}`;
        minorDeno.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;

        constNume.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;
        constDeno.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;
        //
        finalMajorIn.textContent = `${major} + ${C / 2}`;
        finalMajorDeno.textContent = majorFinalDeno;

        finalMinorIn.textContent = `${minor} ${minorCenter / 2}`;
        finalMinorDeno.textContent = minorFinalDeno / -1;
    } 
    else if(A == 1 && C < 0 && D > 0 && E > 0){
        step1.textContent = `${major} ${B}${minor} ${C}${mjc} + ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `(${major} ${C}${mjc}) ${B}(${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `(${major} ${C}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `(${major} ${C}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded} + ${minorExpanded}(${B})`;
        step5.textContent = `(${major} ${C}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${(E / -1) + majorExpanded + minorExpanded * B}`;
        //
        majorOut.textContent = '';
        majorIn.textContent = `${mjc} ${C / 2}`;
        majorDeno.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} ${minorCenter / 2}`;
        minorDeno.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;

        constNume.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;
        constDeno.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;
        //
        finalMajorIn.textContent = `${mjc} ${C / 2}`;
        finalMajorDeno.textContent = majorFinalDeno;

        finalMinorIn.textContent = `${mnc} ${minorCenter / 2}`;
        finalMinorDeno.textContent = minorFinalDeno  -1;
    } 
    else if(A == 1 && C > 0 && D < 0 && E > 0){
        step1.textContent = `${major} ${B}${minor} + ${C}${mjc} ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `(${major} + ${C}${mjc}) ${B}(${minor} + ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `(${major} + ${C}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `(${major} + ${C}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded} + ${minorExpanded}(${B})`;
        step5.textContent = `(${major} + ${C}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${(E / -1) + majorExpanded + minorExpanded * B}`;
        //
        majorOut.textContent = '';
        majorIn.textContent = `${mjc} + ${C / 2}`;
        majorDeno.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        minorDeno.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;

        constNume.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;
        constDeno.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;
        //
        finalMajorIn.textContent = `${mjc} + ${C / 2}`;
        finalMajorDeno.textContent = majorFinalDeno;

        finalMinorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        finalMinorDeno.textContent = minorFinalDeno / -1;
    } 
    else if(A == 1 && C > 0 && D > 0 && E < 0){
        step1.textContent = `${major} ${B}${minor} + ${C}${mjc} + ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `(${major} + ${C}${mjc}) ${B}(${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `(${major} + ${C}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `(${major} + ${C}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded} + ${minorExpanded}(${B})`;
        step5.textContent = `(${major} + ${C}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${(E / -1) + majorExpanded + minorExpanded * B}`;
        //
        majorOut.textContent = '';
        majorIn.textContent = `${mjc} + ${C / 2}`;
        majorDeno.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} ${minorCenter / 2}`;
        minorDeno.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;

        constNume.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;
        constDeno.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;
        //
        finalMajorIn.textContent = `${mjc} + ${C / 2}`;
        finalMajorDeno.textContent = majorFinalDeno;

        finalMinorIn.textContent = `${mnc} ${minorCenter / 2}`;
        finalMinorDeno.textContent = minorFinalDeno / -1;
    } 
    else if(A == 1 && C < 0 && D < 0 && E > 0){
        step1.textContent = `${major} ${B}${minor} ${C}${mjc} ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `(${major} ${C}${mjc}) ${B}(${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `(${major} ${C}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `(${major} ${C}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded} + ${minorExpanded}(${B})`;
        step5.textContent = `(${major} ${C}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${(E / -1) + majorExpanded + minorExpanded * B}`;
        //
        majorOut.textContent = '';
        majorIn.textContent = `${mjc} ${C / 2}`;
        majorDeno.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        minorDeno.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;

        constNume.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;
        constDeno.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;
        //
        finalMajorIn.textContent = `${mjc} ${C / 2}`;
        finalMajorDeno.textContent = majorFinalDeno;

        finalMinorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        finalMinorDeno.textContent = minorFinalDeno / -1;
    }
    else if(A == 1 && C > 0 && D < 0 && E < 0){
        step1.textContent = `${major} ${B}${minor} + ${C}${mjc} ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `(${major} + ${C}${mjc}) ${B}(${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `(${major} + ${C}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `(${major} + ${C}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded} + ${minorExpanded}(${B})`;
        step5.textContent = `(${major} + ${C}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${(E / -1) + majorExpanded + minorExpanded * B}`;
        //
        majorOut.textContent = '';
        majorIn.textContent = `${mjc} + ${C / 2}`;
        majorDeno.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        minorDeno.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;

        constNume.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;
        constDeno.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;
        //
        finalMajorIn.textContent = `${mjc} + ${C / 2}`;
        finalMajorDeno.textContent = majorFinalDeno;

        finalMinorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        finalMinorDeno.textContent = minorFinalDeno / -1;
    }
    else if(A == 1 && C < 0 && D > 0 && E < 0){
        step1.textContent = `${major} ${B}${minor} ${C}${mjc} + ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `(${major} ${C}${mjc}) ${B}(${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `(${major} ${C}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `(${major} ${C}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded} + ${minorExpanded}(${B})`;
        step5.textContent = `(${major} ${C}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${(E / -1) + majorExpanded + minorExpanded * B}`;
        //
        majorOut.textContent = '';
        majorIn.textContent = `${mjc} ${C / 2}`;
        majorDeno.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} ${minorCenter / 2}`;
        minorDeno.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;

        constNume.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;
        constDeno.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;
        //
        finalMajorIn.textContent = `${mjc} ${C / 2}`;
        finalMajorDeno.textContent = majorFinalDeno;

        finalMinorIn.textContent = `${mnc} ${minorCenter / 2}`;
        finalMinorDeno.textContent = minorFinalDeno / -1;
    }
    else if(A == 1 && C < 0 && D < 0 && E < 0){
        step1.textContent = `${major} ${B}${minor} ${C}${mjc} ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `(${major} ${C}${mjc}) ${B}(${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `(${major} ${C}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `(${major} ${C}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded} + ${minorExpanded}(${B})`;
        step5.textContent = `(${major} ${C}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${(E / -1) + majorExpanded + minorExpanded * B}`;
        //
        majorOut.textContent = '';
        majorIn.textContent = `${mjc} ${C / 2}`;
        majorDeno.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        minorDeno.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;

        constNume.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;
        constDeno.textContent = `${(E / -1) + majorExpanded + minorExpanded * B}`;
        //
        finalMajorIn.textContent = `${mjc} ${C / 2}`;
        finalMajorDeno.textContent = majorFinalDeno;

        finalMinorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        finalMinorDeno.textContent = minorFinalDeno / -1;
    }
    // B -------------------------------------------------------
    else if(B == -1 && C > 0 && D > 0 && E > 0){
        step1.textContent = `${A}${major} ${minor} + ${C}${mjc} + ${D}${mnc} = ${E / -1}`;
        step2.textContent = `${A}(${major} + ${majorCenter}${mjc}) - (${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} - ${D}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} - ${D}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} - ${D}${mnc} + ${minorExpanded}) = ${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} + ${majorCenter / 2}`;
        majorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        minorOut.textContent = '';
        minorIn.textContent = `${mnc} ${minorCenter / 2}`;
        minorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        constNume.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        constDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        finalMajorIn.textContent = `${mjc} + ${C / 2}`;
        finalMajorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B) / A}`;

        finalMinorIn.textContent = `${mnc} ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B)}`;
    } 
    else if(B == -1 && C < 0 && D > 0 && E > 0){
        step1.textContent = `${A}${major} ${minor} ${C}${mjc} + ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `${A}(${major} ${majorCenter}${mjc}) - (${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} - ${D}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} - ${D}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} - ${D}${mnc} + ${minorExpanded}) = ${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} ${majorCenter / 2}`;
        majorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        minorOut.textContent = '';
        minorIn.textContent = `${mnc} ${minorCenter / 2}`;
        minorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        constNume.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        constDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        finalMajorIn.textContent = `${mjc} ${C / 2}`;
        finalMajorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B) / A}`;

        finalMinorIn.textContent = `${mnc} ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B)}`;
    } 
    else if(B == -1 && C > 0 && D < 0 && E > 0){
        step1.textContent = `${A}${major} - ${minor} + ${C}${mjc} ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `${A}(${major} + ${majorCenter}${mjc}) - (${minor} + ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} + ${(majorCenter / 2)}`;
        majorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        minorOut.textContent = '';
        minorIn.textContent = `${mnc} + ${(minorCenter / 2)}`;
        minorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        constNume.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        constDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        finalMajorIn.textContent = `${mjc} + ${(majorCenter / 2)}`;
        finalMajorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B) / A}`;

        finalMinorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B)}`;
    } 
    else if(B == -1 && C > 0 && D > 0 && E < 0){
        step1.textContent = `${A}${major} - ${minor} + ${C}${mjc} + ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `${A}(${major} + ${majorCenter}${mjc}) - (${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} + ${(majorCenter / 2)}`;
        majorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        minorOut.textContent = '';
        minorIn.textContent = `${mnc} ${(minorCenter / 2)}`;
        minorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        constNume.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        constDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        finalMajorIn.textContent = `${mjc} + ${(majorCenter / 2)}`;
        finalMajorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B) / A}`;

        finalMinorIn.textContent = `${mnc} ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B)}`;
        
    } 
    else if(B == -1 && C < 0 && D < 0 && E > 0){
        step1.textContent = `${A}${major} - ${minor} ${C}${mjc} ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `${A}(${major} ${majorCenter}${mjc}) - (${minor} + ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} ${(majorCenter / 2)}`;
        majorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        minorOut.textContent = '';
        minorIn.textContent = `${mnc} + ${(minorCenter / 2)}`;
        minorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        constNume.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        constDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        finalMajorIn.textContent = `${mjc} ${(majorCenter / 2)}`;
        finalMajorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B) / A}`;

        finalMinorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B)}`;
    }
    else if(B == -1 && C > 0 && D < 0 && E < 0){
        step1.textContent = `${A}${major} - ${minor} + ${C}${mjc} ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `${A}(${major} + ${majorCenter}${mjc}) - (${minor} + ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} + ${(majorCenter / 2)}`;
        majorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        minorOut.textContent = '';
        minorIn.textContent = `${mnc} + ${(minorCenter / 2)}`;
        minorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        constNume.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        constDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        finalMajorIn.textContent = `${mjc} + ${(majorCenter / 2)}`;
        finalMajorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B) / A}`;

        finalMinorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B)}`;
    }
    else if(B == -1 && C < 0 && D > 0 && E < 0){
        step1.textContent = `${A}${major} - ${minor} ${C}${mjc} + ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `${A}(${major} ${majorCenter}${mjc}) - (${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} ${(majorCenter / 2)}`;
        majorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        minorOut.textContent = '';
        minorIn.textContent = `${mnc} ${(minorCenter / 2)}`;
        minorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        constNume.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        constDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        finalMajorIn.textContent = `${mjc} ${(majorCenter / 2)}`;
        finalMajorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B) / A}`;

        finalMinorIn.textContent = `${mnc} ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B)}`;
    }
    else if(B == -1 && C < 0 && D < 0 && E < 0){
        step1.textContent = `${A}${major} ${minor} ${C}${mjc} ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `${A}(${major} ${majorCenter}${mjc}) - (${minor} + ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} ${(majorCenter / 2)}`;
        majorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        minorOut.textContent = '';
        minorIn.textContent = `${mnc} + ${(minorCenter / 2)}`;
        minorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        constNume.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        constDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        finalMajorIn.textContent = `${mjc} ${(majorCenter / 2)}`;
        finalMajorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B) / A}`;

        finalMinorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B)}`;
    }
    // A B-------------------------------------------------------------------------- 
    else if(A !== 1 && B !== 1 && C > 0 && D > 0 && E > 0){
        step1.textContent = `${A}${major} ${B}${minor} + ${C}${mjc} + ${D}${mnc} = ${E / -1}`;
        step2.textContent = `${A}(${major} + ${majorCenter}${mjc}) ${B}(${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} - ${D}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} - ${D}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} - ${D}${mnc} + ${minorExpanded}) = ${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} + ${majorCenter / 2}`;
        majorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} ${minorCenter / 2}`;
        minorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        constNume.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        constDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        finalMajorIn.textContent = `${mjc} + ${majorCenter / 2}`;
        finalMajorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B) / A}`;

        finalMinorIn.textContent = `${mnc} ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B) / (B / -1)}`;
    } 
    else if(A !== 1 && B !== 1 && C < 0 && D > 0 && E > 0){
        step1.textContent = `${A}${major} ${B}${minor} ${C}${mjc} + ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `${A}(${major} ${majorCenter}${mjc}) ${B}(${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} - ${D}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} - ${D}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} - ${D}${mnc} + ${minorExpanded}) = ${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} ${majorCenter / 2}`;
        majorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} ${minorCenter / 2}`;
        minorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        constNume.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        constDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        finalMajorIn.textContent = `${mjc} ${C / 2}`;
        finalMajorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B) / A}`;

        finalMinorIn.textContent = `${mnc} ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B) / (B / -1)}`;
    } 
    else if(A !== 1 && B !== 1 && C > 0 && D < 0 && E > 0){
        step1.textContent = `${A}${major} ${B}${minor} + ${C}${mjc} ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `${A}(${major} + ${majorCenter}${mjc}) ${B}(${minor} + ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} + ${(majorCenter / 2)}`;
        majorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} + ${(minorCenter / 2)}`;
        minorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        constNume.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        constDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        finalMajorIn.textContent = `${mjc} + ${(majorCenter / 2)}`;
        finalMajorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B) / A}`;

        finalMinorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B) / (B / -1)}`;
    } 
    else if(A !== 1 && B !== 1 && C > 0 && D > 0 && E < 0){
        step1.textContent = `${A}${major} ${B}${minor} + ${C}${mjc} + ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `${A}(${major} + ${majorCenter}${mjc}) ${B}(${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} + ${(majorCenter / 2)}`;
        majorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} ${(minorCenter / 2)}`;
        minorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        constNume.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        constDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        finalMajorIn.textContent = `${mjc} + ${(majorCenter / 2)}`;
        finalMajorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B) / A}`;

        finalMinorIn.textContent = `${mnc} ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B) / (B / -1)}`;
    } 
    else if(A !== 1 && B !== 1 && C < 0 && D < 0 && E > 0){
        step1.textContent = `${A}${major} ${B}${minor} ${C}${mjc} ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `${A}(${major} ${majorCenter}${mjc}) ${B}(${minor} + ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} ${(majorCenter / 2)}`;
        majorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} + ${(minorCenter / 2)}`;
        minorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        constNume.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        constDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        finalMajorIn.textContent = `${mjc} ${(majorCenter / 2)}`;
        finalMajorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B) / A}`;

        finalMinorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B) / (B / -1)}`;
    }
    else if(A !== 1 && B !== 1 && C > 0 && D < 0 && E < 0){
        step1.textContent = `${A}${major} ${B}${minor} + ${C}${mjc} ${D}${mnc} = ${E / -1}`;
        step2.textContent = `${A}(${major} + ${majorCenter}${mjc}) ${B}(${minor} + ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} + ${(majorCenter / 2)}`;
        majorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} + ${(minorCenter / 2)}`;
        minorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        constNume.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        constDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        finalMajorIn.textContent = `${mjc} + ${(majorCenter / 2)}`;
        finalMajorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B) / A}`;

        finalMinorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B) / (B / -1)}`; 
    }
    else if(A !== 1 && B !== 1 && C < 0 && D > 0 && E < 0){
        step1.textContent = `${A}${major} ${B}${minor} ${C}${mjc} + ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `${A}(${major} ${majorCenter}${mjc}) ${B}(${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} ${(majorCenter / 2)}`;
        majorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} ${(minorCenter / 2)}`;
        minorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        constNume.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        constDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        finalMajorIn.textContent = `${mjc} ${(majorCenter / 2)}`;
        finalMajorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B) / A}`;

        finalMinorIn.textContent = `${mnc} ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B) / (B / -1)}`;
    }
    else if(A !== 1 && B !== 1 && C < 0 && D < 0 && E < 0){
        step1.textContent = `${A}${major} ${B}${minor} ${C}${mjc} ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `${A}(${major} ${majorCenter}${mjc}) ${B}(${minor} + ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} ${(majorCenter / 2)}`;
        majorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} + ${(minorCenter / 2)}`;
        minorDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;

        constNume.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        constDeno.textContent = `${(E / -1) + majorExpanded * A + minorExpanded * B}`;
        //
        finalMajorIn.textContent = `${mjc} ${(majorCenter / 2)}`;
        finalMajorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B) / A}`;

        finalMinorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${((E / -1) + majorExpanded * A + minorExpanded * B) / (B / -1)}`;
    }
    else {
    }
}