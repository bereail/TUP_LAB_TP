import React, { useEffect } from "react";

const Dashboard = ({ onLogout }) => {
  useEffect(() => {
    console.log("Hello, useEffect");
    <h1>INICIASTE SESION!</h1>
      // Add your code logic here
      // This useEffect will be called when the Dashboard component is mounted
      // You can perform any necessary actions, such as fetching data or subscribing to events
      // Remember to clean up any resources or subscriptions in the cleanup function of useEffect
    return () => {
      console.log("Goodbye, useEffect");
      // Cleanup code goes here
    };
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
