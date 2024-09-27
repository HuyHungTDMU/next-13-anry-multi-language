"use client";

import Image from "next/image";
import PageLayout from "components/PageLayout";
import Link from "next/link";
import imgContact from "../../../../public/images/banner.jpg";
import { SvgFacebook, SvgLocation, SvgMail, SvgPhone, SvgStars } from "../../../components/Icons";

export default function ContactPage() {
  return (
    <PageLayout>

<div className="flex flex-col gap-4 xl:gap-x-8 xl:space-y-0 pb-7 px-7 sm:px-16 lg:px-32">
  <div className="h-[400px]">
    <Image
      src={imgContact}
      alt="banner"
      className="max-h-[400px]"
    />
  </div>
  <div className="gap-7 pt-8 w-3\/4 flex flex-col items-center justify-center w-full">
            <h2 className="mt-4 text-xl text-sky-600 font-bold">
              THANK YOU FOR YOUR MESSAGE. WE WILL BE IN TOUCH SHORTLY.
            </h2>
            <div className="flex flex-col text-center">
              <div className="flex gap-3 items-center justify-center text-white">
                <div  className="h-14 w-14 bg-[#031E2F] animate-bounce hover:bg-transparent hover:text-dark hover:border-sky-600 border text-light flex items-center justify-center border-solid text-xs shadow-md rounded-full">
                  <SvgPhone />
                </div>
              </div>
                <p className="text-zinc-900">090-900-0671 ( Japanese )</p>
                <p className="text-zinc-900">0903-824-785 (Vietnamese)</p>
              </div>
               
               <div className="flex items-left gap-2">
                <SvgLocation />
                <p className="text-zinc-900">Head Office: Charmington La Pointe Bldg.Block B, 8-3A</p>
                <p className="text-zinc-900">181 Cao Thang Str., 12 Ward, Dist.10, Ho Chi Minh City,72510, Vietnam</p>
               </div>
            <div className="flex items-left gap-2">
              <SvgLocation />
               <p className="text-zinc-900">Ha Noi Rep. Office V-Tower Bldg.302</p>
               <p className="text-zinc-900">649 Kim Ma Str., Ba Dinh Dist., Ha Noi City, 11112, Vietnam</p>
            </div>

            <div  className="flex items-left gap-2">
              <SvgMail />
               <p className="text-zinc-900">mailto:anri-info@jinno.co.jp</p>
  
            </div>

            
          </div>
</div>
      
      <div className="flex flex-col gap-4 xl:gap-x-8 xl:space-y-0 pb-7 px-7 sm:px-16 lg:px-32">
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert flex flex-col">
            <iframe
              src="https://maps.google.com/maps?q=%20Charmington%20La%20Pointe&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              loading="lazy"
              className="w-full h-[450px] border border-cyan-700 rounded-xl"
            ></iframe>
          </div>

      </div>
    </PageLayout>
  );
}
