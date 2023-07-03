import React from "react";
import { useState } from "react";

export function useInputChange(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);

  const changeValueHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setValue(e.target.value);
  };

  return {
    value,
    changeValueHandler,
    setValue,
  };
}
