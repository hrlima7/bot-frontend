
import React from "react";
import { Navigate } from "react-router-dom";


export function PrivateRoute({children}){
    const isAthenticated = localStorage.getItem("token");
    return( isAthenticated ? children : <Navigate to= "/" />)
}
