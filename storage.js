const speakers = {
    "name": "KEF 5.0 Speakers",
    "type": "electronics",
    "location": "basement",
    "description": "I love how natural these speakers sound and watching surround sound movies using them."
  }

const receiver = {
    "name": "Marantz Receiver",
    "type": "electronics",
    "location": "basement",
    "description": "This received is slim and fits well in our entertainment center and makes it easy to connect other electronics together"
}

const entertainmentCenter = {
    "name": "entertainment center",
    "type": "furniture",
    "location": "basement",
    "description": "Holds electronic gear, movies and center channel speaker"
}

const mountainBike = {
    "name": "Quiring",
    "type": "sportsEquipment",
    "location": "garage",
    "description": "This bike is special because I ordered it custom made for me so it fits be perfectly and is a joy to ride."
}

const cyclocrossBike = {
    "name": "Surly Crosscheck",
    "type": "sportsEquipment",
    "location": "garage",
    "description": "My wife bought me this bike before we were married. I love how it handles many different types of terrain."
}
 
const bikeLight = {
    "name": "Niterider light",
    "type": "sportsEquipment",
    "location": "office",
    "description": "This is a super bright light that allows me to go mountain bike riding in the pitch dark." 
}

const appleTV = {
    "name": "AppleTV",
    "type": "electronics",
    "location": "basement",
    "description": "This is a versatile piece of equipment that allows me to stream tv content, stream my entire music library from a server and also play games."
}

const sectionalSofa = {
    "name": "Sectional Sleeper Sofa",
    "type": "furniture",
    "location": "basement",
    "description": "This is a great place to relax and watcha  movie and also pulls out into a comfortable bed."
}

const diningTable = {
    "name": "Dining Room Table",
    "type": "furniture",
    "location": "dining room",
    "description": "This table is great for hosting friends and family for meals."
}

const bikeShoes = {
    "name": "Specialized shoes",
    "type": "sportsEquipment",
    "location": "garage",
    "description": "These shoes clip into my bicycle pedals and give me a greater amount of control over my bicycle."
}

let electronics = [];
let furniture = [];
let sportsEquipment = [];

electronics.push(speakers, receiver, appleTV);
furniture.push(entertainmentCenter, sectionalSofa, diningTable);
sportsEquipment.push(mountainBike, cyclocrossBike, bikeLight, bikeShoes);

let homeInventory = {
    "electronics": electronics,
    "furniture": furniture,
    "sportsEquipment": sportsEquipment
}

const homeInventoryString = JSON.stringify(homeInventory);
localStorage.setItem("homeInventory", homeInventoryString);

