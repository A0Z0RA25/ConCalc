const step1Container = document.querySelector(".step1");
const step2Container = document.querySelector(".step2");
const step3Container = document.querySelector(".step3");

function xIsA() {
    const a = parseFloat(document.getElementById('ax').value);
    const h = parseFloat(document.getElementById('hx').value);
    const k = parseFloat(document.getElementById('kx').value);

    const xpanded = h * 2;
    const expandConstx = Math.pow(h, 2);

    const kconstant = a * k;

    // X is not none but Y is
    const xNotZero = [
      {"step1Positive": `x² + ${xpanded}x + ${expandConstx} = ${a}y`},
      {"step1Negative": `x²  ${xpanded}x + ${expandConstx} = ${a}y`},
      {"step2Positivea": `x² + ${xpanded}x + ${a / -1}y + ${expandConstx} = 0`},
      {"step2Negativea": `x² + ${xpanded}x ${a / -1}y + ${expandConstx} = 0`},
      {"step2Negativexa": `x²  ${xpanded}x ${a / -1}y + ${expandConstx} = 0`},
      {"step2Negativex": `x²  ${xpanded}x + ${a / -1}y + ${expandConstx} = 0`}
    ]

    //

    if(h == 0 && k == 0){
      // X AND Y IS none
      if(a < 0){
        step1Container.textContent = `x² + ${a / -1}y = 0`;
        step2Container.textContent = '';

      } else {
        step1Container.textContent = `x²  ${a / -1}y = 0`;
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
        step1Container.textContent = `x² = ${a}y + ${kconstant}`;
        step2Container.textContent = `x² ${a / -1}y ${kconstant / -1} = 0`;
      } 
      
      else if(k < 0 && a > 0){
        step1Container.textContent = `x² = ${a}y ${kconstant}`;
        step2Container.textContent = `x² ${a / -1}y + ${kconstant / -1} = 0`;
      }
      else if(k > 0 && a < 0){
        step1Container.textContent = `x² = ${a}y ${kconstant}`;
        step2Container.textContent = `x² + ${a / -1}y + ${kconstant / -1} = 0`;
      } 
      else {
        step1Container.textContent = `x² = ${a}y + ${kconstant}`;
        step2Container.textContent = `x² + ${a / -1}y ${kconstant / -1} = 0`;
      }
    }
    else if(h !== 0 && k !== 0){
       // X AND Y NOT none
      if(h > 0 && a > 0 && k > 0){
        step1Container.textContent = `x² + ${xpanded}x + ${expandConstx} = ${a}y + ${kconstant}`;
        step2Container.textContent = `x² + ${xpanded}x ${a / -1}y + ${expandConstx} ${kconstant / -1} = 0`;
        step3Container.textContent = `x² + ${xpanded}x ${a / -1}y ${expandConstx + (kconstant / -1)} = 0`;
      } 
      else if(h > 0 && a < 0 && k < 0){
        step1Container.textContent = `x² + ${xpanded}x + ${expandConstx} = ${a}y + ${kconstant}`;
        step2Container.textContent = `x² + ${xpanded}x + ${a / -1}y + ${expandConstx} ${kconstant / -1} = 0`;
        step3Container.textContent = `x² + ${xpanded}x + ${a / -1}y ${expandConstx + kconstant / -1} = 0`;
      } 
      else if(h > 0 && a < 0 && k > 0){
        step1Container.textContent = `x² + ${xpanded}x + ${expandConstx} = ${a}y ${kconstant}`;
        step2Container.textContent = `x² + ${xpanded}x + ${a / -1}y + ${expandConstx} + ${kconstant / -1} = 0`;
        step3Container.textContent = `x² + ${xpanded}x + ${a / -1}y + ${expandConstx + kconstant / -1} = 0`;
      } 
      else if(h > 0 && a > 0 && k < 0){
        step1Container.textContent = `x² + ${xpanded}x + ${expandConstx} = ${a}y ${kconstant}`;
        step2Container.textContent = `x² + ${xpanded}x ${a / -1}y + ${expandConstx} + ${kconstant / -1} = 0`;
        step3Container.textContent = `x² + ${xpanded}x ${a / -1}y + ${expandConstx + kconstant / -1} = 0`;
      } 
      else if(h < 0 && a > 0 && k < 0){
        step1Container.textContent = `x² ${xpanded}x + ${expandConstx} = ${a}y ${kconstant}`;
        step2Container.textContent = `x² ${xpanded}x ${a / -1}y + ${expandConstx} + ${kconstant / -1} = 0`;
        step3Container.textContent = `x² ${xpanded}x ${a / -1}y + ${expandConstx + kconstant / -1} = 0`;
      } 
      else if(h < 0 && a < 0 && k > 0){
        step1Container.textContent = `x² ${xpanded}x + ${expandConstx} = ${a}y ${kconstant}`;
        step2Container.textContent = `x² ${xpanded}x + ${a / -1}y + ${expandConstx} + ${kconstant / -1} = 0`;
        step3Container.textContent = `x² ${xpanded}x + ${a / -1}y + ${expandConstx + kconstant / -1} = 0`;
      } 
      else if(h < 0 && a > 0 && k > 0){
        step1Container.textContent = `x² ${xpanded}x + ${expandConstx} = ${a}y + ${kconstant}`;
        step2Container.textContent = `x² ${xpanded}x ${a / -1}y + ${expandConstx} ${kconstant / -1} = 0`;
        step3Container.textContent = `x² ${xpanded}x ${a / -1}y + ${expandConstx + kconstant / -1} = 0`;
      } 
      else{
        step1Container.textContent = `x² ${xpanded}x + ${expandConstx} = ${a}y + ${kconstant}`;
        step2Container.textContent = `x² ${xpanded}x + ${a / -1}y + ${expandConstx} ${kconstant / -1} = 0`;
        step3Container.textContent = `x² ${xpanded}x + ${a / -1}y + ${expandConstx + kconstant / -1} = 0`;
      } 
    }
    else {
      step1Container = "";
      step2Container = "";
      step3Container = "";
    } 
  }
  
