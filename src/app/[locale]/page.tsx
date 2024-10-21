"use client";

import { useTranslations } from "next-intl";
import PageLayout from "components/PageLayout";
import React, { useRef, useState } from "react";
import { Fade } from "react-slideshow-image";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import Link from "next/link";
import Image from "next/image";

import parner1 from "../../../public/images/parners/1.jpg";
import parner2 from "../../../public/images/parners/2.jpg";
import parner3 from "../../../public/images/parners/3.jpg";
import parner4 from "../../../public/images/parners/4.jpg";
import parner5 from "../../../public/images/parners/5.jpg";
import parner6 from "../../../public/images/parners/6.jpg";
import parner7 from "../../../public/images/parners/7.jpg";
import parner8 from "../../../public/images/parners/8.jpg";
import parner9 from "../../../public/images/parners/9.jpg";
import parner10 from "../../../public/images/parners/10.jpg";
import parner11 from "../../../public/images/parners/11.jpg";
import parner12 from "../../../public/images/parners/12.jpg";

import factory_1 from "../../../public/images/factory/factory_1.jpg";
import factory_2 from "../../../public/images/factory/factory_2.jpg";
import factory_3 from "../../../public/images/factory/factory_3.jpg";
import factory_4 from "../../../public/images/factory/factory_4.jpg";
import factory_5 from "../../../public/images/factory/factory_5.jpg";
import factory_6 from "../../../public/images/factory/factory_6.jpg";

import hospital1 from "../../../public/images/towel_products/hospital/hospital1.jpg";
import hospital2 from "../../../public/images/towel_products/hospital/hospital2.jpg";
import hospital3 from "../../../public/images/towel_products/hospital/hospital3.jpg";
import hospital4 from "../../../public/images/towel_products/hospital/hospital4.jpg";
import hospital5 from "../../../public/images/towel_products/hospital/hospital5.jpg";

import Banquet1 from "../../../public/images/towel_products/Banquet/Banquet1.jpg";
import Banquet2 from "../../../public/images/towel_products/Banquet/Banquet2.jpg";
import Banquet3 from "../../../public/images/towel_products/Banquet/Banquet3.jpg";

import Bath1 from "../../../public/images/towel_products/Bath/Bath1.jpg";
import Bath2 from "../../../public/images/towel_products/Bath/Bath2.jpg";
import Bath3 from "../../../public/images/towel_products/Bath/Bath3.jpg";
import Bath4 from "../../../public/images/towel_products/Bath/Bath4.jpg";
import Bath5 from "../../../public/images/towel_products/Bath/Bath5.jpg";

import Bed1 from "../../../public/images/towel_products/BedLinen/bed1.jpg";
import Bed2 from "../../../public/images/towel_products/BedLinen/bed2.jpg";
import Bed3 from "../../../public/images/towel_products/BedLinen/bed3.jpg";
import Bed4 from "../../../public/images/towel_products/BedLinen/bed4.jpg";
import Bed5 from "../../../public/images/towel_products/BedLinen/bed5.jpg";
import Bed6 from "../../../public/images/towel_products/BedLinen/bed6.jpg";
import Bed7 from "../../../public/images/towel_products/BedLinen/bed7.jpg";
import Bed8 from "../../../public/images/towel_products/BedLinen/bed8.jpg";

import imgVision from "../../../public/images/home/vision.jpeg";
import AnimatedText from "../../components/AnimatedText";
import HireMe from "../../components/HireMe";
import DialogPreViewFactory from "../../components/DialogPreviewFactory";
import ListBanner from "components/ListBanner";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


const MotionImage = motion(Image);

const images = [
  "https://ranemhanquoc.com/profiles/ranemhanquoccom/uploads/logo/1668771201_dai-ly-chan-ga-goi-nem-everon.jpg",
];

