
export const SET_LOCATION_TYPE = "SET_LOCATION_TYPE";



export const SET_LOCATION = ({hasPermission,location}) => {
    return {
        data:{
            hasPermission:hasPermission,
            location:{
                ...location
            }
        },
        type:SET_LOCATION_TYPE
    }
}
