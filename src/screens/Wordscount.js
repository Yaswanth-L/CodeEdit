import {TextEditor} from "./Editor"
import useLocalStorage from '../hooks/useLocalStorage'
function WordsCount(){
    const [code,setCode]=useLocalStorage("wordscount",'')
    return(
            <div className="notes" id="home">
                <div style={{width:"50%",marginLeft:"20%",marginTop:"2%"}}>
                <TextEditor 
                title={"WordPad for word count"}
                 value={code}
                 onChange={setCode}
                /></div>
                <div className="cards">
                    <div className="container">
                        <h2 style={{color:"black"}}>Number of Characters:  {code.length}</h2>
                        <h2  style={{color:"black"}}>Number of Words: {code.split(" ").length-1}</h2>
                    </div>
                </div>
            </div>
    )
}
export default WordsCount;