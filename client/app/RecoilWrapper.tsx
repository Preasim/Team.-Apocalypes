"use client";

import { RecoilRoot } from "recoil";
import React from "react";
import { atom } from "recoil";

type RecoilRootWrapperProps = {
  children: React.ReactNode;
};

type userInfo = {
  name: string;
  email: string;
  phoneNum: string;
  UID: string;
};

export const textState = atom<userInfo>({
  key: "userInfo",
  default: {
    name: "김창규",
    email: "cankyu6@gmail.com",
    phoneNum: "010-255",
    UID: "853",
  },
});

export default function RecoilRootWrapper({
  children,
}: RecoilRootWrapperProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
