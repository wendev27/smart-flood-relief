"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md"
      >
        <Card className="p-8 shadow-lg border-blue-100 rounded-2xl">
          <h1 className="text-3xl font-bold text-blue-700 text-center mb-2">
            SmartFlood Relief
          </h1>
          <p className="text-center text-gray-500 mb-6">
            Access the system through the official platforms
          </p>

          {/* 🔹 ADMIN ACCESS */}
          <div className="mb-8">
            <a
              href="https://capstone-web-app-blond.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 rounded-md text-center font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Login as Admin
            </a>
            <a
              href="https://capstone-web-app-blond.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-4 py-3 rounded-md text-center font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Login as Barangay Official
            </a>
          </div>

          {/* 🔹 QR LOGIN SECTION */}
          <div className="border-t border-border pt-6">
            <p className="text-sm text-gray-600 text-center mb-4">
              Residents access SmartFlood via the mobile application.
            </p>

            <div className="flex flex-col items-center gap-4">
              {/* Dummy QR Code */}
              <div className="relative w-40 h-40">
                <Image
                  src="/qr.jpeg" // place a dummy QR in /public
                  alt="Download SmartFlood Mobile App"
                  fill
                  className="object-contain"
                />
              </div>

              <p className="text-xs text-gray-500 text-center">
                Scan to download the SmartFlood mobile application
              </p>

              <Button variant="outline" className="w-full" asChild>
                <a
                  href="https://github.com/IOT-Ninjas/Mobile-Application-Repo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Mobile App
                </a>
              </Button>
            </div>
          </div>

          {/* 🔹 FOOTNOTE */}
          <p className="text-center text-xs text-gray-400 mt-6">
            Web authentication is disabled in demo mode.
          </p>
        </Card>
      </motion.div>
    </main>
  );
}
