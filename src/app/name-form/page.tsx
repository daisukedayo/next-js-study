"use client";

import { useState, ChangeEvent, FormEventHandler } from "react";
import { Button, FormControl, Input, VStack } from "@yamada-ui/react";

const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const firstName = form.get("firstName") || "";
  const lastName = form.get("lastName") || "";
  alert(`FirstName: ${firstName}\nLastName: ${lastName}`);
};

export default function NoUseStateForm() {
  const [validity, setValidity] = useState({
    firstName: true,
    lastName: true,
  });

  const validateField = (name: string, value: string) => {
    if (name === "firstName" || name === "lastName") {
      return /^[a-zA-Z]+$/.test(value);
    }
    return true;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValidity((prevValidity) => ({
      ...prevValidity,
      [name]: validateField(name, value),
    }));
  };

  const isFormValid = Object.values(validity).every(Boolean);

  return (
    <form onSubmit={handleSubmit}>
      <VStack>
        <FormControl
          label="名字"
          invalid={!validity.firstName}
          errorMessage="FirstNameは英字で入力してください。"
        >
          <Input
            name="firstName"
            defaultValue=""
            placeholder="FirstNameは英字で入力してください。"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl
          label="名前"
          invalid={!validity.lastName}
          errorMessage="LastNameは英字で入力してください。"
        >
          <Input
            name="lastName"
            defaultValue=""
            placeholder="LastNameは英字で入力してください。"
            onChange={handleChange}
          />
        </FormControl>
        <Button type="submit" colorScheme="primary" disabled={!isFormValid}>
          送信
        </Button>
      </VStack>
    </form>
  );
}
