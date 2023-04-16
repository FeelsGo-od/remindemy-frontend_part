import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addUsersTopic } from "./usersSlice";

export default function AddTopicById ({id}) {
    const [text, setText] = useState('')
    const [fileList, setFileList] = useState(null)
    const [link, setLink] = useState('')

    const dispatch = useDispatch()

    const handleFileChange = (e) => {
        setFileList(e.target.files)
    }

    const files = fileList ? [...fileList] : [];

    const handleSubmit = (e) => {
        e.preventDefault();

        // if (!fileList) return;

        const imagesData = new FormData()
        files.forEach((file, i) => {
            imagesData.append(`file-${i}`, file, file.name)
        })

        dispatch(addUsersTopic({id, text, link}))
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form mg-none">
                <div className="form-block form-input">
                    <label htmlFor="text">Enter the text u want to remember: </label>
                    <textarea onChange={(e) => setText(e.target.value)} value={text} name="text" rows="15" cols="53"></textarea>
                </div>
                <div className="form-block form-input">
                    <label htmlFor="images">Add images u want to study later: </label>
                    <input type="file" onChange={handleFileChange} accept="image/*" multiple name="images" id="images" />
                    <ul>
                        {/* {fileList.map((file) => (
                                <p>{file}</p>
                            )
                        )} */}
                    </ul>
                </div>
                <div className="form-block form-input">
                    <label htmlFor="link">Add the link to repeat it later: </label>
                    <input onChange={(e) => setLink(e.target.value)} type="text" name="link" id="link" />
                </div>
                <div className="form-block">
                    <input className="button" type="submit" value="Add Topic" />
                </div>
            </form>
        </>
    )
}