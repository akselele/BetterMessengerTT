import json
from selenium import webdriver
from time import sleep
from selenium.webdriver.common.keys import Keys

jsondict = []
    
driver = webdriver.Chrome()

driver.get('https://betterttv.com/emotes/top')

sleep(10)
html = driver.find_element_by_tag_name('html')

maindiv = driver.find_elements_by_xpath('//*[@id="root"]/div/div[1]/div/div/div[2]/div/div[2]/div[1]/div')
for i in range(1000):
    try:
        x = str(i+1)
        src = driver.find_element_by_xpath('//*[@id="root"]/div/div[1]/div/div/div[2]/div/div[2]/div[1]/div/a['+ x + ']/img').get_attribute("src")
        name = driver.find_element_by_xpath('//*[@id="root"]/div/div[1]/div/div/div[2]/div/div[2]/div[1]/div/a[' + x +']/div[1]').text
        jsondict.append({"emote":name, "link":src})
    except:
        html.send_keys(Keys.END)

with open('emoteLib.json', 'w') as f:
    json.dump(jsondict, f)S