import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = {
      gym_towel: [
        {
          subTitle: "Gym",
          title: "Gym towel 1",
          image: "/images/towel_products/gym_towel/gym_towel_1.jpeg",
        },
        {
          subTitle: "Gym",
          title: "Gym towel 2",
          image: "/images/towel_products/gym_towel/gym_towel_2.jpeg",
        },
        {
          subTitle: "Gym",
          title: "Gym towel 3",
          image: "/images/towel_products/gym_towel/gym_towel_3.jpeg",
        },
      ],
      hotel_towel: [
        {
          subTitle: "Hotel",
          title: "Hotel towel 1",
          image: "/images/towel_products/hotel_towel/hotel_towel_1.jpg",
        },
        {
          subTitle: "Hotel",
          title: "Hotel towel 2",
          image: "/images/towel_products/hotel_towel/hotel_towel_2.jpg",
        },
        {
          subTitle: "Hotel",
          title: "Hotel towel 3",
          image: "/images/towel_products/hotel_towel/hotel_towel_3.jpg",
        },
        {
          subTitle: "Hotel",
          title: "Hotel towel 4",
          image: "/images/towel_products/hotel_towel/hotel_towel_4.jpg",
        },
        {
          subTitle: "Hotel",
          title: "Hotel towel 5",
          image: "/images/towel_products/hotel_towel/hotel_towel_5.jpg",
        },
        {
          subTitle: "Hotel",
          title: "Hotel towel 6",
          image: "/images/towel_products/hotel_towel/hotel_towel_6.jpg",
        },
        {
          subTitle: "Hotel",
          title: "Hotel towel 7",
          image: "/images/towel_products/hotel_towel/hotel_towel_7.jpg",
        },
        {
          subTitle: "Hotel",
          title: "Hotel towel 8",
          image: "/images/towel_products/hotel_towel/hotel_towel_8.jpg",
        },
        {
          subTitle: "Hotel",
          title: "Hotel towel 9",
          image: "/images/towel_products/hotel_towel/hotel_towel_9.jpg",
        },
        {
          subTitle: "Hotel",
          title: "Hotel towel 10",
          image: "/images/towel_products/hotel_towel/hotel_towel_10.jpg",
        },
        {
          subTitle: "Hotel",
          title: "Hotel towel 11",
          image: "/images/towel_products/hotel_towel/hotel_towel_11.jpg",
        },
        {
          subTitle: "Hotel",
          title: "Hotel towel 12",
          image: "/images/towel_products/hotel_towel/hotel_towel_12.jpg",
        },
        {
          subTitle: "Hotel",
          title: "Hotel towel 13",
          image: "/images/towel_products/hotel_towel/hotel_towel_13.jpg",
        },
        {
          subTitle: "Hotel",
          title: "Hotel towel 14",
          image: "/images/towel_products/hotel_towel/hotel_towel_14.jpeg",
        },
        {
          subTitle: "Hotel",
          title: "Hotel towel 15",
          image: "/images/towel_products/hotel_towel/hotel_towel_15.jpeg",
        },
        {
          subTitle: "Hotel",
          title: "Hotel towel 16",
          image: "/images/towel_products/hotel_towel/hotel_towel_16.jpeg",
        },
        {
          subTitle: "Hotel",
          title: "Hotel towel 17",
          image: "/images/towel_products/hotel_towel/hotel_towel_17.jpg",
        },
        {
          subTitle: "Hotel",
          title: "Hotel towel 18",
          image: "/images/towel_products/hotel_towel/hotel_towel_18.jpg",
        },
        {
          subTitle: "Hotel",
          title: "Hotel towel 19",
          image: "/images/towel_products/hotel_towel/hotel_towel_19.jpg",
        },
        {
          subTitle: "Hotel",
          title: "Hotel towel 20",
          image: "/images/towel_products/hotel_towel/hotel_towel_20.jpg",
        },
        {
          subTitle: "Hotel",
          title: "Hotel towel 21",
          image: "/images/towel_products/hotel_towel/hotel_towel_21.jpg",
        },
        {
          subTitle: "Hotel",
          title: "Hotel towel 22",
          image: "/images/towel_products/hotel_towel/hotel_towel_22.jpg",
        },
      ],
      towel: [
        {
          subTitle: "Towel",
          title: "Towel 1",
          image: "/images/towel_products/khan/khan_1.jpg",
        },
        {
          subTitle: "Towel",
          title: "Towel 2",
          image: "/images/towel_products/khan/khan_2.jpg",
        },
        {
          subTitle: "Towel",
          title: "Towel 3",
          image: "/images/towel_products/khan/khan_3.jpg",
        },
        {
          subTitle: "Towel",
          title: "Towel 4",
          image: "/images/towel_products/khan/khan_4.jpg",
        },
        {
          subTitle: "Towel",
          title: "Towel 5",
          image: "/images/towel_products/khan/khan_5.jpg",
        },
        {
          subTitle: "Towel",
          title: "Towel 6",
          image: "/images/towel_products/khan/khan_6.jpg",
        },
        {
          subTitle: "Towel",
          title: "Towel 7",
          image: "/images/towel_products/khan/khan_7.jpg",
        },
        {
          subTitle: "Towel",
          title: "Towel 8",
          image: "/images/towel_products/khan/khan_8.jpg",
        },
        {
          subTitle: "Towel",
          title: "Towel 9",
          image: "/images/towel_products/khan/khan_9.jpg",
        },
      ],
      linen: [
        {
          subTitle: "Linen",
          title: "Linen 1",
          image: "/images/towel_products/linen/linen_1.jpg",
        },
        {
          subTitle: "Linen",
          title: "Linen 2",
          image: "/images/towel_products/linen/linen_2.jpg",
        },
        {
          subTitle: "Linen",
          title: "Linen 3",
          image: "/images/towel_products/linen/linen_3.jpg",
        },
        {
          subTitle: "Linen",
          title: "Linen 4",
          image: "/images/towel_products/linen/linen_4.jpg",
        },
        {
          subTitle: "Linen",
          title: "Linen 5",
          image: "/images/towel_products/linen/linen_5.jpg",
        },
        {
          subTitle: "Linen",
          title: "Linen 6",
          image: "/images/towel_products/linen/linen_6.jpg",
        },
        {
          subTitle: "Linen",
          title: "Linen 7",
          image: "/images/towel_products/linen/linen_7.jpg",
        },
        {
          subTitle: "Linen",
          title: "Linen 8",
          image: "/images/towel_products/linen/linen_8.jpg",
        },
        {
          subTitle: "Linen",
          title: "Linen 9",
          image: "/images/towel_products/linen/linen_9.jpg",
        },
        {
          subTitle: "Linen",
          title: "Linen 10",
          image: "/images/towel_products/linen/linen_10.PNG",
        },
        {
          subTitle: "Linen",
          title: "Linen 11",
          image: "/images/towel_products/linen/linen_11.webp",
        },
        {
          subTitle: "Linen",
          title: "Linen 12",
          image: "/images/towel_products/linen/linen_12.webp",
        },
        {
          subTitle: "Linen",
          title: "Linen 13",
          image: "/images/towel_products/linen/linen_13.webp",
        },
        {
          subTitle: "Linen",
          title: "Linen 14",
          image: "/images/towel_products/linen/linen_14.webp",
        },
        {
          subTitle: "Linen",
          title: "Linen 15",
          image: "/images/towel_products/linen/linen_15.webp",
        },
        {
          subTitle: "Linen",
          title: "Linen 16",
          image: "/images/towel_products/linen/linen_16.webp",
        },
        {
          subTitle: "Linen",
          title: "Linen 17",
          image: "/images/towel_products/linen/linen_17.webp",
        },
      ],
      swimming_towel: [
        {
          subTitle: "Swimming",
          title: "Swimming towel 1",
          image: "/images/towel_products/swimming_towel/swimming_towel_1.jpg",
        },
        {
          subTitle: "Swimming",
          title: "Swimming towel 2",
          image: "/images/towel_products/swimming_towel/swimming_towel_2.jpg",
        },
        {
          subTitle: "Swimming",
          title: "Swimming towel 3",
          image: "/images/towel_products/swimming_towel/swimming_towel_3.jpeg",
        },
        {
          subTitle: "Swimming",
          title: "Swimming towel 4",
          image: "/images/towel_products/swimming_towel/swimming_towel_4.jpeg",
        },
        {
          subTitle: "Swimming",
          title: "Swimming towel 5",
          image: "/images/towel_products/swimming_towel/swimming_towel_5.jpeg",
        },
        {
          subTitle: "Swimming",
          title: "Swimming towel 6",
          image: "/images/towel_products/swimming_towel/swimming_towel_6.jpg",
        },
        {
          subTitle: "Swimming",
          title: "Swimming towel 7",
          image: "/images/towel_products/swimming_towel/swimming_towel_7.jpg",
        },
      ],
    };

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
