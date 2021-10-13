import { render, fireEvent } from "@testing-library/react";
import Button from ".";

test("button rendering loading", () => {
  const { debug, getByText } = render(<Button loading>teste</Button>);

  fireEvent.click(getByText("teste"));
  debug();
});
