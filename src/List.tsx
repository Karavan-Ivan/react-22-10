import './List.scss'

type Props = {}

const List = (props: Props) => {
    let data = false
    return (
        <>
            <ul>
                <li>list</li>
                <li>list</li>
                <li>list</li>
            </ul>
            <p className={`article-desc ${data ? 'content' : 'test'}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                dolor nulla similique veniam voluptatum ratione maiores totam
                sint accusantium id cumque nemo earum quisquam itaque? Cumque
                ipsa aperiam consequatur quis!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto accusamus, consectetur animi pariatur temporibus
                illum quaerat voluptatum sequi error, aspernatur beatae id magni
                amet ea consequatur, adipisci unde exercitationem laboriosam?
            </p>
        </>
    )
}
export default List
