// Conteúdo dos artigos (versão resumida)
const articles = {
    historia: {
        title: "O MOVIMENTO ANARQUISTA NO BRASIL",
        category: "HISTÓRIA DO MOVIMENTO",
        image: "https://images.unsplash.com/photo-1632661795994-d8dad1a3e493",
        content: `
            <p><strong>O movimento anarquista no Brasil</strong> surgiu no fim do século XIX, trazido por imigrantes europeus - italianos, espanhóis e portugueses - que fugiam da opressão e trouxeram as ideias de Bakunin, Kropotkin e Malatesta.</p>
            
            <p>Defendemos uma <strong>sociedade sem Estado, sem patrões, sem hierarquias</strong>. Não queremos trocar um patrão pelo outro - queremos acabar com TODOS os patrões!</p>
            
            <p>Nossa estratégia: <strong>organização pela base, ação direta, greves gerais</strong>. Criamos jornais operários como "A Terra Livre", "A Plebe" e "O Amigo do Povo", centros de cultura, escolas libertárias e sindicatos de resistência.</p>
            
            <p>A <strong>Greve Geral de 1917</strong> em São Paulo foi o ápice: 70 mil trabalhadores paralisaram a cidade, enfrentaram a polícia burguesa, conseguiram redução de jornada e aumento de salários!</p>
            
            <p style="margin-top: 20px; padding: 15px; background: rgba(139, 69, 19, 0.1); border-left: 4px solid #8b4513;"><strong>A emancipação dos trabalhadores será obra dos próprios trabalhadores. Nem Deus, Nem Patrão, Nem Estado!</strong></p>
        `
    },
    friedenreich: {
        title: "FRIEDENREICH MARCA E PATRÃO SURTA!",
        category: "ESPORTE OPERÁRIO",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
        content: `
            <p><strong>São Paulo, Julho de 1917</strong> — Durante o campeonato paulista, aconteceu uma cena que resume perfeitamente a luta de classes: o craque mulato Arthur Friedenreich marcou um golaço espetacular!</p>
            
            <p>O <strong>patrão de uma fábrica têxtil do Brás</strong>, assistindo de camarote, ficou POSSESSO ao ver seus operários gritando "GOL!" em pleno domingo de folga.</p>
            
            <p>O burguês, vermelho de raiva, <strong>desceu até o campo tentando parar o jogo</strong>, berrando que "seus funcionários" deveriam estar "descansando em silêncio para trabalhar na segunda-feira"!</p>
            
            <p><strong>A resposta dos trabalhadores foi épica:</strong></p>
            <p style="font-size: 1.3rem; font-style: italic; text-align: center; margin: 20px 0; color: #8b4513;">"Hoje é domingo, doutor! O relógio é nosso, não seu! Vá trabalhar o senhor se tiver tanto amor ao batente!"</p>
            
            <p>A confusão só não virou briga porque os seguranças escoltaram o patrão para fora, sob vaias ensurdecedoras!</p>
            
            <p>Este episódio, <strong>"O Gol da Classe Trabalhadora"</strong>, mostra que mesmo nos momentos de diversão, a burguesia não suporta ver o povo feliz e livre.</p>
            
            <p style="margin-top: 20px; padding: 15px; background: rgba(139, 69, 19, 0.1); border-left: 4px solid #8b4513;"><strong>O futebol é do povo! As fábricas são do povo! O tempo é do povo!</strong></p>
        `
    },
    "acao-direta": {
        title: "METALÚRGICOS DO ABC DESAFIAM DITADURA - 200 MIL EM GREVE!",
        category: "RESISTÊNCIA OPERÁRIA",
        image: "https://images.unsplash.com/photo-1583819693302-01be3e4859e8",
        content: `
            <p><strong>13 de Março de 1979</strong> — Depois de 15 anos de terror da Ditadura Militar, a classe trabalhadora brasileira volta a rugir! Os metalúrgicos do ABC deflagraram greve com mais de <strong>200 mil trabalhadores</strong>!</p>
            
            <p>A perseguição ao movimento operário estendeu-se por todo o século XX, sobretudo durante a <strong>Ditadura Militar (1964-1985)</strong>. Prisões, torturas, assassinatos - mas o povo jamais se curvou!</p>
            
            <p><strong>A situação era insustentável:</strong> inflação devorando salários, dívida externa sufocando o país, ritmo desumano nas fábricas. Os patrões acumulavam fortunas com suor e sangue operário.</p>
            
            <p>Os companheiros exigiam <strong>reajuste salarial de mais de 70%</strong> - não por ganância, mas para sobreviver! Como alimentar uma família quando o salário não cobre nem a cesta básica?</p>
            
            <p><strong>Lula</strong>, metalúrgico torneiro mecânico, emergiu como liderança do movimento. As principais montadoras - <strong>Ford, Volkswagen e Mercedes-Benz</strong> - foram totalmente PARALISADAS!</p>
            
            <p>O movimento ganhou apoio massivo: artistas, intelectuais, estudantes, Igreja Católica, todos solidários com a greve.</p>
            
            <p>A greve terminou em <strong>maio de 1979</strong> com conquista de <strong>aumento de 69%</strong> nos salários! Além disso, fortaleceu o movimento operário e consolidou o caminho para a redemocratização em 1985.</p>
            
            <p style="margin-top: 20px; padding: 15px; background: rgba(139, 69, 19, 0.1); border-left: 4px solid #8b4513;"><strong>A luta operária é invencível quando unida! Viva a classe trabalhadora!</strong></p>
        `
    },
    greve1917: {
        title: "GREVE GERAL PARALISA SÃO PAULO - A REVOLUÇÃO COMEÇOU!",
        category: "GREVE GERAL",
        image: "https://images.unsplash.com/photo-1720799535832-c863af8d0906",
        content: `
            <p><strong>9 de Julho de 1917</strong> — Data que entrará para a história! Mais de <strong>70 mil trabalhadores</strong> paralisaram São Paulo na maior demonstração de força operária já vista!</p>
            
            <p>O estopim foi o <strong>assassinato do jovem sapateiro anarquista José Martinez</strong> pela polícia burguesa durante manifestação pacífica. O sangue derramado de nosso companheiro regou a árvore da revolução!</p>
            
            <p><strong>Nossas reivindicações:</strong></p>
            <ul style="margin: 15px 0; padding-left: 30px;">
                <li>Jornada de 8 horas (trabalhavam 14!)</li>
                <li>Fim do trabalho infantil</li>
                <li>Aumento de 35% nos salários</li>
                <li>Fim dos castigos corporais</li>
                <li>Respeito às trabalhadoras</li>
            </ul>
            
            <p>A greve começou nas tecelagens e rapidamente se espalhou: gráficos, metalúrgicos, ferroviários, padeiros - todos unidos! Brás, Mooca, Belenzinho, Bom Retiro viraram território libertado!</p>
            
            <p>A polícia reagiu com violência selvagem, mas <strong>a solidariedade operária foi mais forte!</strong> Comitês de bairro organizaram cozinhas coletivas. As companheiras costureiras mostraram coragem admirável!</p>
            
            <p>Em assembleia gigantesca no Largo da Concórdia, <strong>10 mil operários</strong> decidiram: A GREVE CONTINUA até que TODAS as reivindicações sejam atendidas!</p>
            
            <p style="margin-top: 20px; padding: 15px; background: rgba(139, 69, 19, 0.1); border-left: 4px solid #8b4513;"><strong>De São Paulo, a revolução se espalhará! Greve geral pela revolução social! Viva a Anarquia!</strong></p>
        `
    },
    conquistas: {
        title: "CONQUISTAS DO MOVIMENTO OPERÁRIO",
        category: "VITÓRIAS DA LUTA",
        image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620",
        content: `
            <p>O movimento operário conquistou direitos fundamentais através de <strong>décadas de luta, greves e resistência</strong>. Nada foi dado - tudo foi arrancado com sangue, suor e organização!</p>
            
            <p><strong>Principais conquistas:</strong></p>
            
            <p><strong>⚑ Redução da jornada de trabalho:</strong> De 14-16 horas diárias para 8 horas! Uma das maiores vitórias da classe trabalhadora.</p>
            
            <p><strong>⚑ Salário mínimo:</strong> Remuneração básica que garante dignidade ao trabalhador.</p>
            
            <p><strong>⚑ Férias remuneradas:</strong> Direito ao descanso e recuperação física e mental.</p>
            
            <p><strong>⚑ Licença-maternidade e paternidade:</strong> Proteção às famílias trabalhadoras.</p>
            
            <p><strong>⚑ Direito à sindicalização:</strong> Organização coletiva para defender interesses dos trabalhadores.</p>
            
            <p><strong>⚑ Segurança e saúde no trabalho:</strong> Proteção contra acidentes e doenças ocupacionais.</p>
            
            <p><strong>⚑ Previdência social:</strong> Aposentadoria e benefícios em casos de doença, invalidez ou desemprego.</p>
            
            <p>Essas conquistas foram fundamentais para melhorar as condições de trabalho e fortalecer a classe trabalhadora, influenciando leis trabalhistas em vários países, inclusive no Brasil.</p>
            
            <p style="margin-top: 20px; padding: 15px; background: rgba(139, 69, 19, 0.1); border-left: 4px solid #8b4513;"><strong>Cada direito foi conquistado com luta! A batalha continua por mais dignidade, segurança e melhores condições de trabalho!</strong></p>
        `
    },
    guerra: {
        title: "BRASIL NA CARNIFICINA IMPERIALISTA",
        category: "ANTIMILITARISMO",
        image: "https://images.unsplash.com/photo-1574088768762-14e3d336c1be",
        content: `
            <p><strong>Abril de 1917</strong> — O governo brasileiro tomou decisão vergonhosa: rompeu a neutralidade e declarou apoio aos Aliados na Guerra Imperialista Europeia!</p>
            
            <p><strong>Em abril de 1917</strong>, os Estados Unidos declararam guerra ao Império Alemão após ataque a embarcação americana. O Brasil, seguindo interesses econômicos da burguesia, logo aderiu.</p>
            
            <p>O Brasil rompeu relações diplomáticas e aprovou a <strong>revogação da neutralidade</strong> para entrar na Primeira Guerra Mundial. Em outubro, aprovou envio de tropas e recursos!</p>
            
            <p><strong>Denunciamos:</strong> ESTA NÃO É GUERRA DO POVO BRASILEIRO! É guerra entre burguesias imperialistas disputando colônias e mercados!</p>
            
            <p>O pretexto oficial: submarinos alemães atacaram navios brasileiros. A verdade: <strong>a burguesia cafeeira e comerciantes têm interesses ligados à Inglaterra e França</strong>. Querem que operários brasileiros morram para proteger seus lucros!</p>
            
            <p><strong>Nossa posição antimilitarista:</strong> Recusamos servir aos exércitos burgueses! Recusamos matar trabalhadores alemães, austríacos ou turcos - nossos irmãos de classe!</p>
            
            <p>Enquanto trabalhadores se matam nas trincheiras, seus patrões bebem champanhe em palacetes. Enquanto isso, no Brasil, aproveitam a guerra para intensificar a exploração!</p>
            
            <p style="margin-top: 20px; padding: 15px; background: rgba(139, 69, 19, 0.1); border-left: 4px solid #8b4513;"><strong>Trabalhadores: Recusem o recrutamento! Nossos inimigos não estão na Europa - estão nos palácios e mansões! Guerra à guerra!</strong></p>
        `
    }
};

// Navegação entre seções
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.content-section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active de todos os links
        navLinks.forEach(l => l.classList.remove('active'));
        // Adiciona active no link clicado
        link.classList.add('active');
        
        // Esconde todas as seções
        sections.forEach(s => s.classList.remove('active'));
        
        // Mostra a seção correspondente
        const sectionId = link.dataset.section;
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            // Scroll suave para o topo
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});

// Função para abrir artigo completo
function openArticle(articleId) {
    const article = articles[articleId];
    if (!article) return;
    
    const modal = document.getElementById('articleModal');
    const content = document.getElementById('articleContent');
    
    content.innerHTML = `
        <span class="article-category">${article.category}</span>
        <h2 class="modal-article-title">${article.title}</h2>
        <img src="${article.image}" alt="${article.title}" class="modal-article-image">
        <div class="modal-article-content">
            ${article.content}
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Função para fechar artigo
function closeArticle() {
    const modal = document.getElementById('articleModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('articleModal');
    if (event.target === modal) {
        closeArticle();
    }
}

// Fechar modal com ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeArticle();
    }
});

console.log('🚩 A Voz Libertária - Jornal carregado!');
console.log('✊ Nem Deus, Nem Patrão, Nem Estado!');