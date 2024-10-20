const intro = document.querySelector(".introduction");
const about = document.querySelector(".about-page");
const quizContainer = document.querySelector(".quiz-container");
const factorContainer = document.querySelector(".factoring-container");
 
const sideNav = document.querySelector(".side-nav");
const hamburgerBar = document.querySelector(".side-nav-btn");
function sideNavBtn(){
    sideNav.classList.toggle("open"); 
    if(sideNav.classList.contains("open")) {
        sideNav.style.transform = "translateX(0)";
        hamburgerBar.innerHTML = '<i class="fa-solid fa-square-xmark"></i>'; 
    } else {
        sideNav.style.transform = "translateX(-100%)";
        hamburgerBar.innerHTML = `<i class="fa-solid fa-bars-staggered"></i> `; 
    } 
}   
 
// SHOW BTN
function introduction() {
    if (intro.style.display === "none") {
        intro.style.display = "block";
        about.style.display = "none";
        quizContainer.style.display = "none";
        factorContainer.style.display = "none";
    } else {
        intro.style.display = "block";
    }
}
 
function aboutUs() {
    if (about.style.display === "none") {
        about.style.display = "block";
        intro.style.display = "none";
        quizContainer.style.display = "none";
        factorContainer.style.display = "none";
    } else {
        about.style.display = "block";
    }
}

function quiz() {
    if (quizContainer.style.display === "none") {
        quizContainer.style.display = "block";
        about.style.display = "none";
        intro.style.display = "none";
        factorContainer.style.display = "none";
    } else {
        quizContainer.style.display = "block";
    }
}

function factoring() {
    if (factorContainer.style.display === "none") {
        factorContainer.style.display = "block";
        quizContainer.style.display = "none";
        about.style.display = "none";
        intro.style.display = "none";
    } else {
        factorContainer.style.display = "block";
    }
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
}

