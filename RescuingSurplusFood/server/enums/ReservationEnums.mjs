// Enum for reservation status
const ReservationStatus = Object.freeze({
    CONFIRMED: 'confirmed',
    CANCELED: 'canceled',
    COMPLETED: 'completed'
});

// Enum for payment status
const PaymentStatus = Object.freeze({
    PENDING: 'pending',
    PAID: 'paid',
    FAILED: 'failed'
});

export { ReservationStatus, PaymentStatus };
