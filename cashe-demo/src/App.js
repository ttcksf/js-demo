import logo from './logo.svg';
import './App.css';
import { useQuery } from '@tanstack/react-query';

const studentsData = [
  {
    id: '0001',
    name: 'Yamada',
    age: 20,
  },
  {
    id: '0002',
    name: 'Tanaka',
    age: 21,
  },
  {
    id: '0003',
    name: 'Yoshida',
    age: 22,
  },
];

function App() {
  const studentsQuery = useQuery({
    queryKey: ['students'],
    queryFn: () => {
      return [...studentsData];
    },
    // 初期データを先に表示させる効率化
    placeholderData: [
      {
        id: '0000',
        name: 'sample',
        age: 99,
      },
    ],
  });

  if (studentsQuery.status === 'pending') return <p>ローディング中。。。</p>;
  if (studentsQuery.status === 'error') return <p>エラーです</p>;

  return (
    <>
      {studentsQuery.data.map((student) => (
        <p key={student.id}>{student.name}</p>
      ))}
    </>
  );
}

export default App;
