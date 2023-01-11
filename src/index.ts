import prompts from "prompts";

export type InputGetter<T> = (message: string) => Promise<T | null>;

export const text: InputGetter<string> = async (
  message: string
): Promise<string | null> => {
  const { value } = await prompts([
    {
      type: "text",
      name: "value",
      message,
    },
  ]);
  return value || null;
};

export const number: InputGetter<number> = async (
  message: string
): Promise<number | null> => {
  const { value } = await prompts([
    {
      type: "number",
      name: "value",
      message,
    },
  ]);
  return value || null;
};

export const toggle: InputGetter<boolean> = async (
  message: string
): Promise<boolean> => {
  return (
    await prompts([
      {
        type: "toggle",
        name: "value",
        message: message,
        active: "Yes",
        inactive: "No",
      },
    ])
  ).value;
};
