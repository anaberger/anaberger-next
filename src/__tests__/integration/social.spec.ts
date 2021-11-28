import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import Social from "../../components/Social/";

let documentBody: RenderResult;

describe("<Social/>", () => {
  beforeEach(() => {
    documentBody = render(<Social />);
  });

  it("has #d100d1 color title", () => {
    const style = window.getComputedStyle(title);
    expect(style.color).toEqual("#d100d1");
  });
});
