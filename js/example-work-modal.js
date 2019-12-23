import React from 'react';

class ExampleWorkModal extends React.Component {

  render() {
    let example = this.props.example;
    let modalClass = this.props.open ? 'modal--open' : 'modal--closed';

    return (
      <div className={"background--skyBlue " + modalClass}>
        <span className="color--cloud modal__closeButton"
        onClick={this.props.closeModal}>
          <i className="fa fa-window-close-o"></i>
        </span>
        <img alt={ example.image.desc }
             className="modal__image"
             src={ example.image.src }/>
        <div className="color--cloud modal__text">
          <h1 className="modal__title" align="center">
            { example.title }
          </h1>
          
           <br></br>   
          <p className="modal__description" align="center">
            { example.desc }
          </p>
<br></br>
          <a className="color--skyBlue modal__link" align="center"
             href={ example.href }>
            Check it out
          </a>
        </div>
      </div>
    )
  };
};

export default ExampleWorkModal;
