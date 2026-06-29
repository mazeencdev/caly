"use client";
import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function Navbar() {
  return (
    <div className="w-full h-fit bg-transparent flex items-center justify-evenly">
      <div className="text-white">
        <p className="text-4xl font-bold">Morning Mazeen,</p>
        <p className="text-white/60">Here's what's on your agenda.</p>
      </div>
      <div className="flex items-center gap-5">
        <p className="bg-[#212D40] text-2xl px-3 py-2 rounded-xl">C</p>
        <p className="bg-[#212D40] text-2xl px-3 py-2 rounded-xl">A</p>
        <p className="bg-[#212D40] text-2xl px-3 py-2 rounded-xl">S</p>
        <p className="bg-[#212D40] text-2xl px-3 py-2 rounded-xl">E</p>
      </div>
      <div>
        <InputGroup className="max-w-xs">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}
