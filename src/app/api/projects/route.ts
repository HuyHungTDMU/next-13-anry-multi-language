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
          "🏨 Chào mừng đến với dự án chăn ga gối nệm dành riêng cho khách sạn của chúng tôi - nơi mang đến sự hoàn hảo cho mỗi không gian nghỉ ngơi của quý vị!",
        link: "/",
        image: imgPhong1,
      },
      {
        type: 2,
        subTitle: "Homestay",
        title: "Dự án homestay Đà Lạt",
        summary:
          "🌟 Tạo điểm nhấn độc đáo: Với các bộ chăn ga gối nệm phong cách và đa dạng, chúng tôi sẽ giúp không gian homestay của bạn trở thành một nơi đặc biệt, tạo ấn tượng mạnh mẽ với mỗi khách hàng.",
        link: "/",
        image: imgPhong2,
      },
      {
        type: 2,
        subTitle: "Chung cư",
        title: "Dự án Căn hộ cao cấp",
        summary:
          "🏢 Tiết kiệm không gian: Với thiết kế thông minh và tối ưu hóa không gian, chúng tôi sẽ giúp căn hộ của bạn trở nên thoáng đãng hơn, tận dụng tối đa diện tích sử dụng.",
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
