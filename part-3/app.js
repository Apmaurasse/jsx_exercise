const App = () => (
    (
        <div>
            <Person name="CalvinHobbes" age="12" hobbies={["Running", "Playing with tiger.", "Mischief"]} />
            <Person name="Perry" age="40" hobbies={["Espionage", "Martial Arts.", "Hiding secret identity."]} />
        </div>
    )
)

ReactDOM.render (<App/>, document.getElementById("root"))