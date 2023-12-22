import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";

export const InputComponent = component$(() => {
  const field = useStore({
    name: "email",
    value: "",
    error: null,
  });

  return (
    <div>
      <div>
        <label for={field.name}>Email</label>
        <input
          id={field.name}
          value={field.value}
          type="text"
          onKeyDown$={(e: any) => {
            field.value = field.value + e.key ?? "";
          }}
          required
        />
        {field.error && <div>{field.error}</div>}
      </div>
      <div class="result">{field.value}</div>
    </div>
  );
});
