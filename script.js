const laneSelector = document.querySelector('#role-filter')
const filterButton = document.querySelector('.filter-button')
const championsList = document.querySelector('ul')


function showAll(filtered) {
    let championsLi = ''

    filtered.forEach(champion => {
        championsLi += `
            <li>
                <img src="${champion.src}" alt="">
                <h2>${champion.name}</h2>
                <p>${champion.lane}</p>
            </li>`
    })
    championsList.innerHTML = championsLi
}

function filterLane(lane) {
    const filtered = items.filter((champion) => {
        return (champion.lane).includes(lane)
    })

    showAll(filtered)
}

filterLane(laneSelector.value)
filterButton.addEventListener("click", () => filterLane(laneSelector.value))