

const {Builder, By, Key, until} = require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');

(async function example() {
 //let driver = await new Builder().forBrowser('chrome').build();
    let driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().headless())
        .build();
    try {
   await  driver.get('https://my.te.eg/#/anonymous/AdslPayment?lang=en');
    driver.findElement(By.name('pAreaCode')).sendKeys('Alexandria', Key.RETURN);
     // await driver.findElement(By.name('pPhoneNo')).sendKeys('5555409', Key.RETURN);
      driver.findElement(By.xpath("/html/body/ecare-app/div/main/div/div/div/app-adsl-payment/div/div/div/form/div[2]/div/input")).sendKeys("5555409");

       driver.findElement(By.name('pEmail')).sendKeys('a@gmail.com', Key.RETURN);
      await  driver.navigate().forward();
      //driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
      const documentInitialised = () =>
          driver.executeScript('return initialised');
     //await driver.wait(() => documentInitialised(), 10000);
      let w1 = await driver.wait(until.elementLocated(By.xpath('/html/body/ecare-app/div/main/div/div/div/app-adsl-payment/div/app-adsl-bbs-payment/div/div/div[3]/div/div[1]/span')),10000);

      await   console.log("yaaaaaaaaaaaaaaaaaaaraaaaaaaaaaaaaaaaaaaaab");
   await   driver.findElement(By.xpath("/html/body/ecare-app/div/main/div/div/div/app-adsl-payment/div/app-adsl-bbs-payment/div/div/app-adsl-payment-options/div[1]/form/div[2]/span/label")).click();
     // driver.manage().timeoutSeconds().wait(5,TimeUnit.SECONDS)
      let w2 = await driver.wait(until.elementLocated(By.id('TXT_VoucherNumber')),10000);

      driver.findElement(By.id('TXT_VoucherNumber')).sendKeys('1234567891234567', Key.RETURN);
      await   driver.findElement(By.xpath("      /html/body/ecare-app/div/main/div/div/div/app-adsl-payment/div/app-adsl-bbs-payment/div/div/app-adsl-payment-options/div[1]/form/div[3]/div[3]/label/input\n")).click();
      await   driver.findElement(By.xpath("      /html/body/ecare-app/div/main/div/div/div/app-adsl-payment/div/app-adsl-bbs-payment/div/div/app-adsl-payment-options/div[1]/form/div[4]/button[1]\n")).click();
      let w3 = await driver.wait(until.elementLocated(By.xpath('      /html/body/ecare-app/div/main/div/div/div/app-adsl-payment/div/app-adsl-bbs-payment/div/div/app-adsl-payment-options/div[2]/div/div/div/div[2]/p[2]\n')),10000000);
      await   driver.findElement(By.xpath("      /html/body/ecare-app/div/main/div/div/div/app-adsl-payment/div/app-adsl-bbs-payment/div/div/app-adsl-payment-options/div[2]/div/div/div/div[3]/button\n")).click();
     //console.log(driver.switchTo().alert().getText());
      let w4 = await driver.wait(until.elementLocated(By.xpath('      /html/body/ecare-app/div/main/div/div/div/app-adsl-payment/div/app-adsl-bbs-payment/div/div/toast-container/div/div\n')),100000);
      console.log(await  driver.findElement(By.xpath(" /html/body/ecare-app/div/main/div/div/div/app-adsl-payment/div/app-adsl-bbs-payment/div/div/toast-container/div/div")).getText());

      //await driver.wait(until.titleIs('TE ecare'), 10000);
  } finally {
    await driver.quit();
  }
})();