"use client";

import Image from "next/image";
import PageLayout from "components/PageLayout";
import Link from "next/link";
import imgContact from "../../../../public/images/projects/contact.png";
import { SvgLocation, SvgPhone } from "../../../components/Icons";

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="flex flex-col gap-4 xl:gap-x-8 xl:space-y-0 pb-7 px-7 sm:px-16 lg:px-32">
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-4 xl:space-y-0">
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2 flex flex-col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.212984627588!2d106.71924121029154!3d10.79499318931053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c2f8f30911%3A0x36ac5073f8c91acd!2sT%C3%B2a%20nh%C3%A0%20The%20Landmark%2081!5e0!3m2!1svi!2s!4v1691480340935!5m2!1svi!2s"
              loading="lazy"
              className="w-full h-[450px] border border-cyan-700 rounded-xl"
            ></iframe>
          </div>

          <div className="gap-7 pt-8 flex flex-col items-center justify-center">
            <Image src={imgContact} alt="contact" className="w-full h-auto" />

            <h2 className="mt-4 text-xl text-sky-600 font-bold">
              Công ty TNHH ANRY
            </h2>
            <p>Chuyên phân phối chăn ga gối nệm</p>
            <div className="flex gap-3 items-center justify-center text-white">
              <p className="text-zinc-900">SDT: 0987654321</p>
              <Link
                href="mailto:huyhung.tdm@gmail.com"
                className="h-14 w-14 bg-[#031E2F] animate-bounce hover:bg-transparent hover:text-dark hover:border-sky-600 border text-light flex items-center justify-center border-solid text-xs shadow-md rounded-full"
              >
                <SvgPhone />
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <SvgLocation /> Head Office: Charmington La Pointe Bldg.Block B,
              8-3A 181 Cao Thang Str., 12 Ward, Dist.10, Ho Chi Minh City,
              72510, Vietnam
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
