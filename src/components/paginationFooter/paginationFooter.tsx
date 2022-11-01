import { useEffect, useState } from "react"
import { useCardContext } from "../../context/car"
import styles from "./paginationFooter.module.scss"


// offset (currentPage - 1) * 10


export function PaginationFooter() {

    const { carList, getCarsPaginated, setCurrentPage, currentPage } = useCardContext()

    const limit = 12

    useEffect(() => {
        changePage(1)
    }, [])




    async function changePage(pageToChange: number) {
        const offset = (pageToChange - 1) * limit
        setCurrentPage(pageToChange)
        await getCarsPaginated(offset, limit)
    }



    function pageCount() {
        if (!carList) return 0
        return Math.ceil(carList?.totalCars / limit)

    }

    return (

        <div className={styles.pagination}>
            <span onClick={() => changePage(1)}> {"<<"} </span>
            <span onClick={() => changePage(currentPage == 1 ? currentPage : currentPage - 1)}>{"<"}</span>
            {
                Array(pageCount()).fill(null).map((page, index) => {
                    return <span onClick={() => changePage(index + 1)} className={currentPage == index + 1 ? styles.active : ""}>{index + 1}</span>
                })
            }
            <span onClick={() => changePage(currentPage == pageCount() ? currentPage : currentPage + 1)}>{">"}</span>
            <span onClick={() => changePage(pageCount())}>{">>"}</span>
        </div >
    )
}