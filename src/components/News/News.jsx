import React from "react";

const News = () => (
    <div className="news">
        <h1>Добавить новость</h1>
        <p>Введите текст новости, а также приложите изображение (размер: 270х270px)</p>
        <textarea
            className="news-text"
            placeholder="Введите текст новости"/>
    </div>
);

export default News;