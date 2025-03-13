class SurplusFoodApp {
    constructor() {
        this.establishments = [];
        this.bags = [];
        this.users = [];
    }

    addEstablishment(establishment) {
        this.establishments.push(establishment);
    }

    addBag(bag) {
        this.bags.push(bag);
    }

    addUser(user) {
        this.users.push(user);
    }

    findAvailableBags() {
        return this.bags.filter(bag => bag.status === "available");
    }

    reserveBag(userId, bagId) {
        const user = this.users.find(u => u.id === userId);
        const bag = this.bags.find(b => b.id === bagId && b.status === "available");
        
        if (user && bag) {
            bag.status = "reserved";
            user.reservedBags.push(bag);
            return `Bag ${bagId} reserved by ${user.name}`;
        }
        return "Bag not available or user not found";
    }

    cancelReservation(userId, bagId) {
        const user = this.users.find(u => u.id === userId);
        if (user) {
            user.reservedBags = user.reservedBags.filter(bag => bag.id !== bagId);
            this.bags.find(b => b.id === bagId).status = "available";
            return `Reservation for bag ${bagId} cancelled.`;
        }
        return "User not found";
    }
}


export default SurplusFoodApp