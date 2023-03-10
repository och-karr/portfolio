
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
      experience: 'Do??wiadczenie',
      projects: 'Projekty',
      tech: 'Technologie',
      contact: 'Kontakt'
    },
    about: {
      text1: `Cze????! Jestem Karolina i mieszkam w Krakowie.
      Przygod?? z Front-Endem zacz????am pod koniec 2017 roku i od tamtej pory rozwijam swoje
      umiej??tno??ci w tej dziedzinie - w tym momencie g????wnie z ReactJS i JavaScript.`,
      text2: `Prywatnie lubi?? g??ry, plansz??wki, malowanie obraz??w i czytanie ksi????ek i
      ??a??uj??, ??e doba
      ma tylko 24 godziny.`,
      text3: `Zapraszam do kontaktu.`
    },
    experience: {
      expCompany1: `Front-End Developer - Salesmanago`,
      expCompany2: `Front-End Developer Internship - Virtua`,
      expDate1: `08.2019 - obecnie`,
      exp1g: `Tworzenie widok??w w AngularJS - dashboardy Integracja z GoogleAds i Adform oraz Deep Behavioural Profiling w aplikacji Salesmanago`,
      exp1f: `Bie????ce prace zwi??zane z utrzymywaniem kodu i popraw?? b????d??w w aplikacji Salesmanago`,
      exp1e: `Praca w zespole, code review`,
      exp1d: `Tworzenie landing pages, formularzy, popup??w, sidebar??w, ramek rekomendacji - razem z walidacj?? przy wykorzystaniu HTML, CSS, JS przy zachowaniu responsywno??ci`,
      exp1c: `Tworzenie mailing??w zgodnych z wymaganiami r????nych skrzynek mailowych jak gmail, Outlook`,
      exp1b: `Tworzenie koncepcji maili, popup??w, formularzy w programie Photoshop`,
      exp1a: `Uczestniczenie w rekrutacjach`,
      exp2a: `Stworzenie responsywnego landing page z wykorzystaniem HTML, Sass, JavaScript oraz task managera Gulp.`,
      exp2b: `Stworzenie theme dla sklepu internetowego w oparciu o platform?? ecommerce - Shopware, wykorzystuj??c Sass, jQuery oraz Gulp.`,
    },
    projects: {
      pricingPlan: `Projekt wykorzystuj??cy programowanie obiektowe. Stworzony z my??l?? o ??atwio??ci edycji - aby doda?? now?? kart?? wystarczy skopiowa?? element 'li' w html-u.`,
      validForm: `Projekt formularza z obszern?? walidacj?? napisan?? w JavaScript. Wszystko jest napisane w jednym pliku poniewa?? by??o to odg??rne wymaganie. Formularz posiada customowy kalendarz.`,
      landingPage: `Projekt responsywnej landing page z wykorzystaniem HTML, Sass, JavaScript 
        oraz task managera Gulp. W projekcie wykona??am dwupoziomowe menu, stylowanie element??w 
        odtwarzacza mp3 oraz doda??am karuzel?? wykorzystuj??c bibliotek?? slick. Wykona??am r??wnie??
         podstawow?? walidacj?? formularza oraz zapisywanie maili do bazy danych Firebase.`,
      lambdaRestaurant: `Projekt strony z wykorzystaniem HTML, Sass, JavaScript oraz task
        managera Gulp wykonanej w ramach projektu Rolling Scopes School organizowanej przez Epam.`,
      themeShopware: `Theme dla sklepu internetowego z wykorzystaniem platformy ecommerce - 
        Shopware, wykorzystuj??c Sass, jQuery oraz Gulp. Opr??cz nadania styli dla strony g????wnej 
        oraz strony kategorii utworzy??am plugin ze spersonalizowanym elementem ???shopping-world???. 
        W projekcie zachowane by??o podej??cie RWD.`,
      smoothieWebpage: `
      Projekt responsywnej strony z wykorzystaniem HTML, Sass, JavaScript oraz task managera Gulp. 
        Wykorzystana by??a r??wnie?? biblioteka Slick do wykonania karuzeli. Samodzielnie zaprojektowa??am 
        wygl??d strony, wykona??am podstawow?? walidacj?? formularza oraz zapisywanie maili do bazy danych 
        Firebase.`,
      kanbanBoard: `Projekt tablicy z kolumnami, kt??re zawieraj?? karteczki. Karteczki mo??na przenosi?? 
        pomi??dzy kolumnami, edytowa??, zmienia?? im kolor. Projekt napisany z wykorzystaniem sk??adni 
        jQuery i programowania obiektowego.`,
      rockPaperScissors: `Gra napisana w j??zyku JavaScript. Do wystylowania gry u??yty by?? g????wnie 
        Bootstrap. Aplikacja pozwala zagra?? w popularn?? gr?? razem z Komputerem.`,
      randomQuote: `Aplikacja losuj??ca cytaty pobierane z zewn??trznego API. Cytaty mo??na udost??pni??
         na twitterze - wybrano tylko te, kt??re maj?? do 140 znak??w.`,
      countrySearch: `Wyszukiwarka kraj??w napisana w jQuery. Informacje o krajach s?? pobierane 
        z zewn??trznego API.`,
      todoReact: `Projekt listy zada?? wykonanej w React. Opr??cz dodawania zada??, mo??na je usuwa?? 
        i odznacza??. Poza tym zadania s?? liczone. Projekt wykonany przy u??yciu create-react-app.`,
      todoList: `Projekt listy zada?? wykonanej w JavaScripcie. Zadaniom mo??na nada?? priorytet. 
        List?? zada?? mo??na sortowa?? po nazwie lub statusie wykonania. W projekcie wykonana zosta??a 
        paginacja, dzi??ki kt??rej mo??na wy??wietla?? ograniczon?? ilo???? zada?? na stron??. Zadania 
        mo??na usuwa?? i zapisuj?? si?? one w pami??ci lokalnej.`,
      stopwatch: `Projekt stopera napisany z wykorzystaniem sk??adni ES6. Stoper posiada funkcje, 
        kt??re go uruchamiaj??, zatrzymuj??, resetuj??, a tak??e dodaj?? czas do listy i czyszcz?? t?? list??.`
    },
    titles: {
      projectsScreens: `Przyk??adowe projekty wykonane podczas mojej pracy (screeny)`
    },

    tech: {
      langs: `J??zyki`,
      langsText: `W mojej pracy dotychczas najcz????ciej u??ywa??am HTMLa, CSSa i JavaScriptu wi??c w tych technologiach czuj?? si?? najlepiej. U??ywa??am r??wnie?? preprocessora Sass oraz metodologii BEM.`,
      frames: `Frameworki i biblioteki`,
      // framesText: `W mojej poprzedniej pracy u??ywa??am AngularJS. 
      // Uczestniczy??am r??wnie?? w kilkudniowych warsztatach z podstaw Angulara w wersji 6 
      // i chc?? poszerza?? swoj?? wiedz?? w tym zakresie. 
      // Z Reacta przerobi??am par?? kurs??w i stworzy??am ma??e projekty ale chwilowo 
      // nie mam czasu na rozw??j w tej technologii, mimo to nie wykluczam tego w przysz??o??ci.`,
      framesText: `W mojej poprzedniej pracy u??ywa??am AngularJS. 
      Uczestniczy??am r??wnie?? w kilkudniowych warsztatach z podstaw Angulara w wersji 6 
      i chc?? poszerza?? swoj?? wiedz?? w tym zakresie. 
      W tym momencie skupiam si?? na poznaniu frameworka ReactJS, ale nie jestem na 100% przekonana, w kt??rym frameworku chcia??abym ostatecznie pracowa??.`,
      programs: `Technologie i programy`,
      programsText: `W swojej pracy mia??am te?? okazj?? tworzy?? koncepcje w Photoshopie. Dodatkowo u??ywa??am Gulpa i tworzy??am theme dla projektu w Shopware (platforma ecommerce). W pracy u??ywam Jiry i pracuj?? w zespole wykorzystuj??c Gita i Bitbucket.`
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
              then I have been developing my skills in this field - at this time mainly from ReactJS and JavaScript.`,
      text2: `Privately, I like mountains, board games, painting pictures and reading books and I regret that the day has only 24 hours.`,
      text3: `Feel free to contact me.`
    },
    experience: {
      expCompany1: `Front-End Developer - Salesmanago`,
      expCompany2: `Sta?? Front-End Developer - Virtua`,
      expDate1: `08.2019 - till now`,
      exp1g: `Creating views in the AngularJS framework - Integration with GoogleAds and Adform and Deep Behavioural Profiling dashboards in Salesmanago application`,
      exp1f: `Ongoing work related to the maintenance of the code and the bugs fixing in the Salesmanago application`,
      exp1e: `Team work, code review`,
      exp1d: `Creating responsive landing pages, forms, pop-ups, sidebars, recommendation frames - with validation using HTML, CSS, JS`,
      exp1c: `Creating mailings as required by the various mailboxes such as Gmail, Outlook`,
      exp1b: `Designing e-mails, pop-ups, forms concepts in Photoshop`,
      exp1a: `Participation in recruitment`,
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
        start, stop, reset, and add time to the list and clean the list.`
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
      I am focusing on getting to know the ReactJS framework at the moment, but I am not 100% sure in which framework I would like to work in the end.`,
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
  exp1a.innerHTML = names[lang].experience.exp1a;
  exp1b.innerHTML = names[lang].experience.exp1b;
  exp1c.innerHTML = names[lang].experience.exp1c;
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