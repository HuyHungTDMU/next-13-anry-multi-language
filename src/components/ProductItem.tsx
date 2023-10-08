import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

export const ProductItem = ({
  link,
  img,
  title,
  type,
  summary,
}: {
  link: string;
  img: StaticImageData;
  title: string;
  type: string;
  summary: string;
}) => {
  return (
    <article className="border border-[#2c7873] p-3 rounded-xl flex flex-col gap-2">
      <div className="ease-in duration-300 relative flex">
        <MotionImage
          alt={"Feature Project"}
          width={150}
          whileHover={{ scale: 1.05 }}
          height={150}
          src={img}
          className={
            "border-neutral-10/50 bg-neutral-10 aspect-square w-20 rounded-xl border object-cover object-center sm:aspect-[242/205] sm:w-full"
          }
        />
      </div>

      <div className="flex flex-col">
        <span className="text-xl text-[#2c7873] font-semibold">{type}</span>

        <span className="text-base text-gray-900">{title}</span>
      </div>
    </article>
  );
};
