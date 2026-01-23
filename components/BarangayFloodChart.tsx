"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

type Props = {
  barangay: string;
};

type LatestReading = {
  waterLevel: number;
  updatedAt: string;
};

const REFRESH_INTERVAL = 5000; // 5s
const STALE_THRESHOLD = 120; // 2 minutes

export default function BarangayFloodChart({ barangay }: Props) {
  const [reading, setReading] = useState<LatestReading | null>(null);
  const [secondsAgo, setSecondsAgo] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  /* -------------------- Poll latest reading -------------------- */
  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const res = await fetch(
          `/api/dashboard/flood-summary?barangay=${encodeURIComponent(barangay)}`,
          { cache: "no-store" },
        );

        if (!res.ok) throw new Error("Fetch failed");

        const data = await res.json();

        /**
         * API may return:
         * - array (most common)
         * - object
         * - empty
         */
        if (Array.isArray(data)) {
          // Take the latest reading if array is not empty
          setReading(data.length > 0 ? data[0] : null);
        } else if (data && typeof data === "object") {
          setReading(data);
        } else {
          setReading(null);
        }

        setError(null);

        setError(null);
      } catch {
        setError("Unable to load data");
      }
    };

    fetchLatest(); // initial fetch
    const interval = setInterval(fetchLatest, REFRESH_INTERVAL);

    return () => clearInterval(interval);
  }, [barangay]);

  /* -------------------- Stale timer -------------------- */
  useEffect(() => {
    if (!reading?.updatedAt) return;

    const ts = new Date(reading.updatedAt).getTime();

    const interval = setInterval(() => {
      setSecondsAgo(Math.floor((Date.now() - ts) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [reading]);

  const isStale = secondsAgo !== null && secondsAgo >= STALE_THRESHOLD;

  /* -------------------- Render -------------------- */
  return (
    <Card className="p-4 rounded-2xl border-blue-100 shadow-sm">
      <h3 className="text-sm font-semibold text-blue-700 mb-2">{barangay}</h3>

      {error && <p className="text-xs text-danger">{error}</p>}

      {reading && typeof reading.waterLevel === "number" ? (
        <>
          <div className="text-2xl font-bold text-blue-700">
            {reading.waterLevel.toFixed(2)} m
          </div>

          <p className="text-xs mt-1">
            {!isStale ? (
              <span className="text-muted">
                Live • updated {secondsAgo}s ago
              </span>
            ) : (
              <span className="text-warning font-medium">
                ⚠ Stale ({secondsAgo}s ago)
              </span>
            )}
          </p>
        </>
      ) : (
        <p className="text-xs text-muted">No sensor data available</p>
      )}
    </Card>
  );
}
