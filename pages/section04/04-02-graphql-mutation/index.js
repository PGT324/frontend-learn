import { gql, useMutation } from "@apollo/client"

export default function GraphqlMutationPage() {

    const myGraphqlSetting = gql`
        mutation {
            createBoard(writer:"철수", title:"제목", contents:"내용"){
                _id
                number
                message
            }
        }
    `


    const [나의함수] = useMutation(myGraphqlSetting)

    const onClickSubmit = async () => {
        const result = await 나의함수()
        console.log(result)
    }

    return (
        <div>
            <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
        </div>
    )
}