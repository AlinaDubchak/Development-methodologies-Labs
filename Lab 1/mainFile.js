
import { interactiveMode } from './interactiveMod.js';
import { FileMode } from './non-interactive.js';

if (!process.argv[2]) {
    interactiveMode();
}else FileMode();  
