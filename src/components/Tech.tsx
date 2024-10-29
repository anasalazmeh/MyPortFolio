import { technologies } from "../constants";
import Container from "../hoc/Container";
import { BallCanvas } from "./canvas";
const Tech = () => {
  return (
    <Container>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Tech;
