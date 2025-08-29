import type { VariantProps } from "class-variance-authority";
import type React from "react";

export const iconvariant = cva("", {
  variats: {
    animate: {
      false: "",
      true: "animate-spin",
    },
  },
  defaultVariants: {
    animate: false,
  },
});

interface IconProps
  extends React.ComponentProps<"svg">,
    VariantProps<typeof iconvariant> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({
  svg: SvgComponent,
  animate,
  className,
  ...props
}: IconProps) {
  return (
    <SvgComponent className={iconvariant({ animate, className })} {...props} />
  );
}
