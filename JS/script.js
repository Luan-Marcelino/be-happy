const nav = document.querySelector('nav');
const imagemNav = document.querySelector('nav img');
const liNav = document.querySelectorAll('nav ul li a');


window.addEventListener('scroll', () => {
    let alturaWindow = window.scrollY;

    if(alturaWindow > 250) {
        nav.classList.add('scrollado');
        
        liNav.forEach(li => {
            li.classList.add('link-scrollado');
        });
        
    }else {
        nav.classList.remove('scrollado');
        
        liNav.forEach(li => {
            li.classList.remove('link-scrollado');
        });
    }
})

// PRODUTOS

const produtos = [
    {
        img: './Imagens/boxes/box1.jpeg',
        nome: 'Box Azul',
        valor: '100'
    },
    {
        img: './Imagens/boxes/box2.jpeg',
        nome: 'Box Marrom',
        valor: '110'
    },
    {
        img: './Imagens/boxes/box3.jpeg',
        nome: 'Box Rosa',
        valor: '120'
    }
]

produtos.forEach(produto => {
    const card = `
        <div class="card">
        <img src="${produto.img}" alt="Box 1">
        <p class="nome-box">${produto.nome}</p>
        <p class="valor-box">R$${produto.valor},00</p>
        </div>
    `

    document.querySelector('#cards').innerHTML += card;
})