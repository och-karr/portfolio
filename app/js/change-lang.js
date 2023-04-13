
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
const exp0a = document.getElementById('exp-0a');
const exp0b = document.getElementById('exp-0b');
const exp0c = document.getElementById('exp-0c');
const exp0d = document.getElementById('exp-0d');
const exp0e = document.getElementById('exp-0e');
// const exp1a = document.getElementById('exp-1a');
const exp1b = document.getElementById('exp-1b');
// const exp1c = document.getElementById('exp-1c');
const exp1d = document.getElementById('exp-1d');
const exp1e = document.getElementById('exp-1e');
const exp1f = document.getElementById('exp-1f');
const exp1g = document.getElementById('exp-1g');
const exp2a = document.getElementById('exp-2a');
const exp2b = document.getElementById('exp-2b');

const projPricingPlan = document.getElementById('proj-pricing-plan');
const projHotelPage = document.getElementById('proj-hotel-page');
const projValidForm = document.getElementById('proj-valid-form');
const projLandingPage = document.getElementById('proj-landing-page');
const projLambdaRestaurant = document.getElementById('proj-lambda-restaurant');
const projThemeShopware = document.getElementById('proj-theme-shopware');
const projSmoothieWebpage = document.getElementById('proj-smoothie-webpage');
const projKanbanBoard = document.getElementById('proj-kanban-board');
const projRockPaperScissors = document.getElementById('proj-rock-paper-scissors');
const projRandomQuote = document.getElementById('proj-random-quote');
const projCountrySearch = document.getElementById('proj-country-search');
const projTodoReact = document.getElementById('proj-todo-react');
// const projTodoList = document.getElementById('proj-todo-list');
const projStopwatch = document.getElementById('proj-stopwatch');
const projNgShop = document.getElementById('proj-ng-shop');
const projNgAuth = document.getElementById('proj-ng-auth');

const projectsScreens = document.getElementById('projects-screens');

const techLangs = document.getElementById('tech-languages');
const techLangsText = document.getElementById('tech-languages-text');
const techFrames = document.getElementById('tech-frames');
const techFramesText = document.getElementById('tech-frames-text');
const techPrograms = document.getElementById('tech-programs');
const techProgramsText = document.getElementById('tech-programs-text');

const contactData = document.getElementById('contact-data');

