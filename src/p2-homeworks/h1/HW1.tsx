import React from "react";
import styles from './Message.module.css'

const messageData = {
    avatar: "https://avatarko.ru/img/kartinka/2/zhivotnye_kot_prikol_1767.jpg",
    name: "Artem",
    message: "Npm start нажимал?",
    time: "22:00",
};


function HW1() {
    return (
        <div>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
        </div>
    );
}

type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

export const Message = (props: MessageDataType) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <img src={props.avatar} alt="I'm" className={styles.photo}/>
            </div>
            <div className={styles.message}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.messageValue}>{props.message}</div>
                <div className={styles.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default HW1;
