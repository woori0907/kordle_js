const wordInputs = document.querySelectorAll('.word-input');
console.log(wordInputs);
wordInputs.forEach(wordInput => {
    wordInput.addEventListener('keyup', (event) => {
        event.preventDefault();
        console.log(event.keyCode);
        if(event.keyCode === 229){
            wordInput.nextElementSibling.focus();
        }
        if(event.keyCode === 8){
            wordInput.previousElementSibling.focus();
        }
    });
});