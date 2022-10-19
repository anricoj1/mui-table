//** sort on click */
export const sortClick = (key: string) => {
    console.log(key);
}

/** sort rows */
export const sortRows = (data: any[]) => {
    return data;
}

/** handle filter change */
export const filterChange = ({
    key,
    value
}: { 
    key: string,
    value: string 
}) => {
    console.log(key, value);
}

/** filter rows */
export const filterRows = (data: any[]) => {
    return data;
}