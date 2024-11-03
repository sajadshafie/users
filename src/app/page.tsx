import { Input,Button } from "@/components/core";
import { labelValueProps } from "@/types/type";
import {useForm} from 'react-hook-form'

export default function Home() {
  const {control,handleSubmit}=useForm()
  
  return (
    <div className="p-10">
      <div className="w-[100px]">
        <Input label="نام" />
      </div>
    </div>
  );
}
