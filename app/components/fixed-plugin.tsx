"use client";
import Image from "next/image";
import logo from '@/public/whatsapplogo.png'
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a href="https://wa.me/+918957065208/?text=I'm%20inquiring%20about%20the%20apartment%20listing" target="_blank">
      <Button
      placeholder=''
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
        <Image
          width={60}
          height={60}
          className=""
          alt="Material Tailwind"
          src={logo}
        />
        {" "}
        {/* contact on Skype */}
      </Button>
    </a>
  );
}
