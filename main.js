// sumowanie

let sumowanie = 0;
let tab = [1,2,3,4,5,6];

function suma() {
    for (i=0; i<tab.length; i++) {
        sumowanie = sumowanie + tab[i];
    }
}
suma(tab);
console.log(sumowanie)


// iloczyn

let mnozenie = 1;

function iloczyn() {
    for (i=0; i<tab.length; i++) {
        mnozenie = mnozenie * tab[i];
    }
}
iloczyn(tab);
console.log(mnozenie)
