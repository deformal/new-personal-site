import React from "react";

type TlandingPageProps = {
    imageref: string;
};
export default function Profile(props: TlandingPageProps) {
    const imageHref = props.imageref;
    return (
        <div className="profilediv">
            <div className="image">
                <img src={imageHref} alt=""/>
            </div>
            <div className="info">
                <div className="greeting">Hey there 👋 I'm Saurabh Jainwal 👨‍💻</div>
                <div className="sub_greeting">
                    Just a passionate individual who love to code 💻 and solve problems
                    with it. Love ❤️ to cook and play cricket 🏏.
                </div>
            </div>
        </div>
    );
}
