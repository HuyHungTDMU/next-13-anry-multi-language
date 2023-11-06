import { NextResponse } from "next/server";
import { pool } from "../../../lib/db";

export async function GET() {
  try {
    const results = await pool.query(
      `SELECT * FROM qxqarhl4yzwm_anri.Products order by id desc;`,
    );

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
    const query = `UPDATE Products SET subTitle='${data.subTitle}',title='${data.title}',image='${data.image}',type='${data.type}' WHERE id='${data.id}'`;
    console.log({ query });

    const results = await pool.query(query);

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

export async function PUT(req: Request) {
  try {
    const data = await req.json();
    const query = `INSERT INTO qxqarhl4yzwm_anri.Products (image, title, subTitle, type) VALUES ('${data.image}','${data.title}','${data.subTitle}','${data.type}');`;
    console.log({ query });
    const results = await pool.query(query);

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

export async function DELETE(req: Request) {
  try {
    const data = await req.json();
    const query = `delete from qxqarhl4yzwm_anri.Products where id = '${data.id}';`;
    console.log({ query });
    const results = await pool.query(query);

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
