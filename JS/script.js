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
        valorParcelado: [105, 115],
        valorTotal: [630, 690],
        parcelas: 6,
        descricao: 'O meio-termo, com desconto modereado'
    },
    {
        img: './Imagens/boxes/box3.jpeg',
        nome: 'Plano Anual',
        valor: 120,
        valorParcelado: [89.99, 99.99],
        valorTotal: [1078, 1198],
        parcelas: 12,
        descricao: 'Oferecemos o menor valor por caixa, mas isso exigirá compromisso a longo prazo. Disponibilizaremos descontos ou brindes exclusivos para quem se comprometer por mais tempo.'
    }
]

function transformarValor(valor, indice, plano) {
    switch(valor) {
        case "parcelado":
            return planos[plano].valorParcelado[indice] % 1 !== 0 ? String(planos[plano].valorParcelado[indice]).replace('.', ',') : `${planos[plano].valorParcelado[indice]},00`
        break;
        case "total":
            return planos[plano].valorTotal[indice] % 1 !== 0 ? String(planos[plano].valorTotal[indice]).replace('.', ',') : `${planos[plano].valorTotal[indice]},00`
        break;
    }
}

planos.forEach((plano, i) => {
    //Na função transformarValor, são 3 parametros: valor(parcelado ou total), indice(se é 0 ou 1, porque tem apenas 2 valores no array) e i(que é o indice atual do loop forEach)

    const card = `
        <div class="card">
            <p class="nome-box">${plano.nome}</p>
            <img src="${plano.img}" alt="Box 1">
            <p class="valor-box-parcelado"><spam>${plano.parcelas}X</spam> R$${transformarValor("parcelado", 0, i)} - R$${transformarValor("parcelado", 1, i)}</p>
            <p class="valor-box-total">Valor a vista: R$${transformarValor("total", 0, i)} - R$${transformarValor('total', 1, i)}</p>

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