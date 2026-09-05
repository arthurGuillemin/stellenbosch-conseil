const API_URL = (
  import.meta.env.VITE_API_URL ||
  "http://localhost:3000"
).replace(/\/$/, "");


async function handleResponse(response) {
  let data;

  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    throw new Error(
      data.message ||
      "Une erreur est survenue."
    );
  }

  return data;
}


/* =========================
   CLIENT
========================= */

export async function sendClientRequest(payload) {
  const response = await fetch(
    `${API_URL}/api/devis`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(payload),
    }
  );

  return handleResponse(response);
}


/* =========================
   CANDIDAT
========================= */

export async function sendCandidateApplication(
  formData
) {
  const response = await fetch(
    `${API_URL}/api/candidatures`,
    {
      method: "POST",

      /*
       * NE PAS mettre Content-Type ici.
       *
       * Le navigateur doit lui-même créer :
       * multipart/form-data; boundary=...
       */
      body: formData,
    }
  );

  return handleResponse(response);
}