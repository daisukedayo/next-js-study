"use client";

import { Button, Input, VStack } from "@yamada-ui/react";
import { FormEventHandler } from "react";

const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const firstName = form.get("firstName") || "";
  const lastName = form.get("lastName") || "";
  alert(`FirstName: ${firstName}\nLastName: ${lastName}`);
};

let isValid = false;

const validateForm = (event: React.ChangeEvent<HTMLFormElement>) => {
  const form = event.currentTarget;
  const firstName = form.firstName.value;
  const lastName = form.lastName.value;
  isValid = /^[a-zA-Z]+$/.test(firstName) && /^[a-zA-Z]+$/.test(lastName);
  console.log(`${firstName} ${lastName} ${isValid}`);
};

export default function NoUseStateForm() {
  return (
    <div>
      <form onSubmit={handleSubmit} onChange={validateForm}>
        <VStack>
          <label>名字</label>
          <Input
            name="firstName"
            defaultValue=""
            placeholder="FirstNameは英字で入力してください。"
          />

          <label>名前</label>
          <Input
            name="lastName"
            defaultValue=""
            placeholder="LastNameは英字で入力してください。"
          />
          <Button type="submit" colorScheme="primary">
            送信
          </Button>
        </VStack>
      </form>
    </div>
  );
}
