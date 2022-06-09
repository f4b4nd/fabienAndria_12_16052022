interface ObjectProps {
    [key: string]: any,
}

export default function isEmpty (obj: ObjectProps) {
    return Object.keys(obj).length === 0
}
