"use client";

import { useABTest } from "@/hooks/useABTest";
import BookMeeting from "@/components/BookMeeting";
import LeadForm from "@/components/LeadForm";

export default function BookingExperiment() {
  const variant = useABTest();

  if (!variant) return null;

  if (variant === "A") {
    return <BookMeeting />;
  }

  return <LeadForm />;
}