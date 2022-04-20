 setTimeout(() => {
    const firstDiv = document.querySelector('#first'); 
    const p1 = document.createElement('p');
    p1.innerText = `Hi`;
    firstDiv.append(p1);
}, 1000);

setTimeout(() => {
    const secondDiv = document.querySelector(`#timeout-nesting`);
    const p2 = document.createElement( `p`);
    p2.innerText = `One`;
    secondDiv.append(p2);
    setTimeout(() => {
        const p3 = document.createElement(`p`);
        p3.innerText = `Two`;
        secondDiv.append(p3);
    }, 1000);
},2000);

const thirdDiv = document.querySelector(`#countdown`);
let timer = 1;

const a3 = setInterval(() => {
    timer++;
    thirdDiv.innerText = timer
}, 1000);

const stop = document.querySelector(`button`);
stop.addEventListener(`click`, () => {
  clearInterval(a3);
});