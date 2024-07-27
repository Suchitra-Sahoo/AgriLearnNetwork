const hamBurger = document.querySelector(".hamburger");
const nMenu = document.querySelector(".nav-menu");

// Hamburger menu
hamBurger.addEventListener("click", () => {
  hamBurger.classList.toggle("active");
  nMenu.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', function () {
  const contributorsContainer = document.getElementById('contributors');

  async function fetchContributors() {
    try {
      const response = await fetch('https://api.github.com/repos/Suchitra-Sahoo/AgriLearnNetwork/contributors');
      const contributors = await response.json();

      contributors.forEach(contributor => {
        const contributorCard = document.createElement('a');
        contributorCard.href = contributor.html_url;
        contributorCard.target = '_blank';
        contributorCard.className = 'contributor-card';
        contributorCard.innerHTML = `
            <img src="${contributor.avatar_url}" alt="${contributor.login}">
            <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">${contributor.login}</h2>
            <p class="text-gray-700 dark:text-gray-400">Contributions: ${contributor.contributions}</p>
            <p class="text-gray-700 dark:text-gray-400 flex-center"><i class="fa fa-github mr-1"></i> GitHub Profile</p>
          `;
        contributorsContainer.appendChild(contributorCard);
      });
    } catch (error) {
      console.error('Error fetching contributors:', error);
    }
  }

  fetchContributors();
});
