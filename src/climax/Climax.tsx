import { useEffect, useRef, useState } from 'react';
import { useFormatter } from './useFormatter';

export const Climax = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [raw, setRaw] = useState<string>('');

    useEffect(() => {
        if (!inputRef.current) {
            return;
        }
        inputRef.current.focus();
    }, [inputRef]);

    const formatted = useFormatter(raw);

    const _changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRaw(e.target.value);
    };

    const _focusHandler = () => {
        inputRef.current?.focus();
    };

    return (
        <>
            <input
                ref={inputRef}
                type="text"
                value={raw}
                onChange={_changeHandler}
                style={{ width: 600 }}
            />
            <div
                onClick={_focusHandler}
                style={{
                    marginTop: 30,
                    padding: 20,
                    background: '#222222',
                    width: '100%',
                    height: 450,
                }}
            >
                {formatted}
            </div>
        </>
    );
};
