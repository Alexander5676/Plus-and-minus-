import { Achievement, AppSettings, Progress, UserProfile } from '../types';
export const initialProfile:UserProfile={name:'Друг',stars:0,coins:0,currentCombo:0};
export const initialProgress:Progress={totalQuestions:0,correctAnswers:0,incorrectAnswers:0,bestCombo:0,tableProgress:{},studiedTables:[],practiceMinutes:0,lastPracticeDate:'',dailyStreak:0};
export const initialSettings:AppSettings={sounds:true,music:false,effects:true,narration:true,darkMode:false};
export const achievements:Achievement[]=[
{id:'first',icon:'🌱',title:'Первые шаги',description:'Ответь правильно впервые'}, {id:'ten',icon:'🎯',title:'10 правильных',description:'Собери 10 правильных ответов'}, {id:'combo10',icon:'🔥',title:'Комбо ×10',description:'Сделай 10 ответов подряд'}, {id:'student',icon:'📚',title:'Ученик',description:'Изучи первую таблицу'}, {id:'combo50',icon:'⚡',title:'50 правильных подряд',description:'Невероятная серия'}, {id:'master',icon:'👑',title:'Мастер умножения',description:'Освой все таблицы'}];
export const tableStatus=(progress:number):string=>progress===0?'Не начата':progress>=90?'Отлично освоена':progress>=60?'Изучена':'В процессе';
