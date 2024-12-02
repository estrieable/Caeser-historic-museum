// Отображение данных Explore_____________________________
async function loadExploreData() {
    try {
        const response = await fetch('../src/config/main-config.json');
        const data = await response.json();

        const exploreTextElement = document.querySelector('.explore-text');
        const exploreTitleElement = document.querySelector('.explore-title');

        exploreTextElement.textContent = data.explore[0]['explore-text'];
        exploreTitleElement.textContent = data.explore[0]['explore-title'];
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

loadExploreData();