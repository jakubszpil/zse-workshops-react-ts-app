import { useCallback, type FormEvent } from "react";

export interface TodoFormProps {
  onSubmit: (text: string) => void;
}

export default function TodoForm(props: TodoFormProps) {
  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const values = new FormData(form);
      const text = String(values.get("text"));
      props.onSubmit(text);
      form.reset();
    },
    [props]
  );

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: "100%", display: "flex", gap: 8 }}
    >
      <input
        type="text"
        name="text"
        placeholder="Dodaj zadanie"
        style={{ flex: 1 }}
      />
      <button type="submit">Dodaj</button>
    </form>
  );
}
