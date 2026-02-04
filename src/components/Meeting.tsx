import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

function Meeting() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"video-editing-trial-intro-call"});
      cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#000000"},"dark":{"cal-brand":"#bfd243"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <Cal namespace="video-editing-trial-intro-call"
    calLink="asoya-david-kfup7h/video-editing-trial-intro-call"
    style={{width:"100%",height:"100%",overflow:"scroll"}}
    config={{"layout":"month_view", "theme":"dark"}}
    
  />;
};





export { Meeting };