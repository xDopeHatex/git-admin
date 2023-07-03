import { useState } from "react";

export function useCheckboxChange(initialValue: boolean) {
  const [value, setValue] = useState<boolean>(initialValue);

  const changeValueHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.checked);
  };

  return {
    value,
    changeValueHandler,
    setValue,
  };
}
