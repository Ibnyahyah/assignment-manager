import { createContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
export const userContext = createContext();

// export const BASE_URL = "http://localhost:8000";
export const BASE_URL = "https://kp-hack-server.onrender.com";

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [assignments, setAssignments] = useState([]);
    const navigate = useNavigate();
    const path = useLocation();

    function getUser() {
        const _user = JSON.parse(sessionStorage.getItem("kpHack-user"));
        if (!_user) {
            navigate('/');
        } else {
            setUser(_user);
            getAllAssignments();
            getUsers();
            if (path.pathname.trim() === "/") navigate('/dashboard');
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

    async function getAllAssignments() {
        try {
            const request = await fetch(`${BASE_URL}/assignment`, {
                method: "GEt",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer",
                },
            });
            const response = await request.json();
            setAssignments(response.assignments);
        } catch (err) {
            console.log(err);
        }
    }
    async function getAssignment(id) {
        try {
            const request = await fetch(`${BASE_URL}/assignment/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer",
                },
            });
            return await request.json();
        } catch (err) {
            console.log(err);
        }
    }
    async function getUsers() {
        try {
            const request = await fetch(`${BASE_URL}/user`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer",
                },
            });
            const _users = await request.json();
            setUsers(_users);
        } catch (err) {
            console.log(err);
        }
    }

    return <userContext.Provider value={{ user, logout, authentication, assignments, getAssignment, users }}>
        {children}
    </userContext.Provider>
}