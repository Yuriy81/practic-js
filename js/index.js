const link = document.querySelector('a');
link.textContent = 'Programming mentor';
link.href = 'https://programmingmentor.com';


    const para = document.createElement('p');
    para.textContent = 'You have won a price!';
    const sect = document.querySelector('section');
    sect.appendChild(para);


/*const img = document.querySelector('img');
sect.appendChild(img);*/

const h1 = document.querySelector('h1');
h1.parentNode.removeChild(h1);