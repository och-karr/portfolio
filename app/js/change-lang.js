let isPl = true;

const btn = document.getElementById('nav-btn');

const linkStart = document.getElementById('link-start');
const linkAbout = document.getElementById('link-about');
const linkExperience = document.getElementById('link-experience');
const linkProjects = document.getElementById('link-projects');
const linkTech = document.getElementById('link-tech');
const linkContact = document.getElementById('link-contact');

const titleAbout = document.getElementById('title-about');
const titleExperience = document.getElementById('title-experience');
const titleProjects = document.getElementById('title-projects');
const titleTech = document.getElementById('title-tech');
const titleContact = document.getElementById('title-contact');

const textAbout1 = document.getElementById('text-about-1');
const textAbout2 = document.getElementById('text-about-2');
const textAbout3 = document.getElementById('text-about-3');

const expCompany1 = document.getElementById('exp-company-1');
const expCompany2 = document.getElementById('exp-company-2');
const expDate1 = document.getElementById('exp-date-1');
const exp1a = document.getElementById('exp-1a');
const exp1b = document.getElementById('exp-1b');
const exp1c = document.getElementById('exp-1c');
const exp1d = document.getElementById('exp-1d');
const exp1e = document.getElementById('exp-1e');
const exp2a = document.getElementById('exp-2a');
const exp2b = document.getElementById('exp-2b');

const projLandingPage = document.getElementById('proj-landing-page');
const projThemeShopware = document.getElementById('proj-theme-shopware');
const projSmoothieWebpage = document.getElementById('proj-smoothie-webpage');
const projKanbanBoard = document.getElementById('proj-kanban-board');
const projRockPaperScissors = document.getElementById('proj-rock-paper-scissors');
const projRandomQuote = document.getElementById('proj-random-quote');
const projCountrySearch = document.getElementById('proj-country-search');
const projTodoReact = document.getElementById('proj-todo-react');
const projTodoList = document.getElementById('proj-todo-list');
const projStopwatch = document.getElementById('proj-stopwatch');

const techHtml = document.getElementById('tech-html');
const techCss = document.getElementById('tech-css');
const techSass = document.getElementById('tech-sass');
const techJs = document.getElementById('tech-js');
const techBootstrap = document.getElementById('tech-bootstrap');
const techJquery = document.getElementById('tech-jquery');
const techGulp = document.getElementById('tech-gulp');
const techAjax = document.getElementById('tech-ajax');
const techReact = document.getElementById('tech-react');
const techShopware = document.getElementById('tech-shopware');
const techAvocode = document.getElementById('tech-avocode');
const techJira = document.getElementById('tech-jira');
const techGit = document.getElementById('tech-git');

const contactData = document.getElementById('contact-data');

