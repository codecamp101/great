/*this changes the text inside of an element
// document.querySelector('#user > b').textContent = 'menma';
// document.querySelector('#user > i').textContent = '?';
*/
//this is an array of numers
//[1,2,'computer',4]
const eye = document.querySelector('#eye');
const output = document.querySelector('output');
const ipt = document.querySelector('input');
const fm = document.querySelector('form');
const user = document.querySelector('#user');
const start = document.querySelector('#start');
const pop = document.querySelector('#pop');
// this unmask the password
const pan = document.querySelector('#panel');
eye.addEventListener('mousedown', () => {
    ipt.type = 'text';
});
eye.addEventListener('mouseup', () => {
    ipt.type = 'password';
});
fm.addEventListener('submit', (e) => {
    e.preventDefault(); //this will stop the page from reloading
    const pd = 'abc';
    if (pd === ipt.value) {
        fm.remove();
        output.textContent = 'signing you in...';
        const timeoutID = setTimeout(() => {
        pop.showPopover();
        clearTimeout(timeoutID);
        }, 3000);
    }else {
        output.textContent = 'wrong password';
    }
});
//this shows/hides the #panel
start.addEventListener('click',() => {
    PannerNode.classlist.toggle('on');
})
//this format a Unix number into a human-reliable date
const dob = new Date('5/27/2010').getTime();// date format in JavaScript mm-dd-yyy
pan.querySelector('#dob').textContent = Intl.DateTimeFormat('en',{dateStyle:'full'}).format(dob);
//FUNCTIONS
// A function is a group of statements that does not run unless when called
function calculator () {
    console.log(2 + 4);
    console.log(10 - 5);
    console.log(10 / 2);
    console.log(3 * 3);
    console.log(5 % 3); //modulus (short form is mod): the remain
}
calculator();
function callConfetti () {
    /*
    const t = "ME"
    const u = "YOU"
    console.log(t = u); //concatenation: join strings together
    */
   const d = new Date("05/27/2010").getDate();
   const m = new Date("05/27/2010") .getMonth();
   const today = Date.now();
   if (new Date(today).getDate() === d && new Date(today).getMonth() === m) {
   pan.classlist.add('bgi');
   }
}
callConfetti();


    


