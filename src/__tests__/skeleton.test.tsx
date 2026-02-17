import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Skeleton } from "../index";

describe("react-nano-skeleton", () => {
  test("imports correctly", () => {
    expect(Skeleton).toBeDefined();
  });

  test("renders base skeleton", () => {
    const { container } = render(<Skeleton height={20} />);
    expect(container.firstChild).toBeTruthy();
  });

  test("renders Card preset", () => {
    const { container } = render(<Skeleton.Card />);
    expect(container.firstChild).toBeTruthy();
  });
});
