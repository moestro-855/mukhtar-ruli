const { execFileSync } = require('child_process');
const ffmpeg = require('ffmpeg-static');
const path = require('path');

const input  = path.join(__dirname, 'images', 'новый блок.mp4');
const output = path.join(__dirname, 'images', 'новый блок reversed.mp4');

console.log('Создаю обратное видео...');
console.log('Вход:', input);
console.log('Выход:', output);

try {
    execFileSync(ffmpeg, [
        '-y',
        '-i', input,
        '-vf', 'reverse',
        '-an',          // без аудио (видео и так muted)
        '-c:v', 'libx264',
        '-preset', 'fast',
        '-crf', '18',
        output
    ], { stdio: 'inherit' });
    console.log('\nГотово!');
} catch (e) {
    console.error('Ошибка:', e.message);
}
