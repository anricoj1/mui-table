// types
import { CommentMVC } from "types"

// utils
import { getComments } from "utils/handlers";
import { 
    filterRows, 
    filterChange,
    sortClick,
    sortRows
} from "utils/controllers";

//** comments mvc */
export const CommentsMVC: CommentMVC = {
    table: {
        queryKey: "comments",
        queryFn: getComments,
        errorMessage: "No comments found",
        paginated: true,
        colDefs: [
            {
                headerName: "ID",
                field: "id",
                filter: {
                    state: true,
                    value: "",
                    type: "number",
                    filterFn: filterRows,
                    filterChange: filterChange
                },
                sort: {
                    state: true,
                    direction: "asc",
                    sortFn: sortRows,
                    sortClick: sortClick
                }
            },
            {
                headerName: "Name",
                field: "name",
            },
            {
                headerName: "Email",
                field: "email",
            },
            {
                headerName: "Body",
                field: "body",
            }
        ]
    }
}