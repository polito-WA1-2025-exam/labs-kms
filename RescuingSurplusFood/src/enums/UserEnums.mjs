// Define enums for status and role
const UserStatus = Object.freeze({
    ACTIVE: 'active',
    INACTIVE: 'inactive',
    BANNED: 'banned'
});

const UserRole = Object.freeze({
    USER: 'user',
    ADMIN: 'admin',
    STORE_OWNER: 'store_owner'
});


export { UserStatus, UserRole };
