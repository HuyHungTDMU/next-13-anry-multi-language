import { NextResponse } from "next/server";
import imgPhong1 from "../../../../public/images/home/phong1.jpeg";
import imgPhong2 from "../../../../public/images/home/phong2.jpeg";
import imgPhong3 from "../../../../public/images/home/phong3.jpeg";

export async function GET() {
  try {
    const projects = [
      {
        type: 1,
        subTitle: "Khách Sạn",
        title: "Dự án khách sạn Mường Thanh",
        summary:
          "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
        link: "/",
        image: imgPhong1,
      },
      {
        type: 2,
        subTitle: "Homestay",
        title: "Dự án homestay Đà Lạt",
        summary:
          "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
        link: "/",
        image: imgPhong2,
      },
      {
        type: 2,
        subTitle: "Chung cư",
        title: "Dự án Căn hộ cao cấp",
        summary:
          "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
        link: "/",
        image: imgPhong3,
      },
    ];

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

export async function POST(request: Request) {
  try {
    const json = await request.json();

    let json_response = {
      status: "success",
      data: json,
    };
    return new NextResponse(JSON.stringify(json_response), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      let error_response = {
        status: "fail",
        message: "Feedback with title already exists",
      };
      return new NextResponse(JSON.stringify(error_response), {
        status: 409,
        headers: { "Content-Type": "application/json" },
      });
    }

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