const questions = [
    {//1
        questions: "What is a conic section?",
        answers: [
            {text: "A curve formed by intersecting a plane with a cone.", correct: true},
            {text: "A curve formed by intersecting two planes.", correct: false},
            {text: "A shape formed by rotating a circle.", correct: false},
            {text: "A triangle formed by slicing a cone in half.", correct: false}
        ]
    },{//2
        questions: "What type of conic section is formed when a plane cuts the cone parallel to its base?",
        answers: [
            {text: "Ellipse", correct: false},
            {text: "Parabola", correct: false},
            {text: "Circle", correct: true},
            {text: "Hyperbola", correct: false}
        ]
    },{//3
        questions: "Which conic section is created when the plane cuts the cone at an angle but does not intersect the base?",
        answers: [
            {text: "Parabola", correct: false},
            {text: "Ellipse", correct: true},
            {text: "Circle", correct: false},
            {text: "Hyperbola", correct: false}
        ]
    },{//4
        questions: "What type of conic section is formed when the plane cuts parallel to the side of the cone?",
        answers: [
            {text: "Circle", correct: false},
            {text: "Ellipse", correct: false},
            {text: "Hyperbola", correct: false},
            {text: "Parabola", correct: true}
        ]
    },{//5
        questions: "Which conic section is formed when the plane cuts both nappes of the cone at an angle steeper than that of the side?",
        answers: [
            {text: "Circle", correct: false},
            {text: "Ellipse", correct: false},
            {text: "Parabola", correct: false},
            {text: "Hyperbola", correct: true}
        ]
    },{//6
        questions: "What are degenerate conics?",
        answers: [
            {text: "Conics that form two intersecting lines, a single line, or a point.", correct: true},
            {text: "Conics that only form circles and ellipses.", correct: false},
            {text: "Conics that occur when a plane intersects only one nappe.", correct: false},
            {text: "Conics that only occur when the plane is parallel to the side of the cone.", correct: false}
        ]
    },{//7
        questions: "What is true about a circle?",
        answers: [
            {text: "It is a special kind of ellipse where the plane intersects the cone horizontally.", correct: true},
            {text: "It has a center, but no radius.", correct: false},
            {text: "It is formed when the plane intersects both nappes of the cone.", correct: false},
            {text: "It is a degenerate case of a hyperbola.", correct: false}
        ]
    },{//8
        questions: "What happens when the radius (r) of a circle is greater than 0?",
        answers: [
            {text: "The circle collapses into a point.", correct: false},
            {text: "The circle becomes an ellipse.", correct: false},
            {text: "The circle is normal with r > 0.", correct: true},
            {text: "The center of the circle changes direction.", correct: false}
        ]
    },{//9
        questions: "What happens when the radius (r) is less than 0?",
        answers: [
            {text: "The circle forms a hyperbola.", correct: false},
            {text: "The point lies in the opposite direction with magnitude greater than 1.", correct: true},
            {text: "The circle becomes an ellipse.", correct: false},
            {text: "The radius vanishes completely.", correct: false}
        ]
    },{//10
        questions: "What are the two main parts of a circle?",
        answers: [
            {text: "Focus and Directrix.", correct: false},
            {text: "Radius and Center.", correct: true},
            {text: "Major and Minor Axes.", correct: false},
            {text: "Axis of Symmetry and Latus Rectum.", correct: false}
        ]
    },{//11
        questions: "What is the standard form of a circle with center at (0, 0)?",
        answers: [
            {text: "x² + y² = r", correct: false},
            {text: " x² + y² = r²", correct: true},
            {text: "(x − h)² + (y − k)² = r²", correct: false},
            {text: "x² + y² + r = 0", correct: false}
        ]
    },{//12
        questions: "What is the standard form of a circle with center at (h, k)?",
        answers: [
            {text: "(x − h)² + (y − k)² = r²", correct: true},
            {text: "x² + y² = r²", correct: false},
            {text: "x + y = r", correct: false},
            {text: "x² + y² − h − k = 0", correct: false}
        ]
    },{//13
        questions: "What is the general form of a circle?",
        answers: [
            {text: "Ax² + Bxy + Cy² + Dx + Ey = 0", correct: true},
            {text: "Ax² + Cy² + Dx + Ey + F = 0²", correct: false},
            {text: "x² + y² + h + k = 0", correct: false},
            {text: "Ax + By + Cx² + Dy² = 0", correct: false}
        ]
    },{//14
        questions: "What is a parabola?",
        answers: [
            {text: "A curve where all points are equidistant from a fixed point (focus) and a fixed line (directrix).", correct: true},
            {text: "A curve where all points are equidistant from the center.", correct: false},
            {text: "A curve that opens only upwards or downwards.", correct: false},
            {text: "A curve that forms a circle.", correct: false}
        ]
    },{//15
        questions: "What is the vertex of a parabola?",
        answers: [
            {text: "The point where the parabola intersects the directrix.", correct: false},
            {text: "The sharpest turn point of the parabola.", correct: true},
            {text: "The point where the parabola intersects the focus.", correct: false},
            {text: "The distance between the latus rectum endpoints.", correct: false}
        ]
    },{//16
        questions: "What is the focus of a parabola?",
        answers: [
            {text: "A point equidistant from all points on the parabola.", correct: false},
            {text: "A fixed point that determines the shape of the parabola.", correct: true},
            {text: "A line that cuts the parabola in half.", correct: false},
            {text: " A point on the directrix.", correct: false}
        ]
    },{//17
        questions: "What is the latus rectum of a parabola?",
        answers: [
            {text: "A line that passes through the focus and is perpendicular to the axis of symmetry.", correct: true},
            {text: "The distance from the vertex to the focus.", correct: false},
            {text: "A line that passes through the directrix.", correct: false},
            {text: "A line that defines the axis of symmetry.", correct: false}
        ]
    },{//18
        questions: "What is the axis of symmetry in a parabola?",
        answers: [
            {text: "A line that passes through the latus rectum.", correct: false},
            {text: "A line that cuts the parabola in half.", correct: true},
            {text: "A line perpendicular to the vertex.", correct: false},
            {text: "A line that defines the focus of the parabola.", correct: false}
        ]
    },{//19
        questions: "What is the directrix of a parabola?",
        answers: [
            {text: "A line perpendicular to the axis of symmetry.", correct: true},
            {text: " A line that passes through the vertex and focus.", correct: false},
            {text: "A point that defines the shape of the parabola.", correct: false},
            {text: "A line parallel to the latus rectum.", correct: false}
        ]
    },{//20
        questions: "When does a parabola open upwards?",
        answers: [
            {text: "When the leading coefficient is less than zero.", correct: false},
            {text: "When the constant is positive.", correct: false},
            {text: "When the leading coefficient is more than zero.", correct: true},
            {text: "When the parabola intersects its axis of symmetry.", correct: false}
        ]
    },{//21
        questions: "When does a parabola open downwards?",
        answers: [
            {text: "When the leading coefficient is less than zero.", correct: true},
            {text: "When the constant is positive.", correct: false},
            {text: "When the leading coefficient is more than zero.", correct: false},
            {text: "When the parabola intersects its directrix.", correct: false}
        ]
    },{//22
        questions: "When does a parabola open to the right?",
        answers: [
            {text: "When the leading coefficient is less than zero.", correct: false},
            {text: "When the constant is positive.", correct: true},
            {text: "When the leading coefficient is more than zero.", correct: false},
            {text: "When the parabola intersects its directrix.", correct: false}
        ]
    },{//23
        questions: "When does a parabola open to the left?",
        answers: [
            {text: "When the leading coefficient is less than zero.", correct: false},
            {text: "When the constant is positive.", correct: false},
            {text: "When the parabola intersects its focus.", correct: false},
            {text: "When the constant is negative.", correct: true}
        ]
    },{//24
        questions: "What is an ellipse?",
        answers: [
            {text: "A degenerate conic formed by two intersecting lines.", correct: false},
            {text: "A conic section formed when a plane is perpendicular to the cone’s base.", correct: false},
            {text: "A set of points equidistant from a fixed point (focus) and a line (directrix).", correct: false},
            {text: "A conic section formed when a plane intersects a cone at an angle that is neither parallel nor perpendicular to the cone’s base.", correct: true}
        ]
    },{//25
        questions: "What are the foci of an ellipse?",
        answers: [
            {text: "The points where the major and minor axes intersect.", correct: false},
            {text: "Two fixed points on the major axis equidistant from the center.", correct: true},
            {text: "The endpoints of the minor axis.", correct: false},
            {text: "The points where the ellipse intersects the directrix.", correct: false}
        ]
    },{//26
        questions: "What is the major axis of an ellipse?",
        answers: [
            {text: "The shortest diameter of the ellipse.", correct: false}, 
            {text: "A line perpendicular to the minor axis.", correct: false},
            {text: "The longest diameter of the ellipse passing through both foci.", correct: true},
            {text: "A line that passes through the center of the ellipse.", correct: false}
        ]
    },{//27
        questions: "What is the minor axis of an ellipse?",
        answers: [
            {text: "A line that passes through the focus of the ellipse.", correct: false},
            {text: " The longest diameter of the ellipse passing through both foci.", correct: false},
            {text: "The shortest diameter of the ellipse passing through the center and perpendicular to the major axis.", correct: true},
            {text: "A line perpendicular to the directrix.", correct: false}
        ]
    },{//28
        questions: "What are the vertices of an ellipse?",
        answers: [
            {text: "The points where the ellipse intersects the directrix.", correct: false},
            {text: "The endpoints of the minor axis.", correct: false},
            {text: "The points where the ellipse intersects the focus.", correct: false},
            {text: "The endpoints of the major axis.", correct: true}
        ]
    },{//29
        questions: "What are the co-vertices of an ellipse?",
        answers: [
            {text: "The points where the ellipse intersects the directrix.", correct: false},
            {text: "The endpoints of the minor axis equidistant from the center.", correct: true},
            {text: "The points where the ellipse intersects its foci.", correct: false},
            {text: "The points where the major and minor axes intersect.", correct: false}
        ]
    },{//30
        questions: "What is the general form of an ellipse?",
        answers: [
            {text: "Ax² + Bxy + Cy² + Dx + Ey + F = 0", correct: true},
            {text: "Ax² + Bxy + Cy = 0", correct: false},
            {text: "Ax + By² + Cz = 0", correct: false},
            {text: "Ax² + Dx + Ey = 0", correct: false}
        ]
    },{//31
        questions: "What is a hyperbola?",
        answers: [
            {text: "A circle with two centers.", correct: false},
            {text: "A type of conic section formed when a plane intersects a cone at an angle steeper than the angle of the cone’s sides.", correct: true},
            {text: "A conic section where the plane is parallel to the cone’s base.", correct: false},
            {text: "A type of parabola.", correct: false}
        ]
    },{//32
        questions: "What are the foci of a hyperbola?",
        answers: [
            {text: "Points where the hyperbola intersects the conjugate axis.", correct: false},
            {text: "Fixed points such that the difference in distances from any point on the hyperbola to the two foci is constant.", correct: true},
            {text: "The endpoints of the transverse axis.", correct: false},
            {text: "Points where the hyperbola crosses the asymptotes.", correct: false}
        ]
    },{//33
        questions: "What is the center of a hyperbola?",
        answers: [
            {text: "A point that is equidistant from the vertices.", correct: false},
            {text: "A point where the foci meet.", correct: false},
            {text: "The point where the transverse axis intersects the conjugate axis.", correct: false},
            {text: "The midpoint between two foci.", correct: true}
        ]
    },{//34
        questions: "What are the vertices of a hyperbola?",
        answers: [
            {text: "The points where the hyperbola intersects the conjugate axis.", correct: false},
            {text: "The points where the asymptotes cross the hyperbola.", correct: false},
            {text: "The intersection points of the conjugate axis and transverse axis.", correct: false},
            {text: "The points where the hyperbola intersects its transverse axis.", correct: true}
        ]
    },{//35
        questions: "What is the conjugate axis of a hyperbola?",
        answers: [
            {text: "A line parallel to the asymptotes.", correct: false},
            {text: "A line that passes through the foci.", correct: false},
            {text: "A line that crosses both branches of the hyperbola.", correct: false},
            {text: "A line that passes through the center and is perpendicular to the transverse axis.", correct: true}
        ]
    },{//36
        questions: "What are the endpoints of the conjugate axis?",
        answers: [
            {text: "Points located at the intersection of the transverse and conjugate axes.", correct: false},
            {text: "Points that are located on the conjugate axis and perpendicular to the transverse axis.", correct: true},
            {text: "Points where the hyperbola intersects its asymptotes.", correct: false},
            {text: "Points where the vertices meet the foci.", correct: false}
        ]
    },{//37
        questions: "What are the asymptotes of a hyperbola?",
        answers: [
            {text: "Lines that pass through the center and the foci.", correct: false},
            {text: "Lines that pass through the center and approach the hyperbola but never intersect it.", correct: true},
            {text: "Lines that intersect the hyperbola’s conjugate axis.", correct: false},
            {text: "Lines parallel to the transverse axis.", correct: false}
        ]
    },{//38
        questions: "What is the transverse axis of a hyperbola?",
        answers: [
            {text: "A line that connects the two foci.", correct: false},
            {text: "A line segment that connects the two vertices of the hyperbola.", correct: true},
            {text: "A line perpendicular to the conjugate axis.", correct: false},
            {text: "A line that divides the hyperbola into equal halves.", correct: false}
        ]
    },{//39
        questions: "What distinguishes a hyperbola from an ellipse?",
        answers: [
            {text: "A hyperbola is the set of all points where the sum of distances to the foci is constant, while in an ellipse, it is the difference in distances.", correct: false},
            {text: "A hyperbola is always circular, while an ellipse is oval-shaped.", correct: false},
            {text: "A hyperbola has only one focus, while an ellipse has two foci.", correct: false},
            {text: "A hyperbola is the set of all points where the difference in distances to the foci is constant, while in an ellipse, it is the sum of distances.", correct: true}
        ]
    },{//40
        questions: "What is the relationship between the transverse axis and the foci of a hyperbola?",
        answers: [
            {text: "The transverse axis is always longer than the distance between the foci.", correct: false},
            {text: "The transverse axis is a tangent line to the hyperbola at the foci.", correct: false},
            {text: "The transverse axis is perpendicular to the line connecting the foci.", correct: false},
            {text: "The transverse axis connects the vertices and lies along the line segment joining the two foci.", correct: true}
        ]
    }
];
const question = document.querySelector("#questions");
const answerBtn = document.querySelector("#answer-buttons");
const nextBtn = document.querySelector("#next-btn");
let currentNumber = document.querySelector(".current-number");
let currentScore = document.querySelector(".current-score");
let congratsText = document.querySelector("#congratsText");

