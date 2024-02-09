export const getAllPosts = async()=>{
    const res = await fetch('http://localhost:5000/posts')
    return  res.json()
}