import React, { useState } from "react";
import classnames from "classnames";
import type { PickerPropsWithHTMLAttributes } from "./Picker.types";
import useStyles from "../../hooks/useStyles";

const Picker = ({
  data = [],
  className,
  children,
  ...props
}: PickerPropsWithHTMLAttributes) => {
  const [currentIndex, setCureentIndex] = useState<number>();
  const [rotation, setRotation] = useState<number>();

  const [transformY, setTransformY] = useState<number>();
  const [lineSpacing, setLineSpacing] = useState<number>();
  const [rotation, setRotation] = useState<number>();
  const [rotation, setRotation] = useState<number>();
  const classes = useStyles(
    (theme) => ({
      picker: {},
      "picker-indicator": {
        zIndex: 3,
      },
      "picker-roller": {
        zIndex: 1,
        transformStyle: "preserve-3d",
        "& picker-roller-item": {
          backfaceVisibility: "hidden",
          position: "absolute",
          top: 0,
        },
      },

      "picker-content": {
        position: "absolute",
        height: "36px",
        "& picker-roller-item": {
          height: "36px",
        },
      },
    }),
    {},
    { classNamePrefix: "Picker" }
  );

  const setMove = (move, type, time) => {
    let updateMove = move + transformY;
    if (type === "end") {
      // touchend 滚动处理

      // 超出限定滚动距离修正
      if (updateMove > 0) {
        updateMove = 0;
      }
      if (updateMove < -(data.length - 1) * lineSpacing) {
        updateMove = -(data.length - 1) * lineSpacing;
      }

      // 设置滚动距离为lineSpacing的倍数值
      let endMove = Math.round(updateMove / lineSpacing) * lineSpacing;
      let deg = `${
        (Math.abs(Math.round(endMove / lineSpacing)) + 1) * rotation
      }deg`;
      setTransform(endMove, type, time, deg);
      this.timer = setTimeout(() => {
        this.setChooseValue(endMove);
      }, time / 2);
      setCureentIndex(Math.abs(Math.round(endMove / lineSpacing)) + 1);
    } else {
      // touchmove 滚动处理
      let deg = "0deg";
      if (updateMove < 0) {
        deg = `${(Math.abs(updateMove / lineSpacing) + 1) * rotation}deg`;
      } else {
        deg = `${(-updateMove / lineSpacing + 1) * rotation}deg`;
      }
      setTransform(updateMove, null, null, deg);
      setCureentIndex(Math.abs(Math.round(updateMove / lineSpacing)) + 1);
    }
  };
  const setTransform = (translateY = 0, type, time = 1000, deg) => {
    this.$refs.roller.style.transition =
      type === "end"
        ? `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`
        : "";
    this.$refs.roller.style.transform = `rotate3d(1, 0, 0, ${deg})`;
  };
  const setRollerStyle = (i) => ({
    transform: `rotate3d(1, 0, 0, ${
      -rotation * i
    }deg) translate3d(0px, 0px, 104px)`,
  });

  const isHidden = (i) => {
    return i >= currentIndex + 9 || i <= currentIndex - 8 ? true : false;
  };
  const cns = classnames(classes.picker, className);
  return (
    <>
      <div className="picker-list">
        <div className="picker-roller" ref="roller">
          {data.map((v, i) => (
            <div
              className="picker-roller-item"
              className="{'picker-roller-item-hidden': isHidden(i + 1)}"
              style={setRollerStyle(i + 1)}
              key="v.label"
            >
              {v.value}
            </div>
          ))}
        </div>
        <div className="picker-content">
          <div className="picker-list-panel" ref="list">
            {data.map((v, i) => (
              <div className="picker-item" key="v.label">
                {v.value}
              </div>
            ))}
          </div>
        </div>
        <div className="picker-indicator"></div>
      </div>
    </>
  );
};

export default Picker;
