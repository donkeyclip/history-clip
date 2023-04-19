import { CSSEffect } from "@donkeyclip/motorcortex";
export const moveRight = (
  right,
  selector,
  duration,
  delay = 0,
  easing = "linear",
  initialValues = undefined
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        right,
      },
      ...(initialValues && { initialValues: { right: initialValues } }),
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
