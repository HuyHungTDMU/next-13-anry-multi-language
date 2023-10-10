"use client";

import PageLayout from "components/PageLayout";
import AnimatedText from "../../../components/AnimatedText";
import { useEffect, useState } from "react";
import { apiFetchProducts } from "../../../lib/api-request";
import { ProductItem } from "../../../components/ProductItem";
import Loading from "../../../components/Loading";
import Tabs, { ITab } from "../../../components/Tabs";

const tabs = [
  { id: "1", name: "Gym Towel" },
  { id: "2", name: "Gym Towel" },
  { id: "3", name: "Hotel Towel" },
  {
    id: "4",
    name: "Swimming Towel",
  },
  { id: "5", name: "Towel" },
];

export default function ProductsPage() {
  const [data, setData] = useState<any>([]);
  const [currentTab, setCurrentTab] = useState<ITab>();

  console.log(currentTab);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiFetchProducts();
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

        <Tabs tabs={tabs} onChanged={(tab) => setCurrentTab(tab)} />

        <div className="mt-4 flex flex-col items-center justify-center ">
          {data?.length ? (
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
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </PageLayout>
  );
}
