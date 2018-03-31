const webdriver = require('selenium-webdriver')

const { Author, Genre } = require('../models')

const { By } = webdriver

const authorElement = ['div.elementList > a', 'a.mediumText actionLinkLite']

class AuthorScraper {
  constructor (config) {
    this.driver = new webdriver.Builder()
      .forBrowser('chrome')
      .usingServer('http://localhost:4444/wd/hub')
      .build()
  }

  async goodReadsScrapeByCss (url, element) {
    return new Promise((resolve) => {
      this.driver.get(url)
      const els = this.driver.findElements(By.css('div.elementList > a'))
         const promises = els.map((el, index) => 
            webdriver.promise.fulfilled(el)
              .then(pElem => pElem.getAttribute('href').then((text) => {
              // eslint-disable-next-line
              const [all, goodreadsId, name] = text.match(/(\d+)\.(\D+)/)

                Author.findOneAndUpdate({ goodreadsId }, { name }, {
                  upsert: true
                })
              }))
          )
        })
    })
  }

  getCurrentGenreAuthors (genre) {
    console.log(genre.name)
    const url = `https://www.goodreads.com/genres/giveaways/${genre.name}`
    return new Promise((resolve) => {
      this.driver.get(url)
      this.driver.findElements(By.css('a.authorName')).then((els) => {
        const promises = els.map((el, index) =>
          webdriver.promise.fulfilled(el)
            .then(pElem => pElem.getAttribute('href').then((text) => {
              console.log(text)
              // eslint-disable-next-line
              const [all, goodreadsId, name] = text.match(/(\d+)\.(\D+)/)
              return Author.findOneAndUpdate({ goodreadsId }, { name }, {
                upsert: true
              })
            })))
        Promise.all(promises).then(resolve)
      })
    })
  }

  getGenres (page) {
    return new Promise((resolve) => {
      this.driver.get(`https://www.goodreads.com/genres/list`)
      this.driver.findElements(By.css('a.mediumText actionLinkLite')).then((els) => {
        els.forEach((el, index) => {
          webdriver.promise.fulfilled(el)
            .then(pElem => pElem.getAttribute('href').then((text) => {
              const name = text.match(/genres\/(\D+)/)[1]
              // eslint-disable-next-line
              Genre.create({name})
              console.log(name)
            }))
        })
      })
    })
  }

  __quit () {
    return this.driver.quit()
  }
}
const authorScraper = new AuthorScraper()

/**/

module.exports = authorScraper
