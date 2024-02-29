const Person = (props) => {
    let { name, age, hobbies } = props;


    if (name.length > 8) {
        name = name.substring(0, 8);
    }

    let reply;
    if (age > 18) {
        reply = <h3>Please go vote!</h3>;
    } else {
        reply = <h3>You must be 18.</h3>;
    }

    return (
        <div>
            <p>Learn some information about {name}.</p>
            {reply}
            <ul>{hobbies.map(h => <li>{h}</li>)}</ul>
        </div>
    );
};

