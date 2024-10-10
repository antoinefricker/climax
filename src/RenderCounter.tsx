import { useRef } from 'react';

export const RenderCounter = () => {
    const count = useRef<number>(0);

    count.current++;

    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                right: 0,
                backgroundColor: '#ff6633',
                color: '#ffffff',
                opacity: 0.5,
            }}
        >
            count: {count.current}
        </div>
    );
};
