"use client";

import { Button, FormControl, Input, Select, VStack } from "@yamada-ui/react";
import { FormEventHandler, useState } from "react";

const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const firstName = form.get("firstName") || "";
  const lastName = form.get("lastName") || "";
  alert(`FirstName: ${firstName}\nLastName: ${lastName}`);
};

export default function NoUseStateForm() {
  /** フォームの入力内容が有効かを保持する変数 */
  const [isFormValid, setFormValid] = useState(false);

  const validateForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    if (/^[a-zA-Z]+$/.test(firstName) && /^[a-zA-Z]+$/.test(lastName)) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} onChange={validateForm}>
      <VStack>
        <FormControl label="名字">
          <Input
            name="firstName"
            defaultValue=""
            placeholder="FirstNameは英字で入力してください。"
          />
        </FormControl>

        <FormControl label="名前">
          <Input
            name="lastName"
            defaultValue=""
            placeholder="LastNameは英字で入力してください。"
          />
        </FormControl>

        <Button disabled={!isFormValid} type="submit" colorScheme="primary">
          送信
        </Button>
      </VStack>
    </form>
  );
}
