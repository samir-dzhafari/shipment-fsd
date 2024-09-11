import { HttpMethods } from 'msw'
import { env } from '@/shared/lib/env'

class MockServerCoreRequest {
  readonly baseUrl: Url = env.VITE_API_ENDPOINT

  _token: Nullable<string> = null

  set token(token: string) {
    this._token = token
  }

  get token(): Nullable<string> {
    return this._token
  }

  get(url: string, params: Record<string, string>) {
    const finalUrl = new URL(url, this.baseUrl)

    Object.keys(params).forEach((key) => {
      finalUrl.searchParams.append(key, params[key])
    })

    return this.request(HttpMethods.GET, finalUrl.toString())
  }

  post<T extends Nullable<object>>(url: string, body: T) {
    const finalUrl = new URL(url, this.baseUrl)
    return this.request(HttpMethods.GET, finalUrl.toString(), body)
  }

  private request<T extends Nullable<object>>(method: HttpMethods, url: string, body: Nullable<T> = null) {
    const headers = {
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json',
    }

    return fetch(url, {
      method,
      mode: 'cors',
      headers,
      body: body ? JSON.stringify(body) : null,
    })
  }
}

export const mockServerCoreRequest = new MockServerCoreRequest()