const Slideshow = () => {
  return (
    <div className="slide-container items-center justify-center w-full">
      <Fade
        canSwipe
        arrows={false}
        infinite
        prevArrow={
          <span className="text-dark rounded-full h-7 flex items-center justify-center shadow-2xl w-7 bg-white ml-4">{`<-`}</span>
        }
        nextArrow={
          <span className="text-dark rounded-full h-7 flex items-center justify-center shadow-2xl w-7 bg-white mr-4">{`->`}</span>
        }
      >
        {images.map((each, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <img
              className="rounded-xl max-h-80"
              style={{ width: "100%" }}
              src={each}
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};


function ParallaxText({
  children,
  baseVelocity = 100,
}: {
  children: any;
  baseVelocity: number;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-220, 100, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="overflow-hidden .max-w-\[460px\]">
      <motion.div
        className="flex flex-nowrap whitespace-nowrap gap-8"
        style={{ x }}
      >
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default function IndexPage() {
  const t = useTranslations("Index");

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<any>();

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const onPreviewImage = (image: any) => {
    setCurrentImage(image);
    setIsDialogOpen(true);
  };

  return (
    <PageLayout>
      <div className="items-center inline-block text-dark w-full">
        <div className="flex items-center justify-between w-full mt-4">
          <div className="w-full">
            {/* <Slideshow /> */}
            <ListBanner />
          </div>
        </div>
        <div className="w-full h-full z-0 bg-light pb-7 px-7 sm:px-16 lg:px-32">
          <div className="w-full flex items-center justify-center">
            <div className="w-4/4 flex flex-col items-center self-center mt-6 p-6 bg-neutral-50 border border-[#031E2F] rounded-2xl">
              <AnimatedText
                text={"t8"}
                className="!text-6xl !text-left !font-serif !italic !text-[#031E2F]"
              />
              <p className="my-4 text-base font-bold">{t("t7")}</p>
            </div>
          </div>

          <div className="space-y-7 text-dark text-base mt-7 flex flex-col items-center justify-center rounded bg-neutral-50">
            <div className="w-full flex items-center pt-10">
              <p className="text-xl rounded-r-2xl px-4 py-1 font-normal bg-[#031E2F] text-white !font-serif !italic">
                {t("t10")}:
              </p>
            </div>

            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <p className="px-4 w-full"></p>

              <div className="gap-9 flex flex-wrap">
                <div className = "head-text !-mt-12 !font-bold !text-[#031E2F] pt-10 flex flex-col items-center uppercase" >
                  <MotionImage
                    src={Bed1}
                    alt="imgMuongThanh"
                    whileHover={{ scale: 2}}
                    onClick={() => onPreviewImage(Bed1)}
                    className="h-60 rounded-2xl w-auto"
                  />
                   <h3> {t("t100")} </h3>
                </div>

                <div className = "head-text !-mt-12 !font-bold !text-[#031E2F] pt-10 flex flex-col items-center uppercase" >
                  <MotionImage
                    src={Bed2}
                    alt="imgMuongThanh"
                    whileHover={{ scale: 2 }}
                    onClick={() => onPreviewImage(Bed2)}
                    className="h-60 rounded-2xl w-auto"
                  />
                  <h3> {t("t101")} </h3>
                </div>
                <div className = "head-text !-mt-12 !font-bold !text-[#031E2F] pt-10 flex flex-col items-center uppercase" >
                  <MotionImage
                    src={Bed3}
                    alt="imgMuongThanh"
                    whileHover={{ scale: 2 }}
                    onClick={() => onPreviewImage(Bed3)}
                    className="h-60 rounded-2xl w-auto"
                  />
                  <h3> {t("t102")} </h3>
                </div>  
                <div className = "head-text !-mt-12 !font-bold !text-[#031E2F] pt-10 flex flex-col items-center uppercase" >
                  <MotionImage
                    src={Bed4}
                    alt="imgMuongThanh"
                    whileHover={{ scale: 2 }}
                    onClick={() => onPreviewImage(Bed4)}
                    className="h-60 rounded-2xl w-auto"
                  />
                  <h3> {t("t103")} </h3>
                </div>
                <div className = "head-text !-mt-12 !font-bold !text-[#031E2F] pt-10 flex flex-col items-center uppercase" >
                  <MotionImage
                    src={Bed5}
                    alt="imgMuongThanh"
                    whileHover={{ scale: 2 }}
                    onClick={() => onPreviewImage(Bed5)}
                    className="h-60 rounded-2xl w-auto"
                  />
                  <h3> {t("t104")} </h3>
                </div>  
                <div className = "head-text !-mt-12 !font-bold !text-[#031E2F] pt-10 flex flex-col items-center uppercase" >
                  <MotionImage
                    src={Bed6}
                    alt="imgMuongThanh"
                    whileHover={{ scale: 2 }}
                    onClick={() => onPreviewImage(Bed6)}
                    className="h-60 rounded-2xl w-auto"
                  />
                  <h3> {t("t105")} </h3>
                </div>  
              </div>
            </div>

            <div className="w-full flex items-center pt-10">
              <p className="text-xl rounded-r-2xl px-4 py-1 font-normal bg-[#031E2F] text-white !font-serif !italic">
                {t("t19")}:
              </p>
            </div> 
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <p className="px-4 w-full"></p>

              <div className="gap-9 flex flex-wrap items-center justify-center">
                <MotionImage
                  src={Bed8}
                  alt="imgMuongThanh"
                  whileHover={{ scale: 2 }}
                  onClick={() => onPreviewImage(Bed8)}
                  className="h-60 rounded-2xl w-auto"
                />
                <MotionImage
                  src={Bed7}
                  alt="imgMuongThanh"
                  whileHover={{ scale: 2 }}
                  onClick={() => onPreviewImage(Bed7)}
                  className="h-60 rounded-2xl w-auto"
                />
              </div>
            </div> 

            <div className="w-full flex items-center pt-10">
              <p className="text-xl rounded-r-2xl px-4 py-1 font-normal bg-[#031E2F] text-white !font-serif !italic">
                {t("t11")}:
              </p>
            </div>

            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <p className="px-4 w-full"></p>

              <div className="gap-9 flex flex-wrap items-center justify-center">
                <div className = "head-text !-mt-12 !font-bold !text-[#031E2F] pt-10 item-center justify-center flex flex-col" >
                  <MotionImage
                    src={Bath1}
                    alt="imgMuongThanh"
                    whileHover={{ scale: 2 }}
                    onClick={() => onPreviewImage(Bath1)}
                    className="h-60 rounded-2xl w-auto"
                  />
                  <h3> {t("t106")} </h3>
                </div>  
                <div className = "head-text !-mt-12 !font-bold !text-[#031E2F] pt-10 item-center justify-center flex flex-col" >
                  <MotionImage
                    src={Bath2}
                    alt="imgMuongThanh"
                    whileHover={{ scale: 2 }}
                    onClick={() => onPreviewImage(Bath2)}
                    className="h-60 rounded-2xl w-auto"
                  />
                  <h3> {t("t107")} </h3>
                </div>  
                <div className = "head-text !-mt-12 !font-bold !text-[#031E2F] pt-10 item-center justify-center flex flex-col" >
                  <MotionImage
                    src={Bath3}
                    alt="imgMuongThanh"
                    whileHover={{ scale: 2 }}
                    onClick={() => onPreviewImage(Bath3)}
                    className="h-60 rounded-2xl w-auto"
                  />
                  <h3> {t("t108")} </h3>
                </div>  
                <div className = "head-text !-mt-12 !font-bold !text-[#031E2F] pt-10 item-center justify-center flex flex-col" >
                  <MotionImage
                    src={Bath4}
                    alt="imgMuongThanh"
                    whileHover={{ scale: 2 }}
                    onClick={() => onPreviewImage(Bath4)}
                    className="h-60 rounded-2xl w-auto"
                  />
                  <h3> {t("t109")} </h3>
                </div>  
                <div className = "head-text !-mt-12 !font-bold !text-[#031E2F] pt-10 item-center justify-center flex flex-col" >
                  <MotionImage
                    src={Bath5}
                    alt="imgMuongThanh"
                    whileHover={{ scale: 2 }}
                    onClick={() => onPreviewImage(Bath5)}
                    className="h-60 rounded-2xl w-auto"
                  />
                  <h3> {t("t110")} </h3>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center pt-10">
              <p className="text-xl rounded-r-2xl px-4 py-1 font-normal bg-[#031E2F] text-white !font-serif !italic">
                {t("t13")}:
              </p>
            </div>

            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <p className="px-4 w-full"></p>

              <div className="gap-9 flex flex-wrap items-center justify-center">
                <div className = "head-text !-mt-12 !font-bold !text-[#031E2F] pt-10 item-center justify-center flex flex-col" >
                  <MotionImage
                    src={Banquet1}
                    alt="imgMuongThanh"
                    whileHover={{ scale: 2 }}
                    onClick={() => onPreviewImage(Banquet1)}
                    className="h-60 rounded-2xl w-auto"
                  />
                  <h3> {t("t111")} </h3>
                </div>
                <div className = "head-text !-mt-12 !font-bold !text-[#031E2F] pt-10 item-center justify-center flex flex-col" >
                  <MotionImage
                    src={Banquet2}
                    alt="imgMuongThanh"
                    whileHover={{ scale: 2 }}
                    onClick={() => onPreviewImage(Banquet2)}
                    className="h-60 rounded-2xl w-auto"
                  />
                  <h3> {t("t112")} </h3>
                </div>
                <div className = "head-text !-mt-12 !font-bold !text-[#031E2F] pt-10 item-center justify-center flex flex-col" >
                  <MotionImage
                    src={Banquet3}
                    alt="imgMuongThanh"
                    whileHover={{ scale: 2 }}
                    onClick={() => onPreviewImage(Banquet3)}
                    className="h-60 rounded-2xl w-auto"
                  />
                  <h3> {t("t113")} </h3>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center">
              <p className="text-xl text-left rounded-r-2xl px-4 py-1 font-normal bg-[#031E2F] text-white !font-serif !italic">
                {t("t12")}:
              </p>
            </div>

            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <p className="px-4 w-full"></p>
              <div className="gap-9 flex flex-wrap items-center justify-center">
                <div className = "head-text !-mt-12 !font-bold !text-[#031E2F] pt-10 item-center justify-center flex flex-col" >
                  <MotionImage
                    src={hospital1}
                    alt="imgMuongThanh"
                    whileHover={{ scale: 2 }}
                    onClick={() => onPreviewImage(hospital1)}
                    className="h-60 rounded-2xl w-auto"
                  />
                  <h3> {t("t114")} </h3>
                </div>
                <div className = "head-text !-mt-12 !font-bold !text-[#031E2F] pt-10 item-center justify-center flex flex-col" >
                <MotionImage
                  src={hospital2}
                  alt="imgMuongThanh"
                  whileHover={{ scale: 2 }}
                  onClick={() => onPreviewImage(hospital2)}
                  className="h-60 rounded-2xl w-auto"
                />
                <h3> {t("t114")} </h3>
                </div>
                <div className = "head-text !-mt-12 !font-bold !text-[#031E2F] pt-10 item-center justify-center flex flex-col" >
                  <MotionImage
                    src={hospital3}
                    alt="imgMuongThanh"
                    whileHover={{ scale: 2 }}
                    onClick={() => onPreviewImage(hospital3)}
                    className="h-60 rounded-2xl w-auto"
                  />
                  <h3> {t("t115")} </h3>
                </div>
                <div className = "head-text !-mt-12 !font-bold !text-[#031E2F] pt-10 item-center justify-center flex flex-col" >
                  <MotionImage
                    src={hospital4}
                    alt="imgMuongThanh"
                    whileHover={{ scale: 2 }}
                    onClick={() => onPreviewImage(hospital4)}
                    className="h-60 rounded-2xl w-auto"
                  />
                  <h3> {t("t116")} </h3>
                </div>
                <div className = "head-text !-mt-12 !font-bold !text-[#031E2F] pt-10 item-center justify-center flex flex-col" >
                  <MotionImage
                    src={hospital5}
                    alt="imgMuongThanh"
                    whileHover={{ scale: 2 }}
                    onClick={() => onPreviewImage(hospital5)}
                    className="h-60 rounded-2xl w-auto"
                  />
                  <h3> {t("t117")} </h3>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center pt-10">
              <p className="text-xl rounded-r-2xl px-4 py-1 font-normal bg-[#031E2F] text-white !font-serif !italic">
                {t("t17")}:
              </p>
            </div>

            <div className="gap-9 flex flex-wrap justify-left">
              <MotionImage
                src={imgVision}
                alt="imgMuongThanh"
                whileHover={{ scale: 2 }}
                className="h-60 rounded-r-2xl w-auto"
              />

              <p className="text-left">
                {t("t18")}
                <br />
                {t("t20")}
                <br />
                {t("t20")}
              </p>
            </div>

            <div className="text-2xl font-semibold gap-2 flex items-center pt-10 ">
              {t("t21")}
              <span className="rounded-r-2xl px-4 py-1 font-normal bg-[#031E2F] text-white">
                {t("t22")}
              </span>
            </div>

            <section>
              <ParallaxText baseVelocity={-5}>
                <div className="flex .max-w-\[460px\] items-center gap-8 flex-nowrap">
                  <MotionImage
                    src={parner1}
                    alt="parner1"
                    whileHover={{ scale: 1.5 }}
                    className="h-60 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={parner2}
                    alt="imgMuonparner2Thanh"
                    whileHover={{ scale: 1.5 }}
                    className="h-60 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={parner3}
                    alt="parner3"
                    whileHover={{ scale: 1.5 }}
                    className="h-60 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={parner4}
                    alt="parner4"
                    whileHover={{ scale: 1.5 }}
                    className="h-60 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={parner5}
                    alt="parner5"
                    whileHover={{ scale: 1.5 }}
                    className="h-60 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={parner6}
                    alt="parner6"
                    whileHover={{ scale: 1.5 }}
                    className="h-60 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={parner7}
                    alt="parner7"
                    whileHover={{ scale: 1.5 }}
                    className="h-60 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={parner8}
                    alt="parner8"
                    whileHover={{ scale: 1.5 }}
                    className="h-60 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={parner9}
                    alt="parner9"
                    whileHover={{ scale: 1.5 }}
                    className="h-60 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={parner10}
                    alt="parner10"
                    whileHover={{ scale: 1.5 }}
                    className="h-60 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={parner11}
                    alt="parner11"
                    whileHover={{ scale: 1.5 }}
                    className="h-60 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={parner12}
                    alt="parner12"
                    whileHover={{ scale: 1.5 }}
                    className="h-60 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                </div>
              </ParallaxText>
            </section>

            <p className="px-4 w-full pb-4">
              {t("t23")}
              <br />
              {t("t24")}
            </p>
          </div>

          <HireMe />
        </div>
      </div>

      <DialogPreViewFactory
        isOpen={isDialogOpen}
        onClose={closeDialog}
        image={currentImage}
      />
    </PageLayout>
  );
}
