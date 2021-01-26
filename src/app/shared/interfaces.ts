export class User {
  email: string
  password: string
  returnSecureToken?: boolean
}

export class FbAuthResponse {
  idToken: string
  expiresIn: string
}
