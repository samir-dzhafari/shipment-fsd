export type SessionUserId = Brand<Uuid, 'SessionUserId'>

export type Session = {
  token: string
  userId: SessionUserId
}
