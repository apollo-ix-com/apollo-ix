import Header1 from "@/components/headers/Header1";
import Footer2 from "@/components/footers/Footer2";

interface LayoutProps {
  children: React.ReactNode;
}
export const metadata = {
  title: "Home - Apollo-IX ",
  description: "",
};
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
      <Header1 />
      <div id="wrapper" className="wrap">
        {children}
      </div>
      <Footer2 />
    </div>
  );
}