const names = [
  //pl
  {
    links: {
      start: 'Start',
      about: 'O mnie',
      experience: 'Doświadczenie',
      projects: 'Projekty',
      tech: 'Technologie',
      contact: 'Kontakt'
    },
    about: {
      text1: `Cześć! Jestem Karolina i mieszkam w Krakowie.
      Przygodę z Front-Endem zaczęłam pod koniec 2017 roku i od tamtej pory rozwijam swoje
      umiejętności w tej dziedzinie - w tym momencie głównie z Angulara i JavaScriptu. Obecnie pracuję
      jako Junior Front-End Developer w jednej z
      krakowskich firm.`,
      text2: `Prywatnie lubię góry, malowanie obrazów i czytanie książek i
      żałuję, że doba
      ma tylko 24 godziny.`,
      text3: `Zapraszam do kontaktu.`
    },
    experience: {
      expCompany1: `Front-End Developer - Salesmanago`,
      expCompany2: `Front-End Developer Internship - Virtua`,
      expDate1: `08.2019 - obecnie`,
      exp1a: `Tworzenie widoków w AngularJS`,
      exp1b: `Tworzenie landing pages, formularzy, popupów, sidebarów, ramek rekomendacji - razem z walidacją przy wykorzystaniu HTML, CSS, JS przy zachowaniu responsywności`,
      exp1c: `Tworzenie mailingów zgodnych z wymaganiami różnych skrzynek mailowych jak gmail, Outlook`,
      exp1d: `Tworzenie koncepcji maili, popupów, formularzy w programie Photoshop`,
      exp1e: `Uczestniczenie w rekrutacjach`,
      exp2a: `Stworzenie responsywnego landing page z wykorzystaniem HTML, Sass, JavaScript oraz task managera Gulp.`,
      exp2b: `Stworzenie theme dla sklepu internetowego w oparciu o platformę ecommerce - Shopware, wykorzystując Sass, jQuery oraz Gulp.`,
    },
    projects: {
      landingPage: `Projekt responsywnej landing page z wykorzystaniem HTML, Sass, JavaScript 
        oraz task managera Gulp. W projekcie wykonałam dwupoziomowe menu, stylowanie elementów 
        odtwarzacza mp3 oraz dodałam karuzelę wykorzystując bibliotekę slick. Wykonałam również
         podstawową walidację formularza oraz zapisywanie maili do bazy danych Firebase.`,
      themeShopware: `Theme dla sklepu internetowego z wykorzystaniem platformy ecommerce - 
        Shopware, wykorzystując Sass, jQuery oraz Gulp. Oprócz nadania styli dla strony głównej 
        oraz strony kategorii utworzyłam plugin ze spersonalizowanym elementem „shopping-world”. 
        W projekcie zachowane było podejście RWD.`,
      smoothieWebpage: `
      Projekt responsywnej strony z wykorzystaniem HTML, Sass, JavaScript oraz task managera Gulp. 
        Wykorzystana była również biblioteka Slick do wykonania karuzeli. Samodzielnie zaprojektowałam 
        wygląd strony, wykonałam podstawową walidację formularza oraz zapisywanie maili do bazy danych 
        Firebase.`,
      kanbanBoard: `Projekt tablicy z kolumnami, które zawierają karteczki. Karteczki można przenosić 
        pomiędzy kolumnami, edytować, zmieniać im kolor. Projekt napisany z wykorzystaniem składni 
        jQuery i programowania obiektowego.`,
      rockPaperScissors: `Gra napisana w języku JavaScript. Do wystylowania gry użyty był głównie 
        Bootstrap. Aplikacja pozwala zagrać w popularną grę razem z Komputerem.`,
      randomQuote: `Aplikacja losująca cytaty pobierane z zewnętrznego API. Cytaty można udostępnić
         na twitterze - wybrano tylko te, które mają do 140 znaków.`,
      countrySearch: `Wyszukiwarka krajów napisana w jQuery. Informacje o krajach są pobierane 
        z zewnętrznego API.`,
      todoReact: `Projekt listy zadań wykonanej w React. Oprócz dodawania zadań, można je usuwać 
        i odznaczać. Poza tym zadania są liczone. Projekt wykonany przy użyciu create-react-app.`,
      todoList: `Projekt listy zadań wykonanej w JavaScripcie. Zadaniom można nadać priorytet. 
        Listę zadań można sortować po nazwie lub statusie wykonania. W projekcie wykonana została 
        paginacja, dzięki której można wyświetlać ograniczoną ilość zadań na stronę. Zadania 
        można usuwać i zapisują się one w pamięci lokalnej.`,
      stopwatch: `Projekt stopera napisany z wykorzystaniem składni ES6. Stoper posiada funkcje, 
        które go uruchamiają, zatrzymują, resetują, a także dodają czas do listy i czyszczą tą listę.`
    },
    tech: {
      html: 'Specyfikacja 5. Dobrze radzę sobie w HTML, wykorzystuję znaczniki semantyczne, bez problemu tworzę prawidłową strukturę strony.',
      css: 'CSS podobnie jak HTML, umiem w stopniu bardzo dobrym i czuję się w nim swobodnie.',
      sass: 'Sassa używam na co dzień w projektach. Nie tylko zagnieżdzenia, ale również zmienne, mixiny i podstawowe funkcje.',
      js: 'JavaScriptu używam głównie do dodawania funkcjonalności na stronie - radzę sobie z tym bez problemu. Używałam go również do wykonania prostych aplikacji i nadal się rozwijam w tym temacie. Specyfikacja ES6 nie jest mi obca.',
      bootstrap: ' W swoich projektach wykorzystywałam zarówno elementy jak i komponenty.',
      jquery: 'Wykorzystywałam do tworzenia interakcji na stronie, a także małych aplikacji np. Kanban Board.',
      gulp: 'Ten task manager poznałam na stażu i bardzo mi się spodobał. Od tamtego momentu używam go bardzo często.',
      ajax: 'Ajaxa używałam, aby korzystać z zewnętrznego API.',
      react: 'Aktualnie kładę duży nacisk na rozwój w tej technologii.',
      shopware: 'Jest to platforma ecommerce, z którą miałam okazję bliżej się poznać podczas 3-miesięcznego stażu.',
      avocode: 'Podobnie jak i Photoshop używałam go do analizy projektu graficznego - eksportu plików psd, rozpoznawanie czcionek, kolorów, wymiarów i odległości pomiędzy elementami.',
      jira: 'Narzędzia, które miałam okazję wykorzystywać podczas stażu.',
      git: 'W codziennej pracy wykorzystuję ten system kontroli wersji, a swoje repozytoria umieszczam na Githubie.',
    },
    contact: {
      dataTitle: 'Dane kontaktowe'
    }
  },
  //en
  {
    links: {
      start: 'Start',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      tech: 'Technologies',
      contact: 'Contact'
    },
    about: {
      text1: `Cześć! Jestem Karolina i mieszkam w Krakowie.
      Przygodę z Front-Endem zaczęłam pod koniec 2017 roku i od tamtej pory rozwijam swoje
      umiejętności w tej dziedzinie - w tym momencie głównie z Angulara i JavaScriptu. Obecnie pracuję
      jako Junior Front-End Developer w jednej z
      krakowskich firm.`,
      text2: `Prywatnie lubię góry, malowanie obrazów i czytanie książek i
      żałuję, że doba
      ma tylko 24 godziny.`,
      text3: `Zapraszam do kontaktu.`
    },
    experience: {
      expCompany1: `Front-End Developer - Salesmanago`,
      expCompany2: `Front-End Developer Internship - Virtua`,
      expDate1: `08.2019 - obecnie`,
      exp1a: `Tworzenie widoków w AngularJS`,
      exp1b: `Tworzenie landing pages, formularzy, popupów, sidebarów, ramek rekomendacji - razem z walidacją przy wykorzystaniu HTML, CSS, JS przy zachowaniu responsywności`,
      exp1c: `Tworzenie mailingów zgodnych z wymaganiami różnych skrzynek mailowych jak gmail, Outlook`,
      exp1d: `Tworzenie koncepcji maili, popupów, formularzy w programie Photoshop`,
      exp1e: `Uczestniczenie w rekrutacjach`,
      exp2a: `Stworzenie responsywnego landing page z wykorzystaniem HTML, Sass, JavaScript oraz task managera Gulp.`,
      exp2b: `Stworzenie theme dla sklepu internetowego w oparciu o platformę ecommerce - Shopware, wykorzystując Sass, jQuery oraz Gulp.`,
    },
    projects: {
      landingPage: `Responsive landing page project using HTML, Sass, JavaScript and task manager Gulp.
         In the project I made a two-level menu, styling the elements of an mp3 player and added a carousel
          using the slick library. I also made basic form validation and saving e-mails to the 
          Firebase database.`,
      themeShopware: `Theme for a store using the ecommerce platform - Shopware, using Sass, jQuery and Gulp. 
        In addition to giving styles for the main page and category page, I created a plugin with a personalized 
        shopping-world element. The RWD approach was preserved in the project.`,
      smoothieWebpage: `Responsive landing page using HTML, Sass, JavaScript and Gulp task manager. The Slick
         library was also used to make the carousel. I designed the look of the page myself, made basic validation
        of the form and saved e-mails to the Firebase database.`,
      kanbanBoard: `Project of a table with columns that contain sticky notes. Sticky notes can be moved between
         columns, edited, and changed color. Project scripted using jQuery syntax and object-oriented programming.`,
      rockPaperScissors: `A game scripted in JavaScript. The Bootstrap was used to give the website a look. 
      The application allows you to play a popular game with the Computer.`,
      randomQuote: `An application that randomizes quotes retrieved from an external API. Quotes can be shared
         on twitter - only those that have up to 140 characters have been selected.`,
      countrySearch: `Country search engine scripted in jQuery. Country information is retrieved from an 
        external API.`,
      todoReact: `Todo list made in React. In addition to adding tasks, you can delete and uncheck them. 
        Moreover, tasks are counted. A project made using the create-react-app.`,
      todoList: `Todo list project scripted in JavaScript. Tasks can be given priority. You can sort the
         task list by the name or the execution status. The pagination allows you to display a limited 
         number of tasks per page. Tasks can be deleted and saved in the local memory.`,
      stopwatch: `Project of stopwatch scripted using the ES6 syntax. The stopwatch has functions that 
        start, stop, reset, and add time to the list and clean the list.`
    },
    tech: {
      html: '5 specification. I cope well in HTML, I use semantic tags and create the correct page structure without any problem.',
      css: 'CSS, like HTML, I know very well and feel that I use it freely.',
      sass: 'I use Sass every day in projects. Not only nesting, but also variables, mixins and basic functions.',
      js: 'I use JavaScript mainly to add functionality on the website - I deal with it without any problem. I also used it for simple applications and I\'m still developing in this topic. The ES6 specification is not strange to me.',
      bootstrap: 'I used both elements and components in my projects.',
      jquery: 'I used to create interaction on the site, as well as small applications such as Kanban Board.',
      gulp: 'I got to know this task manager during the internship and I liked it very much. Since then I use it very often.',
      ajax: 'I used Ajax to use the external API.',
      react: 'Currently, I place emphasis on development in this technology.',
      shopware: 'This is an e-commerce platform that I had the opportunity to know during a three-month internship.',
      avocode: 'Like Photoshop, I used it to analyze a graphic design - export of psd files, recognition of fonts, colors, dimensions and distances between elements.',
      jira: 'Tools that I had the opportunity to use during the internship.',
      git: 'In everyday work, I use this version control system, and put my repositories on Github.',
    },
    contact: {
      dataTitle: 'Contact details'
    }
  }
]

