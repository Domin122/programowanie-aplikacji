const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    const ur1 = new Date(document.querySelector('#ur1').value);
    const ur2 = new Date(document.querySelector('#ur2').value);
    const imie1 = document.querySelector('#imie1').value;
    const imie2 = document.querySelector('#imie2').value;

    if(ur1.getTime() < ur2.getTime()){
        wynik.innerHTML = `${imie2} jest starszy niż ${imie1} `;
    }
    else if(ur1.getTime() > ur2.getTime()){
        wynik.innerHTML = `${imie1} jest starszy niż ${imie2}`;
    }
    else {
        wynik.innerHTML = `${imie1} i ${imie2} są urodzeni w tym samym czasie`;
    }
})