export function validateInputs({ weight, sex, alcoholGrams, hours }) {
  if (typeof weight !== 'number' || weight <= 0) throw new Error('Peso inválido');
  if (!['male', 'female'].includes(sex)) throw new Error('Sexo inválido');
  if (typeof alcoholGrams !== 'number' || alcoholGrams < 0) throw new Error('Cantidad de alcohol inválida');
  if (typeof hours !== 'number' || hours < 0) throw new Error('Horas inválidas');
}
