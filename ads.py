from selenium import webdriver

# location to download file
download_dir = '/Users/alice/Desktop/'

chrome_options = webdriver.ChromeOptions()
prefs = {'download.default_directory' : download_dir}
chrome_options.add_experimental_option('prefs', prefs)
driver = webdriver.Chrome(options=chrome_options)
driver.get('https://www.facebook.com/ads/library/report/')

button = driver.find_element_by_css_selector('.\_7vio')
button.click()

#saves a zip file
