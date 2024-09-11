import { computed, makeObservable, observable } from 'mobx'
import type { SessionUserId } from '@/entities/session/model/types'

class Session {
  // MARK: - Observables

  token: Nullable<string> = null
  userId: Nullable<SessionUserId> = null

  // MARK: - Constructor

  static createStore(): Session {
    return new Session()
  }

  constructor() {
    makeObservable(this, {
      token: observable,
      userId: observable,
      isAuthorized: computed,
    })
  }

  get isAuthorized() {
    return Boolean(this.userId)
  }
}

export const sessionStore = Session.createStore()
