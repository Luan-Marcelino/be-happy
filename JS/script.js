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

// planos

const planos = [
    {
        img: './Imagens/boxes/box1.jpeg',
        nome: 'Plano Mensal',
        valor: 100,
        valorParcelado: [120, 140],
        valorTotal: [120, 140],
        parcelas: 1,
        descricao: 'Mais caro, mas ideal para testar o serviço por um mês sem compromisso de fidelidade.'
    },
    {
        img: './Imagens/boxes/box2.jpeg',
        nome: 'Plano Semestral',
        valor: 110,
        valorParcelado: [105.00, 115.00],
        valorTotal: [630.00, 690.00],
        parcelas: 6,
        descricao: 'O meio-termo, com desconto modereado'
    },
    {
        img: './Imagens/boxes/box3.jpeg',
        nome: 'Plano Anual',
        valor: 120,
        valorParcelado: [89.85, 99.85],
        valorTotal: [1078.00, 1198.00],
        parcelas: 12,
        descricao: 'Oferecemos o menos valor por caixa, mas isso exigirá compromisso a longo prazo. Disponibilizaremos descontos ou brindes exclusivos para quem se comprometer por mais tempo.'
    }
]

planos.forEach((plano, i) => {
    let parcelado0 = plano.valorParcelado[0] % 1 !== 0 ? String(plano.valorParcelado[0]).replace('.', ',') : `${plano.valorParcelado[0]},00`
    let parcelado1 = plano.valorParcelado[1] % 1 !== 0 ? String(plano.valorParcelado[1]).replace('.', ',') : `${plano.valorParcelado[1]},00`

    let total0 = plano.valorTotal[0] % 1 !== 0 ? String(plano.valorTotal[0]).replace('.', ',') : `${plano.valorTotal[0]},00`
    let total1 = plano.valorTotal[1] % 1 !== 0 ? String(plano.valorTotal[1]).replace('.', ',') : `${plano.valorTotal[1]},00`

    const card = `
        <div class="card">
            <p class="nome-box">${plano.nome}</p>
            <img src="${plano.img}" alt="Box 1">
            <p class="valor-box-parcelado"><spam>12X</spam> R$${parcelado0} - R$${parcelado1}</p>
            <p class="valor-box-total">Valor a vista: R$${total0} - R$${total1}</p>

            <p class="descricao-plano">${plano.descricao}</p>
        </div>
    `

    document.querySelector('#cards').innerHTML += card;
    
})

/*
const todosCards = document.querySelectorAll('.card')
todosCards.forEach((card, i) => {
    if(i % 2 == 0) {
        card.style.backgroundColor = '#6a30b6'
    }
})
    */