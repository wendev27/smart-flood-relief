"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import DonateModal from "@/components/DonateModal/page";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-blue-100">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-blue-800 mb-4"
        >
          Support SmartFlood Relief
        </motion.h1>
        <p className="text-lg text-blue-700 max-w-2xl mx-auto mb-8">
          Every donation helps us deliver real-time flood response, emergency
          aid, and transparent blockchain-based auditing.
        </p>
      </section>

      {/* ✅ Single Donation Option */}
      <section className="max-w-xl mx-auto py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6 text-center shadow-md border-blue-100 rounded-2xl hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-blue-700 mb-2">$10</h3>
            <p className="text-gray-600 mb-6">
              Provide emergency supplies for one family.
            </p>

            {/* ✅ Your new modal */}
            <DonateModal />
          </Card>
        </motion.div>
      </section>
    </main>
  );
}
