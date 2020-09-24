

const {Builder, By, Key, until,WebElement} = require('selenium-webdriver');

let chrome = require('selenium-webdriver/chrome');

(async function example() {
 //let driver = await new Builder().forBrowser('chrome').build();
   let driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().headless())
        .build();
    let result;

    try {
        await driver.get('https://my.te.eg/#/anonymous/AdslPayment?lang=en');
        // first step

            driver.findElement(By.name('pAreaCode')).sendKeys('Alexandria', Key.RETURN);
            await driver.findElement(By.name('pPhoneNo')).sendKeys('5555409', Key.RETURN);
            driver.findElement(By.name('pEmail')).sendKeys('a@gmail.com', Key.RETURN);
            try{
                let w0 = await driver.wait(until.elementLocated(By.xpath('/html/body/ecare-app/div/main/div/div/div/toast-container/div/div/div[2]/span\n')), 1000);
                result= await driver.findElement(By.xpath("/html/body/ecare-app/div/main/div/div/div/toast-container/div/div/div[2]/span\n")).getText();
            }
           catch (ex) {
               //waiting time
               let w1 = await driver.wait(until.elementLocated(By.xpath('/html/body/ecare-app/div/main/div/div/div/app-adsl-payment/div/app-adsl-bbs-payment/div/div/div[3]/div/div[1]/span')), 100000);

               //second step
               await driver.findElement(By.xpath("/html/body/ecare-app/div/main/div/div/div/app-adsl-payment/div/app-adsl-bbs-payment/div/div/app-adsl-payment-options/div[1]/form/div[2]/span/label")).click();
               //waiting time
               let w2 = await driver.wait(until.elementLocated(By.id('TXT_VoucherNumber')));
               //third step
               driver.findElement(By.id('TXT_VoucherNumber')).sendKeys('0868271562075829', Key.RETURN);
               await driver.findElement(By.xpath("/html/body/ecare-app/div/main/div/div/div/app-adsl-payment/div/app-adsl-bbs-payment/div/div/app-adsl-payment-options/div[1]/form/div[3]/div[3]/label/input\n")).click();
               await driver.findElement(By.xpath("/html/body/ecare-app/div/main/div/div/div/app-adsl-payment/div/app-adsl-bbs-payment/div/div/app-adsl-payment-options/div[1]/form/div[4]/button[1]\n")).click();
               //waiting time
               let w3 = await driver.wait(until.elementLocated(By.xpath('/html/body/ecare-app/div/main/div/div/div/app-adsl-payment/div/app-adsl-bbs-payment/div/div/app-adsl-payment-options/div[2]/div/div/div/div[2]/p[2]\n')));
               // fourth step
               await driver.findElement(By.xpath("/html/body/ecare-app/div/main/div/div/div/app-adsl-payment/div/app-adsl-bbs-payment/div/div/app-adsl-payment-options/div[2]/div/div/div/div[3]/button\n")).click();
               //failed payment result
               try {
                   let w4 = await driver.wait(until.elementLocated(By.xpath('/html/body/ecare-app/div/main/div/div/div/app-adsl-payment/div/app-adsl-bbs-payment/div/div/toast-container/div/div')), 1000);
                   result = await driver.findElement(By.xpath("/html/body/ecare-app/div/main/div/div/div/app-adsl-payment/div/app-adsl-bbs-payment/div/div/toast-container/div/div")).getText();
               } catch (ex) {
                   //  console.log("wrong card exception", ex.message);
               }

               //successfull paymen ressult
               try {
                   let w5 = await driver.wait(until.elementLocated(By.xpath('/html/body/ecare-app/div/main/div/div/div/app-adsl-payment/div/app-adsl-bbs-payment/div/div/app-adsl-payment-options/div[4]/div/div/h3')), 1000);
                   result = await driver.findElement(By.xpath("/html/body/ecare-app/div/main/div/div/div/app-adsl-payment/div/app-adsl-bbs-payment/div/div/app-adsl-payment-options/div[4]/div/div/h3")).getText();

               } catch (ex) {
                   // console.log("right card exception", ex.message);
               }


               // await driver.wait(until.titleIs('TE ecare'), 10000000000);
           }

    }

  finally {
        console.log(result);
        await driver.quit();
  }
})();