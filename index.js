let corps = document.querySelector('body');
let elt = corps.querySelectorAll('button');

console.log(elt);

elt[0].onclick = function fontbleu() {
    
    corps.style.backgroundColor = 'blue';
}
elt[1].onclick = function fontred() {

    corps.style.backgroundColor = 'red';
}

elt[2].onclick = function fontgreen() {

    corps.style.backgroundColor = 'green';
} 

