export default function Pseudo({
  inputsStates,
  setInputsStates,
  showValidation,
}) {
  return (
    <>
      <label htmlFor="userName" className="text-slate-50">
        Votre pseudo (3-64 caractères)
      </label>
      <input
        id="userName"
        className="rounded w-full p-1 mt-2"
        type="text"
        value={inputsStates.pseudo}
        // On copie l'objet inputsStates qui existe et je remplace la propriété pseudo par la valeur de l'input
        onChange={(e) =>
          setInputsStates({ ...inputsStates, pseudo: e.target.value })
        }
      />
      {showValidation.pseudo && (
        <p className="text-yellow-400 font-semibold">
          Votre pseudo doit contenir au moins 3 caractères et au maximum 64.
        </p>
      )}
    </>
  )
}
