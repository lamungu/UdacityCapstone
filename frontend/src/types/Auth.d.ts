interface AuthContextTypes {
    user?: User,
    token: string,
    setTokenAndUser(token: string, user: User): void
    isAuthenticated(): boolean
}

interface User {
    email: string
}