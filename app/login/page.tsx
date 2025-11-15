"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const router = useRouter();
  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in with: ${email}`);
    // Later, you will replace this with real authentication logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 text-green-900">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
          Login to Shieldify
        </h1>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-green-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-green-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-green-700 mt-5">
          Don’t have an account?{" "}
          <a onClick={()=>        router.push('/Signup')} className="text-green-600 hover:underline">
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}
