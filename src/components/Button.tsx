import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

type ButonProps = {
    btnText: string;
    className: string;
}
const Button = ({ btnText, className }: ButonProps) => {

    useEffect(() => {
        (async function () {
          const cal = await getCalApi({"namespace":"30min"});
          cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        })();
      }, [])
    return (
        <button
            data-cal-namespace="30min"
            data-cal-link="puritygroups/30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className={`font-semibold transition-all duration-300 hover:cursor-pointer ${className}`}>
            {btnText}
        </button>
    )
}

export default Button