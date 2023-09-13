import React, { useState, useEffect } from 'react';

function Main() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleTimeString();

    return (
        <div>
            <h1>Текущее время:</h1>
            <h1>{formattedTime}</h1>
        </div>
    );
}

export default Main;




