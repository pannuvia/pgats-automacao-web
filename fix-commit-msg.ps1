$repl = @{
    "Initial commit - exercicio aula 3" = "Commit inicial - exercício aula 3"
    "Ajuste do exercicio de cadastro com Faker" = "feat: ajuste do exercício de cadastro com Faker"
    "feat: adiciona fluxo de cadastro do Test Case: Register User" = "feat: adiciona fluxo de cadastro do caso de teste: cadastrar usuário"
    "feat: adiciona fluxo de cadastro do Test Case: Login User with correct email and password" = "feat: adiciona fluxo de cadastro do caso de teste: login do usuário com e-mail e senha corretos"
    "feat: adiciona fluxo de cadastro do Test Case: Login User with incorrect email and password" = "feat: adiciona fluxo de cadastro do caso de teste: login do usuário com e-mail e senha incorretos"
    "feat: adiciona fluxo de cadastro do Test Case: Logout User" = "feat: adiciona fluxo de cadastro do caso de teste: logout do usuário"
    "feat: adiciona fluxo de cadastro do Test Case: Register User with existing email" = "feat: adiciona fluxo de cadastro do caso de teste: cadastrar usuário com e-mail existente"
    "feat: ajustando cenario deve cadastrar um novo usuário, logar e deletar conta para que esteja conforme especificacao" = "feat: ajusta cenário de cadastro, login e exclusão conforme a especificação"
    "feat: ajuste no cenario deve cadastrar novo usuario, fazer login com email e senha corretos, fazer logout e deletar conta para que esteja conforme especificacao" = "feat: ajusta cenário de cadastro, login com credenciais válidas, logout e exclusão conforme a especificação"
    "feat: ajuste no cenario deve cadastrar um novo usuario e fazer logout" = "feat: ajusta cenário de cadastro e logout conforme a especificação"
    "feat: renomeia nome do arquivo de teste" = "feat: renomeia o nome do arquivo de teste"
    "refactor: padroniza pages e adiciona cenário de contato" = "refactor: padroniza páginas e adiciona cenário de contato"
    "refactor: padroniza page objects e finaliza cenário 8" = "refactor: padroniza page objects e finaliza cenário 8"
    "feat: implementa cenário 9 de busca de produtos" = "feat: implementa cenário 9 de busca de produtos"
    "feat: implementa cenário 10 de assinatura na home" = "feat: implementa cenário 10 de assinatura na home"
    "fix: ajusta validação do cenário 15 de checkout" = "fix: ajusta validação do cenário 15 de checkout"
    "feat: implementa cenário 16 de checkout com login" = "feat: implementa cenário 16 de checkout com login"
    "refactor: separa cart e checkout e melhora padrao do projeto" = "refactor: separa carrinho e checkout e melhora o padrão do projeto"
    "refactor: padroniza factories, helpers e reduz duplicacoes" = "refactor: padroniza factories, helpers e reduz duplicações"
    "ci: add github actions workflow for cypress" = "ci: adiciona workflow do GitHub Actions para o Cypress"
    "chore: finalize ci and reporting setup" = "chore: finaliza configuração de CI e relatórios"
    "docs: finalize constants and project documentation" = "docs: finaliza constantes e documentação do projeto"
    "docs: documentação final do projeto" = "docs: documentação final do projeto"
}
$commit = [Console]::In.ReadToEnd()
$normalized = $commit.TrimEnd("`r", "`n")
if ($repl.ContainsKey($normalized)) {
    [Console]::Out.Write($repl[$normalized])
} else {
    [Console]::Out.Write($normalized)
}
