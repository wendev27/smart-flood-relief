"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function DonateModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ✅ Trigger Button */}
      <Button
        onClick={() => setOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 w-full"
      >
        Donate $10
      </Button>

      {/* ✅ Modal Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-6 shadow-xl max-w-md w-full relative"
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setOpen(false)}
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Confirm Donation
            </h2>

            <p className="text-gray-600 mb-6">
              You are about to donate <strong>$10</strong>.
            </p>

            <Button
              className="bg-blue-600 hover:bg-blue-700 w-full"
              onClick={() => {
                alert("Process donation here");
                setOpen(false);
              }}
            >
              Confirm Donation
            </Button>
          </motion.div>
        </div>
      )}
    </>
  );
}
