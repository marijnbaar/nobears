import React from 'react';
import './Card.css'
import Image from "react-bootstrap/Image"
import dots from "../src/assets/dots.svg"
import heart from "../src/assets/heart.svg"
import download from "../src/assets/download.svg"

function Card({ src, closeCard }) {
    return (
            <div className="card-container" onClick={closeCard}>
                <div className="welcome-cor">
                    <div className="card-header">
                        <Image
                            src={dots}
                            width="41"
                            height="9"
                            className="dots"
                            alt="dots"
                        />
                        <Image
                            src={heart}
                            width="33"
                            height="29"
                            className="heart"
                            alt="heart"
                        />
                        <Image
                            src={download}
                            width="35"
                            height="29"
                            className="download"
                            alt="download"
                        />
                        <button className="save">Bewaren</button>
                    </div>
                    <img className="cover" src={src} alt="mountains" />
                    <div className="content-container">
                        <div className="card-text">
                            <h2 className="welcome">Aangenaam,</h2>
                            <h1 className="name">Cor Hunter</h1>
                            <p className="lorem-ipsum">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus augue lacus, tristique sit amet tellus in, varius porttitor est.
                                Aliquam erat volutpat. Vivamus ac aliquet libero. Fusce dapibus, enim vitae congue pulvinar, augue eros imperdiet justo, et facilisis diam lectus non velit.
                                Donec facilisis viverra fringilla. In est orci, ullamcorper eget tincidunt nec, ornare quis elit.
                                Morbi arcu eros, ullamcorper eget odio sed, euismod sollicitudin eros. Proin vitae suscipit purus, nec blandit tellus. Vivamus porta sapien magna,
                                ac molestie ex aliquet nec. Nulla facilisi. Donec vitae suscipit arcu. Donec convallis tincidunt pellentesque. Phasellus tincidunt nibh a nulla vulputate cursus.
                </p>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Card;