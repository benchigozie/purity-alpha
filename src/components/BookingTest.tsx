"use client";

import { useABTest } from "@/hooks/useABTest";
import BookMeeting from "@/components/BookMeeting";
import LeadForm from "@/components/LeadForm";

export default function BookingExperiment() {
  const variant = useABTest();

  if (!variant) return null;

  if (variant === "A") {

    return (
      <div id="booking">
        <BookMeeting />;
      </div>)
  }

  return  (
    <div id="booking">
      <LeadForm />;
    </div>);
}