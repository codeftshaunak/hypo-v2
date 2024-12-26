export const sendMessage = async (
  name: string,
  email: string,
  message: string
) => {
  try {
    const URL = process.env.NEXT_PUBLIC_FORM_API;

    if (!URL) throw new Error("FORM API Url not found!");

    const headers: HeadersInit = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    const body = JSON.stringify({
      name,
      message,
      email,
    });

    const response = await fetch(URL, {
      method: "POST",
      headers,
      body,
    });
    const responseJson = await response.json();

    return { isError: false, response: responseJson };
  } catch (error) {
    console.error(error);

    return { isError: true, error };
  }
};
