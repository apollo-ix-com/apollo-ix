import Link from "next/link";
// import Image from "next/image";

export default function Logo() {
  return (
    <Link className="panel text-none" href="/" style={{ width: 140 }}>
      {/* <Image
        className="dark:d-none"
        alt="Apollo-IX"
        src="/assets/images/common/logo-light.svg"
        width={117}
        height={40}
      />
      <Image
        className="d-none dark:d-block"
        alt="Apollo-IX"
        src="/assets/images/common/logo-dark.svg"
        width={117}
        height={40}
      /> */}
    </Link>
  );
}
