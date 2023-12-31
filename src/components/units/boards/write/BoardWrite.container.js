import { useMutation } from "@apollo/client"
import { useState } from "react"
import BoardWriteUI from './BoardWrite.presenter'
import { myGraphqlSetting } from "./BoardWrite.queries"

export default function BoardWrite() {


    const [나의함수] = useMutation(myGraphqlSetting)

    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: {   // variables === $
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result)
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }
    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }
    const onChangeContents = (event) => {
        setContents(event.target.value)
    }

    return (
        <BoardWriteUI
            aaa={onClickSubmit}
            bbb={onChangeWriter}
            ccc={onChangeTitle}
            ddd={onChangeContents}
        />
    )
}