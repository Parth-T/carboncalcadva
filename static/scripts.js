function openTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
}

// Transportation Calculations
function calculateTransportation() {
    const vehicleType = document.getElementById('vehicle_type').value;
    const milesPerYear = parseInt(document.getElementById('miles_per_year').value);

    const emissions = {
        'sedan': 4.6,
        'SUV': 6.5,
        'pickup': 7.2,
        'electric': 1.5
    };

    const costs = {
        'sedan': { mpg: 25, gasPrice: 3.5, insurance: 1200, maintenance: 500 },
        'SUV': { mpg: 20, gasPrice: 3.5, insurance: 1500, maintenance: 700 },
        'pickup': { mpg: 18, gasPrice: 3.5, insurance: 1800, maintenance: 900 },
        'electric': { mpg: 100, gasPrice: 0, insurance: 1000, maintenance: 400 }
    };

    const emissionsPerYear = emissions[vehicleType] * milesPerYear;
    const mpg = costs[vehicleType].mpg;
    const gasCost = (milesPerYear / mpg) * costs[vehicleType].gasPrice;
    const totalCost = gasCost + costs[vehicleType].insurance + costs[vehicleType].maintenance;
    const savings = vehicleType === 'electric' ? 0 : gasCost - ((milesPerYear / 100) * 0.13 * 12); // Assuming electricity cost

    const result = `
        <p>Carbon Emissions: ${emissionsPerYear.toFixed(2)} kg CO2 per year</p>
        <p>Annual Gas Cost: $${gasCost.toFixed(2)}</p>
        <p>Annual Electric Vehicle Cost: $${((milesPerYear / 100) * 0.13 * 12).toFixed(2)}</p>
        <p>Potential Savings by Switching to Electric: $${savings.toFixed(2)}</p>
        <p>Total Cost (Gas + Insurance + Maintenance): $${totalCost.toFixed(2)}</p>
    `;

    document.getElementById('transportation-result').innerHTML = result;
}

// Food Calculations
function calculateFood() {
    const foodType = document.getElementById('food_type').value;
    const mealsPerWeek = parseInt(document.getElementById('meals_per_week').value);

    const emissions = {
        'meat': 4.5,  // kg CO2 per meal
        'dairy': 1.5,
        'vegetarian': 0.5
    };

    const weeklyEmissions = emissions[foodType] * mealsPerWeek;
    const yearlyEmissions = weeklyEmissions * 52;

    const result = `
        <p>Weekly Carbon Emissions: ${weeklyEmissions.toFixed(2)} kg CO2</p>
        <p>Yearly Carbon Emissions: ${yearlyEmissions.toFixed(2)} kg CO2</p>
    `;

    document.getElementById('food-result').innerHTML = result;
}

// Energy Consumption Calculations
function calculateEnergy() {
    const energyUsage = parseInt(document.getElementById('energy_usage').value);

    const emissionFactor = 0.92;  // kg CO2 per kWh (US average)
    const yearlyEmissions = energyUsage * emissionFactor * 12; // Assuming monthly usage

    const result = `
        <p>Monthly Carbon Emissions: ${(energyUsage * emissionFactor).toFixed(2)} kg CO2</p>
        <p>Yearly Carbon Emissions: ${yearlyEmissions.toFixed(2)} kg CO2</p>
    `;

    document.getElementById('energy-result').innerHTML = result;
}
