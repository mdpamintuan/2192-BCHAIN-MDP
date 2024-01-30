import './Biblequiz.css'

function Right(){
return(
<div>
        <h2>Bible Quiz</h2>
    <h3>
        The Bible consists of the Old and New Testaments.<br/> 
        Moses led the Israelites out of Egypt. <br/>
        The Sermon on the Mount is found in the Book of Life.
    </h3>
</div>
);
}

function Wrong(){
return(
<div>
    <h2>Bible Quiz</h2>
        <h3>The Bible consists of the Old and New Testaments.
        <p className="green">Correct!</p>

    </h3>
        <h3>Moses led the Israelites out of Egypt.
        <p className="green">Correct!</p>
    </h3>

    <h3>The Sermon on the Mount is found in the Book of Life.
        <p className="red">Incorrect!</p>
    </h3>
</div>
);
}

function RightorWrong(props){
        const isRight = props.isRight;
    if(isRight){
        return(
    <Right/>
    );
}
    return(
    <Wrong/>
    );
}


export default function Biblequiz(){
    return(
        <div>
            <RightorWrong
            isRight={false}/>
        </div>
    );
}