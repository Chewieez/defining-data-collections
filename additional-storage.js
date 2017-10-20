
// pull the current inventory database from local storage
let storedHomeInventory = JSON.parse(localStorage.getItem("homeInventory"));

// create some new inventory objects to eventually append into the inventory database
const TV = {
    "name": "Sony TV",
    "type": "electronics",
    "location": "basement",
    "description": "Nice flat size TV that fits on the wall and makes it fun to watch movies"
}

const bikeGPS = {
    "name": "Garmin 500",
    "type": "sportsEquipment",
    "location": "garage",
    "description": "This is a great device that tracks your location, speed and pedaling cadence while you're riding your bike"
}

const officeDesk = {
    "name": "Ikea desk",
    "type": "furniture",
    "location": "office",
    "description": "This is a great modern desk that holds my computer accessories and speakers and papers."
}

// push these new inventory objects into their respective arrays
storedHomeInventory.electronics.push(TV);
storedHomeInventory.sportsEquipment.push(bikeGPS);
storedHomeInventory.furniture.push(officeDesk);

// serialize the updated database again with .stringify
const updatedHomeInventoryString = JSON.stringify(storedHomeInventory);
// place the updated serialized Database into local storage
localStorage.setItem("homeInventory", updatedHomeInventoryString);

// console log the updated inventory Database to check if items were added. 
console.log("updatedHomeInventoryString: ", JSON.parse(localStorage.getItem("homeInventory")));