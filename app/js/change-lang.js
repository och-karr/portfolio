
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
      text1: `Hi! I am Karolina and I live in Krakow. I began my adventure with Front-End at the end of 2017 and since then I have been developing my skills in this field - at this time mainly from Angular and JavaScript. I currently work as a Junior Front-End Developer in one of the Krakow companies.`,
      text2: `Privately, I like mountains, painting pictures and reading books and I regret that the day has only 24 hours.`,
      text3: `Feel free to contact me.`
    },
    experience: {
      expCompany1: `Front-End Developer - Salesmanago`,
      expCompany2: `Staż Front-End Developer - Virtua`,
      expDate1: `08.2019 - till now`,
      exp1a: `Creating views in the AngularJS framework`,
      exp1b: `Creating responsive landing pages, forms, pop-ups, sidebars, recommendation frames - with validation using HTML, CSS, JS`,
      exp1c: `Creating mailings as required by the various mailboxes such as Gmail, Outlook`,
      exp1d: `Designing e-mails, pop-ups, forms concepts in Photoshop`,
      exp1e: `Participation in recruitment`,
      exp2a: `Creating a responsive landing page using HTML, Sass, JavaScript and Gulp task manager`,
      exp2b: `Creating a theme for an online store based on e-commerce platform - Shopware, using Sass, jQuery and Gulp`,
    },
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
  exp2a.innerHTML = names[lang].experience.exp2a;
  exp2b.innerHTML = names[lang].experience.exp2b;

  
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