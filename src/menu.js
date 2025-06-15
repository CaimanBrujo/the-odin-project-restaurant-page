export default function loadMenu() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const menuSection = document.createElement('section');
    menuSection.classList.add('section', 'menu-section');

    const heading = document.createElement('h2');
    heading.classList.add('section-title');
    heading.textContent = 'Our Signature Dishes';

    const menuList = document.createElement('ul');
    menuList.classList.add('menu-list');

    const items = [
        { name: '🧀 Swamp Cheese Nuggets', desc: 'Crispy, gooey and slightly toxic.' },
        { name: '🐸 Grilled Frog Legs', desc: 'Straight from the bog, charred to perfection.' },
    ];

    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('menu-item');

        const itemTitle = document.createElement('h3');
        itemTitle.classList.add('menu-item-title');
        itemTitle.textContent = item.name;

        const itemDesc = document.createElement('p');
        itemDesc.classList.add('menu-item-desc');
        itemDesc.textContent = item.desc;

        listItem.appendChild(itemTitle);
        listItem.appendChild(itemDesc);
        menuList.appendChild(listItem);
    });

    menuSection.appendChild(heading);
    menuSection.appendChild(menuList);
    content.appendChild(menuSection);
}
