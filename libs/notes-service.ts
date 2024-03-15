const baseUrl = "http://localhost:3001";

const verifyResponse = (res) => {
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
}

export const createNote = async (note) => {
  try {
    const res = await fetch(`${baseUrl}/notes`, {
      method: "post",
      body: JSON.stringify(note),
    });

    verifyResponse(res);

    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const saveNote = async (note) => {
  try {
    const res = await fetch(`${baseUrl}/notes/${note.id}`, {
      method: "put",
      body: JSON.stringify(note),
    });

    verifyResponse(res);

    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const getNote = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/notes/${id}`);

    verifyResponse(res);

    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const getNotes = async () => {
  try {
    const res = await fetch(`${baseUrl}/notes`);

    verifyResponse(res);

    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const deleteNote = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/notes/${id}`, {
      method: "delete",
    });

    verifyResponse(res);

    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
    throw error;
  }
}