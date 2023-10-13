import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

export const SimpleProject = ({
  link,
  img,
  title,
  type,
}: {
  link: string;
  img: StaticImageData;
  title: string;
  type: string;
}) => {
  return (
    <article className="border bg-[#40605be6] z-0 border-[#40605be6] pt-4 pb-6 pl-2 pr-6 flex-col rounded-3xl relative flex gap-4">
      <div className="flex flex-col gap-3">
        <MotionImage
          src={img}
          alt={"Feature Project"}
          className="w-full h-auto rounded-3xl cursor-pointer"
          whileHover={{ scale: 1.02 }}
        />
        <Link
          href={link}
          className="text-gray-50 hover:text-[#40605be6] border-transparent border-b hover:border-dark w-28 text-lg font-semibold"
        >
          Visit Project
        </Link>
      </div>

      <div className="space-y-3">
        <span className="text-xl text-purple-900">{type}</span>

        <Link href={link}>
          <h2 className="text-3xl text-dark font-semibold">{title}</h2>
        </Link>
      </div>

      <div className="w-[100%] h-[100%] bg-white -z-10 -top-3 -left-3 absolute border rounded-3xl border-[#40605be6]" />
    </article>
  );
};
