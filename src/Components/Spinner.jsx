
import { HashLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-[100]">
            <HashLoader speedMultiplier={1} color='#DC7EEC' className='text-xl'/>
        </div>
    );
};

export default Spinner;