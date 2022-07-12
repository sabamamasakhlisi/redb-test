import React from "react";
import styles from './app.module.scss'
import ContentLayout from "../../layouts/StaticLayout/ContentLayout";
import FormLayout from "../../layouts/FormLayout/FormLayout";


const AppContainer = (props) => {
    return (
        <main className={styles['main-cotaniner']}>
            <ContentLayout />
            <FormLayout />
        </main>
    )
}

export default AppContainer;