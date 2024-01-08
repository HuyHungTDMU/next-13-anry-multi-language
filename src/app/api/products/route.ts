import { NextResponse } from "next/server";
import { pool } from "../../../lib/db";

const products = [
  {
    type: "gym_towel",
    subTitle: "Gym",
    title: "Gym towel 1",
    image: "/images/towel_products/gym_towel/gym_towel_1.jpeg",
  },
  {
    type: "gym_towel",
    subTitle: "Gym",
    title: "Gym towel 2",
    image: "/images/towel_products/gym_towel/gym_towel_2.jpeg",
  },
  {
    type: "gym_towel",
    subTitle: "Gym",
    title: "Gym towel 3",
    image: "/images/towel_products/gym_towel/gym_towel_3.jpeg",
  },
  {
    type: "hotel_towel",
    subTitle: "Hotel",
    title: "Hotel towel 1",
    image: "/images/towel_products/hotel_towel/hotel_towel_1.jpg",
  },
  {
    type: "hotel_towel",
    subTitle: "Hotel",
    title: "Hotel towel 2",
    image: "/images/towel_products/hotel_towel/hotel_towel_2.jpg",
  },
  {
    type: "hotel_towel",
    subTitle: "Hotel",
    title: "Hotel towel 3",
    image: "/images/towel_products/hotel_towel/hotel_towel_3.jpg",
  },
  {
    type: "hotel_towel",
    subTitle: "Hotel",
    title: "Hotel towel 4",
    image: "/images/towel_products/hotel_towel/hotel_towel_4.jpg",
  },
  {
    type: "hotel_towel",
    subTitle: "Hotel",
    title: "Hotel towel 5",
    image: "/images/towel_products/hotel_towel/hotel_towel_5.jpg",
  },
  {
    type: "hotel_towel",
    subTitle: "Hotel",
    title: "Hotel towel 6",
    image: "/images/towel_products/hotel_towel/hotel_towel_6.jpg",
  },
  {
    type: "hotel_towel",
    subTitle: "Hotel",
    title: "Hotel towel 7",
    image: "/images/towel_products/hotel_towel/hotel_towel_7.jpg",
  },
  {
    type: "hotel_towel",
    subTitle: "Hotel",
    title: "Hotel towel 8",
    image: "/images/towel_products/hotel_towel/hotel_towel_8.jpg",
  },
  {
    type: "hotel_towel",
    subTitle: "Hotel",
    title: "Hotel towel 9",
    image: "/images/towel_products/hotel_towel/hotel_towel_9.jpg",
  },
  {
    type: "hotel_towel",
    subTitle: "Hotel",
    title: "Hotel towel 10",
    image: "/images/towel_products/hotel_towel/hotel_towel_10.jpg",
  },
  {
    type: "hotel_towel",
    subTitle: "Hotel",
    title: "Hotel towel 11",
    image: "/images/towel_products/hotel_towel/hotel_towel_11.jpg",
  },
  {
    type: "hotel_towel",
    subTitle: "Hotel",
    title: "Hotel towel 12",
    image: "/images/towel_products/hotel_towel/hotel_towel_12.jpg",
  },
  {
    type: "hotel_towel",
    subTitle: "Hotel",
    title: "Hotel towel 13",
    image: "/images/towel_products/hotel_towel/hotel_towel_13.jpg",
  },
  {
    type: "hotel_towel",
    subTitle: "Hotel",
    title: "Hotel towel 14",
    image: "/images/towel_products/hotel_towel/hotel_towel_14.jpeg",
  },
  {
    type: "hotel_towel",
    subTitle: "Hotel",
    title: "Hotel towel 15",
    image: "/images/towel_products/hotel_towel/hotel_towel_15.jpeg",
  },
  {
    type: "hotel_towel",
    subTitle: "Hotel",
    title: "Hotel towel 16",
    image: "/images/towel_products/hotel_towel/hotel_towel_16.jpeg",
  },
  {
    type: "hotel_towel",
    subTitle: "Hotel",
    title: "Hotel towel 17",
    image: "/images/towel_products/hotel_towel/hotel_towel_17.JPG",
  },
  {
    type: "hotel_towel",
    subTitle: "Hotel",
    title: "Hotel towel 18",
    image: "/images/towel_products/hotel_towel/hotel_towel_18.JPG",
  },
  {
    type: "hotel_towel",
    subTitle: "Hotel",
    title: "Hotel towel 19",
    image: "/images/towel_products/hotel_towel/hotel_towel_19.JPG",
  },
  {
    type: "hotel_towel",
    subTitle: "Hotel",
    title: "Hotel towel 20",
    image: "/images/towel_products/hotel_towel/hotel_towel_20.JPG",
  },
  {
    type: "hotel_towel",
    subTitle: "Hotel",
    title: "Hotel towel 21",
    image: "/images/towel_products/hotel_towel/hotel_towel_21.JPG",
  },
  {
    type: "hotel_towel",
    subTitle: "Hotel",
    title: "Hotel towel 22",
    image: "/images/towel_products/hotel_towel/hotel_towel_22.JPG",
  },
  {
    type: "towel",
    subTitle: "Towel",
    title: "Towel 1",
    image: "/images/towel_products/khan/khan_1.jpg",
  },
  {
    type: "towel",
    subTitle: "Towel",
    title: "Towel 2",
    image: "/images/towel_products/khan/khan_2.jpg",
  },
  {
    type: "towel",
    subTitle: "Towel",
    title: "Towel 3",
    image: "/images/towel_products/khan/khan_3.jpg",
  },
  {
    type: "towel",
    subTitle: "Towel",
    title: "Towel 4",
    image: "/images/towel_products/khan/khan_4.jpg",
  },
  {
    type: "towel",
    subTitle: "Towel",
    title: "Towel 5",
    image: "/images/towel_products/khan/khan_5.jpg",
  },
  {
    type: "towel",
    subTitle: "Towel",
    title: "Towel 6",
    image: "/images/towel_products/khan/khan_6.jpg",
  },
  {
    type: "towel",
    subTitle: "Towel",
    title: "Towel 7",
    image: "/images/towel_products/khan/khan_7.jpg",
  },
  {
    type: "towel",
    subTitle: "Towel",
    title: "Towel 8",
    image: "/images/towel_products/khan/khan_8.jpg",
  },
  {
    type: "towel",
    subTitle: "Towel",
    title: "Towel 9",
    image: "/images/towel_products/khan/khan_9.jpg",
  },
  {
    type: "linen",
    subTitle: "Linen",
    title: "Linen 1",
    image: "/images/towel_products/linen/linen_1.jpg",
  },
  {
    type: "linen",
    subTitle: "Linen",
    title: "Linen 2",
    image: "/images/towel_products/linen/linen_2.jpg",
  },
  {
    type: "linen",
    subTitle: "Linen",
    title: "Linen 3",
    image: "/images/towel_products/linen/linen_3.jpg",
  },
  {
    type: "linen",
    subTitle: "Linen",
    title: "Linen 4",
    image: "/images/towel_products/linen/linen_4.jpg",
  },
  {
    type: "linen",
    subTitle: "Linen",
    title: "Linen 5",
    image: "/images/towel_products/linen/linen_5.jpg",
  },
  {
    type: "linen",
    subTitle: "Linen",
    title: "Linen 6",
    image: "/images/towel_products/linen/linen_6.jpg",
  },
  {
    type: "linen",
    subTitle: "Linen",
    title: "Linen 7",
    image: "/images/towel_products/linen/linen_7.jpg",
  },
  {
    type: "linen",
    subTitle: "Linen",
    title: "Linen 8",
    image: "/images/towel_products/linen/linen_8.jpg",
  },
  {
    type: "linen",
    subTitle: "Linen",
    title: "Linen 9",
    image: "/images/towel_products/linen/linen_9.jpg",
  },
  {
    type: "linen",
    subTitle: "Linen",
    title: "Linen 10",
    image: "/images/towel_products/linen/linen_10.PNG",
  },
  {
    type: "linen",
    subTitle: "Linen",
    title: "Linen 11",
    image: "/images/towel_products/linen/linen_11.webp",
  },
  {
    type: "linen",
    subTitle: "Linen",
    title: "Linen 12",
    image: "/images/towel_products/linen/linen_12.webp",
  },
  {
    type: "linen",
    subTitle: "Linen",
    title: "Linen 13",
    image: "/images/towel_products/linen/linen_13.webp",
  },
  {
    type: "linen",
    subTitle: "Linen",
    title: "Linen 14",
    image: "/images/towel_products/linen/linen_14.webp",
  },
  {
    type: "linen",
    subTitle: "Linen",
    title: "Linen 15",
    image: "/images/towel_products/linen/linen_15.webp",
  },
  {
    type: "linen",
    subTitle: "Linen",
    title: "Linen 16",
    image: "/images/towel_products/linen/linen_16.webp",
  },
  {
    type: "linen",
    subTitle: "Linen",
    title: "Linen 17",
    image: "/images/towel_products/linen/linen_17.webp",
  },
  {
    type: "swimming_towel",
    subTitle: "Swimming",
    title: "Swimming towel 1",
    image: "/images/towel_products/swimming_towel/swimming_towel_1.jpg",
  },
  {
    type: "swimming_towel",
    subTitle: "Swimming",
    title: "Swimming towel 2",
    image: "/images/towel_products/swimming_towel/swimming_towel_2.jpg",
  },
  {
    type: "swimming_towel",
    subTitle: "Swimming",
    title: "Swimming towel 3",
    image: "/images/towel_products/swimming_towel/swimming_towel_3.JPEG",
  },
  {
    type: "swimming_towel",
    subTitle: "Swimming",
    title: "Swimming towel 4",
    image: "/images/towel_products/swimming_towel/swimming_towel_4.jpeg",
  },
  {
    type: "swimming_towel",
    subTitle: "Swimming",
    title: "Swimming towel 5",
    image: "/images/towel_products/swimming_towel/swimming_towel_5.jpeg",
  },
  {
    type: "swimming_towel",
    subTitle: "Swimming",
    title: "Swimming towel 6",
    image: "/images/towel_products/swimming_towel/swimming_towel_6.jpg",
  },
  {
    type: "swimming_towel",
    subTitle: "Swimming",
    title: "Swimming towel 7",
    image: "/images/towel_products/swimming_towel/swimming_towel_7.jpg",
  },
];

export async function GET() {
  try {
    // const results = await pool.query(
    //   `SELECT * FROM qxqarhl4yzwm_anri.Products order by id desc;`,
    // );

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
