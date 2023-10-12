import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SelectComponentProps {
  items: {
    value: string,
    label: string,
  }[],
  title: string
}

export default function SelectComponent({ items, title }: SelectComponentProps) {
  return (
    <Select>
      <SelectTrigger className="w-full text-center">
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{title}</SelectLabel>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
