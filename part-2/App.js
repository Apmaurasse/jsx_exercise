const App = () => (
    (
        <div>
           <Tweet username="@johnny" name="John" date="2/28/2024" message="My first tweet."/>
           <Tweet username="@benny" name="Ben" date="12/28/2024" message="Nice day outside."/>
           <Tweet username="@jane" name="Janice" date="1/1/2025" message="Happy New Year!"/>
        </div>
    )
)

ReactDOM.render (<App/>, document.getElementById("root"))