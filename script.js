const translations = {
    pt: {
        nav_about: "Sobre",
        nav_saas: "SaaS & Tech",
        nav_experience: "Experiência",
        nav_contact: "Contato",
        hero_badge: "Matemático Industrial & Estrategista Financeiro",
        hero_title: "Transformando dados financeiros em <span class='gradient-text'>Soluções SaaS</span> de alto impacto.",
        hero_subtitle: "Especialista em unir Matemática Aplicada, Finanças Corporativas e Tecnologia para otimizar decisões e maximizar lucros.",
        btn_contact: "Vamos Conversar",
        btn_work: "Ver Portfolio",
        stat_profit: "Otimização de Lucro",
        stat_auto: "Pricing In-house",
        about_title: "O Ponto de Convergência",
        about_subtitle: "Não sou apenas um analista financeiro. Eu construo as ferramentas que o financeiro precisa - e que o TI não tem tempo de priorizar.",
        skill_math_title: "Matemática Aplicada",
        skill_math_desc: "Background sólido na UFPR em modelagem e otimização. Eu vejo os algoritmos por trás do negócio.",
        skill_finance_title: "Finanças Corporativas",
        skill_finance_desc: "MBA em Contabilidade e Finanças. Experiência real em FP&A, Pricing e Budgeting no setor automotivo.",
        skill_tech_title: "Engenharia de Soluções",
        skill_tech_desc: "Desenvolvedor Python & Streamlit. Eu não especifico o software, eu o construo para resolver a dor.",
        saas_title: "De Planilhas para SaaS Interno",
        saas_desc: "Transformei processos manuais e ineficientes em aplicações web robustas e escaláveis, focando em otimização de resultados.",
        saas_point_1: "Desenvolvimento Full-stack para precificação de seguros.",
        saas_point_2: "Eliminação de custos de outsourcing.",
        saas_point_3: "Dashboard de Inteligência de Mercado.",
        saas_point_4: "Modelagem Preditiva para Rentabilidade e Vendas.",
        saas_overlay: "Engine Própria de Pricing",
        timeline_title: "Trajetória Profissional",
        job1_title: "Analista de Produto, Controle e Estratégia",
        job2_title: "Analista de Controle de Gestão (FP&A)",
        job3_title: "Estagiário de Controle de Gestão",
        job4_title: "Estagiário de Logística Industrial",
        footer_tagline: "Construindo as ferramentas financeiras do amanhã."
    },
    en: {
        nav_about: "About",
        nav_saas: "SaaS & Tech",
        nav_experience: "Experience",
        nav_contact: "Contact",
        hero_badge: "Industrial Mathematician & Finance Strategist",
        hero_title: "Transforming financial data into high-impact <span class='gradient-text'>SaaS Solutions</span>.",
        hero_subtitle: "Bridging the gap between Applied Mathematics, Corporate Finance, and Technology to optimize decisions and maximize profit.",
        btn_contact: "Let's Talk",
        btn_work: "View Portfolio",
        stat_profit: "Profit Optimization",
        stat_auto: "In-house Pricing",
        about_title: "The Convergence Point",
        about_subtitle: "I'm not just a financial analyst. I build the tools Finance needs - and IT doesn't have time to prioritize.",
        skill_math_title: "Applied Mathematics",
        skill_math_desc: "Solid background from UFPR in modeling and optimization. I see the algorithms behind the business.",
        skill_finance_title: "Corporate Finance",
        skill_finance_desc: "MBA in Accounting & Finance. Hands-on experience in FP&A, Pricing, and Budgeting in the automotive sector.",
        skill_tech_title: "Solution Engineering",
        skill_tech_desc: "Python & Streamlit Developer. I don't write specs for software; I build it.",
        saas_title: "From Spreadsheets to Internal SaaS",
        saas_desc: "I transformed manual, inefficient processes into robust, scalable web applications, focusing on result optimization.",
        saas_point_1: "Full-stack development for insurance pricing.",
        saas_point_2: "Elimination of outsourcing costs.",
        saas_point_3: "Market Intelligence Dashboard.",
        saas_point_4: "Predictive Modeling for Profitability and Sales.",
        saas_overlay: "Proprietary Pricing Engine",
        timeline_title: "Professional Journey",
        job1_title: "Product, Control & Strategy Analyst",
        job2_title: "Management Control Analyst (FP&A)",
        job3_title: "Management Control Intern",
        job4_title: "Industrial Logistics Intern",
        footer_tagline: "Building the financial tools of tomorrow."
    }
};

let currentLang = 'pt';

const langToggleBtn = document.getElementById('lang-toggle');
const langSpans = langToggleBtn.querySelectorAll('span');

// Function to update content
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Check if content has HTML (like spans)
            if (translations[lang][key].includes('<')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update Toggle UI
    if (lang === 'pt') {
        langSpans[0].classList.add('active');
        langSpans[1].classList.remove('active');
    } else {
        langSpans[0].classList.remove('active');
        langSpans[1].classList.add('active');
    }
}

langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    updateLanguage(currentLang);
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .timeline-item, .panes-layout').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Add class for animation when visible
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.innerHTML = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
   `;
    document.head.appendChild(style);
});
