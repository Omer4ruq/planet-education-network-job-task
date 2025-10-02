import React from 'react';
import stories1 from '../../../public/stories1.png";'
import stories2 from '../../../public/stories2.png";'

const Stories = () => {
    return (
        <div className=''>
            <div>
                <h1>
                    stories
                </h1>
            </div>
            <div>
<div>
    <img src={stories1} alt="" />
</div>
<div>
    <h1>Induction in VCAD Canary Wharf campus</h1>
    <p>
        If you join Victoria College of Arts and Design, you can expect the highest calibre of teaching, cutting-edge facilities, and exceptional industry connections, which will help to prepare you for a rewarding career in the creative and tech industries.
    </p>
    <div>
<button>Read article</button>
<button>View full gallery</button>
    </div>
    
</div>
            </div>
            <div>
                <div>
                    <img src={stories2} alt="" />
                </div>
                <div>
                    <h1>Be ready for applying! Five tips to build your portfolio</h1>
                    <p>
                        If you join Victoria College of Arts and Design, you can expect the highest calibre of teaching, cutting-edge facilities, and exceptional industry connections, which will help to prepare you for a rewarding career in the creative and tech industries.
                    </p>
                    <div>
                        <button>View article</button>
            
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stories;