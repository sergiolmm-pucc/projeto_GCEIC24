import express from 'express';
import cors from 'cors';


const app = express();
const port = 3000;

app.use(cors());  // Adicionado
app.use(express.json());

app.post('/calcular-encargos', (req, res) => {
    const { salarioMensal, diasTrabalhados, horasExtras } = req.body;

    const inss = salarioMensal * 0.09;
    const fgts = salarioMensal * 0.08;
    const ferias = (salarioMensal*11 / 12);
    const decimoTerceiro = (salarioMensal / 12);
    const horasExtrasValor = horasExtras * (salarioMensal / 220) * 1.5;

    const encargos = {
        inss,
        fgts,
        ferias,
        decimoTerceiro,
        horasExtrasValor,
        total: inss + fgts + ferias + decimoTerceiro + horasExtrasValor
    };

    res.json(encargos);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
