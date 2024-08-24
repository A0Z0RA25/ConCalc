const hyperbolaAnswers = document.querySelector(".hyperbolaGF-answer");
const step1 = document.querySelector(".step1");
const step2 = document.querySelector(".step2");
const step3 = document.querySelector(".step3");
const step4 = document.querySelector(".step4");
const step5 = document.querySelector(".step5");
const finalSign1 = document.querySelector(".finalSign1");
const finalSign2 = document.querySelector(".finalSign2");
 
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

const givenA = document.querySelector(".givenA");
const givenB = document.querySelector(".givenB");
const givenC = document.querySelector(".givenC");
const givenD = document.querySelector(".givenD");
const givenE = document.querySelector(".givenE");
const sign1 = document.querySelector(".sign1");
const sign2 = document.querySelector(".sign2");
const sign3 = document.querySelector(".sign3");

const answerContainer = document.querySelector(".hyperbolaGF-answer");

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
    answerContainer.style.visibility = "visible";

    const majorCenter = C / A;
    const minorCenter = D / B;
    const majorExpanded = Math.pow(majorCenter / 2, 2);
    const minorExpanded = Math.pow(minorCenter / 2, 2);
    const majorFinalDeno = Math.abs(((E / -1) + majorExpanded * A + minorExpanded * B) / A);
    const minorFinalDeno = Math.abs(((E / -1) + majorExpanded * A + minorExpanded * B) / B);
    const radius = (E / -1) + majorExpanded * A + minorExpanded * B;

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
    // Graph
    drawHyperbola(majorFinalDeno, minorFinalDeno, radius, major, majorCenter, minorCenter);
    //ABC
    ABC(majorFinalDeno, minorFinalDeno, radius);
    //Vertex
    parts(majorFinalDeno, minorFinalDeno, radius, majorCenter, minorCenter, major);
    //Center
    const centerValue = document.querySelector(".centerValue");
    const centerGraph = (major == "x²") ? `(${majorCenter / -2}, ${minorCenter / -2})` : `(${minorCenter / -2}, ${majorCenter / -2})`;
    centerValue.textContent = centerGraph;
    // Orientation
    const orri = document.querySelector(".orriValue");
    orri.textContent = (major == "x²") ? "Opening Left and Right" : "Opening Up and Down";

    if(A == 1 && C > 0 && D > 0 && E > 0){
        step1.textContent = `${major} + ${C}${mjc} ${B}${minor} + ${D}${mnc} = ${E / -1}`;
        step2.textContent = `(${major} + ${C}${mjc}) ${B}(${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `(${major} + ${C}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `(${major} + ${C}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded} + ${minorExpanded}(${B})`;
        step5.textContent = `(${major} + ${C}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = '';
        majorIn.textContent = `${mjc} + ${C / 2}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} ${minorCenter / 2}`;
        minorDeno.textContent = radius;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${major} + ${C / 2}`;
        finalMajorDeno.textContent = majorFinalDeno;

        finalMinorIn.textContent = `${minor} ${minorCenter / 2}`;
        finalMinorDeno.textContent = minorFinalDeno;
    } 
    else if(A == 1 && C < 0 && D > 0 && E > 0){
        step1.textContent = `${major} ${C}${mjc} ${B}${minor} + ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `(${major} ${C}${mjc}) ${B}(${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `(${major} ${C}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `(${major} ${C}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded} + ${minorExpanded}(${B})`;
        step5.textContent = `(${major} ${C}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = '';
        majorIn.textContent = `${mjc} ${C / 2}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} ${minorCenter / 2}`;
        minorDeno.textContent = `${radius}`;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${mjc} ${C / 2}`;
        finalMajorDeno.textContent = majorFinalDeno;

        finalMinorIn.textContent = `${mnc} ${minorCenter / 2}`;
        finalMinorDeno.textContent = minorFinalDeno;
    } 
    else if(A == 1 && C > 0 && D < 0 && E > 0){
        step1.textContent = `${major} + ${C}${mjc} ${B}${minor} ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `(${major} + ${C}${mjc}) ${B}(${minor} + ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `(${major} + ${C}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `(${major} + ${C}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded} + ${minorExpanded}(${B})`;
        step5.textContent = `(${major} + ${C}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = '';
        majorIn.textContent = `${mjc} + ${C / 2}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        minorDeno.textContent = `${ radius}`;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${mjc} + ${C / 2}`;
        finalMajorDeno.textContent = majorFinalDeno;

        finalMinorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        finalMinorDeno.textContent = minorFinalDeno;
    } 
    else if(A == 1 && C > 0 && D > 0 && E < 0){
        step1.textContent = `${major} + ${C}${mjc} ${B}${minor} + ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `(${major} + ${C}${mjc}) ${B}(${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `(${major} + ${C}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `(${major} + ${C}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded} + ${minorExpanded}(${B})`;
        step5.textContent = `(${major} + ${C}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = '';
        majorIn.textContent = `${mjc} + ${C / 2}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} ${minorCenter / 2}`;
        minorDeno.textContent = `${radius}`;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${mjc} + ${C / 2}`;
        finalMajorDeno.textContent = majorFinalDeno;

        finalMinorIn.textContent = `${mnc} ${minorCenter / 2}`;
        finalMinorDeno.textContent = minorFinalDeno;
    } 
    else if(A == 1 && C < 0 && D < 0 && E > 0){
        step1.textContent = `${major} ${C}${mjc} ${B}${minor} ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `(${major} ${C}${mjc}) ${B}(${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `(${major} ${C}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `(${major} ${C}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded} + ${minorExpanded}(${B})`;
        step5.textContent = `(${major} ${C}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = '';
        majorIn.textContent = `${mjc} ${C / 2}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        minorDeno.textContent = `${radius}`;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${mjc} ${C / 2}`;
        finalMajorDeno.textContent = majorFinalDeno;

        finalMinorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        finalMinorDeno.textContent = minorFinalDeno;
    }
    else if(A == 1 && C > 0 && D < 0 && E < 0){
        step1.textContent = `${major} + ${C}${mjc} ${B}${minor} ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `(${major} + ${C}${mjc}) ${B}(${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `(${major} + ${C}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `(${major} + ${C}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded} + ${minorExpanded}(${B})`;
        step5.textContent = `(${major} + ${C}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = '';
        majorIn.textContent = `${mjc} + ${C / 2}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        minorDeno.textContent = `${radius}`;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${mjc} + ${C / 2}`;
        finalMajorDeno.textContent = majorFinalDeno;

        finalMinorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        finalMinorDeno.textContent = minorFinalDeno;
    }
    else if(A == 1 && C < 0 && D > 0 && E < 0){
        step1.textContent = `${major} ${C}${mjc} ${B}${minor} + ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `(${major} ${C}${mjc}) ${B}(${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `(${major} ${C}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `(${major} ${C}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded} + ${minorExpanded}(${B})`;
        step5.textContent = `(${major} ${C}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = '';
        majorIn.textContent = `${mjc} ${C / 2}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} ${minorCenter / 2}`;
        minorDeno.textContent = `${radius}`;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${mjc} ${C / 2}`;
        finalMajorDeno.textContent = majorFinalDeno;

        finalMinorIn.textContent = `${mnc} ${minorCenter / 2}`;
        finalMinorDeno.textContent = minorFinalDeno;
    }
    else if(A == 1 && C < 0 && D < 0 && E < 0){
        step1.textContent = `${major} ${C}${mjc} ${B}${minor} ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `(${major} ${C}${mjc}) ${B}(${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `(${major} ${C}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `(${major} ${C}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded} + ${minorExpanded}(${B})`;
        step5.textContent = `(${major} ${C}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = '';
        majorIn.textContent = `${mjc} ${C / 2}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        minorDeno.textContent = `${radius}`;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${mjc} ${C / 2}`;
        finalMajorDeno.textContent = majorFinalDeno;

        finalMinorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        finalMinorDeno.textContent = minorFinalDeno;
    }
    // B -------------------------------------------------------
    else if(B == -1 && C > 0 && D > 0 && E > 0){
        step1.textContent = `${A}${major} + ${C}${mjc} - ${minor}  + ${D}${mnc} = ${E / -1}`;
        step2.textContent = `${A}(${major} + ${majorCenter}${mjc}) - (${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} - ${D}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} - ${D}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} - ${D}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} + ${majorCenter / 2}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = '';
        minorIn.textContent = `${mnc} ${minorCenter / 2}`;
        minorDeno.textContent = `${radius}`;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${mjc} + ${majorCenter / 2}`;
        finalMajorDeno.textContent = `${majorFinalDeno}`;

        finalMinorIn.textContent = `${mnc} ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${minorFinalDeno}`;
    } 
    else if(B == -1 && C < 0 && D > 0 && E > 0){
        step1.textContent = `${A}${major} ${C}${mjc} - ${minor} + ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `${A}(${major} ${majorCenter}${mjc}) - (${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} - ${D}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} - ${D}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} - ${D}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} ${majorCenter / 2}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = '';
        minorIn.textContent = `${mnc} ${minorCenter / 2}`;
        minorDeno.textContent = `${radius}`;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${mjc} ${majorCenter / 2}`;
        finalMajorDeno.textContent = `${majorFinalDeno}`;

        finalMinorIn.textContent = `${mnc} ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${minorFinalDeno}`;
    } 
    else if(B == -1 && C > 0 && D < 0 && E > 0){
        step1.textContent = `${A}${major} + ${C}${mjc} - ${minor} ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `${A}(${major} + ${majorCenter}${mjc}) - (${minor} + ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} + ${(majorCenter / 2)}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = '';
        minorIn.textContent = `${mnc} + ${(minorCenter / 2)}`;
        minorDeno.textContent = `${radius}`;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${mjc} + ${(majorCenter / 2)}`;
        finalMajorDeno.textContent = `${majorFinalDeno}`;

        finalMinorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${minorFinalDeno}`;
    } 
    else if(B == -1 && C > 0 && D > 0 && E < 0){
        step1.textContent = `${A}${major} + ${C}${mjc} - ${minor} + ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `${A}(${major} + ${majorCenter}${mjc}) - (${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} + ${(majorCenter / 2)}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = '';
        minorIn.textContent = `${mnc} ${(minorCenter / 2)}`;
        minorDeno.textContent = `${radius}`;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${mjc} + ${(majorCenter / 2)}`;
        finalMajorDeno.textContent = `${majorFinalDeno}`;

        finalMinorIn.textContent = `${mnc} ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${minorFinalDeno}`;
        
    } 
    else if(B == -1 && C < 0 && D < 0 && E > 0){
        step1.textContent = `${A}${major} ${C}${mjc} - ${minor} ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `${A}(${major} ${majorCenter}${mjc}) - (${minor} + ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} ${(majorCenter / 2)}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = '';
        minorIn.textContent = `${mnc} + ${(minorCenter / 2)}`;
        minorDeno.textContent = `${radius}`;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${mjc} ${(majorCenter / 2)}`;
        finalMajorDeno.textContent = `${majorFinalDeno}`;

        finalMinorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${minorFinalDeno}`;
    }
    else if(B == -1 && C > 0 && D < 0 && E < 0){
        step1.textContent = `${A}${major} + ${C}${mjc} - ${minor} ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `${A}(${major} + ${majorCenter}${mjc}) - (${minor} + ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} + ${(majorCenter / 2)}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = '';
        minorIn.textContent = `${mnc} + ${(minorCenter / 2)}`;
        minorDeno.textContent = `${radius}`;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${mjc} + ${(majorCenter / 2)}`;
        finalMajorDeno.textContent = `${majorFinalDeno}`;

        finalMinorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${minorFinalDeno}`;
    }
    else if(B == -1 && C < 0 && D > 0 && E < 0){
        step1.textContent = `${A}${major} ${C}${mjc} - ${minor} + ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `${A}(${major} ${majorCenter}${mjc}) - (${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} ${(majorCenter / 2)}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = '';
        minorIn.textContent = `${mnc} ${(minorCenter / 2)}`;
        minorDeno.textContent = `${radius}`;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${mjc} ${(majorCenter / 2)}`;
        finalMajorDeno.textContent = `${majorFinalDeno}`;

        finalMinorIn.textContent = `${mnc} ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${minorFinalDeno}`;
    }
    else if(B == -1 && C < 0 && D < 0 && E < 0){
        step1.textContent = `${A}${major} ${C}${mjc} ${minor} ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `${A}(${major} ${majorCenter}${mjc}) - (${minor} + ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) - (${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} ${(majorCenter / 2)}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = '';
        minorIn.textContent = `${mnc} + ${(minorCenter / 2)}`;
        minorDeno.textContent = `${radius}`;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${mjc} ${(majorCenter / 2)}`;
        finalMajorDeno.textContent = `${majorFinalDeno}`;

        finalMinorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${minorFinalDeno}`;
    }
    // A B-------------------------------------------------------------------------- 
    else if(A !== 1 && B !== 1 && C > 0 && D > 0 && E > 0){
        step1.textContent = `${A}${major} + ${C}${mjc} ${B}${minor} + ${D}${mnc} = ${E / -1}`;
        step2.textContent = `${A}(${major} + ${majorCenter}${mjc}) ${B}(${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} - ${D}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} - ${D}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} - ${D}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} + ${majorCenter / 2}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} ${minorCenter / 2}`;
        minorDeno.textContent = `${radius}`;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${mjc} + ${majorCenter / 2}`;
        finalMajorDeno.textContent = `${majorFinalDeno}`;

        finalMinorIn.textContent = `${mnc} ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${minorFinalDeno}`;
    } 
    else if(A !== 1 && B !== 1 && C < 0 && D > 0 && E > 0){
        step1.textContent = `${A}${major} ${C}${mjc} ${B}${minor} + ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `${A}(${major} ${majorCenter}${mjc}) ${B}(${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} - ${D}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} - ${D}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} - ${D}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} ${majorCenter / 2}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} ${minorCenter / 2}`;
        minorDeno.textContent = `${radius}`;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${mjc} ${C / 2}`;
        finalMajorDeno.textContent = `${majorFinalDeno}`;

        finalMinorIn.textContent = `${mnc} ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${minorFinalDeno}`;
    } 
    else if(A !== 1 && B !== 1 && C > 0 && D < 0 && E > 0){
        step1.textContent = `${A}${major} + ${C}${mjc} ${B}${minor} ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `${A}(${major} + ${majorCenter}${mjc}) ${B}(${minor} + ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} + ${(majorCenter / 2)}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} + ${(minorCenter / 2)}`;
        minorDeno.textContent = `${radius}`;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${mjc} + ${(majorCenter / 2)}`;
        finalMajorDeno.textContent = `${majorFinalDeno}`;

        finalMinorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${minorFinalDeno}`;
    } 
    else if(A !== 1 && B !== 1 && C > 0 && D > 0 && E < 0){
        step1.textContent = `${A}${major} + ${C}${mjc} ${B}${minor} + ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `${A}(${major} + ${majorCenter}${mjc}) ${B}(${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} + ${(majorCenter / 2)}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} ${(minorCenter / 2)}`;
        minorDeno.textContent = `${radius}`;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${mjc} + ${(majorCenter / 2)}`;
        finalMajorDeno.textContent = `${majorFinalDeno}`;

        finalMinorIn.textContent = `${mnc} ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${minorFinalDeno}`;
    } 
    else if(A !== 1 && B !== 1 && C < 0 && D < 0 && E > 0){
        step1.textContent = `${A}${major} ${C}${mjc} ${B}${minor} ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `${A}(${major} ${majorCenter}${mjc}) ${B}(${minor} + ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} ${(majorCenter / 2)}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} + ${(minorCenter / 2)}`;
        minorDeno.textContent = `${radius}`;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${mjc} ${(majorCenter / 2)}`;
        finalMajorDeno.textContent = `${majorFinalDeno}`;

        finalMinorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${minorFinalDeno}`;
    }
    else if(A !== 1 && B !== 1 && C > 0 && D < 0 && E < 0){
        step1.textContent = `${A}${major} + ${C}${mjc} ${B}${minor} ${D}${mnc} = ${E / -1}`;
        step2.textContent = `${A}(${major} + ${majorCenter}${mjc}) ${B}(${minor} + ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} + ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} + ${(majorCenter / 2)}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} + ${(minorCenter / 2)}`;
        minorDeno.textContent = `${radius}`;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${mjc} + ${(majorCenter / 2)}`;
        finalMajorDeno.textContent = `${majorFinalDeno}`;

        finalMinorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${minorFinalDeno}`; 
    }
    else if(A !== 1 && B !== 1 && C < 0 && D > 0 && E < 0){
        step1.textContent = `${A}${major} ${C}${mjc} ${B}${minor} + ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `${A}(${major} ${majorCenter}${mjc}) ${B}(${minor} ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} ${minorCenter}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} ${(majorCenter / 2)}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} ${(minorCenter / 2)}`;
        minorDeno.textContent = `${radius}`;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${mjc} ${(majorCenter / 2)}`;
        finalMajorDeno.textContent = `${majorFinalDeno}`;

        finalMinorIn.textContent = `${mnc} ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${minorFinalDeno}`;
    }
    else if(A !== 1 && B !== 1 && C < 0 && D < 0 && E < 0){
        step1.textContent = `${A}${major} ${C}${mjc} ${B}${minor} ${D}${mnc} = ${E / -1}`; 
        step2.textContent = `${A}(${major} ${majorCenter}${mjc}) ${B}(${minor} + ${minorCenter}${mnc}) = ${E / -1}`;
        step3.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1}`;
        step4.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${E / -1} + ${majorExpanded}(${A}) + ${minorExpanded}(${B})`;
        step5.textContent = `${A}(${major} ${majorCenter}${mjc} + ${majorExpanded}) ${B}(${minor} + ${minorCenter}${mnc} + ${minorExpanded}) = ${radius}`;
        //
        majorOut.textContent = A;
        majorIn.textContent = `${mjc} ${(majorCenter / 2)}`;
        majorDeno.textContent = `${radius}`;

        minorOut.textContent = B / -1;
        minorIn.textContent = `${mnc} + ${(minorCenter / 2)}`;
        minorDeno.textContent = `${radius}`;

        constNume.textContent = `${radius}`;
        constDeno.textContent = `${radius}`;
        //
        finalMajorIn.textContent = `${mjc} ${(majorCenter / 2)}`;
        finalMajorDeno.textContent = `${majorFinalDeno}`;

        finalMinorIn.textContent = `${mnc} + ${minorCenter / 2}`;
        finalMinorDeno.textContent = `${minorFinalDeno}`;
    }
    else if(C == 0 || D == 0){
        noneCoeff(A, B, C, D, E, major, minor, mjc, mnc, majorCenter, minorCenter, majorExpanded, minorExpanded, majorFinalDeno, minorFinalDeno);
    }
    else {
       
}
}

function ABC(majorFinalDeno, minorFinalDeno, radius){
    const graphAValue = document.querySelector(".graphAValue");
    const graphBValue = document.querySelector(".graphBValue");
    const graphCValue = document.querySelector(".graphCValue");
    const graphASqr = document.querySelector(".graphASqr");
    const graphBSqr = document.querySelector(".graphBSqr");
    const graphCSqr = document.querySelector(".graphCSqr");
    //ABC 
    const a2Value = Math.sqrt(majorFinalDeno).toFixed(2);
    const b2Value = Math.sqrt(minorFinalDeno).toFixed(2);

    graphASqr.textContent = (radius > 0) ? majorFinalDeno : minorFinalDeno;
    graphBSqr.textContent = (radius > 0) ? minorFinalDeno : minorFinalDeno;
    graphCSqr.textContent = majorFinalDeno + minorFinalDeno; 
    graphAValue.textContent = (radius > 0) ? a2Value : b2Value;
    graphBValue.textContent = (radius > 0) ? b2Value : a2Value;
    graphCValue.textContent = Math.sqrt(majorFinalDeno + (minorFinalDeno)).toFixed(2);
}
//Vertices and foci and asymptote
function parts(majorFinalDeno, minorFinalDeno, radius, majorCenter, minorCenter, major, minor){
    const vertexValue = document.querySelector(".vertexValue");
    const fociValue = document.querySelector(".fociValue");
    const asymp = document.querySelector(".asympValue");
    const vertexOfA = (radius > 0) ? Math.sqrt(majorFinalDeno) : Math.sqrt(minorFinalDeno);
    const vertexOfB = (radius > 0) ? Math.sqrt(minorFinalDeno) : Math.sqrt(majorFinalDeno);
    const vertexOfC = Math.sqrt(majorFinalDeno + (minorFinalDeno));

    const majorSign = (majorCenter > 0) ? "+" : "-";
    const minorSign = (minorCenter > 0) ? "+" : "-";
    
    if(major == "x²"){
        vertexValue.textContent = `(${((majorCenter / -2) + vertexOfA).toFixed(2)}, ${minorCenter / -2}), (${((majorCenter / -2) - vertexOfA).toFixed(2)}, ${minorCenter / -2})`;
        fociValue.textContent =  `(${((majorCenter / -2) + vertexOfC).toFixed(2)}, ${minorCenter / -2}), (${((majorCenter / -2) - vertexOfC).toFixed(2)}, ${minorCenter / -2})`;
        asymp.innerHTML = `y ${minorSign} ${minorCenter / -2} = &plusmn; ${vertexOfB}/${vertexOfA}(x ${majorSign} ${majorCenter / -2})`;
    } else if(major == "y²"){
        vertexValue.textContent = `(${minorCenter / -2}, ${(majorCenter / -2) + vertexOfA}), (${minorCenter / -2}, ${(majorCenter / -2) - vertexOfA})`;
        fociValue.textContent = `(${minorCenter / -2}, ${((majorCenter / -2) + vertexOfC).toFixed(2)}), (${minorCenter / -2}, ${((majorCenter / -2) - vertexOfC).toFixed(2)})`;
        asymp.innerHTML = `y ${majorSign} ${majorCenter / -2} = &plusmn; ${vertexOfA}/${vertexOfB}(x ${minorSign} ${minorCenter / -2})`;
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
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Draw coordinate plane
function drawCoordinatePlane() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setLineDash([]);

    // Draw grid lines
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 1;

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


function drawHyperbola(majorFinalDeno, minorFinalDeno, radius, major, majorCenter, minorCenter) {
    drawCoordinatePlane();
    let a = (radius > 0) ? Math.sqrt(majorFinalDeno) : Math.sqrt(minorFinalDeno);
    let b = (radius > 0) ? Math.sqrt(minorFinalDeno) : Math.sqrt(majorFinalDeno);
    let h = (major == "x²" && radius > 0) ? majorCenter / -2 : minorCenter / -2;
    let k = (major == "x²" && radius > 0) ? minorCenter / -2 : majorCenter / -2;
    console.log(a,b,h,k,major)

    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;

const arcRange = 15;  // For range of x and y

if (major == "x²") {
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

} else {
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
}
}