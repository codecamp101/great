const hintBtn = document.querySelector('#hintBtn');
const txt = document.querySelector('#txt');
hintBtn.addEventListener('click', () => {
    writeTxt();
});
function writeTxt() {
    const text = 'To Walk unsteadily, as like a baby';
    txt.textContent = '';
    let count = 0;
    const id = setInterval(() => {
        if (count === text.length - 1) clearInterval(id); //add -1 to
        txt.textContent += text[count];
        count++; //count++ keeps adding 1 to value of count
    }, 100);
}
let score = '0';
const checkBtn = document.querySelector('#checkBtn');
checkBtn.addEventListener('click',() => {
    console.log
})
