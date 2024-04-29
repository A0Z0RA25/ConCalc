const step1Container = document.querySelector(".step1");
const step2Container = document.querySelector(".step2");
const step3Container = document.querySelector(".step3");
const result = document.querySelector(".result");


function transform(){
    const xVal = parseFloat(document.querySelector(".h").value);
    const yVal = parseFloat(document.querySelector(".k").value);
    const radius = parseFloat(document.querySelector(".radius").value);
    const result = document.querySelector(".result");

    const coeffX = xVal * 2;
    const coeffY = yVal * 2;
    const constantOfX = Math.pow(xVal, 2);
    const constantOfY = Math.pow(yVal, 2);
    const radiusOfGf = (constantOfX + constantOfY) + (radius / -1);
 
    const step1 = [ {"bothPositive": `(x² + ${coeffX}x + ${constantOfX}) + (y² + ${coeffY}y + ${constantOfY}) = ${radius}`},
                  {"xpositive": `(x² + ${coeffX}x + ${constantOfX}) + (y² ${coeffY}y + ${constantOfY}) = ${radius}`},
                  {"ypositive": `(x² ${coeffX}x + ${constantOfX}) + (y² + ${coeffY}y + ${constantOfY}) = ${radius}`},
                  {"bothNegative": `(x² ${coeffX}x + ${constantOfX}) + (y² ${coeffY}y + ${constantOfY}) = ${radius}`}
                  ];

    const step2 = [
                  {"bothPositive": `x² + y² + ${coeffX} + ${coeffY} + ${constantOfX} + ${constantOfY} + ${radius / -1} = 0`},
                  {"xpositive": `x² + y² + ${coeffX} ${coeffY} + ${constantOfX} + ${constantOfY} + ${radius / -1} = 0`},
                  {"ypositive": `x² + y² ${coeffX} + ${coeffY} + ${constantOfX} + ${constantOfY} + ${radius / -1} = 0`},
                  {"bothNegative": `x² + y² ${coeffX} ${coeffY} + ${constantOfX} + ${constantOfY} + ${radius / -1} = 0`}
    ];
    console.log(step2.bothPositive)


    if(xVal > 0 && yVal > 0){
        step2Container.textContent = step2[0].bothPositive;
        step1Container.textContent =  step1[0].bothPositive;
    }
    else {
        result.textContent = "Invalid input";
    }

    console.log(coeffX,constantOfX,coeffY, constantOfY, radiusOfGf)
}