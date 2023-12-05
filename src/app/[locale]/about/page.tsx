"use client";

import Image from "next/image";
import PageLayout from "components/PageLayout";
import { motion } from "framer-motion";
import imgAbout1 from "../../../../public/images/projects/about-1.jpg";
import imgAbout2 from "../../../../public/images/projects/about-2.jpg";
import imgAbout3 from "../../../../public/images/projects/about-3.png";
import imgPhong1 from "../../../../public/images/home/phong1.jpeg";
import imgPhong2 from "../../../../public/images/home/phong2.jpeg";
import imgPhong3 from "../../../../public/images/home/phong3.jpeg";
import imgPhong4 from "../../../../public/images/home/phong4.jpeg";
import imgPhong5 from "../../../../public/images/home/phong5.jpeg";
import imgPhong6 from "../../../../public/images/home/phong6.jpeg";
import imgPhong7 from "../../../../public/images/home/phong7.jpeg";
import imgPhong8 from "../../../../public/images/home/phong8.jpeg";
import imgPhong9 from "../../../../public/images/home/phong9.jpg";
import certificate1 from "../../../../public/images/certificate1.png";
import product from "../../../../public/images/product.png";
import AnimatedText from "../../../components/AnimatedText";
import { useTranslations } from "next-intl";

const MotionImage = motion(Image);

export default function AboutPage() {
  const t = useTranslations("Index");

  return (
    <PageLayout>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0 pb-7 px-7 sm:px-16 lg:px-32">
        <div className="flex flex-col items-center gap-7">
          <div className="flex flex-col gap-1 items-center justify-center">
            <h3 className="pt-4 text-2xl font-bold leading-8 !text-[#031E2F] tracking-tight">
              {t("t27")}
            </h3>

            <p className="!text-gray-800 !font-serif !italic">{t("t26")}</p>
          </div>

          <Image
            src={product}
            alt="certificate"
            className="border border-b-sky-600 w-full h-auto rounded-xl"
          />

          <div className="flex gap-4 flex-wrap items-center justify-center">
            <MotionImage
              src={imgPhong1}
              alt="imgMuongThanh"
              whileHover={{ scale: 1.05 }}
              className="h-24 rounded-2xl w-auto"
            />
            <MotionImage
              src={imgPhong2}
              alt="imgMuongThanh"
              whileHover={{ scale: 1.05 }}
              className="h-24 rounded-2xl w-auto"
            />
            <MotionImage
              src={imgPhong3}
              alt="imgMuongThanh"
              whileHover={{ scale: 1.05 }}
              className="h-24 rounded-2xl w-auto"
            />
            <MotionImage
              src={imgPhong9}
              alt="imgMuongThanh"
              whileHover={{ scale: 1.05 }}
              className="h-24 rounded-2xl w-auto"
            />
            <MotionImage
              src={imgPhong5}
              alt="imgMuongThanh"
              whileHover={{ scale: 1.05 }}
              className="h-24 rounded-2xl w-auto"
            />
            <MotionImage
              src={imgPhong6}
              alt="imgMuongThanh"
              whileHover={{ scale: 1.05 }}
              className="h-24 rounded-2xl w-auto"
            />
            <MotionImage
              src={imgPhong7}
              alt="imgMuongThanh"
              whileHover={{ scale: 1.05 }}
              className="h-24 rounded-2xl w-auto"
            />
            <MotionImage
              src={imgPhong8}
              alt="imgMuongThanh"
              whileHover={{ scale: 1.05 }}
              className="h-24 rounded-2xl w-auto"
            />
            <MotionImage
              src={imgPhong4}
              alt="imgMuongThanh"
              whileHover={{ scale: 1.05 }}
              className="h-24 rounded-2xl w-auto"
            />
          </div>
        </div>

        <div className="prose max-w-none pb-8 dark:prose-invert xl:col-span-2 flex flex-col">
          <AnimatedText
            text={"t32"}
            className="mb-5 !font-serif !italic !text-[#031E2F]"
          />

          <Image
            src={certificate1}
            alt="certificate"
            className="mb-14 border border-b-sky-600 w-full h-auto rounded-xl"
          />

          <AnimatedText
            text={"t33"}
            className="mb-5 !font-serif !italic !text-[#031E2F]"
          />

          <h2 className="mb-7 text-xl !font-serif !italic !text-[#031E2F]">
            {t("t28")}
          </h2>

          <div className="space-y-7">
            <div className="flex flex-col-reverse lg:flex-row gap-4">
              <p>{t("t29")}</p>
              <Image
                src={imgAbout1}
                alt="about"
                className="w-full h-auto rounded-xl"
              />
            </div>

            <div className="flex lg:flex-row flex-col gap-4">
              <Image
                src={imgAbout2}
                alt="about"
                className="w-full h-auto rounded-xl"
              />
              <p className="w-full">{t("t30")}</p>
            </div>
            <p>{t("t31")}</p>

            <Image
              src={imgAbout3}
              alt="about"
              className="w-auto h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
