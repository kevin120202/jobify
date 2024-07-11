import React from 'react'
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';

export default function AreaChartComponent({ data }) {
    return (
        <ResponsiveContainer width='100%' height={300}>
            <AreaChart data={data} margin={{ top: 50 }}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='date' />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Area type='monotone' dataKey='count' stroke='#8b7a50' fill='#8b7a50' />
            </AreaChart>
        </ResponsiveContainer>
    )
}
