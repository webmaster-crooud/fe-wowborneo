import { cx } from "class-variance-authority";
import Image from "next/image";

interface GradientImageProps {
  src?: string;
  className?: string;
}

function Divider({ src, className = "" }: GradientImageProps) {
  return (
    <div className={cx(" w-full h-20 absolute z-10")}>
      <Image
        fill
        src={src ?? "/assets/dayak-divider.svg"}
        alt="divider"
        className={cx("w-full", className)}
      />
    </div>
  );
}

export default Divider;
