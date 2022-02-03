'use strict';

const mainBody = document.getElementById('body');

const generator = (text) => {
    let textSplit = text.split('\r\n');
    let kap = document.createElement('div');
    textSplit.forEach((stycke, i) => {
        if (stycke === ''){}
        else if (stycke[0] === '#'){
            let count = 0;
            do {
                count++;
            } while (stycke[count] === '#');
            let hx = document.createElement('h' + (count + 1));
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
    fetch('/kap' + index + '.md')
    .then(x => { 
        if (x.ok) return x.text();
    }).then(text => generator(text)).catch(err => console.log(err));
}
