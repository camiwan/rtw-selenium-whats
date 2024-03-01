const { Builder, By, Key, until } = require('selenium-webdriver');

async function enviarMensagem() {
  // Configuração do WebDriver com o caminho correto
  let driver = await new Builder()
    .forBrowser('chrome').build();

  try {
    // Abrir o WhatsApp Web
    await driver.get('https://web.whatsapp.com');
    console.log("Faça o login no WhatsApp Web e pressione Enter após o login.");
    await new Promise(resolve => process.stdin.once('data', resolve));

    //Clicar no botão de nova conversa
    let newChatButton = await driver.findElement(By.xpath('//div[@class="_3qx7_"]'));
    await newChatButton.click();

    // Aguardar a exibição do campo de pesquisa para inserção do número do destinatário
    let searchInput = await driver.wait(until.elementLocated(By.xpath('//input[@class="_3sHED"]')), 5000);
    // Inserir número do destinatário
    await searchInput.sendKeys("554195400420", Key.ENTER);

    // Aguardar um momento para o carregamento da conversa
    await driver.sleep(5000);

    //Encontrar e interagir com o campo de mensagem
    let messageInput = await driver.findElement(By.xpath('//div[@class="div._3Uu1_"]'));
    await messageInput.sendKeys("Hello World! Teste de envio de mensagem", Key.ENTER);

        // Aguardar até que o campo de mensagem esteja disponível
        await driver.wait(until.elementLocated(By.css('div._3Uu1_')), 10000);
   
        // Localizar o botão de enviar e clicar nele
        let sendButton = await driver.findElement(By.className('button.tvf2evcx oq44ahr5 lb5m6g5c svlsagor p2rjqpw5 epia9gcq'));
        await sendButton.click();

    console.log("Mensagem enviada com sucesso!");
  } finally {
    // Fechar o navegador
    await driver.quit();
  }
}

// Chamar a função enviarMensagem para executar o bot
enviarMensagem();
