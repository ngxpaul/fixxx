import { Avatar } from 'flowbite-react';

import { Rating } from 'flowbite-react';

const RatingComponent = () => {
    return (
        <div className="container mx-auto text-center">
            <div className="flex flex-wrap gap-2">
                <Avatar.Group className='mx-auto'>
                    <Avatar
                        img="https://media.newyorker.com/photos/63826120196c8ef692b4eba5/4:3/w_2276,h_1707,c_limit/Ronaldo_WC22.png"
                        rounded
                        stacked
                    />
                    <Avatar
                        img="https://media.newyorker.com/photos/63826120196c8ef692b4eba5/4:3/w_2276,h_1707,c_limit/Ronaldo_WC22.png"
                        rounded
                        stacked
                    />
                    <Avatar
                        img="https://media.newyorker.com/photos/63826120196c8ef692b4eba5/4:3/w_2276,h_1707,c_limit/Ronaldo_WC22.png"
                        rounded
                        stacked
                    />
                    <Avatar
                        img="https://media.newyorker.com/photos/63826120196c8ef692b4eba5/4:3/w_2276,h_1707,c_limit/Ronaldo_WC22.png"
                        rounded
                        stacked
                    />
                    <Avatar
                        img="https://media.newyorker.com/photos/63826120196c8ef692b4eba5/4:3/w_2276,h_1707,c_limit/Ronaldo_WC22.png"
                        rounded
                        stacked
                    />
                    <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                        <p className="ml-2 text-base font-medium text-gray-400 dark:text-gray-300">
                            4.9/5 from learners
                        </p>
                    </Rating>
                </Avatar.Group>
            </div>
        </div>
    );
}

export default RatingComponent;