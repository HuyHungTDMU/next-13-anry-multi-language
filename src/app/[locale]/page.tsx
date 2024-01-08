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


import parner1 from "../../../public/images/parners/1.png";
import parner2 from "../../../public/images/parners/2.jpg";
import parner3 from "../../../public/images/parners/3.jpg";
import parner4 from "../../../public/images/parners/4.png";
import parner5 from "../../../public/images/parners/5.jpg";
import parner6 from "../../../public/images/parners/6.jpg";
import parner7 from "../../../public/images/parners/7.jpg";
import parner8 from "../../../public/images/parners/8.jpg";
import parner9 from "../../../public/images/parners/9.jpg";
import parner10 from "../../../public/images/parners/10.png";
import parner11 from "../../../public/images/parners/11.png";

import factory_1 from "../../../public/images/factory/factory_1.jpg";
import factory_2 from "../../../public/images/factory/factory_2.jpg";
import factory_3 from "../../../public/images/factory/factory_3.jpg";
import factory_4 from "../../../public/images/factory/factory_4.jpg";
import factory_5 from "../../../public/images/factory/factory_5.jpg";
import factory_6 from "../../../public/images/factory/factory_6.jpg";
import imgVision from "../../../public/images/home/vision.jpeg";
import AnimatedText from "../../components/AnimatedText";
import HireMe from "../../components/HireMe";
import DialogPreViewFactory from "../../components/DialogPreviewFactory";
import ListBanner from "components/ListBanner";

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
    <div className="overflow-hidden max-w-4xl">
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
      <img
        src="/images/banner.jpg"
        alt="banner"
        className="fixed top-0 -z-10 left-0 w-auto h-screen opacity-20 object-cover object-center"
      />

      <div className="flex items-center text-dark w-full">
        <div className="w-full h-full inline-block z-0 bg-light pb-7 px-7 sm:px-16 lg:px-32">
          <div className="flex flex-col xl:flex-row items-center justify-between w-full gap-7 mt-10">
            <div className="xl:w-1/2 w-full">
              {/* <Slideshow /> */}
              <ListBanner/>
            </div>

            <div className="xl:w-1/2 w-full flex flex-col items-center self-center p-6 bg-neutral-50 border border-[#031E2F] rounded-2xl">
              <AnimatedText
                text={"t7"}
                className="!text-6xl !text-left !font-serif !italic !text-[#031E2F]"
              />

              <p className="my-4 text-base font-medium">
                {t("t8")}
                <br />
                {t("t9")}
              </p>

              <div className="flex items-center mt-2 self-start gap-4">
                <Link
                  className="flex items-center bg-dark text-light hover:bg-white hover:text-dark border border-solid p-2.5 px-6 rounded-lg border-transparent hover:border-dark text-lg font-semibold"
                  href="/dummy.pdf"
                  target="_blank"
                  download={true}
                >
                  {t("t10")}
                </Link>
                <Link
                  className="text-lg font-medium capitalize text-dark underline"
                  href="/contact"
                >
                  {t("t11")}
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-7 text-dark text-base mt-7 flex flex-col items-center justify-center rounded bg-neutral-50">
            <div className="w-full flex items-center">
              <p className="text-xl text-left rounded-r-2xl px-4 py-1 font-normal bg-[#031E2F] text-white !font-serif !italic">
                {t("t12")}:
              </p>
            </div>

            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <p className="px-4 w-full">
                {t("t13")}
                <br />
                <br />
                {t("t14")}
                <br />
                <br />
                {t("t15")}
                <br />
                <br />
                {t("t16")}
              </p>

              <div className="gap-9 flex flex-wrap items-center justify-center">
                <MotionImage
                  src={factory_1}
                  alt="imgMuongThanh"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => onPreviewImage(factory_1)}
                  className="h-44 rounded-2xl w-auto"
                />
                <MotionImage
                  src={factory_2}
                  alt="imgMuongThanh"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => onPreviewImage(factory_2)}
                  className="h-44 rounded-2xl w-auto"
                />
                <MotionImage
                  src={factory_3}
                  alt="imgMuongThanh"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => onPreviewImage(factory_3)}
                  className="h-44 rounded-2xl w-auto"
                />
                <MotionImage
                  src={factory_4}
                  alt="imgMuongThanh"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => onPreviewImage(factory_4)}
                  className="h-44 rounded-2xl w-auto"
                />
                <MotionImage
                  src={factory_5}
                  alt="imgMuongThanh"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => onPreviewImage(factory_5)}
                  className="h-44 rounded-2xl w-auto"
                />
                <MotionImage
                  src={factory_6}
                  alt="imgMuongThanh"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => onPreviewImage(factory_6)}
                  className="h-44 rounded-2xl w-auto"
                />
              </div>
            </div>

            <div className="w-full flex items-center pt-10">
              <p className="text-xl rounded-r-2xl px-4 py-1 font-normal bg-[#031E2F] text-white !font-serif !italic">
                {t("t17")}:
              </p>
            </div>

            <div className="w-full flex gap-4">
              <Image
                src={imgVision}
                alt="imgMuongThanh"
                className="h-40 rounded-r-2xl w-auto"
              />

              <p className="text-left">
                {t("t18")}
                <br />
                {t("t19")}
                <br />
                {t("t20")}
              </p>
            </div>

            <div className="text-2xl font-semibold gap-2 flex items-center pt-10 ">
              {t("t21")}:
              <span className="rounded-r-2xl px-4 py-1 font-normal bg-[#031E2F] text-white">
                {t("t22")}
              </span>
            </div>

            <section>
              <ParallaxText baseVelocity={-5}>
                <div className="flex min-w-0 items-center gap-8 flex-nowrap">
                  <MotionImage
                    src={parner1}
                    alt="parner1"
                    whileHover={{ scale: 1.02 }}
                    className="h-44 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={parner2}
                    alt="imgMuonparner2Thanh"
                    whileHover={{ scale: 1.02 }}
                    className="h-44 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={parner3}
                    alt="parner3"
                    whileHover={{ scale: 1.02 }}
                    className="h-32 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={parner4}
                    alt="parner4"
                    whileHover={{ scale: 1.02 }}
                    className="h-44 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={parner5}
                    alt="parner5"
                    whileHover={{ scale: 1.02 }}
                    className="h-44 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={parner6}
                    alt="parner6"
                    whileHover={{ scale: 1.02 }}
                    className="h-44 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={parner7}
                    alt="parner7"
                    whileHover={{ scale: 1.02 }}
                    className="h-44 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={parner8}
                    alt="parner8"
                    whileHover={{ scale: 1.02 }}
                    className="h-44 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={parner9}
                    alt="parner9"
                    whileHover={{ scale: 1.02 }}
                    className="h-44 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={parner10}
                    alt="parner10"
                    whileHover={{ scale: 1.02 }}
                    className="h-44 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={parner11}
                    alt="parner11"
                    whileHover={{ scale: 1.02 }}
                    className="h-44 px-3 py-2 bg-white rounded-2xl w-auto"
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
