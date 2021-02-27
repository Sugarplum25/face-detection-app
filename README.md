# Face detection app
---------------------
https://iknowyourface.herokuapp.com/

Приложение face-detection находит и выделяет рамкой лица людей на фотографии. Заходите, регистрируйтесь, 
загружайте ссылку на фото и узнайте, люди ли изображены на фото. Счетчик хранит количество распознанных вами снимков. 
При разработке использовался сервис по машинному обучению [Clarifai API](https://www.clarifai.com/models/face-detection "link to the api docs"), модель распознавания лиц Armada Predict Face Detection. 

**Использованные в проекте технологии:**
* ReactJS 
* Express.js ([репозиторий живет тут](https://github.com/Sugarplum25/face-detection-api))
* bcrypt-nodejs
* PostgreSQL
* Knex.js

Демо проекта:
![Face-detection-demo](https://i.ibb.co/DtpTr9t/Gifius-ru.gif)