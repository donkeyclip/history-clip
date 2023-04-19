import { CSSEffect } from "@donkeyclip/motorcortex";
export const moveBottom = (
  bottom,
  selector,
  duration,
  delay = 0,
  easing = "linear",
  initialValues = undefined
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        bottom,
      },
      ...(initialValues && { initialValues: { bottom: initialValues } }),
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
