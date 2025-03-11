import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";

interface LayoutProps {
  children: React.ReactNode;
}
export const metadata = {
  title: "Peering",
  description: "Peering ",
};
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl-max dom-ready">
      <Header2 />
      <div id="wrapper" className="wrap">
        {children}
      </div>
      <Footer2 />
    </div>
  );
}
