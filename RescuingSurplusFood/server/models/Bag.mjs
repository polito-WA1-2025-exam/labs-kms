import { BagType, BagSize, BagStatus } from '../enums/BagEnums.mjs';

class Bag {
    constructor(
        bag_id,
        establishment_id,
        type = BagType.SURPRISE,
        size = BagSize.MEDIUM,
        price,
        pickup_time_range,
        status = BagStatus.AVAILABLE,
        created_at = null,
        contents = [],
        available_quantity = 1,
        allergen_info = "",
        expiration_date = null,
        discount_percentage = 0,
        reservation_id = null,
        user_notes = ""
    ) {
        this.bag_id = bag_id;
        this.establishment_id = establishment_id;

        // Validate type, size, and status
        this.type = Object.values(BagType).includes(type) ? type : BagType.SURPRISE;
        this.size = Object.values(BagSize).includes(size) ? size : BagSize.MEDIUM;
        this.status = Object.values(BagStatus).includes(status) ? status : BagStatus.AVAILABLE;

        this.price = typeof price === 'number' && price > 0 ? price : 0;
        this.pickup_time_range = pickup_time_range;

        this.created_at = created_at ? new Date(created_at) : new Date();
        this.expiration_date = expiration_date ? new Date(expiration_date) : null;

        this.contents = Array.isArray(contents) ? contents : [];
        this.available_quantity = Number.isInteger(available_quantity) && available_quantity >= 0 ? available_quantity : 1;
        
        this.allergen_info = typeof allergen_info === 'string' ? allergen_info : "";
        this.discount_percentage = Number.isInteger(discount_percentage) && discount_percentage >= 0 ? discount_percentage : 0;

        this.reservation_id = reservation_id;
        this.user_notes = typeof user_notes === 'string' ? user_notes : "";
    }
}

export { Bag };
