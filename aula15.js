// Aula 15 - Colaboração em Projetos com Git e GitHub - Parte II

// links
// https://estudos-maisprati.vercel.app/modules/02-frontend/pages/git-github.html?authuser=0

// git add app.js → a mudança entra na Staging Area, pronta para o próximo commit.

// git commit -m "..." → cria um commit no Repositório Local. Stage fica limpo.

// git push → envia os commits locais para o Remoto (GitHub). Agora todos veem.


// 🔑 HEAD, branch e commit 
// Um commit é uma foto do projeto num instante, com um identificador (hash) e um pai. 

// Uma branch (ex.: main) é só um ponteiro móvel para o último commit de uma linha de trabalho.

// HEAD é "onde você está agora" — normalmente aponta para a branch atual.



// Configuração inicial
// Antes do primeiro commit, o Git precisa saber quem é você — esse nome e e-mail ficam gravados em cada commit. Use o mesmo e-mail da sua conta do GitHub.

# Identidade (aparece em cada commit) — use seu e-mail do GitHub
git config --global user.name "Maria Silva"
git config --global user.email "maria@email.com"

# Nome padrão da branch inicial (o padrão moderno é "main")
git config --global init.defaultBranch main

# Editor padrão (ex.: VS Code esperando o arquivo fechar)
git config --global core.editor "code --wait"

# Deixar a saída colorida e legível
git config --global color.ui auto

# Conferir tudo o que está configurado (e de onde vem cada valor)
git config --list --show-origin


// Começando um repositório
// # A) Projeto novo, na sua máquina → vira um repositório Git
cd meu-projeto
git init

# B) Projeto que já existe no GitHub → baixa uma cópia completa
git clone https://github.com/usuario/projeto.git
cd projeto

// .gitignore — o que NÃO versionar
Nem tudo deve entrar no histórico: dependências, segredos e arquivos gerados ficam de fora. Crie um arquivo .gitignore na raiz antes do primeiro commit.

node_modules/      # dependências — reinstaláveis com npm install
dist/              # build gerado
.env               # SEGREDOS: senhas, tokens, chaves de API
.DS_Store          # lixo do macOS
*.log              # arquivos de log

// Autenticação no GitHub
O GitHub não aceita mais sua senha no terminal. Escolha um dos dois caminhos:

// HTTPS + Token (PAT)
URL https://.... Quando pedir senha, cole um Personal Access Token (Settings → Developer settings). Mais simples para começar.

// SSH (chave)
URL git@github.com:.... Gere uma chave com ssh-keygen, cole a .pub no GitHub. Não pede senha a cada push.


// CICLO DO DIA A DIA

# 1. O que mudou? Em que área está cada arquivo?
git status

# 2. Ver as linhas exatas que mudaram (ainda não no stage)
git diff
git diff --staged     # o que já está no stage, indo para o próximo commit

# 3. Selecionar o que entra no commit (staging)
git add arquivo.js          # um arquivo
git add .                   # tudo na pasta atual
git add -p                  # escolher pedaço por pedaço (interativo)

# 4. Fotografar o que está no stage, com uma mensagem clara
git commit -m "Adiciona validação no formulário de login"

# Atalho: add (de arquivos já rastreados) + commit num passo só
git commit -am "Corrige typo no rodapé"

# 5. Enviar os commits para o GitHub
git push


// Lendo o histórico

git log                              # histórico completo, detalhado
git log --oneline                    # um commit por linha (hash + mensagem)
git log --oneline --graph --all      # desenho das branches no terminal
git show <hash>                       # ver tudo o que um commit mudou


// Branches & colaboração
// Uma branch é uma linha de trabalho isolada. Você cria uma para cada tarefa/feature, trabalha nela sem afetar a main, e depois junta (merge) o resultado. É a base do fluxo colaborativo: ninguém comita direto na main.

git branch                       # listar branches (* marca a atual)

# Criar e já mudar para a nova branch (forma moderna)
git switch -c feature/login
# equivalente clássico:
git checkout -b feature/login

git switch main                  # voltar para a main
git checkout main                # (equivalente clássico)

# Depois de terminar e fazer merge, apagar a branch local
git branch -d feature/login


// Juntando o trabalho (merge)
# Estando na main, trazer o que foi feito na feature
git switch main
git merge feature/login

// Tipos de merge — como o histórico fica
"Mergear" não é uma coisa só: o Git tem estratégias diferentes e o resultado no histórico muda bastante. Entender o grafo de commits ajuda a escolher a certa. Em todos os diagramas: ● são commits da main, ● da feature.

// 
Fast-forward (padrão quando dá) — a main não recebeu commits desde que a feature nasceu, então o Git só "desliza" o ponteiro da main até o fim. Histórico linear, sem commit de merge.

// 
Merge commit / 3-way (--no-ff) — quando as duas branches divergiram, o Git cria um commit de merge com dois pais. Preserva a ramificação e deixa claro "aqui entrou a feature X".

