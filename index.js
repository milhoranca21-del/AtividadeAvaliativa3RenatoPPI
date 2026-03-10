import express from 'express';

const host = '0.0.0.0';

const porta = 3004;

const app = express();

app.get('/', (req, res) => {
    res.write(`

<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Formulario de cadastro de fornecedor</title>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>

    <body>

        <div class="container mt-5">

            <h2 class="mb-4">Cadastro de Fornecedor</h2>

            <form>

                <div class="row">

                    <div class="col-md-6 mb-3">
                        <label class="form-label">CNPJ</label>
                        <input type="text" class="form-control" placeholder="Digite o CNPJ">
                    </div>

                    <div class="col-md-6 mb-3">
                        <label class="form-label">Razão Social / Nome do Fornecedor</label>
                        <input type="text" class="form-control" placeholder="Ex: Moraes & Irmãos Ltda">
                    </div>

                </div>

                <div class="mb-3">
                    <label class="form-label">Nome Fantasia</label>
                    <input type="text" class="form-control" placeholder="Ex: Loja do 1,99">
                </div>

                <div class="mb-3">
                    <label class="form-label">Endereço</label>
                    <input type="text" class="form-control" placeholder="Digite o endereço">
                </div>

                <div class="row">

                    <div class="col-md-4 mb-3">
                        <label class="form-label">Cidade</label>
                        <input type="text" class="form-control" placeholder="Digite a cidade">
                    </div>

                    <div class="col-md-2 mb-3">
                        <label class="form-label">UF</label>
                        <input type="text" class="form-control" placeholder="SP">
                    </div>

                    <div class="col-md-3 mb-3">
                        <label class="form-label">CEP</label>
                        <input type="text" class="form-control" placeholder="00000-000">
                    </div>

                </div>

                <div class="row">

                    <div class="col-md-6 mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" placeholder="Digite o email">
                    </div>

                    <div class="col-md-6 mb-3">
                        <label class="form-label">Telefone</label>
                        <input type="text" class="form-control" placeholder="(00) 00000-0000">
                    </div>

                </div>

                <button type="submit" class="btn btn-primary">Cadastrar</button>
                <button type="reset" class="btn btn-secondary">Limpar</button>

            </form>

        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>

    </body>
</html>

    `);

    res.end();
});

app.post()

app.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`)
});