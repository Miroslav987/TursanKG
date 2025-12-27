// src/app/api/payment/route.ts
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();


    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";


    const payload = {
      ...body,
      client_ip: clientIp,
    };




    const response = await axios.post(
      "https://api.tursan.kg/api/payment/create",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        timeout: 5000, 
      }
    );


    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("FULL ERROR OBJECT:", error);

    const status = error.response?.status || 500;
    const data = error.response?.data || { detail: error.message || "Internal server error" };

    console.error("❌ PAYMENT API ERROR STATUS:", status);
    console.error("❌ PAYMENT API ERROR DATA:", data);

    return NextResponse.json({ detail: data }, { status });
  }
}
