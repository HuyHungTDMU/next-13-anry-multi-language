import Image from "next/image";
import PageLayout from "components/PageLayout";
import AnimatedText from "../../../components/AnimatedText";
import imgBanner from "../../../../public/images/banner.jpg";
import { apiFetchNews } from "../../../lib/api-request";
import Loading from "../../../components/Loading";

export default async function NewsPage() {
  const data = await apiFetchNews();

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
          text={"t41"}
          className="!-mt-12 !font-bold !text-[#40605be6]"
        />

        {data?.length ? (
          data.map((item: any, index: number) => (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </PageLayout>
  );
}
