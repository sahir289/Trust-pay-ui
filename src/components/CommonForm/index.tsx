/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  FormLabel,
  FormInput,
  FormSelect,
  FormSwitch,
} from "@/components/Base/Form";
import Button from "@/components/Base/Button";

// Dynamic form schema generator
const getValidationSchema = (sections: { [key: string]: { name: string; validation: any }[] }) => {
  const schema: { [key: string]: any } = {};
  Object.values(sections).flat().forEach((field) => {
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
  width?: string;
  options?: { value: string; label: string }[];
  validation: any;
}

interface DynamicFormProps {
  sections: { [key: string]: Field[] };
  onSubmit: (data: any) => void;
  defaultValues: { [key: string]: any };
  isEditMode: boolean;
  handleCancel: () => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
  sections,
  onSubmit,
  defaultValues,
  isEditMode,
  handleCancel,
}) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(getValidationSchema(sections)),
    defaultValues,
  });
  
    const handleReset = () => {
      reset(defaultValues || {});
    };
  
  // console.log(defaultValues, "hii from the values");


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        {Object.entries(sections).map(([sectionName, fields]) => (
          <fieldset
            key={sectionName}
            className="border-2 rounded-lg border-gray-200 p-4 mb-4"
          >
            <legend className="text-lg font-semibold px-2">
              {sectionName.replace(/_/g, ' ')}
            </legend>
            <div className="grid grid-cols-12 gap-4">
              {fields.map((field) => (
                <div
                  key={field.name}
                  className={`col-span-12 ${
                    field.width ? 'sm:col-span-12' : 'sm:col-span-6'
                  }`}
                >
                  <FormLabel htmlFor={field.name}>{field.label}</FormLabel>
                  {field.type === 'text' ||
                  field.type === 'number' ||
                  field.type === 'password' ? (
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
                  ) : field.type === 'select' ? (
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
                  ) : field.type === 'switch' ? (
                    <Controller
                      name={field.name}
                      control={control}
                      render={({ field: controllerField }) => (
                        <FormSwitch>
                          <FormSwitch.Label htmlFor={field.name}>
                            <FormSwitch.Input
                              {...controllerField}
                              id={field.name}
                              type="checkbox"
                            />
                          </FormSwitch.Label>
                        </FormSwitch>
                      )}
                    />
                  ) : null}
                  {errors[field.name] &&
                  typeof errors[field.name]?.message === 'string' ? (
                    <p className="text-red-500">
                      {errors[field.name]?.message as string}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </fieldset>
        ))}
      <div className="flex justify-end mt-4">
        <Button
          type="button"
          variant="outline-secondary"
          onClick={() => (isEditMode ? handleReset() : handleCancel())}
          className="w-20 mr-1"
        >
          {isEditMode ? 'Reset' : 'Cancel'}
        </Button>
        <Button type="submit" variant="primary">
          {isEditMode ? 'Update' : 'Save'}
        </Button>
      </div>
    </form>
  );
};

export default DynamicForm;
