import { CartStatus } from '../enums/CartEnums.mjs';

class Cart {
    constructor(
        cart_id,
        user_id,
        bags = [],
        total_price = 0.0,
        created_at = null,
        updated_at = null,
        status = CartStatus.ACTIVE,
        reservation_id = null,
        user_notes = ""
    ) {
        this.cart_id = cart_id;
        this.user_id = user_id;

        // Ensure bags is always an array of bag IDs
        this.bags = Array.isArray(bags) ? bags : [];
        
        this.total_price = typeof total_price === 'number' && total_price >= 0 ? total_price : 0.0;

        this.created_at = created_at ? new Date(created_at) : new Date();
        this.updated_at = updated_at ? new Date(updated_at) : new Date();

        // Validate status
        this.status = Object.values(CartStatus).includes(status) ? status : CartStatus.ACTIVE;

        this.reservation_id = reservation_id;
        this.user_notes = typeof user_notes === 'string' ? user_notes : "";
    }
}