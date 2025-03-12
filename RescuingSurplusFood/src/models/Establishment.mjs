import { EstablishmentStatus } from "../enums/EstablishmentEnums.mjs";

class Establishment {
  constructor(
    establishment_id,
    name,
    address,
    phone_number,
    email = null,
    food_category,
    created_at = null,
    operating_hours = {},
    pickup_times = {},
    average_rating = null,
    total_reviews = 0,
    latitude = null,
    longitude = null,
    profile_picture = null,
    status = EstablishmentStatus.ACTIVE,
    owner_id
  ) {
    this.establishment_id = establishment_id;
    this.name = name;
    this.address = address;
    this.phone_number = phone_number;
    this.email = email;

    this.food_category = food_category;

    this.created_at = created_at ? new Date(created_at) : new Date();
    this.operating_hours =
      typeof operating_hours === "object" ? operating_hours : {};
    this.pickup_times = typeof pickup_times === "object" ? pickup_times : {};

    this.average_rating =
      typeof average_rating === "number" ? average_rating : null;
    this.total_reviews = Number.isInteger(total_reviews) ? total_reviews : 0;

    this.latitude = typeof latitude === "number" ? latitude : null;
    this.longitude = typeof longitude === "number" ? longitude : null;

    this.profile_picture = profile_picture;

    // Validate status input
    this.status = Object.values(EstablishmentStatus).includes(status)
      ? status
      : EstablishmentStatus.ACTIVE;

    this.owner_id = owner_id;
  }
}

export { Establishment, EstablishmentStatus };
