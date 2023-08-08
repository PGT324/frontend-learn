import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_BOARD = gql`
        query fetchBoard($number:Int){
            fetchBoard(number:$number){
                writer
                title
                contents
                like
            }
        }
    `

export default function StaticRoutingMovedPage() {

    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            number: Number(router.query.qqq)
        }
    })
    console.log(data)

    return (
        <div>
            <div>{router.query.qqq}번 페이지 이동완료!</div>
            <div>작성자: {data?.fetchBoard?.writer}</div>
            <div>제목: {data?.fetchBoard?.title}</div>
            <div>내용: {data?.fetchBoard?.contents}</div>
        </div>
    )
}