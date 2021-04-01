import React from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";


const ButtonLoader = ({
                          children  = null,
                          disabled  = false,
                          loading   = false,
                          className = null,
                          ...rest
                      })=>{
    function showIcon(){
        return loading ?
            <Spinner animation="grow" role="status" size={'sm'}>
                <span className="sr-only">Loading...</span>
            </Spinner>
            : null;
    }
    const buttonDisabled = disabled || loading;
    className += loading? ' loading' : '';
    return <Button className={className} disabled={buttonDisabled} {...rest}>{showIcon()} {children}</Button>;
}

export default ButtonLoader;
