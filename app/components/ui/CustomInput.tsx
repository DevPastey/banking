
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authFormSchema } from "@/lib/utils";
import { Control, FieldPath } from "react-hook-form";
import z from "zod";

const formSchema = authFormSchema('sign-up');

type CustomInputShape = {
  name: FieldPath<z.infer<typeof formSchema>>,
  control: Control<z.infer<typeof formSchema>>,
  label: string,
  placeholder: string,

}

const CustomInput = ({name, label, control, placeholder}: CustomInputShape) => {
 ;
  return (
    <div className="flex-1">
      <FormField
        control={control}
        name={name}
        
        render={({ field }) => (
            <div className="form-item">
            <FormLabel className="form-label">
              {label}
            </FormLabel>
            <div className="flex flex-col">
                <FormControl>
                  <Input id={name} placeholder={placeholder} className="input-class shadow-md shadow-gray-100" type={name === "email" ? "" : name === "password" ? "password" : "text"}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="form-message mt-2" />
            </div>
            </div>
        )}
      />
    </div>
  )
}

export default CustomInput
