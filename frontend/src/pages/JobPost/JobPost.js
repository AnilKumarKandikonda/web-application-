import React, { useState, useRef, useEffect } from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import { Container } from "reactstrap";

const JobPost = () => {
    const editorRef = useRef(null);
    const [content, setContent] = useState();

    const [boldActive, setBoldActive] = useState(false);
    const [italicActive, setItalicActive] = useState(false);
    const [underlineActive, setUnderlineActive] = useState(false);
    const [bulletActive, setBulletActive] = useState(false);

    const handleCommand = (command, value = null) => {
        document.execCommand(command, false, value);
    };

    const handleToggleBold = () => {
        setBoldActive(!boldActive);
        handleCommand("bold");
    };

    const handleToggleItalic = () => {
        setItalicActive(!italicActive);
        handleCommand("italic");
    };

    const handleToggleUnderline = () => {
        setUnderlineActive(!underlineActive);
        handleCommand("underline");
    };

    const handleToggleBullet = () => {
        setBulletActive(!bulletActive);
        handleCommand("insertUnorderedList");
    };

    const handleToggleHighlight = () => {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);

        // Check if the selected text is already highlighted
        const parentNode = range.commonAncestorContainer.parentNode;
        const isHighlighted = parentNode.style.backgroundColor === "yellow";

        if (isHighlighted) {
            parentNode.style.backgroundColor = ""; // Remove the highlight
        } else {
            const span = document.createElement("span");
            span.style.backgroundColor = "yellow";
            range.surroundContents(span);
        }
    };


    const handleBoldClick = () => {
        const selection = window.getSelection();
        console.log(selection)
        const range = selection.getRangeAt(0);
        // console.log(range);
        if (editorRef != null) {
            if (editorRef.current.contains(range.commonAncestorContainer)) {
                const selectedText = range.toString();
                if (selectedText !== '') {
                    const boldElement = document.createElement('b');
                    boldElement.textContent = selectedText;
                    range.deleteContents();
                    range.insertNode(boldElement);
                }


            }
        }


    };
    const handleContentChange = (event) => {
        console.log(event.target.innerHTML);
        setContent(event.target.innerHTML);
    };
    console.log(content);
    return (
        <Aux>
            <div className="projectb-general-main">
                <section className="section">
                    <Container className="projectb-general-container">
                        <div>
                            <button onClick={handleBoldClick}>Bold</button>

                            <div
                                ref={editorRef}
                                contentEditable
                                onInput={handleContentChange}
                                style={{
                                    border: '1px solid #ccc',
                                    minHeight: '100px',
                                    padding: '8px'
                                }}
                                dangerouslySetInnerHTML={{ __html: content }}
                            />


                        </div>
                        {/* <div>
                            <ul dangerouslySetInnerHTML={{ __html: `<li>${value.replace(/\n/g, '</li><li>')}</li>` }}></ul>
                        </div> */}
                        <div dangerouslySetInnerHTML={{ __html: content }} />

                    </Container>
                </section>
            </div>
        </Aux>
    )
}

export default JobPost;