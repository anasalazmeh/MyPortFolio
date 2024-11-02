import { useEffect, useState } from "react";
import { technologies } from "../constants";
import Container from "../hoc/Container";
import { BallCanvas } from "./canvas";
const Tech = () => {
  const [mobile, setMonile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 767) {
      setMonile(true);
    }
  }, []);
  return (
    <Container>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => {
          if (mobile) {
            if (index < 8) {
              return (
                <div className="w-28 h-28" key={technology.name}>
                  <BallCanvas icon={technology.icon} />
                </div>
              );
            }
          } else {
            return (
              <div className="w-28 h-28" key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            );
          }
        })}
      </div>
    </Container>
  );
};

export default Tech;
