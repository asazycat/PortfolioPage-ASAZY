import React from "react";


export default function Projects () {
    return (
        <>
        <h1 id="projects">Projects</h1>
        <div className="Projects">
            <div className="eachProject">
                <h2>https://verdant-kataifi-539103.netlify.app/</h2>
                <div className="desImgFormat">
                <p>Project description</p>
                <img src="../src/imgs/articlesNCNews.png" alt="" width="800" height="600"/>
                </div>
            </div>
            <div className="eachProject">
                <h2>Project title</h2>
                <div className="desImgFormat">
                <p>Project description</p>
                <img src="../src/imgs/codeClanDashBoard.png" alt=""  width="800" height="600"/>
                </div>
            </div>
            <div className="eachProject">
                <h2>https://gamercore-ec2e2.web.app/</h2>
                <div className="desImgFormat">
                <p>Project description</p>
                <img src="../src/imgs/GamerCoreFeed.png" alt=""  width="800" height="600"/>
                </div>
            </div>
        

        </div>
        </>
    )
}