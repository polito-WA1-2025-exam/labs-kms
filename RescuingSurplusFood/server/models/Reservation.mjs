import { ReservationStatus, PaymentStatus } from '../enums/ReservationEnums.mjs';

class Reservation {
    constructor(
        reservation_id,
        user_id,
        bags = [],
        total_price = 0.0,
        status = ReservationStatus.CONFIRMED,
        created_at = null,
        pickup_time = null,
        shopping_cart_id = null,
        pickup_code = null,
        cancellation_reason = "",
        payment_status = PaymentStatus.PENDING,
        allergen_notes = ""
    ) {
        this.reservation_id = reservation_id;
        this.user_id = user_id;

        // Ensure bags is always an array of bag IDs
        this.bags = Array.isArray(bags) ? bags : [];
        
        this.total_price = typeof total_price === 'number' && total_price >= 0 ? total_price : 0.0;

        this.created_at = created_at ? new Date(created_at) : new Date();
        this.pickup_time = pickup_time ? new Date(pickup_time) : null;

        // Validate status and payment status
        this.status = Object.values(ReservationStatus).includes(status) ? status : ReservationStatus.CONFIRMED;
        this.payment_status = Object.values(PaymentStatus).includes(payment_status) ? payment_status : PaymentStatus.PENDING;

        this.shopping_cart_id = shopping_cart_id;

        // Generate pickup code if not provided
        this.pickup_code = pickup_code || this.generatePickupCode();

        this.cancellation_reason = typeof cancellation_reason === 'string' ? cancellation_reason : "";
        this.allergen_notes = typeof allergen_notes === 'string' ? allergen_notes : "";
    }

    // Method to generate a unique pickup code (6-digit alphanumeric)
    generatePickupCode() {
        return Math.random().toString(36).substr(2, 6).toUpperCase();
    }

    // Method to cancel reservation
    cancelReservation(reason) {
        this.status = ReservationStatus.CANCELED;
        this.cancellation_reason = reason;
    }

    // Method to complete reservation (user picked up bags)
    completeReservation() {
        this.status = ReservationStatus.COMPLETED;
        this.payment_status = PaymentStatus.PAID;
    }

    // Method to update payment status
    updatePaymentStatus(newStatus) {
        if (Object.values(PaymentStatus).includes(newStatus)) {
            this.payment_status = newStatus;
        }
    }
}

export { Reservation };
