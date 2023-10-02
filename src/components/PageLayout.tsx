import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import TransitionEffectScreen from "./TransitionEffectScreen";

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function PageLayout({ children, title }: Props) {
  const t = useTranslations("PageLayout");

  return (
    <div className="bg-light w-full flex flex-col">
      <TransitionEffectScreen />
      <div className="h-screen">{children}</div>
    </div>
  );
}
