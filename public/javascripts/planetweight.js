async function calculateWeight(planet) {
    const weight = document.getElementById('weight').value;
    if (!weight) {
        alert('Please enter your weight.');
        return;
    }

    const response = await fetch(`/${planet}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ weight: weight }),
    });

    const data = await response.text();
    document.getElementById('result').innerText = data;
}
