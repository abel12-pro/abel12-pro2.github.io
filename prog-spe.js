const speakersArr = [
  {
    id: 0,
    img: 'project-image/trainer-1.jpg',
    alt: 'abel',
    speakerName: 'Abel Fikre',
    speakerStatus: 'Agronomist, Breeder, Designer and Software Developer',
    speakerInfo: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 1,
    img: 'project-image/trainer-2.jpg',
    alt: 'tade',
    speakerName: 'Tadele Warrie',
    speakerStatus: 'Seamstress and Designer',
    speakerInfo: 'Lorem ipsum dolor sit amet.',
  },
];

let speakers1 = '';

speakersArr.forEach((speaker) => {
  speakers1 += `<li class="speakers">
  <div class="img-card">
      <img src="${speaker.img}" alt="${speaker.alt}">
  </div>
  <div class="img-desc">
      <h3 class="speaker-name">${speaker.speakerName}</h3>
      <p class="speaker-status">${speaker.speakerStatus}</p>
      <div class="h-r3"></div>
      <p class="speaker-info">${speaker.speakerInfo}</p>
  </div>
  </li>`;
});

const speakers = document.querySelector('.speakers-list');
speakers.innerHTML = speakers1;

const speakersArr2 = [
  {
    id: 0,
    img: 'project-image/trainer-3.jpg',
    alt: 'jarmi.',
    speakerName: 'Jarmia Bayisa',
    speakerStatus: 'Field Agronomist, Seamster and Designer',
    speakerInfo: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 1,
    img: 'project-image/trainer-4.jpg',
    alt: 'mamp',
    speakerName: 'Mamo fidano',
    speakerStatus: 'Electrical Engineer, Seamster and Designer',
    speakerInfo: 'Lorem ipsum dolor sit amet.',
  },
];

let speakers12 = '';

speakersArr2.forEach((speaker2) => {
  speakers12 += `<li class="speakers">
  <div class="img-card">
      <img src="${speaker2.img}" alt="${speaker2.alt}">
  </div>
  <div class="img-desc">
      <h3 class="speaker-name">${speaker2.speakerName}</h3>
      <p class="speaker-status">${speaker2.speakerStatus}</p>
      <div class="h-r3"></div>
      <p class="speaker-info">${speaker2.speakerInfo}</p>
  </div>
  </li>`;
});

const speakers2 = document.querySelector('.speakers-list2');
speakers2.innerHTML = speakers12;

const speakersArr3 = [
  {
    id: 0,
    img: 'project-image/trainer-5.jpg',
    alt: 'abel',
    speakerName: 'Abel Mekuria',
    speakerStatus: 'Seamstress and Designer',
    speakerInfo: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 1,
    img: 'project-image/trainer-6.jpg',
    alt: 'elias',
    speakerName: 'Elias debelo',
    speakerStatus: 'Seamstress and Designer',
    speakerInfo: 'Lorem ipsum dolor sit amet.',
  },
];

let speakers13 = '';

speakersArr3.forEach((speaker3) => {
  speakers13 += `<li class="speakers">
  <div class="img-card">
      <img src="${speaker3.img}" alt="${speaker3.alt}">
  </div>
  <div class="img-desc">
      <h3 class="speaker-name">${speaker3.speakerName}</h3>
      <p class="speaker-status">${speaker3.speakerStatus}</p>
      <div class="h-r3"></div>
      <p class="speaker-info">${speaker3.speakerInfo}</p>
  </div>
  </li>`;
});

const speakers3 = document.querySelector('.speakers-list3');
speakers3.innerHTML = speakers13;