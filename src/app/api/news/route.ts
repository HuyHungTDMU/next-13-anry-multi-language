import { NextResponse } from "next/server";
import { pool } from "../../../lib/db";

export async function GET() {
  try {
    const results = await pool.query(`SELECT * FROM qxqarhl4yzwm_anri.News;`);

    let json_response = {
      status: "success",
      data: results,
    };
    return NextResponse.json(json_response);
  } catch (error: any) {
    let error_response = {
      status: "error",
      message: error.message,
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const results = await pool.query(`UPDATE qxqarhl4yzwm_anri.News
    SET content = '${data.content}'
    WHERE id = 1;`);

    let json_response = {
      status: "success",
      data: results,
    };

    return NextResponse.json(json_response);
  } catch (error: any) {
    let error_response = {
      status: "error",
      message: error.message,
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
