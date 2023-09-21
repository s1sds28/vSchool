
import '../index.css'

const Friend = (props) => {
    return (
        <div className='friend-card'>
            <p>Name: { props.name }</p>
            <p>Age: { props.age }</p>
        </div>
    )

}


export default Friend;