const names = [
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
      umiejętności w tej dziedzinie - w tym momencie głównie z Angulara i JavaScript.`,
      text2: `Prywatnie lubię góry, planszówki, malowanie obrazów i czytanie książek i
      żałuję, że doba
      ma tylko 24 godziny.`,
      text3: `Zapraszam do kontaktu.`
    },
    experience: {
      expCompany0: `Front-End Web Developer - Profitroom`,
      expCompany1: `Front-End Developer - Salesmanago`,
      expCompany2: `Front-End Developer Internship - Virtua`,
      expDate0: `11.2020 - 02.2022`,
      expDate1: `08.2019 - 10.2020`,
      exp0a: `Tworzenie responsywnych stron internetowych w CMS na podstawie projektów Pixel Perfect`,
      exp0b: `Tworzenie funkcjonalności przy wykorzystaniu JavaScript i jQuery`,
      exp0c: `Dodawanie efektów i animacji przy wykorzystaniu bibliotek`,
      exp0d: `Współpraca z zespołem grafików i developerów`,
      exp0e: `<p>Przykłady stworzonych stron:</p>
                                    <a class="expierience__link" target="_blank" style="text-decoration: underline" href="https://www.villaverde.pl/">Villa Verde, </a>
                                    <a class="expierience__link" target="_blank" style="text-decoration: underline" href="https://dosloncespa.pl/">Dosłońce Spa, </a>
                                    <a class="expierience__link" target="_blank" style="text-decoration: underline" href="https://trzywyspy.pl/">Trzy Wyspy.</a>`,
      exp1g: `Tworzenie widoków w AngularJS - dashboardy Integracja z GoogleAds i Adform oraz Deep Behavioural Profiling w aplikacji Salesmanago`,
      exp1f: `Bieżące prace związane z utrzymywaniem kodu i poprawą błędów w aplikacji Salesmanago`,
      exp1e: `Praca w zespole, code review`,
      exp1d: `Tworzenie responsywnych landing pages, formularzy, popupów, sidebarów, ramek rekomendacji, mailingów - HTML, CSS, JS`,
      // exp1c: `Tworzenie mailingów zgodnych z wymaganiami różnych skrzynek mailowych jak gmail, Outlook`,
      exp1b: `Tworzenie projektów maili, popupów, formularzy w programie Photoshop`,
      // exp1a: `Uczestniczenie w rekrutacjach`,
      exp2a: `Stworzenie responsywnego landing page z wykorzystaniem HTML, Sass, JavaScript oraz task managera Gulp.`,
      exp2b: `Stworzenie theme dla sklepu internetowego w oparciu o platformę ecommerce - Shopware, wykorzystując Sass, jQuery oraz Gulp.`,
    },
    projects: {
      pricingPlan: `Projekt wykorzystujący programowanie obiektowe. Stworzony z myślą o łatwiości edycji - aby dodać nową kartę wystarczy skopiować element 'li' w html-u.`,
      validForm: `Projekt formularza z obszerną walidacją napisaną w JavaScript. Wszystko jest napisane w jednym pliku ponieważ było to odgórne wymaganie. Formularz posiada customowy kalendarz.`,
      landingPage: `Projekt responsywnej landing page z wykorzystaniem HTML, Sass, JavaScript 
        oraz task managera Gulp. W projekcie wykonałam dwupoziomowe menu, stylowanie elementów 
        odtwarzacza mp3 oraz dodałam karuzelę wykorzystując bibliotekę slick. Wykonałam również
         podstawową walidację formularza oraz zapisywanie maili do bazy danych Firebase.`,
      lambdaRestaurant: `Projekt strony z wykorzystaniem HTML, Sass, JavaScript oraz task
        managera Gulp wykonanej w ramach projektu Rolling Scopes School organizowanej przez Epam.`,
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
        które go uruchamiają, zatrzymują, resetują, a także dodają czas do listy i czyszczą tą listę.`,
      ngShop: `Projekt sklepu napisany w Angular 14. W widoku kategorii - sortowanie, filtrowanie, search, paginacja.`,
      ngAuth: `Projekt wykorzystujący autentykację, autoryzację, refresh, guardy.`
    },
    titles: {
      projectsScreens: `Przykładowe projekty wykonane podczas mojej pracy (screeny)`
    },

    tech: {
      langs: `Języki`,
      langsText: `W mojej pracy dotychczas najczęściej używałam HTMLa, CSSa i JavaScriptu więc w tych technologiach czuję się najlepiej. Używałam również preprocessora Sass oraz metodologii BEM.`,
      frames: `Frameworki i biblioteki`,
      // framesText: `W mojej poprzedniej pracy używałam AngularJS.
      // Uczestniczyłam również w kilkudniowych warsztatach z podstaw Angulara w wersji 6
      // i chcę poszerzać swoją wiedzę w tym zakresie.
      // Z Reacta przerobiłam parę kursów i stworzyłam małe projekty ale chwilowo 
      // nie mam czasu na rozwój w tej technologii, mimo to nie wykluczam tego w przyszłości.`,
      framesText: `W mojej poprzedniej pracy używałam AngularJS. 
      Uczestniczyłam również w kilkudniowych warsztatach z podstaw Angulara w wersji 6 
      i chcę poszerzać swoją wiedzę w tym zakresie. 
      W tym momencie skupiam się na poznaniu frameworka Angular w wersji 14.`,
      programs: `Technologie i programy`,
      programsText: `W swojej pracy miałam też okazję tworzyć koncepcje w Photoshopie. Dodatkowo używałam Gulpa i tworzyłam theme dla projektu w Shopware (platforma ecommerce). W pracy używam Jiry i pracuję w zespole wykorzystując Gita i Bitbucket.`
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
      text1: `Hi! I am Karolina and I live in Krakow. I began my adventure with Front-End at the end of 2017 and since 
              then I have been developing my skills in this field - at this time mainly from Angular and JavaScript.`,
      text2: `Privately, I like mountains, board games, painting pictures and reading books and I regret that the day has only 24 hours.`,
      text3: `Feel free to contact me.`
    },
    experience: {
      expCompany0: `Front-End Web Developer - Profitroom`,
      expCompany1: `Front-End Developer - Salesmanago`,
      expCompany2: `Staż Front-End Developer - Virtua`,
      expDate0: `11.2020 - 02.2022`,
      expDate1: `08.2019 - 10.2020`,
      exp0a: `Creating responsive pixel-perfect webpages in CMS based on designs`,
      exp0b: `Creating system functionalities using JavaScript and jQuery`,
      exp0c: `Dodawanie efektów i animacji przy wykorzystaniu bibliotek`,
      exp0d: `Cooperating with graphic designers and developers`,
      exp0e: `<p>Examples of created web pages:</p>
                                    <a class="expierience__link" target="_blank" style="text-decoration: underline" href="https://www.villaverde.pl/">Villa Verde, </a>
                                    <a class="expierience__link" target="_blank" style="text-decoration: underline" href="https://dosloncespa.pl/">Dosłońce Spa, </a>
                                    <a class="expierience__link" target="_blank" style="text-decoration: underline" href="https://trzywyspy.pl/">Trzy Wyspy.</a>`,
      exp1g: `Creating views in the AngularJS framework - Integration with GoogleAds and Adform and Deep Behavioural Profiling dashboards in Salesmanago application`,
      exp1f: `Ongoing work related to the maintenance of the code and the bugs fixing in the Salesmanago application`,
      exp1e: `Team work, code review`,
      exp1d: `Creating responsive landing pages, forms, pop-ups, sidebars, recommendation frames - using HTML, CSS, JS`,
      // exp1c: `Creating mailings as required by the various mailboxes such as Gmail, Outlook`,
      exp1b: `Designing e-mails, pop-ups, forms concepts in Photoshop`,
      // exp1a: `Participation in recruitment`,
      exp2a: `Creating a responsive landing page using HTML, Sass, JavaScript and Gulp task manager`,
      exp2b: `Creating a theme for an online store based on e-commerce platform - Shopware, using Sass, jQuery and Gulp`,
    },
    projects: {
      pricingPlan: `Project using object oriented programming. Created for ease of editing - to add a new tab, just copy the 'li' element in the html.`,
      hotelPage: `Responsive landing page written using HTML, Sass, JavaScript and Gulp task manager.`,
      validForm: `Form design with extensive validation written in JavaScript. Everything is written in one file because it was a top requirement. The form has a custom calendar.`,
      landingPage: `Responsive landing page project using HTML, Sass, JavaScript and task manager Gulp.
         In the project I made a two-level menu, styling the elements of an mp3 player and added a carousel
          using the slick library. I also made basic form validation and saving e-mails to the 
          Firebase database.`,
      lambdaRestaurant: `Website created using HTML, Sass, JavaScript and the Gulp task manager as a part of the Rolling Scopes School project organized by Epam.`,
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
        start, stop, reset, and add time to the list and clean the list.`,
      ngShop: `Shop in Angular 14. I used sorting, filtering, search and pagination in category view.`,
      ngAuth: `A project using authentication, authorization, refresh, guards.`
    },
    titles: {
      projectsScreens: `Sample projects made during my work (screenshots)`
    },

    tech: {
      langs: `Languages`,
      langsText: `In my work so far I have used HTML, CSS and JavaScript so I feel the best in these technologies. In my work I also used the Sass preprocessor and BEM methodology.`,
      frames: `Frameworks and libraries`,
      // framesText: `I my previous work I was using AngularJS. I also attended the Angular basics workshop 
      // in version 6 and I want to broaden my knowledge in this area.
      //  With React I have completed several courses and created small projects but at the moment 
      //  I do not have time to develop in this technology, although I do not exclude it in the future.`,
      framesText: `I my previous work I was using AngularJS. I also attended the Angular basics workshop 
      in version 6 and I want to broaden my knowledge in this area.
      I am focusing on getting to know the Angular 14 framework at the moment.`,
      programs: `Technologies and programs`,
      programsText: `In my work I also had the opportunity to create concepts in Photoshop. In addition, I used Gulp and created a theme for the project in Shopware (ecommerce platform). On a daily basis I work in a team, use Jira, Git and Bitbucket.`
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

  expCompany1.innerHTML = names[lang].experience.expCompany1;
  expCompany2.innerHTML = names[lang].experience.expCompany2;
  expDate1.innerHTML = names[lang].experience.expDate1;
  exp0a.innerHTML = names[lang].experience.exp0a;
  exp0b.innerHTML = names[lang].experience.exp0b;
  exp0c.innerHTML = names[lang].experience.exp0c;
  exp0d.innerHTML = names[lang].experience.exp0d;
  exp0e.innerHTML = names[lang].experience.exp0e;
  // exp1a.innerHTML = names[lang].experience.exp1a;
  exp1b.innerHTML = names[lang].experience.exp1b;
  // exp1c.innerHTML = names[lang].experience.exp1c;
  exp1d.innerHTML = names[lang].experience.exp1d;
  exp1e.innerHTML = names[lang].experience.exp1e;
  exp1f.innerHTML = names[lang].experience.exp1f;
  exp1g.innerHTML = names[lang].experience.exp1g;
  exp2a.innerHTML = names[lang].experience.exp2a;
  exp2b.innerHTML = names[lang].experience.exp2b;

  projPricingPlan.innerHTML = names[lang].projects.pricingPlan;
  projHotelPage.innerHTML = names[lang].projects.hotelPage;
  projValidForm.innerHTML = names[lang].projects.validForm;
  projLandingPage.innerHTML = names[lang].projects.landingPage;
  projLambdaRestaurant.innerHTML = names[lang].projects.lambdaRestaurant;
  projThemeShopware.innerHTML = names[lang].projects.themeShopware;
  projSmoothieWebpage.innerHTML = names[lang].projects.smoothieWebpage;
  projKanbanBoard.innerHTML = names[lang].projects.kanbanBoard;
  projRockPaperScissors.innerHTML = names[lang].projects.rockPaperScissors;
  projRandomQuote.innerHTML = names[lang].projects.randomQuote;
  projCountrySearch.innerHTML = names[lang].projects.countrySearch;
  projTodoReact.innerHTML = names[lang].projects.todoReact;
  // projTodoList.innerHTML = names[lang].projects.todoList;
  projStopwatch.innerHTML = names[lang].projects.stopwatch;
  projNgShop.innerHTML = names[lang].projects.ngShop;
  projNgAuth.innerHTML = names[lang].projects.ngAuth;

  projectsScreens.innerHTML = names[lang].titles.projectsScreens;

  techLangs.innerHTML = names[lang].tech.langs;
  techLangsText.innerHTML = names[lang].tech.langsText
  techFrames.innerHTML = names[lang].tech.frames;
  techFramesText.innerHTML = names[lang].tech.framesText;
  techPrograms.innerHTML = names[lang].tech.programs;
  techProgramsText.innerHTML = names[lang].tech.programsText;

  contactData.innerHTML = names[lang].contact.dataTitle;
}

let isPl = true;
const btn = document.getElementById('nav-btn');

btn.addEventListener('click', function () {
  if (isPl === true) {
    translate(1);
    btn.innerText = 'PL';
    // alert('This translation is incomplete. Sorry for the inconvenience.')
    isPl = false;
  } else {
    translate(0);
    btn.innerText = 'EN';
    isPl = true;
  }
})