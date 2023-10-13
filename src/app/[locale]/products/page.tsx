"use client";

import PageLayout from "components/PageLayout";
import AnimatedText from "../../../components/AnimatedText";
import React, { useEffect, useState } from "react";
import { apiFetchProducts } from "../../../lib/api-request";
import { ProductItem } from "../../../components/ProductItem";
import Loading from "../../../components/Loading";
import Tabs, { ITab } from "../../../components/Tabs";
import { useTranslations } from "next-intl";

export default function ProductsPage() {
  const t = useTranslations("Index");
  const tabs = [
    { id: "gym_towel", name: t("t34") },
    { id: "hotel_towel", name: t("t35") },
    { id: "towel", name: t("t36") },
    { id: "linen", name: t("t37") },
    {
      id: "swimming_towel",
      name: t("t38"),
    },
  ];

  const [data, setData] = useState<any>([]);
  const [currentTab, setCurrentTab] = useState<ITab>(tabs[0]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiFetchProducts();
        setData(response[currentTab.id]);
      } catch (error) {
        console.error("Error reading data:", error);
      }
    };

    fetchData().then();
  }, [currentTab]);

  return (
    <PageLayout>
      <div className="flex flex-col gap-4 mt-12 pb-7 px-7 sm:px-16 lg:px-32">
        <AnimatedText
          text={t("t25")}
          className="!font-bold !text-[#40605be6]"
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
