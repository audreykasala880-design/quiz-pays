// Données des pays et capitales organisées par continent
const countries = {
    afrique: [
        { country: "Algérie", capital: "Alger" },
        { country: "Angola", capital: "Luanda" },
        { country: "Bénin", capital: "Porto-Novo" },
        { country: "Botswana", capital: "Gaborone" },
        { country: "Burkina Faso", capital: "Ouagadougou" },
        { country: "Burundi", capital: "Bujumbura" },
        { country: "Cap-Vert", capital: "Praia" },
        { country: "Cameroun", capital: "Yaoundé" },
        { country: "République centrafricaine", capital: "Bangui" },
        { country: "Tchad", capital: "N'Djamena" },
        { country: "Comores", capital: "Moroni" },
        { country: "Congo", capital: "Brazzaville" },
        { country: "République démocratique du Congo", capital: "Kinshasa" },
        { country: "Côte d'Ivoire", capital: "Yamoussoukro" },
        { country: "Djibouti", capital: "Djibouti" },
        { country: "Égypte", capital: "Le Caire" },
        { country: "Guinée équatoriale", capital: "Malabo" },
        { country: "Érythrée", capital: "Asmara" },
        { country: "Eswatini", capital: "Mbabane" },
        { country: "Éthiopie", capital: "Addis-Abeba" },
        { country: "Gabon", capital: "Libreville" },
        { country: "Gambie", capital: "Banjul" },
        { country: "Ghana", capital: "Accra" },
        { country: "Guinée", capital: "Conakry" },
        { country: "Guinée-Bissau", capital: "Bissau" },
        { country: "Kenya", capital: "Nairobi" },
        { country: "Lesotho", capital: "Maseru" },
        { country: "Libéria", capital: "Monrovia" },
        { country: "Libye", capital: "Tripoli" },
        { country: "Madagascar", capital: "Antananarivo" },
        { country: "Malawi", capital: "Lilongwe" },
        { country: "Mali", capital: "Bamako" },
        { country: "Mauritanie", capital: "Nouakchott" },
        { country: "Maurice", capital: "Port-Louis" },
        { country: "Maroc", capital: "Rabat" },
        { country: "Mozambique", capital: "Maputo" },
        { country: "Namibie", capital: "Windhoek" },
        { country: "Niger", capital: "Niamey" },
        { country: "Nigeria", capital: "Abuja" },
        { country: "Rwanda", capital: "Kigali" },
        { country: "Sao Tomé-et-Principe", capital: "São Tomé" },
        { country: "Sénégal", capital: "Dakar" },
        { country: "Seychelles", capital: "Victoria" },
        { country: "Sierra Leone", capital: "Freetown" },
        { country: "Somalie", capital: "Mogadiscio" },
        { country: "Afrique du Sud", capital: "Pretoria" },
        { country: "Soudan du Sud", capital: "Djouba" },
        { country: "Soudan", capital: "Khartoum" },
        { country: "Tanzanie", capital: "Dodoma" },
        { country: "Togo", capital: "Lomé" },
        { country: "Tunisie", capital: "Tunis" },
        { country: "Ouganda", capital: "Kampala" },
        { country: "Zambie", capital: "Lusaka" },
        { country: "Zimbabwe", capital: "Harare" }
    ],
    asie: [
        { country: "Afghanistan", capital: "Kaboul" },
        { country: "Arménie", capital: "Erevan" },
        { country: "Azerbaïdjan", capital: "Bakou" },
        { country: "Bahreïn", capital: "Manama" },
        { country: "Bangladesh", capital: "Dacca" },
        { country: "Bhoutan", capital: "Thimphou" },
        { country: "Brunei", capital: "Bandar Seri Begawan" },
        { country: "Cambodge", capital: "Phnom Penh" },
        { country: "Chine", capital: "Pékin" },
        { country: "Chypre", capital: "Nicosie" },
        { country: "Timor oriental", capital: "Dili" },
        { country: "Géorgie", capital: "Tbilissi" },
        { country: "Inde", capital: "New Delhi" },
        { country: "Indonésie", capital: "Jakarta" },
        { country: "Iran", capital: "Téhéran" },
        { country: "Irak", capital: "Bagdad" },
        { country: "Israël", capital: "Jérusalem" },
        { country: "Japon", capital: "Tokyo" },
        { country: "Jordanie", capital: "Amman" },
        { country: "Kazakhstan", capital: "Astana" },
        { country: "Koweït", capital: "Koweït" },
        { country: "Kirghizistan", capital: "Bichkek" },
        { country: "Laos", capital: "Vientiane" },
        { country: "Liban", capital: "Beyrouth" },
        { country: "Malaisie", capital: "Kuala Lumpur" },
        { country: "Maldives", capital: "Malé" },
        { country: "Mongolie", capital: "Oulan-Bator" },
        { country: "Myanmar", capital: "Naypyidaw" },
        { country: "Népal", capital: "Katmandou" },
        { country: "Corée du Nord", capital: "Pyongyang" },
        { country: "Oman", capital: "Mascate" },
        { country: "Pakistan", capital: "Islamabad" },
        { country: "Palestine", capital: "Ramallah" },
        { country: "Philippines", capital: "Manille" },
        { country: "Qatar", capital: "Doha" },
        { country: "Russie", capital: "Moscou" },
        { country: "Arabie saoudite", capital: "Riyad" },
        { country: "Singapour", capital: "Singapour" },
        { country: "Corée du Sud", capital: "Séoul" },
        { country: "Sri Lanka", capital: "Sri Jayawardenapura Kotte" },
        { country: "Syrie", capital: "Damas" },
        { country: "Taïwan", capital: "Taipei" },
        { country: "Tadjikistan", capital: "Douchanbé" },
        { country: "Thaïlande", capital: "Bangkok" },
        { country: "Turquie", capital: "Ankara" },
        { country: "Turkménistan", capital: "Achgabat" },
        { country: "Émirats arabes unis", capital: "Abou Dabi" },
        { country: "Ouzbékistan", capital: "Tachkent" },
        { country: "Viêt Nam", capital: "Hanoï" },
        { country: "Yémen", capital: "Sanaa" }
    ],
    europe: [
        { country: "Albanie", capital: "Tirana" },
        { country: "Andorre", capital: "Andorre-la-Vieille" },
        { country: "Autriche", capital: "Vienne" },
        { country: "Biélorussie", capital: "Minsk" },
        { country: "Belgique", capital: "Bruxelles" },
        { country: "Bosnie-Herzégovine", capital: "Sarajevo" },
        { country: "Bulgarie", capital: "Sofia" },
        { country: "Croatie", capital: "Zagreb" },
        { country: "République tchèque", capital: "Prague" },
        { country: "Danemark", capital: "Copenhague" },
        { country: "Estonie", capital: "Tallinn" },
        { country: "Finlande", capital: "Helsinki" },
        { country: "France", capital: "Paris" },
        { country: "Allemagne", capital: "Berlin" },
        { country: "Grèce", capital: "Athènes" },
        { country: "Hongrie", capital: "Budapest" },
        { country: "Islande", capital: "Reykjavik" },
        { country: "Irlande", capital: "Dublin" },
        { country: "Italie", capital: "Rome" },
        { country: "Kosovo", capital: "Pristina" },
        { country: "Lettonie", capital: "Riga" },
        { country: "Liechtenstein", capital: "Vaduz" },
        { country: "Lituanie", capital: "Vilnius" },
        { country: "Luxembourg", capital: "Luxembourg" },
        { country: "Malte", capital: "La Valette" },
        { country: "Moldavie", capital: "Chisinau" },
        { country: "Monaco", capital: "Monaco" },
        { country: "Monténégro", capital: "Podgorica" },
        { country: "Pays-Bas", capital: "Amsterdam" },
        { country: "Macédoine du Nord", capital: "Skopje" },
        { country: "Norvège", capital: "Oslo" },
        { country: "Pologne", capital: "Varsovie" },
        { country: "Portugal", capital: "Lisbonne" },
        { country: "Roumanie", capital: "Bucarest" },
        { country: "Saint-Marin", capital: "Saint-Marin" },
        { country: "Serbie", capital: "Belgrade" },
        { country: "Slovaquie", capital: "Bratislava" },
        { country: "Slovénie", capital: "Ljubljana" },
        { country: "Espagne", capital: "Madrid" },
        { country: "Suède", capital: "Stockholm" },
        { country: "Suisse", capital: "Berne" },
        { country: "Ukraine", capital: "Kiev" },
        { country: "Royaume-Uni", capital: "Londres" },
        { country: "Vatican", capital: "Vatican" }
    ],
    "amerique-nord": [
        { country: "Antigua-et-Barbuda", capital: "Saint John's" },
        { country: "Bahamas", capital: "Nassau" },
        { country: "Barbade", capital: "Bridgetown" },
        { country: "Belize", capital: "Belmopan" },
        { country: "Canada", capital: "Ottawa" },
        { country: "Costa Rica", capital: "San José" },
        { country: "Cuba", capital: "La Havane" },
        { country: "Dominique", capital: "Roseau" },
        { country: "République dominicaine", capital: "Saint-Domingue" },
        { country: "El Salvador", capital: "San Salvador" },
        { country: "Grenade", capital: "Saint-Georges" },
        { country: "Guatemala", capital: "Guatemala" },
        { country: "Haïti", capital: "Port-au-Prince" },
        { country: "Honduras", capital: "Tegucigalpa" },
        { country: "Jamaïque", capital: "Kingston" },
        { country: "Mexique", capital: "Mexico" },
        { country: "Nicaragua", capital: "Managua" },
        { country: "Panama", capital: "Panama" },
        { country: "Saint-Christophe-et-Niévès", capital: "Basseterre" },
        { country: "Sainte-Lucie", capital: "Castries" },
        { country: "Saint-Vincent-et-les-Grenadines", capital: "Kingstown" },
        { country: "Trinité-et-Tobago", capital: "Port-d'Espagne" },
        { country: "États-Unis", capital: "Washington D.C." }
    ],
    "amerique-sud": [
        { country: "Argentine", capital: "Buenos Aires" },
        { country: "Bolivie", capital: "Sucre" },
        { country: "Brésil", capital: "Brasília" },
        { country: "Chili", capital: "Santiago" },
        { country: "Colombie", capital: "Bogotá" },
        { country: "Équateur", capital: "Quito" },
        { country: "Guyana", capital: "Georgetown" },
        { country: "Paraguay", capital: "Asunción" },
        { country: "Pérou", capital: "Lima" },
        { country: "Suriname", capital: "Paramaribo" },
        { country: "Uruguay", capital: "Montevideo" },
        { country: "Venezuela", capital: "Caracas" }
    ],
    oceanie: [
        { country: "Australie", capital: "Canberra" },
        { country: "Fidji", capital: "Suva" },
        { country: "Kiribati", capital: "Tarawa" },
        { country: "Îles Marshall", capital: "Majuro" },
        { country: "Micronésie", capital: "Palikir" },
        { country: "Nauru", capital: "Yaren" },
        { country: "Nouvelle-Zélande", capital: "Wellington" },
        { country: "Palaos", capital: "Ngerulmud" },
        { country: "Papouasie-Nouvelle-Guinée", capital: "Port Moresby" },
        { country: "Samoa", capital: "Apia" },
        { country: "Îles Salomon", capital: "Honiara" },
        { country: "Tonga", capital: "Nuku'alofa" },
        { country: "Tuvalu", capital: "Funafuti" },
        { country: "Vanuatu", capital: "Port-Vila" }
    ]
};

