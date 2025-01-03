import { cx } from "class-variance-authority";

export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("landscape:min-lg:px-128", "px-[5.581vw]", className)}>
      {children}
    </div>
  );
}
