import PageLayout from "components/PageLayout";
import AnimatedText from "../../../components/AnimatedText";
import React from "react";
import { apiFetchProducts } from "../../../lib/api-request";
import ListProducts from "../../../components/ListProducts";

export default async function ProductsPage() {
  const data = await apiFetchProducts();

  return (
    <PageLayout>
      <div className="flex flex-col gap-4 mt-12 pb-7 px-7 sm:px-16 lg:px-32">
        <AnimatedText text={"t25"} className="!font-bold !text-[#40605be6]" />

        <ListProducts list={data} />
      </div>
    </PageLayout>
  );
}
