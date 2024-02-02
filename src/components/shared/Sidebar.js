import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';


const Sidebar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/categories", { cache: "no-store" });
        if (!res.ok) throw new Error('Not Found');
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error as needed
      }
    };

    fetchData();
  }, []);

  return (
    <div className="sticky top-20">
      <div className="w-full md:w-[250px] bg-white rounded-sm">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 min-h-full text-base-content">
          {/* Sidebar content here */}
          {data.map((category) => (
            <li key={category._id} className="my-1">
              <Link href="/">
                <div className="flex items-center gap-2">
                  <Image src={category.icon || category.image} alt="Icon" width={25} height={25}></Image>
                  <p>{category.category}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;