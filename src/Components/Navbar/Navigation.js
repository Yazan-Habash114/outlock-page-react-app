import ListItem from "./ListItem";
import "./styles/Navigation.css";
import Icon from "./Icon";
const Navigation =(props)  =>{
    const myArray = [
        {
          number: 1,
          title: 'Delete',
        },
        {
          number: 2,
          title: 'Archive',
        },
        {
          number: 3,
          title: 'Junk',
        },
        {
            number: 4,
            title: 'Sweep',
        },
        {
            number: 5,
            title: 'Move to',
        },
        {
            number: 6,
            title: 'Categorize',
        },
        {
            number: 7,
            title: 'Snooze',
        },
        {
            number: 8,
            title: 'Undo',
        }
      ]
    return(
        <nav>
            <ul className="nav-ul" >
            {
                myArray.map((item) => {
                    return <li key={item.number}><ListItem title={item.title}/></li> })
            }
            <li><a href="kk"><Icon title="More" /></a></li>
            </ul>
        </nav>
    ) 
}
export default Navigation;