import { UserStatus, UserRole } from "../enums/UserEnums.mjs";

class User {
  constructor(
    id,
    name,
    email,
    phone_number,
    password_hash,
    allergies,
    special_requests,
    created_at = null,
    created_at = null,
    last_login = null,
    is_verified = false,
    status = "active"
  ) {
    this.id = id; // Integer / UUID: Auto-generated unique ID for each user.
    this.name = name; // String: Stores the user's full name.
    this.email = email; // String (Unique): Used for login and communication.
    this.phone_number = phone_number; // String: Contact number of the user.
    this.password_hash = password_hash; // String: Stores the hashed version of the password for security.

    this.allergies = Array.isArray(allergies) ? allergies : []; // List[String]: Users can specify food allergies (e.g., "Peanuts, Dairy").
    this.special_requests = Array.isArray(special_requests)
      ? special_requests
      : []; // List[String]: Users can enter dietary preferences (e.g., "Vegetarian options only").

    this.signupDate = created_at ? new Date(created_at) : null; // DateTime: Timestamp for when the user account was created.

    this.last_login = last_login ? new Date(last_login) : null; // DateTime: Timestamp for when the user account was created.
    this.is_verified = Boolean(is_verified); // Ensuring it always holds a boolean value

    this.status = Object.values(UserStatus).includes(status)
      ? status
      : UserStatus.ACTIVE;
    this.role = Object.values(UserRole).includes(role) ? role : UserRole.USER;
  }
}

export default User;
