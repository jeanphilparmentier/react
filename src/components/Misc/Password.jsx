export default function Password({
  inputsStates,
  setInputsStates,
  showValidation,
}) {
  return (
    <>
      <label htmlFor="password" className="text-slate-50 inline-block mt-5">
        Votre mot de passe: Au moins un chiffre et 6 caractères
      </label>
      <input
        id="password"
        className="rounded w-full p-1 mt-2"
        type="password"
        value={inputsStates.password}
        // On copie l'objet inputsStates qui existe et je remplace la propriété password par la valeur de l'input
        onChange={(e) =>
          setInputsStates({ ...inputsStates, password: e.target.value })
        }
      />
      {showValidation.password && (
        <p className="text-yellow-400 font-semibold">
          Au moins 1 chiffre et 6 caractères.
        </p>
      )}
    </>
  )
}
