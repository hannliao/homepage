const projects = [
  {
    name: 'Battleship',
    description:
      'Play a game of battleship against the computer! Pending updates.',
    src: './img/battleship.png',
    github: 'https://github.com/hannliao/battleship',
    demo: 'https://hannliao.github.io/battleship/',
  },
  {
    name: 'Weather App',
    description: 'Search for current weather conditions and 3-day forecast.',
    src: './img/weather-app.png',
    github: 'https://github.com/hannliao/weather-app',
    demo: 'https://hannliao.github.io/weather-app/',
  },
  {
    name: 'Sign Up Form',
    description: 'Fill out all fields correctly to get a success message.',
    src: './img/signup-form.png',
    github: 'https://github.com/hannliao/sign-up-form',
    demo: 'https://hannliao.github.io/sign-up-form/',
  },
  {
    name: 'Library',
    description: 'Catalog books in your own virtual library.',
    src: './img/library.png',
    github: 'https://github.com/hannliao/library',
    demo: 'https://hannliao.github.io/library/',
  },
  {
    name: 'Restaurant Page',
    description: 'Tab through home, menu, and contact details.',
    src: './img/restaurant-page.png',
    github: 'https://github.com/hannliao/restaurant-page',
    demo: 'https://hannliao.github.io/restaurant-page/',
  },
  {
    name: 'Tic-Tac-Toe',
    description: 'Play Tic-Tac-Toe with a friend!',
    src: './img/tictactoe.png',
    github: 'https://github.com/hannliao/tictactoe',
    demo: 'https://hannliao.github.io/tictactoe/',
  },
  {
    name: 'To-Do List',
    description:
      'Keep track of your to-dos! Make projects, set deadlines, and prioritize your tasks.',
    src: './img/todo-list.png',
    github: 'https://github.com/hannliao/todo-list',
    demo: 'https://hannliao.github.io/todo-list/',
  },
  {
    name: 'Admin Dashboard',
    description:
      'View snapshots of my older projects - you can find demos on my GitHub.',
    src: './img/admin-dash.png',
    github: 'https://github.com/hannliao/admin-dash',
    demo: 'https://hannliao.github.io/admin-dash/',
  },
];

const githubIconPath = './icons/github.svg';
const demoIconPath = './icons/open-in-new.svg';

function addProject(imgSrc, name, description, github, demo) {
  const projectsContainer = document.querySelector('.projects');
  const card = createDiv('card');

  const imgContainer = createDiv('card-img');
  const img = document.createElement('img');
  img.src = imgSrc;
  imgContainer.appendChild(img);

  const infoContainer = createDiv('card-info');

  const infoHeader = createDiv('card-header');
  const projectName = document.createElement('h2');
  projectName.textContent = name;

  const githubLink = createLink(github);
  const githubIcon = createIcon(githubIconPath);
  githubLink.appendChild(githubIcon);
  const demoLink = createLink(demo);
  const demoIcon = createIcon(demoIconPath);
  demoLink.appendChild(demoIcon);

  infoHeader.append(projectName, githubLink, demoLink);

  const projectDesc = document.createElement('p');
  projectDesc.textContent = description;

  infoContainer.append(infoHeader, projectDesc);
  card.append(imgContainer, infoContainer);
  projectsContainer.appendChild(card);
}

function createDiv(className) {
  const div = document.createElement('div');
  div.classList.add(className);
  return div;
}

function createLink(href) {
  const link = document.createElement('a');
  link.href = href;
  return link;
}

function createIcon(iconPath) {
  const icon = document.createElement('img');
  icon.src = iconPath;
  icon.classList.add('icon');
  return icon;
}

projects.forEach((project) => {
  addProject(
    project.src,
    project.name,
    project.description,
    project.github,
    project.demo
  );
});
