"use client";

import Image from "next/image";
import PageLayout from "components/PageLayout";
import AnimatedText from "../../../components/AnimatedText";
import imgBanner from "../../../../public/images/banner.jpg";
import { useEffect, useState } from "react";
import { apiFetchNews } from "../../../lib/api-request";
import Loading from "../../../components/Loading";
import { useTranslations } from "next-intl";

export default function NewsPage() {
  const t = useTranslations("Index");
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiFetchNews();
        setData(response);
      } catch (error) {
        console.error("Error reading data:", error);
      }
    };

    fetchData().then();
  }, []);

  return (
    <PageLayout>
      <div className="flex flex-col gap-4 xl:gap-x-8 xl:space-y-0 pb-7 px-7 sm:px-16 lg:px-32">
        <div className="h-[500px]">
          <Image
            fill={true}
            src={imgBanner}
            alt="banner"
            className="max-h-[500px]"
          />
        </div>

        <AnimatedText
          text={t("t41")}
          className="!-mt-12 !font-bold !text-[#40605be6]"
        />

        {data?.length ? (
          <div dangerouslySetInnerHTML={{ __html: data }} />
        ) : (
          <Loading />
        )}
      </div>
    </PageLayout>
  );
}
