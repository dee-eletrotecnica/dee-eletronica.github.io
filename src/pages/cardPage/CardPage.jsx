import pages from "../../../paginas.yaml"
import { CardPageStyles } from "./styles"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import remarkGfm from "remark-gfm"
import { Header } from "../../components/header"
import { useState, useEffect } from "react"

export const CardPage = ({ content, page }) => {

    return (
        <CardPageStyles>
            <Header />
            <div className="wrapper">
                <div className="container">
                    <h1>{content.title}</h1>
                    <div className="separator"></div>
                    <article>{content.description}</article>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{page}</ReactMarkdown>
                </div>
            </div>
        </CardPageStyles>
    )
}