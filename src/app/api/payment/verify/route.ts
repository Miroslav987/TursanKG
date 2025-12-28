import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const { payment_id } = await req.json();

    if (!payment_id) {
      return NextResponse.json(
        { success: false, message: "payment_id не передан" },
        { status: 400 }
      );
    }
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.tursan.kg";


    const response = await axios.get(
      `${API_BASE_URL}/api/payment/status/${payment_id}`,
      {
        headers: { Accept: "application/json" },
        timeout: 10000, 
      }
    );

    const data = response.data;

    const isSuccess =
      data.txn_action_code === "0" &&
      data.txn_response_code === "00" &&
      data.status_code === 1;

    return NextResponse.json({
      success: isSuccess,
      status_code: data.status_code,
      message: isSuccess
        ? "Платёж подтверждён"
        : "Платёж не завершён",
    });

  } catch (error: any) {
    console.error("VERIFY ERROR:", error.response?.data || error.message);

    return NextResponse.json(
      {
        success: false,
        message: "Ошибка проверки платежа",
      },
      { status: 500 }
    );
  }
}
