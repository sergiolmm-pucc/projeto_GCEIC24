// contForca.js
function calcularNovoPeso(currentWeight, exerciseFactor, difficultyFactor) {
    let newWeight = currentWeight * exerciseFactor * difficultyFactor;
    return Math.round(newWeight);
}

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('weightForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const currentWeight = parseFloat(document.getElementById('currentWeight').value);
            const exerciseFactor = parseFloat(document.getElementById('exercise').value);
            const difficultyFactor = parseFloat(document.getElementById('difficulty').value);
            const newWeight = calcularNovoPeso(currentWeight, exerciseFactor, difficultyFactor);
            document.getElementById('result').innerText = `Peso sugerido para a próxima sessão: ${newWeight} kg`;
        });
    });
}

module.exports = { calcularNovoPeso, contabilidadeForca };
