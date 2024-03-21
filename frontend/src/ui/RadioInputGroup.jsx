import RadioInput from "./RadioInput";

const RadioInputGroup = ({ register, watch, errors, configs }) => {
  const { name, validationSchema = {}, options } = configs;
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-x-8">
        {options.map((option) => {
          <RadioInput
            key={option.value}
            label={option.label}
            value={option.value}
            id={option.value}
            name={name}
            register={register}
            watch={watch}
            validationSchema={validationSchema}
            errors={errors}
          />;
        })}
        {errors && errors["role"] && (
          <span className="text-error block text-sm mt-2">
            {errors["role"]?.message}
          </span>
        )}
      </div>
    </div>
  );
};

export default RadioInputGroup;
