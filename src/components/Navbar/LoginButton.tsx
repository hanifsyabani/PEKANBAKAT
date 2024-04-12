'use client'
import { signIn } from "next-auth/react";
import React from "react";

export default function LoginButton() {
  return (
    <button
      className="bg-primary text-white p-2 rounded-lg hover:bg-blue-900"
      onClick={() => signIn()}
    >
      Masuk
    </button>
  );
}
