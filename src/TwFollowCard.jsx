import { useState } from "react";

export function TwFollowCard({ userName ='unkwnown_user', name }) {
    const [isFollowing, setIsFollowing] = useState(false);
    const textFollowButton = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassNames = isFollowing ? 'tw-followCard__button--following' : 'tw-followCard__button--follow';

    const handleFollowClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className="tw-followCard">
            <header>
                <img src="https://unavatar.io/instagram/andresrobayo7" alt="avatar de arbyl" />
                <div>
                    <strong>{name}</strong>
                    <span>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassNames} onClick={handleFollowClick}>
                    <span className="tw-follow-card-text">
                    {textFollowButton}
                    </span>
                    <span className="tw-follow-card-StopFollow">
                        Dejar de seguir
                    </span>
                </button>
            </aside>
        </article>
    );
}