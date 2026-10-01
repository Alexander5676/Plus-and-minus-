import { AudioPlayer, createAudioPlayer } from 'expo-audio';
type SoundName='correct'|'wrong'|'click'|'level-up'|'achievement'|'coin';
const players:Partial<Record<SoundName,AudioPlayer>>={};
/** Optional sound player: assets can be dropped in later without affecting offline learning. */
export function playSound(_sound:SoundName, enabled:boolean){if(!enabled)return; try{players[_sound]?.play();}catch{/* audio is optional */}}
export function registerSound(name:SoundName,source:Parameters<typeof createAudioPlayer>[0]){try{players[name]=createAudioPlayer(source)}catch{/* optional asset unavailable */}}
