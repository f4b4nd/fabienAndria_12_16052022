interface ObjectProps {
    [key: string]: any,
}

/**
 * Determines if an object is empty (i.e has keys) or not
 * @param { Object } obj
 */
export default function isEmpty (obj: ObjectProps) {
    return Object.keys(obj).length === 0
}
