import { NextResponse } from "next/server";
import imgPhong1 from "../../../../public/images/home/phong1.jpeg";
import imgPhong2 from "../../../../public/images/home/phong2.jpeg";
import imgPhong3 from "../../../../public/images/home/phong3.jpeg";

export async function GET() {
  try {
    const products = [
      {
        subTitle: "Khách Sạn",
        title: "Dự án khách sạn Mường Thanh",
        image: imgPhong1,
      },
      {
        subTitle: "Homestay",
        title: "Dự án homestay Đà Lạt",
        image: imgPhong2,
      },
      {
        subTitle: "Chung cư",
        title: "Dự án Căn hộ cao cấp",
        image: imgPhong3,
      },
      {
        subTitle: "Khách Sạn",
        title: "Dự án khách sạn Mường Thanh",
        image: imgPhong1,
      },
      {
        subTitle: "Homestay",
        title: "Dự án homestay Đà Lạt",
        image: imgPhong2,
      },
      {
        subTitle: "Chung cư",
        title: "Dự án Căn hộ cao cấp",
        image: imgPhong3,
      },
      {
        subTitle: "Khách Sạn",
        title: "Dự án khách sạn Mường Thanh",
        image: imgPhong1,
      },
      {
        subTitle: "Homestay",
        title: "Dự án homestay Đà Lạt",
        image: imgPhong2,
      },
      {
        subTitle: "Chung cư",
        title: "Dự án Căn hộ cao cấp",
        image: imgPhong3,
      },
    ];

    let json_response = {
      status: "success",
      data: products,
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
