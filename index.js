const { Builder, By, Key, until } = require('selenium-webdriver');

(async () => {

    let builderNavegador = await new Builder().forBrowser('chrome').build();

    await builderNavegador.get('https://web.whatsapp.com');
    
    await builderNavegador.wait(until.elementLocated(By.className('_3WByx')));

    //SÓ PRA VERIFICAR SE O USUÁRIO LOGOU
    console.log('usuário logou');

    //**********  */

    await builderNavegador.wait(until.elementLocated(By.css('div[contenteditable="true"]')), 10000);

    // Inserir iniciais do nome ou nome completo do destinatário // melhor o telefone

    let searchBox = await builderNavegador.findElement(By.css('div[contenteditable="true"]'));
    await searchBox.click();
    await searchBox.sendKeys("Bacharel em Psicanálise");

    await builderNavegador.wait(until.elementLocated(By.xpath('//span[@title="Bacharel em Psicanálise"]')));

    await builderNavegador.sleep(2000);

     //CLICAR NO ELEMENTO
    let contato = await builderNavegador.findElement(By.xpath('//span[@title="Bacharel em Psicanálise"]'));
    await contato.click();

    //await builderNavegador.sleep(1000);

      // Encontrar o campo de mensagem 
    
    let searchBox_mensagem = await builderNavegador.findElement(By.className('_3Uu1_'));
    await searchBox_mensagem.click();
    await searchBox_mensagem.sendKeys("Olá! Sou rtw-bot. Estou em fase de construção, que vai demorar!!!! Teste realizado por meu mestre Wanderley Alves.... rsrsrs");
    await searchBox_mensagem.sendKeys(Key.ENTER);

    //**********  */
    
})();