import React from 'react';
import Input from './sub-component/Input';
import Button from './sub-component/Button';

const Grammar = () => {
    return (
        <div className="grid grid-cols-2 gap-4 p-2">
            <div className="...">
                <Input placeholder="Enter your sentence" disabled={false} />
            </div>
            <div className="...">
                <Input placeholder="" disabled={true} />
            </div>
            <div className="col-span-2 mx-auto">
                <div className='flex'>
                    <div className='mx-2'>
                        <Button value="Correct" />
                    </div>
                    <div className='mx-2'>
                        <Button value="Pronunciation" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Grammar;