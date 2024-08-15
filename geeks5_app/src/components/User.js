import React, { useState } from "react";
import "./User.css";

const User = ({ userInfo }) => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(prevShowMore => !prevShowMore);
    };

    return (
        <div className="user-card">
            <ul className="user-info">
                <li><strong>Имя:</strong> {userInfo.name}</li>
                <li><strong>Email:</strong> {userInfo.email}</li>
                <li><strong>Имя пользователя:</strong> {userInfo.username}</li>
                <li>
                    <button className="toggle-button" onClick={toggleShowMore}>
                        {showMore ? "Скрыть" : "Показать больше"}
                    </button>
                </li>
            </ul>
            {showMore && (
                <div className="user-extra-info">
                    <ul>
                        <li><strong>Телефон:</strong> {userInfo.phone}</li>
                        <li><strong>Веб-сайт:</strong> {userInfo.website}</li>
                        <li><strong>Компания:</strong> {userInfo.company.name}</li>
                        <li><strong>Адрес:</strong> {userInfo.address.street}, {userInfo.address.city}</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default User;