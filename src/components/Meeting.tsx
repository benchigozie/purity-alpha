"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function Meeting () {
  
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"inspection-session"});
      cal("ui", {"theme":"light","cssVarsPerTheme":{light: { "cal-brand": "#0F172A" }, dark: { "cal-brand": "#0F172A" },},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <Cal namespace="inspection-session"
    calLink="alpha-media/inspection-session"
    style={{width:"100%",height:"100%",overflow:"scroll"}}
    config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"light"}}
  />;
};

  





export { Meeting };