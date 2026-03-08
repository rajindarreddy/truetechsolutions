import { Outlet } from "react-router";
import Navbar from "./navbar";
import Footer from "./footer";
import ScrollToTop from "../ui/scroll-to-top";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050510]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}