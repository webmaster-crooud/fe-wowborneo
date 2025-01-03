import { cx } from "class-variance-authority";

export default function ContainerModal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "landscape:min-lg:px-72-d landscape:min-lg:pt-[5.417vw]",
        "px-24-m pt-80-m",
        className
      )}
    >
      {children}
    </div>
  );
}
