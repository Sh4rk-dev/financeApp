import { create } from "zustand";

type FormStoreProps = {
  id: number;
  type: boolean;
  value: number;
  description: string;
};

type FormValueProps = {
  total: number;
  exit: number;
  entrance: number;
};

interface FormState {
  formItem: FormStoreProps[];
  formValue: FormValueProps;

  inc: (value: FormValueProps) => void;
  removeItem: (id: FormStoreProps) => void;
  addValueForm: (value: FormValueProps) => void;
  clear: () => void;
}

export const useFormStore = create((set) => {
  return {
    
  };
});
