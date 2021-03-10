import './chatWindow.css';

function ChatWindow() {

    return (
        <div className="chatcontent">
            <div className="messagecontent">

            </div>
            <div className="chatinput">
            <input type="text" placeholder="escribir texto aquí" />
            <button>send</button>
            </div>
        </div>
    );
};
export default ChatWindow;
