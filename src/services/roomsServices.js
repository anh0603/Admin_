import { get, post, del, update } from "../utils/request"

export const createRoom = async (option) =>{
    const result = await post("rooms", option)
    return result;
}

export const getListRoom = async (option) => {
    const result = await get('rooms', option)
    return result;
}

export const deleteRoom = async (id) => {
    const result = await del(`rooms/${id}`)
    return result;
}
export const updateRoom = async (id, option) => {
    const result = await update(`rooms/${id}`, option)
    return result;
}