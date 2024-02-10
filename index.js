const perguntas = [
    {
      pergunta: "Qual foi o ano de fundação do Corinthians?",
      respostas: [
        "1910",
        "1912",
        "1915",
      ],
      correta: 0
    },
    {
      pergunta: "Qual jogador é conhecido como 'Doutor' e é ídolo histórico do Corinthians?",
      respostas: [
        "Sócrates",
        "Rivelino",
        "Ronaldo Fenômeno",
      ],
      correta: 0
    },
    {
      pergunta: "Qual foi o primeiro título internacional conquistado pelo Corinthians?",
      respostas: [
        "Copa Libertadores",
        "Copa Sul-Americana",
        "Mundial de Clubes da FIFA",
      ],
      correta: 2
    },
    {
      pergunta: "Qual estádio é conhecido como a 'Casa do Povo'?",
      respostas: [
        "Arena Corinthians",
        "Estádio do Morumbi",
        "Pacaembu",
      ],
      correta: 2
    },
    {
      pergunta: "Quem foi o primeiro técnico a conquistar a Libertadores e o Mundial pelo Corinthians?",
      respostas: [
        "Tite",
        "Fábio Carille",
        "Adenor Leonardo Bacchi (Tite)",
      ],
      correta: 2
    },
    {
      pergunta: "Quantos títulos brasileiros o Corinthians possui até o momento?",
      respostas: [
        "6",
        "7",
        "8",
      ],
      correta: 1
    },
    {
      pergunta: "Qual jogador corintiano marcou o primeiro gol na Arena Corinthians?",
      respostas: [
        "Paulinho",
        "Guerrero",
        "Emerson Sheik",
      ],
      correta: 1
    },
    {
      pergunta: "Quem foi o artilheiro do Corinthians na conquista da Libertadores de 2012?",
      respostas: [
        "Jorge Henrique",
        "Danilo",
        "Emerson Sheik",
      ],
      correta: 2
    },
    {
      pergunta: "Qual foi o ano da primeira conquista da Copa do Brasil pelo Corinthians?",
      respostas: [
        "1991",
        "1994",
        "2002",
      ],
      correta: 0
    },
    {
      pergunta: "Qual jogador foi eleito o melhor do mundo pela FIFA quando atuava pelo Corinthians?",
      respostas: [
        "Ronaldo Fenômeno",
        "Rivellino",
        "Ronaldo Giovanelli",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorrta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorrta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
  
      quizItem.querySelector('dl').appendChild(dt)   
    }
  
    quizItem.querySelector('dl dt').remove()
  
    // Coloca a pergunta na tela
    quiz.appendChild(quizItem)
    // alert(item.pergunta)
  }