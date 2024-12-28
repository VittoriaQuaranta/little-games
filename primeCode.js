
var number;
const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499];
var correct = 0;
var incorrect = 0;

window.onload = function () {
    var correctBar = document.getElementById('correctBar');
    var incorrectBar = document.getElementById('incorrectBar');
    var percentText = document.getElementById('percentText');

    function getRandomNumber(b) {
        return Math.floor(Math.random() * b) + 1;
    }

    function displayNumber() {
        number = getRandomNumber(500);
        document.getElementById("number_output").innerHTML = "Your number is " + number;
        document.getElementById("result").innerHTML = "Your number is " + number;
    }

    function checkPrime() {
        return prime.includes(number);
    }

    function thinkPrime() {
        if (checkPrime()) {
            document.getElementById("result").innerHTML = "The number " + number + " is prime";
            correct++;
        } else {
            document.getElementById("result").innerHTML = "The number " + number + " is NOT prime";
            incorrect++;
        }
        updateProgress();
    }

    function thinkNot() {
        if (checkPrime()) {
            document.getElementById("result").innerHTML = "The number " + number + " is prime";
            incorrect++;
        } else {
            document.getElementById("result").innerHTML = "The number " + number + " is NOT prime";
            correct++;
        }
        updateProgress();
    }

    function updateProgress() {
        var total = correct + incorrect;
        var correctPercentage = (correct / total) * 100;
        var incorrectPercentage = (incorrect / total) * 100;

        correctBar.style.width = correctPercentage + '%';
        incorrectBar.style.width = incorrectPercentage + '%';
        percentText.textContent = `Correct: ${correctPercentage.toFixed(1)}% | Incorrect: ${incorrectPercentage.toFixed(1)}%`;
    }

    function resetProgress() {
        correct = 0;
        incorrect = 0;
        correctBar.style.width = '0%';
        incorrectBar.style.width = '0%';
        percentText.textContent = 'Correct: 0% | Incorrect: 0%';
    }

    // Expose functions to buttons
    window.displayNumber = displayNumber;
    window.thinkPrime = thinkPrime;
    window.thinkNot = thinkNot;
    window.resetProgress = resetProgress;
};
