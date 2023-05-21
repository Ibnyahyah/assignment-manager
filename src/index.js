import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./app";
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from "./context/userContext";

createRoot(
    document.getElementById("root")
).render(<BrowserRouter>
    <UserProvider>
        <App />
    </UserProvider>
</BrowserRouter>);