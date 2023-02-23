"use client";

import Image from "next/image";
import { signOut } from "next-auth/react";

import Link from "next-link";

type User = {
  image: string;
};

export default function Logged({ image }: User) {
  return (
    <>
      <Image width={60} height={60} src={image} />
      <button onClick={signOut}>sign out</button>
    </>
  );
}
