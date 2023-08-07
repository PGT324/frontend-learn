import axios from "axios";

export default function RestGetPage() {

    function onClickAsync() {
        const result = axios.get('https://koreanjson.com/posts/1')
        console.log(result)
    }

    // async function onClickSync() {
    //     const result = await axios.get('https://koreanjson.com/posts/1')
    //     console.log(result)
    //     console.log(result.data.title)
    // }

    const onClickSync = async () => {
        const result = await axios.get('https://koreanjson.com/posts/1')
        console.log(result)
        console.log(result.data.title)
    }

    return (
        <div>
            <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
            <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
        </div>
    )
}