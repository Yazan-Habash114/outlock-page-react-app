const Icon = ({title}) => {
    return <img src={require('../../images/' + title + '.png')} alt="icon" className='image' />
}
export default Icon;