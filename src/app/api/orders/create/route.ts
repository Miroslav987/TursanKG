import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.payment_id) {
      return NextResponse.json(
        { message: "payment_id обязателен" },
        { status: 400 }
      );
    }



    
    return NextResponse.json({
      success: true,
      order_id: crypto.randomUUID(),
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Ошибка сохранения заказа" },
      { status: 500 }
    );
  }
}