// 
Squash merge — junta todos os commits da feature em um único commit na main. Histórico limpo, mas você perde os commits intermediários. Comum em PRs no GitHub ("Squash and merge").

// 
Rebase — não é um merge: ele reaplica os commits da feature no topo da main (vira C3', C4' — cópias novas). Histórico linear e sem merge commit, mas reescreve commits.

// 
git merge feature/login            # fast-forward se possível, senão merge commit
git merge --no-ff feature/login    # força um merge commit (preserva a ramificação)
git merge --squash feature/login   # junta tudo; depois você dá 1 commit
git rebase main                    # (na feature) reaplica seus commits no topo da main

// 

Estratégia	Cria merge commit?	Histórico	Quando usar
Fast-forward	Não	Linear	Branch curta, main parada — o caso mais simples
Merge commit (--no-ff)	Sim	Ramificado	Quer rastrear quando cada feature entrou (padrão em times)
Squash	Não (1 commit novo)	Linear e limpo	PR com muitos commits "wip" que não importam no histórico
Rebase	Não	Linear	Atualizar sua feature com a main sem poluir o histórico

//
⚠️ A regra de ouro do rebase
Rebase reescreve commits — então
nunca faça rebase de uma branch que já está compartilhada
(que outros já puxaram). Use rebase só na sua branch local, antes do push. Para o que já é público, use merge.

//
🔀 O fluxo real no GitHub: Pull Request
Em equipe você não faz merge local na main. Você dá push da sua branch, abre um
Pull Request (PR)
no GitHub, o time revisa, e o merge é feito pela interface. Isso garante revisão de código e mantém a main sempre estável.

// Remotos: origin & upstream
push · pull · fetch

Um remoto é um apelido para a URL de um repositório na nuvem. origin é só o nome convencional do "seu" remoto principal (criado automaticamente pelo clone) — não é uma palavra mágica do Git. upstream é a convenção para o repositório original quando você trabalha com um fork.

git remote -v                    # listar remotos e suas URLs

# Conectar um repo local (criado com git init) a um do GitHub
git remote add origin https://github.com/voce/projeto.git

# Primeiro push: -u liga a branch local à do remoto (faz só uma vez)
git push -u origin main
# depois disso, basta:
git push

//
push, pull e fetch


Comando	Direção	O que faz
git push	local → remoto	Envia seus commits para o GitHub
git fetch	remoto → local	Baixa novidades sem mexer no seu código (só atualiza o conhecimento do remoto)
git pull	remoto → local	fetch + merge: baixa e já junta ao seu código

💡 Hábito que evita 90% das dores
Dê git pull antes de começar a trabalhar e antes de dar push. Assim você sempre parte do código mais recente e evita o erro "rejected" (veja o mapa de debug). Prefira git pull --rebase para um histórico mais linear.

//
Fluxo com fork (contribuir em projeto de terceiros)


origin (seu fork) vs upstream (original)
# Você clonou o SEU fork → origin já aponta para ele
# Adicione o repositório original como "upstream"
git remote add upstream https://github.com/projeto-original/projeto.git

git fetch upstream                 # baixar novidades do original
git merge upstream/main            # atualizar sua branch com o original

git push origin minha-feature      # seu trabalho vai para o SEU fork

//

Desfazendo coisas
restore · reset · revert · stash

A pergunta certa é: "o que eu quero desfazer e em que área ele está?" A tabela mapeia a intenção ao comando. A regra de ouro: revert para o que já foi publicado (não reescreve histórico) e reset para o que ainda é só seu/local.

Eu quero…	Comando
Descartar edições de um arquivo (não comitadas)	git restore arquivo.js
Tirar um arquivo do stage (mas manter a edição)	git restore --staged arquivo.js
Corrigir a mensagem do último commit (não enviado)	git commit --amend
Desfazer o último commit, manter mudanças no stage	git reset --soft HEAD~1
Desfazer o último commit, mandar mudanças p/ Working Dir	git reset HEAD~1 (misto, padrão)
Apagar de vez o último commit e suas mudanças	cuidado git reset --hard HEAD~1
Desfazer um commit já publicado	git revert <hash>
Guardar mudanças temporariamente, sem comitar	git stash
Recuperar o que foi guardado	git stash pop

// reset: as três intensidades

--soft
desfaz o commit · mantém no stage

--mixed (padrão)
desfaz commit + stage · guarda no Working Dir

--hard
apaga tudo · não tem volta fácil


// stash — "pausa, preciso trocar de tarefa"


git stash
# Está no meio de algo e precisa mudar de branch sem comitar pela metade?
git stash                 # guarda as mudanças e limpa o Working Directory
git switch main           # agora você pode trocar de branch livremente

git stash list            # ver o que está guardado
git stash pop             # traz de volta a última pilha (e a remove)
git stash apply           # traz de volta, mas mantém na lista


⚠️ --hard e push --force são irreversíveis
git reset --hard joga fora mudanças não comitadas para sempre. git push --force pode
apagar o trabalho dos colegas
no remoto. Se precisar mesmo, use --force-with-lease, que recusa sobrescrever o que você ainda não viu.


