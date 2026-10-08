import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {

    const marksDataRes = use(marksPromise)
    const marksData = marksDataRes.data;
    // console.log(marksData)

    // data processing for the chart

    const marksChartData = marksData.map(studentData => {
        const student = {
            id : studentData.id,
            name : studentData.name,
            math : studentData.marks.math,
            ict : studentData.marks.ict,
            english : studentData.marks.english,
            science : studentData.marks.science
        }

        const avg = (student.math + student.ict + student.english + student.science) / 4;
        student.avg = avg;

        return student;
    })

    console.log(marksChartData);

    return (
        <div>
            <BarChart width={1200} height={500} data={marksChartData}>
                <XAxis dataKey= 'name'></XAxis>
                <YAxis></YAxis>
                <Bar dataKey= 'avg' fill='yellow'></Bar>
                <Bar dataKey= 'math' fill='red'></Bar>
                <Bar dataKey= 'ict' fill='blue'></Bar>
                <Bar dataKey= 'english' fill='green'></Bar>
                <Bar dataKey= 'science' fill='black'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;