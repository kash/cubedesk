import React from 'react';

interface Props {
	value: string
}

export default function ResultCount(props: Props) {
    return (
        <div className="text-tmo-background text-sm opacity-75">
			{props.value}
        </div>
    )
}