let currentQuestionIndex = 0;
let maxNumber = 20;
let score = 0;

// Shuffle function to randomize the order of questions
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    shuffle(questions); // Shuffle questions before starting
    showQuestion(); 
}

function showQuestion() {
    resetQuiz();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    currentNumber.innerHTML = `Questions: ${questionNo} / ${maxNumber}`; 
    question.innerHTML = questionNo + ". " + currentQuestion.questions; // Fixed typo here
    congratsText.innerHTML = "";
    
    const labels = ["A", "B", "C", "D"]; 

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerHTML = `${labels[index]}. ${answer.text}`;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetQuiz() {
    nextBtn.style.display = "none";
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
        currentScore.innerHTML = `Score: ${score}`;
        correctSound();
    } else {
        selectBtn.classList.add("incorrect");
        wrongSound();
    }
    Array.from(answerBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";

}

function showScore() {
    resetQuiz();

    
    if(score > 14 || score == 14){
        question.innerHTML = `You got ${score} correct answer, out of ${maxNumber} questions.`;
        congratsText.innerHTML = "Good!";     
    } else if(score == maxNumber){
        question.innerHTML = `You got ${score} correct answer, out of ${maxNumber} questions.`;
        congratsText.innerHTML = "Very Good, you got a perfect score!";
    } else {
        question.innerHTML = `You got ${score} correct answer, out of ${maxNumber} questions.`;
        congratsText.innerHTML = "Better luck next time.";
    }
    
    nextBtn.innerHTML = "Start Again";
    nextBtn.style.display = "block";
}

function handleNextBtn() {
    currentQuestionIndex++;
    if (currentQuestionIndex < maxNumber) {
        showQuestion();
        startSound();
    } else {
        showScore(); 
    }
}

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < maxNumber) {
        handleNextBtn();
    } else {
        startQuiz();
    }
})

