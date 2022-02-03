'use strict';

const mainBody = document.getElementById('body');

let textSplit

const generator = (text) => {
    textSplit = text.split('\r\n')
    console.log(textSplit);
    let kap = document.createElement('div');
    textSplit.forEach((stycke, i) => {
        if (i == 0) {
            let h2 = document.createElement('h2');
            h2.textContent = stycke;
            kap.append(h2);
        }
        else if (stycke === ''){}
        else if (stycke[0] === '#'){
            let count = 0;
            do {
                count++;
            } while (stycke[count] === '#');
            let hx = document.createElement('h' + (count + 2));
            hx.textContent = stycke;
            kap.append(hx);
        }
        else {
            const p = document.createElement('p');
            p.textContent = stycke;
            kap.append(p);
        }
        
    });

    mainBody.append(kap);
}



for (let index = 1; index <= 14; index++) {
    fetch('/mall.txt')
    .then(x => { 
        if (x.ok) return x.text();
    }).then(text => generator(text)).catch();
}
