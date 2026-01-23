import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const barangay = searchParams.get("barangay");

  if (!barangay) {
    return NextResponse.json(
      { error: "Barangay is required" },
      { status: 400 },
    );
  }

  const client = await clientPromise;
  const db = client.db("CapstoneDatabase");

  // Get sensors in this barangay
  const sensors = await db
    .collection("sensors")
    .find({ barangay, status: "active" })
    .toArray();

  if (!sensors.length) {
    return NextResponse.json([]);
  }

  const sensorIds = sensors.map((s) => s._id);

  // Latest reading per sensor
  const readings = await db
    .collection("sensor_readings")
    .aggregate([
      { $match: { sensorId: { $in: sensorIds } } },
      { $sort: { createdAt: -1 } },
      {
        $group: {
          _id: "$sensorId",
          latest: { $first: "$$ROOT" },
        },
      },
    ])
    .toArray();

  return NextResponse.json(
    readings.map((r) => ({
      sensorId: r._id,
      waterLevel: r.latest.waterLevel,
      status: r.latest.status,
      updatedAt: r.latest.createdAt,
    })),
  );
}
