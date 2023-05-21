import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const userContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const _user = JSON.parse(sessionStorage.getItem("kpHack-user"));
        if (!_user) {
            navigate('/');
        } else {
            setUser(_user);
            navigate('/dashboard');
        }
    }, []);

    function logout() {
        sessionStorage.removeItem("kpHack-user");
        setUser(null);
        navigate('/');
    }

    return <userContext.Provider value={{ user, logout }}>
        {children}
    </userContext.Provider>
}