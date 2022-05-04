export function checkedProfessionalsFunctionsToCallApi(
  professionalsFunctions: string[]
) {
  const ids = [];

  if (!professionalsFunctions.length) {
    return '';
  }

  if (professionalsFunctions.includes('Auxiliar de Bem Estar Animal')) {
    ids.push(1);
  }

  if (professionalsFunctions.includes('Estagiário de Bem Estar Animal')) {
    ids.push(2);
  }

  if (professionalsFunctions.includes('Juiz de Bem Estar Animal')) {
    ids.push(3);
  }

  if (professionalsFunctions.includes('Calzeiro')) {
    ids.push(4);
  }

  if (professionalsFunctions.includes('Coordenador de Curral')) {
    ids.push(5);
  }
  if (professionalsFunctions.includes('Mensageiro')) {
    ids.push(6);
  }

  if (professionalsFunctions.includes('Coordenador de Secretaria')) {
    ids.push(7);
  }

  if (professionalsFunctions.includes('Profissionais da imprensa')) {
    ids.push(8);
  }

  if (professionalsFunctions.includes('Coordenador de Filmagem')) {
    ids.push(9);
  }

  if (professionalsFunctions.includes('Anotador de pontos')) {
    ids.push(10);
  }

  if (professionalsFunctions.includes('Locutor de Vaquejada')) {
    ids.push(11);
  }

  if (professionalsFunctions.includes('Juiz de vaquejada')) {
    ids.push(12);
  }

  if (professionalsFunctions.includes('Competidores')) {
    ids.push(13);
  }

  if (professionalsFunctions.includes('Organizador de Eventos')) {
    ids.push(14);
  }

  if (professionalsFunctions.includes('Proprietários de Parques')) {
    ids.push(15);
  }

  return `&accreditationType=${ids.join(',')}`;
}
