// Dados da Linha do Tempo
const timelineData = [
    {
        year: "1975",
        title: "Fundação da Microsoft",
        desc: "Bill Gates e Paul Allen fundam a Microsoft em Albuquerque para desenvolver e vender interpretadores BASIC para o Altair 8800.",
        impact: "Deu início à revolução do software para computadores pessoais."
    },
    {
        year: "1976",
        title: "Fundação da Apple",
        desc: "Steve Jobs e Steve Wozniak criam a Apple Computer na garagem dos pais de Jobs, lançando o Apple I.",
        impact: "Início de uma das empresas mais valiosas e icônicas do mundo."
    },
    {
        year: "1984",
        title: "Lançamento do Macintosh",
        desc: "Jobs apresenta o Apple Macintosh com a famosa propaganda '1984'. Foi o primeiro computador pessoal comercial com interface gráfica e mouse.",
        impact: "Popularizou a interface gráfica do usuário (GUI) para as massas."
    },
    {
        year: "1985",
        title: "Windows 1.0 e Saída de Jobs",
        desc: "A Microsoft lança o Windows 1.0. No mesmo ano, após atritos com a diretoria, Steve Jobs deixa a Apple e funda a NeXT.",
        impact: "Início do domínio do mercado por parte da Microsoft e reconstrução da carreira de Jobs."
    },
    {
        year: "1995",
        title: "Lançamento do Windows 95",
        desc: "O Windows 95 chega com o Menu Iniciar e suporte à internet, vendendo milhões de cópias em poucas semanas.",
        impact: "Consolidou a Microsoft como gigante absoluta da tecnologia."
    },
    {
        year: "1997",
        title: "Retorno de Jobs e Parceria com Gates",
        desc: "Jobs retorna à Apple após a compra da NeXT. Em um anúncio histórico, a Microsoft investe US$ 150 milhões para ajudar a salvar a Apple.",
        impact: "Garantia da sobrevivência da Apple, permitindo sua reinvenção histórica."
    },
    {
        year: "2001",
        title: "Lançamento do iPod",
        desc: "Apple apresenta o iPod com o slogan '1.000 músicas no seu bolso'.",
        impact: "Transformou para sempre a indústria da música digital."
    },
    {
        year: "2007",
        title: "O Lançamento do iPhone",
        desc: "Jobs revela o iPhone original, combinando um telefone, iPod com tela sensível ao toque e um navegador de internet.",
        impact: "Inaugurou a era moderna dos smartphones."
    },
    {
        year: "2011",
        title: "Legado e Homenagens",
        desc: "Steve Jobs falece aos 56 anos. Bill Gates e o mundo prestam homenagens ao mestre do design e da inovação.",
        impact: "Encerramento de uma era épica que construiu a bases do ecossistema digital que usamos hoje."
    }
];

// Alternador de Tema (Claro / Escuro)
const themeToggleBtn = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
}

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Renderização da Linha do Tempo
const navContainer = document.getElementById('timeline-nav');
const cardYear = document.getElementById('card-year');
const cardTitle = document.getElementById('card-title');
const cardDesc = document.getElementById('card-desc');
const cardImpact = document.getElementById('card-impact');

function updateTimelineCard(data) {
    const card = document.getElementById('timeline-card');
    card.style.animation = 'none';
    card.offsetHeight; // Força re-flow
    card.style.animation = 'fadeIn 0.3s ease';

    cardYear.textContent = data.year;
    cardTitle.textContent = data.title;
    cardDesc.textContent = data.desc;
    cardImpact.textContent = data.impact;
}

function initTimeline() {
    timelineData.forEach((item, index) => {
        const btn = document.createElement('button');
        btn.classList.add('timeline-btn');
        if (index === 0) btn.classList.add('active');
        btn.textContent = item.year;

        btn.addEventListener('click', () => {
            document.querySelectorAll('.timeline-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateTimelineCard(item);
        });

        navContainer.appendChild(btn);
    });

    // Inicializa com o primeiro ano
    updateTimelineCard(timelineData[0]);
}

document.addEventListener('DOMContentLoaded', initTimeline);