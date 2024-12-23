let counterValue = document.getElementById("counter"); 

function onincrement() {
    let previousCounterValue = parseInt(counterValue.textContent); 
    let updatedCounterValue = previousCounterValue + 1; 
    counterValue.textContent = updatedCounterValue; 
}

function ondecrement() {
    let previousCounterValue = parseInt(counterValue.textContent); 
    let updatedCounterValue = previousCounterValue - 1; 
    counterValue.textContent = updatedCounterValue; 
}

function onreset() {
    let updatedCounterValue= 0;
    counterValue.textContent=updatedCounterValue;
}
