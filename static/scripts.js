function displayCategoryOptions() {
    const category = document.getElementById('category').value;
    
    // Hide all category forms
    document.querySelectorAll('.category-form').forEach(form => form.classList.add('hidden'));
    
    // Display the selected category form
    if (category) {
        document.getElementById(category).classList.remove('hidden');
    }
}

function calculateTransportation() {
    const milesDriven = parseInt(document.getElementById('miles-driven').value);
    const fuelEfficiency = parseFloat(document.getElementById('fuel-efficiency').value);
    const fuelType = document.getElementById('fuel-type').value;

    let carbonEmission = 0;
    let savingsPotential = 0;

    if (fuelType === "gasoline") {
        carbonEmission = milesDriven * (19.6 / fuelEfficiency); // grams CO2 per mile
        savingsPotential = milesDriven * (0.10); // dollars saved from reduced consumption
    } else {
        carbonEmission = milesDriven * (0.0); // EVs have lower carbon emissions
        savingsPotential = milesDriven * (0.15); // dollars saved from EV energy use
    }

    // Update output
    document.getElementById('transport-output').innerHTML = `
        <p>Estimated CO2 Emission: ${carbonEmission.toFixed(2)} kg per year</p>
        <p>Potential Savings: $${savingsPotential.toFixed(2)} per year</p>
    `;
    
    // Render chart
    renderChart('transport-chart', 'Transportation Carbon Emission and Savings', carbonEmission, savingsPotential);
}

function renderChart(canvasId, title, emission, savings) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Carbon Emission (kg/year)', 'Potential Savings ($/year)'],
            datasets: [{
                label: title,
                data: [emission, savings],
                backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function resetForm() {
    document.querySelectorAll('.category-form input, .category-form select').forEach(input => input.value = "");
    document.querySelectorAll('.category-form').forEach(form => form.classList.add('hidden'));
}
