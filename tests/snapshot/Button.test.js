import React from "react";
import renderer from "react-test-renderer";
import Button from "@components/Button";

describe("Button", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Button label="Button test" onPress={jest.fn} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
