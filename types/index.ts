import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title?: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: string;
  text?: string;
  isDisabled?: boolean;
}
export interface Patient {
  hospital_id: string;
  patient_name: string;
  phone_number: string;
  next_delivery_date: string;
  status: "completed" | "due&paid" | "assigned" | "due&unpaid";
  totalUsers?: number;
  gender?: string;
  email?: string;
}
