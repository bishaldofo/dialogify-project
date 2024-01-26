import React from 'react';

const modelForm = () => {
    return (
        <div>
           <form>
            <input
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder='Post Title'
            />

            <input
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder='Post Description'
            />

            <input
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder='Post Image'
            />
            </form> 
        </div>
    );
};

export default modelForm;