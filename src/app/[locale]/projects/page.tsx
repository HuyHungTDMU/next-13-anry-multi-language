"use client";

import PageLayout from "components/PageLayout";
import AnimatedText from "../../../components/AnimatedText";
import { useEffect, useState } from "react";
import { FeatureProject } from "../../../components/FeatureProject";
import { apiFetchProjects } from "../../../lib/api-request";
import Loading from "../../../components/Loading";
import { useTranslations } from "next-intl";

export default function ProjectsPage() {
  const t = useTranslations("Index");
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiFetchProjects();
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
          text={t("t39")}
          className="!font-bold !text-[#40605be6]"
        />

        <div className="mt-4 flex flex-col items-center justify-center ">
          {data?.length ? (
            <div className="grid grid-cols-1 xl:grid-cols-2 justify-between gap-12">
              {data.map((item: any, index: number) => (
                <FeatureProject
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
