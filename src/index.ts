import prompts from "prompts";

export type InputGetter<T> = (message: string) => Promise<T | null>;
export type InputOptionsGetter<T> = (message: string, options: string[]) => Promise<T | null>;

export const text: InputGetter<string> = async (
    message: string
): Promise<string | null> => {
    const {value} = await prompts([
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
    const {value} = await prompts([
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

export const select: InputOptionsGetter<string> = async (
    message: string,
    items: string[]
): Promise<string> => {
    const answer = (await prompts({
        type: "select",
        name: "value",
        message,
        choices: items.map(it => ({title: it}))
    })).value;
    console.log('Picked:', answer)
    return answer
};
