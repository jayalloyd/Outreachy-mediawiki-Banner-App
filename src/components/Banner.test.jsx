
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Banner from "./Banner";
import React from "react";

describe("Banner Component", () => {
  const mockFormData = {
    bgColor: "#ff0000",
    bannerText: "I Love to do Code, Create & Innovate.",
    bannerCaption: "Write code. Change the world.",
    bannerImage: "",
    bannerTextFont: "Arial",
    bannerTextSize: "24px",
    bannerCaptionFont: "Verdana",
    bannerCaptionSize: "16px",
  };

  test("renders banner with correct text", () => {
    render(<Banner formData={mockFormData} />);

    expect(screen.getByText("I Love to do Code, Create & Innovate.")).toBeInTheDocument();
    expect(screen.getByText("Write code. Change the world.")).toBeInTheDocument();
  });

  test("applies correct styles", () => {
    render(<Banner formData={mockFormData} />);

    const bannerText = screen.getByText("I Love to do Code, Create & Innovate.");
    expect(bannerText).toHaveStyle(`font-family: Arial`);
    expect(bannerText).toHaveStyle(`font-size: 24px`);

    const bannerCaption = screen.getByText("Write code. Change the world.");
    expect(bannerCaption).toHaveStyle(`font-family: Verdana`);
    expect(bannerCaption).toHaveStyle(`font-size: 16px`);
  });
});