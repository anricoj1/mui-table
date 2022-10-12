// react
import { useState, ChangeEvent } from "react"
// types
import { PagnationState, TableHookValues } from "types";


//** table hook */
export const useTable = (rows: any[]): TableHookValues => {
    // state
    const [page, setPage] = useState<PagnationState>({
        number: 0,
        rowsPer: 10
    })

    // handle change page
    const handleChangePage = (event: any, newPage: number) => {
        setPage({
            ...page,
            number: newPage
        })
    }

    // handle change row per page
    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setPage({
            ...page,
            rowsPer: parseInt(event.target.value, 10)
        });
    }

    // page rows
    const pagnatedRows: any[] = rows.slice(
        page.number * page.rowsPer,
        page.number * page.rowsPer + page.rowsPer
    );

    return {
        page,
        pagnatedRows,
        handleChangePage,
        handleChangeRowsPerPage
    }
}