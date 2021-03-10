import './ModalShift.css';


function ModalShift({visible}) {


 
    return (
      <>
    
    <div className={`modal ${visible ? 'show-modal' : ''}`}>
        <div className="modal-content">
            <span className="close-button" >&times;</span>
            <h1>Hello, I am a modal!</h1>
        </div>
    </div>
      </>
    );
  }



export default ModalShift;
