// react
import { useState, ChangeEvent, MouseEvent } from "react"

// types
import { PagnationState, TableHookValues } from "types";


//** table hook */
export const useTable = ({
    rows,
}: {
    rows: any[]
}): TableHookValues => {
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
    const paginatedRows: any[] = rows && rows.slice(
        page.number * page.rowsPer,
        page.number * page.rowsPer + page.rowsPer
    );

    // size
    const size: number = rows ? rows.length : 0;

    return {
        page,
        paginatedRows,
        size,
        handleChangePage,
        handleChangeRowsPerPage
    }
}

//** sortable table column */
export const useSortableColumn = (): {
    sorted: boolean;
    handleSortClick: () => void;
} => {
    // state
    const [sorted, setSorted] = useState<boolean>(false);

    // handle sort click
    const handleSortClick = () => setSorted(!sorted);

    return {
        sorted,
        handleSortClick
    }
}

//** sortable table column */
export const useFilterableColumn = (): {
    anchorEl: HTMLElement | null;
    open: boolean;
    handlePopoverClose: () => void;
    handlePopoverOpen: (event: MouseEvent<HTMLButtonElement>) => void;
} => {
    // anchor element for popover
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    // open
    const open = Boolean(anchorEl);

    // handle popover close
    const handlePopoverClose = () => setAnchorEl(null);

    // handle popover open
    const handlePopoverOpen = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }

    return {
        anchorEl,
        open,
        handlePopoverClose,
        handlePopoverOpen
    }
}