// 07
Mapa de debug
saindo das enrascadas

Os erros mais comuns têm sempre a mesma causa e a mesma cura. Leia a mensagem do Git — ela quase sempre sugere o comando certo. Abaixo, os problemas que todo aluno encontra.

① push "rejected / non-fast-forward"
O remoto tem commits que você não tem localmente (um colega deu push antes). O Git recusa o push para não apagar o trabalho dele.


② Conflito de merge
Dois lados mudaram a mesma linha. O Git marca o trecho no arquivo e espera você decidir. Não entre em pânico: o conflito é local e nada foi perdido.


como o conflito aparece no arquivo
<<<<<<< HEAD
const titulo = "Meu Projeto";        # ← sua versão (branch atual)
=======
const titulo = "Projeto Final";      # ← a versão que está chegando
>>>>>>> feature/titulo



resolvendo
# 1. Abra o arquivo, escolha o conteúdo certo e APAGUE as marcações
#    (as linhas <<<<<<<, ======= e >>>>>>>)
# 2. Marque como resolvido e finalize:
git add arquivo.js
git commit                 # (ou: git rebase --continue, se foi rebase)

# Mudou de ideia e quer abortar tudo?
git merge --abort


// ③ "You are in 'detached HEAD' state"

Você fez checkout de um commit específico (um hash), não de uma branch. O HEAD está "solto": commits feitos aqui podem se perder. Para sair, basta voltar para uma branch.


saindo do detached HEAD
git switch main                 # só descartar a exploração e voltar
# OU, se você fez commits que quer manter aqui:
git switch -c minha-branch      # cria uma branch a partir de onde está


④ Comitei na branch errada (ainda não dei push)


movendo o commit
# Estou na main e o último commit deveria estar numa feature:
git switch -c feature/certa     # cria a branch certa COM o commit
git switch main                 # volta para a main
git reset --hard HEAD~1         # remove o commit da main (já está salvo na feature)


// ⑤ Erros de mensagem direta

"Author identity unknown / Please tell me who you are"
Você ainda não configurou nome e e-mail. Rode os git config --global user.name/email da seção 02.

"fatal: not a git repository"
Você está numa pasta que não é um repositório. Confira com pwd onde está; entre na pasta do projeto ou rode git init se for um projeto novo.

"Authentication failed" no push (HTTPS)
O GitHub não aceita senha. Gere um
Personal Access Token
e use-o no lugar da senha, ou troque para SSH (seção 02).


// ⑥ Coloquei algo no .gitignore mas o Git ainda rastreia
O .gitignore só ignora arquivos que o Git ainda não conhece. Se já foi comitado (ex.: node_modules/ ou .env), é preciso removê-lo do rastreamento — sem apagar do disco.


parar de rastrear
git rm -r --cached node_modules     # tira do Git, mantém no disco
git commit -m "Remove node_modules do versionamento"


🛟 A rede de segurança: git reflog
Acha que perdeu commits depois de um reset --hard ou rebase confuso? O git reflog lista todos os lugares por onde o HEAD passou. Encontre o hash e recupere com git reset --hard <hash> ou git switch -c recuperado <hash>. Quase nada se perde de verdade.


// 08 Pratique & cola rápida

Abra um terminal e siga o roteiro abaixo num projeto de teste. Pense na resposta antes de revelar.

1
Do zero ao GitHub
◆ Fácil
Você criou uma pasta meu-site com um index.html. Quais comandos levam isso a um repositório novo no GitHub (já criado, vazio, em https://github.com/voce/meu-site.git)?

Ocultar solução
resposta_1
git init
git add .
git commit -m "Primeira versão do site"
git remote add origin https://github.com/voce/meu-site.git
git push -u origin main



2
push recusado
◆ Médio
Você dá git push e recebe ! [rejected] main -> main (fetch first). O que aconteceu e o que você faz?

Ocultar solução
resposta_2
# O remoto tem commits que você não tem. Traga-os primeiro, depois suba:
git pull --rebase
# resolva conflitos se houver (editar → git add → git rebase --continue)
git push


3
commit errado, não publicado
◆ Médio
Você comitou com a mensagem "asdf" e ainda não deu push. Como corrigir a mensagem sem criar um commit novo?

Ocultar solução
resposta_3
git commit --amend -m "Mensagem correta e descritiva"
# Só faça amend ANTES do push. Se já publicou, prefira um commit novo.



Tarefa	Comando
Ver o estado atual	             git status
Ver o que mudou	                 git diff · git diff --staged
Preparar mudanças	             git add .
Salvar no histórico	             git commit -m "..."
Enviar / baixar	                 git push · git pull
Histórico resumido	             git log --oneline --graph
Nova branch	                     git switch -c nome
Trocar de branch	             git switch nome
Guardar p/ depois	             git stash · git stash pop
Descartar edição local	         git restore arquivo
Desfazer último commit local	 git reset --soft HEAD~1
Desfazer commit publicado	     git revert <hash>
Rede de segurança	             git reflog