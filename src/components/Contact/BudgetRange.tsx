import { useLocales } from "@/locales";
import { useRouter } from "next/router";
import * as React from "react";

interface Mark {
  value: number;
  label: string;
}

//space between 2 value budget
const minDistance = 5;

interface BudgetRangeProp {
  handleBudgetChange: (value: string) => void;
}

export default function BudgetRange({ handleBudgetChange }: BudgetRangeProp) {
  const route = useRouter();
  const { t } = useLocales(["contact"]);

  //budget value
  const [value, setValue] = React.useState<number[]>([0, 50]);
  // thumb actived value
  const [activeThumb, setActiveThumb] = React.useState<number | null>(null);

  //reset budget value when change language
  React.useEffect(() => {
    setValue(JSON.parse(t("contact:markPoint.defaultRange")));
  }, [route.locale]);

  // define max value of range
  const maxValueRange = Number(t("contact:markPoint.maxRange"));

  // list mark-point
  const marks: Mark[] = [
    {
      value: Number(t("contact:markPoint.value.point1")),
      label: t("contact:markPoint.value.point1"),
    },
    {
      value: Number(t("contact:markPoint.value.point2")),
      label: t("contact:markPoint.value.point2"),
    },
    {
      value: Number(t("contact:markPoint.value.point3")),
      label: t("contact:markPoint.value.point3"),
    },
    {
      value: Number(t("contact:markPoint.value.point4")),
      label: t("contact:markPoint.value.point4"),
    },
    {
      value: Number(t("contact:markPoint.value.point5")),
      label: t("contact:markPoint.value.point5"),
    },
  ];

  // set active thumb when mouse down on thumb
  const handleMouseDown = (
    e: React.MouseEvent<HTMLElement, MouseEvent> | React.TouchEvent,
    thumbIndex: number
  ) => {
    e.preventDefault();
    setActiveThumb(thumbIndex);
  };

  // set active thumb is null when mouse up
  const handleMouseUp = () => {
    setActiveThumb(null);
  };

  // handle drag thumb when thumb 0 or 1 active
  const handleMouseMove = (event: MouseEvent) => {
    if (activeThumb !== null) {
      const newValue = calculateNewValue(event.clientX);
      handleChange(newValue, activeThumb);
    }
  };

  //handle mobi tablet event drag
  const handleTouchMove = (event: TouchEvent) => {
    if (activeThumb !== null) {
      const touch = event.touches[0];
      const newValue = calculateNewValue(touch.clientX);
      handleChange(newValue, activeThumb);
    }
  };

  //handle click on mark or rail
  const handleMarkClick = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    value?: number
  ) => {
    // click on mark point have value and click on rail need calculate
    const newValue = value ? value : calculateNewValue(e.clientX);
    handleChange(newValue);
  };

  // calculate value of thumb based on mouse position
  const calculateNewValue = (positionX: number) => {
    const rail = document.querySelector(".slider_rail") as HTMLElement;
    const railWidth = rail.offsetWidth;
    const railLeft = rail.getBoundingClientRect().left;

    let newValue = ((positionX - railLeft) / railWidth) * maxValueRange;
    newValue = Math.max(0, Math.min(maxValueRange, newValue));
    return Math.ceil(newValue);
  };

  // handle set value for budget range
  const handleChange = (newValue: number, activeThumb?: number) => {
    // check value nearest value 0 or value 1 to decide the value need change
    const checkThumb =
      Math.abs(newValue - value[0]) > Math.abs(newValue - value[1]) ? 1 : 0;

    if (activeThumb ? activeThumb === 0 : checkThumb === 0) {
      setValue([Math.min(newValue, value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue, value[0] + minDistance)]);
    }
  };

  React.useEffect(() => {
    handleBudgetChange(`${value[0]} - ${value[1]} ${t("label.unit")}`);
  }, [value]);

  // addevent get mouse position
  React.useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div className="form_budget">
      <label htmlFor="" className="form_contact_label mb-10">
        {`${t("label.budgets")}: ${value[0]} - ${value[1]} ${t("label.unit")}`}
      </label>
      <div className="budget_range">
        <div className="slider_rail" onClick={(e) => handleMarkClick(e)}></div>
        <span
          className="slider_process"
          style={{
            left: `${(value[0] / maxValueRange) * 100}%`,
            right: `${100 - (value[1] / maxValueRange) * 100}%`,
          }}
          onClick={(e) => handleMarkClick(e)}
        ></span>
        {marks.map((mark: Mark, index) => {
          return (
            <span
              key={index}
              style={{
                left: `${(mark.value / maxValueRange) * 100}%`,
              }}
              className="mark_point"
              onClick={(e) => handleMarkClick(e, mark.value)}
            >
              <span className="mark_value">{mark.label}</span>
            </span>
          );
        })}
        <span
          className="slider_thumb"
          data-thumb="0"
          style={{ left: `${(value[0] / maxValueRange) * 100}%` }}
          onMouseDown={(e) => {
            handleMouseDown(e, 0);
          }}
          onTouchStart={(e) => {
            handleMouseDown(e, 0);
          }}
        ></span>
        <span
          className="slider_thumb"
          data-thumb="1"
          style={{ left: `${(value[1] / maxValueRange) * 100}%` }}
          onMouseDown={(e) => {
            handleMouseDown(e, 1);
          }}
          onTouchStart={(e) => {
            handleMouseDown(e, 1);
          }}
        ></span>
      </div>
    </div>
  );
}
