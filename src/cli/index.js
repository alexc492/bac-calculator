import readline from 'readline';
import { calculateBAC } from '../domain/BacCalculator.js';
import { validateInputs } from '../utils/validateInputs.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => rl.question(question, answer => resolve(answer)));
}

async function main() {
  try {
    const weight = parseFloat(await ask('Peso (en libras): '));
    const sex = await ask('Sexo (male/female): ');
    const alcoholGrams = parseFloat(await ask('Gramos de alcohol consumido: '));
    const hours = parseFloat(await ask('Horas desde la última bebida: '));

    const inputs = { weight, sex, alcoholGrams, hours };
    validateInputs(inputs);

    const bac = calculateBAC(inputs);
    console.log(`Tu nivel estimado de alcohol en sangre es: ${bac}`);
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    rl.close();
  }
}

main();
