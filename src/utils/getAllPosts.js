export const getAllPosts = async()=>{
    const res = await fetch('https://dialogify-server-xi.vercel.app/posts')
    return  res.json()
}