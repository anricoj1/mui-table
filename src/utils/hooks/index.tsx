// react
import { useState, ChangeEvent } from "react"

// react-query
import { useQuery } from "react-query";

// controller
import { sortRows, filterRows } from "utils/controllers";

// types
import { PagnationState, TableHookParams, TableHookValues } from "types";

//** table hook */
export const useTable = ({
    queryKey,
    queryFn,
    paginated = false
}: TableHookParams): TableHookValues => {
    // sorting function
    const [sortingFn, setSortingFn] = useState<Function>(() => sortRows);
    const [filteringFn, setFilteringFn] = useState<Function>(() => filterRows);

    // state
    const [page, setPage] = useState<PagnationState>({
        number: 0,
        rowsPer: 10
    });

    // handle change page
    const handleChangePage = (
        event: any,
        newPage: number
    ) => {
        setPage({
            ...page,
            number: newPage
        });
    }

    // handle change row per page
    const handleChangeRowsPerPage = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        setPage({
            ...page,
            rowsPer: parseInt(event.target.value, 10)
        });
    }

    // page rows
    const paginatedRows = (data: any[]) => {
        return data.slice(
            page.number * page.rowsPer,
            page.number * page.rowsPer + page.rowsPer
        );
    }

    // sort and filter rows
    const sortAndFilterRows = (data: any[]) => {
        return filteringFn(sortingFn(data));
    }

    // response from react-query
    const response = useQuery(queryKey, queryFn, {
        select: (data) => {
            if (paginated) {
                return sortAndFilterRows(paginatedRows(data));
            }
            return sortAndFilterRows(data);
        }
    });

    return {
        page: page,
        response: response,
        size: response.data?.length || 0,
        handleChangePage: handleChangePage,
        handleChangeRowsPerPage: handleChangeRowsPerPage,
        setSortingFn: setSortingFn,
        setFilteringFn: setFilteringFn,
    }
}