import styles from '@/style';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div className={`${styles.poppinsClass} fixed top-[50px] left-[65px] w-[97%] h-[700px] flex`}>
      
      {/* Left Column (Leaderboard and Daily Goal Section) */}
      <div className="flex flex-col items-center space-y-8 justify-center w-[370px] h-full rounded-lg">
        {/* Daily Goal Section */}
        <div className="w-full p-4 bg-[#fef5e1] border-[5px] border-third rounded-2xl flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-main_black text-lg">Daily Goal</h3>
            <a href="#" className="text-third">EDIT GOAL</a>
          </div>
          <div className="w-full flex items-center justify-between px-2">
            <div className="flex flex-col justify-center items-center">
              <p className="text-3xl font-bold text-yellow-600">0</p>
              <p className="text-gray-500">DAYS</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-3xl font-bold text-third">0/10</p>
              <p className="text-gray-500">XP GAINED</p>
            </div>
          </div>
          <p className="text-gray-500">7 hours left</p>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex justify-center items-center flex-col w-full mr-10">
        <Image 
          alt="Dog Image"
          src="/image/dog.svg"  // Replace with the actual image path
          width={250}
          height={250}
          style={{ objectFit: 'cover' }}
          className="z-0"
        />

        {/* Bottom text */}
        <div className='relative flex justify-center items-center mt-12 w-[43%] h-[50px] rounded-2xl bg-white'>
            <p className={`${styles.blackMedium} ${styles.flexCenter}`}>Hello, thank you for adopting me here!</p>
        </div>

        {/* Bottom Icons */}
        <div className="fixed bottom-14 flex justify-center items-center space-x-12">
          {/* Chicken Icon */}
          <div className="flex justify-center items-center w-[75px] h-[75px] bg-[#fef5e1] border-[5px] border-third rounded-2xl">
            <Image 
              alt="Chicken Icon"
              src="/image/food.png"  // Replace with the actual image path
              width={45}
              height={45}
              className="z-0 object-contain"
            />
          </div>

          {/* Play Icon */}
          <div className="flex justify-center items-center w-[75px] h-[75px] bg-[#fef5e1] border-[5px] border-third rounded-2xl">
            <Image 
              alt="Play Icon"
              src="/image/play.png"  // Replace with the actual image path
              width={45}
              height={45}
              className="z-0 object-contain"
            />
          </div>

          {/* Sleep Icon */}
          <div className="flex justify-center items-center w-[75px] h-[75px] bg-[#fef5e1] border-[5px] border-third rounded-2xl">
            <Image 
                alt="Sleep Icon"
                src="/image/sleep.png"  // Replace with the actual image path
                width={45}
                height={45}
                className="z-0 object-contain"
            />
          </div>

          {/* Treat Icon */}
          <div className="flex justify-center items-center w-[75px] h-[75px] bg-[#fef5e1] border-[5px] border-third rounded-2xl">
            <Image 
                alt="Treat Icon"
                src="/image/treat.png"  // Replace with the actual image path
                width={45}
                height={45}
                className="z-0 object-contain"
            />
          </div>
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
