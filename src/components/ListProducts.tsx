"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { ProductItem } from "./ProductItem";
import Loading from "./Loading";
import Tabs, { ITab } from "./Tabs";

export default function ListProducts({
  list,
  className = "",
}: {
  list: any[];
  className?: string;
}) {
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
    // console.log({ list });
    setData(list.filter((item: any) => item.type === currentTab.id));
  }, [currentTab]);

  return (
    <div className={`${className} flex flex-col gap-4`}>
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
  );
}
