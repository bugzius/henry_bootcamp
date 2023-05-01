import { useEffect, useState } from "react";

function useParam(name) {
    const [stateParam, setStateParam] = useState();

    useEffect(() => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const param = params.get(name);

        if(param) return setStateParam(param);
        setStateParam(1);
    },[name]);

    return [stateParam, setStateParam];
}

export default useParam;