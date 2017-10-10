let storedHomeInventory = JSON.parse(localStorage.getItem("homeInventory"));

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

storedHomeInventory.electronics.push(TV);
storedHomeInventory.sportsEquipment.push(bikeGPS);
storedHomeInventory.furniture.push(officeDesk);

const updatedHomeInventoryString = JSON.stringify(storedHomeInventory);
localStorage.setItem("homeInventory", updatedHomeInventoryString);

console.log(localStorage.getItem("homeInventory"))