startQuiz();

//-----------Factoring

// Listen for form submission
document.getElementById('polynomialForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.querySelector(".answers-container").style.display = "block";
    
    const input = document.getElementById('polynomialInput').value;
    const resultElement = document.getElementById('result');
    const stepsElement = document.getElementById('steps');
    stepsElement.innerHTML = ""; // Clear previous steps
    
    // Regex to determine polynomial type
    const binomialRegex = /([+-]?\d*)\s*([a-z])\^2\s*([+-]?\s*\d+)?/; // For binomials
    const trinomialRegex = /([+-]?\d*)\s*([a-z])[\^²]2\s*([+-]\s*\d+)?\s*\2\s*([+-]\s*\d+)?/; // For trinomials
    
    const binomialMatches = input.match(binomialRegex);  
    const trinomialMatches = input.match(trinomialRegex);  
    
    if (trinomialMatches) {
        // Trinomial case
        const variableTri = trinomialMatches[2];
        const ATri = trinomialMatches[1] ? parseInt(trinomialMatches[1].replace(/\s+/g, '')) : 1;
        const BTri = trinomialMatches[3] ? parseInt(trinomialMatches[3].replace(/\s+/g, '')) : 0;
        const CTri = trinomialMatches[4] ? parseInt(trinomialMatches[4].replace(/\s+/g, '')) : 0;

        const factored = factorTrinomial(ATri, BTri, CTri, stepsElement, variableTri);
        resultElement.textContent = factored;
    } else if (binomialMatches) {
        // Binomial case
        const variable = binomialMatches[2];
        const A = binomialMatches[1] ? parseInt(binomialMatches[1].replace(/\s+/g, '')) : null;
        const C = binomialMatches[3] ? parseInt(binomialMatches[3].replace(/\s+/g, '')) : 0;

        const factored = factorBinomial(A, C, stepsElement, variable);
        resultElement.textContent = factored;
    } else {
        resultElement.textContent = 'Invalid polynomial format. Please enter in the form Ax² + C or Ax² + Bx + C.';
    }
});

