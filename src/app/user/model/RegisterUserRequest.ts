export interface RegisterUserRequest {
  "userName": string
  "email": string
  "password": string
  "confirmPassword": string
  roles: string[]
}
