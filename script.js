const btnCalcular = document.getElementById('btn-calcular');
const resultado = document.getElementById('resultado');
const aviso = document.getElementById('aviso');

btnCalcular.addEventListener('click', () => {
  const n1 = parseFloat(document.getElementById('n1').value);
  const n2 = parseFloat(document.getElementById('n2').value);

  if (isNaN(n1) || isNaN(n2)) {
    aviso.classList.remove('aviso--sucesso');
    aviso.classList.add('aviso--erro');
    aviso.innerText = 'Por favor, preencha todas as notas corretamente.';
    resultado.value = '';
    return;
  }

  const mf = (n1 * 0.4) + (n2 * 0.6);

  if (mf < 6) {
    aviso.classList.remove('aviso--sucesso');
    aviso.classList.add('aviso--erro');
    aviso.innerText = 'Infelizmente você foi reprovado.';
  } else {
    aviso.classList.remove('aviso--erro');
    aviso.classList.add('aviso--sucesso');
    aviso.innerText = 'Parabéns, você foi aprovado!';
  }

  resultado.value = mf.toFixed(1);
});