function factorBinomial(A, C, stepsElement, variable) {
    // Helper function to show steps
    function showStep(step) {
        const p = document.createElement('p');
        p.textContent = step;
        stepsElement.appendChild(p);
    }

    // Case 1: Difference of squares
    if (C < 0) {
        showStep(`Step 1: This is a difference of squares: ${A !== null ? A : ''}${variable}² - ${Math.abs(C)}`);
        const sqrtC = Math.sqrt(Math.abs(C));
        showStep(`Step 2: Calculate the square root of ${Math.abs(C)}: √${Math.abs(C)} = ${sqrtC}`);
        const factorization = `(${A !== null ? Math.sqrt(A) : ''}${variable} + ${sqrtC})(${A !== null ? Math.sqrt(A) : ''}${variable} - ${sqrtC})`;
        showStep(`Step 3: Factorization result: ${factorization}`);
        return factorization;
    } 
    
    // Case 2: If there is no middle term and A is not provided (undefined or null)
    if (C >= 0 && A === null) {
        showStep(`Step 2: This is a sum of squares: ${variable}² + ${C}.`);
        return "No real factorization possible.";
    }

    // If no real factorization is found
    return "No real factorization possible.";
}

function factorTrinomial(ATri, BTri, CTri, stepsElement, variableTri) {
    // Helper function to show steps
    function showStep(step) {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${step}</strong>`;
        stepsElement.appendChild(p);
    }

    // Helper function to find factors of a number
    function findFactors(num) {
        let factors = [];
        for (let i = 1; i <= Math.abs(num); i++) {
            if (num % i === 0) {
                factors.push([i, num / i]);        // Add positive pair
                factors.push([-i, -(num / i)]);    // Add negative pair
            }
        }
        return factors;
    }

    showStep(`Step 1: Identify the value of each: A = ${ATri}, B = ${BTri}, C = ${CTri}`);

    // Case 1: If A = 1, use simple factoring
    if (ATri === 1) {
        showStep(`Step 2: Since A = 1, we need to find two numbers that multiply to give C (${CTri}) and add up to B (${BTri}).`);
        const factors = findFactors(CTri);
        for (let factor of factors) {
            if (factor[0] + factor[1] === BTri) {
                showStep(`Step 3: The factors found are: ${factor[0]} and ${factor[1]}. These add up to B (${BTri}) and multiply to give C (${CTri}).`);
                const firstSign = factor[0] > 0 ? "+" : "-";
                const secondSign = factor[1] > 0 ? "+" : "-";
                return `(${variableTri} ${firstSign} ${Math.abs(factor[0])})(${variableTri} ${secondSign} ${Math.abs(factor[1])})`;
            }
        }
    }

    // Case 2: If A > 1, use factoring by splitting the middle term
    if (ATri > 1) {
        const AC = ATri * CTri;
        showStep(`Step 2: Since A > 1, we will multiply A * C = ${AC}.`);
        
        const factors = findFactors(AC);
        showStep(`Step 3: We need to find the factors of ${AC}, where the sum should equal B (${BTri}).`);
        
        for (let factor of factors) {
            if (factor[0] + factor[1] === BTri) {
                showStep(`Step 4: The factors of ${AC}: ${factor[0]} and ${factor[1]} which add up to B (${BTri}).`);
                
                // Rewrite middle term and factor by grouping
                let factor1 = factor[0], factor2 = factor[1];
                showStep(`Step 5: Split the middle term: ${ATri}${variableTri}² + (${factor1})${variableTri} + (${factor2})${variableTri} + ${CTri}`);
                
                const firstSign1 = factor1 > 0 ? "+" : "-";
                const secondSign2 = (CTri / factor1) > 0 ? "+" : "-";
                
                showStep(`Step 6: Group and factor the expression: ${variableTri}(${ATri}${variableTri} ${firstSign1} ${Math.abs(factor1)}) ${firstSign1}${Math.abs(factor1)}(${ATri}${variableTri} ${secondSign2} ${Math.abs(CTri / factor1)}). Then group the variable and number that is outside the parenthesis.`);
                
                return `(${ATri}${variableTri} ${firstSign1} ${Math.abs(factor1)})(${variableTri} ${secondSign2} ${Math.abs(CTri / factor1)})`;
            }
        }
    }

    // If no simple factorization is found, use the quadratic formula

    showStep(`Step 3: If no real roots found. We can use the quadratic formula which is <math xmlns="http://www.w3.org/1998/Math/MathML">
  <mrow>
    <mi>x</mi>
    <mo>=</mo>
    <mfrac linethickness="1">
      <mrow>
        <mo>-</mo>
        <mi>b</mi>
        <mo>&#xB1;</mo>
        <msqrt>
          <mrow>
            <msup><mi>b</mi><mn>2</mn></msup>
            <mo>-</mo>
            <mn>4</mn>
            <mo>&#8290;</mo>
            <mi>a</mi>
            <mo>&#8290;</mo>
            <mi>c</mi>
          </mrow>
        </msqrt>
      </mrow>
      <mrow>
        <mn>2</mn>
        <mo>&#8290;</mo>
        <mi>a</mi>
      </mrow>
    </mfrac>
  </mrow>
</math>
.`);

    
    return "Try using the quadratic formula to find the roots.";
}

