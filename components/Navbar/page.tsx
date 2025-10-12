"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-blue-600"
      >
        <Link href="/">
          SmartFlood <span className="text-gray-800">Relief</span>
        </Link>
      </motion.h1>

      {/* Nav Buttons */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="space-x-4"
      >
        <Link href="/Pages/About">
          <Button variant="outline">About</Button>
        </Link>

        <Link href="/Pages/Donate">
          <Button variant="outline">Donate</Button>
        </Link>

        <Link href="/Pages/Monitoring">
          <Button variant="outline">Monitoring</Button>
        </Link>

        <Link href="/Pages/DashBoard">
          <Button variant="outline">Dashboard</Button>
        </Link>

        <Link href="/Auth/Login">
          <Button>Get Started</Button>
        </Link>
      </motion.div>
    </nav>
  );
}
