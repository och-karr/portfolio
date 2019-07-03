let isPl = true;

const btn = document.getElementById('nav-btn');

const linkStart = document.getElementById('link-start');
const linkAbout = document.getElementById('link-about');
const linkProjects = document.getElementById('link-projects');
const linkTech = document.getElementById('link-tech');
const linkContact = document.getElementById('link-contact');

const titleAbout = document.getElementById('title-about');
const titleProjects = document.getElementById('title-projects');
const titleTech = document.getElementById('title-tech');
const titleContact = document.getElementById('title-contact');

const textAbout1 = document.getElementById('text-about-1');
const textAbout2 = document.getElementById('text-about-2');

const projLandingPage = document.getElementById('proj-landing-page');
const projThemeShopware = document.getElementById('proj-theme-shopware');
const projSmoothieWebpage = document.getElementById('proj-smoothie-webpage');

const names = [
  {
    links : {
      start : 'Start',
      about: 'O mnie',
      projects: 'Projekty',
      tech: 'Technologie',
      contact: 'Kontakt'
    },
    about : {
      text1 : `Cześć! Jestem Karolina i mieszkam w Krakowie. Tworzeniem stron 
        zaczęłam interesować się pod koniec 2017 roku i od tamtej pory rozwijam 
        swoje umiejętności w tej dziedzinie. Obecnie pogłębiam wiedzę głównie z
        bardziej złożonych zagadnień języka JavaScript oraz z Reacta.Mam za sobą 
        pierwsze doświadczenie komercyjne, a aktualnie poszukuję pracy albo stażu.
        Jestem osobą otwartą na nowe wyzwania i chętną do nauki. Lubię kontakt z 
        ludźmi, chętnie pomagam innym ale też słucham bardziej doświadczonych osób 
        i stosuję się do ich rad.`,
      text2 : `Efekty mojej dotychczasowej pracy
        można zobaczyć na tej stronie. Zapraszam również do odwiedzenia mojego
        <a class="about-me--text-link" href="https://github.com/och-karr" target="_blank">Githuba</a>.
        A tutaj możesz zobaczyć moje
        <a class="about-me--text-link" href="./images/K-Och-Pudlo-CV.pdf" target="_blank">CV</a>.`
    },
    projects : {
      landingPage : `Projekt responsywnej landing page z wykorzystaniem HTML, Sass, JavaScript 
        oraz task managera Gulp. W projekcie wykonałam dwupoziomowe menu, stylowanie elementów 
        odtwarzacza mp3 oraz dodałam karuzelę wykorzystując bibliotekę slick. Wykonałam również
         podstawową walidację formularza oraz zapisywanie maili do bazy danych Firebase.`,
      themeShopware : `Theme dla sklepu internetowego z wykorzystaniem platformy ecommerce - 
        Shopware, wykorzystując Sass, jQuery oraz Gulp. Oprócz nadania styli dla strony głównej 
        oraz strony kategorii utworzyłam plugin ze spersonalizowanym elementem „shopping-world”. 
        W projekcie zachowane było podejście RWD.`,
      smoothieWebpage: `
      Projekt responsywnej strony z wykorzystaniem HTML, Sass, JavaScript oraz task managera Gulp. 
        Wykorzystana była również biblioteka Slick do wykonania karuzeli. Samodzielnie zaprojektowałam 
        wygląd strony, wykonałam podstawową walidację formularza oraz zapisywanie maili do bazy danych 
        Firebase.`
    }
  },
  {
    links : {
      start : 'Start',
      about: 'About',
      projects: 'Projects',
      tech: 'Technologies',
      contact: 'Contact'
    },
    about : {
      text1 : `Hi! I am Karolina and I live in Krakow. I started to create websites 
        at the end of 2017 and since then I have been developing my skills in this field. 
        Currently, I am deepening my knowledge mainly from the more complex issues of JavaScript 
        and React. I have had my first commercial experience behind me and I am currently 
        looking for a job or an internship. I am a person open to new challenges and willing 
        to learn. I like contact with people, I am happy to help others but I also listen to 
        more experienced people and follow their advice.`,
      text2 : `The effects of my previous work can be seen on 
        this page. I also invite you to visit my 
        <a class="about-me--text-link" href="https://github.com/och-karr" target="_blank">Github</a>.
        <br> And here you can see my 
        <a class="about-me--text-link" href="./images/K-Och-Pudlo-CV.pdf" target="_blank">CV</a>.`
    },
    projects : {
      landingPage : `Responsive landing page project using HTML, Sass, JavaScript and task manager Gulp.
         In the project I made a two-level menu, styling the elements of an mp3 player and added a carousel
          using the slick library. I also made basic form validation and saving e-mails to the 
          Firebase database.`,
      themeShopware : `Theme for a store using the ecommerce platform - Shopware, using Sass, jQuery and Gulp. 
        In addition to giving styles for the main page and category page, I created a plugin with a personalized 
        shopping-world element. The RWD approach was preserved in the project.`,
      smoothieWebpage: `Responsive landing page using HTML, Sass, JavaScript and Gulp task manager. The Slick
         library was also used to make the carousel. I designed the look of the page myself, made basic validation
        of the form and saved e-mails to the Firebase database.`
    }
  }
]

const translate = (lang) => {
  linkStart.innerHTML = names[lang].links.start;
  linkAbout.innerHTML = names[lang].links.about;
  linkProjects.innerHTML = names[lang].links.projects;
  linkTech.innerHTML = names[lang].links.tech;
  linkContact.innerHTML = names[lang].links.contact;

  titleAbout.innerHTML = names[lang].links.about;
  titleProjects.innerHTML = names[lang].links.projects;
  titleTech.innerHTML = names[lang].links.tech;
  titleContact.innerHTML = names[lang].links.contact;

  textAbout1.innerHTML = names[lang].about.text1;
  textAbout2.innerHTML = names[lang].about.text2;

  projLandingPage.innerHTML = names[lang].projects.landingPage;
  projThemeShopware.innerHTML = names[lang].projects.themeShopware;
  projSmoothieWebpage.innerHTML = names[lang].projects.smoothieWebpage;
}

btn.addEventListener('click', function() {
  if(isPl === true) {
    translate(1);
    btn.innerHTML = 'PL';
    alert('This translation is incomplete. Sorry for the inconvenience.')
    isPl = false;
  } else {
    translate(0);
    btn.innerHTML = 'EN';
    isPl = true;
  }
})