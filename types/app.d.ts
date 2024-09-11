declare const _brand: unique symbol

declare global {

  // Alias

  export type Uuid = string

  export type Url = string

  export type Phone = string

  export type Email = string

  export type Hex = `#${string}`

  // Utility

  export type Nullable<T> = T | null

  export type Maybe<T> = T | null | undefined | false

  export type Brand<K, T> = K & { [_brand]: T }

  export type Identifiable<T> = T & { id: Uuid }
}

export {}
