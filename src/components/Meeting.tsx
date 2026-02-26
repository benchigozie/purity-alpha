"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function Meeting () {
  
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"inspection-session"});
      cal("ui", {"theme":"light","cssVarsPerTheme":{light: { "cal-brand": "#0F172A" }, dark: { "cal-brand": "#0F172A" },},"hideEventTypeDetails":false,"layout":"month_view"});
    })();

    const handleMessage = (e: any) => {
      if (e.data?.event === "bookingSuccessful") {
        console.log("MESSAGE EVENT:", e.data);
        /*if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "cal_booking_completed", {
            event_category: "engagement",
            event_label: "inspection_session",
          });
        }*/
      }
    };

    window.addEventListener("message", handleMessage);

  }, [])

  

  
  
  return <Cal namespace="inspection-session"
    calLink="alpha-media/inspection-session"
    style={{width:"100%",height:"100%",overflow:"scroll"}}
    config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"light"}}
  />;
};

  





export { Meeting };