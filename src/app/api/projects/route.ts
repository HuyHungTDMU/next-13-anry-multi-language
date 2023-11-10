import { NextResponse } from "next/server";
import { pool } from "../../../lib/db";

const projects = [
  {
    type: 1,
    subTitle: "Khách Sạn",
    title: "Dự án khách sạn Mường Thanh",
    summary:
      "🏨 Chào mừng đến với dự án chăn ga gối nệm dành riêng cho khách sạn của chúng tôi - nơi mang đến sự hoàn hảo cho mỗi không gian nghỉ ngơi của quý vị!",
    link: "/",
    image: "/images/home/phong1.jpeg",
  },
  {
    type: 2,
    subTitle: "Homestay",
    title: "Dự án homestay Đà Lạt",
    summary:
      "🌟 Tạo điểm nhấn độc đáo: Với các bộ chăn ga gối nệm phong cách và đa dạng, chúng tôi sẽ giúp không gian homestay của bạn trở thành một nơi đặc biệt, tạo ấn tượng mạnh mẽ với mỗi khách hàng.",
    link: "/",
    image: "/images/home/phong2.jpeg",
  },
  {
    type: 2,
    subTitle: "Chung cư",
    title: "Dự án Căn hộ cao cấp",
    summary:
      "🏢 Tiết kiệm không gian: Với thiết kế thông minh và tối ưu hóa không gian, chúng tôi sẽ giúp căn hộ của bạn trở nên thoáng đãng hơn, tận dụng tối đa diện tích sử dụng.",
    link: "/",
    image: "/images/home/phong3.jpeg",
  },
];

export async function GET() {
  try {
    // const results = await pool.query(
    //   `SELECT * FROM qxqarhl4yzwm_anri.Projects;`,
    // );

    let json_response = {
      status: "success",
      data: projects,
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
    const query = `UPDATE Projects SET description='${data.description}',name='${data.name}',image='${data.image}',type='${data.type}' WHERE id='${data.id}'`;
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
    const query = `INSERT INTO qxqarhl4yzwm_anri.Projects (image, name, description, type) VALUES ('${data.image}','${data.name}','${data.description}','${data.type}');`;
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
    const query = `delete from qxqarhl4yzwm_anri.Projects where id = '${data.id}';`;
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
