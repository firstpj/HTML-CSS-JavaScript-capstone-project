const speakers = document.querySelector('.conference-speakers');
  
  const speaker = [
    {
      name: 'nanaokotwasuo',
      image: 'images/nanaokotwasuo.png',
      post: 'A MINISTER FOR LOCAL GOVERNMENT,DECENTRALISATION AND RURAL DEVELOPMENT.',
      experience: 'MINISTER FOR LOCAL GOVERNMENT,DECENTRALISATION AND RURAL DEVELOPMENT.',
    },
    {
      name: 'Minister2',
      image: 'images/Minister2.jpg',
      post: 'ADDOPRESIDENT OF THE REPUBLIC OF GHANA.',
      experience: 'THE NATIONAL HOUSE OF CHIEFSUFULMINISTER FOR COMMUNICATIO.',
    },
    {
      name: 'Bernadette Araba Adjei',
      image: 'images/bethule.jpg',
      post: 'DR. ESQ BERNADETTE ADJEI.',
      experience: 'DR. ESQ BERNADETTE ADJEI.',
    },
    {
      name: 'H.E NANA ADDO DANKWA AKUFO-ADDO',
      image: 'images/nana-portrait.png',
      post: 'ADDOPRESIDENT OF THE REPUBLIC OF GHANA',
      experience: 'H.E Nana Addo Dankwa Akufo-Addo, (born March 29, 1944, Accra, Gold Coast [now Ghana]), Ghanaian lawyer and politician who became president.',
    },
    {
      name: 'HON. DANIEL BOTWE',
      image: 'Img/judge-5.png',
      post: 'MINISTER FOR LOCAL GOVERNMENT,DECENTRALISATION AND RURAL DEVELOPMENT.',
      experience: 'MINISTER FOR LOCAL GOVERNMENT,DECENTRALISATION AND RURAL DEVELOPMENT.',
    },
    {
      name: 'HON. URSULA OWUSU',
      image: 'Img/minister.jpeg',
      post: 'THE NATIONAL HOUSE OF CHIEFSUFULMINISTER FOR COMMUNICATIO.',
      experience: 'THE NATIONAL HOUSE OF CHIEFSUFULMINISTER FOR COMMUNICATIO. ',
    },
  ];
  document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger img');
    const mainContent = document.querySelector('.main');
    const mobilePopUpMenu = document.createElement('div');
    const mobileMenuUl = document.createElement('ul');
    const navlinks = document.querySelectorAll('.nav-div ul li');
    const sections = document.querySelectorAll('section');
    const headerNav = document.querySelectorAll('.nav');
    const footer = document.querySelector('footer');
    mobilePopUpMenu.className = 'left-navigation mobile-menu hide';
    const headline = document.querySelector('.headline');
    mobilePopUpMenu.style.height = `${headline.clientHeight}px`;
    mobilePopUpMenu.style.transition = 'all 1s ease-in-out 0s';
  
    const createLeftavBar = () => {
      navlinks.forEach((li) => {
        if (!mobilePopUpMenu.classList.contains('hide')) {
          headerNav[0].appendChild(li);
        } else {
          mobileMenuUl.appendChild(li);
        }
      });
    };
    mobilePopUpMenu.appendChild(mobileMenuUl);
    mainContent.appendChild(mobilePopUpMenu);
  
    const toggleMobileMenu = () => {
      createLeftavBar();
      mobilePopUpMenu.classList.toggle('hide');
      footer.classList.toggle('hide');
      hamburgerMenu.classList.toggle('close-icon');
      sections.forEach((section) => {
        section.classList.toggle('hide');
      });
      sections[0].classList.toggle('left-navigation-backgound');
      sections[0].classList.toggle('hide');
      const mobileMenulinks = document.querySelectorAll('.mobile-menu > ul > li > a');
      mobileMenulinks.forEach((link) => {
        link.addEventListener('click', toggleMobileMenu);
      });
    };
  
    hamburgerMenu.addEventListener('click', toggleMobileMenu);
  
    //speaker/
    const morespeaker = document.querySelector('.more-speaker');
  
    const createspeaker = (speaker) => {
      const newspeaker = document.createElement('div');
      const newspeaker1 = document.createElement('div');
      const newspeaker2 = document.createElement('img');
      const newspeakerInfo = document.createElement('div');
      const newspeakerInfo2 = document.createElement('h2');
      const newspeakerspan1 = document.createElement('span');
      const newspeakerspan2 = document.createElement('span');
      const newspeakerspan3 = document.createElement('span');
  
      // classes
      newspeaker.className = 'speaker';
      newspeakerImage.className = 'speaker-image';
      newspeakerimg.alt = 'speaker\'s photo';
      newspeakerDescriptions.className = 'speaker-description';
      newspeakerDescriptionsH2.className = 'name';
      newspeakerDescriptionsSpan1.className = 'post-title';
      newspeakerDescriptionsSpan2.className = 'line';
      newspeakerDescriptionsSpan3.className = 'experience';
  
      // Apply values
      newspeakerimg.src = `${speaker.image}`;
      newspeakerDescriptionsH2.textContent = speaker.name;
      newspeakerDescriptionsSpan1.textContent = speaker.post;
      newspeakerDescriptionsSpan3.textContent = speaker.experience;
  
      // Build speaker's div
      newspeakerDescriptions.appendChild(newspeakerDescriptionsH2);
      newspeakerDescriptions.appendChild(newspeakerDescriptionsSpan1);
      newspeakerDescriptions.appendChild(newspeakerDescriptionsSpan2);
      newspeakerDescriptions.appendChild(newspeakerDescriptionsSpan3);
      newspeakerImage.appendChild(newspeakerimg);
      newspeaker.appendChild(newspeakerImage);
      newspeaker.appendChild(newspeakerDescriptions);
  
      return newspeaker;
    };
  
    if (morespeaker) {
      speaker.forEach((speaker) => {
        morespeaker.insertAdjacentElement('beforebegin', createspeaker(speaker));
      });
    }
  });