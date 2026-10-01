import { router } from 'expo-router';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Card, Screen, Title } from './UI';
import { useApp } from '../store/AppProvider';
import { makeQuestion } from '../utils/questions';

export function GameScreen({ kind, title }: { kind: 'catch' | 'connect' | 'maze' | 'battle'; title: string }) {
  const { answer } = useApp();
  const [q, setQ] = useState(() => makeQuestion(1 + Math.floor(Math.random() * 10), 1 + Math.floor(Math.random() * 10)));
  const [score, setScore] = useState(0); const [hp, setHp] = useState(100);
  const choose = (n: number) => { const ok = n === q.answer; answer(q, ok); if (ok) { setScore(s => s + 10); if (kind === 'battle') setHp(h => Math.max(0, h - 25)); } setQ(makeQuestion(1 + Math.floor(Math.random() * 10), 1 + Math.floor(Math.random() * 10))); };
  return <Screen><Title>{title}</Title>{kind === 'battle' && <Card><Text style={{ fontSize: 20 }}>👾 Монстр HP: {hp}</Text></Card>}<Card><Text style={{ fontSize: 20 }}>Очки: ⭐ {score}</Text><Text style={{ fontSize: 28, fontWeight: '800' }}>{q.a} × {q.b} = ?</Text>{kind === 'connect' && <Text>Нажми правильный ответ, чтобы соединить линией 🔗</Text>}{kind === 'maze' && <Text>Выбери дверь с правильным ответом 🚪</Text>}</Card><View style={{ gap: 10 }}>{q.options.map(o => <Button key={o} title={String(o)} onPress={() => choose(o)} color="#625B71" />)}</View><Button title="Закончить игру" onPress={() => router.replace('/games')} color="#6750A4" /></Screen>;
}
