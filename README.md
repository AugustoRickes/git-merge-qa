# Resolvendo Conflitos de Merge no Git

obs o projeto em playwright é só para ilustrar

Este repositório foi criado para ajudar você a entender como criar e resolver conflitos de merge no Git na prática.

🛠️ Criando um Conflito

Siga os passos abaixo para simular um conflito de merge no Git:

1️⃣ Clone ou faça um fork deste repositório

git clone <https://github.com/seu-usuario/repositorio.git>
cd repositorio

2️⃣ Crie uma nova branch e entre nela

git checkout -b minha-branch-teste

3️⃣ Modifique um arquivo

Escolha um arquivo do repositório

Faça uma alteração no conteúdo do arquivo.

4️⃣ Salve e faça commit das alterações

git add .
git commit -m "Alteração na nova branch"

5️⃣ Volte para a branch main

git checkout main

6️⃣ Edite o mesmo arquivo que você modificou na outra branch

Faça uma alteração diferente no mesmo trecho do arquivo.

7️⃣ Salve e faça commit das alterações na main

git add .
git commit -m "Alteração na main"

8️⃣ Tente fazer o merge da sua branch na main

git merge minha-branch-teste

Neste momento, o Git vai falhar no auto merge e vai dar um conflito porque o mesmo trecho do arquivo foi modificado em ambas as branches.

Resolvendo Conflito

Agora que você criou um conflito, siga estes passos para resolvê-lo:

1️⃣ Abra o arquivo com conflito

O Git adiciona <<<<<<<, ======= e >>>>>>> no arquivo indicando o que ta diferente

O  <<<<<<< HEAD e ======= mostra as mudanças da branch main.

O  ======= e >>>>>>> minha-branch-teste mostra as mudanças da branch que tu ta mergeando.

2️⃣ Edite o arquivo manualmente

Remova as marcações do Git.

Escolha qual versão manter ou combine as duas versões.

3️⃣ Marque o conflito como resolvido e faça commit

git add .
git commit -m "resolvendo merge conflito no arquivo tal"

Dica

Use git status para ver quais arquivos tem conflito.

Caso queira desfazer o merge:

git merge --abort

Bem demais! Agora tente criar e resolver 982377189 conflitos de merge no Git. 🚀
