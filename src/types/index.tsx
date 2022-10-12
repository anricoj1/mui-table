// react
import { ChangeEvent } from 'react';

//** props per page */
export type PageProps = {
    classes: any;
}

//** col defs type */
export type ColumnDef = {
    headerName: string;
    field?: string;
    filterable?: boolean;
    sortable?: boolean;
    filterRenderer?: (params: any) => JSX.Element;
    cellRenderer?: (params: any) => JSX.Element;
}

//** table hook values */
export type TableHookValues = {
    page: PagnationState;
    pagnatedRows: any[];
    handleChangePage: (event: any, newPage: number) => void;
    handleChangeRowsPerPage: (event: ChangeEvent<HTMLInputElement>) => void; 
}

//** table component types */
export type TableProps = {
    classes: any;
    rowData: any[];
    colDefs: ColumnDef[];
    size: number;
    paginated?: boolean;
}

//** table pagnation state */
export type PagnationState = {
    number: number;
    rowsPer: number;
}

/** app state props */
export type AppStateProps = {
    media: Record<"1025", boolean>;
}