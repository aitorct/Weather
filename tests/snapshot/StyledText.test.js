import React from "react";
import renderer from "react-test-renderer";
import StyledText from "@components/StyledText";

describe("StyledText", () => {
  it("renders header style correctly", () => {
    const tree = renderer
      .create(<StyledText style="header">StyledText test</StyledText>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders title style correctly", () => {
    const tree = renderer
      .create(<StyledText style="title">StyledText test</StyledText>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders subtitle style correctly", () => {
    const tree = renderer
      .create(<StyledText style="subtitle">StyledText test</StyledText>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders button style correctly", () => {
    const tree = renderer
      .create(<StyledText style="button">StyledText test</StyledText>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders text style correctly", () => {
    const tree = renderer
      .create(<StyledText style="text">StyledText test</StyledText>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
