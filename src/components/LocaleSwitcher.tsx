"use client";

import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import React, { ChangeEvent, useTransition } from "react";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <label
      className={clsx(
        "relative text-white w-[55px] border border-neutral-50 rounded",
        isPending && "transition-opacity [&:disabled]:opacity-30",
      )}
    >
      <p className="sr-only">{t("label")}</p>

      <select
        className="inline-flex appearance-none bg-transparent py-1 pl-3 pr-6"
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {[
          { text: " 🇻🇳", id: "vn" },
          { text: " 🇬🇧", id: "en" },
          { text: " 🇯🇵", id: "jp" },
        ].map((cur) => (
          <option className="text-base" key={cur.id} value={cur.id}>
            {cur.text}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-2 top-[-1px]">⌄</span>
    </label>
  );
}
