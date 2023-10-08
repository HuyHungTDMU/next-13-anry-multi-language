"use client";

import { useEffect } from "react";
import PageLayout from "components/PageLayout";

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageLayout>
      <div>Something went wrong {error.message}</div>
    </PageLayout>
  );
}
