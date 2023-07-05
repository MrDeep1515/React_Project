const fetchAllRecords = (data) => {
    return {
        type: "ALL",
        payload: data
    }
}

const byIdDetails = (data) => {
    return {
        type: "BYID",
        payload: data
    }
}

export { fetchAllRecords, byIdDetails };