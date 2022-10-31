import { useEffect, useState } from "react"
import { useCardContext } from "../../context/car"
import styles from "./paginationFooter.module.scss"


// offset (currentPage - 1) * 10


export function PaginationFooter() {

    const { carList } = useCardContext()

    const [currentPage, setCurrentPage] = useState(1)


    useEffect(() => {
        console.log({ currentPage })

    }, [currentPage])

    function pageCount() {
        return Math.ceil(carList?.totalCars / 10)
    }

    return (

        <div className={styles.pagination}>
            <span onClick={() => setCurrentPage(1)}> {"<<"} </span>
            <span onClick={() => setCurrentPage(currentPage == 1 ? currentPage : currentPage - 1)}>{"<"}</span>
            {
                Array(pageCount()).fill(null).map((page, index) => {
                    return <span onClick={() => setCurrentPage(index + 1)} className={currentPage == index + 1 ? styles.active : ""}>{index + 1}</span>
                })
            }
            <span onClick={() => setCurrentPage(currentPage == pageCount() ? currentPage : currentPage + 1)}>{">"}</span>
            <span onClick={() => setCurrentPage(pageCount())}>{">>"}</span>
        </div>
    )
}