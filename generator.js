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
            kap.append(h2)
        }
        else if (stycke === ''){}
        else {
            const p = document.createElement('p');
            p.textContent = stycke;
            kap.append(p);
        }
        
    });

    mainBody.append(kap);
}




fetch('/mall.txt').then(x => x.text()).then(text => generator(text));