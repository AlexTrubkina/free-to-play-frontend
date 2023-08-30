import React from "react";

import { OneGameType } from "../../../types/types";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ScreenshotsCarousel = ({
    oneGame,
}: {
    oneGame: { game: OneGameType };
}) => {
    let images = [{"original": "", "thumbnail": ""}]
    if (oneGame.game.screenshots) {
        images = oneGame.game.screenshots.map((link) => ({"original": link.image, "thumbnail": link.image}))
    }
    
    return <ImageGallery items={images} />;
};

export default ScreenshotsCarousel;
