
export const SET_DISEASE_TYPE = "SET_DISEASE_TYPE";



export const SET_DISEASE = (diseases) => {
    return {
        data:{
            diseases:[...diseases],
        },
        type:SET_DISEASE_TYPE
    }
}
