export default function loadContact() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const contactSection = document.createElement('section');
    contactSection.classList.add('section', 'contact-section');

    const heading = document.createElement('h2');
    heading.classList.add('section-title');
    heading.textContent = 'Contact Us';

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const phone = document.createElement('p');
    phone.classList.add('contact-phone');
    phone.innerHTML = '<strong>Phone:</strong> +123 456 7890';

    const address = document.createElement('p');
    address.classList.add('contact-address');
    address.innerHTML = '<strong>Address:</strong> Swamp Street 404, Nowhere, Earth';

    contactInfo.appendChild(phone);
    contactInfo.appendChild(address);

    contactSection.appendChild(heading);
    contactSection.appendChild(contactInfo);
    content.appendChild(contactSection);
}
