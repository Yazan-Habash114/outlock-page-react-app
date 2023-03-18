const Icon = ({ title }) => {
    return <img style={{ marginRight: '5px' }} src={require('../../images/' + title + '.png')} alt="icon" className='image' />
}
export default Icon;