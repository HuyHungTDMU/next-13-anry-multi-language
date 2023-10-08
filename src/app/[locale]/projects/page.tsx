"use client";

import PageLayout from "components/PageLayout";
import AnimatedText from "../../../components/AnimatedText";
import { useEffect, useState } from "react";
import { FeatureProject } from "../../../components/FeatureProject";
import { apiFetchProjects } from "../../../lib/api-request";
import Loading from "../../../components/Loading";

export default function ProjectsPage() {
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
        <AnimatedText text="DỰ ÁN" className="!font-bold !text-[#2c7873]" />

        <div className="mt-4 flex flex-col items-center justify-center ">
          <div className="grid grid-cols-1 xl:grid-cols-2 justify-between gap-12">
            {data?.length ? (
              data.map((item: any, index: number) => (
                <FeatureProject
                  key={index}
                  type={item.subTitle}
                  title={item.title}
                  img={item.image}
                  link={item.link}
                  summary={item.summary}
                />
              ))
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
