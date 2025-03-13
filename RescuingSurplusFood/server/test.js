import Bag from './models/Bag.mjs';
import Establishment from './models/Establishment.mjs';
import User from './models/User.mjs';
import SurplusFoodApp from './services/SurplusFoodApp.mjs';

// Create the SurplusFoodApp instance
const app = new SurplusFoodApp();

// Create an establishment
const establishment1 = new Establishment(1, "Green Cafe", "123 Main St", "123-456-7890", "Cafe");
app.addEstablishment(establishment1);

// Create users
const user1 = new User(101, "Alice");
const user2 = new User(102, "Bob");
app.addUser(user1);
app.addUser(user2);

// Create bags
const bag1 = new Bag(1, "regular", ["Sandwich", "Juice"], 5, "medium", 1, "12:00 PM");
const bag2 = new Bag(2, "surprise", [], 3, "small", 1, "1:00 PM");

app.addBag(bag1);
app.addBag(bag2);

// Find available bags
console.log("Available Bags:", app.findAvailableBags());

// Reserve a bag
console.log(app.reserveBag(101, 1)); // Alice reserves bag1
console.log(app.reserveBag(102, 2)); // Bob reserves bag2

// Check available bags after reservation
console.log("Available Bags after reservation:", app.findAvailableBags());

// Cancel a reservation
console.log(app.cancelReservation(101, 1)); // Alice cancels reservation

// Check available bags after cancellation
console.log("Available Bags after cancellation:", app.findAvailableBags());

