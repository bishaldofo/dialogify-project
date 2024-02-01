

import Image from 'next/image';
import Link from 'next/link';




 const getSidebar = async () => {
   try {
       const res = await fetch('https://dialogify-server.vercel.app/categories', {
         cache: 'no-store',
      });

      if(!res.ok) {
         throw new Error("Failed to fetch topics");
      }

      return res.json();
   } catch (error) {
      console.log( "Error loaading topics" ,error);
   }
  }


  export default async function  Sidebar()  {

   const   { items } = await getSidebar();

//   const [categories, setCategories] = useState([]);
//   console.log(categories)
// //   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const fetchedCategories = await getAllCategories();
//         setCategories(fetchedCategories);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

   //  fetchCategories();
//   }, []);

  return (
    <div className="sticky top-20">
      <div className="w-full md:w-[250px] bg-white rounded-sm">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        
          {/* Sidebar content here */}
          {items.map( ( item ) => (
            <ul key={item._id} className="menu p-4 min-h-full text-base-content">
            <li  className="my-1">
              <Link href="/">
                <div className="flex items-center gap-2">
                  <Image src={item.icon || item.image} alt="Icon" width={25} height={25}></Image>
                  <p>{item.category}</p>
                </div>
              </Link>
            </li>
             </ul>
          ))}
       
      </div>
    </div>
  );
};


