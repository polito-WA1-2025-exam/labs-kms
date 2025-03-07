
class Bag {
    constructor(id, type, contents, price, size, establishmentId, pickupTime) {
        this.id = id;
        this.type = type; // 'surprise' or 'regular'
        this.contents = contents; // Only for regular bags
        this.price = price;
        this.size = size; // small, medium, large
        this.establishmentId = establishmentId;
        this.pickupTime = pickupTime;
        this.status = "available"; // or 'reserved'
    }
}

export default Bag;
