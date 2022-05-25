var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    if (currentNumber < 10) {
	currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement() {
    if (currentNumber >= 0) {
	currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }

}

counter.onclick = function() {
    if (currentNumber < 0) {
        document.getElementById("counter").style.color = "red";
    }
    else
        document.getElementById("counter").style.color = "blue";
}


