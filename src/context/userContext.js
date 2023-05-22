import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const userContext = createContext();

// const BASE_URL = "http://localhost:8000";
const BASE_URL = "https://burgundy-jay-sock.cyclic.app";

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    function getUser() {
        const _user = JSON.parse(sessionStorage.getItem("kpHack-user"));
        if (!_user) {
            navigate('/');
        } else {
            setUser(_user);
            navigate('/dashboard');
        }
    }
    useEffect(() => {
        getUser();
    }, []);

    function authentication(data, route) {
        fetch(`${BASE_URL}/user/${route}`, {
            headers: {
                "Content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.user) {
                    window.sessionStorage.setItem(
                        "kpHack-user",
                        JSON.stringify(data.user)
                    );
                    getUser();
                }
                alert(data.message);
            })
            .catch((err) => {
                alert("Error: " + err.message);
            });
    }
    function logout() {
        sessionStorage.removeItem("kpHack-user");
        setUser(null);
        navigate('/');
    }

    return <userContext.Provider value={{ user, logout, authentication }}>
        {children}
    </userContext.Provider>
}