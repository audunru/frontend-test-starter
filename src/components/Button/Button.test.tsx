import Button from ".";

import { render, screen } from "@testing-library/react";

describe("Gitt at Button har tekst", () => {
  describe("Når Button vises", () => {
    it("Så er knapp med tekst synlig", () => {
      render(<Button>{"Hallo"}</Button>);

      const button = screen.getByRole("button", { name: "Hallo" });

      expect(button).toBeVisible();
    });
  });
});
