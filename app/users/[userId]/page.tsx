"use client";

import { Suspense } from "react";
import type { Metadata } from "next";
import { User } from "@/types";
import getUser from "@/services/getUser";
import { MetaTags } from "./head";
import { useStepsProgress } from "@/providers";
// import { usePageContext } from "@/providers";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const value = useStepsProgress();

  const setValue = useStepsProgress()?.setValueStep;
  console.log(value?.valueStep, "fsdfsdfsdf");
  const test = () => {
    // setValue(2);
  console.log(value?.valueStep, "fsdfsdfsdf");

  };
  const userData: Promise<User> = getUser(userId);
  const user = await userData;

  return (
    <>
      {/* <MetaTags title={"quang test"} description={"co nhieu tien"} /> */}
      <h2 onClick={test}>{user.name}</h2>
    </>
  );
}
