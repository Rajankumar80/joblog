import { Outlet } from "react-router-dom";
import { Navbar1 as Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Toaster />
    </>
  );
}
