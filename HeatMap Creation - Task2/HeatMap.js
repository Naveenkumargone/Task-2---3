// Function to generate random numbers between 1 and 100
function generateRandomNumbers() {
    const data = [];
    for (let i = 0; i < 5; i++) {
        let row = [];
        for (let j = 0; j < 5; j++) {
            row.push(Math.floor(Math.random() * 100) + 1);
        }
        data.push(row);
    }
    return data;
}

// Function to get color class based on the value
function getColorClass(value) {
    if (value <= 33) return 'green';
    if (value <= 66) return 'yellow';
    return 'red';
}

// Function to render the heatmap table
function renderHeatmap(data) {
    const table = document.getElementById("heatmap-table");
    table.innerHTML = '';

    data.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            td.className = getColorClass(value);
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
}

// Function to generate and render new random numbers
function generateAndRender() {
    const randomNumbers = generateRandomNumbers();
    renderHeatmap(randomNumbers);
}

// Initial rendering of the heatmap
generateAndRender();