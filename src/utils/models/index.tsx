// types
import { CommentMVC } from "types"

//** comments mvc */
export const useCommentsMVC: CommentMVC = {
    filters: {
        name: "",
    },
    colDefs: [
        {
            headerName: "ID",
            field: "id",
            sortable: true
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