// Scores par continent
let scores = {
    afrique: 0,
    asie: 0,
    europe: 0,
    "amerique-nord": 0,
    "amerique-sud": 0,
    oceanie: 0
};

// Variables globales
let currentContinent = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;

// Éléments DOM
const continentSelection = document.getElementById('continent-selection');
const quizSection = document.getElementById('quiz-section');
const scoreSection = document.getElementById('score-section');
const quizTitle = document.getElementById('quiz-title');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');
const scoresEl = document.getElementById('scores');
const backBtn = document.getElementById('back-btn');
const scoreShortcutBtn = document.getElementById('score-shortcut-btn');

// Écouteurs d'événements
document.querySelectorAll('.continent-btn').forEach(btn => {
    btn.addEventListener('click', () => selectContinent(btn.dataset.continent));
});

nextBtn.addEventListener('click', nextQuestion);
backBtn.addEventListener('click', showContinents);
scoreShortcutBtn.addEventListener('click', showScoresShortcut);

// Fonctions
function selectContinent(continent) {
    currentContinent = continent;
    currentQuestions = shuffleArray([...countries[continent]]);
    currentQuestionIndex = 0;
    correctAnswers = 0;
    continentSelection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    scoreSection.classList.add('hidden');
    quizTitle.textContent = `Quiz ${getContinentName(continent)}`;
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        showResults();
        return;
    }
    const question = currentQuestions[currentQuestionIndex];
    questionEl.textContent = `Quelle est la capitale de ${question.country} ?`;
    const options = generateOptions(question.capital, currentContinent);
    optionsEl.innerHTML = '';
    options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => checkAnswer(option, question.capital));
        optionsEl.appendChild(btn);
    });
    resultEl.classList.add('hidden');
    nextBtn.classList.add('hidden');
}

