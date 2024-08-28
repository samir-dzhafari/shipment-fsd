import { factory, primaryKey } from '@mswjs/data'

/**
 * Database for Mock Server
 */

export const db = factory({
  users: {
    id: primaryKey(String),
    email: String,
    password: String,
  },
  products: {
    id: primaryKey(String),
    name: String,
    weight: Number,
  },
  trucks: {
    id: primaryKey(String),
    start_point: String,
    end_point: Number,
    inTransit: Boolean,
    licensePlate: String,
  },
})
