// import { useUser } from '@clerk/clerk-react'
// import React from 'react'
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({children}) => {
//   const {user} = useUser();
//   return (
//     <div>
//       {user ? children : <Navigate to='/'/>}
//     </div>
//   )
// }

// export default ProtectedRoute


import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) return <div>Loading...</div>;

  return isSignedIn ? children : <Navigate to="/sign-in" replace />;
};

export default ProtectedRoute;