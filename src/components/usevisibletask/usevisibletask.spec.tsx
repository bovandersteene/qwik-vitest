import { createDOM } from "@builder.io/qwik/testing";
import { test, expect } from "vitest";
import { UseVisibleTaskComponent } from "./usevisibletask";

export const document: any = {};
test(`[UseVisibleTaskComponent]: Should render ⭐`, async () => {
  const { screen, render } = await createDOM();
  await render(<UseVisibleTaskComponent />);
  expect(screen.outerHTML).toContain("⭐");
});
