import { useQuery, gql } from "@apollo/client"

const FETCH_BOARD = gql`
        query {
            fetchBoard(number:7){
                writer
                title
                contents
                like
            }
        }
    `

export default function StaticRoutingMovedPage() {

    const { data } = useQuery(FETCH_BOARD)
    console.log(data)

    return (
        <div>
            <div>3번 페이지 이동완료!</div>
            <div>작성자: {data?.fetchBoard?.writer}</div>
            <div>제목: {data?.fetchBoard?.title}</div>
            <div>내용: {data ? data.fetchBoard?.contents : '로딩중...'}</div>
        </div>
    )
}