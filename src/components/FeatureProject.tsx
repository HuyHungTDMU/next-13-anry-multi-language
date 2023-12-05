"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export const FeatureProject = ({
  link,
  img,
  title,
  type,
  summary,
}: {
  link: string;
  img: string;
  title: string;
  type: string;
  summary: string;
}) => {
  const t = useTranslations("Index");

  return (
    <article className="border bg-[#031E2F] z-0 border-[#031E2F] pt-2 pb-6 pl-2 pr-6 rounded-3xl relative flex gap-4">
      <div className="w-56 flex flex-col gap-3 justify-around items-center">
        <Link href={"#"}>
          <motion.img
            src={img}
            alt={"Feature Project"}
            className="w-52 h-auto rounded-3xl cursor-pointer"
            whileHover={{ scale: 1.02 }}
          />
        </Link>
        <Link
          href={"#"}
          className="text-center w-40 bg-[#031E2F] text-gray-50 hover:bg-white hover:text-[#031E2F] border border-solid p-2.5 px-6 rounded-lg border-transparent hover:border-[#2c7873] text-lg font-semibold"
        >
          {t("t40")}
        </Link>
      </div>

      <div className="w-full flex flex-col items-left gap-2">
        <span className="text-xl text-[#031E2F] italic">{type}</span>
        <Link href={"#"}>
          <h2 className="text-3xl text-[#031E2F] font-semibold">{title}</h2>
        </Link>

        <p className="text-base text-dark line-clamp-4">{summary}</p>
      </div>

      <div className="w-[100%] h-[100%] bg-white -z-10 -top-3 -left-3 absolute border rounded-3xl border-[#031E2F]" />
    </article>
  );
};
