// Transportation calculation
function calculateFootprint() {
    const distance = document.getElementById('distance').value;
    const vehicleType = document.getElementById('vehicleType').value;
    let footprint = 0;

    if (vehicleType === 'car') {
        footprint = distance * 0.21; // Example: Car emits 0.21kg CO2/km
    } else if (vehicleType === 'bus') {
        footprint = distance * 0.05; // Example: Bus emits 0.05kg CO2/km
    } else if (vehicleType === 'train') {
        footprint = distance * 0.03; // Example: Train emits 0.03kg CO2/km
    }

    document.getElementById('result').textContent = `Transportation Footprint: ${footprint.toFixed(2)} kg CO2`;
}

// Energy calculation
function calculateEnergy() {
    const electricityUsage = document.getElementById('electricityUsage').value;
    const energySource = document.getElementById('energySource').value;
    const applianceEfficiency = document.getElementById('applianceEfficiency').value;
    let emissionFactor = 0;

    if (energySource === 'coal') {
        emissionFactor = 0.94; // Example: Coal emissions in kg CO2/kWh
    } else if (energySource === 'naturalGas') {
        emissionFactor = 0.6;  // Example: Natural gas emissions in kg CO2/kWh
    } else if (energySource === 'wind') {
        emissionFactor = 0.02;
    } else if (energySource === 'solar') {
        emissionFactor = 0.03;
    } else if (energySource === 'nuclear') {
        emissionFactor = 0.01;
    }

    const energyFootprint = electricityUsage * emissionFactor * (1 / applianceEfficiency);
    document.getElementById('energyResult').textContent = `Energy Footprint: ${energyFootprint.toFixed(2)} kg CO2`;
}

// Food calculation
function calculateFood() {
    const foodType = document.getElementById('foodType').value;
    const foodMiles = document.getElementById('foodMiles').value;
    const foodWaste = document.getElementById('foodWaste').value;
    let emissionFactor = 0;

    if (foodType === 'redMeat') {
        emissionFactor = 27;
    } else if (foodType === 'poultry') {
        emissionFactor = 6.9;
    } else if (foodType === 'seafood') {
        emissionFactor = 5.2;
    } else if (foodType === 'dairy') {
        emissionFactor = 3.2;
    } else if (foodType === 'vegetables') {
        emissionFactor = 2;
    } else if (foodType === 'grains') {
        emissionFactor = 2.5;
    } else if (foodType === 'processedFoods') {
        emissionFactor = 3.5;
    }

    const foodFootprint = (emissionFactor * foodMiles) + (foodWaste * 4.5);
    document.getElementById('foodResult').textContent = `Food Footprint: ${foodFootprint.toFixed(2)} kg CO2`;
}

// Waste & Water calculation
function calculateWaste() {
    const wasteGeneration = document.getElementById('wasteGeneration').value;
    const waterUsage = document.getElementById('waterUsage').value;
    const composting = document.getElementById('composting').value;
    let wasteFootprint = wasteGeneration * 1.2; // Example: kg CO2/kg waste

    if (composting === 'yes') {
        wasteFootprint *= 0.5; // Reduce footprint by 50% if composting
    }

    const waterFootprint = waterUsage * 0.002; // Example: kg CO2/liter water
    const totalFootprint = wasteFootprint + waterFootprint;

    document.getElementById('wasteResult').textContent = `Waste & Water Footprint: ${totalFootprint.toFixed(2)} kg CO2`;
}
