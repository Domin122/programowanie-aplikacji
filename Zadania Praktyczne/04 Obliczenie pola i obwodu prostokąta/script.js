console.log('Witam')

const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){

    let a =Number(document.querySelector('#liczba_a').value);
    let b =Number(document.querySelector('#liczba_b').value);

 let pole = a * b;
 let obwod = 2*a+2*b;

 let wynik_tekst = `długość boku a = ${a}<br>
                    długość boku b = ${b}<br>
                    pole prostokąta = ${pole}<br>
                    obwód prostokąta = ${obwod}<br>`;
wynik.innerHTML = wynik_tekst;                   

});
