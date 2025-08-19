"use client";
import Login from "./components/Login";
import { User } from "./types"; // make sure this path matches your project

export default function Home() {
  const handleLogin = (user: User) => {
    console.log("Logged in user:", user);
    // You can also set user state or redirect here
  };

  return (
    <main>
      <Login onLogin={handleLogin} />
    </main>
  );
}
