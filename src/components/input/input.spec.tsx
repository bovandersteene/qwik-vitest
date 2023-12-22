import { createDOM } from "@builder.io/qwik/testing";
import { test, expect } from "vitest";
import { InputComponent } from "./input";

test(`[InputComponent]: Should render ⭐`, async () => {
  const { screen, render,userEvent } = await createDOM();
  await render(<InputComponent />);
  expect(screen.querySelector('.result')?.outerHTML).toContain("");
  await userEvent('input', 'click');
  await userEvent('input', 'keydown', {key:'a'})
  await userEvent('input', 'keydown', {key:'b'})
  await userEvent('input', 'keydown', {key:'c'})
  expect(screen.querySelector('.result')?.outerHTML).toContain("abc");
});
