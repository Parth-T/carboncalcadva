function showForm(option) {
    const calcSection = document.getElementById('calculator');
    const calcForm = document.getElementById('calc-form');
    const calcTitle = document.getElementById('calc-title');

    calcForm.innerHTML = ''; // Clear any previous form content
    calcSection.style.display = 'block'; // Show the calculator section

    switch (option) {
        case 'transportation':
            calcTitle.textContent = 'Transportation Carbon Savings Calculator';
            calcForm.innerHTML = `
                <label for="miles">Miles driven per week:</label>
                <input type="number" id="miles" name="miles" placeholder="e.g. 100">
                
                <label for="fuel">Fuel type (gas/electric):</label>
                <select id="fuel" name="fuel">
                    <option value="gas">Gasoline</option>
                    <option value="electric">Electric</option>
                </select>

                <label for="mpg">Miles per gallon (if gas):</label>
                <input type="number" id="mpg" name="mpg" placeholder="e.g. 25">
            `;
            break;

        case 'food':
            calcTitle.textContent = 'Food Carbon Savings Calculator';
            calcForm.innerHTML = `
                <label for="diet">Select your diet type:</label>
                <select id="diet" name="diet">
                    <option value="meat-heavy">Meat-heavy diet</option>
                    <option value="plant-based">Plant-based diet</option>
                </select>

                <label for="meals">Meals per week:</label>
                <input type="number" id="meals" name="meals" placeholder="e.g. 21">
            `;
            break;

        case 'energy':
            calcTitle.textContent = 'Energy Consumption Carbon Savings Calculator';
            calcForm.innerHTML = `
                <label for="kwh">Electricity usage in kWh per month:</label>
                <input type="number" id="kwh" name="kwh" placeholder="e.g. 500">

                <label for="source">Energy source:</label>
                <select id="source" name="source">
                    <option value="renewable">Renewable</option>
                    <option value="non-renewable">Non-renewable</option>
                </select>
            `;
            break;

        case 'waste':
            calcTitle.textContent = 'Waste & Water Carbon Savings Calculator';
            calcForm.innerHTML = `
                <label for="water">Water consumption per month (gallons):</label>
                <input type="number" id="water" name="water" placeholder="e.g. 3000">

                <label for="recycling">Recycling efforts (yes/no):</label>
                <select id="recycling" name="recycling">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            `;
            break;
    }
}

function calculateSavings() {
    const calcTitle = document.getElementById('calc-title').textContent;

    let savingsMessage = '';
    let totalSavings = 0;

    if (calcTitle.includes('Transportation')) {
        const miles = document.getElementById('miles').value;
        const fuel = document.getElementById('fuel').value;
        const mpg = document.getElementById('mpg').value;

        if (fuel === 'gas') {
            totalSavings = miles * 19.6 / mpg; // Approx 19.6 lbs CO2 per gallon
        } else if (fuel === 'electric') {
            totalSavings = miles * 0.33; // Approx 0.33 lbs CO2 per mile for electric vehicles
        }
        savingsMessage = `By reducing your transportation, you can save ${totalSavings.toFixed(2)} lbs of CO2 per week!`;

    } else if (calcTitle.includes('Food')) {
        const diet = document.getElementById('diet').value;
        const meals = document.getElementById('meals').value;

        if (diet === 'meat-heavy') {
            totalSavings = meals * 4.5; // Approx 4.5 kg CO2 per meal for meat-heavy diet
        } else if (diet === 'plant-based') {
            totalSavings = meals * 2.0; // Approx 2 kg CO2 per meal for plant-based diet
        }
        savingsMessage = `Switching to a plant-based diet could save you ${totalSavings.toFixed(2)} kg of CO2 per week!`;

    } else if (calcTitle.includes('Energy')) {
        const kwh = document.getElementById('kwh').value;
        const source = document.getElementById('source').value;

        if (source === 'non-renewable') {
            totalSavings = kwh * 0.92; // Approx 0.92 lbs CO2 per kWh for non-renewable energy
        } else if (source === 'renewable') {
            totalSavings = kwh * 0.12; // Approx 0.12 lbs CO2 per kWh for renewable energy
        }
        savingsMessage = `You can save ${totalSavings.toFixed(2)} lbs of CO2 by switching to renewable energy!`;

    } else if (calcTitle.includes('Waste')) {
        const water = document.getElementById('water').value;
        const recycling = document.getElementById('recycling').value;

        totalSavings = recycling === 'yes' ? water * 0.01 : water * 0.05; // Approximate savings from recycling efforts
        savingsMessage = `By reducing waste and recycling, you can save ${totalSavings.toFixed(2)} lbs of CO2 per month!`;
    }

    alert(savingsMessage);
}