function generateOptions(correct, continent) {
    const allCapitals = countries[continent].map(c => c.capital);
    const options = [correct];
    while (options.length < 4) {
        const random = allCapitals[Math.floor(Math.random() * allCapitals.length)];
        if (!options.includes(random)) {
            options.push(random);
        }
    }
    return shuffleArray(options);
}

function checkAnswer(selected, correct) {
    const buttons = optionsEl.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correct) {
            btn.classList.add('correct');
        } else if (btn.textContent === selected && selected !== correct) {
            btn.classList.add('incorrect');
        }
    });
    if (selected === correct) {
        correctAnswers++;
        resultEl.textContent = `Correct ! La capitale de ${currentQuestions[currentQuestionIndex].country} est ${correct}.`;
    } else {
        resultEl.textContent = `Incorrect. La capitale de ${currentQuestions[currentQuestionIndex].country} est ${correct}.`;
    }
    resultEl.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function showResults() {
    scores[currentContinent] = correctAnswers;
    quizSection.classList.add('hidden');
    scoreSection.classList.remove('hidden');
    displayScores();
}

function displayScores() {
    scoresEl.innerHTML = '';
    Object.keys(scores).forEach(continent => {
        const item = document.createElement('div');
        item.className = 'score-item';
        item.innerHTML = `<span>${getContinentName(continent)}</span><span>${scores[continent]} / ${countries[continent].length}</span>`;
        scoresEl.appendChild(item);
    });
}

function showContinents() {
    scoreSection.classList.add('hidden');
    continentSelection.classList.remove('hidden');
}

function showScoresShortcut() {
    continentSelection.classList.add('hidden');
    quizSection.classList.add('hidden');
    scoreSection.classList.remove('hidden');
    displayScores();
}

function getContinentName(key) {
    const names = {
        afrique: 'Afrique',
        asie: 'Asie',
        europe: 'Europe',
        'amerique-nord': 'Amérique du Nord',
        'amerique-sud': 'Amérique du Sud',
        oceanie: 'Océanie'
    };
    return names[key];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
