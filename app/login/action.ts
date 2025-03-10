"use server";

export async function handlerForm(prevState: any, data: FormData) {
    console.log(prevState);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return {
        errors: ["wrong password", "password too short"],
    };
}
