import React from 'react'
import styles from "../assets/styles.module.css"
import { SortableContainer, SortableElement } from "react-sortable-hoc"
const Image = SortableElement(({ item }) => <div><img className={styles.image} src={item} alt="images" /></div>)
const imageGrid = SortableContainer(({ items }) => {
    return (
        <div className={styles.gridContainer}>
            <div className={styles.galleryGrid}>
                {items.map((item, key) => <Image item={item} index={key} key={key} />)
                }
            </div>
        </div>
    )
})

export default imageGrid
