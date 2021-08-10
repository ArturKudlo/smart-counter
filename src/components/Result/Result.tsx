import React from 'react';

type PropsTypeCount = {
    count: number
    limited: boolean
}

export const Result = ({count, limited}: PropsTypeCount) => {
    return (
        <div className='main__content--counter'>
            <span className={limited ? 'limited': ''}> {count} </span>
        </div>
    )
}
