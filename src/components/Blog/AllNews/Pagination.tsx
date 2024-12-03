import { useLocales } from "@/locales";
import { useRouter } from "next/router";
import React from "react";

interface BlogsProps {
    style: string;
    paging: {
        total: number | string;
        totalPages: number | string;
        currentPage: number | string;
    };
    onChangePage: (index: number) => void
}


const Pagination: React.FC<BlogsProps> = ({ style, paging, onChangePage }) => {
    const router = useRouter();
    const { t } = useLocales(["common", "post"]);

    return (
        <>
            {Number(paging.totalPages) > 0 &&
                <div
                    className={`pagination style-5 color-${style} justify-content-center mt-60`}
                >
                    {Number(paging.currentPage) !== 1 && (
                        <a onClick={() => { onChangePage(Number(paging.currentPage) - 1) }}>
                            <span className="text">
                                <i className="fas fa-chevron-left"></i>
                                {t("common:pagination.prevBtn")}{" "}
                            </span>
                        </a>
                    )}

                    {[...Array(paging.totalPages)].map((_, index) => {
                        const leftTerm = Number(paging.currentPage) <= 5 ? 5 : 2
                        return index < (Number(paging.totalPages) > 8 ? leftTerm : 8) && (
                            <a
                                key={index}
                                onClick={() => { onChangePage(index + 1) }}
                                className={`${index + 1 === Number(paging.currentPage) ? "active" : ""}`}
                            >
                                <span>{index + 1}</span>
                            </a>
                        )
                    }
                    )}

                    {Number(paging.totalPages) > 8 &&
                        <a>
                            <span>...</span>
                        </a>
                    }

                    {(Number(paging.currentPage) > 5 && Number(paging.currentPage) < Number(paging.totalPages) - 4) && (
                        [...Array(paging.totalPages)].map((_, index) => {
                            if (index + 1 >= Number(paging.currentPage) - 2 && index + 1 <= Number(paging.currentPage) + 2) {
                                return (
                                    <a
                                        key={index}
                                        onClick={() => { onChangePage(index + 1) }}
                                        className={`${index + 1 === Number(paging.currentPage) ? "active" : ""}`}
                                    >
                                        <span>{index + 1}</span>
                                    </a>
                                )
                            }
                        }))
                    }

                    {(Number(paging.currentPage) > 5 && Number(paging.currentPage) < Number(paging.totalPages) - 4) &&
                        <a>
                            <span>...</span>
                        </a>
                    }

                    {Number(paging.totalPages) > 8 && [...Array(paging.totalPages)].map((_, index) => {
                        const rightTerm = Number(paging.currentPage) < Number(paging.totalPages) - 4 ? 2 : 5
                        if (index + 1 > Number(paging.totalPages) - rightTerm) {
                            return (
                                <a
                                    key={index}
                                    onClick={() => { onChangePage(index + 1) }}
                                    className={`${index + 1 === Number(paging.currentPage) ? "active" : ""}`}
                                >
                                    <span>{index + 1}</span>
                                </a>
                            )
                        }
                    })}

                    {Number(paging.currentPage) !== paging.totalPages && (
                        <a onClick={() => { onChangePage((Number(paging.currentPage) + 1)) }}>
                            <span className="text">
                                {t("common:pagination.nextBtn")}{" "}
                                <i className="fas fa-chevron-right"></i>
                            </span>
                        </a>
                    )}
                </div>
            }
        </>
    );
};

export default Pagination;
