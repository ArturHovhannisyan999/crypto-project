import React, {useEffect, useState} from 'react';
import {perPageStore} from "../store";

const UsePerPage = () => {
    const [perPage, setPerPage] = useState(perPageStore.getValue())

    useEffect(() => {
        const perPageSub = perPageStore.subscribe(setPerPage);

        return () => {
            perPageSub.unSubscribe()
        }
    }, [])
    return {
        perPage
    }
}

export default UsePerPage;