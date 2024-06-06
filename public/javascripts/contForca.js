function calcularNovoPeso(currentWeight, exerciseFactor, difficultyFactor) {
    let newWeight = currentWeight * exerciseFactor * difficultyFactor;
    return Math.round(newWeight);
}

function contabilidadeForca() {
    document.getElementById('weightForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const currentWeight = parseFloat(document.getElementById('currentWeight').value);
        const exerciseFactor = parseFloat(document.getElementById('exercise').value);
        const difficultyFactor = parseFloat(document.getElementById('difficulty').value);
        const newWeight = calcularNovoPeso(currentWeight, exerciseFactor, difficultyFactor);
        document.getElementById('result').innerText = `Peso sugerido para a próxima sessão: ${newWeight} kg`;
    });
}

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', contabilidadeForca);
}

module.exports = { calcularNovoPeso, contabilidadeForca };
