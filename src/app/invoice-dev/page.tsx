"use client";

import { VStack } from "@yamada-ui/react";
import { FormEventHandler } from "react";

const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const firstName = form.get("firstName") || "";
  const lastName = form.get("lastName") || "";
  const question = form.get("question") || "";
  alert(
    `FirstName: ${firstName}\nLastName: ${lastName}\nQuestion: ${question}`
  );
};

export default function NoUseStateForm() {
  return (
    <form onSubmit={handleSubmit}>
      <VStack>
        <label>
          FirstName:
          <input
            type="text"
            name="firstName"
            defaultValue=""
            pattern="[a-zA-Z]"
          />
          <span className="error-message">
            FirstNameは英字で入力してください。
          </span>
        </label>
        <label>
          LastName:
          <input
            type="text"
            name="lastName"
            defaultValue=""
            pattern="[a-zA-Z]"
          />
          <span className="error-message">
            LastNameは英字で入力してください。
          </span>
        </label>
      </VStack>
    </form>
  );
}
