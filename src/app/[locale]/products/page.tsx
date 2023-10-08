"use client";

import PageLayout from "components/PageLayout";
import AnimatedText from "../../../components/AnimatedText";
import { useEffect, useState } from "react";
import { apiFetchProducts } from "../../../lib/api-request";
import { ProductItem } from "../../../components/ProductItem";

export default function ProductsPage() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiFetchProducts(window.location.hostname);
        setData(response);
      } catch (error) {
        console.error("Error reading data:", error);
      }
    };

    fetchData().then();
  }, []);

  return (
    <PageLayout>
      <div className="flex flex-col gap-4 mt-12 pb-7 px-7 sm:px-16 lg:px-32">
        <AnimatedText
          text="Sản phẩm nổi bật"
          className="!font-bold !text-[#2c7873]"
        />

        <div className="mt-4 flex flex-col items-center justify-center ">
          <div className="grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 justify-between gap-7">
            {data.map((item: any, index: number) => (
              <ProductItem
                key={index}
                type={item.subTitle}
                title={item.title}
                img={item.image}
                link={item.link}
                summary={item.summary}
              />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
