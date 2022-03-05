const sentenceInput = document.getElementById('sentence');
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', () => {
    // split sentence by space
    let words = [...sentenceInput.value.split(/(\s+)/)];
    // filter string to remove whitespace
    words = words.filter( e => e.trim().length > 0);

    // characters is split by anything
    let characters = [...sentenceInput.value.split('')];
    // filter string to remove whitespace
    charactersWithoutSpace = characters.filter( e => e.trim().length > 0);

    // set results to show in output
    document.querySelector('.word-count').textContent = `Number of words: ${words.length}`;
    document.querySelector('.character-count-without-space').textContent = `Number of characters without space: ${charactersWithoutSpace.length}`;
    document.querySelector('.character-count').textContent = `Number of characters: ${characters.length}`;
});