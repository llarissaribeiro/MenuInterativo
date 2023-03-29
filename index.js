let opcoes = ""

do{
  opcoes = prompt(
    "Escolha uma das opções abaixo:\n" +
      "\na) Opção 01" +
      "\nb) Opção 02" +
      "\nc) Opção 03" +
      "\nd) Opção 04" +
      "\ne) Encerrar"
  )

  switch (opcoes) {
    case "a":
      alert("Você escolheu a Opção 01");
      break;
    case "b":
      alert("Você escolheu a Opção 02");
      break;
    case "c":
      alert("Você escolheu a Opção 03");
      break;
    case "d":
      alert("Você escolheu a Opção 04");
      break;
    case "e":
      alert("Encerrando");
      break;
    default:
      alert("Opção Inválida");
  }


} while (opcoes !== "e")


