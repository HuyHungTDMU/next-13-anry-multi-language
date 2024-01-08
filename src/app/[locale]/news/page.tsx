import Image from "next/image";
import PageLayout from "components/PageLayout";
import AnimatedText from "../../../components/AnimatedText";
import imgBanner from "../../../../public/images/banner.jpg";
import { apiFetchNews } from "../../../lib/api-request";

export default async function NewsPage() {
  const data = await apiFetchNews();

  return (
    <PageLayout>
      <div className="flex flex-col gap-4 xl:gap-x-8 xl:space-y-0 pb-7 px-7 sm:px-16 lg:px-32">
        <div className="h-[400px]">
          <Image
            fill={true}
            src={imgBanner}
            alt="banner"
            className="max-h-[400px]"
          />
        </div>

        <AnimatedText
          text={"t41"}
          className="!-mt-12 !font-bold !text-[#031E2F]"
        />

        <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
          <iframe
            style={{
              width: '100%',
              height: '100%',
              border: 'none', // Optional: remove iframe border
            }}
            src="https://www.youtube.com/embed/HYt_KghUyeU?si=s3yBSHT2r5F2wJpB"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>

        <div dangerouslySetInnerHTML={{ __html: data }} />
        {/*{data?.length ? (*/}
        {/*  data.map((item: any, index: number) => (*/}
        {/*    <div*/}
        {/*      key={index}*/}
        {/*      dangerouslySetInnerHTML={{ __html: item.content }}*/}
        {/*    />*/}
        {/*  ))*/}
        {/*) : (*/}
        {/*  <Loading />*/}
        {/*)}*/}
      </div>
    </PageLayout>
  );
}
