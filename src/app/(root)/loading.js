
 import Image from "next/image";
import loadingImage from "../../assets/LoadingImage.gif";
const loading = () => {
   return (
      <div className="flex items-center h-screen justify-center">
         <Image src={loadingImage} layout="fill"
        objectFit="cover" alt='Loading....' />
      </div>
   );
};

export default loading;