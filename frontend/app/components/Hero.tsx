import styles from '@/style';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div className={`${styles.poppinsClass} fixed top-[50px] left-[65px] w-[97%] h-[700px] flex`}>
      
      {/* Left Column */}
      <div className="flex flex-col items-center space-y-8 justify-center ml-4">
        
        {/* First Icon */}
        <div className="p-4 bg-[#fef5e1] border-[5px] border-third rounded-2xl">
          <Image 
            alt="Chicken Icon"
            src="/image/food.png"  // Replace with the actual image path
            width={50}
            height={50}
            className="z-0"
          />
        </div>

        {/* Second Icon */}
        <div className="p-4 bg-[#fef5e1] border-[5px] border-third rounded-2xl">
          <Image 
            alt="Play Icon"
            src="/image/play.png"  // Replace with the actual image path
            width={50}
            height={50}
            className="z-0"
          />
        </div>

        {/* Additional Icons */}
        <div className="p-4 bg-[#fef5e1] border-[5px] border-third rounded-2xl">
            <Image 
                alt="Sleep Icon"
                src="/image/sleep.png"  // Replace with the actual image path
                width={50}
                height={50}
                className="z-0"
            />
        </div>
        <div className="p-4 bg-[#fef5e1] border-[5px] border-third rounded-2xl">
            <Image 
                alt="Treat Icon"
                src="/image/treat.png"  // Replace with the actual image path
                width={75}
                height={75}
                className="z-0"
            />
        </div>

      </div>
      
      {/* Main Content Area */}
      <div className="flex justify-center items-center flex-col w-full">
        {/* Use the Image component to display the main image */}
        <Image 
          alt="Dog Image"
          src="/image/dog.svg"  // Replace with the actual image path
          width={250}
          height={250}
          style={{ objectFit: 'cover' }}
          className="z-0"
        />

        {/* Bottom text */}
        <div className='relative flex justify-center items-center mt-12 w-[40%] h-[50px] rounded-2xl bg-white'>
            <p className={`${styles.blackMedium} ${styles.flexCenter}`}>Hello, thank you for adopting me here!</p>
        </div>
      </div>

      {/* Right Column (Stats Section) */}
      <div className="flex flex-col items-center justify-center space-y-6 mr-14">
        {/* Monetary Display */}
        <div className="bg-[#fef5e1] border-[5px] border-third rounded-2xl w-[200px] h-[60px] flex justify-start items-center px-8">
          <p className="text-[35px] font-bold text-gray-800">$ 600</p>
        </div>

        {/* Stats Section */}
        <div className="p-8 bg-[#fef5e1] border-[5px] border-third rounded-lg w-[250px] space-y-6">
          <h2 className="text-xl font-bold text-main_black">Feather's Stat</h2>
          
          {/* Hunger Stat */}
          <div>
            <p className={`${styles.blackSemibold} mb-2`}>Hunger</p>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div className="bg-secondary h-2.5 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>

          {/* Happy Stat */}
          <div>
            <p className={`${styles.blackSemibold} mb-2`}>Happy</p>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div className="bg-orange-700 h-2.5 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>

          {/* Energy Stat */}
          <div>
            <p className={`${styles.blackSemibold} mb-2`}>Energy</p>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: '50%' }}></div>
            </div>
          </div>

          {/* Health Stat */}
          <div>
            <p className={`${styles.blackSemibold} mb-2`}   >Health</p>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div className="bg-red-700 h-2.5 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
