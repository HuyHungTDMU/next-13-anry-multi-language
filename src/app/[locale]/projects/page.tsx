import PageLayout from "components/PageLayout";
import AnimatedText from "../../../components/AnimatedText";
import { FeatureProject } from "../../../components/FeatureProject";
import Loading from "../../../components/Loading";
import { apiFetchProjects } from "../../../lib/api-request";

export default async function ProjectsPage() {
  const data = await apiFetchProjects();

  return (
    <PageLayout>
      <div className="flex flex-col gap-4 mt-12 pb-7 px-7 sm:px-16 lg:px-32">
        <AnimatedText text={"t39"} className="!font-bold !text-[#031E2F]" />

        <div className="mt-4 flex flex-col items-center justify-center ">
          {data?.length ? (
            <div className="grid grid-cols-1 xl:grid-cols-2 justify-between gap-12">
              {data.map((item: any, index: number) => (
                <FeatureProject
                  key={index}
                  type={item.subTitle}
                  title={item.title}
                  img={item.image}
                  link={item.image}
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