const translate = (lang) => {
  linkStart.innerHTML = names[lang].links.start;
  linkAbout.innerHTML = names[lang].links.about;
  linkExperience.innerHTML = names[lang].links.experience;
  linkProjects.innerHTML = names[lang].links.projects;
  linkTech.innerHTML = names[lang].links.tech;
  linkContact.innerHTML = names[lang].links.contact;

  titleAbout.innerHTML = names[lang].links.about;
  titleExperience.innerHTML = names[lang].links.experience;
  titleProjects.innerHTML = names[lang].links.projects;
  titleTech.innerHTML = names[lang].links.tech;
  titleContact.innerHTML = names[lang].links.contact;

  textAbout1.innerHTML = names[lang].about.text1;
  textAbout2.innerHTML = names[lang].about.text2;
  textAbout3.innerHTML = names[lang].about.text3;

  expCompany1 = names[lang].experience.expCompany1;
  expCompany2 = names[lang].experience.expCompany2;
  expDate1 = names[lang].experience.expDate1;
  exp1a = names[lang].experience.exp1a;
  exp1b = names[lang].experience.exp1b;
  exp1c = names[lang].experience.exp1c;
  exp1d = names[lang].experience.exp1d;
  exp1e = names[lang].experience.exp1e;
  exp2a = names[lang].experience.exp2a;
  exp2b = names[lang].experience.exp2b;

  projLandingPage.innerHTML = names[lang].projects.landingPage;
  projThemeShopware.innerHTML = names[lang].projects.themeShopware;
  projSmoothieWebpage.innerHTML = names[lang].projects.smoothieWebpage;
  projKanbanBoard.innerHTML = names[lang].projects.kanbanBoard;
  projRockPaperScissors.innerHTML = names[lang].projects.rockPaperScissors;
  projRandomQuote.innerHTML = names[lang].projects.randomQuote;
  projCountrySearch.innerHTML = names[lang].projects.countrySearch;
  projTodoReact.innerHTML = names[lang].projects.todoReact;
  projTodoList.innerHTML = names[lang].projects.todoList;
  projStopwatch.innerHTML = names[lang].projects.stopwatch;

  techHtml.innerHTML = names[lang].tech.html;
  techCss.innerHTML = names[lang].tech.css;
  techSass.innerHTML = names[lang].tech.sass;
  techJs.innerHTML = names[lang].tech.js;
  techBootstrap.innerHTML = names[lang].tech.bootstrap;
  techJquery.innerHTML = names[lang].tech.jquery;
  techGulp.innerHTML = names[lang].tech.gulp;
  techAjax.innerHTML = names[lang].tech.ajax;
  techReact.innerHTML = names[lang].tech.react;
  techShopware.innerHTML = names[lang].tech.shopware;
  techAvocode.innerHTML = names[lang].tech.avocode;
  techJira.innerHTML = names[lang].tech.jira;
  techGit.innerHTML = names[lang].tech.git;

  contactData.innerHTML = names[lang].contact.dataTitle;
}

btn.addEventListener('click', function () {
  if (isPl === true) {
    translate(1);
    btn.innerHTML = 'PL';
    // alert('This translation is incomplete. Sorry for the inconvenience.')
    isPl = false;
  } else {
    translate(0);
    btn.innerHTML = 'EN';
    isPl = true;
  }
})