"use client";

import Image from "next/image";
import PageLayout from "components/PageLayout";
import AnimatedText from "../../../components/AnimatedText";
import imgBanner from "../../../../public/images/banner.jpg";
import { apiFetchNews } from "../../../lib/api-request";

import { motion } from "framer-motion";
import News1 from "../../../../public/images/news/News1.jpg";
import News2 from "../../../../public/images/news/News2.jpg";
import News3 from "../../../../public/images/news/News3.jpg";
import News4 from "../../../../public/images/news/News4.jpg";
import News5 from "../../../../public/images/news/News5.jpg";
import News6 from "../../../../public/images/news/News6.jpg";

import News7 from "../../../../public/images/news/News7.jpg";
import News8 from "../../../../public/images/news/News8.jpg";
import News9 from "../../../../public/images/news/News9.jpg";
import News10 from "../../../../public/images/news/News10.jpg";

import News11 from "../../../../public/images/news/News11.jpg";
import News12 from "../../../../public/images/news/News12.jpg";
import News13 from "../../../../public/images/news/News13.jpg";
import News14 from "../../../../public/images/news/News14.jpg";
import News15 from "../../../../public/images/news/News15.jpg";

import { useTranslations } from "next-intl";

const MotionImage = motion(Image);

export default function NewsPage() {
  const t = useTranslations("Index");
  return (
    <PageLayout>
      <div className="flex flex-col gap-4 xl:gap-x-8 xl:space-y-0 pb-7 px-7 sm:px-16 lg:px-32">
        <div className="h-[400px]">
          <Image src={imgBanner} alt="banner" className="max-h-[400px]" />
        </div>

        {/*<div className="space-y-7">
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            <Image
              src={News1}
              alt="about"
              className="w-full h-auto rounded-xl"
            />
            </div>
        </div>
        <div className="space-y-7">
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            <Image
              src={News2}
              alt="about"
              className="w-full h-auto rounded-xl"
            />
            </div>
        </div> 
        */}
        <AnimatedText
          text={"t44"}
          className="!-mt-12 !font-bold !text-[#031E2F]"
        />
        <AnimatedText
          text={"t50"}
          className="!-mt-12 !font-bold !text-[#031E2F]"
        />
        <AnimatedText
          text={"t51"}
          className="!-mt-12 !font-bold !text-[#031E2F]"
        />

        <div className="w-full flex flex-col items-center justify-center space-y-4">
          <p className="px-4 w-full"></p>
          <div className="gap-9 flex flex-wrap items-center justify-center">
            <Image
              src={News1}
              alt="imgMuongThanh"
              className="h-60 rounded-2xl w-auto"
            />

            <Image
              src={News2}
              alt="imgMuongThanh"
              className="h-60 rounded-2xl w-auto"
            />

            <Image
              src={News3}
              alt="imgMuongThanh"
              className="h-60 rounded-2xl w-auto"
            />

            <Image
              src={News4}
              alt="imgMuongThanh"
              className="h-60 rounded-2xl w-auto"
            />
            <Image
              src={News5}
              alt="imgMuongThanh"
              className="h-60 rounded-2xl w-auto"
            />

            <Image
              src={News6}
              alt="imgMuongThanh"
              className="h-60 rounded-2xl w-auto"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col gap-4">
          <p className="w-full">{t("t52")}</p>
        </div>

        <div className="flex lg:flex-row flex-col gap-4">
          <p className="w-full">{t("t53")}</p>
        </div>

        <AnimatedText
          text={"t44"}
          className="!-mt-12 !font-bold !text-[#031E2F]"
        />
        <AnimatedText
          text={"t54"}
          className="!-mt-12 !font-bold !text-[#031E2F]"
        />
        <AnimatedText
          text={"t55"}
          className="!-mt-12 !font-bold !text-[#031E2F]"
        />

        <div className="w-full flex flex-col items-center justify-center space-y-4">
          <p className="px-4 w-full"></p>
          <div className="gap-9 flex flex-wrap items-center justify-center">
            <Image
              src={News7}
              alt="imgMuongThanh"
              className="h-60 rounded-2xl w-auto"
            />

            <Image
              src={News8}
              alt="imgMuongThanh"
              className="h-60 rounded-2xl w-auto"
            />

            <Image
              src={News9}
              alt="imgMuongThanh"
              className="h-60 rounded-2xl w-auto"
            />

            <Image
              src={News10}
              alt="imgMuongThanh"
              className="h-60 rounded-2xl w-auto"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col gap-4">
          <p className="w-full">{t("t56")}</p>
        </div>
        <div className="flex lg:flex-row flex-col gap-4">
          <p className="w-full">{t("t57")}</p>
        </div>
        <AnimatedText
          text={"t44"}
          className="!-mt-12 !font-bold !text-[#031E2F]"
        />
        <AnimatedText
          text={"t58"}
          className="!-mt-12 !font-bold !text-[#031E2F]"
        />
        <AnimatedText
          text={"t59"}
          className="!-mt-12 !font-bold !text-[#031E2F]"
        />

        <div className="w-full flex flex-col items-center justify-center space-y-4">
          <p className="px-4 w-full"></p>
          <div className="gap-9 flex flex-wrap items-center justify-center">
            <Image
              src={News11}
              alt="imgMuongThanh"
              className="h-60 rounded-2xl w-auto"
            />

            <Image
              src={News12}
              alt="imgMuongThanh"
              className="h-60 rounded-2xl w-auto"
            />

            <Image
              src={News13}
              alt="imgMuongThanh"
              className="h-60 rounded-2xl w-auto"
            />

            <Image
              src={News14}
              alt="imgMuongThanh"
              className="h-60 rounded-2xl w-auto"
            />

            <Image
              src={News15}
              alt="imgMuongThanh"
              className="h-60 rounded-2xl w-auto"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col gap-4">
          <p className="w-full">{t("t60")}</p>
        </div>
        <div className="flex lg:flex-row flex-col gap-4">
          <p className="w-full">{t("t61")}</p>
        </div>
        <AnimatedText
          text={"t44"}
          className="!-mt-12 !font-bold !text-[#031E2F]"
        />
        <AnimatedText
          text={"t62"}
          className="!-mt-12 !font-bold !text-[#031E2F]"
        />
        <AnimatedText
          text={"t63"}
          className="!-mt-12 !font-bold !text-[#031E2F]"
        />
        <div className="flex lg:flex-row flex-col gap-4">
          <p className="w-full">{t("t64")}</p>
        </div>
        <div className="flex lg:flex-row flex-col gap-4">
          <p className="w-full">{t("t65")}</p>
        </div>
        <AnimatedText
          text={"t44"}
          className="!-mt-12 !font-bold !text-[#031E2F]"
        />
        <AnimatedText
          text={"t66"}
          className="!-mt-12 !font-bold !text-[#031E2F]"
        />
        <AnimatedText
          text={"t67"}
          className="!-mt-12 !font-bold !text-[#031E2F]"
        />
        <div className="flex lg:flex-row flex-col gap-4">
          <p className="w-full">{t("t68")}</p>
        </div>
        <div className="flex lg:flex-row flex-col gap-4">
          <p className="w-full">{t("t69")}</p>
        </div>
        <div className="flex lg:flex-row flex-col gap-4">
          <p className="w-full">{t("t70")}</p>
        </div>
        <div className="flex lg:flex-row flex-col gap-4">
          <p className="w-full">{t("t71")}</p>
        </div>
        <div className="flex lg:flex-row flex-col gap-4">
          <p className="w-full">{t("t72")}</p>
        </div>
        <AnimatedText
          text={"t44"}
          className="!-mt-12 !font-bold !text-[#031E2F]"
        />
        <AnimatedText
          text={"t41"}
          className="!-mt-12 !font-bold !text-[#031E2F]"
        />

        <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
          <iframe
            style={{
              width: "100%",
              height: "100%",
              border: "none", // Optional: remove iframe border
            }}
            src="https://www.youtube.com/embed/HYt_KghUyeU?si=s3yBSHT2r5F2wJpB"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>

        {/*<div dangerouslySetInnerHTML={{ __html: data }} />}
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
