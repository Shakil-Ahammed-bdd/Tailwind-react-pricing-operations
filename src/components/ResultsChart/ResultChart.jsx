import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
  {
    "id": "student-001",
    "name": "Rahim",
    "math": 78,
    "english": 85,
    "physics": 72,
    "chemistry": 88,
    "ict": 80,
    "total": 403
  },
  {
    "id": "student-002",
    "name": "Karim",
    "math": 65,
    "english": 74,
    "physics": 81,
    "chemistry": 70,
    "ict": 76,
    "total": 366
  },
  {
    "id": "student-003",
    "name": "Hasan",
    "math": 92,
    "english": 88,
    "physics": 95,
    "chemistry": 90,
    "ict": 94,
    "total": 459
  },
  {
    "id": "student-004",
    "name": "Sakib",
    "math": 56,
    "english": 68,
    "physics": 62,
    "chemistry": 75,
    "ict": 65,
    "total": 326
  },
  {
    "id": "student-005",
    "name": "Nabil",
    "math": 84,
    "english": 79,
    "physics": 87,
    "chemistry": 82,
    "ict": 85,
    "total": 417
  },
  {
    "id": "student-006",
    "name": "Tanvir",
    "math": 71,
    "english": 65,
    "physics": 76,
    "chemistry": 69,
    "ict": 73,
    "total": 354
  },
  {
    "id": "student-007",
    "name": "Fahim",
    "math": 88,
    "english": 91,
    "physics": 84,
    "chemistry": 93,
    "ict": 89,
    "total": 445
  },
  {
    "id": "student-008",
    "name": "Arif",
    "math": 63,
    "english": 58,
    "physics": 70,
    "chemistry": 64,
    "ict": 67,
    "total": 322
  },
  {
    "id": "student-009",
    "name": "Imran",
    "math": 95,
    "english": 89,
    "physics": 92,
    "chemistry": 96,
    "ict": 94,
    "total": 466
  },
  {
    "id": "student-010",
    "name": "Rafi",
    "math": 38,
    "english": 50,
    "physics": 68,
    "chemistry": 79,
    "ict": 75,
    "total": 380
  }
]

const ResultChart = () => {
    return (
        <div>
            <LineChart width={500} height={500} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={'math'}></Line>
                <Line dataKey={'english'} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;