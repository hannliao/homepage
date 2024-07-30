const projects = [
  {
    name: 'Battleship',
    description:
      'Play a game of battleship against the computer! Still working on drag and drop functionality...',
    src: './img/battleship.png',
  },
  {
    name: 'Weather App',
    description: 'Search for current weather conditions and 3-day forecast.',
    src: './img/weather-app.png',
  },
  {
    name: 'Sign Up Form',
    description:
      'Form validation! Fill out all fields correctly to get a success message.',
    src: './img/signup-form.png',
  },
  {
    name: 'Library',
    description: 'Catalog books in your own virtual library.',
    src: './img/library.png',
  },
  {
    name: 'Restaurant Page',
    description:
      "Restaurant home page has an image carousel that doesn't work on all screen sizes. View menu and contact details as well.",
    src: './img/restaurant-page.png',
  },
  {
    name: 'Tic-Tac-Toe',
    description: 'Play Tic-Tac-Toe with a friend',
    src: './img/tictactoe.png',
  },
  {
    name: 'To-Do List',
    description:
      'Keep track of your to-dos! Make projects, set deadlines, and prioritize your tasks.',
    src: './img/todo-list.png',
  },
  {
    name: 'Admin Dashboard',
    description:
      'View snapshots of my older projects! You can find demos on my GitHub.',
    src: './img/admin-dash.png',
  },
];

const linkedinIconPath = '/.icons/linkedin.svg';
const githubIconPath = './icons/github.svg';
const demoIconPath = './icons/open-in-new.svg';

function addProject(imgSrc, name, description) {
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
  const githubIcon = createIcon(githubIconPath);
  const demoIcon = createIcon(demoIconPath);
  infoHeader.append(projectName, githubIcon, demoIcon);

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

function createIcon(iconPath) {
  const icon = document.createElement('img');
  icon.src = iconPath;
  icon.classList.add('icon');
  return icon;
}

projects.forEach((project) => {
  addProject(project.src, project.name, project.description);
});
