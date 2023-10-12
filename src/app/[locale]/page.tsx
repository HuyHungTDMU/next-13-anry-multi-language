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

import imgMuongThanh from "../../../public/images/parners/muong-thanh.png";
import imgHotel from "../../../public/images/parners/parner-2.png";
import imgPenhau from "../../../public/images/parners/penhau.jpeg";
import imgResort from "../../../public/images/parners/resort.png";
import imgMat_tien from "../../../public/images/parners/parner-1.png";
import imgPhongNgu from "../../../public/images/logoJP.jpg";
import imgPttxvn_ksmuongthanh from "../../../public/images/parners/ttxvn_ksmuongthanh.jpg";

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
      <div className="flex items-center text-dark w-full">
        <div className="w-full h-full inline-block z-0 bg-light pb-7 px-7 sm:px-16 lg:px-32">
          <div className="flex flex-col xl:flex-row items-center justify-between w-full gap-7 mt-10">
            <div className="xl:w-1/2 w-full">
              <Slideshow />
            </div>

            <div className="xl:w-1/2 w-full flex flex-col items-center self-center">
              <AnimatedText
                text="Nhà Sản Xuất Chuyên Nghiệp Đến Từ Nhật Bản"
                className="!text-6xl !text-left !font-serif !italic !text-[#2c7873]"
              />

              <p className="my-4 text-base font-medium">
                Được trang bị dây chuyền máy móc công nghệ hiện đại và đội ngũ
                kỹ thuật viên lành nghề, Anri cam kết sản xuất các sản phẩm chất
                lượng cao, đáp ứng mọi nhu cầu của khách hàng. <br />
                Công ty chú trọng vào việc nghiên cứu và phát triển các sản phẩm
                mới, đồng thời tạo ra sự khác biệt về kiểu dáng và chất lượng,
                đáp ứng mọi yêu cầu của khách hàng.
              </p>

              <div className="flex items-center mt-2 self-start gap-4">
                <Link
                  className="flex items-center bg-dark text-light hover:bg-white hover:text-dark border border-solid p-2.5 px-6 rounded-lg border-transparent hover:border-dark text-lg font-semibold"
                  href="/dummy.pdf"
                  target="_blank"
                  download={true}
                >
                  Resume
                </Link>
                <Link
                  className="text-lg font-medium capitalize text-dark underline"
                  href="/contact"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-7 text-dark text-base mt-7 flex flex-col items-center justify-center">
            <div className="w-full mt-5 flex items-center">
              <p className="text-xl text-left rounded-r-2xl px-4 py-1 font-normal bg-[#2c7873] text-white !font-serif !italic">
                Nhà Máy - Cơ Sở Vật Chất:
              </p>
            </div>

            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <p className="w-full">
                Khu vực sản xuất: Công ty có một khu vực sản xuất rộng lớn, được
                thiết kế và xây dựng theo tiêu chuẩn công nghiệp. Khu vực này
                được chia thành các phân xưởng khác nhau để tối ưu hóa quy trình
                sản xuất. Các phân xưởng này bao gồm khu vực cắt may, khu vực in
                ấn, khu vực thêu, và khu vực đóng gói.
                <br />
                <br />
                Máy móc và thiết bị: Công ty sở hữu một bộ máy móc hiện đại và
                công nghệ tiên tiến để hỗ trợ quy trình sản xuất. Bao gồm các
                thiết bị như máy cắt tự động, máy in ấn số, máy thêu tự động,
                máy đóng gói và các thiết bị hỗ trợ khác. Điều này giúp tối ưu
                hóa năng suất và đảm bảo chất lượng sản phẩm.
                <br />
                <br />
                Phòng nghiên cứu và phát triển (R&D): Công ty cũng đầu tư vào
                một phòng R&D để nghiên cứu và phát triển các mẫu chăn ga mới,
                cũng như cập nhật công nghệ sản xuất. Phòng R&D cũng đóng vai
                trò quan trọng trong việc cải thiện chất lượng và tính đa dạng
                của sản phẩm.
                <br />
                <br />
                Hệ thống kiểm soát chất lượng: Công ty áp dụng các tiêu chuẩn
                kiểm soát chất lượng nghiêm ngặt từ quy trình sản xuất cho đến
                sản phẩm cuối cùng. Điều này đảm bảo rằng chăn ga được sản xuất
                và cung cấp đáng tin cậy, tuân thủ các yêu cầu chất lượng cao.
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
              <p className="text-xl rounded-r-2xl px-4 py-1 font-normal bg-[#2c7873] text-white !font-serif !italic">
                Chất lượng hàng đầu:
              </p>
            </div>

            <div className="w-full flex gap-4">
              <Image
                src={imgVision}
                alt="imgMuongThanh"
                className="h-40 rounded-r-2xl w-auto"
              />

              <p className="text-left">
                Chúng tôi hiểu rằng việc lựa chọn chăn gối nệm đúng cho khách
                sạn của bạn có thể tạo ra sự khác biệt đáng kể trong sự hài lòng
                của khách hàng. <br />
                Vì vậy, tất cả các sản phẩm tại Khách Sạn LinenLux đều được sản
                xuất với tiêu chuẩn chất lượng cao nhất. <br />
                Chúng tôi luôn chọn lựa các nguyên liệu tốt nhất, kết hợp cùng
                sự khéo léo trong thiết kế để tạo ra những sản phẩm vượt qua sự
                mong đợi.
              </p>
            </div>

            <div className="text-2xl font-semibold gap-2 flex items-center pt-10 ">
              Đối tác hàng đầu:
              <span className="rounded-r-2xl px-4 py-1 font-normal bg-[#2c7873] text-white">
                Khách Sạn Mường Thanh
              </span>
            </div>

            <section>
              <ParallaxText baseVelocity={-5}>
                <div className="flex min-w-0 items-center gap-8 flex-nowrap">
                  <MotionImage
                    src={imgPenhau}
                    alt="imgMuongThanh"
                    whileHover={{ scale: 1.02 }}
                    className="h-44 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={imgHotel}
                    alt="imgMuongThanh"
                    whileHover={{ scale: 1.02 }}
                    className="h-44 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={imgMat_tien}
                    alt="imgMuongThanh"
                    whileHover={{ scale: 1.02 }}
                    className="h-32 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={imgMuongThanh}
                    alt="imgMuongThanh"
                    whileHover={{ scale: 1.02 }}
                    className="h-44 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={imgResort}
                    alt="imgMuongThanh"
                    whileHover={{ scale: 1.02 }}
                    className="h-44 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={imgPhongNgu}
                    alt="imgMuongThanh"
                    whileHover={{ scale: 1.02 }}
                    className="h-44 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                  <MotionImage
                    src={imgPttxvn_ksmuongthanh}
                    alt="imgMuongThanh"
                    whileHover={{ scale: 1.02 }}
                    className="h-44 px-3 py-2 bg-white rounded-2xl w-auto"
                  />
                </div>
              </ParallaxText>
            </section>

            <p className="w-full pb-10">
              Chúng tôi tự hào là đối tác đáng tin cậy của các khách sạn hàng
              đầu trong việc cung cấp các sản phẩm chất lượng cao như chăn, gối
              và nệm. <br />
              Với hơn một thập kỷ kinh nghiệm trong ngành, chúng tôi cam kết
              mang đến sự thoải mái và sang trọng cho trải nghiệm nghỉ ngơi của
              khách hàng.
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
