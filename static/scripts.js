// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Transportation Carbon Footprint Calculator
    document.getElementById('footprintForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const distance = parseFloat(document.getElementById('distance').value);
      const vehicleType = document.getElementById('vehicleType').value;
      let emissionFactor;
  
      if (isNaN(distance) || distance <= 0) {
        alert("Please enter a valid positive number for distance.");
        return;
      }
  
      // Define emission factors (kg CO2 per km)
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
          emissionFactor = 0;
          break;
      }
  
      // Calculate carbon footprint
      const carbonFootprint = (distance * emissionFactor).toFixed(2);
  
      // Show the result
      const resultText = `Your carbon footprint is ${carbonFootprint} kg CO2 for ${distance} km traveled by ${vehicleType}.`;
      document.getElementById('result').innerText = resultText;
  
      // Display alternative solutions
      displayAlternativeSolutions(vehicleType);
    });
  
    // Display alternative solutions for transportation
    function displayAlternativeSolutions(vehicleType) {
      const alternativesDiv = document.getElementById('alternatives');
      let alternativesText = `<h3>Alternative Solutions</h3>`;
  
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
  
    // Energy Carbon Footprint Calculator
    document.getElementById('energyForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const electricityUsage = parseFloat(document.getElementById('electricityUsage').value);
      const energySource = document.getElementById('energySource').value;
      const applianceEfficiency = parseFloat(document.getElementById('applianceEfficiency').value);
      let emissionFactor;
  
      if (isNaN(electricityUsage) || electricityUsage <= 0) {
        alert("Please enter a valid positive number for electricity usage.");
        return;
      }
      if (isNaN(applianceEfficiency) || applianceEfficiency <= 0) {
        alert("Please enter a valid appliance efficiency greater than 0.");
        return;
      }
  
      // Define emission factors (kg CO2 per kWh)
      switch (energySource) {
        case 'coal':
          emissionFactor = 1.00;
          break;
        case 'naturalGas':
          emissionFactor = 0.75;
          break;
        case 'wind':
        case 'solar':
        case 'nuclear':
          emissionFactor = 0.00;
          break;
        default:
          emissionFactor = 0;
      }
  
      // Calculate energy footprint
      const energyFootprint = (electricityUsage * emissionFactor / applianceEfficiency).toFixed(2);
  
      // Show the result
      const energyResultText = `Your carbon footprint from electricity usage is ${energyFootprint} kg CO2 per month.`;
      document.getElementById('energyResult').innerText = energyResultText;
  
      // Display alternative energy solutions
      displayEnergyAlternatives(energySource);
    });
  
    // Display alternative energy solutions
    function displayEnergyAlternatives(energySource) {
      const alternativesDiv = document.getElementById('energyAlternatives');
      let alternativesText = `<h3>Alternative Solutions</h3>`;
  
      if (energySource === 'coal' || energySource === 'naturalGas') {
        alternativesText += `
          <p>Consider switching to renewable energy sources like solar or wind to significantly lower your carbon footprint.</p>`;
      } else if (energySource === 'wind' || energySource === 'solar') {
        alternativesText += `
          <p>You're already using clean energy! Continue to utilize solar or wind, or add energy storage solutions to maximize efficiency.</p>`;
      }
  
      alternativesDiv.innerHTML = alternativesText;
    }
  
    // Food Carbon Footprint Calculator
    document.getElementById('foodForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const foodType = document.getElementById('foodType').value;
      const foodMiles = parseFloat(document.getElementById('foodMiles').value);
      const foodWaste = parseFloat(document.getElementById('foodWaste').value);
      let emissionFactor;
  
      if (isNaN(foodMiles) || foodMiles <= 0) {
        alert("Please enter a valid positive number for food miles.");
        return;
      }
      if (isNaN(foodWaste) || foodWaste <= 0) {
        alert("Please enter a valid positive number for food waste.");
        return;
      }
  
      // Define emission factors (kg CO2 per kg of food and km)
      switch (foodType) {
        case 'redMeat':
          emissionFactor = 27.00;
          break;
        case 'poultry':
          emissionFactor = 6.90;
          break;
        case 'seafood':
          emissionFactor = 5.40;
          break;
        case 'dairy':
          emissionFactor = 3.10;
          break;
        case 'vegetables':
          emissionFactor = 2.00;
          break;
        case 'grains':
          emissionFactor = 1.30;
          break;
        case 'processedFoods':
          emissionFactor = 7.00;
          break;
        default:
          emissionFactor = 0;
      }
  
      // Calculate food carbon footprint (miles and waste included)
      const foodFootprint = ((foodMiles * 0.03) + (foodWaste * emissionFactor)).toFixed(2);
  
      // Show the result
      const foodResultText = `Your carbon footprint for ${foodType} is ${foodFootprint} kg CO2.`;
      document.getElementById('foodResult').innerText = foodResultText;
  
      // Display alternative food solutions
      displayFoodAlternatives(foodType);
    });
  
    // Display alternative food solutions
    function displayFoodAlternatives(foodType) {
      const alternativesDiv = document.getElementById('foodAlternatives');
      let alternativesText = `<h3>Alternative Solutions</h3>`;
  
      if (foodType === 'redMeat') {
        alternativesText += `
          <p>Consider reducing your red meat consumption and switching to lower carbon footprint foods like poultry, grains, or vegetables.</p>`;
      } else if (foodType === 'processedFoods') {
        alternativesText += `
          <p>Processed foods have a higher carbon footprint due to packaging and production. Consider fresh, local foods to reduce your impact.</p>`;
      }
  
      alternativesDiv.innerHTML = alternativesText;
    }
  
    // Waste & Water Carbon Footprint Calculator
    document.getElementById('wasteForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const wasteGeneration = parseFloat(document.getElementById('wasteGeneration').value);
      const waterUsage = parseFloat(document.getElementById('waterUsage').value);
      const composting = document.getElementById('composting').value;
      let wasteEmissionFactor = 0.10; // kg CO2 per kg of waste
      let waterEmissionFactor = 0.002; // kg CO2 per liter of water
  
      if (isNaN(wasteGeneration) || wasteGeneration <= 0) {
        alert("Please enter a valid positive number for waste generation.");
        return;
      }
      if (isNaN(waterUsage) || waterUsage <= 0) {
        alert("Please enter a valid positive number for water usage.");
        return;
      }
  
      // Calculate waste & water footprint
      let wasteFootprint = wasteGeneration * wasteEmissionFactor;
      let waterFootprint = waterUsage * waterEmissionFactor;
  
      // Adjust waste footprint based on composting
      if (composting === 'yes') {
        wasteFootprint *= 0.5; // Reduce waste footprint by 50% if composting
      }
  
      const totalWasteWaterFootprint = (wasteFootprint + waterFootprint).toFixed(2);
  
      // Show the result
      const wasteResultText = `Your carbon footprint from waste and water is ${totalWasteWaterFootprint} kg CO2.`;
      document.getElementById('wasteResult').innerText = wasteResultText;
  
      // Display alternative waste & water solutions
      displayWasteWaterAlternatives(composting);
    });
  
    // Display alternative waste & water solutions
    function displayWasteWaterAlternatives(composting) {
      const alternativesDiv = document.getElementById('wasteAlternatives');
      let alternativesText = `<h3>Alternative Solutions</h3>`;
  
      if (composting === 'no') {
        alternativesText += `
          <p>Consider composting organic waste to reduce your carbon footprint from waste by up to 50%.</p>`;
      }
      alternativesText += `<p>Reduce water usage by installing water-efficient fixtures and using less water in daily tasks.</p>`;
  
      alternativesDiv.innerHTML = alternativesText;
    }
  
  });
  