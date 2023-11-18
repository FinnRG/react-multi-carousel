import * as React from "react";

import { StateCallBack } from "./types";
import { LucideChevronLeft, LucideChevronRight } from "lucide-react";

interface LeftArrowProps {
  customLeftArrow?: React.ReactElement<any> | null;
  getState: () => StateCallBack;
  previous: () => void;
  disabled?: boolean;
  rtl?: boolean;
}
interface RightArrowProps {
  customRightArrow?: React.ReactElement<any> | null;
  getState: () => StateCallBack;
  next: () => void;
  disabled?: boolean;
  rtl?: boolean;
}

const LeftArrow = ({
  customLeftArrow,
  getState,
  previous,
  disabled,
  rtl
}: LeftArrowProps): React.ReactElement<any> => {
  if (customLeftArrow) {
    return React.cloneElement(customLeftArrow, {
      onClick: () => previous(),
      carouselState: getState(),
      disabled: disabled,
      rtl: rtl
    });
  }
  const rtlClassName = rtl ? "rtl" : "";

  return (
    <button
      aria-label="Go to previous slide"
      className={`react-multiple-carousel__arrow react-multiple-carousel__arrow--left ${rtlClassName}`}
      onClick={() => previous()}
      type="button"
      disabled={disabled}
    >
      <LucideChevronLeft size={35} color="whitesmoke" />
    </button>
  );
};
const RightArrow = ({
  customRightArrow,
  getState,
  next,
  disabled,
  rtl
}: RightArrowProps): React.ReactElement<any> => {
  if (customRightArrow) {
    return React.cloneElement(customRightArrow, {
      onClick: () => next(),
      carouselState: getState(),
      disabled: disabled,
      rtl: rtl
    });
  }
  const rtlClassName = rtl ? "rtl" : "";

  return (
    <button
      aria-label="Go to next slide"
      className={`react-multiple-carousel__arrow react-multiple-carousel__arrow--right ${rtlClassName}`}
      onClick={() => next()}
      type="button"
      disabled={disabled}
    >
      <LucideChevronRight size={35} color="whitesmoke" />
    </button>
  );
};

export { LeftArrow, RightArrow };
