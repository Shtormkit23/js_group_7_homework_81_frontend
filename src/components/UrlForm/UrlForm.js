import React, {useState} from "react";
import "./UrlForm.css";
import {useDispatch, useSelector} from "react-redux";
import {getShortenUrl} from "../../store/actions/urlActions";

const UrlForm = () => {
    const [state, setState] = useState({
        originalUrl: ""
    });

    const shortUrl = useSelector(state => state.url.shortUrl);
    const dispatch = useDispatch();

    const submitFormHandler = e => {
        e.preventDefault();
        const newUrl = {...state};
        dispatch(getShortenUrl(newUrl));
    };

    const inputChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setState(prevState => {
            return {...prevState, [name]: value};
        });
    };

    return (
        <>
                <h2 className='AddFormTitle'>Shorten your link!</h2>
                <form onSubmit={submitFormHandler} className='AddForm'>
                    <h4 className='InputText'>originalUrl:</h4>
                    <input
                        className="Input"
                        type="text"
                        id="originalUrl"
                        name="originalUrl"
                        value={state.originalUrl}
                        onChange={inputChangeHandler}
                    />
                    <div className='buttonForm'>
                        <button className='button'><span>Shorten!</span></button>
                    </div>
                    {shortUrl && (
                        <div>
                            <p>
                                Your link now looks like this:
                            </p>
                            <a href={"http://localhost:8001/links/" + shortUrl}>{shortUrl}</a>
                        </div>
                    )}
                </form>
            </>
    );
};

export default UrlForm;