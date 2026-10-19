const searchInput = document.getElementById("project-search");
const difficultyFilter = document.getElementById("difficulty-filter");
const noResults = document.getElementById("no-results");

function filterProjects() {
    const searchText = searchInput.value.trim().toLowerCase();
    const selectedDifficulty = difficultyFilter.value;

    const projectCards = document.querySelectorAll(".project-link");

    let visibleCount = 0;

    projectCards.forEach(card => {
        const title = card.querySelector("h2").textContent.toLowerCase();
        const difficulty = card.querySelector("h3").textContent.toLowerCase();

        const matchesSearch = title.includes(searchText);

        const matchesDifficulty =
            selectedDifficulty === "all" ||
            difficulty.includes(selectedDifficulty);

        const shouldShow = matchesSearch && matchesDifficulty;

        card.style.display = shouldShow ? "block" : "none";

        if (shouldShow) {
            visibleCount++;
        }
    });

    noResults.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", filterProjects);
difficultyFilter.addEventListener("change", filterProjects);

filterProjects();
