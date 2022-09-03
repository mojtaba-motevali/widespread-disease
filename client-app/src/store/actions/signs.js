
export const SET_SELECTED_SIGNS_TYPE = "SET_SELECTED_SIGNS";



export const SET_SELECTED_SIGNS = (signs) => {
    return {
        data:[...signs],
        type:SET_SELECTED_SIGNS_TYPE
    }
}
