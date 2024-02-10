const RadioInput = ({ label, value, onChange, name, id, checked }) => {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        type="radio"
        className="w-4 h-4 accent-red-500 cursor-pointer"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioInput;
