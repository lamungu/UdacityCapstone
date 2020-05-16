import React, { useEffect, useState, Children, ReactNode } from 'react';


const JWT_LOCALSTORE_KEY = 'jwt';
const USER_LOCALSTORE_KEY = 'user';

export const AuthContext = React.createContext<AuthContextTypes>({
    user: undefined,
    token: '',
    setTokenAndUser: (token: string, user: User): void => {},
    isAuthenticated: (): boolean => false,
});

interface IProps {
    children: ReactNode;
}
function Auth({children}: IProps) {
    const [token, setToken] = useState('');
    const [user, setUser] = useState<User|undefined>();
    
    function setTokenAndUser(token: string, user: User) {
        localStorage.setItem(JWT_LOCALSTORE_KEY, token);
        localStorage.setItem(USER_LOCALSTORE_KEY, JSON.stringify(user));
        setToken(token);
        setUser(user);
    }

    function isAuthenticated() {
        return !!(user && user.email !== '' && token);
    }

    useEffect(() => {

        const token = localStorage.getItem(JWT_LOCALSTORE_KEY);
        try {
            const user: User|undefined = JSON.parse(localStorage.getItem(USER_LOCALSTORE_KEY) || '');
        } catch (e) {
            
        }
        debugger;
        if (token && user) {
            setTokenAndUser(token, user);
        }
    }, [])

    return (
        <AuthContext.Provider value={{token, user, setTokenAndUser, isAuthenticated}}>
            <>{children}</>
        </AuthContext.Provider>
    );
}

export default Auth;