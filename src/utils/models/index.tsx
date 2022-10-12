// types
import { CommentMVC } from "types"

//** comments mvc */
export const useCommentsMVC: CommentMVC = {
    colDefs: [
        {
            headerName: "ID",
            field: "id",
            sortable: true,
            filterable: true
        },
        {
            headerName: "Name",
            field: "name"
        },
        { 
            headerName: "Email",
            field: "email" 
        },
        { 
            headerName: "Body", 
            field: "body" 
        }
    ]
}