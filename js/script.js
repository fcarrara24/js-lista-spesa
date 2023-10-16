// const btn = document.querySelector('button');
// const inputEl = document.getElementById('data');
const resultEl = document.querySelector('.alert');

let listaDaAcqiuistare = [];
let substring = []
let stop = false;
do {



    elemento = prompt('inserire gli elementi da acquistare; scrivere "stop" per finire');
    //if he inserts items with spaces
    substring = elemento.split(" ");
    for (let i = 0; i < substring.length; i++) {
        if (substring[i] !== 'stop') {
            listaDaAcqiuistare.push(substring[i])

        } else {
            stop = true;

            break;
        }
    }

} while (!stop);

resultEl.innerHTML = `<ul>
                            `
for (let i = 0; i < listaDaAcqiuistare.length; i++) {
    console.log(listaDaAcqiuistare[i]);
    resultEl.innerHTML += `<li> ${listaDaAcqiuistare[i]} </li> `
}
resultEl.innerHTML += `</ul>`

resultEl.classList.remove('d-none');