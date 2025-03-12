import About from "@/components/innerpages/About";
import Brands from "@/components/common/Brands2";
import About2 from "@/components/innerpages/About2";
import AboutValues from "@/components/innerpages/AboutValues";
import Feedback from "@/components/homes/home-2/Feedback";
import Timeline from "@/components/homes/home-1/Timeline";
import Team from "@/components/homes/home-1/Team";
import Cta from "@/components/innerpages/Cta";
export const metadata = {
  title: "About Us.",
  description: "About Us.",
};
export default function AboutPage() {
  return (
    <>
      <About />
      <div
        id="clients_brands"
        className="clients-brands section panel overflow-hidden"
      >
        <div className="section-outer panel pb-6 xl:pb-9">
          <div className="container max-w-xl">
            <div className="section-inner panel">
              <div
                className="block-panel panel"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
              >
                <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
                  <Brands />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About2 />
      <AboutValues />
      <Feedback />
      <Timeline />
      <Team />
      <Cta />
    </>
  );
}