// FOR Y2-----------------------------------------------------------------
  function yIsA() {
    const a = parseFloat(document.getElementById('ay').value);
    const h = parseFloat(document.getElementById('hy').value);
    const k = parseFloat(document.getElementById('ky').value);

    const ypanded = h * 2;
    const expandConsty = Math.pow(h, 2);

    const kconstant = a * k;

    // X is not none but Y is
    const xNotZero = [
      {"step1Positive": `y² + ${ypanded}y + ${expandConsty} = ${a}x`},
      {"step1Negative": `y²  ${ypanded}y + ${expandConsty} = ${a}x`},
      {"step2Positivea": `y² + ${ypanded}y + ${a / -1}x + ${expandConsty} = 0`},
      {"step2Negativea": `y² + ${ypanded}y ${a / -1}x + ${expandConsty} = 0`},
      {"step2Negativexa": `y²  ${ypanded}y ${a / -1}x + ${expandConsty} = 0`},
      {"step2Negativex": `y²  ${ypanded}y + ${a / -1}x + ${expandConsty} = 0`}
    ]

    //

    if(h == 0 && k == 0){
      // X AND Y IS none
      if(a < 0){
        step1Container.textContent = `y² + ${a / -1}x = 0`;
        step2Container.textContent = '';

      } else {
        step1Container.textContent = `y²  ${a / -1}x = 0`;
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
        step1Container.textContent = `x² = ${a}y + ${kconstant}`;
        step2Container.textContent = `x² ${a / -1}y ${kconstant / -1} = 0`;
      } 
      
      else if(k < 0 && a > 0){
        step1Container.textContent = `x² = ${a}y ${kconstant}`;
        step2Container.textContent = `x² ${a / -1}y + ${kconstant / -1} = 0`;
      }
      else if(k > 0 && a < 0){
        step1Container.textContent = `x² = ${a}y ${kconstant}`;
        step2Container.textContent = `x² + ${a / -1}y + ${kconstant / -1} = 0`;
      } 
      else {
        step1Container.textContent = `x² = ${a}y + ${kconstant}`;
        step2Container.textContent = `x² + ${a / -1}y ${kconstant / -1} = 0`;
      }
    }
    else if(h !== 0 && k !== 0){
       // X AND Y NOT none
      if(h > 0 && a > 0 && k > 0){
        step1Container.textContent = `y² + ${ypanded}y + ${expandConsty} = ${a}x + ${kconstant}`;
        step2Container.textContent = `y² + ${ypanded}y ${a / -1}x + ${expandConsty} ${kconstant / -1} = 0`;
        step3Container.textContent = `y² + ${ypanded}y ${a / -1}x ${expandConsty + (kconstant / -1)} = 0`;
      } 
      else if(h > 0 && a < 0 && k < 0){
        step1Container.textContent = `y² + ${ypanded}y + ${expandConsty} = ${a}x + ${kconstant}`;
        step2Container.textContent = `y² + ${ypanded}y + ${a / -1}x + ${expandConsty} ${kconstant / -1} = 0`;
        step3Container.textContent = `y² + ${ypanded}y + ${a / -1}x ${expandConsty + kconstant / -1} = 0`;
      } 
      else if(h > 0 && a < 0 && k > 0){
        step1Container.textContent = `y² + ${ypanded}y + ${expandConsty} = ${a}x ${kconstant}`;
        step2Container.textContent = `y² + ${ypanded}y + ${a / -1}x + ${expandConsty} + ${kconstant / -1} = 0`;
        step3Container.textContent = `y² + ${ypanded}y + ${a / -1}x + ${expandConsty + kconstant / -1} = 0`;
      } 
      else if(h > 0 && a > 0 && k < 0){
        step1Container.textContent = `y² + ${ypanded}y + ${expandConsty} = ${a}x ${kconstant}`;
        step2Container.textContent = `y² + ${ypanded}y ${a / -1}x + ${expandConsty} + ${kconstant / -1} = 0`;
        step3Container.textContent = `y² + ${ypanded}y ${a / -1}x + ${expandConsty + kconstant / -1} = 0`;
      } 
      else if(h < 0 && a > 0 && k < 0){
        step1Container.textContent = `y² ${ypanded}y + ${expandConsty} = ${a}x ${kconstant}`;
        step2Container.textContent = `y² ${ypanded}y ${a / -1}x + ${expandConsty} + ${kconstant / -1} = 0`;
        step3Container.textContent = `y² ${ypanded}y ${a / -1}x + ${expandConsty + kconstant / -1} = 0`;
      } 
      else if(h < 0 && a < 0 && k > 0){
        step1Container.textContent = `y² ${ypanded}y + ${expandConsty} = ${a}x ${kconstant}`;
        step2Container.textContent = `y² ${ypanded}y + ${a / -1}x + ${expandConsty} + ${kconstant / -1} = 0`;
        step3Container.textContent = `y² ${ypanded}y + ${a / -1}x + ${expandConsty + kconstant / -1} = 0`;
      } 
      else if(h < 0 && a > 0 && k > 0){
        step1Container.textContent = `y² ${ypanded}y + ${expandConsty} = ${a}x + ${kconstant}`;
        step2Container.textContent = `y² ${ypanded}y ${a / -1}x + ${expandConsty} ${kconstant / -1} = 0`;
        step3Container.textContent = `y² ${ypanded}y ${a / -1}x + ${expandConsty + kconstant / -1} = 0`;
      } 
      else{
        step1Container.textContent = `y² ${ypanded}y + ${expandConsty} = ${a}x + ${kconstant}`;
        step2Container.textContent = `y² ${ypanded}y + ${a / -1}x + ${expandConsty} ${kconstant / -1} = 0`;
        step3Container.textContent = `y² ${ypanded}y + ${a / -1}x + ${expandConsty + kconstant / -1} = 0`;
      } 
    }
    else {
      step1Container = "";
      step2Container = "";
      step3Container = "";
    }
    
  
  }