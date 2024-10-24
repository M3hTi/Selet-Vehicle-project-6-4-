// Get references to the select elements
const makeSelect = document.getElementById('make');
console.dir(makeSelect)
const modelSelect = document.getElementById('model');
const trimSelect = document.getElementById('trim');

const submitBtn = document.querySelector('#selectBtn')

const selectedVehicle = document.querySelector('.selected-vehicle')
console.log(selectedVehicle);

// Function to filter models based on selected make
function filterModels() {
    // lear message
    selectedVehicle.innerHTML = ""


    // Get the selected make value
    const selectedMake = makeSelect.value;
    
    // Get all model options
    const modelOptions = modelSelect.options;
    // console.log(modelOptions);
    
    // Loop through all model options
    for (let option of modelOptions) {
        if (selectedMake === "") {
            // If no make is selected, show all options
            option.style.display = "";
        } else {
            // Show only options with class matching the selected make
            if (option.classList.contains(selectedMake)) {
                option.style.display = ""; // Show this option
            } else {
                option.style.display = "none"; // Hide this option
            }
        }
    }
    
    // Reset model selection
    modelSelect.value = "";
    
    // Also reset and filter trims when make changes
    trimSelect.value = "";
    filterTrims();
}

// Function to filter trims based on selected model
function filterTrims() {
    // Get the selected model value
    const selectedModel = modelSelect.value;
    
    // Get all trim options
    const trimOptions = trimSelect.options;
    // console.log(trimOptions);
    
    // Loop through all trim options
    for (let option of trimOptions) {
        if (selectedModel === "") {
            // If no model is selected, hide all options
            option.style.display = "none";
        } else {
            // Show only options with class matching the selected model
            if (option.classList.contains(selectedModel)) {
                option.style.display = "";
            } else {
                option.style.display = "none";
            }
        }
    }
}

function showInfo() {
    const selectedMake = makeSelect.value;
    const selectedModel = modelSelect.value
    const selectedTrim = trimSelect.value;
    selectedVehicle.style.fontSize = '2em'
    selectedVehicle.style.textAlign = 'center'
    selectedVehicle.innerHTML = `${selectedMake} ${selectedModel} ${selectedTrim}`
}


// Add event listeners
makeSelect.addEventListener('change', filterModels);
modelSelect.addEventListener('change', filterTrims);
submitBtn.addEventListener('click', showInfo)

// Initial call to set up initial state
// filterModels();