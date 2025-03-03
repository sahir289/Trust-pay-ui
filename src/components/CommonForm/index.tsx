import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormLabel, FormInput, FormSelect, FormSwitch } from "@/components/Base/Form";
import Button from "@/components/Base/Button";

// Dynamic form schema generator
const getValidationSchema = (fields: { name: string; validation: any }[]) => {
  const schema: { [key: string]: any } = {};
  fields.forEach((field) => {
    if (field.validation) {
      schema[field.name] = field.validation;
    }
  });
  return yup.object().shape(schema);
};

interface Field {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation: any;
}

interface DynamicFormProps {
  fields: Field[];
  onSubmit: (data: any) => void;
  defaultValues: { [key: string]: any };
  isEditMode: boolean;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, onSubmit, defaultValues, isEditMode }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(getValidationSchema(fields)),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <div key={field.name} className="col-span-12 sm:col-span-6">
          <FormLabel htmlFor={field.name}>{field.label}</FormLabel>
          {field.type === "text" || field.type === "number" ? (
            <Controller
              name={field.name}
              control={control}
              render={({ field: controllerField }) => (
                <FormInput
                  {...controllerField}
                  id={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                />
              )}
            />
          ) : field.type === "select" ? (
            <Controller
              name={field.name}
              control={control}
              render={({ field: controllerField }) => (
                <FormSelect {...controllerField} id={field.name}>
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </FormSelect>
              )}
            />
          ) : field.type === "switch" ? (
            <Controller
              name={field.name}
              control={control}
              render={({ field: controllerField }) => (
                <FormSwitch>
                  <FormSwitch.Label htmlFor={field.name}>
                    <FormSwitch.Input {...controllerField} id={field.name} type="checkbox" />
                  </FormSwitch.Label>
                </FormSwitch>
              )}
            />
          ) : null}
          {errors[field.name] && typeof errors[field.name]?.message === 'string' ? (
            <p className="text-red-500">{errors[field.name]?.message as string}</p>
          ) : null}
        </div>
      ))}
      <div className="flex justify-end mt-4">
        <Button type="submit" variant="primary">
          {isEditMode ? "Save" : "Update"}
        </Button>
      </div>
    </form>
  );
};

export default DynamicForm;
