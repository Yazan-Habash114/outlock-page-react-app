import ListItem from "./ListItem";
import styles from "./styles/Navigation.module.css";
import Icon from "./Icon";
const Navigation = (props) => {
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
            color:'undo-link'
        }
    ]
    return (
        <nav>
            <ul className={`${styles["nav-ul"]}`} >
                {
                    myArray.map((item) => {
                        return <li key={item.number}><ListItem title={item.title} undoColor={item.color} /></li>
                    })
                }
                <li><a href="kk"><Icon title="More" /></a></li>
            </ul>
        </nav>
    )
}
export default Navigation;