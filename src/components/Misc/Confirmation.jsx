export default function Confirmation({
  inputsStates,
  setInputsStates,
  showValidation,
}) {
  return (
    <>
      <label htmlFor="confirmation" className="text-slate-50 inline-block mt-5">
        Confirmez votre mot de passe
      </label>
      <input
        id="confirmation"
        className="rounded w-full p-1 mt-2"
        type="password"
        value={inputsStates.passwordConfirmation}
        // On copie l'objet inputsStates qui existe et je remplace la propriété passwordConfirmation par la valeur de l'input
        onChange={(e) =>
          setInputsStates({
            ...inputsStates,
            passwordConfirmation: e.target.value,
          })
        }
      />
      {showValidation.passwordConfirmation && (
        <p className="text-yellow-400 font-semibold">
          Les mots de passe ne sont pas identiques.
        </p>
      )}
    </>
  )
}
