const resultDiv = document.getElementById('circleGF-result');
const invalidValue = document.querySelector(".invalid");
const form = document.querySelector(".form");
const step1Container = document.querySelector(".step1");
const step2Container = document.querySelector(".step2");
const answerContainer = document.querySelector(".answer-container");


function transform() {
    const coeffX = parseFloat(document.getElementById('coeffX').value);
    const coeffY = parseFloat(document.getElementById('coeffY').value);
    const constant = parseFloat(document.getElementById('constant').value);
    const xvalue = parseFloat(document.getElementById('xvalue').value);
    const yvalue = parseFloat(document.getElementById('yvalue').value);
    // Transforming general form to standard form
    const centerX = (coeffX / xvalue) / 2;
    const centerY = (coeffY / yvalue) / 2;
    const radius = Math.pow(centerX, 2) + Math.pow(centerY, 2) - (constant / xvalue);
    const xpow = Math.pow(centerX, 2);
    const ypow = Math.pow(centerY, 2);
    const constantSt = Math.sqrt(Math.pow(constant, 2));
    // Output the result

    const step1 = [
        {"bothPostive": `x² + ${coeffX / xvalue}x + y² + ${coeffY / yvalue}y = ${(constant / -1) / xvalue}`},
        {"xPostive" : `x² + ${coeffX / xvalue}x + y² ${coeffY / yvalue}y = ${(constant / -1) / xvalue}`},
        {"yPositive" : `x² ${coeffX / xvalue}x + y² + ${coeffY / yvalue}y = ${(constant / -1) / xvalue}`},
        {"bothNegative" : `x² ${coeffX / xvalue}x + y² ${coeffY / yvalue}y = ${(constant / -1) / xvalue}`}
    ]

    const step2 = [
        {"bothPostive": `x² + ${coeffX / xvalue}x + ${xpow} + y² + ${coeffY / yvalue}y + ${ypow} = ${(constant / -1) / xvalue} + ${xpow} + ${ypow}`},
        {"xPostive" : `x² + ${coeffX / xvalue}x + ${xpow} + y² ${coeffY / yvalue}y + ${ypow} = ${(constant / -1) / xvalue} + ${xpow} + ${ypow} `} ,
        {"yPositive" : `x² ${coeffX / xvalue}x + ${xpow} + y² + ${coeffY / yvalue}y + ${ypow} = ${(constant / -1) / xvalue} + ${xpow} + ${ypow}`},
        {"bothNegative" : `x² ${coeffX / xvalue}x + ${xpow} + y² ${coeffY / yvalue}y + ${ypow} = ${(constant / -1) / xvalue} + ${xpow} + ${ypow}`}
    ]

    if (xvalue === yvalue) {
        //FINAL ANSWER WILL DISPLAY
        invalidValue.textContent = "";
        const answers = document.querySelector(".circleGF-answer-container");
        answers.style.display = "block";
        // CENTER GREATER 0R LESSTHAN
        if (centerX > 0 && centerY > 0) {

            step1Container.textContent = "First Step:" + step1[0].bothPostive;
            step2Container.textContent = "Second Step:" + step2[0].bothPostive;

            resultDiv.textContent = ` Final answer:(x + ${centerX})²+(y + ${centerY})²= √${radius}`;
        } else if (centerX > 0) {

            step1Container.textContent = "First Step:" + step1[1].xPostive;
            step2Container.textContent = "Second Step:" + step2[1].xPostive;

            resultDiv.textContent = `Final answer: (x + ${centerX})²+(y ${centerY})²= √${radius}`;
        } else if (centerY > 0) {

            step1Container.textContent = "First Step:" + step1[2].yPositive;
            step2Container.textContent = "Second Step:" + step2[2].yPositive;

            resultDiv.textContent = `Final answer: (x ${centerX})²+(y + ${centerY})²= √${radius}`;
        } else {

            step1Container.textContent = "First Step:" + step1[3].bothNegative;
            step2Container.textContent = "Second Step:" + step2[3].bothNegative;

            resultDiv.textContent = `Final answer: (x ${centerX})²+(y ${centerY})²= √${radius}`;
        }
    }
    //DISPLAY INVALID VALUE
    else {
        step1Container.textContent = "";
        step2Container.textContent = "";
        invalidValue.textContent = "It should be equal";
        resultDiv.textContent = "";
    }
}



