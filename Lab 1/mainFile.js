import { interactiveMode } from './interactiveMod';
import { FileMode } from './non-interactive';

if (!process.argv[2]) {
  interactiveMode();
} else FileMode();
