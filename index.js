import express from 'express';

const host = '0.0.0.0';

const porta = 3004;

const app = express();

var listacadastro = [];

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.write(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Home - Sistema</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
        <a class="navbar-brand" href="/">Sistema</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
               
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="fornecedorDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Fornecedor
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="fornecedorDropdown">
                        <li><a class="dropdown-item" href="/cadastrofornecedor">Cadastrar Fornecedor</a></li>
                        <li><a class="dropdown-item" href="/listacadastro">Lista de Fornecedores</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/login">Login</a>
                </li>
                
            </ul>
        </div>
    </div>
</nav>

        <div class="container mt-5">
            <div class="card p-4 shadow-sm text-center">
                <h2 class="mb-4">Bem-vindo ao Sistema de Cadastro</h2>
                <p>Use o menu acima para navegar pelas funcionalidades do sistema.</p>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>
    `);
    res.end();
});
app.get('/cadastrofornecedor', (req, res) => {
    res.write(`

<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Formulario de cadastro de fornecedor</title>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>

    <body>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">Sistema</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
              
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="fornecedorDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Fornecedor
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="fornecedorDropdown">
                        <li><a class="dropdown-item" href="/cadastrofornecedor">Cadastrar Fornecedor</a></li>
                        <li><a class="dropdown-item" href="/listacadastro">Lista de Fornecedores</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/login">Login</a>
                </li>
                
            </ul>
        </div>
    </div>
</nav>

        

        <div class="container mt-5">

            <h2 class="mb-4">Cadastro de Fornecedor</h2>

            <form action="/cadastrofornecedor" method="POST">

                <div class="row">

                    <div class="col-md-6 mb-3">
                        <label class="form-label">CNPJ</label>
                        <input type="text" class="form-control" placeholder="Digite o CNPJ" name = "cnpj">
                    </div>

                    <div class="col-md-6 mb-3">
                        <label class="form-label">Razão Social / Nome do Fornecedor</label>
                        <input type="text" class="form-control" placeholder="Ex: Moraes & Irmãos Ltda" name = "razao">
                    </div>

                </div>

                <div class="mb-3">
                    <label class="form-label">Nome Fantasia</label>
                    <input type="text" class="form-control" placeholder="Ex: Loja do 1,99" name = "fantasia">
                </div>

                <div class="mb-3">
                    <label class="form-label">Endereço</label>
                    <input type="text" class="form-control" placeholder="Digite o endereço" name = "endereco">
                </div>

                <div class="row">

                    <div class="col-md-4 mb-3">
                        <label class="form-label">Cidade</label>
                        <input type="text" class="form-control" placeholder="Digite a cidade" name = "cidade">
                    </div>

                    <div class="col-md-2 mb-3">
                        <label class="form-label">UF</label>
                        <input type="text" class="form-control" placeholder="SP" name = "uf">
                    </div>

                    <div class="col-md-3 mb-3">
                        <label class="form-label">CEP</label>
                        <input type="text" class="form-control" placeholder="00000-000" name = "cep">
                    </div>

                </div>

                <div class="row">

                    <div class="col-md-6 mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" placeholder="Digite o email" name = "email">
                    </div>

                    <div class="col-md-6 mb-3">
                        <label class="form-label">Telefone</label>
                        <input type="text" class="form-control" placeholder="(00) 00000-0000" name = "telefone">
                    </div>

                </div>

                <button type="submit" class="btn btn-primary">Cadastrar</button>
            

            </form>

        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>

    </body>
</html>

    `);

    res.end();
});

app.post('/cadastrofornecedor',(req,res) => {

    const cnpj = req.body.cnpj;
    const razao = req.body.razao;
    const fantasia = req.body.fantasia;
    const endereco = req.body.endereco;
    const cidade = req.body.cidade;
    const uf = req.body.uf;
    const cep = req.body.cep;
    const email = req.body.email;
    const telefone = req.body.telefone;

    if(!cnpj || !razao || !fantasia || !endereco || !cidade || !uf || !cep || !email || !telefone){

        let html = `

        <html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Formulario de cadastro de fornecedor</title>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>

    <body>

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            a class="navbar-brand" href="/">Sistema</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                    </li>
                
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="fornecedorDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Fornecedor
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="fornecedorDropdown">
                        <li><a class="dropdown-item" href="/cadastrofornecedor">Cadastrar Fornecedor</a></li>
                        <li><a class="dropdown-item" href="/listacadastro">Lista de Fornecedores</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/login">Login</a>
                    </li>
                
                    </ul>
            </div>
        </div>
        </nav>

        <div class="container mt-5">

            <h2 class="mb-4">Cadastro de Fornecedor</h2>

            <form action="/cadastrofornecedor" method="POST">

                <div class="row">

                    <div class="col-md-6 mb-3">
                        <label class="form-label">CNPJ</label>
                        <input type="text" class="form-control" placeholder="Digite o CNPJ" name = "cnpj" value = "${cnpj}">
                    </div> 
                    `;
                     if(!cnpj){

                        html += `<div class="alert alert-danger" role="alert">
                                 Por favor informe o CNPJ !!!
                                 </div> 
                    `;
                    }
                    html += `

                    <div class="col-md-6 mb-3">
                        <label class="form-label">Razão Social / Nome do Fornecedor</label>
                        <input type="text" class="form-control" placeholder="Ex: Moraes & Irmãos Ltda" name = "razao" value = "${razao}">
                    </div>
                    
                    
                     </div>
                     `;

                     if(!razao){

                        html += `<div class="alert alert-danger" role="alert">
                                 Por favor informe a razão !!!
                                 </div> 
                    `;
                    }
                html += `

                <div class="mb-3">
                    <label class="form-label">Nome Fantasia</label>
                    <input type="text" class="form-control" placeholder="Ex: Loja do 1,99" name = "fantasia" value = "${fantasia}">
                </div>
                `;
                    
                     if(!fantasia){

                        html += `<div class="alert alert-danger" role="alert">
                                 Por favor informe a fantasia !!!
                                 </div> 
                    `;
                    }
                html += `

                <div class="mb-3">
                    <label class="form-label">Endereço</label>
                    <input type="text" class="form-control" placeholder="Digite o endereço" name = "endereco" value = "${endereco}">
                </div>
                `;
                    
                     if(!endereco){

                        html += `<div class="alert alert-danger" role="alert">
                                 Por favor informe o endereço !!!
                                 </div> 
                    `;
                    }
                html += `

                <div class="row">

                    <div class="col-md-4 mb-3">
                        <label class="form-label">Cidade</label>
                        <input type="text" class="form-control" placeholder="Digite a cidade" name = "cidade" value ="${cidade}">
                    </div>
                    `;
                    
                     if(!cidade){

                        html += `<div class="alert alert-danger" role="alert">
                                 Por favor informe a cidade !!!
                                 </div> 
                    `;
                    }
                    html += `

                    <div class="col-md-2 mb-3">
                        <label class="form-label">UF</label>
                        <input type="text" class="form-control" placeholder="SP" name = "uf" value = "${uf}">
                    </div>
                    `;
                    
                     if(!uf){

                        html += `<div class="alert alert-danger" role="alert">
                                 Por favor informe a UF !!!
                                 </div> 
                    `;
                    }
                    html += `

                    <div class="col-md-3 mb-3">
                        <label class="form-label">CEP</label>
                        <input type="text" class="form-control" placeholder="00000-000" name = "cep" value = "${cep}">
                    </div>

                    `;
                    
                     if(!cep){

                        html += `<div class="alert alert-danger" role="alert">
                                 Por favor informe o CEP !!!
                                 </div> 
                    `;
                    }
                    html += `

                </div>


                <div class="row">

                    <div class="col-md-6 mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" placeholder="Digite o email" name = "email" value = "${email}">
                    </div>
                    `;
                    
                     if(!email){

                        html += `<div class="alert alert-danger" role="alert">
                                 Por favor informe o email !!!
                                 </div> 
                    `;
                    }
                    html += `

                    <div class="col-md-6 mb-3">
                        <label class="form-label">Telefone</label>
                        <input type="text" class="form-control" placeholder="(00) 00000-0000" name = "telefone" value ="${telefone}">
                    </div>
                    `;
                    
                     if(!telefone){

                        html += `<div class="alert alert-danger" role="alert">
                                 Por favor informe o telefone !!!
                                 </div> 
                    `;
                    }
                    html += `

                </div>

                <button type="submit" class="btn btn-primary">Cadastrar</button>
                

            </form>

        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>

    </body>
</html>

`;

res.write(html);


    }else{

         listacadastro.push(
        {
            "cnpj": cnpj,
            "razao": razao,
            "fantasia": fantasia,
            "endereco": endereco,
            "cidade": cidade,
            "uf": uf,
            "cep": cep,
            "email": email,
            "telefone": telefone,
        }
    );

    res.redirect("/listacadastro");


    }
});

app.get('/listacadastro', (req, res) => {
    let linhas = "";

    for (let fornecedor of listacadastro) {
        linhas += `
            <tr>
                <td>${fornecedor.cnpj}</td>
                <td>${fornecedor.razao}</td>
                <td>${fornecedor.fantasia}</td>
                <td>${fornecedor.cidade}</td>
                <td>${fornecedor.telefone}</td>
            </tr>
        `;
    }

    res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Fornecedores Cadastrados</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
          
        </head>
        <body>

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Sistema</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="fornecedorDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Fornecedor
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="fornecedorDropdown">
                                <li><a class="dropdown-item" href="/cadastrofornecedor">Cadastrar Fornecedor</a></li>
                                <li><a class="dropdown-item" href="/listacadastro">Lista de Fornecedores</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/login">Login</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>

            <div class="container">
                <h2>Fornecedores Cadastrados</h2>
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>CNPJ</th>
                            <th>Razão Social</th>
                            <th>Nome Fantasia</th>
                            <th>Cidade</th>
                            <th>Telefone</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${linhas}
                    </tbody>
                </table>
                <a href="/cadastrofornecedor" class="btn btn-primary">Novo cadastro</a>
            </div>
        </body>
        </html>
    `);
});

