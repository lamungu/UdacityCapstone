interface RegisterUserRequest {
    username: string,
    email: string,
    password: string,
}

interface RegisterUserResponse {
    token: string,
    user: User
}