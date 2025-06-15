import swampFood from './assets/images/swamp-food-1.webp';

export default function loadHome() {
    const content = document.querySelector('#content');

    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');

    const heading = document.createElement('h1');
    heading.classList.add('home-title');
    heading.textContent = 'Welcome to Swamp Kitchen';

    const description = document.createElement('p');
    description.classList.add('home-description');
    description.textContent = 'The best swamp-based delicacies in the multiverse.';

    const img = document.createElement('img');
    img.classList.add('home-image');
    img.src = swampFood;
    img.alt = 'Delicious food';

    homeDiv.appendChild(heading);
    homeDiv.appendChild(description);
    homeDiv.appendChild(img);

    content.appendChild(homeDiv);
}
