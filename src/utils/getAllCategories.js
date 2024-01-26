export const getAllCategories = async()=>{
    const res = await  fetch('https://dialogify-server.vercel.app/categories')
    return  res.json()
}