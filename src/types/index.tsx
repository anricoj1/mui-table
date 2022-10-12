// react
import { ChangeEvent } from 'react';
import { UseQueryResult } from 'react-query';

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
    paginatedRows: any[];
    size: number;
    handleChangePage: (event: any, newPage: number) => void;
    handleChangeRowsPerPage: (event: ChangeEvent<HTMLInputElement>) => void; 
}

//** table component types */
export type TableProps = {
    classes: any;
    response: UseQueryResult;
    colDefs: ColumnDef[];
    errorMessage: string;
    paginated?: boolean;
}

/** table columns props */
export type TableColumnsProps = {
    classes: any;
    colDefs: ColumnDef[];
}

/** table column props */
export type TableColumnProps = {
    classes: any;
    column: ColumnDef;
}

/** table rows props */
export type TableRowsProps = {
    rows: any[],
    colDefs: ColumnDef[],
    isLoading: boolean,
    errorMessage: string
}

/** table row props */
export type TableRowProps = {
    row: any,
    colDefs: ColumnDef[]
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

//** comments mvc */
export type CommentMVC = {
    colDefs: ColumnDef[];
}