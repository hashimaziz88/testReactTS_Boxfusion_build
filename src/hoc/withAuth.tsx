import React from "react";
import { Navigate } from "react-router-dom";
import { JSX } from "react/jsx-runtime";

interface WithAuthProps {
    allowedRoles?: string[];
}

const withAuth = (WrappedComponent: React.ComponentType, { allowedRoles = [] }: WithAuthProps = {}) => {
    return (props: JSX.IntrinsicAttributes) => {
        const token = localStorage.getItem("auth_token");
        const userRole = localStorage.getItem("user_role");

        if (!token) {
            return <Navigate to="/" replace />;
        }

        if (allowedRoles.length > 0 && !allowedRoles.includes(userRole || "")) {
            if (userRole === "admin") {
                return <Navigate to="/admin" replace />;
            }
            return <Navigate to="/client" replace />;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
