"use client";
import { useEffect } from "react";
import anime from "animejs";
import { ParallaxProvider } from "react-scroll-parallax";
import { usePathname } from "next/navigation";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/virtual";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "photoswipe/dist/photoswipe.css";
import "rc-slider/assets/index.css";
import "../public/assets/css/main.scss";
import "../public/assets/custom.scss";
import "../public/assets/libs/@mdi/font/css/materialdesignicons.min.css"
import "../public/assets/libs/@iconscout/unicons/css/line.css"
import Context from "@/context/Context";
import BacktoTop from "@/components/common/BacktoTop";
import MobileMenu from "@/components/headers/component/MobileMenu";

// import Cart from "@/components/common/Cart";
// import ContactModal from "@/components/modals/ContactModal";
// import NewsletterModal from "@/components/modals/NewsletterModal";
// import SearchModal from "@/components/modals/SearchModal";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll("[data-anime]");

    const handleIntersection: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const dataAnime = element.getAttribute("data-anime") || "";

          const modifiedDataAnime = dataAnime.replace(
            /anime\.stagger\((\d+),\s*\{start:\s*(\d+)\}\)/,
            "$1,$2"
          );

          const parseAnimeData = (data: string) => {
            const settings: Record<string, string> = {};
            data.split(";").forEach((param) => {
              const [key, value] = param.split(":").map((item) => item.trim());
              if (key && value) {
                settings[key] = value;
              }
            });
            return settings;
          };

          const animeSettings = parseAnimeData(modifiedDataAnime);
          const targets = animeSettings.targets === ">*" ? element.children : element.querySelectorAll(animeSettings.targets);

          anime({
            loop: Boolean(animeSettings.loop),
            targets,
            translateX: JSON.parse(animeSettings.translateX || "[0, 0]"),
            translateY: JSON.parse(animeSettings.translateY || "[48, 0]"),
            opacity: [0, 1],
            easing: animeSettings.easing || "spring(1, 80, 10, 0)",
            duration: Number(animeSettings.duration) || 450,
            delay: animeSettings.delay ? (animeSettings.delay.includes(",")
              ? anime.stagger(Number(animeSettings.delay.split(",")[0]), { start: Number(animeSettings.delay.split(",")[1]) })
              : Number(animeSettings.delay))
              : 0,
          });

          observer.unobserve(element);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0 });
    elements.forEach((element) => observer.observe(element));

    return () => elements.forEach((element) => observer.unobserve(element));
  }, [pathname]);

  return (
    <html lang="en" dir="ltr">
      <body>
        <Context>
          <ParallaxProvider>{children}</ParallaxProvider>
          <MobileMenu />
          {/* 
          <ContactModal />
          <NewsletterModal />
          <SearchModal />
          <Cart /> */}
          <BacktoTop />
        </Context>
      </body>
    </html>
  );
}
