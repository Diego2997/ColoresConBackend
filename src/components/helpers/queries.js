const URL_COLORES = import.meta.env.VITE_API_COLORES

export const getColores = async() =>{
    try {
        const respuesta = await fetch(URL_COLORES)
        const colores = await respuesta.json()
        return colores
    } catch (error) {
        console.log(error)
    }
}

export const postColores = async(nombreColor) =>{
    try {
        const respuesta = await fetch(URL_COLORES,{
            method:"POST",
            headers:{
            "Content-Type":"application/json"
            },
            body:JSON.stringify({nombreColor})
            })
            return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const deleteColor = async(id) =>{
    try {
        const respuesta = await fetch(URL_COLORES+"/"+id,{
            method:"DELETE"})
            return respuesta
    } catch (error) {
        console.log(error)
    }
}