function transform() {
    var coeffX = parseFloat(document.getElementById('coeffX').value);
    var coeffY = parseFloat(document.getElementById('coeffY').value);
    var constant = parseFloat(document.getElementById('constant').value);
    var xvalue = parseFloat(document.getElementById('xvalue').value);
    var yvalue = parseFloat(document.getElementById('yvalue').value);
    // Transforming general form to standard form
    var centerX = (coeffX / xvalue) / 2;
    var centerY = (coeffY / yvalue) / 2;
    var radius = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2) - (constant / xvalue));
    
    // Output the result
    var resultDiv = document.getElementById('result');
    if (!isNaN(radius)) {
        if(centerX > 0 && centerY > 0){
            resultDiv.innerHTML = "Standard Form: (x +" + centerX + ")² + (y +" + centerY + ")² = " + Math.trunc(Math.pow(radius, 2)) ;
        } else if(centerX > 0){
            resultDiv.innerHTML = "Standard Form: (x +" + centerX + ")² + (y " + centerY + ")² = " + Math.trunc(Math.pow(radius, 2)) ;
        } else if(centerY > 0 ){
            resultDiv.innerHTML = "Standard Form: (x " + centerX + ")² + (y +" + centerY + ")² = " + Math.trunc(Math.pow(radius, 2)) ;
        }
        else{
            resultDiv.innerHTML = "Standard Form: (x " + centerX + ")² + (y " + centerY + ")² = " + Math.trunc(Math.pow(radius, 2)) ;
        }
    } else {
        resultDiv.innerHTML = "Invalid inputs. Please enter valid coefficients and constant.";
    }
}