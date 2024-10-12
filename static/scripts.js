// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Carbon Footprint Calculator for Transportation
    document.getElementById('footprintForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const distance = parseFloat(document.getElementById('distance').value);
      const vehicleType = document.getElementById('vehicleType').value;
      let emissionFactor;
  
      // Define emission factors (g CO2 per km) for different vehicle types
      switch (vehicleType) {
        case 'car':
          emissionFactor = 0.21;
          break;
        case 'bus':
          emissionFactor = 0.05;
          break;
        case 'train':
          emissionFactor = 0.02;
          break;
        default:
          emissionFactor = 0; // Handle unknown vehicle types
      }
  
      // Calculate carbon footprint
      const carbonFootprint = (distance * emissionFactor).toFixed(2);
  
      // Show the result
      const resultText = `Your carbon footprint is ${carbonFootprint} kg CO2 for ${distance} km traveled by ${vehicleType}.`;
      document.getElementById('result').innerText = resultText;
  
      // Display alternative solutions
      displayAlternativeSolutions(vehicleType, distance);
    });
  
    // Display alternative solutions for transportation
    function displayAlternativeSolutions(vehicleType, distance) {
      const alternativesDiv = document.getElementById('alternatives');
      let alternativesText = `<h3>Alternative Solutions</h3>`;
  
      // Display alternatives based on vehicle type
      if (vehicleType === 'car') {
        alternativesText += `
          <p>Consider using public transportation like a bus or train to reduce your carbon footprint. 
          A bus produces 70% less CO2 per km compared to a car, while a train produces even less.</p>`;
      } else if (vehicleType === 'bus') {
        alternativesText += `
          <p>While buses are more environmentally friendly than cars, you can reduce your carbon footprint further by choosing a train 
          (produces 60% less CO2 per km) or an electric vehicle for short trips.</p>`;
      }
  
      alternativesDiv.innerHTML = alternativesText;
    }
  
    // Energy Footprint Calculator
    document.getElementById('energyForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const electricityUsage = parseFloat(document.getElementById('electricityUsage').value);
      const energySource = document.getElementById('energySource').value;
      const applianceEfficiency = parseFloat(document.getElementById('applianceEfficiency').value);
      let emissionFactor;
  
      // Define emission factors (g CO2 per kWh) based on energy source
      switch (energySource) {
        case 'coal':
          emissionFactor = 1.00;
          break;
        case 'naturalGas':
          emissionFactor = 0.75;
          break;
        case 'wind':
          emissionFactor = 0.00;
          break;
        case 'solar':
          emissionFactor = 0.00;
          break;
        case 'nuclear':
          emissionFactor = 0.00;
          break;
        default:
          emissionFactor = 0; // Handle unknown energy sources
      }
  
      // Calculate energy footprint
      const energyFootprint = (electricityUsage * emissionFactor / applianceEfficiency).toFixed(2);
  
      // Show the result
      const energyResultText = `Your carbon footprint from electricity usage is ${energyFootprint} kg CO2 per month.`;
      document.getElementById('energyResult').innerText = energyResultText;
  
      // Display alternative solutions for energy
      displayEnergyAlternatives(energySource);
    });
  
    // Display alternative energy solutions
    function displayEnergyAlternatives(energySource) {
      const alternativesDiv = document.getElementById('energyAlternatives');
      let alternativesText = `<h3>Alternative Solutions</h3>`;
  
      // Suggest alternatives based on energy source
      if (energySource === 'coal' || energySource === 'naturalGas') {
        alternativesText += `
          <p>Consider switching to renewable energy sources like solar or wind to significantly lower your carbon footprint.</p>`;
      } else if (energySource === 'wind' || energySource === 'solar') {
        alternativesText += `
          <p>You're already using clean energy! Continue to utilize solar or wind, or add energy storage (e.g., batteries) to save energy during non-peak times.</p>`;
      }
  
      alternativesDiv.innerHTML = alternativesText;
    }
  
    // Food Carbon Footprint Calculator
    document.getElementById('foodForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const foodType = document.getElementById('foodType').value;
      const foodMiles = parseFloat(document.getElementById('foodMiles').value);
      const foodWaste = parseFloat(document.getElementById('foodWaste').value);
      const foodMethod = document.getElementById('foodMethod').value;
      let carbonFootprint;
  
      // Define emission factors (g CO2 per kg) for different foods
      switch (foodType) {
        case 'redMeat':
          carbonFootprint = 27.0;
          break;
        case 'poultry':
          carbonFootprint = 6.9;
          break;
        case 'seafood':
          carbonFootprint = 2.5;
          break;
        case 'dairy':
          carbonFootprint = 5.6;
          break;
        case 'vegetables':
          carbonFootprint = 1.2;
          break;
        case 'grains':
          carbonFootprint = 0.8;
          break;
        case 'processedFoods':
          carbonFootprint = 3.7;
          break;
        default:
          carbonFootprint = 0; // Handle unknown food types
      }
  
      // Calculate carbon footprint from food miles and waste
      const foodFootprint = (foodMiles * carbonFootprint + foodWaste * 0.25).toFixed(2);
  
      // Show the result
      const foodResultText = `Your food carbon footprint is ${foodFootprint} kg CO2 from ${foodType} with ${foodMiles} km food miles and ${foodWaste} kg wasted food.`;
      document.getElementById('foodResult').innerText = foodResultText;
  
      // Display alternative solutions for food
      displayFoodAlternatives(foodType);
    });
  
    // Display alternative food solutions
    function displayFoodAlternatives(foodType) {
      const alternativesDiv = document.getElementById('foodAlternatives');
      let alternativesText = `<h3>Alternative Solutions</h3>`;
  
      // Suggest alternatives based on food type
      if (foodType === 'redMeat') {
        alternativesText += `
          <p>Consider switching to plant-based options like grains, vegetables, and legumes, which have significantly lower carbon footprints.</p>`;
      } else if (foodType === 'poultry') {
        alternativesText += `
          <p>Poultry has a lower carbon footprint than red meat, but plant-based alternatives still offer lower emissions.</p>`;
      }
  
      alternativesDiv.innerHTML = alternativesText;
    }
  
    // Waste & Water Calculator
    document.getElementById('wasteForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const wasteGeneration = parseFloat(document.getElementById('wasteGeneration').value);
      const waterUsage = parseFloat(document.getElementById('waterUsage').value);
      const composting = document.getElementById('composting').value;
  
      const wasteFootprint = (wasteGeneration * 0.2).toFixed(2);
      const waterFootprint = (waterUsage * 0.01).toFixed(2);
  
      const wasteResultText = `Your waste carbon footprint is ${wasteFootprint} kg CO2, and your water footprint is ${waterFootprint} kg CO2.`;
      document.getElementById('wasteResult').innerText = wasteResultText;
  
      // Display composting alternatives
      const compostingMessage = composting === 'yes' ? 
        `<p>Great job on composting! Composting can reduce methane emissions and create nutrient-rich soil.</p>` :
        `<p>Consider starting a composting program to reduce methane emissions and create valuable organic matter.</p>`;
  
      document.getElementById('wasteAlternatives').innerHTML = compostingMessage;
    });
  
    // Vehicle Footprint Calculator
    document.getElementById('vehicleForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const vehicleType = document.getElementById('vehicleTypeInput').value;
      const fuelEfficiency = parseFloat(document.getElementById('fuelEfficiency').value);
      const annualMiles = parseFloat(document.getElementById('annualMiles').value);
      const fuelType = document.getElementById('fuelType').value;
      let emissionFactor;
  
      // Define emission factors (g CO2 per liter) for different fuel types
      switch (fuelType) {
        case 'gasoline':
          emissionFactor = 2.31;
          break;
        case 'diesel':
          emissionFactor = 2.68;
          break;
        case 'electric':
          emissionFactor = 0.0;
          break;
        case 'hydrogen':
          emissionFactor = 0.0;
          break;
        default:
          emissionFactor = 0; // Handle unknown fuel types
      }
  
      // Calculate vehicle footprint
      const vehicleFootprint = ((annualMiles / fuelEfficiency) * emissionFactor).toFixed(2);
  
      // Show the result
      const vehicleResultText = `Your vehicle carbon footprint is ${vehicleFootprint} kg CO2 for ${annualMiles} km driven annually.`;
      document.getElementById('vehicleResult').innerText = vehicleResultText;
    });
    
  });
  