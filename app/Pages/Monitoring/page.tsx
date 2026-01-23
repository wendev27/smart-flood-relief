"use client";

import { motion } from "framer-motion";
import BarangayFloodChart from "@/components/BarangayFloodChart";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 py-10 text-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-blue-700 mb-10 text-center"
      >
        SmartFlood Dashboard
      </motion.h1>

      {/* Flood monitoring per barangay */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BarangayFloodChart barangay="Barangay Obrero" />
        <BarangayFloodChart barangay="Barangay Manresa" />
        <BarangayFloodChart barangay="Barangay West Kamias" />
      </div>
    </main>
  );
}
