import test from 'node:test'; import assert from 'node:assert/strict'; import { makeQuestion } from './questions';
test('each question has exactly one correct unique option',()=>{for(let a=1;a<=10;a++)for(let b=1;b<=10;b++){const q=makeQuestion(a,b);assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert.equal(q.options.filter(x=>x===q.answer).length,1)}});
