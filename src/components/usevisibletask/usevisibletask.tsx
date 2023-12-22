import { component$, useVisibleTask$ } from "@builder.io/qwik";

export const UseVisibleTaskComponent = component$(() => {
  useVisibleTask$(() => {
    console.log("the visible task");
    // This is failing
    // ReferenceError: window is not defined
    console.log(window.location.href);
    // ReferenceError: document is not defined
    console.log(document.activeElement?.id);
  });

  return (
    <div>
      I just do the is visible task and try to access the window object
      <div class="icon"> "⭐" </div>
    </div>
  );
});
