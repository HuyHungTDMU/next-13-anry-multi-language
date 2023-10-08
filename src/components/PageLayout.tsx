import { ReactNode } from "react";
import TransitionEffectScreen from "./TransitionEffectScreen";

type Props = {
  children?: ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <div className="mt-20">
      <TransitionEffectScreen />
      <div>{children}</div>
    </div>
  );
}
