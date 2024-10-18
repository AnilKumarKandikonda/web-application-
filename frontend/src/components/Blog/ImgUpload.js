import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUpload,faEdit
} from "@fortawesome/free-solid-svg-icons";

const ImgUpload = ({ onChange, src }) => (
    <label htmlFor="blog-photo-upload" className="blog-custom-file-upload fas">
        <div className="projectb-blog-photoelement">
            <div className="projectb-blog-photoedit">
                <img for="blog-photo-upload" className="projectb-blog-imageupload" src={src} alt="photo image" />
            </div>
        </div>
        <div className="projectb-blog-editiconbg">
            {/* <FontAwesomeIcon icon={faEdit} className="projectb-blog-editicon" /> */}
            <FontAwesomeIcon icon={faUpload} className="projectb-blog-editicon" />
        </div>

        <input id="blog-photo-upload" className="blog-file-upload-input" type="file" onChange={onChange} hidden />
    </label>
);

export default ImgUpload;