app.get('/login', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Login</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
        <style>
            body { font-family: Arial, sans-serif; background: #f8f9fa; }
            .login-container { max-width: 400px; margin-top: 80px; }
        </style>
    </head>
    <body>

    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Sistema</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" 
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <!-- Dropdown Fornecedor -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="fornecedorDropdown" role="button" 
                           data-bs-toggle="dropdown" aria-expanded="false">
                            Fornecedor
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="fornecedorDropdown">
                            <li><a class="dropdown-item" href="/cadastrofornecedor">Cadastrar Fornecedor</a></li>
                            <li><a class="dropdown-item" href="/listacadastro">Lista de Fornecedores</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="/login">Login</a>
                    </li>
                   
                </ul>
            </div>
        </div>
    </nav>

   
    <div class="container login-container">
        <h2 class="text-center mb-4">Login</h2>
        <form action="/cadastrofornecedor" method="GET">
            <div class="mb-3">
                <label class="form-label">Usuário</label>
                <input type="text" class="form-control" placeholder="Digite o usuário" name="usuario">
            </div>
            <div class="mb-3">
                <label class="form-label">Senha</label>
                <input type="password" class="form-control" placeholder="Digite a senha" name="senha">
            </div>
            <button type="submit" class="btn btn-primary w-100">Entrar</button>
        </form>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>
    `);
});

app.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`)
});