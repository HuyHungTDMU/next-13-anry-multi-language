import DialogPreViewImage from "./DialogPreviewImage";
import React, { useState } from "react";

export const ProductItem = ({
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
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const onPreviewImage = (image: any) => {
    setIsDialogOpen(true);
  };

  return (
    <article className="border border-[#2c7873] p-3 rounded-xl flex flex-col gap-2">
      <img
        alt={"Feature Project"}
        width={150}
        height={150}
        src={img}
        className={
          "cursor-pointer border-neutral-10/50 bg-neutral-10 aspect-square w-20 rounded-xl border object-cover object-center sm:aspect-[242/205] sm:w-full"
        }
        onClick={onPreviewImage}
      />

      <div className="flex flex-col">
        <span className="text-xl text-[#2c7873] font-semibold">{type}</span>

        <span className="text-base text-gray-900">{title}</span>
      </div>

      <DialogPreViewImage
        isOpen={isDialogOpen}
        onClose={closeDialog}
        image={img}
      />
    </article>
  );
};
