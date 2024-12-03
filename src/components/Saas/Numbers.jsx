import { useState, useRef, useEffect } from "react";
import CountTo from "../CountTo";
import { useLocales } from "@/locales";

const numbers = [
  {
    "value": 5,
    "operator": "+",
    "title": {
      "part1": "Years",
      "part2": "of Experience"
    }
  },
  {
    "value": 70,
    "operator": "+",
    "title": {
      "part1": "Projects",
      "part2": "completed"
    }
  },
  {
    "value": 5,
    "operator": null,
    "title": {
      "part1": "Expert Advisors",
      "part2": "5 countries"
    }
  }
]
const Numbers = () => {
  const { t } = useLocales("about");

  const numbersSectionRef = useRef(null);
  const [position, setPosition] = useState({ from: 3000, to: 3340 });

  useEffect(() => {
    const numbersSection = numbersSectionRef.current;
    const numbersSectionHeight = numbersSection.offsetHeight;
    const numbersSectionTop = numbersSection.offsetTop;

    const Position = {
      from: numbersSectionTop - numbersSectionHeight - 850,
      to: numbersSectionTop + numbersSectionHeight,
    };

    setPosition(Position);
  }, []);

  return (
    <section className="numbers style-6" ref={numbersSectionRef}>
      <div className="container">
        <div className="content pb-100 border-1 border-bottom brd-gray">
          <div className="row">
            {numbers.map((number, index) => (
              <div className="col-lg-4" key={index}>
                <div className="number-card style-6">
                  <h2 className="me-4 color-main5">
                    <CountTo
                      className="counter"
                      from={0}
                      to={number.value}
                      speed={1500}
                      position={position}
                    />
                    {number.operator && <span> +</span>}
                  </h2>
                  <div className="text">
                    {number.title.part1} <br /> {number.title.part2}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
