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
        valorParcelado: 120,
        valorTotal: 120,
        parcelas: 1,
        descricao: 'Mais caro, mas ideal para testar o serviço por um mês sem compromisso de fidelidade.'
    },
    {
        img: './Imagens/boxes/box2.jpeg',
        nome: 'Plano Semestral',
        valor: 110,
        valorParcelado: 105,
        valorTotal: 630,
        parcelas: 6,
        descricao: 'O meio-termo, com desconto modereado'
    },
    {
        img: './Imagens/boxes/box3.jpeg',
        nome: 'Plano Anual',
        valor: 120,
        valorParcelado: 89.99,
        valorTotal: 1078,
        parcelas: 12,
        descricao: 'Oferecemos o menor valor por caixa, mas isso exigirá compromisso a longo prazo. Disponibilizaremos descontos ou brindes exclusivos para quem se comprometer por mais tempo.'
    }
]

function transformarValor(valor) {
    return valor % 1 === 0 ? `${valor},00` : String(valor).replace('.', ',');
}

planos.forEach((plano, i) => {
    //Na função transformarValor, são 3 parametros: valor(parcelado ou total), indice(se é 0 ou 1, porque tem apenas 2 valores no array) e i(que é o indice atual do loop forEach)

    const card = `
        <div class="card">
        <img src="${plano.img}" alt="Box 1">
        <p class="nome-box">${plano.nome}</p>
            <p class="valor-box-parcelado"><spam>${plano.parcelas}X</spam> R$${transformarValor(plano.valorParcelado)}</p>
            <p class="valor-box-total">Valor a vista: R$${transformarValor(plano.valorTotal)}</p>

            <p class="descricao-plano">${plano.descricao}</p>
        </div>
    `
    document.querySelector('#cards').innerHTML += card;
    
    
})

const sobreArray = [
    {
        img: '../Imagens/sobre/cachorro_gato_natureza.jpg',
        titulo: 'Missão',
        texto: 'Levar alegria, cuidado e surpresas para a vida dos pets e de quem os ama. Cada box que preparamos é uma expressão de carinho: produtos selecionados com critério, pensados para fortalecer o vínculo entre tutores e seus companheiros de quatro patas pois acreditamos que esse amor merece ser celebrado todo mês.'
    },
    {
        img: '../Imagens/sobre/cachorro-e-gato.webp',
        titulo: 'Visão',
        texto: 'Ser a assinatura de pet box mais querida do Brasil, reconhecida por transformar cada entrega em um momento especial. Queremos que abrir uma Be Happy Pet Box seja o ponto alto da semana para o pet e para quem cuida dele.'
    },
    {
        img: '../Imagens/sobre/gato-e-cachorro-correndo.avif',
        titulo: 'Valores',
        texto: 'Amor acima de tudo\nCada decisão começa pelo bem-estar dos pets. Selecionamos apenas produtos naturais, seguros e de alta qualidade, porque quem faz seu dia feliz merece o melhor.'
    },
    {
        img: '../Imagens/sobre/gato-e-cachorro-dormindo.avif',
        titulo: 'Conexão e afeto',
        texto: 'Mais do que uma assinatura, somos um gesto de cuidado. Acreditamos que o tempo dedicado a brincar e mimar um pet é tempo bem investido, e queremos fazer parte desse momento.'
    },
    {
        img: '../Imagens/sobre/cachorro-com-gato.jpg',
        titulo: 'Comprometimento com a felicidade',
        texto: 'A felicidade do seu pet é a nossa missão. Se algo não estiver perfeito, estamos aqui para fazer certo — com atenção, agilidade e muito carinho.'
    }
]

const containerTextoSobre = document.querySelector('.titulo-texto');
const track = document.querySelector('.imagens-track')
const imgSobre = document.querySelectorAll('.imagens-track img')

const btnVai = document.querySelector('.btn-vai')
const btnVolta = document.querySelector('.btn-volta')


let indice = 0;
let temporizador;

function atualizarCarrossel() {
    const larguraImg = imgSobre[0].clientWidth;
    console.log(larguraImg);
    
    track.style.transform = `translateX(${-indice * larguraImg}px)`

}

function iniciarCarrossel() {
    temporizador = setInterval(() => {
        indice = (indice + 1) % imgSobre.length

        atualizarCarrossel();
        proximoSlide(indice);
        
    }, 2000)
}



function proximoSlide(i) {
    const elementoSobre = `
                    <h1 >${sobreArray[i].titulo}</h1>
                    <p>${sobreArray[i].texto}</p>
                
            `
    containerTextoSobre.innerHTML = elementoSobre;
}


btnVai.addEventListener('click', () => {
    clearInterval(temporizador)

    indice = (indice + 1) % imgSobre.length
    proximoSlide(indice)
    atualizarCarrossel()

    iniciarCarrossel()
})

btnVolta.addEventListener('click', () => {
    clearInterval(temporizador)

    indice = (indice - 1) % imgSobre.length
    proximoSlide(indice)
    atualizarCarrossel()

    iniciarCarrossel()
})

iniciarCarrossel()
proximoSlide(indice)