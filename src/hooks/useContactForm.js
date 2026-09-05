import { useState } from "react";


export function useContactForm(submitFunction) {
  const [status, setStatus] =
    useState("idle");

  const [message, setMessage] =
    useState("");


  async function submit(payload) {
    setStatus("loading");
    setMessage("");

    try {
      const response =
        await submitFunction(payload);

      setStatus("success");

      setMessage(
        response.message ||
        "Votre demande a bien été envoyée."
      );

      return true;

    } catch (error) {
      console.error(
        "Erreur formulaire :",
        error
      );

      setStatus("error");

      setMessage(
        error.message ||
        "Une erreur est survenue."
      );

      return false;
    }
  }


  function resetStatus() {
    setStatus("idle");
    setMessage("");
  }


  return {
    submit,

    status,
    message,

    isLoading:
      status === "loading",

    isSuccess:
      status === "success",

    isError:
      status === "error",

    resetStatus,
  };
}