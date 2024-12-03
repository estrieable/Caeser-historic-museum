// Анимация при видимости пользователя__________________________________________
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
    }, {
        threshold: 0.5,
        rootMargin: '0px',
    });
  
const targetElement1 = document.querySelector('.explore-text-sculpture-1');
const targetElement2 = document.querySelector('.explore-text-sculpture-2');
const targetElement3 = document.querySelector('.explore-text-sculpture-3');
const targetElement4 = document.querySelector('.explore-text-sculpture-4');
if (targetElement1) {
    observer.observe(targetElement1);
}
if (targetElement2) {
    observer.observe(targetElement2);
}
if (targetElement3) {
    observer.observe(targetElement3);
}
if (targetElement4) {
    observer.observe(targetElement4);
}

// Отображение данных Home_____________________________
async function loadHomeData() {
    try {
        const response = await fetch('./config/main-config.json');
        const data = await response.json();

        const exploreTextElement = document.querySelector('.explore-text');
        const exploreTitleElement = document.querySelector('.explore-title');
        const exploreContentText1 = document.querySelector(".explore-text-sculpture-1-text");
        const exploreContentText2 = document.querySelector(".explore-text-sculpture-2-text");
        const exploreContentText3 = document.querySelector(".explore-text-sculpture-3-text");
        const exploreContentText4 = document.querySelector(".explore-text-sculpture-4-text");

        exploreTextElement.textContent = data.explore[0]['explore-text'];
        exploreTitleElement.textContent = data.explore[0]['explore-title'];
        exploreContentText1.textContent = data.explore[0]['explore-content-text-1'];
        exploreContentText2.textContent = data.explore[0]['explore-content-text-2'];
        exploreContentText3.textContent = data.explore[0]['explore-content-text-3'];
        exploreContentText4.textContent = data.explore[0]['explore-content-text-4'];
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

loadHomeData();

// Отображение данных Info___________________________________
document.addEventListener('DOMContentLoaded', () => {
    fetch('./config/main-config.json')
        .then(response => response.json())
        .then(data => {
            const sculptureGrid = document.querySelector('.sculpture-grid');

            data.info.forEach(item => {
                const sculptureItem = document.createElement('div');
                sculptureItem.className = 'sculpture-item';
            
                const sculptureItemDescription = document.createElement('div');
                sculptureItemDescription.className = 'sculpture-item-description';
            
                const title = document.createElement('h3');
                title.className = 'title sculpture-title';
                title.textContent = item.title;
            
                const description = document.createElement('p');
                description.className = 'text sculpture-text';
                description.textContent = item.description;
            
                const img = document.createElement('img');
                img.src = item["src"];
                img.alt = item.title;
                img.className = 'sculpture-img';
            
                sculptureItemDescription.appendChild(title);
                sculptureItemDescription.appendChild(description);
                sculptureItem.appendChild(sculptureItemDescription);
                sculptureItem.appendChild(img);
            
                sculptureGrid.appendChild(sculptureItem);
                
                observer.observe(sculptureItemDescription);
                observer.observe(img);
            });
        })
        .catch(error => console.error('Error loading the JSON:', error));
});