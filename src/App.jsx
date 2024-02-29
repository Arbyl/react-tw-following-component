import './TwFollowCard.css';
import { TwFollowCard } from './TwFollowCard';

export function App() {
    const users =[
        {userName: "arbyl", name: "Andres Robayo", isFollowing: false},
        {userName: "janexd", name: "Jane Doe" , isFollowing: true},
        {userName: "krause_maww", name: "Krause" , isFollowing: true}
    ]
       
    return (
        <section className="App">
            <h1 className='tw-follow-card-Title'>A quien seguir</h1>
            <section className="App__users">
                {
                    users.map((user) => (
                    <TwFollowCard 
                        key={user.userName} 
                        userName={user.userName} 
                        name={user.name} 
                        isFollowing={user.isFollowing} />
                    ))
                }
            </section>
        </section>
    );
}