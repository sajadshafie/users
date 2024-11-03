import { UseFormReturn, SubmitHandler, FieldValues } from "react-hook-form";
import mapChildrenWithProps from "@/utils/mapChildrenWithProps";

interface Props<FormFields extends FieldValues>
  extends UseFormReturn<FormFields> {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FormFields>;
}

export default function FormProvider<FormFields extends FieldValues>(
  props: Props<FormFields>
) {
  const { children, onSubmit, handleSubmit, control } = props;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {mapChildrenWithProps({
        children,
        renderProps: (childProps) => {
          return {
            ...childProps,
            ...(childProps?.name && {
              key: childProps.name,
              control,
            }),
          };
        },
      })}
    </form>
  );
}
