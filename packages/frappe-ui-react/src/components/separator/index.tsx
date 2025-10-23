import * as SeparatorPrimitive from "@radix-ui/react-separator";

const Separator = ({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorPrimitive.SeparatorProps) => (
  <SeparatorPrimitive.Root
    decorative={decorative}
    orientation={orientation}
    className={`shrink-0 bg-slate-200 ${
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]"
    } ${className}`}
    {...props}
  />
);

export default Separator;
