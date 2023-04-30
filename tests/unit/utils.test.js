import { hexToRGBA } from "@libs/utils";

describe("hexToRGBA", () => {
  it("computes correct color", () => {
    const rgbaColor = hexToRGBA("#33DB81", 255);
    expect(rgbaColor).toBe("rgba(51, 219, 129, 255)");
  });
});
