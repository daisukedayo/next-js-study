import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Input,
  Radio,
  Select,
  Wrap,
} from "@yamada-ui/react";

const dummyCustomers = [
  { id: 1, value: "Customer A", label: "Customer A" },
  { id: 2, value: "Customer B", label: "Customer B" },
  { id: 3, value: "Customer C", label: "Customer C" },
];

export default function Form() {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">請求情報</Heading>
      </CardHeader>

      <CardBody>
        {/* 入力欄 */}
        <form>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="customer">顧客</label>
            <Select
              id="customer"
              placeholder="顧客を選択"
              items={dummyCustomers}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="amount">支払額 (JPY)</label>
            <Input
              id="amount"
              name="amount"
              type="number"
              min="0"
              step="0"
              required
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>Status</label>
            <Wrap gap="md">
              <Radio>Pending</Radio>
              <Radio>Paid</Radio>
            </Wrap>
          </div>

          <Button type="submit" colorScheme="primary">
            Submit
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}
