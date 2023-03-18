const Icon = (props) => {
    return <img src={require('../../images/' + props.title + '.png')} alt="icon" className='image' />
}
export default Icon;