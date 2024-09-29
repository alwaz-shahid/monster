import { ReactNode } from "react";
import BottomBar from "./BottomBar";
import Navbar from "./Navbar";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <div className="w-full h-px bg-finalChapterGray"></div>
      <BottomBar />
    </div>
  );
}
