// react
import { ChangeEvent } from 'react';
import { UseQueryResult } from 'react-query';

//** props per page */
export type PageProps = {
    classes: any;
}

//** table pagnation state */
export type PagnationState = {
    number: number;
    rowsPer: number;
}

//** col defs type */
export type ColumnDef = {
    headerName: string;
    field: string;
    filter?: {
        state: boolean;
        value: string;
        type: 'text' | 'number' | 'date' | 'email';
        filterFn: (data: any[]) => void;
        filterChange: (params: {
            key: string;
            value: string;
        }) => void;
    },
    sort?: {
        state: boolean;
        direction: 'asc' | 'desc';
        sortFn: (data: any[]) => void;
        sortClick: (key: string) => void;
    }
}

/** table hook params */
export type TableHookParams = {
    queryKey: string;
    queryFn: () => Promise<any>;
    paginated?: boolean;
}

//** table hook values */
export type TableHookValues = {
    page: PagnationState;
    response: UseQueryResult<any, unknown>;
    size: number;
    handleChangePage: (event: any, newPage: number) => void;
    handleChangeRowsPerPage: (event: ChangeEvent<HTMLInputElement>) => void;
    setSortingFn: (fn: Function) => void;
    setFilteringFn: (fn: Function) => void; 
}

//** table component types */
export type TableProps = {
    classes: any;
    colDefs: ColumnDef[];
    queryKey: string;
    queryFn: () => Promise<any>;
    errorMessage: string;
    paginated?: boolean;
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

//** table columns props */
export type TableColumnsProps = {
    classes: any;
    colDefs: ColumnDef[];
}

//** table column props */
export type TableColumnProps = {
    column: ColumnDef;
    classes: any;
}

//** comments mvc */
export type CommentMVC = {
    table: {
        colDefs: ColumnDef[];
        queryKey: string;
        queryFn: () => Promise<any>;
        errorMessage: string;
        paginated: boolean;
    }
}