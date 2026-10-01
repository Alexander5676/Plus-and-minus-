export type TableStatus = 'not-started' | 'learning' | 'learned' | 'mastered';
export interface Question { a:number; b:number; answer:number; options:number[]; key:string }
export interface QuestionStats { question:string; a:number; b:number; attempts:number; correct:number; incorrect:number; streak:number; lastAnswered:string; difficulty:number }
export interface Progress { totalQuestions:number; correctAnswers:number; incorrectAnswers:number; bestCombo:number; tableProgress:Record<string,number>; studiedTables:number[]; practiceMinutes:number; lastPracticeDate:string; dailyStreak:number }
export interface Achievement { id:string; icon:string; title:string; description:string; unlockedAt?:string }
export interface UserProfile { name:string; stars:number; coins:number; currentCombo:number }
export interface AppSettings { sounds:boolean; music:boolean; effects:boolean; narration:boolean; darkMode:boolean }
export interface PracticeSession { size:number; current:number; correct:number; incorrect:number; maxCombo:number; stars:number; startedAt:string; mode:'practice'|'fast' }
export interface GameResult { game:'catch'|'connect'|'maze'|'battle'; score:number; correct:number; incorrect:number; stars:number }
export interface AppState { profile:UserProfile; progress:Progress; settings:AppSettings; stats:Record<string,QuestionStats>; achievements:Achievement[]; hydrated:boolean }
