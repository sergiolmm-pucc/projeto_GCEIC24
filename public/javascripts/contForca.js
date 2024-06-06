document.addEventListener('DOMContentLoaded', function () {
    contabilidadeForca();
});

function contabilidadeForca() {
    document.getElementById('weightForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const currentWeight = parseFloat(document.getElementById('currentWeight').value);
        const exerciseFactor = parseFloat(document.getElementById('exercise').value);
        const difficultyFactor = parseFloat(document.getElementById('difficulty').value);
        let newWeight = currentWeight * exerciseFactor * difficultyFactor;
        newWeight = Math.round(newWeight); 
        document.getElementById('result').innerText = `Peso sugerido para a próxima sessão: ${newWeight} kg`;
    });
}

module.exports = { contabilidadeForca };
